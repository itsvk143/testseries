const fs = require('fs');
const path = require('path');
const katex = require('katex');

const SUBTOPIC = "Microbes in sewage treatment, biogas production, and biocontrol";
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
    a: "Primary treatment of municipal sewage is essentially a physical process of particle removal.",
    r: "Primary treatment removes floating debris by sequential filtration and grit (soil and small pebbles) by sedimentation.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason is the correct explanation. Primary sewage treatment relies on physical mechanisms—sequential filtration through screens to catch floating waste, followed by settling in grit chambers and primary settling tanks."
  },
  {
    a: "The supernatant liquid from the primary settling tank is known as the primary effluent.",
    r: "All solids that settle down in the primary settling tank constitute the primary sludge.",
    ans: 1,
    exp: "Both Assertion and Reason are true, but Reason defines primary sludge rather than explaining why the supernatant liquid is termed primary effluent (which is passed on to secondary biological treatment)."
  },
  {
    a: "During secondary sewage treatment, primary effluent is continuously agitated mechanically and air is pumped into large aeration tanks.",
    r: "Pumping air and vigorous mechanical agitation promote the rapid proliferation of aerobic heterotrophic microbes into 'flocs'.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason correctly explains that continuous aeration supplies dissolved oxygen required for aerobic bacteria and fungi to grow vigorously into mesh-like flocs."
  },
  {
    a: "Formation of 'flocs' in the aeration tank during secondary sewage treatment drastically reduces the Biochemical Oxygen Demand (BOD) of the wastewater.",
    r: "Aerobic microbes within the flocs consume a major portion of the organic matter dissolved in the sewage as nutrient sources for growth.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason is the correct explanation. Heterotrophic microorganisms in flocs metabolize biodegradable organic carbon into $CO_2$ and biomass, lowering the BOD."
  },
  {
    a: "Biochemical Oxygen Demand (BOD) serves as an indirect measure of the organic polluting load present in wastewater.",
    r: "Higher BOD values indicate greater quantities of biodegradable organic matter and higher oxygen depletion potential in the receiving water body.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason correctly explains that BOD measures the milligrams of oxygen required by bacteria to oxidize organic waste in one liter of water; higher BOD equals more organic pollution."
  },
  {
    a: "A small fraction of the settled activated sludge is recycled back into the aeration tank.",
    r: "The recycled activated sludge serves as an inoculum (starter culture) of acclimatized aerobic microbes to maintain high microbial biomass in the aeration tank.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason is the correct explanation. Returning a portion of activated sludge (Return Activated Sludge / RAS) inoculates fresh incoming primary effluent with active floc-forming microorganisms."
  },
  {
    a: "In the anaerobic sludge digester, the major portion of activated sludge is degraded by anaerobic microorganisms.",
    r: "Anaerobic bacteria digest the bacterial and fungal biomass in the sludge, releasing a combustible mixture of gases known as biogas.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason correctly explains that in the absence of oxygen, anaerobic digesters break down organic sludge into methane, $CO_2$, and $H_2S$ (biogas)."
  },
  {
    a: "The biogas produced in anaerobic sludge digesters is inflammable and can be utilized as a source of energy.",
    r: "Biogas is predominantly composed of methane ($CH_4$), an energetic hydrocarbon gas that combusts cleanly with oxygen.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason explains why biogas is inflammable; methane constitutes 50-70% of biogas and releases substantial heat on combustion."
  },
  {
    a: "The Ganga Action Plan and Yamuna Action Plan were initiated by the Ministry of Environment and Forests, Government of India.",
    r: "These national river conservation plans aimed to construct numerous sewage treatment plants to ensure only treated effluent is discharged into sacred rivers.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason is the correct explanation. Rapid urbanization led to raw sewage flowing into rivers; the Ganga and Yamuna Action Plans funded STPs to intercept, divert, and treat municipal sewage."
  },
  {
    a: "Methanogens such as Methanobacterium are obligate anaerobes that flourish in the rumen of herbivorous cattle.",
    r: "In the cattle rumen, methanogens digest cellulose and convert it into volatile fatty acids, playing an indispensable role in ruminant nutrition.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason correctly explains that ruminants lack endogenous cellulase enzymes and rely on symbiotic rumen microbes (including methanogens) to ferment dietary cellulose."
  },
  {
    a: "Cattle dung (gobar) is an ideal substrate for the generation of biogas in rural biogas plants.",
    r: "Cattle dung contains abundant unfermented cellulosic matter along with high populations of symbiotic methanogenic bacteria excreted from the rumen.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason is the correct explanation. Dung carries both the cellulosic feedstock and the inoculum of active Methanobacterium required for anaerobic digestion."
  },
  {
    a: "A floating gas holder (cover) placed over the slurry in a typical biogas plant continuously rises as gas is produced.",
    r: "Biogas generated by anaerobic microbial digestion accumulates beneath the floating cover, creating upward gas pressure.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason correctly explains the mechanical principle of floating-drum biogas digesters developed by KVIC."
  },
  {
    a: "The spent slurry discharged from the outlet of a biogas plant makes an excellent organic fertilizer for agricultural crops.",
    r: "Anaerobic digestion degrades odor-causing compounds while retaining and concentrating valuable plant nutrients like nitrogen and phosphorus in the spent slurry.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason is the correct explanation. Digested sludge slurry is rich in mineralized ammonium, phosphate, and humus, enhancing soil fertility without burning plant roots."
  },
  {
    a: "The Khadi and Village Industries Commission (KVIC) and Indian Agricultural Research Institute (IARI) pioneered the development of biogas technology in India.",
    r: "These organizations developed standardized, low-cost, village-scale anaerobic digester models ('Gobar Gas Plants') for rural electrification and clean cooking fuel.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason explains the seminal collaborative role played by IARI and KVIC in spreading biogas technology throughout rural India."
  },
  {
    a: "Chemical insecticides and pesticides cause widespread environmental degradation and water pollution.",
    r: "Synthetic pesticides are non-biodegradable, kill non-target beneficial predators, and undergo biomagnification in terrestrial and aquatic food chains.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason explains why heavy reliance on synthetic organochlorine and organophosphate pesticides is ecologically destructive."
  },
  {
    a: "Biocontrol is an ecological approach to pest management that seeks to keep pests at manageable levels rather than attempting their total eradication.",
    r: "In natural ecosystems, complete eradication of an organism disrupts food webs, depriving beneficial predators and parasitoids of their vital food source.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason correctly explains the ecological philosophy of biocontrol: maintaining dynamic biological checks and balances rather than destructive eradication."
  },
  {
    a: "Ladybird beetles and dragonflies are useful biocontrol agents in agriculture.",
    r: "Ladybird beetles feed voraciously on crop-damaging aphids, while dragonflies are natural aerial predators of mosquitoes.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason correctly explains the biological prey targets of ladybird beetles (aphids) and dragonflies (mosquitoes)."
  },
  {
    a: "Bacillus thuringiensis (Bt) spores are applied onto brassica crops and fruit trees to control butterfly caterpillars.",
    r: "When caterpillar larvae ingest Bt spores, the crystalline endotoxin is solubilized and activated in the alkaline pH of the insect midgut, creating lethal epithelial pores.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason is the correct explanation. In the alkaline insect gut, dormant Cry protoxins are cleaved into active endotoxins that bind epithelial receptors, causing gut lysis and larval death."
  },
  {
    a: "Bacillus thuringiensis endotoxin does not harm humans, birds, or non-target insects.",
    r: "The Cry protein exists as an inactive, harmless protoxin that requires a specific alkaline gut pH ($>9.0$) and specific cadherin-like membrane receptors absent in vertebrates.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason explains why Bt toxin is non-toxic to humans and other mammals (which have acidic stomachs and lack specific midgut receptors)."
  },
  {
    a: "The free-living soil fungus Trichoderma is an effective biocontrol agent against several soil-borne plant pathogenic fungi.",
    r: "Trichoderma colonizes the rhizosphere where it produces antifungal chitinases and glucanases, and competes aggressively for root space and nutrients.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason explains that Trichoderma species act via mycoparasitism, enzyme secretion, and rhizosphere competition to protect plant roots against pathogens like Rhizoctonia and Pythium."
  },
  {
    a: "Baculoviruses belonging to the genus Nucleopolyhedrovirus (NPV) are excellent candidates for species-specific, narrow-spectrum insecticidal applications.",
    r: "Baculoviruses have no negative impacts on non-target arthropods, plants, birds, fish, or mammals.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason correctly explains why NPV baculoviruses are ideal for ecologically sensitive Integrated Pest Management (IPM) programs."
  },
  {
    a: "Biofertilizers are living organisms that enrich the nutrient quality and microbial biodiversity of agricultural soils.",
    r: "Biofertilizers fix atmospheric nitrogen, solubilize bound phosphorus, and synthesize growth-promoting substances for host crops.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason describes the specific biological mechanisms by which biofertilizers (bacteria, mycorrhizae, cyanobacteria) enhance soil fertility."
  },
  {
    a: "Rhizobium bacteria establish an endosymbiotic nitrogen-fixing association in the root nodules of leguminous plants.",
    r: "Within the anaerobic microenvironment of root nodules protected by leghemoglobin, the enzyme nitrogenase reduces atmospheric $N_2$ to ammonia ($NH_3$).",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason explains that Rhizobium's oxygen-sensitive nitrogenase fixes $N_2$ into plant-available ammonia under the protection of leghemoglobin."
  },
  {
    a: "Azotobacter and Azospirillum are examples of free-living soil bacteria that enrich soil nitrogen without forming root nodules.",
    r: "These non-symbiotic diazotrophic bacteria fix atmospheric nitrogen in the soil and rhizosphere, contributing available nitrogen to non-leguminous crops like cereals.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason explains that Azotobacter (aerobic) and Azospirillum (microaerophilic) are non-nodulating, free-living/associative nitrogen fixers."
  },
  {
    a: "Mycorrhizal associations formed by the fungal genus Glomus benefit host plants significantly.",
    r: "The fungal hyphal network extends far into the soil to absorb immobile phosphorus ions and transfer them to the plant root system.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason correctly explains that Glomus mycorrhizae vastly increase the surface area for soil phosphorus uptake, imparting drought and pathogen resistance."
  },
  {
    a: "Cyanobacteria such as Anabaena and Nostoc serve as important biofertilizers in waterlogged paddy (rice) fields.",
    r: "Cyanobacteria perform oxygenic photosynthesis and possess specialized thick-walled cells called heterocysts dedicated to fixing atmospheric nitrogen.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason explains that cyanobacteria fix atmospheric nitrogen in anaerobic heterocysts while adding organic matter to flooded rice soils."
  }
];

const mcqData = [];
function addMcq(q, opts, ans, exp) {
  mcqData.push({ q, opts, ans, exp });
}

// 1-35: Sewage Treatment Plants (Primary vs Secondary, BOD, Flocs, Sludge)
addMcq(
  "Municipal wastewater containing human excreta, wash water, and organic refuse is collectively referred to as:",
  ["Sewage", "Primary sludge", "Biogas", "Grit"],
  0,
  "Sewage is municipal wastewater generated in cities and towns, containing dissolved organic matter, domestic refuse, human excrement, and pathogenic microorganisms."
);

addMcq(
  "The primary stage of municipal sewage treatment is fundamentally a:",
  ["Physical process involving sequential filtration and sedimentation", "Biological process using aerobic flocs", "Chemical chlorination process", "Anaerobic methanogenesis process"],
  0,
  "Primary treatment physically removes large and small suspended particles from sewage via coarse bar screens (sequential filtration) and gravity sedimentation tanks."
);

addMcq(
  "In primary sewage treatment, floating plastic bags, leaves, and large debris are initially removed by:",
  ["Sequential filtration through mesh screens", "Sedimentation in grit chambers", "Digestion in anaerobic digesters", "Chemical flocculation with alum"],
  0,
  "Sequential filtration through wire mesh screens intercepts and physically separates coarse floating debris before sewage flows to subsequent tanks."
);

addMcq(
  "In a sewage treatment plant, grit (dense soil particles and small pebbles) is removed by:",
  ["Gravity sedimentation in grit chambers", "Aerobic flocs in aeration tanks", "Floating gas covers", "Reverse osmosis membranes"],
  0,
  "Grit chambers slow sewage flow just enough to allow heavy, dense inorganic particles like sand, soil, and gravel to settle out by gravity."
);

addMcq(
  "The solid material that settles down at the bottom of the primary settling tank during primary treatment is called:",
  ["Primary sludge", "Activated sludge", "Flocs", "Scum"],
  0,
  "The settled particulate solids collected from the bottom of the primary settling tank constitute the primary sludge, which is sent directly to anaerobic digesters."
);

addMcq(
  "The supernatant liquid that remains above the settled sludge in the primary settling tank is designated as:",
  ["Primary effluent", "Activated sludge", "Secondary sludge", "Gobar gas"],
  0,
  "The clarified supernatant liquid decanted from the primary settling tank is the primary effluent, which enters the secondary (biological) treatment stage."
);

addMcq(
  "Secondary sewage treatment is also known as biological treatment because:",
  ["It utilizes living aerobic and anaerobic microorganisms to degrade organic pollutants", "It relies entirely on heavy physical grinding", "It requires the addition of live fish to the tank", "It produces synthetic biological plastics"],
  0,
  "Secondary treatment is biological because it harnesses communities of living heterotrophic microbes (bacteria, fungi, protozoa) to consume dissolved organic matter."
);

addMcq(
  "In the aeration tank of a secondary treatment plant, what role is played by continuous mechanical agitation and air pumping?",
  ["Supplying dissolved oxygen and keeping aerobic microbes in intimate contact with organic matter", "Crushing inorganic pebbles into dust", "Sterilizing the wastewater with heat", "Preventing all bacteria from dividing"],
  0,
  "Aeration provides oxygen and hydrodynamic turbulence, ensuring that aerobic microbes remain suspended in contact with organic substrates to form active flocs."
);

addMcq(
  "What are 'flocs' in the context of biological wastewater treatment?",
  ["Masses of aerobic bacteria held together by fungal filaments into mesh-like networks", "Colonies of photosynthetic green algae floating on the surface", "Layers of grease and oil floating on sewage", "Deposits of calcium carbonate crystals"],
  0,
  "According to NCERT, flocs are macroscopic aggregates of aerobic bacteria entangled within fungal hyphal filaments, creating dense mesh-like biological filters."
);

addMcq(
  "What does BOD stand for in environmental biology and sewage treatment?",
  ["Biochemical Oxygen Demand", "Biological Oxidation Deficiency", "Bacterial Organism Density", "Biomass Oxygen Dissipation"],
  0,
  "BOD stands for Biochemical Oxygen Demand, a standard analytical metric for quantifying water pollution."
);

addMcq(
  "Biochemical Oxygen Demand (BOD) is defined as:",
  ["The amount of oxygen that would be consumed if all the organic matter in one liter of water were oxidized by bacteria", "The total dissolved oxygen present in one liter of mountain spring water", "The amount of carbon dioxide released by plants at night", "The volume of methane gas generated in one cubic meter of dung"],
  0,
  "BOD is the mass of dissolved oxygen (in mg/L) required by aerobic microorganisms to biochemically oxidize the organic pollutants in a unit volume of water sample."
);

addMcq(
  "Which relationship correctly connects BOD and the polluting potential of a wastewater sample?",
  ["Greater BOD indicates higher organic polluting potential", "Greater BOD indicates perfectly pure drinking water", "Lower BOD indicates higher organic pollution", "BOD has zero relationship with water quality"],
  0,
  "A higher BOD value signifies that more organic pollutants are present, which will deplete dissolved oxygen in aquatic habitats; hence higher BOD equals greater polluting load."
);

addMcq(
  "When the primary effluent is vigorously aerated in the secondary treatment tank, the BOD of the effluent:",
  ["Decreases significantly as organic matter is digested by microbes", "Increases exponentially due to toxin synthesis", "Remains entirely unchanged", "Drops to absolute zero within 1 second"],
  0,
  "As aerobic microbes in the flocs consume and oxidize the dissolved organic matter into $CO_2$ and water, the BOD of the wastewater drops drastically."
);

addMcq(
  "After secondary aeration reduces the BOD, the effluent is transferred to a settling tank where the bacterial flocs settle down as:",
  ["Activated sludge", "Primary sludge", "Grit", "Inoculum scum"],
  0,
  "In the secondary clarifier (settling tank), bacterial flocs settle out by gravity, forming a rich biological sediment known as activated sludge."
);

addMcq(
  "A small portion of the activated sludge is pumped back into the aeration tank to serve as:",
  ["An inoculum (starter culture) to maintain the population of active floc-forming microbes", "Food for pathogenic viruses", "A chemical dye to measure water clarity", "A weighting agent to sink floating oil"],
  0,
  "Returning a portion of activated sludge (Return Activated Sludge / RAS) inoculates fresh primary effluent entering the aeration tank with an active aerobic microbial community."
);

addMcq(
  "The remaining major portion of activated sludge is pumped from the settling tank into large enclosed tanks called:",
  ["Anaerobic sludge digesters", "Secondary aeration tanks", "Grit settling chambers", "Bar screen basins"],
  0,
  "The bulk of the waste activated sludge is transferred to anaerobic sludge digesters, where anaerobic bacteria digest the organic matter and microbial cells."
);

addMcq(
  "In an anaerobic sludge digester, bacteria digest organic matter in the absence of oxygen and produce a gas mixture composed predominantly of:",
  ["Methane ($CH_4$), Carbon dioxide ($CO_2$), and Hydrogen sulfide ($H_2S$)", "Oxygen ($O_2$), Nitrogen ($N_2$), and Argon", "Carbon monoxide ($CO$) and Chlorine ($Cl_2$)", "Pure helium and ozone"],
  0,
  "Anaerobic digestion of organic sludge yields biogas, composed primarily of methane (50-70%), carbon dioxide (30-40%), and trace hydrogen sulfide ($H_2S$) and hydrogen."
);

addMcq(
  "Why can the gas produced in anaerobic sludge digesters be utilized as an energy source (biogas)?",
  ["It contains high concentrations of methane, which is inflammable and burns with a hot flame", "It absorbs solar radiation directly", "It freezes water into ice", "It neutralizes heavy metals"],
  0,
  "Methane ($CH_4$) is a high-energy combustible hydrocarbon fuel gas, making biogas a clean, renewable energy source for heating and electricity generation."
);

addMcq(
  "What is done with the treated effluent from the secondary settling tank before releasing it into natural rivers and streams?",
  ["It can be disinfected (with chlorine, ozone, or UV light) and discharged safely into natural water bodies", "It is boiled at 500°C for 2 days", "It is frozen into ice blocks and buried in deep mines", "It is mixed with concentrated sulfuric acid"],
  0,
  "Once organic matter and BOD are reduced, the clear effluent is often disinfected (chlorinated) to eliminate residual pathogens and discharged into receiving rivers."
);

addMcq(
  "The Ganga Action Plan and Yamuna Action Plan were launched in India by which government ministry?",
  ["Ministry of Environment and Forests", "Ministry of Agriculture and Farmers Welfare", "Ministry of Chemicals and Fertilizers", "Ministry of Home Affairs"],
  0,
  "The Ministry of Environment and Forests initiated the Ganga Action Plan (1985) and Yamuna Action Plan to build sewage treatment infrastructure and intercept urban waste."
);

addMcq(
  "What was the principal operational objective of the Ganga Action Plan?",
  ["To construct sewage treatment plants along the river to treat municipal sewage before discharge", "To divert all river water into industrial factories", "To eliminate all fish species from the river", "To construct concrete roofs covering the entire river"],
  0,
  "The Ganga Action Plan aimed to reduce pollution by installing interceptor sewers and building modern STPs to treat raw domestic sewage before it enters the river."
);

addMcq(
  "Why is untreated municipal sewage dangerous when discharged directly into natural freshwater rivers?",
  ["It depletes dissolved oxygen causing mass fish mortality, spreads water-borne epidemics, and introduces toxic pollutants", "It causes rivers to dry up instantly", "It converts fresh water into table salt", "It permanently turns river water into solid asphalt"],
  0,
  "Microbial decomposition of raw sewage exhausts dissolved oxygen, suffocating aquatic life, while fecal pathogens cause severe water-borne diseases (cholera, typhoid, hepatitis)."
);

addMcq(
  "In a standard BOD assay, the incubation of water samples is conducted for how many days and at what temperature?",
  ["5 days at $20^\\circ\\text{C}$ ($\\text{BOD}_5$)", "1 hour at $100^\\circ\\text{C}$", "10 days at $4^\\circ\\text{C}$", "24 hours at $50^\\circ\\text{C}$"],
  0,
  "Standard laboratory BOD testing measures dissolved oxygen consumption over a standardized 5-day incubation period at 20°C in darkness, denoted as $\\text{BOD}_5$."
);

addMcq(
  "A water sample with a 5-day BOD of $400\\text{ mg/L}$ compared to another with $40\\text{ mg/L}$ indicates that:",
  ["The sample with $400\\text{ mg/L}$ has ten times higher organic pollution and consumes much more oxygen", "The sample with $400\\text{ mg/L}$ is safe drinking water", "The sample with $40\\text{ mg/L}$ has more organic matter", "Both samples are identical in purity"],
  0,
  "BOD is directly proportional to organic concentration; $400\\text{ mg/L}$ indicates heavily polluted municipal or industrial waste requiring extensive biological oxidation."
);

addMcq(
  "Which organisms in biological sewage treatment are primarily responsible for clarifying the liquid by grazing on dispersed bacteria?",
  ["Protozoa (such as ciliated protozoans like Vorticella and Paramecium)", "Filamentous blue-green algae", "Methanogenic archaebacteria", "Large parasitic nematodes"],
  0,
  "Ciliated and stalked protozoans in the aeration tank graze on freely suspended, non-flocculating bacteria, clarifying the effluent and improving settling performance."
);

addMcq(
  "The phenomenon where excessive organic sewage discharge into a lake leads to dense algal blooms, oxygen depletion, and aquatic death is termed:",
  ["Cultural (accelerated) eutrophication", "Biological magnification", "Ozone depletion", "Thermal inversion"],
  0,
  "Nutrient-rich sewage discharges introduce nitrogen and phosphorus that trigger explosive algal blooms; their decay depletes dissolved oxygen, choking aquatic fauna."
);

addMcq(
  "Which step in sewage treatment relies strictly on anaerobic microbial digestion?",
  ["Anaerobic sludge digestion", "Primary sequential screening", "Aeration tank agitation", "Grit sedimentation"],
  0,
  "Sludge digestion in sealed digesters operates under obligate anaerobic conditions, wherein methanogens and acidogens convert waste biomass into biogas."
);

addMcq(
  "What happens to dissolved oxygen (DO) levels in a river immediately downstream from a point source of untreated sewage discharge?",
  ["DO crashes sharply to near-zero levels due to high microbial oxygen consumption", "DO rises dramatically to 100% saturation", "DO remains completely constant", "DO converts into gaseous hydrogen"],
  0,
  "Immediate downstream discharge of high-BOD sewage triggers an intense microbial oxidative bloom that rapidly consumes dissolved oxygen, creating an 'oxygen sag curve'."
);

addMcq(
  "Fish mortality in rivers polluted with domestic sewage occurs primarily because of:",
  ["Severe hypoxia resulting from depletion of dissolved oxygen by decomposer microbes", "Direct toxicity of pure water molecules", "Rapid hypothermia caused by cold sewage", "Excess light penetration into the water"],
  0,
  "Aerobic decomposers consume the dissolved oxygen in sewage-polluted waters; when DO falls below 2-4 mg/L, fish and aquatic fauna asphyxiate and die."
);

addMcq(
  "Which of the following parameters is measured in milligrams of $O_2$ per liter of water to quantify pollution?",
  ["BOD (Biochemical Oxygen Demand)", "pH", "Specific gravity", "Salinity in parts per thousand"],
  0,
  "BOD is expressed in units of milligrams of oxygen consumed per liter of water sample ($\\text{mg } O_2/\\text{L}$ or ppm)."
);

// 31-65: Biogas Production (Methanogens, Rumen, Digester construction)
addMcq(
  "Biogas produced through the anaerobic digestion of agricultural and animal wastes is composed primarily of:",
  ["Methane ($CH_4$)", "Carbon monoxide ($CO$)", "Oxygen ($O_2$)", "Sulfur dioxide ($SO_2$)"],
  0,
  "Methane ($CH_4$) is the major flammable constituent of biogas, making up 50% to 70% of the total gas volume, with $CO_2$ comprising most of the remainder."
);

addMcq(
  "The group of obligately anaerobic bacteria that produce methane gas during the digestion of cellulosic biomass are called:",
  ["Methanogens", "Cyanobacteria", "Nitrifying bacteria", "Lactic acid bacteria"],
  0,
  "Methanogens are specialized anaerobic Archaea (e.g. Methanobacterium, Methanococcus) that synthesize methane as a terminal product of anaerobic respiration."
);

addMcq(
  "Which of the following is a classic example of a methanogenic bacterium described in NCERT Class 12?",
  ["Methanobacterium", "Acetobacter aceti", "Lactobacillus acidophilus", "Streptococcus pneumoniae"],
  0,
  "Methanobacterium is cited in NCERT as a representative methanogen commonly found in anaerobic sludge and the rumen of cattle."
);

addMcq(
  "In which specialized chamber of the stomach of ruminant cattle are methanogens naturally abundant?",
  ["Rumen", "Reticulum", "Omasum", "Abomasum"],
  0,
  "The rumen is the largest compartment of the ruminant stomach, functioning as an anaerobic fermentation vat where symbiotic bacteria and protozoa ferment dietary cellulose."
);

addMcq(
  "Methanogens play a vital symbiotic role in cattle nutrition by digesting:",
  ["Cellulose", "Starch into fructose directly", "Blood albumin", "Cholesterol"],
  0,
  "Mammals lack endogenous cellulase enzymes; rumen methanogens and anaerobic microbes ferment cellulose into volatile fatty acids (acetate, propionate, butyrate), nourishing the host."
);

addMcq(
  "Why is cattle dung (gobar) an ideal substrate for producing biogas in rural household digesters?",
  ["It contains rich unfermented cellulosic plant residues and high populations of live methanogenic bacteria", "It contains high concentrations of pure liquid gasoline", "It is completely sterile and devoid of any bacteria", "It produces oxygen when mixed with water"],
  0,
  "Cattle feces (dung) provides both the carbon-rich cellulosic feedstock and the natural inoculum of symbiotic methanogens required for anaerobic biogas generation."
);

addMcq(
  "A typical Indian rural biogas plant consists of a concrete tank constructed in the ground with a depth of approximately:",
  ["10 to 15 feet", "1 to 2 feet", "50 to 100 feet", "500 feet"],
  0,
  "According to NCERT Class 12 Biology, a standard rural biogas plant has a cylindrical concrete digester pit 10 to 15 feet deep."
);

addMcq(
  "What is fed into the inlet pipe of a rural biogas plant?",
  ["A slurry of cattle dung and water mixed in equal proportions", "Pure chemical insecticides", "Dry plastic bottles and tin cans", "Concentrated hydrochloric acid"],
  0,
  "Cattle dung is mixed with an equal volume of water in an inlet mixing tank to prepare a smooth slurry, which flows down an inlet pipe into the digester."
);

addMcq(
  "In a floating-drum biogas digester, what causes the steel or fiberglass cover placed over the slurry to rise?",
  ["Accumulation of biogas produced by microbial fermentation beneath the cover", "Expansion of water upon heating by the sun", "Growth of large fungal mushrooms lifting the lid", "Magnetic repulsion from the soil"],
  0,
  "As methanogens ferment the dung slurry, biogas accumulates under the floating dome, creating upward pneumatic pressure that causes the holder to rise."
);

addMcq(
  "How is biogas transported from the biogas plant to household kitchens for cooking and lighting?",
  ["Via a gas outlet pipe fitted on the top of the gas holder connected to pipeline networks", "By condensing it into solid blocks transported by carts", "By freezing it into liquid in metal buckets", "By carrying open buckets of dung slurry"],
  0,
  "Biogas flows under its own generation pressure through a control valve and pipeline connected to the top of the gas collector directly into kitchen gas stoves."
);

addMcq(
  "What happens to the spent, digested slurry that exits the biogas plant via the overflow outlet pipe?",
  ["It is collected, dried, and used as a premium organic biofertilizer for agricultural fields", "It is burned with kerosene as hazardous waste", "It is pumped into deep underground radioactive vaults", "It is thrown away because it contains zero nutrients"],
  0,
  "The spent digested slurry is completely deodorized, pathogens are eliminated, and it is rich in mineralized nitrogen, phosphorus, and potassium, serving as excellent organic manure."
);

addMcq(
  "Biogas technology was developed and promoted throughout rural India primarily through the collaborative efforts of which two institutions?",
  ["IARI (Indian Agricultural Research Institute) and KVIC (Khadi and Village Industries Commission)", "ISRO and DRDO", "AIIMS and ICMR", "BARC and CSIR"],
  0,
  "IARI and KVIC were the pioneering Indian public institutions that designed, standardized, and popularized decentralized family-scale 'Gobar Gas Plants'."
);

addMcq(
  "What are the two primary household uses of biogas in rural Indian communities?",
  ["Cooking and lighting", "Powering jet aircraft engines", "Fueling steam locomotive trains", "Refrigerating nuclear reactors"],
  0,
  "In rural communities, biogas provides a smokeless, clean fuel for domestic cooking and powers mantle lamps for household lighting."
);

addMcq(
  "Anaerobic digestion of organic biomass during biogas generation proceeds through three distinct stages in sequence:",
  ["Hydrolysis $\\rightarrow$ Acidogenesis / Acetogenesis $\\rightarrow$ Methanogenesis", "Methanogenesis $\\rightarrow$ Hydrolysis $\\rightarrow$ Aeration", "Oxidation $\\rightarrow$ Chlorination $\\rightarrow$ Filtration", "Fermentation $\\rightarrow$ Distillation $\\rightarrow$ Crystallization"],
  0,
  "First, hydrolytic bacteria break complex polymers into monomers; second, acidogens/acetogens convert monomers to volatile fatty acids and acetic acid; third, methanogens convert acetate, $CO_2$, and $H_2$ into methane."
);

addMcq(
  "In methanogenesis, methanogenic Archaea convert which primary chemical substrates into methane?",
  ["Acetic acid ($CH_3COOH$), or Carbon dioxide ($CO_2$) and Hydrogen ($H_2$)", "Sucrose and starch directly", "Lipids and cholesterol directly", "Sulfuric acid and nitric acid"],
  0,
  "Methanogens utilize limited simple substrates: acetotrophic methanogens cleave acetate ($CH_3COOH \\rightarrow CH_4 + CO_2$), while hydrogenotrophic methanogens reduce $CO_2$ with $H_2$ ($CO_2 + 4H_2 \\rightarrow CH_4 + 2H_2O$)."
);

addMcq(
  "Which environmental condition inside a biogas digester is strictly essential for the survival and metabolic activity of methanogens?",
  ["Strictly anaerobic conditions (complete absence of molecular oxygen)", "Continuous saturation with 100% pure oxygen", "Constant illumination with ultraviolet light", "Extremely low temperatures below $-20^\\circ\\text{C}$"],
  0,
  "Methanogens are strict, obligate anaerobes whose metabolic enzyme complexes (like hydrogenase and methyl-coenzyme M reductase) are permanently inactivated by exposure to oxygen."
);

addMcq(
  "Why is biogas considered an environmentally friendly, sustainable energy source compared to burning dried dung cakes or firewood?",
  ["It burns cleanly without producing smoke, reduces indoor air pollution, saves trees from deforestation, and preserves dung nutrients as fertilizer", "It permanently cools the global climate", "It creates artificial clouds that bring rain", "It eliminates the need for human nutrition"],
  0,
  "Burning dung cakes produces harmful smoke, causes respiratory disease, and destroys valuable fertilizer; biogas produces clean, smokeless heat while conserving nutrients in the spent slurry."
);

addMcq(
  "What is the average calorific value of biogas compared to other domestic fuels?",
  ["Approximately $20 - 26\\text{ MJ/m}^3$ (clean, medium-high fuel value)", "Zero fuel value", "Greater than rocket propellant fuels", "Equivalent to dry sand"],
  0,
  "Biogas containing 60% methane delivers a calorific energy value of roughly 20-26 MJ per cubic meter, sufficient for efficient cooking and lighting."
);

addMcq(
  "Besides cattle dung, which other biodegradable organic wastes can be digested in a biogas plant?",
  ["Agricultural crop residues, poultry droppings, pig manure, and human night soil", "Discarded glass bottles and ceramic plates", "Polyethylene plastic sheets", "Aluminum foil and copper wires"],
  0,
  "Any non-toxic biodegradable biomass rich in cellulose and organic carbon—such as crop wastes, vegetable scraps, pig manure, and night soil—can be co-digested to produce biogas."
);

addMcq(
  "Which gas in raw biogas causes a mild foul odor and must be scrubbed out to prevent corrosion of metal burner nozzles?",
  ["Hydrogen sulfide ($H_2S$)", "Pure oxygen", "Pure nitrogen", "Helium"],
  0,
  "Trace amounts of hydrogen sulfide ($H_2S$, 0.1-1%) formed from sulfur-containing proteins impart an odor and form corrosive sulfurous acid upon moisture contact; it is removed using iron sponge traps."
);

// 66-105: Biocontrol Agents (Ladybird, Dragonfly, Bt, Trichoderma, Baculoviruses)
addMcq(
  "The method of controlling plant diseases and agricultural pests using natural biological predators and parasites is termed:",
  ["Biocontrol (Biological control)", "Chemical fumigation", "Monoculture farming", "Radiation mutation breeding"],
  0,
  "Biocontrol is the deliberate utilization of living natural enemies (predators, parasitoids, or pathogens) to suppress pest insect and weed populations below economic injury thresholds."
);

addMcq(
  "The famous beetle with distinctive red and black markings used as a natural biocontrol predator is the:",
  ["Ladybird beetle", "Colorado potato beetle", "Boll weevil", "Rhinoceros beetle"],
  0,
  "The ladybird beetle (Coccinellidae) is a familiar red-and-black predatory beetle whose adults and larvae feed voraciously on crop-sucking aphids."
);

addMcq(
  "Ladybird beetles are utilized by organic farmers to effectively control populations of:",
  ["Aphids", "Mosquitoes", "Termites", "Locusts"],
  0,
  "Ladybirds are voracious natural predators of soft-bodied plant-sucking aphids, controlling aphid infestations on vegetables and fruit crops without chemical sprays."
);

addMcq(
  "Dragonflies are predatory insects useful in controlling which agricultural and public health pest?",
  ["Mosquitoes", "Aphids", "Stored grain weevils", "Butterfly caterpillars"],
  0,
  "Dragonflies (order Odonata) are agile aerial predators that catch and consume adult mosquitoes on the wing, while dragonfly nymphs devour mosquito larvae in water."
);

addMcq(
  "Bacillus thuringiensis (Bt) is a soil bacterium utilized worldwide as an effective microbial biocontrol agent against:",
  ["Insect pests, particularly caterpillar larvae of butterflies, moths, and beetles", "Plant pathogenic soil fungi", "Root-knot parasitic nematodes", "Viral mosaic diseases"],
  0,
  "Bacillus thuringiensis produces crystalline parasporal inclusion proteins (Cry toxins) that are insecticidal to lepidopteran, coleopteran, and dipteran insect larvae."
);

addMcq(
  "How are Bacillus thuringiensis (Bt) spores commercially distributed and applied to crops by farmers?",
  ["Sold as dry sachets of dried spores that are mixed with water and sprayed onto vulnerable crop foliage", "Injected directly into tree xylem using hypodermic syringes", "Buried in sealed lead boxes 10 meters under the ground", "Burned as smoke flares over orchards"],
  0,
  "Formulated Bt preparations (such as Dipel or Thuricide) are sold as dry wettable powders of dormant bacterial spores, mixed with water and sprayed on crop canopies."
);

addMcq(
  "What physiological event occurs inside a caterpillar larva when it ingests crop foliage coated with Bacillus thuringiensis spores?",
  ["The alkaline pH of the insect midgut dissolves the protein crystal, activating the toxin which binds midgut epithelial receptors, causing pore formation, cell lysis, and death", "The spores instantly explode physically in the mouth", "The toxin converts into gastric acid, freezing the heart", "The caterpillar turns into an adult moth within 5 seconds"],
  0,
  "In the alkaline midgut (pH > 9.0) of insect larvae, the protoxin crystal dissolves and is cleaved by gut proteases into an active endotoxin; this binds cadherin receptors, creating transmembrane pores that lyse cells."
);

addMcq(
  "Why does the insecticidal Cry toxin of Bacillus thuringiensis NOT kill the bacterium that produces it?",
  ["The toxin is synthesized in an inactive, non-toxic crystalline protoxin state that requires specific insect gut conditions for solubilization and activation", "The bacterium has human-like bones that resist toxins", "The bacterium is an obligate eukaryote", "The toxin is actively exported into space"],
  0,
  "Inside the bacterium, the Cry protein is stored as an inert, insoluble crystalline protoxin; activation requires the specific alkaline pH and proteolytic enzymes of the susceptible insect gut."
);

addMcq(
  "Through genetic engineering, the insecticidal toxin genes from Bacillus thuringiensis have been cloned and introduced directly into crop plants, producing pest-resistant varieties such as:",
  ["Bt cotton, Bt corn, and Bt brinjal", "Golden rice enriched with beta-carotene", "Flavr Savr tomato with delayed ripening", "Herbicide-tolerant Roundup Ready soybean"],
  0,
  "Bt toxin genes (e.g. cry1Ac, cry2Ab, cry1Ab) have been engineered into crop plant genomes to create transgenic pest-resistant crops like Bt cotton, Bt maize, and Bt eggplant."
);

addMcq(
  "Which species of free-living soil fungus is very common in root ecosystems and serves as a potent biocontrol agent against plant pathogenic fungi?",
  ["Trichoderma species (e.g. Trichoderma harzianum)", "Penicillium notatum", "Aspergillus niger", "Saccharomyces cerevisiae"],
  0,
  "Trichoderma is a ubiquitous, free-living rhizosphere fungus that protects plant root systems by outcompeting, parasitizing, and enzymatically degrading soil-borne fungal pathogens."
);

addMcq(
  "By which biological mechanism does Trichoderma suppress fungal root pathogens like Rhizoctonia, Pythium, and Fusarium?",
  ["Mycoparasitism, secretion of cell-wall degrading enzymes (chitinases and $\\beta$-glucanases), and competitive exclusion", "Direct ingestion by phagocytosis like an amoeba", "Producing high voltages of electric shock in the soil", "Depleting all atmospheric nitrogen from the rhizosphere"],
  0,
  "Trichoderma coils around pathogenic hyphae (mycoparasitism), secretes chitinases and glucanases that lyse the pathogen cell walls, and competes aggressively for root exudates."
);

addMcq(
  "Baculoviruses used as biological control agents belong predominantly to which genus?",
  ["Nucleopolyhedrovirus (NPV)", "Retrovirus", "Rhabdovirus", "Coronavirus"],
  0,
  "The vast majority of baculoviruses employed as commercial bio-insecticides belong to the genus Nucleopolyhedrovirus (NPV), characterized by rod-shaped virions occluded in polyhedral protein bodies."
);

addMcq(
  "Which feature of Baculoviruses (Nucleopolyhedrovirus) makes them exceptionally desirable in ecological pest control?",
  ["They possess species-specific, narrow-spectrum insecticidal action with zero negative impacts on plants, mammals, birds, fish, or non-target insects", "They kill all living organisms within a 10-mile radius", "They persist forever in the air as toxic radioactive clouds", "They transform into flowering trees after killing insects"],
  0,
  "NPVs have an extremely restricted host range (often infecting only a single insect genus or species); they are harmless to non-target arthropods, pollinators, fish, birds, and mammals."
);

addMcq(
  "In Integrated Pest Management (IPM) programs, why are Baculoviruses especially recommended in ecologically sensitive agricultural areas?",
  ["Because they conserve beneficial predatory insects and pollinators while selectively targeting the pest species", "Because they eliminate all plant life in the habitat", "Because they replace the need for irrigation water", "Because they produce synthetic chemical organophosphates"],
  0,
  "Integrated Pest Management aims to preserve beneficial parasitoids, predators, and pollinating honeybees; narrow-spectrum NPVs kill only target pests, preserving ecological balance."
);

addMcq(
  "The philosophical principle distinguishing biological control from conventional chemical pest management is that biocontrol:",
  ["Maintains pests at manageable, non-injurious population densities rather than attempting complete extermination", "Seeks total, permanent eradication of all insects from planet Earth", "Uses high-dose neurotoxins to poison the entire ecosystem", "Requires sterilizing all topsoil with fire"],
  0,
  "Biocontrol recognizes that complete eradication of pests is biologically counterproductive because it starves natural predators; it keeps pest numbers below the economic threshold."
);

// 106-154: Biofertilizers (Rhizobium, Azotobacter, Mycorrhiza, Cyanobacteria)
addMcq(
  "Biofertilizers are defined as:",
  ["Living microorganisms that enrich the nutrient quality and fertility of soil", "Synthetic chemical fertilizers containing high nitrogen, phosphorus, and potassium", "Heavy metals mixed with clay to harden soil", "Crushed petroleum by-products sprayed on roots"],
  0,
  "Biofertilizers are formulations of beneficial living microorganisms (bacteria, fungi, cyanobacteria) that mobilize soil nutrients, fix atmospheric nitrogen, or solubilize minerals."
);

addMcq(
  "The three main biological groups of organisms that serve as biofertilizers are:",
  ["Bacteria, Fungi, and Cyanobacteria", "Viruses, Prions, and Viroids", "Protozoa, Helminthes, and Nematodes", "Insects, Earthworms, and Snails"],
  0,
  "The three primary taxonomic groups providing biofertilizer functions are nitrogen-fixing bacteria, symbiotic mycorrhizal fungi, and nitrogen-fixing cyanobacteria (blue-green algae)."
);

addMcq(
  "Which symbiotic bacterium fixes atmospheric nitrogen into organic forms within the root nodules of leguminous crops (pulses, beans, peas)?",
  ["Rhizobium", "Azotobacter", "Methanobacterium", "Bacillus thuringiensis"],
  0,
  "Rhizobium infects legume root hairs to form root nodules, where it fixes atmospheric nitrogen into organic ammonia, fertilizing pulses and enriching soil fertility."
);

addMcq(
  "Inside the root nodules of leguminous plants, which oxygen-binding pinkish pigment protects the enzyme nitrogenase from oxygen inactivation?",
  ["Leghemoglobin", "Myoglobin", "Hemocyanin", "Chlorophyll a"],
  0,
  "Nitrogenase is irreversibly poisoned by free molecular oxygen; leghemoglobin acts as an oxygen scavenger, maintaining a microaerophilic environment for nitrogen fixation."
);

addMcq(
  "Which of the following pairs represents free-living (non-symbiotic) nitrogen-fixing bacteria found in soil?",
  ["Azotobacter and Azospirillum", "Rhizobium and Frankia", "Methanobacterium and Clostridium", "Streptococcus and Staphylococcus"],
  0,
  "Azotobacter (aerobic) and Azospirillum (microaerophilic associative) are free-living diazotrophic bacteria that fix nitrogen in soil without forming symbiotic nodules."
);

addMcq(
  "Azotobacter inoculants are commonly applied to seeds or soil of non-leguminous cereal crops (wheat, rice, maize) to:",
  ["Increase available nitrogen in the rhizosphere and stimulate plant growth via auxins", "Prevent roots from absorbing water", "Stop flowering and seed development", "Induce leaf senescence"],
  0,
  "Azotobacter fixes atmospheric nitrogen in the rhizosphere of cereals and secretes plant growth-promoting hormones (auxins, gibberellins) that enhance root development."
);

addMcq(
  "Mycorrhiza is a symbiotic mutualistic association established between:",
  ["A fungus and the roots of higher plants", "An alga and a fungus in a lichen", "A bacterium and a virus", "A protozoan and a legume leaf"],
  0,
  "Mycorrhiza ('fungus-root') is a mutualistic symbiosis between beneficial soil fungi and host plant root systems, enhancing nutrient and water acquisition."
);

addMcq(
  "Many fungal members forming endomycorrhizae (Arbuscular Mycorrhizal Fungi / AMF) belong to the genus:",
  ["Glomus", "Agaricus", "Rhizopus", "Penicillium"],
  0,
  "Glomus is the predominant endomycorrhizal fungal genus; its extensive hyphal network colonizes root cortical cells to exchange mineral nutrients with the plant."
);

addMcq(
  "Which crucial mineral nutrient is absorbed from the soil and transferred to the host plant by the fungal symbiont in a mycorrhizal association?",
  ["Phosphorus", "Carbon", "Calcium carbonate only", "Lead"],
  0,
  "Insoluble phosphate ions bind tightly to soil minerals; mycorrhizal hyphae secrete organic acids and phosphatases to solubilize and absorb phosphorus, transferring it to the plant."
);

addMcq(
  "In addition to mineral nutrient absorption, plants possessing mycorrhizal root associations exhibit:",
  ["Resistance to root-borne pathogens, increased tolerance to salinity and drought, and higher overall vigor", "Complete inability to perform photosynthesis", "Sudden dropping of all green leaves", "Stunted root systems with zero water absorption"],
  0,
  "Mycorrhizal plants gain enhanced resistance against soil root pathogens (Fusarium, Phytophthora), superior drought and salinity tolerance, and improved transplant survival."
);

addMcq(
  "Which group of photosynthetic prokaryotes are widely distributed in aquatic and terrestrial environments and function as important biofertilizers?",
  ["Cyanobacteria (Blue-Green Algae)", "Diatoms", "Brown algae", "Red algae"],
  0,
  "Cyanobacteria (blue-green algae) are autotrophic, photosynthetic prokaryotes widely exploited as nitrogen-fixing biofertilizers in agriculture."
);

addMcq(
  "Which cyanobacterial species are well-known for their nitrogen-fixing capabilities in soil and water?",
  ["Anabaena, Nostoc, and Oscillatoria", "Spirogyra and Ulothrix", "Chlamydomonas and Volvox", "Gelidium and Gracilaria"],
  0,
  "Anabaena, Nostoc, and Oscillatoria are filamentous cyanobacteria capable of fixing atmospheric nitrogen in paddy fields and moist soils."
);

addMcq(
  "In nitrogen-fixing cyanobacteria such as Anabaena and Nostoc, atmospheric nitrogen fixation takes place specifically within specialized cells called:",
  ["Heterocysts", "Akinetes", "Hormogonia", "Trichomes"],
  0,
  "Heterocysts are specialized, pale, thick-walled cells that lack photosystem II (preventing $O_2$ generation) and maintain an anaerobic microenvironment for nitrogenase activity."
);

addMcq(
  "In which major cereal crop field are cyanobacteria (blue-green algae) extensively utilized as a biological fertilizer to replenish nitrogen and organic matter?",
  ["Paddy (rice) fields", "Wheat fields", "Barley fields", "Mustard fields"],
  0,
  "Flooded, warm, sunlit conditions in paddy (rice) fields provide the perfect habitat for cyanobacteria (like Anabaena and Nostoc) to proliferate and supply fixed nitrogen."
);

addMcq(
  "The water fern Azolla is widely grown in rice paddies as a dual crop biofertilizer because it harbors which symbiotic nitrogen-fixing cyanobacterium in its leaf cavities?",
  ["Anabaena azollae", "Nostoc muscorum", "Oscillatoria limosa", "Spirulina platensis"],
  0,
  "The aquatic fern Azolla hosts the endophytic cyanobacterium Anabaena azollae within its dorsal leaf lobes, fixing up to 30-50 kg N/ha in rice paddy agro-ecosystems."
);

addMcq(
  "In addition to fixing nitrogen, blue-green algae (cyanobacteria) enhance soil physical structure by:",
  ["Adding substantial quantities of organic matter (humus) upon senescence and decomposition", "Releasing radioactive minerals", "Extracting all water from deep aquifers", "Hardening topsoil into granite rock"],
  0,
  "Cyanobacterial biomass decomposes into rich organic humus that improves soil crumb structure, cation exchange capacity, water retention, and microbial biodiversity."
);

addMcq(
  "Why is the widespread replacement of chemical fertilizers by biofertilizers strongly advocated in organic farming?",
  ["Biofertilizers are renewable, non-polluting, cost-effective, maintain long-term soil health, and prevent chemical groundwater contamination", "Biofertilizers are poisonous to all plants", "Biofertilizers eliminate the need for sunlight", "Biofertilizers convert all weeds into cash crops"],
  0,
  "Chemical fertilizers cause soil acidification, eutrophication of waterways, and nitrate pollution; biofertilizers represent sustainable, eco-friendly, and cost-effective alternatives."
);

addMcq(
  "Which non-leguminous woody plant forms nitrogen-fixing root nodules in symbiosis with the actinomycete Frankia?",
  ["Casuarina and Alnus (Alder)", "Pisum sativum (Pea)", "Cicer arietinum (Gram)", "Glycine max (Soybean)"],
  0,
  "Frankia is a nitrogen-fixing filamentous actinomycete that induces root nodules in non-leguminous actinorhizal angiosperms such as Casuarina, Alnus, and Myrica."
);

addMcq(
  "Ectomycorrhizae, which form a dense hyphal mantle ('Hartig net') on the root surface without intracellular cortical penetration, are characteristically found in:",
  ["Forest gymnosperms and trees such as Pinus (Pine) and Quercus (Oak)", "Grassland annual herbs", "Aquatic submerged weeds", "Bryophyte mosses"],
  0,
  "Ectomycorrhizae form a fungal sheath and intercellular Hartig net around root cells of forest trees like pines, birches, and oaks, essential for their nutrient uptake and seedling survival."
);

addMcq(
  "Which of the following organisms does NOT fix atmospheric nitrogen?",
  ["Saccharomyces cerevisiae", "Rhizobium", "Azotobacter", "Anabaena"],
  0,
  "Saccharomyces cerevisiae is a eukaryotic baker's/brewer's yeast that lacks the nitrogenase gene cluster and cannot fix atmospheric nitrogen; the others are all diazotrophs."
);

addMcq(
  "The association of mycorrhiza with plant roots is an obligate ecological mutualism for which conifer whose seeds fail to germinate and establish seedlings without it?",
  ["Pinus", "Cycas", "Ginkgo", "Ephedra"],
  0,
  "Pinus seeds cannot germinate and establish functional root systems in natural forest soils without the symbiotic infection of mycorrhizal fungi."
);

addMcq(
  "Which bacterium is commonly used as a commercial bio-insecticide to protect crops against lepidopteran pests, available under commercial trade names like Thuricide and Dipel?",
  ["Bacillus thuringiensis", "Bacillus subtilis", "Bacillus anthracis", "Bacillus megaterium"],
  0,
  "Bacillus thuringiensis formulations (Dipel, Thuricide) are registered commercial bio-insecticides targeting caterpillars on vegetables, fruits, and forest trees."
);

addMcq(
  "Integrated Pest Management (IPM) is best described as a comprehensive strategy that:",
  ["Combines biological control, habitat manipulation, cultural practices, and selective pest-specific chemicals to keep pest populations below damaging levels", "Relying 100% on spraying organochlorine pesticides every morning", "Destroying all agricultural crops with defoliants", "Importing alien pests to displace native pests"],
  0,
  "IPM is an ecologically grounded pest management approach integrating biological, cultural, physical, and judicious chemical tactics to minimize health and environmental risks."
);

addMcq(
  "Which of the following is an example of an associative symbiotic nitrogen-fixing bacterium found in the rhizosphere of tropical grasses and cereals?",
  ["Azospirillum", "Rhizobium", "Frankia", "Methanobacterium"],
  0,
  "Azospirillum colonizes the root surface and intercellular spaces of cereal and grass roots, fixing nitrogen associatively without forming distinct nodular structures."
);

addMcq(
  "Match the biocontrol agent in Column I with its target pest in Column II:\nColumn I:\n(A) Ladybird beetle\n(B) Dragonfly\n(C) Bacillus thuringiensis\n(D) Nucleopolyhedrovirus\nColumn II:\n(1) Mosquitoes\n(2) Aphids\n(3) Butterfly caterpillars\n(4) Narrow-spectrum insecticidal application",
  ["A-2, B-1, C-3, D-4", "A-1, B-2, C-4, D-3", "A-3, B-4, C-1, D-2", "A-4, B-3, C-2, D-1"],
  0,
  "Ladybird controls aphids (A-2); Dragonfly controls mosquitoes (B-1); Bacillus thuringiensis controls butterfly caterpillars (C-3); Nucleopolyhedrovirus provides narrow-spectrum insecticidal control (D-4)."
);

addMcq(
  "Match the biofertilizer in Column I with its characteristic association in Column II:\nColumn I:\n(A) Rhizobium\n(B) Glomus\n(C) Anabaena\n(D) Azotobacter\nColumn II:\n(1) Mycorrhizal phosphorus absorption\n(2) Symbiotic nitrogen fixation in legumes\n(3) Free-living nitrogen fixer in soil\n(4) Nitrogen fixation in paddy fields",
  ["A-2, B-1, C-4, D-3", "A-1, B-2, C-3, D-4", "A-3, B-4, C-1, D-2", "A-4, B-3, C-2, D-1"],
  0,
  "Rhizobium fixes nitrogen in legume root nodules (A-2); Glomus absorbs phosphorus as mycorrhiza (B-1); Anabaena fixes nitrogen in paddy fields (C-4); Azotobacter is a free-living nitrogen fixer (D-3)."
);

addMcq(
  "Which environmental hazard is directly mitigated when rural communities replace firewood with domestic biogas for cooking?",
  ["Deforestation, indoor particulate smoke, and greenhouse gas emissions", "Depletion of stratospheric ozone", "Ocean acidification", "Radioactive fallout"],
  0,
  "Domestic biogas stoves provide clean, smokeless combustion, halting rural tree cutting for firewood and protecting women and children from toxic indoor smoke inhalation."
);

addMcq(
  "The biological wastewater treatment in an STP relies on microorganisms that are naturally:",
  ["Heterotrophic and present in the sewage itself", "Autotrophic and artificially synthesized in space", "Thermophilic archaebacteria imported from volcanic vents", "Genetically modified viruses"],
  0,
  "Secondary wastewater treatment utilizes the indigenous heterotrophic bacteria and fungi naturally abundant in sewage and soil, stimulating their growth via aeration."
);

addMcq(
  "Why are chemical pesticides considered less sustainable than biological control methods in agricultural ecosystems?",
  ["Pests evolve resistance to chemicals, natural predators are indiscriminately destroyed, and toxic chemical residues pollute food chains and water", "Chemical pesticides are too cheap to purchase", "Chemicals cause plants to grow too fast", "Chemicals turn all water into milk"],
  0,
  "Overuse of broad-spectrum pesticides leads to pesticide resistance, secondary pest outbreaks due to predator destruction, and bioaccumulation of toxic residues in food and drinking water."
);


const extra60Mcqs = [
  [
    "Chemical Oxygen Demand (COD) differs from Biochemical Oxygen Demand (BOD) in that COD:",
    [
      "Measures both biodegradable and non-biodegradable chemically oxidizable organic matter using potassium dichromate ($K_2Cr_2O_7$)",
      "Measures only living bacterial biomass",
      "Is always strictly lower than BOD for any given wastewater sample",
      "Requires 5 days of bacterial incubation"
    ],
    0,
    "COD uses a strong chemical oxidizing agent (acidic potassium dichromate) to oxidize virtually all organic compounds; hence COD is always higher than or equal to BOD."
  ],
  [
    "In secondary biological wastewater treatment, a trickling filter operates by:",
    [
      "Allowing sewage to trickle over a bed of crushed stones coated with a microbial slime biofilm that absorbs and oxidizes organic waste",
      "Freezing sewage into solid ice sheets",
      "Filtering wastewater through fine cloth bags by hand",
      "Passing high-voltage electric currents through water"
    ],
    0,
    "Trickling filters are fixed-film biological reactors where aerobic bacteria, fungi, and protozoa form a slime layer on crushed rock or plastic packing, degrading organics as sewage trickles over it."
  ],
  [
    "Tertiary wastewater treatment is primarily designed to:",
    [
      "Remove inorganic plant nutrients (nitrogen and phosphorus) and disinfect treated effluent before environmental release",
      "Remove large floating branches and plastics",
      "Trap dense inorganic gravel and grit",
      "Produce curd from milk"
    ],
    0,
    "Tertiary (advanced) treatment removes residual inorganic nutrients (nitrates and phosphates) to prevent eutrophication and provides final pathogen disinfection with chlorine, ozone, or UV."
  ],
  [
    "Biological removal of nitrogen from wastewater in advanced sewage treatment requires a two-step microbiological sequence:",
    [
      "Aerobic nitrification by Nitrosomonas and Nitrobacter followed by anoxic denitrification by Pseudomonas",
      "Anaerobic methanogenesis followed by chlorination",
      "Fungal fermentation followed by boiling",
      "Algal photosynthesis followed by acid digestion"
    ],
    0,
    "First, autotrophic Nitrosomonas and Nitrobacter oxidize ammonia to nitrate under aerobic conditions; second, heterotrophic denitrifiers (Pseudomonas) reduce nitrate to harmless $N_2$ gas under anoxic conditions."
  ],
  [
    "Enhanced Biological Phosphorus Removal (EBPR) in modern sewage treatment plants utilizes specialized bacteria known as:",
    [
      "Polyphosphate-Accumulating Organisms (PAOs)",
      "Methanogenic archaebacteria",
      "Lactic acid bacteria",
      "Cyanobacteria"
    ],
    0,
    "PAOs (such as Accumulibacter phosphatis) store excess intracellular orthophosphate as polyphosphate granules under alternating anaerobic-aerobic conditions, allowing phosphorus removal with waste sludge."
  ],
  [
    "In aquatic ecology, the oxygen sag curve describes the relationship between:",
    [
      "The longitudinal profile of dissolved oxygen and BOD downstream from an organic sewage discharge point",
      "The concentration of salt across ocean depths",
      "The percentage of carbon dioxide at different mountain altitudes",
      "The rate of tree photosynthesis at noon"
    ],
    0,
    "The Streeter-Phelps oxygen sag curve models how dissolved oxygen first declines to a minimum ('critical deficit') due to microbial deoxygenation downstream of sewage, then recovers through atmospheric reaeration."
  ],
  [
    "Waste stabilization ponds (oxidation ponds) are shallow engineered sewage lagoons that rely on a mutualistic symbiosis between:",
    [
      "Photosynthetic green algae (which generate $O_2$) and aerobic heterotrophic bacteria (which oxidize organic matter and release $CO_2$)",
      "Carnivorous fish and aquatic plants",
      "Methanogens and anaerobic viruses",
      "Termites and intestinal flagellates"
    ],
    0,
    "In oxidation ponds, microalgae utilize sunlight and $CO_2$ to generate dissolved oxygen via photosynthesis, which aerobic bacteria consume to decompose organic waste, recycling mineral nutrients and $CO_2$ back to the algae."
  ],
  [
    "Which chemical disinfectant is most widely used in municipal sewage treatment plants for terminal disinfection of treated effluent before river discharge?",
    [
      "Chlorine (or sodium hypochlorite)",
      "Penicillin",
      "Sulfuric acid",
      "Ethanol"
    ],
    0,
    "Chlorination is the most widely practiced cost-effective method for terminal disinfection of treated secondary effluent, destroying residual enteric pathogens before water enters public rivers."
  ],
  [
    "Sludge dewatering prior to disposal or land application is typically carried out using:",
    [
      "Belt filter presses, centrifuges, or open sludge drying beds",
      "Autoclaves operated at 121°C",
      "Distillation columns",
      "Incandescent light bulbs"
    ],
    0,
    "Mechanical belt filter presses, centrifuges, and sand drying beds remove free water from digested sludge, converting liquid sludge into solid, handleable sludge cakes."
  ],
  [
    "The term 'activated' in activated sludge denotes that the sludge:",
    [
      "Is teeming with active, viable, acclimatized aerobic microorganisms ready to rapidly digest organic matter",
      "Is radioactive and emits gamma rays",
      "Has been chemically treated with activated charcoal",
      "Is permanently heated to 100°C"
    ],
    0,
    "It is termed 'activated' because it contains a dense, highly active biological community of acclimatized floc-forming bacteria, fungi, and ciliates that rapidly adsorb and oxidize sewage pollutants."
  ],
  [
    "Which protozoan group serves as a valuable biological indicator of a stable, healthy activated sludge process in a sewage treatment plant?",
    [
      "Stalked and free-swimming ciliated protozoa (e.g. Vorticella, Epistylis, Aspidisca)",
      "Pathogenic amoebae causing dysentery",
      "Intestinal tapeworms",
      "Flagellated Leishmania parasites"
    ],
    0,
    "Dominance of ciliated protozoa (especially stalked Vorticella) indicates low effluent BOD, excellent flocculation, and high operating efficiency in activated sludge aeration basins."
  ],
  [
    "Sludge bulking, a major operational problem in activated sludge plants characterized by poor sludge settleability, is caused by:",
    [
      "Excessive proliferation of filamentous bacteria (such as Sphaerotilus natans and Microthrix parvicella)",
      "Complete absence of water in the tank",
      "Excessive sunlight falling on the tank",
      "Accidental introduction of table sugar"
    ],
    0,
    "Overgrowth of filamentous bacteria bridges flocs and creates an open, buoyant structure that prevents compact gravity settling in secondary clarifiers, causing biomass washout."
  ],
  [
    "In environmental microbiology, coliform bacteria (e.g. Escherichia coli) are routinely monitored in water bodies as:",
    [
      "Indicator organisms of fecal contamination and potential presence of enteric water-borne pathogens",
      "Commercial producers of penicillin",
      "The sole cause of malaria",
      "Natural predators of aquatic fish"
    ],
    0,
    "Coliforms inhabit the intestines of warm-blooded animals in high numbers; their presence in water indicates sewage or fecal contamination and the potential presence of enteric pathogens."
  ],
  [
    "Membrane Bioreactors (MBR) combine biological activated sludge digestion with which modern technology to produce exceptionally high-quality treated effluent?",
    [
      "Microfiltration or ultrafiltration membrane separation",
      "Gas chromatography",
      "Nuclear magnetic resonance",
      "Centrifugal vacuum evaporation"
    ],
    0,
    "MBR systems replace gravity secondary clarifiers with microfiltration or ultrafiltration hollow-fiber membranes, retaining 100% of biomass and pathogens to produce crystal-clear effluent."
  ],
  [
    "Constructed wetlands for decentralized wastewater treatment utilize wetland plants (such as reeds and cattails) whose root systems:",
    [
      "Provide surface area for microbial biofilms and deliver oxygen to the rhizosphere via aerenchyma tissues",
      "Actively absorb all water, leaving dry salt",
      "Release synthetic chemical herbicides into the water",
      "Freeze all bacteria instantly"
    ],
    0,
    "Wetland macrophytes (Typha, Phragmites) transport oxygen down into waterlogged root zones via aerenchyma, supporting aerobic rhizosphere biofilms that degrade organic matter and take up nutrients."
  ],
  [
    "Methanogenic Archaea are taxonomically classified in the domain Archaea and are distinguished from true bacteria (Eubacteria) by:",
    [
      "Possessing ether-linked isoprenoid lipids in their cell membranes and lacking peptidoglycan (possessing pseudomurein instead)",
      "Possessing a eukaryotic cell nucleus",
      "Having linear chromosomes wrapped around plant histones",
      "Lacking all ribosomes"
    ],
    0,
    "Archaea have ether-linked branched isoprenoid lipids in their membranes and pseudomurein cell walls that resist lysozyme, distinguishing them phylogenetically from Eubacteria."
  ],
  [
    "The unique fluorescent coenzyme found exclusively in methanogenic bacteria, used in microscopy to identify methanogens by blue-green fluorescence under UV light, is:",
    [
      "Coenzyme $F_{420}$",
      "Coenzyme A",
      "NADPH",
      "ATP"
    ],
    0,
    "Coenzyme $F_{420}$ is an 8-hydroxy-5-deazaflavin electron carrier unique to methanogens that fluoresces bright blue-green under UV epifluorescence microscopy at 420 nm."
  ],
  [
    "The Deenbandhu model of rural biogas plants, widely built in India, is an example of a:",
    [
      "Fixed-dome brick-masonry biogas plant",
      "Floating steel drum digester",
      "Continuous stirred tank industrial fermentor",
      "Plastic bag inflatable reactor"
    ],
    0,
    "The Deenbandhu model is an economical, fixed-dome biogas plant constructed entirely from local bricks, mortar, and cement with an underground hemispherical digester dome."
  ],
  [
    "The optimal Carbon-to-Nitrogen (C:N) ratio for stable, efficient anaerobic digestion of biomass in a biogas plant is approximately:",
    [
      "$25:1\\text{ to }30:1$",
      "$1:1$",
      "$100:1$",
      "$500:1$"
    ],
    0,
    "A C:N ratio of 25-30:1 provides enough carbon for energy and cellular maintenance while supplying sufficient nitrogen for microbial enzyme and protein synthesis without ammonia toxicity."
  ],
  [
    "Biogas upgrading (or biomethane purification) to produce Compressed Bio-Gas (CBG) for automotive fuel involves:",
    [
      "Removing carbon dioxide ($CO_2$), hydrogen sulfide ($H_2S$), and moisture to increase methane purity to $>90\\%$",
      "Adding heavy lead compounds to biogas",
      "Cooling biogas into dry ice blocks",
      "Diluting biogas with 90% air"
    ],
    0,
    "Biogas upgrading scrubs out $CO_2$, water vapor, and corrosive $H_2S$, enriching methane to $>90-95\\%$ to produce Bio-CNG suitable for compressed natural gas vehicles."
  ],
  [
    "During the acetogenesis phase of anaerobic digestion, obligate hydrogen-producing acetogenic bacteria convert propionate and butyrate into acetate and $H_2$. This reaction is thermodynamically favorable only if:",
    [
      "Methanogens continually consume $H_2$, keeping partial pressure of hydrogen extremely low (syntrophic interspecies hydrogen transfer)",
      "Oxygen is bubbled continuously through the slurry",
      "The temperature is raised above 200°C",
      "No microbes are present in the reactor"
    ],
    0,
    "Oxidation of volatile fatty acids by acetogens is endergonic under standard conditions; it becomes exergonic only through syntrophy, where hydrogenotrophic methanogens immediately consume $H_2$."
  ],
  [
    "Which methanogenic species is capable of cleaving acetate into methane and carbon dioxide via the aceticlastic methanogenesis pathway?",
    [
      "Methanosarcina and Methanothrix (Methanosaeta)",
      "Escherichia coli",
      "Lactobacillus bulgaricus",
      "Streptococcus pyogenes"
    ],
    0,
    "Aceticlastic methanogens like Methanosaeta and Methanosarcina cleave acetate to yield roughly 70% of the methane produced in domestic anaerobic digesters."
  ],
  [
    "The mesophilic temperature range for operating conventional municipal and agricultural anaerobic digesters is approximately:",
    [
      "$30^\\circ\\text{C to }38^\\circ\\text{C}$",
      "$0^\\circ\\text{C to }5^\\circ\\text{C}$",
      "$70^\\circ\\text{C to }90^\\circ\\text{C}$",
      "$150^\\circ\\text{C to }200^\\circ\\text{C}$"
    ],
    0,
    "Mesophilic anaerobic digesters operate optimally at 35-37°C, where mesophilic methanogenic communities achieve stable digestion kinetics with moderate heating inputs."
  ],
  [
    "Thermophilic anaerobic digestion operates at higher temperatures ($50-57^\\circ\\text{C}$) and offers which operational advantage over mesophilic digestion?",
    [
      "Faster reaction kinetics, higher biogas production rates, and superior thermal destruction of pathogens and weed seeds",
      "Zero production of methane",
      "Complete lack of any microorganisms",
      "Requires zero energy inputs at all times"
    ],
    0,
    "Thermophilic digestion accelerates biological reaction rates, enabling shorter retention times and smaller digester footprints, while thermophilic temperatures pasteurize pathogenic bacteria."
  ],
  [
    "Volatile fatty acid (VFA) accumulation leading to a sudden drop in pH ('sour digester') in a biogas plant occurs when:",
    [
      "Acidogenic bacteria produce organic acids faster than methanogens can consume them, inhibiting methanogens which are sensitive to low pH",
      "All bacteria convert into algae",
      "Too much oxygen is pumped into the reactor",
      "The dung slurry freezes solid"
    ],
    0,
    "Methanogens are obligate neutrophiles (pH 6.8-7.5); organic overload causes acidogens to accumulate volatile fatty acids, driving the pH below 6.5 and severely inhibiting methanogenesis."
  ],
  [
    "Methanobrevibacter smithii is of major interest in human physiology because it is:",
    [
      "The dominant archaeal methanogen residing in the human large intestine (colon)",
      "A pathogenic virus causing influenza",
      "A parasitic worm living in human bile ducts",
      "A bacterium that destroys stomach acid"
    ],
    0,
    "Methanobrevibacter smithii is the primary archaeon in the human colon, consuming hydrogen and carbon dioxide produced by bacterial carbohydrate fermentation to produce methane."
  ],
  [
    "In rural India, the use of biogas plants helps combat indoor air pollution, which is a major risk factor for:",
    [
      "Chronic obstructive pulmonary disease (COPD) and acute lower respiratory infections in women and children",
      "Lactose intolerance",
      "Type 1 diabetes",
      "Rheumatoid arthritis"
    ],
    0,
    "Combustion of unprocessed solid biomass (firewood, dried dung) in unventilated cookstoves releases hazardous carbon monoxide and particulate matter ($PM_{2.5}$), leading to chronic respiratory diseases."
  ],
  [
    "What is the primary role of the water seal present in Indian floating-cover KVIC biogas digesters?",
    [
      "Prevents atmospheric oxygen from entering the anaerobic digester while preventing biogas leakage to the outside",
      "Cools the digester to freezing temperatures",
      "Supplies drinking water to cattle",
      "Washes the manure continuously"
    ],
    0,
    "The annular water jacket acts as a reliable liquid seal, isolating the anaerobic interior from atmospheric oxygen and containing pressurized biogas within the floating dome."
  ],
  [
    "Biogas produced from municipal landfills (landfill gas) is captured by drilling vertical gas extraction wells because:",
    [
      "Uncontrolled atmospheric venting of methane contributes heavily to global warming and poses explosive fire hazards",
      "Landfill gas cools the atmosphere to zero degrees",
      "Landfill gas converts garbage into diamonds",
      "Landfill gas attracts beneficial dragonflies"
    ],
    0,
    "Methane is a potent greenhouse gas with a global warming potential 28 times greater than $CO_2$; capturing landfill gas prevents fugitive emissions, odor, and explosions while generating clean power."
  ],
  [
    "Dry anaerobic digestion (high-solids digestion) is specialized for processing organic wastes containing:",
    [
      "High total solids content ($20 - 40\\%$ solids), such as municipal source-separated biowaste and crop straw, without adding water",
      "Only pure liquid sewage containing 99.9% water",
      "Pure sand and crushed gravel",
      "Gaseous air exclusively"
    ],
    0,
    "High-solids dry anaerobic digestion processes stackable organic matter (straw, garden waste, municipal food scraps) with minimal dilution water in batch garage-style reactors."
  ],
  [
    "The crystalline Cry protoxins of Bacillus thuringiensis are encoded by which genes?",
    [
      "cry genes (such as cry1Ac, cry2Ab, and cry1Ab)",
      "lacZ genes",
      "ampR genes",
      "tetR genes"
    ],
    0,
    "Cry proteins are delta-endotoxins encoded by diverse cry gene families located on large plasmids in Bacillus thuringiensis."
  ],
  [
    "Which specific cry genes have been introduced into Bt cotton to protect it against cotton bollworms (Helicoverpa armigera)?",
    [
      "cry1Ac and cry2Ab",
      "cry1Ab only",
      "cry3Bb only",
      "cry4Aa only"
    ],
    0,
    "According to NCERT Class 12 Biology, cry1Ac and cry2Ab genes confer effective insecticidal resistance against cotton bollworms in commercial Bt cotton."
  ],
  [
    "Which cry gene was engineered into Bt corn (maize) to specifically control the European corn borer (Ostrinia nubilalis)?",
    [
      "cry1Ab",
      "cry1Ac",
      "cry2Ab",
      "cry4Aa"
    ],
    0,
    "NCERT notes that the cry1Ab gene specifically controls the European corn borer in genetically modified Bt maize crops."
  ],
  [
    "Beauveria bassiana is an entomopathogenic fungus commercially formulated as a biological insecticide to control:",
    [
      "Whiteflies, thrips, aphids, and beetles causing 'white muscardine disease'",
      "Bacterial wilt of tomatoes",
      "Human ringworm infections",
      "Powdery mildew of grapes"
    ],
    0,
    "Beauveria bassiana spores adhere to insect cuticles, germinate, and penetrate the hemolymph with proteases and chitinases, proliferating and killing the insect with fungal white muscardine."
  ],
  [
    "Metarhizium anisopliae is an entomopathogenic soil fungus formulated to kill insects by causing:",
    [
      "Green muscardine disease",
      "White muscardine disease",
      "Crown gall tumor",
      "Late blight of potato"
    ],
    0,
    "Metarhizium anisopliae produces characteristic dark-green conidia covering mummified insect cadavers, known as green muscardine disease, targeting termites, spittlebugs, and locusts."
  ],
  [
    "Entomopathogenic nematodes (such as Steinernema carpocapsae) control soil insect pests by releasing which symbiotic insecticidal bacterium into the host hemolymph?",
    [
      "Xenorhabdus (or Photorhabdus)",
      "Bacillus anthracis",
      "Escherichia coli",
      "Streptococcus lactis"
    ],
    0,
    "Infective juvenile nematodes invade insect grubs through natural orifices and regurgitate symbiotic Xenorhabdus or Photorhabdus bacteria, which multiply and kill the host via lethal septicemia."
  ],
  [
    "The introduction of the Argentinian moth Cactoblastis cactorum into Australia in 1925 is a celebrated historical triumph of weed biocontrol because:",
    [
      "Its larvae successfully destroyed and cleared millions of hectares of invasive prickly pear cactus (Opuntia)",
      "It pollinated Australian eucalyptus forests",
      "It killed all Australian venomous snakes",
      "It produced commercial silk from weeds"
    ],
    0,
    "Cactoblastis cactorum caterpillars bore into the cladodes of invasive Opuntia prickly pear cacti, successfully reclaiming over 25 million hectares of infested Australian pasture."
  ],
  [
    "Chrysolina beetles were introduced into North America as a successful biological weed control agent against:",
    [
      "St. John's wort (Hypericum perforatum / Klamath weed)",
      "Water hyacinth (Eichhornia crassipes)",
      "Parthenium hysterophorus",
      "Lantana camara"
    ],
    0,
    "Chrysolina quadrigemina leaf beetles defoliated and brought under complete biological control millions of acres of toxic Klamath weed (Hypericum perforatum) in California."
  ],
  [
    "Trichogramma species are microscopic wasps commercially mass-reared and released in agriculture because they act as:",
    [
      "Egg parasitoids that lay their eggs inside the eggs of damaging lepidopteran pests, preventing caterpillar emergence",
      "Predators that devour adult locusts whole",
      "Fungi that decompose plant roots",
      "Pollinators of rice flowers"
    ],
    0,
    "Trichogramma wasps are tiny egg parasitoids that lay eggs inside the eggs of sugarcane, cotton, and maize moth borers; the wasp larvae consume the host egg contents, preventing hatching."
  ],
  [
    "Encarsia formosa is a minute parasitoid wasp employed extensively in greenhouse horticulture for the biological control of:",
    [
      "Greenhouse whiteflies (Trialeurodes vaporariorum)",
      "Honeybees",
      "Earthworms",
      "Spider mites"
    ],
    0,
    "Encarsia formosa parasitizes nymphal scales of greenhouse whiteflies, turning parasitized scales black and effectively controlling whiteflies on greenhouse tomatoes and cucumbers."
  ],
  [
    "The predatory mite Phytoseiulus persimilis is released commercially in greenhouses to control:",
    [
      "Twospotted spider mites (Tetranychus urticae)",
      "Aphids",
      "Mosquito larvae",
      "Soil nematodes"
    ],
    0,
    "Phytoseiulus persimilis is an obligate predatory mite that hunts and feeds exclusively on all life stages of destructive phytophagous spider mites on ornamental and vegetable crops."
  ],
  [
    "The Mexican beetle Zygogramma bicolorata was introduced into India as a successful classical biological control agent against which invasive weed?",
    [
      "Parthenium hysterophorus (Carrot grass / Congress grass)",
      "Eichhornia crassipes (Water hyacinth)",
      "Lantana camara",
      "Opuntia dillenii"
    ],
    0,
    "Zygogramma bicolorata feeds voraciously on the leaves and flowers of the invasive toxic weed Parthenium hysterophorus, significantly suppressing its spread across India."
  ],
  [
    "The weevil Neochetina eichhorniae has been successfully released in aquatic ecosystems to biologically control which notorious invasive aquatic weed ('Terror of Bengal')?",
    [
      "Eichhornia crassipes (Water hyacinth)",
      "Pistia stratiotes (Water lettuce)",
      "Hydrilla verticillata",
      "Salvinia molesta"
    ],
    0,
    "Neochetina weevil adults and stem-boring larvae feed extensively on water hyacinth (Eichhornia crassipes), stunting weed growth, destroying buoyancy, and causing mats to sink."
  ],
  [
    "Why are biological control agents generally preferred over broad-spectrum synthetic chemical pesticides in modern agro-ecosystems?",
    [
      "They target specific pests, leave no toxic chemical residues in food or soil, do not induce secondary pest flare-ups, and avoid biomagnification",
      "They require zero scientific knowledge to implement",
      "They instantly freeze all rainfall",
      "They permanently turn desert sand into gold"
    ],
    0,
    "Biocontrol agents are self-sustaining, non-polluting, environmentally benign, and selective, safeguarding human health, natural wildlife, and non-target beneficial insects."
  ],
  [
    "In an Integrated Pest Management (IPM) framework, the 'economic injury level' (EIL) is defined as:",
    [
      "The lowest population density of a pest that will cause economic damage exceeding the cost of control measures",
      "The price of one liter of pesticide",
      "The total monetary value of the farmer's land",
      "The cost of shipping vegetables to market"
    ],
    0,
    "EIL represents the threshold pest density at which the financial loss caused by the pest equals the economic cost of artificial management intervention."
  ],
  [
    "The reduction of one molecule of atmospheric nitrogen ($N_2$) to two molecules of ammonia ($NH_3$) catalyzed by bacterial nitrogenase requires a minimum input of:",
    [
      "16 ATP molecules",
      "2 ATP molecules",
      "100 ATP molecules",
      "Zero ATP (it is completely exergonic)"
    ],
    0,
    "Biological nitrogen fixation is an intensely energy-demanding reaction requiring at least 16 ATP molecules per $N_2$ fixed: $N_2 + 8H^+ + 8e^- + 16\\text{ATP} \\rightarrow 2NH_3 + H_2 + 16\\text{ADP} + 16P_i$."
  ],
  [
    "The dinitrogenase catalytic enzyme complex of Rhizobium is composed of two distinct protein subunits:",
    [
      "Molybdenum-Iron (Mo-Fe) protein and Iron (Fe) protein",
      "Hemoglobin and myoglobin",
      "Cytochrome c and plastocyanin",
      "DNA polymerase and RNA polymerase"
    ],
    0,
    "Nitrogenase consists of component I (dinitrogenase, an $\\alpha_2\\beta_2$ tetrameric Mo-Fe protein that binds $N_2$) and component II (dinitrogenase reductase, a homodimeric Fe protein that hydrolyzes ATP)."
  ],
  [
    "Leghemoglobin functions inside root nodules as an oxygen buffer that:",
    [
      "Delivers precise, low concentrations of oxygen for bacteroid respiration while keeping free $O_2$ low enough to protect nitrogenase from irreversible inactivation",
      "Completely excludes all oxygen from the plant roots",
      "Synthesizes nitrogen gas directly from water",
      "Pumps hydrochloric acid into the soil"
    ],
    0,
    "Leghemoglobin has a remarkably high oxygen affinity; it facilitates $O_2$ diffusion to bacteroid respiratory chains at nanomolar free $O_2$ concentrations, shielding nitrogenase from oxidative destruction."
  ],
  [
    "Phosphate Solubilizing Microorganisms (PSM, such as Bacillus megaterium and Pseudomonas putida) enhance phosphorus availability in soil by:",
    [
      "Secreting low-molecular-weight organic acids (gluconic, citric, malic acids) that chelate mineral cations and solubilize bound rock phosphates",
      "Absorbing all phosphorus into fungal spores",
      "Converting phosphorus into atmospheric nitrogen gas",
      "Heating the soil to boiling point"
    ],
    0,
    "PSMs produce organic acids whose carboxyl and hydroxyl groups chelate $Ca^{2+}, Fe^{3+}$, and $Al^{3+}$, dissolving insoluble tricalcium phosphate and rock phosphate into bioavailable orthophosphate ions."
  ],
  [
    "Potassium Mobilizing Bacteria (KMB, such as Bacillus mucilaginosus) benefit crop nutrition by:",
    [
      "Dissolving insoluble potassium minerals (such as mica, illite, and feldspar) through organic acid production and silicate dissolution",
      "Synthesizing potassium atoms through nuclear fusion",
      "Converting potassium into sodium",
      "Preventing plants from absorbing potassium"
    ],
    0,
    "Silicate and potassium solubilizing bacteria (Bacillus mucilaginosus) secrete organic acids and capsular exopolysaccharides that weather potassium-bearing clay minerals, releasing soluble $K^+$ ions."
  ],
  [
    "Arbuscular Mycorrhizal Fungi (AMF) penetrate root cortical cells to form highly branched intracellular nutrient-exchange structures called:",
    [
      "Arbuscules",
      "Heterocysts",
      "Akinetes",
      "Basidiospores"
    ],
    0,
    "AMF hyphae penetrate cortical cells and branch profusely into tree-like arbuscules within the invaginated plant plasma membrane, serving as the principal sites of nutrient transfer."
  ],
  [
    "Vesicular-Arbuscular Mycorrhizae (VAM) store reserve lipids and energy within swollen fungal structures termed:",
    [
      "Vesicles",
      "Arbuscules",
      "Hartig nets",
      "Capsids"
    ],
    0,
    "Vesicles are lipid-rich, thick-walled oval storage organs formed by AMF within root cortical intercellular spaces."
  ],
  [
    "Frankia is a genus of actinomycetes that forms nitrogen-fixing root nodules in non-leguminous plants, and protects its nitrogenase inside specialized thick-walled structures called:",
    [
      "Vesicles (lipid-enveloped spheres)",
      "Heterocysts",
      "Chlamydospores",
      "Capsids"
    ],
    0,
    "In Frankia, nitrogenase is sequestered inside specialized spherical structures called vesicles whose multi-layered hopanoid lipid envelopes provide a physical barrier to oxygen diffusion."
  ],
  [
    "In paddy fields, the green manure water fern Azolla doubles its biomass in 3 to 5 days and can fix up to how much atmospheric nitrogen per hectare per crop cycle?",
    [
      "$30 - 50\\text{ kg N/ha}$",
      "$1\\text{ g N/ha}$",
      "$5,000\\text{ kg N/ha}$",
      "Zero nitrogen"
    ],
    0,
    "Azolla-Anabaena symbiosis is exceptionally productive in flooded rice paddies, fixing approximately 30 to 50 kg of atmospheric nitrogen per hectare per season."
  ],
  [
    "The cyanobacterial genus Nostoc forms large gelatinous colonial aggregates in moist soils and contributes to soil fertility by:",
    [
      "Fixing atmospheric nitrogen and releasing exopolysaccharides that stabilize soil aggregates against water erosion",
      "Secreting corrosive hydrochloric acid",
      "Inhibiting seed germination of all crops",
      "Preventing rainfall from soaking into soil"
    ],
    0,
    "Nostoc colonies fix $N_2$ in heterocysts and secrete mucilaginous polysaccharide sheaths that bind soil particles into stable aggregates, preventing topsoil erosion and enhancing water retention."
  ],
  [
    "Actinorhizal plants (such as Alnus and Casuarina) are ecologically pioneering trees capable of colonizing nutrient-poor, eroded soils primarily because of their symbiosis with:",
    [
      "The nitrogen-fixing actinomycete Frankia",
      "The virus HIV",
      "The bacterium Clostridium botulinum",
      "The fungus Penicillium notatum"
    ],
    0,
    "Frankia-actinorhizal symbioses allow pioneer woody plants (Alnus, Casuarina, Hippophae) to fix substantial nitrogen, facilitating reforestation and restoration of degraded and mined soils."
  ],
  [
    "The application of carrier-based biofertilizer inoculants to seeds prior to sowing (seed inoculation / seed coating) ensures that:",
    [
      "Emerging seedling roots are rapidly colonized by high populations of beneficial nitrogen-fixing or phosphate-solubilizing bacteria",
      "The seeds are completely protected against fire",
      "The seeds cannot germinate under any circumstances",
      "The seeds transform into aquatic ferns"
    ],
    0,
    "Seed coating with peat- or lignite-based biofertilizer slurries adheres millions of viable bacteria to the seed coat, priming immediate colonization of the emerging seedling rhizosphere."
  ],
  [
    "Which of the following blue-green algae is unicellular, non-heterocystous, and fixes nitrogen during the dark nocturnal phase to protect its nitrogenase from daytime photosynthetic oxygen?",
    [
      "Gloeothece (Cyanothece)",
      "Anabaena",
      "Nostoc",
      "Oscillatoria"
    ],
    0,
    "Unicellular diazotrophic cyanobacteria like Gloeothece temporally separate oxygenic photosynthesis (carried out during daylight) from nitrogen fixation (carried out exclusively in darkness)."
  ],
  [
    "The term 'rhizosphere' was coined by Lorenz Hiltner in 1904 to describe:",
    [
      "The narrow zone of soil directly influenced by root secretions and associated soil microorganisms",
      "The center of the Earth's molten iron core",
      "The outer atmosphere where clouds form",
      "The deep ocean floor below 5,000 meters"
    ],
    0,
    "The rhizosphere is the critical millimeter-scale zone of soil immediately surrounding plant roots where root exudates (sugars, amino acids) fuel an intense, diverse microbial biome."
  ],
  [
    "Biofertilizers and biocontrol agents are core components of which agricultural paradigm that seeks ecological balance and pesticide-free food production?",
    [
      "Organic farming and sustainable agriculture",
      "Intensive chemical monoculture",
      "Slash-and-burn shifting cultivation",
      "Industrial petrochemical farming"
    ],
    0,
    "Organic farming replaces synthetic petrochemical fertilizers and pesticides with biological inputs (biofertilizers, biocontrol agents, compost, crop rotation) to maintain sustainable soil health."
  ]
];
extra60Mcqs.forEach(m => addMcq(m[0], m[1], m[2], m[3]));

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

console.log(`Part 8 (${SUBTOPIC}) total questions: ${allQuestions.length} (AR: ${arQuestions.length}, MCQ: ${mcqQuestions.length})`);

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

console.log(`Part 8 KaTeX errors: ${katexErrors}`);

if (katexErrors === 0 && allQuestions.length === 180) {
  const outPath = path.join(__dirname, 'data_zoology_biohuman_part8.js');
  const fileContent = `// Auto-generated data for Zoology Biology and Human Welfare Part 8: ${SUBTOPIC}\nmodule.exports = ${JSON.stringify(allQuestions, null, 2)};\n`;
  fs.writeFileSync(outPath, fileContent, 'utf8');
  console.log(`Successfully wrote ${outPath}`);
} else {
  console.error("Validation failed! Not writing output.");
  process.exit(1);
}
