const fs = require('fs');
const path = require('path');
const katex = require('katex');

const SUBTOPIC = "Microbes in human welfare";
const CHAPTER = "Biology and Human Welfare";
const SUBJECT = "Zoology";

const arDirections = "Directions: In each of the following questions, a statement of Assertion (A) is given followed by a corresponding statement of Reason (R). Select the correct answer from the options given below:\n(a) Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.\n(b) Both Assertion and Reason are true, but Reason is not the correct explanation of Assertion.\n(c) Assertion is true, but Reason is false.\n(d) Assertion is false, but Reason is true.";

const arOptions = [
  "Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.",
  "Both Assertion and Reason are true, but Reason is not the correct explanation of Assertion.",
  "Assertion is true, but Reason is false.",
  "Assertion is false, but Reason is true."
];

const arData = [
  {
    a: "Lactic Acid Bacteria (LAB) convert milk into curd and improve its nutritional quality.",
    r: "During growth, LAB produce acids that coagulate and partially digest milk proteins, while significantly increasing vitamin $B_{12}$ content.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason is the correct explanation. LAB produce lactic acid that coagulates casein and ferments milk, enhancing its nutritional profile by synthesizing vitamin $B_{12}$."
  },
  {
    a: "A small amount of curd added to fresh warm milk acts as an inoculum or starter.",
    r: "The starter curd contains millions of viable Lactic Acid Bacteria (LAB) that multiply at suitable temperatures to convert the fresh milk into curd.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason is the correct explanation. Inoculum provides active LAB which rapidly multiply at optimal incubation temperature (around 37-40°C) to sour and set the milk."
  },
  {
    a: "Lactic Acid Bacteria (LAB) present in the human stomach play a beneficial role in health.",
    r: "LAB check and inhibit the growth of pathogenic, disease-causing microbes in the stomach and gut.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason is the correct explanation. LAB produce antimicrobial bacteriocins and maintain an acidic environment, preventing colonization by pathogenic bacteria."
  },
  {
    a: "The puffed-up appearance of dough used for making dosa and idli is due to the release of carbon dioxide ($CO_2$).",
    r: "The dough is fermented by bacteria that undergo anaerobic respiration, releasing $CO_2$ gas bubbles that get trapped in the dough.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason is the correct explanation. Bacterial fermentation (such as by Leuconostoc mesenteroides) releases $CO_2$, creating sponge-like bubbles that puff up the dough."
  },
  {
    a: "Baker's yeast, Saccharomyces cerevisiae, is universally used in the baking industry for leavening bread dough.",
    r: "Anaerobic fermentation of sugars by S. cerevisiae produces ethanol and $CO_2$, which creates pore spaces and expands the bread dough.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason is the correct explanation. Evolution of $CO_2$ gas during alcoholic fermentation creates the soft, porous, and spongy texture of leavened bread."
  },
  {
    a: "Large holes characteristic of Swiss cheese are produced by the bacterium Propionibacterium sharmanii.",
    r: "Propionibacterium sharmanii produces large volumes of carbon dioxide ($CO_2$) gas during propionic acid fermentation.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason is the correct explanation. Propionic acid fermentation produces copious $CO_2$ gas, which gets trapped during cheese curd ripening, creating the famous large holes ('eyes')."
  },
  {
    a: "Roquefort cheese is ripened by growing the fungus Penicillium roqueforti on it.",
    r: "The fungal mycelium imparts a characteristic blue-green veining, distinctive texture, and pungent flavor to the ripened cheese.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason correctly explains that fungal lipolysis and proteolysis by Penicillium roqueforti yield methyl ketones that provide Roquefort's sharp, distinctive flavor."
  },
  {
    a: "Industrial production of beverages and antibiotics requires the cultivation of microbes in very large vessels called fermentors.",
    r: "Fermentors provide precisely controlled environmental conditions (temperature, pH, dissolved oxygen, and nutrient supply) for mass microbial growth.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason explains why large industrial fermentors (bioreactors) are necessary for high-density microbial cultivation."
  },
  {
    a: "Brewer's yeast and Baker's yeast belong to the same fungal species, Saccharomyces cerevisiae.",
    r: "Different specialized strains of Saccharomyces cerevisiae are selected for alcohol tolerance in brewing and gas production in baking.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason is the correct explanation. Both yeasts are S. cerevisiae, with brewer's strains selected for ethanol yield and baker's strains selected for rapid $CO_2$ leavening."
  },
  {
    a: "Wine and beer are produced without distillation, whereas whisky, brandy, and rum are produced by distillation of the fermented broth.",
    r: "Distillation concentrates ethanol because alcohol has a lower boiling point than water, yielding spirits with significantly higher alcohol percentages.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason is the correct explanation. Fermentation ceases naturally at around 12-15% alcohol due to yeast toxicity; distillation is required to concentrate alcohol into distilled spirits (40-50%)."
  },
  {
    a: "Alexander Fleming discovered penicillin serendipitously while working on Staphylococci bacteria.",
    r: "Fleming observed that Staphylococci failed to grow around a contaminating mould identified as Penicillium notatum on an unwashed culture plate.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason is the correct explanation. Fleming noted a clear zone of bacterial lysis around the mould colony Penicillium notatum, deducing that the mould secreted an antibacterial chemical (penicillin)."
  },
  {
    a: "The full therapeutic potential of penicillin as an effective antibiotic was established by Ernest Chain and Howard Florey.",
    r: "Chain and Florey isolated, purified, and mass-produced penicillin for clinical trials on wounded soldiers during World War II.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason correctly explains that Chain and Florey developed chemical extraction and purification methods, proving penicillin's efficacy in clinical medicine."
  },
  {
    a: "Fleming, Chain, and Florey were jointly awarded the Nobel Prize in Physiology or Medicine in 1945.",
    r: "Their collaborative discovery and development of penicillin revolutionized the treatment of deadly bacterial infectious diseases worldwide.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason explains the rationale for their 1945 Nobel Prize in Medicine."
  },
  {
    a: "Antibiotics are considered 'pro-life' with respect to human beings, but 'anti-life' with respect to disease-causing microbes.",
    r: "Antibiotics selectively destroy or inhibit pathogenic bacteria while curing lethal infections in human hosts.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason explains the Greek roots 'anti' (against) and 'bios' (life) which apply against pathogens, but represent life-saving therapeutics for human patients."
  },
  {
    a: "Aspergillus niger is an industrial filamentous fungus utilized for the commercial production of citric acid.",
    r: "Under conditions of iron and manganese limitation, Aspergillus niger overproduces and secretes large amounts of citric acid via the Krebs cycle.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason correctly explains the industrial biochemistry of citric acid fermentation by Aspergillus niger."
  },
  {
    a: "Acetobacter aceti is a strictly aerobic bacterium employed in the industrial synthesis of acetic acid (vinegar).",
    r: "Acetobacter aceti oxidizes ethanol into acetic acid using molecular oxygen.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason is the correct explanation. Acetic acid bacteria (Acetobacter aceti) aerobically oxidize ethanol produced by yeast fermentation into acetic acid."
  },
  {
    a: "Clostridium butylicum is an anaerobic bacterium used for the commercial synthesis of butyric acid.",
    r: "Clostridium butylicum carries out butyric acid fermentation using starch or sugars as substrate under strictly anaerobic conditions.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason is the correct explanation. C. butylicum is an obligate anaerobe that ferments carbohydrates into butyric acid, acetic acid, and $CO_2$."
  },
  {
    a: "Microbial lipases are widely incorporated into modern laundry detergent formulations.",
    r: "Lipases enzymatically hydrolyze ester bonds in lipid and oil stains, facilitating their removal from clothing during washing.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason is the correct explanation. Lipases break down triglycerides into glycerol and fatty acids, enabling easy solubilization of greasy fabric stains."
  },
  {
    a: "Commercially bottled fruit juices are much clearer and transparent compared to freshly squeezed homemade fruit juices.",
    r: "Bottled juices are clarified industrially using pectinases and proteases that digest suspended pectic compounds and proteins.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason is the correct explanation. Homemade juice is cloudy due to suspended colloidal pectin and protein complexes; enzymatic digestion with pectinase and protease renders bottled juice sparkling clear."
  },
  {
    a: "Streptokinase produced by Streptococcus bacterium is administered as a 'clot buster' to patients who have suffered a myocardial infarction.",
    r: "Streptokinase activates systemic plasminogen to plasmin, which lyses fibrin blood clots obstructing coronary blood vessels.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason correctly explains that streptokinase forms an activator complex with plasminogen, converting uncomplexed plasminogen to active plasmin that dissolves thrombi."
  },
  {
    a: "Genetically engineered streptokinase is preferred for clinical thrombolytic therapy in heart attack patients.",
    r: "Genetic modification reduces the native immunogenicity and potential allergic side effects of bacterial streptokinase in human patients.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason explains that recombinant DNA technology optimizes streptokinase to minimize host antigenicity and extend circulating half-life."
  },
  {
    a: "Cyclosporin A is a bioactive cyclic peptide used as an immunosuppressive agent in human organ transplantation.",
    r: "Cyclosporin A is produced commercially by the filamentous soil fungus Trichoderma polysporum.",
    ans: 1,
    exp: "Both Assertion and Reason are true, but Reason is the microbial origin of cyclosporin A, not the pharmacological explanation of why it suppresses immunity (which is via calcineurin inhibition preventing IL-2 transcription)."
  },
  {
    a: "Organ transplant recipients treated with cyclosporin A exhibit a significantly reduced incidence of graft rejection.",
    r: "Cyclosporin A selectively inhibits calcineurin, preventing the transcription of Interleukin-2 (IL-2) and suppressing T-cell activation.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason is the correct explanation. Calcineurin inhibition prevents NFAT dephosphorylation, shutting down IL-2 production and halting T-cell-mediated graft rejection."
  },
  {
    a: "Statins are bioactive molecules commercialized as blood cholesterol-lowering agents.",
    r: "Statins are produced by the yeast Monascus purpureus and act by competitively inhibiting the rate-limiting enzyme HMG-CoA reductase.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason is the correct explanation. Statins structurally resemble HMG-CoA and competitively inhibit HMG-CoA reductase in hepatocytes, blocking de novo cholesterol biosynthesis."
  },
  {
    a: "The traditional drink 'Toddy' of southern India is produced by the microbial fermentation of sap collected from palm trees.",
    r: "Naturally occurring yeasts and lactic acid bacteria ferment the sugars present in palm sap, producing alcohol and effervescence.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason correctly explains that wild microbes present on collection pots and palm inflorescence rapidly ferment the sugary sap into mildly alcoholic toddy."
  },
  {
    a: "Antibiotics are effective against viral infections like common cold and influenza.",
    r: "Antibiotics target viral capsids and destroy viral double-stranded RNA genomes directly in human host cells.",
    ans: 3,
    exp: "Assertion is false, and Reason is false (option d). Antibiotics specifically target bacterial structures (peptidoglycan synthesis, 70S ribosomes, bacterial topoisomerases) and have zero therapeutic efficacy against viruses."
  }
];

const mcqData = [];
function addMcq(q, opts, ans, exp) {
  mcqData.push({ q, opts, ans, exp });
}

// 1-25: Household food products (Curd, LAB, Dough, Toddy, Cheese)
addMcq(
  "Lactic Acid Bacteria (LAB) convert milk into curd by:",
  ["Producing acids that coagulate and partially digest milk proteins", "Secreting rennin that solidifies milk lipids", "Hydrolyzing milk lactose completely into carbon dioxide and water", "Oxidizing butterfat into acetic acid"],
  0,
  "During fermentation, LAB ferment lactose to lactic acid, which lowers pH, coagulating and partially digesting milk casein proteins into curd."
);

addMcq(
  "The starter or inoculum added to warm milk to initiate curd formation contains millions of:",
  ["Lactic Acid Bacteria (LAB)", "Acetobacter aceti", "Propionibacterium sharmanii", "Saccharomyces cerevisiae"],
  0,
  "A small spoonful of fresh curd acts as an inoculum (starter) harboring millions of viable Lactic Acid Bacteria that multiply to set the curd."
);

addMcq(
  "Conversion of milk into curd by Lactic Acid Bacteria (LAB) improves its nutritional quality primarily by increasing the content of:",
  ["Vitamin $B_{12}$", "Vitamin C", "Vitamin D", "Vitamin K"],
  0,
  "According to NCERT Class 12 Biology, LAB fermentation enhances the nutritional value of curd by significantly increasing its vitamin $B_{12}$ concentration."
);

addMcq(
  "In the human stomach, Lactic Acid Bacteria (LAB) play a beneficial health role by:",
  ["Checking and inhibiting the growth of harmful disease-causing pathogens", "Increasing the secretion of pepsinogen", "Neutralizing stomach hydrochloric acid completely", "Stimulating rapid bile secretion"],
  0,
  "LAB act as beneficial probiotics in the gut, competing with pathogens for nutrients and adhesion sites, and secreting antimicrobial substances that check disease-causing microbes."
);

addMcq(
  "The puffed-up, spongy appearance of dough used for preparing dosa and idli is due to the accumulation of which gas?",
  ["Carbon dioxide ($CO_2$)", "Methane ($CH_4$)", "Oxygen ($O_2$)", "Hydrogen sulfide ($H_2S$)"],
  0,
  "Anaerobic bacterial fermentation of the dough produces carbon dioxide ($CO_2$) gas, which becomes trapped and causes the dough to puff up."
);

addMcq(
  "Which microorganism is traditionally responsible for the natural fermentation of dough for idli and dosa?",
  ["Lactic acid bacteria (such as Leuconostoc mesenteroides and Streptococcus faecalis)", "Aspergillus niger", "Trichoderma polysporum", "Methanobacterium"],
  0,
  "The fermentation of idli and dosa batter is primarily driven by lactic acid bacteria like Leuconostoc mesenteroides that naturally inhabit the grain and legume seeds."
);

addMcq(
  "Which fungus, commonly known as Baker's yeast, is used for leavening bread dough?",
  ["Saccharomyces cerevisiae", "Penicillium notatum", "Aspergillus niger", "Rhizopus stolonifer"],
  0,
  "Baker's yeast (Saccharomyces cerevisiae) ferments fermentable sugars into ethanol and $CO_2$; $CO_2$ bubbles expand the dough, making bread soft and porous."
);

addMcq(
  "The traditional drink 'Toddy', popular in certain southern parts of India, is made by fermenting:",
  ["Sap tapped from palm trees", "Juice squeezed from sugarcane", "Malted barley grain extract", "Fermented cashew apples"],
  0,
  "Toddy is a traditional beverage prepared in parts of South India by tapping and fermenting the sugary exudate (sap) of palms (like Borassus flabellifer)."
);

addMcq(
  "The large, characteristic holes seen in 'Swiss cheese' are formed due to the production of $CO_2$ by which bacterium?",
  ["Propionibacterium sharmanii", "Lactobacillus acidophilus", "Streptococcus thermophilus", "Acetobacter aceti"],
  0,
  "Propionibacterium sharmanii carries out propionic acid fermentation, producing propionic acid (which gives Swiss cheese its nutty taste) and large volumes of $CO_2$ (creating the large holes)."
);

addMcq(
  "The distinctive flavor and greenish-blue marbling of 'Roquefort cheese' is achieved by ripening it with which fungus?",
  ["Penicillium roqueforti", "Penicillium chrysogenum", "Aspergillus oryzae", "Mucor mucedo"],
  0,
  "Roquefort cheese is ripened by inoculating curds with spores of Penicillium roqueforti, which hydrolyze milk fats into short-chain fatty acids that impart its pungent aroma and sharp taste."
);

addMcq(
  "Camembert cheese is ripened on its surface by the white mold:",
  ["Penicillium camemberti", "Penicillium notatum", "Saccharomyces cerevisiae", "Aspergillus niger"],
  0,
  "Penicillium camemberti grows as a delicate white crust on the exterior of Camembert cheese, secreting proteases that soften the interior curd into a rich, creamy consistency."
);

addMcq(
  "Fermented soybean paste widely consumed in East Asia (Japan) known as Miso is prepared using which filamentous mold?",
  ["Aspergillus oryzae", "Penicillium notatum", "Clostridium butylicum", "Monascus purpureus"],
  0,
  "Miso and soy sauce are produced by the koji fermentation process, where soybeans and grains are inoculated with the mold Aspergillus oryzae."
);

addMcq(
  "Tempeh is a traditional fermented Indonesian food product made by fermenting cooked soybeans with:",
  ["Rhizopus oligosporus (or Rhizopus oryzae)", "Saccharomyces cerevisiae", "Lactobacillus lactis", "Streptococcus pneumoniae"],
  0,
  "Tempeh is produced through solid-state fungal fermentation of whole soybeans bound together into a firm cake by the dense white mycelium of Rhizopus oligosporus."
);

addMcq(
  "Which milk protein is coagulated during the lactic acid fermentation of milk to curd?",
  ["Casein", "Albumin", "Globulin", "Keratin"],
  0,
  "Casein is the primary phosphoprotein of milk; as LAB produce lactic acid and lower the pH toward its isoelectric point (pH 4.6), casein precipitates out, forming curd."
);

addMcq(
  "Yogurt is commercially produced from milk through lactic fermentation by a symbiotic starter culture containing:",
  ["Streptococcus thermophilus and Lactobacillus delbrueckii subsp. bulgaricus", "Propionibacterium sharmanii and Acetobacter aceti", "Penicillium roqueforti and Aspergillus niger", "Saccharomyces cerevisiae and Methanobacterium"],
  0,
  "Commercial yogurt manufacture employs a 1:1 symbiotic mixture of Streptococcus thermophilus (which produces formic acid to stimulate the lactobacillus) and Lactobacillus bulgaricus."
);

// 16-35: Industrial alcohol & Fermented beverages
addMcq(
  "Fermentation on an industrial scale requires the cultivation of microorganisms in specialized large containers called:",
  ["Fermentors (Bioreactors)", "Autoclaves", "Laminar airflow hoods", "Centrifuges"],
  0,
  "Industrial fermentors (bioreactors) are closed cylindrical vessels fitted with agitators, aeration spargers, and sensors to control temperature, pH, and oxygen for mass microbial production."
);

addMcq(
  "Which microorganism, commonly known as Brewer's yeast, is universally utilized for the production of alcoholic beverages?",
  ["Saccharomyces cerevisiae", "Aspergillus niger", "Acetobacter aceti", "Clostridium butylicum"],
  0,
  "Saccharomyces cerevisiae ferments fermentable sugars derived from malted cereals and fruit juices into ethyl alcohol ($C_2H_5OH$) and carbon dioxide ($CO_2$)."
);

addMcq(
  "Which of the following pairs of alcoholic beverages are produced WITHOUT distillation of the fermented broth?",
  ["Wine and Beer", "Whisky and Brandy", "Rum and Gin", "Vodka and Tequila"],
  0,
  "According to NCERT Class 12 Biology, wine and beer are produced without distillation, resulting in lower alcohol concentrations (beer: 3-6%, wine: 9-14%)."
);

addMcq(
  "Which of the following alcoholic beverages are produced BY distillation of the fermented broth?",
  ["Whisky, Brandy, and Rum", "Wine and Beer only", "Toddy and Beer only", "Apple cider and Wine only"],
  0,
  "Whisky (from malted grain mash), brandy (from distilled wine/fruit mash), and rum (from fermented molasses) are concentrated via distillation, yielding 40-50% alcohol by volume."
);

addMcq(
  "Beer is typically manufactured by the fermentation of:",
  ["Malted barley grains", "Fermented grape juice", "Sugarcane molasses", "Fermented cashew apples"],
  0,
  "Beer brewing utilizes malted barley; during malting, barley amylases convert starch into fermentable maltose, which is fermented by brewer's yeast."
);

addMcq(
  "Wine is traditionally produced by the alcoholic fermentation of:",
  ["Crushed grape juice", "Barley grain mash", "Molasses", "Rye grain flour"],
  0,
  "Wine is made by fermenting grape must; the natural sugars (glucose and fructose) in grape juice are converted to ethanol and flavor esters by Saccharomyces cerevisiae."
);

addMcq(
  "Rum is an alcoholic spirit produced by fermenting and distilling by-products of the sugarcane industry, specifically:",
  ["Sugarcane molasses or sugarcane juice", "Malted wheat grains", "Potatoes", "Corn mash"],
  0,
  "Rum is distilled from fermented sugarcane by-products such as blackstrap molasses or virgin sugarcane syrup."
);

addMcq(
  "Whisky is produced by the distillation of fermented mash prepared from:",
  ["Malted cereals such as barley, corn, rye, or wheat", "Sugarcane molasses only", "Grape juice only", "Palm sap only"],
  0,
  "Whisky is manufactured by fermenting a mash of malted cereals (barley, corn, wheat, or rye) with yeast, followed by distillation and aging in charred wooden barrels."
);

addMcq(
  "Why does the alcoholic fermentation of fruit juice or cereal mash by yeast cease naturally at approximately 12-15% ethanol concentration?",
  ["High ethanol concentrations become toxic and kill or inhibit yeast cells", "All atmospheric oxygen is completely depleted", "Yeast cells transform into filamentous bacteria", "The pH drops below zero"],
  0,
  "Ethanol is a membrane-fluidizing metabolic waste product that becomes toxic to yeast cells at around 12-15%, halting fermentation unless distilled spirits are produced."
);

addMcq(
  "Brandy is prepared by the distillation of:",
  ["Fermented grape wine or fruit mash", "Malted barley beer", "Blackstrap molasses", "Fermented milk whey"],
  0,
  "Brandy is a distilled alcoholic spirit produced by concentrating fermented wine, traditionally aged in oak casks."
);

// 36-65: Antibiotics & historical milestones
addMcq(
  "The term 'antibiotic' was coined by:",
  ["Selman Waksman", "Alexander Fleming", "Louis Pasteur", "Robert Koch"],
  0,
  "Selman Waksman (who discovered streptomycin from Streptomyces griseus) coined the term 'antibiotic' in 1942 to designate substances produced by microbes that inhibit other microbes."
);

addMcq(
  "Who is credited with the serendipitous discovery of the first commercial antibiotic, Penicillin, in 1928?",
  ["Alexander Fleming", "Howard Florey", "Ernest Chain", "Edward Jenner"],
  0,
  "Sir Alexander Fleming discovered penicillin in 1928 at St. Mary's Hospital, London, upon noticing bacterial lysis around a fungal contaminant on a Staphylococcus culture plate."
);

addMcq(
  "Alexander Fleming was conducting research on which pathogenic bacterium when he discovered penicillin?",
  ["Staphylococcus aureus (Staphylococci)", "Streptococcus pneumoniae", "Salmonella typhi", "Bacillus anthracis"],
  0,
  "Fleming was studying the phenotypic variations of Staphylococcus aureus when a mould spore accidentally contaminated one of his agar culture plates."
);

addMcq(
  "The mould that originally contaminated Fleming's culture plate and produced penicillin was identified as:",
  ["Penicillium notatum", "Penicillium roqueforti", "Aspergillus niger", "Rhizopus stolonifer"],
  0,
  "The original mould contaminant was identified as Penicillium notatum (later industrial production switched to higher-yielding Penicillium chrysogenum)."
);

addMcq(
  "Which scientists succeeded in purifying penicillin and establishing its full clinical potential as an effective life-saving antibiotic during World War II?",
  ["Ernest Chain and Howard Florey", "Selman Waksman and René Dubos", "Watson and Crick", "Beadle and Tatum"],
  0,
  "Ernest Chain and Howard Florey isolated stable penicillin salts and conducted the first human clinical trials in 1940-1941, demonstrating its efficacy on wounded Allied soldiers."
);

addMcq(
  "In which year were Alexander Fleming, Ernest Chain, and Howard Florey jointly awarded the Nobel Prize for the discovery and development of penicillin?",
  ["1945", "1935", "1955", "1965"],
  0,
  "Fleming, Chain, and Florey received the Nobel Prize in Physiology or Medicine in 1945 for their groundbreaking contributions to antibiotic therapy."
);

addMcq(
  "Which high-yielding fungal species replaced Penicillium notatum for the modern commercial submerged fermentation of penicillin?",
  ["Penicillium chrysogenum", "Penicillium roqueforti", "Penicillium camemberti", "Aspergillus oryzae"],
  0,
  "Penicillium chrysogenum (isolated from a cantaloupe in Peoria, Illinois) produced vastly superior titers of penicillin in submerged aerobic culture and replaced P. notatum."
);

addMcq(
  "Penicillin exerts its antibacterial effect by inhibiting which critical bacterial cellular process?",
  ["Transpeptidase enzymes responsible for cross-linking peptidoglycan cell walls", "Bacterial 70S ribosomal protein synthesis", "DNA topoisomerase II (gyrase)", "Bacterial RNA polymerase"],
  0,
  "Penicillin is a beta-lactam antibiotic that acts as a structural analog of D-Ala-D-Ala, irreversibly binding and inactivating transpeptidases (penicillin-binding proteins), causing cell lysis."
);

addMcq(
  "Which deadly bacterial disease, historically called 'Black Death', has been brought under control through the widespread use of antibiotics?",
  ["Plague (caused by Yersinia pestis)", "Cholera", "Smallpox", "Rabies"],
  0,
  "Plague, which devastated Europe in the 14th century, is caused by Yersinia pestis and is promptly cured today by antibiotics such as streptomycin, doxycycline, and tetracycline."
);

addMcq(
  "Whooping cough, a contagious childhood bacterial disease effectively treated and prevented with antibiotics and vaccines, is vernacularly known in India as:",
  ["Kali khansi (Pertussis)", "Gal ghotu", "Kusht rog", "Motijhara"],
  0,
  "Pertussis or whooping cough, caused by Bordetella pertussis, is commonly known in India as 'kali khansi'."
);

addMcq(
  "Diphtheria, a lethal respiratory pseudomembrane disease caused by Corynebacterium diphtheriae, is known in Hindi as:",
  ["Gal ghotu", "Kali khansi", "Kusht rog", "Kala-azar"],
  0,
  "Diphtheria is vernacularly called 'gal ghotu' due to the characteristic asphyxiating pseudomembrane that forms in the pharynx, threatening airway obstruction."
);

addMcq(
  "Leprosy, a chronic granulomatous disease caused by Mycobacterium leprae, is known in India as:",
  ["Kusht rog", "Gal ghotu", "Kali khansi", "Dama"],
  0,
  "Leprosy, which causes skin hypopigmentation, peripheral nerve thickening, and sensory loss, is traditionally referred to in Hindi as 'kusht rog'."
);

addMcq(
  "Streptomycin, an aminoglycoside antibiotic effective against Mycobacterium tuberculosis, was discovered by Selman Waksman from the soil actinomycete:",
  ["Streptomyces griseus", "Streptomyces erythraeus", "Streptococcus pyogenes", "Bacillus subtilis"],
  0,
  "Selman Waksman isolated streptomycin from the soil actinomycete Streptomyces griseus in 1943, earning the 1952 Nobel Prize for the first effective cure for tuberculosis."
);

addMcq(
  "Which broad-spectrum macrolide antibiotic is commercially isolated from the filamentous bacterium Saccharopolyspora erythraea (formerly Streptomyces erythraeus)?",
  ["Erythromycin", "Penicillin G", "Griseofulvin", "Chloramphenicol"],
  0,
  "Erythromycin is produced by the actinomycete Saccharopolyspora erythraea, acting on the 50S subunit of bacterial 70S ribosomes to inhibit protein synthesis."
);

addMcq(
  "Chloramphenicol, a potent broad-spectrum antibiotic originally isolated from Streptomyces venezuelae, inhibits:",
  ["Peptidyl transferase activity on the 50S bacterial ribosomal subunit", "Folic acid synthesis via PABA competition", "DNA gyrase supercoiling", "Cell membrane ergosterol synthesis"],
  0,
  "Chloramphenicol binds reversibly to the 50S ribosomal subunit near the peptidyl transferase center, preventing peptide bond formation during translation."
);

// 66-95: Organic acids & enzymes
addMcq(
  "Citric acid is commercially produced through industrial fermentation using which filamentous fungus?",
  ["Aspergillus niger", "Acetobacter aceti", "Clostridium butylicum", "Lactobacillus acidophilus"],
  0,
  "Aspergillus niger is the primary industrial organism for the production of citric acid, utilized extensively in food, beverages, cosmetics, and pharmaceuticals."
);

addMcq(
  "Acetic acid (the main component of vinegar) is produced commercially by which bacterium?",
  ["Acetobacter aceti", "Aspergillus niger", "Clostridium butylicum", "Lactobacillus bulgaricus"],
  0,
  "Acetobacter aceti is an obligate aerobe that oxidizes ethanol produced by yeast into acetic acid, yielding table and pickling vinegar."
);

addMcq(
  "Butyric acid is commercially synthesized through anaerobic bacterial fermentation using:",
  ["Clostridium butylicum", "Acetobacter aceti", "Aspergillus niger", "Streptococcus thermophilus"],
  0,
  "Clostridium butylicum is an obligately anaerobic, spore-forming rod used in the commercial fermentation of carbohydrates to butyric acid."
);

addMcq(
  "Lactic acid is produced industrially by the fermentation of carbohydrates using:",
  ["Lactobacillus species", "Saccharomyces cerevisiae", "Penicillium notatum", "Trichoderma polysporum"],
  0,
  "Lactobacillus species (such as L. delbrueckii) are used to ferment glucose or whey into lactic acid, used in food preservation, cosmetics, and PLA bioplastics."
);

addMcq(
  "Gluconic acid, widely utilized in pharmaceutical calcium supplements (calcium gluconate), is produced industrially by:",
  ["Aspergillus niger and Penicillium species", "Methanobacterium", "Saccharomyces cerevisiae", "Acetobacter aceti"],
  0,
  "Aspergillus niger secretes glucose oxidase, which oxidizes glucose to glucono-delta-lactone, yielding gluconic acid used in calcium gluconate therapy."
);

addMcq(
  "Which enzyme is added to laundry detergent formulations to effectively remove oily, greasy stains from soiled fabrics?",
  ["Lipase", "Amylase", "Cellulase", "Pectinase"],
  0,
  "Microbial lipases (produced by Candida, Pseudomonas, and Aspergillus) hydrolyze fats and triglycerides into soluble glycerol and free fatty acids, cleaning greasy stains."
);

addMcq(
  "Why are commercially prepared bottled fruit juices noticeably clearer and less viscous than freshly prepared homemade juices?",
  ["Bottled juices are clarified using pectinases and proteases", "Bottled juices contain no actual fruit components", "Bottled juices are boiled for several days", "Bottled juices are frozen to -50°C"],
  0,
  "Pectinases (from Aspergillus) and proteases break down suspended pectic polysaccharides and proteins that cause cloudiness, making commercial fruit juices transparent."
);

addMcq(
  "The enzyme pectinase used for fruit juice clarification is primarily obtained commercially from:",
  ["Aspergillus niger", "Escherichia coli", "Streptococcus pneumoniae", "Saccharomyces cerevisiae"],
  0,
  "Aspergillus niger produces extracellular pectinases (pectin lyase, polygalacturonase, pectin esterase) that degrade plant cell wall pectins in crushed fruit mash."
);

addMcq(
  "Which enzyme, obtained from Streptococcus bacteria and modified via genetic engineering, functions as a 'clot buster' for heart attack patients?",
  ["Streptokinase", "Amylase", "Pectinase", "DNA polymerase"],
  0,
  "Streptokinase, produced by beta-hemolytic Streptococcus and modified by recombinant DNA techniques, is a thrombolytic agent used to dissolve coronary artery clots in myocardial infarction."
);

addMcq(
  "How does streptokinase act as a thrombolytic 'clot buster' in clinical medicine?",
  ["It complexes with plasminogen to generate active plasmin, which hydrolyzes fibrin clots", "It directly digests vascular smooth muscle", "It inhibits platelet formation in the bone marrow", "It neutralizes blood calcium"],
  0,
  "Streptokinase binds stoichiometrically to plasminogen, creating an active complex that cleaves uncomplexed plasminogen into plasmin; plasmin degrades the fibrin matrix of thrombi."
);

addMcq(
  "Cellulases produced by Trichoderma species are utilized in the textile industry for:",
  ["'Bio-stoning' of denim jeans to give a worn, faded appearance and biopolishing fabric", "Hardening wool sweaters", "Dyeing silk bright red", "Dissolving synthetic polyester"],
  0,
  "Cellulases selectively hydrolyze surface microfibrils of cotton fibers, providing a smooth finish (biopolishing) and creating the washed, distressed look in denim ('bio-stoning')."
);

addMcq(
  "Amylases derived from Aspergillus and Bacillus are industrially employed in:",
  ["Converting starch into maltose and glucose syrups in the confectionary industry", "Destroying fat in milk", "Curdling soy milk into tofu", "Precipitating blood clots"],
  0,
  "Fungal and bacterial alpha-amylases and glucoamylases liquefy and saccharify corn starch into high-fructose corn syrup and fermentable sugars."
);

addMcq(
  "Which enzyme is used in the dairy industry to coagulate milk casein for manufacturing hard cheeses?",
  ["Chymosin (rennin)", "Amylase", "Cellulase", "Invertase"],
  0,
  "Chymosin (rennin), historically obtained from the fourth stomach (abomasum) of suckling calves and now produced recombinantly by yeast and Kluyveromyces, coagulates milk casein into curd."
);

addMcq(
  "Invertase, which hydrolyzes sucrose into glucose and fructose (invert sugar), is industrially extracted from:",
  ["Saccharomyces cerevisiae", "Penicillium notatum", "Clostridium tetani", "Acetobacter aceti"],
  0,
  "Saccharomyces cerevisiae produces high levels of invertase (beta-fructofuranosidase), used in confectionery to produce non-crystallizing liquid-centered chocolates."
);

addMcq(
  "Lactase (beta-galactosidase) is used commercially in the dairy industry to:",
  ["Hydrolyze lactose into glucose and galactose to produce lactose-free milk for lactose-intolerant individuals", "Convert milk into synthetic butter", "Synthesize casein proteins", "Sterilize milk without heat"],
  0,
  "Lactase breaks down lactose into easily absorbed monosaccharides (glucose and galactose), enabling lactose-intolerant individuals to consume dairy products without distress."
);

// 96-125: Bioactive molecules (Cyclosporin A, Statins) & single cell protein
addMcq(
  "Cyclosporin A, a potent immunosuppressive drug that prevents organ transplant rejection, is extracted from the fungus:",
  ["Trichoderma polysporum", "Monascus purpureus", "Aspergillus niger", "Penicillium notatum"],
  0,
  "Cyclosporin A is a bioactive cyclic non-ribosomal peptide produced by the soil fungus Trichoderma polysporum."
);

addMcq(
  "What is the clinical pharmacological application of Cyclosporin A?",
  ["Immunosuppressive agent in organ-transplant recipients", "Antibiotic against Gram-negative bacteria", "Clot buster for dissolving pulmonary emboli", "Blood cholesterol-lowering medication"],
  0,
  "Cyclosporin A selectively suppresses T-helper lymphocyte activation and IL-2 production, preventing host-versus-graft rejection in kidney, heart, and liver transplant recipients."
);

addMcq(
  "The molecular mechanism of immunosuppression by Cyclosporin A involves:",
  ["Binding to cyclophilin and inhibiting calcineurin phosphatase, blocking NFAT dephosphorylation and IL-2 gene transcription", "Directly inhibiting reverse transcriptase", "Inactivating bacterial 70S ribosomes", "Destroying B-cell immunoglobulin genes"],
  0,
  "Cyclosporin A forms a complex with cytoplasmic cyclophilin, which binds and inhibits calcineurin; this prevents dephosphorylation of NFAT, shutting down transcription of Interleukin-2."
);

addMcq(
  "Statins, widely prescribed to lower blood cholesterol levels, are produced commercially by which yeast?",
  ["Monascus purpureus", "Trichoderma polysporum", "Saccharomyces cerevisiae", "Candida albicans"],
  0,
  "Statins (such as lovastatin / mevinolin) are bioactive polyketides produced by the red yeast Monascus purpureus during fermentation."
);

addMcq(
  "Statins lower blood cholesterol levels by which enzymatic mechanism?",
  ["Competitively inhibiting HMG-CoA reductase, the rate-limiting enzyme in hepatic cholesterol biosynthesis", "Accelerating the degradation of circulating HDL particles", "Blocking the intestinal absorption of dietary water", "Stimulating the production of bile pigments"],
  0,
  "Statins possess a molecular domain structurally homologous to HMG-CoA; they competitively inhibit 3-hydroxy-3-methylglutaryl-coenzyme A (HMG-CoA) reductase, preventing mevalonate synthesis."
);

addMcq(
  "The full chemical name of the rate-limiting enzyme in cholesterol biosynthesis inhibited by statins is:",
  ["3-hydroxy-3-methylglutaryl-coenzyme A (HMG-CoA) reductase", "Phosphofructokinase-1", "Pyruvate dehydrogenase", "Succinate dehydrogenase"],
  0,
  "HMG-CoA reductase catalyzes the conversion of HMG-CoA to mevalonate, the committed, rate-limiting step of endogenous cholesterol biosynthesis in the liver."
);

addMcq(
  "In addition to competitive inhibition of HMG-CoA reductase, statins reduce serum LDL-cholesterol by:",
  ["Upregulating cell-surface LDL receptors in hepatocytes, accelerating clearance of LDL from blood", "Excreting intact red blood cells in the urine", "Precipitating cholesterol in coronary arteries", "Inactivating thyroid hormone receptors"],
  0,
  "Reduced intracellular cholesterol concentrations trigger upregulation of hepatocyte LDL receptors via SREBP-2, resulting in increased clearance of circulating atherogenic LDL from the bloodstream."
);

addMcq(
  "Single Cell Protein (SCP) refers to:",
  ["Dried biomass of microorganisms (algae, yeasts, fungi, bacteria) cultivated on a large scale as an alternate protein source for human food or animal feed", "A single isolated protein molecule purified from blood", "A hormone synthesized by human monocytes", "An antibody produced by a single hybridoma clone"],
  0,
  "Single Cell Protein (SCP) is the protein-rich microbial biomass derived from mass monocultures of organisms such as Spirulina, Methylophilus methylotrophus, or Fusarium venenatum."
);

addMcq(
  "Which blue-green alga (cyanobacterium) is widely cultivated on waste streams (such as straw, molasses, animal manure, sewage) to produce rich SCP containing protein, minerals, and vitamins?",
  ["Spirulina", "Chlorella", "Volvox", "Spirogyra"],
  0,
  "Spirulina is a photosynthetic cyanobacterium easily grown on simple waste media to produce high-protein biomass (60-70% dry weight protein) rich in minerals, essential fatty acids, and vitamins."
);

addMcq(
  "It has been calculated that 250 g of which bacterium can produce 25 tonnes of protein per day due to its exceptionally high rate of biomass production and growth?",
  ["Methylophilus methylotrophus", "Escherichia coli", "Bacillus thuringiensis", "Streptococcus pneumoniae"],
  0,
  "According to NCERT Class 12 Biology, 250 g of the bacterium Methylophilus methylotrophus can produce about 25 tonnes of protein per day owing to its fast doubling time."
);

addMcq(
  "Quorn, a commercially successful human food product sold as a meat substitute, is mycoprotein produced from the filamentous fungus:",
  ["Fusarium venenatum", "Trichoderma polysporum", "Aspergillus niger", "Rhizopus oryzae"],
  0,
  "Quorn mycoprotein is harvested from continuous glucose-fed aerobic fermentor cultures of the filamentous microfungus Fusarium venenatum."
);

addMcq(
  "Microbial production of SCP reduces environmental pollution primarily by:",
  ["Utilizing industrial waste materials, agricultural residues, and sewage as low-cost carbon and nutrient substrates", "Releasing massive amounts of CFC gases", "Destroying all natural soil vegetation", "Consuming all global freshwater supplies"],
  0,
  "Cultivating SCP organisms on agricultural run-off, potato processing wastewater, molasses, and animal manure simultaneously treats wastes and recovers high-value protein, reducing organic pollution."
);

addMcq(
  "Which vitamin was traditionally produced commercially using the filamentous fungus Ashbya gossypii?",
  ["Vitamin $B_2$ (Riboflavin)", "Vitamin A", "Vitamin C", "Vitamin D"],
  0,
  "Ashbya gossypii and Eremothecium ashbyii overproduce riboflavin (vitamin $B_2$) during the terminal stages of fermentation, providing an industrial source of this essential vitamin."
);

addMcq(
  "Reichstein's process uses Acetobacter suboxydans to oxidize D-sorbitol to L-sorbose during the commercial industrial synthesis of:",
  ["Vitamin C (Ascorbic acid)", "Vitamin $B_{12}$", "Vitamin E", "Folic acid"],
  0,
  "The microbial biotransformation of D-sorbitol to L-sorbose by Acetobacter suboxydans is a pivotal, stereo-specific step in the industrial synthesis of ascorbic acid (Vitamin C)."
);

addMcq(
  "Cobalamin (Vitamin $B_{12}$) is synthesized industrially via fermentation using which microorganisms?",
  ["Propionibacterium freudenreichii and Pseudomonas denitrificans", "Saccharomyces cerevisiae only", "Penicillium notatum only", "Aspergillus niger only"],
  0,
  "Propionibacterium freudenreichii and Pseudomonas denitrificans are high-yielding industrial bacteria utilized for the commercial production of vitamin $B_{12}$ (cyanocobalamin)."
);

// 126-154: Advanced concepts, matches, and applied microbiology
addMcq(
  "Match the microorganism in Column I with its commercial industrial product in Column II:\nColumn I:\n(A) Aspergillus niger\n(B) Acetobacter aceti\n(C) Clostridium butylicum\n(D) Lactobacillus\nColumn II:\n(1) Lactic acid\n(2) Butyric acid\n(3) Acetic acid\n(4) Citric acid",
  ["A-4, B-3, C-2, D-1", "A-3, B-4, C-1, D-2", "A-2, B-1, C-4, D-3", "A-1, B-2, C-3, D-4"],
  0,
  "Aspergillus niger produces citric acid (A-4); Acetobacter aceti produces acetic acid (B-3); Clostridium butylicum produces butyric acid (C-2); Lactobacillus produces lactic acid (D-1)."
);

addMcq(
  "Match the bioactive molecule in Column I with its source organism in Column II:\nColumn I:\n(A) Cyclosporin A\n(B) Statin\n(C) Streptokinase\n(D) Penicillin\nColumn II:\n(1) Streptococcus\n(2) Penicillium notatum\n(3) Trichoderma polysporum\n(4) Monascus purpureus",
  ["A-3, B-4, C-1, D-2", "A-4, B-3, C-2, D-1", "A-1, B-2, C-4, D-3", "A-2, B-1, C-3, D-4"],
  0,
  "Cyclosporin A is from Trichoderma polysporum (A-3); Statin is from Monascus purpureus (B-4); Streptokinase is from Streptococcus (C-1); Penicillin is from Penicillium notatum (D-2)."
);

addMcq(
  "Which property makes microbes exceptionally versatile and valuable tools in industrial biotechnology?",
  ["Fast reproduction rates, diverse metabolic pathways, and ability to grow on inexpensive nutrient substrates", "Absence of genetic material", "Inability to tolerate temperatures above 10°C", "Lack of any enzymes"],
  0,
  "Microbes have high surface-area-to-volume ratios, rapid generation times, versatile enzymatic machinery, and can convert cheap agro-industrial wastes into valuable products."
);

addMcq(
  "Probiotics are best defined as:",
  ["Live microbial food supplements that confer beneficial health effects on the host by improving intestinal microbial balance", "Chemical antibiotics injected intravenously", "Synthetic food colorants added to sweets", "Sterilizing chemicals applied to surgical wounds"],
  0,
  "Probiotics are live beneficial microorganisms (such as Lactobacillus and Bifidobacterium) which, when administered in adequate amounts, confer a health benefit on the host."
);

addMcq(
  "Prebiotics differ from probiotics in that prebiotics are:",
  ["Non-digestible dietary fibers and oligosaccharides (e.g. inulin) that selectively stimulate the growth of beneficial gut bacteria", "Live pathogenic virus cultures", "Dead fungal spores used as fertilizers", "Synthetic hormones regulating peristalsis"],
  0,
  "Prebiotics are non-digestible food ingredients (like fructooligosaccharides and inulin) that pass unabsorbed into the colon, serving as specialized fuel for beneficial probiotics."
);

addMcq(
  "Which bacterial genus is utilized in the commercial production of vinegar through the 'quick vinegar process'?",
  ["Acetobacter", "Clostridium", "Lactobacillus", "Streptococcus"],
  0,
  "The quick vinegar (generator) process trickles dilute ethanol solution down wood shavings colonized by Acetobacter aceti under continuous upward aeration."
);

addMcq(
  "Which term denotes the liquid residue left behind after milk has been curdled and strained during cheese making, often used for animal feed or protein extraction?",
  ["Whey", "Casein", "Inoculum", "Ghee"],
  0,
  "Whey is the liquid remaining after milk is curdled and strained; it contains lactose, whey proteins (lactalbumin and lactoglobulin), vitamins, and minerals."
);

addMcq(
  "The antibiotic cephalosporin, which also possesses a beta-lactam ring and inhibits bacterial cell wall synthesis, was originally isolated from the fungus:",
  ["Acremonium (formerly Cephalosporium acremonium)", "Trichoderma polysporum", "Aspergillus niger", "Monascus purpureus"],
  0,
  "Giuseppe Brotzu discovered cephalosporin from the fungus Cephalosporium acremonium isolated from seawater near a sewage outfall in Sardinia."
);

addMcq(
  "Bacitracin is a polypeptide antibiotic effective against Gram-positive bacteria that was originally isolated from which bacterium?",
  ["Bacillus subtilis (or Bacillus licheniformis)", "Streptococcus lactis", "Lactobacillus acidophilus", "Escherichia coli"],
  0,
  "Bacitracin was isolated by Margaret Tracy from Bacillus subtilis / Bacillus licheniformis, acting by inhibiting the dephosphorylation of bactoprenol pyrophosphate during cell wall assembly."
);

addMcq(
  "Polymyxins (such as Polymyxin B and Colistin) are cationic peptide antibiotics derived from Bacillus polymyxa that act by:",
  ["Disrupting the integrity of Gram-negative bacterial outer cell membranes like detergents", "Inactivating bacterial 70S ribosomes", "Inhibiting reverse transcriptase", "Preventing viral adsorption to receptors"],
  0,
  "Polymyxins bind to lipid A and lipopolysaccharides in the outer membrane of Gram-negative bacteria, disrupting membrane permeability and causing leakage of cellular contents."
);

addMcq(
  "During commercial antibiotic fermentation in deep-tank bioreactors, sterile air must be continually supplied because most antibiotic-producing actinomycetes and fungi are:",
  ["Obligate aerobes", "Obligate anaerobes", "Facultative chemolithotrophs", "Phototrophic autotrophs"],
  0,
  "Antibiotic-producing organisms (like Penicillium chrysogenum and Streptomyces species) require high levels of dissolved oxygen for oxidative phosphorylation and secondary metabolite synthesis."
);

addMcq(
  "Which component of culture media provides an inexpensive source of nitrogen, vitamins, and minerals for commercial penicillin fermentation?",
  ["Corn steep liquor", "Pure crystalline amino acids", "Distilled deionized water only", "Heavy metal salts"],
  0,
  "Corn steep liquor, a concentrated by-product of wet-corn milling, was discovered by northern regional research labs to dramatically boost penicillin titers in submerged fermentation."
);

addMcq(
  "The bioactive compound Tacrolimus (FK506), which also acts as a potent immunosuppressant via calcineurin inhibition, is isolated from:",
  ["Streptomyces tsukubaensis", "Trichoderma polysporum", "Monascus purpureus", "Saccharomyces cerevisiae"],
  0,
  "Tacrolimus (FK506) is a macrolide immunosuppressant produced by the soil bacterium Streptomyces tsukubaensis that binds FKBP-12 to inhibit calcineurin."
);

addMcq(
  "Which of the following organic acids is NOT produced by bacterial or fungal microbial fermentation?",
  ["Sulfuric acid ($H_2SO_4$)", "Citric acid", "Acetic acid", "Lactic acid"],
  0,
  "Sulfuric acid ($H_2SO_4$) is a strong inorganic mineral acid manufactured industrially by the chemical Contact Process, not by microbial fermentation."
);

addMcq(
  "Ethanol is blended into gasoline (petrol) in many countries as an eco-friendly biofuel (Gasohol). In Brazil, fuel ethanol is produced on a massive scale by fermenting:",
  ["Sugarcane juice and molasses with Saccharomyces cerevisiae", "Crude petroleum oil with Methanobacterium", "Coal dust with Acetobacter", "Cellulose acetate with Penicillium"],
  0,
  "Brazil produces billions of liters of fuel-grade ethanol annually by fermenting raw sugarcane juice and blackstrap molasses with selected high-gravity strains of Saccharomyces cerevisiae."
);

addMcq(
  "Biocatalytic production of acrylamide from acrylonitrile on an industrial scale uses the bacterial enzyme nitrile hydratase from:",
  ["Rhodococcus rhodochrous", "Escherichia coli", "Streptococcus pyogenes", "Clostridium botulinum"],
  0,
  "Rhodococcus rhodochrous nitrile hydratase enzymatically hydrolyzes acrylonitrile to acrylamide at ambient temperature and neutral pH with high yield and zero by-products."
);

addMcq(
  "Which food product relies on mixed lactic and propionic fermentation to develop eyes, sweet nutty flavor, and hard curd texture?",
  ["Swiss cheese", "Roquefort cheese", "Camembert cheese", "Cottage cheese"],
  0,
  "Swiss cheese requires lactic streptococci for curd formation followed by Propionibacterium for eye formation and propionic/acetic acid production that gives its sweet nutty flavor."
);

addMcq(
  "Bacteriocins are antimicrobial peptides produced by bacteria (e.g., nisin from Lactococcus lactis) that are used in the food industry as:",
  ["Natural food biopreservatives", "Synthetic sweetening agents", "Food coloring additives", "Artificial leavening agents"],
  0,
  "Nisin is a ribosomally synthesized peptide bacteriocin produced by Lactococcus lactis, approved as a safe, natural biopreservative against spore-forming foodborne pathogens."
);

addMcq(
  "Secondary metabolites, such as antibiotics, statins, and mycotoxins, are predominantly synthesized by microorganisms during which growth phase in batch culture?",
  ["Stationary phase (idiophase)", "Lag phase", "Exponential log phase (trophophase)", "Early death phase"],
  0,
  "During trophophase (log phase), cells synthesize primary metabolites for growth; secondary metabolites (idiolites like antibiotics) are synthesized during idiophase (stationary phase) when growth slows."
);

addMcq(
  "The phenomenon of 'antibiosis', wherein one microorganism secretes substances that antagonize or destroy another, is an ecological example of:",
  ["Amensalism ($-/0$)", "Mutualism ($+/+$)", "Commensalism ($+/0$)", "Parasitism ($+/-$)"],
  0,
  "Antibiosis is an amensal interaction where the antibiotic-producing organism is unaffected while the susceptible neighboring microorganism is harmed or killed."
);

addMcq(
  "Why is penicillin ineffective against human cells?",
  ["Human cells lack a peptidoglycan cell wall and penicillin-binding transpeptidase enzymes", "Human cells lack a nucleus", "Human cells possess 70S ribosomes", "Human cell membranes are completely impermeable to all water-soluble molecules"],
  0,
  "Penicillin targets bacterial peptidoglycan biosynthesis; since human animal cells are enclosed solely by lipid bilayer membranes and lack peptidoglycan walls, penicillin exhibits selective toxicity."
);

addMcq(
  "Which microorganism is commercially exploited for the production of dextran, a glucose polymer used as an emergency plasma volume expander?",
  ["Leuconostoc mesenteroides", "Aspergillus niger", "Trichoderma polysporum", "Acetobacter aceti"],
  0,
  "Leuconostoc mesenteroides synthesizes extracellular dextran from sucrose via the enzyme dextransucrase; clinical-grade dextran functions as an intravenous blood volume expander."
);

addMcq(
  "In the production of single cell protein using Spirulina, which property enables it to be grown outdoors in simple open ponds without significant bacterial contamination?",
  ["Its ability to thrive at high alkaline pH ($9.0 - 11.0$), which inhibits most contaminating organisms", "Its ability to grow only in concentrated sulfuric acid", "Its requirement for 100% pure alcohol", "Its production of high concentrations of DDT"],
  0,
  "Spirulina thrives in highly alkaline, high-bicarbonate waters (pH 9-11), an extreme ecological niche that naturally prevents contamination by most freshwater algae and bacteria."
);

addMcq(
  "Which of the following statements regarding microbes in industrial products is INCORRECT according to NCERT?",
  ["Beer and wine are produced by distillation of fermented broth", "Whisky, brandy, and rum are produced by distillation", "Penicillin was discovered from Penicillium notatum", "Streptokinase is used as a clot buster"],
  0,
  "Statement (a) is incorrect because beer and wine are produced without distillation. The other three statements are fully correct NCERT facts."
);

addMcq(
  "What is the role of continuous stirring in an industrial stirred-tank fermentor?",
  ["Ensures uniform mixing of nutrients and oxygen throughout the vessel without damaging microbial cells", "Grinds the microbes into fine powder", "Generates high electrical voltages", "Prevents any liquid from entering the reactor"],
  0,
  "Continuous impeller agitation in stirred bioreactors maintains homogeneity of nutrients, temperature, and dissolved oxygen while preventing cell sedimentation."
);

addMcq(
  "Which of the following organic acids was the first to be manufactured by an industrial microbial fermentation process (dating back to 1881)?",
  ["Lactic acid", "Citric acid", "Acetic acid", "Butyric acid"],
  0,
  "Lactic acid was the first organic acid produced by industrial fermentation in 1881 via carbohydrate fermentation by Lactobacillus."
);

addMcq(
  "In microbial genetics, the improvement of penicillin-producing Penicillium strains over decades from a few milligrams per liter to tens of grams per liter was achieved by:",
  ["Classical mutagenesis (UV radiation, X-rays, chemical mutagens) followed by selective screening", "Infecting fungi with bacteriophages", "Heating fungal cultures to 100°C", "Freezing cultures in liquid helium"],
  0,
  "Repeated cycles of mutation using UV irradiation and mustard gas mutagens, followed by high-throughput screening, yielded the hyper-producing industrial strains of Penicillium chrysogenum used today."
);

addMcq(
  "Which enzyme is utilized in clinical diagnostic laboratories to measure blood urea levels in kidney function tests?",
  ["Urease", "Lipase", "Pectinase", "Streptokinase"],
  0,
  "Microbial or plant urease catalyzes the hydrolysis of urea into ammonia and carbon dioxide, allowing spectrophotometric quantification of blood urea nitrogen (BUN)."
);

addMcq(
  "The discovery of penicillin revolutionized modern medicine by transforming previously fatal bacterial infections into easily curable diseases. Which statement best reflects its historical impact?",
  ["It dramatically reduced mortality from wound infections, pneumonia, and septicemia, initiating the modern 'Antibiotic Era'", "It eradicated all viral epidemics forever", "It made all surgical procedures completely unnecessary", "It eliminated the need for human immune systems"],
  0,
  "Penicillin's clinical success in treating wound infections, syphilis, gonorrhea, and streptococcal septicemia drastically reduced infectious disease mortality and launched the modern antibiotic era."
);


const extra55Mcqs = [
  [
    "Monosodium glutamate (MSG), a popular flavor enhancer, is manufactured by commercial fermentation of carbohydrates using which bacterium?",
    [
      "Corynebacterium glutamicum",
      "Aspergillus niger",
      "Acetobacter aceti",
      "Clostridium butylicum"
    ],
    0,
    "Corynebacterium glutamicum is an industrial bacterium utilized for the mass production of L-glutamic acid, which is neutralized with sodium hydroxide to yield monosodium glutamate (MSG)."
  ],
  [
    "The essential amino acid L-lysine is produced on an industrial scale through fermentation using:",
    [
      "Brevibacterium flavum or Corynebacterium glutamicum mutants",
      "Saccharomyces cerevisiae",
      "Penicillium chrysogenum",
      "Streptococcus pneumoniae"
    ],
    0,
    "Regulatory mutants of Corynebacterium glutamicum and Brevibacterium flavum lacking feedback inhibition are cultivated commercially to produce high yields of L-lysine for animal feed supplements."
  ],
  [
    "The microbial biotransformation of progesterone to $11\\alpha$-hydroxyprogesterone, a crucial step in cortisone synthesis, is catalyzed by the fungus:",
    [
      "Rhizopus nigricans (Rhizopus arrhizus)",
      "Penicillium notatum",
      "Saccharomyces cerevisiae",
      "Aspergillus niger"
    ],
    0,
    "Peterson and Murray discovered in 1952 that Rhizopus nigricans stereospecifically hydroxylates progesterone at the $11\\alpha$ position, dramatically reducing cortisone manufacturing costs from dozens of chemical steps to a single biological step."
  ],
  [
    "Glucose isomerase, an enzyme immobilized on industrial solid supports, is used commercially to convert glucose into:",
    [
      "Fructose (producing High Fructose Corn Syrup / HFCS)",
      "Galactose",
      "Maltose",
      "Cellulose"
    ],
    0,
    "Immobilized glucose isomerase (from Streptomyces or Actinoplanes) isomerizes glucose syrup into high-fructose corn syrup (HFCS-42 and HFCS-55), a primary sweetener in beverages."
  ],
  [
    "The advantage of enzyme immobilization in industrial bioreactors is that it:",
    [
      "Allows the enzyme to be retained and reused repeatedly while yielding product free of protein contamination",
      "Permanently denatures the enzyme at high temperatures",
      "Converts the enzyme into an active living microorganism",
      "Prevents any substrates from entering the catalytic site"
    ],
    0,
    "Immobilizing enzymes on solid matrices (such as alginate beads or porous glass) facilitates continuous operation, easy product separation, and repeated enzyme recycling, reducing costs."
  ],
  [
    "Tetracyclines (such as chlortetracycline) are broad-spectrum antibiotics isolated from which genus of actinomycetes?",
    [
      "Streptomyces (e.g. Streptomyces aureofaciens)",
      "Bacillus",
      "Penicillium",
      "Escherichia"
    ],
    0,
    "Chlortetracycline was discovered by Benjamin Duggar from Streptomyces aureofaciens; tetracyclines bind the 30S ribosomal subunit to block aminoacyl-tRNA binding."
  ],
  [
    "Griseofulvin, an antifungal antibiotic taken orally to treat ringworm infections of the skin, hair, and nails, is derived from:",
    [
      "Penicillium griseofulvum",
      "Trichoderma polysporum",
      "Aspergillus oryzae",
      "Streptomyces griseus"
    ],
    0,
    "Griseofulvin is produced by Penicillium griseofulvum; it binds to fungal tubulin and disrupts mitotic spindle microtubule dynamics, arresting fungal cell division."
  ],
  [
    "In beer brewing, which plant component is added to boiling wort to impart a characteristic bitter flavor, pleasant aroma, and antimicrobial preservation against Gram-positive bacteria?",
    [
      "Hops (strobiles of Humulus lupulus)",
      "Barley husks",
      "Wheat bran",
      "Rice chaff"
    ],
    0,
    "Dried female inflorescences (cones) of the hop plant (Humulus lupulus) contain alpha-acids (humulones) that isomerize during wort boiling, imparting beer's bitter taste and antimicrobial stability."
  ],
  [
    "The difference between ale and lager beers is primarily based on the yeast strain and fermentation temperature, where ales utilize:",
    [
      "Top-fermenting Saccharomyces cerevisiae at warmer temperatures ($15-24^\\circ\\text{C}$)",
      "Bottom-fermenting Saccharomyces pastorianus at cold temperatures ($7-13^\\circ\\text{C}$)",
      "Strictly anaerobic Clostridium bacteria at $50^\\circ\\text{C}$",
      "Filamentous mold Aspergillus niger"
    ],
    0,
    "Ales are brewed with top-fermenting Saccharomyces cerevisiae at warmer temperatures, while lagers use bottom-fermenting Saccharomyces pastorianus (carlsbergensis) at colder temperatures."
  ],
  [
    "Malolactic fermentation, often carried out in red wine making to soften acidity and enhance roundness, converts sharp malic acid into smoother lactic acid using:",
    [
      "Oenococcus oeni (Lactic acid bacterium)",
      "Saccharomyces cerevisiae",
      "Acetobacter aceti",
      "Propionibacterium sharmanii"
    ],
    0,
    "Oenococcus oeni decarboxylates dicarboxylic malic acid into monocarboxylic lactic acid and $CO_2$, deacidifying wine and contributing complex buttery flavors (diacetyl)."
  ],
  [
    "Sourdough bread relies on a symbiotic relationship between which lactic acid bacterium and acid-tolerant yeast?",
    [
      "Lactobacillus sanfranciscensis and Candida humilis",
      "Propionibacterium sharmanii and Penicillium notatum",
      "Streptococcus pyogenes and Saccharomyces ludwigii",
      "Escherichia coli and Aspergillus niger"
    ],
    0,
    "Traditional sourdough starters feature Lactobacillus sanfranciscensis (which produces lactic and acetic acids for sourness) and Candida humilis (which leavens dough without consuming maltose)."
  ],
  [
    "Kimchi, the traditional Korean fermented vegetable dish, is produced predominantly by the action of:",
    [
      "Lactic acid bacteria (such as Leuconostoc and Lactobacillus species)",
      "Spore-forming Bacillus anthracis",
      "Methanobacterium species",
      "Saccharomyces pastorianus"
    ],
    0,
    "Kimchi is prepared by fermenting salted Napa cabbage and radishes with a consortium of lactic acid bacteria that produce organic acids, lowering the pH to 4.2-4.5."
  ],
  [
    "Sauerkraut is produced by the spontaneous lactic fermentation of shredded cabbage initiated by:",
    [
      "Leuconostoc mesenteroides followed by Lactobacillus plantarum",
      "Clostridium butylicum",
      "Acetobacter aceti",
      "Penicillium roqueforti"
    ],
    0,
    "Leuconostoc mesenteroides initiates sauerkraut fermentation, producing lactic acid, acetic acid, and $CO_2$; acid-tolerant Lactobacillus plantarum and L. brevis complete the acidification."
  ],
  [
    "Natto, a traditional Japanese fermented soybean food noted for its sticky mucilage and high vitamin $K_2$ content, is prepared by fermenting boiled soybeans with:",
    [
      "Bacillus subtilis var. natto",
      "Aspergillus oryzae",
      "Streptococcus thermophilus",
      "Trichoderma viride"
    ],
    0,
    "Bacillus subtilis var. natto ferments steamed soybeans, producing abundant poly-gamma-glutamic acid (forming mucilage), vitamin $K_2$ (menaquinone-7), and the fibrinolytic enzyme nattokinase."
  ],
  [
    "Nattokinase, an enzyme extracted from fermented natto, has attracted medical interest because it exhibits potent:",
    [
      "Fibrinolytic activity, capable of directly breaking down blood clots",
      "Antibacterial activity against retroviruses",
      "Insulin-like hypoglycemic activity",
      "Inhibition of gastric hydrochloric acid"
    ],
    0,
    "Nattokinase is a serine protease from Bacillus subtilis var. natto that directly hydrolyzes fibrin and enhances endogenous tissue plasminogen activator (t-PA), dissolving thrombi."
  ],
  [
    "Kefir is a fermented probiotic beverage made by inoculating milk with 'kefir grains', which are composed of:",
    [
      "A symbiotic matrix of lactic acid bacteria and yeasts embedded in a polysaccharide-protein gel called kefiran",
      "Pure colonies of pathogenic Streptococcus pyogenes",
      "Dried spores of Aspergillus niger only",
      "Inorganic calcium carbonate crystals"
    ],
    0,
    "Kefir grains are stable symbiotic consortia (SCOBY) of lactic acid bacteria (Lactobacillus kefir), acetic acid bacteria, and yeasts held together in a soluble polysaccharide gel known as kefiran."
  ],
  [
    "Kombucha is a traditional fermented tea beverage produced using a SCOBY, which stands for:",
    [
      "Symbiotic Culture Of Bacteria and Yeast",
      "Secondary Cellular Organism of Bacterial Yeast",
      "Sterilized Culture Of Biocontrol Yeasts",
      "Submerged Culture Of Brewing Yeast"
    ],
    0,
    "SCOBY stands for Symbiotic Culture Of Bacteria and Yeast, typically containing Komagataeibacter (Acetobacter) xylinus and osmophilic yeasts that ferment sweetened tea into kombucha."
  ],
  [
    "In industrial microbial fermentations, downstream processing includes all of the following steps EXCEPT:",
    [
      "Inoculation of the fermentor and growth in log phase",
      "Solid-liquid separation via centrifugation or filtration",
      "Product concentration and extraction",
      "Purification and crystallization of the final product"
    ],
    0,
    "Inoculation and log-phase growth are part of upstream and fermentation processes; downstream processing refers strictly to the post-fermentation recovery, separation, and purification steps."
  ],
  [
    "The Crabtree effect in Saccharomyces cerevisiae refers to:",
    [
      "The aerobic production of ethanol from high glucose concentrations even in the presence of excess dissolved oxygen",
      "The complete cessation of yeast growth at high glucose concentrations",
      "The transformation of yeast into a filamentous mold",
      "The spontaneous production of penicillin by yeast"
    ],
    0,
    "The Crabtree effect (glucose repression) causes S. cerevisiae to ferment glucose to ethanol even under fully aerobic conditions when the glucose concentration exceeds ~0.15 g/L."
  ],
  [
    "To avoid ethanol formation and maximize cell biomass during the industrial manufacture of Baker's yeast, the fermentor is operated in:",
    [
      "Fed-batch mode with continuous, incremental sugar feeding under intense aeration",
      "Batch mode with 20% initial glucose",
      "Strictly anaerobic stationary phase",
      "Completely un-aerated submerged flasks"
    ],
    0,
    "Fed-batch fermentation keeps the residual sugar concentration below the Crabtree threshold under heavy aeration, channeling all carbon into cellular biomass rather than ethanol."
  ],
  [
    "Which organism is the source of the heat-stable Taq DNA polymerase indispensable for Polymerase Chain Reaction (PCR)?",
    [
      "Thermus aquaticus",
      "Bacillus thuringiensis",
      "Escherichia coli",
      "Saccharomyces cerevisiae"
    ],
    0,
    "Thermus aquaticus, a thermophilic bacterium isolated from hot springs in Yellowstone National Park by Thomas Brock, produces Taq polymerase which withstands denaturation at 95°C."
  ],
  [
    "Which microbial enzyme is utilized in the leather industry to de-hair hides and soften animal skins in a process called 'bating'?",
    [
      "Microbial alkaline proteases (from Bacillus licheniformis)",
      "Lipases only",
      "Cellulases only",
      "Invertases only"
    ],
    0,
    "Alkaline proteases from Bacillus licheniformis degrade non-collagenous proteins and elastin during bating, yielding pliable, high-quality leather without chemical damage."
  ],
  [
    "Rennet contains chymosin, which specifically cleaves which peptide bond in $\\kappa$-casein to destabilize milk micelles and induce curdling?",
    [
      "Phe105-Met106 peptide bond",
      "Gly1-Ala2 peptide bond",
      "Pro50-Val51 peptide bond",
      "Lys20-Arg21 peptide bond"
    ],
    0,
    "Chymosin specifically cleaves the Phe105-Met106 bond of $\\kappa$-casein, removing the hydrophilic glycopeptide hair and causing micellar aggregation into curds."
  ],
  [
    "Which fungus is commercially exploited for the synthesis of gibberellins, plant growth hormones that promote stem elongation?",
    [
      "Gibberella fujikuroi (Fusarium fujikuroi)",
      "Aspergillus niger",
      "Penicillium notatum",
      "Trichoderma polysporum"
    ],
    0,
    "Gibberella fujikuroi was identified by Kurosawa as the causative fungus of 'foolish seedling' (bakanae) disease in rice; it is cultured industrially to produce commercial gibberellic acid ($GA_3$)."
  ],
  [
    "Kojic acid, a compound used in cosmetics for skin lightening by inhibiting tyrosinase, is produced through fungal fermentation by:",
    [
      "Aspergillus oryzae or Aspergillus sojae",
      "Saccharomyces cerevisiae",
      "Clostridium butylicum",
      "Acetobacter aceti"
    ],
    0,
    "Aspergillus oryzae produces kojic acid as an aerobic secondary metabolite from carbohydrates; it chelates copper in tyrosinase, inhibiting melanin synthesis."
  ],
  [
    "Itaconic acid, an important industrial precursor for biodegradable polymers and synthetic resins, is produced via fermentation by:",
    [
      "Aspergillus terreus",
      "Monascus purpureus",
      "Rhizopus oryzae",
      "Lactobacillus delbrueckii"
    ],
    0,
    "Aspergillus terreus ferments glucose to itaconic acid (methylene succinic acid), a versatile renewable platform chemical used in coatings and polymers."
  ],
  [
    "Dextransucrase, the enzyme used to synthesize clinical dextran from sucrose, transfers glucose units from sucrose to the growing dextran polymer while releasing:",
    [
      "Free D-fructose",
      "Free D-galactose",
      "Maltose",
      "Lactose"
    ],
    0,
    "Dextransucrase (from Leuconostoc mesenteroides) cleaves sucrose, adding the glucosyl moiety to the $\\alpha(1\\rightarrow 6)$ dextran polymer and releasing free fructose into the medium."
  ],
  [
    "Biotin (Vitamin H) can be commercially produced by microbial fermentation using:",
    [
      "Kurthia buprestida or recombinant Bacillus subtilis",
      "Penicillium notatum",
      "Saccharomyces cerevisiae only",
      "Trichoderma polysporum"
    ],
    0,
    "Engineered strains of Bacillus subtilis and Kurthia species overexpress the biotin operon to accumulate commercial quantities of biotin."
  ],
  [
    "In modern biotechnology, chymosin (bovine rennin) is produced without sacrificing calves by cloning the calf pro-chymosin gene into:",
    [
      "Genetically modified Kluyveromyces lactis or Aspergillus niger (FPC - Fermentation-Produced Chymosin)",
      "Streptococcus pneumoniae",
      "Plasmodium vivax",
      "Entamoeba histolytica"
    ],
    0,
    "Fermentation-Produced Chymosin (FPC), produced by recombinant Kluyveromyces lactis or Aspergillus niger, accounts for over 80% of commercial cheese production globally."
  ],
  [
    "Which bacterium is utilized for the commercial synthesis of L-threonine and L-tryptophan for pharmaceutical and animal feed applications?",
    [
      "Escherichia coli and Corynebacterium glutamicum",
      "Clostridium botulinum",
      "Treponema pallidum",
      "Mycobacterium leprae"
    ],
    0,
    "Metabolically engineered strains of E. coli and Corynebacterium glutamicum are primary industrial workhorses for producing commercial L-threonine and aromatic amino acids."
  ],
  [
    "The commercial production of ergot alkaloids (used to treat migraine and postpartum hemorrhage) utilizes fermentation of which parasitic fungus?",
    [
      "Claviceps purpurea",
      "Penicillium roqueforti",
      "Aspergillus niger",
      "Rhizopus nigricans"
    ],
    0,
    "Claviceps purpurea produces ergot alkaloids (ergotamine and ergometrine) either by parasitic field infection of rye or submerged axenic fermentation in bioreactors."
  ],
  [
    "Polyhydroxyalkanoates (PHAs), including Poly-3-hydroxybutyrate (PHB), are biodegradable bioplastics produced inside bacterial cells by:",
    [
      "Cupriavidus necator (Ralstonia eutropha)",
      "Saccharomyces cerevisiae",
      "Penicillium notatum",
      "Acetobacter aceti"
    ],
    0,
    "Cupriavidus necator synthesizes granules of polyhydroxybutyrate (PHB) as intracellular carbon and energy reserves under nitrogen limitation, yielding biodegradable thermoplastic."
  ],
  [
    "Microbial biopulping in the paper manufacturing industry employs white-rot wood-decay fungi like Phanerochaete chrysosporium to:",
    [
      "Selectively degrade lignin while preserving cellulose fibers, reducing chemical and energy consumption",
      "Dissolve all cellulose fibers into sugar",
      "Bleach paper using chlorine dioxide exclusively",
      "Convert paper pulp into single-cell protein"
    ],
    0,
    "Phanerochaete chrysosporium secretes lignin peroxidase and manganese peroxidase that selectively break down brown lignin, significantly reducing refining energy in papermaking."
  ],
  [
    "Which bacterium is responsible for the 'ropy' or viscous spoilage of bread dough if baking hygiene is inadequate?",
    [
      "Bacillus subtilis (Bacillus mesentericus)",
      "Saccharomyces cerevisiae",
      "Aspergillus niger",
      "Lactobacillus delbrueckii"
    ],
    0,
    "Endospores of Bacillus subtilis survive baking temperatures and germinate inside moist bread loaf crumbs, producing extracellular mucilage that creates ropy bread spoilage."
  ],
  [
    "Which volatile chemical ester is produced by Saccharomyces cerevisiae during beer fermentation, imparting a characteristic banana-like fruity aroma to German Weizen wheat beers?",
    [
      "Isoamyl acetate",
      "Ethyl butyrate",
      "Diacetyl",
      "Dimethyl sulfide"
    ],
    0,
    "Isoamyl acetate is an ester synthesized by yeast alcohol acetyltransferase from isoamyl alcohol and acetyl-CoA, conferring a distinct banana flavor to wheat beers."
  ],
  [
    "Diacetyl, an unwanted off-flavor in beer with a buttery aroma, is produced as a by-product of which amino acid biosynthetic pathway in yeast?",
    [
      "Valine biosynthetic pathway",
      "Tryptophan biosynthetic pathway",
      "Histidine biosynthetic pathway",
      "Proline biosynthetic pathway"
    ],
    0,
    "Yeast excretes $\\alpha$-acetolactate during valine synthesis; non-enzymatic oxidative decarboxylation in beer converts it to buttery diacetyl, which yeast must re-absorb and reduce during lagering."
  ],
  [
    "The process of malting in brewing involves:",
    [
      "Steeping barley in water, allowing controlled germination to synthesize amylolytic enzymes, followed by kilning to arrest growth",
      "Boiling grain with sulfuric acid to destroy all proteins",
      "Freezing grain in liquid nitrogen to crack seed coats",
      "Soaking grains in pure ethanol to kill bacteria"
    ],
    0,
    "Malting activates embryo synthesis of gibberellins that trigger aleurone cells to synthesize $\\alpha$- and $\\beta$-amylases, preparing barley starch for enzymatic saccharification during mashing."
  ],
  [
    "The term 'mashing' in brewery operations designates:",
    [
      "Mixing ground malted barley (grist) with warm water at controlled temperatures to allow enzymes to hydrolyze starch into fermentable sugars",
      "Distilling beer at high pressure",
      "Adding hops to finished beer bottles",
      "Filtering out all yeast cells using activated charcoal"
    ],
    0,
    "During mashing, malt amylases operate at 62-68°C to break down long-chain starches into fermentable maltose, maltotriose, and unfermentable dextrins, yielding sweet wort."
  ],
  [
    "Grist is the technical brewing term for:",
    [
      "Malted barley grains that have been coarsely crushed or milled",
      "Spent brewer's yeast cakes",
      "The hops pellets added for bitterness",
      "The clear liquid collected after boiling"
    ],
    0,
    "Milled malted cereal grains with crushed starchy endosperms and intact protective husks are known as grist."
  ],
  [
    "Wort is the technical brewing term for:",
    [
      "The sugary aqueous liquid extracted from malted grains during mashing prior to fermentation",
      "The distilled spirit containing 95% ethanol",
      "The spent yeast sediment at the bottom of a fermentor",
      "The solid cake of coagulated proteins"
    ],
    0,
    "Wort is the nutrient-rich, unfermented sugar solution filtered from the spent grains in the lauter tun and transferred to the brew kettle for hop boiling."
  ],
  [
    "Which fungal genus is known as the 'koji mold' and is indispensable for producing sake (Japanese rice wine), soy sauce, and miso?",
    [
      "Aspergillus (Aspergillus oryzae)",
      "Penicillium",
      "Rhizopus",
      "Neurospora"
    ],
    0,
    "Aspergillus oryzae (koji mold) secretes abundant amylases and proteases that saccharify rice starches into fermentable sugars for yeast in sake brewing."
  ],
  [
    "In sake brewing, 'multiple parallel fermentation' occurs because:",
    [
      "Saccharification of rice starch by Aspergillus oryzae and alcoholic fermentation by Saccharomyces cerevisiae proceed simultaneously in the same tank",
      "Barley is malted and boiled in separate kettles",
      "Two different distillation columns are run in parallel",
      "Bacteria and viruses divide at identical rates"
    ],
    0,
    "Unlike beer where saccharification precedes fermentation, sake brewing features simultaneous conversion: koji mold hydrolyzes rice starch while sake yeast ferments the resulting sugars concurrently."
  ],
  [
    "Tequila is an authentic Mexican distilled spirit obtained by fermenting and distilling the baked piña (hearts) of which plant?",
    [
      "Blue agave (Agave tequilana Weber var. azul)",
      "Sugarcane stalks",
      "Barley grains",
      "Blueberry fruits"
    ],
    0,
    "Tequila is produced exclusively from the fermented juice of baked blue agave hearts (Agave tequilana), containing fructans hydrolyzed into fermentable fructose."
  ],
  [
    "Gin is a distilled grain spirit whose predominant and legally required characteristic flavor is derived from:",
    [
      "Juniper berries (Juniperus communis)",
      "Vanilla beans",
      "Cinnamon bark",
      "Coffee beans"
    ],
    0,
    "Gin is neutral grain alcohol re-distilled with botanical flavorings, among which juniper berries are the mandatory principal flavoring agent."
  ],
  [
    "Which of the following describes the biological function of the fungal product Griseofulvin?",
    [
      "Inhibits fungal cell division by binding tubulin and disrupting mitotic spindle formation",
      "Cleaves bacterial peptidoglycan walls like lysozyme",
      "Blocks reverse transcriptase in HIV",
      "Inhibits human platelet aggregation"
    ],
    0,
    "Griseofulvin is a fungistatic antibiotic that specifically disrupts fungal mitotic spindles, stopping cell division in dermatophytic dermatophytes."
  ],
  [
    "Which group of antibiotics contains a macrocyclic lactone ring attached to one or more deoxy sugars, exemplified by Erythromycin and Azithromycin?",
    [
      "Macrolides",
      "Aminoglycosides",
      "Beta-lactams",
      "Fluoroquinolones"
    ],
    0,
    "Macrolides are characterized by a 14-, 15-, or 16-membered macrocyclic lactone ring linked to amino sugars; they bind 23S rRNA in the bacterial 50S ribosomal subunit."
  ],
  [
    "Aminoglycosides such as streptomycin, gentamicin, and tobramycin exert their bactericidal action by:",
    [
      "Binding irreversibly to the bacterial 30S ribosomal subunit, causing mRNA misreading and inhibiting protein synthesis",
      "Inhibiting viral DNA integrase",
      "Neutralizing stomach acidity",
      "Disrupting ergosterol synthesis in fungal membranes"
    ],
    0,
    "Aminoglycosides bind the A-site of bacterial 16S rRNA on the 30S ribosomal subunit, inducing codon misreading, mistranslated membrane proteins, and cell death."
  ],
  [
    "The beta-lactam family of antibiotics, which inhibit bacterial transpeptidases, includes which classes of drugs?",
    [
      "Penicillins, Cephalosporins, Carbapenems, and Monobactams",
      "Tetracyclines and Macrolides only",
      "Sulfonamides and Trimethoprim only",
      "Aminoglycosides and Fluoroquinolones only"
    ],
    0,
    "All beta-lactam antibiotics share a 4-membered beta-lactam ring and inhibit transpeptidases (PBPs); this superfamily includes penicillins, cephalosporins, carbapenems, and monobactams."
  ],
  [
    "Clavulanic acid, produced by Streptomyces clavuligerus, is combined with amoxicillin (in Augmentin) because it:",
    [
      "Irreversibly inhibits bacterial beta-lactamase enzymes, preventing the enzymatic destruction of amoxicillin",
      "Directly binds human opioid receptors",
      "Kills intestinal amoebic parasites",
      "Prevents allergic reactions to penicillin"
    ],
    0,
    "Clavulanic acid is a suicide beta-lactamase inhibitor with negligible intrinsic antibacterial activity; it protects amoxicillin from hydrolysis by beta-lactamases."
  ],
  [
    "Vancomycin, a glycopeptide antibiotic reserved for serious Methicillin-Resistant Staphylococcus aureus (MRSA) infections, inhibits cell wall synthesis by:",
    [
      "Binding directly to the terminal D-Ala-D-Ala dipeptide of peptidoglycan precursors, blocking transpeptidation and transglycosylation",
      "Inactivating 70S ribosomal peptidyl transferase",
      "Inhibiting topoisomerase IV",
      "Depolarizing the fungal plasma membrane"
    ],
    0,
    "Vancomycin forms hydrogen bonds with the D-Ala-D-Ala terminus of cell wall peptidoglycan pentapeptide precursors, sterically hindering both transglycosylases and transpeptidases."
  ],
  [
    "Which organism is employed for the industrial production of Vitamin $B_2$ (Riboflavin) through high-yield aerobic fermentation?",
    [
      "Ashbya gossypii (or Candida famata)",
      "Acetobacter aceti",
      "Propionibacterium sharmanii",
      "Lactobacillus bulgaricus"
    ],
    0,
    "Ashbya gossypii, a filamentous hemiascomycete fungus, naturally hyper-accumulates riboflavin (yellow crystals) in culture broths, supplying commercial vitamin $B_2$."
  ],
  [
    "In beer and winemaking, 'pitching' refers to:",
    [
      "The step of inoculating the prepared wort or fruit must with active yeast culture to start fermentation",
      "Discarding spoiled fermented broth",
      "Boiling hops with sugar",
      "Adding calcium carbonate to raise the pH"
    ],
    0,
    "'Pitching' is the established brewing term for adding a calculated concentration of viable yeast slurry into cooled, aerated wort to initiate fermentation."
  ],
  [
    "Which of the following pairs is INCORRECTLY matched regarding industrial products and their source microorganisms?",
    [
      "Streptokinase — Streptococcus",
      "Cyclosporin A — Trichoderma polysporum",
      "Statin — Monascus purpureus",
      "Citric acid — Clostridium butylicum"
    ],
    3,
    "Citric acid is produced by the fungus Aspergillus niger; Clostridium butylicum produces butyric acid, not citric acid. Therefore, option (d) is incorrectly matched."
  ],
  [
    "Industrial production of vinegar involves a two-step microbiological conversion:",
    [
      "First, yeast converts sugars into ethanol; second, Acetobacter oxidizes ethanol into acetic acid",
      "First, bacteria make methane; second, fungi make ethanol",
      "First, algae make starch; second, viruses make acetic acid",
      "First, protozoa make lactic acid; second, yeast makes butyric acid"
    ],
    0,
    "Vinegar production begins with primary alcoholic fermentation of sugars to ethanol by Saccharomyces cerevisiae, followed by secondary aerobic oxidation of ethanol to acetic acid by Acetobacter aceti."
  ],
  [
    "The discovery and industrial mass manufacture of which group of microbial bioactive metabolites is regarded as having saved more human lives than any other medical breakthrough in human history?",
    [
      "Antibiotics",
      "Synthetic dyes",
      "Artificial sweeteners",
      "Monoclonal antivenoms"
    ],
    0,
    "The development of antibiotics (starting with penicillin and streptomycin) transformed lethal infections into curable illnesses, adding decades to human life expectancy and saving hundreds of millions of lives."
  ]
];
extra55Mcqs.forEach(m => addMcq(m[0], m[1], m[2], m[3]));

console.log(`AR questions: ${arData.length}, MCQ questions: ${mcqData.length}`);

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

console.log(`Part 7 (${SUBTOPIC}) total questions: ${allQuestions.length} (AR: ${arQuestions.length}, MCQ: ${mcqQuestions.length})`);

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

console.log(`Part 7 KaTeX errors: ${katexErrors}`);

if (katexErrors === 0 && allQuestions.length === 180) {
  const outPath = path.join(__dirname, 'data_zoology_biohuman_part7.js');
  const fileContent = `// Auto-generated data for Zoology Biology and Human Welfare Part 7: ${SUBTOPIC}\nmodule.exports = ${JSON.stringify(allQuestions, null, 2)};\n`;
  fs.writeFileSync(outPath, fileContent, 'utf8');
  console.log(`Successfully wrote ${outPath}`);
} else {
  console.error("Validation failed! Not writing output.");
  process.exit(1);
}
