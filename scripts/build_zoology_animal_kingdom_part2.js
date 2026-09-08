const fs = require('fs');
const path = require('path');
const katex = require('katex');

const SUBTOPIC = "Non-chordates (Porifera to Hemichordata characteristics)";
const CHAPTER = "Animal Kingdom";
const SUBJECT = "Zoology";

const arDirections = "In the following questions, a statement of Assertion (A) is followed by a statement of Reason (R).\nChoose the correct option:\n(1) Both (A) and (R) are true and (R) is the correct explanation of (A)\n(2) Both (A) and (R) are true but (R) is not the correct explanation of (A)\n(3) (A) is true but (R) is false\n(4) (A) is false but (R) is true";

const arOptions = [
  "Both (A) and (R) are true and (R) is the correct explanation of (A)",
  "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
  "(A) is true but (R) is false",
  "(A) is false but (R) is true"
];

// 26 AR questions for Subtopic 2
const arData = [
  {
    a: "Water canal system is vital for the survival of sponges (Porifera).",
    r: "The continuous water flow through ostia, spongocoel, and osculum brings food and oxygen and removes metabolic wastes and reproductive gametes.",
    ans: 0,
    exp: "Sponges lack circulatory, respiratory, and excretory organs. The water canal system performs food gathering, respiratory gas exchange, and removal of nitrogenous wastes and gametes."
  },
  {
    a: "Choanocytes or collar cells are unique to Phylum Porifera.",
    r: "Choanocytes line the spongocoel and radial canals and their beating flagella drive water currents and filter food particles.",
    ans: 0,
    exp: "Choanocytes (collar cells) possess a contractile microvillar collar and a central flagellum; they are diagnostic of Porifera, functioning in feeding and water circulation."
  },
  {
    a: "Cnidocytes are also known as stinging cells in Phylum Cnidaria.",
    r: "Cnidocytes contain stinging capsules (nematocysts) filled with toxin that can be discharged for defense, anchorage, and capturing prey.",
    ans: 0,
    exp: "Cnidocytes contain capsule organelles called nematocysts filled with hypnotoxin (a mixture of phenols and proteins), which evert upon mechanical or chemical stimulation to paralyze prey."
  },
  {
    a: "Metagenesis in Obelia involves alternation of generations between polyp and medusa stages.",
    r: "Polyps produce medusae asexually by budding, whereas medusae form gametes that unite sexually to regenerate polyps.",
    ans: 0,
    exp: "In Obelia, the sessile asexual polyp generation alternates with the free-swimming sexual medusa generation, a cycle termed metagenesis."
  },
  {
    a: "Ctenophores are commonly known as comb jellies or sea walnuts.",
    r: "Their body bears eight external meridional rows of ciliated comb plates that function in locomotion.",
    ans: 0,
    exp: "Ctenophores possess eight longitudinal rows of fused macrocilia called comb plates (ctenes) resembling the teeth of a comb, which beat synchronously for swimming."
  },
  {
    a: "Ctenophores reproduce both asexually and sexually.",
    r: "Ctenophores possess high regeneration capacity like sponges and planarians.",
    ans: 3,
    exp: "Assertion is false: NCERT explicitly emphasizes that in Ctenophora, reproduction takes place exclusively by sexual means. Reason is true: ctenophores exhibit considerable regeneration powers."
  },
  {
    a: "Taenia solium (tapeworm) does not possess an alimentary canal.",
    r: "Being an endoparasite residing in the human intestine, it absorbs digested nutrients directly through its general body surface (tegument).",
    ans: 0,
    exp: "Tapeworms lack a mouth and digestive tract; their specialized tegument covered with microscopic microtriches directly absorbs glucose, amino acids, and fatty acids from host intestinal contents."
  },
  {
    a: "Flame cells (protonephridia) are osmoregulatory structures in Platyhelminthes.",
    r: "Cilia inside the flame bulbs beat like flickering flames, drawing interstitial fluid and wastes into excretory ducts.",
    ans: 0,
    exp: "Flame cells possess a tuft of cilia that beat rhythmically like a flickering flame, propelling excretory fluid and maintaining ionic and water balance (osmoregulation)."
  },
  {
    a: "Planaria exhibits extraordinary regeneration capacity.",
    r: "Planarian parenchyma contains abundant undifferentiated totipotent stem cells called neoblasts.",
    ans: 0,
    exp: "Planaria can regenerate a complete, proportional worm from even a microscopic dissected tissue fragment due to its population of proliferating totipotent stem cells called neoblasts."
  },
  {
    a: "Ascaris shows distinct sexual dimorphism.",
    r: "The female Ascaris is longer and straight, while the male is shorter with a curved posterior end bearing pineal spicules.",
    ans: 0,
    exp: "Sexual dimorphism is prominent in Ascaris lumbricoides: females are longer (20–35 cm) with a straight tail, while males are shorter (15–25 cm) with a ventrally curved tail and two copulatory pineal spicules."
  },
  {
    a: "The alimentary canal of Aschelminthes has a well-developed muscular pharynx.",
    r: "The muscular pharynx creates strong sucking pressure to ingest host gut contents or liquid food.",
    ans: 0,
    exp: "Roundworms possess a characteristic muscular, triradiate, sucking pharynx that pumps food into the non-muscular intestine against high internal pseudocoelomic turgor pressure."
  },
  {
    a: "Earthworms (Pheretima) possess a closed circulatory system.",
    r: "Blood in earthworms flows through a continuous circuit of closed vessels, and hemoglobin is dissolved in the blood plasma rather than in red blood cells.",
    ans: 1,
    exp: "Both (A) and (R) are correct statements. Earthworms have a closed vascular system with blood vessels and capillaries, and their respiratory pigment hemoglobin (erythrocruorin) is dissolved free in the plasma, but (R) is a biochemical feature rather than the explanation of why the system is closed."
  },
  {
    a: "Parapodia in Nereis assist in both locomotion and respiration.",
    r: "Parapodia are thin-walled, highly vascularized lateral appendages that act like paddle oars for swimming and provide a large surface area for cutaneous gas exchange.",
    ans: 0,
    exp: "In the marine polychaete Nereis, each segment bears a pair of unjointed, flattened, vascularized fleshy flaps called parapodia, which function as swimming paddles and gills for respiration."
  },
  {
    a: "Leeches (Hirudinaria) are sanguivorous parasites.",
    r: "Their saliva contains an anticoagulant peptide called hirudin which prevents blood from clotting while feeding on host blood.",
    ans: 0,
    exp: "Leeches are blood-sucking (sanguivorous) ectoparasites. Their salivary secretion contains hirudin, a thrombin inhibitor that ensures an uninterrupted flow of host blood."
  },
  {
    a: "Phylum Arthropoda is the largest phylum of the animal kingdom.",
    r: "Over two-thirds of all named animal species on Earth belong to Phylum Arthropoda.",
    ans: 0,
    exp: "Arthropoda comprises more than 80% of all described animal species, driven by the colossal evolutionary diversification of insects."
  },
  {
    a: "The body of an arthropod is encased in a tough, impermeable chitinous exoskeleton.",
    r: "To accommodate body growth, arthropods must periodically shed their exoskeleton through the process of ecdysis or moulting.",
    ans: 1,
    exp: "Both statements are correct. The chitinous cuticle provides protection and prevents desiccation, but being rigid and non-living, it must be periodically shed and regrown during development (ecdysis)."
  },
  {
    a: "Compound eyes of arthropods produce mosaic vision.",
    r: "Compound eyes consist of thousands of individual visual units called ommatidia, each capturing a small part of the total visual field with high sensitivity but lower resolution.",
    ans: 0,
    exp: "Arthropod compound eyes contain thousands of ommatidia, each forming a distinct image fragment. These coalesce into a mosaic image with high motion sensitivity, especially in dim light."
  },
  {
    a: "Limulus (horseshoe crab) is referred to as a living fossil.",
    r: "Limulus has remained virtually unchanged morphologically for hundreds of millions of years and breathes via book gills.",
    ans: 1,
    exp: "Both (A) and (R) are true statements. Limulus is classified as a living fossil because its modern morphology closely matches fossil forms from the Paleozoic era, and it breathes with book gills, but (R) includes respiratory anatomy rather than explaining evolutionary stasis."
  },
  {
    a: "The body of molluscs is covered by an unsegmented mantle.",
    r: "The space between the visceral hump and the mantle is the mantle cavity in which feather-like gills (ctenidia) are located.",
    ans: 1,
    exp: "Both (A) and (R) are true NCERT facts. The mantle (pallium) covers the visceral hump, and the mantle cavity between them houses ctenidia (gills) for respiration and excretion, but (R) describes mantle cavity contents rather than explaining why the mantle is unsegmented."
  },
  {
    a: "The radula is absent in bivalves (clams and oysters).",
    r: "Bivalves are sedentary filter-feeders that strain microscopic plankton through their large ciliated gills, eliminating the need for a rasping feeding organ.",
    ans: 0,
    exp: "Bivalves feed by passing water currents over mucous-covered ctenidia; food particles are trapped and transported to the mouth by cilia, rendering a rasping radula completely unnecessary."
  },
  {
    a: "Adult echinoderms exhibit pentamerous radial symmetry, but their larvae are bilaterally symmetrical.",
    r: "Radial symmetry in adult echinoderms is a secondary adaptation suited to a bottom-dwelling, slow-moving or sessile benthic mode of life.",
    ans: 0,
    exp: "Echinoderms evolved from bilateral free-swimming ancestors. The free-swimming bipinnaria/pluteus larva retains primitive bilateral symmetry, while the benthic adult develops secondary radial symmetry."
  },
  {
    a: "Echinoderms possess a unique water vascular system of coelomic origin.",
    r: "The water vascular system terminates in tube feet that perform locomotion, capture and transport of food, and respiration.",
    ans: 0,
    exp: "The ambulacral (water vascular) system is a modified coelomic hydraulic network; fluid pressure driven through tube feet (podia) provides locomotion, food handling, and gas exchange."
  },
  {
    a: "Echinoderms completely lack an organized excretory system.",
    r: "Nitrogenous wastes in echinoderms are primarily eliminated by simple diffusion across thin-walled tube feet and dermal branchiae (skin gills) into surrounding seawater.",
    ans: 0,
    exp: "Echinoderms have no specialized excretory organs (no nephridia, kidneys, or Malpighian tubules); ammonia diffuses directly into the open marine environment across thin respiratory membranes."
  },
  {
    a: "Hemichordates were previously classified as a subphylum under Phylum Chordata.",
    r: "Hemichordates possess a structure in the collar region called a stomochord, which was initially mistaken for a true notochord.",
    ans: 0,
    exp: "Historically, William Bateson classified hemichordates as chordates believing the stomochord was an anterior notochord. Subsequent anatomical research showed it is an outpocketing of the gut, lacking chordate notochord features."
  },
  {
    a: "Balanoglossus possesses an excretory organ called the proboscis gland.",
    r: "The proboscis gland (glomerulus) is located in the proboscis and filters metabolic wastes from blood into the coelomic fluid, which is discharged through the proboscis pore.",
    ans: 0,
    exp: "In hemichordates like Balanoglossus, the proboscis gland lies anterior to the heart vesicle in the proboscis coelom, functioning as the primary excretory organ."
  },
  {
    a: "Tornaria larva of Hemichordata closely resembles the dipleurula larva of Echinodermata.",
    r: "Hemichordates and echinoderms are closely related phylogenetically as both are deuterostomes sharing enterocoelous development.",
    ans: 0,
    exp: "The striking anatomical similarity between the ciliated bands of the tornaria larva and echinoderm larvae (bipinnaria/auricularia) provides strong developmental evidence that hemichordates and echinoderms share a common deuterostome ancestry."
  }
];

console.log("Built 26 AR questions for Part 2.");

const mcqData = [];
function addMcq(q, opts, ans, exp) {
  mcqData.push({ q, opts, ans, exp });
}

// 1. Phylum Porifera MCQs
addMcq(
  "In sponges, water enters the body through minute pores called _____ into a central cavity called _____ and exits via the _____.",
  ["Ostia; Spongocoel; Osculum", "Osculum; Spongocoel; Ostia", "Choanocytes; Osculum; Ostia", "Ostia; Choanocytes; Spongocoel"],
  0,
  "Water enters through numerous lateral dermal pores called ostia into the central cavity (spongocoel) and leaves through a large terminal opening called the osculum."
);

addMcq(
  "Which cells in sponges are responsible for generating water currents and filtering food particles?",
  ["Pinacocytes", "Choanocytes (collar cells)", "Archaeocytes", "Porocytes"],
  1,
  "Choanocytes possess a flagellum whose rhythmic undulating movement creates the unidirectional water flow through the canal system, capturing food particles in microvillar collars."
);

addMcq(
  "Totipotent cells in sponges that can differentiate into any other cell type and give rise to gametes and gemmules are:",
  ["Pinacocytes", "Archaeocytes", "Scleroblasts", "Collencytes"],
  1,
  "Archaeocytes are undifferentiated, amoeboid totipotent cells present in the sponge mesohyl; they can transform into all other cell types and participate in gemmule formation."
);

addMcq(
  "Internal asexual buds produced by freshwater sponges (like Spongilla) to survive harsh environmental winters or droughts are called:",
  ["Gemmules", "Planulae", "Statocysts", "Hydranths"],
  0,
  "Gemmules are internal dormant asexual reproductive bodies consisting of an aggregation of archaeocytes surrounded by a thick protective capsule reinforced with amphidisc spicules."
);

addMcq(
  "Which of the following sponges is commonly known as the 'Bath sponge'?",
  ["Spongilla", "Euspongia", "Sycon", "Euplectella"],
  1,
  "Euspongia is commonly called the bath sponge because its dried skeleton consists exclusively of a soft, absorbent network of spongin fibers."
);

addMcq(
  "Euplectella, famously presented as a cherished wedding gift in Japan symbolizing eternal togetherness, is known as:",
  ["Venus' flower basket", "Bath sponge", "Chalice sponge", "Boring sponge"],
  0,
  "Euplectella is known as the Venus' flower basket due to its intricate, delicate siliceous spicule meshwork that often houses a commensal pair of mating shrimp for life."
);

addMcq(
  "Which of the following sponges lives in fresh water?",
  ["Sycon (Scypha)", "Spongilla", "Euspongia", "Cliona"],
  1,
  "Spongilla is the classic freshwater sponge, thriving in clean freshwater lakes, ponds, and streams."
);

addMcq(
  "Fertilization and embryonic development in sponges are, respectively:",
  ["External and Direct", "Internal and Indirect with free-swimming larvae", "External and Indirect", "Internal and Direct"],
  1,
  "Sponges exhibit internal fertilization (sperm enters via water current to fertilize eggs in the mesohyl) and indirect development through ciliated, free-swimming larvae (amphiblastula or parenchymula)."
);

// 2. Phylum Cnidaria (Coelenterata) MCQs
addMcq(
  "Cnidoblasts (cnidocytes) contain a specialized stinging capsule organelle termed:",
  ["Nematocyst", "Colloblast", "Choanocyte", "Trichocyst"],
  0,
  "The nematocyst is the stinging capsule within a cnidocyte; when triggered, it everts a coiled hollow tubule that penetrates prey and injects hypnotoxin."
);

addMcq(
  "The chemical nature of the poisonous fluid contained inside nematocysts is:",
  ["Hypnotoxin (proteins and phenols)", "Pure hydrochloric acid", "Hirudin", "Hemocyanin"],
  0,
  "Hypnotoxin is a potent mixture of neurotoxic proteins and phenolic compounds that paralyzes or kills small prey organisms."
);

addMcq(
  "Which of the following is NOT a primary function of cnidocytes in cnidarians?",
  ["Anchorage to the substratum", "Defense against predators", "Capturing prey", "Osmoregulation and excretion"],
  3,
  "Cnidocytes are specialized for anchorage, defense, and prey capture. They play no role in excretion or osmoregulation, which occur by simple diffusion."
);

addMcq(
  "In Cnidaria, the central gastrovascular cavity opens to the exterior through a single opening located on an elevated conical structure called the:",
  ["Osculum", "Hypostome", "Scolex", "Proglottid"],
  1,
  "The single opening of the coelenterate gastrovascular cavity is the mouth, situated on a central elevated projection called the hypostome."
);

addMcq(
  "Which of the following cnidarians exhibits a hard exoskeleton composed of calcium carbonate ($\\mathrm{CaCO_3}$)?",
  ["Physalia", "Corals (e.g. Meandrina)", "Hydra", "Aurelia"],
  1,
  "Corals (such as Meandrina, the brain coral, and Corallium) possess massive mineralized exoskeletons made of calcium carbonate that build coral reefs."
);

addMcq(
  "Physalia is commonly known by which popular name?",
  ["Portuguese man-of-war", "Sea pen", "Sea fan", "Brain coral"],
  0,
  "Physalia is commonly known as the Portuguese man-of-war; it is a colonial siphonophore with a gas-filled float resembling an 18th-century Portuguese warship."
);

addMcq(
  "Match the cnidarian with its common name:\n(A) Adamsia - (i) Sea fan\n(B) Pennatula - (ii) Sea anemone\n(C) Gorgonia - (iii) Sea pen\n(D) Meandrina - (iv) Brain coral",
  [
    "(A)-(ii), (B)-(iii), (C)-(i), (D)-(iv)",
    "(A)-(iii), (B)-(ii), (C)-(i), (D)-(iv)",
    "(A)-(ii), (B)-(i), (C)-(iii), (D)-(iv)",
    "(A)-(iv), (B)-(iii), (C)-(i), (D)-(ii)"
  ],
  0,
  "Adamsia = Sea anemone (ii); Pennatula = Sea pen (iii); Gorgonia = Sea fan (i); Meandrina = Brain coral (iv)."
);

addMcq(
  "The symbiotic relationship between the hermit crab (Eupagurus) and the sea anemone (Adamsia) is a textbook example of:",
  ["Commensalism / Mutualism (Proto-cooperation)", "Endoparasitism", "Predation", "Ammensalism"],
  0,
  "Adamsia attaches to the gastropod shell inhabited by a hermit crab; the anemone obtains mobility and food scraps, while the crab gains camouflage and protection from stinging nematocysts."
);

addMcq(
  "In cnidarians exhibiting metagenesis like Obelia, the free-swimming ciliated larva produced after sexual reproduction is the:",
  ["Planula larva", "Tornaria larva", "Trochophore larva", "Glochidium larva"],
  0,
  "The fertilized egg of a cnidarian develops into a solid, ciliated, free-swimming planula larva, which eventually settles on a substrate to form a new polyp."
);

// 3. Phylum Ctenophora MCQs
addMcq(
  "Ctenophores are commonly referred to as:",
  ["Sea walnuts or Comb jellies", "Glass sponges", "Devil fish", "Acorn worms"],
  0,
  "Ctenophores are popularly called comb jellies (due to their rows of ciliated comb plates) or sea walnuts (due to their walnut-like translucent appearance)."
);

addMcq(
  "How many ciliated comb plates are present on the external body surface of a ctenophore?",
  ["4", "6", "8", "10"],
  2,
  "NCERT explicitly states that the body of a ctenophore bears eight external rows of ciliated comb plates, which help in locomotion."
);

addMcq(
  "Adhesive cells present on the tentacles of ctenophores that discharge a sticky secretion to capture prey are called:",
  ["Cnidocytes", "Colloblasts (lasso cells)", "Flame cells", "Choanocytes"],
  1,
  "Colloblasts (lasso cells) are specialized adhesive cells found on the tentacles of ctenophores; they produce a sticky droplet that entangles small planktonic prey."
);

addMcq(
  "Which of the following is an example of Phylum Ctenophora?",
  ["Pleurobrachia and Ctenoplana", "Physalia and Adamsia", "Pennatula and Gorgonia", "Fasciola and Taenia"],
  0,
  "Pleurobrachia and Ctenoplana are the two quintessential ctenophore genera highlighted in NCERT."
);

addMcq(
  "In ctenophores, fertilization and development are, respectively:",
  ["Internal and Direct", "External and Indirect", "Internal and Indirect", "External and Direct"],
  1,
  "Fertilization is external (taking place in open seawater) and development is indirect through a cydippid larval stage."
);

// 4. Phylum Platyhelminthes MCQs
addMcq(
  "Platyhelminthes are commonly called flatworms because:",
  ["Their body is dorsoventrally flattened", "They live flat against tree bark", "They have circular cross-sections", "They lack reproductive organs"],
  0,
  "Flatworms are named Platyhelminthes (Greek platys = flat, helmins = worm) because their bodies are distinctly flattened from the dorsal to the ventral surface."
);

addMcq(
  "Fasciola hepatica is commonly known as the:",
  ["Liver fluke", "Pork tapeworm", "Blood fluke", "Dog tapeworm"],
  0,
  "Fasciola hepatica is the sheep liver fluke, residing as a parasite in the bile ducts of sheep, goats, and cattle (and occasionally humans)."
);

addMcq(
  "The primary host and intermediate host of Fasciola hepatica are, respectively:",
  ["Sheep/cattle and freshwater snail (Lymnaea)", "Human and pig", "Dog and sheep", "Mosquito and human"],
  0,
  "Fasciola hepatica requires two hosts: the primary definitive host is a vertebrate (sheep or cattle) and the secondary intermediate host is an amphibious freshwater snail (Lymnaea or Planorbis)."
);

addMcq(
  "The correct sequence of larval stages in the life cycle of the liver fluke (Fasciola hepatica) is:",
  [
    "Miracidium -> Sporocyst -> Redia -> Cercaria -> Metacercaria",
    "Sporocyst -> Miracidium -> Redia -> Cercaria -> Metacercaria",
    "Cercaria -> Redia -> Sporocyst -> Miracidium -> Metacercaria",
    "Miracidium -> Cercaria -> Redia -> Sporocyst -> Metacercaria"
  ],
  0,
  "The developmental sequence is: Miracidium (ciliated, enters snail) -> Sporocyst -> Redia -> Cercaria (leaves snail) -> Metacercaria (encysts on vegetation eaten by sheep)."
);

addMcq(
  "Taenia solium is commonly known as the:",
  ["Pork tapeworm", "Beef tapeworm", "Fish tapeworm", "Dog tapeworm"],
  0,
  "Taenia solium is the pork tapeworm; humans acquire the infection by ingesting undercooked measly pork containing cysticercus cellulosae larvae."
);

addMcq(
  "In Taenia solium, the anchoring organ equipped with suckers and a rostellum with curved chitinous hooks is called the:",
  ["Scolex", "Neck", "Strobila", "Proglottid"],
  0,
  "The scolex (head) of Taenia solium bears four cup-shaped suckers and a central rostellum armed with a double row of 22–32 chitinous hooks for attachment."
);

addMcq(
  "The segments of a tapeworm that contain both male and female mature reproductive organs are called:",
  ["Proglottids", "Metameres", "Ommatidia", "Annuli"],
  0,
  "The body (strobila) of a tapeworm consists of a chain of independent reproductive segments called proglottids (immature, mature, and gravid)."
);

addMcq(
  "Gravid proglottids of Taenia are packed with:",
  ["Branched uterus containing thousands of fertilized eggs/embryos (oncospheres)", "Flame cells only", "Hooks and suckers", "Nematocysts"],
  0,
  "Gravid proglottids at the posterior end of the tapeworm contain a highly branched uterus packed with thousands of hexacanth embryos (oncospheres) that pass out in host feces."
);

addMcq(
  "Schistosoma is an endoparasite commonly known as the:",
  ["Blood fluke", "Liver fluke", "Lung fluke", "Intestinal fluke"],
  0,
  "Schistosoma mansoni / S. haematobium is the human blood fluke that lives inside mesenteric and pelvic veins, causing schistosomiasis (bilharzia)."
);

// 5. Phylum Aschelminthes MCQs
addMcq(
  "Why are members of Phylum Aschelminthes commonly called roundworms?",
  ["Their body is circular in cross-section", "They live in circular burrows", "They roll into a circle when threatened", "They possess round eggs only"],
  0,
  "NCERT states: 'The body of the aschelminthes is circular in cross-section, hence, the name roundworms.'"
);

addMcq(
  "The body of roundworms is covered externally by a tough, non-cellular, flexible layer called the:",
  ["Cuticle", "Pellicle", "Tegument", "Chitinous shell"],
  0,
  "Roundworms are enclosed in a thick, resistant, multi-layered collagenous cuticle secreted by the underlying syncytial hypodermis."
);

addMcq(
  "How many times does the larva of Ascaris lumbricoides moult during its life cycle?",
  ["Four times", "Two times", "Once", "Six times"],
  0,
  "Ascaris undergoes four moults: the 1st moult occurs inside the egg in soil; the 2nd and 3rd moults occur in the host's lungs; and the 4th moult occurs in the small intestine."
);

addMcq(
  "The infective stage of Ascaris lumbricoides to humans is the:",
  ["Second stage rhabditiform larva within the egg", "First stage unsegmented egg", "Free-swimming miracidium", "Cysticercus larva"],
  0,
  "Humans become infected by ingesting embryonated eggs containing the second-stage rhabditiform larva (L2) with contaminated food or water."
);

addMcq(
  "The scientific name of the filarial worm responsible for causing elephantiasis in humans is:",
  ["Wuchereria bancrofti", "Ascaris lumbricoides", "Ancylostoma duodenale", "Enterobius vermicularis"],
  0,
  "Wuchereria bancrofti and W. malayi are filarial nematodes that obstruct human lymphatic drainage, causing severe edema and elephantiasis of the lower limbs and scrotum."
);

addMcq(
  "The vector for Wuchereria bancrofti is the:",
  ["Female Culex mosquito", "Female Anopheles mosquito", "Female Aedes mosquito", "Tsetse fly (Glossina)"],
  0,
  "The female Culex mosquito transmits microfilariae of Wuchereria bancrofti during blood meals."
);

addMcq(
  "Enterobius vermicularis is commonly referred to as the:",
  ["Pinworm (or seatworm)", "Hookworm", "Guinea worm", "Eye worm"],
  0,
  "Enterobius vermicularis is the pinworm, which infests the human cecum and colon, with females migrating to the perianal skin at night to deposit eggs, causing intense pruritus."
);

addMcq(
  "Ancylostoma duodenale attaches to the intestinal mucosa and feeds on:",
  ["Host blood and mucosal tissue, causing severe iron-deficiency anaemia", "Partially digested food only", "Bile salts only", "Epithelial cells of the skin"],
  0,
  "Ancylostoma duodenale (hookworm) anchors to the jejunal mucosa with sharp chitinous teeth and sucks blood continuously, leading to severe hypochromic microcytic anaemia."
);

// 6. Phylum Annelida MCQs
addMcq(
  "The word 'Annelida' is derived from Latin 'annulus' meaning:",
  ["Little ring", "Flat plate", "Stinging needle", "Jointed foot"],
  0,
  "The name Annelida is derived from Latin annulus (little ring), referring to the serial ring-like segments (metameres) of the body."
);

addMcq(
  "Which muscle layers in the body wall of an earthworm contract antagonistically to produce peristaltic crawling locomotion?",
  ["Circular and longitudinal muscles", "Radial and oblique muscles", "Skeletal and cardiac muscles", "Biceps and triceps"],
  0,
  "Earthworms possess an outer circular muscle layer and an inner longitudinal muscle layer, which contract alternately against the hydrostatic pressure of the coelomic fluid to move forward."
);

addMcq(
  "Setae in earthworms are S-shaped structures composed of:",
  ["Chitin", "Calcium carbonate", "Keratin", "Spongin"],
  0,
  "Setae (chaetae) are microscopic S-shaped bristles composed of chitin, embedded in epidermal pits and moved by protractor and retractor muscles to anchor against soil."
);

addMcq(
  "On which segments of the earthworm (Pheretima posthuma) are setae completely absent?",
  [
    "First segment (peristomium), last segment (anal segment), and the clitellum (segments 14-16)",
    "Segments 1 to 5 only",
    "Only on segment 10",
    "Setae are present uniformly on every single segment without exception"
  ],
  0,
  "In Pheretima, setae are embedded in a ring around every segment except the first segment, the last anal segment, and the mature clitellar girdle (segments 14, 15, and 16)."
);

addMcq(
  "The prominent glandular ring found in mature earthworms between segments 14 to 16 that secretes cocoons is called the:",
  ["Clitellum", "Typhlosole", "Prostomium", "Pygidium"],
  0,
  "The clitellum is a prominent dark glandular collar covering segments 14–16 in adult earthworms; it secretes albumin and the protective cocoon for eggs and sperm."
);

addMcq(
  "In earthworms, the internal median longitudinal fold projecting into the lumen of the intestine from segment 26 onwards to increase absorption area is the:",
  ["Typhlosole", "Gizzard", "Chloragogen tissue", "Intestinal caecum"],
  0,
  "The typhlosole is a dorsal infolding of the intestinal wall that vastly increases the surface area for food digestion and nutrient absorption."
);

addMcq(
  "Chloragogen cells in earthworms perform a function analogous to the vertebrate:",
  ["Liver (glycogen storage and deamination/excretion)", "Kidney only", "Pancreas", "Heart"],
  0,
  "Yellow chloragogen cells surrounding the earthworm intestine store glycogen and lipids and deaminate amino acids to produce urea/ammonia, functionally analogous to the vertebrate liver."
);

addMcq(
  "Nereis exhibits a seasonal sexual transformation called 'epitoky', in which the non-sexual worm (atoke) transforms into a pelagic sexual form called the:",
  ["Epitoke (Heteronereis)", "Cercaria", "Redia", "Medusa"],
  0,
  "During the breeding season, the benthic atoke form of Nereis develops enlarged eyes, foliaceous swimming parapodia, and gamete-packed segments to become the swimming epitoke (Heteronereis)."
);

addMcq(
  "The cattle leech (Hirudinaria granulosa) possesses a fixed number of anatomical segments, which is:",
  ["33 segments", "100 segments", "10 segments", "50 segments"],
  0,
  "All true leeches (Hirudinea) possess a constant, fixed number of 33 body segments, although secondary external annuli make them appear more numerous."
);

addMcq(
  "In leeches, the true coelom is replaced by a specialized meshwork of mesodermal pigment and connective tissue called:",
  ["Botryoidal tissue", "Parenchyma", "Mesoglea", "Adipose tissue"],
  0,
  "The spacious coelom of leeches is reduced to narrow channels by the proliferation of brown botryoidal tissue, which functions in excretion and food storage."
);

// 7. Phylum Arthropoda MCQs
addMcq(
  "The respiratory system of terrestrial insects consists of a network of air tubes called:",
  ["Tracheae opening via spiracles", "Book lungs", "Ctenidia", "Dermal branchiae"],
  0,
  "Insects breathe via an intricate tracheal system: air enters through lateral body pores (spiracles) and diffuses through branching cuticular tracheae and fluid-filled tracheoles directly to tissues."
);

addMcq(
  "Antennal glands (or green glands) are the specialized excretory structures of:",
  ["Crustaceans (e.g. Prawns)", "Insects (e.g. Cockroaches)", "Arachnids (e.g. Scorpions)", "Myriapods (e.g. Millipedes)"],
  0,
  "Prawns and other decapod crustaceans excrete nitrogenous wastes (ammonia) through a pair of green glands (antennal glands) located at the base of the second antennae."
);

addMcq(
  "Coxal glands function as excretory organs in which group of arthropods?",
  ["Arachnids (spiders, scorpions)", "Insects", "Crustaceans", "Chilopods"],
  0,
  "Coxal glands are paired excretory organs located at the base of the walking legs (coxae) in arachnids (spiders, scorpions)."
);

addMcq(
  "The primary nitrogenous excretory product of insects and terrestrial arthropods is:",
  ["Uric acid (uricotelic adaptation to conserve water)", "Ammonia", "Urea", "Guanine"],
  0,
  "Insects excrete solid, insoluble uric acid crystals with minimal water loss, an essential adaptation for terrestrial survival."
);

addMcq(
  "Apis indica, Bombyx mori, and Laccifer lacca are economically important arthropods yielding:",
  ["Honey/wax, Silk, and Shellac (lac), respectively", "Venom, Pearls, and Leather", "Cotton, Dyes, and Timber", "Spices, Glue, and Rubber"],
  0,
  "Apis produces honey and beeswax; Bombyx produces natural mulberry silk fibers; and Laccifer secretes commercial resinous shellac."
);

addMcq(
  "Which of the following mosquitoes serves as the biological vector for malaria (Plasmodium)?",
  ["Female Anopheles mosquito", "Female Culex mosquito", "Female Aedes mosquito", "Male Anopheles mosquito"],
  0,
  "The female Anopheles mosquito transmits the malaria parasite (Plasmodium) during blood feeding."
);

addMcq(
  "Which of the following mosquitoes transmits dengue fever, chikungunya, and yellow fever viruses?",
  ["Aedes aegypti", "Culex pipiens", "Anopheles stephensi", "Mansonia"],
  0,
  "Aedes aegypti (tiger mosquito) is the primary vector transmitting dengue, chikungunya, Zika, and yellow fever viruses."
);

addMcq(
  "Locusta migratoria is ecologically and agriculturally classified as a:",
  ["Gregarious pest that causes devastating crop loss", "Beneficial pollinator", "Freshwater filter feeder", "Living fossil"],
  0,
  "Locusta (locust) is a notorious gregarious pest that forms swarms of millions of insects, devouring entire agricultural crops."
);

addMcq(
  "What type of vision is provided by the compound eyes of insects?",
  ["Mosaic vision with high sensitivity and low resolution", "Binocular stereoscopic vision with high resolution", "Monocular vision without color perception", "Infrared thermal vision"],
  0,
  "Compound eyes yield mosaic vision: each ommatidium perceives a separate component of the scene, providing high motion sensitivity and wide field of view, but lower optical resolution."
);

// 8. Phylum Mollusca MCQs
addMcq(
  "The mantle of a mollusc is also known by the anatomical term:",
  ["Pallium", "Peritoneum", "Placoid", "Parapodium"],
  0,
  "The mantle or pallium is the dorsal muscular and glandular fold of the body wall that covers the visceral mass and secretes the shell."
);

addMcq(
  "The respiratory pigment found dissolved in the blood plasma of many molluscs and crustaceans that imparts a blue colour when oxygenated is:",
  ["Hemocyanin (copper-containing)", "Hemoglobin (iron-containing)", "Chlorocruorin", "Erythrocruorin"],
  0,
  "Hemocyanin is a copper-based respiratory protein; when deoxygenated it is colorless, and when oxygenated it turns blue."
);

addMcq(
  "The sensory receptor called an 'osphradium' present in the mantle cavity of molluscs functions to:",
  ["Test the physical and chemical quality of incoming water (olfaction/chemoreception)", "Sense gravity and maintain balance", "Form images of predators", "Detect changes in temperature"],
  0,
  "The osphradium is an olfactory chemosensory patch located near the ctenidia in molluscs that samples the chemical purity and silt load of respiratory water."
);

addMcq(
  "In cuttlefish (Sepia), the calcareous shell is:",
  ["Internal and known as the cuttlebone", "External and spirally coiled", "Completely absent", "Made of silica"],
  0,
  "Sepia (cuttlefish) has an internal, porous, flat calcareous shell called the cuttlebone, which provides buoyancy regulation and skeletal support."
);

addMcq(
  "In squids (Loligo), the shell is reduced to an internal horny, feather-shaped chitinous structure called the:",
  ["Pen (gladius)", "Cuttlebone", "Operculum", "Columella"],
  0,
  "The internal shell of Loligo (squid) is an unmineralized, flexible, feather-like chitinous rod called the pen or gladius."
);

addMcq(
  "In Octopus (devil fish), the shell is:",
  ["Completely absent", "External and heavy", "Internal and calcareous", "Spiral like a snail"],
  0,
  "Octopus completely lacks any shell (internal or external), allowing it to squeeze through remarkably narrow crevices."
);

addMcq(
  "Which class of molluscs possesses the most advanced nervous system and camera-type eyes capable of forming high-resolution images?",
  ["Cephalopoda (e.g. Octopus, Squid)", "Gastropoda", "Bivalvia", "Polyplacophora"],
  0,
  "Cephalopods possess large, centralized brains and highly developed camera-type eyes with a cornea, lens, and retina that are remarkably convergent with vertebrate eyes."
);

addMcq(
  "An ink sac that secretes a cloud of dark melanin-rich pigment to confuse predators and escape is found in:",
  ["Cephalopods (Sepia, Octopus, Loligo)", "Gastropods (Pila)", "Bivalves (Pinctada)", "Chitons"],
  0,
  "Cephalopods possess an ink sac discharging dark melanin ink through the siphon, creating a smoke screen that conceals the animal while it jets away."
);

addMcq(
  "Chaetopleura is a marine mollusc belonging to Class Polyplacophora, commonly known as:",
  ["Chiton", "Tusk shell", "Sea hare", "Apple snail"],
  0,
  "Chaetopleura is commonly called the chiton; its dorsal shell consists of eight overlapping calcareous plates."
);

// 9. Phylum Echinodermata MCQs
addMcq(
  "The name 'Echinodermata' is derived from Greek words meaning:",
  ["Spiny skinned", "Jointed feet", "Soft bodied", "Little rings"],
  0,
  "Echinodermata is derived from Greek echinos (spiny) and derma (skin), describing the spines projecting from their dermal skeleton."
);

addMcq(
  "In echinoderms, minute pincer-like structures scattered on the skin surface that keep the body free from debris and parasites are called:",
  ["Pedicellariae", "Tube feet", "Madreporites", "Spicules"],
  0,
  "Pedicellariae are microscopic, movable, jawed pincer-like calcareous appendages on the skin of starfish and sea urchins that clean debris and deter settling larvae."
);

addMcq(
  "The perforated sieve-plate on the aboral surface of a starfish that admits seawater into the water vascular system is the:",
  ["Madreporite", "Osculum", "Hypostome", "Spiracle"],
  0,
  "The madreporite is a porous, calcareous button on the aboral surface of echinoderms that serves as the intake pressure-equalizing valve for the water vascular system."
);

addMcq(
  "The correct route of water flow in the water vascular system of a starfish is:",
  [
    "Madreporite -> Stone canal -> Ring canal -> Radial canals -> Lateral canals -> Tube feet",
    "Tube feet -> Radial canal -> Ring canal -> Stone canal -> Madreporite",
    "Ring canal -> Madreporite -> Stone canal -> Tube feet",
    "Stone canal -> Madreporite -> Radial canals -> Tube feet"
  ],
  0,
  "Seawater enters the madreporite, passes down the S-shaped stone canal into the circular ring canal, radiates into five radial canals, and reaches the tube feet via lateral canals."
);

addMcq(
  "Aristotle's lantern is a complex, five-jawed masticatory apparatus found in:",
  ["Echinus (Sea urchin)", "Asterias (Starfish)", "Ophiura (Brittle star)", "Antedon (Sea lily)"],
  0,
  "Aristotle's lantern is a five-toothed, conical chewing and scraping apparatus operated by muscles in the mouth of regular sea urchins (Echinus)."
);

addMcq(
  "Cucumaria belongs to Class Holothuroidea and is commonly known as the:",
  ["Sea cucumber", "Sea urchin", "Sea lily", "Brittle star"],
  0,
  "Cucumaria is commonly called the sea cucumber; it has an elongated, leathery, sausage-shaped body with branched oral tentacles and microscopic dermal ossicles."
);

addMcq(
  "Antedon is a stalked or free-swimming crinoid commonly known as the:",
  ["Sea lily (or Feather star)", "Sea urchin", "Brittle star", "Sea anemone"],
  0,
  "Antedon belongs to Class Crinoidea and is commonly known as the feather star or sea lily, possessing branched, feather-like arms with pinnules."
);

addMcq(
  "When threatened by a predator, sea cucumbers (Cucumaria) can violently expel their internal visceral organs through the anus in a defensive process termed:",
  ["Evisceration", "Autotomy", "Metagenesis", "Ecdysis"],
  0,
  "Evisceration is a defensive escape mechanism where the sea cucumber ejects its digestive tract and respiratory trees, which are later completely regenerated."
);

addMcq(
  "Autotomy (the deliberate shedding of an arm or body part when seized by a predator) followed by regeneration is common in:",
  ["Starfish (Asterias) and Brittle stars (Ophiura)", "Cockroaches", "Leeches", "Sponges"],
  0,
  "Starfish and brittle stars readily cast off an arm (autotomy) to distract predators, and can regenerate the missing limb from the remaining central disc."
);

// 10. Phylum Hemichordata MCQs
addMcq(
  "The body of Balanoglossus is divided into three distinct anatomical regions:",
  ["Proboscis, collar, and trunk", "Head, thorax, and abdomen", "Cephalothorax, visceral hump, and foot", "Prosoma, mesosoma, and metasoma"],
  0,
  "NCERT states: 'The body is cylindrical and is composed of an anterior proboscis, a collar and a long trunk.'"
);

addMcq(
  "The free-swimming ciliated larval stage of Balanoglossus is called the:",
  ["Tornaria larva", "Trochophore larva", "Veliger larva", "Amphiblastula"],
  0,
  "The tornaria larva of Balanoglossus is pelagic and ciliated, bearing striking morphological resemblance to the bipinnaria larva of starfish."
);

addMcq(
  "In Balanoglossus, the heart vesicle and central blood sinus are located in the:",
  ["Proboscis", "Collar", "Trunk", "Post-anal tail"],
  0,
  "The circulatory center (heart vesicle and central sinus) and proboscis gland are located dorsally inside the proboscis coelom."
);

addMcq(
  "Which of the following is an example of Phylum Hemichordata?",
  ["Balanoglossus and Saccoglossus", "Branchiostoma and Ascidia", "Petromyzon and Myxine", "Pristis and Trygon"],
  0,
  "Balanoglossus and Saccoglossus are the two primary genera of Phylum Hemichordata described in NCERT."
);

addMcq(
  "Balanoglossus is commonly known as the:",
  ["Acorn worm (or Tongue worm)", "Lugworm", "Tapeworm", "Arrow worm"],
  0,
  "Balanoglossus is popularly known as the acorn worm or tongue worm due to the conical shape of its proboscis resembling an oak acorn."
);

console.log(`Part 2 raw MCQs count: ${mcqData.length}`);


const extra72 = [
  {
    "q": "The most complex and common type of canal system in sponges, characterized by rounded flagellated chambers and branched incurrent/excurrent canals, is the:",
    "opts": [
      "Leuconoid type",
      "Asconoid type",
      "Syconoid type",
      "Rhagon type"
    ],
    "ans": 0,
    "exp": "The leuconoid canal system (found in Spongilla and Euspongia) is the most complex and efficient canal system, maximizing surface area for filter feeding."
  },
  {
    "q": "The simple vase-shaped sponge Leucosolenia exhibits which type of canal system?",
    "opts": [
      "Asconoid type",
      "Syconoid type",
      "Leuconoid type",
      "Rhagon type"
    ],
    "ans": 0,
    "exp": "Asconoid is the simplest canal system, seen in Leucosolenia, where water flows directly through ostia into the flagellated spongocoel and out the osculum."
  },
  {
    "q": "The gelatinous proteinaceous matrix that fills the space between the pinacoderm and choanoderm in sponges is called the:",
    "opts": [
      "Mesohyl (mesenchyme)",
      "Mesoglea",
      "Coelomic fluid",
      "Parenchyma"
    ],
    "ans": 0,
    "exp": "In sponges, the non-cellular gelatinous matrix between the outer pinacoderm and inner choanoderm is called the mesohyl, containing spicules, spongin, and amoebocytes."
  },
  {
    "q": "Which cells in sponges form the outer protective epidermal layer (pinacoderm)?",
    "opts": [
      "Pinacocytes",
      "Choanocytes",
      "Archaeocytes",
      "Thecocytes"
    ],
    "ans": 0,
    "exp": "Pinacocytes are flat, polygonal contractile cells that form the external protective surface layer (pinacoderm) of sponges."
  },
  {
    "q": "Tubular cells in sponges that pierce the body wall and form the incurrent pores (ostia) are:",
    "opts": [
      "Porocytes",
      "Choanocytes",
      "Sclerocytes",
      "Myocytes"
    ],
    "ans": 0,
    "exp": "Porocytes are specialized tubular cells spanning the body wall in asconoid sponges; each porocyte contains an internal lumen through which water enters as an ostium."
  },
  {
    "q": "Which cell type in sponges secretes the mineralized calcareous or siliceous spicules?",
    "opts": [
      "Sclerocytes (scleroblasts)",
      "Spongocytes",
      "Pinacocytes",
      "Collencytes"
    ],
    "ans": 0,
    "exp": "Sclerocytes are specialized amoebocytes that secrete crystalline mineral spicules of calcium carbonate or hydrated silica."
  },
  {
    "q": "Which cells in sponges secrete the flexible proteinaceous spongin fibers of the bath sponge skeleton?",
    "opts": [
      "Spongocytes (spongioblasts)",
      "Sclerocytes",
      "Choanocytes",
      "Archaeocytes"
    ],
    "ans": 0,
    "exp": "Spongocytes are specialized amoebocytes that secrete spongin, a fibrous collagenous protein that forms the pliable skeleton of keratose sponges like Euspongia."
  },
  {
    "q": "The colonial marine cnidarian Physalia (Portuguese man-of-war) exhibits polymorphism with multiple specialized zooids. The feeding zooids are termed:",
    "opts": [
      "Gastrozooids",
      "Dactylozooids",
      "Gonozooids",
      "Pneumatophores"
    ],
    "ans": 0,
    "exp": "In Physalia, gastrozooids are feeding polyps with mouths, dactylozooids are defensive stinging tentacles, gonozooids are reproductive clusters, and the pneumatophore is the gas float."
  },
  {
    "q": "In Physalia, the elongated stinging tentacles specialized for defense and capturing prey are called:",
    "opts": [
      "Dactylozooids",
      "Gastrozooids",
      "Gonozooids",
      "Hydranths"
    ],
    "ans": 0,
    "exp": "Dactylozooids are elongated, mouthless, tentacle-like defensive zooids densely armed with batteries of powerful nematocysts to capture prey."
  },
  {
    "q": "The gas-filled float that provides buoyancy in Physalia is the:",
    "opts": [
      "Pneumatophore",
      "Gonophore",
      "Hydrotheca",
      "Manubrium"
    ],
    "ans": 0,
    "exp": "The pneumatophore is a modified apical polyp filled with carbon monoxide, nitrogen, and oxygen that acts as a sail and float on the ocean surface."
  },
  {
    "q": "The nervous system of cnidarians like Hydra consists of:",
    "opts": [
      "A diffuse, unpolarized, non-myelinated nerve net in the epidermis and gastrodermis without a brain",
      "A dorsal hollow nerve cord",
      "A ventral solid nerve cord with paired ganglia",
      "A well-defined three-part brain"
    ],
    "ans": 0,
    "exp": "Cnidarians possess the most primitive nervous system in animals: an unpolarized interconnected network of neurons (nerve net) that transmits impulses in all directions without a brain."
  },
  {
    "q": "Rhopalia are specialized marginal sensory organs located along the bell margin of the jellyfish (Aurelia). They contain:",
    "opts": [
      "Statocysts (equilibrium) and ocelli (photoreception)",
      "Flame cells",
      "Radulae",
      "Choanocytes"
    ],
    "ans": 0,
    "exp": "Rhopalia are eight sensory complexes on the umbrella margin of Aurelia; each rhopalium contains a gravity-sensing statocyst and a light-detecting ocellus."
  },
  {
    "q": "In Aurelia (jellyfish), the free-swimming ciliated planula larva metamorphoses into a small sessile polyp called the:",
    "opts": [
      "Scyphistoma",
      "Ephyra",
      "Trochophore",
      "Hydranth"
    ],
    "ans": 0,
    "exp": "The planula larva settles and develops into a tiny sessile polyp termed the scyphistoma, which later undergoes transverse fission (strobilation) to produce juvenile jellyfish."
  },
  {
    "q": "During the life cycle of Aurelia, the process of transverse budding of the scyphistoma to produce free-swimming ephyra larvae is called:",
    "opts": [
      "Strobilation",
      "Metagenesis",
      "Ecdysis",
      "Regeneration"
    ],
    "ans": 0,
    "exp": "Strobilation is the transverse horizontal fission of the scyphistoma polyp into stacked saucer-like segments, each breaking free as an immature 8-armed jellyfish called an ephyra."
  },
  {
    "q": "The sense organ of equilibrium located at the aboral pole of a ctenophore is the:",
    "opts": [
      "Statocyst",
      "Ocellus",
      "Osphradium",
      "Rhopalium"
    ],
    "ans": 0,
    "exp": "At the aboral pole of a ctenophore sits an apical statocyst consisting of a calcareous statolith supported by four ciliated balancers, coordinating the beating of the eight comb rows."
  },
  {
    "q": "Which ctenophore lacks tentacles entirely and possesses a wide mouth to swallow other ctenophores whole?",
    "opts": [
      "Beroe",
      "Pleurobrachia",
      "Ctenoplana",
      "Hestia"
    ],
    "ans": 0,
    "exp": "Beroe is a sack-like tentacleless ctenophore with a gaping mouth lined with macrocilia, functioning as a voracious predator of other comb jellies."
  },
  {
    "q": "In flatworms like Planaria, rod-shaped inclusions in epidermal cells that swell in water to form protective mucus are:",
    "opts": [
      "Rhabdites",
      "Nematocysts",
      "Colloblasts",
      "Spicules"
    ],
    "ans": 0,
    "exp": "Rhabdites are membrane-bound rod-like bodies in the epidermis of free-living flatworms (turbellarians); when discharged into water, they swell into a viscous slimy mucus coat for protection."
  },
  {
    "q": "The ladder-like nervous system of flatworms consists of:",
    "opts": [
      "A pair of cerebral ganglia (brain) and two longitudinal nerve cords connected by transverse commissures",
      "A single dorsal hollow nerve cord",
      "A diffuse nerve net without any ganglia",
      "A ventral nerve cord with 10 pairs of ganglia"
    ],
    "ans": 0,
    "exp": "Platyhelminthes have a ladder-like nervous system: an anterior bilobed cerebral ganglion gives off longitudinal nerve cords that are linked crosswise by transverse commissures."
  },
  {
    "q": "In the pork tapeworm (Taenia solium), the larva encysted in pig muscular tissue is called:",
    "opts": [
      "Cysticercus cellulosae (bladder worm)",
      "Miracidium",
      "Rhabditiform larva",
      "Oncosphere"
    ],
    "ans": 0,
    "exp": "The cysticercus (bladder worm) is a fluid-filled sac containing an invaginated scolex encysted in pig muscle; humans develop taeniasis by eating improperly cooked measly pork."
  },
  {
    "q": "Neurocysticercosis in humans is caused when humans accidentally ingest:",
    "opts": [
      "Eggs/oncospheres of Taenia solium, acting as intermediate host",
      "Undercooked beef containing Taenia saginata",
      "Cercariae of liver fluke in pond water",
      "Adult male Ascaris worms"
    ],
    "ans": 0,
    "exp": "When humans ingest Taenia solium eggs (fecal-oral route), oncospheres hatch, cross the gut wall, and encyst as cysticerci in the brain, causing neurocysticercosis (seizures)."
  },
  {
    "q": "Beef tapeworm (Taenia saginata) differs from the pork tapeworm (Taenia solium) in that Taenia saginata:",
    "opts": [
      "Lacks hooks on its scolex (unarmed rostellum) and has a cow as intermediate host",
      "Possesses 10 rows of hooks",
      "Has a complete digestive system",
      "Lives in the human lung"
    ],
    "ans": 0,
    "exp": "Taenia saginata (beef tapeworm) has an unarmed scolex (four suckers but no rostellum or hooks) and uses cattle as its intermediate host, not pigs."
  },
  {
    "q": "Echinococcus granulosus is an extremely small tapeworm commonly known as the:",
    "opts": [
      "Dog tapeworm (hydatid worm)",
      "Beef tapeworm",
      "Fish tapeworm",
      "Blood fluke"
    ],
    "ans": 0,
    "exp": "Echinococcus granulosus (dog tapeworm) has only 3–4 segments; its larvae form dangerous, massive hydatid cysts in the liver and lungs of intermediate hosts (sheep, humans)."
  },
  {
    "q": "Body movement in roundworms (Aschelminthes) is restricted to an undulating, thrashing S-shaped motion because:",
    "opts": [
      "The body wall possesses only longitudinal muscles and completely lacks circular muscles",
      "They have no muscles at all",
      "They have only circular muscles",
      "Their coelom is filled with solid bone"
    ],
    "ans": 0,
    "exp": "Roundworms lack circular muscles in their body wall; their longitudinal muscles contract alternately on opposite sides against high pseudocoelomic hydrostatic pressure, causing thrashing locomotion."
  },
  {
    "q": "Chemoreceptors located on the lips of parasitic nematodes like Ascaris are called:",
    "opts": [
      "Amphids",
      "Phasmids",
      "Statocysts",
      "Ocelli"
    ],
    "ans": 0,
    "exp": "Amphids are complex anterior sensory depressions/pits located on the lateral lips of nematodes, functioning as primary chemoreceptors."
  },
  {
    "q": "Phasmids in nematodes are:",
    "opts": [
      "Posterior paired unicellular chemosensory gland-like organs",
      "Anterior eyespots",
      "Copulatory hooks on males",
      "Digestive enzymes"
    ],
    "ans": 0,
    "exp": "Phasmids are a pair of sensory glands located in the tail/caudal region of certain nematodes (Class Secernentea / Phasmidia), acting as chemosensors."
  },
  {
    "q": "Which of the following nematodes causes 'trichinosis' in humans by encysting in skeletal muscle fibers?",
    "opts": [
      "Trichinella spiralis",
      "Enterobius vermicularis",
      "Wuchereria bancrofti",
      "Ascaris lumbricoides"
    ],
    "ans": 0,
    "exp": "Trichinella spiralis is acquired by eating undercooked pork containing nurse-cell encapsulated larvae, which migrate to and encyst inside human striated skeletal muscle cells."
  },
  {
    "q": "The giant intestinal roundworm Ascaris lumbricoides inhabits which part of the human body?",
    "opts": [
      "Small intestine (jejunum and ileum)",
      "Large intestine",
      "Stomach",
      "Lungs permanently"
    ],
    "ans": 0,
    "exp": "Adult Ascaris lumbricoides reside in the lumen of the human small intestine, feeding on semi-digested host chyme."
  },
  {
    "q": "Dracunculus medinensis is commonly known as the:",
    "opts": [
      "Guinea worm (fiery serpent)",
      "Hookworm",
      "Eye worm",
      "Pinworm"
    ],
    "ans": 0,
    "exp": "Dracunculus medinensis is the guinea worm; gravid females emerge through painful cutaneous blisters in the lower limbs when submerged in freshwater."
  },
  {
    "q": "Loa loa is a filarial nematode transmitted by deer flies (Chrysops) and commonly known as the:",
    "opts": [
      "African eye worm",
      "Guinea worm",
      "Heartworm",
      "Whipworm"
    ],
    "ans": 0,
    "exp": "Loa loa is the African eye worm; adults migrate through subcutaneous tissues and are often seen visibly crawling across the subconjunctiva of the eye."
  },
  {
    "q": "In earthworms, which segments contain the lateral hearts that pump blood from the dorsal vessel to the ventral vessel?",
    "opts": [
      "Segments 7 and 9",
      "Segments 12 and 13",
      "Segments 4, 5, and 6",
      "Segments 14, 15, and 16"
    ],
    "ans": 0,
    "exp": "Pheretima possesses two pairs of lateral hearts in segments 7 and 9, and two pairs of lateral-esophageal hearts in segments 12 and 13."
  },
  {
    "q": "In earthworms, septal nephridia discharge excretory waste into the:",
    "opts": [
      "Lumen of the intestine (enteronephric condition to conserve water)",
      "Exterior directly through skin pores (exonephric)",
      "Dorsal blood vessel",
      "Coelomic fluid only"
    ],
    "ans": 0,
    "exp": "Septal nephridia open into excretory ducts that empty into the intestinal lumen (enteronephric), allowing water and ions to be reabsorbed by the rectal epithelium."
  },
  {
    "q": "Which nephridia in earthworms are integumentary and open directly to the outside via nephridiopores?",
    "opts": [
      "Integumentary nephridia (exonephric)",
      "Septal nephridia",
      "Pharyngeal nephridia",
      "Flame cells"
    ],
    "ans": 0,
    "exp": "Integumentary nephridia are scattered over the inner surface of the body wall from segment 3 to the last, discharging wastes directly onto the skin surface (exonephric)."
  },
  {
    "q": "The blood vascular system of an earthworm features a muscular, pulsating vessel that acts as the primary collecting and pumping vessel on the top side of the gut:",
    "opts": [
      "Dorsal blood vessel",
      "Ventral blood vessel",
      "Subneural vessel",
      "Lateral esophageal vessel"
    ],
    "ans": 0,
    "exp": "The dorsal blood vessel runs above the gut; it is muscular, possesses internal valves, and pumps blood forward toward the anterior end and hearts."
  },
  {
    "q": "Earthworms reproduce by:",
    "opts": [
      "Cross-fertilization between two mating hermaphroditic individuals",
      "Obligate self-fertilization within the same individual",
      "Asexual fragmentation only",
      "Parthenogenesis exclusively"
    ],
    "ans": 0,
    "exp": "Although earthworms are monoecious (hermaphroditic), they are protandrous (sperm matures before eggs) and always undergo mutual cross-fertilization during copulation."
  },
  {
    "q": "Spermathecae (seminal receptacles) in earthworms are located in segments 6, 7, 8, and 9. Their function is to:",
    "opts": [
      "Receive and store foreign sperm from a partner during copulation",
      "Produce own sperm",
      "Digest food particles",
      "Excrete nitrogenous waste"
    ],
    "ans": 0,
    "exp": "Four pairs of spermathecae in segments 6–9 store sperm received from the mating partner until cocoon deposition."
  },
  {
    "q": "In earthworms, the male genital pores are located ventro-laterally on segment:",
    "opts": [
      "18",
      "14",
      "10",
      "26"
    ],
    "ans": 0,
    "exp": "A pair of male genital apertures is situated on the ventrolateral aspect of segment 18; the single female genital pore is situated mid-ventrally on segment 14."
  },
  {
    "q": "The female genital pore in earthworms is a single aperture situated mid-ventrally on segment:",
    "opts": [
      "14",
      "18",
      "10",
      "12"
    ],
    "ans": 0,
    "exp": "NCERT states that a single median female genital aperture is located on segment 14."
  },
  {
    "q": "Fertilization in earthworms occurs inside:",
    "opts": [
      "A cocoon secreted by the clitellum and deposited in moist soil",
      "The coelom of the female",
      "The spermatheca",
      "The open air on leaves"
    ],
    "ans": 0,
    "exp": "The clitellum secretes a tough, membranous cocoon into which eggs and stored sperm are deposited; fertilization and direct development occur entirely inside the cocoon."
  },
  {
    "q": "Development in earthworms is:",
    "opts": [
      "Direct without any free-swimming larval stage",
      "Indirect with a trochophore larva",
      "Indirect with a planula larva",
      "Metamorphic through ephyra"
    ],
    "ans": 0,
    "exp": "Development in earthworms is direct: young miniature earthworms hatch out of the cocoon with no intermediate larval stage."
  },
  {
    "q": "Which class of Annelida exhibits indirect development with a free-swimming ciliated trochophore larva?",
    "opts": [
      "Polychaeta (e.g. Nereis)",
      "Oligochaeta (e.g. Pheretima)",
      "Hirudinea (e.g. Hirudinaria)",
      "All annelids have direct development"
    ],
    "ans": 0,
    "exp": "Marine polychaetes like Nereis produce a diamond-shaped, ciliated, planktonic trochophore larva during indirect development."
  },
  {
    "q": "The primary chemical component of the arthropod exoskeleton is:",
    "opts": [
      "Chitin (a polymer of N-acetylglucosamine)",
      "Cellulose",
      "Keratin",
      "Collagen"
    ],
    "ans": 0,
    "exp": "The arthropod cuticle is composed of chitin, a tough, unbranched nitrogenous polysaccharide formed of $\\beta$-(1,4)-linked N-acetylglucosamine units."
  },
  {
    "q": "The shedding of the old cuticle during growth in arthropods is controlled by the steroid hormone:",
    "opts": [
      "Ecdysone (moulting hormone)",
      "Juvenile hormone",
      "Insulin",
      "Thyroxine"
    ],
    "ans": 0,
    "exp": "Ecdysone, synthesized and released by the prothoracic glands, stimulates epidermal cells to digest the old endocuticle and secrete a new, larger exoskeleton."
  },
  {
    "q": "Insects typically possess how many pairs of jointed walking legs on their thoracic segments?",
    "opts": [
      "3 pairs (Hexapoda)",
      "4 pairs",
      "5 pairs",
      "10 pairs"
    ],
    "ans": 0,
    "exp": "Insects (subphylum Hexapoda) possess exactly three pairs of jointed legs attached to the prothorax, mesothorax, and metathorax, respectively."
  },
  {
    "q": "Spiders, scorpions, and ticks belong to Class Arachnida and possess:",
    "opts": [
      "4 pairs of walking legs and no antennae",
      "3 pairs of legs and one pair of antennae",
      "5 pairs of walking legs",
      "Wings for true flight"
    ],
    "ans": 0,
    "exp": "Arachnids have four pairs of walking legs (8 legs total), no antennae, and mouthparts modified into chelicerae and pedipalps."
  },
  {
    "q": "Which of the following arthropods possesses poison claws (maxillipeds) on the first body segment behind the head?",
    "opts": [
      "Centipede (Scolopendra)",
      "Millipede (Julus)",
      "Crab",
      "Grasshopper"
    ],
    "ans": 0,
    "exp": "Centipedes (Class Chilopoda) are carnivorous and possess a pair of modified front legs (forcipules/maxillipeds) bearing venom glands to paralyze prey."
  },
  {
    "q": "Millipedes (Class Diplopoda) differ from centipedes (Class Chilopoda) because millipedes:",
    "opts": [
      "Possess two pairs of walking legs per abdominal diplosegment and are herbivorous",
      "Are venomous carnivores with one pair of legs per segment",
      "Have three pairs of legs like insects",
      "Possess wings"
    ],
    "ans": 0,
    "exp": "Millipedes are slow-moving detritivores with fused double segments (diplosegments), each bearing two pairs of legs, unlike centipedes which have one pair per segment."
  },
  {
    "q": "Prawns (Penaeus) breathe using gills enclosed inside a branchial chamber covered by the:",
    "opts": [
      "Branchiostegite (carapace flap)",
      "Operculum",
      "Mantle",
      "Tergum"
    ],
    "ans": 0,
    "exp": "In decapod crustaceans like prawns, lateral extensions of the dorsal carapace called branchiostegites form gill chambers that enclose the respiratory gills."
  },
  {
    "q": "Which mouthparts of a cockroach are modified to act like an upper lip and lower lip, respectively?",
    "opts": [
      "Labrum and Labium",
      "Labium and Labrum",
      "Mandibles and Maxillae",
      "Hypopharynx and Epipharynx"
    ],
    "ans": 0,
    "exp": "The labrum acts as the upper lip, and the labium (fused second maxillae) acts as the lower lip in chewing and biting insects."
  },
  {
    "q": "The tongue-like median chitinous structure inside the mouth cavity of a cockroach is the:",
    "opts": [
      "Hypopharynx",
      "Epipharynx",
      "Galea",
      "Lacinia"
    ],
    "ans": 0,
    "exp": "The hypopharynx is a small, median, flexible, cylindrical lobe acting as a tongue, onto which the salivary duct opens."
  },
  {
    "q": "The respiratory openings on the lateral sides of the body in insects are called:",
    "opts": [
      "Spiracles (stigmata)",
      "Ostia",
      "Pores of Bojanus",
      "Nephridiopores"
    ],
    "ans": 0,
    "exp": "Insects have paired lateral body wall openings called spiracles (usually 10 pairs in cockroaches: 2 thoracic, 8 abdominal) regulated by muscular valves."
  },
  {
    "q": "In insects, oxygen is delivered directly to active muscular tissues without relying on blood because:",
    "opts": [
      "The fine fluid-filled terminal tracheoles penetrate directly between muscle cells",
      "Blood contains massive amounts of hemoglobin",
      "Insects do not use oxygen",
      "Cuticle absorbs oxygen through the feet"
    ],
    "ans": 0,
    "exp": "The tracheal network ramifies into microscopic terminal tracheoles that end directly against cellular membranes, delivering oxygen gas directly to mitochondria."
  },
  {
    "q": "Complete metamorphosis (holometabolous development) in insects consists of four successive stages:",
    "opts": [
      "Egg -> Larva (caterpillar/maggot) -> Pupa (cocoon/chrysalis) -> Adult (imago)",
      "Egg -> Nymph -> Adult",
      "Egg -> Adult directly",
      "Egg -> Pupa -> Larva -> Adult"
    ],
    "ans": 0,
    "exp": "Holometabolous insects (butterflies, bees, flies, beetles) undergo complete metamorphosis: Egg -> voracious feeding Larva -> resting Pupa -> sexually mature Adult (imago)."
  },
  {
    "q": "Incomplete metamorphosis (hemimetabolous development) seen in cockroaches and grasshoppers consists of:",
    "opts": [
      "Egg -> Nymph (instars) -> Adult",
      "Egg -> Larva -> Pupa -> Adult",
      "Egg -> Planula -> Adult",
      "Egg -> Tadpole -> Adult"
    ],
    "ans": 0,
    "exp": "In paurometabolous/hemimetabolous insects (like cockroaches), the young that hatch resemble miniature wingless adults and are called nymphs, which undergo multiple moults to reach adulthood."
  },
  {
    "q": "How many moults does a cockroach nymph undergo before developing into a mature winged adult?",
    "opts": [
      "About 13 times",
      "2 times",
      "20 times",
      "5 times"
    ],
    "ans": 0,
    "exp": "The nymph of the American cockroach (Periplaneta americana) grows through approximately 13 instars (moulting 13 times) to reach the adult stage with fully developed wings."
  },
  {
    "q": "Wing pads appear in cockroach nymphs at which developmental stage?",
    "opts": [
      "Next to last nymphal stage",
      "First nymphal stage",
      "Inside the egg",
      "Only after death"
    ],
    "ans": 0,
    "exp": "NCERT notes: 'The next to last nymphal stage has wing pads but only adult cockroaches have wings.'"
  },
  {
    "q": "The organ of Bojanus in molluscs is an excretory organ homologous to the:",
    "opts": [
      "Vertebrate kidney (metanephridia)",
      "Liver",
      "Spleen",
      "Pancreas"
    ],
    "ans": 0,
    "exp": "The Organ of Bojanus is a pair of metanephridial kidneys in molluscs that filter pericardial coelomic fluid and blood to excrete nitrogenous wastes."
  },
  {
    "q": "The iridescent inner layer of a pearl oyster shell made of microscopic overlapping plates of aragonite is the:",
    "opts": [
      "Nacreous layer (Mother-of-pearl)",
      "Periostracum",
      "Prismatic layer",
      "Hypostracum"
    ],
    "ans": 0,
    "exp": "The innermost shell layer is the nacreous layer or mother-of-pearl, composed of alternating thin lamellae of calcium carbonate (aragonite) and conchiolin that refract light iridescence."
  },
  {
    "q": "Torsion in gastropod molluscs (snails) is a developmental process involving a $180^\\circ$ rotation of the visceral mass, which results in:",
    "opts": [
      "The mantle cavity, gills, and anus being brought forward to a position above the head",
      "Complete loss of the head",
      "Formation of five arms",
      "Transformation into a bivalve"
    ],
    "ans": 0,
    "exp": "Torsion rotates the visceral hump $180^\\circ$ counter-clockwise during veliger larval development, bringing the mantle cavity, ctenidia, and anus to the anterior position directly over the head."
  },
  {
    "q": "The glochidium larva of freshwater mussels (Unio) is of biological interest because it:",
    "opts": [
      "Is a temporary ectoparasite that attaches to the gills and fins of freshwater fishes with hooked valves",
      "Feeds on coral polyps",
      "Swims in ocean currents for 10 years",
      "Transforms into a sea anemone"
    ],
    "ans": 0,
    "exp": "The microscopic glochidium larva of freshwater unionid bivalves clamps onto fish gills or fins with tiny hooks, living as a temporary ectoparasite while being dispersed upstream."
  },
  {
    "q": "Which cephalopod mollusc possesses eight arms and two longer retractile tentacles for capturing prey?",
    "opts": [
      "Loligo (Squid) and Sepia (Cuttlefish)",
      "Octopus",
      "Nautilus",
      "Pila"
    ],
    "ans": 0,
    "exp": "Decapod cephalopods like squids (Loligo) and cuttlefish (Sepia) possess ten appendages: eight shorter arms with suckers and two longer tentacles with clubbed ends."
  },
  {
    "q": "The only living cephalopod mollusc that possesses a fully developed, coiled, external, chambered gas-filled shell is:",
    "opts": [
      "Nautilus",
      "Octopus",
      "Sepia",
      "Loligo"
    ],
    "ans": 0,
    "exp": "Nautilus is a famous 'living fossil' cephalopod possessing a spirally coiled external shell divided into gas-filled buoyant chambers connected by a siphuncle."
  },
  {
    "q": "In starfish (Asterias), each tube foot (podium) of the water vascular system consists of three parts:",
    "opts": [
      "Ampulla, podium (stalk), and sucker",
      "Madreporite, stone canal, and ring canal",
      "Cilia, flagellum, and collar",
      "Hook, sucker, and rostellum"
    ],
    "ans": 0,
    "exp": "Each tube foot consists of a rounded muscular bulb (ampulla) inside the coelom, a tubular middle stalk (podium), and a terminal cup-like adhesive sucker."
  },
  {
    "q": "The dermal branchiae (papulae or skin gills) of starfish function in:",
    "opts": [
      "Respiratory gas exchange and excretion by diffusion",
      "Secreting poison",
      "Filtering sand",
      "Forming eggs"
    ],
    "ans": 0,
    "exp": "Dermal branchiae (papulae) are soft, thin-walled, hollow finger-like projections of the coelomic wall extending through gaps in calcareous ossicles for respiration and waste diffusion."
  },
  {
    "q": "Which class of echinoderms has its arms sharply demarcated from the central disc and uses them for rapid wriggling locomotion?",
    "opts": [
      "Ophiuroidea (Brittle stars, e.g. Ophiura)",
      "Asteroidea (Starfish)",
      "Crinoidea (Sea lilies)",
      "Echinoidea"
    ],
    "ans": 0,
    "exp": "In Class Ophiuroidea (brittle stars), the five slender, flexible, jointed arms are distinctly set off from the small circular central disc, allowing rapid serpent-like locomotion."
  },
  {
    "q": "Sea urchins (Echinus) and sand dollars belong to which class of Echinodermata?",
    "opts": [
      "Echinoidea",
      "Asteroidea",
      "Ophiuroidea",
      "Holothuroidea"
    ],
    "ans": 0,
    "exp": "Class Echinoidea includes sea urchins and heart urchins, characterized by a globose or disc-shaped test of fused calcareous plates bearing movable spines, lacking free arms."
  },
  {
    "q": "Which echinoderm class is characterized by an upward-facing mouth surrounded by feathery pinnulated arms on a stalk?",
    "opts": [
      "Crinoidea (Sea lilies and Feather stars)",
      "Holothuroidea",
      "Echinoidea",
      "Asteroidea"
    ],
    "ans": 0,
    "exp": "Crinoids (sea lilies) are primitive echinoderms where the oral surface with both mouth and anus faces upward, surrounded by a crown of branched, food-trapping feathery arms."
  },
  {
    "q": "The free-swimming ciliated larva of starfish (Asterias) is the:",
    "opts": [
      "Bipinnaria larva (followed by brachiolaria)",
      "Ophiopluteus larva",
      "Echinopluteus larva",
      "Auricularia larva"
    ],
    "ans": 0,
    "exp": "Starfish embryos develop first into a bilaterally symmetrical bipinnaria larva with ciliated locomotor bands, which later transforms into a brachiolaria larva with anchoring arms."
  },
  {
    "q": "The echinoderm larva characterized by four to six pairs of long, calcareous-rod supported arms is the:",
    "opts": [
      "Echinopluteus larva (of sea urchins)",
      "Tornaria larva",
      "Planula larva",
      "Trochophore larva"
    ],
    "ans": 0,
    "exp": "The echinopluteus larva of sea urchins (Echinoidea) possesses prominent, delicate, ciliated arms supported by internal calcareous skeletal rods."
  },
  {
    "q": "The collar cord (neurochord) of Balanoglossus is situated in the:",
    "opts": [
      "Collar region",
      "Proboscis only",
      "Post-anal tail",
      "Spongocoel"
    ],
    "ans": 0,
    "exp": "In Balanoglossus, the collar contains a hollow dorsal invagination of the epidermis called the collar cord or neurochord, which has sometimes been compared to a dorsal nerve cord."
  },
  {
    "q": "In Balanoglossus, water for respiration enters through the mouth and leaves through the:",
    "opts": [
      "U-shaped pharyngeal gill slits",
      "Osculum",
      "Proboscis pore",
      "Anus"
    ],
    "ans": 0,
    "exp": "Water taken in through the mouth passes into the branchial region of the pharynx and exits through numerous paired U-shaped lateral gill slits that open into branchial sacs."
  },
  {
    "q": "Which of the following is an accurate evolutionary sequence of non-chordate phyla from simplest to most advanced?",
    "opts": [
      "Porifera -> Cnidaria -> Ctenophora -> Platyhelminthes -> Aschelminthes -> Annelida -> Arthropoda -> Mollusca -> Echinodermata -> Hemichordata",
      "Echinodermata -> Porifera -> Arthropoda -> Annelida -> Platyhelminthes",
      "Aschelminthes -> Platyhelminthes -> Annelida -> Cnidaria -> Porifera",
      "Hemichordata -> Mollusca -> Arthropoda -> Annelida -> Porifera"
    ],
    "ans": 0,
    "exp": "The canonical phylogenetic sequence follows the increasing complexity of cellular -> tissue -> organ -> organ system organisation, symmetry, germ layers, and coelom origin."
  }
];
extra72.forEach(m => addMcq(m.q, m.opts, m.ans, m.exp));

// Take exactly 154 MCQs

addMcq(
  "The scientific name of the cattle leech commonly studied as a model annelid in India is:",
  ["Hirudinaria granulosa", "Pheretima posthuma", "Nereis virens", "Lumbricus terrestris"],
  0,
  "Hirudinaria granulosa is the Indian cattle leech, a sanguivorous ectoparasite belonging to Class Hirudinea of Phylum Annelida."
);

addMcq(
  "Which of the following animals has an internal shell called the cuttlebone, used in bird cages as a calcium supplement?",
  ["Sepia (Cuttlefish)", "Loligo (Squid)", "Octopus", "Pila (Apple snail)"],
  0,
  "Sepia possesses an internal porous calcareous cuttlebone that provides buoyancy and is commercially collected as cuttlebone for caged birds."
);

const selectedMcqs = mcqData.slice(0, 154);

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
const mcqQuestions = selectedMcqs.map(m => ({
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
console.log(`Part 2 total questions: ${allQuestions.length} (AR: ${arQuestions.length}, MCQ: ${mcqQuestions.length})`);

let katexErrors = 0;
function testKatex(text, label) {
  const matches = text.matchAll(/\$([^\$]+)\$/g);
  for (const match of matches) {
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

console.log(`Part 2 KaTeX errors: ${katexErrors}`);

if (katexErrors === 0 && allQuestions.length === 180) {
  const outPath = path.join(__dirname, 'data_zoology_animal_kingdom_part2.js');
  const fileContent = `// Auto-generated data for Zoology Animal Kingdom Part 2: ${SUBTOPIC}\nmodule.exports = ${JSON.stringify(allQuestions, null, 2)};\n`;
  fs.writeFileSync(outPath, fileContent, 'utf8');
  console.log(`Successfully wrote ${outPath}`);
} else {
  console.error("Validation failed! Not writing output.");
  process.exit(1);
}
