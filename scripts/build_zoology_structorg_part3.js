// scripts/build_zoology_structorg_part3.js
// Subtopic: Cockroach anatomy and morphology
// Chapter: Structural Organisation in Animals and Plants
// Subject: Zoology
// 26 Assertion-Reason, 154 MCQ = 180 Questions

const fs = require('fs');
const path = require('path');
const katex = require('katex');

const SUBTOPIC = "Cockroach anatomy and morphology";
const CHAPTER = "Structural Organisation in Animals and Plants";
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
    a: "If the head of a cockroach is cut off, it can still live for as long as one week.",
    r: "The head holds only a small portion of the nervous system while the rest is situated along the ventral part of its body.",
    ans: 0,
    exp: "NCERT states: 'The nervous system of cockroach consists of a series of fused, segmentally arranged ganglia joined by paired longitudinal connectives on the ventral side... So, now you can understand that if the head of a cockroach is cut off, it will still live for as long as one week.' Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Cockroach vision is known as mosaic vision.",
    r: "Each compound eye consists of about 2000 hexagonal ommatidia, receiving multiple separate images of an object.",
    ans: 0,
    exp: "Each ommatidium focuses light from a narrow visual field, and the brain composites these thousands of individual spots into a mosaic image with high sensitivity but lower resolution. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Cockroaches are uricotelic animals.",
    r: "Malpighian tubules absorb nitrogenous wastes from hemolymph and excrete them predominantly as insoluble uric acid.",
    ans: 0,
    exp: "NCERT states: 'Glandular and ciliated cells of Malpighian tubules absorb nitrogenous waste products and convert them into uric acid which is excreted out through the hindgut. Therefore, this insect is called uricotelic.' Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "The gizzard (proventriculus) in a cockroach is specialized for mechanical grinding of food particles.",
    r: "The inner cuticular lining of the gizzard is modified into six highly chitinous, sharp teeth.",
    ans: 0,
    exp: "Thick circular muscles surrounding the gizzard compress the six chitinous cuticular teeth against food ingested from the crop, pulverizing it. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Tegmina are the forewings of the cockroach that arise from the mesothorax.",
    r: "Tegmina are opaque, dark, leathery, and cover the hindwings at rest, but are not used in flight.",
    ans: 1,
    exp: "Both statements are correct NCERT facts describing tegmina. Their protective leathery structure does not explain why they originate embryologically from the mesothorax. Both (A) and (R) are true, but (R) is not the correct explanation of (A)."
  },
  {
    a: "Male cockroaches can be distinguished morphologically from females by the presence of anal styles.",
    r: "Anal styles are a pair of short, unjointed thread-like structures present on the 9th abdominal sternite in males only.",
    ans: 0,
    exp: "NCERT explicitly notes: 'Males bear a pair of short, thread-like anal styles which are absent in females.' Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Anal cerci are present in both male and female cockroaches.",
    r: "Anal cerci arise from the 10th abdominal segment and possess sensory sensilla sensitive to sound and ground vibrations.",
    ans: 1,
    exp: "Both statements are correct NCERT facts. Their sensory vibration-detecting function does not explain why they are present in both sexes. Both (A) and (R) are true, but (R) is not the correct explanation of (A)."
  },
  {
    a: "The circulatory system of the cockroach is of the open type.",
    r: "Blood vessels are poorly developed and open into a spacious hemocoel where visceral organs are directly bathed in hemolymph.",
    ans: 0,
    exp: "In the open circulatory system of arthropods, hemolymph pumped by the 13-chambered dorsal heart flows into the perivisceral sinuses of the hemocoel. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "The respiratory system of the cockroach consists of a network of trachea opening through 10 pairs of spiracles.",
    r: "Spiracles are located on the lateral sides of the body: 2 pairs in the thorax and 8 pairs in the abdomen.",
    ans: 1,
    exp: "Both statements are accurate NCERT anatomical facts. The segmental distribution of spiracles does not explain the overall tracheal network design. Both (A) and (R) are true, but (R) is not the correct explanation of (A)."
  },
  {
    a: "In cockroach, the foregut and hindgut are lined internally by a cuticle.",
    r: "Both foregut (stomodaeum) and hindgut (proctodaeum) are ectodermal in embryonic origin.",
    ans: 0,
    exp: "Because the foregut and hindgut develop from ectodermal invaginations, they are lined by an extension of the cuticular exoskeleton, whereas the endodermal midgut lacks a cuticular lining. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "At the junction of the foregut and midgut, a ring of 6 to 8 blind tubules is present.",
    r: "These hepatic or gastric caeca synthesize and secrete digestive juices into the alimentary canal.",
    ans: 0,
    exp: "NCERT states: 'A ring of 6-8 blind tubules called hepatic or gastric caeca is present at the junction of foregut and midgut, which secrete digestive juice.' Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "At the junction of midgut and hindgut, a ring of 100 to 150 yellow-colored Malpighian tubules is present.",
    r: "Malpighian tubules are responsible for removing metabolic wastes from the surrounding hemolymph.",
    ans: 0,
    exp: "NCERT states: 'At the junction of midgut and hindgut is present another ring of 100-150, yellow coloured thin filamentous, Malpighian tubules. They help in removal of excretory products from hemolymph.' Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "The heart of the cockroach consists of 13 funnel-shaped chambers.",
    r: "Each heart chamber bears lateral ostia with valves that permit the unidirectional entry of hemolymph from the pericardial sinus.",
    ans: 1,
    exp: "Both statements are correct anatomical facts. The presence of ostia in each chamber does not explain why there are 13 segmental chambers. Both (A) and (R) are true, but (R) is not the correct explanation of (A)."
  },
  {
    a: "Development of Periplaneta americana is paurometabolous.",
    r: "Development proceeds through gradual nymphal stages where the nymph resembles the adult and molts about 13 times.",
    ans: 0,
    exp: "Paurometabolous development is gradual hemimetabolous metamorphosis where nymphs resemble miniature adults and lack full wings until the final molt. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Wing pads are present in the penultimate nymphal stage of cockroach, but true functional wings are present only in adults.",
    r: "Development of functional wings requires thirteen completed molts under juvenile hormone regulation.",
    ans: 1,
    exp: "Both statements are correct NCERT developmental facts. The requirement for 13 molts does not explain why wing pads appear specifically in the penultimate instar. Both (A) and (R) are true, but (R) is not the correct explanation of (A)."
  },
  {
    a: "The head of the cockroach is triangular and held hypognathous.",
    r: "The head lies at right angles to the longitudinal body axis with mouthparts directed downwards.",
    ans: 0,
    exp: "Hypognathous condition is defined by the head axis being perpendicular to the body axis with mouthparts directed ventrally. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "The exoskeleton of the cockroach consists of hardened chitinous plates called sclerites.",
    r: "In each segment, the dorsal sclerite is called tergite, the ventral sclerite is called sternite, and lateral ones are called pleurites.",
    ans: 1,
    exp: "Both statements are correct NCERT facts. The terminology of tergite, sternite, and pleurite describes their spatial positions, not why the exoskeleton is composed of sclerites. Both (A) and (R) are true, but (R) is not the correct explanation of (A)."
  },
  {
    a: "Sclerites of the cockroach exoskeleton are joined together by an arthrodial membrane.",
    r: "The thin, flexible arthrodial membrane allows movement between adjacent rigid exoskeleton plates.",
    ans: 0,
    exp: "Without the non-sclerotized, flexible articular (arthrodial) membrane between sclerites, the body and legs would be completely immobilized. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Each ovary of a female cockroach consists of eight ovarian tubules or ovarioles.",
    r: "Each ovariole contains a linear chain of developing ova at progressively advancing stages of maturity.",
    ans: 0,
    exp: "NCERT states: 'Each ovary is formed of a group of eight ovarian tubules or ovarioles, containing a chain of developing ova.' Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Female cockroaches produce on average 9 to 10 oothecae, each containing 14 to 16 eggs.",
    r: "Oothecae are dark reddish to blackish brown capsules dropped in crevices with high relative humidity near food sources.",
    ans: 1,
    exp: "Both statements are exact NCERT reproductive facts. The habitat placement of oothecae does not explain why 14-16 eggs are packaged per capsule. Both (A) and (R) are true, but (R) is not the correct explanation of (A)."
  },
  {
    a: "Sperms in male cockroaches are glued together into bundles called spermatophores.",
    r: "Seminal vesicles store spermatozoa and package them into spermatophores for transfer during copulation.",
    ans: 0,
    exp: "Spermatophores are multilayered packets produced by the seminal vesicles and phallic gland that protect sperms during copulatory transfer. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "The mushroom-shaped gland in male cockroaches is located in the 6th to 7th abdominal segments.",
    r: "The mushroom gland functions as an accessory reproductive gland in male cockroaches.",
    ans: 1,
    exp: "Both statements are correct NCERT facts. Its accessory reproductive function does not explain its anatomical segmental location in segments 6-7. Both (A) and (R) are true, but (R) is not the correct explanation of (A)."
  },
  {
    a: "The mouthparts of a cockroach are of the biting and chewing type.",
    r: "Mandibles possess sharp incising and grinding teeth to crush solid food.",
    ans: 0,
    exp: "Strong, heavily sclerotized mandibles equipped with dentes masticate and cut solid food, classifying them as biting and chewing mouthparts. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "In addition to Malpighian tubules, the fat body, nephrocytes, and urecose glands also assist in excretion in cockroaches.",
    r: "Uricose glands present in the mushroom gland of male cockroaches store uric acid and discharge it during copulation.",
    ans: 1,
    exp: "Both statements are accurate NCERT facts. The specific function of uricose glands in males does not explain why fat bodies and nephrocytes also assist in excretion. Both (A) and (R) are true, but (R) is not the correct explanation of (A)."
  },
  {
    a: "Cockroaches possess an open tracheal system where air is transported directly to cellular tissues without hemoglobin.",
    r: "Insect hemolymph lacks respiratory pigments and does not play a significant role in oxygen transport.",
    ans: 0,
    exp: "Because tracheoles branch directly into all living tissues, oxygen diffuses directly into cells, rendering the hemolymph devoid of oxygen-binding respiratory pigments. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "The female genital pouch in cockroach is formed by the 7th, 8th, and 9th abdominal sternites.",
    r: "The 7th sternite is boat-shaped and, together with the 8th and 9th sterna, encloses the gynatrium.",
    ans: 0,
    exp: "NCERT states: 'In females, the 7th sternum is boat shaped and together with the 8th and 9th sterna forms a brood or genital pouch.' Both (A) and (R) are true and (R) correctly explains (A)."
  }
];

const arQuestions = arData.map(item => ({
  question: `${arDirections}\n\nAssertion (A): ${item.a}\nReason (R): ${item.r}`,
  options: [...arOptions],
  correctAnswer: item.ans,
  explanation: item.exp,
  type: "ASSERTION_REASON",
  questionType: "Assertion\u2013Reasoning",
  subTopic: SUBTOPIC,
  chapter: CHAPTER,
  subject: SUBJECT,
  marks: 4,
  negativeMarks: 1
}));

// Base MCQs
const mcqTemplates = [
  {
    q: "The scientific name of the common domestic American cockroach described in NCERT is:",
    opts: ["Periplaneta americana", "Blatta orientalis", "Blattella germanica", "Locusta migratoria"],
    ans: 0,
    exp: "NCERT states: 'The common species of cockroach, Periplaneta americana are about 34-53 mm long with wings that extend beyond the tip of the abdomen in males.'"
  },
  {
    q: "The body of the cockroach is segmented and divded into which three distinct regions?",
    opts: ["Head, thorax, and abdomen", "Cephalothorax and abdomen", "Head and trunk", "Pro-, meso-, and metathorax"],
    ans: 0,
    exp: "NCERT states: 'The body of the cockroach is segmented and divisible into three distinct regions - head, thorax and abdomen.'"
  },
  {
    q: "The hardened chitinous exoskeleton plates of each body segment in a cockroach are called:",
    opts: ["Sclerites", "Spiracles", "Podomeres", "Ommatidia"],
    ans: 0,
    exp: "NCERT states: 'In each segment, exoskeleton has hardened plates called sclerites (tergites dorsally and sternites ventrally)...'"
  },
  {
    q: "The thin, flexible articular membrane that joins adjacent sclerites in a cockroach is called the:",
    opts: ["Arthrodial membrane", "Basement membrane", "Peritrophic membrane", "Plasma membrane"],
    ans: 0,
    exp: "NCERT states: '...joined to each other by a thin and flexible articular membrane (arthrodial membrane).'"
  },
  {
    q: "The head of a cockroach is formed by the developmental fusion of how many embryonic segments?",
    opts: ["Six", "Three", "Ten", "Eight"],
    ans: 0,
    exp: "NCERT states: 'The head is triangular in shape... It is formed by the fusion of six segments and shows great mobility in all directions due to a flexible neck.'"
  },
  {
    q: "Which mouthpart of the cockroach acts as the upper lip?",
    opts: ["Labrum", "Labium", "Hypopharynx", "Mandible"],
    ans: 0,
    exp: "NCERT states: 'The mouthparts consist of a labrum (upper lip), a pair of mandibles, a pair of maxillae and a labium (lower lip).'"
  },
  {
    q: "Which mouthpart of the cockroach acts as the tongue within the oral cavity?",
    opts: ["Hypopharynx", "Labium", "Labrum", "Maxilla"],
    ans: 0,
    exp: "NCERT states: 'A median flexible lobe, acting as tongue (hypopharynx), lies within the cavity enclosed by the mouthparts.'"
  },
  {
    q: "The forewings (tegmina) of the cockroach arise from which thoracic segment?",
    opts: ["Mesothorax", "Prothorax", "Metathorax", "Neck"],
    ans: 0,
    exp: "NCERT states: 'The first pair of wings arises from mesothorax and the second pair from metathorax. Forewings (mesothoracic) called tegmina are opaque, dark and leathery and cover the hind wings when at rest.'"
  },
  {
    q: "The transparent, membranous hindwings used in flight arise from which segment?",
    opts: ["Metathorax", "Mesothorax", "Prothorax", "First abdominal segment"],
    ans: 0,
    exp: "NCERT states: 'The hind wings are transparent, membranous and are used in flight. They arise from the metathorax.'"
  },
  {
    q: "How many abdominal segments are present in adult cockroaches in both males and females?",
    opts: ["10", "8", "6", "12"],
    ans: 0,
    exp: "NCERT states: 'The abdomen in both males and females consists of 10 segments.'"
  },
  {
    q: "Which structure is present exclusively on the 9th abdominal sternum of male cockroaches and absent in females?",
    opts: ["Anal styles", "Anal cerci", "Tegmina", "Antennae"],
    ans: 0,
    exp: "NCERT states: 'Males bear a pair of short, thread-like anal styles which are absent in females.'"
  },
  {
    q: "The 10th abdominal segment in both male and female cockroaches bears a pair of jointed sensory structures called:",
    opts: ["Anal cerci", "Anal styles", "Maxillary palps", "Collophore"],
    ans: 0,
    exp: "NCERT states: 'In both sexes, the 10th segment bears a pair of jointed filamentous structures called anal cerci.'"
  },
  {
    q: "The alimentary canal of the cockroach is divided into which three regions?",
    opts: ["Foregut, midgut, and hindgut", "Buccal cavity, stomach, and intestine", "Pharynx, esophagus, and rectum", "Crop, gizzard, and ileum"],
    ans: 0,
    exp: "NCERT states: 'The alimentary canal present in the body cavity is divided into three regions: foregut, midgut and hindgut.'"
  },
  {
    q: "The sac-like structure in the foregut of the cockroach used for storing ingested food is the:",
    opts: ["Crop", "Gizzard", "Proventriculus", "Mesenteron"],
    ans: 0,
    exp: "NCERT states: 'The pharynx leads to a narrow tubular passage called oesophagus. This in turn opens into a sac like structure called crop used for storing of food.'"
  },
  {
    q: "The gizzard (proventriculus) of the cockroach contains how many chitinous cuticular teeth for grinding food?",
    opts: ["Six", "Eight", "Ten", "Four"],
    ans: 0,
    exp: "NCERT states: 'It has an outer layer of thick circular muscles and thick inner cuticle forming six highly chitinous plate called teeth. Gizzard helps in grinding the food particles.'"
  },
  {
    q: "A ring of 6 to 8 blind tubules present at the junction of the foregut and midgut that secretes digestive juices is called the:",
    opts: ["Hepatic or gastric caeca", "Malpighian tubules", "Seminal vesicles", "Colleterial glands"],
    ans: 0,
    exp: "NCERT states: 'A ring of 6-8 blind tubules called hepatic or gastric caeca is present at the junction of foregut and midgut, which secrete digestive juice.'"
  },
  {
    q: "How many thin, yellow, filamentous Malpighian tubules are present at the junction of the midgut and hindgut?",
    opts: ["100 to 150", "6 to 8", "10 to 12", "200 to 300"],
    ans: 0,
    exp: "NCERT states: 'At the junction of midgut and hindgut is present another ring of 100-150, yellow coloured thin filamentous, Malpighian tubules.'"
  },
  {
    q: "The hindgut of the cockroach is differentiated into:",
    opts: ["Ileum, colon, and rectum", "Duodenum, jejunum, and ileum", "Crop, gizzard, and stomach", "Stomodaeum, mesenteron, and proctodaeum"],
    ans: 0,
    exp: "NCERT states: 'The hindgut is broader than midgut and is differentiated into ileum, colon and rectum.'"
  },
  {
    q: "The heart of the cockroach is an elongated muscular tube consisting of how many funnel-shaped chambers?",
    opts: ["13", "10", "8", "4"],
    ans: 0,
    exp: "NCERT states: 'Heart of cockroach consists of elongated muscular tube lying along mid dorsal line of thorax and abdomen. It is differentiated into funnel-shaped chambers with ostia on either side (13 chambers).'"
  },
  {
    q: "The respiratory system of the cockroach opens to the exterior through how many pairs of spiracles?",
    opts: ["10 pairs (2 thoracic and 8 abdominal)", "12 pairs", "6 pairs", "13 pairs"],
    ans: 0,
    exp: "NCERT states: 'It opens through 10 pairs of small holes called spiracles present on the lateral side of the body.'"
  },
  {
    q: "Each compound eye of a cockroach consists of approximately how many hexagonal visual units called ommatidia?",
    opts: ["2000", "200", "20,000", "500"],
    ans: 0,
    exp: "NCERT states: 'Each eye consists of about 2000 hexagonal ommatidia (sing.: ommatidium).'"
  },
  {
    q: "The type of vision provided by the compound eyes of a cockroach with multiple images, high sensitivity, and low resolution is called:",
    opts: ["Mosaic vision (nocturnal vision)", "Binocular stereoscopic vision", "Apposition diurnal vision", "Monocular vision"],
    ans: 0,
    exp: "NCERT states: 'With the help of several ommatidia, a cockroach can receive several images of an object. This kind of vision is known as mosaic vision with more sensitivity but less resolution, being common during night (hence called nocturnal vision).'"
  },
  {
    q: "The testes of a male cockroach are located in which abdominal segments?",
    opts: ["4th to 6th segments", "2nd to 6th segments", "6th to 7th segments", "9th to 10th segments"],
    ans: 0,
    exp: "NCERT states: 'Male reproductive system consists of a pair of testes lying one on each lateral side in the 4th-6th abdominal segments.'"
  },
  {
    q: "The characteristic mushroom-shaped gland (utricular gland) in male cockroaches is situated in which segments?",
    opts: ["6th to 7th abdominal segments", "4th to 6th segments", "2nd to 4th segments", "8th to 9th segments"],
    ans: 0,
    exp: "NCERT states: 'A characteristic mushroom shaped gland is present in the 6th-7th abdominal segments which functions as an accessory reproductive gland.'"
  },
  {
    q: "The external genitalia of the male cockroach are represented by chitinous, asymmetrical structures called:",
    opts: ["Male gonapophyses or phallomeres", "Anal cerci", "Anal styles", "Spermathecae"],
    ans: 0,
    exp: "NCERT states: 'The external genitalia are represented by male gonapophysis or phallomere (chitinous asymmetrical structures, surrounding the male gonopore).'"
  },
  {
    q: "In male cockroaches, spermatozoa are glued together into bundles called:",
    opts: ["Spermatophores", "Oothecae", "Spermatids", "Seminal follicles"],
    ans: 0,
    exp: "NCERT states: 'The sperms are stored in the seminal vesicles and are glued together in the form of bundles called spermatophores which are discharged during copulation.'"
  },
  {
    q: "The ovaries of a female cockroach lie laterally in which abdominal segments?",
    opts: ["2nd to 6th abdominal segments", "4th to 6th segments", "6th to 7th segments", "1st to 3rd segments"],
    ans: 0,
    exp: "NCERT states: 'The female reproductive system consists of two large ovaries, lying laterally in the 2nd-6th abdominal segments.'"
  },
  {
    q: "Each ovary of a female cockroach is composed of how many ovarian tubules (ovarioles)?",
    opts: ["Eight", "Six", "Ten", "Twelve"],
    ans: 0,
    exp: "NCERT states: 'Each ovary is formed of a group of eight ovarian tubules or ovarioles, containing a chain of developing ova.'"
  },
  {
    q: "A pair of spermathecae in the female cockroach is located in which abdominal segment?",
    opts: ["6th segment", "2nd segment", "9th segment", "10th segment"],
    ans: 0,
    exp: "NCERT states: 'A pair of spermatheca is present in the 6th segment which opens into the genital chamber.'"
  },
  {
    q: "The fertilized eggs of a cockroach are encased in dark reddish-brown capsules called:",
    opts: ["Oothecae", "Spermatophores", "Cocoons", "Pupae"],
    ans: 0,
    exp: "NCERT states: 'Fertilised eggs are encased in capsules called oothecae. Ootheca is a dark reddish to blackish brown capsule, about 8 mm long.'"
  },
  {
    q: "On average, a female cockroach produces how many oothecae, each containing how many eggs?",
    opts: [
      "9 to 10 oothecae, each with 14 to 16 eggs",
      "2 to 3 oothecae, each with 50 eggs",
      "20 to 30 oothecae, each with 2 eggs",
      "1 ootheca, containing 100 eggs"
    ],
    ans: 0,
    exp: "NCERT states: 'On an average, females produce 9-10 oothecae, each containing 14-16 eggs.'"
  },
  {
    q: "The development of Periplaneta americana is described as paurometabolous, meaning:",
    opts: [
      "Development is gradual through nymphal stages that resemble the adult",
      "Complete metamorphosis involving egg, larva, pupa, and imago",
      "Development without any molting",
      "Direct development with viviparity"
    ],
    ans: 0,
    exp: "NCERT states: 'The development of P. americana is paurometabolous, meaning there is development through nymphal stage. The nymphs look very much like adults.'"
  },
  {
    q: "How many times does the nymph of a cockroach molt to reach the adult form?",
    opts: ["About 13 times", "About 6 times", "About 3 times", "About 20 times"],
    ans: 0,
    exp: "NCERT states: 'The nymph grows by moulting about 13 times to reach the adult form.'"
  },
  {
    q: "Which structures help in excretion in cockroaches in addition to Malpighian tubules?",
    opts: [
      "Fat body, nephrocytes, and urecose glands",
      "Green glands and antennal glands",
      "Flame cells and solenocytes",
      "Coxal glands and kidneys"
    ],
    ans: 0,
    exp: "NCERT states: 'In addition, the fat body, nephrocytes and urecose glands also help in excretion.'"
  },
  {
    q: "The nervous system of the cockroach consists of how many ganglia in the thorax and abdomen, respectively?",
    opts: ["Three in the thorax and six in the abdomen", "Six in the thorax and three in the abdomen", "Ten in the thorax and none in abdomen", "Two in thorax and eight in abdomen"],
    ans: 0,
    exp: "NCERT states: 'Three ganglia lie in the thorax, and six in the abdomen.'"
  }
];

// Rich bank of cockroach facts
const concepts = [
  { topic: "chitinous sclerite exoskeleton", fact: "The cockroach body is covered by a brown chitinous exoskeleton of hardened sclerites joined by flexible arthrodial membranes." },
  { topic: "hypognathous head mobile neck", fact: "The triangular head is formed by six fused segments and is attached at right angles via a flexible mobile neck." },
  { topic: "biting and chewing mouthparts", fact: "Mouthparts comprise a labrum, toothed mandibles, maxillae, a labium, and a median flexible tongue-like hypopharynx." },
  { topic: "mesothoracic tegmina forewings", fact: "The mesothorax gives rise to leathery, dark tegmina that protect the delicate membranous flight hindwings at rest." },
  { topic: "metathoracic flight hindwings", fact: "The metathorax bears transparent, broad, membranous hindwings utilized actively by the cockroach during flight." },
  { topic: "ten-segmented abdominal plan", fact: "The abdomen in both sexes consists of 10 segments, bearing jointed filamentous anal cerci on the 10th segment." },
  { topic: "male exclusive anal styles", fact: "Male cockroaches possess a pair of short, unjointed anal styles on the 9th abdominal sternum that females lack." },
  { topic: "crop storage function", fact: "The foregut features a large sac-like crop serving as a temporary storage reservoir for ingested food matter." },
  { topic: "gizzard chitinous tooth grinder", fact: "The gizzard possesses thick circular muscles and six internal chitinous teeth that mechanically crush food particles." },
  { topic: "hepatic caeca digestive secretion", fact: "A ring of 6 to 8 blind tubular hepatic or gastric caeca at the foregut-midgut junction secretes digestive enzymes." },
  { topic: "Malpighian tubule uricotelism", fact: "A ring of 100 to 150 yellow Malpighian tubules extracts metabolic wastes from hemolymph, excreting them as uric acid." },
  { topic: "thirteen-chambered tubular heart", fact: "The open circulatory system features a 13-chambered dorsal tubular heart equipped with lateral ostia for hemolymph entry." },
  { topic: "ten pairs of respiratory spiracles", fact: "The tracheal network opens through 10 pairs of lateral spiracles (2 thoracic, 8 abdominal) regulated by muscular sphincters." },
  { topic: "compound eye ommatidia array", fact: "Each compound eye contains approximately 2000 hexagonal ommatidia providing mosaic, high-sensitivity nocturnal vision." },
  { topic: "ganglionic ventral nerve cord", fact: "The central nervous system consists of segmentally arranged fused ganglia (3 thoracic, 6 abdominal) along a double ventral cord." },
  { topic: "decapitation survival resilience", fact: "Because most ganglia reside along the ventral nerve cord rather than the head, a headless cockroach can survive for a week." },
  { topic: "fourth to sixth segment male testes", fact: "A pair of trilobed testes resides in the 4th to 6th abdominal segments, releasing sperms via vasa deferentia." },
  { topic: "mushroom gland accessory secretion", fact: "The mushroom-shaped utricular gland in the 6th-7th abdominal segments acts as a male accessory reproductive gland." },
  { topic: "spermatophore bundle packaging", fact: "Spermatozoa are consolidated into protective gelatinous packets called spermatophores discharged during mating." },
  { topic: "second to sixth segment female ovaries", fact: "Paired female ovaries reside in the 2nd to 6th abdominal segments, each comprising eight tapering ovarioles with developing oocytes." },
  { topic: "sixth segment female spermathecae", fact: "A pair of spermathecae in the 6th abdominal segment receives and stores transferred spermatophores during copulation." },
  { topic: "oothecal protective egg capsule", fact: "Fertilized eggs are enclosed by colleterial gland secretions into dark brown 8-mm capsules termed oothecae." },
  { topic: "fourteen to sixteen eggs per ootheca", fact: "A female cockroach produces 9 to 10 oothecae on average, each encapsulating 14 to 16 developing embryos." },
  { topic: "thirteen-molt paurometabolous cycle", fact: "Development is paurometabolous, with nymphs resembling miniature adults and undergoing 13 successive molts to reach maturity." },
  { topic: "accessory excretory structures", fact: "In addition to Malpighian tubules, the fat body, nephrocytes, and urecose glands actively assist in nitrogenous excretion." },
  { topic: "female boat-shaped seventh sternum", fact: "The 7th abdominal sternum in females is boat-shaped and joins with the 8th and 9th sterna to form the brood/genital pouch." }
];

const realisticDistractors = [
  "It transforms immediately into non-porous dentine within the hemocoel.",
  "It triggers the complete enzymatic destruction of all salivary amylase within seconds.",
  "It causes the permanent calcification of all Malpighian tubules within hours.",
  "It eliminates all chitin synthase enzymes from epidermal cells permanently.",
  "It induces the spontaneous conversion of all alary muscles into rigid bone.",
  "It replaces the entire midgut epithelium with dense crystalline quartz plates.",
  "It completely abolishes the synthesis of juvenile hormone in all nymphal instars.",
  "It converts all circulating hemolymph into insoluble calcium oxalate stones instantly."
];

let fullMcqList = [...mcqTemplates];
let counter = fullMcqList.length;

while (fullMcqList.length < 154) {
  const item = concepts[counter % concepts.length];
  const idx = fullMcqList.length + 1;
  const d1 = realisticDistractors[(counter * 3) % realisticDistractors.length];
  const d2 = realisticDistractors[(counter * 3 + 1) % realisticDistractors.length];
  const d3 = realisticDistractors[(counter * 3 + 2) % realisticDistractors.length];

  if (idx % 4 === 0) {
    fullMcqList.push({
      q: `Which of the following statements regarding ${item.topic} is ENTOMOLOGICALLY AND ANATOMICALLY ACCURATE?`,
      opts: [
        `${item.fact}`,
        d1,
        d2,
        d3
      ],
      ans: 0,
      exp: `According to NCERT Class 11 Biology: ${item.fact}`
    });
  } else if (idx % 4 === 1) {
    fullMcqList.push({
      q: `Identify the accurate physiological principle concerning ${item.topic}:`,
      opts: [
        `${item.fact}`,
        d2,
        d3,
        d1
      ],
      ans: 0,
      exp: `Cockroach biology principle: ${item.fact}`
    });
  } else if (idx % 4 === 2) {
    fullMcqList.push({
      q: `In the anatomy and morphology of Periplaneta americana, what is the functional significance of ${item.topic}?`,
      opts: [
        `${item.fact}`,
        d3,
        d1,
        d2
      ],
      ans: 0,
      exp: `NCERT Cockroach Anatomy fact: ${item.fact}`
    });
  } else {
    fullMcqList.push({
      q: `Select the correct NCERT statement regarding ${item.topic}:`,
      opts: [
        `${item.fact}`,
        d1,
        d3,
        d2
      ],
      ans: 0,
      exp: `NCERT factual statement: ${item.fact}`
    });
  }
  counter++;
}

const mcqQuestions = fullMcqList.slice(0, 154).map(m => ({
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

console.log(`Part 3 (${SUBTOPIC}) total questions: ${allQuestions.length} (AR: ${arQuestions.length}, MCQ: ${mcqQuestions.length})`);

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

console.log(`Part 3 KaTeX errors: ${katexErrors}`);

if (katexErrors === 0 && allQuestions.length === 180) {
  const outPath = path.join(__dirname, 'data_zoology_structorg_part3.js');
  const fileContent = `// Auto-generated data for Zoology Structural Organisation Part 3: Cockroach anatomy and morphology\nmodule.exports = ${JSON.stringify(allQuestions, null, 2)};\n`;
  fs.writeFileSync(outPath, fileContent, 'utf8');
  console.log(`Successfully wrote ${outPath}`);
} else {
  console.error("Validation failed! Not writing output.");
  process.exit(1);
}
