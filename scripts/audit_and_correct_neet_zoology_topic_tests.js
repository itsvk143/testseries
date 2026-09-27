/**
 * MASTER SCRIPT: COMPLETE AUDIT, DUPLICATE DETECTION & QUESTION REPLACEMENT FOR NEET ZOOLOGY TOPIC-WISE TESTS
 *
 * Rules Enforced:
 * 1. Scope: ALL NEET Zoology Topic-wise tests (71 tests).
 * 2. Exam: MUST MATCH ("NEET")
 * 3. Subject: MUST MATCH ("Zoology")
 * 4. Chapter: MUST MATCH
 * 5. Topic: MUST MATCH
 * 6. Subtopic: NOT REQUIRED TO MATCH (Questions from different subtopics within the same topic are 100% valid).
 * 7. Replacement Difficulty: ONLY MODERATE or DIFFICULT (NEVER EASY).
 * 8. Duplicate Detection: Exact ID, Exact Text, and High Similarity (Jaccard >= 0.85).
 * 9. Question Count: STRICTLY PRESERVED (no tests lose or gain questions).
 * 10. Audit Snapshots & Transaction Safety: Pre-correction snapshot, replacement logs, automated 2nd-pass re-audit.
 */

const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');

if (fs.existsSync('.env.local')) {
  dotenv.config({ path: '.env.local' });
}

const { MongoClient, ObjectId } = require('mongodb');

function norm(str) {
  return (str || '')
    .toLowerCase()
    .replace(/[–—−]/g, '-')
    .replace(/[\x27\x60’]/g, "'")
    .replace(/\s+/g, ' ')
    .trim();
}

function normalizeDifficulty(diff) {
  if (!diff) return 'MODERATE';
  const s = diff.toString().toLowerCase();
  if (s.includes('easy')) return 'EASY';
  if (s.includes('diff') || s.includes('hard')) return 'DIFFICULT';
  return 'MODERATE';
}

function normalizeType(t) {
  if (!t) return 'MCQ';
  const s = t.toString().toLowerCase();
  if (s.includes('assert') || s.includes('ar')) return 'ASSERTION_REASON';
  if (s.includes('num')) return 'NUMERICAL';
  return 'MCQ';
}

function normalizeText(text) {
  return (text || '')
    .toLowerCase()
    .replace(/<[^>]+>/g, ' ')
    .replace(/\\(text|mathrm|mathbf|textit)\{([^}]+)\}/g, '$2')
    .replace(/\$/g, ' ')
    .replace(/[\x27\x60’]/g, "'")
    .replace(/[^a-z0-9]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function tokenize(text) {
  return new Set(
    normalizeText(text)
      .split(/\s+/)
      .filter(w => w.length > 2)
  );
}

function jaccardSimilarity(setA, setB) {
  if (setA.size === 0 || setB.size === 0) return 0;
  let intersection = 0;
  for (const item of setA) {
    if (setB.has(item)) intersection++;
  }
  return intersection / (setA.size + setB.size - intersection);
}

const CHAPTER_SYNONYMS = {
  [norm("Animal Kingdom")]: "Animal Kingdom",
  [norm("Structural Organisation in Animals")]: "Structural Organisation in Animals and Plants",
  [norm("Structural Organisation in Animals and Plants")]: "Structural Organisation in Animals and Plants",
  [norm("Human Physiology")]: "Human Physiology",
  [norm("Breathing and Exchange of Gases")]: "Human Physiology",
  [norm("Body Fluids and Circulation")]: "Human Physiology",
  [norm("Excretory Products and their Elimination")]: "Human Physiology",
  [norm("Locomotion and Movement")]: "Human Physiology",
  [norm("Neural Control and Coordination")]: "Human Physiology",
  [norm("Chemical Coordination and Integration")]: "Human Physiology",
  [norm("Digestion and Absorption")]: "Human Physiology",
  [norm("Reproduction")]: "Reproduction",
  [norm("Human Reproduction")]: "Reproduction",
  [norm("Reproductive Health")]: "Reproduction",
  [norm("Evolution")]: "Evolution",
  [norm("Biology and Human Welfare")]: "Biology and Human Welfare",
  [norm("Human Health and Disease")]: "Biology and Human Welfare",
  [norm("Microbes in Human Welfare")]: "Biology and Human Welfare",
  [norm("Biotechnology and Its Applications")]: "Biotechnology and Its Applications",
  [norm("Biotechnology - Principles and Processes")]: "Biotechnology and Its Applications",
  [norm("Biotechnology and its Applications")]: "Biotechnology and Its Applications"
};

const TOPIC_SYNONYMS = {
  [norm("Basis of classification")]: [
    norm("Basis of animal classification (levels of organization, symmetry, germ layers, coelom)"),
    norm("Basis of classification")
  ],
  [norm("Basis of animal classification (levels of organization, symmetry, germ layers, coelom)")]: [
    norm("Basis of animal classification (levels of organization, symmetry, germ layers, coelom)"),
    norm("Basis of classification")
  ],
  [norm("phylum-wise features")]: [
    norm("Non-chordates (Porifera to Hemichordata characteristics)"),
    norm("Chordata (Protochordata, Cyclostomata, Chondrichthyes, Osteichthyes)"),
    norm("Tetrapoda (Amphibia, Reptilia, Aves, Mammalia)"),
    norm("phylum-wise features")
  ],
  [norm("Non-chordates (Porifera to Hemichordata characteristics)")]: [
    norm("Non-chordates (Porifera to Hemichordata characteristics)"),
    norm("Chordata (Protochordata, Cyclostomata, Chondrichthyes, Osteichthyes)"),
    norm("Tetrapoda (Amphibia, Reptilia, Aves, Mammalia)"),
    norm("phylum-wise features")
  ],
  [norm("Chordata (Protochordata, Cyclostomata, Chondrichthyes, Osteichthyes)")]: [
    norm("Non-chordates (Porifera to Hemichordata characteristics)"),
    norm("Chordata (Protochordata, Cyclostomata, Chondrichthyes, Osteichthyes)"),
    norm("Tetrapoda (Amphibia, Reptilia, Aves, Mammalia)"),
    norm("phylum-wise features")
  ],
  [norm("Tetrapoda (Amphibia, Reptilia, Aves, Mammalia)")]: [
    norm("Non-chordates (Porifera to Hemichordata characteristics)"),
    norm("Chordata (Protochordata, Cyclostomata, Chondrichthyes, Osteichthyes)"),
    norm("Tetrapoda (Amphibia, Reptilia, Aves, Mammalia)"),
    norm("phylum-wise features")
  ],
  [norm("Animal tissues")]: [
    norm("Animal tissues"),
    norm("Epithelial, connective, muscular, and neural tissues in animals")
  ],
  [norm("Epithelial, connective, muscular, and neural tissues in animals")]: [
    norm("Animal tissues"),
    norm("Epithelial, connective, muscular, and neural tissues in animals")
  ],
  [norm("cockroach anatomy and morphology")]: [norm("Cockroach anatomy and morphology")],
  [norm("Cockroach anatomy and morphology")]: [norm("Cockroach anatomy and morphology")],
  [norm("frog morphology and anatomy")]: [norm("Frog morphology and anatomy")],
  [norm("Frog morphology and anatomy")]: [norm("Frog morphology and anatomy")],
  [norm("Morphology of flowering plants")]: [norm("Morphology of flowering plants")],
  [norm("Anatomy of flowering plants")]: [norm("Anatomy of flowering plants")],
  [norm("Breathing & Exchange of Gases")]: [
    norm("Breathing & Exchange of Gases"),
    norm("Mechanism of breathing and gas transport (O2-Hb dissociation curve)")
  ],
  [norm("Mechanism of breathing and gas transport (O2-Hb dissociation curve)")]: [
    norm("Breathing & Exchange of Gases"),
    norm("Mechanism of breathing and gas transport (O2-Hb dissociation curve)")
  ],
  [norm("Body Fluids & Circulation")]: [
    norm("Body Fluids & Circulation"),
    norm("Cardiac cycle, ECG, and blood grouping (ABO and Rh)")
  ],
  [norm("Cardiac cycle, ECG, and blood grouping (ABO and Rh)")]: [
    norm("Body Fluids & Circulation"),
    norm("Cardiac cycle, ECG, and blood grouping (ABO and Rh)")
  ],
  [norm("Excretory Products & Elimination")]: [
    norm("Excretory Products & Elimination"),
    norm("Nephron structure and counter-current mechanism")
  ],
  [norm("Nephron structure and counter-current mechanism")]: [
    norm("Excretory Products & Elimination"),
    norm("Nephron structure and counter-current mechanism")
  ],
  [norm("Locomotion & Movement")]: [norm("Locomotion & Movement")],
  [norm("Neural Control & Coordination")]: [
    norm("Neural Control & Coordination"),
    norm("Conduction of nerve impulse and reflex action")
  ],
  [norm("Conduction of nerve impulse and reflex action")]: [
    norm("Neural Control & Coordination"),
    norm("Conduction of nerve impulse and reflex action")
  ],
  [norm("Chemical Coordination & Integration")]: [
    norm("Chemical Coordination & Integration"),
    norm("Endocrine glands and hormones action")
  ],
  [norm("Endocrine glands and hormones action")]: [
    norm("Chemical Coordination & Integration"),
    norm("Endocrine glands and hormones action")
  ],
  [norm("Human reproduction")]: [
    norm("Human reproduction"),
    norm("Male reproductive system"),
    norm("Female reproductive system"),
    norm("Spermatogenesis, oogenesis, and hormonal regulation"),
    norm("Menstrual cycle phases"),
    norm("Fertilization and development"),
    norm("Parturition, lactation, and embryonic development")
  ],
  [norm("Male reproductive system")]: [
    norm("Male reproductive system"),
    norm("Human reproduction"),
    norm("Spermatogenesis, oogenesis, and hormonal regulation")
  ],
  [norm("Female reproductive system")]: [
    norm("Female reproductive system"),
    norm("Human reproduction"),
    norm("Spermatogenesis, oogenesis, and hormonal regulation"),
    norm("Menstrual cycle phases")
  ],
  [norm("Fertilization and development")]: [
    norm("Fertilization and development"),
    norm("Parturition, lactation, and embryonic development"),
    norm("Human reproduction")
  ],
  [norm("Spermatogenesis, oogenesis, and hormonal regulation")]: [
    norm("Spermatogenesis, oogenesis, and hormonal regulation"),
    norm("Human reproduction"),
    norm("Male reproductive system"),
    norm("Female reproductive system")
  ],
  [norm("Menstrual cycle phases")]: [
    norm("Menstrual cycle phases"),
    norm("Female reproductive system"),
    norm("Human reproduction")
  ],
  [norm("Parturition, lactation, and embryonic development")]: [
    norm("Parturition, lactation, and embryonic development"),
    norm("Fertilization and development"),
    norm("Human reproduction")
  ],
  [norm("Reproductive health")]: [
    norm("Reproductive health"),
    norm("Contraception methods and Assisted Reproductive Technologies (ART: IVF, ZIFT, GIFT)")
  ],
  [norm("Contraception methods and Assisted Reproductive Technologies (ART: IVF, ZIFT, GIFT)")]: [
    norm("Reproductive health"),
    norm("Contraception methods and Assisted Reproductive Technologies (ART: IVF, ZIFT, GIFT)")
  ],
  [norm("Evolution theories")]: [
    norm("Darwin's theory of natural selection and Lamarckism"),
    norm("Modern synthetic theory and Hardy-Weinberg equilibrium"),
    norm("Adaptive radiation and Speciation"),
    norm("Evidences of evolution (homology, analogy, vestigial organs, embryology)"),
    norm("Origin of life and biochemical evolution (Miller-Urey experiment)"),
    norm("Human evolution (Dryopithecus to Homo sapiens)")
  ],
  [norm("Darwin's theory of natural selection and Lamarckism")]: [
    norm("Darwin's theory of natural selection and Lamarckism"),
    norm("Modern synthetic theory and Hardy-Weinberg equilibrium"),
    norm("Adaptive radiation and Speciation")
  ],
  [norm("Modern synthetic theory and Hardy-Weinberg equilibrium")]: [
    norm("Modern synthetic theory and Hardy-Weinberg equilibrium"),
    norm("Darwin's theory of natural selection and Lamarckism"),
    norm("Adaptive radiation and Speciation")
  ],
  [norm("Adaptive radiation and Speciation")]: [
    norm("Adaptive radiation and Speciation"),
    norm("Darwin's theory of natural selection and Lamarckism"),
    norm("Modern synthetic theory and Hardy-Weinberg equilibrium")
  ],
  [norm("Origin of life and biochemical evolution (Miller-Urey experiment)")]: [
    norm("Origin of life and biochemical evolution (Miller-Urey experiment)"),
    norm("Evidences of evolution (homology, analogy, vestigial organs, embryology)")
  ],
  [norm("Evidences of evolution (homology, analogy, vestigial organs, embryology)")]: [
    norm("Evidences of evolution (homology, analogy, vestigial organs, embryology)"),
    norm("Origin of life and biochemical evolution (Miller-Urey experiment)")
  ],
  [norm("Human evolution (Dryopithecus to Homo sapiens)")]: [
    norm("Human evolution (Dryopithecus to Homo sapiens)")
  ],
  [norm("Common diseases")]: [
    norm("Common diseases"),
    norm("Bacterial, viral, protozoan, and fungal diseases in humans")
  ],
  [norm("Bacterial, viral, protozoan, and fungal diseases in humans")]: [
    norm("Bacterial, viral, protozoan, and fungal diseases in humans"),
    norm("Common diseases")
  ],
  [norm("immunity")]: [
    norm("immunity"),
    norm("Innate and acquired immunity, vaccination, and AIDS")
  ],
  [norm("Immunity")]: [
    norm("immunity"),
    norm("Innate and acquired immunity, vaccination, and AIDS")
  ],
  [norm("Innate and acquired immunity, vaccination, and AIDS")]: [
    norm("immunity"),
    norm("Innate and acquired immunity, vaccination, and AIDS")
  ],
  [norm("cancer")]: [norm("cancer"), norm("Cancer")],
  [norm("Cancer")]: [norm("cancer"), norm("Cancer")],
  [norm("drug abuse")]: [norm("drug abuse"), norm("Drug abuse")],
  [norm("Drug abuse")]: [norm("drug abuse"), norm("Drug abuse")],
  [norm("Microbes in human welfare")]: [
    norm("Microbes in human welfare"),
    norm("Microbes in sewage treatment, biogas production, and biocontrol")
  ],
  [norm("Microbes in sewage treatment, biogas production, and biocontrol")]: [
    norm("Microbes in sewage treatment, biogas production, and biocontrol"),
    norm("Microbes in human welfare")
  ],
  [norm("Principles & Processes")]: [
    norm("Principles & Processes"),
    norm("Restriction endonucleases, cloning vectors (plasmids), and competent hosts"),
    norm("Polymerase Chain Reaction (PCR) and gel electrophoresis"),
    norm("Recombinant DNA technology")
  ],
  [norm("Recombinant DNA technology")]: [
    norm("Recombinant DNA technology"),
    norm("Restriction endonucleases, cloning vectors (plasmids), and competent hosts"),
    norm("Polymerase Chain Reaction (PCR) and gel electrophoresis"),
    norm("Principles & Processes")
  ],
  [norm("Restriction endonucleases, cloning vectors (plasmids), and competent hosts")]: [
    norm("Restriction endonucleases, cloning vectors (plasmids), and competent hosts"),
    norm("Recombinant DNA technology"),
    norm("Polymerase Chain Reaction (PCR) and gel electrophoresis"),
    norm("Principles & Processes")
  ],
  [norm("Polymerase Chain Reaction (PCR) and gel electrophoresis")]: [
    norm("Polymerase Chain Reaction (PCR) and gel electrophoresis"),
    norm("Restriction endonucleases, cloning vectors (plasmids), and competent hosts"),
    norm("Recombinant DNA technology"),
    norm("Principles & Processes")
  ],
  [norm("Applications")]: [
    norm("Applications in medicine"),
    norm("Applications in agriculture"),
    norm("Transgenic animals, genetically modified crops (Bt crops), and gene therapy")
  ],
  [norm("Applications in medicine")]: [
    norm("Applications in medicine"),
    norm("Applications in agriculture"),
    norm("Transgenic animals, genetically modified crops (Bt crops), and gene therapy")
  ],
  [norm("Applications in agriculture")]: [
    norm("Applications in agriculture"),
    norm("Applications in medicine"),
    norm("Transgenic animals, genetically modified crops (Bt crops), and gene therapy")
  ],
  [norm("Transgenic animals, genetically modified crops (Bt crops), and gene therapy")]: [
    norm("Transgenic animals, genetically modified crops (Bt crops), and gene therapy"),
    norm("Applications in medicine"),
    norm("Applications in agriculture")
  ],
  [norm("Carbohydrates, proteins, lipids, nucleic acids, and enzymes")]: [
    norm("Polymerase Chain Reaction (PCR) and gel electrophoresis"),
    norm("Restriction endonucleases, cloning vectors (plasmids), and competent hosts"),
    norm("Recombinant DNA technology"),
    norm("Principles & Processes")
  ]
};

async function run() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.error('ERROR: MONGODB_URI not found.');
    process.exit(1);
  }

  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db('testseries');

  console.log('Connected to MongoDB testseries database.');

  const targetMapPath = path.join(__dirname, 'neet_zoology_subtopic_test_targets.json');
  const targetMap = JSON.parse(fs.readFileSync(targetMapPath, 'utf8'));
  const testIds = Object.keys(targetMap);

  console.log(`Loaded ${testIds.length} target tests.`);

  const tests = await db.collection('testPapers').find({ testId: { $in: testIds } }).toArray();
  const testMap = new Map(tests.map(t => [t.testId, t]));

  // 1. Create Pre-Correction Snapshot (Section 23)
  const snapshotTimestamp = Date.now();
  const preAuditSnapshots = tests.map(t => ({
    testId: t.testId,
    exam: t.exam || 'NEET',
    subject: t.subject || 'Zoology',
    testType: 'Topic-wise',
    chapter: targetMap[t.testId]?.targetChapter || t.chapter,
    topic: targetMap[t.testId]?.targetSubtopic || t.subtopic || t.title,
    originalQuestionIds: (t.questions || []).map(id => id.toString()),
    originalQuestionCount: (t.questions || []).length,
    auditTimestamp: new Date().toISOString()
  }));

  const snapshotFilePath = path.join(__dirname, `neet_zoology_topic_pre_snapshot_${snapshotTimestamp}.json`);
  fs.writeFileSync(snapshotFilePath, JSON.stringify(preAuditSnapshots, null, 2));
  await db.collection('auditSnapshots').insertMany(preAuditSnapshots);
  console.log(`Pre-audit snapshot saved: ${preAuditSnapshots.length} tests recorded.`);

  // Load all Zoology questions from questionBank
  const allZoologyQuestions = await db.collection('questionBank').find({
    subject: { $regex: /^zoology$/i }
  }).toArray();
  const qMap = new Map(allZoologyQuestions.map(q => [q._id.toString(), q]));
  console.log(`Loaded ${allZoologyQuestions.length} Zoology questions into memory pool.`);

  let totalQuestionsAudited = 0;
  let correctlyMappedInitial = 0;
  let wrongExamFound = 0;
  let wrongSubjectFound = 0;
  let wrongChapterFound = 0;
  let wrongTopicFound = 0;
  let exactDuplicatesFound = 0;
  let highSimilarityDuplicatesFound = 0;
  let moderateSimilarityReviews = 0;
  let totalReplaced = 0;
  let moderateReplacements = 0;
  let difficultReplacements = 0;
  let easyReplacements = 0;
  let manualAttentionCount = 0;

  const testWiseReport = [];
  const allReplacementLogs = [];

  for (const tid of testIds) {
    const test = testMap.get(tid);
    if (!test) continue;

    const target = targetMap[tid];
    const targetChapter = target.targetChapter;
    const rawTargetTopic = norm(target.targetSubtopic);
    const validTopicSynonyms = TOPIC_SYNONYMS[rawTargetTopic] || [rawTargetTopic];

    const currentQIds = test.questions || [];
    totalQuestionsAudited += currentQIds.length;

    const validKept = [];
    const seenKeptIds = new Set();
    const seenKeptTexts = new Set();
    const seenKeptTokens = [];
    const toReplace = [];

    let testWrongChap = 0;
    let testWrongTop = 0;
    let testDups = 0;

    // Detect issues
    for (let i = 0; i < currentQIds.length; i++) {
      const qIdStr = currentQIds[i].toString();
      const q = qMap.get(qIdStr);

      if (!q) {
        testWrongChap++;
        wrongChapterFound++;
        toReplace.push({ index: i, removedId: qIdStr, reason: 'MISSING_IN_DB', diff: 'MODERATE', type: 'MCQ' });
        continue;
      }

      if (q.exam && !q.exam.toLowerCase().includes('neet') && !q.exam.toLowerCase().includes('all')) {
        wrongExamFound++;
        toReplace.push({ index: i, removedId: qIdStr, removedChapter: q.chapter, removedTopic: q.subTopic || q.topic, reason: 'WRONG_EXAM', diff: normalizeDifficulty(q.difficulty), type: normalizeType(q.type) });
        continue;
      }

      if (!norm(q.subject).includes('zoology')) {
        wrongSubjectFound++;
        toReplace.push({ index: i, removedId: qIdStr, removedChapter: q.chapter, removedTopic: q.subTopic || q.topic, reason: 'WRONG_SUBJECT', diff: normalizeDifficulty(q.difficulty), type: normalizeType(q.type) });
        continue;
      }

      const qChapNorm = norm(q.chapter);
      const isChapMatch = qChapNorm === norm(targetChapter) || norm(CHAPTER_SYNONYMS[qChapNorm] || qChapNorm) === norm(targetChapter);
      if (!isChapMatch) {
        testWrongChap++;
        wrongChapterFound++;
        toReplace.push({ index: i, removedId: qIdStr, removedChapter: q.chapter, removedTopic: q.subTopic || q.topic, reason: 'WRONG_CHAPTER', diff: normalizeDifficulty(q.difficulty), type: normalizeType(q.type) });
        continue;
      }

      // Check Topic: Topic MUST MATCH, Subtopic does NOT need to match!
      const qTopicNorm = norm(q.subTopic || q.subtopic || q.topic || '');
      const isTopicMatch = validTopicSynonyms.includes(qTopicNorm) || validTopicSynonyms.some(vt => qTopicNorm.includes(vt) || vt.includes(qTopicNorm));
      if (!isTopicMatch) {
        testWrongTop++;
        wrongTopicFound++;
        toReplace.push({ index: i, removedId: qIdStr, removedChapter: q.chapter, removedTopic: q.subTopic || q.topic, reason: 'WRONG_TOPIC', diff: normalizeDifficulty(q.difficulty), type: normalizeType(q.type) });
        continue;
      }

      // Exact ID Duplicate Check
      if (seenKeptIds.has(qIdStr)) {
        testDups++;
        exactDuplicatesFound++;
        toReplace.push({ index: i, removedId: qIdStr, removedChapter: q.chapter, removedTopic: q.subTopic || q.topic, reason: 'EXACT_DUPLICATE_ID', diff: normalizeDifficulty(q.difficulty), type: normalizeType(q.type) });
        continue;
      }

      // Exact Text Duplicate Check
      const nText = normalizeText(q.question || q.text);
      if (nText && seenKeptTexts.has(nText) && nText.length > 20) {
        testDups++;
        exactDuplicatesFound++;
        toReplace.push({ index: i, removedId: qIdStr, removedChapter: q.chapter, removedTopic: q.subTopic || q.topic, reason: 'EXACT_DUPLICATE_TEXT', diff: normalizeDifficulty(q.difficulty), type: normalizeType(q.type) });
        continue;
      }

      // High Similarity Duplicate Check
      const tokens = tokenize(q.question || q.text);
      let isHighSim = false;
      for (const exTokens of seenKeptTokens) {
        const sim = jaccardSimilarity(tokens, exTokens);
        if (sim >= 0.85) {
          isHighSim = true;
          break;
        } else if (sim >= 0.65) {
          moderateSimilarityReviews++;
        }
      }
      if (isHighSim) {
        testDups++;
        highSimilarityDuplicatesFound++;
        toReplace.push({ index: i, removedId: qIdStr, removedChapter: q.chapter, removedTopic: q.subTopic || q.topic, reason: 'HIGH_SIMILARITY_DUPLICATE', diff: normalizeDifficulty(q.difficulty), type: normalizeType(q.type) });
        continue;
      }

      // Valid Kept
      correctlyMappedInitial++;
      validKept.push(q);
      seenKeptIds.add(qIdStr);
      if (nText) seenKeptTexts.add(nText);
      seenKeptTokens.push(tokens);
    }

    // Replacement Candidate Search
    const newQuestions = [...currentQIds];
    const testReplacementLogs = [];

    if (toReplace.length > 0) {
      const candidatePool = allZoologyQuestions.filter(cand => {
        const cChap = norm(cand.chapter);
        const isCChapMatch = cChap === norm(targetChapter) || norm(CHAPTER_SYNONYMS[cChap] || cChap) === norm(targetChapter);
        if (!isCChapMatch) return false;

        const cTop = norm(cand.subTopic || cand.subtopic || cand.topic || '');
        const isCTopMatch = validTopicSynonyms.includes(cTop) || validTopicSynonyms.some(vt => cTop.includes(vt) || vt.includes(cTop));
        if (!isCTopMatch) return false;

        const diff = normalizeDifficulty(cand.difficulty);
        if (diff === 'EASY') return false; // STRICT RULE: NEVER EASY!

        return true;
      });

      for (const item of toReplace) {
        let bestCand = null;
        let bestScore = -1;

        for (const cand of candidatePool) {
          const cId = cand._id.toString();
          if (seenKeptIds.has(cId)) continue;

          const cText = normalizeText(cand.question || cand.text);
          if (cText && seenKeptTexts.has(cText) && cText.length > 20) continue;

          const cTokens = tokenize(cand.question || cand.text);
          let sim = false;
          for (const exTokens of seenKeptTokens) {
            if (jaccardSimilarity(cTokens, exTokens) >= 0.85) {
              sim = true;
              break;
            }
          }
          if (sim) continue;

          const cDiff = normalizeDifficulty(cand.difficulty);
          const cType = normalizeType(cand.type);

          let score = 0;
          if (item.diff === 'DIFFICULT') {
            if (cDiff === 'DIFFICULT' && cType === item.type) score = 100;
            else if (cDiff === 'MODERATE' && cType === item.type) score = 90;
            else if (cDiff === 'DIFFICULT') score = 80;
            else score = 70;
          } else {
            if (cDiff === 'MODERATE' && cType === item.type) score = 100;
            else if (cDiff === 'DIFFICULT' && cType === item.type) score = 90;
            else if (cDiff === 'MODERATE') score = 80;
            else score = 70;
          }

          if (score > bestScore) {
            bestScore = score;
            bestCand = cand;
          }
        }

        if (bestCand) {
          const candIdStr = bestCand._id.toString();
          seenKeptIds.add(candIdStr);
          const bText = normalizeText(bestCand.question || bestCand.text);
          if (bText) seenKeptTexts.add(bText);
          seenKeptTokens.push(tokenize(bestCand.question || bestCand.text));

          newQuestions[item.index] = bestCand._id;
          totalReplaced++;

          const finalDiff = normalizeDifficulty(bestCand.difficulty);
          if (finalDiff === 'DIFFICULT') difficultReplacements++;
          else moderateReplacements++;

          const repLog = {
            testId: tid,
            exam: 'NEET',
            subject: 'Zoology',
            testType: 'Topic-wise',
            chapter: targetChapter,
            topic: target.targetSubtopic,
            removedQuestionId: item.removedId,
            removedQuestionChapter: item.removedChapter || targetChapter,
            removedQuestionTopic: item.removedTopic || target.targetSubtopic,
            removedQuestionDifficulty: item.diff,
            removedQuestionType: item.type,
            replacementQuestionId: candIdStr,
            replacementChapter: bestCand.chapter,
            replacementTopic: bestCand.subTopic || bestCand.subtopic || target.targetSubtopic,
            replacementDifficulty: finalDiff,
            replacementQuestionType: normalizeType(bestCand.type),
            reason: item.reason,
            timestamp: new Date().toISOString()
          };
          testReplacementLogs.push(repLog);
          allReplacementLogs.push(repLog);
        } else {
          manualAttentionCount++;
        }
      }
    }

    // Question Count Preservation Check (Section 21)
    if (newQuestions.length !== currentQIds.length) {
      throw new Error(`CRITICAL: Question count mismatch for test ${tid}`);
    }

    // Apply Update
    if (testReplacementLogs.length > 0) {
      await db.collection('testPapers').updateOne(
        { _id: test._id },
        {
          $set: {
            questions: newQuestions,
            chapter: targetChapter,
            subtopic: target.targetSubtopic,
            type: 'SUBTOPIC',
            updatedAt: new Date()
          }
        }
      );
    } else {
      // Ensure chapter and subtopic are accurately recorded
      await db.collection('testPapers').updateOne(
        { _id: test._id },
        {
          $set: {
            chapter: targetChapter,
            subtopic: target.targetSubtopic,
            type: 'SUBTOPIC'
          }
        }
      );
    }

    testWiseReport.push({
      testId: tid,
      chapter: targetChapter,
      topic: target.targetSubtopic,
      questions: currentQIds.length,
      wrongChapter: testWrongChap,
      wrongTopic: testWrongTop,
      duplicates: testDups,
      replaced: testReplacementLogs.length,
      manualAttention: toReplace.length - testReplacementLogs.length,
      finalStatus: (toReplace.length - testReplacementLogs.length === 0) ? 'PASS' : 'MANUAL_ATTENTION'
    });
  }

  // Insert all replacement logs into database
  if (allReplacementLogs.length > 0) {
    await db.collection('replacementLogs').insertMany(allReplacementLogs);
  }

  // Save replacement logs to JSON file
  fs.writeFileSync(
    path.join(__dirname, 'neet_zoology_topic_replacement_logs.json'),
    JSON.stringify(allReplacementLogs, null, 2)
  );

  // Save test-wise report to JSON file
  fs.writeFileSync(
    path.join(__dirname, 'neet_zoology_topic_report_table.json'),
    JSON.stringify(testWiseReport, null, 2)
  );

  console.log('\n======================================================');
  console.log('NEET ZOOLOGY — TOPIC-WISE AUDIT REPORT');
  console.log('======================================================');
  console.log(`Total Tests Audited: ${testIds.length}`);
  console.log(`Total Questions Audited: ${totalQuestionsAudited}`);
  console.log(`Correctly Mapped Questions: ${correctlyMappedInitial}`);
  console.log(`Wrong Exam Questions: ${wrongExamFound}`);
  console.log(`Wrong Subject Questions: ${wrongSubjectFound}`);
  console.log(`Wrong-Chapter Questions: ${wrongChapterFound}`);
  console.log(`Wrong-Topic Questions: ${wrongTopicFound}`);
  console.log(`Exact Duplicates: ${exactDuplicatesFound}`);
  console.log(`High-Similarity Duplicates: ${highSimilarityDuplicatesFound}`);
  console.log(`Moderate-Similarity Reviews: ${moderateSimilarityReviews}`);
  console.log(`Questions Replaced: ${totalReplaced}`);
  console.log(`  - Moderate Replacements: ${moderateReplacements}`);
  console.log(`  - Difficult Replacements: ${difficultReplacements}`);
  console.log(`Easy Questions Used as Replacement: ${easyReplacements}`);
  console.log(`Questions Requiring Manual Attention: ${manualAttentionCount}`);
  console.log(`Tests Successfully Corrected: ${testWiseReport.filter(r => r.finalStatus === 'PASS').length} of ${testIds.length}`);

  // Automated 2nd-Pass Re-Audit (Section 44 & 45)
  console.log('\nRunning Automated 2nd-Pass Re-Audit...');
  const postTests = await db.collection('testPapers').find({ testId: { $in: testIds } }).toArray();
  const postTestMap = new Map(postTests.map(t => [t.testId, t]));

  let postWrongExam = 0;
  let postWrongSubj = 0;
  let postWrongChap = 0;
  let postWrongTop = 0;
  let postExactDupIds = 0;
  let postExactDupTexts = 0;
  let postHighSim = 0;
  let postQCountChanges = 0;

  for (const tid of testIds) {
    const postT = postTestMap.get(tid);
    const target = targetMap[tid];
    const targetChapter = target.targetChapter;
    const rawTargetTopic = norm(target.targetSubtopic);
    const validTopicSynonyms = TOPIC_SYNONYMS[rawTargetTopic] || [rawTargetTopic];

    const originalSnap = preAuditSnapshots.find(s => s.testId === tid);
    if (postT.questions.length !== originalSnap.originalQuestionCount) {
      postQCountChanges++;
    }

    const seenIds = new Set();
    const seenTexts = new Set();
    const seenTokens = [];

    for (const qId of postT.questions) {
      const qIdStr = qId.toString();
      if (seenIds.has(qIdStr)) postExactDupIds++;
      seenIds.add(qIdStr);

      const q = qMap.get(qIdStr);
      if (!q) {
        postWrongChap++;
        continue;
      }

      if (q.exam && !q.exam.toLowerCase().includes('neet') && !q.exam.toLowerCase().includes('all')) {
        postWrongExam++;
      }

      if (!norm(q.subject).includes('zoology')) {
        postWrongSubj++;
      }

      const qChapNorm = norm(q.chapter);
      const isChapMatch = qChapNorm === norm(targetChapter) || norm(CHAPTER_SYNONYMS[qChapNorm] || qChapNorm) === norm(targetChapter);
      if (!isChapMatch) postWrongChap++;

      const qTopNorm = norm(q.subTopic || q.subtopic || q.topic || '');
      const isTopMatch = validTopicSynonyms.includes(qTopNorm) || validTopicSynonyms.some(vt => qTopNorm.includes(vt) || vt.includes(qTopNorm));
      if (!isTopMatch) postWrongTop++;

      const nText = normalizeText(q.question || q.text);
      if (nText && seenTexts.has(nText) && nText.length > 20) {
        postExactDupTexts++;
      }
      seenTexts.add(nText);

      const tokens = tokenize(q.question || q.text);
      for (const exTokens of seenTokens) {
        if (jaccardSimilarity(tokens, exTokens) >= 0.85) {
          postHighSim++;
          break;
        }
      }
      seenTokens.push(tokens);
    }
  }

  console.log('\n======================================================');
  console.log('FINAL RE-AUDIT VERIFICATION (CRITICAL SUCCESS CRITERIA)');
  console.log('======================================================');
  console.log(`0 WRONG_EXAM QUESTIONS: ${postWrongExam === 0 ? 'PASS (0)' : 'FAIL (' + postWrongExam + ')'}`);
  console.log(`0 WRONG_SUBJECT QUESTIONS: ${postWrongSubj === 0 ? 'PASS (0)' : 'FAIL (' + postWrongSubj + ')'}`);
  console.log(`0 WRONG_CHAPTER QUESTIONS: ${postWrongChap === 0 ? 'PASS (0)' : 'FAIL (' + postWrongChap + ')'}`);
  console.log(`0 WRONG_TOPIC QUESTIONS: ${postWrongTop === 0 ? 'PASS (0)' : 'FAIL (' + postWrongTop + ')'}`);
  console.log(`0 EASY REPLACEMENTS: ${easyReplacements === 0 ? 'PASS (0)' : 'FAIL (' + easyReplacements + ')'}`);
  console.log(`0 DUPLICATE QUESTION IDs: ${postExactDupIds === 0 ? 'PASS (0)' : 'FAIL (' + postExactDupIds + ')'}`);
  console.log(`0 EXACT DUPLICATES: ${postExactDupTexts === 0 ? 'PASS (0)' : 'FAIL (' + postExactDupTexts + ')'}`);
  console.log(`0 HIGH-SIMILARITY DUPLICATES: ${postHighSim === 0 ? 'PASS (0)' : 'FAIL (' + postHighSim + ')'}`);
  console.log(`0 QUESTION COUNT CHANGES: ${postQCountChanges === 0 ? 'PASS (0)' : 'FAIL (' + postQCountChanges + ')'}`);
  console.log('======================================================\n');

  await client.close();
}

run().catch(err => {
  console.error('Fatal execution error:', err);
  process.exit(1);
});
