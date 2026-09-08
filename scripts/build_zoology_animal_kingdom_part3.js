const fs = require('fs');
const path = require('path');
const katex = require('katex');

const SUBTOPIC = "Chordata (Protochordata, Cyclostomata, Chondrichthyes, Osteichthyes)";
const CHAPTER = "Animal Kingdom";
const SUBJECT = "Zoology";

const arDirections = "In the following questions, a statement of Assertion (A) is followed by a statement of Reason (R).\nChoose the correct option:\n(1) Both (A) and (R) are true and (R) is the correct explanation of (A)\n(2) Both (A) and (R) are true but (R) is not the correct explanation of (A)\n(3) (A) is true but (R) is false\n(4) (A) is false but (R) is true";

const arOptions = [
  "Both (A) and (R) are true and (R) is the correct explanation of (A)",
  "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
  "(A) is true but (R) is false",
  "(A) is false but (R) is true"
];

// 26 AR questions for Subtopic 3
const arData = [
  {
    a: "All vertebrates are chordates, but all chordates are not vertebrates.",
    r: "The embryonic notochord is replaced by a cartilaginous or bony vertebral column in adult vertebrates, whereas in protochordates, no vertebral column is formed.",
    ans: 0,
    exp: "Chordata contains three subphyla: Urochordata, Cephalochordata, and Vertebrata. Only members of Vertebrata replace the notochord with a vertebral column, so all vertebrates are chordates, but protochordates are chordates without being vertebrates."
  },
  {
    a: "In Urochordata, the notochord is present only in the larval tail.",
    r: "Urochordates undergo retrogressive metamorphosis during which the free-swimming larva loses its tail and notochord, becoming a sessile adult.",
    ans: 0,
    exp: "In urochordates (tunicates like Ascidia), the notochord and dorsal nerve cord are restricted to the tail of the free-swimming larva and are resorbed during retrogressive metamorphosis into a degenerative, sessile adult."
  },
  {
    a: "In Cephalochordata, the notochord extends from head to tail and is persistent throughout life.",
    r: "Branchiostoma (Amphioxus) retains a persistent notochord that projects anteriorly beyond the brain vesicle.",
    ans: 0,
    exp: "In cephalochordates like Branchiostoma (lancelet), the notochord extends along the entire length of the body from the anterior snout tip to the caudal tip and remains functional throughout the animal's entire life."
  },
  {
    a: "Cyclostomes are characterized by a sucking and circular mouth without jaws.",
    r: "Cyclostomes belong to the division Agnatha of subphylum Vertebrata.",
    ans: 0,
    exp: "Cyclostomes (lampreys and hagfishes) belong to the jawless division Agnatha; they lack functional jaws and possess a circular, suctorial mouth lined with horny teeth."
  },
  {
    a: "Cyclostomes migrate from the ocean to freshwater rivers for spawning.",
    r: "This anadromous reproductive migration is followed by the death of adult cyclostomes within a few days after spawning.",
    ans: 1,
    exp: "Both (A) and (R) are true NCERT statements. Marine cyclostomes (like Petromyzon) undergo anadromous spawning migration into freshwater streams, where they spawn and subsequently die, but (R) describes the consequence after spawning rather than explaining the physiological trigger for migration."
  },
  {
    a: "The ammocoete larva of Petromyzon undergoes metamorphosis to return to the ocean.",
    r: "Ammocoete larva is a freshwater ciliated microphagous filter-feeder that transforms into a parasitic marine adult.",
    ans: 0,
    exp: "After hatching in freshwater river beds, the ammocoete larva lives as a sedentary filter-feeder for several years before undergoing metamorphosis into an adult lamprey that migrates back to the marine environment."
  },
  {
    a: "Chondrichthyes fishes must swim constantly to avoid sinking to the ocean floor.",
    r: "Cartilaginous fishes (Chondrichthyes) lack an air bladder (swim bladder) to regulate hydrostatic buoyancy.",
    ans: 0,
    exp: "Because cartilaginous fishes (sharks and rays) do not possess a gas-filled swim bladder, their bodies are denser than seawater, requiring continuous swimming forward to generate hydrodynamic lift."
  },
  {
    a: "The teeth of cartilaginous fishes are modified placoid scales.",
    r: "Placoid scales and shark teeth share identical histological structure, each consisting of a dentine core covered with enamel and a pulp cavity.",
    ans: 0,
    exp: "In Chondrichthyes, teeth are structurally homologous to placoid scales; they are backwardly directed modified placoid scales embedded in the jaw gums, continuously replaced throughout life."
  },
  {
    a: "Torpedo can generate powerful electric shocks to stun prey and deter predators.",
    r: "Torpedo possesses specialized electric organs derived from modified branchial (gill) muscles.",
    ans: 0,
    exp: "Torpedo (electric ray) possesses a pair of large kidney-shaped electric organs on each side of the head, formed from modified branchial arch musculature capable of discharging high-voltage electrical pulses."
  },
  {
    a: "Trygon (sting ray) inflicts painful, dangerous wounds using a poison sting.",
    r: "The poison sting of Trygon is a modified, serrated caudal spine located on its slender whip-like tail equipped with venom glands.",
    ans: 0,
    exp: "Trygon possesses one or more serrated bony spines on its whip-like tail connected to venom-secreting epithelial cells, used as an effective defense against predators."
  },
  {
    a: "In male Chondrichthyes, the pelvic fins bear claspers.",
    r: "Claspers are copulatory intromittent organs utilized to transfer sperm into the female reproductive tract during internal fertilization.",
    ans: 0,
    exp: "Male cartilaginous fishes possess specialized grooved cartilaginous extensions on the medial borders of their pelvic fins called claspers, which are inserted into the female cloaca to achieve internal fertilization."
  },
  {
    a: "Osteichthyes fishes can stay suspended at a desired water depth without actively swimming.",
    r: "They possess an air bladder (swim bladder) whose gas volume can be adjusted to regulate buoyancy.",
    ans: 0,
    exp: "Bony fishes (Osteichthyes) possess a gas-filled swim bladder that functions as a hydrostatic organ, allowing them to match the surrounding water density and maintain neutral buoyancy without swimming."
  },
  {
    a: "The gills of Osteichthyes are covered by an operculum on each side.",
    r: "The operculum is a bony flap that protects the four pairs of gill slits and assists in generating unidirectional water flow across the gills.",
    ans: 0,
    exp: "Bony fishes possess four pairs of branchial gill arches enclosed within an opercular chamber protected by a bony operculum, which coordinates with the mouth to pump water over the gills."
  },
  {
    a: "In Chondrichthyes, gill slits are separate and not covered by an operculum.",
    r: "Each gill slit opens independently to the exterior through 5 to 7 pairs of naked lateral gill clefts.",
    ans: 0,
    exp: "Except for the chimaeras, cartilaginous fishes have 5–7 pairs of separate, naked gill slits that open directly to the outside, lacking a protective opercular covering."
  },
  {
    a: "Sharks do not suffer from dehydration in hypertonic seawater.",
    r: "Sharks retain high concentrations of urea and trimethylamine oxide (TMAO) in their blood, making their internal body fluids slightly hyperosmotic to seawater.",
    ans: 0,
    exp: "Chondrichthyes practice physiological uremia: they synthesize and retain large amounts of urea and TMAO in tissues, raising internal osmolarity above that of seawater to prevent water loss."
  },
  {
    a: "The heart in both Chondrichthyes and Osteichthyes is termed a 'venous heart'.",
    r: "The 2-chambered heart receives and pumps only deoxygenated blood forward to the gills for oxygenation (single circulation).",
    ans: 0,
    exp: "In fishes, the two-chambered heart (one atrium and one ventricle) receives purely deoxygenated blood from the systemic veins and pumps it directly to the branchial capillary beds for gas exchange."
  },
  {
    a: "Hippocampus (sea horse) exhibits unique male parental care.",
    r: "The male sea horse possesses a specialized ventral brood pouch on its abdomen in which the female deposits eggs, which are fertilized and incubated by the male until hatching.",
    ans: 0,
    exp: "In the sea horse (Hippocampus), the male possesses an abdominal brood pouch (marsupium); eggs deposited by the female are nurtured, oxygenated, and protected by the male until miniature fry emerge."
  },
  {
    a: "Latimeria (Coelacanth) is regarded as a critical living fossil in vertebrate evolution.",
    r: "Latimeria is a lobe-finned fish (sarcopterygian) whose fleshy, bony lobed fins are structurally homologous to the limbs of early tetrapod amphibians.",
    ans: 0,
    exp: "The coelacanth Latimeria chalumnae, rediscovered off South Africa in 1938, belongs to the Sarcopterygii; its stout lobe-fins contain internal bony architecture homologous to tetrapod limb bones, representing an evolutionary link to land vertebrates."
  },
  {
    a: "Exocoetus is known as the flying fish.",
    r: "It possesses immensely enlarged pectoral fins that act like gliders, allowing it to glide through the air for hundreds of feet above the sea surface.",
    ans: 0,
    exp: "Exocoetus has greatly expanded wing-like pectoral fins that enable it to leap out of the water and glide for extended distances to escape marine predators."
  },
  {
    a: "The lateral line sensory system in fishes is capable of detecting water currents and vibrations.",
    r: "The lateral line contains mechanoreceptive neuromast organs sensitive to low-frequency hydrodynamic disturbances and pressure changes.",
    ans: 0,
    exp: "The lateral line canal system contains sensory hair cells organized into neuromasts, functioning as rheoreceptors that detect water movements, currents, and pressure waves."
  },
  {
    a: "Scoliodon possesses Ampullae of Lorenzini on its snout.",
    r: "Ampullae of Lorenzini are specialized electroreceptors capable of detecting the weak microvolt electrical fields generated by the muscular contractions of prey animals.",
    ans: 0,
    exp: "The Ampullae of Lorenzini in elasmobranchs (sharks and rays) are jelly-filled cutaneous canals on the snout acting as exquisitely sensitive electroreceptors and thermoreceptors."
  },
  {
    a: "The spiral valve (typhlosole) is present in the intestine of cartilaginous fishes.",
    r: "The internal spiral fold (scroll valve) slows the passage of food and increases the absorptive surface area of the short shark intestine.",
    ans: 0,
    exp: "Because the shark intestine is relatively short, a spirally twisted mucosal fold called the scroll valve or spiral valve is present, significantly enhancing the surface area for digestion and absorption."
  },
  {
    a: "Fertilization is typically internal in Chondrichthyes, but external in most Osteichthyes.",
    r: "Male Chondrichthyes possess intromittent pelvic claspers, while most Osteichthyes shed eggs and sperm simultaneously into open water (spawning).",
    ans: 0,
    exp: "Pelvic claspers in male cartilaginous fishes enable direct internal insemination, whereas the vast majority of bony fishes practice broadcast spawning with external fertilization in water."
  },
  {
    a: "Myxine (hagfish) is notorious for producing voluminous amounts of defensive slime.",
    r: "When seized by a predator, specialized multicellular slime glands along its body release mucin that rapidly expands into thick slime upon contact with seawater, suffocating the gills of predators.",
    ans: 0,
    exp: "Myxine possesses lateral slime glands that discharge thread-cell proteins and mucin; these rapidly hydrate in seawater into gallons of thick, viscous slime that clogs the gills of attacking predatory fishes."
  },
  {
    a: "Freshwater bony fishes are ammonotelic and must continuously excrete large volumes of dilute urine.",
    r: "In a hypotonic freshwater environment, water continuously enters the fish's body by osmosis across the gills, necessitating high glomerular filtration and active ion reabsorption.",
    ans: 0,
    exp: "Freshwater bony fishes are hyperosmotic to their surrounding water, leading to constant osmotic water influx. Their kidneys possess large vascular glomeruli to eliminate excess water as copious dilute urine while gills actively pump in salts."
  },
  {
    a: "Cyclostomes have an open circulatory system with a dorsal heart.",
    r: "Cyclostomes are primitive vertebrates that lack true red blood cells.",
    ans: 3,
    exp: "Assertion is false because cyclostomes have a closed circulatory system with a muscular ventral heart. Reason is also false because cyclostomes have nucleated red blood cells containing hemoglobin. Let's adjust this AR."
  }
];

// Correct Assertion 26
arData[25] = {
  a: "Cyclostomata possesses a cartilaginous cranium and vertebral column.",
  r: "Although they are vertebrates, cyclostomes lack bone and their endoskeleton is made entirely of cartilage.",
  ans: 0,
  exp: "Cyclostomes are craniates and vertebrates, but their skeleton is entirely cartilaginous with persistent notochord and primitive cartilaginous neural arches (vertebrae), completely lacking ossified bone."
};

console.log("Built 26 AR questions for Part 3.");

const mcqData = [];
function addMcq(q, opts, ans, exp) {
  mcqData.push({ q, opts, ans, exp });
}

// 1. Phylum Chordata & Protochordata MCQs
addMcq(
  "Which of the following is NOT a diagnostic feature of Phylum Chordata?",
  ["Dorsal hollow tubular nerve cord", "Notochord", "Paired pharyngeal gill slits", "Solid ventral nerve cord"],
  3,
  "Chordates are characterized by a dorsal hollow nerve cord. A solid, double ventral nerve cord is found in non-chordates (like annelids and arthropods)."
);

addMcq(
  "In chordates, the heart is positioned _____ while in non-chordates, the heart (if present) is positioned _____.",
  ["Ventrally; Dorsally", "Dorsally; Ventrally", "Laterally; Ventrally", "Ventrally; Laterally"],
  0,
  "In chordates, the heart is ventral (situated below the alimentary canal), whereas in non-chordates with hearts (like earthworms and insects), the heart is dorsal."
);

addMcq(
  "Protochordata comprises which two subphyla?",
  ["Urochordata and Cephalochordata", "Cyclostomata and Chondrichthyes", "Hemichordata and Urochordata", "Cephalochordata and Vertebrata"],
  0,
  "Protochordates (or Acraniata) comprise Subphylum Urochordata (Tunicata) and Subphylum Cephalochordata. They are exclusively marine."
);

addMcq(
  "In Subphylum Urochordata, the notochord is:",
  [
    "Present only in the tail of the free-swimming larva",
    "Present along the entire length of the body throughout life",
    "Replaced by a bony vertebral column in adults",
    "Completely absent at all developmental stages"
  ],
  0,
  "In Urochordata (tunicates), the notochord is restricted to the tail of the free-swimming larva and is lost during metamorphosis into the adult."
);

addMcq(
  "The protective outer tunic (test) of urochordates is composed of tunicin, which is chemically similar to:",
  ["Cellulose", "Chitin", "Keratin", "Collagen"],
  0,
  "Tunicin is a leathery carbohydrate polymer nearly identical to plant cellulose, making tunicates the only animals capable of synthesizing cellulose-like structural walls."
);

addMcq(
  "Which of the following sets of animals belongs to Subphylum Urochordata?",
  ["Ascidia, Salpa, and Doliolum", "Branchiostoma and Amphioxus", "Petromyzon and Myxine", "Scoliodon and Pristis"],
  0,
  "Ascidia, Salpa, and Doliolum are the classic textbook examples of Subphylum Urochordata (Tunicata) in NCERT."
);

addMcq(
  "In Subphylum Cephalochordata, the notochord extends:",
  [
    "From the anterior tip of the snout (head) to the tail and persists throughout life",
    "Only in the larval tail",
    "Only in the abdominal region",
    "Only during embryonic stages"
  ],
  0,
  "In Cephalochordata, the notochord extends from the anterior snout all the way to the tail and is permanently maintained throughout the organism's entire life."
);

addMcq(
  "Which of the following is the classic example of Subphylum Cephalochordata?",
  ["Branchiostoma (Amphioxus or Lancelet)", "Ascidia", "Petromyzon", "Myxine"],
  0,
  "Branchiostoma (commonly known as Amphioxus or Lancelet) is the archetypal cephalochordate."
);

addMcq(
  "Excretion in Branchiostoma (Amphioxus) is carried out by specialized ciliated structures called:",
  ["Protonephridia with solenocytes", "Malpighian tubules", "Mesonephric kidneys", "Antennal glands"],
  0,
  "Branchiostoma excretes nitrogenous wastes through segmented pairs of protonephridia equipped with flagellated solenocytes, reminiscent of flatworm flame cells."
);

addMcq(
  "The subphylum Vertebrata is distinguished from protochordates by the fact that:",
  [
    "The embryonic notochord is replaced by a cartilaginous or bony vertebral column in the adult",
    "They are exclusively marine",
    "They possess an open circulatory system",
    "They lack a cranium (braincase)"
  ],
  0,
  "Vertebrates are craniates in which the embryonic notochord is replaced by a cartilaginous or bony vertebral column in the adult."
);

// 2. Class Cyclostomata MCQs
addMcq(
  "Which class of living vertebrates lacks true jaws and paired fins?",
  ["Cyclostomata", "Chondrichthyes", "Osteichthyes", "Amphibia"],
  0,
  "Class Cyclostomata (Agnatha) comprises living jawless vertebrates with circular, suctorial mouths and un-paired median fins."
);

addMcq(
  "How many pairs of gill slits are present for respiration in cyclostomes?",
  ["6 to 15 pairs", "4 pairs", "5 to 7 pairs", "2 pairs"],
  0,
  "NCERT states: 'Cyclostomes have an elongated body bearing 6-15 pairs of gill slits for respiration.'"
);

addMcq(
  "The endoskeleton (cranium and vertebral column) of cyclostomes is:",
  ["Cartilaginous", "Bony", "Chitinous", "Siliceous"],
  0,
  "Cyclostomes lack bone; their cranium and primitive vertebral elements are entirely cartilaginous, with a persistent notochord."
);

addMcq(
  "Which of the following statements regarding the body surface of cyclostomes is correct?",
  ["Body is devoid of scales and paired fins", "Body is covered with placoid scales", "Body is covered with cycloid scales", "Body bears two pairs of jointed legs"],
  0,
  "NCERT states: 'Their body is devoid of scales and paired fins.'"
);

addMcq(
  "Petromyzon and Myxine are commonly known as:",
  ["Lamprey and Hagfish, respectively", "Dogfish and Sawfish", "Sea horse and Flying fish", "Rohu and Katla"],
  0,
  "Petromyzon is commonly known as the lamprey, and Myxine is commonly known as the hagfish."
);

addMcq(
  "The phenomenon where marine cyclostomes migrate to freshwater rivers to spawn and then die within a few days is called:",
  ["Anadromous migration", "Catadromous migration", "Oceanodromous migration", "Diadromous hibernation"],
  0,
  "Anadromous migration refers to fishes migrating from the sea into freshwater rivers to breed (e.g. lampreys, salmon)."
);

addMcq(
  "The ciliated, freshwater microphagous larva of the lamprey is the:",
  ["Ammocoete larva", "Tornaria larva", "Trochophore larva", "Bipinnaria larva"],
  0,
  "The ammocoete larva of the lamprey lives as a burrowing filter feeder in river mud for several years before transforming into an adult and migrating to sea."
);

addMcq(
  "Which of the following cyclostomes has a mouth surrounded by sensory tentacles and secretes copious amounts of slime when disturbed?",
  ["Myxine (Hagfish)", "Petromyzon (Lamprey)", "Scoliodon", "Branchiostoma"],
  0,
  "Myxine (hagfish) possesses sensory barbels around its terminal mouth and lateral slime glands that discharge massive amounts of defensive mucin."
);

// 3. Class Chondrichthyes MCQs
addMcq(
  "Which of the following is a marine fish with a cartilaginous endoskeleton and ventral mouth?",
  ["Scoliodon (Dogfish)", "Labeo (Rohu)", "Exocoetus (Flying fish)", "Betta (Fighting fish)"],
  0,
  "Scoliodon (shark/dogfish) belongs to Class Chondrichthyes, possessing a cartilaginous skeleton and a ventral mouth."
);

addMcq(
  "The skin of Chondrichthyes is tough and covered with microscopic:",
  ["Placoid scales", "Cycloid scales", "Ctenoid scales", "Ganoid scales"],
  0,
  "Cartilaginous fishes have a tough sandpaper-like skin covered by tooth-like, backward-pointing placoid scales."
);

addMcq(
  "The teeth of sharks are:",
  ["Modified placoid scales backwardly directed", "Formed of pure bone embedded in deep jaw sockets", "Made of keratin like fingernails", "Absent entirely"],
  0,
  "Shark teeth are modified, enlarged placoid scales with a pulp cavity, dentine body, and hard vitrodentine cap, arranged in backward-facing replacement rows."
);

addMcq(
  "Why must cartilaginous fishes (Chondrichthyes) swim constantly without stopping?",
  [
    "Because they lack an air bladder and would otherwise sink",
    "Because their heart stops beating when resting",
    "Because their gills only work in hot water",
    "Because their fins are made of bone"
  ],
  0,
  "Cartilaginous fishes lack a gas-filled hydrostatic swim bladder; to maintain depth and avoid sinking to the seabed, they must maintain forward swimming."
);

addMcq(
  "How many pairs of gill slits are present in Chondrichthyes, and how are they covered?",
  [
    "5 to 7 pairs of gill slits, without an operculum",
    "4 pairs of gill slits, covered by an operculum",
    "6 to 15 pairs of gill slits, with an operculum",
    "Only one single gill slit on each side"
  ],
  0,
  "Cartilaginous fishes possess 5 to 7 pairs of separate gill slits that open directly to the exterior, without a protective operculum (gill cover)."
);

addMcq(
  "The pelvic fins of male Chondrichthyes bear copulatory structures called:",
  ["Claspers", "Gonopodia", "Ampullae", "Spermathecae"],
  0,
  "Male sharks and rays possess modified medial pelvic fin extensions called claspers, used for internal sperm delivery."
);

addMcq(
  "Fertilization in Chondrichthyes is _____ and many species are _____.",
  ["Internal; Viviparous", "External; Oviparous", "External; Viviparous", "Internal; Metagenic"],
  0,
  "In Chondrichthyes, fertilization is internal via male claspers, and many species exhibit viviparity (giving birth to live pups)."
);

addMcq(
  "Torpedo is a cartilaginous fish that possesses:",
  ["Electric organs", "Poison sting", "Air bladder", "Operculum"],
  0,
  "Torpedo (electric ray) has paired electric organs on either side of the head derived from branchial musculature."
);

addMcq(
  "Trygon is commonly known as the:",
  ["Sting ray", "Electric ray", "Saw fish", "Great white shark"],
  0,
  "Trygon is the sting ray; it bears a venomous, serrated defensive spine on its whip-like tail."
);

addMcq(
  "Pristis is commonly known as the:",
  ["Saw fish", "Dog fish", "Hammerhead shark", "Guitar fish"],
  0,
  "Pristis is commonly called the saw fish because its elongated snout (rostrum) is armed with sharp tooth-like denticles on both lateral edges."
);

addMcq(
  "Carcharodon is commonly known as the:",
  ["Great white shark", "Dog fish", "Whale shark", "Basking shark"],
  0,
  "Carcharodon carcharias is the great white shark, an apex predatory cartilaginous fish with triangular serrated teeth."
);

addMcq(
  "Scoliodon is commonly referred to as the:",
  ["Dog fish", "Saw fish", "Sting ray", "Angel fish"],
  0,
  "Scoliodon is commonly known as the dog fish due to its keen, dog-like sense of smell for tracking injured prey."
);

// 4. Class Osteichthyes MCQs
addMcq(
  "Which of the following characteristics distinguishes Class Osteichthyes from Class Chondrichthyes?",
  [
    "Terminal mouth, bony endoskeleton, operculum covering 4 pairs of gills, and air bladder present",
    "Ventral mouth, cartilaginous skeleton, and placoid scales",
    "Absence of air bladder and presence of claspers in males",
    "Absence of jaws and 15 pairs of gill slits"
  ],
  0,
  "Osteichthyes fishes possess an ossified bony skeleton, mostly terminal mouth, four pairs of gills protected by an operculum, cycloid/ctenoid scales, and a buoyancy-regulating air bladder."
);

addMcq(
  "How many pairs of gills are present in Osteichthyes, and what covers them?",
  ["Four pairs covered by an operculum on each side", "5 to 7 pairs without operculum", "6 to 15 pairs without operculum", "Two pairs with two opercula"],
  0,
  "Bony fishes have four pairs of gill arches located within a branchial chamber covered by a bony gill flap called the operculum."
);

addMcq(
  "The scales found on the skin of bony fishes (Osteichthyes) are typically:",
  ["Cycloid or ctenoid scales", "Placoid scales", "No scales at all", "Calcareous ossicles"],
  0,
  "Bony fishes possess thin, flexible, overlapping dermal scales with growth rings: smooth-edged cycloid scales or tooth-combed ctenoid scales."
);

addMcq(
  "The primary function of the air bladder (swim bladder) in Osteichthyes is:",
  ["Regulating hydrostatic buoyancy", "Digesting tough prey", "Producing sound only", "Excreting urea"],
  0,
  "The air bladder is a gas-filled sac that acts as a hydrostatic organ, allowing the fish to maintain neutral buoyancy at any desired water depth."
);

addMcq(
  "Heart in bony fishes (Osteichthyes) is:",
  ["2-chambered (one auricle and one ventricle)", "3-chambered", "4-chambered", "Single-chambered"],
  0,
  "Bony fishes possess a two-chambered venous heart composed of a single atrium (auricle) and a single muscular ventricle that pumps blood to the gills."
);

addMcq(
  "Fertilization and development in most bony fishes (Osteichthyes) are, respectively:",
  ["Usually external; Mostly oviparous with direct development", "Always internal; Viviparous", "Internal; Metagenic", "External; Indirect with tadpole"],
  0,
  "In most bony fishes, fertilization is external in water (spawning), females are oviparous, and development is direct into juvenile fry."
);

addMcq(
  "Which of the following pairs of fishes are marine Osteichthyes?",
  ["Exocoetus (Flying fish) and Hippocampus (Sea horse)", "Labeo (Rohu) and Catla", "Clarias (Magur) and Betta", "Scoliodon and Pristis"],
  0,
  "Exocoetus (flying fish) and Hippocampus (sea horse) are classic marine bony fishes highlighted in NCERT."
);

addMcq(
  "Which of the following sets represents freshwater edible bony fishes?",
  ["Labeo (Rohu), Catla (Katla), and Clarias (Magur)", "Exocoetus and Hippocampus", "Scoliodon and Carcharodon", "Torpedo and Trygon"],
  0,
  "Labeo rohita (rohu), Catla catla (katla), and Clarias batrachus (magur) are major freshwater carps and catfishes cultivated and consumed in India."
);

addMcq(
  "Which of the following bony fishes are popular aquarium fishes?",
  ["Betta (Fighting fish) and Pterophyllum (Angel fish)", "Labeo and Catla", "Exocoetus and Hippocampus", "Pristis and Trygon"],
  0,
  "NCERT lists Betta (Siamese fighting fish) and Pterophyllum (angel fish) as popular ornamental aquarium fishes."
);

addMcq(
  "In Hippocampus (sea horse), which fin is absent?",
  ["Caudal fin (tail is prehensile for grasping seaweed)", "Dorsal fin", "Pectoral fin", "All fins are absent"],
  0,
  "The sea horse lacks a caudal fin; its tail is modified into a flexible, prehensile organ used to anchor securely around marine eelgrass and coral stems."
);

addMcq(
  "Which of the following fishes exhibits an asymmetrical body where both eyes migrate to one side during development?",
  ["Flatfish (Flounder / Sole)", "Sea horse", "Rohu", "Dogfish"],
  0,
  "Pleuronectiformes (flatfishes like soles and flounders) start life as bilateral fry, but one eye migrates to the other side as they settle to lie flat on the ocean bed."
);

addMcq(
  "Which of the following is a living lungfish capable of breathing atmospheric air using modified swim bladders during drought?",
  ["Protopterus (African lungfish)", "Scoliodon", "Exocoetus", "Betta"],
  0,
  "Dipnoans (lungfishes) like Protopterus possess cellular, vascularized lungs derived from the swim bladder, allowing them to aestivate in dried mud during hot dry seasons."
);

addMcq(
  "The rediscovery of Latimeria chalumnae off the coast of South Africa was momentous because it proved that:",
  [
    "Coelacanths (lobe-finned fishes ancestral to amphibians) were not extinct as previously believed from fossils",
    "Sharks evolved from reptiles",
    "Fishes can fly across oceans",
    "Whales are actually cartilaginous fishes"
  ],
  0,
  "Coelacanths were thought to have gone extinct 66 million years ago with the dinosaurs until a living specimen of Latimeria was captured in 1938, demonstrating extraordinary evolutionary stasis."
);

addMcq(
  "Which of the following is a poikilothermic (cold-blooded) animal?",
  ["Scoliodon (Shark)", "Corvus (Crow)", "Macropus (Kangaroo)", "Columba (Pigeon)"],
  0,
  "Fishes (including sharks like Scoliodon) are poikilothermic (cold-blooded) animals whose internal body temperature fluctuates with the surrounding water temperature."
);

addMcq(
  "Which fish possesses a specialized suction disc derived from its modified anterior dorsal fin to attach to sharks and sea turtles?",
  ["Echeneis (Remora / Sucker fish)", "Exocoetus", "Hippocampus", "Clarias"],
  0,
  "Echeneis (remora) possesses a powerful oval sucking disc on top of its head (a modified dorsal fin) used to hitch rides on sharks in a classic commensal relationship."
);

console.log(`Part 3 raw MCQs count: ${mcqData.length}`);


const extra108 = [
  {
    "q": "The endostyle found in the pharynx of urochordates, cephalochordates, and larval lampreys is homologous to the vertebrate:",
    "opts": [
      "Thyroid gland",
      "Parathyroid gland",
      "Thymus gland",
      "Pituitary gland"
    ],
    "ans": 0,
    "exp": "The endostyle is a ventral ciliated groove in the pharynx that concentrates iodine and synthesizes iodinated tyrosines, proving its evolutionary homology to the vertebrate thyroid gland."
  },
  {
    "q": "Retrogressive metamorphosis in Urochordata (Ascidia) refers to:",
    "opts": [
      "The degenerative transformation of an active, advanced larva into a sedentary, degenerate adult",
      "The progressive development of legs and wings",
      "The change of an adult back into an egg",
      "The transformation of a female into a male"
    ],
    "ans": 0,
    "exp": "In Ascidia, the free-swimming tadpole larva has advanced chordate features (notochord, dorsal nerve cord, eyespot, statocyst) which are lost or degraded when it metamorphoses into a sessile, sac-like adult."
  },
  {
    "q": "A unique physiological feature of the urochordate circulatory system (e.g. in Herdmania) is that:",
    "opts": [
      "The tubular heart periodically reverses the direction of its peristaltic contractions",
      "Blood contains red blood cells with human-type hemoglobin",
      "The circulatory system is entirely closed with high pressure",
      "Blood is pumped through six chambers"
    ],
    "ans": 0,
    "exp": "In tunicates, the tubular neurogenic heart beats in one direction for a few minutes and then pauses and reverses the peristaltic contraction wave, pumping blood alternately in opposite directions."
  },
  {
    "q": "In Branchiostoma (Amphioxus), water is drawn into the oral cavity by the action of a specialized ciliated structure called the:",
    "opts": [
      "Wheel organ (Muller's organ)",
      "Radula",
      "Choanocyte",
      "Aristotle's lantern"
    ],
    "ans": 0,
    "exp": "The wheel organ (or Muller's organ) consists of finger-like ciliated epithelial tracts inside the oral hood of Amphioxus that create a vortex current drawing water and food into the pharynx."
  },
  {
    "q": "Hatschek's pit in Branchiostoma is a ciliated depression in the roof of the oral hood considered homologous to the vertebrate:",
    "opts": [
      "Anterior pituitary gland (adenohypophysis)",
      "Pineal body",
      "Thyroid gland",
      "Adrenal cortex"
    ],
    "ans": 0,
    "exp": "Hatschek's pit is an epithelial pocket in the roof of the buccal cavity of Amphioxus that secretes gonadotropin-like regulatory peptides, homologous to Rathke's pouch and the adenohypophysis."
  },
  {
    "q": "Myotomes in Branchiostoma are:",
    "opts": [
      "V-shaped segmental muscle blocks along the body wall separated by connective tissue myosepta",
      "Excretory solenocytes",
      "Cartilaginous vertebrae",
      "Electric organs"
    ],
    "ans": 0,
    "exp": "Myotomes are chevron- or V-shaped metameric muscle blocks along the lateral body wall of Amphioxus, whose sequential contractions produce lateral undulatory swimming."
  },
  {
    "q": "Which of the following is ABSENT in Subphylum Cephalochordata (Branchiostoma)?",
    "opts": [
      "A muscular heart, paired fins, cranium, and brain",
      "Notochord and dorsal nerve cord",
      "Pharyngeal gill slits",
      "Post-anal tail and myotomes"
    ],
    "ans": 0,
    "exp": "Branchiostoma lacks a differentiated brain, cranium, heart (blood is propelled by pulsating contractile vessels), and paired fins, representing a primitive acraniate chordate."
  },
  {
    "q": "Which of the following is true regarding cyclostomes?",
    "opts": [
      "They possess a single median nostril (monorhine condition)",
      "They possess paired lateral nostrils",
      "They have three pairs of nostrils",
      "They have no respiratory openings"
    ],
    "ans": 0,
    "exp": "Cyclostomes are monorhine: they possess a single dorsal median nostril (nasohypophysial opening), whereas jawed vertebrates (Gnathostomes) are dirhine with paired nostrils."
  },
  {
    "q": "The anticoagulant secreted by the salivary buccal glands of the sea lamprey (Petromyzon) while feeding on host fish blood is:",
    "opts": [
      "Lamphredin",
      "Hirudin",
      "Heparin",
      "Ancrod"
    ],
    "ans": 0,
    "exp": "Petromyzon attaches to prey with its suctorial funnel and secretes lamphredin, an anticoagulant and hemolytic fluid that prevents clotting and dissolves host flesh."
  },
  {
    "q": "Which of the following cyclostomes has rudimentary degenerate eyes hidden under thick skin and completely lacks a larval stage (direct development)?",
    "opts": [
      "Myxine (Hagfish)",
      "Petromyzon (Lamprey)",
      "Scoliodon",
      "Branchiostoma"
    ],
    "ans": 0,
    "exp": "Myxine (hagfish) is blind with vestigial eyespots beneath skin, scavenges on dead fish on the ocean floor, and undergoes direct development without an ammocoete larva."
  },
  {
    "q": "The caudal fin of Chondrichthyes (cartilaginous fishes) is typically:",
    "opts": [
      "Heterocercal (asymmetrical with the vertebral column extending into the larger upper lobe)",
      "Homocercal (symmetrical externally)",
      "Diphycercal",
      "Completely absent"
    ],
    "ans": 0,
    "exp": "Sharks have a heterocercal tail where the vertebral column tilts upward into an enlarged dorsal lobe, providing downward pitch and hydrodynamic lift during swimming."
  },
  {
    "q": "In bony fishes (Osteichthyes), the caudal fin is typically:",
    "opts": [
      "Homocercal (externally symmetrical with equal upper and lower lobes)",
      "Heterocercal",
      "Protocercal",
      "Spiral"
    ],
    "ans": 0,
    "exp": "Most bony fishes possess a homocercal tail where the dorsal and ventral lobes appear symmetrical, allowing forward propulsion without vertical pitch deflection."
  },
  {
    "q": "A placoid scale consists of a rhomboid basal plate of calcified tissue and a backwardly directed trident spine made of:",
    "opts": [
      "Dentine capped with vitrodentine",
      "Pure keratin",
      "Spongin protein",
      "Chitin"
    ],
    "ans": 0,
    "exp": "A placoid scale resembles a mammalian tooth: it features a vascularized pulp cavity, a body of mesodermal dentine, and an outer hard, glistening cap of vitrodentine."
  },
  {
    "q": "The spiracle in sharks and rays is embryologically derived from the:",
    "opts": [
      "First pharyngeal gill cleft (mandibular-hyoid cleft)",
      "Second gill slit",
      "Auditory meatus",
      "Mouth cavity"
    ],
    "ans": 0,
    "exp": "The spiracle is a modified, reduced first gill slit located behind the eye; in bottom-dwelling rays, it serves as the primary intake for clean respiratory water."
  },
  {
    "q": "Which of the following structures in sharks functions as an osmoregulatory organ to excrete excess sodium chloride from the blood?",
    "opts": [
      "Rectal gland",
      "Liver",
      "Spleen",
      "Pancreas"
    ],
    "ans": 0,
    "exp": "The rectal gland is a finger-like cecal appendage opening into the terminal rectum of elasmobranchs; it actively secretes a concentrated solution of sodium chloride."
  },
  {
    "q": "The liver of sharks is exceptionally large and rich in low-density oils containing:",
    "opts": [
      "Squalene, which assists in hydrodynamic buoyancy",
      "Hemoglobin",
      "Uric acid crystals",
      "Calcium carbonate"
    ],
    "ans": 0,
    "exp": "Sharks compensate for the lack of a swim bladder by having an enormous liver (up to 25% of body weight) filled with squalene and other low-density hydrocarbons."
  },
  {
    "q": "The mermaid's purse is a popular name for:",
    "opts": [
      "The tough, leathery, pillow-shaped egg capsule deposited by oviparous sharks and skates",
      "The brood pouch of a sea horse",
      "The swim bladder of a rohu",
      "The shell of an oyster"
    ],
    "ans": 0,
    "exp": "Oviparous cartilaginous fishes (like skates and dogfishes like Scyliorhinus) lay fertilized eggs inside horny, keratinized protective capsules called mermaid's purses."
  },
  {
    "q": "The largest living fish in the world is the:",
    "opts": [
      "Rhincodon typus (Whale shark, Chondrichthyes)",
      "Carcharodon carcharias (Great white shark)",
      "Balaenoptera musculus (Blue whale)",
      "Exocoetus"
    ],
    "ans": 0,
    "exp": "Rhincodon typus (whale shark) is a filter-feeding cartilaginous fish reaching lengths over 12–18 meters, making it the largest living fish (blue whale is a mammal)."
  },
  {
    "q": "Sphyrna is a cartilaginous fish characterized by a hammer-shaped head, commonly known as the:",
    "opts": [
      "Hammerhead shark",
      "Sawfish",
      "Dogfish",
      "Electric ray"
    ],
    "ans": 0,
    "exp": "Sphyrna is the hammerhead shark; its laterally expanded cephalofoil positions the eyes and nostrils far apart, enhancing binocular vision and stereoscopic olfaction."
  },
  {
    "q": "Chimaera (ratfish or rabbitfish) is an extraordinary marine fish of Class Holocephali that links cartilaginous and bony fishes because it possesses:",
    "opts": [
      "A cartilaginous skeleton combined with an operculum covering the gills and separate anus/urogenital openings",
      "Lungs and feathers",
      "True bone and placoid scales",
      "Wings for flight"
    ],
    "ans": 0,
    "exp": "Chimaera is a holocephalian with a cartilaginous skeleton and persistent notochord (chondrichthyan traits) but an operculum covering gill slits and no spiracle (osteichthyan traits)."
  },
  {
    "q": "In bony fishes, the countercurrent exchange mechanism in the gills ensures that:",
    "opts": [
      "Blood flows across gill lamellae in the opposite direction to water flow, maximizing oxygen extraction up to 80-85%",
      "Blood and water flow in the same direction to equalize pressure",
      "Water is prevented from entering the gills",
      "Carbon dioxide is converted into urea"
    ],
    "ans": 0,
    "exp": "Countercurrent flow maintains a favorable partial pressure gradient of oxygen between incoming water and capillary blood across the entire length of the lamella, extracting over 80% of dissolved oxygen."
  },
  {
    "q": "A swim bladder that retains an open pneumatic duct connecting it to the esophagus (as in carps and catfishes) is termed:",
    "opts": [
      "Physostomous",
      "Physoclistous",
      "Acellular",
      "Heterocercal"
    ],
    "ans": 0,
    "exp": "In physostomous fishes (e.g. goldfish, salmon), the swim bladder remains connected to the esophagus via the ductus pneumaticus, allowing gas to be swallowed or burped."
  },
  {
    "q": "In advanced bony fishes (physoclistous fishes), the pneumatic duct is completely lost and gas is secreted into the bladder by the:",
    "opts": [
      "Gas gland and rete mirabile (vascular countercurrent capillary bed)",
      "Liver",
      "Kidneys",
      "Spiral valve"
    ],
    "ans": 0,
    "exp": "In physoclistous fishes (e.g. perch, cod), the swim bladder has no connection to the gut; gas is secreted by the gas gland via lactic acid-mediated hemoglobin unloading in the rete mirabile."
  },
  {
    "q": "Excess gas is reabsorbed from a physoclistous swim bladder back into the bloodstream through a vascularized region called the:",
    "opts": [
      "Oval body (ovale)",
      "Rete mirabile",
      "Operculum",
      "Weberian apparatus"
    ],
    "ans": 0,
    "exp": "The ovale is a specialized thin-walled, highly vascularized dorsal pocket of the physoclistous swim bladder equipped with a sphincter that reabsorbs gas into blood."
  },
  {
    "q": "Weberian ossicles are a chain of four small modified vertebrae that connect the:",
    "opts": [
      "Swim bladder to the perilymph of the inner ear, vastly enhancing hearing sensitivity in carps and catfishes",
      "Heart to the gills",
      "Eyes to the brain",
      "Stomach to the kidney"
    ],
    "ans": 0,
    "exp": "Weberian ossicles (claustrum, intercalarium, scaphium, tripus) are derived from the first four vertebrae in Ostariophysi; they transmit sound vibrations from the swim bladder to the inner ear."
  },
  {
    "q": "Catadromous migration is exemplified by which fish?",
    "opts": [
      "Anguilla (Freshwater eel)",
      "Salmo (Salmon)",
      "Hilsa",
      "Petromyzon"
    ],
    "ans": 0,
    "exp": "Anguilla (freshwater eel) lives in freshwater rivers as an adult but migrates thousands of miles to spawn in the deep ocean (Sargasso Sea) — a catadromous migration."
  },
  {
    "q": "The transparent, leaf-like pelagic marine larva of the freshwater eel (Anguilla) is the:",
    "opts": [
      "Leptocephalus larva",
      "Ammocoete larva",
      "Tornaria larva",
      "Trochophore larva"
    ],
    "ans": 0,
    "exp": "Anguilla eggs hatch in the Atlantic into ribbon-like, transparent leptocephalus larvae that drift along the Gulf Stream for 1–3 years before transforming into glass eels and entering rivers."
  },
  {
    "q": "Anabas testudineus (climbing perch) can survive out of water and climb damp tree trunks because it possesses:",
    "opts": [
      "An accessory labyrinthine respiratory organ above the gills",
      "Lungs identical to humans",
      "Skin gills on its tail",
      "Book lungs"
    ],
    "ans": 0,
    "exp": "Anabas possesses a folded, vascularized labyrinthine organ within a suprabranchial chamber derived from the first epibranchial bone, allowing it to breathe atmospheric air."
  },
  {
    "q": "Clarias batrachus (magur) and Heteropneustes fossilis (singhi) survive in hypoxic swamp mud because they possess:",
    "opts": [
      "Accessory respiratory organs (arborescent organs or tubular air sacs)",
      "Four hearts",
      "Placoid scales",
      "Tracheae like insects"
    ],
    "ans": 0,
    "exp": "Clarias possesses branched dendritic (arborescent) organs, and Heteropneustes possesses a pair of long hollow air sacs extending into the tail musculature, allowing aerial respiration."
  },
  {
    "q": "Gambusia affinis (mosquito fish) is widely introduced into ponds and lakes because it:",
    "opts": [
      "Voraciously feeds on mosquito larvae and pupae, acting as an effective biological vector control agent",
      "Produces edible pearls",
      "Purifies drinking water with electricity",
      "Kills water weeds"
    ],
    "ans": 0,
    "exp": "Gambusia affinis is an effective larvivorous top-minnow introduced globally into standing waters to feed on mosquito larvae, biologically suppressing malaria and dengue vectors."
  },
  {
    "q": "Synanceia verrucosa is commonly known as the stonefish and is notorious as:",
    "opts": [
      "The most venomous fish in the world, with lethal neurotoxin-containing dorsal fin spines",
      "The fastest swimming fish",
      "A fish without bones",
      "A vegetarian fish"
    ],
    "ans": 0,
    "exp": "The stonefish (Synanceia) is camouflaged like a reef rock; its 13 erectile dorsal spines deliver fatal verrucotoxin upon being stepped on."
  },
  {
    "q": "Which of the following fishes exhibits bioluminescent photophores along its ventral body to camouflage its silhouette from bottom predators (counterillumination)?",
    "opts": [
      "Lantern fish (Myctophum)",
      "Catla",
      "Rohu",
      "Dogfish"
    ],
    "ans": 0,
    "exp": "Deep-sea lantern fishes possess rows of ventral photophores that emit bioluminescent light matching downwelling sunlight, effectively cloaking their silhouette."
  },
  {
    "q": "Which of the following fishes has its pelvic fins modified into a ventral sucker to cling securely to wave-swept rocks?",
    "opts": [
      "Gobies (Gobiidae) and Sucker fish",
      "Sea horse",
      "Flying fish",
      "Rohu"
    ],
    "ans": 0,
    "exp": "Gobies have fused pelvic fins that form a cup-like ventral adhesive suction disc, allowing them to anchor to rocky surfaces in torrential streams and intertidal surf zones."
  },
  {
    "q": "The operculum in bony fishes consists of which four fused thin dermal bones?",
    "opts": [
      "Opercular, preopercular, subopercular, and interopercular bones",
      "Parietal, frontal, nasal, and lacrimal bones",
      "Clavicle, scapula, coracoid, and cleithrum",
      "Maxilla, premaxilla, dentary, and angular"
    ],
    "ans": 0,
    "exp": "The opercular flap is supported by a plate of four dermal bones: opercle, preopercle, subopercle, and interopercle."
  },
  {
    "q": "Which of the following is true regarding the excretion of nitrogenous waste in marine teleost (bony) fishes?",
    "opts": [
      "They excrete primarily trimethylamine oxide (TMAO), ammonia, and urea, producing small volumes of concentrated urine to conserve water",
      "They excrete copious dilute urine like freshwater fishes",
      "They excrete dry uric acid pellets like birds",
      "They do not excrete any waste"
    ],
    "ans": 0,
    "exp": "Marine teleosts constantly lose water to the hypertonic sea; to conserve water, their kidneys possess reduced glomeruli (or are aglomerular) and excrete minimal, concentrated urine rich in TMAO and urea."
  },
  {
    "q": "Which of the following fishes is a viviparous bony fish with internal fertilization (males have a modified anal fin called a gonopodium)?",
    "opts": [
      "Gambusia (Mosquito fish) and Poecilia (Guppy)",
      "Labeo rohita",
      "Catla catla",
      "Exocoetus"
    ],
    "ans": 0,
    "exp": "Poeciliid fishes (guppies, mollies, and Gambusia) exhibit internal fertilization: the male's anal fin is modified into a copulatory gonopodium that delivers sperm packets to the female, which gives birth to live young."
  },
  {
    "q": "In which of the following fishes is the vertebral column completely absent, and the unsegmented notochord persists beneath the spinal cord throughout life?",
    "opts": [
      "Hagfish and Lamprey",
      "Rohu and Katla",
      "Shark and Ray",
      "Flying fish and Sea horse"
    ],
    "ans": 0,
    "exp": "In jawless cyclostomes (such as Myxine and Petromyzon), true vertebral centra never form; the notochord persists intact as the primary axial support throughout adult life."
  },
  {
    "q": "The pineal eye (parietal eye), a light-sensitive third eye on top of the head, is well-developed in:",
    "opts": [
      "Petromyzon (Lamprey)",
      "Scoliodon",
      "Labeo",
      "Betta"
    ],
    "ans": 0,
    "exp": "Lampreys possess a prominent pineal eye complex featuring a pigmented retina and lens beneath a translucent skin patch, regulating circadian rhythms and melatonin."
  },
  {
    "q": "The term 'Acraniata' refers to chordates that:",
    "opts": [
      "Lack a cranium (brain box) and distinct brain",
      "Lack an anus",
      "Lack a heart",
      "Possess bony jaws"
    ],
    "ans": 0,
    "exp": "Acraniata (Protochordata: Urochordata and Cephalochordata) are chordates that have not evolved a protective cartilaginous or bony cranium (skull) or complex tripartite brain."
  },
  {
    "q": "Which of the following features is present in BOTH adult Amphioxus and adult vertebrates?",
    "opts": [
      "Metameric segmentation and post-anal tail",
      "Cartilaginous vertebral column",
      "Paired pectoral and pelvic fins",
      "Chambered muscular heart"
    ],
    "ans": 0,
    "exp": "Both Amphioxus and vertebrates share metameric musculature (myotomes/somites) and a muscular post-anal tail, whereas Amphioxus lacks a vertebral column, paired fins, and a chambered heart."
  },
  {
    "q": "The notochord in chordates lies:",
    "opts": [
      "Ventral to the nerve cord and dorsal to the alimentary canal",
      "Dorsal to the nerve cord",
      "Ventral to the heart",
      "Inside the digestive lumen"
    ],
    "ans": 0,
    "exp": "Anatomically, the notochord is situated in the mid-dorsal body axis immediately ventral to the tubular central nerve cord and dorsal to the coelom and alimentary canal."
  },
  {
    "q": "The pharynx of urochordates is immense, highly vascular, and perforated by numerous rows of ciliated slits termed:",
    "opts": [
      "Stigmata (gill slits)",
      "Spongocoels",
      "Choanocytes",
      "Radulae"
    ],
    "ans": 0,
    "exp": "In tunicates, the massive branchial basket is perforated by thousands of microscopic ciliated apertures called stigmata, through which water filters into the atrium."
  },
  {
    "q": "In an adult Ascidia, the water current exits the body through the:",
    "opts": [
      "Atrial siphon (atriopore)",
      "Branchial (incurrent) siphon",
      "Osculum",
      "Hypostome"
    ],
    "ans": 0,
    "exp": "Water enters through the branchial (incurrent) siphon into the pharynx, passes through the stigmata into the atrium, and leaves through the excurrent atrial siphon."
  },
  {
    "q": "Which of the following animals possesses a living, flexible, transparent pelagic tunic and moves by jet propulsion through open ocean waters?",
    "opts": [
      "Salpa and Doliolum",
      "Ascidia",
      "Spongilla",
      "Planaria"
    ],
    "ans": 0,
    "exp": "Salps and doliolids are barrel-shaped, free-swimming pelagic tunicates whose circular muscle bands contract to pump water through the body for jet propulsion."
  },
  {
    "q": "Cephalochordates are considered the closest living sister group to:",
    "opts": [
      "Vertebrata",
      "Porifera",
      "Cnidaria",
      "Annelida"
    ],
    "ans": 0,
    "exp": "Cephalochordata and Urochordata represent the immediate chordate lineages out of which ancestral vertebrates evolved."
  },
  {
    "q": "Which of the following correctly pairs the organism with its taxonomic subphylum?",
    "opts": [
      "Ascidia - Urochordata; Branchiostoma - Cephalochordata; Petromyzon - Vertebrata",
      "Ascidia - Cephalochordata; Branchiostoma - Urochordata; Petromyzon - Agnatha",
      "Ascidia - Hemichordata; Branchiostoma - Vertebrata; Petromyzon - Cephalochordata",
      "All three belong to Subphylum Protochordata"
    ],
    "ans": 0,
    "exp": "Ascidia is a Urochordate; Branchiostoma is a Cephalochordate; and Petromyzon belongs to Subphylum Vertebrata (Class Cyclostomata)."
  },
  {
    "q": "Which of the following is true for both Chondrichthyes and Osteichthyes?",
    "opts": [
      "Both have 2-chambered hearts, breathe via gills, and are cold-blooded (poikilothermous)",
      "Both possess opercula covering the gills",
      "Both possess swim bladders",
      "Both possess placoid scales"
    ],
    "ans": 0,
    "exp": "All fishes (cartilaginous and bony) share a 2-chambered single-circulation venous heart, branchial respiration using gills, and poikilothermy (cold-bloodedness)."
  },
  {
    "q": "The sinus venosus in a fish heart receives deoxygenated blood from the systemic veins and empties directly into the:",
    "opts": [
      "Atrium (auricle)",
      "Ventricle",
      "Conus arteriosus",
      "Gills"
    ],
    "ans": 0,
    "exp": "Systemic venous blood first collects in the thin-walled sinus venosus, which contracts to fill the single atrium; the atrium then pumps blood into the muscular ventricle."
  },
  {
    "q": "From the muscular ventricle of a shark's heart, blood is pumped directly into the:",
    "opts": [
      "Conus arteriosus (equipped with several rows of semilunar valves)",
      "Sinus venosus",
      "Atrium",
      "Left ventricle"
    ],
    "ans": 0,
    "exp": "In elasmobranchs (sharks), blood leaves the ventricle through a muscular, contractile conus arteriosus containing multiple transverse rows of pocket-like semilunar valves."
  },
  {
    "q": "In bony fishes (Osteichthyes), the outflow tract from the ventricle is non-contractile and elastic, termed the:",
    "opts": [
      "Bulbus arteriosus",
      "Conus arteriosus",
      "Sinus venosus",
      "Dorsal aorta"
    ],
    "ans": 0,
    "exp": "In teleost bony fishes, the conus arteriosus is replaced by an elastic, non-contractile dilation of the ventral aorta called the bulbus arteriosus that dampens systolic pressure pulses."
  },
  {
    "q": "Which of the following fishes possesses venomous spines on its dorsal, anal, and pelvic fins that can cause agonizing pain?",
    "opts": [
      "Pterois (Lionfish / Scorpionfish)",
      "Betta",
      "Catla",
      "Exocoetus"
    ],
    "ans": 0,
    "exp": "Pterois (lionfish) possesses elongated, needle-sharp dorsal and pectoral fin rays connected to venom glands that inject potent defensive toxins."
  },
  {
    "q": "The electric discharge of the electric ray (Torpedo) is produced by:",
    "opts": [
      "Columns of multinucleated disc-shaped electrocytes arranged in parallel stacks",
      "Modified kidney cells",
      "Friction of placoid scales",
      "Lightning strikes stored in the stomach"
    ],
    "ans": 0,
    "exp": "The electric organs of Torpedo consist of hexagonal vertical columns packed with thousands of flattened, modified neuromuscular junction plates called electrocytes, discharging up to 200 volts."
  },
  {
    "q": "Which of the following fishes has an elongated whip-like tail and lacks a dorsal fin, but possesses a barbed venomous spine?",
    "opts": [
      "Trygon (Stingray)",
      "Torpedo",
      "Scoliodon",
      "Pristis"
    ],
    "ans": 0,
    "exp": "Trygon (stingray) has a dorsoventrally flattened pectoral disc, a slender whip-like tail devoid of caudal fins, and a saw-toothed venomous spine."
  },
  {
    "q": "Which of the following animals belongs to Cyclostomata?",
    "opts": [
      "Petromyzon and Myxine",
      "Scoliodon and Pristis",
      "Exocoetus and Hippocampus",
      "Branchiostoma and Ascidia"
    ],
    "ans": 0,
    "exp": "Class Cyclostomata comprises Petromyzon (lampreys) and Myxine (hagfishes)."
  },
  {
    "q": "Cyclostomes differ from all other living vertebrates because they:",
    "opts": [
      "Lack jaws and paired limbs/fins",
      "Lack a notochord",
      "Possess a 4-chambered heart",
      "Are warm-blooded"
    ],
    "ans": 0,
    "exp": "Cyclostomes are jawless (Agnatha) and possess only un-paired median fins, completely lacking the paired pectoral and pelvic appendages found in gnathostome vertebrates."
  },
  {
    "q": "Which of the following statements about shark reproduction is correct?",
    "opts": [
      "Male sharks transfer sperm using pelvic claspers during internal fertilization",
      "Female sharks release millions of eggs into open water for external fertilization",
      "Sharks reproduce by asexual budding",
      "Sharks are hermaphrodites that self-fertilize"
    ],
    "ans": 0,
    "exp": "In all cartilaginous fishes, fertilization is strictly internal; the male inserts one of its pelvic claspers into the female's cloaca to transfer semen."
  },
  {
    "q": "The term 'anadromous' refers to fish migration:",
    "opts": [
      "From the sea into freshwater rivers to breed",
      "From rivers into the sea to breed",
      "From deep water to shallow water in the same lake",
      "From land to water"
    ],
    "ans": 0,
    "exp": "Anadromous fishes (such as salmon, lampreys, and hilsa) spend most of their adult lives in the marine environment but ascend freshwater rivers to spawn."
  },
  {
    "q": "The term 'catadromous' refers to fish migration:",
    "opts": [
      "From freshwater rivers into the sea to breed",
      "From the sea into freshwater to breed",
      "Between different continents across land",
      "From cold lakes to hot springs"
    ],
    "ans": 0,
    "exp": "Catadromous fishes (such as the freshwater eel Anguilla) live and mature in freshwater rivers but migrate down to deep ocean waters to spawn."
  },
  {
    "q": "In cartilaginous fishes, the cloaca receives the contents of which three systems?",
    "opts": [
      "Digestive tract, urinary system, and reproductive ducts",
      "Respiratory, circulatory, and nervous systems",
      "Mouth, stomach, and gills",
      "Bile duct, pancreatic duct, and swim bladder"
    ],
    "ans": 0,
    "exp": "A cloaca is a common posterior chamber into which the rectum (digestive), ureters (urinary), and gonoducts (reproductive) all discharge before opening through the vent."
  },
  {
    "q": "Bony fishes (Osteichthyes) typically possess separate external openings for the anus and urogenital pore, meaning:",
    "opts": [
      "A true cloaca is typically absent in teleost bony fishes",
      "They have five mouths",
      "They do not excrete urine",
      "They have no digestive system"
    ],
    "ans": 0,
    "exp": "In most modern bony fishes (teleosts), the digestive tube opens via an anterior anus, and the urogenital ducts open via a separate posterior urogenital pore (no cloaca)."
  },
  {
    "q": "The operculum in Osteichthyes is absent in which of the following fishes?",
    "opts": [
      "Scoliodon (Chondrichthyes)",
      "Labeo",
      "Catla",
      "Clarias"
    ],
    "ans": 0,
    "exp": "Scoliodon is a cartilaginous fish (Chondrichthyes), which characteristically lacks an operculum; Labeo, Catla, and Clarias are bony fishes and possess an operculum."
  },
  {
    "q": "Which of the following fishes is known as the 'Fighting fish'?",
    "opts": [
      "Betta splendens",
      "Pterophyllum",
      "Exocoetus",
      "Hippocampus"
    ],
    "ans": 0,
    "exp": "Betta splendens is the Siamese fighting fish, renowned for the fierce territorial aggression displayed by males."
  },
  {
    "q": "Which of the following aquarium fishes is known as the 'Angel fish'?",
    "opts": [
      "Pterophyllum",
      "Betta",
      "Labeo",
      "Clarias"
    ],
    "ans": 0,
    "exp": "Pterophyllum scalare is the angel fish, characterized by a laterally compressed diamond-shaped body and elongated dorsal and anal fins."
  },
  {
    "q": "Which of the following bony fishes is known as the 'Rohu'?",
    "opts": [
      "Labeo rohita",
      "Catla catla",
      "Clarias batrachus",
      "Heteropneustes fossilis"
    ],
    "ans": 0,
    "exp": "Labeo rohita is the scientific name of the Indian major carp Rohu."
  },
  {
    "q": "Which of the following bony fishes is known as 'Katla'?",
    "opts": [
      "Catla catla",
      "Labeo rohita",
      "Clarias batrachus",
      "Cirrhinus mrigala"
    ],
    "ans": 0,
    "exp": "Catla catla is the surface-feeding Indian major carp Katla."
  },
  {
    "q": "Which of the following bony fishes is known as 'Magur'?",
    "opts": [
      "Clarias batrachus",
      "Catla catla",
      "Labeo rohita",
      "Pterophyllum"
    ],
    "ans": 0,
    "exp": "Clarias batrachus is the walking catfish, commonly known as Magur in India."
  },
  {
    "q": "A fish that can leap out of water and glide through air using greatly expanded wing-like pectoral fins is:",
    "opts": [
      "Exocoetus (Flying fish)",
      "Hippocampus (Sea horse)",
      "Scoliodon",
      "Torpedo"
    ],
    "ans": 0,
    "exp": "Exocoetus is the flying fish, possessing immense pectoral fins that act as aerodynamic airfoils for gliding above the ocean surface."
  },
  {
    "q": "In which of the following animals is the tail prehensile and the male possesses a brood pouch for carrying embryos?",
    "opts": [
      "Hippocampus (Sea horse)",
      "Exocoetus",
      "Betta",
      "Labeo"
    ],
    "ans": 0,
    "exp": "The male sea horse (Hippocampus) has a prehensile tail to hold fast to sea plants and an abdominal brood pouch to incubate developing embryos."
  },
  {
    "q": "Which class of vertebrates contains cold-blooded animals with 2-chambered hearts, paired fins, and dermal scales?",
    "opts": [
      "Pisces (Chondrichthyes and Osteichthyes)",
      "Amphibia",
      "Reptilia",
      "Mammalia"
    ],
    "ans": 0,
    "exp": "Superclass Pisces (fishes) encompasses aquatic, poikilothermic gnathostomes equipped with paired fins, gills, dermal scales, and a 2-chambered venous heart."
  },
  {
    "q": "The presence of a persistent notochord throughout life is a feature shared by:",
    "opts": [
      "Branchiostoma, Petromyzon, and Chondrichthyes",
      "Adult frogs and birds",
      "Labeo and Catla",
      "Humans and dogs"
    ],
    "ans": 0,
    "exp": "In cephalochordates (Branchiostoma), cyclostomes (Petromyzon), and cartilaginous fishes (Chondrichthyes), the notochord is retained throughout adult life (un-constricted or partially constricted), unlike adult bony fishes and tetrapods."
  }
];
extra108.forEach(m => addMcq(m.q, m.opts, m.ans, m.exp));

// Take exactly 154 MCQs

const extra39 = [
  {
    "q": "The extinct armored jawless fishes that represent the earliest known vertebrate fossils from the Ordovician and Silurian periods are the:",
    "opts": [
      "Ostracoderms",
      "Placoderms",
      "Acanthodians",
      "Coelacanths"
    ],
    "ans": 0,
    "exp": "Ostracoderms are ancient, extinct, jawless agnathan vertebrates covered in heavy bony dermal plates and head shields, ancestral to modern cyclostomes and jawed vertebrates."
  },
  {
    "q": "The first jawed vertebrates (Gnathostomata) to appear in the fossil record were the armored fishes known as:",
    "opts": [
      "Placoderms",
      "Ostracoderms",
      "Chondrostei",
      "Dipnoi"
    ],
    "ans": 0,
    "exp": "Placoderms were the earliest jawed fishes (Gnathostomata), characterized by heavy bony armor on the head and thorax, flourishing during the Devonian ('Age of Fishes')."
  },
  {
    "q": "Ganoid scales (rhomboid scales coated with hard, enamel-like ganoin) are found in primitive bony fishes such as:",
    "opts": [
      "Lepisosteus (Garpike) and Polypterus (Bichir)",
      "Scoliodon and Pristis",
      "Labeo and Catla",
      "Exocoetus and Hippocampus"
    ],
    "ans": 0,
    "exp": "Ganoid scales are heavy, non-overlapping rhombic plates covered with shiny ganoin, characteristic of primitive actinopterygians like Polypterus and Lepisosteus."
  },
  {
    "q": "Skates (Raja) differ from stingrays (Trygon) in that skates:",
    "opts": [
      "Are oviparous, laying eggs in mermaid's purses, and lack a serrated venomous tail spine",
      "Are viviparous and possess deadly poison stings",
      "Possess lungs and feathers",
      "Have bony skeletons"
    ],
    "ans": 0,
    "exp": "Skates (Raja) are oviparous, depositing horned egg cases (mermaid's purses), have fleshy tails lacking a venomous spine, whereas stingrays (Trygon) are viviparous and bear venomous barbed tail spines."
  },
  {
    "q": "The electric eel (Electrophorus electricus) can generate lethal electric discharges of up to 600-860 volts. Taxonomically, it is:",
    "opts": [
      "A freshwater teleost bony fish (Osteichthyes), not a true eel or shark",
      "A cartilaginous ray (Chondrichthyes)",
      "A marine cyclostome",
      "A cephalochordate"
    ],
    "ans": 0,
    "exp": "Electrophorus electricus is a South American freshwater gymnotiform bony fish (Osteichthyes), capable of high-voltage electrical discharges using modified abdominal musculature."
  },
  {
    "q": "The Australian lungfish (Neoceratodus) differs from African (Protopterus) and South American (Lepidosiren) lungfishes because Neoceratodus:",
    "opts": [
      "Possesses a single lung and cannot survive complete desiccation of its river by burrowing in mud",
      "Possesses four lungs and wings",
      "Has a cartilaginous skeleton without fins",
      "Lives exclusively in hypertonic seawater"
    ],
    "ans": 0,
    "exp": "Neoceratodus (monopneumonous) has only a single lung, paddle-like fins, and cannot aestivate in a dried mud cocoon, whereas African and South American lungfishes have paired lungs and aestivate during droughts."
  },
  {
    "q": "How does the heart of lungfishes (Dipnoi) differ from that of all other typical fishes?",
    "opts": [
      "It has an incompletely divided 3-chambered heart (atrium partially divided into left and right, with pulmonary vein returning oxygenated blood to the left side)",
      "It has a single chamber",
      "It has five ventricles",
      "It has completely separate double circulation like birds"
    ],
    "ans": 0,
    "exp": "Lungfishes represent an evolutionary transition to amphibians: the atrium is partially divided by an interatrial septum, receiving oxygenated blood from the lungs into the left atrium and systemic blood into the right atrium."
  },
  {
    "q": "Chloride-secreting cells (ionocytes) located on the gills of marine teleosts actively pump which ions out of the blood into seawater?",
    "opts": [
      "Sodium ($Na^+$) and Chloride ($Cl^-$) ions",
      "Calcium and phosphate ions",
      "Urea and uric acid",
      "Glucose and amino acids"
    ],
    "ans": 0,
    "exp": "Marine bony fishes swallow seawater to replace osmotic water loss, and specialized mitochondria-rich chloride cells in their gill epithelium actively secrete excess $Na^+$ and $Cl^-$ against the concentration gradient."
  },
  {
    "q": "In freshwater bony fishes (like Rohu), chloride cells in the gill epithelium function in the opposite direction to:",
    "opts": [
      "Actively absorb $Na^+$ and $Cl^-$ from the hypotonic river water into the blood",
      "Pump out all body salts",
      "Secrete slime into water",
      "Store glycogen"
    ],
    "ans": 0,
    "exp": "In hypotonic fresh water, fishes lose salts by passive diffusion; gill ionocytes actively pump $Na^+$ and $Cl^-$ from dilute river water into blood against steep concentration gradients."
  },
  {
    "q": "Tetrodotoxin (TTX), a lethal neurotoxin that selectively blocks voltage-gated sodium channels causing paralysis, is found in the liver and ovaries of:",
    "opts": [
      "Tetraodon (Puffer fish / Fugu, Osteichthyes)",
      "Scoliodon (Dogfish)",
      "Labeo (Rohu)",
      "Hippocampus (Sea horse)"
    ],
    "ans": 0,
    "exp": "Puffer fishes (Tetraodontidae) harbor symbiotic bacteria that synthesize tetrodotoxin, a potent blocker of voltage-gated $Na^+$ channels; ingestion of improperly prepared fugu can be fatal."
  },
  {
    "q": "The neural gland in Urochordata (such as Herdmania) is situated above the nerve ganglion and is considered to be:",
    "opts": [
      "An excretory organ homologous to the pituitary gland",
      "A venom gland",
      "A digestive gland like the pancreas",
      "An electric organ"
    ],
    "ans": 0,
    "exp": "The neural gland in tunicates lies dorsal to the single neural ganglion; it collects brown excretory granules and discharges them into the prebranchial zone, homologous to the pituitary gland."
  },
  {
    "q": "The red foot of Herdmania (sea squirt) functions as a:",
    "opts": [
      "Muscular structure for anchoring the sessile animal to sandy ocean bottoms",
      "Paddle for swimming",
      "Jaw to bite prey",
      "Stinging weapon"
    ],
    "ans": 0,
    "exp": "Herdmania possesses a basal portion of the tunic shaped like a foot that anchors the sedentary body firmly into sand or gravel on the seabed."
  },
  {
    "q": "The velum in Branchiostoma (Amphioxus) is a circular membrane at the rear of the oral cavity that bears:",
    "opts": [
      "12 velar tentacles that act as a sensory filter preventing coarse sediment from entering the pharynx",
      "Chitinous teeth for chewing",
      "Eyespots for vision",
      "Poison stings"
    ],
    "ans": 0,
    "exp": "The velum is a muscular perforated diaphragm separating the buccal cavity from the pharynx, bearing sensory velar tentacles that act as a fine sieve."
  },
  {
    "q": "The atriopore in Branchiostoma is the ventral aperture through which:",
    "opts": [
      "Respiratory water exits from the peribranchial atrium to the exterior",
      "Food enters the digestive tract",
      "The notochord emerges",
      "The nerve cord connects to the brain"
    ],
    "ans": 0,
    "exp": "Water entering the mouth passes through the pharyngeal gill slits into the surrounding atrial cavity (atrium) and exits the body ventrally through the atriopore."
  },
  {
    "q": "The larval stage of cyclostomes (ammocoete larva) is of great phylogenetic significance because it:",
    "opts": [
      "Possesses features remarkably similar to adult Amphioxus (Cephalochordata), showing evolutionary link between protochordates and vertebrates",
      "Possesses four legs like an amphibian",
      "Is a terrestrial worm",
      "Has wings for flying"
    ],
    "ans": 0,
    "exp": "The ammocoete larva of the lamprey possesses an endostyle, ciliated pharynx, notochord, and continuous fin fold, strikingly resembling adult Amphioxus and bridging protochordates and vertebrates."
  },
  {
    "q": "In Chondrichthyes, the opening that connects the middle ear to the pharynx in higher vertebrates is homologous to the:",
    "opts": [
      "Spiracle",
      "Mouth",
      "Anus",
      "External gill slit"
    ],
    "ans": 0,
    "exp": "The spiracle of sharks is the first pharyngeal cleft, which in land vertebrates becomes modified into the Eustachian tube and middle ear cavity."
  },
  {
    "q": "Which of the following describes the nature of the notochord in adult Osteichthyes (bony fishes)?",
    "opts": [
      "It is largely obliterated and replaced by ossified bony vertebral centra, remaining only as thin intervertebral remnants",
      "It remains as a thick unsegmented rod running the entire body length",
      "It is completely absent in both embryo and adult",
      "It migrates into the swim bladder"
    ],
    "ans": 0,
    "exp": "In adult teleost bony fishes, complete ossification of amphicoelous vertebral centra constricts and virtually obliterates the embryonic notochord, leaving only small vestigial pads between adjacent vertebrae."
  },
  {
    "q": "Amphicoelous vertebrae, which are concave on both anterior and posterior faces of the centrum, are characteristic of:",
    "opts": [
      "Fishes",
      "Birds",
      "Mammals",
      "Crocodiles"
    ],
    "ans": 0,
    "exp": "Fishes possess amphicoelous (biconcave) vertebrae, with a hourglass-shaped central cavity in each centrum containing remnants of the embryonic notochord."
  },
  {
    "q": "Which cranial nerves in fishes are specially developed to innervate the lateral line sense organs?",
    "opts": [
      "Branches of the facial (VII), glossopharyngeal (IX), and vagus (X) nerves",
      "Optic nerve (II) only",
      "Olfactory nerve (I) only",
      "Hypoglossal nerve (XII)"
    ],
    "ans": 0,
    "exp": "The mechanosensory lateral line system and electroreceptive ampullae are innervated by specialized lateral line branches of cranial nerves VII, IX, and X."
  },
  {
    "q": "The total number of pairs of cranial nerves present in fishes and amphibians is:",
    "opts": [
      "10 pairs",
      "12 pairs",
      "8 pairs",
      "14 pairs"
    ],
    "ans": 0,
    "exp": "Anamniotes (fishes and amphibians) possess 10 pairs of cranial nerves, whereas amniotes (reptiles, birds, mammals) possess 12 pairs of cranial nerves."
  },
  {
    "q": "Fishes are classified as 'Anamniota' because their developing embryos:",
    "opts": [
      "Lack the extra-embryonic protective membrane called the amnion",
      "Lack a heart",
      "Lack a nervous system",
      "Develop inside trees"
    ],
    "ans": 0,
    "exp": "Fishes and amphibians lay eggs in aquatic environments where desiccation is not a threat; their embryos do not form an amnion, chorion, or allantois, classifying them as Anamniotes."
  },
  {
    "q": "Which of the following fishes possesses an asymmetric, elongated sword-like upper jaw used to slash through schools of fish?",
    "opts": [
      "Xiphias gladius (Swordfish)",
      "Scoliodon",
      "Hippocampus",
      "Clarias"
    ],
    "ans": 0,
    "exp": "Xiphias gladius (swordfish) has an elongated, flattened, sword-like bill formed from the fused premaxillary and nasal bones, used to stun and kill schooling prey."
  },
  {
    "q": "The anglerfish (Lophiiformes) lures prey directly to its mouth in dark ocean depths using an 'illicium' and 'esca', which are modifications of the:",
    "opts": [
      "First spine of the dorsal fin tipped with a bioluminescent lure",
      "Pectoral fin",
      "Caudal fin",
      "Tongue"
    ],
    "ans": 0,
    "exp": "The illicium of anglerfishes is a modified anterior dorsal fin ray acting like a fishing rod, tipped with a fleshy, bioluminescent lure (esca) packed with symbiotic photobacteria."
  },
  {
    "q": "Which of the following is true for the coelacanth Latimeria?",
    "opts": [
      "It gives birth to live young (ovoviviparous) after a gestation of up to 3 years",
      "It lays eggs in sand nests on ocean beaches",
      "It lives in freshwater ponds",
      "It lacks hemoglobin"
    ],
    "ans": 0,
    "exp": "Latimeria is ovoviviparous; females retain huge, orange-sized eggs inside their oviducts, giving birth to fully formed, live juvenile pups after a prolonged gestation."
  },
  {
    "q": "Which of the following fishes has its body encased in a rigid, box-like polygonal carapace of fused bony dermal plates?",
    "opts": [
      "Ostracion (Boxfish / Trunkfish)",
      "Scoliodon",
      "Labeo",
      "Betta"
    ],
    "ans": 0,
    "exp": "Ostracion (boxfish) has a triangular or square body encased in an immovable armor carapace of sutured polygonal bony plates, leaving only the fins, eyes, and mouth movable."
  },
  {
    "q": "The olfactory lobes in the brain of sharks (Scoliodon) are extraordinarily large because:",
    "opts": [
      "They rely predominantly on their acute sense of smell (chemoreception) to track prey over vast ocean distances",
      "They have excellent hearing",
      "They can read minds",
      "Their eyes do not work"
    ],
    "ans": 0,
    "exp": "Sharks are olfactory predators; their gigantic, well-developed olfactory bulbs and lobes receive sensory input capable of detecting a single drop of blood diluted in millions of liters of seawater."
  },
  {
    "q": "Which of the following fishes possesses venomous grooved spines on its dorsal and pectoral fins that cause agonizing stings in Indian freshwaters?",
    "opts": [
      "Heteropneustes fossilis (Singhi catfish)",
      "Catla catla",
      "Labeo rohita",
      "Betta splendens"
    ],
    "ans": 0,
    "exp": "Heteropneustes fossilis (singhi) possesses sharp pectoral spines associated with venom glands that deliver extremely painful stings to fishermen."
  },
  {
    "q": "In Chondrichthyes, the braincase is composed of:",
    "opts": [
      "A continuous un-sutured cartilaginous box termed the chondrocranium",
      "Bony sutures like humans",
      "Chitin",
      "Enamel plates"
    ],
    "ans": 0,
    "exp": "The skull of elasmobranchs (sharks and rays) is a solid, seamless cartilaginous trough and box called the chondrocranium, completely lacking suture lines."
  },
  {
    "q": "Which of the following is an example of an electric fish that can generate strong electric fields to stun prey?",
    "opts": [
      "Torpedo (Electric ray)",
      "Exocoetus",
      "Hippocampus",
      "Scoliodon"
    ],
    "ans": 0,
    "exp": "Torpedo (electric ray) is the classic NCERT example of an electric fish, possessing powerful electric organs derived from branchial muscles."
  },
  {
    "q": "The poison sting in Trygon (stingray) is located on the:",
    "opts": [
      "Dorsal surface of the whip-like tail",
      "Ventral side of the mouth",
      "Pectoral fin margin",
      "Snout tip"
    ],
    "ans": 0,
    "exp": "In Trygon, one or more sharp serrated spines equipped with venom glands are positioned midway along the dorsal surface of its slender whip-like tail."
  },
  {
    "q": "Which of the following fishes possesses an operculum covering its gills?",
    "opts": [
      "Catla (Osteichthyes)",
      "Scoliodon (Chondrichthyes)",
      "Pristis (Chondrichthyes)",
      "Carcharodon (Chondrichthyes)"
    ],
    "ans": 0,
    "exp": "Catla is a bony fish (Osteichthyes) and possesses a bony operculum covering its gill slits; Scoliodon, Pristis, and Carcharodon are cartilaginous fishes and lack opercula."
  },
  {
    "q": "In which of the following fishes is fertilization internal?",
    "opts": [
      "Scoliodon (Dogfish)",
      "Labeo (Rohu)",
      "Catla",
      "Clarias (Magur)"
    ],
    "ans": 0,
    "exp": "In cartilaginous fishes like Scoliodon, fertilization is internal via male pelvic claspers; in the bony fishes Labeo, Catla, and Clarias, fertilization is external."
  },
  {
    "q": "Which of the following fishes has placoid scales on its body?",
    "opts": [
      "Pristis (Sawfish)",
      "Labeo (Rohu)",
      "Catla",
      "Exocoetus (Flying fish)"
    ],
    "ans": 0,
    "exp": "Pristis is a cartilaginous fish (Chondrichthyes) and bears placoid scales; bony fishes (Labeo, Catla, Exocoetus) have cycloid or ctenoid scales."
  },
  {
    "q": "Which of the following fishes possesses cycloid or ctenoid scales?",
    "opts": [
      "Labeo (Rohu)",
      "Scoliodon",
      "Pristis",
      "Trygon"
    ],
    "ans": 0,
    "exp": "Labeo rohita is an osteichthyan bony fish and possesses cycloid scales; the others are chondrichthyans with placoid scales."
  },
  {
    "q": "Which of the following fishes lacks both jaws and paired fins?",
    "opts": [
      "Petromyzon (Lamprey)",
      "Scoliodon",
      "Catla",
      "Hippocampus"
    ],
    "ans": 0,
    "exp": "Petromyzon belongs to Cyclostomata (Agnatha); it lacks jaws and paired fins."
  },
  {
    "q": "Which of the following is an anadromous migratory vertebrate?",
    "opts": [
      "Petromyzon (Sea lamprey)",
      "Ascaris",
      "Fasciola",
      "Asterias"
    ],
    "ans": 0,
    "exp": "Petromyzon is anadromous: adult lampreys live in the sea and migrate upstream into freshwater rivers to spawn, where they die."
  },
  {
    "q": "Which of the following chordates retains its notochord from snout to tail throughout life?",
    "opts": [
      "Branchiostoma (Amphioxus)",
      "Ascidia",
      "Salpa",
      "Labeo"
    ],
    "ans": 0,
    "exp": "Branchiostoma (Cephalochordata) retains a persistent notochord that extends from the tip of the rostrum to the tail tip throughout life."
  },
  {
    "q": "Which of the following chordates has a notochord present ONLY in the larval tail?",
    "opts": [
      "Ascidia (Urochordata)",
      "Branchiostoma",
      "Petromyzon",
      "Scoliodon"
    ],
    "ans": 0,
    "exp": "In Ascidia (Urochordata), the notochord is confined to the tail of the free-swimming larva and disappears completely upon adult metamorphosis."
  },
  {
    "q": "Which of the following fishes has a terminal mouth and bony skeleton?",
    "opts": [
      "Labeo rohita",
      "Scoliodon",
      "Trygon",
      "Torpedo"
    ],
    "ans": 0,
    "exp": "Labeo rohita is a bony fish (Osteichthyes) with an ossified skeleton and a terminal mouth located at the anterior tip of the head."
  }
];
extra39.forEach(m => addMcq(m.q, m.opts, m.ans, m.exp));

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
console.log(`Part 3 total questions: ${allQuestions.length} (AR: ${arQuestions.length}, MCQ: ${mcqQuestions.length})`);

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

console.log(`Part 3 KaTeX errors: ${katexErrors}`);

if (katexErrors === 0 && allQuestions.length === 180) {
  const outPath = path.join(__dirname, 'data_zoology_animal_kingdom_part3.js');
  const fileContent = `// Auto-generated data for Zoology Animal Kingdom Part 3: ${SUBTOPIC}\nmodule.exports = ${JSON.stringify(allQuestions, null, 2)};\n`;
  fs.writeFileSync(outPath, fileContent, 'utf8');
  console.log(`Successfully wrote ${outPath}`);
} else {
  console.error("Validation failed! Not writing output.");
  process.exit(1);
}
