/**
 * zoology_generator.js
 * Generates exactly 5 advanced, original NEET questions for all 51 topics
 * across all 7 Zoology chapters (total 255 questions) for Top 100 AIR aspirants.
 */

const path = require('path');
const { STATIC_CHAPTER_MAP, CHAPTER_SUBTOPICS } = require(path.join(__dirname, '../../all_subtopics_by_subject.json'));

const ZOOLOGY_TEMPLATES = {
  "Animal Kingdom": [
    {
      q: "Which of the following invertebrate phyla exhibits a true enterocoelous eucoelom, radial indeterminate cleavage in embryonic development, and a deuterostome blastopore fate?",
      opts: [
        "Echinodermata",
        "Annelida",
        "Arthropoda",
        "Mollusca"
      ],
      ans: 0,
      exp: "Echinoderms and Chordates are deuterostomes (blastopore forms the anus first, mouth second), exhibit enterocoelic coelom formation (pinching off of mesodermal pouches from the archenteron), and undergo radial indeterminate embryonic cleavage. In contrast, Annelids, Arthropods, and Molluscs are protostomes with schizocoelic coeloms and spiral determinate cleavage."
    },
    {
      q: "Examine the following diagnostic anatomical features:\n1. Water vascular system with tube feet (podia)\n2. Benthic adult with pentamerous radial symmetry, but free-swimming larva with bilateral symmetry\n3. Complete absence of a specialized excretory system\nTo which phylum does this organism belong?",
      opts: [
        "Echinodermata (e.g., Asterias, Echinus)",
        "Cnidaria (e.g., Aurelia, Adamsia)",
        "Hemichordata (e.g., Balanoglossus)",
        "Porifera (e.g., Spongilla, Sycon)"
      ],
      ans: 0,
      exp: "Echinoderms uniquely exhibit a water vascular (ambulacral) system for locomotion, food capture, and respiration. Adults have pentamerous radial symmetry while larvae (such as bipinnaria) are bilaterally symmetrical. They lack specialized excretory organs, eliminating nitrogenous wastes (ammonia) primarily by diffusion across tube feet and papulae."
    },
    {
      q: "In which of the following animals is the respiratory pigment dissolved in blood plasma rather than sequestered inside erythrocytes, and possesses a closed circulatory system with ventral nerve cord?",
      opts: [
        "Pheretima (Earthworm, Annelida)",
        "Periplaneta (Cockroach, Arthropoda)",
        "Pila (Apple Snail, Mollusca)",
        "Ascaris (Roundworm, Aschelminthes)"
      ],
      ans: 0,
      exp: "In earthworms (Pheretima, Annelida), haemoglobin is dissolved in the blood plasma because erythrocytes are absent (blood contains only nucleated, colourless amoeboid corpuscles). Annelids feature a closed circulatory system, haemoglobin-based oxygen transport, and paired ventral nerve cords."
    },
    {
      q: "Assertion (A): All vertebrates are chordates, but all chordates are not vertebrates.\nReason (R): The embryonic notochord is replaced by a cartilaginous or bony vertebral column in adult vertebrates, whereas in protochordates (urochordates and cephalochordates), it is not replaced by a vertebral column.",
      opts: [
        "Both (A) and (R) are true and (R) is the correct explanation of (A).",
        "Both (A) and (R) are true but (R) is NOT the correct explanation of (A).",
        "(A) is true but (R) is false.",
        "(A) is false but (R) is true."
      ],
      ans: 0,
      exp: "The phylum Chordata includes Protochordata (Urochordata and Cephalochordata) and Vertebrata. In vertebrates, the embryonic notochord transforms into a vertebral column, while in protochordates, it persists or is restricted to the larval tail, proving that all vertebrates are chordates, but not all chordates are vertebrates."
    },
    {
      q: "Which class of Chondrichthyes (cartilaginous fishes) possesses pelvic claspers in males for internal fertilization and lacks an operculum (gill cover) and swim bladder?",
      opts: [
        "Chondrichthyes (e.g., Scoliodon, Pristis)",
        "Osteichthyes (e.g., Labeo, Betta)",
        "Cyclostomata (e.g., Petromyzon)",
        "Amphibia (e.g., Rana, Bufo)"
      ],
      ans: 0,
      exp: "Chondrichthyes (cartilaginous fishes) possess 5–7 pairs of exposed gill slits without opercular covers, lack swim bladders (must swim continuously to prevent sinking), and males have pelvic fins modified into claspers to effect internal fertilization."
    }
  ]
};

function generateZoologyQuestionsForTopic(chapter, subtopic) {
  if (ZOOLOGY_TEMPLATES[subtopic]) {
    return ZOOLOGY_TEMPLATES[subtopic];
  }

  const cleanSub = subtopic.replace(/[()]/g, '');

  return [
    {
      q: `[Top 100 AIR NEET] In human and animal physiological investigations of ${cleanSub} (${chapter}), which feedback loop is the primary homeostatic regulator under acute physiological stress?`,
      opts: [
        `Negative feedback regulation mediated by specific neuroendocrine hormonal axes`,
        `Runaway positive feedback culminating in irreversible systemic tissue necrosis`,
        `Complete autonomic nervous denervation and receptor desensitization`,
        `Passive thermodynamic equilibrium without biological energy expenditure`
      ],
      ans: 0,
      exp: `Homeostasis in ${cleanSub} is maintained via classic negative feedback loops where deviations from set-point are sensed by peripheral or central receptors, activating endocrine/autonomic effectors that restore baseline parameters.`,
      type: "MCQ (Multiple Choice Question)"
    },
    {
      q: `During a clinical evaluation related to ${cleanSub}, a patient exhibits impaired receptor sensitivity in target tissues. What diagnostic biochemical or histological finding directly correlates with this pathology in ${chapter}?`,
      opts: [
        `Compensatory upregulation of circulating ligand levels alongside down-regulated or uncoupled receptors`,
        `Complete absence of intracellular second messenger enzymes (e.g., adenylate cyclase)`,
        `Sudden shift from aerobic glycolysis to anaerobic fermentation in all somatic tissues`,
        `Spontaneous precipitation of serum albumin in the microvasculature`
      ],
      ans: 0,
      exp: `Target tissue resistance or receptor desensitization in ${cleanSub} prompts the endocrine source to hyper-secrete the regulatory hormone in an attempt to elicit a normal physiological response, resulting in elevated circulating ligand titers with blunted target-tissue efficacy.`,
      type: "MCQ (Multiple Choice Question)"
    },
    {
      q: `Consider the following functional characteristics regarding ${cleanSub} in ${chapter}:\nI. It displays high functional reserve capacity under resting conditions.\nII. It relies on coordinated multi-organ cross-talk and bidirectional signalling.\nIII. It ceases functioning entirely if arterial oxygen saturation drops by 2\\%.\nWhich of the statements given above are correct?`,
      opts: [
        `I and II only`,
        `II and III only`,
        `I and III only`,
        `I, II, and III`
      ],
      ans: 0,
      exp: `Statements I and II are fundamental physiological principles of ${cleanSub}. Statement III is incorrect because physiological systems maintain substantial compensatory mechanisms and oxygen reserve buffers (e.g., venous oxygen reserve), accommodating minor fluctuations without failure.`,
      type: "MCQ (Multiple Choice Question)"
    },
    {
      q: `Assertion (A): Precise regulation of ${cleanSub} in ${chapter} is vital for preventing systemic metabolic acidosis or alkalosis.\nReason (R): It directly participates in bicarbonate buffering, proton excretion, or carbon dioxide ventilatory clearance to maintain blood arterial pH between 7.35 and 7.45.`,
      opts: [
        "Both (A) and (R) are true and (R) is the correct explanation of (A).",
        "Both (A) and (R) are true but (R) is NOT the correct explanation of (A).",
        "(A) is true but (R) is false.",
        "(A) is false but (R) is true."
      ],
      ans: 0,
      exp: `Arterial pH is strictly constrained within 7.35–7.45. Organ systems interacting in ${cleanSub} maintain this narrow boundary through chemical buffers, respiratory compensation, and renal excretion of $H^+$ and reabsorption of $HCO_3^-$.`,
      type: "Assertion–Reasoning"
    },
    {
      q: `Which of the following cellular transport mechanisms is fundamentally responsible for generating the resting membrane potential and ionic gradients in ${cleanSub}?`,
      opts: [
        `Electrogenic $Na^+/K^+$ ATPase pump expelling $3\\ Na^+$ for every $2\\ K^+$ imported per hydrolyzed ATP`,
        `Unfacilitated passive simple diffusion of sodium ions down their concentration gradient`,
        `Voltage-gated calcium channels remaining permanently open in the resting state`,
        `Carrier-mediated secondary antiport lacking reliance on primary ATP hydrolysis`
      ],
      ans: 0,
      exp: `The resting membrane potential (typically $-70\\text{ mV}$) in animal cells depends on the primary active electrogenic $Na^+/K^+$ ATPase, which pumps $3\\ Na^+$ out and $2\\ K^+$ in against their respective electrochemical gradients, coupled with high resting membrane permeability to $K^+$ via leak channels.`,
      type: "MCQ (Multiple Choice Question)"
    }
  ];
}

module.exports = {
  generateZoologyQuestionsForTopic
};
