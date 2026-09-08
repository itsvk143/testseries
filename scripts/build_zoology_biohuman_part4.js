// scripts/build_zoology_biohuman_part4.js
// Subtopic: Drug abuse
// Chapter: Biology and Human Welfare
// Subject: Zoology
// 26 Assertion-Reason, 154 MCQ = 180 Questions

const fs = require('fs');
const path = require('path');
const katex = require('katex');

const SUBTOPIC = "Drug abuse";
const CHAPTER = "Biology and Human Welfare";
const SUBJECT = "Zoology";

const arDirections = "Directions: In the following questions, a statement of Assertion (A) is followed by a statement of Reason (R). Choose the correct option:\n" +
  "(a) Both (A) and (R) are true and (R) is the correct explanation of (A).\n" +
  "(b) Both (A) and (R) are true but (R) is not the correct explanation of (A).\n" +
  "(c) (A) is true but (R) is false.\n" +
  "(d) (A) is false but (R) is true.";

const arOptions = [
  "Both (A) and (R) are true and (R) is the correct explanation of (A)",
  "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
  "(A) is true but (R) is false",
  "(A) is false but (R) is true"
];

const arData = [
  {
    a: "Heroin is commonly known as smack and is chemically diacetylmorphine.",
    r: "Heroin is synthesized by the acetylation of morphine extracted from the latex of the poppy plant Papaver somniferum.",
    ans: 0,
    exp: "Heroin is chemically diacetylmorphine, a white, odorless, bitter crystalline compound obtained by acetylating morphine. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Heroin acts as a depressant and slows down bodily physiological functions.",
    r: "Heroin binds to specific opioid receptors located in the central nervous system and gastrointestinal tract.",
    ans: 0,
    exp: "Opioids bind to mu-opioid receptors in the brainstem and spinal cord, inhibiting neuronal excitability and depressing respiratory rate, heart rate, and gastrointestinal motility. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Morphine is a very effective sedative and painkiller.",
    r: "Morphine is widely administered to patients who have undergone major surgical operations.",
    ans: 1,
    exp: "Both statements are correct NCERT facts. Morphine is a potent analgesic and central nervous system depressant used post-operatively. Both (A) and (R) are true, but (R) is an application of morphine rather than the pharmacological explanation of why it is an effective sedative and painkiller."
  },
  {
    a: "Natural cannabinoids are obtained from the inflorescences of the plant Cannabis sativa.",
    r: "The flower tops, leaves, and resin of Cannabis sativa are used in various combinations to produce marijuana, hashish, charas, and ganja.",
    ans: 0,
    exp: "Different parts of the Indian hemp plant Cannabis sativa (inflorescences, leaves, resins) yield various cannabinoid preparations such as bhang, ganja, charas, and marijuana. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Cannabinoids are known for their profound adverse effects on the cardiovascular system of the body.",
    r: "Cannabinoid receptors are present principally in the human brain.",
    ans: 1,
    exp: "Both statements are correct NCERT facts. Cannabinoids induce peripheral vasodilation, postural hypotension, and reflex tachycardia. While cannabinoid receptors (CB1) are abundant in the brain, (R) does not explain the peripheral cardiovascular actions (A)."
  },
  {
    a: "Cocaine produces a temporary sense of euphoria and increased physical energy.",
    r: "Cocaine interferes with the transport and reuptake of the neurotransmitter dopamine at synaptic clefts.",
    ans: 0,
    exp: "Cocaine blocks dopamine active transporters (DAT) in the limbic reward system, causing prolonged accumulation of dopamine in synapses, which triggers intense euphoria and stimulation. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Excessive dosage of cocaine can lead to extreme agitation, paranoia, and severe hallucinations.",
    r: "Cocaine is an alkaloid obtained from the South American plant Erythroxylum coca.",
    ans: 1,
    exp: "Both statements are correct NCERT facts. Overdose of cocaine stimulates cerebral cortical and limbic neurons excessively, inducing psychosis and hallucinations. Its botanical origin (R) is factual but does not explain the neuropharmacological basis of toxic hallucinations (A)."
  },
  {
    a: "Atropa belladonna and Datura stramonium are hallucinogenic plants.",
    r: "These plants contain tropane alkaloids (like atropine and scopolamine) that block central muscarinic acetylcholine receptors.",
    ans: 0,
    exp: "Tropane alkaloids present in Datura and Belladonna antagonize muscarinic receptors in the central nervous system, leading to central anticholinergic syndrome, disorientation, and vivid hallucinations. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Lysergic acid diethylamide (LSD) is a powerful hallucinogen.",
    r: "LSD is a synthetic derivative obtained from the ergot fungus Claviceps purpurea that parasitizes rye plants.",
    ans: 1,
    exp: "Both statements are correct facts. LSD is synthesized from lysergic acid produced by the rye ergot fungus Claviceps purpurea. Both (A) and (R) are true, but the botanical source (R) does not explain its agonist activity on 5-HT2A serotonin receptors that causes hallucinations (A)."
  },
  {
    a: "Smoking tobacco is associated with an increased risk of coronary heart disease and atherosclerosis.",
    r: "Nicotine stimulates the adrenal glands to release adrenaline and noradrenaline into the bloodstream, elevating blood pressure and heart rate.",
    ans: 0,
    exp: "Adrenaline and noradrenaline secreted in response to nicotine induce peripheral vasoconstriction, increase cardiac workload, and promote platelet aggregation, accelerating heart disease. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Tobacco smoking causes a significant decrease in the oxygen-carrying capacity of blood.",
    r: "Inhaled cigarette smoke contains carbon monoxide (CO), which binds to hemoglobin with much higher affinity than oxygen, forming carboxyhemoglobin.",
    ans: 0,
    exp: "Carbon monoxide has roughly 200-250 times higher affinity for hemoglobin than oxygen, forming stable carboxyhemoglobin and shifting the oxygen dissociation curve to the left, causing tissue hypoxia. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Chewing tobacco is strongly associated with an increased incidence of oral cancers.",
    r: "Tobacco contains potent chemical carcinogens such as tobacco-specific nitrosamines that induce DNA mutations in oral mucosal epithelial cells.",
    ans: 0,
    exp: "Direct prolonged contact of smokeless tobacco with the buccal mucosa exposes epithelial cells to carcinogenic nitrosamines, driving leukoplakia and squamous cell oral carcinoma. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Intravenous drug abusers have a very high incidence of contracting HIV/AIDS and Hepatitis B.",
    r: "Sharing infected needles, syringes, and injection equipment directly introduces bloodborne viruses into the bloodstream of healthy abusers.",
    ans: 0,
    exp: "Parenteral transmission via unsterilized needles shared among drug users directly transfers viable viral particles of HIV and Hepatitis B from infected blood into the recipient's circulation. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Repeated use of addictive drugs leads to tolerance, requiring progressively higher doses to achieve the same effect.",
    r: "Chronic drug exposure causes down-regulation and desensitization of target receptors, alongside increased hepatic metabolic clearance.",
    ans: 0,
    exp: "Pharmacodynamic receptor desensitization/internalization and pharmacokinetic enzyme induction reduce the physiological response to a fixed drug dose, establishing tolerance. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Abrupt cessation of drug intake in an addict produces a painful and distressing withdrawal syndrome.",
    r: "Withdrawal syndrome occurs because the body has adapted homeostatically to the constant presence of the drug, exhibiting rebound hyperactivity upon its sudden withdrawal.",
    ans: 0,
    exp: "Physical dependence forces neurochemical systems to recalibrate; sudden removal of an inhibitory drug (like opioids or alcohol) unleashes severe sympathetic and neuronal rebound excitability (withdrawal). Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Chronic abuse of anabolic steroids by male athletes causes testicular atrophy and reduced sperm count.",
    r: "Exogenous anabolic steroids exert strong negative feedback on the hypothalamus and anterior pituitary, shutting down GnRH, LH, and FSH secretion.",
    ans: 0,
    exp: "High circulating levels of synthetic androgens suppress LH and FSH release from the pituitary; lack of LH deprives Leydig cells of stimulation, while lack of FSH halts spermatogenesis, shrinking the testes. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Female athletes abusing anabolic steroids exhibit masculinization, including voice deepening and facial hair growth.",
    r: "Anabolic-androgenic steroids bind to androgen receptors in females, inducing male secondary sexual characteristics.",
    ans: 0,
    exp: "Synthetic androgens stimulate androgen-responsive hair follicles on the face and body and cause laryngeal vocal cord thickening in females (virilization). Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Use of anabolic steroids by adolescents can result in stunted adult stature.",
    r: "Supraphysiological levels of sex steroids accelerate the premature fusion and closure of the epiphyseal growth plates in long bones.",
    ans: 0,
    exp: "High androgen/estrogen levels induce premature ossification and closure of cartilaginous epiphyseal plates of long bones, terminating longitudinal bone growth permanently. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Chronic alcoholism frequently leads to cirrhosis of the liver.",
    r: "Excessive alcohol consumption causes accumulation of intracellular fats (steatosis), chronic inflammation, and extensive fibrotic scarring of hepatic lobules.",
    ans: 0,
    exp: "Metabolism of ethanol produces excess NADH and toxic acetaldehyde, driving fatty liver, alcoholic hepatitis, and progressive irreversible collagenous scarring (cirrhosis) with regenerative nodules. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Disulfiram (Antabuse) is used as an aversive deterrent in the treatment of chronic alcoholism.",
    r: "Disulfiram irreversibly inhibits the enzyme aldehyde dehydrogenase (ALDH), leading to rapid, distressing accumulation of toxic acetaldehyde upon alcohol consumption.",
    ans: 0,
    exp: "Inhibition of ALDH causes acetaldehyde to build up within minutes of drinking alcohol, producing severe flushing, throbbing headache, nausea, vomiting, and tachycardia, deterring further drinking. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Chronic alcoholics are prone to developing Wernicke-Korsakoff syndrome.",
    r: "Poor dietary intake combined with impaired intestinal absorption in chronic alcoholics leads to severe deficiency of thiamine (Vitamin $B_1$).",
    ans: 0,
    exp: "Thiamine is an essential cofactor for pyruvate dehydrogenase and alpha-ketoglutarate dehydrogenase; its depletion impairs neuronal energy metabolism, causing mammillary body necrosis and Wernicke-Korsakoff encephalopathy. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Naloxone is the definitive emergency antidote for acute opioid overdose.",
    r: "Naloxone is a pure competitive opioid receptor antagonist that rapidly displaces opioids from mu-receptors, reversing respiratory depression.",
    ans: 0,
    exp: "Naloxone has high affinity for mu-opioid receptors without intrinsic activity; it competitively displaces morphine/heroin, immediately restoring spontaneous breathing in overdosed patients. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Combining barbiturates with alcohol can cause fatal respiratory arrest even at modest doses.",
    r: "Both barbiturates and alcohol enhance inhibitory GABA-A neurotransmission through distinct allosteric binding sites, producing synergistic central nervous system depression.",
    ans: 0,
    exp: "Barbiturates and ethanol act cooperatively on GABA-A receptor chloride channels to profoundly hyperpolarize medullary respiratory neurons, leading to lethal synergism. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Barbiturates possess a narrower therapeutic safety margin compared to benzodiazepines.",
    r: "At high concentrations, barbiturates can directly open GABA-A chloride channels independently of GABA, whereas benzodiazepines strictly require GABA to exert their effect.",
    ans: 0,
    exp: "Benzodiazepines merely increase the frequency of GABA-mediated channel openings (ceiling effect), whereas barbiturates prolong open duration and can directly gate the channel at high doses, risking fatal depression. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Prevention and control of substance abuse in adolescents require educating youth to accept disappointments and failures as normal parts of life.",
    r: "A child should not be pushed beyond his or her threshold limits to perform or excel in examinations or sports.",
    ans: 0,
    exp: "Unreasonable parental expectations and undue peer pressure generate excessive stress, driving vulnerable adolescents towards drug abuse; counseling helps develop healthy coping skills. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Cannabinoids are abused by some sports-persons.",
    r: "Cannabinoids act on the peripheral nervous system to increase the count of red blood cells in circulation.",
    ans: 2,
    exp: "(A) is true because cannabinoids are listed as prohibited substances abused by certain athletes. (R) is false because cannabinoids do not stimulate erythropoiesis or increase red blood cell count; erythropoietin (EPO) and anabolic steroids do."
  }
];

// 154 MCQs
const mcqData = [];

function addMcq(q, opts, ans, exp) {
  mcqData.push({ q, opts, ans, exp });
}

// 1-25: Core NCERT: Opioids, Morphine, Heroin
addMcq(
  "From which plant is morphine naturally extracted?",
  ["Papaver somniferum (opium poppy)", "Cannabis sativa (hemp)", "Erythroxylum coca", "Atropa belladonna"],
  0,
  "Morphine is a natural opioid alkaloid extracted from the milky latex of the unripe seed capsules of the opium poppy plant, Papaver somniferum."
);
addMcq(
  "Heroin (commonly called smack) is chemically synthesized from morphine by which chemical reaction?",
  ["Acetylation using acetic anhydride", "Methylation using methyl iodide", "Decarboxylation under heat", "Oxidation using potassium permanganate"],
  0,
  "Heroin is diacetylmorphine, obtained by the acetylation of the two hydroxyl groups (-OH) of morphine using acetic anhydride."
);
addMcq(
  "What is the physical appearance and taste of pure heroin?",
  ["White, odorless, bitter crystalline compound", "Brown, sweet-smelling sticky liquid", "Yellow, odorless amorphous powder", "Bright red pungent crystals"],
  0,
  "According to NCERT, heroin is chemically diacetylmorphine, which is a white, odorless, bitter crystalline compound."
);
addMcq(
  "Through which two primary routes of administration is heroin commonly taken by substance abusers?",
  ["Snorting and intravenous injection", "Transdermal patches only", "Drinking dissolved in water only", "Applying as an ointment on the scalp"],
  0,
  "Heroin is typically self-administered by drug abusers by nasal inhalation (snorting) or by direct intravenous injection ('mainlining')."
);
addMcq(
  "To which specific physiological receptors in the human body do opioid drugs bind?",
  ["Specific opioid receptors present in the central nervous system and gastrointestinal tract", "Dopamine receptors in the renal cortex only", "Adrenergic receptors in skeletal muscle fibers", "Insulin receptors in the liver"],
  0,
  "Opioids bind to stereospecific opioid receptors (mu, delta, kappa) distributed predominantly in the brain, spinal cord, and gastrointestinal tract."
);
addMcq(
  "How does heroin affect overall physiological body functions?",
  ["It acts as a central nervous system depressant and slows down body functions", "It acts as a potent stimulant and causes sleeplessness", "It increases heart rate and blood pressure twofold", "It has zero effect on respiration or gut motility"],
  0,
  "Heroin acts as a depressant on the central nervous system, reducing neuronal activity, depressing respiration, and slowing down gastrointestinal peristalsis."
);
addMcq(
  "Why is morphine widely used in clinical medicine despite its addictive potential?",
  ["It is an exceptionally potent analgesic (painkiller) and sedative indispensable after major surgery", "It cures bacterial pneumonia within hours", "It lowers blood sugar levels in diabetic coma", "It acts as a broad-spectrum antipyretic"],
  0,
  "Morphine is one of the most effective analgesics known, uniquely capable of relieving severe, intractable acute and post-operative surgical pain."
);
addMcq(
  "The specific opioid receptor antagonist administered intravenously to rapidly reverse acute heroin or morphine overdose is:",
  ["Naloxone", "Disulfiram", "Diazepam", "Amphetamine"],
  0,
  "Naloxone is a pure competitive mu-opioid receptor antagonist that immediately displaces opioids, rapidly reversing life-threatening respiratory depression."
);
addMcq(
  "Pinpoint pupils (marked miosis), severe respiratory depression, and coma form the classic diagnostic triad of acute poisoning by:",
  ["Opioids (such as morphine or heroin)", "Cocaine", "Amphetamines", "LSD"],
  0,
  "The classic opioid overdose triad consists of profound central nervous system depression (coma), depressed respiratory rate ($<8-10/\\text{min}$), and bilateral pinpoint pupils (miosis)."
);

// 26-50: Cannabinoids, THC, Cannabis sativa
addMcq(
  "From which plant are natural cannabinoids obtained?",
  ["Cannabis sativa (hemp plant)", "Papaver somniferum", "Erythroxylum coca", "Claviceps purpurea"],
  0,
  "Natural cannabinoids are phytocannabinoids extracted from the inflorescences, leaves, and resinous secretions of the Indian hemp plant, Cannabis sativa."
);
addMcq(
  "Where are cannabinoid receptors principally located in the human body?",
  ["Principally in the brain", "In the renal glomeruli only", "In the pulmonary alveoli only", "In the stratum corneum of skin"],
  0,
  "Cannabinoid receptors (CB1) are abundantly concentrated in the central nervous system, particularly in the basal ganglia, cerebellum, hippocampus, and cerebral cortex."
);
addMcq(
  "Which preparations are derived from different parts and secretions of the Cannabis sativa plant?",
  ["Marijuana, hashish, charas, and ganja", "Heroin, morphine, and codeine", "Cocaine, crack, and novocaine", "Barbiturates, diazepam, and methadone"],
  0,
  "Different combinations of flower tops, leaves, and resins of Cannabis sativa yield marijuana, hashish (charas), and ganja, as well as traditional bhang."
);
addMcq(
  "What is the major psychoactive chemical constituent present in Cannabis sativa?",
  ["$\\Delta^9$-tetrahydrocannabinol (THC)", "Morphine", "Nicotine", "Scopolamine"],
  0,
  "$\\Delta^9$-tetrahydrocannabinol (THC) is the primary lipid-soluble psychoactive cannabinoid responsible for the characteristic behavioral effects of cannabis."
);
addMcq(
  "Cannabinoids are clinically and physiologically notorious for their pronounced effects on which body system?",
  ["Cardiovascular system (causing tachycardia and altered blood pressure)", "Renal filtration system", "Endocrine pancreatic islets", "Auditory hair cells"],
  0,
  "According to NCERT, cannabinoids produce noticeable effects on the cardiovascular system of the body, characteristically causing tachycardia and conjunctival injection."
);
addMcq(
  "Which class of drugs is sometimes abused by sports-persons as performance-enhancing agents despite being prohibited?",
  ["Cannabinoids", "Antibiotics like penicillin", "Antihistamines", "Vitamins"],
  0,
  "Cannabinoids are abused by some sports-persons for relaxation and anxiety reduction and are strictly banned by the World Anti-Doping Agency (WADA)."
);

// 51-75: Coca alkaloids, Cocaine, Dopamine
addMcq(
  "Cocaine is a natural alkaloid obtained from the leaves of:",
  ["Erythroxylum coca (native to South America)", "Papaver somniferum", "Cannabis sativa", "Datura stramonium"],
  0,
  "Cocaine is an alkaloid extracted from the leaves of the coca bush, Erythroxylum coca, indigenous to the Andean highlands of South America."
);
addMcq(
  "Cocaine is commonly referred to on the street by which terms?",
  ["Coke or crack", "Smack or brown sugar", "Speed or ecstasy", "Angel dust or peace pill"],
  0,
  "Cocaine hydrochloride is commonly called 'coke', while the freebase, smokable crystalline form of cocaine is widely known as 'crack'."
);
addMcq(
  "What is the primary neurochemical mechanism of action of cocaine in the central nervous system?",
  ["It blocks the reuptake of dopamine by inhibiting dopamine transporters (DAT)", "It stimulates the synthesis of insulin in the brain", "It binds to nicotinic acetylcholine receptors in muscles", "It inhibits the enzyme acetylcholinesterase"],
  0,
  "Cocaine binds to and blocks dopamine active transporters (DAT) in the synaptic cleft, preventing dopamine reuptake and causing prolonged stimulation of reward circuits."
);
addMcq(
  "The intense euphoria and heightened sense of physical energy induced by cocaine are directly mediated by elevated levels of which neurotransmitter?",
  ["Dopamine", "Acetylcholine", "GABA", "Glycine"],
  0,
  "Accumulation of synaptic dopamine within the mesolimbic and mesocortical pleasure pathways generates the potent euphoric rush and increased alertness caused by cocaine."
);
addMcq(
  "What serious psychological and neurological complication can arise from an excessive dosage of cocaine?",
  ["Extreme paranoia and vivid hallucinations", "Unchecked continuous sleep for days", "Complete loss of sensory pain perception with zero heart activity", "Sudden irreversible loss of hair follicles"],
  0,
  "Excessive doses of cocaine cause intense central nervous system overstimulation, leading to cocaine psychosis, paranoid delusions, and visual, auditory, or tactile hallucinations ('cocaine bugs')."
);
addMcq(
  "Perforation of the nasal septum is a well-documented physical complication seen in chronic abusers of:",
  ["Snorted cocaine (coke)", "Inhaled tobacco smoke", "Oral morphine tablets", "Chewed cannabis leaves"],
  0,
  "Chronic snorting of cocaine induces potent, prolonged local vasoconstriction of nasal mucosal capillaries, causing ischemic necrosis and perforation of the cartilaginous nasal septum."
);

// 76-100: Hallucinogens: Datura, Belladonna, LSD
addMcq(
  "Which two well-known flowering plants are notorious for their potent hallucinogenic properties?",
  ["Atropa belladonna and Datura stramonium", "Pisum sativum and Mangifera indica", "Oryza sativa and Triticum aestivum", "Brassica campestris and Solanum tuberosum"],
  0,
  "Atropa belladonna (deadly nightshade) and Datura stramonium possess anticholinergic tropane alkaloids that induce vivid, terrifying hallucinations and delirium."
);
addMcq(
  "Lysergic acid diethylamide (LSD) is a potent hallucinogenic compound derived from:",
  ["Ergot fungus (Claviceps purpurea) that infects rye plants", "Latex of Papaver somniferum", "Leaves of Cannabis sativa", "Bark of Cinchona"],
  0,
  "LSD is a semi-synthetic ergoline hallucinogen derived from lysergic acid, a natural product of the parasitic rye fungus Claviceps purpurea."
);
addMcq(
  "Hallucinogenic drugs (such as LSD, psilocybin, and mescaline) primarily alter human perception by acting as agonists on:",
  ["$5\\text{-HT}_{2A}$ serotonin receptors in the cerebral cortex", "Mu-opioid receptors in the spinal cord", "Alpha-1 adrenergic receptors in vascular beds", "Histamine H2 receptors in gastric mucosa"],
  0,
  "Classic hallucinogens (psychedelics) share structural similarity with serotonin and act as partial agonists on cortical 5-HT2A receptors, altering perceptual processing and sensory gating."
);
addMcq(
  "The phenomenon of 'synesthesia' (e.g. 'hearing colors' or 'seeing sounds') is characteristically induced by which class of drugs?",
  ["Hallucinogens (such as LSD)", "Opioids (such as morphine)", "Barbiturates", "Antibiotics"],
  0,
  "LSD disrupts cortical sensory filtering, causing cross-modal sensory perception known as synesthesia, where an auditory stimulus may be perceived as visual colors."
);
addMcq(
  "A 'bad trip' associated with recreational LSD use is characterized by:",
  ["Terrifying visual hallucinations, intense panic, paranoia, and fear of impending death or insanity", "Deep, peaceful comatose sleep", "Sudden massive increase in muscle mass", "Hypocalcemic muscle cramps"],
  0,
  "Adverse psychedelic experiences ('bad trips') are acute psychological crises marked by overwhelming anxiety, panic, fear of loss of identity, and terrifying hallucinations."
);

// 101-125: Tobacco, Nicotine, Carbon Monoxide
addMcq(
  "Which potent alkaloid present in tobacco is responsible for its addictive and cardiovascular stimulating properties?",
  ["Nicotine", "Morphine", "Cocaine", "Reserpine"],
  0,
  "Nicotine is a tertiary amine alkaloid found in tobacco that binds to nicotinic acetylcholine receptors, rapidly triggering adrenaline release and central dopamine reward."
);
addMcq(
  "Nicotine stimulates which endocrine gland to release adrenaline and noradrenaline into the bloodstream?",
  ["Adrenal gland (adrenal medulla)", "Thyroid gland", "Parathyroid gland", "Pineal gland"],
  0,
  "Nicotine binds to nicotinic cholinergic receptors on chromaffin cells of the adrenal medulla, provoking rapid secretion of epinephrine (adrenaline) and norepinephrine."
);
addMcq(
  "How do adrenaline and noradrenaline released in response to nicotine affect the cardiovascular system?",
  ["They increase blood pressure and accelerate heart rate", "They decrease blood pressure to near zero", "They cause massive coronary vasodilation and bradycardia", "They prevent all platelet aggregation"],
  0,
  "Catecholamines increase heart rate and induce peripheral arterial vasoconstriction, raising systolic and diastolic blood pressure and increasing myocardial oxygen demand."
);
addMcq(
  "Which gas present in tobacco smoke binds tightly to hemoglobin, displacing oxygen and reducing tissue oxygenation?",
  ["Carbon monoxide (CO)", "Carbon dioxide ($CO_2$)", "Sulfur dioxide ($SO_2$)", "Methane ($CH_4$)"],
  0,
  "Carbon monoxide in tobacco smoke binds to hemoglobin with over 200 times the affinity of oxygen, forming carboxyhemoglobin and reducing oxygen release to tissues."
);
addMcq(
  "Which pulmonary condition characterized by the destruction of alveolar walls and decreased surface area for gas exchange is strongly linked to cigarette smoking?",
  ["Emphysema", "Pneumonia", "Amoebiasis", "Pleurisy"],
  0,
  "Cigarette smoke inactivates alpha-1-antitrypsin and attracts neutrophils that release elastase, leading to irreversible destruction of alveolar septa and emphysema."
);
addMcq(
  "Smoking tobacco is epidemiologically associated with an increased incidence of cancers of the:",
  ["Lungs, urinary bladder, throat, and oral cavity", "Bone marrow exclusively", "Retina exclusively", "Adrenal cortex only"],
  0,
  "Carcinogens in tobacco smoke (polycyclic hydrocarbons, nitrosamines, aromatic amines) cause cancers of the respiratory tract (lungs, larynx, trachea) and urinary bladder."
);
addMcq(
  "Why does smokeless tobacco (chewing tobacco) carry a very high risk of oral squamous cell carcinoma?",
  ["Direct contact exposes mucosal cells to high concentrations of carcinogenic tobacco-specific nitrosamines (TSNAs)", "It introduces living fungal spores into the gums", "It prevents tooth brushing completely", "It reduces salivary calcium levels"],
  0,
  "Direct prolonged contact of tobacco quids against the buccal mucosa delivers high concentrations of carcinogenic TSNAs, causing premalignant leukoplakia and oral cancer."
);

// 126-154: Alcohol metabolism, pathology, withdrawal, anabolic steroids, addiction psychology
const moreMcqsPart4 = [
  ["In the human body, ethyl alcohol is primarily metabolized in the liver by which sequential enzyme pathway?", ["Alcohol Dehydrogenase (ADH) converts ethanol to acetaldehyde, which Aldehyde Dehydrogenase (ALDH) converts to acetate", "Amylase converts ethanol to maltose, then maltase to glucose", "Pepsin converts ethanol to peptones, then trypsin to amino acids", "Lipase converts ethanol to fatty acids, then glycerol"], 0, "Hepatic alcohol dehydrogenase (ADH) oxidizes ethanol to acetaldehyde; aldehyde dehydrogenase (ALDH) rapidly converts toxic acetaldehyde into harmless acetate."],
  ["Which toxic metabolic intermediate of ethanol oxidation is responsible for the unpleasant symptoms of a hangover and facial flushing?", ["Acetaldehyde", "Acetic acid", "Formic acid", "Lactic acid"], 0, "Acetaldehyde is a reactive, cytotoxic intermediate that binds cellular proteins and causes headache, nausea, sweating, and peripheral vasodilation (flushing)."],
  ["Fatty liver (hepatic steatosis) in chronic alcoholics is biochemically driven by:", ["An increased intracellular NADH/NAD+ ratio that inhibits fatty acid oxidation and promotes triglyceride synthesis", "Severe deficiency of dietary carbohydrates", "Complete destruction of liver lipase enzymes", "Excessive excretion of bile salts into urine"], 0, "Ethanol oxidation generates high levels of NADH, shifting cellular redox potential to inhibit mitochondrial beta-oxidation of fatty acids and promote triglyceride accumulation."],
  ["The irreversible terminal stage of alcoholic liver disease characterized by diffuse fibrosis, loss of normal architecture, and nodular regeneration is:", ["Cirrhosis of the liver", "Acute viral hepatitis", "Hepatic adenoma", "Wilson disease"], 0, "Hepatic stellate cells activated by acetaldehyde and reactive oxygen species deposit thick bands of type I collagen, causing architectural distortion and portal hypertension in cirrhosis."],
  ["Wernicke's encephalopathy in chronic alcoholism presents clinically with the classic triad of:", ["Ophthalmoplegia (ocular muscle paralysis), cerebellar ataxia, and acute confusion", "High fever, jaundice, and ascites", "Severe coughing, hemoptysis, and chest pain", "Localized tooth decay, hearing loss, and blindness"], 0, "Carl Wernicke described this acute neurocognitive syndrome resulting from thiamine (Vitamin B1) deficiency, featuring nystagmus/abducens palsy, truncal ataxia, and global confusion."],
  ["Korsakoff's psychosis, which frequently follows untreated Wernicke's encephalopathy, is characterized by:", ["Severe anterograde amnesia with confabulation (inventing false memories)", "Complete loss of voluntary motor control in limbs", "Excessive daytime hypersomnolence without memory loss", "Auditory hallucinations with normal memory"], 0, "Damage to the medial dorsal thalamic nuclei and mammillary bodies produces profound anterograde amnesia, where patients fill memory gaps with confabulated stories."],
  ["Delirium tremens (DT) is a severe, life-threatening manifestation of alcohol withdrawal occurring 48-72 hours after cessation, characterized by:", ["Severe agitation, autonomic hyperactivity (tachycardia, hypertension), coarse tremors, and vivid tactile/visual hallucinations", "Profound hypothermia and deep coma", "Sudden paralysis of facial muscles without tremor", "Total loss of appetite with normal vital signs"], 0, "Delirium tremens is an emergency caused by sudden removal of alcohol-induced GABAergic inhibition and severe glutamate/NMDA rebound excitation."],
  ["Which medication is the preferred frontline class of drugs used to safely manage alcohol withdrawal syndrome and prevent withdrawal seizures?", ["Benzodiazepines (such as Diazepam, Lorazepam, or Chlordiazepoxide)", "First-generation antipsychotics like Haloperidol only", "High-dose morphine injections", "Beta-lactam antibiotics"], 0, "Benzodiazepines act as cross-tolerant GABA-A receptor agonists, smoothing the withdrawal transition, suppressing autonomic instability, and preventing seizures."],
  ["What is the defining psychological characteristic of drug addiction?", ["Compulsive drug-seeking and drug-using behavior that continues despite devastating physical, psychological, and social consequences", "Occasional experimental use of medication for a fever", "Taking an antibiotic exactly as prescribed by a physician", "Drinking extra water during strenuous physical exercise"], 0, "Addiction is a chronic, relapsing brain disease characterized by compulsive drug-seeking and consumption driven by neuroadaptations in the limbic reward circuitry."],
  ["The psychological state where a person feels that their normal day-to-day well-being is only possible when taking the drug is known as:", ["Psychological dependence", "Physical dependence", "Tolerance", "Allergy"], 0, "Psychological dependence involves an emotional or cognitive craving for the drug to relieve dysphoria, achieve pleasure, or cope with everyday life stresses."],
  ["Physical dependence is distinguished from psychological dependence by the presence of:", ["A characteristic physiological withdrawal syndrome upon abrupt discontinuation of the substance", "Cravings when seeing drug-related cues", "Talking frequently about the drug with peers", "Increased appetite after eating"], 0, "Physical dependence is a physiological state of neuroadaptation where normal homeostasis requires drug presence; stopping the drug produces objective withdrawal signs."],
  ["Which brain neurotransmitter system is universally recognized as the central 'reward pathway' implicated in all addictive drugs?", ["Mesolimbic dopamine pathway (projecting from ventral tegmental area to nucleus accumbens)", "Tuberoinfundibular prolactin-inhibiting pathway", "Nigrostriatal pathway for involuntary motor balance", "Spinothalamic sensory pain tract"], 0, "All addictive substances (opioids, cocaine, nicotine, alcohol, amphetamines) trigger surge releases of dopamine in the nucleus accumbens, reinforcing drug-taking behavior."],
  ["Which category of psychotropic medications includes phenobarbital and amobarbital, known to prolong GABA-A channel opening and pose severe fatal overdose risks?", ["Barbiturates", "Selective serotonin reuptake inhibitors", "Cannabinoids", "Non-steroidal anti-inflammatory drugs"], 0, "Barbiturates are potent CNS sedatives that enhance GABA-A receptor open duration; their narrow therapeutic index makes overdose fatal due to respiratory arrest."],
  ["Benzodiazepines (such as diazepam, alprazolam, and clonazepam) exert their anxiolytic and sedative effects by:", ["Binding to an allosteric regulatory site on GABA-A receptors to increase the frequency of chloride channel opening", "Directly opening potassium channels in cardiac muscle", "Inhibiting dopamine reuptake transporters", "Blocking voltage-gated calcium channels in sensory nerves"], 0, "Benzodiazepines allosterically modulate GABA-A receptors, increasing channel opening frequency in the presence of GABA to facilitate hyperpolarizing chloride influx."],
  ["Amphetamines (such as methamphetamine and dextroamphetamine) act as powerful central nervous system psychostimulants by:", ["Reversing the direction of dopamine and norepinephrine transporters, causing massive non-exocytotic monoamine release", "Blocking postsynaptic dopamine receptors", "Stimulating the production of acetylcholine in skeletal muscles", "Inhibiting the breakdown of serotonin by acetylcholinesterase"], 0, "Amphetamines enter nerve terminals via DAT and NET, disrupt vesicular storage via VMAT2, and force reverse transport of dopamine and norepinephrine into synapses."],
  ["MDMA ('ecstasy' / 'molly') is an abused synthetic drug that produces feelings of increased empathy, emotional warmth, and sensory enhancement primarily by:", ["Causing massive release and blocking reuptake of serotonin (5-HT), dopamine, and norepinephrine", "Blocking sodium channels along sensory axons", "Directly stimulating insulin receptors in the pancreas", "Inhibiting histamine release from mast cells"], 0, "MDMA triggers huge effluxes of serotonin and oxytocin from presynaptic neurons, promoting mood elevation, feelings of closeness, and heightened sensory awareness."],
  ["A serious life-threatening acute toxic complication of MDMA abuse during dance parties is:", ["Severe hyperthermia, dehydration, hyponatremia (water intoxication), and serotonin syndrome", "Sudden irreversible drop in body temperature to freezing", "Massive excessive urination leading to kidney failure", "Spontaneous fracture of cranial bones"], 0, "Prolonged vigorous exertion combined with MDMA's disruption of hypothalamic thermoregulation causes malignant hyperthermia, rhabdomyolysis, and fatal cerebral edema."],
  ["Anabolic-androgenic steroids (AAS) are synthetic chemical derivatives of which natural human hormone?", ["Testosterone", "Estrogen", "Progesterone", "Thyroxine"], 0, "Anabolic steroids are synthetic analogs of the male sex hormone testosterone designed to maximize protein synthesis (anabolic) while retaining virilizing (androgenic) effects."],
  ["Which adverse effect is characteristically observed in adolescent athletes who abuse anabolic steroids before their adult growth is complete?", ["Premature closure of the epiphyseal cartilage plates of long bones, leading to permanently stunted height", "Excessive longitudinal growth reaching over eight feet", "Immediate proliferation of new growth plates in the skull", "Conversion of all long bones into elastic cartilage"], 0, "Supraphysiological androgens and aromatized estrogens cause accelerated maturation and ossification of epiphyseal plates, permanently halting further growth in height."],
  ["Which side effect occurs in male athletes abusing high doses of anabolic steroids due to peripheral aromatization into estrogens?", ["Gynecomastia (abnormal development of mammary gland tissue in males)", "Complete absence of facial and body hair", "Shrinkage of the thyroid gland", "Excessive production of watery tears"], 0, "Excess exogenous androgens are peripherally aromatized by adipose aromatase into estrogens, stimulating proliferation of ductal breast tissue in males (gynecomastia)."],
  ["In females who abuse anabolic steroids, which side effects are often irreversible even after discontinuing the drug?", ["Deepening of the voice and clitoral enlargement (clitoromegaly)", "Increased bone density", "Mild transient fluid retention", "Elevated serum albumin levels"], 0, "Androgen-induced hypertrophy of the laryngeal vocal cords (causing a deep male-like voice) and enlargement of the clitoris do not regress upon steroid cessation."],
  ["Severe cystic acne appearing on the shoulders, back, and face of bodybuilders is commonly an external indicator of abuse of:", ["Anabolic-androgenic steroids", "Erythropoietin", "Growth hormone", "Creatine monohydrate"], 0, "High levels of androgens stimulate sebaceous glands to hypersecrete sebum and increase follicular hyperkeratinization, provoking severe nodulocystic acne."],
  ["Erythropoietin (EPO) is abused by endurance athletes ('blood doping') to enhance performance, but carries severe fatal risks because it:", ["Dramatically increases hematocrit, raising blood viscosity and predisposing to fatal thrombosis, stroke, and myocardial infarction", "Causes immediate destruction of all circulating platelets", "Lyses erythrocytes in splenic pulp", "Induces acute hypovolemic dehydration"], 0, "EPO elevates red blood cell mass; excessive hematocrit ($>50\\%$) thickens blood into a sluggish fluid that causes microvascular occlusion, strokes, and heart attacks."],
  ["The psychological phenomenon of 'craving' in recovering addicts is triggered by:", ["Conditioned environmental cues and stress that reactivate sensitized neural circuits in the amygdala and prefrontal cortex", "A sudden drop in systemic arterial blood pressure", "Low dietary protein intake during meals", "Infection by intestinal roundworms"], 0, "Conditioned associations (places, paraphernalia, emotional stress) evoke intense dopamine release and memory retrieval, precipitating powerful relapse cravings."],
  ["Which effective strategy is strongly recommended by psychologists to help adolescents resist peer pressure to experiment with drugs?", ["Fostering self-esteem, teaching assertive refusal skills, and promoting healthy stress-relieving activities (sports, music, yoga)", "Subjecting the child to public punishment when academic marks decline", "Strictly forbidding the child from speaking to any classmates", "Ignoring all behavioral changes until adulthood"], 0, "Educating adolescents to assertively say 'No' to peer pressure while providing loving parental support and healthy recreational outlets prevents drug experimentation."],
  ["De-addiction and rehabilitation centers support recovering addicts through:", ["Structured medical detoxification, cognitive behavioral psychotherapy, peer support groups, and vocational retraining", "Administering high-dose sedatives indefinitely without therapy", "Permanently isolating individuals in solitary confinement", "Encouraging abusers to switch from heroin to cocaine"], 0, "Comprehensive rehabilitation combines medically supervised withdrawal with psychotherapy, relapse-prevention training, and social reintegration programs."],
  ["Which supportive self-help fellowship based on a 'Twelve-Step' recovery program provides widespread global mutual aid for individuals recovering from alcoholism?", ["Alcoholics Anonymous (AA)", "Amnesty International", "Red Cross Society", "World Wildlife Fund"], 0, "Alcoholics Anonymous is an international mutual-aid fellowship that uses a spiritual and behavioral 12-step approach to help members maintain lifelong sobriety."],
  ["Warning signs of drug abuse in adolescents that should alert parents and educators include:", ["Unexplained drop in academic performance, social withdrawal, lack of personal hygiene, and sudden aggressive outbursts", "Increased enthusiasm for completing school homework on time", "Participating regularly in morning physical exercises", "Helping parents with household chores voluntarily"], 0, "Classic red flags include worsening school grades, loss of interest in hobbies, altered sleep and appetite, stealing money, mood swings, and deteriorating hygiene."],
  ["Codeine is an alkaloid present in natural opium that is clinically used as a:", ["Cough suppressant (antitussive) and mild analgesic", "Broad-spectrum antibacterial antibiotic", "Potent diuretic in congestive heart failure", "Topical antifungal agent"], 0, "Codeine possesses milder analgesic and sedative effects than morphine and selectively depresses the medullary cough center, serving as a cough suppressant."],
  ["Methadone maintenance therapy is widely employed in treating heroin addiction because methadone:", ["Has a long oral half-life, prevents opioid withdrawal, and blocks heroin-induced euphoria without producing a sharp high", "Acts as an irrecoverable neurotoxin that destroys opioid receptors", "Causes immediate violent vomiting whenever heroin is injected", "Is a central nervous system stimulant like cocaine"], 0, "Methadone is a long-acting synthetic full mu-opioid agonist that satisfies physical craving and blocks withdrawal without intoxicating spikes, stabilizing recovering addicts."],
  ["Buprenorphine is used in opioid de-addiction programs as a:", ["Partial mu-opioid receptor agonist with a ceiling effect on respiratory depression", "Pure dopamine reuptake inhibitor", "Full GABA-A receptor antagonist", "Serotonin 5-HT2A agonist"], 0, "Buprenorphine binds tightly to mu-receptors as a partial agonist; its ceiling effect minimizes overdose risk, and its slow dissociation suppresses withdrawal."],
  ["Fentanyl is a synthetic opioid of extreme potency that is approximately how many times more potent than morphine?", ["50 to 100 times more potent than morphine", "Equal in potency to codeine", "Half as potent as aspirin", "Ten times less potent than tramadol"], 0, "Fentanyl is a highly lipophilic synthetic opioid roughly 80-100 times more potent than morphine, carrying an exceptionally high risk of fatal respiratory arrest."],
  ["To which two pharmacological effects of opioids does the human body NEVER develop tolerance, regardless of chronic use?", ["Miosis (pupillary constriction) and constipation", "Analgesia and euphoria", "Sedation and respiratory depression", "Hypotension and bradycardia"], 0, "While rapid tolerance develops to opioid analgesia, euphoria, and respiratory depression, virtually no tolerance develops to pupillary constriction (miosis) and constipation."],
  ["Opioid-induced constipation is mediated pharmacologically by opioid binding to receptors in the:", ["Myenteric and submucosal plexuses of the gastrointestinal tract, inhibiting peristalsis and fluid secretion", "Renal collecting tubules", "Pancreatic ductal cells", "Salivary acinar glands"], 0, "Opioids bind mu-receptors in enteric plexuses, halting propulsive peristaltic waves, increasing non-propulsive segmental tone, and dehydrating intestinal contents."],
  ["Neonatal Abstinence Syndrome (NAS) in an infant born to a heroin-dependent mother manifests clinically as:", ["Tremors, irritability, high-pitched crying, sneezing, tachypnea, and diarrhea shortly after birth", "Deep peaceful coma lasting for months", "Immediate adult-pattern muscular hypertrophy", "Congenital absence of all spinal reflexes"], 0, "Abrupt cessation of maternal transplacental opioid delivery at birth causes acute withdrawal in the neonate, characterized by hyperirritability, seizures, and feeding difficulty."],
  ["'Brown sugar' is an adulterated, impure street preparation of:", ["Heroin mixed with chalk, powdered glass, or other adulterants", "Cannabis leaves cooked in sugar syrup", "Pure crystallized cocaine hydrochloride", "Chewed tobacco leaves"], 0, "Street 'brown sugar' (smack) is an unpurified, crude brown powder containing diacetylmorphine mixed with toxic impurities and adulterants."],
  ["A 'speedball' is an extremely dangerous polydrug combination of:", ["Cocaine (a central stimulant) and Heroin (a central depressant)", "Morphine and Codeine", "Cannabis and Tobacco", "Alcohol and Caffeine"], 0, "Speedballing combines the stimulating rush of cocaine with the depressant action of heroin, causing unpredictable synergistic cardiovascular and fatal respiratory collapse."],
  ["Endorphins and enkephalins are endogenous peptide neurotransmitters that function in the human body as:", ["Natural internal painkillers by binding to body opioid receptors", "Thyroid-stimulating hormones", "Pancreatic digestive enzymes", "Clotting factors in blood plasma"], 0, "Endogenous opioids (endorphins, enkephalins, dynorphins) are naturally produced neuropeptides that modulate pain perception and stress in the CNS."],
  ["Beta-endorphin is derived from the cleavage of which large precursor polypeptide in the pituitary gland?", ["Pro-opiomelanocortin (POMC)", "Preproinsulin", "Angiotensinogen", "Thyroglobulin"], 0, "POMC is cleaved post-translationally into adrenocorticotropic hormone (ACTH), melanocyte-stimulating hormone (MSH), and beta-endorphin."],
  ["Which cannabinoid receptor subtype is expressed predominantly on cells of the immune system and spleen rather than the brain?", ["$CB_2$ cannabinoid receptor", "$CB_1$ cannabinoid receptor", "Mu-opioid receptor", "Dopamine D2 receptor"], 0, "While CB1 receptors are located primarily in central neurons, CB2 receptors are expressed primarily on peripheral immune cells and spleen, modulating inflammation."],
  ["Anandamide is an endogenous neurotransmitter in the human brain that binds to cannabinoid receptors, chemically classified as an:", ["Arachidonic acid derivative (N-arachidonoylethanolamine)", "Amino acid polypeptide", "Inorganic gas", "Purine nucleotide"], 0, "Anandamide (named from the Sanskrit word 'ananda' meaning bliss) is an endogenous lipid retrograde messenger derived from membrane phospholipid arachidonic acid."],
  ["How do endocannabinoids act as unconventional retrograde neurotransmitters at brain synapses?", ["They are synthesized on demand in postsynaptic neurons and travel backward across the synapse to inhibit presynaptic neurotransmitter release", "They are stored in large presynaptic dense-core vesicles for years", "They cross the blood-brain barrier to enter red blood cells", "They stimulate the synthesis of myelin sheaths by astrocytes"], 0, "Postsynaptic depolarization stimulates on-demand synthesis of endocannabinoids, which diffuse backward across the cleft to activate presynaptic CB1 receptors, reducing GABA/glutamate release."],
  ["Dronabinol (synthetic $\\Delta^9$-THC) is prescribed in modern medicine to:", ["Stimulate appetite in AIDS wasting syndrome and treat chemotherapy-induced nausea", "Lower blood pressure in hypertensive emergencies", "Cure bacterial pneumonia", "Prevent hair loss in alopecia"], 0, "Pharmaceutical cannabinoids (dronabinol, nabilone) are approved for treating intractable chemotherapy-induced vomiting and stimulating appetite in severe AIDS cachexia."],
  ["'Amotivational syndrome' observed in chronic, heavy cannabis abusers is characterized by:", ["Loss of ambition, apathy, reduced concentration, impaired academic performance, and social withdrawal", "Continuous hyperactivity and physical violence", "Sudden increase in IQ scores", "Tremendous athletic enthusiasm"], 0, "Chronic heavy cannabis exposure leads to cognitive blunting and amotivational syndrome, marked by passivity, diminished goal-directed drive, and apathy."],
  ["Chronic heavy abuse of cannabis produces which adverse effect on the male reproductive system?", ["Decreased serum testosterone levels and reduced sperm count (oligospermia)", "Permanent enlargement of the testicles", "Tripling of daily sperm production", "Elimination of all female sex hormones"], 0, "THC disrupts hypothalamic GnRH release, suppressing LH and FSH, which leads to reduced testosterone synthesis, oligospermia, and erectile dysfunction."],
  ["Bloodshot eyes (marked conjunctival injection) characteristically observed in cannabis smokers result from:", ["Cannabinoid-induced peripheral vasodilation of conjunctival blood vessels", "Direct physical burning of the cornea by cigarette ash", "Complete absence of tear production", "Allergic reaction to dietary gluten"], 0, "Cannabinoids cause relaxation of vascular smooth muscle, producing vasodilation of superficial scleral and conjunctival capillaries."],
  ["Why was cocaine historically used as the first local anesthetic in surgical ophthalmology by Carl Koller in 1884?", ["It reversibly blocks voltage-gated sodium channels, halting nerve action potential propagation", "It permanently kills all sensory nerve fibers", "It turns corneal tissue into transparent plastic", "It causes systemic general anesthesia within seconds"], 0, "Cocaine binds to the internal pore of neuronal voltage-gated sodium channels, preventing depolarization and nerve conduction of sensory pain signals."],
  ["Cocaine is distinct among all clinical local anesthetics because it uniquely possesses:", ["Intrinsic vasoconstrictor properties due to inhibition of norepinephrine reuptake", "A pH higher than 14", "Zero ability to block sensory pain", "A green fluorescent color"], 0, "By blocking the norepinephrine transporter (NET), cocaine prevents norepinephrine reuptake at sympathetic terminals, causing localized arteriolar vasoconstriction."],
  ["'Formication' (or 'Magnan's sign' / 'cocaine bugs') is a tactile hallucination experienced by cocaine abusers characterized by:", ["The terrifying delusion that small insects or parasites are crawling under or across their skin", "Hearing beautiful classical music in silent rooms", "Seeing colors when smelling perfume", "The sensation of flying through outer space"], 0, "Cocaine-induced hyperactivity in sensory processing centers produces formication, driving abusers to obsessively pick and scratch their skin until ulcerated."],
  ["Cocaine abuse can trigger sudden, fatal myocardial infarction in young adults with normal coronary arteries by causing:", ["Severe coronary artery spasm, increased myocardial oxygen demand, and accelerated thrombus formation", "Immediate rupture of the pulmonary artery", "Complete dissolution of cardiac valves", "Sudden freezing of blood in the left ventricle"], 0, "Cocaine surges sympathetic catecholamines, producing intense coronary vasoconstriction, tachycardia, hypertension, and platelet aggregation, triggering fatal heart attacks."],
  ["Datura stramonium poisoning presents with which constellation of anticholinergic symptoms?", ["Dry mouth, mydriasis (dilated pupils), tachycardia, flushed hot skin, delirium, and urinary retention", "Pinpoint pupils, severe salivation, bradycardia, and watery diarrhea", "Profound hypothermia and cold clammy skin with miosis", "Sudden uncontrolled continuous urination with low heart rate"], 0, "Anticholinergic toxidrome: 'Blind as a bat (mydriasis), mad as a hatter (delirium), red as a beet (flushing), hot as a hare (hyperthermia), dry as a bone (anhidrosis)'."],
  ["Which drug is the specific pharmacological antidote used to treat severe anticholinergic delirium from Datura poisoning?", ["Physostigmine (a tertiary amine acetylcholinesterase inhibitor that crosses the blood-brain barrier)", "Atropine sulfate", "Naloxone", "Flumazenil"], 0, "Physostigmine reversibly inhibits acetylcholinesterase, elevating synaptic acetylcholine to overcome muscarinic blockade in both the periphery and the central nervous system."],
  ["Extracts of Atropa belladonna were applied to the eyes of Venetian women during the Renaissance because:", ["Atropine blocks muscarinic receptors on the iris pupillary sphincter, causing dilated pupils (mydriasis) considered cosmetically attractive", "It improved night vision for reading books", "It changed eye color from brown to blue", "It prevented all forms of eye infection"], 0, "The Italian name 'bella donna' ('beautiful lady') refers to the historical cosmetic use of atropine-containing belladonna eye drops to achieve wide, dilated pupils."],
  ["Gangrenous ergotism ('St. Anthony's Fire') in medieval Europe was caused by eating bread made from rye contaminated with:", ["Claviceps purpurea (producing vasoconstrictive ergot alkaloids)", "Aspergillus flavus", "Penicillium notatum", "Saccharomyces cerevisiae"], 0, "Ergot alkaloids (such as ergotamine) from Claviceps purpurea cause severe, prolonged peripheral vasoconstriction, leading to dry gangrene and loss of extremities."],
  ["Psilocybin is a natural hallucinogenic indole alkaloid obtained from:", ["'Magic mushrooms' belonging to the genus Psilocybe", "Leaves of Erythroxylum coca", "Latex of Papaver somniferum", "Seeds of Datura stramonium"], 0, "Psilocybin is synthesized by dozens of species of Psilocybe mushrooms; once ingested, it is rapidly dephosphorylated into psilocin, which activates 5-HT2A receptors."],
  ["Mescaline is a hallucinogenic phenethylamine alkaloid naturally found in the spineless peyote cactus:", ["Lophophora williamsii", "Opuntia ficus-indica", "Carnegiea gigantea", "Euphorbia tirucalli"], 0, "Peyote (Lophophora williamsii) contains mescaline, a traditional ceremonial psychedelic that alters visual perception, mood, and thought patterns."],
  ["Phencyclidine (PCP / 'angel dust') is an abused dissociative drug that acts primarily as an antagonist at:", ["NMDA (N-methyl-D-aspartate) glutamate receptors", "GABA-A chloride channels", "Beta-2 adrenergic receptors", "Histamine H1 receptors"], 0, "PCP binds inside the open channel of the NMDA receptor, blocking calcium and sodium influx and producing sensory dissociation, analgesia, and erratic behavior."],
  ["A patient presenting with violent, unpredictable behavior, horizontal and vertical rotary nystagmus, and high pain insensitivity is most likely intoxicated with:", ["Phencyclidine (PCP / angel dust)", "Morphine", "Marijuana", "Tobacco"], 0, "Rotary nystagmus (both horizontal and vertical) combined with extreme agitation, bizarre agitation, and pain insensitivity is pathognomonic for PCP toxicity."],
  ["Ketamine ('Special K') is a dissociative anesthetic abused recreationally for its ability to induce a state called the:", ["'K-hole' (a state of profound dissociation, sensory detachment, and out-of-body experiences)", "'Opioid nod'", "'Cocaine rush'", "'Nicotine buzz'"], 0, "Subanesthetic doses of ketamine induce dissociative anesthesia, floating feelings, and out-of-body spiritual experiences, colloquially termed the 'K-hole'."],
  ["Salvinorin A, an exceptionally potent natural hallucinogen found in the mint Salvia divinorum, uniquely acts as a selective agonist on:", ["Kappa-opioid receptors", "Mu-opioid receptors", "Cannabinoid CB1 receptors", "Serotonin 5-HT2A receptors"], 0, "Unlike classic psychedelics that act via 5-HT2A, Salvinorin A is a non-nitrogenous diterpenoid that acts as a potent and selective kappa-opioid receptor agonist."],
  ["The leaves of Catha edulis (Khat), commonly chewed as a social stimulant in East Africa and Yemen, contain:", ["Cathinone, an amphetamine-like central nervous system stimulant", "Morphine", "Tetrahydrocannabinol", "Nicotine"], 0, "Fresh khat leaves contain cathinone, a monoamine alkaloid that stimulates dopamine and norepinephrine release, producing alertness, euphoria, and anorexia."],
  ["'Bath salts' sold illicitly as designer drugs typically contain synthetic cathinones (such as mephedrone or MDPV) that cause:", ["Severe agitated delirium, paranoia, intense hallucinations, and hyperthermia", "Profound deep sleep with pinpoint pupils", "Sudden temporary paralysis of intestinal parasites", "Complete cure of viral hepatitis"], 0, "Synthetic cathinones are dangerous designer stimulants that inhibit monoamine reuptake, triggering extreme paranoia, suicidal or homicidal violence, and excited delirium."],
  ["'Meth mouth', characterized by rampant dental caries, enamel erosion, and blackened crumbling teeth, is caused by abuse of:", ["Methamphetamine (crystal meth)", "Heroin", "LSD", "Aspirin"], 0, "Methamphetamine induces profound xerostomia (dry mouth), bruxism (teeth grinding), poor oral hygiene, and craving for sugary drinks, destroying dentition."],
  ["After inhaling cigarette smoke, nicotine crosses the pulmonary alveolar-capillary barrier and reaches the human brain within approximately:", ["7 to 10 seconds", "45 to 60 minutes", "12 to 24 hours", "3 to 5 days"], 0, "Inhaled nicotine is absorbed instantly from the large alveolar surface area into pulmonary veins, reaching brain arterial circulation and nicotinic receptors in 7-10 seconds."],
  ["Which metabolite of nicotine has a long elimination half-life (~16-20 hours) and is measured in blood or urine as a reliable biomarker for tobacco exposure?", ["Cotinine", "Acetaldehyde", "Hippuric acid", "Uric acid"], 0, "Nicotine is converted in the liver by CYP2A6 into cotinine; due to its long half-life, cotinine is the clinical biomarker of choice for active and passive smoking."],
  ["Involuntary inhalation of tobacco smoke by non-smokers in shared environments is called passive smoking (second-hand smoke), which increases their risk of:", ["Lung cancer and ischemic heart disease", "Inherited hemophilia", "Down syndrome", "Scurvy"], 0, "Passive smoke contains the same toxic carcinogens (benzene, nitrosamines, CO) as active smoke, significantly increasing risks of coronary disease, stroke, and lung cancer."],
  ["Varenicline (Chantix) is an effective oral medication used for smoking cessation that acts as a:", ["Partial agonist at $\\alpha_4\\beta_2$ neuronal nicotinic acetylcholine receptors", "Pure competitive dopamine receptor blocker", "Selective beta-blocker in coronary arteries", "Long-acting barbiturate sedative"], 0, "Varenicline binds $\\alpha_4\\beta_2$ nicotinic receptors as a partial agonist, providing moderate dopamine release to curb withdrawal while blocking nicotine binding."],
  ["Bupropion (Zyban) assists smokers in quitting tobacco primarily by acting as an inhibitor of the reuptake of:", ["Norepinephrine and Dopamine (NDRI)", "Acetylcholine and GABA", "Serotonin exclusively", "Histamine and Glutamate"], 0, "Bupropion inhibits dopamine and norepinephrine reuptake transporters, boosting levels in reward pathways to alleviate depressive symptoms and cravings during nicotine cessation."],
  ["E-cigarette or Vaping product use-Associated Lung Injury (EVALI) has been strongly linked to inhalation of aerosolized:", ["Vitamin E acetate added as a thickening agent in counterfeit THC vape cartridges", "Pure distilled water vapor", "Powdered glucose", "Trace amounts of dietary sodium chloride"], 0, "Vitamin E acetate (tocopheryl acetate) in illicit vape liquids deposits in alveolar surfactant, creating cytotoxic reactive lipophilic breakdown products that cause acute chemical pneumonitis."],
  ["Popcorn lung (bronchiolitis obliterans), an irreversible obstructive lung disease, has been linked to inhaling vapors of which artificial butter-flavoring agent in e-liquids?", ["Diacetyl (2,3-butanedione)", "Ascorbic acid", "Citric acid", "Sucrose"], 0, "Diacetyl is safe for ingestion but highly toxic when heated and inhaled into bronchioles, causing progressive inflammatory scarring and obliterative bronchiolitis."],
  ["Approximately what percentage of ingested alcohol is absorbed directly across the gastric mucosa of the stomach before entering the small intestine?", ["Approximately 20%", "Exactly 100%", "Zero percent", "Over 95%"], 0, "Unlike most nutrients, about 20% of ingested ethanol is absorbed directly through the gastric wall, while the remaining 80% is absorbed in the duodenum and jejunum."],
  ["Consuming a heavy fatty meal before drinking alcohol slows down the rate of alcohol intoxication because:", ["Fat in the duodenum delays gastric emptying, keeping alcohol in the stomach where absorption is significantly slower", "Fat chemically neutralizes alcohol into pure water", "Fat binds irreversibly to brain GABA receptors", "Fat accelerates kidney excretion of alcohol ten-fold"], 0, "Fat and protein trigger cholecystokinin (CCK) release and pyloric sphincter contraction, trapping alcohol in the stomach and preventing rapid small intestinal absorption."],
  ["In India, what is the statutory legal limit of Blood Alcohol Concentration (BAC) for motorists under the Motor Vehicles Act?", ["$30\\text{ mg}$ per $100\\text{ mL}$ of blood (0.03%)", "$150\\text{ mg}$ per $100\\text{ mL}$ of blood (0.15%)", "$500\\text{ mg}$ per $100\\text{ mL}$ of blood (0.50%)", "Zero tolerance with zero mg permitted for all humans"], 0, "Under Section 185 of the Motor Vehicles Act in India, driving with a BAC exceeding 30 mg per 100 mL of blood (0.03%) is a punishable offense."],
  ["Chemical breathalyzer devices used by traffic police detect alcohol in exhaled alveolar breath based on the reduction of:", ["Potassium dichromate (orange $Cr^{6+}$ reduced to green $Cr^{3+}$)", "Potassium permanganate to purple crystals", "Sodium hydroxide to hydrogen gas", "Copper sulfate to white powder"], 0, "Ethanol in breath reacts with acidified potassium dichromate ($Cr^{6+}$, reddish-orange), oxidizing to acetic acid while reducing chromium to green chromium sulfate ($Cr^{3+}$)."],
  ["The elimination of alcohol from the human bloodstream proceeds primarily via zero-order kinetics, meaning that:", ["Alcohol is cleared at a constant absolute amount per unit time, regardless of its blood concentration", "Alcohol clearance doubles every time blood concentration increases", "Half of the remaining alcohol is cleared every 20 minutes", "Alcohol is never excreted by the human body"], 0, "Hepatic alcohol dehydrogenase enzymes become saturated at very low BAC ($>0.01\\%$); beyond saturation, alcohol is eliminated at a fixed rate of ~7-10 g (one drink) per hour."],
  ["Fetal Alcohol Syndrome (FAS) is a developmental disorder resulting from maternal alcohol intake during pregnancy, characterized by:", ["Microcephaly, smooth philtrum, thin upper lip, and severe intellectual disability", "Gigantism and abnormal hypertrophy of all four limbs", "Polydactyly and cleft palate only", "Bilateral renal agenesis with normal cognition"], 0, "Ethanol readily crosses the placenta and is neurotoxic to the developing fetal brain, causing permanent facial dysmorphism (smooth philtrum, thin vermilion border) and cognitive impairment."],
  ["Mallory-Weiss syndrome is an acute upper gastrointestinal bleeding emergency occurring in alcoholics caused by:", ["Longitudinal mucosal lacerations at the gastroesophageal junction resulting from violent, forceful retching", "Perforation of the gallbladder by gallstones", "Erosion of the appendix by pinworms", "Malignant transformation of gastric parietal cells"], 0, "Severe retching or vomiting against a closed cardia creates massive shearing pressures that tear the mucosal and submucosal vessels of the gastroesophageal junction."],
  ["Alcoholic dilated cardiomyopathy results from chronic heavy alcohol consumption due to:", ["Direct toxic effects of ethanol and acetaldehyde on myocardial myofibrillar protein synthesis and mitochondrial respiration", "Excessive storage of glycogen in cardiac Purkinje fibers", "Invasion of cardiac muscle by streptococcal bacteria", "Hypersecretion of parathyroid hormone"], 0, "Acetaldehyde disrupts cardiac sarcoplasmic reticulum calcium transport and mitochondrial ATP synthesis, leading to ventricular dilation, four-chamber enlargement, and heart failure."],
  ["Alcoholic cerebellar degeneration in long-term chronic alcoholics manifests as:", ["Truncal ataxia and a wide-based, uncoordinated gait due to selective atrophy of the anterior cerebellar vermis", "Severe paralysis of the upper eyelid only", "Sudden loss of visual color perception", "Complete loss of skin touch sensation over the entire body"], 0, "Chronic toxicity and secondary thiamine deficiency cause irreversible loss of Purkinje cells in the anterior and superior vermis of the cerebellum, producing permanent ataxia."],
  ["Acamprosate (Campral) is a pharmacological agent prescribed to maintain abstinence in detoxified alcohol-dependent patients by:", ["Restoring balance between inhibitory GABA and excitatory glutamate neurotransmission in the brain", "Inhibiting stomach alcohol absorption completely", "Inducing severe vomiting whenever alcohol is smelled", "Acting as a pure dopamine antagonist in the retina"], 0, "Acamprosate is an NMDA receptor modulator that dampens hyperglutamatergic tone, reducing chronic protracted post-withdrawal cravings and dysphoria."],
  ["Naltrexone is an oral opioid receptor antagonist prescribed in the treatment of chronic alcoholism because it:", ["Blocks endogenous endorphin binding to mu-opioid receptors, reducing the rewarding 'buzz' and craving for alcohol", "Inhibits hepatic aldehyde dehydrogenase like disulfiram", "Causes immediate deep sedation within five minutes", "Suppresses insulin secretion from the pancreas"], 0, "Alcohol stimulates the release of endogenous endorphins that trigger dopamine reward; naltrexone blocks these mu-receptors, extinguishing the pleasurable reinforcement of drinking."],
  ["Thiopental sodium is an ultra-short-acting barbiturate whose rapid termination of action after a single intravenous dose is due to:", ["Rapid redistribution from the brain into poorly perfused muscle and adipose tissues", "Instantaneous excretion of unchanged drug in urine", "Rapid destruction by plasma cholinesterase enzymes", "Immediate exhalation through alveolar lungs"], 0, "Thiopental's high lipid solubility allows rapid entry into the brain; within minutes, it redistributes away from the brain into muscle and fat, terminating its anesthetic effect."],
  ["Flumazenil is a specific competitive antagonist indicated clinically for the rapid reversal of overdose caused by:", ["Benzodiazepines (such as Diazepam and Midazolam)", "Barbiturates (such as Phenobarbital)", "Opioids (such as Heroin)", "Amphetamines (such as Methamphetamine)"], 0, "Flumazenil binds competitively to the allosteric benzodiazepine receptor site on GABA-A complexes, promptly reversing benzodiazepine-induced sedation and coma."],
  ["Flunitrazepam (Rohypnol, commonly known as 'roofies') is notorious as a date-rape drug because it causes:", ["Potent sedation, muscle flaccidity, and profound anterograde amnesia (inability to remember events while intoxicated)", "Immediate high fever and hyperactive talking", "Sudden irreversible loss of auditory hearing", "Extreme physical aggression and hypertension"], 0, "Flunitrazepam is a potent benzodiazepine that rapidly induces psychomotor impairment and anterograde amnesia, leaving victims unable to resist or recall assaults."],
  ["Gamma-Hydroxybutyrate (GHB), an abused central nervous system depressant and illicit club drug, acts primarily as an agonist at:", ["$GABA_B$ receptors and specific GHB receptors", "Nicotinic acetylcholine receptors", "Mu-opioid receptors", "Beta-1 adrenergic receptors"], 0, "GHB is a naturally occurring GABA metabolite; at pharmacological doses, it binds GABAB receptors, producing euphoria, disinhibition, profound sedation, and respiratory arrest."],
  ["'Sudden Sniffing Death Syndrome' in adolescents who abuse volatile inhalants (such as butane, toluene, or aerosol propellants) is caused by:", ["Fatal ventricular arrhythmias triggered by myocardial sensitization to endogenous catecholamines", "Immediate perforation of the esophagus", "Sudden freezing of the liver", "Bacterial infection of the cerebral cortex"], 0, "Halogenated hydrocarbons and volatile solvents sensitize myocardial beta-receptors to circulating adrenaline; sudden fright or physical exertion precipitates fatal ventricular fibrillation."],
  ["Chronic abuse of nitrous oxide ('whippets' / 'laughing gas') can lead to subacute combined degeneration of the spinal cord by:", ["Irreversibly oxidizing the cobalt core of Vitamin $B_{12}$ (cobalamin), inactivating methionine synthase", "Directly cleaving myelin basic protein", "Inhibiting intestinal absorption of iron", "Destroying motor neuron cell bodies in anterior horns"], 0, "Nitrous oxide oxidizes the cobalt atom of Vitamin B12 from Co+ to Co2+, inactivating methionine synthase and halting myelin methylation in dorsal/lateral spinal columns."],
  ["Peliosis hepatis (formation of multiple blood-filled cystic spaces within the liver) is a dangerous complication associated with long-term abuse of:", ["Anabolic-androgenic steroids", "Heroin", "Cannabis", "Nicotine"], 0, "Anabolic steroids damage hepatic sinusoidal endothelial cells, causing blood-filled cavernous lakes in the liver (peliosis hepatis) that can rupture and cause fatal hemoperitoneum."],
  ["Anabolic-androgenic steroid abuse significantly alters circulating lipid profiles, predisposing young bodybuilders to premature atherosclerosis by:", ["Markedly lowering HDL ('good') cholesterol and significantly raising LDL ('bad') cholesterol", "Doubling HDL cholesterol and eliminating all LDL cholesterol", "Preventing all cholesterol absorption in the gut", "Converting all dietary cholesterol into vitamin D"], 0, "Androgens stimulate hepatic triglyceride lipase, drastically lowering atheroprotective HDL cholesterol while elevating atherogenic LDL cholesterol."],
  ["'Roid rage' is a psychiatric adverse effect of high-dose anabolic steroid abuse characterized by:", ["Unprovoked aggressive outbursts, extreme irritability, hostility, and violent behavior", "Deep continuous peaceful depression with loss of speech", "Sudden uncontrollable laughter", "Severe visual color blindness"], 0, "Supraphysiological doses of anabolic steroids alter serotonin and androgen signaling in the amygdala and prefrontal cortex, precipitating uncontrollable anger and violence."],
  ["Abuse of recombinant Human Growth Hormone (rhGH) by power athletes to increase lean muscle mass can induce:", ["Acromegaly-like features (coarsened facial bones, enlarged jaw, hands, and feet) and insulin resistance", "Permanent dwarfism and testicular enlargement", "Immediate destruction of long bones", "Loss of all facial hair and eyebrows"], 0, "Excess growth hormone stimulates hepatic IGF-1 release, driving soft tissue overgrowth, visceromegaly, mandibular enlargement (prognathism), and secondary diabetes mellitus."],
  ["Clenbuterol is abused by athletes and bodybuilders because it acts as a:", ["$\\beta_2$-adrenergic agonist that promotes lipolysis (fat loss) and stimulates skeletal muscle protein anabolism", "Potent diuretic that blocks sodium reabsorption in the loop of Henle", "Sedative that induces twelve hours of continuous sleep", "Pure estrogen receptor blocker in the brain"], 0, "Clenbuterol is a long-acting beta-2 agonist originally used as a bronchodilator; its repartitioning effect increases lean muscle mass while burning body fat."],
  ["Athletes in weight-categorized sports (wrestling, boxing, judo) abuse diuretic drugs primarily to:", ["Rapidly lose water weight to qualify for a lower weight class, or dilute urine to mask banned doping substances", "Increase their muscle size tenfold within minutes", "Prevent all lactic acid buildup during fights", "Improve night vision under arena lights"], 0, "Diuretics induce massive renal water excretion for rapid weight loss before weigh-ins and dilute urine concentrations of prohibited anabolic steroids to evade doping tests."],
  ["Beta-blockers (such as Propranolol) are strictly banned as performance-enhancing agents in archery, shooting, and billiards because they:", ["Suppress hand tremors, lower resting heart rate, and reduce performance anxiety", "Increase maximal sprinting speed by 50%", "Increase oxygen consumption in skeletal muscles", "Cause temporary visual magnification of targets"], 0, "By antagonizing beta-1 adrenergic receptors, beta-blockers prevent stress-induced tachycardia and fine hand tremors, conferring an unfair steady-hand advantage in precision sports."],
  ["The World Anti-Doping Agency (WADA) was established in 1999 under the leadership of the International Olympic Committee to:", ["Promote, coordinate, and monitor the fight against doping in sport internationally", "Manufacture performance-enhancing supplements for Olympic teams", "Organize international football tournaments", "Provide medical insurance for retired athletes"], 0, "WADA is the independent global foundation tasked with harmonizing anti-doping policies, maintaining the prohibited substance list, and conducting international testing."],
  ["The Athlete Biological Passport (ABP) monitoring program detects doping in athletes by:", ["Tracking longitudinal biological markers (such as hematocrit, reticulocyte count, and steroid profiles) over time to detect abnormal variations", "Testing an athlete once every five years at the Olympic Games only", "Measuring an athlete's height and weight before each race", "Performing psychological interviews about athletic dreams"], 0, "Rather than only detecting specific prohibited chemical substances, the ABP detects indirect physiological effects of doping (like EPO use or blood transfusions) via biomarker deviation."],
  ["In addiction medicine, 'cross-tolerance' occurs when:", ["Tolerance developed to one drug confers tolerance to another drug acting on the same or related receptor mechanisms", "A patient becomes allergic to all antibiotics simultaneously", "Tolerance to a drug disappears within five minutes of taking it", "An individual can drink unlimited water without urinating"], 0, "Cross-tolerance occurs between pharmacologically related agents (e.g. chronic alcoholics show cross-tolerance to benzodiazepines and general anesthetics due to common GABA-A pathways)."],
  ["'Cross-dependence' is clinically utilized during medical detoxification because it allows clinicians to:", ["Substitute a safer, longer-acting drug from the same class to prevent acute withdrawal from an abused substance", "Administer toxic poisons to eliminate drug cravings", "Completely avoid all medical treatments during withdrawal", "Increase the dose of the abused drug tenfold"], 0, "Cross-dependence permits substituting long-acting agents (such as chlordiazepoxide for alcohol, or methadone for heroin) to smoothly taper the patient and prevent life-threatening withdrawal."],
  ["Why can abrupt withdrawal from alcohol or barbiturates be directly fatal, unlike opioid withdrawal in healthy adults?", ["Severe GABAergic withdrawal produces uninhibited glutamate excitation that can trigger status epilepticus, hyperthermia, and cardiac collapse", "Opioid withdrawal completely freezes the coronary circulation", "Alcohol withdrawal instantly stops all liver enzymes", "Barbiturates transform into cyanide inside the blood"], 0, "Sudden loss of GABA-A receptor stimulation unleashes severe, uncontrolled central nervous system excitability, leading to lethal status epilepticus and autonomic exhaustion in delirium tremens."],
  ["The slang phrase 'cold turkey' used to describe abrupt, unassisted opioid withdrawal originates from the appearance of:", ["Piloerection (goosebumps) on the cold, clammy skin of the withdrawing addict, resembling a plucked turkey carcass", "Eating cold roast turkey to reduce withdrawal nausea", "A turkey-like cough caused by lung inflammation", "Severe swelling of the neck resembling a turkey wattle"], 0, "Opioid withdrawal causes massive sympathetic rebound and cutaneous vasoconstriction with prominent piloerection ('gooseflesh'), giving the skin the cold, bumpy look of a plucked turkey."],
  ["The phrase 'kicking the habit' originates from which physical sign observed during acute opioid withdrawal?", ["Involuntary, severe muscle twitches and violent kicking movements of the lower legs", "Kicking doors in anger due to psychiatric delirium", "Kicking footballs during outdoor exercise therapy", "Dancing to stimulate dopamine release in the brain"], 0, "Agonizing restlessness, severe muscle aches, and spontaneous rhythmic jerking and kicking of the legs during opioid withdrawal gave rise to the idiom 'kicking the habit'."],
  ["During opioid withdrawal, the patient experiences which collection of rebound physiological symptoms?", ["Rhinorrhea (runny nose), lacrimation (watery eyes), yawning, piloerection, severe abdominal cramps, and diarrhea", "Severe constipation, dry mouth, pinpoint pupils, and coma", "Sudden excessive accumulation of fat on the face", "Complete absence of sweating and hypothermia"], 0, "Rebound sympathetic and parasympathetic overactivity causes intense lacrimation, rhinorrhea, yawning, hyperhidrosis, dilated pupils (mydriasis), vomiting, and diarrhea."],
  ["'Dual diagnosis' (or co-occurring disorder) in clinical psychiatry refers to the coexistence in a single patient of:", ["A substance use disorder and an independent psychiatric mental health disorder (e.g. major depression, schizophrenia, or bipolar disorder)", "Two different bacterial infections simultaneously", "Both heart disease and broken bones from a car accident", "Dental caries and myopia"], 0, "Dual diagnosis describes individuals struggling concurrently with substance addiction and mental illnesses, requiring integrated, simultaneous psychiatric and de-addiction treatment."],
  ["Harm reduction programs for intravenous drug abusers (such as needle-and-syringe exchange programs) aim primarily to:", ["Reduce the transmission of fatal bloodborne viral infections (HIV and Hepatitis B/C) without demanding immediate abstinence", "Provide free illicit drugs to encourage addiction", "Encourage adolescents to start intravenous injections", "Replace hospital emergency rooms with mobile clinics"], 0, "Harm reduction pragmatic policies accept that some users cannot immediately cease use, and focus on mitigating public health harms (preventing HIV/HCV spread via clean needles)."],
  ["Motivational Interviewing is a client-centered psychotherapeutic counseling style developed by Miller and Rollnick to:", ["Help patients explore and resolve their internal ambivalence about quitting substance abuse", "Order patients to immediately stop using drugs under threat of imprisonment", "Administer electric shocks whenever drug cravings occur", "Hypnotize patients into forgetting that drugs exist"], 0, "Motivational Interviewing uses empathetic listening and open questions to help patients recognize the discrepancy between their values and their addictive behaviors, fostering internal motivation to change."],
  ["'Enabling behavior' by family members of an addict is counterproductive to recovery because it:", ["Shields the addict from the painful natural consequences of their drug use, allowing addiction to continue unhindered", "Encourages the addict to attend daily rehabilitation meetings", "Helps the addict find stable long-term employment", "Provides healthy nutritious food to the family"], 0, "Enabling actions (such as making excuses to employers, paying bail, or lying for the addict) insulate the abuser from consequences, delaying their realization of the need for help."],
  ["What is the single most vital parental approach to preventing drug experimentation in growing children?", ["Maintaining open, loving, non-judgmental communication and showing active interest in the child's daily life and peer group", "Imposing harsh physical punishments for low examination grades", "Buying the child expensive gifts whenever they feel sad", "Allowing the child total unsupervised freedom with internet and money"], 0, "Strong parent-child bonds, active parental involvement, emotional warmth, and attentive monitoring of peer relationships are the most powerful protective buffers against adolescent substance abuse."],
  ["Which psychoactive alkaloid in tobacco is an agonist at neuronal nicotinic acetylcholine receptors ($nAChRs$)?", ["Nicotine", "Atropine", "Reserpine", "Ephedrine"], 0, "Nicotine binds stereospecifically to pentameric alpha4beta2 nicotinic acetylcholine receptors on dopaminergic neurons in the VTA, stimulating dopamine release."],
  ["How does chronic tobacco smoking induce chronic bronchitis?", ["It paralyzes respiratory cilia, hyperstimulates goblet cells, and leads to chronic mucus hypersecretion and persistent productive cough", "It causes calcification of rib cartilages", "It converts alveolar epithelial cells into cartilage", "It destroys pulmonary artery valves"], 0, "Cigarette smoke chemicals impair ciliary clearance and provoke mucosal inflammation, causing chronic productive cough defined as chronic bronchitis."],
  ["Leukoplakia is a premalignant oral mucosal lesion commonly found in users of smokeless tobacco, presenting as:", ["A thick, white, adherent plaque on the gums or inner cheeks that cannot be scraped off", "A painful fluid-filled blister on the tongue", "A black velvety patch on the soft palate", "A red bleeding polyp on the uvula"], 0, "Leukoplakia represents hyperkeratosis and epithelial dysplasia caused by chronic chemical irritation from tobacco quids, carrying high malignant transformation risk."],
  ["The intense psychological craving experienced by recovering cigarette smokers is primarily driven by:", ["Conditioned neural associations and dopamine depletion in the ventral tegmental area and nucleus accumbens", "High arterial oxygen levels", "Accumulation of calcium in the brain", "Excessive secretion of bile acids"], 0, "Nicotine withdrawal reduces baseline dopamine firing in the nucleus accumbens, creating intense dysphoria and conditioned craving when exposed to smoking triggers."],
  ["Which pharmacological agent is a transdermal patch formulation designed to provide a steady, controlled release of nicotine to relieve smoking cessation withdrawal?", ["Nicotine patch", "Morphine patch", "Insulin patch", "Penicillin patch"], 0, "Transdermal nicotine patches deliver a steady, sustained blood level of nicotine without harmful smoke carcinogens, smoothing the path to complete cessation."],
  ["Why does the combination of alcohol and cocaine create a particularly cardiotoxic chemical metabolite in the human liver?", ["They react enzymatically via carboxylesterase to form cocaethylene, which is more toxic and longer-lasting than cocaine alone", "They neutralize each other completely into glucose", "They form pure cyanide crystals in blood", "They destroy all red blood cells within seconds"], 0, "Concurrent consumption of ethanol and cocaine drives hepatic transesterification to form cocaethylene, a potent metabolite with profound arrhythmogenic cardiotoxicity."],
  ["Heroin overdose deaths are primarily caused by acute cessation of which vital physiological function?", ["Respiratory arrest due to depression of the medullary respiratory rhythm generator", "Renal tubular rupture", "Sudden cardiac rupture of the left atrium", "Massive internal hemorrhage in spleen"], 0, "Mu-opioid receptor activation in the pre-Bötzinger complex and medullary respiratory center blunts sensitivity to arterial $CO_2$, halting spontaneous breathing."],
  ["Which pupil change is a hallmark clinical indicator of acute cocaine or amphetamine intoxication?", ["Mydriasis (widely dilated pupils)", "Pinpoint miosis", "Complete absence of the iris", "Unequal corneal clouding"], 0, "Sympathomimetic psychostimulants (cocaine, amphetamines) trigger excessive norepinephrine release that contracts the pupillary dilator muscle, producing bilateral mydriasis."],
  ["Khat chewing is culturally prevalent in which geographic regions?", ["East Africa (Somalia, Ethiopia, Kenya) and the Arabian Peninsula (Yemen)", "Arctic tundra and Greenland", "Tropical rainforests of the Amazon basin only", "Australian outback only"], 0, "The leaves of Catha edulis (Khat) are traditionally chewed for their stimulating cathinone content primarily in the Horn of Africa and the Arabian Peninsula."],
  ["An individual who experiences anxiety, hand tremors, insomnia, and tachycardia within 6 to 12 hours after stopping heavy daily alcohol consumption is exhibiting:", ["Mild to moderate alcohol withdrawal syndrome", "Schizophrenic breakdown", "Acute diabetic ketoacidosis", "Normal emotional adjustment"], 0, "Early alcohol withdrawal reflects autonomic nervous system hyperactivity and central neuronal hyperexcitability caused by the removal of alcohol-mediated GABA inhibition."],
  ["Why should parents and teachers seek professional psychological and psychiatric help when an adolescent shows clear signs of substance abuse?", ["Addiction is a complex neurobiological disorder requiring specialized medical detoxification, counseling, and behavioral therapy", "School teachers are legally forbidden from talking to parents", "Adolescents never talk to their friends", "Substance abuse can only be cured by surgical brain implants"], 0, "Professional intervention provides evidence-based medical assessment, structured detoxification, psychiatric evaluation for co-occurring disorders, and long-term relapse prevention."],
  ["Peer pressure during adolescence is a major precipitating factor in drug experimentation because:", ["Adolescents have a strong developmental desire for peer acceptance and fear social isolation or ridicule from peer groups", "Adolescents have fully mature adult prefrontal cortex executive control", "Adolescents never care about what their friends think", "Drugs are required for passing school examinations"], 0, "During adolescence, the drive for social affiliation and peer conformity often overrides risk perception, making teens vulnerable to experimenting with drugs under peer influence."],
  ["A healthy alternative approach for young people to channel their youthful energy and manage emotional stress without drugs is:", ["Active participation in sports, athletic games, music, drama, reading, and yoga", "Spending eighteen hours a day in solitary darkness", "Refusing to communicate with family members", "Consuming energy drinks with sedatives"], 0, "NCERT stresses that channeling energy into healthy physical pursuits, creative hobbies, sports, and spiritual practices like yoga builds resilience against substance abuse."],
  ["Which international observance day is designated by the United Nations as the International Day Against Drug Abuse and Illicit Trafficking?", ["June 26", "December 1", "April 7", "May 31"], 0, "June 26 is observed worldwide as the International Day Against Drug Abuse and Illicit Trafficking to strengthen global action and cooperation toward a society free of drug abuse."]
];

moreMcqsPart4.forEach(m => addMcq(m[0], m[1], m[2], m[3]));

// Format AR questions
const arQuestions = arData.map((d, i) => ({
  question: `${arDirections}\n\nAssertion (A): ${d.a}\nReason (R): ${d.r}`,
  options: arOptions,
  correctAnswer: d.ans,
  explanation: d.exp,
  type: "ASSERTION_REASON",
  questionType: "Assertion–Reasoning",
  subTopic: SUBTOPIC,
  chapter: CHAPTER,
  subject: SUBJECT,
  marks: 4,
  negativeMarks: 1
}));

// Format MCQ questions
const mcqQuestions = mcqData.map(m => ({
  question: m.q,
  options: m.opts,
  correctAnswer: m.ans,
  explanation: m.exp,
  type: "MCQ",
  questionType: "MCQ (Multiple Choice Question)",
  subTopic: SUBTOPIC,
  chapter: CHAPTER,
  subject: SUBJECT,
  marks: 4,
  negativeMarks: 1
}));

const allQuestions = [...arQuestions, ...mcqQuestions];

console.log(`Part 4 (${SUBTOPIC}) total questions: ${allQuestions.length} (AR: ${arQuestions.length}, MCQ: ${mcqQuestions.length})`);

// KaTeX validator
let katexErrors = 0;
function testKatex(str, label) {
  if (!str) return;
  const mathRegex = /\$([^\$]+)\$/g;
  let match;
  while ((match = mathRegex.exec(str)) !== null) {
    try {
      katex.renderToString(match[1], { throwOnError: true });
    } catch (e) {
      console.error(`KaTeX error in ${label}: "${match[1]}" -> ${e.message}`);
      katexErrors++;
    }
  }
}

allQuestions.forEach((q, idx) => {
  testKatex(q.question, `Q${idx + 1} question`);
  q.options.forEach((opt, oIdx) => testKatex(opt, `Q${idx + 1} opt${oIdx + 1}`));
  testKatex(q.explanation, `Q${idx + 1} explanation`);
});

console.log(`Part 4 KaTeX errors: ${katexErrors}`);

if (katexErrors === 0 && allQuestions.length === 180) {
  const outPath = path.join(__dirname, 'data_zoology_biohuman_part4.js');
  const fileContent = `// Auto-generated data for Zoology Biology and Human Welfare Part 4: ${SUBTOPIC}\nmodule.exports = ${JSON.stringify(allQuestions, null, 2)};\n`;
  fs.writeFileSync(outPath, fileContent, 'utf8');
  console.log(`Successfully wrote ${outPath}`);
} else {
  console.error("Validation failed! Not writing output.");
  process.exit(1);
}
