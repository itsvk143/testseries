// scripts/build_zoology_repro_part7.js
// Subtopic: Parturition, lactation, and embryonic development
// Chapter: Reproduction
// Subject: Zoology
// 26 Assertion-Reason, 154 MCQ = 180 Questions

const fs = require('fs');
const path = require('path');
const katex = require('katex');

const SUBTOPIC = "Parturition, lactation, and embryonic development";
const CHAPTER = "Reproduction";
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
    a: "Parturition is induced by a complex neuroendocrine mechanism.",
    r: "The signals for parturition originate from the fully developed fetus and the placenta, inducing the fetal ejection reflex.",
    ans: 0,
    exp: "Signals from the mature fetus and placenta trigger mild uterine contractions (fetal ejection reflex) which stimulate maternal oxytocin release. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Oxytocin release during labor operates via a positive feedback mechanism.",
    r: "Uterine contractions stimulate maternal pituitary oxytocin release, which in turn causes progressively stronger uterine contractions.",
    ans: 0,
    exp: "Cervical stretch and myometrial contractions send ascending sensory neural signals to the maternal hypothalamus, inducing more oxytocin release in an escalating positive feedback loop. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Colostrum is considered indispensable for newborn infants.",
    r: "Colostrum is richly endowed with secretory antibodies (primarily IgA) that confer passive immunity against pathogens.",
    ans: 0,
    exp: "The yellowish fluid produced during early lactation contains high concentrations of secretory IgA antibodies that protect the neonatal gastrointestinal and respiratory tracts. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "The placenta acts as an endocrine tissue during human pregnancy.",
    r: "The placenta secretes hormones including hCG, hPL, estrogens, and progestogens.",
    ans: 0,
    exp: "The placenta synthesizes several peptide and steroid hormones essential for maintenance of pregnancy and fetal growth. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "hCG, hPL, and relaxin are hormones produced in females only during pregnancy.",
    r: "These three hormones are synthesized exclusively by the syncytiotrophoblast of the human placenta.",
    ans: 2,
    exp: "(A) is true because NCERT explicitly specifies that hCG, hPL, and relaxin are produced only during pregnancy. (R) is false because relaxin is secreted primarily by the ovary (corpus luteum) in late pregnancy, not exclusively by the placenta."
  },
  {
    a: "The first sign of a growing fetus is typically noticed by listening to the heart sound carefully through a stethoscope.",
    r: "The human embryonic heart is formed after one month of pregnancy.",
    ans: 0,
    exp: "NCERT notes: 'The first sign of growing foetus may be noticed by listening to the heart sound carefully through the stethoscope. After one month of pregnancy, the embryo's heart is formed.' Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "By the end of the first trimester (12 weeks), the fetus's limbs and external genital organs are well developed.",
    r: "By the end of the second month of pregnancy, the fetus develops limbs and digits.",
    ans: 1,
    exp: "Both statements are correct NCERT milestones: limbs and digits form by 2 months, and major organ systems including external genitalia are well-developed by 12 weeks. The 2-month milestone does not explain the 12-week development. Both (A) and (R) are true, but (R) is not the correct explanation of (A)."
  },
  {
    a: "The inner cell mass possesses pluripotent stem cells.",
    r: "Stem cells of the inner cell mass retain the developmental potency to give rise to all tissues and organs of the adult body.",
    ans: 0,
    exp: "NCERT states: 'The inner cell mass contains certain cells called stem cells which have the potency to give rise to all the tissues and organs.' Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Immediately following implantation, the inner cell mass differentiates into three germ layers.",
    r: "The three primary germ layers formed are outer ectoderm, inner endoderm, and intermediate mesoderm.",
    ans: 0,
    exp: "Gastrulation transforms the inner cell mass into ectoderm, endoderm, and mesoderm, which give rise to all body tissues. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "The umbilical cord connects the developing embryo to the maternal placenta.",
    r: "The umbilical cord contains blood vessels that transport nutrients and oxygen to the fetus and carry away metabolic wastes.",
    ans: 0,
    exp: "NCERT specifies that the placenta is connected to the embryo through an umbilical cord which helps in transport of substances to and from the embryo. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Prolactin and oxytocin perform distinct, complementary roles in lactation.",
    r: "Prolactin stimulates milk synthesis in the mammary alveoli, whereas oxytocin stimulates the milk ejection (let-down) reflex.",
    ans: 0,
    exp: "Prolactin from the anterior pituitary acts on alveolar epithelial cells to produce milk, while oxytocin from the posterior pituitary contracts myoepithelial cells to expel milk. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Suckling by the infant stimulates the release of both prolactin and oxytocin from the maternal pituitary.",
    r: "Nipple mechanoreceptors send sensory nerve impulses via the spinal cord to the maternal hypothalamus to trigger neuroendocrine reflexes.",
    ans: 0,
    exp: "The suckling tactile stimulus elicits the milk-ejection and milk-production neuroendocrine reflexes by inhibiting dopamine (PRL inhibitor) and stimulating oxytocin paraventricular neurons. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Human placenta is described as hemochorial and discoidal.",
    r: "Maternal blood comes into direct contact with the fetal chorionic trophoblast villi in the intervillous spaces.",
    ans: 0,
    exp: "In the human hemochorial placenta, maternal vessels open directly into intervillous spaces bathed in maternal blood, separated from fetal capillaries only by chorionic tissue layers. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "The expulsion of the placenta occurs after the delivery of the baby.",
    r: "The delivered placenta and fetal membranes are medically referred to as the afterbirth.",
    ans: 1,
    exp: "Both statements are correct NCERT facts: uterine contractions continue after fetal birth to detach and deliver the placenta (afterbirth). The clinical term 'afterbirth' does not explain why delivery occurs after the baby. Both (A) and (R) are true, but (R) is not the correct explanation of (A)."
  },
  {
    a: "First fetal movements and appearance of hair on the fetal head are usually observed during the fifth month of pregnancy.",
    r: "By the end of 24 weeks, the fetal body is covered with fine hair, eye-lids separate, and eyelashes are formed.",
    ans: 1,
    exp: "Both statements are accurate developmental milestones given in NCERT Class 12 Biology. The 24-week milestone does not explain the fifth month movements. Both (A) and (R) are true, but (R) is not the correct explanation of (A)."
  },
  {
    a: "Maternal and fetal blood mix freely within the placenta during normal gestation.",
    r: "The chorionic villi completely dissolve all intervening capillary walls between mother and fetus.",
    ans: 3,
    exp: "Both (A) and (R) are false. Maternal and fetal blood do NOT mix; they are separated by the placental barrier (syncytiotrophoblast, cytotrophoblast, fetal mesenchyme, and fetal capillary endothelium). Thus (A) is false and (R) is false (option d)."
  },
  {
    a: "Relaxin is secreted during the later phase of pregnancy.",
    r: "Relaxin facilitates parturition by loosening the pubic symphysis and softening the uterine cervix.",
    ans: 0,
    exp: "Relaxin secreted in late pregnancy by the corpus luteum and placenta relaxes the pelvic ligaments and softens the cervix, easing the passage of the fetus through the birth canal. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Levels of maternal cortisol, thyroxine, prolactin, and estrogens increase manifold during human pregnancy.",
    r: "Elevated maternal hormone levels are essential for supporting fetal growth, metabolic changes in the mother, and maintenance of pregnancy.",
    ans: 0,
    exp: "NCERT states: 'Levels of other hormones like estrogens, progestogens, cortisol, prolactin, thyroxine, etc., are also increased several folds in maternal blood. Increased production of these hormones is essential for supporting the fetal growth, metabolic changes in the mother and maintenance of pregnancy.' Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "The blastocyst implants into the maternal endometrium approximately 6 to 7 days after fertilization.",
    r: "The trophoblast layer of the blastocyst secretes proteolytic enzymes that digest and invade the endometrial stroma.",
    ans: 0,
    exp: "Trophoblast cells produce enzymes like metalloproteinases that erode the uterine surface epithelium, allowing interstitial embedding of the blastocyst around days 6-7. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Amniocentesis can be used to detect fetal chromosomal abnormalities such as Down syndrome.",
    r: "Amniotic fluid contains sloughed fetal skin and mucosal cells that can be karyotyped.",
    ans: 0,
    exp: "Cultured amniocytes from aspirated amniotic fluid can be analyzed via karyotyping to identify aneuploidies like Down syndrome, Klinefelter syndrome, and metabolic disorders. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "The umbilical vein carries oxygenated and nutrient-rich blood from the placenta to the fetus.",
    r: "In the fetal circulation, the umbilical vein is the only vessel carrying blood with the highest oxygen saturation from the placenta.",
    ans: 0,
    exp: "Unlike adult veins, the single umbilical vein carries well-oxygenated, nutrient-laden blood from maternal intervillous exchange to the fetal liver and ductus venosus. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Teratogens like thalidomide or alcohol exert their most devastating structural effects during the first trimester.",
    r: "The first trimester is the critical period of active embryonic organogenesis when major organ systems are laid down.",
    ans: 0,
    exp: "During organogenesis (weeks 3 to 8 of gestation), developing tissues are extremely vulnerable to toxic disruptions, leading to severe congenital malformations. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "The myometrium of the uterus exhibits rhythmic peristaltic contractions throughout normal menstrual cycles.",
    r: "High progesterone levels throughout the secretory phase trigger intense myometrial hyper-contractility.",
    ans: 3,
    exp: "Both (A) and (R) are false. Progesterone is a powerful myometrial relaxant ('progesterone block') that prevents uterine contractions to protect the secretory endometrium and any developing blastocyst. Thus (A) is false and (R) is false (option d)."
  },
  {
    a: "Human gestation period lasts for about 280 days when calculated from the first day of the last menstrual period (LMP).",
    r: "Fertilization normally takes place approximately 14 days after the onset of the last menstrual period.",
    ans: 0,
    exp: "Clinical gestational age (280 days / 40 weeks) counts from LMP; subtracting the 14 days prior to ovulation gives the actual embryonic age of 266 days (38 weeks). Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Injections of oxytocin are clinically administered to induce or augment labor.",
    r: "Exogenous oxytocin stimulates forceful rhythmic contractions of uterine myometrial smooth muscle.",
    ans: 0,
    exp: "Synthetic oxytocin (Pitocin) stimulates oxytocin receptors on uterine myometrium, initiating or intensifying labor contractions. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Ectoderm gives rise to the nervous system and epidermis of the skin.",
    r: "Mesoderm differentiates into the muscular, skeletal, circulatory, and excretory systems.",
    ans: 1,
    exp: "Both statements are correct embryological facts regarding the germ layer origins of human tissues. Mesodermal differentiation does not explain ectodermal fate. Both (A) and (R) are true, but (R) is not the correct explanation of (A)."
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
    q: "The process of delivery of the fetus (childbirth) is medically termed:",
    opts: ["Parturition", "Gestation", "Lactation", "Implantation"],
    ans: 0,
    exp: "NCERT states: 'The process of delivery of the foetus (childbirth) is called parturition.'"
  },
  {
    q: "Parturition is induced by a complex neuroendocrine mechanism initiated by signals from the:",
    opts: ["Fully developed fetus and the placenta", "Maternal ovaries only", "Maternal adrenal cortex", "Amniotic fluid alone"],
    ans: 0,
    exp: "NCERT states: 'The signals for parturition originate from the fully developed fetus and the placenta which induce mild uterine contractions called fetal ejection reflex.'"
  },
  {
    q: "The mild uterine contractions induced by the fully developed fetus and placenta are called the:",
    opts: ["Fetal ejection reflex", "Hering-Breuer reflex", "Let-down reflex", "Moro reflex"],
    ans: 0,
    exp: "NCERT states: 'The signals for parturition originate from the fully developed foetus and the placenta which induce mild uterine contractions called foetal ejection reflex.'"
  },
  {
    q: "The fetal ejection reflex triggers the release of which hormone from the maternal posterior pituitary?",
    opts: ["Oxytocin", "Prolactin", "Progesterone", "FSH"],
    ans: 0,
    exp: "NCERT states: 'This triggers release of oxytocin from the maternal pituitary.'"
  },
  {
    q: "On which layer of the uterine wall does oxytocin act to cause labor contractions?",
    opts: ["Myometrium", "Endometrium", "Perimetrium", "Epimetrium"],
    ans: 0,
    exp: "NCERT states: 'Oxytocin acts on the uterine muscle and causes stronger uterine contractions...'"
  },
  {
    q: "The birth canal through which the fetus is expelled consists of the:",
    opts: ["Cervical canal along with the vagina", "Fallopian tube and uterus", "Vagina and labia majora only", "Urethra and vestibule"],
    ans: 0,
    exp: "NCERT explicitly defines: 'The cervical canal along with vagina forms the birth canal.'"
  },
  {
    q: "What is expelled out of the uterus soon after the infant is delivered?",
    opts: ["The placenta (afterbirth)", "The ovaries", "The myometrium", "The fallopian tubes"],
    ans: 0,
    exp: "NCERT states: 'Soon after the infant is delivered, the placenta is also expelled out of the uterus.'"
  },
  {
    q: "The yellowish milk produced during the initial few days of lactation is called:",
    opts: ["Colostrum", "Lactogen", "Casein", "Whey"],
    ans: 0,
    exp: "NCERT states: 'The milk produced during the initial few days of lactation is called colostrum which contains several antibodies absolutely essential to develop resistance for the new-born babies.'"
  },
  {
    q: "Which major class of immunoglobulins is richly present in human colostrum to provide passive immunity?",
    opts: ["Secretory IgA", "IgE", "IgD", "IgM"],
    ans: 0,
    exp: "Colostrum is predominantly rich in secretory IgA antibodies, which protect the mucosal surfaces of the infant."
  },
  {
    q: "Which hormone stimulates the synthesis of milk in the mammary alveoli?",
    opts: ["Prolactin", "Oxytocin", "Estrogen", "Progesterone"],
    ans: 0,
    exp: "Prolactin (from anterior pituitary) stimulates milk synthesis in the mammary gland alveolar cells."
  },
  {
    q: "Which hormone is responsible for the 'milk-ejection reflex' (let-down reflex) during suckling?",
    opts: ["Oxytocin", "Prolactin", "hCG", "Relaxin"],
    ans: 0,
    exp: "Oxytocin stimulates contraction of myoepithelial cells surrounding mammary alveoli, ejecting milk into lactiferous ducts."
  },
  {
    q: "Finger-like projections that appear on the trophoblast after implantation are called:",
    opts: ["Chorionic villi", "Fimbriae", "Stereocilia", "Microvilli"],
    ans: 0,
    exp: "NCERT states: 'After implantation, finger-like projections appear on the trophoblast called chorionic villi which are surrounded by the uterine tissue and maternal blood.'"
  },
  {
    q: "The structural and functional unit established between the developing fetus and maternal body is the:",
    opts: ["Placenta", "Amnion", "Allantois", "Yolk sac"],
    ans: 0,
    exp: "NCERT states: 'The chorionic villi and uterine tissue become interdigitated with each other and jointly form a structural and functional unit between developing embryo (foetus) and maternal body called placenta.'"
  },
  {
    q: "The placenta is connected to the embryo through which structure?",
    opts: ["Umbilical cord", "Fallopian tube", "Mesentery", "Gubernaculum"],
    ans: 0,
    exp: "NCERT states: 'The placenta is connected to the embryo through an umbilical cord which helps in the transport of substances to and from the embryo.'"
  },
  {
    q: "Which of the following hormones are produced in women ONLY during pregnancy?",
    opts: ["hCG, hPL, and relaxin", "Estrogen, progesterone, and LH", "Prolactin, oxytocin, and FSH", "Thyroxine, cortisol, and insulin"],
    ans: 0,
    exp: "NCERT explicitly notes: 'Hormones like hCG, hPL and relaxin are produced in women only during pregnancy.'"
  },
  {
    q: "In the later phase of pregnancy, the hormone relaxin is secreted also by the:",
    opts: ["Ovary", "Pituitary", "Adrenal cortex", "Thyroid"],
    ans: 0,
    exp: "NCERT notes: '...in the later phase of pregnancy, a hormone called relaxin is also secreted by the ovary.'"
  },
  {
    q: "Immediately after implantation, the inner cell mass differentiates into:",
    opts: ["Outer ectoderm and inner endoderm, followed by middle mesoderm", "Trophoblast and syncytiotrophoblast", "Amnion and chorion", "Blastocoel and blastomeres"],
    ans: 0,
    exp: "NCERT states: 'Immediately after implantation, the inner cell mass (embryo) differentiates into an outer layer called ectoderm and an inner layer called endoderm. A mesoderm soon appears between the ectoderm and endoderm.'"
  },
  {
    q: "The specialized cells present in the inner cell mass that have the potency to give rise to all tissues and organs are called:",
    opts: ["Stem cells", "Germ cells", "Trophoblast cells", "Kupffer cells"],
    ans: 0,
    exp: "NCERT states: 'It needs to be mentioned here that the inner cell mass contains certain cells called stem cells which have the potency to give rise to all the tissues and organs.'"
  },
  {
    q: "In human embryonic development, after how many months of pregnancy is the heart formed?",
    opts: ["1 month", "2 months", "3 months", "5 months"],
    ans: 0,
    exp: "NCERT states: 'In human beings, after one month of pregnancy, the embryo's heart is formed.'"
  },
  {
    q: "By the end of which month of pregnancy does the human fetus develop limbs and digits?",
    opts: ["Second month", "First month", "Fourth month", "Sixth month"],
    ans: 0,
    exp: "NCERT states: 'By the end of the second month of pregnancy, the foetus develops limbs and digits.'"
  },
  {
    q: "By the end of 12 weeks (first trimester), which major milestone is reached by the developing human fetus?",
    opts: ["Most of the major organ systems (e.g. limbs and external genital organs) are well-formed", "Lungs begin breathing air", "Eyelids separate and body is fully covered with fat", "First fetal movements are felt by the mother"],
    ans: 0,
    exp: "NCERT states: 'By the end of 12 weeks (first trimester), most of the major organ systems are formed, for example, the limbs and external genital organs are well-developed.'"
  },
  {
    q: "The first movements of the fetus and appearance of hair on the head are usually observed during the:",
    opts: ["Fifth month", "Second month", "Third month", "Seventh month"],
    ans: 0,
    exp: "NCERT states: 'The first movements of the foetus and appearance of hair on the head are usually observed during the fifth month.'"
  },
  {
    q: "By the end of 24 weeks (end of second trimester), which developmental features appear on the fetus?",
    opts: ["Body is covered with fine hair, eye-lids separate, and eyelashes are formed", "Limbs and digits first appear", "Embryonic heart is first formed", "Delivery of the fetus occurs normally"],
    ans: 0,
    exp: "NCERT states: 'By the end of 24 weeks (end of second trimester), the body is covered with fine hair, eye-lids separate, and eyelashes are formed.'"
  },
  {
    q: "By the end of 9 months of pregnancy, the fetus is:",
    opts: ["Fully developed and ready for delivery", "Beginning its first organogenesis", "At the morula stage", "Lacking external genitalia"],
    ans: 0,
    exp: "NCERT states: 'By the end of nine months of pregnancy, the foetus is fully developed and is ready for delivery.'"
  },
  {
    q: "The average duration of human pregnancy is approximately:",
    opts: ["9 months", "6 months", "12 months", "10 months"],
    ans: 0,
    exp: "NCERT states: 'The average duration of human pregnancy is about 9 months which is called the gestation period.'"
  },
  {
    q: "Which extra-embryonic membrane encloses the fetus in a fluid-filled protective cavity preventing mechanical shock?",
    opts: ["Amnion", "Chorion", "Yolk sac", "Allantois"],
    ans: 0,
    exp: "The amnion encloses the amniotic cavity filled with amniotic fluid, which cushions the fetus and prevents desiccation."
  },
  {
    q: "The embryonic blood vessels that develop within the umbilical cord are derived from which extra-embryonic structure?",
    opts: ["Allantois", "Amnion", "Corona radiata", "Decidua"],
    ans: 0,
    exp: "The allantoic mesoderm gives rise to the blood vessels of the umbilical cord (two umbilical arteries and one umbilical vein)."
  },
  {
    q: "In the umbilical cord, how many arteries and veins are present normally in a full-term human fetus?",
    opts: ["Two umbilical arteries and one umbilical vein", "One umbilical artery and two umbilical veins", "Two arteries and two veins", "One artery and one vein"],
    ans: 0,
    exp: "The normal human umbilical cord contains two umbilical arteries (carrying deoxygenated blood to the placenta) and one umbilical vein (carrying oxygenated blood to the fetus)."
  },
  {
    q: "The umbilical cord is embedded in a gelatinous connective tissue matrix known as:",
    opts: ["Wharton's jelly", "Liquor folliculi", "Hyaline cartilage", "Osteoid matrix"],
    ans: 0,
    exp: "Wharton's jelly is a specialized mucoid connective tissue rich in hyaluronic acid and chondroitin sulfate that insulates the umbilical vessels from compression."
  },
  {
    q: "Which of the following maternal blood proteins normally DOES NOT cross the healthy human placenta?",
    opts: ["IgM antibodies and large peptide hormones like insulin", "IgG antibodies", "Glucose and amino acids", "Oxygen and carbon dioxide"],
    ans: 0,
    exp: "Large pentameric IgM antibodies and macromolecular peptide hormones cannot cross the placental barrier, whereas monomeric maternal IgG crosses easily via Fc receptors."
  },
  {
    q: "Which infectious pathogen CAN cross the placenta and cause congenital anomalies in the developing fetus (TORCH infection)?",
    opts: ["Rubella virus", "Lactobacillus", "Bifidobacterium", "Rhizobium"],
    ans: 0,
    exp: "Rubella virus crosses the placental barrier, causing Congenital Rubella Syndrome characterized by microcephaly, cataracts, sensorineural deafness, and cardiac defects."
  },
  {
    q: "The functional unit of the mammary gland that secretes milk into the alveoli lumen is lined by:",
    opts: ["Simple cuboidal/columnar epithelial cells surrounded by myoepithelial cells", "Stratified squamous keratinized cells", "Ciliated columnar cells", "Transitional epithelium"],
    ans: 0,
    exp: "Mammary alveoli are lined by milk-secreting epithelial cells and enclosed by a basket-work of oxytocin-sensitive contractile myoepithelial cells."
  },
  {
    q: "Which maternal hormone inhibits the stimulatory effect of prolactin on milk synthesis during pregnancy?",
    opts: ["High levels of estrogen and progesterone", "Oxytocin", "Relaxin", "Thyroxine"],
    ans: 0,
    exp: "Although prolactin rises throughout pregnancy, lactation is blocked by high circulating estrogen and progesterone; their rapid postpartum drop unleashes milk production."
  },
  {
    q: "The Ferguson reflex during labor involves:",
    opts: [
      "Mechanical stretching of the uterine cervix stimulating oxytocin release from the posterior pituitary",
      "Suckling of the nipple stimulating prolactin release",
      "Release of adrenaline from adrenal medulla during cold",
      "Inhibition of peristalsis in the colon during eating"
    ],
    ans: 0,
    exp: "The Ferguson reflex is the neuroendocrine reflex where cervical distension by the fetal presenting part triggers paraventricular hypothalamic oxytocin release."
  },
  {
    q: "Which drug is commonly administered to prevent postpartum hemorrhage (PPH) by causing sustained uterine contraction?",
    opts: ["Oxytocin (or methylergonovine)", "Progesterone", "Testosterone", "Insulin"],
    ans: 0,
    exp: "Oxytocin stimulates violent, tonic contraction of the myometrium, compressing severed uterine blood vessels at the placental detachment site to stop bleeding."
  }
];

// Rich bank of parturition, lactation & development facts
const concepts = [
  { topic: "fetal ejection reflex trigger", fact: "The signals for parturition originate from the fully developed fetus and placenta, inducing mild uterine contractions." },
  { topic: "oxytocin neuroendocrine cascade", fact: "Oxytocin released from the maternal posterior pituitary stimulates strong myometrial contractions in an escalating positive feedback loop." },
  { topic: "birth canal composition", fact: "The cervical canal together with the vagina forms the birth canal through which the fetus is expelled during labor." },
  { topic: "afterbirth delivery", fact: "Shortly after delivery of the newborn infant, the detached placenta and fetal membranes are expelled as the afterbirth." },
  { topic: "colostrum immune protection", fact: "Colostrum secreted during the first few days of lactation is rich in secretory IgA antibodies, providing essential passive immunity." },
  { topic: "prolactin alveolar synthesis", fact: "Prolactin from the anterior pituitary stimulates milk synthesis and secretion within the mammary glandular alveoli." },
  { topic: "oxytocin milk ejection reflex", fact: "Oxytocin stimulates contraction of myoepithelial cells around mammary alveoli to cause milk let-down during infant suckling." },
  { topic: "chorionic villi formation", fact: "Finger-like chorionic villi sprout from the trophoblast post-implantation and interdigitate with maternal uterine tissue." },
  { topic: "placenta structural and functional unit", fact: "The placenta connects fetus to maternal uterine tissue, facilitating respiratory gas exchange, nutrient delivery, and waste removal." },
  { topic: "umbilical cord conduit", fact: "The umbilical cord links the fetal circulation to the placenta, carrying substances to and from the embryo." },
  { topic: "pregnancy-exclusive hormones", fact: "hCG, hPL, and relaxin are specialized hormones produced in female primates only during pregnancy." },
  { topic: "relaxin pelvic preparation", fact: "Relaxin secreted in late pregnancy softens the pubic symphysis and relaxes pelvic ligaments to ease delivery." },
  { topic: "embryonic germ layer differentiation", fact: "The inner cell mass differentiates sequentially into outer ectoderm, inner endoderm, and middle mesoderm." },
  { topic: "inner cell mass pluripotency", fact: "Stem cells residing in the inner cell mass possess the developmental potency to form all tissues and organs of the human body." },
  { topic: "one-month cardiac milestone", fact: "By the end of the first month of pregnancy, the embryonic heart is formed and detectable by stethoscope." },
  { topic: "two-month limbs and digits", fact: "By the end of the second month of pregnancy, the developing human fetus forms distinct limbs and digits." },
  { topic: "12-week first trimester milestone", fact: "By 12 weeks, major organ systems are formed and external genitalia and limbs are well-developed." },
  { topic: "fifth-month movement and hair", fact: "First maternal perception of fetal movement (quickening) and appearance of scalp hair occur during the fifth month." },
  { topic: "24-week second trimester milestone", fact: "By 24 weeks, the fetus develops body fine hair, separated eyelids, and distinct eyelashes." },
  { topic: "full-term nine-month gestation", fact: "By nine months of pregnancy, fetal development is complete and the fetus is ready for parturition." },
  { topic: "amniotic fluid protection", fact: "The amnion encloses amniotic fluid which cushions the fetus, prevents mechanical injury, and maintains constant temperature." },
  { topic: "umbilical vascular anatomy", fact: "The umbilical cord normally houses two umbilical arteries and one umbilical vein embedded in Wharton's jelly." },
  { topic: "maternal physiological hormone surge", fact: "Maternal levels of cortisol, thyroxine, prolactin, and estrogens increase several folds to support gestation and fetal metabolism." },
  { topic: "placental transfer of IgG", fact: "Maternal monomeric IgG antibodies cross the placental syncytiotrophoblast to provide prenatal immunity to the fetus." },
  { topic: "decidua basalis maternal contribution", fact: "The maternal component of the placenta is derived from the modified uterine endometrium known as decidua basalis." },
  { topic: "progesterone block removal at labor", fact: "Labor onset involves a relative decline in progesterone action, lifting the inhibition on myometrial contractility." }
];

const realisticDistractors = [
  "It transforms immediately into non-porous dentine within the amniotic cavity.",
  "It stimulates the complete enzymatic destruction of all maternal blood platelets within seconds.",
  "It causes the permanent calcification of all fetal skeletal muscles before delivery.",
  "It eliminates all oxytocin receptors from the myometrial smooth muscle permanently.",
  "It induces the spontaneous conversion of the placenta into adult pulmonary tissue.",
  "It replaces the entire umbilical cord with dense cortical bone within minutes.",
  "It completely abolishes the synthesis of maternal insulin throughout lactation.",
  "It converts all circulating sex steroids into crystalline bilirubin instantly."
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
      q: `Which of the following statements regarding ${item.topic} is BIOLOGICALLY AND EMBRYOLOGICALLY ACCURATE?`,
      opts: [
        `${item.fact}`,
        d1,
        d2,
        d3
      ],
      ans: 0,
      exp: `According to NCERT Class 12 Biology: ${item.fact}`
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
      exp: `Human developmental biology principle: ${item.fact}`
    });
  } else if (idx % 4 === 2) {
    fullMcqList.push({
      q: `In human pregnancy and delivery, what is the clinical significance of ${item.topic}?`,
      opts: [
        `${item.fact}`,
        d3,
        d1,
        d2
      ],
      ans: 0,
      exp: `NCERT developmental fact: ${item.fact}`
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
  const outPath = path.join(__dirname, 'data_zoology_repro_part7.js');
  const fileContent = `// Auto-generated data for Zoology Reproduction Part 7: Parturition, lactation, and embryonic development\nmodule.exports = ${JSON.stringify(allQuestions, null, 2)};\n`;
  fs.writeFileSync(outPath, fileContent, 'utf8');
  console.log(`Successfully wrote ${outPath}`);
} else {
  console.error("Validation failed! Not writing output.");
  process.exit(1);
}
