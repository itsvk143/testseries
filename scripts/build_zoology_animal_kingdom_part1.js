const fs = require('fs');
const path = require('path');
const katex = require('katex');

const SUBTOPIC = "Basis of animal classification (levels of organization, symmetry, germ layers, coelom)";
const CHAPTER = "Animal Kingdom";
const SUBJECT = "Zoology";

const arDirections = "In the following questions, a statement of Assertion (A) is followed by a statement of Reason (R).\nChoose the correct option:\n(1) Both (A) and (R) are true and (R) is the correct explanation of (A)\n(2) Both (A) and (R) are true but (R) is not the correct explanation of (A)\n(3) (A) is true but (R) is false\n(4) (A) is false but (R) is true";

const arOptions = [
  "Both (A) and (R) are true and (R) is the correct explanation of (A)",
  "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
  "(A) is true but (R) is false",
  "(A) is false but (R) is true"
];

// 26 AR questions for Subtopic 1
const arData = [
  {
    a: "Sponges exhibit a cellular level of organisation.",
    r: "In sponges, the cells are arranged as loose cell aggregates and do not form true tissues.",
    ans: 0,
    exp: "In sponges (Porifera), although there is division of labour among different cell types (such as choanocytes, pinacocytes, and amoebocytes), the cells remain loose aggregates and do not organise into tissues."
  },
  {
    a: "Cnidarians and ctenophores possess a tissue level of organisation.",
    r: "In these animals, cells performing similar functions are organized into definite layers of tissues.",
    ans: 0,
    exp: "In coelenterates (cnidarians) and ctenophores, the arrangement of cells is more complex; cells performing identical functions cluster together to form true tissues (such as epitheliomuscular tissue and nerve nets)."
  },
  {
    a: "Platyhelminthes exhibit an organ level of organisation.",
    r: "In Platyhelminthes, tissues group together to form distinct organs, each specialized for a particular physiological function.",
    ans: 0,
    exp: "Platyhelminthes (flatworms) are the earliest animals to exhibit the organ level of organisation, where tissues are grouped together into specialized functional structures like suckers, pharynx, and flame cells."
  },
  {
    a: "The digestive system of Platyhelminthes is termed an incomplete digestive system.",
    r: "It has a single external opening that functions both as mouth for ingestion and anus for egestion (blind-sac body plan).",
    ans: 0,
    exp: "An incomplete digestive system has only one opening to the outside of the body that serves both as mouth and anus, characteristic of the blind sac body plan found in coelenterates and flatworms."
  },
  {
    a: "Aschelminthes possess a complete digestive system.",
    r: "Their alimentary canal possesses two separate openings, a mouth and an anus, along with a well-developed muscular pharynx.",
    ans: 0,
    exp: "Aschelminthes (roundworms) are the first phylum to possess a complete digestive tract (tube-within-a-tube body plan) featuring both an anterior mouth and a posterior anus, supported by a muscular pharynx."
  },
  {
    a: "In an open circulatory system, tissues and cells are directly bathed in blood.",
    r: "Blood is pumped by the heart into large open spaces or body cavities termed sinuses rather than confined within continuous capillaries.",
    ans: 0,
    exp: "In an open circulatory system (found in arthropods, non-cephalopod molluscs, hemichordates), blood is pumped out of the heart into hemocoelic sinuses, directly bathing the organs in hemolymph without a closed capillary bed."
  },
  {
    a: "A closed circulatory system is considered more physiologically advantageous than an open circulatory system.",
    r: "In a closed system, blood flows through vessels of regulated diameter, allowing precise control of pressure and directional blood flow to metabolically active tissues.",
    ans: 0,
    exp: "A closed circulatory system (found in annelids, cephalopod molluscs, and vertebrates) allows blood pressure to be maintained and blood flow to be selectively and rapidly shunted to organs with high oxygen demand."
  },
  {
    a: "Adult echinoderms exhibit radial symmetry, while their larvae exhibit bilateral symmetry.",
    r: "During metamorphosis, the free-swimming bilateral dipleurula-type larva transforms into a bottom-dwelling adult with pentamerous radial symmetry.",
    ans: 0,
    exp: "Echinoderms are uniquely characterized by secondary radial symmetry: their free-swimming larvae are bilaterally symmetrical, while the adults develop pentamerous radial symmetry suited for their sessile/benthic lifestyle."
  },
  {
    a: "Radial symmetry is advantageous for sessile or slow-moving animals.",
    r: "Radial symmetry allows an organism to perceive environmental stimuli and detect food or predators equally well from any direction in a 360-degree radius.",
    ans: 0,
    exp: "Animals with radial symmetry (like sea anemones and jellyfish) interact with their environment from all sides equally, allowing them to capture food drifting from any direction."
  },
  {
    a: "Bilateral symmetry is closely associated with the evolutionary phenomenon of cephalization.",
    r: "Animals with bilateral symmetry move directionally with the anterior end encountering the environment first, concentrating sensory receptors and nerve centers at the head.",
    ans: 0,
    exp: "Bilateral symmetry facilitates directed, forward locomotion. As the anterior end moves forward first, sensory organs (eyes, antennae) and nervous ganglia cluster at the anterior pole, leading to cephalization."
  },
  {
    a: "Cnidarians are diploblastic animals.",
    r: "Their body wall develops from two embryonic germ layers: an outer ectoderm and an inner endoderm, separated by an undifferentiated non-cellular mesoglea.",
    ans: 0,
    exp: "Diploblastic animals possess two embryonic germ layers: ectoderm and endoderm. The intervening mesoglea is an undifferentiated gelatinous layer that does not contain cellular mesodermal organs."
  },
  {
    a: "Platyhelminthes to Chordates are classified as triploblastic animals.",
    r: "A third distinct cellular embryonic germ layer, the mesoderm, develops between the ectoderm and the endoderm.",
    ans: 0,
    exp: "From Platyhelminthes through Chordata, all bilateral animals are triploblastic, possessing three embryonic germ layers: ectoderm, mesoderm (which forms muscles, connective tissues, and coelom), and endoderm."
  },
  {
    a: "Flatworms (Platyhelminthes) are acoelomate animals despite being triploblastic.",
    r: "The space between the body wall and the gut wall is packed with mesodermal parenchyma tissue, leaving no cavity.",
    ans: 0,
    exp: "In Platyhelminthes, there is no fluid-filled body cavity between the ectoderm and gut; the entire space is filled with solid mesenchyme or parenchyma, so they are acoelomates."
  },
  {
    a: "Aschelminthes are described as pseudocoelomates.",
    r: "In Aschelminthes, the body cavity is derived from the embryonic blastocoel and is not lined by a continuous mesodermal peritoneum; instead, mesoderm appears as scattered pouches.",
    ans: 0,
    exp: "A pseudocoelom is a persistent blastocoel partially bordered by mesodermal pouches but lacking a complete peritoneal mesodermal lining, characteristic of roundworms (Aschelminthes)."
  },
  {
    a: "Annelids, arthropods, and molluscs are eucoelomate animals.",
    r: "Their body cavity is a true coelom completely lined by mesoderm on both the inner surface of the body wall and the outer surface of the alimentary canal.",
    ans: 0,
    exp: "Eucoelomates possess a true body cavity that forms within the mesoderm and is lined by the somatic (parietal) and splanchnic (visceral) layers of mesodermal peritoneum."
  },
  {
    a: "Arthropods possess an extensive, spacious true coelom in the adult stage.",
    r: "The body cavity of arthropods is primarily a hemocoel filled with blood, while the true coelom is reduced to the cavities of gonads and excretory glands.",
    ans: 3,
    exp: "Assertion is false because the spacious body cavity in adult arthropods is a hemocoel (a blastocoel-derived blood space), while the true coelom is severely reduced to gonadal and excretory end-sacs. Reason is true."
  },
  {
    a: "True metamerism involves both external and internal segmentation of the body.",
    r: "In an earthworm, segments show serial repetition of at least some organs like nephridia, blood vessels, and nerve ganglia.",
    ans: 0,
    exp: "Metamerism is true segmentation where the body is divided externally by intersegmental grooves and internally by septa into repeating segments (metameres) containing repeated organ systems."
  },
  {
    a: "Tapeworms (Taenia) exhibit true metameric segmentation.",
    r: "The proglottids of tapeworms are formed continuously from the neck region and each represents a self-contained reproductive unit.",
    ans: 3,
    exp: "Assertion is false: tapeworms exhibit pseudometamerism (strobilization), not true metamerism. The proglottids are budded off from the neck and each is independent, with no coordinated internal segmentation. Reason is a true description of proglottid formation."
  },
  {
    a: "The notochord is an endodermally derived skeletal structure.",
    r: "The notochord forms on the ventral side of the nerve cord in chordates.",
    ans: 3,
    exp: "Assertion is false: the notochord is mesodermally derived, not endodermally derived. Reason is true: the notochord lies on the ventral side of the dorsal tubular nerve cord."
  },
  {
    a: "All vertebrates are chordates, but all chordates are not vertebrates.",
    r: "In vertebrates, the embryonic notochord is replaced by a cartilaginous or bony vertebral column in the adult, whereas in protochordates, the notochord persists or is restricted without forming a vertebral column.",
    ans: 0,
    exp: "Vertebrata is a subphylum of Chordata. Protochordates (urochordates and cephalochordates) possess a notochord but never form a vertebral column, making all vertebrates chordates, but not all chordates vertebrates."
  },
  {
    a: "An enterocoelom is formed by the splitting of the embryonic mesodermal bands.",
    r: "Schizocoelous coelom is found in Echinodermata and Chordata.",
    ans: 3,
    exp: "Assertion is false (schizocoelom is formed by splitting of mesoderm; enterocoelom forms from archenteric outpocketings). Reason is also false (schizocoel is found in annelids, arthropods, molluscs; echinoderms and chordates are enterocoelous). Let's adjust this question to avoid both-false."
  },
  {
    a: "Cephalization is absent in radially symmetrical animals like adult starfish and jellyfish.",
    r: "Sessile and radially symmetrical animals do not have a preferred direction of motion, so sensory structures and nervous tissue are distributed circularly rather than clustered at one pole.",
    ans: 0,
    exp: "Radial symmetry is suited to perceiving stimuli equally from all sides, eliminating the selective advantage for an anterior head or concentrated brain (cephalization)."
  },
  {
    a: "The coelomic fluid in annelids functions as a hydrostatic skeleton.",
    r: "Incompressible fluid under pressure inside the closed coelomic compartments allows alternating longitudinal and circular muscle contractions to produce locomotion.",
    ans: 0,
    exp: "The coelomic fluid of earthworms provides a non-compressible hydrostatic skeleton against which circular and longitudinal muscles act antagonistically to extend and shorten segments during crawling."
  },
  {
    a: "Ctenophores possess biradial symmetry rather than perfect radial symmetry.",
    r: "Ctenophores have two retractable tentacles situated on opposite sides of the oral-aboral axis, allowing division into mirror halves only through two specific vertical planes.",
    ans: 0,
    exp: "Because ctenophores possess a pair of tentacles and an elliptical pharynx, their internal structures can only be divided into identical halves along two vertical planes, defining biradial symmetry."
  },
  {
    a: "Animals possessing bilateral symmetry are generally more active than radially symmetrical animals.",
    r: "Bilateral symmetry facilitates streamlining, directional movement, and concentration of sense organs and brain at the leading anterior end.",
    ans: 0,
    exp: "Bilateral symmetry allows directional propulsion, streamlining, and efficient predatory or escape behaviors because the organism moves head-first with forward-facing sensory organs."
  },
  {
    a: "The blastopore develops into the mouth in protostomes.",
    r: "In deuterostomes like echinoderms and chordates, the blastopore develops into the anus, and the mouth forms secondarily.",
    ans: 1,
    exp: "Both (A) and (R) are correct embryological facts. In protostomes (annelids, arthropods, molluscs), the embryonic blastopore gives rise to the mouth. In deuterostomes (echinoderms, hemichordates, chordates), the blastopore forms the anus while the mouth develops at a secondary site. (R) describes deuterostomes rather than explaining why protostomes develop mouth first."
  }
];

// Fix assertion 21 so it is valid:
arData[20] = {
  a: "Schizocoelic coelom and enterocoelic coelom differ in their mode of embryonic formation.",
  r: "A schizocoelom forms by the splitting of mesodermal masses, whereas an enterocoelom forms from outpouchings of the embryonic archenteron.",
  ans: 0,
  exp: "Schizocoelom (in annelids, arthropods, molluscs) originates from the splitting of solid mesodermal bands, while enterocoelom (in echinoderms, hemichordates, chordates) originates from gut pouches pinching off from the archenteron."
};

console.log("Built 26 AR questions for Part 1.");

const mcqData = [];
function addMcq(q, opts, ans, exp) {
  mcqData.push({ q, opts, ans, exp });
}

// MCQs for Subtopic 1
addMcq(
  "Which of the following phyla exhibits a cellular level of body organisation?",
  ["Porifera", "Coelenterata", "Ctenophora", "Platyhelminthes"],
  0,
  "Sponges (Phylum Porifera) exhibit a cellular level of organisation where cells are arranged as loose cell aggregates without forming true tissues."
);

addMcq(
  "Tissue level of body organisation is characteristic of which pair of phyla?",
  ["Porifera and Coelenterata", "Coelenterata and Ctenophora", "Platyhelminthes and Aschelminthes", "Annelida and Arthropoda"],
  1,
  "Both Coelenterata (Cnidaria) and Ctenophora exhibit a tissue level of organisation where cells performing similar functions form definite tissue layers."
);

addMcq(
  "Organ level of body organisation first appeared during evolution in the phylum:",
  ["Ctenophora", "Platyhelminthes", "Aschelminthes", "Annelida"],
  1,
  "Platyhelminthes (flatworms) is the first phylum in the animal kingdom to exhibit the organ level of organisation, where tissues unite to form distinct organs."
);

addMcq(
  "Which level of organisation is shared by all phyla from Aschelminthes to Chordata?",
  ["Cellular level", "Tissue level", "Organ level", "Organ-system level"],
  3,
  "In Aschelminthes, Annelida, Arthropoda, Mollusca, Echinodermata, Hemichordata, and Chordata, organs are functionally associated into organ systems."
);

addMcq(
  "An incomplete digestive system is characterized by:",
  ["Absence of an alimentary canal altogether", "A single opening that serves as both mouth and anus", "Two separate openings for mouth and anus", "Presence of a muscular pharynx without stomach"],
  1,
  "An incomplete digestive system has only one opening to the exterior that serves as both mouth (for ingestion) and anus (for egestion), as seen in Platyhelminthes and Cnidaria."
);

addMcq(
  "Which of the following animals possesses a blind-sac body plan with an incomplete digestive tract?",
  ["Fasciola (Liver fluke)", "Ascaris (Roundworm)", "Pheretima (Earthworm)", "Periplaneta (Cockroach)"],
  0,
  "Fasciola hepatica (flatworm, Platyhelminthes) has an incomplete, branched alimentary canal with only an oral mouth opening and no anus."
);

addMcq(
  "A complete digestive system with two separate openings (mouth and anus) is first seen in:",
  ["Platyhelminthes", "Aschelminthes", "Annelida", "Cnidaria"],
  1,
  "Aschelminthes (roundworms) is the earliest phylum to possess a complete alimentary canal with an anterior mouth, muscular pharynx, and posterior anus."
);

addMcq(
  "In an open circulatory system, blood is pumped by the heart into:",
  ["Capillaries of extremely fine diameter", "Large open body spaces called sinuses (hemocoel)", "Closed dorsal and ventral vessels", "Lymphatic ducts"],
  1,
  "In an open circulatory system, the heart pumps blood into large spaces or sinuses (the hemocoel), directly bathing the cells and tissues."
);

addMcq(
  "Which of the following groups of animals possesses an open circulatory system?",
  ["Annelids and cephalopod molluscs", "Arthropods and non-cephalopod molluscs", "Vertebrates and annelids", "Amphioxus and earthworm"],
  1,
  "Arthropods and non-cephalopod molluscs (such as snails and bivalves) have an open circulatory system, whereas annelids and cephalopods have closed circulation."
);

addMcq(
  "Closed circulatory system is present in which of the following non-chordate animals?",
  ["Pheretima (Earthworm)", "Periplaneta (Cockroach)", "Pila (Apple snail)", "Balanoglossus (Tongue worm)"],
  0,
  "Pheretima (earthworm, phylum Annelida) possesses a closed circulatory system where blood is confined to continuous blood vessels and capillaries."
);

addMcq(
  "Which of the following is an advantage of a closed circulatory system over an open circulatory system?",
  [
    "Blood volume is vastly reduced",
    "Pressure can be maintained and blood flow can be precisely regulated and directed to specific organs",
    "Blood cells are not needed",
    "Heart is not required"
  ],
  1,
  "In a closed circulatory system, high arterial blood pressure can be generated, and vascular resistance can be modulated to direct blood specifically where metabolic demand is greatest."
);

addMcq(
  "Animals that cannot be divided into two equal halves along any plane passing through their center are termed:",
  ["Radially symmetrical", "Bilaterally symmetrical", "Asymmetrical", "Biradially symmetrical"],
  2,
  "Asymmetrical animals (such as most sponges and adult snails) cannot be divided into identical halves by any plane passing through the central axis."
);

addMcq(
  "Which of the following organisms is typically asymmetrical?",
  ["Sycon (Scypha)", "Aurelia (Jellyfish)", "Pleurobrachia", "Asterias (Starfish)"],
  0,
  "Sponges such as Sycon are typically asymmetrical (or irregularly shaped), lacking any defined axis of symmetry."
);

addMcq(
  "When any plane passing through the central axis of the body divides the organism into two identical halves, it is called:",
  ["Bilateral symmetry", "Radial symmetry", "Asymmetry", "Spherical symmetry"],
  1,
  "Radial symmetry describes a body organization where any longitudinal plane passing through the central oral-aboral axis divides the body into equal mirror-image halves."
);

addMcq(
  "Which of the following sets of organisms exhibits radial symmetry throughout their adult life?",
  ["Spongilla, Ascaris, and Taenia", "Coelenterates, Ctenophores, and adult Echinoderms", "Annelids, Arthropods, and Molluscs", "Platyhelminthes, Nematodes, and Chordates"],
  1,
  "Cnidarians (coelenterates), ctenophores, and adult echinoderms exhibit radial symmetry."
);

addMcq(
  "A unique feature of Phylum Echinodermata regarding body symmetry is that:",
  [
    "Both larvae and adults are bilaterally symmetrical",
    "Larvae are radially symmetrical, but adults are bilaterally symmetrical",
    "Larvae are bilaterally symmetrical, but adults are radially symmetrical",
    "Both larvae and adults are completely asymmetrical"
  ],
  2,
  "Echinoderm larvae are free-swimming and bilaterally symmetrical, but during metamorphosis, they develop pentamerous radial symmetry as adults."
);

addMcq(
  "Bilateral symmetry is defined as:",
  [
    "Body can be divided into identical halves in any vertical plane",
    "Body can be divided into identical left and right halves in only one plane (sagittal plane)",
    "Body cannot be divided into equal halves in any plane",
    "Body possesses two identical halves only when cut horizontally"
  ],
  1,
  "In bilateral symmetry, only one single vertical plane (the median longitudinal or sagittal plane) divides the body into mirror-image right and left halves."
);

addMcq(
  "Which was the first animal phylum to evolve bilateral symmetry?",
  ["Porifera", "Cnidaria", "Ctenophora", "Platyhelminthes"],
  3,
  "Platyhelminthes (flatworms) represents the earliest branch of bilateral animals (Bilateria), having evolved from radially symmetrical ancestors."
);

addMcq(
  "Cephalization refers to:",
  [
    "Concentration of sense organs, mouth, and nerve ganglia at the anterior end to form a head",
    "Formation of a hard shell over the visceral hump",
    "Development of paired lateral appendages",
    "Loss of the coelom during development"
  ],
  0,
  "Cephalization is the evolutionary trend wherein nervous tissue, sensory organs (eyes, chemical receptors), and feeding structures become concentrated at the anterior head end."
);

addMcq(
  "Cephalization is an evolutionary adaptation primarily associated with:",
  ["Sessile filter feeding", "Radial symmetry in deep oceans", "Bilateral symmetry and active forward locomotion", "Parasitic degeneration"],
  2,
  "Because bilaterally symmetrical animals move directionally head-first, concentrating sense organs and brain at the leading anterior pole provides immediate perception of what lies ahead."
);

addMcq(
  "In diploblastic animals, what is the nature of the layer between the ectoderm and endoderm?",
  ["Cellular mesoderm", "Undifferentiated non-cellular gelatinous mesoglea", "Coelomic peritoneum", "Adipose tissue"],
  1,
  "In diploblastic animals (Cnidaria, Ctenophora), an undifferentiated, non-cellular gelatinous layer called mesoglea lies between the outer ectoderm and inner endoderm."
);

addMcq(
  "Which of the following phyla consists exclusively of diploblastic animals?",
  ["Platyhelminthes and Aschelminthes", "Cnidaria and Ctenophora", "Annelida and Mollusca", "Arthropoda and Chordata"],
  1,
  "Cnidaria and Ctenophora are diploblastic phyla, developing from only two embryonic germ layers (ectoderm and endoderm)."
);

addMcq(
  "Triploblastic animals possess which three embryonic germ layers?",
  ["Ectoderm, mesoglea, and endoderm", "Ectoderm, mesoderm, and endoderm", "Epidermis, gastrodermis, and peritoneum", "Epiblast, hypoblast, and blastocoel"],
  1,
  "Triploblastic animals possess three distinct cellular germ layers: outer ectoderm, middle mesoderm, and inner endoderm."
);

addMcq(
  "Which of the following is a triploblastic, acoelomate animal?",
  ["Hydra", "Planaria (Platyhelminthes)", "Ascaris (Aschelminthes)", "Pheretima (Annelida)"],
  1,
  "Planaria is triploblastic (possesses ectoderm, mesoderm, and endoderm) but acoelomate, as its body interior is packed with mesodermal parenchyma without a body cavity."
);

addMcq(
  "A true coelom is defined as a fluid-filled body cavity that is:",
  [
    "Formed by the breakdown of endodermal cells",
    "Lined on both sides by mesoderm (peritoneum)",
    "Formed directly from the blastocoel without any mesodermal lining",
    "Filled exclusively with red blood cells"
  ],
  1,
  "A true coelom (eucoelom) is a secondary body cavity located between the gut wall and the body wall, completely lined by mesodermal epithelium (peritoneum)."
);

addMcq(
  "Animals in which the body cavity is absent and the gut is surrounded by solid mesodermal parenchyma are called:",
  ["Acoelomates", "Pseudocoelomates", "Coelomates", "Enterocoelomates"],
  0,
  "Acoelomates (such as flatworms) lack a body cavity; their internal organs are embedded in solid mesodermal parenchyma tissue."
);

addMcq(
  "Which of the following phyla is pseudocoelomate?",
  ["Platyhelminthes", "Aschelminthes", "Annelida", "Mollusca"],
  1,
  "Phylum Aschelminthes (roundworms) is uniquely characterized by a pseudocoelom, where the body cavity is not lined by mesoderm, but mesoderm occurs as scattered pouches."
);

addMcq(
  "The pseudocoelom of Aschelminthes is embryologically derived from the:",
  ["Archenteron", "Blastocoel of the blastula", "Coelomic pouch splitting", "Neural crest"],
  1,
  "The pseudocoelom is a persistent embryonic blastocoel that was not obliterated by invading mesoderm during gastrulation."
);

addMcq(
  "Which of the following animals is a pseudocoelomate?",
  ["Taenia solium", "Wuchereria bancrofti", "Hirudinaria granulosa", "Sepia officinalis"],
  1,
  "Wuchereria bancrofti (filarial roundworm) belongs to Aschelminthes and is pseudocoelomate."
);

addMcq(
  "A true coelom formed by the splitting of the embryonic mesodermal bands is termed:",
  ["Pseudocoelom", "Schizocoelom", "Enterocoelom", "Blastocoel"],
  1,
  "A schizocoelom forms when solid paired masses of mesoderm split internally to create the coelomic cavity (schizocoely), characteristic of annelids, arthropods, and molluscs."
);

addMcq(
  "Which of the following groups of phyla are schizocoelomates?",
  ["Annelida, Arthropoda, and Mollusca", "Echinodermata, Hemichordata, and Chordata", "Porifera, Cnidaria, and Ctenophora", "Platyhelminthes and Aschelminthes"],
  0,
  "Annelida, Arthropoda, and Mollusca are schizocoelomates, forming their coelom by the splitting of embryonic mesoderm."
);

addMcq(
  "A true coelom that develops as outpocketings (pouches) from the embryonic archenteron (primitive gut) is called:",
  ["Schizocoelom", "Enterocoelom", "Pseudocoelom", "Hemocoel"],
  1,
  "An enterocoelom forms when paired pouches bud off from the archenteron of the gastrula and expand to form the coelomic lining, characteristic of deuterostomes."
);

addMcq(
  "Which of the following sets of phyla are enterocoelomates?",
  ["Annelida, Arthropoda, and Mollusca", "Echinodermata, Hemichordata, and Chordata", "Aschelminthes and Annelida", "Platyhelminthes and Cnidaria"],
  1,
  "Echinodermata, Hemichordata, and Chordata are enterocoelomates (deuterostomes), forming their coelom from archenteric outpocketings."
);

addMcq(
  "The primary body cavity in adult arthropods and molluscs that contains hemolymph is termed:",
  ["Pseudocoelom", "Hemocoel", "Enterocoel", "Spongocoel"],
  1,
  "The hemocoel is a spacious blood-filled sinus cavity derived from the blastocoel, which largely replaces the reduced coelom in adult arthropods and molluscs."
);

addMcq(
  "In which of the following animals is the true coelom reduced to small cavities around the gonads, heart, and excretory organs?",
  ["Periplaneta (Cockroach)", "Pheretima (Earthworm)", "Fasciola (Liver fluke)", "Amphioxus (Lancelet)"],
  0,
  "In cockroaches (arthropods), the main functional body cavity is a hemocoel, while the true coelom is restricted to gonadal and pericardial spaces."
);

addMcq(
  "Metameric segmentation (metamerism) is a key diagnostic characteristic of which phylum?",
  ["Mollusca", "Annelida", "Aschelminthes", "Platyhelminthes"],
  1,
  "Metameric segmentation, in which the body is divided externally and internally into repeating segments (metameres), is characteristic of Annelida."
);

addMcq(
  "Which of the following sets of phyla exhibits metameric segmentation?",
  ["Annelida, Arthropoda, and Chordata", "Platyhelminthes, Aschelminthes, and Annelida", "Mollusca, Echinodermata, and Hemichordata", "Porifera, Cnidaria, and Ctenophora"],
  0,
  "True metamerism is found in Annelida (external and internal), Arthropoda (mostly external and specialized into tagmata), and Chordata (internal segmentation of vertebrae, ribs, muscles, and spinal nerves)."
);

addMcq(
  "Internal metamerism in human beings is reflected in the arrangement of:",
  ["Skin hairs", "Vertebrae, ribs, intercostal muscles, and spinal nerves", "Fingers and toes", "Lobes of the liver"],
  1,
  "In humans and other chordates, metamerism is preserved internally as serially repeated vertebrae, ribs, somite-derived musculature, and spinal nerves."
);

addMcq(
  "Pseudometamerism (false segmentation) is found in:",
  ["Earthworm (Pheretima)", "Tapeworm (Taenia)", "Leech (Hirudinaria)", "Centipede (Scolopendra)"],
  1,
  "Tapeworms (Taenia) show pseudometamerism where segments (proglottids) proliferate continuously from the neck region and are independent units, without true embryonic metamerism."
);

addMcq(
  "The notochord is an embryonic skeletal structure derived from which embryonic germ layer?",
  ["Ectoderm", "Endoderm", "Mesoderm", "Mesoglea"],
  2,
  "The notochord is a flexible rod-like structure derived from the embryonic mesoderm, located dorsally between the nerve cord and the gut."
);

addMcq(
  "Which of the following statements about the notochord is INCORRECT?",
  [
    "It is formed on the dorsal side during embryonic development in chordates",
    "It is mesodermal in origin",
    "It is present in all non-chordates from Porifera to Hemichordata",
    "In vertebrates, it is replaced by a vertebral column in adults"
  ],
  2,
  "Non-chordates (Porifera to Hemichordata) completely lack a notochord. A notochord is unique to phylum Chordata."
);

addMcq(
  "Animals that do NOT form a notochord at any stage of their life cycle are called:",
  ["Protochordates", "Non-chordates", "Vertebrates", "Agnatha"],
  1,
  "Animals that do not develop a notochord at any developmental stage are grouped as non-chordates (from Porifera to Hemichordata)."
);

addMcq(
  "In protostomes, the embryonic blastopore of the gastrula develops into the:",
  ["Mouth", "Anus", "Notochord", "Coelom"],
  0,
  "In protostomes (such as annelids, arthropods, and molluscs), the blastopore of the gastrula directly develops into the mouth."
);

addMcq(
  "In deuterostomes, the embryonic blastopore develops into the:",
  ["Mouth", "Anus", "Brain", "Coelom"],
  1,
  "In deuterostomes (echinoderms, hemichordates, and chordates), the blastopore develops into the anus, while the mouth develops secondarily from a new opening."
);

addMcq(
  "Which of the following cleavage patterns is characteristic of protostomes?",
  ["Spiral and determinate cleavage", "Radial and indeterminate cleavage", "Superficial and meroblastic cleavage", "Discoidal cleavage"],
  0,
  "Protostomes characteristically exhibit spiral and determinate cleavage, meaning the developmental fate of each embryonic blastomere is fixed early in development."
);

addMcq(
  "Deuterostomes are characterized by which type of embryonic cleavage?",
  ["Spiral and determinate cleavage", "Radial and indeterminate cleavage", "Asymmetric cleavage", "Rotational determinate cleavage"],
  1,
  "Deuterostomes (echinoderms and chordates) exhibit radial and indeterminate cleavage, where blastomeres retain totipotency and can each form a complete embryo if separated (basis of identical twins)."
);

addMcq(
  "Identical (monozygotic) twins can form in humans because human embryos exhibit:",
  ["Spiral determinate cleavage", "Indeterminate (regulative) cleavage", "Acoelomate cleavage", "Superficial cleavage"],
  1,
  "Because chordates undergo indeterminate (regulative) cleavage, early embryonic blastomeres retain complete developmental potential; if separated, each can develop into a complete, normal infant."
);

addMcq(
  "Which of the following pairs of phyla are BOTH deuterostomes?",
  ["Annelida and Arthropoda", "Mollusca and Platyhelminthes", "Echinodermata and Chordata", "Aschelminthes and Annelida"],
  2,
  "Echinodermata and Chordata (along with Hemichordata) are deuterostomes, sharing enterocoelous coelom formation, radial indeterminate cleavage, and blastopore becoming the anus."
);

addMcq(
  "Which of the following is a primary function of the coelomic fluid in coelomates?",
  [
    "Acts as a shock absorber protecting internal organs from mechanical trauma",
    "Provides a hydrostatic skeleton for movement in soft-bodied animals",
    "Facilitates diffusion and transport of nutrients, gases, and metabolic wastes",
    "All of the above"
  ],
  3,
  "The coelomic fluid cushions internal viscera, functions as a hydrostatic skeleton, and aids in the distribution of nutrients, dissolved gases, and excretion."
);

addMcq(
  "Why is bilateral symmetry considered an evolutionary advancement over radial symmetry?",
  [
    "It allows for faster, directional movement and efficient predator-prey interactions through cephalization",
    "It eliminates the need for a digestive system",
    "It prevents the formation of mesoderm",
    "It makes animals smaller in size"
  ],
  0,
  "Bilateral symmetry streamlines the body for forward propulsion and enables cephalization (concentration of sensory apparatus at the leading edge), conferring substantial advantages in active locomotion and hunting."
);

addMcq(
  "Biradial symmetry is uniquely exhibited by organisms belonging to which phylum?",
  ["Porifera", "Ctenophora", "Platyhelminthes", "Echinodermata"],
  1,
  "Ctenophores (comb jellies) possess biradial symmetry due to the combination of radial canal architecture with a pair of opposite retractable tentacles."
);

addMcq(
  "Which of the following organisms does NOT possess a true coelom?",
  ["Ascaris lumbricoides", "Hirudinaria granulosa", "Pinctada fucata", "Branchiostoma lanceolatum"],
  0,
  "Ascaris lumbricoides is a nematode (Aschelminthes) and possesses a pseudocoelom, not a true coelom."
);

addMcq(
  "What type of body cavity is present in flatworms like Fasciola hepatica?",
  ["Coelom", "Pseudocoelom", "Acoelomate (no cavity)", "Hemocoel"],
  2,
  "Fasciola hepatica (Platyhelminthes) is an acoelomate; its internal organs are embedded in solid mesodermal parenchyma without any body cavity."
);

addMcq(
  "Which phylum is characterized by animals that are triploblastic, bilaterally symmetrical, and acoelomate?",
  ["Cnidaria", "Ctenophora", "Platyhelminthes", "Aschelminthes"],
  2,
  "Platyhelminthes is the only major triploblastic phylum that remains completely acoelomate."
);

addMcq(
  "Which phylum is characterized by animals that are triploblastic, bilaterally symmetrical, and pseudocoelomate?",
  ["Platyhelminthes", "Aschelminthes", "Annelida", "Mollusca"],
  1,
  "Aschelminthes (roundworms) is triploblastic, bilaterally symmetrical, and pseudocoelomate."
);

addMcq(
  "Which of the following animals is triploblastic, bilaterally symmetrical, and eucoelomate?",
  ["Hydra", "Taenia", "Ascaris", "Pheretima"],
  3,
  "Pheretima (earthworm, phylum Annelida) is triploblastic, bilaterally symmetrical, and possesses a true coelom (eucoelomate)."
);

addMcq(
  "Match Column I (Level of Organisation) with Column II (Phylum):\n(A) Cellular level - (i) Platyhelminthes\n(B) Tissue level - (ii) Aschelminthes\n(C) Organ level - (iii) Porifera\n(D) Organ system level - (iv) Cnidaria",
  [
    "(A)-(iii), (B)-(iv), (C)-(i), (D)-(ii)",
    "(A)-(iii), (B)-(i), (C)-(iv), (D)-(ii)",
    "(A)-(iv), (B)-(iii), (C)-(i), (D)-(ii)",
    "(A)-(i), (B)-(ii), (C)-(iii), (D)-(iv)"
  ],
  0,
  "Cellular level = Porifera (iii); Tissue level = Cnidaria (iv); Organ level = Platyhelminthes (i); Organ system level = Aschelminthes onwards (ii)."
);

addMcq(
  "Match Column I (Phylum) with Column II (Type of Coelom):\n(A) Platyhelminthes - (i) Coelomate\n(B) Aschelminthes - (ii) Acoelomate\n(C) Annelida - (iii) Pseudocoelomate",
  [
    "(A)-(ii), (B)-(iii), (C)-(i)",
    "(A)-(i), (B)-(ii), (C)-(iii)",
    "(A)-(iii), (B)-(ii), (C)-(i)",
    "(A)-(ii), (B)-(i), (C)-(iii)"
  ],
  0,
  "Platyhelminthes are acoelomate (ii); Aschelminthes are pseudocoelomate (iii); Annelida are coelomate (i)."
);

addMcq(
  "Match Column I (Phylum) with Column II (Symmetry):\n(A) Adult Echinodermata - (i) Asymmetrical\n(B) Larval Echinodermata - (ii) Radial symmetry\n(C) Spongilla - (iii) Bilateral symmetry",
  [
    "(A)-(ii), (B)-(iii), (C)-(i)",
    "(A)-(iii), (B)-(ii), (C)-(i)",
    "(A)-(i), (B)-(ii), (C)-(iii)",
    "(A)-(ii), (B)-(i), (C)-(iii)"
  ],
  0,
  "Adult echinoderms have radial symmetry (ii); larval echinoderms have bilateral symmetry (iii); Spongilla is asymmetrical (i)."
);

addMcq(
  "Which of the following is NOT a fundamental basis for classifying Kingdom Animalia?",
  ["Level of body organisation", "Body symmetry and coelom", "Presence or absence of notochord", "Method of asexual binary fission alone"],
  3,
  "Kingdom Animalia is classified primarily based on level of organisation, body symmetry, germ layers, coelom, segmentation, and notochord."
);

console.log(`Built ${arData.length} AR and ${mcqData.length} MCQs so far for Part 1.`);


const extra95 = [
  {
    "q": "Which of the following embryonic layers gives rise to the muscular and connective tissues in triploblastic animals?",
    "opts": [
      "Ectoderm",
      "Mesoderm",
      "Endoderm",
      "Mesoglea"
    ],
    "ans": 1,
    "exp": "The mesoderm gives rise to muscles, connective tissues, bones/cartilages, blood, vascular system, and the lining of the coelom (peritoneum)."
  },
  {
    "q": "In triploblastic animals, the nervous system and epidermis are embryologically derived from the:",
    "opts": [
      "Ectoderm",
      "Mesoderm",
      "Endoderm",
      "Blastocoel"
    ],
    "ans": 0,
    "exp": "The ectoderm differentiates into the epidermis, hair, nails, lenses of the eyes, and the entire central and peripheral nervous systems."
  },
  {
    "q": "The epithelial lining of the alimentary canal and digestive glands (liver and pancreas) is derived from:",
    "opts": [
      "Ectoderm",
      "Mesoderm",
      "Endoderm",
      "Peritoneum"
    ],
    "ans": 2,
    "exp": "The endoderm forms the epithelial lining of the gastrointestinal tract, respiratory tract, urinary bladder, and major digestive glands like the liver and pancreas."
  },
  {
    "q": "Mesoglea present in diploblastic animals is:",
    "opts": [
      "A cellular tissue layer with its own blood supply",
      "An undifferentiated, non-cellular gelatinous matrix",
      "Derived strictly from the mesoderm",
      "Lined by peritoneal epithelium"
    ],
    "ans": 1,
    "exp": "Mesoglea in cnidarians and ctenophores is an undifferentiated, non-cellular gelatinous layer located between the outer ectoderm and inner endoderm, sometimes containing amoebocytes but never true organs."
  },
  {
    "q": "The body plan in which the body consists of a loose aggregate of cells without true tissues or organ systems is called:",
    "opts": [
      "Cell aggregate body plan",
      "Blind sac body plan",
      "Tube-within-a-tube body plan",
      "Coelomic body plan"
    ],
    "ans": 0,
    "exp": "Sponges (phylum Porifera) exhibit the cell aggregate body plan, where cells show physiological division of labour but do not form coordinated tissues."
  },
  {
    "q": "Which of the following phyla exhibits a blind-sac body plan?",
    "opts": [
      "Porifera",
      "Coelenterata and Platyhelminthes",
      "Aschelminthes and Annelida",
      "Arthropoda and Mollusca"
    ],
    "ans": 1,
    "exp": "A blind-sac body plan has a single opening that serves for both ingestion and egestion, characteristic of Coelenterata, Ctenophora, and Platyhelminthes."
  },
  {
    "q": "In a tube-within-a-tube body plan, the outer tube is formed by the body wall and the inner tube is formed by the:",
    "opts": [
      "Nerve cord",
      "Alimentary canal",
      "Coelomic cavity",
      "Vertebral column"
    ],
    "ans": 1,
    "exp": "In the tube-within-a-tube body plan (Aschelminthes to Chordata), the outer tube is the body wall and the inner tube is the complete alimentary canal extending from mouth to anus."
  },
  {
    "q": "The tube-within-a-tube body plan is subdivided into protostomic and deuterostomic plans based on the:",
    "opts": [
      "Number of legs",
      "Embryonic fate of the blastopore",
      "Length of the intestine",
      "Presence of scales"
    ],
    "ans": 1,
    "exp": "The distinction between protostomes (mouth forms first from blastopore) and deuterostomes (anus forms first from blastopore) is based on the developmental fate of the embryonic blastopore."
  },
  {
    "q": "Which plane divides a bilaterally symmetrical animal into dorsal and ventral portions?",
    "opts": [
      "Sagittal plane",
      "Frontal (coronal) plane",
      "Transverse plane",
      "Radial plane"
    ],
    "ans": 1,
    "exp": "A frontal (coronal) plane runs longitudinally along the length of the body, dividing it into superior/dorsal (back) and inferior/ventral (belly) halves."
  },
  {
    "q": "A transverse plane divides a bilaterally symmetrical animal into:",
    "opts": [
      "Left and right mirror halves",
      "Dorsal and ventral halves",
      "Anterior and posterior portions",
      "Oral and aboral halves"
    ],
    "ans": 2,
    "exp": "A transverse (cross-sectional) plane cuts perpendicularly across the longitudinal axis, dividing the organism into anterior (cranial) and posterior (caudal) parts."
  },
  {
    "q": "The only plane that divides a bilateral organism into identical right and left mirror halves is the:",
    "opts": [
      "Median sagittal plane",
      "Horizontal frontal plane",
      "Transverse plane",
      "Oblique plane"
    ],
    "ans": 0,
    "exp": "The median sagittal plane runs longitudinally from head to tail down the midline, dividing the bilateral body into symmetrical right and left halves."
  },
  {
    "q": "Which of the following animals has secondary asymmetry in the adult stage due to torsion during development?",
    "opts": [
      "Pila (Apple snail)",
      "Dentalium (Tusk shell)",
      "Chiton (Chaetopleura)",
      "Octopus"
    ],
    "ans": 0,
    "exp": "Gastropod molluscs like Pila (apple snail) exhibit bilateral symmetry in their larval stage, but undergo $180^\\circ$ torsion during development, rendering the adult asymmetrical."
  },
  {
    "q": "Which of the following is an example of an organism with pentamerous radial symmetry?",
    "opts": [
      "Asterias (Starfish)",
      "Aurelia (Jellyfish)",
      "Pleurobrachia",
      "Hydra"
    ],
    "ans": 0,
    "exp": "Adult echinoderms like Asterias (starfish) exhibit pentamerous radial symmetry, meaning the body parts are arranged in multiples of five radiating from a central disk."
  },
  {
    "q": "The oral surface of a jellyfish or starfish is the surface that:",
    "opts": [
      "Bears the mouth",
      "Is opposite to the mouth",
      "Bears the anus",
      "Attaches to the rocks"
    ],
    "ans": 0,
    "exp": "In radially symmetrical animals, the oral surface bears the mouth, while the opposite side is termed the aboral surface."
  },
  {
    "q": "In sea urchins (Echinus) and starfish (Asterias), the mouth is located on the:",
    "opts": [
      "Ventral (oral) surface and anus on dorsal (aboral) surface",
      "Dorsal surface and anus on ventral surface",
      "Lateral surface only",
      "Anterior tip"
    ],
    "ans": 0,
    "exp": "In echinoderms, the mouth is situated on the lower, substratum-facing ventral (oral) surface, while the anus is positioned on the upper dorsal (aboral) surface."
  },
  {
    "q": "Which of the following is NOT an advantage of possessing a true coelom?",
    "opts": [
      "Provides space for internal organs to grow, coil, and move independently of the body wall",
      "Coelomic fluid acts as a hydrostatic skeleton for movement",
      "Eliminates the requirement of a nervous system",
      "Protects visceral organs from external mechanical shocks"
    ],
    "ans": 2,
    "exp": "Possessing a coelom has no bearing on eliminating the nervous system; coelomates possess well-developed, centralized nervous systems."
  },
  {
    "q": "The thin mesodermal membrane that lines the inner surface of the body wall in a coelomate is called the:",
    "opts": [
      "Somatic (parietal) peritoneum",
      "Splanchnic (visceral) peritoneum",
      "Mesentery",
      "Mesoglea"
    ],
    "ans": 0,
    "exp": "The somatic (parietal) peritoneum is the mesodermal epithelial sheet that lines the inner aspect of the body wall in eucoelomates."
  },
  {
    "q": "The mesodermal membrane that covers the outer surface of the visceral organs and alimentary canal is the:",
    "opts": [
      "Parietal peritoneum",
      "Visceral (splanchnic) peritoneum",
      "Ectoderm",
      "Endoderm"
    ],
    "ans": 1,
    "exp": "The visceral (splanchnic) peritoneum is the mesodermal layer that tightly encloses the viscera and gut tube within the coelom."
  },
  {
    "q": "Double layers of peritoneum that suspend the digestive tract and other viscera from the dorsal body wall are called:",
    "opts": [
      "Mesenteries",
      "Mesoglea",
      "Parenchyma",
      "Septa"
    ],
    "ans": 0,
    "exp": "Mesenteries are double folds of peritoneal membrane that anchor the alimentary canal and visceral organs to the abdominal body wall, carrying blood vessels and nerves."
  },
  {
    "q": "In Ascaris (roundworm), high hydrostatic pressure of the pseudocoelomic fluid functions to:",
    "opts": [
      "Keep the circular body taut and maintain cylindrical body form against external pressure",
      "Pump blood to the gills",
      "Filter red blood cells",
      "Secrete chitinous shells"
    ],
    "ans": 0,
    "exp": "The non-compressible pseudocoelomic fluid in Ascaris is maintained under high turgor pressure, keeping the body rigid and elongated, acting as a hydrostatic skeleton against which longitudinal muscles pull."
  },
  {
    "q": "Why do flatworms (Platyhelminthes) NOT require a specialized circulatory or respiratory system?",
    "opts": [
      "Their dorsoventrally flattened body gives a high surface area-to-volume ratio, allowing direct diffusion of gases and nutrients to all cells",
      "They have an open circulatory system with hemolymph",
      "They possess tracheal tubes throughout the parenchyma",
      "They rely on lungs embedded in the parenchyma"
    ],
    "ans": 0,
    "exp": "Flatworms are so thin and flat that no cell is far from the external surface or gut branches, allowing efficient exchange of oxygen, carbon dioxide, and nutrients by simple diffusion without a circulatory system."
  },
  {
    "q": "Metamerism in Annelida is characterized by the presence of:",
    "opts": [
      "External grooves (annuli) matching internal transverse partitions (septa)",
      "Only superficial skin folds without internal divisions",
      "Loss of all internal organs",
      "Segments that separate and swim away as adults"
    ],
    "ans": 0,
    "exp": "In annelids, the body is divided externally by ring-like annuli and internally by transverse mesodermal septa, dividing the coelom into distinct compartmentalized metameres."
  },
  {
    "q": "Tagmatization (specialization and fusion of segments into distinct body regions like head, thorax, and abdomen) is an evolutionary hallmark of:",
    "opts": [
      "Porifera",
      "Platyhelminthes",
      "Arthropoda",
      "Aschelminthes"
    ],
    "ans": 2,
    "exp": "In arthropods, metamerism is modified by tagmatization: groups of embryonic metameres fuse and specialize into functional body units called tagmata (e.g. head, thorax, abdomen)."
  },
  {
    "q": "In chordates, the nerve cord differs fundamentally from that of non-chordates because it is:",
    "opts": [
      "Dorsal, hollow, and single",
      "Ventral, solid, and double",
      "Lateral and non-tubular",
      "Absent in embryonic stages"
    ],
    "ans": 0,
    "exp": "Chordates are characterized by a single, dorsal, hollow tubular nerve cord derived from ectoderm, whereas non-chordates (like annelids and arthropods) have a double, ventral, solid nerve cord with paired ganglia."
  },
  {
    "q": "In an earthworm or cockroach (non-chordates), the central nerve cord is:",
    "opts": [
      "Ventral, solid, and double with segmental ganglia",
      "Dorsal, hollow, and single",
      "Dorsal, solid, and triple",
      "Embedded inside the vertebral column"
    ],
    "ans": 0,
    "exp": "Non-chordates possess a nerve cord that is ventral, solid, double, and characterized by paired segmental ganglia along its length."
  },
  {
    "q": "Which of the following correctly describes the position of the heart in chordates versus non-chordates?",
    "opts": [
      "Chordates: Ventral; Non-chordates: Dorsal (if present)",
      "Chordates: Dorsal; Non-chordates: Ventral",
      "Chordates: Lateral; Non-chordates: Ventral",
      "Both possess strictly ventral hearts"
    ],
    "ans": 0,
    "exp": "In chordates, the heart is positioned ventrally (below the gut), whereas in non-chordates (such as earthworms, insects), the dorsal vessel or heart is located dorsally (above the gut)."
  },
  {
    "q": "A post-anal tail is an embryonic and/or adult feature found exclusively in:",
    "opts": [
      "Chordates",
      "Arthropods",
      "Annelids",
      "Echinoderms"
    ],
    "ans": 0,
    "exp": "A post-anal tail (an extension of the body past the anal opening, supported by the notochord or vertebrae and containing skeletal elements and muscles) is a diagnostic chordate feature."
  },
  {
    "q": "Which of the following is NOT one of the four fundamental diagnostic characteristics of Phylum Chordata?",
    "opts": [
      "Dorsal hollow nerve cord",
      "Notochord present at some developmental stage",
      "Pharyngeal gill slits",
      "Chitinous exoskeleton"
    ],
    "ans": 3,
    "exp": "A chitinous exoskeleton is diagnostic of Phylum Arthropoda, not Chordata. The four chordate hallmarks are notochord, dorsal hollow nerve cord, pharyngeal gill slits, and post-anal tail."
  },
  {
    "q": "In humans, the embryonic pharyngeal gill pouches give rise to:",
    "opts": [
      "Functional respiratory gill slits in adults",
      "Eustachian tube, middle ear cavity, tonsils, and parathyroid glands",
      "Thyroid cartilage alone",
      "Vertebral column"
    ],
    "ans": 1,
    "exp": "In terrestrial vertebrates (tetrapods), embryonic pharyngeal pouches do not open as gill slits; instead, they develop into adult structures like the Eustachian tube, tympanic cavity, tonsillar fossae, and parathyroids."
  },
  {
    "q": "Which of the following animals exhibits a complete lack of tissue organisation?",
    "opts": [
      "Euspongia (Bath sponge)",
      "Physalia (Portuguese man-of-war)",
      "Aurelia (Jellyfish)",
      "Pleurobrachia"
    ],
    "ans": 0,
    "exp": "Euspongia belongs to Porifera and operates at the cellular level of organisation, lacking true tissues."
  },
  {
    "q": "Digestion in sponges is exclusively:",
    "opts": [
      "Extracellular in a stomach cavity",
      "Intracellular within food vacuoles of choanocytes and amoebocytes",
      "Both extracellular and intracellular equally",
      "External by secreting enzymes into water"
    ],
    "ans": 1,
    "exp": "Sponges lack a digestive cavity; individual cells (choanocytes) ingest food particles by phagocytosis, and digestion occurs entirely intracellularly within food vacuoles."
  },
  {
    "q": "Both extracellular and intracellular digestion occur in which of the following phyla?",
    "opts": [
      "Cnidaria and Ctenophora",
      "Porifera only",
      "Aschelminthes and Chordata",
      "Arthropoda and Mollusca"
    ],
    "ans": 0,
    "exp": "In Cnidaria and Ctenophora, food is first broken down extracellularly in the gastrovascular cavity, and partially digested fragments are then engulfed by gastrodermal cells for intracellular digestion."
  },
  {
    "q": "From which phylum onwards is digestion exclusively extracellular within an internal digestive lumen?",
    "opts": [
      "Aschelminthes",
      "Cnidaria",
      "Platyhelminthes",
      "Porifera"
    ],
    "ans": 0,
    "exp": "From Aschelminthes onwards, with the evolution of a complete one-way alimentary canal, digestion is primarily extracellular within the gut lumen."
  },
  {
    "q": "The flame cells (protonephridia) of flatworms are primarily responsible for:",
    "opts": [
      "Respiration and digestion",
      "Osmoregulation and excretion",
      "Locomotion and defense",
      "Reproduction and fertilization"
    ],
    "ans": 1,
    "exp": "Flame cells (protonephridia) in flatworms regulate fluid balance (osmoregulation) and eliminate nitrogenous waste products (excretion)."
  },
  {
    "q": "Nephridia are the excretory and osmoregulatory structures found in:",
    "opts": [
      "Annelida",
      "Platyhelminthes",
      "Arthropoda",
      "Echinodermata"
    ],
    "ans": 0,
    "exp": "Nephridia are coiled, ciliated tubular structures that filter coelomic fluid and blood in annelids (e.g. earthworms) for excretion and osmoregulation."
  },
  {
    "q": "Malpighian tubules function as excretory organs in:",
    "opts": [
      "Arthropods (insects, arachnids, myriapods)",
      "Annelids",
      "Molluscs",
      "Echinoderms"
    ],
    "ans": 0,
    "exp": "Malpighian tubules are slender, blind-ended tubules located at the junction of the midgut and hindgut in insects and other terrestrial arthropods, excreting uric acid."
  },
  {
    "q": "The excretory organ in phylum Hemichordata is the:",
    "opts": [
      "Proboscis gland (glomerulus)",
      "Flame cell",
      "Malpighian tubule",
      "Nephridium"
    ],
    "ans": 0,
    "exp": "Hemichordates excrete nitrogenous wastes via a specialized excretory structure called the proboscis gland (or glomerulus) located in the proboscis."
  },
  {
    "q": "Which of the following phyla completely LACKS a specialized excretory system?",
    "opts": [
      "Echinodermata",
      "Mollusca",
      "Annelida",
      "Arthropoda"
    ],
    "ans": 0,
    "exp": "Echinoderms possess no specialized excretory organs; nitrogenous wastes (ammonia) diffuse directly out into the seawater across the thin walls of tube feet and dermal branchiae."
  },
  {
    "q": "Which of the following animal groups has a water vascular system (ambulacral system) used for locomotion, food capture, and respiration?",
    "opts": [
      "Porifera",
      "Echinodermata",
      "Cnidaria",
      "Mollusca"
    ],
    "ans": 1,
    "exp": "Echinoderms are uniquely defined by a water vascular system of coelomic origin, terminating in tube feet (podia) that perform locomotion, food capture, and respiration."
  },
  {
    "q": "A water canal system (with ostia, spongocoel, and osculum) is found in:",
    "opts": [
      "Porifera (sponges)",
      "Echinodermata",
      "Cnidaria",
      "Hemichordata"
    ],
    "ans": 0,
    "exp": "Sponges possess a water canal system (aquiferous system) through which water enters via minute pores (ostia) into a central cavity (spongocoel) and exits via the osculum."
  },
  {
    "q": "Do not confuse: Water Canal System is found in _____ while Water Vascular System is found in _____.",
    "opts": [
      "Porifera; Echinodermata",
      "Echinodermata; Porifera",
      "Cnidaria; Annelida",
      "Mollusca; Arthropoda"
    ],
    "ans": 0,
    "exp": "Water canal system is characteristic of Porifera (sponges) for filter feeding; water vascular system is characteristic of Echinodermata (starfish) for locomotion and respiration."
  },
  {
    "q": "Which of the following is true for non-chordates?",
    "opts": [
      "Notochord is absent",
      "Central nervous system is dorsal and hollow",
      "Pharynx is perforated by gill slits",
      "Heart is ventral if present"
    ],
    "ans": 0,
    "exp": "In non-chordates, the notochord is absent, the central nervous system is ventral, solid, and double, pharyngeal gill slits are absent, and the heart is dorsal (if present)."
  },
  {
    "q": "Which of the following is true for chordates?",
    "opts": [
      "Notochord is present at some stage of life",
      "Central nervous system is ventral and solid",
      "Heart is dorsal",
      "Post-anal tail is always absent"
    ],
    "ans": 0,
    "exp": "Chordates are characterized by the presence of a notochord, dorsal hollow nerve cord, pharyngeal gill slits, ventral heart, and post-anal tail."
  },
  {
    "q": "Which of the following statements about coelom formation in protostomes versus deuterostomes is correct?",
    "opts": [
      "Protostomes are schizocoelous; deuterostomes are enterocoelous",
      "Protostomes are enterocoelous; deuterostomes are schizocoelous",
      "Both are schizocoelous",
      "Both are enterocoelous"
    ],
    "ans": 0,
    "exp": "In protostomes (annelids, arthropods, molluscs), the coelom forms by splitting of the mesoderm (schizocoely). In deuterostomes (echinoderms, chordates), the coelom forms from outpocketings of the archenteron (enterocoely)."
  },
  {
    "q": "Which of the following phyla contains organisms that are exclusively marine?",
    "opts": [
      "Ctenophora, Echinodermata, and Hemichordata",
      "Porifera, Cnidaria, and Annelida",
      "Platyhelminthes and Aschelminthes",
      "Arthropoda and Mollusca"
    ],
    "ans": 0,
    "exp": "Ctenophora, Echinodermata, and Hemichordata are three major phyla whose members are exclusively marine (no freshwater or terrestrial species)."
  },
  {
    "q": "Which of the following is a freshwater sponge?",
    "opts": [
      "Spongilla",
      "Euspongia",
      "Sycon",
      "Euplectella"
    ],
    "ans": 0,
    "exp": "Spongilla is the classic freshwater sponge; almost all other sponges are marine."
  },
  {
    "q": "Which of the following cnidarians lives in fresh water?",
    "opts": [
      "Hydra",
      "Physalia",
      "Aurelia",
      "Metridium"
    ],
    "ans": 0,
    "exp": "Hydra is a solitary freshwater cnidarian (polyp form); most other cnidarians are marine."
  },
  {
    "q": "Which of the following phyla has the greatest number of named species in Kingdom Animalia?",
    "opts": [
      "Arthropoda",
      "Mollusca",
      "Chordata",
      "Nematoda"
    ],
    "ans": 0,
    "exp": "Phylum Arthropoda is the largest phylum in the animal kingdom, comprising over two-thirds of all named animal species on Earth."
  },
  {
    "q": "The second largest animal phylum in terms of species diversity is:",
    "opts": [
      "Mollusca",
      "Annelida",
      "Chordata",
      "Platyhelminthes"
    ],
    "ans": 0,
    "exp": "Phylum Mollusca is the second largest animal phylum, surpassed in species diversity only by Arthropoda."
  },
  {
    "q": "The presence of a radula (a rasplike chitinous feeding organ) is a diagnostic feature of:",
    "opts": [
      "Mollusca (except bivalves)",
      "Arthropoda",
      "Echinodermata",
      "Annelida"
    ],
    "ans": 0,
    "exp": "The radula is a file-like rasping organ with chitinous teeth located in the buccal cavity of molluscs (such as snails and squids), used for scraping and tearing food."
  },
  {
    "q": "Which of the following mollusc classes lacks a radula due to sedentary filter-feeding habits?",
    "opts": [
      "Bivalvia (Pelecypoda, e.g. clams, oysters)",
      "Gastropoda (e.g. snails)",
      "Cephalopoda (e.g. squids)",
      "Scaphopoda"
    ],
    "ans": 0,
    "exp": "Bivalves (such as mussels and oysters) lack a head and radula because they feed by filtering microscopic plankton from water passing through their enlarged gills."
  },
  {
    "q": "Which of the following animals has a soft, unsegmented body covered by a calcareous shell secreted by a mantle?",
    "opts": [
      "Pila (Mollusca)",
      "Locusta (Arthropoda)",
      "Nereis (Annelida)",
      "Ascaris (Aschelminthes)"
    ],
    "ans": 0,
    "exp": "Molluscs such as Pila possess an unsegmented soft body divided into head, visceral mass, and muscular foot, with a mantle that secretes a protective calcareous shell."
  },
  {
    "q": "In which of the following animals is metameric segmentation visible both externally and internally?",
    "opts": [
      "Earthworm (Pheretima)",
      "Roundworm (Ascaris)",
      "Flatworm (Planaria)",
      "Starfish (Asterias)"
    ],
    "ans": 0,
    "exp": "The earthworm exhibits true homonomous metamerism where external grooves (annuli) correspond precisely with internal mesodermal septa."
  },
  {
    "q": "Which of the following animals exhibits bilateral symmetry as a larva but radial symmetry as an adult?",
    "opts": [
      "Ophiura (Brittle star)",
      "Aurelia (Jellyfish)",
      "Pleurobrachia",
      "Adamsia (Sea anemone)"
    ],
    "ans": 0,
    "exp": "Ophiura (brittle star, Phylum Echinodermata) has a bilaterally symmetrical ophiopluteus larva, which metamorphoses into a radially symmetrical five-armed adult."
  },
  {
    "q": "Which embryonic germ layer gives rise to the notochord in chordate embryos?",
    "opts": [
      "Mesoderm",
      "Ectoderm",
      "Endoderm",
      "Hypoblast"
    ],
    "ans": 0,
    "exp": "The notochord is a chordamesodermal structure derived from the embryonic mesoderm during early neurulation."
  },
  {
    "q": "An animal that is triploblastic, unsegmented, pseudocoelomate, and possesses a cuticle-covered cylindrical body belongs to Phylum:",
    "opts": [
      "Aschelminthes (Nematoda)",
      "Annelida",
      "Platyhelminthes",
      "Arthropoda"
    ],
    "ans": 0,
    "exp": "Nematodes (Aschelminthes) are characterized by being triploblastic, unsegmented, pseudocoelomate, cylindrical in cross-section, and enveloped in a tough collagenous cuticle."
  },
  {
    "q": "An animal that is triploblastic, dorsoventrally flattened, acoelomate, and possesses flame cells belongs to Phylum:",
    "opts": [
      "Platyhelminthes",
      "Aschelminthes",
      "Annelida",
      "Cnidaria"
    ],
    "ans": 0,
    "exp": "Platyhelminthes are dorsoventrally flattened (flatworms), triploblastic, acoelomate, and rely on flame cells (protonephridia) for osmoregulation."
  },
  {
    "q": "An animal that is triploblastic, coelomate, metamerically segmented, and possesses setae or parapodia for locomotion belongs to Phylum:",
    "opts": [
      "Annelida",
      "Arthropoda",
      "Mollusca",
      "Echinodermata"
    ],
    "ans": 0,
    "exp": "Annelids (such as Nereis and earthworms) are triploblastic, eucoelomate, metameric, and possess chitinous setae or fleshy parapodia for locomotion."
  },
  {
    "q": "An animal with a chitinous exoskeleton, jointed appendages, open circulation, and Malpighian tubules belongs to Phylum:",
    "opts": [
      "Arthropoda",
      "Annelida",
      "Mollusca",
      "Hemichordata"
    ],
    "ans": 0,
    "exp": "Arthropoda is uniquely defined by jointed appendages, an impermeable chitinous exoskeleton, open circulatory system with hemocoel, and Malpighian tubules."
  },
  {
    "q": "An animal with an unsegmented body, muscular foot, visceral hump, mantle, and calcareous shell belongs to Phylum:",
    "opts": [
      "Mollusca",
      "Arthropoda",
      "Echinodermata",
      "Annelida"
    ],
    "ans": 0,
    "exp": "Mollusca is characterized by a soft unsegmented body divided into head, muscular foot, and visceral hump enveloped by a mantle that secretes a shell."
  },
  {
    "q": "An animal with spiny skin, endoskeleton of calcareous ossicles, water vascular system, and radial adult symmetry belongs to Phylum:",
    "opts": [
      "Echinodermata",
      "Mollusca",
      "Cnidaria",
      "Hemichordata"
    ],
    "ans": 0,
    "exp": "Echinodermata (spiny-skinned animals) are defined by calcareous internal ossicles, a water vascular system with tube feet, and pentamerous radial adult symmetry."
  },
  {
    "q": "An animal with a worm-like cylindrical body divided into proboscis, collar, and trunk, with stomochord and open circulation belongs to Phylum:",
    "opts": [
      "Hemichordata",
      "Chordata",
      "Annelida",
      "Aschelminthes"
    ],
    "ans": 0,
    "exp": "Hemichordata (such as Balanoglossus) has a body divided into proboscis, collar, and trunk, with a stomochord in the collar and an open circulatory system."
  },
  {
    "q": "The stomochord found in the collar region of hemichordates is:",
    "opts": [
      "A hollow outpocketing of the anterior gut (buccal cavity), distinct from a true notochord",
      "A true mesodermal notochord extending to the tail",
      "A hollow dorsal nerve cord",
      "A chitinous jaw structure"
    ],
    "ans": 0,
    "exp": "The stomochord is an endodermal diverticulum of the buccal cavity; it lacks the sheath and mesodermal origin of a true notochord, which is why hemichordates are classified as a separate non-chordate phylum."
  },
  {
    "q": "Why was Phylum Hemichordata removed from Subphylum status under Chordata and placed as an independent non-chordate phylum?",
    "opts": [
      "Because the so-called 'notochord' (stomochord) is not homologous to the chordate notochord, and they lack a dorsal tubular nerve cord",
      "Because hemichordates have wings",
      "Because they live in trees",
      "Because they have 4-chambered hearts"
    ],
    "ans": 0,
    "exp": "Modern anatomical and molecular studies proved that the stomochord is not a true notochord, and their nervous system is intraepidermal without a dorsal tubular nerve cord, justifying their non-chordate classification."
  },
  {
    "q": "Which of the following pairs of phyla have members with cnidocytes and colloblasts, respectively?",
    "opts": [
      "Cnidaria and Ctenophora",
      "Porifera and Cnidaria",
      "Ctenophora and Platyhelminthes",
      "Annelida and Mollusca"
    ],
    "ans": 0,
    "exp": "Cnidarians possess stinging cnidocytes (nematocysts) for defense and prey capture; ctenophores possess adhesive colloblasts (lasso cells) on tentacles to capture prey."
  },
  {
    "q": "Which of the following animals exhibits alternation of generations (metagenesis) between polyp and medusa forms?",
    "opts": [
      "Obelia (Cnidaria)",
      "Hydra",
      "Aurelia",
      "Adamsia"
    ],
    "ans": 0,
    "exp": "Obelia exhibits metagenesis where the sessile asexual polyp generation produces free-swimming sexual medusae by budding, which in turn reproduce sexually to form polyps."
  },
  {
    "q": "In cnidarians, polyps produce medusae by _____ reproduction, and medusae produce polyps by _____ reproduction.",
    "opts": [
      "Asexual; Sexual",
      "Sexual; Asexual",
      "Sexual; Sexual",
      "Asexual; Asexual"
    ],
    "ans": 0,
    "exp": "In cnidarians exhibiting metagenesis (e.g. Obelia), polyps reproduce asexually by budding to yield medusae, and medusae form gametes that fuse sexually to regenerate polyps."
  },
  {
    "q": "Which of the following cnidarians exists ONLY in the polyp form without any medusa stage?",
    "opts": [
      "Hydra and Adamsia",
      "Aurelia",
      "Obelia",
      "Physalia"
    ],
    "ans": 0,
    "exp": "Hydra and Adamsia (sea anemone) exist exclusively as sessile polyps throughout their life cycle; they lack a free-swimming medusa stage."
  },
  {
    "q": "Which of the following cnidarians exists dominantly as a free-swimming medusa?",
    "opts": [
      "Aurelia (Jellyfish)",
      "Hydra",
      "Adamsia",
      "Gorgonia"
    ],
    "ans": 0,
    "exp": "Aurelia (common jellyfish) exhibits a dominant, free-swimming, umbrella-shaped medusa stage, while its polyp stage (scyphistoma) is reduced and brief."
  },
  {
    "q": "The skeleton of sponges is composed of:",
    "opts": [
      "Calcareous or siliceous spicules and/or spongin fibers",
      "Calcium phosphate bones",
      "Chitinous cuticles",
      "Cartilage"
    ],
    "ans": 0,
    "exp": "The internal endoskeleton of sponges is formed of microscopic mineralized spicules (calcium carbonate or silica) and/or flexible proteinaceous spongin fibers."
  },
  {
    "q": "Which specialized cells line the spongocoel and radial canals of sponges to maintain water current and ingest food?",
    "opts": [
      "Choanocytes (collar cells)",
      "Pinacocytes",
      "Amoebocytes",
      "Porocytes"
    ],
    "ans": 0,
    "exp": "Choanocytes (collar cells) possess a single flagellum surrounded by a microvillar collar; their beating drives water through the canal system and traps food particles."
  },
  {
    "q": "Which of the following statements about Phylum Ctenophora is INCORRECT?",
    "opts": [
      "They are commonly known as comb jellies or sea walnuts",
      "They reproduce by both asexual budding and sexual methods",
      "They possess eight external rows of ciliated comb plates for locomotion",
      "Bioluminescence is well-marked in them"
    ],
    "ans": 1,
    "exp": "NCERT explicitly notes: 'Reproduction takes place only by sexual means' in Ctenophora. They do not reproduce asexually."
  },
  {
    "q": "Bioluminescence (the property of a living organism to emit light) is well-marked in which of the following phyla?",
    "opts": [
      "Ctenophora",
      "Porifera",
      "Platyhelminthes",
      "Aschelminthes"
    ],
    "ans": 0,
    "exp": "Bioluminescence is prominently exhibited by ctenophores (such as Pleurobrachia and Ctenoplana), which flash iridescent green/blue light when disturbed."
  },
  {
    "q": "Comb plates in ctenophores function in:",
    "opts": [
      "Locomotion",
      "Digestion",
      "Reproduction",
      "Excretion"
    ],
    "ans": 0,
    "exp": "Ctenophores bear eight external meridional rows of fused cilia called ciliated comb plates (ctenes) that beat coordinately to propel the animal through water."
  },
  {
    "q": "In flatworms (Platyhelminthes), hooks and suckers are specialized adaptations for:",
    "opts": [
      "Parasitic mode of life to attach to the host's intestinal wall",
      "Swimming in open oceans",
      "Flying in air",
      "Chewing solid food"
    ],
    "ans": 0,
    "exp": "Endoparasitic flatworms like Taenia (tapeworm) and Fasciola (liver fluke) bear cuticular hooks and muscular suckers on their scolex/body to anchor securely to host tissues."
  },
  {
    "q": "Tapeworms (Taenia) lack an alimentary canal because:",
    "opts": [
      "They absorb pre-digested nutrients directly from the host's intestine across their general body surface (tegument)",
      "They photosynthesize using chloroplasts",
      "They eat soil like earthworms",
      "They live on air alone"
    ],
    "ans": 0,
    "exp": "Taenia lives inside the nutrient-rich lumen of the vertebrate small intestine, absorbing glucose, amino acids, and fatty acids directly across its microtriches-covered body surface, rendering a gut redundant."
  },
  {
    "q": "High regeneration capacity is a celebrated biological feature of which platyhelminth?",
    "opts": [
      "Planaria (Dugesia)",
      "Fasciola hepatica",
      "Taenia solium",
      "Schistosoma"
    ],
    "ans": 0,
    "exp": "Planaria possesses extraordinary regenerative power due to abundant totipotent stem cells (neoblasts); a sliced fragment can regenerate an entire intact worm."
  },
  {
    "q": "Sexes are separate (dioecious) with marked sexual dimorphism (females longer than males with curved tail in males) in:",
    "opts": [
      "Ascaris (Roundworm)",
      "Taenia (Tapeworm)",
      "Fasciola (Liver fluke)",
      "Pheretima (Earthworm)"
    ],
    "ans": 0,
    "exp": "Ascaris lumbricoides is dioecious. The female is longer and straight, while the male is shorter with a distinct curved posterior end bearing copulatory pineal spicules."
  },
  {
    "q": "Which of the following roundworms is transmitted by the female Culex mosquito and causes lymphatic filariasis (elephantiasis)?",
    "opts": [
      "Wuchereria bancrofti",
      "Ascaris lumbricoides",
      "Ancylostoma duodenale",
      "Enterobius vermicularis"
    ],
    "ans": 0,
    "exp": "Wuchereria bancrofti (filarial worm) is transmitted by female Culex mosquitoes and resides in human lymphatic vessels, causing chronic swelling and elephantiasis."
  },
  {
    "q": "Ancylostoma duodenale is commonly known as the:",
    "opts": [
      "Hookworm",
      "Pinworm",
      "Roundworm",
      "Tapeworm"
    ],
    "ans": 0,
    "exp": "Ancylostoma duodenale is known as the hookworm; its anterior end curves dorsally like a hook, and its buccal capsule bears sharp teeth to bite intestinal mucosa."
  },
  {
    "q": "Parapodia in the marine annelid Nereis serve primarily for:",
    "opts": [
      "Swimming and respiration",
      "Excretion of uric acid",
      "Digesting food",
      "Injecting venom"
    ],
    "ans": 0,
    "exp": "Nereis bears lateral, unjointed, muscular, vascularized fleshy appendages called parapodia on its body segments, which function in swimming and respiratory gas exchange."
  },
  {
    "q": "Which of the following annelids is dioecious (unisexual)?",
    "opts": [
      "Nereis",
      "Pheretima (Earthworm)",
      "Hirudinaria (Cattle leech)",
      "All annelids are monoecious"
    ],
    "ans": 0,
    "exp": "Nereis is dioecious (sexes are separate), whereas earthworms (Pheretima) and leeches (Hirudinaria) are monoecious (hermaphrodite)."
  },
  {
    "q": "Which substance secreted by the salivary glands of the leech prevents blood coagulation during feeding?",
    "opts": [
      "Hirudin",
      "Heparin",
      "Histamine",
      "Hemocyanin"
    ],
    "ans": 0,
    "exp": "Hirudinaria (blood-sucking leech) secretes hirudin, a powerful anticoagulant protein that inhibits thrombin, ensuring continuous flow of liquid blood from the host."
  },
  {
    "q": "The body of an insect is divided into which three tagmata?",
    "opts": [
      "Head, thorax, and abdomen",
      "Cephalothorax and abdomen",
      "Head and trunk",
      "Prosoma and opisthosoma"
    ],
    "ans": 0,
    "exp": "Insects (Class Insecta of Arthropoda) have a body distinctly divided into three tagmata: head (sensory and feeding), thorax (locomotor with 3 pairs of legs and wings), and abdomen."
  },
  {
    "q": "In arachnids like spiders and scorpions, the head and thorax are fused together to form a:",
    "opts": [
      "Cephalothorax (prosoma)",
      "Parietal mass",
      "Visceral hump",
      "Trochanter"
    ],
    "ans": 0,
    "exp": "In arachnids and crustaceans, the head and thoracic segments fuse into a single anterior tagma termed the cephalothorax."
  },
  {
    "q": "Book lungs are respiratory organs found in which of the following arthropods?",
    "opts": [
      "Scorpions and spiders (Arachnida)",
      "Prawns (Crustacea)",
      "Cockroaches (Insecta)",
      "Centipedes (Chilopoda)"
    ],
    "ans": 0,
    "exp": "Book lungs, composed of parallel, page-like thin vascular lamellae enclosed in a chamber, are respiratory organs characteristic of arachnids (spiders, scorpions)."
  },
  {
    "q": "Book gills are respiratory structures found in:",
    "opts": [
      "Limulus (King crab / Horseshoe crab)",
      "Prawn (Penaeus)",
      "Cockroach",
      "Crab"
    ],
    "ans": 0,
    "exp": "Limulus (horseshoe crab, a living fossil arthropod) breathes using book gills located on the abdominal appendages."
  },
  {
    "q": "Which of the following arthropods is famous for being a 'living fossil'?",
    "opts": [
      "Limulus (King crab)",
      "Locusta (Locust)",
      "Apis (Honeybee)",
      "Bombyx (Silkworm)"
    ],
    "ans": 0,
    "exp": "Limulus (king crab or horseshoe crab) has persisted virtually unchanged in morphology for over 400 million years, earning its status as a living fossil."
  },
  {
    "q": "Statocysts present in arthropods and molluscs function as sensory organs for:",
    "opts": [
      "Equilibrium and balance",
      "Vision and light detection",
      "Hearing sound waves",
      "Smelling pheromones"
    ],
    "ans": 0,
    "exp": "Statocysts are fluid-filled sensory vesicles containing mineralized statoliths that respond to gravity, functioning as organs of balance and spatial orientation."
  },
  {
    "q": "The rasping tongue-like organ radula in molluscs is armed with transverse rows of teeth made of:",
    "opts": [
      "Chitin",
      "Calcium carbonate",
      "Silica",
      "Keratin"
    ],
    "ans": 0,
    "exp": "The radula consists of a flexible ribbon covered with transverse rows of minute chitinous teeth, mounted over an odontophore cartilage."
  },
  {
    "q": "Which of the following molluscs is commonly known as the 'Devil fish'?",
    "opts": [
      "Octopus",
      "Sepia (Cuttlefish)",
      "Loligo (Squid)",
      "Aplysia (Sea hare)"
    ],
    "ans": 0,
    "exp": "Octopus is commonly referred to as the Devil fish due to its bulbous body and eight tentacular arms bearing suckers."
  },
  {
    "q": "Sepia and Loligo are commonly known as:",
    "opts": [
      "Cuttlefish and Squid, respectively",
      "Devil fish and Sea hare",
      "Pearl oyster and Chiton",
      "Apple snail and Tusk shell"
    ],
    "ans": 0,
    "exp": "Sepia is cuttlefish (possessing an internal calcareous cuttlebone) and Loligo is squid (possessing a horny chitinous pen)."
  },
  {
    "q": "Pinctada is economically renowned as the source of:",
    "opts": [
      "Natural pearls",
      "Edible ink",
      "Silken fibers",
      "Medicinal venom"
    ],
    "ans": 0,
    "exp": "Pinctada (pearl oyster, Phylum Mollusca) secretes concentric layers of nacre (mother-of-pearl) around foreign irritants to produce natural pearls."
  },
  {
    "q": "Dentalium belongs to Class Scaphopoda of Phylum Mollusca and is commonly known as the:",
    "opts": [
      "Tusk shell (or Elephant's tusk shell)",
      "Sea hare",
      "Apple snail",
      "Chiton"
    ],
    "ans": 0,
    "exp": "Dentalium possesses a tubular, curved, calcareous shell open at both ends, resembling a miniature elephant's tusk."
  },
  {
    "q": "Aplysia is commonly known as the:",
    "opts": [
      "Sea hare",
      "Sea cucumber",
      "Sea pen",
      "Sea fan"
    ],
    "ans": 0,
    "exp": "Aplysia (a marine gastropod mollusc) is called the sea hare because its prominent anterior sensory tentacles resemble the ears of a hare."
  }
];
extra95.forEach(m => addMcq(m.q, m.opts, m.ans, m.exp));

// Take exactly 154 MCQs
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
console.log(`Part 1 total questions: ${allQuestions.length} (AR: ${arQuestions.length}, MCQ: ${mcqQuestions.length})`);

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

console.log(`Part 1 KaTeX errors: ${katexErrors}`);

if (katexErrors === 0 && allQuestions.length === 180) {
  const outPath = path.join(__dirname, 'data_zoology_animal_kingdom_part1.js');
  const fileContent = `// Auto-generated data for Zoology Animal Kingdom Part 1: ${SUBTOPIC}\nmodule.exports = ${JSON.stringify(allQuestions, null, 2)};\n`;
  fs.writeFileSync(outPath, fileContent, 'utf8');
  console.log(`Successfully wrote ${outPath}`);
} else {
  console.error("Validation failed! Not writing output.");
  process.exit(1);
}
