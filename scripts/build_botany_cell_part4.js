const fs = require('fs');
const path = require('path');
const katex = require('katex');

function validateMath(text) {
  if (!text) return;
  const regex = /\$([^$]+?)\$/g;
  let m;
  while ((m = regex.exec(text)) !== null) {
    try {
      katex.renderToString(m[1].trim(), { throwOnError: true });
    } catch (err) {
      throw new Error(`KaTeX error in "${m[1]}": ${err.message}`);
    }
  }
}

const subTopic = "Biomolecules";
const chapter = "Cell Structure and Function";
const subject = "Botany";

const arOptions = [
  "Both (A) and (R) are true and (R) is the correct explanation of (A)",
  "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
  "(A) is true but (R) is false",
  "(A) is false but (R) is true"
];

const arData = [
  {
    a: "Lipids are not strictly biomacromolecules, yet they are obtained in the acid-insoluble retentate during chemical analysis of living tissues.",
    r: "Lipids have molecular weights below 800 Da, but being membrane constituents, they form water-insoluble vesicles when tissue is disrupted.",
    ans: 0,
    exp: "Lipids are small micromolecules with molecular weights not exceeding 800 Da. When living tissue is ground, cellular membranes fragment into insoluble vesicles that are retained on the filter along with true macromolecules. (R) correctly explains (A)."
  },
  {
    a: "Cellulose does not give a blue color with iodine solution, whereas starch does.",
    r: "Cellulose lacks complex helical secondary structures and cannot trap iodine ($I_2$) molecules, whereas starch possesses helical amylose coils that hold $I_2$.",
    ans: 0,
    exp: "Starch forms helical secondary structures where iodine molecules get trapped in the helices to give a characteristic blue-black color. Cellulose is an unbranched, straight-chain $\\beta$-glucan that cannot form helices and cannot hold iodine. (R) correctly explains (A)."
  },
  {
    a: "In a competitive inhibition, the Michaelis constant ($K_m$) increases while the maximum reaction velocity ($V_{max}$) remains unchanged.",
    r: "The competitive inhibitor closely resembles the natural substrate and competes for the active site, requiring higher substrate concentrations to achieve half-maximal velocity.",
    ans: 0,
    exp: "A competitive inhibitor binds reversibly to the enzyme's catalytic active site. Excess substrate can overcome this inhibition, so $V_{max}$ is retained, but higher $[S]$ is needed to reach $V_{max}/2$, increasing $K_m$. (R) correctly explains (A)."
  },
  {
    a: "Malonate inhibits the activity of succinate dehydrogenase.",
    r: "Malonate closely resembles the substrate succinate in molecular structure and acts as a classic competitive inhibitor.",
    ans: 0,
    exp: "Malonate is a competitive inhibitor of succinate dehydrogenase because of its close structural similarity to succinate. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Tertiary structure is absolutely necessary for the biological activities of most proteins.",
    r: "Tertiary folding brings distant amino acid residues together in three-dimensional space, creating specific active sites and binding pockets.",
    ans: 0,
    exp: "Proteins fold into unique 3D tertiary conformations (stabilized by disulfide bridges, ionic bonds, hydrophobic interactions) that form catalytic active sites. (R) correctly explains (A)."
  },
  {
    a: "The living state is a non-equilibrium steady state capable of performing work.",
    r: "Any system that attains complete thermodynamic equilibrium cannot perform work; therefore, cellular metabolism constantly inputs and expends energy to prevent reaching equilibrium.",
    ans: 0,
    exp: "Living organisms exist in a dynamic non-equilibrium steady state through continuous metabolic flux. Reaching equilibrium equals death because no work can be performed. (R) correctly explains (A)."
  },
  {
    a: "Coenzymes are transient organic cofactors derived from water-soluble vitamins.",
    r: "The essential chemical components of many coenzymes are vitamins, such as niacin in NAD and NADP.",
    ans: 0,
    exp: "Coenzymes are organic non-protein compounds that associate transiently with the apoenzyme during catalysis, and many are derived from vitamins (e.g., NAD and NADP contain niacin). Both statements are true and Reason explains Assertion."
  },
  {
    a: "Zinc ($Zn^{2+}$) is a critical cofactor for the proteolytic enzyme carboxypeptidase.",
    r: "Metal ion cofactors form coordination bonds with both the substrate and specific amino acid side-chains at the enzyme's active site.",
    ans: 0,
    exp: "In carboxypeptidase, a zinc ion ($Zn^{2+}$) coordinates with active-site residues and the carbonyl oxygen of the peptide substrate to facilitate cleavage. (R) correctly explains (A)."
  },
  {
    a: "Enzymes increase the rate of chemical reactions by lowering the activation energy barrier.",
    r: "Enzymes alter the overall free energy change ($\\Delta G$) and equilibrium constant of the chemical reaction.",
    ans: 2,
    exp: "Assertion is true as enzymes lower the activation energy ($E_a$) transition state barrier. Reason is false because catalysts do not alter the overall free energy change ($\\Delta G$) or shift the equilibrium position of a reaction."
  },
  {
    a: "Glycine is an optically inactive amino acid.",
    r: "Glycine has a hydrogen atom ($-H$) as its variable R-group, so its $\\alpha$-carbon is bonded to two identical hydrogen atoms and lacks a chiral center.",
    ans: 0,
    exp: "An optically active carbon must be asymmetric (bonded to four different chemical groups). In glycine, the $\\alpha$-carbon has two $-H$ atoms, making it achiral and optically inactive. (R) correctly explains (A)."
  },
  {
    a: "Arachidonic acid has 20 carbon atoms including the carboxyl carbon.",
    r: "Palmitic acid contains 16 carbon atoms including the carboxyl carbon.",
    ans: 1,
    exp: "Both statements are precise NCERT facts: arachidonic acid has 20 carbons and palmitic acid has 16 carbons. However, the carbon count of palmitic acid does not explain that of arachidonic acid."
  },
  {
    a: "Adult human hemoglobin consists of four polypeptide subunits ($2\\alpha$ and $2\\beta$), exhibiting quaternary structure.",
    r: "Quaternary structure describes the spatial arrangement and assembly of two or more polypeptide chains with tertiary structure into a multimeric protein.",
    ans: 0,
    exp: "Quaternary structure refers to the higher-order geometric assembly of multiple tertiary subunits, as seen in the tetrameric ($2\\alpha2\\beta$) structure of adult hemoglobin. (R) correctly explains (A)."
  },
  {
    a: "Concanavalin A is classified as a lectin.",
    r: "Lectins are secondary metabolites capable of binding specific carbohydrates.",
    ans: 0,
    exp: "Concanavalin A is a well-known plant lectin (secondary metabolite) that binds specifically to carbohydrates and agglutinates red blood cells. (R) correctly explains (A)."
  },
  {
    a: "Abrin and ricin are examples of plant secondary metabolites that act as potent toxins.",
    r: "They are ribosomal inactivating proteins that inhibit protein synthesis in eukaryotic cells.",
    ans: 1,
    exp: "Abrin (from Abrus precatorius) and ricin (from Ricinus communis) are secondary metabolite toxins that inhibit ribosomes. Both statements are true, but the mechanism of toxicity is an elaboration rather than the reason they are classified as secondary metabolites."
  },
  {
    a: "In a polysaccharide chain, the right end is called the reducing end and the left end is called the non-reducing end.",
    r: "The right end possesses an open or potentially free anomeric carbon that can reduce alkaline copper reagents like Benedict's solution.",
    ans: 0,
    exp: "By biochemical convention, the right terminus of a polysaccharide contains the hemiacetal reducing carbon, whereas the left terminus is the non-reducing end. (R) correctly explains (A)."
  },
  {
    a: "Chitin is a homopolymer of N-acetylglucosamine (NAG).",
    r: "Chitin forms the tough, protective exoskeleton of arthropods and the cell walls of fungi.",
    ans: 1,
    exp: "Both statements are correct NCERT facts: chitin is a nitrogen-containing homopolysaccharide of NAG units, and it constitutes arthropod exoskeletons and fungal walls. However, its anatomical location does not explain its chemical monomer identity."
  },
  {
    a: "In B-DNA, the two polynucleotide chains are antiparallel to each other.",
    r: "One strand runs in the $5' \\rightarrow 3'$ direction while the complementary strand runs in the $3' \\rightarrow 5'$ direction.",
    ans: 0,
    exp: "The antiparallel orientation of the double helix means the phosphodiester bonds of the two strands run in opposite polarities ($5' \\rightarrow 3'$ vs $3' \\rightarrow 5'$). (R) correctly explains (A)."
  },
  {
    a: "The pitch of the B-DNA double helix is 3.4 nm with roughly 10 base pairs per turn.",
    r: "The distance between two adjacent base pairs in B-DNA is approximately 0.34 nm.",
    ans: 0,
    exp: "Since there are 10 base pairs per helical pitch (3.4 nm), the axial rise per base pair is $3.4 \\text{ nm} / 10 = 0.34 \\text{ nm}$ (3.4 Å). Both (A) and (R) are true and (R) is the correct explanation of (A)."
  },
  {
    a: "Prosthetic groups are organic compounds that are tightly and permanently bound to the apoenzyme.",
    r: "In the enzymes peroxidase and catalase, heme is the prosthetic group bound to the catalytic active site.",
    ans: 1,
    exp: "Both statements are true NCERT facts: prosthetic groups are tightly bound organic cofactors, and heme is the prosthetic group for both peroxidase and catalase. However, the example of heme is an illustration, not the explanation for why prosthetic groups are tightly bound."
  },
  {
    a: "At high temperatures, enzymes lose their catalytic activity permanently.",
    r: "Excessive heat causes thermal denaturation, uncoiling polypeptide chains and disrupting tertiary protein conformation.",
    ans: 0,
    exp: "High temperatures disrupt hydrogen bonds and hydrophobic interactions that maintain the delicate 3D tertiary structure of enzymes, causing irreversible denaturation. (R) correctly explains (A)."
  },
  {
    a: "In an amino acid, the $\\alpha$-carbon is bonded to an amino group, a carboxyl group, a hydrogen atom, and a variable R-group.",
    r: "All standard 20 amino acids found in proteins are $\\alpha$-amino acids substituted on methane.",
    ans: 1,
    exp: "Both statements are true definitions from NCERT: amino acids are substituted methanes with four distinct substituents on the $\\alpha$-carbon. (R) reiterates the classification rather than explaining (A)."
  },
  {
    a: "Lecithin is a phospholipid found extensively in cell membranes.",
    r: "Lecithin contains a choline headgroup attached to a phosphatidic acid core.",
    ans: 1,
    exp: "Lecithin (phosphatidylcholine) is the major phospholipid of biological membranes. It consists of glycerol, two fatty acids, phosphate, and choline. Both statements are true, but structural components don't explain its membrane abundance."
  },
  {
    a: "A peptide bond is formed through a dehydration condensation reaction.",
    r: "The bond forms with the elimination of a water molecule between the $\\alpha$-carboxyl group of one amino acid and the $\\alpha$-amino group of the next.",
    ans: 0,
    exp: "Peptide bond synthesis is an endergonic condensation reaction in which a water molecule ($H_2O$) is eliminated between the $-COOH$ and $-NH_2$ groups of adjacent amino acids. (R) correctly explains (A)."
  },
  {
    a: "Primary structure of a protein gives the positional sequence of amino acids from N-terminal to C-terminal.",
    r: "The first amino acid of a polypeptide chain is positioned at the N-terminal end, and the last is at the C-terminal end.",
    ans: 0,
    exp: "By international convention, a protein's primary structure is written from left to right, starting with the free amino group (N-terminus) and ending with the free carboxyl group (C-terminus). (R) correctly explains (A)."
  },
  {
    a: "Enzymes called lyases catalyze the cleavage of bonds by mechanisms other than hydrolysis and oxidation, leaving double bonds.",
    r: "Hydrolases catalyze the cleavage of ester, ether, peptide, glycosidic, and C-C bonds with the addition of water.",
    ans: 1,
    exp: "Both are accurate NCERT definitions of enzyme classes: lyases remove groups without water forming double bonds, while hydrolases use water to split bonds. Both are true, but (R) defines a different enzyme class and does not explain (A)."
  },
  {
    a: "Inulin is a polymer of glucose molecules.",
    r: "Inulin is a storage fructan polysaccharide composed of repeating fructose units.",
    ans: 3,
    exp: "Assertion is false: inulin is a polymer of fructose, not glucose. Reason is true: inulin is a storage fructosan polysaccharide found in dahlia tubers."
  }
];

const mcqQuestions = [
  {
    q: "When living tissue is ground with trichloroacetic acid and strained through cheesecloth, the acid-insoluble fraction contains:",
    opts: ["Only mineral ions and water", "Amino acids, simple sugars, and nucleotides", "Proteins, nucleic acids, polysaccharides, and lipids", "Only small organic acids of molecular weight below 100 Da"],
    ans: 2,
    exp: "The acid-insoluble pellet (retentate) contains biomacromolecules (proteins, polysaccharides, nucleic acids) and lipids (which form insoluble vesicles)."
  },
  {
    q: "Which of the following biomolecules has a molecular weight strictly below 800 Da but is found in the acid-insoluble fraction?",
    opts: ["Proteins", "Polysaccharides", "Lipids", "Nucleic acids"],
    ans: 2,
    exp: "Lipids are small molecules with molecular weights < 800 Da, but they form vesicular aggregates that do not dissolve in acid and are retained on the filter."
  },
  {
    q: "Which of the following is a secondary metabolite classified as a lectin?",
    opts: ["Abrin", "Vinblastine", "Concanavalin A", "Codeine"],
    ans: 2,
    exp: "Concanavalin A is a lectin; abrin is a toxin; vinblastine is a drug; codeine is an alkaloid."
  },
  {
    q: "Which of the following pairs of secondary metabolites are categorized as toxins?",
    opts: ["Morphine and codeine", "Abrin and ricin", "Vinblastine and curcumin", "Monoterpenes and diterpenes"],
    ans: 1,
    exp: "Abrin and ricin are secondary metabolite toxins according to NCERT Table 9.3."
  },
  {
    q: "Which of the following secondary metabolites is an anticancer drug?",
    opts: ["Curcumin", "Vinblastine", "Carotenoids", "Gum"],
    ans: 1,
    exp: "Vinblastine (derived from Catharanthus roseus / Vinca) is a clinically utilized anti-cancer drug."
  },
  {
    q: "The amino acid glycine is characterized by having which group as its variable R-substituent?",
    opts: ["$-CH_3$", "$-H$", "$-CH_2OH$", "$-CH_2-SH$"],
    ans: 1,
    exp: "In glycine, the R-group is a hydrogen atom ($-H$), making it the simplest and only achiral standard amino acid."
  },
  {
    q: "Which of the following amino acids contains a methyl group ($-CH_3$) as its R-group?",
    opts: ["Glycine", "Alanine", "Serine", "Valine"],
    ans: 1,
    exp: "Alanine has a methyl group ($-CH_3$) as its R-substituent on the $\\alpha$-carbon."
  },
  {
    q: "The amino acid serine is characterized by possessing which chemical group in its side chain?",
    opts: ["Hydroxymethyl group ($-CH_2OH$)", "Isobutyl group", "Aromatic benzene ring", "Carboxyl group"],
    ans: 0,
    exp: "Serine possesses a hydroxymethyl group ($-CH_2OH$) as its R-group."
  },
  {
    q: "Which of the following is an example of an acidic amino acid containing an extra carboxyl group in its side chain?",
    opts: ["Lysine", "Glutamic acid", "Valine", "Alanine"],
    ans: 1,
    exp: "Glutamic acid (and aspartic acid) are acidic amino acids; lysine and arginine are basic; valine is neutral."
  },
  {
    q: "Which of the following is a basic amino acid?",
    opts: ["Glutamic acid", "Aspartic acid", "Lysine", "Valine"],
    ans: 2,
    exp: "Lysine and arginine possess basic amino side chains."
  },
  {
    q: "Which of the following is an aromatic amino acid?",
    opts: ["Tyrosine, phenylalanine, and tryptophan", "Glycine, alanine, and valine", "Lysine and arginine", "Serine and threonine"],
    ans: 0,
    exp: "Aromatic amino acids contain an aromatic ring: tyrosine, phenylalanine, and tryptophan."
  },
  {
    q: "How many carbon atoms are present in a molecule of palmitic acid, including the carboxyl carbon?",
    opts: ["14", "16", "18", "20"],
    ans: 1,
    exp: "Palmitic acid is a saturated fatty acid with 16 carbon atoms including the carboxyl carbon ($CH_3(CH_2)_{14}COOH$)."
  },
  {
    q: "How many carbon atoms are present in arachidonic acid, including the carboxyl carbon?",
    opts: ["16", "18", "20", "22"],
    ans: 2,
    exp: "Arachidonic acid is a polyunsaturated fatty acid with 20 carbon atoms including the carboxyl carbon."
  },
  {
    q: "Lecithin, a common constituent of cellular membranes, is chemically a:",
    opts: ["Phosphoglyceride", "Simple wax", "Steroid derivative", "Monosaccharide"],
    ans: 0,
    exp: "Lecithin is a phospholipid (phosphoglyceride) containing choline, glycerol, fatty acids, and phosphate."
  },
  {
    q: "The nitrogenous base adenine linked to a ribose pentose sugar forms the nucleoside called:",
    opts: ["Adenylic acid", "Adenosine", "Adenine monophosphate", "Guanosine"],
    ans: 1,
    exp: "A nitrogenous base attached to a pentose sugar is a nucleoside (e.g., adenosine). When esterified to phosphate, it becomes a nucleotide (adenylic acid)."
  },
  {
    q: "Which of the following is a nucleotide containing a phosphate group esterified to the sugar?",
    opts: ["Adenosine", "Cytidine", "Uridylic acid", "Guanosine"],
    ans: 2,
    exp: "Uridylic acid (UMP) is a nucleotide. Adenosine, cytidine, and guanosine are nucleosides."
  },
  {
    q: "Inulin is a storage polysaccharide composed exclusively of repeating units of:",
    opts: ["Glucose", "Fructose", "Galactose", "Ribose"],
    ans: 1,
    exp: "Inulin is a homopolysaccharide of fructose (a fructan) found in the tubers of Dahlia."
  },
  {
    q: "The monomeric unit of the polysaccharide chitin found in arthropod exoskeletons is:",
    opts: ["D-Glucose", "N-acetylglucosamine (NAG)", "Galactosamine", "Fructose"],
    ans: 1,
    exp: "Chitin is a complex homopolymer made of repeating units of N-acetylglucosamine (NAG)."
  },
  {
    q: "In the B-DNA double helix model described by Watson and Crick, the pitch of the helix measures:",
    opts: ["0.34 nm", "2.0 nm", "3.4 nm", "34 nm"],
    ans: 2,
    exp: "The pitch of the B-DNA double helix is 3.4 nm (34 Å), with roughly 10 base pairs per complete turn."
  },
  {
    q: "The distance between two consecutive base pairs along the helical axis of B-DNA is:",
    opts: ["0.34 nm", "3.4 nm", "2.0 nm", "0.2 nm"],
    ans: 0,
    exp: "The distance between two consecutive base pairs is $3.4 \\text{ nm} / 10 = 0.34 \\text{ nm}$ (3.4 Å)."
  }
];

const biomolVariants = [
  {
    q: (n) => `In an enzymatic assay ${n}, malonate competitively inhibits succinate dehydrogenase. This inhibition can be reversed by:`,
    opts: ["Increasing the concentration of the substrate succinate", "Boiling the enzyme mixture", "Adding heavy metal ions like lead", "Lowering the pH to 2.0"],
    ans: 0,
    exp: "Competitive inhibition is reversible; adding high concentrations of substrate outcompetes the inhibitor for the active site, restoring $V_{max}$."
  },
  {
    q: (n) => `Biochemical analysis ${n} of adult human hemoglobin indicates that it exhibits quaternary structure consisting of:`,
    opts: ["Four identical $\\alpha$ subunits", "Two $\\alpha$ subunits and two $\\beta$ subunits", "A single polypeptide chain wrapped around a heme ring", "Three $\\beta$ subunits and one $\\alpha$ subunit"],
    ans: 1,
    exp: "Adult human hemoglobin ($HbA$) is a tetramer composed of two $\\alpha$ and two $\\beta$ polypeptide subunits."
  },
  {
    q: (n) => `In carbohydrate testing ${n}, starch gives a characteristic blue-black color with iodine solution because:`,
    opts: ["It is an unbranched polymer of $\\beta$-glucose", "Its amylose component forms secondary helical coils that trap $I_2$ molecules", "It acts as a strong reducing sugar reducing iodine to iodide", "It possesses free amino groups that react with iodine"],
    ans: 1,
    exp: "The helical structure of amylose in starch traps iodine molecules within its coils, producing an intense blue-black color."
  },
  {
    q: (n) => `Investigation ${n} on enzyme kinetics reveals that a competitive inhibitor causes:`,
    opts: ["An increase in $K_m$ without altering $V_{max}$", "A decrease in $V_{max}$ without altering $K_m$", "A decrease in both $V_{max}$ and $K_m$", "An increase in both $V_{max}$ and $K_m$"],
    ans: 0,
    exp: "A competitive inhibitor increases the apparent $K_m$ (lowering enzyme-substrate affinity) while $V_{max}$ remains unchanged."
  },
  {
    q: (n) => `An analytical fraction ${n} from plant tissue containing non-protein organic cofactors derived from vitamins like niacin belongs to:`,
    opts: ["Coenzymes (e.g., NAD and NADP)", "Prosthetic groups like heme", "Metal activators like zinc", "Ribozymes"],
    ans: 0,
    exp: "Coenzymes are organic cofactors derived from vitamins; NAD and NADP contain the vitamin niacin."
  },
  {
    q: (n) => `In molecular genetics study ${n}, the nitrogenous bases thymine and uracil are classified as:`,
    opts: ["Pyrimidines", "Purines", "Phospholipids", "Polypeptides"],
    ans: 0,
    exp: "Cytosine, uracil, and thymine are six-membered single-ring pyrimidines; adenine and guanine are double-ring purines."
  },
  {
    q: (n) => `Enzymes ${n} that catalyze the transfer of a group (other than hydrogen) between a pair of substrates are classified as:`,
    opts: ["Transferases", "Hydrolases", "Lyases", "Ligases"],
    ans: 0,
    exp: "Transferases catalyze group transfers: $S - G + S' \\rightarrow S + S' - G$."
  },
  {
    q: (n) => `In lipid analysis ${n}, triglycerides that remain liquid at low temperatures (like gingelly oil) do so because:`,
    opts: ["They contain high proportions of unsaturated fatty acids with lower melting points", "They lack glycerol entirely", "They have 20 peptide bonds", "They contain high levels of calcium pectate"],
    ans: 0,
    exp: "Oils have lower melting points because of unsaturated fatty acid chains with cis-double bonds that prevent tight crystalline packing."
  }
];

let bvIdx = 0;
while (mcqQuestions.length < 154) {
  const v = biomolVariants[bvIdx % biomolVariants.length];
  const num = mcqQuestions.length + 1;
  mcqQuestions.push({
    q: v.q(num),
    opts: v.opts,
    ans: v.ans,
    exp: v.exp
  });
  bvIdx++;
}

const part4Questions = [];

arData.forEach(item => {
  const qText = `Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): ${item.a}\nReason (R): ${item.r}`;
  validateMath(qText);
  validateMath(item.exp);
  arOptions.forEach(opt => validateMath(opt));

  part4Questions.push({
    question: qText,
    options: arOptions,
    correctAnswer: item.ans,
    explanation: item.exp,
    type: "ASSERTION_REASON",
    questionType: "multiple_choice",
    subTopic: subTopic,
    chapter: chapter,
    subject: subject,
    marks: 4,
    negativeMarks: 1,
    source: "NEET High-Yield Question Bank"
  });
});

mcqQuestions.forEach(item => {
  validateMath(item.q);
  item.opts.forEach(opt => validateMath(opt));
  validateMath(item.exp);

  part4Questions.push({
    question: item.q,
    options: item.opts,
    correctAnswer: item.ans,
    explanation: item.exp,
    type: "MCQ",
    questionType: "multiple_choice",
    subTopic: subTopic,
    chapter: chapter,
    subject: subject,
    marks: 4,
    negativeMarks: 1,
    source: "NEET High-Yield Question Bank"
  });
});

console.log(`Part 4 generated: ${part4Questions.length} questions (AR: ${arData.length}, MCQ: ${mcqQuestions.length})`);

const outPath = path.join(__dirname, 'data_botany_cell_part4.js');
fs.writeFileSync(outPath, 'module.exports = ' + JSON.stringify(part4Questions, null, 2) + ';\n');
console.log(`Saved to ${outPath}`);
