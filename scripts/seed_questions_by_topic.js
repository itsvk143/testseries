const { MongoClient } = require('mongodb');
const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: '.env.local' });
const { formatQuestionToCentralized } = require('../src/lib/questionFormatter.js');

// Full syllabus map: Subject -> Chapter -> Subtopics
const SYLLABUS = {
    Physics: {
        'Physics and Measurement': ['Units and dimensions', 'Error analysis', 'Significant figures'],
        'Kinematics': ['Motion in a straight line/plane', 'Projectile motion', 'Relative velocity', 'Uniform circular motion'],
        'Laws of Motion': ["Newton's laws", 'Impulse', 'Conservation of momentum', 'Friction', 'Banking of roads'],
        'Work, Energy, and Power': ['Work-energy theorem', 'Kinetic/potential energy', 'Elastic and inelastic collisions'],
        'Rotational Motion': ['Center of mass', 'Torque', 'Angular momentum conservation', 'Moment of inertia'],
        'Gravitation': ["Kepler's laws", "Newton's law of gravitation", 'Gravitational potential energy', 'Escape velocity'],
        'Properties of Solids and Liquids': ["Elasticity (Hooke's law, Young's modulus)", "Fluid mechanics (Pascal's law, Bernoulli's principle, viscosity)"],
        'Thermodynamics': ['Thermal equilibrium', 'Laws of thermodynamics', 'Heat engines', 'Adiabatic and isothermal processes'],
        'Kinetic Theory of Gases': ['Equation of state', 'Kinetic interpretation of temperature', 'Degrees of freedom'],
        'Oscillations and Waves': ['Simple Harmonic Motion (SHM)', 'Wave motion', 'Superposition', 'Doppler effect'],
        'Electrostatics': ["Coulomb's law", 'Electric field/flux', "Gauss's law", 'Potential energy', 'Capacitors', 'Dielectrics'],
        'Current Electricity': ["Ohm's law", "Kirchhoff's laws", 'Potentiometer', 'Wheatstone bridge', 'Resistivity'],
        'Magnetic Effects of Current and Magnetism': ['Lorentz force', "Ampere's law", 'Magnetic field calculation', "Earth's magnetism"],
        'Electromagnetic Induction and Alternating Currents': ["Faraday's law", "Lenz's law", 'Eddy currents', 'AC circuits', 'RMS values'],
        'Electromagnetic Waves': ['Displacement current', 'EM spectrum', 'Transverse nature of EM waves'],
        'Optics': ['Reflection/refraction', 'Lens formula', 'Optical instruments', 'Interference', 'Diffraction', "Young's double-slit experiment"],
        'Dual Nature of Matter and Radiation': ['Photoelectric effect', 'de Broglie wavelength', "Bohr's model", 'Wave-particle duality'],
        'Atoms and Nuclei': ['Atomic models', 'Nuclear reactions', 'Radioactivity', 'Binding energy', 'Nuclear fission and fusion'],
        'Electronic Devices': ['Energy bands', 'Intrinsic/extrinsic semiconductors', 'Diodes', 'Transistors', 'Logic gates'],
        'Experimental Skills': ['Vernier calipers', 'Screw gauge', 'Simple pendulum', 'Meter bridge', 'Potentiometer']
    },
    Chemistry: {
        'Some Basic Concepts in Chemistry': ['Mole concept', 'Molar mass', 'Empirical/molecular formula', 'Stoichiometry'],
        'Atomic Structure': ["Bohr's model", 'Quantum mechanical model', 'Electronic configuration', 'Quantum numbers', 'Orbital shapes'],
        'Chemical Bonding and Molecular Structure': ['VSEPR theory', 'Hybridization', 'Molecular orbital theory', 'Ionic and covalent bonds', 'Polarity'],
        'Chemical Thermodynamics': ['First law of thermodynamics', 'Enthalpy (ΔH)', 'Entropy (ΔS)', 'Gibbs free energy (ΔG)', 'Spontaneity'],
        'Solutions': ['Concentration terms', "Raoult's law", 'Ideal/non-ideal solutions', 'Colligative properties'],
        'Equilibrium': ['Chemical equilibrium', "Le Chatelier's principle", 'Ionic equilibrium', 'pH', 'Buffer solutions'],
        'Redox Reactions and Electrochemistry': ['Oxidation number', 'Balancing redox reactions', 'Electrochemical cells', 'Nernst equation', 'Conductivity'],
        'Chemical Kinetics': ['Rate of reaction', 'Rate law', 'Arrhenius equation', 'Catalysis', 'Order of reaction'],
        'Classification of Elements and Periodicity in Properties': ['Trends in periodic properties', 'Ionization enthalpy', 'Electronegativity', 'Atomic radius'],
        'P-Block Elements': ['Properties', 'Compounds of p-block', 'Uses', 'Group 13 & 14 elements', 'Group 15, 16, 17 & 18 elements'],
        'd and f- Block Elements': ['Transition elements', 'Lanthanides', 'Actinoids', 'Alloys', 'Complex compounds'],
        'Co-ordination Compounds': ["Werner's theory", 'IUPAC nomenclature', 'Bonding in coordination compounds', 'Isomerism'],
        'Purification and Characterisation of Organic Compounds': ['Purification techniques', 'Qualitative analysis', 'Quantitative analysis'],
        'Some Basic Principles of Organic Chemistry': ['Nomenclature', 'Isomerism', 'Electronic effect', 'Acidic strength', 'Reaction mechanisms'],
        'Hydrocarbons': ['Alkanes', 'Alkenes', 'Alkynes', 'Aromatic hydrocarbons', 'Conformations'],
        'Organic Compounds Containing Halogens': ['Nomenclature', 'Nature of C–X bond', 'Mechanism of substitution', 'Haloalkanes', 'Haloarenes'],
        'Organic Compounds Containing Oxygen': ['Alcohols', 'Phenols', 'Ethers', 'Aldehydes', 'Ketones', 'Carboxylic acids'],
        'Organic Compounds Containing Nitrogen': ['Amines', 'Diazonium salts', 'Cyanides', 'Isocyanides'],
        'Biomolecules': ['Carbohydrates', 'Proteins', 'Nucleic acids', 'Vitamins', 'Enzymes', 'Hormones'],
        'Principles Related to Practical Chemistry': ['Detection of elements', 'Qualitative analysis', 'Purification methods', 'Preparation of compounds']
    },
    Mathematics: {
        'Complex Numbers': ['Modulus and argument', 'Square roots', 'Triangle inequality', 'De Moivre\'s theorem', 'Argand plane'],
        'Quadratic Equations': ['Nature of roots', 'Discriminant', 'Sum and product of roots', 'Quadratic inequalities', 'Roots of polynomial'],
        'Sequences & Series': ['Arithmetic Progression', 'Geometric Progression', 'Harmonic Progression', 'Arithmetic-Geometric Progression', 'Sum of special series'],
        'Permutations & Combinations': ['Fundamental principles', 'Linear permutations', 'Circular permutations', 'Combinations'],
        'Binomial Theorem': ['General term', 'Middle term', 'Coefficient estimation', 'Binomial identities'],
        'Straight Lines': ['Slope and intercept forms', 'Perpendicular distance', 'Angle between lines', 'Concurrent lines'],
        'Circles': ['Standard equation', 'Tangent and normal', 'Chord of contact', 'Circle through three points'],
        'Conic Sections (Parabola, Ellipse, Hyperbola)': ['Standard forms of parabola', 'Ellipse equations', 'Hyperbola equations', 'Tangent and normal to conics'],
        'Trigonometric Identities': ['Multiple and sub-multiple angles', 'Inverse trigonometric functions', 'Properties of triangles', 'Solutions of triangles'],
        'Matrices & Determinants': ['Types of matrices', 'Adjoint and inverse', 'Solution of linear equations', "Cramer's rule"],
        'Limits, Continuity & Differentiability': ["L'Hospital rule", 'Derivative as a rate of change', "Rolle's Theorem", "Lagrange's Mean Value Theorem"],
        'Application of Derivatives': ['Maxima and minima', 'Tangent and normal', 'Rate of change', 'Increasing and decreasing functions'],
        'Integrals': ['Fundamental theorem of calculus', 'Integration by parts', 'Definite integrals', 'Properties of definite integrals'],
        'Differential Equations': ['Order and degree', 'Separation of variables', 'Linear differential equations', 'Homogeneous equations'],
        'Areas': ['Area under a curve', 'Area between two curves'],
        'Vectors': ['Scalar and vector products', 'Scalar triple product', 'Vector triple product', 'Position vectors'],
        '3D Geometry': ['Direction cosines and ratios', 'Equations of lines and planes', 'Shortest distance between two lines', 'Angle between planes'],
        'Inverse Trigonometric Functions': ['Principal values', 'Properties of inverse trig functions', 'Equations involving inverse trig functions'],
        'Probability': ['Conditional probability', 'Independent events', "Bayes' theorem", 'Probability distribution', 'Binomial distribution'],
        'Statistics': ['Mean, median, mode', 'Standard deviation', 'Variance', 'Correlation', 'Regression']
    },
    Botany: {
        'Diversity in Living World': ['Biological Classification', 'Plant Kingdom', 'Algae', 'Bryophytes', 'Pteridophytes', 'Gymnosperms', 'Angiosperms'],
        'Plant Physiology': ['Photosynthesis', 'Respiration', 'Growth & Development', 'Transport & Mineral Nutrition', 'Plant hormones'],
        'Cell Structure and Function': ['Cell life & division', 'Biomolecules', 'Cell organelles', 'Mitosis', 'Meiosis'],
        'Genetics and Evolution': ['Principles of Inheritance', 'Molecular Basis of Inheritance', 'DNA replication', 'Gene expression', 'Mutations'],
        'Ecology and Environment': ['Organisms and Populations', 'Ecosystem Structure', 'Biodiversity & Conservation', 'Environmental Issues', 'Ecological pyramids']
    },
    Zoology: {
        'Structural Organisation in Animals and Plants': ['Animal tissues', 'Cockroach anatomy and morphology', 'Earthworm', 'Frog morphology', 'Morphology of flowering plants', 'Anatomy of flowering plants'],
        'Human Physiology': ['Digestion & Absorption', 'Breathing & Exchange of Gases', 'Body Fluids & Circulation', 'Excretory Products & Elimination', 'Locomotion & Movement', 'Neural Control & Coordination', 'Chemical Coordination & Integration'],
        'Reproduction': ['Human reproduction', 'Reproductive health', 'Male reproductive system', 'Female reproductive system', 'Fertilization and development'],
        'Biology and Human Welfare': ['Common diseases', 'Immunity', 'Cancer', 'Drug abuse', 'Microbes in human welfare'],
        'Biotechnology and Its Applications': ['Principles & Processes', 'Applications in medicine', 'Applications in agriculture', 'Recombinant DNA technology']
    }
};

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-lite:generateContent?key=${GEMINI_API_KEY}`;

const schema = {
    type: 'ARRAY',
    items: {
        type: 'OBJECT',
        properties: {
            question: { type: 'STRING' },
            options: {
                type: 'ARRAY',
                items: { type: 'STRING' }
            },
            correctAnswer: { type: 'INTEGER' },
            explanation: { type: 'STRING' }
        },
        required: ['question', 'options', 'correctAnswer', 'explanation']
    }
};

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function generateQuestionsForTopic(subject, chapter, subtopic, count = 10, retries = 5) {
    const isMathOrPhysics = subject === 'Physics' || subject === 'Mathematics';
    const isBio = subject === 'Botany' || subject === 'Zoology';

    const prompt = `Generate exactly ${count} authentic, exam-level multiple choice questions for:
Subject: ${subject}
Chapter: ${chapter}
Subtopic: ${subtopic}

Requirements:
- Exactly 4 options for each question (strings).
- correctAnswer MUST be an integer: 0 for Option A, 1 for Option B, 2 for Option C, 3 for Option D.
- Clear, concise explanation (1-2 sentences).
${isMathOrPhysics ? '- Include realistic numerical values and formulas. Math expressions in LaTeX enclosed in $$...$$ like $$\\frac{v^2}{2g}$$, $$\\theta$$, $$\\sqrt{x}$$.' : ''}
${isBio ? '- High-order thinking application questions (HOTs), clinical/experimental observations.' : ''}
- All backslashes for LaTeX MUST be double-escaped (e.g. \\\\frac, \\\\times, \\\\sin).
- Return valid JSON matching schema.`;

    for (let attempt = 1; attempt <= retries; attempt++) {
        try {
            const res = await fetch(GEMINI_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                signal: AbortSignal.timeout(60000),
                body: JSON.stringify({
                    contents: [{ parts: [{ text: prompt }] }],
                    generationConfig: {
                        responseMimeType: 'application/json',
                        responseSchema: schema,
                        temperature: 0.7
                    }
                })
            });

            if (res.status === 429) {
                const waitTime = Math.pow(2, attempt) * 2000;
                console.warn(`⏳ Rate limited (429) on ${subtopic}. Waiting ${waitTime / 1000}s (Attempt ${attempt}/${retries})...`);
                await sleep(waitTime);
                continue;
            }

            if (!res.ok) {
                const errText = await res.text();
                throw new Error(`HTTP ${res.status}: ${errText}`);
            }

            const data = await res.json();
            const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
            const parsed = JSON.parse(text);
            if (Array.isArray(parsed) && parsed.length > 0) {
                return parsed;
            }
            throw new Error('Empty array returned');
        } catch (err) {
            if (attempt === retries) throw err;
            const waitTime = attempt * 2000;
            console.warn(`⚠️ Error on ${subtopic}: ${err.message}. Retrying in ${waitTime / 1000}s...`);
            await sleep(waitTime);
        }
    }
    return [];
}

async function main() {
    if (!GEMINI_API_KEY) {
        console.error('❌ GEMINI_API_KEY is not defined in .env.local');
        process.exit(1);
    }

    const client = new MongoClient(process.env.MONGODB_URI);
    await client.connect();
    const db = client.db();
    const qBank = db.collection('questionBank');

    console.log('🚀 Connected to MongoDB.');
    const initialCount = await qBank.countDocuments();
    console.log(`📊 Initial questions in questionBank: ${initialCount}`);

    // Flatten all topics
    const allTasks = [];
    for (const [subject, chapters] of Object.entries(SYLLABUS)) {
        for (const [chapter, subtopics] of Object.entries(chapters)) {
            for (const subtopic of subtopics) {
                allTasks.push({ subject, chapter, subtopic });
            }
        }
    }

    console.log(`📋 Total topics to process: ${allTasks.length}`);

    let processedCount = 0;
    let addedCount = 0;
    const TARGET_PER_TOPIC = 10;
    const CONCURRENCY = 4; // 4 concurrent topics at a time

    for (let i = 0; i < allTasks.length; i += CONCURRENCY) {
        const batch = allTasks.slice(i, i + CONCURRENCY);

        await Promise.all(batch.map(async (task) => {
            const { subject, chapter, subtopic } = task;

            // Check how many questions exist for this exact subtopic
            const existingCount = await qBank.countDocuments({
                subject,
                chapter,
                $or: [{ subTopic: subtopic }, { subtopic: subtopic }]
            });

            if (existingCount >= TARGET_PER_TOPIC) {
                processedCount++;
                console.log(`[${processedCount}/${allTasks.length}] ⏭️  ${subject} > ${chapter} > ${subtopic} already has ${existingCount} questions.`);
                return;
            }

            const needed = TARGET_PER_TOPIC - existingCount;
            console.log(`[${processedCount + 1}/${allTasks.length}] 🤖 Generating ${needed} questions for ${subject} > ${chapter} > ${subtopic}...`);

            try {
                const generated = await generateQuestionsForTopic(subject, chapter, subtopic, needed);
                if (generated && generated.length > 0) {
                    const docsToInsert = generated.map(q => {
                        return formatQuestionToCentralized({
                            subject,
                            chapter,
                            subTopic: subtopic,
                            topic: chapter,
                            type: 'MCQ',
                            question: q.question,
                            options: q.options,
                            correctAnswer: q.correctAnswer,
                            explanation: q.explanation,
                            difficulty: 'Medium',
                            class: 'Class 12'
                        });
                    });

                    const insertRes = await qBank.insertMany(docsToInsert);
                    addedCount += insertRes.insertedCount;
                    processedCount++;
                    console.log(`[${processedCount}/${allTasks.length}] ✅ Inserted ${insertRes.insertedCount} questions for "${subtopic}" (Total added so far: ${addedCount})`);
                }
            } catch (err) {
                console.error(`❌ Failed generating questions for ${subject} > ${chapter} > ${subtopic}:`, err.message);
                processedCount++;
            }
        }));

        // Modest delay between batches to stay well clear of rate limits
        await sleep(1000);
    }

    const finalCount = await qBank.countDocuments();
    console.log('\n🎉 ====================================================');
    console.log(`🎉 COMPLETED! Total questions added in this run: ${addedCount}`);
    console.log(`📊 Final questionBank total documents: ${finalCount}`);
    console.log('🎉 ====================================================');

    await client.close();
}

main().catch(console.error);
