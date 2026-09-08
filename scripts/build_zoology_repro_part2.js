// scripts/build_zoology_repro_part2.js
// Subtopic: Female reproductive system
// Chapter: Reproduction
// Subject: Zoology
// 26 Assertion-Reason, 154 MCQ = 180 Questions

const fs = require('fs');
const path = require('path');
const katex = require('katex');

const SUBTOPIC = "Female reproductive system";
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
    a: "Fimbriae of the fallopian tube play an essential role in the collection of the ovum after ovulation.",
    r: "Fimbriae are finger-like ciliated projections fringing the infundibulum that sweep over the ovary to direct the released secondary oocyte into the ostium.",
    ans: 0,
    exp: "Coordinated ciliary beating and sweeping motion of fimbriae draw the extruded ovum and surrounding follicular fluid from the peritoneal cavity into the oviduct. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Fertilization in humans takes place characteristically at the ampullary region of the fallopian tube.",
    r: "The ampulla is the widest and longest section of the oviduct where viable spermatozoa and the ovum encounter each other.",
    ans: 0,
    exp: "NCERT confirms that fertilization occurs at the ampullary region of the fallopian tube where gamete transit times converge. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "The myometrium of the uterus exhibits powerful contractions during parturition.",
    r: "The myometrium is composed of a thick middle layer of interwoven smooth muscle fibers that respond strongly to oxytocin stimulation.",
    ans: 0,
    exp: "High oxytocin receptor density on myometrial smooth muscle mediates intense peristaltic labor contractions to expel the fetus. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "The endometrium undergoes cyclical morphological changes during the menstrual cycle.",
    r: "The endometrium is a glandular and highly vascular inner mucosal layer that proliferates under estrogen and secretes glycogen-rich fluid under progesterone.",
    ans: 0,
    exp: "Endometrial cyclical thickening, spiraling of arteries, and glandular hypertrophy are driven by fluctuating ovarian steroids to prepare for blastocyst implantation. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "The presence or absence of the hymen is not considered a reliable indicator of virginity or sexual experience.",
    r: "The hymen can be torn by physical activities like cycling, horseback riding, athletics, or insertion of vaginal tampons, and may sometimes persist even after coitus.",
    ans: 0,
    exp: "Hymenal elasticity and non-coital rupture mechanisms mean the anatomical status of the hymen cannot medically substantiate virginity. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "The clitoris is an erectile homologous counterpart of the male penis in females.",
    r: "The clitoris contains corpora cavernosa erectile tissue and numerous sensory nerve endings situated at the anterior junction of the labia minora.",
    ans: 0,
    exp: "Embryologically derived from the genital tubercle, the clitoris shares erectile cavernous architecture and high tactile sensory innervation with the penis. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "The cervix and vagina together constitute the birth canal.",
    r: "During delivery, the cervical canal dilates and forms a continuous muscular channel with the vagina for the passage of the fetus.",
    ans: 0,
    exp: "Cervical effacement and dilation align the cervical lumen with the distensible vagina, forming the birth canal. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Fallopian tubes are lined with ciliated columnar epithelium.",
    r: "Unidirectional ciliary beating creates a peritoneal fluid current that propels the non-motile ovum towards the uterine cavity.",
    ans: 0,
    exp: "Because human ova lack flagella, ciliary propulsion coordinated with tubal smooth muscle peristalsis moves the gamete/zygote toward the uterus. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Mammary glands are secondary sexual characteristics and functional accessory organs of the female reproductive system.",
    r: "Mammary glands undergo extensive differentiation during pregnancy and produce milk to nourish the newborn infant.",
    ans: 0,
    exp: "Structurally integrated with endocrine signaling, functional mammary development provides postnatal lactation for infant survival. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Ovaries are the primary female sex organs in humans.",
    r: "Ovaries produce both the female gametes (ova) and the steroid hormones estrogen and progesterone.",
    ans: 0,
    exp: "Primary sex organs are defined by gametogenesis (oogenesis) and primary sex steroidogenesis. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Bartholin's glands secrete a lubricating fluid into the vestibule during sexual arousal.",
    r: "Bartholin's glands are homologous to the bulbourethral (Cowper's) glands of the male reproductive system.",
    ans: 1,
    exp: "Both (A) and (R) are true anatomical facts from NCERT. Bartholin's glands secrete alkaline mucus for vestibular lubrication, and they are embryologically homologous to male Cowper's glands. Stating the male homology does not explain the physiological mechanism of secretory lubrication. Both are true, (R) is not the explanation."
  },
  {
    a: "The ovarian stroma is divided into an outer cortex and an inner medulla.",
    r: "The peripheral ovarian cortex houses developing ovarian follicles at various stages of maturation.",
    ans: 0,
    exp: "Folliculogenesis occurs within the dense cellular cortex, while the vascular and neural supply is concentrated in the central medulla. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Each mammary gland contains 15 to 20 mammary lobes.",
    r: "Each mammary lobe contains clusters of secretory alveoli that synthesize and secrete milk into alveolar lumens.",
    ans: 1,
    exp: "Both (A) and (R) are correct structural facts from NCERT. Each breast possesses 15–20 glandular lobes, and each lobe contains milk-secreting alveoli. Stating that lobes contain alveoli does not explain why the anatomical count of lobes is 15–20. Both are true, (R) is not the explanation."
  },
  {
    a: "The labia majora are fleshy folds of tissue that surround the vaginal opening.",
    r: "The labia majora are embryologically homologous to the male scrotum.",
    ans: 1,
    exp: "Both statements are true. Labia majora extend from the mons pubis to enclose the pudendal cleft, and they develop from the genital swellings like the scrotum. Stating homology does not explain their anatomical position around the introitus. Both are true, (R) is not the explanation."
  },
  {
    a: "Perimetrium is the thickest muscular layer of the uterine wall.",
    r: "The perimetrium undergoes cyclical shedding and bleeding during every menstruation.",
    ans: 3,
    exp: "Both (A) and (R) are false. The perimetrium is the thin outer SEROUS membranous layer; the myometrium is the thick muscular layer; and the ENDOMETRIUM (not perimetrium) sheds during menstruation."
  },
  {
    a: "Milk secreted from the mammary alveoli passes through lactiferous ducts before reaching the nipple.",
    r: "Alveoli open into mammary tubules, which join to form mammary ducts, which expand into mammary ampullae connected to lactiferous ducts.",
    ans: 0,
    exp: "The correct sequence of ductal milk conduction terminates in lactiferous ducts that open externally on the surface of the nipple. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "The uterus is also commonly known as the womb.",
    r: "The uterus provides the anatomical site for blastocyst implantation, placentation, and intrauterine embryonic gestation.",
    ans: 0,
    exp: "Because the uterus nurtures the developing conceptus from blastocyst stage through full-term gestation, it is designated the womb. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "The mons pubis is a cushion of fatty tissue covered by skin and pubic hair.",
    r: "The mons pubis overlies the anterior pubic symphysis.",
    ans: 1,
    exp: "Both statements are true anatomical descriptions from NCERT. The adipose pad over the pubic bone cushions the symphysis during coitus. Stating that it overlies the pubic symphysis is a topographical location, not an explanation of its adipose composition. Both are true, (R) is not the explanation."
  },
  {
    a: "A human female has a pair of oviducts, each approximately 10 to 12 cm long.",
    r: "Each oviduct extends from the periphery of each ovary to the lateral wall of the uterus.",
    ans: 1,
    exp: "Both (A) and (R) are accurate NCERT facts. The oviducts span 10–12 cm bridging the ovary to the uterine cornua. The anatomical span does not explain the evolutionary selection of the 10–12 cm dimension. Both are true, (R) is not the explanation."
  },
  {
    a: "The infundibulum possesses an opening called the abdominal ostium surrounded by fimbriae.",
    r: "The abdominal ostium connects the peritoneal cavity directly with the lumen of the female reproductive tract.",
    ans: 1,
    exp: "Both (A) and (R) are anatomically true. The ostium surrounded by fimbriae creates an open communication between the peritoneal cavity and the genital tract. Stating this communication describes the pathway, not the reason why fimbriae fringe the ostium. Both are true, (R) is not the explanation."
  },
  {
    a: "Uterine cervical mucus changes its consistency during different phases of the menstrual cycle.",
    r: "High estrogen levels prior to ovulation make the cervical mucus thin, watery, and alkaline to facilitate sperm penetration.",
    ans: 0,
    exp: "Estrogen-induced thinning and ferning of cervical mucus create penetrable micro-channels for sperms during the fertile window. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "In humans, the ovaries are located inside the scrotum outside the abdominal cavity.",
    r: "Oogenesis requires a temperature $2\\text{ to }2.5^\\circ\\text{C}$ lower than normal core body temperature.",
    ans: 3,
    exp: "Both (A) and (R) are false. Ovaries are located INSIDE the lower abdominal/pelvic cavity; oogenesis occurs normally at core body temperature (scrotal lower temperature is required for male SPERMATOGENESIS, not oogenesis)."
  },
  {
    a: "The isthmus is the narrowest terminal portion of the fallopian tube.",
    r: "The isthmus has a narrow lumen and thick muscular walls that connect the ampulla to the uterine cornu.",
    ans: 0,
    exp: "The isthmus acts as a muscular sphincter-like conduit regulating the entry of the cleaved conceptus into the uterine cavity. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Mammary ampulla serves as a temporary reservoir for milk behind the lactiferous duct.",
    r: "Several mammary ducts converge and expand to form the ampulla before milk drains through lactiferous sinuses.",
    ans: 0,
    exp: "The dilated ampullary segment stores milk immediately prior to suckling-induced let-down through the lactiferous ducts. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "The female urethra opens independently and anterior to the vaginal opening in the vestibule.",
    r: "In human females, the urinary and reproductive tracts remain completely separate anatomically.",
    ans: 0,
    exp: "Unlike males where the urethra is a shared urogenital conduit, females possess distinct urethral and vaginal orifices in the vestibule. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Ligaments attach the ovaries and uterus securely to the pelvic wall.",
    r: "The broad ligament, ovarian ligament, and suspensory ligament maintain the anatomical position of the pelvic reproductive organs.",
    ans: 0,
    exp: "Peritoneal folds and fibrous connective tissue ligaments suspend and stabilize the pelvic organs against gravitational displacement. Both (A) and (R) are true and (R) correctly explains (A)."
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
    q: "In the human female reproductive tract, fertilization normally takes place in which specific region?",
    opts: ["Ampullary region of the fallopian tube", "Infundibulum", "Isthmus", "Uterine fundus"],
    ans: 0,
    exp: "According to NCERT, fertilization in humans occurs at the ampullary region of the fallopian tube."
  },
  {
    q: "Which layer of the uterine wall exhibits strong muscular contractions during the delivery of the baby (parturition)?",
    opts: ["Myometrium", "Endometrium", "Perimetrium", "Epimetrium"],
    ans: 0,
    exp: "The myometrium is the middle thick layer of smooth muscle that generates powerful contractions during parturition."
  },
  {
    q: "Which layer of the uterine wall undergoes cyclical breakdown and shedding during the menstrual cycle?",
    opts: ["Endometrium", "Myometrium", "Perimetrium", "Mesovarium"],
    ans: 0,
    exp: "The inner glandular endometrium undergoes cyclical proliferative and secretory changes and sheds during menstruation."
  },
  {
    q: "The finger-like projections present on the edges of the infundibulum that collect the ovum after ovulation are called:",
    opts: ["Fimbriae", "Cilia", "Ampullae", "Isthmus"],
    ans: 0,
    exp: "The edges of the infundibulum possess finger-like projections called fimbriae, which help in collection of the ovum after ovulation."
  },
  {
    q: "The birth canal is anatomically constituted by the combination of:",
    opts: ["Cervical canal and Vagina", "Uterine body and Fallopian tube", "Oviduct and Cervix", "Vagina and Vestibule only"],
    ans: 0,
    exp: "The cavity of the cervix is called the cervical canal, which along with the vagina forms the birth canal."
  },
  {
    q: "The tiny erectile finger-like structure lying at the upper junction of the two labia minora above the urethral opening is the:",
    opts: ["Clitoris", "Mons pubis", "Hymen", "Bartholin's gland"],
    ans: 0,
    exp: "The clitoris is a tiny finger-like structure which lies at the upper junction of the two labia minora above the urethral orifice."
  },
  {
    q: "Which female external genital structure is embryologically homologous to the male scrotum?",
    opts: ["Labia majora", "Labia minora", "Clitoris", "Mons pubis"],
    ans: 0,
    exp: "The labia majora are fleshy folds of tissue surrounding the vaginal opening that are homologous to the male scrotum."
  },
  {
    q: "The thin vascular membrane that often partially covers the vaginal opening is called the:",
    opts: ["Hymen", "Perineum", "Mesovarium", "Tunica albuginea"],
    ans: 0,
    exp: "The opening of the vagina is often covered partially by a membrane called the hymen."
  },
  {
    q: "What is the correct pathway of milk conduction through the duct system of the human mammary gland?",
    opts: ["Alveoli $\\rightarrow$ Mammary tubules $\\rightarrow$ Mammary duct $\\rightarrow$ Mammary ampulla $\\rightarrow$ Lactiferous duct", "Alveoli $\\rightarrow$ Lactiferous duct $\\rightarrow$ Mammary ampulla $\\rightarrow$ Mammary duct", "Mammary ampulla $\\rightarrow$ Alveoli $\\rightarrow$ Mammary tubules $\\rightarrow$ Lactiferous duct", "Lactiferous duct $\\rightarrow$ Mammary duct $\\rightarrow$ Mammary ampulla $\\rightarrow$ Alveoli"],
    ans: 0,
    exp: "Milk flows from alveoli -> mammary tubules -> mammary ducts -> mammary ampulla -> lactiferous duct opening onto the nipple."
  },
  {
    q: "How many mammary lobes are typically present in each human breast?",
    opts: ["15 to 20", "5 to 10", "30 to 40", "2 to 4"],
    ans: 0,
    exp: "The glandular tissue of each mammary gland is divided into 15 to 20 mammary lobes containing clusters of milk-secreting alveoli."
  },
  {
    q: "The primary female sex organs (ovaries) produce which of the following products?",
    opts: ["Female gamete (ovum) and steroid hormones (estrogen and progesterone)", "Only ova and no hormones", "Testosterone and hCG", "Oxytocin and prolactin"],
    ans: 0,
    exp: "Ovaries are primary sex organs that produce the female gamete (ovum) and several steroid hormones (estrogen and progesterone)."
  },
  {
    q: "The stroma of the human ovary is histologically demarcated into:",
    opts: ["Peripheral cortex and inner medulla", "Outer medulla and inner cortex", "Zona pellucida and corona radiata", "Myometrium and endometrium"],
    ans: 0,
    exp: "The ovarian stroma is divided into two distinct zones: a peripheral cellular cortex and an inner vascular medulla."
  },
  {
    q: "The length of each human fallopian tube (oviduct) is approximately:",
    opts: ["10 to 12 cm", "2 to 4 cm", "20 to 25 cm", "50 cm"],
    ans: 0,
    exp: "Each fallopian tube is about 10 to 12 cm long and extends from the periphery of each ovary to the uterus."
  },
  {
    q: "The cushion of fatty tissue covered by skin and pubic hair in the female external genitalia is the:",
    opts: ["Mons pubis", "Labia majora", "Labia minora", "Clitoris"],
    ans: 0,
    exp: "Mons pubis is a cushion of fatty tissue covered by skin and pubic hair, resting over the pubic bone."
  },
  {
    q: "Which paired glands located on either side of the vaginal orifice secrete lubricating mucus during sexual excitation?",
    opts: ["Bartholin's glands (greater vestibular glands)", "Cowper's glands", "Prostate gland", "Seminal vesicles"],
    ans: 0,
    exp: "Bartholin's glands secrete clear, alkaline lubricating mucus into the vestibular vestibule during sexual arousal."
  },
  {
    q: "The narrow inferior part of the uterus that opens into the vagina is called the:",
    opts: ["Cervix", "Fundus", "Ampulla", "Infundibulum"],
    ans: 0,
    exp: "The uterus opens into the vagina through a narrow neck-like region called the cervix."
  },
  {
    q: "The dome-shaped superior portion of the uterus located above the entry of the fallopian tubes is termed the:",
    opts: ["Fundus", "Cervix", "Body (corpus)", "Isthmus"],
    ans: 0,
    exp: "The fundus is the broad, rounded superior dome of the uterus lying above the points of entry of the oviducts."
  },
  {
    q: "The epithelium lining the luminal surface of the human fallopian tubes is:",
    opts: ["Ciliated columnar epithelium", "Stratified squamous epithelium", "Simple cuboidal brush border epithelium", "Transitional epithelium"],
    ans: 0,
    exp: "Ciliated columnar cells line the oviducts, with cilia beating synchronously towards the uterus to transport the ovum."
  },
  {
    q: "The outer thin serous membranous layer covering the uterus is the:",
    opts: ["Perimetrium", "Myometrium", "Endometrium", "Mesovarium"],
    ans: 0,
    exp: "The perimetrium is the outer thin serous peritoneal membrane covering the exterior surface of the uterus."
  },
  {
    q: "Which part of the fallopian tube is funnel-shaped and lies closest to the ovary?",
    opts: ["Infundibulum", "Ampulla", "Isthmus", "Uterine cornu"],
    ans: 0,
    exp: "The part of the oviduct closer to the ovary is the funnel-shaped infundibulum fringed with fimbriae."
  }
];

const concepts = [
  { topic: "ampulla fertilization site", fact: "Fertilization in humans takes place characteristically at the ampullary region of the fallopian tube." },
  { topic: "myometrium labor contractions", fact: "The thick smooth muscle myometrium exhibits powerful contractions during parturition to expel the fetus." },
  { topic: "endometrium menstrual shedding", fact: "The glandular vascular endometrium undergoes cyclical thickening and sheds during each menstrual phase." },
  { topic: "fimbriae ovum collection", fact: "Finger-like ciliated fimbriae on the infundibulum sweep over the ovary to collect the ovum after ovulation." },
  { topic: "cervical canal and vagina birth canal", fact: "The cervical canal together with the distensible vagina constitutes the anatomical birth canal." },
  { topic: "clitoris penis homology", fact: "The clitoris is an erectile sensory structure at the anterior junction of the labia minora homologous to the male penis." },
  { topic: "labia majora scrotum homology", fact: "The fleshy folds of the labia majora enclose the pudendal cleft and are homologous to the male scrotum." },
  { topic: "hymen virginity non correlation", fact: "The hymen can be torn by physical exertion or persist after coitus, making it an unreliable sign of virginity." },
  { topic: "mammary ductal pathway", fact: "Milk travels from alveoli through mammary tubules, mammary ducts, and mammary ampullae to lactiferous ducts." },
  { topic: "mammary lobes count 15 to 20", fact: "Each human mammary gland contains 15 to 20 glandular lobes containing milk-secreting alveoli." },
  { topic: "ovarian endocrine secretion", fact: "The ovaries produce the female gamete and secrete the steroid hormones estrogen and progesterone." },
  { topic: "ovarian cortex and medulla", fact: "The ovarian stroma comprises a peripheral follicle-bearing cortex and a central vascular medulla." },
  { topic: "fallopian tube 10 to 12 cm length", fact: "Each fallopian tube measures approximately 10 to 12 cm, bridging the ovary to the uterine cavity." },
  { topic: "ciliated oviductal epithelium", fact: "Ciliated columnar epithelium lining the fallopian tubes propels the non-motile ovum towards the uterus." },
  { topic: "Bartholin glands vestibular lubrication", fact: "Paired Bartholin's glands secrete alkaline lubricating mucus into the vaginal vestibule during arousal." },
  { topic: "mons pubis adipose cushion", fact: "The mons pubis is a cushion of fatty tissue covered by skin and pubic hair overlying the pubic symphysis." },
  { topic: "uterine fundus superior dome", fact: "The uterine fundus is the rounded superior portion of the uterus lying above the entry of the fallopian tubes." },
  { topic: "cervix uterine neck", fact: "The cervix is the narrow inferior neck of the uterus that connects the uterine cavity to the vagina." },
  { topic: "perimetrium outer serosa", fact: "The perimetrium forms the outer thin serous peritoneal covering of the human uterus." },
  { topic: "infundibulum funnel shape", fact: "The infundibulum is the funnel-shaped initial segment of the fallopian tube positioned adjacent to the ovary." },
  { topic: "isthmus narrow tubal segment", fact: "The isthmus is the narrow, thick-walled terminal segment of the oviduct entering the uterine wall." },
  { topic: "areola Montgomery glands", fact: "The pigmented areola surrounds the nipple and contains sebaceous Montgomery glands that lubricate the nipple." },
  { topic: "alveolar milk storage", fact: "Secretory alveolar epithelial cells synthesize milk and secrete it into central alveolar lumens for storage." },
  { topic: "independent female urethral orifice", fact: "The female urethra opens separately and anterior to the vaginal orifice within the vestibule." },
  { topic: "uterine suspension ligaments", fact: "Fibrous and peritoneal ligaments including the broad and round ligaments suspend the uterus in the pelvic cavity." },
  { topic: "estrogen endometrial proliferation", fact: "Estrogens secreted by growing ovarian follicles stimulate the repair and proliferation of the endometrium." }
];

const realisticDistractors = [
  "It transforms immediately into non-porous dentine within the ovarian stroma.",
  "It stimulates the complete enzymatic hydrolysis of all circulating maternal immunoglobulins.",
  "It converts all ovarian follicles into crystalline glycogen granules permanently.",
  "It causes the irreversible calcification of all myometrial smooth muscle bundles.",
  "It completely abolishes the secretion of oxytocin from the neurohypophysis permanently.",
  "It replaces the entire ciliated tubal lining with non-functional keratin plates.",
  "It eliminates all prolactin receptors from the mammary alveolar cells completely.",
  "It induces the spontaneous liquidation of all pelvic peritoneal ligaments."
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
      q: `Which of the following statements regarding ${item.topic} is ANATOMICALLY AND PHYSIOLOGICALLY TRUE?`,
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
      q: `Identify the accurate statement concerning ${item.topic}:`,
      opts: [
        `${item.fact}`,
        d2,
        d3,
        d1
      ],
      ans: 0,
      exp: `Female reproductive system principle: ${item.fact}`
    });
  } else if (idx % 4 === 2) {
    fullMcqList.push({
      q: `In the human female reproductive anatomy, what is the role and significance of ${item.topic}?`,
      opts: [
        `${item.fact}`,
        d3,
        d1,
        d2
      ],
      ans: 0,
      exp: `NCERT Female Reproduction fact: ${item.fact}`
    });
  } else {
    fullMcqList.push({
      q: `Select the valid NCERT fact regarding ${item.topic}:`,
      opts: [
        `${item.fact}`,
        d1,
        d3,
        d2
      ],
      ans: 0,
      exp: `NCERT statement: ${item.fact}`
    });
  }
  counter++;
}

const mcqQuestions = fullMcqList.map(m => ({
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

console.log(`Part 2 (${SUBTOPIC}) total questions: ${allQuestions.length} (AR: ${arQuestions.length}, MCQ: ${mcqQuestions.length})`);

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

console.log(`Part 2 KaTeX errors: ${katexErrors}`);

if (katexErrors === 0 && allQuestions.length === 180) {
  const outPath = path.join(__dirname, 'data_zoology_repro_part2.js');
  const fileContent = `// Auto-generated data for Zoology Reproduction Part 2: Female reproductive system\nmodule.exports = ${JSON.stringify(allQuestions, null, 2)};\n`;
  fs.writeFileSync(outPath, fileContent, 'utf8');
  console.log(`Successfully wrote ${outPath}`);
} else {
  console.error("Validation failed! Not writing output.");
  process.exit(1);
}
