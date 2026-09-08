const fs = require('fs');
const path = require('path');
const katex = require('katex');

const SUBTOPIC = "Human evolution (Dryopithecus to Homo sapiens)";
const CHAPTER = "Evolution";
const SUBJECT = "Zoology";

const arDirections = "In the following questions, a statement of Assertion (A) is followed by a statement of Reason (R).\nChoose the correct option:\n(1) Both (A) and (R) are true and (R) is the correct explanation of (A)\n(2) Both (A) and (R) are true but (R) is not the correct explanation of (A)\n(3) (A) is true but (R) is false\n(4) (A) is false but (R) is true";

const arOptions = [
  "Both (A) and (R) are true and (R) is the correct explanation of (A)",
  "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
  "(A) is true but (R) is false",
  "(A) is false but (R) is true"
];

// 26 AR questions for Part 6
const arData = [
  {
    a: "Ramapithecus was more man-like while Dryopithecus was more ape-like.",
    r: "Dryopithecus walked on knuckles with arms longer than legs, whereas Ramapithecus had thick dental enamel and a parabolic dental arch approaching hominid dentition.",
    ans: 0,
    exp: "Dryopithecus and Ramapithecus lived about 15 mya. Ramapithecus showed hominid traits such as thick tooth enamel, shorter face, and parabolic dental arcade, making it more man-like, while Dryopithecus was arboreal and ape-like."
  },
  {
    a: "Australopithecines walked fully erect with bipedal locomotion.",
    r: "Fossil footprints discovered in volcanic ash at Laetoli, Tanzania, confirmed upright bipedal stride in Australopithecus around 3.6 million years ago.",
    ans: 0,
    exp: "The Laetoli footprints discovered by Mary Leakey provided indisputable evidence that Australopithecus afarensis walked upright with an efficient bipedal stride."
  },
  {
    a: "Homo habilis is considered the first hominid or human-like being.",
    r: "Homo habilis had a brain capacity of 650-800 cc and manufactured the first stone tools (Oldowan tool culture).",
    ans: 0,
    exp: "Homo habilis ('handy man') is classified as the first hominid species; its cranial capacity ranged between 650-800 cc and it was the earliest ancestor known to deliberately fashion stone tools."
  },
  {
    a: "Homo habilis probably did not eat meat, whereas Homo erectus probably ate meat.",
    r: "Homo erectus possessed a larger brain capacity (around 900 cc) and possessed Acheulean stone handaxes suited for hunting and butchering game.",
    ans: 1,
    exp: "Both (A) and (R) are correct NCERT statements. Homo habilis was predominantly vegetarian (did not eat meat), while Homo erectus fossils and associated stone tools indicate regular carnivory, but (R) provides supporting anatomical facts rather than the direct causal reason."
  },
  {
    a: "Homo erectus fossils discovered in Java in 1891 are dated to around 1.5 million years ago.",
    r: "Java Man (Pithecanthropus erectus) was discovered by Eugène Dubois in the Trinil beds of the Solo River.",
    ans: 1,
    exp: "Both (A) and (R) are historically and scientifically accurate. Eugène Dubois discovered Homo erectus (Java Man) in 1891 at Trinil, Java, dating to approximately 1.5 mya."
  },
  {
    a: "Neanderthal man had a cranial capacity of about 1400 cc, which is comparable to modern humans.",
    r: "Neanderthals used animal hides to protect their bodies and were the first hominids to bury their dead.",
    ans: 1,
    exp: "Both statements are true according to NCERT. Neanderthal cranial capacity was approximately 1400 cc, and they exhibited symbolic culture by dressing in hides and burying their dead with ceremonial grave goods."
  },
  {
    a: "Homo sapiens arose in Africa during the Ice Age between 75,000 to 10,000 years ago.",
    r: "Modern humans originated in Africa and subsequently migrated across continents, developing into distinct races.",
    ans: 0,
    exp: "According to the Recent African Origin (Out of Africa) model and NCERT, Homo sapiens arose in Africa during the Ice Age (75,000–10,000 ya) and radiated across the globe."
  },
  {
    a: "Prehistoric cave art developed by Homo sapiens dates back to approximately 18,000 years ago.",
    r: "Magnificent rock paintings depicting wild animals and hunting scenes can be seen at Bhimbetka rock shelters in Raisen district of Madhya Pradesh.",
    ans: 1,
    exp: "Both statements are true. Prehistoric cave art arose around 18,000 years ago, and Bhimbetka in Madhya Pradesh is a world-renowned UNESCO heritage site showcasing prehistoric rock paintings created by early Homo sapiens."
  },
  {
    a: "Agriculture and human settlements began around 10,000 years ago.",
    r: "The Neolithic Revolution marked the transition of human populations from nomadic hunter-gatherers to settled agrarian communities.",
    ans: 0,
    exp: "Around 10,000 years ago (at the close of the last glacial period), humans domesticated plants and animals, initiating agriculture and permanent sedentary civilizations."
  },
  {
    a: "The cranial capacity of Cro-Magnon man was larger than that of modern Homo sapiens.",
    r: "Cro-Magnon man had an average brain volume of approximately 1650 cc compared to 1350-1450 cc in modern humans.",
    ans: 0,
    exp: "Cro-Magnon man (early modern human of Europe) had an average cranial capacity of about 1650 cc, which exceeds the average modern human cranial capacity (~1400 cc)."
  },
  {
    a: "In humans, the foramen magnum is located anteriorly beneath the base of the skull.",
    r: "Anterior placement of the foramen magnum balances the heavy skull directly atop the vertical vertebral column during upright bipedal stance.",
    ans: 0,
    exp: "In quadrupedal apes, the foramen magnum is directed posteriorly, whereas in bipedal humans, it is shifted forward underneath the skull base so that the head balances effortlessly on the upright spine."
  },
  {
    a: "The human vertebral column possesses four distinct curvatures (cervical, thoracic, lumbar, and sacral).",
    r: "The secondary lumbar curve brings the center of gravity of the body directly over the feet during bipedal standing and walking.",
    ans: 0,
    exp: "The S-shaped curvature of the human spine (especially the secondary lumbar lordosis) aligns the torso and center of gravity directly above the pelvis and feet, providing shock absorption and balance during bipedalism."
  },
  {
    a: "The human pelvis is broad, short, and bowl-shaped compared to the elongated, narrow pelvis of chimpanzees.",
    r: "The bowl-shaped pelvis provides mechanical support for abdominal viscera during erect posture and accommodates the gluteal muscles essential for bipedal propulsion.",
    ans: 0,
    exp: "The human pelvis is shortened dorsoventrally and expanded laterally into a bowl shape to support the weight of abdominal organs and provide attachment for gluteus medius and minimus muscles that stabilize the pelvic tilt during single-leg stance."
  },
  {
    a: "The non-opposable big toe (hallux) aligned in parallel with other toes is a distinctive feature of the human foot.",
    r: "Alignment of the big toe facilitates the propulsive 'push-off' phase during bipedal striding, sacrificing grasping ability.",
    ans: 0,
    exp: "Apes have an opposable, divergent big toe for grasping tree branches. In humans, the big toe is robust, non-opposable, and adducted in line with other digits to provide propulsive thrust during bipedal walking."
  },
  {
    a: "Australopithecus afarensis fossil 'Lucy' proved that bipedal locomotion preceded massive brain enlargement in human evolution.",
    r: "Lucy possessed human-like bipedal pelvic and limb anatomy despite having a small ape-sized brain of roughly 400-450 cc.",
    ans: 0,
    exp: "The discovery of 'Lucy' (3.2 mya) conclusively disproved the old hypothesis that encephalization (large brain) drove human evolution; it proved that bipedal locomotion evolved first, followed millions of years later by brain expansion."
  },
  {
    a: "The prominent bony chin (mental protuberance) is unique to modern Homo sapiens.",
    r: "Archaic hominids such as Homo erectus and Neanderthals lacked a distinct chin, possessing retreating jaws.",
    ans: 1,
    exp: "Both statements are correct. A well-defined bony mental protuberance (chin) on the mandible is an autapomorphic diagnostic trait found exclusively in modern Homo sapiens. Neanderthals and Homo erectus possessed retreating mandibles without a chin."
  },
  {
    a: "Neanderthal man is considered a direct linear ancestor from which modern Homo sapiens directly evolved.",
    r: "Neanderthals and modern humans diverged from a common ancestral stock (Homo heidelbergensis) and lived as sister lineages.",
    ans: 3,
    exp: "Assertion is false: Neanderthals were not direct ancestors of modern humans; rather, they were a distinct sister lineage that evolved in Eurasia, while Homo sapiens evolved in Africa. Reason correctly describes their shared divergence."
  },
  {
    a: "Bipedalism in early hominids freed the forelimbs from locomotion.",
    r: "Freed forelimbs enabled hominids to manipulate objects, carry food and infants, and manufacture sophisticated tools.",
    ans: 0,
    exp: "Erect posture and bipedal gait emancipated the hands from supportive locomotion, allowing the evolution of fine motor coordination, precision grip, and tool manufacturing."
  },
  {
    a: "The canine teeth in modern humans are significantly reduced in size and do not project beyond the occlusal plane.",
    r: "Humans possess a diastema (simian gap) between the incisors and canines to accommodate large projecting canine crowns.",
    ans: 2,
    exp: "Assertion is true: human canines are small and spatulate, aligned with incisors. Reason is false: humans lack a diastema (simian gap); the dental row is continuous in a parabolic curve without gaps."
  },
  {
    a: "Australopithecus fossils were first discovered by Raymond Dart in South Africa.",
    r: "The fossil skull of a young hominid discovered in 1924 in limestone caves was named the 'Taung Child' (Australopithecus africanus).",
    ans: 0,
    exp: "In 1924, Raymond Dart discovered the Taung Child skull in South Africa and recognized its combination of ape-like brain size and human-like dentition and forward foramen magnum, naming it Australopithecus africanus."
  },
  {
    a: "Homo erectus was the first hominid species to migrate out of the African continent into Eurasia.",
    r: "Fossils of Homo erectus have been discovered across Africa, Georgia (Dmanisi), China (Peking Man), and Indonesia (Java Man).",
    ans: 0,
    exp: "Homo erectus was the first wide-ranging hominid to disperse out of Africa into Europe and Asia (as documented by fossils in Georgia, China, and Java) between 1.8 to 1.5 million years ago."
  },
  {
    a: "Speech and articulate language are associated with the enlargement of Broca's and Wernicke's areas in the human cerebral cortex.",
    r: "Endocranial casts of Homo habilis and subsequent Homo species show preferential development of these cortical language regions in the left hemisphere.",
    ans: 0,
    exp: "Development of articulate speech required specialized motor (Broca's area) and sensory language comprehension (Wernicke's area) centers in the cerebral cortex, which show early expansion in hominid endocasts."
  },
  {
    a: "The valgus angle (bicondylar angle) of the human femur brings the knees closer to the midline.",
    r: "This inward angling of the femurs places the feet directly beneath the body's center of mass during the single-support phase of walking.",
    ans: 0,
    exp: "In humans, the femurs slant inward from the wide pelvis to the knees (valgus angle), allowing the center of gravity to remain stable over the supporting foot without awkward side-to-side torso swaying."
  },
  {
    a: "Mitochondrial Eve refers to the most recent matrilineal common ancestor of all living modern humans.",
    r: "Mitochondrial DNA is inherited strictly through the maternal cytoplasm without crossing over or recombination.",
    ans: 0,
    exp: "Because mtDNA is inherited uniparentally through maternal cytoplasm and does not undergo meiotic recombination, coalescent analysis traces modern human mtDNA lineages back to a female ancestor who lived in Africa approximately 150,000–200,000 years ago."
  },
  {
    a: "Sivapithecus and Ramapithecus fossils discovered in the Shivalik Hills belong to the Miocene epoch.",
    r: "The Shivalik fossil deposits in India have yielded rich assemblages of Miocene hominoids dating to around 12 to 8 million years ago.",
    ans: 0,
    exp: "Shivalik Hills (India/Pakistan) contain world-famous Miocene sedimentary layers that produced Ramapithecus and Sivapithecus fossils dating to the Late Miocene."
  },
  {
    a: "Homo sapiens neanderthalensis lived in near east and central Asia between 100,000 and 40,000 years ago.",
    r: "Neanderthals were adapted to harsh periglacial climates with large nasal cavities, barrel chests, and short robust extremities adhering to Allen's rule.",
    ans: 1,
    exp: "Both (A) and (R) are factually correct. Neanderthals inhabited Europe and western/central Asia during the last glacial cycle (100,000–40,000 ya) and exhibited cold-climate morphological adaptations (stocky build, large noses to warm air), but (R) describes their ecogeographic adaptations rather than explaining the chronological dates."
  }
];

console.log("Built 26 Part 6 AR questions.");

// Now let's create 154 MCQs for Part 6
const mcqData = [];
function addMcq(q, opts, ans, exp) {
  mcqData.push({ q, opts, ans, exp });
}

// 1. Dryopithecus & Ramapithecus
addMcq(
  "Dryopithecus and Ramapithecus lived on Earth approximately how many years ago?",
  ["15 million years ago (mya)", "2 million years ago (mya)", "100,000 years ago", "1.5 million years ago"],
  0,
  "According to NCERT, about 15 million years ago, primates called Dryopithecus and Ramapithecus were existing."
);

addMcq(
  "Which of the following statements correctly distinguishes Dryopithecus from Ramapithecus?",
  [
    "Dryopithecus was more man-like while Ramapithecus was more ape-like",
    "Dryopithecus was more ape-like while Ramapithecus was more man-like",
    "Both were fully erect bipedal hominids with 1400 cc cranial capacity",
    "Dryopithecus lived in caves and used fire, while Ramapithecus was aquatic"
  ],
  1,
  "NCERT explicitly states: 'Dryopithecus was more ape-like while Ramapithecus was more man-like.' Both were hairy and walked like gorillas and chimpanzees."
);

addMcq(
  "Fossils of Ramapithecus and Sivapithecus in the Indian subcontinent were discovered in which geological formation?",
  ["Shivalik Hills", "Aravalli Range", "Western Ghats", "Chota Nagpur Plateau"],
  0,
  "Famous fossil hominoids including Ramapithecus and Sivapithecus were discovered in the Miocene sediments of the Shivalik Hills of northern India and Pakistan."
);

addMcq(
  "Which characteristic of the dentition made Ramapithecus appear more man-like than ape-like?",
  ["Possession of massive tusk-like projecting canines", "Thick tooth enamel, smaller canines, and a parabolic dental arch", "A large diastema in the lower jaw", "Total absence of molars"],
  1,
  "Ramapithecus had thick dental enamel, reduced canine size, and a rounded parabolic dental arch resembling hominids, unlike the rectangular/U-shaped arcade of apes."
);

// 2. Australopithecus
addMcq(
  "Fossils of Australopithecines were found in East African grasslands and date back to:",
  ["15 mya", "3 to 4 mya (lived up to 2 mya)", "100,000 years ago", "10,000 years ago"],
  1,
  "Two to four million years ago, Australopithecines lived in East African grasslands. Fossils of bone finds date to 3-4 mya in Ethiopia and Tanzania."
);

addMcq(
  "What was the typical cranial capacity of Australopithecus?",
  ["400 to 500 cc", "650 to 800 cc", "900 cc", "1400 cc"],
  0,
  "Australopithecines had a cranial capacity of about 400 to 500 cc (similar to that of modern chimpanzees)."
);

addMcq(
  "According to NCERT, what were the dietary and cultural habits of Australopithecines?",
  [
    "They were obligate carnivores that cultivated crops",
    "They hunted with stone weapons but essentially ate fruit",
    "They were cave dwellers that buried their dead with flowers",
    "They practiced advanced agriculture"
  ],
  1,
  "NCERT states: 'Evidence shows they hunted with stone weapons but essentially ate fruit.'"
);

addMcq(
  "The famous fossil skeleton named 'Lucy' belongs to which hominid species?",
  ["Australopithecus afarensis", "Homo habilis", "Homo erectus", "Homo neanderthalensis"],
  0,
  "'Lucy' is a 3.2-million-year-old skeleton of Australopithecus afarensis discovered by Donald Johanson at Hadar in the Afar Triangle of Ethiopia in 1974."
);

addMcq(
  "Who discovered the 'Taung Child' fossil (Australopithecus africanus) in South Africa in 1924?",
  ["Raymond Dart", "Louis Leakey", "Richard Leakey", "Donald Johanson"],
  0,
  "Professor Raymond Dart discovered the fossilized skull of the 'Taung Child' (Australopithecus africanus) in a limestone quarry at Taung, South Africa, in 1924."
);

addMcq(
  "The famous 3.6-million-year-old fossilized hominid footprints demonstrating bipedal walking were discovered at Laetoli, Tanzania, by:",
  ["Mary Leakey", "Eugène Dubois", "Charles Darwin", "Thomas Huxley"],
  0,
  "Mary Leakey discovered the Laetoli footprints in Tanzania in 1976, preserved in volcanic ash, providing concrete evidence of early bipedalism in Australopithecus."
);

// 3. Homo habilis
addMcq(
  "Which hominid is recognized as the first human-like being ('the hominid')?",
  ["Dryopithecus", "Australopithecus", "Homo habilis", "Homo erectus"],
  2,
  "NCERT states: 'The first human-like being the hominid and was called Homo habilis.'"
);

addMcq(
  "What was the brain capacity of Homo habilis?",
  ["400–500 cc", "650–800 cc", "900 cc", "1400 cc"],
  1,
  "According to NCERT, the brain capacities of Homo habilis were between 650–800 cc."
);

addMcq(
  "According to NCERT, what was the probable diet of Homo habilis?",
  ["They probably did not eat meat", "They were strictly carnivorous", "They ate cooked meat using fire", "They were marine filter feeders"],
  0,
  "NCERT explicitly states: 'They probably did not eat meat.'"
);

addMcq(
  "The stone tool culture associated with Homo habilis is known as:",
  ["Oldowan tool culture (pebble tools)", "Acheulean handaxes", "Mousterian flaked tools", "Microliths"],
  0,
  "Homo habilis ('handy man') manufactured simple chipped pebble and chopper tools, historically known as the Oldowan stone tool industry."
);

// 4. Homo erectus
addMcq(
  "Fossils of Homo erectus discovered in Java in 1891 date back to about:",
  ["15 mya", "1.5 mya", "100,000 ya", "10,000 ya"],
  1,
  "NCERT states: 'Fossils discovered in Java in 1891 revealed the next stage, i.e. Homo erectus about 1.5 mya.'"
);

addMcq(
  "What was the cranial capacity of Homo erectus (Java Man)?",
  ["Around 650 cc", "Around 900 cc", "Around 1400 cc", "Around 1650 cc"],
  1,
  "NCERT explicitly states: 'Homo erectus had a large brain around 900cc.'"
);

addMcq(
  "According to NCERT, which hominid 'probably ate meat'?",
  ["Australopithecus", "Homo habilis", "Homo erectus", "Dryopithecus"],
  2,
  "NCERT states: 'Homo erectus probably ate meat.'"
);

addMcq(
  "Java Man was originally given the scientific name:",
  ["Pithecanthropus erectus", "Sinanthropus pekinensis", "Homo habilis", "Australopithecus africanus"],
  0,
  "Eugène Dubois originally named his fossil discovery Pithecanthropus erectus ('erect ape-man'), later reclassified as Homo erectus."
);

addMcq(
  "Peking Man fossils discovered in Zhoukoudian caves near Beijing were originally named:",
  ["Sinanthropus pekinensis", "Pithecanthropus erectus", "Homo heidelbergensis", "Eoanthropus dawsoni"],
  0,
  "Peking Man fossils were initially named Sinanthropus pekinensis by Davidson Black, now classified as Homo erectus pekinensis."
);

addMcq(
  "The earliest direct evidence for the controlled use of fire in hearths is attributed to:",
  ["Australopithecus", "Homo erectus", "Dryopithecus", "Homo habilis"],
  1,
  "Homo erectus is widely credited as the first hominid to control and use fire for warmth, cooking, and scaring away predators."
);

addMcq(
  "The characteristic tear-drop shaped stone handaxe of the Acheulean culture was crafted by:",
  ["Homo erectus", "Homo habilis", "Australopithecus afarensis", "Dryopithecus"],
  0,
  "The Acheulean bifacial handaxe tool industry was developed and used by Homo erectus populations throughout Africa, Europe, and Asia."
);

// 5. Homo neanderthalensis
addMcq(
  "Neanderthal man lived near east and central Asia during which time period?",
  ["15 to 10 mya", "1.5 mya to 800,000 ya", "100,000 to 40,000 years ago", "10,000 to 5,000 years ago"],
  2,
  "NCERT states: 'The Neanderthal man with a brain size of 1400cc lived in near east and central Asia between 100,000-40,000 years back.'"
);

addMcq(
  "What was the cranial capacity of Neanderthal man?",
  ["650–800 cc", "900 cc", "1400 cc", "500 cc"],
  2,
  "According to NCERT, Neanderthal man possessed a brain size of 1400 cc."
);

addMcq(
  "Which hominid species is documented in NCERT to have used animal hides to protect their bodies and buried their dead?",
  ["Homo habilis", "Homo erectus", "Neanderthal man", "Australopithecus"],
  2,
  "NCERT explicitly notes: 'They used hides to protect their body and buried their dead.'"
);

addMcq(
  "The first fossil of Neanderthal man was discovered in 1856 in which country?",
  ["Neander Valley in Germany", "Trinil in Java", "Olduvai Gorge in Tanzania", "Hadar in Ethiopia"],
  0,
  "Neanderthal fossil remains were discovered in 1856 in the Neander Valley (Neandertal) near Düsseldorf, Germany."
);

addMcq(
  "Which morphological feature is characteristic of the Neanderthal skull?",
  ["A high vertical forehead and prominent chin", "Heavy brow ridges (supraorbital torus), receding forehead, and lack of chin", "A sagittal crest atop the skull with 500 cc brain", "Absence of nasal bones"],
  1,
  "Neanderthal skulls exhibit prominent supraorbital tori (eyebrow ridges), a low sloping forehead, an occipital bun, large nasal aperture, and a receding jaw without a prominent chin."
);

// 6. Homo sapiens & Cro-Magnon
addMcq(
  "Homo sapiens arose in Africa during which geological epoch/period?",
  ["During the Ice Age between 75,000–10,000 years ago", "During the Jurassic period 150 mya", "During the Miocene 15 mya", "During the Carboniferous period"],
  0,
  "NCERT states: 'Homo sapiens arose in Africa and moved across continents and developed into distinct races. During ice age between 75,000-10,000 years ago modern Homo sapiens arose.'"
);

addMcq(
  "Prehistoric cave art developed by early humans approximately how many years ago?",
  ["18,000 years ago", "100,000 years ago", "1.5 million years ago", "2,000 years ago"],
  0,
  "NCERT states: 'Pre-historic cave art developed about 18,000 years ago.'"
);

addMcq(
  "One famous example of prehistoric cave art mentioned in the NCERT textbook is located at:",
  ["Bhimbetka rock shelter in Raisen district of Madhya Pradesh", "Ajanta Caves in Maharashtra", "Ellora Caves in Maharashtra", "Elephanta Caves in Mumbai"],
  0,
  "NCERT mentions: 'One such cave paintings by Pre-historic humans can be seen at Bhimbetka rock shelter in Raisen district of Madhya Pradesh.'"
);

addMcq(
  "Agriculture and human settlements started about how many years ago?",
  ["18,000 years ago", "10,000 years ago", "40,000 years ago", "75,000 years ago"],
  1,
  "NCERT states: 'Agriculture came around 10,000 years back and human settlements started.'"
);

addMcq(
  "Cro-Magnon man is scientifically designated as:",
  ["Homo sapiens fossilis", "Homo habilis", "Homo erectus pekinensis", "Homo neanderthalensis"],
  0,
  "Cro-Magnon man is considered the direct prehistoric fossil representative of modern humans and is classified as Homo sapiens fossilis."
);

addMcq(
  "What was the cranial capacity of Cro-Magnon man?",
  ["About 900 cc", "About 1400 cc", "About 1650 cc", "About 650 cc"],
  2,
  "Cro-Magnon man had an impressive cranial capacity of about 1650 cc, which is larger than the modern human average."
);

addMcq(
  "Which of the following hominid ancestors was the FIRST to exhibit true bipedal posture and gait?",
  ["Dryopithecus", "Australopithecus", "Ramapithecus", "Tree shrew"],
  1,
  "Australopithecus is the earliest hominid conclusively documented to have walked fully erect with an efficient bipedal striding gait."
);

addMcq(
  "What is the correct chronological sequence of human ancestors from oldest to most recent?",
  [
    "Dryopithecus -> Ramapithecus -> Australopithecus -> Homo habilis -> Homo erectus -> Homo neanderthalensis -> Homo sapiens",
    "Australopithecus -> Dryopithecus -> Homo habilis -> Homo erectus -> Homo sapiens",
    "Homo habilis -> Australopithecus -> Ramapithecus -> Homo erectus -> Homo sapiens",
    "Ramapithecus -> Dryopithecus -> Homo erectus -> Homo habilis -> Homo sapiens"
  ],
  0,
  "The correct evolutionary sequence is Dryopithecus (15 mya) -> Ramapithecus (15 mya) -> Australopithecus (3-4 mya) -> Homo habilis (2 mya) -> Homo erectus (1.5 mya) -> Neanderthal (100,000-40,000 ya) -> Homo sapiens (75,000-10,000 ya)."
);

addMcq(
  "Match the human ancestor with their cranial capacity:\n(A) Australopithecus - (i) 1400 cc\n(B) Homo habilis - (ii) 900 cc\n(C) Homo erectus - (iii) 650–800 cc\n(D) Homo neanderthalensis - (iv) 450 cc",
  [
    "(A)-(iv), (B)-(iii), (C)-(ii), (D)-(i)",
    "(A)-(iii), (B)-(iv), (C)-(ii), (D)-(i)",
    "(A)-(iv), (B)-(ii), (C)-(iii), (D)-(i)",
    "(A)-(i), (B)-(ii), (C)-(iii), (D)-(iv)"
  ],
  0,
  "Australopithecus = 400-500 cc (iv); Homo habilis = 650-800 cc (iii); Homo erectus = 900 cc (ii); Neanderthal man = 1400 cc (i)."
);

addMcq(
  "Which anatomical structure in the skull shifted from a posterior to an inferior position to support bipedalism?",
  ["Foramen magnum", "Zygomatic arch", "External auditory meatus", "Orbit"],
  0,
  "The foramen magnum is located at the back of the skull in quadrupeds, but moved beneath the skull base in hominids to balance the head atop an erect spine."
);

addMcq(
  "The S-shaped curvature of the human vertebral column is crucial for:",
  ["Increasing lung volume during flight", "Absorbing vertical shocks and balancing the body over the pelvis during bipedal locomotion", "Climbing vertical tree trunks", "Allowing 360-degree neck rotation"],
  1,
  "The four spinal curves (especially cervical and lumbar lordosis) act as an elastic spring to absorb vertical impact forces and keep the body balanced during upright bipedal walking."
);

addMcq(
  "Which of the following bone modifications is an adaptation for bipedalism in humans?",
  ["Elongated arms longer than legs", "Broad, bowl-shaped pelvis and inward-sloping (valgus) femurs", "Divergent opposable big toe", "Narrow, flat pelvis"],
  1,
  "A wide, basin-shaped pelvis supports internal organs and provides attachment for balancing gluteal muscles, while valgus femur angles align feet beneath the center of gravity."
);

addMcq(
  "In modern humans, which dental feature distinguishes them from anthropoid apes?",
  ["Canines projecting beyond other teeth", "Large diastema in both upper and lower jaws", "Parabolic dental arch with small non-projecting canines and no diastema", "Rectangular dental arch with massive incisors"],
  2,
  "Humans have an evenly curved parabolic dental arcade with small canines level with the other teeth and no diastema (simian shelf/gap)."
);

addMcq(
  "The 'Taung Child' discovered by Raymond Dart was classified as:",
  ["Australopithecus africanus", "Australopithecus afarensis", "Paranthropus boisei", "Homo habilis"],
  0,
  "The Taung Child fossil was designated as the holotype for Australopithecus africanus ('southern ape of Africa')."
);

addMcq(
  "Which hominid ancestor was discovered by Donald Johanson in 1974?",
  ["Australopithecus afarensis ('Lucy')", "Homo erectus ('Java Man')", "Homo neanderthalensis", "Homo habilis ('Twiggy')"],
  0,
  "Donald Johanson discovered the remarkably complete female skeleton 'Lucy' (Australopithecus afarensis) in Hadar, Ethiopia, in 1974."
);

addMcq(
  "The discovery of 'Lucy' was scientifically revolutionary because it proved that:",
  [
    "Brain expansion occurred before bipedal walking",
    "Upright bipedal walking evolved long before significant brain enlargement",
    "Early humans used atomic energy",
    "Neanderthals evolved in South America"
  ],
  1,
  "Lucy had a fully bipedal pelvis and femur but a small brain of only ~400-450 cc, demonstrating that bipedalism evolved millions of years before large brains evolved."
);

addMcq(
  "The cranial capacity of modern adult Homo sapiens averages approximately:",
  ["650–800 cc", "900 cc", "1350–1450 cc", "2000 cc"],
  2,
  "The cranial capacity of modern adult humans averages approximately 1350 to 1450 cc (roughly 1400 cc)."
);

addMcq(
  "Which region of the human brain is specialized for the motor production of articulate speech?",
  ["Broca's area", "Wernicke's area", "Corpus callosum", "Occipital visual cortex"],
  0,
  "Broca's area in the left frontal lobe of the cerebral cortex coordinates the motor movements of the tongue, lips, and vocal cords necessary for articulate speech."
);

addMcq(
  "Wernicke's area in the human cerebral cortex is primarily responsible for:",
  ["Comprehension of spoken and written language", "Controlling heart rate", "Perceiving olfactory cues", "Producing insulin"],
  0,
  "Wernicke's area, located in the posterior superior temporal gyrus, is essential for the comprehension and decoding of speech and language."
);

addMcq(
  "What is the encephalization quotient (EQ)?",
  ["A ratio comparing actual brain size to expected brain size for an animal's body mass", "The number of teeth in the dental formula", "The angle between the femur and tibia", "The length of arms divided by legs"],
  0,
  "The Encephalization Quotient (EQ) is a measure of relative brain size defined as the ratio between observed brain mass and predicted brain mass for an animal of a given body size. Humans have the highest EQ (~7.4-7.8) among all animals."
);

addMcq(
  "Which fossil discovery in 1891 at Trinil on the banks of the Solo River was called 'Java Man'?",
  ["Pithecanthropus erectus", "Sinanthropus pekinensis", "Australopithecus afarensis", "Homo habilis"],
  0,
  "Eugène Dubois discovered a skullcap, molar teeth, and a femur at Trinil, Java, naming the fossil Pithecanthropus erectus ('Java Man'), later renamed Homo erectus erectus."
);

addMcq(
  "Heidelberg man (Homo heidelbergensis) lived in Europe and Africa during the Middle Pleistocene and is considered ancestral to:",
  ["Both Neanderthals and modern Homo sapiens", "Dryopithecus only", "Australopithecus africanus", "Lemurs and tarsiers"],
  0,
  "Homo heidelbergensis is widely regarded as the last common ancestor of Neanderthals (in Europe) and modern Homo sapiens (in Africa)."
);

addMcq(
  "Denisovans are an extinct group of archaic hominids identified primarily through:",
  ["High-coverage ancient DNA extracted from a finger bone and teeth found in Denisova Cave, Siberia", "Massive stone pyramids in Egypt", "Cave art in Lascaux", "Submarine fossil beds in the Pacific"],
  0,
  "Denisovans were discovered through DNA sequencing of a juvenile female finger bone found in Denisova Cave in the Altai Mountains of Siberia in 2010."
);

addMcq(
  "Populations of modern indigenous humans in Melanesia and Australian Aborigines carry approximately $4-6\\%$ DNA inherited from which archaic hominid group?",
  ["Denisovans", "Homo habilis", "Australopithecus", "Dryopithecus"],
  0,
  "Genomic sequencing showed that Melanesians, indigenous Australians, and certain Southeast Asian populations inherited 4 to 6 percent of their genome from archaic Denisovans."
);

addMcq(
  "The 'Out of Africa' hypothesis (Recent African Origin) posits that:",
  [
    "Modern humans arose independently in Europe, Asia, and Africa from different ape species",
    "All modern humans originated in Africa within the past 200,000 years and replaced archaic hominids across Eurasia",
    "Humans first evolved in South America and migrated to Africa",
    "Human evolution occurred exclusively on oceanic islands"
  ],
  1,
  "The Out of Africa model states that anatomically modern Homo sapiens evolved in Africa around 200,000–300,000 years ago and subsequently migrated across the globe, replacing archaic populations with limited admixture."
);

addMcq(
  "Which genetic evidence provides the strongest support for the Recent African Origin of modern humans?",
  [
    "African populations display the highest mitochondrial and nuclear genetic diversity of any human populations",
    "Africans have completely different chromosomes from Europeans",
    "Africans do not have ABO blood group alleles",
    "African genomes lack ribosomal RNA"
  ],
  0,
  "Because populations lose genetic diversity as small founder groups migrate away from the source (serial founder effect), the highest genetic diversity is found in Africa, confirming it as the cradle of modern humanity."
);

addMcq(
  "Why is mitochondrial DNA (mtDNA) particularly useful for tracing human maternal ancestry?",
  [
    "It is strictly maternally inherited and does not undergo meiotic recombination",
    "It is four times larger than the nuclear genome",
    "It mutates slower than any other gene in the body",
    "It is only found in red blood cells"
  ],
  0,
  "Mitochondrial DNA is inherited exclusively through the egg cytoplasm from the mother and does not recombine, allowing clear tracking of maternal genealogical lineages over generations."
);

addMcq(
  "The concept of 'Y-chromosomal Adam' refers to:",
  ["The most recent common patrilineal ancestor of all living men", "The first human who ever lived on Earth", "The mythical founder of agriculture", "The fossil skull of Homo habilis"],
  0,
  "Y-chromosomal Adam is the patrilineal most recent common ancestor from whom all living male humans inherited their Y chromosome, estimated to have lived in Africa roughly 200,000–300,000 years ago."
);

addMcq(
  "Which anatomical feature of the human hand provides the anatomical basis for precision grip?",
  ["An opposable thumb with saddle joint at the carpometacarpal articulation", "Syndactyly of all digits", "Webbing between fingers", "Loss of all fingernails"],
  0,
  "The fully opposable human thumb, supported by a specialized saddle joint at the trapezium-first metacarpal, allows the thumb pad to press against the pads of all other fingers, enabling precision grip."
);

addMcq(
  "Power grip versus precision grip: which of the following tasks requires precision grip?",
  ["Holding a heavy club with all fingers wrapped tightly", "Holding a delicate sewing needle or fine writing pen between thumb and index finger", "Hanging from a tree branch", "Pushing a boulder"],
  1,
  "Precision grip involves holding an object delicately between the pads of the thumb and fingers, a motor capability highly refined in hominids for delicate tool making."
);

addMcq(
  "The prominent bony projection at the lower anterior margin of the human mandible is known as the:",
  ["Mental protuberance (chin)", "Coronoid process", "Mandibular condyle", "Angular process"],
  0,
  "The mental protuberance forms the prominent bony chin, which is a unique skeletal feature of modern Homo sapiens absent in all other primates."
);

addMcq(
  "In apes, what is the 'simian gap' or 'diastema'?",
  ["The space between incisors and canines to receive the large projecting canine of the opposing jaw", "The space between two hemispheres of the brain", "The opening of the foramen magnum", "The space between two knees"],
  0,
  "In anthropoid apes, a space called the diastema exists in the upper jaw between the lateral incisor and canine, and in the lower jaw between the canine and premolar, accommodating interlocking canine teeth."
);

addMcq(
  "Which hominid ancestor is nicknamed the 'Handy Man' due to its association with primitive stone tools?",
  ["Homo habilis", "Dryopithecus", "Australopithecus afarensis", "Homo erectus"],
  0,
  "Homo habilis was named 'Handy Man' by Louis Leakey and colleagues in 1964 because of stone tools found alongside its fossil remains at Olduvai Gorge."
);

addMcq(
  "Olduvai Gorge, a world-famous paleoanthropological site that yielded crucial hominid fossils, is located in:",
  ["Tanzania", "South Africa", "Java, Indonesia", "Germany"],
  0,
  "Olduvai Gorge in the Great Rift Valley of northern Tanzania is renowned for pioneering fossil discoveries made by Louis and Mary Leakey."
);

addMcq(
  "Which famous fossil discovered by Mary Leakey in 1959 at Olduvai Gorge was originally called 'Zinjanthropus' ('Nutcracker Man')?",
  ["Paranthropus boisei", "Homo habilis", "Homo erectus", "Australopithecus afarensis"],
  0,
  "Mary Leakey discovered the robust skull of 'Zinjanthropus boisei' (now Paranthropus boisei), famous for its massive jaw, sagitall crest, and huge grinding molar teeth adapted for chewing tough plants."
);

addMcq(
  "The robust australopithecines (genus Paranthropus) differ from gracile australopithecines primarily by having:",
  ["Massive jaws, large sagittal crest, and enormous molar teeth adapted for heavy chewing", "Smaller bodies with no hair", "Cranial capacities over 1500 cc", "Complete loss of bipedalism"],
  0,
  "Robust australopithecines (such as Paranthropus boisei and P. robustus) evolved massive chewing apparatus (megadontia, sagittal crest, flaring zygomatic arches) to process fibrous vegetation."
);

addMcq(
  "Which of the following statements about Neanderthal culture is FALSE?",
  ["They buried their dead", "They used animal hides for clothing", "They manufactured sophisticated iron swords and chariots", "They cared for sick and injured members of their group"],
  2,
  "Neanderthals lived in the Stone Age (Mousterian tool industry); iron metallurgy and chariots were developed tens of thousands of years later during the Iron Age."
);

addMcq(
  "The Mousterian stone tool culture is uniquely associated with which hominid?",
  ["Neanderthal man (Homo neanderthalensis)", "Homo habilis", "Australopithecus", "Dryopithecus"],
  0,
  "The Mousterian culture, characterized by refined prepared-core flake tools (Levallois technique), is the archaeological signature of Neanderthals in Eurasia."
);

addMcq(
  "What is the average cranial capacity difference between Homo habilis and Homo erectus according to NCERT?",
  ["Homo habilis had 650–800 cc while Homo erectus had around 900 cc", "Homo habilis had 1400 cc while Homo erectus had 650 cc", "Homo habilis had 450 cc while Homo erectus had 1650 cc", "Both had identical cranial capacities of 900 cc"],
  0,
  "NCERT lists Homo habilis brain capacity at 650–800 cc and Homo erectus at around 900 cc, representing a significant jump in encephalization."
);

addMcq(
  "What happened to the brow ridges (supraorbital tori) during the evolution from archaic hominids to modern Homo sapiens?",
  ["They became progressively larger and thicker", "They became reduced and smooth, with a high vertical forehead", "They completely replaced the frontal bone", "They grew into horns"],
  1,
  "Evolution from archaic forms (such as Homo erectus and Neanderthals) to modern Homo sapiens involved the marked reduction of supraorbital ridges and the development of a steep, vertical forehead."
);

addMcq(
  "The term 'Bipedalism' specifically denotes:",
  ["Locomotion using two rear legs or hindlimbs", "Crawling on belly like a reptile", "Swimming with two fins", "Brachiation through tree branches"],
  0,
  "Bipedalism is terrestrial locomotion using two legs or hindlimbs, the hallmark evolutionary specialization of the hominid lineage."
);

addMcq(
  "Which of the following was the major ecological driver that favoured the origin of bipedalism in early African hominids?",
  ["Submersion in deep oceans", "Expansion of open savannah grasslands and shrinkage of tropical rainforests during the Pliocene", "Extinction of all predators", "Glaciation of the Sahara desert"],
  1,
  "Climatic cooling and drying in Africa converted vast tracts of dense forest into open savannahs, favouring hominids that could walk efficiently on two legs across open terrain to find food."
);

addMcq(
  "Which skeletal feature prevents the human knee from collapsing inward during the stance phase of walking?",
  ["Bicondylar angle of the femur (valgus knee)", "Inversion of the ankle", "Curvature of the radius", "Shortening of the clavicle"],
  0,
  "The bicondylar angle (femoral carrying angle or valgus knee) positions the knee joints directly below the center of mass, ensuring stability during bipedal stepping."
);

addMcq(
  "The longitudinal and transverse arches of the human foot function as:",
  ["Pinchers to grab tree branches", "Shock-absorbing springs that distribute weight and store elastic energy during walking and running", "Digging organs to excavate burrows", "Structures to aid in swimming"],
  1,
  "The arched architecture of the human foot acts like an elastic leaf spring, absorbing impact shock and returning kinetic energy during the toe-off phase of bipedal gait."
);

addMcq(
  "What is the significance of the reduction of the facial skeleton (prognathism to orthognathism) in human evolution?",
  ["Face became flattened and tucked under the enlarged cranium", "Mouth became longer like a crocodile", "Nose disappeared completely", "Eyes moved to the sides of the head"],
  0,
  "Human evolution is characterized by a transition from prognathism (projecting snout/face) to orthognathism (flat, vertical face retracted beneath the expanded frontal lobes of the brain)."
);

addMcq(
  "Which hominid is famous for being discovered in 2003 on the island of Flores, Indonesia, and nicknamed the 'Hobbit'?",
  ["Homo floresiensis", "Homo erectus", "Homo habilis", "Homo sapiens"],
  0,
  "Homo floresiensis ('the Hobbit'), discovered in Liang Bua cave on Flores Island, stood barely 1 meter tall with a cranial capacity of ~400 cc, representing insular dwarfism."
);

addMcq(
  "The phenomenon where large mainland animals evolve much smaller body sizes after colonizing small islands with limited food is termed:",
  ["Insular dwarfism (island dwarfism)", "Gigantism", "Adaptive divergence", "Polyploidy"],
  0,
  "Insular dwarfism is an evolutionary process where mainland species stranded on islands with restricted resources and reduced predator pressure evolve smaller body sizes (e.g. dwarf elephants, Homo floresiensis)."
);

addMcq(
  "Which hominid species was the contemporary of early modern Homo sapiens in Europe until its extinction approximately 40,000 years ago?",
  ["Homo neanderthalensis", "Australopithecus afarensis", "Homo habilis", "Ramapithecus"],
  0,
  "Neanderthals coexisted with modern Homo sapiens in Europe and western Asia for several thousand years before disappearing about 40,000 years ago."
);

addMcq(
  "DNA sequencing of modern non-African human genomes reveals that approximately what percentage of their DNA is of Neanderthal origin?",
  ["1 to 2%", "20 to 30%", "50%", "0%"],
  0,
  "Genomic analysis reveals that all non-African modern humans carry roughly 1% to 2% Neanderthal DNA due to interbreeding that took place in the Middle East as humans expanded out of Africa."
);

addMcq(
  "Which extinct hominid showed evidence of deliberate burial rituals, including placing flowers and horns in grave pits?",
  ["Neanderthal man (Homo neanderthalensis)", "Australopithecus", "Homo habilis", "Dryopithecus"],
  0,
  "Excavations at Shanidar Cave in Iraq revealed Neanderthal burials with pollen clusters indicating the intentional deposition of wildflowers over the dead."
);

addMcq(
  "What was the cranial capacity of Java Man (Homo erectus erectus)?",
  ["About 900 cc", "About 400 cc", "About 1400 cc", "About 1650 cc"],
  0,
  "Java Man fossils had an estimated cranial capacity of approximately 900 cc (NCERT: 'Homo erectus had a large brain around 900cc')."
);

addMcq(
  "What was the cranial capacity of Peking Man (Homo erectus pekinensis)?",
  ["Approximately 850–1200 cc (average ~1050 cc)", "450 cc", "650 cc", "1650 cc"],
  0,
  "Peking Man had a larger brain than Java Man, ranging from 850 to 1200 cc with an average of roughly 1050 cc."
);

addMcq(
  "Which of the following hominid ancestors is known to have used bone needles for stitching animal skins into clothing?",
  ["Cro-Magnon man (Homo sapiens fossilis)", "Homo habilis", "Australopithecus afarensis", "Dryopithecus"],
  0,
  "Cro-Magnon man crafted sophisticated Upper Paleolithic tools including polished bone needles with eyes, allowing the sewing of tailored fur garments."
);

addMcq(
  "The renowned cave paintings of Lascaux and Chauvet in France and Altamira in Spain were created by:",
  ["Cro-Magnon man (early modern Homo sapiens)", "Australopithecus", "Homo erectus", "Homo habilis"],
  0,
  "Magnificent Upper Paleolithic cave paintings depicting bison, horses, and mammoths in Lascaux and Altamira were painted by Cro-Magnon artists."
);

addMcq(
  "Which of the following is NOT an anatomical adaptation for bipedalism in humans?",
  ["Broad basin-shaped ilium", "Opposable hallux (big toe) for grasping branches", "Valgus angle of the knee", "Secondary lumbar curvature of the spine"],
  1,
  "An opposable big toe is an adaptation for arboreal grasping (quadrumanous locomotion in apes). Humans lost the opposability of the hallux to stabilize bipedal striding."
);

addMcq(
  "The term 'orthognathous' refers to a skull where the face:",
  ["Is nearly vertical and does not project forward", "Projects forward into a prominent muzzle", "Has no nasal bones", "Has eyes located on top of the head"],
  0,
  "Orthognathous describes a flat, straight face where the jaws do not project forward, characteristic of modern humans. Prognathous describes projecting jaws (as in apes)."
);

addMcq(
  "In human evolution, the transition from Oldowan to Acheulean tool industry occurred between:",
  ["Homo habilis and Homo erectus", "Dryopithecus and Ramapithecus", "Australopithecus and Homo habilis", "Cro-Magnon and modern man"],
  0,
  "The primitive Oldowan pebble tools of Homo habilis were superseded by the sophisticated Acheulean bifacial handaxes of Homo erectus."
);

addMcq(
  "Which of the following hominids had an average cranial capacity of approximately 1650 cc?",
  ["Cro-Magnon man", "Homo erectus", "Homo habilis", "Australopithecus"],
  0,
  "Cro-Magnon man possessed an extraordinarily large brain volume, averaging roughly 1650 cc."
);

addMcq(
  "What is the dental formula of an adult modern human?",
  ["2.1.2.3 / 2.1.2.3", "2.1.3.3 / 2.1.3.3", "3.1.4.3 / 3.1.4.3", "1.1.2.3 / 1.1.2.3"],
  0,
  "The dental formula of an adult human is 2 incisors, 1 canine, 2 premolars, and 3 molars in each quadrant, written as 2.1.2.3 / 2.1.2.3 (total 32 teeth)."
);

addMcq(
  "Wisdom teeth (third molars) in modern humans are considered:",
  ["Vestigial organs undergoing reduction due to jaw shortening", "Essential crushing teeth that are enlarging", "Unique structures not found in any other primate", "Deciduous milk teeth"],
  0,
  "With the evolutionary reduction and flattening of human jaws, third molars (wisdom teeth) frequently become impacted or fail to erupt, functioning as vestigial structures."
);

addMcq(
  "Which factor played the greatest role in promoting the rapid expansion of brain size in genus Homo?",
  ["Social cooperation, tool use, hunting strategies, and dietary shifts towards calorie-dense cooked food", "Loss of hair", "Living in underground tunnels", "Sleeping in trees"],
  0,
  "Encephalization was driven by a synergistic feedback loop involving complex tool-making, coordinated hunting, social communication/language, and access to calorie-dense meat and cooked food."
);

addMcq(
  "The FOXP2 gene in humans is of immense evolutionary interest because:",
  ["Mutations in it cause severe speech and language deficits, implicating it in the evolution of human articulate speech", "It controls insulin secretion", "It produces melanin pigment in skin", "It causes dwarfism"],
  0,
  "The FOXP2 gene encodes a transcription factor critical for the neural circuits underlying articulate speech and motor language development, with human-specific amino acid substitutions."
);

addMcq(
  "Which of the following is an example of cultural evolution rather than biological evolution in Homo sapiens?",
  ["Development of agriculture, written language, and legal codes", "Expansion of the cerebral cortex", "Formation of the bipedal foot arch", "Reduction of canine size"],
  0,
  "Cultural evolution involves non-genetic transmission of knowledge, technologies, ideas, and traditions across generations, such as agriculture and writing."
);

addMcq(
  "Which of the following provides the chronological order of cranial capacity increase among human ancestors?",
  [
    "Australopithecus (450 cc) -> Homo habilis (700 cc) -> Homo erectus (900 cc) -> Neanderthal (1400 cc)",
    "Neanderthal (1400 cc) -> Homo erectus (900 cc) -> Homo habilis (700 cc) -> Australopithecus (450 cc)",
    "Homo habilis (700 cc) -> Australopithecus (450 cc) -> Homo erectus (900 cc) -> Neanderthal (1400 cc)",
    "Homo erectus (900 cc) -> Homo habilis (700 cc) -> Neanderthal (1400 cc) -> Australopithecus (450 cc)"
  ],
  0,
  "Cranial capacities increased progressively: Australopithecus (~450 cc) -> Homo habilis (~650–800 cc) -> Homo erectus (~900 cc) -> Neanderthal (~1400 cc)."
);

addMcq(
  "A high rounded cranium with a vertical forehead, absence of continuous brow ridges, and a well-developed chin is diagnostic of:",
  ["Modern Homo sapiens", "Homo erectus", "Australopithecus afarensis", "Dryopithecus"],
  0,
  "The combination of a high vaulted skull, vertical forehead, gracile brow, and distinct mental protuberance (chin) is uniquely diagnostic of modern Homo sapiens."
);

addMcq(
  "Which of the following primates is considered genetically the closest living relative to modern humans?",
  ["Chimpanzee (Pan troglodytes)", "Gorilla (Gorilla gorilla)", "Orangutan (Pongo pygmaeus)", "Gibbon (Hylobates lar)"],
  0,
  "Molecular genetics and DNA-DNA hybridization show that chimpanzees share approximately $98.8\\%$ sequence identity with humans, making them our closest living evolutionary relatives."
);

addMcq(
  "Human chromosome 2 was formed during hominid evolution by:",
  ["The end-to-end fusion of two ancestral ape chromosomes", "The duplication of chromosome 1", "The loss of half of chromosome 3", "The fragmentation of an ancestral chromosome into five pieces"],
  0,
  "Humans have 46 chromosomes ($2n = 46$) while great apes have 48 ($2n = 48$). Cytogenetic banding and telomeric sequencing proved that human chromosome 2 resulted from the head-to-head telomeric fusion of two ancestral ape chromosomes."
);

addMcq(
  "The presence of vestigial telomeric sequences and an inactivated second centromere in the middle of human chromosome 2 is direct evidence for:",
  ["Ancestral chromosome fusion during human evolution", "Viral insertion into the genome", "Down syndrome translocation", "Lamarckian inheritance"],
  0,
  "Human chromosome 2 possesses internal head-to-head telomeric DNA repeats and an inactive second centromere, conclusive molecular proof of the fusion of two ancestral ape chromosomes."
);

addMcq(
  "Which of the following is an example of an anatomical vestige in the human skeletal or muscular system?",
  ["Coccyx (fused tail vertebrae) and auricular muscles of the ear", "Femur", "Clavicle", "Mandible"],
  0,
  "The coccyx (tailbone) represents rudimentary fused tail vertebrae, and the auricularis muscles of the pinna are vestigial remnants of ear-moving muscles in other mammals."
);

addMcq(
  "The nictitating membrane of the mammalian eye is represented in humans by which vestigial structure?",
  ["Plica semilunaris at the inner corner of the eye", "Ciliary body", "Iris", "Cornea"],
  0,
  "The plica semilunaris, a small fold of tissue at the inner canthus of the human eye, is the vestigial homologue of the functional transparent third eyelid (nictitating membrane) of birds and reptiles."
);

addMcq(
  "Which vestigial structure located at the ileocaecal junction in humans is homologous to the large cellulose-fermenting caecum of herbivorous mammals?",
  ["Vermiform appendix", "Gallbladder", "Spleen", "Pancreas"],
  0,
  "The vermiform appendix is a narrow, rudimentary blind pouch extending from the caecum, functioning as a vestigial organ in humans that was large and functional for fermenting plant fibers in herbivorous ancestors."
);

addMcq(
  "What is atavism (reversion) in human biology?",
  ["The sudden reappearance of an ancestral trait that had been lost for generations", "The gradual reduction of an organ over geological time", "The acquisition of immunity through vaccination", "The mutation of an allele into a lethal state"],
  0,
  "Atavism is the occasional expression of an ancestral phenotypic characteristic that had disappeared in recent ancestors, such as a human infant born with a short fleshy external tail or cervical fistulae."
);

addMcq(
  "A human baby born with a short external tail or dense hair covering the entire face is an example of:",
  ["Atavism", "Vestigial organ development", "Adaptive radiation", "Saltational speciation"],
  0,
  "The development of a true external tail or hypertrichosis lanuginosa universalis in humans is a classic example of atavism, where dormant ancestral genetic programs are reactivated."
);

addMcq(
  "According to archaeological and fossil records, prehistoric modern humans arrived in Australia by boat/raft approximately:",
  ["50,000 to 65,000 years ago", "500 years ago", "1.5 million years ago", "10,000 years ago"],
  0,
  "Archaeological findings in northern Australia (such as Madjedbebe rock shelter) confirm that modern human maritime voyagers reached the Australian continent roughly 50,000 to 65,000 years ago."
);

addMcq(
  "The Bering land bridge (Beringia) allowed early humans to migrate from Siberia into which continent during the last Ice Age?",
  ["North America", "Australia", "Antarctica", "Africa"],
  0,
  "During the last glacial maximum, lowered sea levels exposed the Bering land bridge connecting northeast Asia and Alaska, allowing ancestral indigenous Americans to enter North America."
);

addMcq(
  "Which physiological adaptation enabled human populations in the Tibetan plateau to thrive at extreme high altitudes without developing chronic mountain sickness?",
  ["Genetic adaptation involving EPAS1 gene variants regulating hemoglobin production", "Drinking more water", "Growing gills", "Breathing only through the skin"],
  0,
  "Tibetans possess a high-altitude adaptation driven by alleles of the EPAS1 gene (partially acquired through archaic Denisovan introgression) that prevent dangerous overproduction of red blood cells in hypoxia."
);

addMcq(
  "Lactase persistence in adult humans (ability to digest milk sugar throughout adulthood) is an example of:",
  ["Recent human evolution by natural selection driven by the cultural adoption of dairy pastoralism", "Lamarckian use and disuse", "Genetic drift reducing fitness", "An atavistic defect"],
  0,
  "In pastoralist cultures that domesticated cattle, mutations allowing lifelong synthesis of intestinal lactase conferred high nutritional fitness, a classic textbook example of gene-culture coevolution."
);

addMcq(
  "Which fossil discovery in 1848 in Forbes' Quarry, Gibraltar, was among the earliest recognized Neanderthal skulls?",
  ["Gibraltar 1 skull", "Java skullcap", "Lucy skeleton", "Taung child"],
  0,
  "The Gibraltar 1 cranium was discovered in 1848, eight years before the famed Neander Valley discovery, and was later recognized as an adult female Neanderthal."
);

addMcq(
  "Which hominid species lived synchronously alongside Homo sapiens, Neanderthals, and Denisovans until around 50,000 years ago?",
  ["Homo floresiensis and Homo luzonensis", "Dryopithecus", "Ramapithecus", "Sivapithecus"],
  0,
  "During the Late Pleistocene (until ~50,000 ya), our planet supported multiple distinct hominid species simultaneously: Homo sapiens, Neanderthals, Denisovans, Homo floresiensis, and Homo luzonensis."
);

addMcq(
  "Which of the following is true regarding human hair reduction compared to apes?",
  ["Humans have lost sweat glands", "Humans evolved high densities of eccrine sweat glands across the body coupled with fine vellus hair to enhance thermoregulatory evaporative cooling while running", "Humans have no hair follicles on the body", "Human hair was burned away by campfire accidents"],
  1,
  "Bipedal endurance running under the hot African sun selected for naked skin rich in eccrine sweat glands, allowing continuous evaporative cooling to prevent hyperthermia."
);

addMcq(
  "Skin pigmentation in human populations represents an evolutionary trade-off between:",
  [
    "Protection against ultraviolet radiation photolysis of folate (dark skin) and allowing sufficient UVB penetration for vitamin D3 synthesis (light skin)",
    "Camouflage from predators and sexual attraction",
    "Heat absorption and water loss",
    "Taste perception and hearing ability"
  ],
  0,
  "Near the equator, high melanin protects circulating folate from UV destruction; in high northern latitudes with low sunlight, reduced melanin allows UVB rays to catalyze vitamin D3 synthesis in the skin."
);

addMcq(
  "Which of the following statements about Dryopithecus is correct?",
  ["It had a cranial capacity of 1400 cc", "Its arms and legs were of equal length, it had a semi-erect posture, and it walked like modern gorillas and chimpanzees", "It made Oldowan stone tools", "It buried its dead"],
  1,
  "Dryopithecus walked on four limbs (knuckle-walking / quadrumanous), had ape-like teeth and posture, and lived about 15 million years ago in forested habitats."
);

addMcq(
  "Which of the following hominid ancestors is associated with the 'Pebble tool' culture?",
  ["Homo habilis", "Homo sapiens", "Cro-Magnon man", "Neanderthal man"],
  0,
  "Homo habilis is universally associated with the Oldowan pebble tool industry, chipping smooth river cobbles to produce sharp cutting edges."
);

addMcq(
  "Which human ancestor is known to have made the first known musical instrument (a bone flute discovered in Divje Babe cave, Slovenia)?",
  ["Homo neanderthalensis", "Australopithecus afarensis", "Homo habilis", "Dryopithecus"],
  0,
  "The Divje Babe flute, made from the femur of a juvenile cave bear with deliberately carved holes, is attributed to Neanderthals and dates to ~43,000 years ago."
);

addMcq(
  "Which of the following is an example of an upright ape-man with human dentition and ape brain size?",
  ["Australopithecus", "Homo erectus", "Homo sapiens", "Cro-Magnon man"],
  0,
  "Australopithecus is classically described as an 'upright walking ape-man' because it combined an ape-sized brain (~450 cc) with hominid bipedal posture and human-like reduced canines."
);

addMcq(
  "The cranial capacity of Heidelberg man was approximately:",
  ["1200–1300 cc", "450 cc", "650 cc", "2000 cc"],
  0,
  "Homo heidelbergensis possessed a large brain of roughly 1200–1300 cc, intermediate between Homo erectus and Neanderthals/modern humans."
);

addMcq(
  "In which part of the world have the greatest number of early hominid fossils spanning from 4 mya to 1 mya been recovered?",
  ["East African Rift Valley (Ethiopia, Kenya, Tanzania)", "Western Europe", "South America", "Australia"],
  0,
  "The East African Rift Valley provides an uninterrupted geological archive of early hominid evolution, producing Australopithecus, Homo habilis, and early Homo erectus fossils."
);

addMcq(
  "Which hominid was nicknamed 'Handy Man' because it was believed to have crafted stone tools found with it?",
  ["Homo habilis", "Australopithecus", "Dryopithecus", "Homo erectus"],
  0,
  "The Latin word 'habilis' means handy or skilled; Homo habilis was so named because stone tools were found directly alongside its skeletal remains."
);

addMcq(
  "The hominid that lived in central and eastern Asia and possessed a brain capacity of 1400 cc was:",
  ["Homo neanderthalensis", "Homo erectus", "Homo habilis", "Australopithecus africanus"],
  0,
  "NCERT states: 'The Neanderthal man with a brain size of 1400cc lived in near east and central Asia between 100,000-40,000 years back.'"
);

addMcq(
  "Which of the following hominid ancestors had the SMALLEST cranial capacity?",
  ["Australopithecus afarensis", "Homo habilis", "Homo erectus", "Homo neanderthalensis"],
  0,
  "Australopithecus had a brain capacity of ~400–500 cc, which is the smallest among all hominids in the genus Homo and Australopithecus lineage."
);

addMcq(
  "Which of the following hominid ancestors had the LARGEST average cranial capacity?",
  ["Cro-Magnon man (Homo sapiens fossilis)", "Homo erectus", "Homo habilis", "Australopithecus africanus"],
  0,
  "Cro-Magnon man had an average cranial capacity of about 1650 cc, which is larger than Neanderthal (~1400 cc), modern humans (~1400 cc), Homo erectus (900 cc), and Homo habilis (700 cc)."
);

addMcq(
  "The study of fossil humans and hominid evolution is formally known as:",
  ["Paleoanthropology", "Herpetology", "Ornithology", "Entomology"],
  0,
  "Paleoanthropology is the scientific discipline dedicated to the study of the hominid fossil record and the origin and evolution of humans."
);

addMcq(
  "Which of the following features is shared by both gorillas and Dryopithecus?",
  ["Arboreal and knuckle-walking locomotion with arms longer than legs", "Fully upright bipedal stride with non-opposable big toe", "1400 cc brain volume with chin", "Use of fire and burial of dead"],
  0,
  "Dryopithecus possessed primitive ape-like adaptations including long arms, knuckle-walking posture, and arboreal habits, shared with modern great apes like gorillas."
);

addMcq(
  "What is the evolutionary significance of the valgus angle of the femur in human bipedalism?",
  ["It positions the knees and feet directly under the body's center of gravity during walking", "It allows running backwards faster than forwards", "It prevents fractures of the patella during swimming", "It enables the knees to lock during tree climbing"],
  0,
  "The valgus knee brings the feet directly beneath the pelvis and trunk, reducing lateral center-of-gravity displacement and saving metabolic energy during bipedal walking."
);

addMcq(
  "Which hominid ancestor is credited with the earliest development of symbolic art and religious burial practices?",
  ["Neanderthals and early modern humans (Homo sapiens)", "Australopithecus afarensis", "Homo habilis", "Dryopithecus"],
  0,
  "Burial of the dead with ritual grave items (flowers, tools, animal horns) and body adornment (pigments, shells) first appeared among Neanderthals and early modern Homo sapiens."
);

console.log(`Part 6 raw MCQs count: ${mcqData.length}`);

// We will slice or add MCQs to reach exactly 154 MCQs!
// Let's ensure we have at least 154 MCQs


const extra32 = [
  {
    "q": "The 'obstetric dilemma' in human evolutionary biology refers to the evolutionary compromise between:",
    "opts": [
      "Pelvic adaptations for efficient bipedal locomotion and a birth canal wide enough to deliver a large-brained newborn",
      "Eating cooked meat and raw vegetables",
      "Running on land and swimming in rivers",
      "Speech motor coordination and mastication"
    ],
    "ans": 0,
    "exp": "Bipedalism requires a narrow, compact pelvis for efficient biomechanical stride, while encephalization produces large-headed infants. This evolutionary trade-off resulted in the obstetric dilemma and the birth of secondary altricial, dependent human babies."
  },
  {
    "q": "Why are human infants born relatively helpless (secondary altriciality) compared to ape infants?",
    "opts": [
      "Human brain growth must continue at rapid fetal rates outside the womb to allow delivery through the bipedal pelvic canal",
      "Human milk has no nutrients for the first year",
      "Humans lack chromosomes required for early walking",
      "Human infants are born without bones"
    ],
    "ans": 0,
    "exp": "Because the human maternal pelvis is constrained by the biomechanical demands of bipedalism, human infants are born when brain development is only about 25% complete, requiring prolonged postpartum parental investment and care."
  },
  {
    "q": "Which fossil hominid discovered in Chad, Central Africa, dating to about 6 to 7 million years ago, represents one of the oldest known members of the human family?",
    "opts": [
      "Sahelanthropus tchadensis ('Toumai')",
      "Homo habilis",
      "Homo erectus",
      "Cro-Magnon man"
    ],
    "ans": 0,
    "exp": "Sahelanthropus tchadensis ('Toumai'), discovered in the Djurab Desert of Chad in 2001, dates to nearly 7 million years ago, very close to the estimated divergence of the hominid and chimpanzee lineages."
  },
  {
    "q": "The 4.4-million-year-old fossil hominid named 'Ardi' discovered in Middle Awash, Ethiopia, belongs to which species?",
    "opts": [
      "Ardipithecus ramidus",
      "Australopithecus afarensis",
      "Homo habilis",
      "Dryopithecus africanus"
    ],
    "ans": 0,
    "exp": "'Ardi' is the fossil skeleton of a female Ardipithecus ramidus (4.4 mya) that showed facultative bipedalism in a woodland habitat with an opposable big toe, disproving the savannah hypothesis of bipedal origins."
  },
  {
    "q": "The 'Turkana Boy' (or Nariokotome Boy), an extraordinarily complete 1.6-million-year-old fossil skeleton found near Lake Turkana in Kenya, was an adolescent belonging to:",
    "opts": [
      "Homo erectus (Homo ergaster)",
      "Australopithecus afarensis",
      "Dryopithecus",
      "Homo habilis"
    ],
    "ans": 0,
    "exp": "The Nariokotome Boy (Turkana Boy), discovered by Kamoya Kimeu and Richard Leakey in 1984, is the most complete early Homo erectus/ergaster skeleton ever unearthed."
  },
  {
    "q": "The 1.8-million-year-old hominid fossils discovered in Dmanisi, Republic of Georgia, are scientifically crucial because:",
    "opts": [
      "They represent the oldest indisputable evidence of early Homo outside the African continent",
      "They were found inside an Egyptian pyramid",
      "They prove that humans evolved from kangaroos",
      "They had brains larger than 2000 cc"
    ],
    "ans": 0,
    "exp": "The Dmanisi hominid crania and postcrania dating to 1.8 mya represent the earliest known diaspora of the genus Homo out of Africa into Eurasia."
  },
  {
    "q": "The intermembral index is defined as (arm length / leg length) x 100. In modern humans, this index is:",
    "opts": [
      "Less than 100 (around 70), because legs are significantly longer than arms for striding bipedalism",
      "Greater than 150, because arms are longer than legs",
      "Exactly 100, because arms and legs are identical",
      "Zero"
    ],
    "ans": 0,
    "exp": "In brachiating apes (gibbons, chimpanzees), arms are longer than legs (intermembral index > 100). In bipedal humans, legs are substantially elongated relative to arms, resulting in an index of approximately 70."
  },
  {
    "q": "The canine honing complex (CP3 complex), in which the upper canine shears against the lower third premolar to sharpen itself, is present in apes but was lost in:",
    "opts": [
      "Early hominids including Australopithecus and genus Homo",
      "All living primates including humans",
      "Dryopithecus alone",
      "Carnivorous mammals only"
    ],
    "ans": 0,
    "exp": "Loss of the canine-premolar (CP3) honing mechanism is one of the earliest dental synapomorphies of hominids, documented from Ardipithecus and Australopithecus to modern Homo."
  },
  {
    "q": "What is the primary function of the longitudinal and transverse arches of the human foot during bipedal running?",
    "opts": [
      "They act as a dynamic biological spring that compresses and stores elastic strain energy to propel the body forward",
      "They prevent the foot from touching the ground",
      "They allow grasping tree branches",
      "They increase heat loss to the soil"
    ],
    "ans": 0,
    "exp": "The human plantar aponeurosis and foot arches store and release elastic mechanical energy with every foot strike, significantly reducing the metabolic cost of long-distance bipedal running."
  },
  {
    "q": "The calcaneus (heel bone) in humans is large, broad, and robust compared to apes because:",
    "opts": [
      "It must absorb the entire initial impact force during the 'heel-strike' phase of bipedal walking",
      "It contains red marrow that synthesizes hormones",
      "It holds the claws in place",
      "It was modified by wearing leather shoes"
    ],
    "ans": 0,
    "exp": "Human bipedal gait begins with a characteristic heel-strike. A large, robust calcaneus provides the broad platform needed to absorb this shock and transmit weight forward to the ball of the foot."
  },
  {
    "q": "Which of the following describes the shape of the dental arcade in modern humans compared to chimpanzees?",
    "opts": [
      "Humans have a smooth, parabolic dental arch, whereas chimpanzees have a rectangular, U-shaped dental arch",
      "Humans have a rectangular arch and chimpanzees have a circular arch",
      "Humans have a triangular arch with giant canines",
      "Both have identical rectangular arches"
    ],
    "ans": 0,
    "exp": "Chimpanzees and apes have parallel tooth rows forming a rectangular, U-shaped arcade with large projecting canines. Humans possess a wide, parabolic (elliptical) dental arch with small, uniformly sized teeth."
  },
  {
    "q": "The human knee exhibits a unique structural feature where the lateral lip of the patellar groove of the femur is elevated. This prevents:",
    "opts": [
      "Lateral dislocation of the patella during quadriceps contraction in an angled (valgus) knee",
      "Bending of the knee during sleep",
      "Movement of blood into the calf muscles",
      "Growth of the tibia"
    ],
    "ans": 0,
    "exp": "Because human femurs angle inward (valgus angle), the quadriceps muscle pulls diagonally, tending to pull the kneecap outward. A prominent lateral femoral lip prevents lateral patellar subluxation."
  },
  {
    "q": "Homo naledi, an extinct hominid discovered in 2013 in the Rising Star cave system in South Africa, showed an intriguing mosaic of:",
    "opts": [
      "A small australopith-like brain (~450–600 cc) combined with human-like hand and foot anatomy adapted for tool use and bipedalism",
      "A 2000 cc brain with ape limbs",
      "Wings and feathers",
      "Four legs and aquatic fins"
    ],
    "ans": 0,
    "exp": "Homo naledi exhibited an astonishing mosaic of primitive features (small cranial capacity ~500 cc, curved fingers) alongside derived modern human-like wrists, hands, and feet."
  },
  {
    "q": "Which hominid species discovered in Callao Cave on the island of Luzon, Philippines, lived about 50,000–67,000 years ago?",
    "opts": [
      "Homo luzonensis",
      "Homo habilis",
      "Dryopithecus",
      "Australopithecus afarensis"
    ],
    "ans": 0,
    "exp": "Homo luzonensis is an extinct endemic human species discovered in 2019 in Callao Cave, Luzon, Philippines, that displayed unique mosaic anatomical traits."
  },
  {
    "q": "What was the average lifespan of early prehistoric hominids compared to modern humans?",
    "opts": [
      "Rarely exceeded 30–40 years due to high infant mortality, infectious diseases, and trauma",
      "Exceeded 120 years because of an organic diet",
      "Identical to modern humans (around 80 years)",
      "Less than 5 years for adults"
    ],
    "ans": 0,
    "exp": "Paleodemographic studies show that prehistoric hominids experienced severe infectious, parasitic, predatory, and nutritional mortality, with few individuals surviving past 35–40 years of age."
  },
  {
    "q": "In human evolution, the reduction of the jaw and chewing muscles (such as masseter and temporalis) is correlated with a frameshift mutation in which myosin gene?",
    "opts": [
      "MYH16 gene (masticatory myosin gene)",
      "Hemoglobin beta gene",
      "Insulin gene",
      "Rhodopsin gene"
    ],
    "ans": 0,
    "exp": "Loss of function in the MYH16 gene (encoding a masticatory heavy chain myosin) occurred around 2.4 million years ago in the human lineage, correlating with reduced jaw muscle size and allowing cranial expansion."
  },
  {
    "q": "The first animal domesticated by prehistoric modern humans during the Upper Paleolithic (around 15,000–30,000 years ago) was:",
    "opts": [
      "Dog (Canis lupus familiaris) from wild wolves",
      "Cow",
      "Horse",
      "Chicken"
    ],
    "ans": 0,
    "exp": "The domestic dog was the earliest animal to be domesticated by ancestral hunter-gatherer humans from Eurasian wolf ancestors tens of thousands of years before the advent of agriculture."
  },
  {
    "q": "Which of the following statements about Neanderthal morphology adheres to Bergmann's and Allen's ecological rules?",
    "opts": [
      "Neanderthals had compact, barrel-shaped chests and short, stout limbs to conserve body heat in glacial Europe",
      "Neanderthals had extremely long, skinny limbs and thin torsos to dissipate heat",
      "Neanderthals had large wings",
      "Neanderthals lacked ears entirely"
    ],
    "ans": 0,
    "exp": "Consistent with Allen's rule (short limbs reduce surface area) and Bergmann's rule (large body mass conserves heat), Neanderthals evolved stocky, hyper-robust, barrel-chested bodies adapted to Ice Age cold."
  },
  {
    "q": "The hyoid bone found in the Kebara 2 Neanderthal fossil in Israel demonstrated that:",
    "opts": [
      "Neanderthals had a hyoid bone virtually identical to modern humans, suggesting anatomical capability for articulate speech",
      "Neanderthals had no vocal cords",
      "Neanderthals breathed through their ears",
      "Neanderthals could not swallow food"
    ],
    "ans": 0,
    "exp": "The discovery of a modern-looking hyoid bone in the Kebara Neanderthal skeleton provided anatomical evidence that the vocal tract and hyoid apparatus necessary for speech were already present."
  },
  {
    "q": "Which cranial suture in modern human skulls typically fuses last, allowing the brain to expand significantly during the first two years of childhood?",
    "opts": [
      "Cranial sutures and anterior fontanelle remaining open during early infancy",
      "Immediate fusion of all skull bones at birth",
      "Absence of skull bones in infancy",
      "Solid continuous bone without joints"
    ],
    "ans": 0,
    "exp": "The unfused cranial sutures and fontanelles ('soft spots') allow the fetal head to deform slightly to pass through the birth canal and accommodate tremendous postnatal brain growth."
  },
  {
    "q": "Which hominid fossil site in South Africa is known as the 'Cradle of Humankind' (a UNESCO World Heritage Site)?",
    "opts": [
      "Sterkfontein, Swartkrans, and Kromdraai caves",
      "Gobi Desert",
      "Mojave Desert",
      "Atacama Trench"
    ],
    "ans": 0,
    "exp": "The limestone caves of Sterkfontein and Swartkrans in South Africa (Cradle of Humankind) yielded hundreds of hominid fossils including 'Mrs. Ples' (Australopithecus africanus) and Paranthropus."
  },
  {
    "q": "The famous fossil skull 'Mrs. Ples' discovered by Robert Broom at Sterkfontein in 1947 belongs to:",
    "opts": [
      "Australopithecus africanus",
      "Homo habilis",
      "Homo erectus",
      "Homo sapiens"
    ],
    "ans": 0,
    "exp": "'Mrs. Ples' (Sts 5) is the most complete adult skull of Australopithecus africanus ever found in South Africa, discovered by Dr. Robert Broom."
  },
  {
    "q": "Which hominid is popularly recognized as the 'Java Ape-Man' discovered by Eugène Dubois in 1891?",
    "opts": [
      "Homo erectus erectus",
      "Homo habilis",
      "Homo sapiens neanderthalensis",
      "Australopithecus afarensis"
    ],
    "ans": 0,
    "exp": "Eugène Dubois discovered the fossilized skullcap and femur of 'Java Ape-Man' at Trinil, Java, later designated scientifically as Homo erectus erectus."
  },
  {
    "q": "The prominent 'occipital bun' (chignon), a projecting knot of bone at the back of the cranium, is a distinctive anatomical feature of:",
    "opts": [
      "Neanderthal skulls",
      "Australopithecus afarensis",
      "Modern human infants",
      "Dryopithecus"
    ],
    "ans": 0,
    "exp": "The occipital bun is a prominent posterior bulge of the occipital bone characteristic of Neanderthal crania, rarely found in modern Homo sapiens."
  },
  {
    "q": "What is the chronological sequence of the three major technological Stone Age eras?",
    "opts": [
      "Paleolithic (Old Stone Age) -> Mesolithic (Middle Stone Age) -> Neolithic (New Stone Age)",
      "Neolithic -> Paleolithic -> Mesolithic",
      "Mesolithic -> Neolithic -> Paleolithic",
      "Bronze Age -> Stone Age -> Iron Age"
    ],
    "ans": 0,
    "exp": "Human prehistoric technology progressed chronologically through the Paleolithic (chipped stone tools), Mesolithic (microliths), and Neolithic (polished stone tools and agriculture)."
  },
  {
    "q": "Microliths (miniature stone blades mounted onto wooden or bone handles to make harpoons and arrows) are characteristic of which cultural epoch?",
    "opts": [
      "Mesolithic era",
      "Lower Paleolithic era",
      "Jurassic period",
      "Devonian period"
    ],
    "ans": 0,
    "exp": "Microliths are small geometric stone blades characteristic of the Mesolithic (Middle Stone Age) period, used to construct composite tools like sickles and arrows."
  },
  {
    "q": "Which human evolutionary landmark occurred approximately 10,000 years ago, transforming human ecology and culture?",
    "opts": [
      "The Neolithic agricultural revolution and permanent human settlements",
      "The origin of bipedalism",
      "The first controlled use of fire",
      "The migration of Homo erectus out of Africa"
    ],
    "ans": 0,
    "exp": "NCERT notes that agriculture and human settlements started about 10,000 years ago, initiating the Neolithic revolution."
  },
  {
    "q": "What is the primary difference in facial profile between modern Homo sapiens and anthropoid apes?",
    "opts": [
      "Apes are prognathous with projecting jaws, while modern humans are orthognathous with flat vertical faces and a prominent chin",
      "Humans are prognathous and apes are orthognathous",
      "Apes have prominent chins while humans do not",
      "There is no difference in facial profile"
    ],
    "ans": 0,
    "exp": "Apes have protruding, forward-projecting jaws (prognathism) without a chin, while modern humans have a vertical, flattened face (orthognathism) with a distinctive bony chin."
  },
  {
    "q": "Which evolutionary change in the respiratory tract allowed articulate speech in humans, but increased the risk of choking on food?",
    "opts": [
      "Descent of the larynx lower into the neck, creating an expanded pharyngeal resonance space above the vocal cords",
      "Loss of the epiglottis",
      "Fusion of tracheal rings into bone",
      "Enlargement of nasal conchae"
    ],
    "ans": 0,
    "exp": "In adult humans, the larynx descends into the neck, separating the soft palate and epiglottis. This creates a two-tube acoustic resonance chamber (pharynx) essential for vowel sounds, at the cost of choking vulnerability."
  },
  {
    "q": "The discovery of stone tools at Shangshan and Jiahu in China and the Fertile Crescent in the Near East dating to ~10,000 years ago marks the beginning of:",
    "opts": [
      "Sedentary agriculture and crop cultivation (rice, wheat, barley)",
      "Hunting mammoths with handaxes",
      "Living in trees like chimpanzees",
      "Underwater respiration"
    ],
    "ans": 0,
    "exp": "Plant domestication (wheat/barley in Fertile Crescent, rice in China) began approximately 10,000–11,000 years ago, founding the earliest farming societies."
  },
  {
    "q": "Which of the following is an example of an Upper Paleolithic Venus figurine created by Cro-Magnon man?",
    "opts": [
      "Venus of Willendorf (Austria)",
      "Mona Lisa",
      "Statue of Liberty",
      "Terracotta Army"
    ],
    "ans": 0,
    "exp": "The Venus of Willendorf (Austria, ~25,000 years ago) is a famous Upper Paleolithic carving of a female figure, symbolizing fertility in early modern human culture."
  },
  {
    "q": "Which sequence correctly summarizes the progressive evolution of brain volume in hominids?",
    "opts": [
      "Australopithecus (~450 cc) -> Homo habilis (~700 cc) -> Homo erectus (~900 cc) -> Modern Homo sapiens (~1400 cc) -> Cro-Magnon (~1650 cc)",
      "Homo sapiens (~1400 cc) -> Homo erectus (~900 cc) -> Homo habilis (~700 cc) -> Australopithecus (~450 cc)",
      "Homo erectus (~900 cc) -> Australopithecus (~450 cc) -> Homo habilis (~700 cc) -> Homo sapiens (~1400 cc)",
      "Cro-Magnon (~1650 cc) -> Homo habilis (~700 cc) -> Homo erectus (~900 cc) -> Homo sapiens (~1400 cc)"
    ],
    "ans": 0,
    "exp": "Fossil cranial capacities increased markedly over 4 million years: Australopithecus (~400-500 cc) -> Homo habilis (650-800 cc) -> Homo erectus (~900 cc) -> modern Homo sapiens (~1350-1450 cc) -> Cro-Magnon (~1650 cc)."
  }
];
extra32.forEach(m => addMcq(m.q, m.opts, m.ans, m.exp));

// Take exactly 154 MCQs

addMcq(
  "Which fossil discovery in the Neander Valley, Germany, in 1856 prompted the first widespread scientific recognition of archaic humans?",
  ["Neanderthal 1 (Feldhofer 1)", "Cro-Magnon 1", "Peking Man", "Lucy"],
  0,
  "The discovery of skullcap and skeletal bones in Feldhofer Cave in the Neander Valley in 1856 led to the classification of Homo neanderthalensis by William King in 1864."
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
console.log(`Part 6 total questions: ${allQuestions.length} (AR: ${arQuestions.length}, MCQ: ${mcqQuestions.length})`);

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

console.log(`Part 6 KaTeX errors: ${katexErrors}`);

if (katexErrors === 0 && allQuestions.length === 180) {
  const outPath = path.join(__dirname, 'data_zoology_evolution_part6.js');
  const fileContent = `// Auto-generated data for Zoology Evolution Part 6: ${SUBTOPIC}\nmodule.exports = ${JSON.stringify(allQuestions, null, 2)};\n`;
  fs.writeFileSync(outPath, fileContent, 'utf8');
  console.log(`Successfully wrote ${outPath}`);
} else {
  console.error("Validation failed! Not writing output.");
  process.exit(1);
}
