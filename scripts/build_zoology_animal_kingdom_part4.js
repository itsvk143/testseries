const fs = require('fs');
const path = require('path');
const katex = require('katex');

const SUBTOPIC = "Tetrapoda (Amphibia, Reptilia, Aves, Mammalia)";
const CHAPTER = "Animal Kingdom";
const SUBJECT = "Zoology";

const arDirections = "In the following questions, a statement of Assertion (A) is followed by a statement of Reason (R).\nChoose the correct option:\n(1) Both (A) and (R) are true and (R) is the correct explanation of (A)\n(2) Both (A) and (R) are true but (R) is not the correct explanation of (A)\n(3) (A) is true but (R) is false\n(4) (A) is false but (R) is true";

const arOptions = [
  "Both (A) and (R) are true and (R) is the correct explanation of (A)",
  "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
  "(A) is true but (R) is false",
  "(A) is false but (R) is true"
];

// 26 AR questions for Subtopic 4
const arData = [
  {
    a: "Amphibians cannot survive permanently in arid terrestrial habitats far from water.",
    r: "Amphibian skin is moist and scaleless, making them vulnerable to rapid desiccation, and they depend on external water for reproduction and larval development.",
    ans: 0,
    exp: "Amphibians lack a cornified waterproof skin (they have moist glandular skin) and lay non-cleidoic eggs without shells that must be deposited in water to prevent drying out, tying them obligately to aquatic or damp environments."
  },
  {
    a: "In amphibians, the alimentary canal, urinary, and reproductive tracts open into a common chamber called the cloaca.",
    r: "The cloaca opens to the exterior through the cloacal aperture (vent).",
    ans: 1,
    exp: "Both (A) and (R) are true NCERT facts. In amphibians, rectum, urinary ducts, and gonoducts all terminate in a shared terminal chamber called the cloaca, which opens to the outside through the vent, but (R) describes its external connection rather than explaining why it serves three tracts."
  },
  {
    a: "Frogs breathe through their moist skin during hibernation and aestivation.",
    r: "Cutaneous respiration allows oxygen to diffuse directly through the vascularized, mucus-coated skin into capillary blood while the frog is dormant.",
    ans: 0,
    exp: "During winter sleep (hibernation) and summer sleep (aestivation), frogs bury themselves in mud and suspend pulmonary and buccopharyngeal breathing, relying entirely on cutaneous respiration through their moist skin."
  },
  {
    a: "Reptiles are the first true terrestrial vertebrates.",
    r: "Reptiles evolved a dry, cornified, scaly skin that prevents desiccation and cleidoic eggs with protective shells and extra-embryonic membranes.",
    ans: 0,
    exp: "Reptiles conquered dry land by evolving a water-impermeable keratinized scaly integument and cleidoic (shelled) eggs that enclose the embryo in an internal aquatic environment (amnion), breaking the dependence on water for reproduction."
  },
  {
    a: "The heart of crocodiles is completely 4-chambered.",
    r: "Unlike most reptiles that possess a 3-chambered heart with an incomplete interventricular septum, crocodiles have fully separated right and left ventricles.",
    ans: 0,
    exp: "While typical reptiles possess a 3-chambered heart with an incompletely divided single ventricle, crocodilians (crocodiles, alligators, gharials) possess an anatomically complete 4-chambered heart with two atria and two ventricles."
  },
  {
    a: "Snakes and lizards shed their epidermal scales periodically as skin cast (ecdysis).",
    r: "Periodic shedding of the cornified stratum corneum allows for body growth and eliminates damaged skin and external parasites.",
    ans: 0,
    exp: "Squamate reptiles (snakes and lizards) shed their keratinized outer epidermal layer (stratum corneum) as a single piece or in flakes during ecdysis to accommodate physical growth and renew worn scales."
  },
  {
    a: "Long bones in birds are pneumatic.",
    r: "Pneumatic bones contain internal air cavities connected to respiratory air sacs, significantly reducing skeletal weight without compromising structural strength for flight.",
    ans: 0,
    exp: "Pneumatic bones in birds possess thin, dense outer walls and hollow internal cavities braced with trabeculae and penetrated by extensions of air sacs, reducing body density for aerodynamic flight."
  },
  {
    a: "Birds do not possess teeth in their jaws.",
    r: "In birds, jaws are modified into a lightweight horny beak (rhamphotheca), and muscular gizzards contain ingested stones that grind food.",
    ans: 0,
    exp: "To minimize anterior flight weight, birds replaced heavy jaws, teeth, and chewing musculature with a lightweight keratinized beak, delegating mechanical mastication to the internal muscular gizzard."
  },
  {
    a: "Air sacs in birds make respiration extraordinarily efficient.",
    r: "Air sacs act as bellows that pump continuous, unidirectional, fresh oxygen-rich air through the parabronchi of the lungs during both inhalation and exhalation.",
    ans: 0,
    exp: "Birds possess a unique respiratory system where non-vascularized air sacs act as bellows, driving a continuous unidirectional stream of air through the rigid lung capillaries during both inspiration and expiration, preventing dead air accumulation."
  },
  {
    a: "Birds and mammals are homoiothermous (warm-blooded) animals.",
    r: "They are capable of maintaining a constant internal body temperature independent of fluctuations in the ambient environmental temperature.",
    ans: 0,
    exp: "Homoiotherms (endotherms like birds and mammals) generate internal metabolic heat and use physiological mechanisms (feathers, fur, shivering, sweating, panting) to maintain a stable core body temperature."
  },
  {
    a: "In female birds, usually only the left ovary and left oviduct are functionally developed.",
    r: "Atrophy of the right ovary and oviduct is an aerodynamic adaptation to reduce body weight for powered flight.",
    ans: 0,
    exp: "To lighten the body and conserve aerodynamic balance, modern female birds undergo unilateral regression of the right reproductive tract during embryonic development, retaining only a single functional left ovary and oviduct."
  },
  {
    a: "The urinary bladder is absent in birds (except the ostrich).",
    r: "Birds excrete semi-solid uric acid paste, eliminating the need to store liquid urine and reducing flight weight.",
    ans: 0,
    exp: "Uricotelic excretion allows birds to eliminate nitrogenous wastes with minimal water as an insoluble white paste. Storing liquid urine in a bladder would add unnecessary flight ballast, so the bladder is absent."
  },
  {
    a: "The presence of milk-producing mammary glands is the most unique mammalian characteristic.",
    r: "Female mammals nourish their newborn young with nutrient-rich milk secreted by mammary glands.",
    ans: 0,
    exp: "Class Mammalia derives its name from the presence of mammary glands (modified apocrine sweat glands) that secrete milk containing lactose, lipids, proteins, and antibodies to sustain neonates."
  },
  {
    a: "Ornithorhynchus (duck-billed platypus) is an exceptional mammal because it is oviparous.",
    r: "Although it lays eggs, Ornithorhynchus is classified as a true mammal because it possesses mammary glands, hair, and a 4-chambered heart.",
    ans: 0,
    exp: "Prototherians (monotremes like Ornithorhynchus and Echidna) are primitive egg-laying (oviparous) mammals. They possess hallmark mammalian traits (fur, mammary glands, single dentary bone, 3 ear ossicles), proving they are true mammals."
  },
  {
    a: "Mammals possess a muscular diaphragm that separates the thoracic cavity from the abdominal cavity.",
    r: "Contraction and flattening of the diaphragm increases the vertical volume of the thoracic cavity, generating negative pressure that draws air into the lungs.",
    ans: 0,
    exp: "The muscular diaphragm is an exclusive mammalian anatomical structure; its contraction pulls the thoracic floor downward, creating negative intrathoracic pressure essential for pulmonary ventilation."
  },
  {
    a: "Mature red blood cells (erythrocytes) in most mammals are enucleated and biconcave.",
    r: "Loss of the nucleus and organelles provides more internal space for hemoglobin packing and the biconcave shape optimizes the surface area-to-volume ratio for gas exchange.",
    ans: 0,
    exp: "Mammalian erythrocytes eject their nuclei during erythropoiesis to maximize hemoglobin carrying capacity, while the biconcave disc shape shortens diffusion distances for oxygen."
  },
  {
    a: "The heart of adult birds has a right aortic arch, whereas the heart of adult mammals has a left aortic arch.",
    r: "Both birds and mammals possess completely separated 4-chambered hearts, but evolved endothermy and systemic arch separation independently from different ancestral reptilian lineages.",
    ans: 0,
    exp: "Birds evolved from archosaurian diapsid reptiles and retained the right systemic aortic arch, whereas mammals evolved from synapsid therapsids and retained the left systemic aortic arch."
  },
  {
    a: "Chameleon can change its skin colour to match its background (metachrosis).",
    r: "Chameleons possess specialized pigment-containing dermal cells called chromatophores controlled by the autonomic nervous system and hormones.",
    ans: 0,
    exp: "Metachrosis in chameleons is driven by the dispersion or aggregation of melanin and carotenoid pigments within dermal melanophores, xanthophores, and iridophores under autonomic and hormonal control."
  },
  {
    a: "Wall lizards (Hemidactylus) can walk upside down on vertical walls and smooth ceilings.",
    r: "Their digits bear ventral subdigital pads covered with millions of microscopic keratinous setae that generate intermolecular van der Waals forces with the surface.",
    ans: 0,
    exp: "The adhesive pads on the feet of geckos (Hemidactylus) possess millions of spatulate microscopic setae that create vast surface area, generating physical van der Waals attractions that adhere to vertical surfaces."
  },
  {
    a: "Balaenoptera (blue whale) and Delphinus (common dolphin) are mammals, not fishes.",
    r: "They are warm-blooded (homoiothermous), breathe air using lungs via dorsal blowholes, possess mammary glands, and give birth to live calves.",
    ans: 0,
    exp: "Whales and dolphins are cetacean placental mammals: they breathe atmospheric air with lungs, have 4-chambered hearts, nurse their young with milk from mammary glands, and possess vestigial hairs."
  },
  {
    a: "Pteropus (flying fox / fruit bat) is classified as a mammal despite having wings for powered flight.",
    r: "Its wings are made of a membranous fold of skin (patagium) supported by elongated finger digits, and it possesses fur, pinnae, and mammary glands.",
    ans: 0,
    exp: "Bats (order Chiroptera) are true mammals: their flight membrane (patagium) is stretched over four elongated digits of the hand, and they nurse their live-born pups with milk from pectoral mammary glands."
  },
  {
    a: "Tadpoles of frogs excrete ammonia, whereas adult frogs excrete urea.",
    r: "Tadpoles live in abundant fresh water where toxic ammonia can be flushed away freely, whereas terrestrial adult frogs must conserve body water by converting ammonia to less toxic urea.",
    ans: 0,
    exp: "During metamorphosis from an aquatic tadpole to a terrestrial adult frog, the excretory physiology shifts from ammonotelism to ureotelism to adapt to water conservation on land."
  },
  {
    a: "Reptiles, birds, and mammals are grouped together as 'Amniota'.",
    r: "The developing embryos of these classes are enclosed within extra-embryonic protective membranes, notably the fluid-filled amnion.",
    ans: 0,
    exp: "Amniota comprises reptiles, birds, and mammals; their embryos develop four extra-embryonic membranes (amnion, chorion, allantois, and yolk sac), where the amnion provides an internal aquatic fluid cushion that prevents desiccation."
  },
  {
    a: "The crop in birds functions as an organ of vocalization.",
    r: "The crop contains the vocal cords that vibrate to produce birdsong.",
    ans: 3,
    exp: "Assertion and Reason are false. The crop is a dilation of the esophagus used for food storage and softening; vocalization in birds is produced exclusively by the syrinx at the base of the trachea."
  },
  {
    a: "Mammals possess thecodont, heterodont, and diphyodont dentition.",
    r: "Teeth are rooted in bony jaw sockets, differentiated into incisors, canines, premolars, and molars, and develop as two successive sets (deciduous and permanent).",
    ans: 0,
    exp: "Mammalian dentition is thecodont (teeth in jaw sockets), heterodont (morphologically varied for diverse feeding tasks), and diphyodont (two sequential sets: milk teeth and adult teeth)."
  },
  {
    a: "Ichthyophis is a limbless amphibian.",
    r: "Ichthyophis possesses a burrowing serpentine body that has lost limbs and limb girdles through secondary adaptation to a subterranean fossorial lifestyle.",
    ans: 0,
    exp: "Ichthyophis belongs to order Gymnophiona (Apoda); it is a blindworm or caecilian that has completely lost both pairs of limbs and girdles as an adaptation for burrowing in damp soil."
  }
];

// Fix assertion 24 if needed:
arData[23] = {
  a: "The syrinx in birds is the specialized vocal organ responsible for producing birdsong.",
  r: "The syrinx is situated at the junction of the trachea and bronchi, where vibrating tympaniform membranes generate sound.",
  ans: 0,
  exp: "In birds, sound is produced by the syrinx, a specialized cartilaginous chamber with vibrating membranes and intrinsic muscles located at the bifurcation of the trachea into the primary bronchi."
};

console.log("Built 26 AR questions for Part 4.");

const mcqData = [];
function addMcq(q, opts, ans, exp) {
  mcqData.push({ q, opts, ans, exp });
}

// MCQs for Part 4
addMcq(
  "Which of the following classes of vertebrates belongs to Superclass Tetrapoda?",
  ["Amphibia, Reptilia, Aves, and Mammalia", "Chondrichthyes and Osteichthyes", "Cyclostomata and Pisces", "Urochordata and Cephalochordata"],
  0,
  "Superclass Tetrapoda encompasses all four-limbed gnathostome vertebrates: Amphibia, Reptilia, Aves, and Mammalia."
);

addMcq(
  "In amphibians, the body is typically divisible into:",
  ["Head and trunk (tail may be present in some)", "Head, neck, and thorax", "Cephalothorax and abdomen", "Visceral hump and foot"],
  0,
  "Amphibians possess a body divided into head and trunk. A tail is absent in frogs and toads, but present in salamanders."
);

addMcq(
  "Which of the following amphibians possesses a persistent tail throughout adult life?",
  ["Salamandra (Salamander)", "Rana (Frog)", "Bufo (Toad)", "Hyla (Tree frog)"],
  0,
  "Salamandra belongs to order Urodela (Caudata) and retains a long, well-developed tail throughout adult life."
);

addMcq(
  "Which of the following is a limbless amphibian?",
  ["Ichthyophis", "Hyla", "Salamandra", "Bufo"],
  0,
  "Ichthyophis (order Apoda / Gymnophiona) is a limbless, blind, burrowing amphibian commonly called a caecilian."
);

addMcq(
  "Hyla is commonly known as the:",
  ["Tree frog", "Toad", "Bullfrog", "Flying frog"],
  0,
  "Hyla is commonly known as the tree frog; its toe tips bear adhesive discs that allow it to climb tree trunks and leaves."
);

addMcq(
  "The skin of amphibians is characterized by being:",
  ["Moist and scaleless with mucous glands", "Dry with cornified epidermal scales", "Covered with placoid scales", "Covered with feathers"],
  0,
  "Amphibians possess a smooth, moist skin devoid of external scales (except microscopic dermal scales in caecilians), rich in mucous and poison glands."
);

addMcq(
  "In frogs, the ear is represented externally by the:",
  ["Tympanum", "Pinna", "External auditory meatus", "Cochlea"],
  0,
  "Amphibians lack an external ear or pinna; the ear is represented on the surface of the head by a flat, circular membrane called the tympanum (eardrum)."
);

addMcq(
  "How many chambers are present in the heart of an adult amphibian (like a frog)?",
  ["3 chambers (two atria and one ventricle)", "2 chambers", "4 chambers", "Single chamber"],
  0,
  "Amphibians possess a 3-chambered heart consisting of two separate thin-walled atria (right and left) and a single muscular ventricle that pumps mixed blood."
);

addMcq(
  "In amphibians, during metamorphosis of the aquatic tadpole into a terrestrial adult, the respiratory organ changes from:",
  ["Gills to lungs and moist skin", "Lungs to gills", "Book lungs to tracheae", "Cuticle to air sacs"],
  0,
  "Aquatic amphibian tadpoles breathe using external or internal branchial gills, which are resorbed during metamorphosis as functional lungs and vascularized skin take over."
);

addMcq(
  "Metamorphosis of an amphibian tadpole into an adult frog is obligately stimulated by which hormone?",
  ["Thyroxine (requiring iodine in water)", "Insulin", "Adrenaline", "Growth hormone"],
  0,
  "Thyroxine secreted by the thyroid gland triggers metamorphosis; if iodine is deficient in the pond water, tadpoles cannot synthesize thyroxine and fail to metamorphose (axolotl neoteny)."
);

addMcq(
  "Class Reptilia derives its name from Latin 'repere' or 'reptum' meaning to:",
  ["Creep or crawl", "Fly in air", "Swim in water", "Jump high"],
  0,
  "The name Reptilia refers to their characteristic creeping, sprawling, or crawling mode of terrestrial locomotion."
);

addMcq(
  "Which of the following is an adaptation that allowed reptiles to live successfully in dry terrestrial environments?",
  [
    "Body covered by dry, cornified skin with epidermal scales or scutes",
    "Moist scaleless skin for cutaneous respiration",
    "External fertilization in freshwater lakes",
    "Gills in adult stage"
  ],
  0,
  "A dry, cornified skin covered with keratinized epidermal scales or scutes acts as a barrier preventing evaporative water loss, enabling life on arid land."
);

addMcq(
  "In typical reptiles, the heart is:",
  [
    "3-chambered with an incompletely divided ventricle",
    "Strictly 2-chambered",
    "Completely 4-chambered in all species",
    "Single-chambered"
  ],
  0,
  "In most reptiles (lizards, snakes, turtles), the heart has two atria and an incompletely partitioned ventricle, allowing some mixing of oxygenated and deoxygenated blood."
);

addMcq(
  "Which of the following reptiles possesses a completely 4-chambered heart with two separate ventricles?",
  ["Crocodilus (Crocodile)", "Calotes (Garden lizard)", "Naja (Cobra)", "Testudo (Tortoise)"],
  0,
  "Crocodilians (crocodiles, alligators, caimans, and gharials) possess an anatomically complete 4-chambered heart with two separate atria and two distinct ventricles."
);

addMcq(
  "Which of the following is a poisonous snake found in India?",
  ["Naja (Cobra), Bungarus (Krait), and Vipera (Viper)", "Python and Typhlops", "Ptyas (Rat snake)", "Eryx (Sand boa)"],
  0,
  "NCERT explicitly lists Naja (cobra), Bungarus (krait), and Vipera (viper) as representative venomous snakes of India."
);

addMcq(
  "The venom of the Indian cobra (Naja naja) and common krait (Bungarus caeruleus) is primarily:",
  ["Neurotoxic (paralyzing respiratory muscles and nervous transmission)", "Hemotoxic", "Vasodilator only", "Digestive only"],
  0,
  "Cobra and krait venoms are intensely neurotoxic, binding to post-synaptic acetylcholine receptors and causing flaccid paralysis of respiratory muscles."
);

addMcq(
  "The venom of vipers (Vipera / Daboia russelii) is primarily:",
  ["Hemotoxic and vasculotoxic (causing massive hemorrhage and tissue necrosis)", "Neurotoxic", "Curare-like", "Harmless"],
  0,
  "Viper venom contains hemotoxins, coagulants, and metalloproteinases that destroy vascular endothelium, causing extensive intravascular clotting, internal bleeding, and necrosis."
);

addMcq(
  "Chelone and Testudo are commonly known as:",
  ["Turtle (marine) and Tortoise (terrestrial), respectively", "Tortoise and Crocodile", "Garden lizard and Chameleon", "Wall lizard and Monitor lizard"],
  0,
  "Chelone is the marine turtle with paddle-shaped flippers, and Testudo is the terrestrial tortoise with heavy claws and a domed protective shell."
);

addMcq(
  "Chameleon is famous for its prehensile tail, zygodactylous grasping feet, independently mobile eyes, and:",
  ["Ability to change skin colour (camouflage)", "Ability to fly", "Presence of feathers", "4-chambered heart"],
  0,
  "Chameleons possess zygodactylous pincer feet for grasping branches, a prehensile tail, stereoscopic independently rotating eyes, and physiological color change (metachrosis)."
);

addMcq(
  "Sphenodon punctatus (Tuatara) of New Zealand is famous as a living fossil because it belongs to which ancient reptilian order?",
  ["Rhynchocephalia", "Squamata", "Crocodilia", "Chelonia"],
  0,
  "Sphenodon (Tuatara) is the sole surviving genus of the ancient Mesozoic reptilian order Rhynchocephalia, possessing an intact diapsid skull and prominent parietal third eye."
);

addMcq(
  "Which characteristic is unique to Class Aves (Birds) and not found in any other living class of vertebrates?",
  ["Presence of feathers", "Laying cleidoic eggs", "4-chambered heart", "Lungs for respiration"],
  0,
  "Feathers (modified epidermal structures formed of beta-keratin) are the defining autapomorphy found exclusively in Class Aves."
);

addMcq(
  "The forelimbs of birds are modified into:",
  ["Wings for flight", "Flippers with 10 digits", "Grasping claws with opposable thumbs", "Digging shovels"],
  0,
  "In birds, the forelimbs are aerodynamically modified into wings, with reduced and fused carpals, metacarpals, and phalanges to support flight feathers."
);

addMcq(
  "The only cutaneous gland present in the skin of birds is the:",
  ["Uropygial gland (preen gland or oil gland) at the base of the tail", "Sweat gland", "Sebaceous gland across the back", "Mammary gland"],
  0,
  "The avian skin is thin, dry, and devoid of glands except for the bilobed uropygial (preen) gland located dorsally at the base of the tail, which secretes oil for preening and waterproofing feathers."
);

addMcq(
  "In birds, which additional chambers are present in the digestive tract?",
  ["Crop and Gizzard", "Rumen and Reticulum", "Spiral valve and Rectal gland", "Cecum and Appendix only"],
  0,
  "The avian digestive tract possesses a dilated pouch of the esophagus called the crop (for food storage and softening) and a thick muscular gizzard lined with koilin (for grinding food)."
);

addMcq(
  "The sound-producing vocal organ of birds is the:",
  ["Syrinx", "Larynx", "Pharynx", "Vocal cord in epiglottis"],
  0,
  "Birds produce melodic vocalizations using the syrinx, a specialized structure situated at the bifurcation of the trachea into the primary bronchi."
);

addMcq(
  "Which of the following birds is flightless (Ratitae)?",
  ["Struthio (Ostrich)", "Columba (Pigeon)", "Corvus (Crow)", "Psittacula (Parrot)"],
  0,
  "Struthio camelus (ostrich) is a flightless running bird (ratite) possessing a flat sternum without a flight keel."
);

addMcq(
  "Aptenodytes is the scientific name for the:",
  ["Penguin", "Ostrich", "Kiwi", "Vulture"],
  0,
  "Aptenodytes (e.g. Aptenodytes forsteri, Emperor penguin) is the flightless marine penguin of the southern oceans, whose wings are modified into swimming flippers."
);

addMcq(
  "The national bird of India is:",
  ["Pavo cristatus (Peacock)", "Corvus splendens (Crow)", "Columba livia (Pigeon)", "Psittacula krameri (Parrot)"],
  0,
  "Pavo cristatus (the Indian blue peafowl/peacock) is the national bird of India."
);

addMcq(
  "Neophron is commonly known as the:",
  ["Vulture", "Kite", "Eagle", "Falcon"],
  0,
  "Neophron percnopterus (Egyptian vulture) is commonly known as the vulture, a scavenger bird highlighted in NCERT."
);

addMcq(
  "Which of the following bones in birds is fused into a rigid V-shaped 'wishbone' that acts as an elastic spring during wing flapping?",
  ["Furcula (fused clavicles)", "Pygostyle", "Synsacrum", "Keel"],
  0,
  "The furcula (wishbone) is formed by the mid-ventral fusion of the paired clavicles; it flexes and springs during flight strokes, storing and releasing aerodynamic energy."
);

addMcq(
  "The keel (carina) of the avian sternum serves as the site of attachment for which major flight muscles?",
  ["Pectoralis major (depressor) and Pectoralis minor / Supracoracoideus (elevator)", "Biceps and triceps", "Diaphragm", "Gluteus maximus"],
  0,
  "The enlarged median blade-like keel of the avian breastbone (sternum) anchors the powerful flight muscles: pectoralis major (powers the downstroke) and supracoracoideus (powers the upstroke)."
);

addMcq(
  "Which of the following is an egg-laying (oviparous) mammal?",
  ["Ornithorhynchus (Duck-billed platypus)", "Macropus (Kangaroo)", "Pteropus (Flying fox)", "Balaenoptera (Blue whale)"],
  0,
  "Ornithorhynchus (duck-billed platypus) belongs to Subclass Prototheria (order Monotremata); it is an oviparous mammal that lays leathery-shelled eggs."
);

addMcq(
  "Tachyglossus (Echidna) is commonly known as the:",
  ["Spiny anteater", "Duck-billed platypus", "Armadillo", "Pangolin"],
  0,
  "Tachyglossus is the spiny anteater, an oviparous monotreme mammal covered with defensive quills."
);

addMcq(
  "Macropus is commonly known as the:",
  ["Kangaroo", "Flying fox", "Platypus", "Koala"],
  0,
  "Macropus is the scientific name of the Australian marsupial kangaroo."
);

addMcq(
  "Pteropus is commonly known as the:",
  ["Flying fox (Fruit bat)", "Flying squirrel", "Vampire bat", "Flying fish"],
  0,
  "Pteropus is the large fruit-eating megabat commonly known as the flying fox."
);

addMcq(
  "Balaenoptera musculus is the scientific name for the:",
  ["Blue whale", "Sperm whale", "Dolphin", "Killer whale"],
  0,
  "Balaenoptera musculus is the blue whale, the largest animal ever known to have lived on Earth."
);

addMcq(
  "Delphinus delphis is commonly known as the:",
  ["Common dolphin", "Blue whale", "Porpoise", "Manatee"],
  0,
  "Delphinus delphis is the common marine dolphin, an intelligent aquatic placental mammal."
);

addMcq(
  "The three miniature auditory ossicles located in the mammalian middle ear cavity from exterior to interior are:",
  ["Malleus -> Incus -> Stapes", "Stapes -> Incus -> Malleus", "Incus -> Malleus -> Stapes", "Tympanum -> Stapes -> Cochlea"],
  0,
  "The mammalian middle ear contains three tiny articulated bones (ossicles): the malleus (hammer), incus (anvil), and stapes (stirrup), which mechanically amplify sound vibrations."
);

addMcq(
  "In mammals, the stapes (stirrup) is derived evolutionarily from the ancestral reptilian:",
  ["Columella auris (hyomandibular)", "Articular bone", "Quadrate bone", "Dentary bone"],
  0,
  "The mammalian stapes is homologous to the single ear ossicle of reptiles and amphibians (the columella auris / hyomandibular); the malleus derives from the articular, and the incus from the quadrate."
);

addMcq(
  "The lower jaw of a mammal is composed of how many bones on each side?",
  ["A single bone called the dentary", "Four bones: articular, angular, surangular, and dentary", "Six fused bones", "Cartilage only"],
  0,
  "A diagnostic mammalian skeletal feature is that each half of the lower jaw (mandible) consists of a single solid bone, the dentary, which articulates directly with the squamosal of the skull."
);

addMcq(
  "Which teeth in adult humans are typically specialized for tearing flesh in carnivores, but are small and spatulate in humans?",
  ["Canines", "Incisors", "Premolars", "Molars"],
  0,
  "Canines are conical pointed teeth situated between incisors and premolars, highly developed in carnivorous mammals for puncturing and tearing flesh."
);

addMcq(
  "Diphyodont dentition in mammals means having:",
  [
    "Two successive sets of teeth during life (deciduous milk teeth replaced by permanent adult teeth)",
    "Two different shapes of teeth",
    "Teeth in both upper and lower jaws",
    "Teeth that grow continuously forever"
  ],
  0,
  "Diphyodont describes having two generations of teeth: deciduous (temporary or milk) dentition followed by replacement permanent dentition."
);

addMcq(
  "Thecodont dentition means that:",
  [
    "Each tooth is firmly embedded in a deep socket (alveolus) in the jawbone",
    "Teeth are attached to the surface of the bone without sockets",
    "Teeth are replaced hundreds of times like in sharks",
    "All teeth have identical shape"
  ],
  0,
  "Thecodont dentition refers to teeth whose roots are anchored by periodontal ligaments inside deep bony sockets (alveoli) of the maxilla and dentary."
);

addMcq(
  "Heterodont dentition means that:",
  [
    "Teeth are differentiated into morphologically and functionally distinct types (incisors, canines, premolars, molars)",
    "Teeth are all identical pegs like in crocodiles",
    "Teeth are made of bone instead of dentine",
    "Teeth are shed every month"
  ],
  0,
  "Heterodont refers to possessing specialized teeth of different shapes and functions: incisors for cutting, canines for tearing, and premolars/molars for grinding."
);

addMcq(
  "The corpus callosum is a thick band of nerve fibers found exclusively in the brain of:",
  ["Eutherian (placental) mammals", "Fishes", "Amphibians", "Reptiles"],
  0,
  "The corpus callosum is a prominent commissural tract of white matter connecting the right and left cerebral hemispheres, unique to placental mammals."
);

console.log(`Part 4 raw MCQs count: ${mcqData.length}`);


const extra108 = [
  {
    "q": "The mid-wife toad (Alytes obstetricans) exhibits remarkable parental care in which the:",
    "opts": [
      "Male carries strings of fertilized eggs wrapped around his hind legs until they hatch in water",
      "Female keeps eggs in her mouth",
      "Eggs are buried in sand dunes",
      "Parents feed eggs to tadpoles"
    ],
    "ans": 0,
    "exp": "In the midwife toad (Alytes obstetricans), the male entangles strings of fertilized eggs around his thighs and hindlimbs, moistening them in dew until the tadpoles are ready to hatch into water."
  },
  {
    "q": "In the Surinam toad (Pipa americana), eggs develop into miniature toadlets inside:",
    "opts": [
      "Pockets formed in the spongy vascularized skin of the female's back",
      "The stomach of the male",
      "A nest made of hardened froth",
      "A pouch like a kangaroo"
    ],
    "ans": 0,
    "exp": "In Pipa americana, fertilized eggs are pressed onto the female's dorsal skin, which swells into individual dermal brooding pockets capped with skin lids, from which miniature toads emerge."
  },
  {
    "q": "The axolotl larva of the tiger salamander (Ambystoma tigrinum) exhibits neoteny (paedogenesis), which means:",
    "opts": [
      "It attains sexual maturity and reproduces while still retaining larval characteristics such as external gills",
      "It lives for 500 years without eating",
      "It loses all four legs",
      "It transforms into a snake"
    ],
    "ans": 0,
    "exp": "Neoteny or paedogenesis in Ambystoma (axolotl) is the retention of juvenile or larval features (external gills, tail fin, aquatic habits) in a sexually mature adult organism."
  },
  {
    "q": "Which element in pond water is essential for the synthesis of thyroxine required for amphibian metamorphosis?",
    "opts": [
      "Iodine",
      "Iron",
      "Calcium",
      "Phosphorus"
    ],
    "ans": 0,
    "exp": "Thyroid hormones (T3 and T4) contain iodine; without adequate dissolved iodine in ambient water, tadpoles cannot synthesize thyroxine and fail to metamorphose."
  },
  {
    "q": "Male frogs (Rana tigrina) can be distinguished from female frogs during the breeding season by the presence of:",
    "opts": [
      "Vocal sacs beneath the throat and a copulatory nuptial pad on the first digit of the forelimb",
      "Larger body size and long tails",
      "Wings on the back",
      "Bright feathers on the head"
    ],
    "ans": 0,
    "exp": "Male frogs possess sound-amplifying vocal sacs on the throat to produce loud mating croaks, and a glandular copulatory nuptial pad on the ventral base of the first finger to grasp the female during amplexus."
  },
  {
    "q": "In frogs, the transparent third eyelid that moves upward to cover and protect the eye while submerged underwater is the:",
    "opts": [
      "Nictitating membrane",
      "Cornea",
      "Iris",
      "Choroid"
    ],
    "ans": 0,
    "exp": "The nictitating membrane is a semi-transparent fold of skin that moves upward over the cornea, protecting the eyes from debris while maintaining underwater vision."
  },
  {
    "q": "The single auditory ossicle present in the middle ear cavity of amphibians and reptiles that transmits sound from the tympanum to the fenestra ovalis is the:",
    "opts": [
      "Columella auris (stapes)",
      "Malleus",
      "Incus",
      "Utriculus"
    ],
    "ans": 0,
    "exp": "Amphibians and reptiles possess only a single rod-like middle ear bone called the columella auris (homologous to the mammalian stapes) that bridges the tympanic membrane to the inner ear."
  },
  {
    "q": "Which of the following is a nocturnal, blind, subterranean burrowing amphibian with rings of dermal scales embedded in its skin?",
    "opts": [
      "Ichthyophis (Caecilian)",
      "Hyla",
      "Rana",
      "Salamandra"
    ],
    "ans": 0,
    "exp": "Ichthyophis belongs to order Apoda (Gymnophiona); it is a limbless, blind burrower whose ringed annuli contain microscopic embedded dermal scales."
  },
  {
    "q": "The cleidoic egg of reptiles and birds is an evolutionary breakthrough because it:",
    "opts": [
      "Possesses a protective porous calcareous/leathery shell and internal extra-embryonic membranes that prevent desiccation on dry land",
      "Is laid in deep ocean water",
      "Requires no yolk or oxygen",
      "Develops without fertilization"
    ],
    "ans": 0,
    "exp": "A cleidoic egg is self-contained: its porous shell allows oxygen uptake while retaining moisture, and its internal amnion provides an enclosed private pond for the developing embryo on dry land."
  },
  {
    "q": "The extra-embryonic membrane that directly encloses the embryo in a fluid-filled cavity acting as a shock absorber is the:",
    "opts": [
      "Amnion",
      "Chorion",
      "Allantois",
      "Yolk sac"
    ],
    "ans": 0,
    "exp": "The amnion forms a fluid-filled amniotic sac that surrounds the embryo, protecting it from mechanical shocks, adhesions, and desiccation."
  },
  {
    "q": "The extra-embryonic membrane in reptiles and birds that functions in the storage of nitrogenous metabolic wastes (uric acid) and respiration is the:",
    "opts": [
      "Allantois",
      "Amnion",
      "Yolk sac",
      "Corion"
    ],
    "ans": 0,
    "exp": "The allantois serves as an embryonic urinary bladder storing insoluble uric acid precipitates, and its vascularized chorioallantoic membrane participates in gas exchange."
  },
  {
    "q": "Which extra-embryonic membrane is outermost, surrounding all other membranes and participating in respiratory gas exchange?",
    "opts": [
      "Chorion",
      "Amnion",
      "Yolk sac",
      "Allantois"
    ],
    "ans": 0,
    "exp": "The chorion (serosa) is the outermost extra-embryonic membrane underlying the egg shell, functioning alongside the allantois in respiratory gas exchange."
  },
  {
    "q": "The skull of modern turtles and tortoises (Chelonia) lacks temporal vacuities (fenestrae) behind the eye orbit, representing the primitive condition termed:",
    "opts": [
      "Anapsid skull",
      "Diapsid skull",
      "Synapsid skull",
      "Euryapsid skull"
    ],
    "ans": 0,
    "exp": "Anapsid skulls lack temporal openings (fenestrae) behind the orbit; modern chelonians (turtles, tortoises) exhibit this solid dermal skull condition."
  },
  {
    "q": "Reptiles such as crocodiles, lizards, snakes, and the tuatara possess two temporal openings on each side of the skull, representing the:",
    "opts": [
      "Diapsid skull condition",
      "Anapsid skull condition",
      "Synapsid skull condition",
      "Monapsid skull condition"
    ],
    "ans": 0,
    "exp": "Diapsid skulls possess two temporal fenestrae (superior and inferior) on each side of the dermal skull roof, characteristic of diapsid reptiles and birds."
  },
  {
    "q": "The skull of mammals is derived from which ancestral reptilian lineage possessing a single lower temporal opening?",
    "opts": [
      "Synapsid skull lineage (Therapsids)",
      "Anapsid lineage",
      "Diapsid lineage",
      "Euryapsid lineage"
    ],
    "ans": 0,
    "exp": "Mammals evolved from synapsid reptiles (mammal-like reptiles or therapsids), which possessed a single lateral temporal fenestra bordered by the postorbital and squamosal bones."
  },
  {
    "q": "Jacobson's organ (vomeronasal organ) in snakes and lizards is located in the:",
    "opts": [
      "Roof of the buccal cavity (palate), detecting airborne scent particles transferred by the flicking forked tongue",
      "Inner ear for hearing",
      "Stomach for digesting bones",
      "Tip of the tail for sensing temperature"
    ],
    "ans": 0,
    "exp": "Jacobson's organ consists of paired sensory cavities in the vomer bone on the roof of the mouth; the flicking, bifid tongue collects airborne scent molecules and inserts the tips into these sensory pockets for olfaction."
  },
  {
    "q": "Pit vipers (like rattlesnakes) and boas possess specialized facial pit organs capable of detecting:",
    "opts": [
      "Infrared thermal radiation emitted by warm-blooded mammalian prey in total darkness",
      "Ultraviolet light",
      "High-frequency sound waves",
      "Magnetic field lines only"
    ],
    "ans": 0,
    "exp": "Loreal pit organs located between the eye and nostril in pit vipers contain dense sheets of thermoreceptors that detect minute infrared temperature variations ($<0.003^\\circ\\text{C}$), allowing strike targeting in total darkness."
  },
  {
    "q": "The specialized, hollow, hypodermic needle-like teeth in venomous vipers through which venom is injected are:",
    "opts": [
      "Solenoglyphous fangs (hinged on rotating maxillae)",
      "Proteroglyphous fangs",
      "Acrodont teeth",
      "Lophodont molars"
    ],
    "ans": 0,
    "exp": "Vipers have solenoglyphous dentition: long, tubular fangs mounted on rotatable maxillary bones that fold back against the palate when the mouth is closed and swing forward like hypodermic needles during a strike."
  },
  {
    "q": "Cobras and kraits possess which type of venom fangs?",
    "opts": [
      "Proteroglyphous fangs (short, permanently erect fangs at the front of the maxilla)",
      "Solenoglyphous fangs",
      "Opisthoglyphous fangs",
      "Acrodont fangs"
    ],
    "ans": 0,
    "exp": "Elapids (cobras, kraits, coral snakes, mambas) possess proteroglyphous dentition: relatively short, hollow or grooved fangs fixed permanently in an erect vertical position at the front of the upper jaw."
  },
  {
    "q": "Which of the following snakes is non-poisonous and possesses vestigial pelvic spurs on either side of the cloaca?",
    "opts": [
      "Python (Indian rock python)",
      "Naja (Cobra)",
      "Vipera (Viper)",
      "Bungarus (Krait)"
    ],
    "ans": 0,
    "exp": "Python molurus (rock python) is a non-venomous constrictor retaining primitive skeletal vestiges of the pelvic girdle and hindlimbs visible externally as small cloacal spurs."
  },
  {
    "q": "Hydrophis is a marine snake characterized by:",
    "opts": [
      "A laterally compressed paddle-shaped tail and highly potent neurotoxic venom",
      "A rattle at the tip of the tail",
      "Living in freshwater rivers only",
      "Complete lack of lungs"
    ],
    "ans": 0,
    "exp": "Hydrophis (sea snake) has an oar-like, laterally compressed tail for swimming, valvular nostrils, and extremely potent neurotoxic venom to instantly paralyze fast marine fish."
  },
  {
    "q": "The dorsal domed shell of a turtle is the _____ and the flat ventral plate is the _____.",
    "opts": [
      "Carapace; Plastron",
      "Plastron; Carapace",
      "Scute; Operculum",
      "Tergum; Sternum"
    ],
    "ans": 0,
    "exp": "In chelonians (turtles/tortoises), the protective bony armor consists of an upper convex carapace (fused to vertebrae and ribs) and a lower flat plastron (fused to clavicles and interclavicle)."
  },
  {
    "q": "Crocodiles possess which type of dentition, unique among living reptiles but shared with mammals?",
    "opts": [
      "Thecodont dentition (teeth rooted in deep bony sockets)",
      "Acrodont dentition",
      "Pleurodont dentition",
      "Homodont dentition without roots"
    ],
    "ans": 0,
    "exp": "Crocodilians are the only living reptiles with thecodont dentition, where each tooth is set into a deep individual bony alveolus (socket) in the jaw, identical to the mammalian tooth attachment."
  },
  {
    "q": "The Foramen of Panizza is an anatomical aperture in crocodilians that connects the:",
    "opts": [
      "Right and left systemic aortic arches immediately outside the heart",
      "Right and left atria",
      "Right and left ventricles",
      "Stomach and lungs"
    ],
    "ans": 0,
    "exp": "In crocodilians, the Foramen of Panizza is a vascular shunt connecting the left and right aortic arches just above the semilunar valves, allowing blood to be shunted away from the lungs during prolonged diving."
  },
  {
    "q": "Which of the following is true regarding the excretion of nitrogenous wastes in reptiles and birds?",
    "opts": [
      "They are uricotelic, excreting insoluble uric acid paste to minimize water loss",
      "They are ammonotelic, requiring litres of water daily",
      "They are ureotelic, excreting large volumes of liquid urine",
      "They do not excrete nitrogenous waste"
    ],
    "ans": 0,
    "exp": "Both reptiles and birds are uricotelic: they convert toxic ammonia into non-toxic, poorly soluble uric acid crystals, eliminating waste as a white paste with negligible water loss."
  },
  {
    "q": "The fused thoracic, lumbar, sacral, and caudal vertebrae in birds that fuse with the pelvic girdle to form a rigid shock-absorbing platform for flight and landing is the:",
    "opts": [
      "Synsacrum",
      "Pygostyle",
      "Furcula",
      "Keel"
    ],
    "ans": 0,
    "exp": "The synsacrum is a solid skeletal unit formed by the fusion of the posterior 1-2 thoracic, all lumbar, sacral, and anterior caudal vertebrae with the ilia of the pelvis, absorbing the mechanical impact of bipedal landing."
  },
  {
    "q": "The pygostyle in birds is formed by the fusion of the:",
    "opts": [
      "Terminal 4 to 7 caudal vertebrae, supporting the tail feathers (rectrices)",
      "Cervical vertebrae",
      "Ribs",
      "Sternum and clavicle"
    ],
    "ans": 0,
    "exp": "The pygostyle (ploughshare bone) is a triangular bone at the end of the avian vertebral column formed by the fusion of posterior caudal vertebrae, anchoring the large fan of steering tail feathers (rectrices)."
  },
  {
    "q": "Uncinate processes are backward-pointing bony projections on the ribs of birds that function to:",
    "opts": [
      "Overlap adjoining ribs to strengthen the thoracic cage against compressive forces during flight muscle contraction",
      "Produce red blood cells",
      "Store calcium for eggshells",
      "Connect ribs to the wings directly"
    ],
    "ans": 0,
    "exp": "Avian ribs possess flat, posteriorly directed uncinate processes that overlap the succeeding rib, bracing the rib cage into a rigid structural basket that resists crushing during wing downstrokes."
  },
  {
    "q": "The flight feathers attached to the wings of birds that provide aerodynamic propulsion and lift are termed:",
    "opts": [
      "Remiges",
      "Rectrices",
      "Coverts",
      "Filoplumes"
    ],
    "ans": 0,
    "exp": "Wing flight feathers are called remiges (primaries on the hand and secondaries on the forearm), while tail steering feathers are termed rectrices."
  },
  {
    "q": "The interlocking mechanism of bird flight feathers that maintains an airtight aerodynamic vane consists of:",
    "opts": [
      "Barbicels (hooklets or hamuli) on barbules hooking into grooves of adjacent barbules",
      "Glue secreted by skin glands",
      "Magnetic attractions between feathers",
      "Sewing threads of collagen"
    ],
    "ans": 0,
    "exp": "A feather vane is made of branching barbs bearing microscopic distal barbules with tiny hooks (hamuli / barbicels) that lock over ridges on proximal barbules, forming a flexible, airtight flight surface."
  },
  {
    "q": "How many air sacs are typically connected to the lungs in a bird?",
    "opts": [
      "9 air sacs",
      "2 air sacs",
      "4 air sacs",
      "20 air sacs"
    ],
    "ans": 0,
    "exp": "Most birds possess 9 thin-walled, transparent air sacs: one unpaired interclavicular sac, and paired cervical, anterior thoracic, posterior thoracic, and abdominal air sacs."
  },
  {
    "q": "In birds, the vascular, pleated, comb-like structure projecting from the retina into the vitreous body of the eye is the:",
    "opts": [
      "Pecten",
      "Fovea centralis",
      "Cornea",
      "Ciliary body"
    ],
    "ans": 0,
    "exp": "The pecten oculi is a unique, highly vascularized, pigmented comb-like structure in the avian eye that nourishes the retina and aids in distance accommodation during high-speed flight."
  },
  {
    "q": "Crop milk (pigeon milk) is a nutritious, curd-like substance regurgitated to feed hatchlings, secreted by the:",
    "opts": [
      "Desquamated epithelial cells of the crop lining in both male and female pigeons",
      "Mammary glands of the female only",
      "Salivary glands",
      "Liver"
    ],
    "ans": 0,
    "exp": "Under the influence of the pituitary hormone prolactin, the epithelial lining of the crop in both parent pigeons proliferates and sloughs off as protein- and fat-rich 'crop milk' to nourish squabs."
  },
  {
    "q": "Which of the following birds lays the largest egg of any living animal (representing a single cell)?",
    "opts": [
      "Struthio camelus (Ostrich)",
      "Pavo cristatus (Peacock)",
      "Aptenodytes forsteri (Penguin)",
      "Columba livia (Pigeon)"
    ],
    "ans": 0,
    "exp": "The egg of the African ostrich (Struthio camelus) measures approximately 15 cm in length and weighs over 1.4 kg, representing the largest single biological cell existing on Earth today."
  },
  {
    "q": "The kiwi (Apteryx) of New Zealand is exceptional among birds because:",
    "opts": [
      "It is flightless, nocturnal, and has functional nostrils situated at the tip of its long bill for smelling food",
      "It has four wings",
      "It lays 100 eggs per day",
      "It has a cartilaginous skeleton like a shark"
    ],
    "ans": 0,
    "exp": "Apteryx (kiwi) has vestigial wings, lacks a sternal keel, and uniquely possesses external nostrils located at the very tip of its sensitive beak to locate subterranean earthworms by smell."
  },
  {
    "q": "Which of the following birds can fly backwards as well as hover stationary in mid-air?",
    "opts": [
      "Hummingbird (Trochilidae)",
      "Swallow",
      "Eagle",
      "Penguin"
    ],
    "ans": 0,
    "exp": "Hummingbirds possess specialized ball-and-socket shoulder joints that allow their wings to rotate $180^\\circ$, enabling inverted wing strokes that generate lift on both backward and forward beats."
  },
  {
    "q": "Monotremes (Prototheria) like Ornithorhynchus (platypus) and Tachyglossus (echidna) differ from other mammals because they:",
    "opts": [
      "Lay eggs, possess a cloaca, lack teats/nipples, and have abdominal testes",
      "Lack mammary glands completely",
      "Are cold-blooded invertebrates",
      "Have three-chambered hearts"
    ],
    "ans": 0,
    "exp": "Monotremes are primitive oviparous mammals: they lay shelled cleidoic eggs, possess a cloaca (monotreme = single hole), lack nipples (milk is secreted onto abdominal fur), and retain intra-abdominal testes."
  },
  {
    "q": "Male duck-billed platypuses (Ornithorhynchus anatinus) possess a calcaneus spur on their hind ankles connected to a crural gland that secretes:",
    "opts": [
      "Potent venom capable of causing severe pain and edema in humans",
      "Milk for young",
      "Honey",
      "Uric acid paste"
    ],
    "ans": 0,
    "exp": "The male platypus possesses a sharp, hollow horny spur on each hind heel connected to a venom gland in the thigh, used as a venomous weapon during territorial combat."
  },
  {
    "q": "In marsupial mammals (Metatheria, like the kangaroo), young are born in an extremely immature altricial state and complete development in the:",
    "opts": [
      "Marsupium (abdominal brood pouch) attached to teats",
      "Uterus for 9 months",
      "Nest of mud",
      "Ocean water"
    ],
    "ans": 0,
    "exp": "Marsupial embryos have a brief gestation (only ~33 days in kangaroos); the bean-sized, undeveloped neonate crawls into the mother's abdominal pouch (marsupium), latches onto a nipple, and completes development."
  },
  {
    "q": "Which of the following marsupials is native to North America (outside Australasia)?",
    "opts": [
      "Didelphis virginiana (Virginia opossum)",
      "Macropus (Kangaroo)",
      "Phascolarctos (Koala)",
      "Vombatus (Wombat)"
    ],
    "ans": 0,
    "exp": "Didelphis virginiana (the Virginia opossum) is the only native marsupial species surviving in North America."
  },
  {
    "q": "The only mammals capable of sustained, powered, true flapping flight belong to Order:",
    "opts": [
      "Chiroptera (Bats, e.g. Pteropus)",
      "Rodentia",
      "Dermoptera (Flying lemurs)",
      "Carnivora"
    ],
    "ans": 0,
    "exp": "Chiroptera (bats) are the only mammals capable of true powered flight, utilizing a flight membrane (patagium) supported by four vastly elongated fingers of the hand."
  },
  {
    "q": "Microchiropteran bats navigate and hunt flying insects in pitch darkness using:",
    "opts": [
      "Echolocation (emitting ultrasonic vocal pulses and interpreting returning acoustic echoes)",
      "Thermal vision",
      "Infrared radar",
      "Keen sense of smell only"
    ],
    "ans": 0,
    "exp": "Microbats emit high-frequency ultrasonic clicks from the larynx and analyze the frequency, time delay, and phase shifts of returning echoes to create a precise mental sonar map of their surroundings."
  },
  {
    "q": "The aquatic mammals blue whale (Balaenoptera) and dolphin (Delphinus) possess which breathing adaptation?",
    "opts": [
      "They surface periodically to breathe atmospheric air through dorsal nostrils called blowholes",
      "They possess internal gills like sharks",
      "They absorb oxygen through their tail fins",
      "They never need oxygen"
    ],
    "ans": 0,
    "exp": "Cetaceans are air-breathing mammals; their nostrils have migrated to the dorsal vertex of the skull as single or paired blowholes, allowing rapid inhalation while breaking the sea surface."
  },
  {
    "q": "The thick insulating layer of subcutaneous adipose fat that prevents heat loss in marine mammals (whales, seals, walruses) is called:",
    "opts": [
      "Blubber",
      "Baleen",
      "Patagium",
      "Pelt"
    ],
    "ans": 0,
    "exp": "Blubber is a dense, vascularized layer of subcutaneous adipose tissue up to 50 cm thick in whales that provides thermal insulation, energy storage, and buoyancy in freezing oceans."
  },
  {
    "q": "Baleen plates (whalebone) in mysticete whales (like Balaenoptera) are made of:",
    "opts": [
      "Keratin sheets hanging from the palate that filter krill and plankton from seawater",
      "True bone teeth",
      "Calcium carbonate shells",
      "Cartilage flippers"
    ],
    "ans": 0,
    "exp": "Baleen whales lack teeth; instead, hundreds of comb-like fringed plates of keratin called baleen hang down from the upper jaw, straining tons of krill and copepods from gulped seawater."
  },
  {
    "q": "The elephant's tusks are tremendously elongated, modified:",
    "opts": [
      "Upper incisors (growing continuously throughout life)",
      "Canines",
      "Premolars",
      "Molars"
    ],
    "ans": 0,
    "exp": "In elephants (Elephas), the prominent ivory tusks are deeply rooted, open-pulped, continuously growing second upper incisors."
  },
  {
    "q": "The tusks of walruses (Odobenus rosmarus) and wild boars (Sus scrofa) are modified:",
    "opts": [
      "Canine teeth",
      "Incisors",
      "Premolars",
      "Bones of the nose"
    ],
    "ans": 0,
    "exp": "Unlike elephants, the tusks of walruses, wild boars, and warthogs are greatly enlarged, continuously growing canine teeth used for defense, digging, and hauling out on ice."
  },
  {
    "q": "Carnassial teeth in carnivorous mammals (such as dogs and cats) are specialized for shearing meat and tendons. They are formed by the:",
    "opts": [
      "Last upper premolar ($P^4$) and first lower molar ($M_1$)",
      "Upper and lower canines",
      "First upper incisor and lower canine",
      "Third molars (wisdom teeth)"
    ],
    "ans": 0,
    "exp": "The carnassial pair in Order Carnivora (Canis, Felis) consists of the fourth upper premolar and the first lower molar, acting like scissor blades to shear tough muscle and sinew."
  },
  {
    "q": "Ruminant mammals (cows, sheep, deer) possess a complex 4-chambered stomach. The true glandular stomach that secretes gastric juice and HCl is the:",
    "opts": [
      "Abomasum",
      "Rumen",
      "Reticulum",
      "Omasum"
    ],
    "ans": 0,
    "exp": "The ruminant stomach has four chambers: rumen (storage and fermentation), reticulum (honeycomb cud-forming), omasum (water absorption), and abomasum (the true glandular stomach secreting pepsin and HCl)."
  },
  {
    "q": "Camels (Camelus) possess which extraordinary cellular feature in their blood that is unique among mammals?",
    "opts": [
      "Oval, biconvex, nucleated red blood cells that can swell up to 240% during rapid rehydration",
      "Circular enucleated RBCs identical to humans",
      "Absence of all red blood cells",
      "Green blood containing hemocyanin"
    ],
    "ans": 0,
    "exp": "Camelids (camels and llamas) possess oval-shaped, nucleated erythrocytes with flexible membranes that can expand to over double their volume without lysing when drinking 100 liters of water at once."
  },
  {
    "q": "Which of the following is an odd-toed ungulate (Order Perissodactyla) carrying body weight primarily on the single third digit?",
    "opts": [
      "Equus (Horse, Donkey, Zebra)",
      "Camelus (Camel)",
      "Bos (Cow)",
      "Sus (Pig)"
    ],
    "ans": 0,
    "exp": "Equus belongs to Perissodactyla (odd-toed ungulates): body weight is supported solely on the enlarged third digit capped by a keratinous hoof; artiodactyls (cows, pigs, camels) are even-toed."
  },
  {
    "q": "Which of the following orders of placental mammals is characterized by a single pair of continuously growing, chisel-like incisors in both upper and lower jaws?",
    "opts": [
      "Rodentia (Rats, mice, squirrels)",
      "Carnivora",
      "Primates",
      "Cetacea"
    ],
    "ans": 0,
    "exp": "Rodents (Order Rodentia, e.g. Rattus) are gnawing mammals with a single pair of rootless, continuously growing incisors with enamel only on the anterior surface, maintaining a self-sharpening chisel edge."
  },
  {
    "q": "Diastema in herbivorous mammals like rodents and rabbits refers to:",
    "opts": [
      "A toothless gap between the gnawing incisors and the grinding cheek teeth (premolars/molars) due to the absence of canines",
      "The space between the brain and skull",
      "A hole in the heart",
      "The pouch in the throat"
    ],
    "ans": 0,
    "exp": "In herbivores that lack canines (like rodents, rabbits, and deer), a natural wide gap called a diastema separates the anterior cropping/gnawing incisors from the grinding cheek teeth."
  },
  {
    "q": "Which of the following mammals possesses sweat glands (sudoriferous glands) across its entire skin surface to facilitate evaporative thermoregulation?",
    "opts": [
      "Homo sapiens (Human)",
      "Dog (sweats mostly through foot pads and pants)",
      "Whale (lacks sweat glands)",
      "Rat"
    ],
    "ans": 0,
    "exp": "Humans possess the highest density of eccrine sweat glands across the body among mammals, functioning as the primary cooling mechanism during thermal and exercise stress."
  },
  {
    "q": "Which of the following is true for all living mammals without exception?",
    "opts": [
      "Nourishing newborn young with milk produced by maternal mammary glands",
      "Giving birth to live young (viviparity)",
      "Possessing external pinnae",
      "Possessing teeth in jaws"
    ],
    "ans": 0,
    "exp": "Every single living mammal possesses mammary glands to nurse offspring. Viviparity is not universal (monotremes lay eggs), pinnae are lost in cetaceans/phocids, and teeth are absent in baleen whales and adult anteaters."
  },
  {
    "q": "Which of the following pairs of animals are homoiothermous (warm-blooded)?",
    "opts": [
      "Columba (Pigeon) and Macropus (Kangaroo)",
      "Naja (Cobra) and Rana (Frog)",
      "Scoliodon (Shark) and Crocodilus",
      "Salamandra and Chameleon"
    ],
    "ans": 0,
    "exp": "Birds (Columba) and mammals (Macropus) are endothermic/homoiothermic; reptiles, amphibians, and fishes are poikilothermic."
  },
  {
    "q": "Which of the following animals is cold-blooded (poikilothermous) and possesses a 3-chambered heart?",
    "opts": [
      "Rana tigrina (Frog)",
      "Pavo cristatus (Peacock)",
      "Panthera tigris (Tiger)",
      "Crocodilus"
    ],
    "ans": 0,
    "exp": "Rana tigrina is an amphibian: poikilothermic with a 3-chambered heart (two atria, one ventricle)."
  },
  {
    "q": "Which of the following animals possesses a 4-chambered heart with a right systemic aortic arch?",
    "opts": [
      "Corvus (Crow, Aves)",
      "Macaca (Monkey, Mammalia)",
      "Crocodilus (Reptilia)",
      "Rana (Amphibia)"
    ],
    "ans": 0,
    "exp": "Birds (Corvus) have a 4-chambered heart and retain only the right aortic arch; mammals have a left aortic arch; crocodilians have both arches."
  },
  {
    "q": "Which of the following animals possesses a 4-chambered heart with a single left systemic aortic arch?",
    "opts": [
      "Panthera leo (Lion, Mammalia)",
      "Columba (Pigeon, Aves)",
      "Struthio (Ostrich, Aves)",
      "Crocodilus (Reptilia)"
    ],
    "ans": 0,
    "exp": "Mammals (Panthera leo) possess a completely separated 4-chambered heart characterized by a single left systemic aortic arch."
  },
  {
    "q": "Which of the following animals belongs to Class Mammalia?",
    "opts": [
      "Delphinus (Dolphin)",
      "Aptenodytes (Penguin)",
      "Chelone (Turtle)",
      "Exocoetus (Flying fish)"
    ],
    "ans": 0,
    "exp": "Delphinus is a dolphin (mammal); Aptenodytes is a penguin (bird); Chelone is a turtle (reptile); Exocoetus is a fish."
  },
  {
    "q": "Which of the following animals belongs to Class Aves?",
    "opts": [
      "Psittacula (Parrot)",
      "Pteropus (Fruit bat)",
      "Chameleon",
      "Hyla"
    ],
    "ans": 0,
    "exp": "Psittacula is a parrot (bird); Pteropus is a bat (mammal); Chameleon is a lizard (reptile); Hyla is a tree frog (amphibian)."
  },
  {
    "q": "Which of the following animals belongs to Class Reptilia?",
    "opts": [
      "Calotes (Garden lizard)",
      "Bufo (Toad)",
      "Salamandra",
      "Ornithorhynchus"
    ],
    "ans": 0,
    "exp": "Calotes is the garden lizard (reptile); Bufo and Salamandra are amphibians; Ornithorhynchus is a monotreme mammal."
  },
  {
    "q": "Which of the following animals belongs to Class Amphibia?",
    "opts": [
      "Bufo (Toad)",
      "Testudo (Tortoise)",
      "Crocodilus",
      "Pristis"
    ],
    "ans": 0,
    "exp": "Bufo is a toad (amphibian); Testudo and Crocodilus are reptiles; Pristis is a fish."
  }
];
extra108.forEach(m => addMcq(m.q, m.opts, m.ans, m.exp));

// Take exactly 154 MCQs

const extra46 = [
  {
    "q": "In male frogs (Rana tigrina), sperm travels from the testes through 10-12 vasa efferentia into a longitudinal canal in the kidney called:",
    "opts": [
      "Bidder's canal",
      "Wolffian duct",
      "Mullerian duct",
      "Inguinal canal"
    ],
    "ans": 0,
    "exp": "In male frogs, vasa efferentia enter the kidney and open into Bidder's canal, which communicates with the urinogenital duct to convey both urine and semen to the cloaca."
  },
  {
    "q": "The tongue of a frog is:",
    "opts": [
      "Bifid (forked), attached to the anterior margin of the lower jaw, and free behind",
      "Attached to the back of the throat like humans",
      "Rigid and immobile",
      "Covered with feathers"
    ],
    "ans": 0,
    "exp": "In frogs, the muscular, sticky, bifid tongue is attached at the front of the lower jaw and free at the posterior end; it can be rapidly flipped out to capture flying insect prey."
  },
  {
    "q": "Teeth in a frog (Rana tigrina) are:",
    "opts": [
      "Homodont, acrodont, and polyphyodont, present only on the premaxillae, maxillae, and vomer bones (absent on lower jaw)",
      "Thecodont and heterodont like humans",
      "Present on both upper and lower jaws",
      "Completely absent from the entire mouth"
    ],
    "ans": 0,
    "exp": "Frogs possess homodont (identical peg-like), acrodont (attached to bone crest), polyphyodont (repeatedly replaced) teeth on the upper jaw (maxillary) and palate (vomerine teeth); the lower jaw is completely toothless."
  },
  {
    "q": "Poison dart frogs of Central and South America (Phylum Chordata, Class Amphibia) belong to family Dendrobatidae and are famous for:",
    "opts": [
      "Aposematic (warning) coloration and secretion of lethal batrachotoxin from cutaneous glands",
      "Giving birth to 100 live young",
      "Having wings for flight",
      "Living in deep ocean water"
    ],
    "ans": 0,
    "exp": "Dendrobatid poison dart frogs display vibrant, high-contrast aposematic coloration that warns predators of their deadly skin alkaloids (such as batrachotoxin, which locks voltage-gated sodium channels open)."
  },
  {
    "q": "Fat bodies (corpora adiposa) found above the kidneys in frogs function primarily to:",
    "opts": [
      "Store lipid energy reserves for winter hibernation, summer aestivation, and gamete maturation",
      "Produce urine",
      "Pump blood to the lungs",
      "Filter bacteria from lymph"
    ],
    "ans": 0,
    "exp": "Fat bodies are yellowish, finger-like adipose stores situated above the testes/ovaries in frogs that provide metabolic energy during prolonged dormancy (hibernation/aestivation) and gonadal maturation."
  },
  {
    "q": "Archaeopteryx lithographica, discovered in the Upper Jurassic Solnhofen limestone of Germany, is a world-renowned fossil representing the connecting link between:",
    "opts": [
      "Reptiles and Birds",
      "Amphibians and Reptiles",
      "Fishes and Amphibians",
      "Reptiles and Mammals"
    ],
    "ans": 0,
    "exp": "Archaeopteryx is the classic transitional fossil connecting non-avian theropod dinosaurs (reptiles) with birds, possessing reptilian teeth, clawed digits, and a long bony tail alongside avian flight feathers and a furcula (wishbone)."
  },
  {
    "q": "Which of the following reptilian features was present in Archaeopteryx?",
    "opts": [
      "Teeth in jaws, clawed fingers on wings, and a long tail with free caudal vertebrae",
      "Pneumatic hollow bones and a large sternal keel",
      "Toothless horny beak",
      "A single left ovary"
    ],
    "ans": 0,
    "exp": "Archaeopteryx retained primitive reptilian characters including thecodont teeth in jaws, three clawed digits on the forelimbs, a non-keeled sternum, abdominal ribs (gastralia), and a long tail of 20 caudal vertebrae."
  },
  {
    "q": "Down feathers (plumules) in birds function primarily for:",
    "opts": [
      "Thermal insulation to conserve body heat",
      "Powered flight propulsion",
      "Steering during landing",
      "Attracting mates with bright colors"
    ],
    "ans": 0,
    "exp": "Down feathers are soft, fluffy feathers with short rachis and flexible, non-interlocking barbs that trap a boundary layer of stagnant warm air against the skin for thermal insulation."
  },
  {
    "q": "Which of the following flightless running birds (Ratitae) is native to South America?",
    "opts": [
      "Rhea",
      "Struthio (Ostrich)",
      "Dromaius (Emu)",
      "Apteryx (Kiwi)"
    ],
    "ans": 0,
    "exp": "Rhea is the large, three-toed flightless ratite bird native to South America, ecologically equivalent to the African ostrich (Struthio) and Australian emu (Dromaius)."
  },
  {
    "q": "The cassowary (Casuarius) is a dangerous flightless bird native to New Guinea and Australia, known for its:",
    "opts": [
      "Keratinous cranial casque (helmet) and dagger-like inner claw on each foot",
      "Ability to fly backwards",
      "Teeth in its beak",
      "Living underwater"
    ],
    "ans": 0,
    "exp": "The cassowary possesses a prominent bony/keratinous casque on its crown and a 12-cm dagger-sharp inner claw capable of delivering lethal disemboweling kicks."
  },
  {
    "q": "The only snake in the world that builds a dedicated nest of vegetative leaves for its eggs and exhibits parental guarding is the:",
    "opts": [
      "Ophiophagus hannah (King cobra)",
      "Naja naja (Indian cobra)",
      "Python molurus",
      "Bungarus caeruleus (Krait)"
    ],
    "ans": 0,
    "exp": "The King cobra (Ophiophagus hannah) is the sole snake species that scrapes together decaying forest leaf litter to construct a two-compartment egg nest, which the female guards aggressively until hatching."
  },
  {
    "q": "The diet of the King cobra (Ophiophagus hannah) consists almost exclusively of:",
    "opts": [
      "Other snakes (ophiophagy)",
      "Rats and mice only",
      "Frogs and toads",
      "Fish and crabs"
    ],
    "ans": 0,
    "exp": "Ophiophagus literally means 'snake-eater'; the King cobra is an obligate ophiophage that feeds almost entirely on other venomous and non-venomous snakes (such as rat snakes, kraits, and pit vipers)."
  },
  {
    "q": "Autotomy in lizards like the wall gecko (Hemidactylus) involves the self-amputation of the tail along a:",
    "opts": [
      "Predetermined un-ossified cleavage fracture plane passing through the middle of a caudal vertebra",
      "Joint between two vertebrae without breaking bone",
      "Cut made by the lizard's teeth",
      "Random fracture of the spinal cord"
    ],
    "ans": 0,
    "exp": "Caudal autotomy occurs across a specialized, preformed cartilaginous fracture plane (cleavage plane) traversing the centrum and neural arch of caudal vertebrae, accompanied by rapid sphincter vasoconstriction."
  },
  {
    "q": "The secondary palate in crocodiles separates the nasal respiratory passages from the mouth cavity, which allows the crocodile to:",
    "opts": [
      "Breathe air while holding struggling prey underwater with only its nostrils exposed above the surface",
      "Chew food with molars",
      "Sing mating songs",
      "Store water for years"
    ],
    "ans": 0,
    "exp": "A complete bony secondary palate (formed by premaxillae, maxillae, palatines, and pterygoids) routes incoming air to internal nares behind a fleshy palatal valve, allowing respiration while the mouth is flooded underwater."
  },
  {
    "q": "Soft-shelled freshwater turtles belonging to genus Trionyx differ from typical turtles because:",
    "opts": [
      "Their carapace lacks epidermal horny scutes and is covered with soft, leathery skin, with a snorkel-like tubular snout",
      "They have teeth in their jaws",
      "They lack shells completely",
      "They are terrestrial herbivores"
    ],
    "ans": 0,
    "exp": "Trionyx (softshell turtle) possesses a flattened, disc-like shell lacking keratinous scutes, covered in soft leathery skin, and an elongated tubular proboscis that acts like a snorkel."
  },
  {
    "q": "Dugong dugon (sea cow) is a strictly herbivorous aquatic mammal belonging to Order:",
    "opts": [
      "Sirenia",
      "Cetacea",
      "Carnivora",
      "Pinnipedia"
    ],
    "ans": 0,
    "exp": "Dugongs and manatees belong to Order Sirenia; they are gentle, slow-moving, herbivorous marine mammals that graze on marine seagrasses."
  },
  {
    "q": "Pinnipeds (seals, sea lions, and walruses) are marine mammals that are taxonomically grouped under or closely related to Order:",
    "opts": [
      "Carnivora",
      "Cetacea",
      "Sirenia",
      "Artiodactyla"
    ],
    "ans": 0,
    "exp": "Pinnipedia (seals, sea lions, walruses) are fin-footed semiaquatic marine carnivores belonging to the suborder Caniformia of Order Carnivora."
  },
  {
    "q": "True horns in cattle, sheep, goats, and antelopes (family Bovidae) are:",
    "opts": [
      "Unbranched, permanent, and composed of a hollow keratinous sheath over a vascular bony core (never shed)",
      "Branched and shed every year",
      "Composed of pure bone without skin or sheath",
      "Made of agglutinated hair like rhino horns"
    ],
    "ans": 0,
    "exp": "Bovid horns are unbranched and permanent (never shed); they consist of a living bony core projecting from the frontal skull bone, encased in a persistent, hard keratinous outer sheath."
  },
  {
    "q": "Antlers found in male deer (family Cervidae) differ from bovid horns because antlers are:",
    "opts": [
      "Branched, composed entirely of solid bone, and shed and regrown annually under testosterone control",
      "Permanent and hollow",
      "Made of keratin without bone",
      "Present only on females"
    ],
    "ans": 0,
    "exp": "Antlers are deciduous branching structures composed of pure bone that grow covered by vascular skin ('velvet'); once mineralized, the velvet sloughs off, and the dead bone antlers are cast off annually after the rutting season."
  },
  {
    "q": "The horn of the Indian rhinoceros (Rhinoceros unicornis) is uniquely composed of:",
    "opts": [
      "Densely compacted and cemented keratinous epidermal hair-like filaments without any bony core",
      "Solid bone attached to the skull",
      "Dentine with an enamel cap",
      "Cartilage covered by scales"
    ],
    "ans": 0,
    "exp": "Rhinoceros horns are unique among mammals: they lack a bony core and are composed entirely of fused, agglutinated masses of keratinized epidermal fibers and melanin."
  },
  {
    "q": "The dental formula of an adult human is:",
    "opts": [
      "2.1.2.3 / 2.1.2.3 = 32 teeth",
      "2.1.3.3 / 2.1.3.3 = 36 teeth",
      "3.1.4.2 / 3.1.4.3 = 42 teeth",
      "1.0.2.3 / 1.0.2.3 = 24 teeth"
    ],
    "ans": 0,
    "exp": "The adult human dental formula in each half of the upper and lower jaws is 2 incisors, 1 canine, 2 premolars, and 3 molars (2.1.2.3 / 2.1.2.3), totaling 32 permanent teeth."
  },
  {
    "q": "The dental formula of the domestic cat (Felis catus) is:",
    "opts": [
      "3.1.3.1 / 3.1.2.1 = 30 teeth",
      "2.1.2.3 / 2.1.2.3 = 32 teeth",
      "3.1.4.2 / 3.1.4.3 = 42 teeth",
      "1.0.0.3 / 1.0.0.3 = 16 teeth"
    ],
    "ans": 0,
    "exp": "The cat dental formula reflects extreme hypercarnivory with reduced crushing cheek teeth: 3.1.3.1 / 3.1.2.1, totaling 30 teeth with prominent carnassials."
  },
  {
    "q": "The dental formula of the domestic dog (Canis familiaris) is:",
    "opts": [
      "3.1.4.2 / 3.1.4.3 = 42 teeth",
      "3.1.3.1 / 3.1.2.1 = 30 teeth",
      "2.1.2.3 / 2.1.2.3 = 32 teeth",
      "1.0.2.3 / 1.0.2.3 = 24 teeth"
    ],
    "ans": 0,
    "exp": "The adult dog dental formula is 3 incisors, 1 canine, 4 premolars, 2 molars (upper) / 3 incisors, 1 canine, 4 premolars, 3 molars (lower) = 3.1.4.2 / 3.1.4.3, totaling 42 teeth."
  },
  {
    "q": "The dental formula of the domestic rabbit (Oryctolagus cuniculus) is:",
    "opts": [
      "2.0.3.3 / 1.0.2.3 = 28 teeth",
      "1.0.1.3 / 1.0.1.3 = 20 teeth",
      "3.1.4.2 / 3.1.4.3 = 42 teeth",
      "2.1.2.3 / 2.1.2.3 = 32 teeth"
    ],
    "ans": 0,
    "exp": "Rabbits (order Lagomorpha) possess a pair of small peg-like incisors directly behind the large primary upper incisors: 2.0.3.3 / 1.0.2.3 = 28 teeth, with a wide canine diastema."
  },
  {
    "q": "In which of the following animals are the erythrocytes (RBCs) oval, biconvex, and nucleated?",
    "opts": [
      "Frog (Amphibia)",
      "Human (Mammalia)",
      "Dog (Mammalia)",
      "Rabbit (Mammalia)"
    ],
    "ans": 0,
    "exp": "In non-mammalian vertebrates (fishes, amphibians like frogs, reptiles, and birds), erythrocytes are large, oval, biconvex, and possess a prominent nucleus."
  },
  {
    "q": "In mature adult human erythrocytes (RBCs), which of the following is correct?",
    "opts": [
      "They are non-nucleated (enucleated) and biconcave discs",
      "They are nucleated and spherical",
      "They are oval with multiple nuclei",
      "They lack cell membranes"
    ],
    "ans": 0,
    "exp": "Mature mammalian erythrocytes (including humans) are enucleated, circular, and biconcave discs, maximizing hemoglobin density and deformation through microcapillaries."
  },
  {
    "q": "The koala (Phascolarctos cinereus) of Australia is a specialized herbivorous marsupial that feeds almost exclusively on the toxic, fibrous leaves of:",
    "opts": [
      "Eucalyptus trees",
      "Acacia bushes",
      "Bamboo stems",
      "Pine needles"
    ],
    "ans": 0,
    "exp": "Koalas are folivorous marsupials specialized to feed almost exclusively on eucalyptus foliage, relying on a 2-meter cecum harboring specialized detoxifying gut microbes."
  },
  {
    "q": "The Tasmanian devil (Sarcophilus harrisii) is a carnivorous marsupial native to Tasmania, famous for:",
    "opts": [
      "Having the strongest bite force relative to body mass of any living mammalian carnivore",
      "Flying like a bat",
      "Laying eggs in water",
      "Lacking all teeth"
    ],
    "ans": 0,
    "exp": "Sarcophilus harrisii (Tasmanian devil) possesses disproportionately large, muscular cranial jaws delivering an immense bite force quotient capable of crushing thick livestock bones."
  },
  {
    "q": "The Tasmanian tiger or thylacine (Thylacinus cynocephalus) was an apex carnivorous marsupial that became extinct in the 20th century. It represents an astonishing example of:",
    "opts": [
      "Convergent evolution with placental canids (wolves)",
      "Adaptive radiation of birds",
      "Acrodont dentition",
      "Direct development in amphibians"
    ],
    "ans": 0,
    "exp": "The thylacine possessed a canine-like skull, dental formula, digitigrade gait, and hunting posture strikingly convergent with the placental gray wolf (Canis lupus)."
  },
  {
    "q": "Which of the following mammals possesses a choriovitelline (yolk-sac) placenta and gives birth to immature altricial young?",
    "opts": [
      "Macropus (Kangaroo, Marsupialia)",
      "Homo sapiens (Human)",
      "Equus (Horse)",
      "Panthera (Tiger)"
    ],
    "ans": 0,
    "exp": "Marsupials (Metatheria) like the kangaroo develop a primitive, short-lived choriovitelline placenta formed from the yolk sac, delivering tiny embryos that crawl to the marsupium."
  },
  {
    "q": "Which of the following mammals possesses a chorioallantoic placenta with an intimate, deeply invasive vascular connection between fetal and maternal tissues?",
    "opts": [
      "Eutheria (Placental mammals, e.g. Human, Dog, Cat)",
      "Ornithorhynchus (Monotreme)",
      "Macropus (Marsupial)",
      "Tachyglossus (Echidna)"
    ],
    "ans": 0,
    "exp": "Eutherian placental mammals develop a true chorioallantoic placenta formed by the fusion of chorion and allantois, establishing prolonged nutrient and gas exchange in utero."
  },
  {
    "q": "Whales (Balaenoptera) can stay submerged on deep dives for over an hour without breathing because:",
    "opts": [
      "Their skeletal muscle contains immense concentrations of myoglobin, and blood volume and hematocrit are extraordinarily high",
      "They can absorb oxygen through their blubber",
      "They have four pairs of internal gills",
      "They convert salt water into oxygen"
    ],
    "ans": 0,
    "exp": "Deep-diving cetaceans have high blood volume, high hematocrit, and skeletal muscles packed with myoglobin (storing up to 10 times more oxygen than human muscle), supported by retia mirabilia."
  },
  {
    "q": "The respiratory organ of adult reptiles, birds, and mammals is exclusively the:",
    "opts": [
      "Lungs",
      "Gills",
      "Skin (cutaneous)",
      "Tracheae"
    ],
    "ans": 0,
    "exp": "In amniote tetrapods (reptiles, birds, and mammals), respiratory gas exchange is performed exclusively by internal vascularized lungs."
  },
  {
    "q": "How many pairs of cranial nerves are present in reptiles, birds, and mammals (Amniota)?",
    "opts": [
      "12 pairs",
      "10 pairs",
      "8 pairs",
      "16 pairs"
    ],
    "ans": 0,
    "exp": "All amniotes (reptiles, birds, and mammals) possess 12 pairs of cranial nerves, having added the spinal accessory (XI) and hypoglossal (XII) nerves to the 10 pairs found in anamniotes."
  },
  {
    "q": "How many pairs of cranial nerves are present in amphibians (like frogs) and fishes?",
    "opts": [
      "10 pairs",
      "12 pairs",
      "8 pairs",
      "14 pairs"
    ],
    "ans": 0,
    "exp": "Anamniotes (fishes and amphibians) possess exactly 10 pairs of cranial nerves (cranial nerves I through X)."
  },
  {
    "q": "Which of the following vertebrates is an anamniote, cold-blooded, and possesses 10 pairs of cranial nerves and a 3-chambered heart?",
    "opts": [
      "Rana tigrina (Frog)",
      "Naja naja (Cobra)",
      "Columba livia (Pigeon)",
      "Homo sapiens"
    ],
    "ans": 0,
    "exp": "Rana tigrina is an amphibian (anamniote), poikilothermic, possesses 10 pairs of cranial nerves and a 3-chambered heart."
  },
  {
    "q": "Which of the following vertebrates is an amniote, cold-blooded, and possesses 12 pairs of cranial nerves and an incompletely 4-chambered heart?",
    "opts": [
      "Calotes (Garden lizard)",
      "Rana (Frog)",
      "Pavo (Peacock)",
      "Macropus (Kangaroo)"
    ],
    "ans": 0,
    "exp": "Calotes is a reptile (amniote), poikilothermic, possesses 12 pairs of cranial nerves and a 3-chambered heart with an incomplete ventricular septum."
  },
  {
    "q": "Which of the following vertebrates is an amniote, warm-blooded, possesses 12 pairs of cranial nerves, a 4-chambered heart, and a single right aortic arch?",
    "opts": [
      "Pavo cristatus (Peacock, Aves)",
      "Panthera tigris (Tiger, Mammalia)",
      "Crocodilus (Reptilia)",
      "Rana (Amphibia)"
    ],
    "ans": 0,
    "exp": "Pavo cristatus is a bird: amniote, homoiothermic, with 12 cranial nerve pairs, a 4-chambered heart, and a single right systemic aortic arch."
  },
  {
    "q": "Which of the following vertebrates is an amniote, warm-blooded, possesses 12 pairs of cranial nerves, a 4-chambered heart, and a single left aortic arch?",
    "opts": [
      "Panthera tigris (Tiger, Mammalia)",
      "Pavo cristatus (Peacock, Aves)",
      "Crocodilus (Reptilia)",
      "Naja (Cobra, Reptilia)"
    ],
    "ans": 0,
    "exp": "Panthera tigris is a mammal: amniote, endothermic, with 12 cranial nerve pairs, a 4-chambered heart, and a single left systemic aortic arch."
  },
  {
    "q": "Which of the following vertebrates possesses epidermal scales on its hindlimbs, but feathers on the rest of its body?",
    "opts": [
      "Columba livia (Pigeon)",
      "Rana tigrina",
      "Chameleon",
      "Canis lupus"
    ],
    "ans": 0,
    "exp": "Birds (like Columba) retain reptilian beta-keratin epidermal scales on their lower legs (tarsometatarsus and toes), with feathers covering the rest of the body."
  },
  {
    "q": "Which of the following is a nocturnal flightless bird native to New Zealand that lays an egg up to 20% of its own body weight?",
    "opts": [
      "Apteryx (Kiwi)",
      "Struthio (Ostrich)",
      "Casuarius (Cassowary)",
      "Aptenodytes (Penguin)"
    ],
    "ans": 0,
    "exp": "The kiwi (Apteryx) lays an extraordinarily massive egg relative to its body size, reaching roughly 20% of the female's total mass."
  },
  {
    "q": "Which of the following pairs of mammals are viviparous?",
    "opts": [
      "Macropus (Kangaroo) and Pteropus (Flying fox)",
      "Ornithorhynchus and Tachyglossus",
      "Platypus and Echidna",
      "Struthio and Aptenodytes"
    ],
    "ans": 0,
    "exp": "Macropus (marsupial) and Pteropus (placental bat) give birth to live young (viviparous); Ornithorhynchus and Tachyglossus lay eggs (oviparous); Struthio and Aptenodytes are birds."
  },
  {
    "q": "Which of the following mammals lacks pinnae (external ears) as a streamlining adaptation for diving?",
    "opts": [
      "Balaenoptera (Whale) and Phoca (Earless seal)",
      "Macropus (Kangaroo)",
      "Canis (Dog)",
      "Elephas (Elephant)"
    ],
    "ans": 0,
    "exp": "Cetaceans (whales, dolphins) and phocid true seals have lost external ear pinnae to minimize hydrodynamic drag in water, retaining internal ear canals."
  },
  {
    "q": "In which of the following animals is the urinary bladder absent?",
    "opts": [
      "Columba livia (Pigeon)",
      "Rana tigrina (Frog)",
      "Testudo (Tortoise)",
      "Homo sapiens (Human)"
    ],
    "ans": 0,
    "exp": "Birds (except the ostrich) lack a urinary bladder to reduce flight weight; frogs, tortoises, and humans all possess urinary bladders."
  },
  {
    "q": "Which of the following animals has teeth embedded in jaw sockets (thecodont)?",
    "opts": [
      "Crocodilus and Mammals",
      "Frogs and Toads",
      "Snakes and Lizards",
      "Fishes and Birds"
    ],
    "ans": 0,
    "exp": "Thecodont dentition (teeth set into deep individual jaw sockets) is found in crocodilians and mammals."
  },
  {
    "q": "Which of the following is an accurate summary of heart chambers across vertebrate evolution?",
    "opts": [
      "Fishes: 2 chambers -> Amphibians: 3 chambers -> Most Reptiles: incomplete 4 chambers -> Crocodiles, Birds, and Mammals: complete 4 chambers",
      "Fishes: 4 chambers -> Amphibians: 3 chambers -> Reptiles: 2 chambers",
      "Fishes: 1 chamber -> Amphibians: 2 chambers -> Birds: 3 chambers",
      "All vertebrates possess 4-chambered hearts without exception"
    ],
    "ans": 0,
    "exp": "Vertebrate heart evolution progressed from a 2-chambered single circulation heart in fishes to 3 chambers in amphibians, incomplete 4 chambers in most reptiles, and fully separated 4-chambered double circulation in crocodilians, birds, and mammals."
  }
];
extra46.forEach(m => addMcq(m.q, m.opts, m.ans, m.exp));

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
console.log(`Part 4 total questions: ${allQuestions.length} (AR: ${arQuestions.length}, MCQ: ${mcqQuestions.length})`);

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

console.log(`Part 4 KaTeX errors: ${katexErrors}`);

if (katexErrors === 0 && allQuestions.length === 180) {
  const outPath = path.join(__dirname, 'data_zoology_animal_kingdom_part4.js');
  const fileContent = `// Auto-generated data for Zoology Animal Kingdom Part 4: ${SUBTOPIC}\nmodule.exports = ${JSON.stringify(allQuestions, null, 2)};\n`;
  fs.writeFileSync(outPath, fileContent, 'utf8');
  console.log(`Successfully wrote ${outPath}`);
} else {
  console.error("Validation failed! Not writing output.");
  process.exit(1);
}
