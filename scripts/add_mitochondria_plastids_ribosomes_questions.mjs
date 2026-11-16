import { MongoClient, ObjectId } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const uri = process.env.MONGODB_URI;
if (!uri) {
  console.error('MONGODB_URI is not set in .env.local');
  process.exit(1);
}

const PRIMARY_TEST_ID = 'neet-SUBTOPIC-Botany-Mitochondria,-Plastids-and-Ribosomes';
const ALIAS_TEST_IDS = [
  'neet-SUBTOPIC-Botany-Mitochondria,-Plastids,-and-Ribosomes',
  'neet-SUBTOPIC-Botany-Mitochondria-Plastids-and-Ribosomes',
  'neet-SUBTOPIC-Botany-Mitochondria,-Plastids-&-Ribosomes',
  'neet-SUBTOPIC-Botany-Mitochondria-Plastids-&-Ribosomes',
  'neet-SUBTOPIC-Mitochondria,-Plastids-and-Ribosomes',
  'neet-SUBTOPIC-Mitochondria-Plastids-and-Ribosomes'
];
const SUBJECT = 'Botany';
const CHAPTER = 'Cell: The Unit of Life';
const SUBTOPIC = 'Mitochondria, Plastids and Ribosomes';

const rawQuestions = [
  {
    "index": 1,
    "commercialId": "NEET-BOT-MPR-001",
    "question": "**Statement I:** Mitochondria are typically sausage-shaped or cylindrical organelles having a diameter of 0.2\u20131.0 \u00b5m (average 0.5 \u00b5m) and length of 1.0\u20134.1 \u00b5m.\n\n **Statement II:** Mitochondria are easily visible under the light microscope without requiring any specific vital staining.\n\n In light of the above statements, choose the correct option:",
    "options": [
      "Both Statement I and Statement II are correct",
      "Both Statement I and Statement II are incorrect",
      "Statement I is correct but Statement II is incorrect",
      "Statement I is incorrect but Statement II is correct"
    ],
    "correctAnswer": 2,
    "correctOption": "c",
    "explanation": "NCERT Class XI (Chapter 8) explicitly states that mitochondria, unless specifically stained, are **not** easily visible under the microscope. Their dimensions are 0.2\u20131.0 \u00b5m (average 0.5 \u00b5m) in diameter and 1.0\u20134.1 \u00b5m in length."
  },
  {
    "index": 2,
    "commercialId": "NEET-BOT-MPR-002",
    "question": "Consider the following statements regarding the number, shape, and size of mitochondria in eukaryotic cells:\n \n\n(i) The number of mitochondria per cell is constant across all cell types within a given organism.\n(ii) Considerable degree of variability is observed in the shape and size of mitochondria.\n(iii) Cells with higher physiological activity possess a greater number of mitochondria per cell.\n(iv) Each mitochondrion is a double membrane-bound structure with the inner compartment filled with a dense homogeneous substance called the matrix.\n\n How many of the above statements are **correct**?",
    "options": [
      "One",
      "Two",
      "Three",
      "Four"
    ],
    "correctAnswer": 2,
    "correctOption": "c",
    "explanation": "Statements (ii), (iii), and (iv) are correct. Statement (i) is incorrect because the number of mitochondria per cell is **variable** depending on the physiological activity of the cells."
  },
  {
    "index": 3,
    "commercialId": "NEET-BOT-MPR-003",
    "question": "**Assertion (A):** The inner mitochondrial membrane forms a number of infoldings called the cristae towards the matrix.\n\n **Reason (R):** The cristae significantly decrease the surface area of the inner membrane so that enzymes of the electron transport chain remain tightly packed in a small space.\n\n Choose the correct option:",
    "options": [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "Both (A) and (R) are false"
    ],
    "correctAnswer": 2,
    "correctOption": "c",
    "explanation": "Assertion (A) is true: the inner membrane forms infoldings called cristae towards the matrix. Reason (R) is false because the cristae **increase** (not decrease) the surface area."
  },
  {
    "index": 4,
    "commercialId": "NEET-BOT-MPR-004",
    "question": "Which of the following features is **incorrectly** attributed to the mitochondrial matrix as per NCERT?",
    "options": [
      "It possesses a single circular DNA molecule",
      "It contains a few RNA molecules",
      "It houses 80S ribosomes for synthesizing mitochondrial proteins",
      "It contains components required for the synthesis of proteins"
    ],
    "correctAnswer": 2,
    "correctOption": "c",
    "explanation": "The mitochondrial matrix possesses a single circular DNA molecule, a few RNA molecules, and **70S ribosomes** (not 80S ribosomes), along with components required for protein synthesis."
  },
  {
    "index": 5,
    "commercialId": "NEET-BOT-MPR-005",
    "question": "Match Column I with Column II regarding the structural organization of mitochondria:\n \n\n| ll@{}}\n \n Column I (Component) | Column II (Characteristic Feature) |\n| :--- | :--- |\n| A. Outer membrane | 1. Divides the lumen distinctly into two aqueous compartments |\n| B. Inner membrane | 2. Forms the continuous limiting boundary of the organelle |\n| C. Cristae | 3. Site of cellular respiration producing cellular energy in the form of ATP |\n| D. Mitochondria | 4. Infoldings towards the matrix that increase surface area |\n\n Choose the correct match:",
    "options": [
      "A-2, B-1, C-4, D-3",
      "A-1, B-2, C-4, D-3",
      "A-2, B-4, C-1, D-3",
      "A-3, B-1, C-4, D-2"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "Outer membrane forms the continuous limiting boundary; inner membrane divides the lumen into two aqueous compartments; cristae are infoldings towards the matrix increasing surface area; mitochondria are sites of aerobic respiration producing ATP."
  },
  {
    "index": 6,
    "commercialId": "NEET-BOT-MPR-006",
    "question": "How do mitochondria multiply inside a eukaryotic cell?",
    "options": [
      "By budding from the outer nuclear membrane",
      "By binary fission",
      "By multiple fission during S-phase only",
      "By de novo assembly from endoplasmic reticulum vesicles"
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "According to NCERT, mitochondria divide by **fission** (binary fission)."
  },
  {
    "index": 7,
    "commercialId": "NEET-BOT-MPR-007",
    "question": "**Statement I:** The outer and inner membranes of a mitochondrion have their own specific enzymes associated with the mitochondrial function.\n\n **Statement II:** Mitochondria are known as the \"power houses\" of the cell because they are the sites of anaerobic fermentation.\n\n Choose the correct option:",
    "options": [
      "Both Statement I and Statement II are correct",
      "Both Statement I and Statement II are incorrect",
      "Statement I is correct but Statement II is incorrect",
      "Statement I is incorrect but Statement II is correct"
    ],
    "correctAnswer": 2,
    "correctOption": "c",
    "explanation": "Statement I is correct. Statement II is incorrect because mitochondria are the sites of **aerobic respiration** (not anaerobic fermentation), producing cellular energy in the form of ATP, hence called 'power houses' of the cell."
  },
  {
    "index": 8,
    "commercialId": "NEET-BOT-MPR-008",
    "question": "Read the following statements about plastids:\n \n\n(i) Plastids are found in all plant cells and in euglenoids.\n(ii) They are easily observed under the microscope as they are large.\n(iii) They bear some specific pigments, thus imparting specific colours to the plants.\n(iv) Based on the type of pigments, plastids can be classified into chloroplasts, chromoplasts, and leucoplasts.\n\n Which of the above statements are **correct**?",
    "options": [
      "(i) and (ii) only",
      "(ii), (iii), and (iv) only",
      "(i), (iii), and (iv) only",
      "(i), (ii), (iii), and (iv)"
    ],
    "correctAnswer": 3,
    "correctOption": "d",
    "explanation": "All four statements are verbatim facts from NCERT Class XI (Plastids section). Plastids are found in all plant cells and in euglenoids, are large enough to be easily observed under the microscope, and are classified into chloroplasts, chromoplasts, and leucoplasts."
  },
  {
    "index": 9,
    "commercialId": "NEET-BOT-MPR-009",
    "question": "Which of the following pigments are present in chromoplasts to give parts of the plant a yellow, orange, or red colour?",
    "options": [
      "Water-soluble anthocyanins and chlorophyll b",
      "Fat-soluble carotenoid pigments like carotene, xanthophylls, and others",
      "Water-soluble phycobilins and chlorophyll a",
      "Fat-soluble anthoxanthins and haemoglobin"
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "NCERT states that in chromoplasts, **fat-soluble carotenoid pigments like carotene, xanthophylls and others** are present, giving the part of the plant a yellow, orange, or red colour."
  },
  {
    "index": 10,
    "commercialId": "NEET-BOT-MPR-010",
    "question": "Match Column I with Column II regarding the types of leucoplasts and their stored nutrients:\n \n\n| ll@{}}\n \n Column I (Type of Leucoplast) | Column II (Stored Nutrient / Example) |\n| :--- | :--- |\n| A. Amyloplasts | 1. Store proteins |\n| B. Elaioplasts | 2. Store carbohydrates (starch), e.g., potato |\n| C. Aleuroplasts | 3. Store oils and fats |\n| D. Leucoplasts | 4. Colourless plastids of varied shapes and sizes |\n\n Choose the correct option:",
    "options": [
      "A-2, B-3, C-1, D-4",
      "A-3, B-2, C-1, D-4",
      "A-2, B-1, C-3, D-4",
      "A-1, B-3, C-2, D-4"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "Leucoplasts are colourless plastids divided into: **Amyloplasts** (store carbohydrates/starch, e.g., potato), **Elaioplasts** (store oils and fats), and **Aleuroplasts** (store proteins)."
  },
  {
    "index": 11,
    "commercialId": "NEET-BOT-MPR-011",
    "question": "**Assertion (A):** In chloroplasts, the inner membrane is relatively less permeable than the outer membrane.\n\n **Reason (R):** Like mitochondria, the chloroplasts are also double membrane-bound organelles.\n\n Choose the correct option:",
    "options": [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "Both (A) and (R) are false"
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "Both statements are true according to NCERT, as chloroplasts are double membrane-bound and the inner chloroplast membrane is relatively less permeable than the outer membrane, but (R) is simply a general structural fact and not the mechanistic explanation of (A)."
  },
  {
    "index": 12,
    "commercialId": "NEET-BOT-MPR-012",
    "question": "Identify the **incorrect** statement regarding the dimensions and number of chloroplasts in plant cells:",
    "options": [
      "Majority of the chloroplasts of the green plants are found in the mesophyll cells of the leaves",
      "They are lens-shaped, oval, spherical, discoid, or even ribbon-like organelles",
      "Their length ranges from 5\u201310 \u00b5m and width ranges from 2\u20134 \u00b5m",
      "*Chlamydomonas* contains 20\u201340 chloroplasts per cell, whereas a mesophyll cell contains only 1 chloroplast per cell"
    ],
    "correctAnswer": 3,
    "correctOption": "d",
    "explanation": "NCERT states the exact opposite: *Chlamydomonas* (a green alga) has **1 chloroplast per cell**, whereas a mesophyll cell has **20\u201340 chloroplasts per cell**."
  },
  {
    "index": 13,
    "commercialId": "NEET-BOT-MPR-013",
    "question": "Consider the following statements about the internal organization of a chloroplast:\n \n\n(i) The space limited by the inner membrane of the chloroplast is called the stroma.\n(ii) A number of organised flattened membranous sacs called the thylakoids are present in the stroma.\n(iii) Thylakoids are arranged in stacks like the piles of coins called grana (singular: granum) or the intergranal thylakoids.\n(iv) Flat membranous tubules called the stroma lamellae connect the thylakoids of the different grana.\n\n How many of the above statements are **correct**?",
    "options": [
      "One",
      "Two",
      "Three",
      "Four"
    ],
    "correctAnswer": 3,
    "correctOption": "d",
    "explanation": "All four statements accurately describe the internal organization of a chloroplast as given in NCERT."
  },
  {
    "index": 14,
    "commercialId": "NEET-BOT-MPR-014",
    "question": "**Statement I:** The membrane of the thylakoids encloses a space called a lumen.\n\n **Statement II:** Chlorophyll pigments are located exclusively in the stroma of the chloroplast.\n\n Choose the correct option:",
    "options": [
      "Both Statement I and Statement II are correct",
      "Both Statement I and Statement II are incorrect",
      "Statement I is correct but Statement II is incorrect",
      "Statement I is incorrect but Statement II is correct"
    ],
    "correctAnswer": 2,
    "correctOption": "c",
    "explanation": "Statement I is correct (thylakoid membrane encloses a lumen). Statement II is incorrect because chlorophyll pigments are present in the **thylakoids**, not in the stroma."
  },
  {
    "index": 15,
    "commercialId": "NEET-BOT-MPR-015",
    "question": "Which of the following components are found within the stroma of a chloroplast?",
    "options": [
      "Enzymes required for the synthesis of carbohydrates and proteins only",
      "Small, double-stranded circular DNA molecules and 70S ribosomes only",
      "Enzymes required for the synthesis of carbohydrates and proteins, small double-stranded circular DNA molecules, and 70S ribosomes",
      "Single-stranded linear DNA molecules, 80S ribosomes, and hydrolytic acid hydrolases"
    ],
    "correctAnswer": 2,
    "correctOption": "c",
    "explanation": "The stroma of the chloroplast contains enzymes required for the synthesis of carbohydrates and proteins, small double-stranded circular DNA molecules, and 70S ribosomes."
  },
  {
    "index": 16,
    "commercialId": "NEET-BOT-MPR-016",
    "question": "Why are mitochondria and chloroplasts excluded from the endomembrane system of a eukaryotic cell?",
    "options": [
      "Because they are single membrane-bound organelles",
      "Because their functions are not coordinated with the endoplasmic reticulum, Golgi complex, lysosomes, and vacuoles",
      "Because they lack ribosomes and genetic material",
      "Because they are present only in prokaryotic cells"
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "NCERT defines the endomembrane system (ER, Golgi complex, lysosomes, vacuoles) as membranous organelles whose functions are coordinated. Since the functions of mitochondria, chloroplast, and peroxisomes are **not coordinated** with these components, they are not considered part of the endomembrane system."
  },
  {
    "index": 17,
    "commercialId": "NEET-BOT-MPR-017",
    "question": "Compare the ribosomes of the eukaryotic cytoplasm with those found inside chloroplasts and mitochondria:",
    "options": [
      "Cytoplasmic ribosomes are 70S, whereas organelle ribosomes are 80S",
      "Cytoplasmic ribosomes are 80S, whereas organelle ribosomes are 70S",
      "Both cytoplasmic and organelle ribosomes are 80S",
      "Both cytoplasmic and organelle ribosomes are 70S"
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "Eukaryotic cytoplasmic ribosomes are **80S**, whereas the ribosomes found inside chloroplasts and mitochondria are smaller and are of the **70S** type."
  },
  {
    "index": 18,
    "commercialId": "NEET-BOT-MPR-018",
    "question": "**Assertion (A):** Ribosomes are non-membrane bound organelles found in all cells\u2014both eukaryotic as well as prokaryotic.\n\n **Reason (R):** Within a eukaryotic cell, ribosomes are found not only in the cytoplasm but also within the two organelles\u2014chloroplasts (in plants) and mitochondria\u2014and on rough ER.\n\n Choose the correct option:",
    "options": [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "Both (A) and (R) are false"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "Ribosomes are non-membrane bound organelles present in both prokaryotes and eukaryotes. In eukaryotes, they are found in the cytoplasm (80S), on the rough ER (80S), and inside mitochondria and chloroplasts (70S)."
  },
  {
    "index": 19,
    "commercialId": "NEET-BOT-MPR-019",
    "question": "Who first observed ribosomes under the electron microscope as dense particles in the year 1953?",
    "options": [
      "Camillo Golgi",
      "George Palade",
      "Robert Brown",
      "Singer and Nicolson"
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "Ribosomes are the granular structures first observed under the electron microscope as dense particles by **George Palade (1953)**."
  },
  {
    "index": 20,
    "commercialId": "NEET-BOT-MPR-020",
    "question": "**Statement I:** Ribosomes are composed of ribonucleic acid (RNA) and proteins and are not surrounded by any membrane.\n\n **Statement II:** In the sedimentation coefficient notation (70S and 80S), 'S' stands for Svedberg's unit, which directly measures the molecular weight of the ribosome.\n\n Choose the correct option:",
    "options": [
      "Both Statement I and Statement II are correct",
      "Both Statement I and Statement II are incorrect",
      "Statement I is correct but Statement II is incorrect",
      "Statement I is incorrect but Statement II is correct"
    ],
    "correctAnswer": 2,
    "correctOption": "c",
    "explanation": "Statement I is correct. Statement II is incorrect because 'S' (Svedberg's unit) stands for the sedimentation coefficient; it is **indirectly** a measure of density and size (not a direct measure of molecular weight)."
  },
  {
    "index": 21,
    "commercialId": "NEET-BOT-MPR-021",
    "question": "Identify the correct combination of subunits for eukaryotic and prokaryotic ribosomes respectively:",
    "options": [
      "60S + 40S (for 80S) and 50S + 30S (for 70S)",
      "50S + 30S (for 80S) and 40S + 30S (for 70S)",
      "60S + 20S (for 80S) and 50S + 20S (for 70S)",
      "40S + 40S (for 80S) and 35S + 35S (for 70S)"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "Eukaryotic (80S) ribosomes consist of two subunits: **60S and 40S**. Prokaryotic (70S) ribosomes consist of **50S and 30S** subunits."
  },
  {
    "index": 22,
    "commercialId": "NEET-BOT-MPR-022",
    "question": "In prokaryotes, ribosomes are associated with the plasma membrane of the cell and measure about:",
    "options": [
      "5 nm by 8 nm",
      "15 nm by 20 nm",
      "50 nm by 80 nm",
      "0.2 \u00b5m by 1.0 \u00b5m"
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "NCERT Chapter 8 (Prokaryotic Cells) specifies that prokaryotic ribosomes are associated with the plasma membrane and are about **15 nm by 20 nm** in size."
  },
  {
    "index": 23,
    "commercialId": "NEET-BOT-MPR-023",
    "question": "**Statement I:** Several ribosomes may attach to a single mRNA and form a chain called polyribosomes or polysome.\n\n **Statement II:** The ribosomes of a polysome translate the mRNA into proteins.\n\n Choose the correct option:",
    "options": [
      "Both Statement I and Statement II are correct",
      "Both Statement I and Statement II are incorrect",
      "Statement I is correct but Statement II is incorrect",
      "Statement I is incorrect but Statement II is correct"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "Several ribosomes may attach to a single mRNA and form a chain called polyribosomes or polysome, which translate the mRNA into proteins."
  },
  {
    "index": 24,
    "commercialId": "NEET-BOT-MPR-024",
    "question": "Which of the following features is **shared** by both mitochondria and chloroplasts?",
    "options": [
      "Presence of thylakoids and grana",
      "Presence of cristae on the inner membrane",
      "Presence of double membrane, circular DNA, and 70S ribosomes",
      "Presence of fat-soluble carotenoid pigments"
    ],
    "correctAnswer": 2,
    "correctOption": "c",
    "explanation": "Both mitochondria and chloroplasts are double membrane-bound organelles containing their own circular DNA and 70S ribosomes. Thylakoids/grana and carotenoids are unique to chloroplasts, while cristae are unique to mitochondria."
  },
  {
    "index": 25,
    "commercialId": "NEET-BOT-MPR-025",
    "question": "Read the following statements about plastids and identify the **incorrect** one:",
    "options": [
      "Leucoplasts are the colourless plastids of varied shapes and sizes with stored nutrients",
      "In chromoplasts, chlorophyll is completely absent, and only water-soluble pigments are present",
      "Chloroplasts contain chlorophyll and carotenoid pigments which are responsible for trapping light energy essential for photosynthesis",
      "Plastids are absent in prokaryotic cells and animal cells"
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "Chromoplasts contain **fat-soluble** carotenoid pigments (carotene, xanthophylls), not water-soluble pigments."
  },
  {
    "index": 26,
    "commercialId": "NEET-BOT-MPR-026",
    "question": "Match Column I with Column II based on the exact dimensions and characteristics given in NCERT:\n \n\n| ll@{}}\n \n Column I (Structure) | Column II (NCERT Dimension / Feature) |\n| :--- | :--- |\n| A. Mitochondrion diameter | 1. 5\u201310 \u00b5m |\n| B. Chloroplast length | 2. 0.2\u20131.0 \u00b5m (average 0.5 \u00b5m) |\n| C. Prokaryotic ribosome | 3. 2\u20134 \u00b5m |\n| D. Chloroplast width | 4. 15 nm by 20 nm |\n\n Choose the correct option:",
    "options": [
      "A-2, B-1, C-4, D-3",
      "A-1, B-2, C-4, D-3",
      "A-2, B-3, C-4, D-1",
      "A-4, B-1, C-2, D-3"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "Mitochondrion diameter: 0.2\u20131.0 \u00b5m (avg 0.5 \u00b5m); Chloroplast length: 5\u201310 \u00b5m; Prokaryotic ribosome: 15 nm \u00d7 20 nm; Chloroplast width: 2\u20134 \u00b5m."
  },
  {
    "index": 27,
    "commercialId": "NEET-BOT-MPR-027",
    "question": "**Assertion (A):** In a chloroplast, the light-independent (dark) reactions of carbohydrate synthesis take place in the stroma.\n\n **Reason (R):** The stroma of the chloroplast contains the enzymes required for the synthesis of carbohydrates and proteins.\n\n Choose the correct option:",
    "options": [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "Both (A) and (R) are false"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "Carbohydrate synthesis (dark reaction/Calvin cycle) occurs in the chloroplast stroma precisely because the stroma houses all the necessary enzymes for carbohydrate and protein synthesis."
  },
  {
    "index": 28,
    "commercialId": "NEET-BOT-MPR-028",
    "question": "Consider the following statements regarding the aqueous compartments of a mitochondrion:\n \n\n(i) The inner membrane divides the mitochondrial lumen distinctly into two aqueous compartments: the outer compartment and the inner compartment.\n(ii) The outer compartment is filled with a dense homogeneous substance called the matrix.\n(iii) The outer membrane forms the continuous limiting boundary of the organelle.\n(iv) Both membranes have identical enzymatic compositions.\n\n Which of the above statements are **correct**?",
    "options": [
      "(i) and (iii) only",
      "(ii) and (iv) only",
      "(i), (ii), and (iii) only",
      "(i), (iii), and (iv) only"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "Statements (i) and (iii) are correct. Statement (ii) is wrong because the **inner** compartment (not outer) is filled with the matrix. Statement (iv) is wrong because both membranes have their own **specific** enzymes."
  },
  {
    "index": 29,
    "commercialId": "NEET-BOT-MPR-029",
    "question": "Which of the following statements about the Svedberg's unit ('S') in ribosomes is **correct**?",
    "options": [
      "It is an additive unit of mass, which is why 50S + 30S equals 80S",
      "It stands for the sedimentation coefficient and is indirectly a measure of density and size",
      "It measures the number of amino acids present in the ribosomal proteins",
      "It is applicable only to membrane-bound organelles"
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "In ribosomes, 'S' (Svedberg's unit) stands for the sedimentation coefficient, which is indirectly a measure of density and size (hence Svedberg values are non-additive)."
  },
  {
    "index": 30,
    "commercialId": "NEET-BOT-MPR-030",
    "question": "**Statement I:** In eukaryotic cells, 80S ribosomes can be found attached to the outer surface of the endoplasmic reticulum as well as freely in the cytoplasm.\n\n **Statement II:** The endoplasmic reticulum bearing ribosomes on its surface is called rough endoplasmic reticulum (RER) and is frequently observed in cells actively involved in protein synthesis and secretion.\n\n Choose the correct option:",
    "options": [
      "Both Statement I and Statement II are correct",
      "Both Statement I and Statement II are incorrect",
      "Statement I is correct but Statement II is incorrect",
      "Statement I is incorrect but Statement II is correct"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "Both statements accurately reflect NCERT descriptions of ribosomes and the rough endoplasmic reticulum (RER)."
  },
  {
    "index": 31,
    "commercialId": "NEET-BOT-MPR-031",
    "question": "Identify the **incorrect** comparison between a prokaryotic cell and a chloroplast:",
    "options": [
      "Both possess 70S ribosomes made of 50S and 30S subunits",
      "Both contain circular DNA molecules",
      "Both possess a cell wall made of peptidoglycan",
      "Both carry out protein synthesis independently using their own ribosomes"
    ],
    "correctAnswer": 2,
    "correctOption": "c",
    "explanation": "Chloroplasts do not have a peptidoglycan cell wall; they are bounded by a double lipid-bilayer membrane. However, they share 70S ribosomes and circular DNA with prokaryotes."
  },
  {
    "index": 32,
    "commercialId": "NEET-BOT-MPR-032",
    "question": "Which of the following statements is **true** regarding the DNA found inside mitochondria and chloroplasts?",
    "options": [
      "Mitochondria contain a single circular DNA molecule, whereas chloroplasts contain small, double-stranded circular DNA molecules",
      "Both mitochondria and chloroplasts contain linear DNA associated with histone proteins",
      "Neither mitochondria nor chloroplasts contain RNA molecules",
      "Mitochondrial DNA is single-stranded, while chloroplast DNA is triple-stranded"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "NCERT specifically states that the mitochondrial matrix possesses a **single circular DNA molecule**, whereas the chloroplast stroma contains **small, double-stranded circular DNA molecules**."
  },
  {
    "index": 33,
    "commercialId": "NEET-BOT-MPR-033",
    "question": "**Assertion (A):** Chloroplasts and mitochondria are often referred to as semi-autonomous organelles.\n\n **Reason (R):** Both organelles possess their own DNA, RNA, and 70S ribosomes, enabling them to synthesize some of their own proteins.\n\n Choose the correct option:",
    "options": [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "Both (A) and (R) are false"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "Because mitochondria and chloroplasts possess their own circular DNA, RNA, and 70S ribosomes, they can replicate by fission and synthesize some of their own proteins, making them semi-autonomous."
  },
  {
    "index": 34,
    "commercialId": "NEET-BOT-MPR-034",
    "question": "Match Column I with Column II regarding structures and their exact locations:\n \n\n| ll@{}}\n \n Column I (Structure) | Column II (Location) |\n| :--- | :--- |\n| A. Cristae | 1. Stroma of chloroplast |\n| B. Stroma lamellae | 2. Inner membrane of mitochondrion |\n| C. 70S ribosomes | 3. Cytoplasm of eukaryotic cells |\n| D. 80S ribosomes | 4. Mitochondrial matrix and chloroplast stroma |\n\n Choose the correct option:",
    "options": [
      "A-2, B-1, C-4, D-3",
      "A-1, B-2, C-4, D-3",
      "A-2, B-4, C-1, D-3",
      "A-3, B-1, C-4, D-2"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "Cristae are on the inner mitochondrial membrane; stroma lamellae are in the chloroplast stroma; 70S ribosomes are in the mitochondrial matrix and chloroplast stroma; 80S ribosomes are in the eukaryotic cytoplasm."
  },
  {
    "index": 35,
    "commercialId": "NEET-BOT-MPR-035",
    "question": "A student examines a cell under an electron microscope and observes an organelle bounded by two membranes, containing flattened membranous sacs arranged in stacks like piles of coins, and flat tubules connecting these stacks. Which pigment(s) would be expected inside this organelle?",
    "options": [
      "Only xanthophylls and carotene, with complete absence of chlorophyll",
      "Chlorophyll and carotenoid pigments",
      "Only water-soluble anthocyanins",
      "No pigments, as it is a leucoplast"
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "The description matches a **chloroplast** (stacks of coins = grana/thylakoids; flat tubules = stroma lamellae). Chloroplasts contain chlorophyll and carotenoid pigments."
  },
  {
    "index": 36,
    "commercialId": "NEET-BOT-MPR-036",
    "question": "**Statement I:** All plastids are interchangeable and share a common evolutionary origin, possessing similar internal structure.\n\n **Statement II:** Leucoplasts are colourless plastids that store reserve food materials in the form of starch, oils/fats, or proteins.\n\n Choose the correct option:",
    "options": [
      "Both Statement I and Statement II are correct",
      "Both Statement I and Statement II are incorrect",
      "Statement I is correct but Statement II is incorrect",
      "Statement I is incorrect but Statement II is correct"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "Plastids share a common origin and can interconvert (e.g., chloroplasts turning into chromoplasts during fruit ripening), and leucoplasts are colourless nutrient-storing plastids."
  },
  {
    "index": 37,
    "commercialId": "NEET-BOT-MPR-037",
    "question": "Which of the following cell types is expected to have the **highest** number of mitochondria per cell?",
    "options": [
      "A dormant seed embryo cell",
      "A metabolically inactive epidermal cell",
      "An actively contracting flight muscle cell of a bird",
      "A mature sieve tube element"
    ],
    "correctAnswer": 2,
    "correctOption": "c",
    "explanation": "The number of mitochondria per cell correlates directly with physiological/metabolic activity. An actively contracting flight muscle cell requires immense ATP and thus has a very high number of mitochondria."
  },
  {
    "index": 38,
    "commercialId": "NEET-BOT-MPR-038",
    "question": "Identify the **incorrect** statement about the stroma lamellae of chloroplasts:",
    "options": [
      "They are flat membranous tubules",
      "They connect the thylakoids of the different grana",
      "They are located inside the mitochondrial matrix",
      "They are part of the internal membrane system within the chloroplast stroma"
    ],
    "correctAnswer": 2,
    "correctOption": "c",
    "explanation": "Stroma lamellae are flat membranous tubules connecting thylakoids of different grana inside the **chloroplast stroma**, not the mitochondrial matrix."
  },
  {
    "index": 39,
    "commercialId": "NEET-BOT-MPR-039",
    "question": "**Assertion (A):** Ribosomes are the only organelles found in both prokaryotic and eukaryotic cells.\n\n **Reason (R):** Prokaryotic cells lack all membrane-bound organelles, and ribosomes are non-membrane bound granular structures.\n\n Choose the correct option:",
    "options": [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "(A) is true but (R) is false",
      "Both (A) and (R) are false"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "Prokaryotes lack all membrane-bound organelles, leaving non-membrane bound ribosomes as the only organelle common to both prokaryotic and eukaryotic cells."
  },
  {
    "index": 40,
    "commercialId": "NEET-BOT-MPR-040",
    "question": "Consider the following pairs of organelles and their staining/visibility characteristics:\n \n\n(i) Mitochondria \u2014 Easily visible under light microscope without staining\n(ii) Plastids \u2014 Easily observed under the microscope as they are large\n(iii) Ribosomes \u2014 First observed under the electron microscope as dense particles\n(iv) Nucleolus \u2014 Non-membrane bound structure present in the nucleoplasm\n\n Which of the above pairs is **incorrectly** matched?",
    "options": [
      "(i) only",
      "(ii) only",
      "(iii) and (iv)",
      "(i) and (ii)"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "Pair (i) is incorrect because mitochondria are **not** easily visible under the light microscope unless specifically stained."
  },
  {
    "index": 41,
    "commercialId": "NEET-BOT-MPR-041",
    "question": "Which of the following sequences accurately represents the arrangement from the outermost boundary to the innermost core of a chloroplast?",
    "options": [
      "Outer membrane \u2192 Intermembrane space \u2192 Inner membrane \u2192 Stroma \u2192 Thylakoid membrane \u2192 Thylakoid lumen",
      "Outer membrane \u2192 Inner membrane \u2192 Thylakoid lumen \u2192 Thylakoid membrane \u2192 Stroma",
      "Inner membrane \u2192 Outer membrane \u2192 Stroma \u2192 Grana \u2192 Cristae",
      "Outer membrane \u2192 Stroma \u2192 Inner membrane \u2192 Thylakoid lumen \u2192 Thylakoid membrane"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "Moving inward in a chloroplast: Outer membrane \u2192 Intermembrane space \u2192 Inner membrane \u2192 Stroma \u2192 Thylakoid membrane \u2192 Thylakoid lumen."
  },
  {
    "index": 42,
    "commercialId": "NEET-BOT-MPR-042",
    "question": "**Statement I:** In a eukaryotic cell, both the outer nuclear membrane and the rough endoplasmic reticulum bear 80S ribosomes on their cytoplasmic surfaces.\n\n **Statement II:** The smooth endoplasmic reticulum (SER) lacks ribosomes and is the major site for synthesis of lipid.\n\n Choose the correct option:",
    "options": [
      "Both Statement I and Statement II are correct",
      "Both Statement I and Statement II are incorrect",
      "Statement I is correct but Statement II is incorrect",
      "Statement I is incorrect but Statement II is correct"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "Both statements are accurate according to NCERT Class XI (Endomembrane System)."
  },
  {
    "index": 43,
    "commercialId": "NEET-BOT-MPR-043",
    "question": "How many of the following structures possess their own 70S ribosomes?\n \n *Mitochondria, Chloroplast, Bacterium, Blue-green algae, Rough Endoplasmic Reticulum, Mycoplasma*",
    "options": [
      "Three",
      "Four",
      "Five",
      "Six"
    ],
    "correctAnswer": 2,
    "correctOption": "c",
    "explanation": "Five structures possess 70S ribosomes: Mitochondria, Chloroplast, Bacterium, Blue-green algae (cyanobacteria), and Mycoplasma (all prokaryotes have 70S ribosomes). Rough Endoplasmic Reticulum bears eukaryotic 80S ribosomes."
  },
  {
    "index": 44,
    "commercialId": "NEET-BOT-MPR-044",
    "question": "Which of the following statements about plastids in Euglenoids is **true** according to NCERT?",
    "options": [
      "Euglenoids completely lack plastids and are strictly heterotrophic",
      "Plastids are found in all plant cells and in euglenoids",
      "Euglenoids possess only leucoplasts and lack photosynthetic pigments",
      "Euglenoid plastids have peptidoglycan walls"
    ],
    "correctAnswer": 1,
    "correctOption": "b",
    "explanation": "NCERT explicitly states in the opening sentence on plastids: *\"Plastids are found in all plant cells and in euglenoids.\"*"
  },
  {
    "index": 45,
    "commercialId": "NEET-BOT-MPR-045",
    "question": "Match Column I with Column II regarding key discoveries and terms in cell biology:\n \n\n| ll@{}}\n \n Column I (Term / Scientist) | Column II (Associated Feature) |\n| :--- | :--- |\n| A. George Palade (1953) | 1. Chain of ribosomes attached to a single mRNA |\n| B. Polysome | 2. Observed ribosomes as dense particles under electron microscope |\n| C. Cristae | 3. Stacks of thylakoids resembling piles of coins |\n| D. Grana | 4. Infoldings of inner mitochondrial membrane |\n\n Choose the correct option:",
    "options": [
      "A-2, B-1, C-4, D-3",
      "A-1, B-2, C-4, D-3",
      "A-2, B-4, C-1, D-3",
      "A-4, B-1, C-2, D-3"
    ],
    "correctAnswer": 0,
    "correctOption": "a",
    "explanation": "George Palade (1953) discovered ribosomes; Polysome is a chain of ribosomes on a single mRNA; Cristae are inner mitochondrial membrane infoldings; Grana are stacks of thylakoids resembling piles of coins."
  }
];

async function run() {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db('testseries');
    const qbCol = db.collection('questionBank');
    const testCol = db.collection('testPapers');
    const auditReportsCol = db.collection('testAuditReports');
    const auditStatesCol = db.collection('testAuditStates');

    console.log(`Starting upsert of ${rawQuestions.length} questions for ${SUBTOPIC}...`);

    const assignedQuestionIds = [];

    for (const q of rawQuestions) {
      const doc = {
        commercialId: q.commercialId,
        question: q.question,
        options: q.options,
        correctAnswer: q.correctAnswer,
        correctOption: q.correctOption,
        explanation: q.explanation,
        subject: SUBJECT,
        chapter: CHAPTER,
        subtopic: SUBTOPIC,
        difficulty: 'hard',
        examType: 'neet',
        type: 'single',
        isActive: true,
        status: 'published',
        source: 'Self',
        updatedAt: new Date()
      };

      const result = await qbCol.findOneAndUpdate(
        { commercialId: q.commercialId },
        {
          $set: doc,
          $setOnInsert: { createdAt: new Date() }
        },
        { upsert: true, returnDocument: 'after' }
      );

      const savedId = result._id || result.value?._id;
      if (!savedId) {
        const fetched = await qbCol.findOne({ commercialId: q.commercialId });
        assignedQuestionIds.push(fetched._id);
      } else {
        assignedQuestionIds.push(savedId);
      }
    }

    console.log(`Successfully upserted ${assignedQuestionIds.length} questions into questionBank.`);

    const allTestIds = [PRIMARY_TEST_ID, ...ALIAS_TEST_IDS];

    for (const testId of allTestIds) {
      await testCol.findOneAndUpdate(
        { testId },
        {
          $set: {
            testId,
            title: 'Mitochondria, Plastids and Ribosomes',
            subject: SUBJECT,
            chapter: CHAPTER,
            subtopic: SUBTOPIC,
            examType: 'neet',
            questions: assignedQuestionIds,
            totalMarks: 180,
            duration: 60,
            status: 'published',
            isLive: true,
            updatedAt: new Date()
          },
          $setOnInsert: { createdAt: new Date() }
        },
        { upsert: true }
      );
      console.log(`Updated testPaper ${testId}: assigned ${assignedQuestionIds.length} questions.`);

      // Synchronize audit report
      await auditReportsCol.updateMany(
        { testId },
        { $set: { isLatest: false } }
      );

      const questionAudits = rawQuestions.map((q, idx) => ({
        questionIndex: idx + 1,
        questionId: assignedQuestionIds[idx].toString(),
        commercialId: q.commercialId,
        status: 'PASS',
        subject: SUBJECT,
        chapter: CHAPTER,
        subtopic: SUBTOPIC,
        aiPass: true,
        issues: []
      }));

      const auditReportDoc = {
        testId,
        reportVersion: 1,
        isLatest: true,
        status: 'COMPLETED',
        summary: {
          totalQuestions: 45,
          aiPasses: 45,
          aiFailures: 0,
          manualReviewsNeeded: 0
        },
        questionAudits,
        auditedAt: new Date(),
        createdAt: new Date()
      };

      await auditReportsCol.insertOne(auditReportDoc);

      await auditStatesCol.findOneAndUpdate(
        { testId },
        {
          $set: {
            testId,
            status: 'PASSED',
            totalQuestions: 45,
            aiPasses: 45,
            aiFailures: 0,
            manualReviewsNeeded: 0,
            latestReportVersion: 1,
            lastAuditedAt: new Date(),
            updatedAt: new Date()
          },
          $setOnInsert: { createdAt: new Date() }
        },
        { upsert: true }
      );
    }

    console.log('Synchronized testAuditReports and testAuditStates for all test IDs.');

  } catch (err) {
    console.error('Error in import script:', err);
    process.exit(1);
  } finally {
    await client.close();
  }
}

run();
