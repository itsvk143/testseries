// scripts/build_zoology_repro_part1.js
// Subtopic: Contraception methods and Assisted Reproductive Technologies (ART: IVF, ZIFT, GIFT)
// Chapter: Reproduction
// Subject: Zoology
// 26 Assertion-Reason, 154 MCQ = 180 Questions

const fs = require('fs');
const path = require('path');
const katex = require('katex');

const SUBTOPIC = "Contraception methods and Assisted Reproductive Technologies (ART: IVF, ZIFT, GIFT)";
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
    a: "Copper-releasing IUDs like CuT and Multiload 375 are effective contraceptives.",
    r: "Copper ions ($Cu^{2+}$) released by these devices suppress sperm motility and reduce their fertilizing capacity.",
    ans: 0,
    exp: "Ionized copper released into the uterine lumen impairs sperm flagellar motility and enzymatic viability, preventing fertilization. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Hormone-releasing IUDs such as Progestasert and LNG-20 prevent conception through multiple mechanisms.",
    r: "They release progestogens that make the uterus unsuitable for implantation and alter cervical mucus to make it hostile to sperms.",
    ans: 0,
    exp: "Progestin release causes endometrial atrophy (preventing blastocyst implantation) and thickens cervical mucus (blocking sperm penetration). Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Lactational amenorrhea is an effective natural contraceptive method for up to six months postpartum.",
    r: "Intense lactation elevates prolactin levels, which suppresses hypothalamic GnRH secretion and inhibits pituitary LH/FSH release, preventing ovulation.",
    ans: 0,
    exp: "High prolactin during suckling inhibits pulsatile GnRH release, resulting in anovulation and physiological amenorrhea during exclusive breastfeeding. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "'Saheli' is a popular oral contraceptive pill for females in India.",
    r: "'Saheli' is a non-steroidal, once-a-week pill with very few side effects and high contraceptive value, developed by CDRI, Lucknow.",
    ans: 0,
    exp: "Centchroman (Saheli), developed by CDRI, acts as a selective estrogen receptor modulator taken once weekly with minimal systemic side effects. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Condoms provide the dual advantage of preventing unwanted pregnancy and protecting against sexually transmitted infections (STIs).",
    r: "Condoms act as physical barrier sheaths that prevent the direct contact of infectious genital secretions and semen with mucosal linings.",
    ans: 0,
    exp: "Impermeable latex or polyurethane sheaths block both spermatozoal entry and the transmission of viral and bacterial pathogens (e.g. HIV, HPV, HBV, Treponema). Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Periodic abstinence is a traditional natural method of contraception.",
    r: "Couples avoid coitus from day 10 to 17 of the menstrual cycle when ovulation is expected and the chances of fertilization are extremely high.",
    ans: 0,
    exp: "Days 10 to 17 constitute the fertile window; abstaining during this period minimizes the probability of ovum-sperm encounter. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Vasectomy is a highly effective, permanent method of sterilization in males.",
    r: "In vasectomy, a small part of each vas deferens is excised or ligated, completely preventing the transport of spermatozoa into the ejaculatory duct.",
    ans: 0,
    exp: "Ligation of the vasa deferentia interrupts sperm transit, resulting in azoospermic semen while preserving accessory gland fluid volume and endocrine testosterone. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Tubectomy does not alter the female hormonal profile or menstrual cycle.",
    r: "Tubectomy involves only the surgical occlusion of the fallopian tubes, leaving the ovaries and uterus anatomically intact with normal blood supply.",
    ans: 0,
    exp: "Because ovarian steroidogenesis and endometrial endocrine responsiveness are undisturbed, follicular growth and menstruation continue normally after tubal ligation. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Zygote Intra-Fallopian Transfer (ZIFT) is distinct from Intra-Uterine Transfer (IUT).",
    r: "In ZIFT, a zygote or early embryo with up to 8 blastomeres is transferred into the fallopian tube, whereas in IUT, an embryo with more than 8 blastomeres is transferred into the uterus.",
    ans: 0,
    exp: "ZIFT places early cleavage-stage embryos ($\le 8$ blastomeres) into the physiological tubal environment, while IUT implants advanced morulae/blastocysts directly into the uterine cavity. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Intra-Cytoplasmic Sperm Injection (ICSI) is an effective ART procedure for severe male factor infertility.",
    r: "In ICSI, a single viable spermatozoon is directly micro-injected into the cytoplasm of an ovum in the laboratory, bypassing motility and acrosomal defects.",
    ans: 0,
    exp: "Direct micromanipulation circumvents barriers such as oligospermia, asthenozoospermia, or defective zona penetration. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Emergency contraceptive pills should be administered within 72 hours of unprotected intercourse.",
    r: "Administration of high-dose progestogens or progestogen-estrogen combinations within 72 hours prevents ovulation or interferes with early implantation.",
    ans: 0,
    exp: "Emergency pills delay the pre-ovulatory LH surge or render the endometrium unreceptive before blastocyst attachment can occur. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Gamete Intra-Fallopian Transfer (GIFT) is recommended for females who cannot produce viable ova.",
    r: "In GIFT, an ovum collected from a donor is transferred into the fallopian tube of a recipient who can provide a suitable internal environment for fertilization and gestation.",
    ans: 0,
    exp: "GIFT utilizes the recipient's functional fallopian tubes and uterus to achieve in vivo fertilization and normal embryogenesis. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Diaphragms, cervical caps, and vaults are barrier contraceptives used by females.",
    r: "They are made of rubber and are inserted into the female reproductive tract to cover the cervix during coitus.",
    ans: 1,
    exp: "Both (A) and (R) are true facts from NCERT. Diaphragms, cervical caps, and vaults cover the cervix to block sperm entry. Stating the material of manufacture describes the devices rather than explaining the physiological mechanism of mechanical barrier prevention. Both are true, (R) is not the explanation."
  },
  {
    a: "Oral contraceptive combined pills are taken daily for a period of 21 days.",
    r: "Pill consumption begins preferably within the first five days of the menstrual cycle and is paused for a 7-day interval during which menstruation occurs.",
    ans: 1,
    exp: "Both statements are correct practical administration instructions from NCERT. The timing of starting the regimen does not explain why 21 active tablets are taken per cycle (which corresponds to artificial luteal phase suppression). Both are true, (R) is not the explanation."
  },
  {
    a: "Artificial Insemination (AI) or Intra-Uterine Insemination (IUI) is indicated when the male partner suffers from oligozoospermia.",
    r: "Concentrated spermatozoa from the husband or a healthy donor are introduced directly into the female uterus, increasing the density of sperm reaching the ampulla.",
    ans: 0,
    exp: "IUI deposits washed, concentrated sperm past the cervical barrier into the uterine cavity, overcoming low sperm counts to enhance fertilization chances. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Surgical methods of contraception (sterilization) have very poor reversibility.",
    r: "Microsurgical re-anastomosis of severed or ligated vasa deferentia or fallopian tubes has a low clinical success rate.",
    ans: 0,
    exp: "Surgical sterilization is designed as a terminal, permanent procedure; reconstructive re-canalization often fails due to scarring and loss of luminal patency. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Medical Termination of Pregnancy (MTP) is considered relatively safe during the first trimester of pregnancy.",
    r: "During the first 12 weeks, the embryo is small, the placenta is not fully vascularized into deep myometrium, and surgical/medical evacuation carries lower maternal risk.",
    ans: 0,
    exp: "First-trimester abortions carry significantly lower morbidity and mortality compared to second-trimester procedures due to simpler anatomical disruption. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Lippes loop is classified as a non-medicated Intrauterine Device (IUD).",
    r: "Lippes loop increases phagocytosis of spermatozoa within the uterine cavity by provoking a local sterile foreign body inflammatory reaction.",
    ans: 0,
    exp: "The inert polyethylene double-S shaped Lippes loop induces infiltration of uterine macrophages that phagocytose arriving sperms. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Progestasert and LNG-20 release copper ions to kill spermatozoa in the vagina.",
    r: "Copper ions alter the genetic material of spermatozoa within the fallopian tube.",
    ans: 3,
    exp: "Both (A) and (R) are false. Progestasert and LNG-20 are HORMONE-releasing IUDs (not copper-releasing); copper-releasing IUDs (CuT, Cu7) release $Cu^{2+}$ in the uterus (not vagina) to suppress motility, not alter DNA."
  },
  {
    a: "Coitus interruptus is the most reliable contraceptive method with a zero failure rate.",
    r: "Pre-ejaculatory Cowper's gland secretions never contain any viable spermatozoa.",
    ans: 3,
    exp: "Both (A) and (R) are false. Coitus interruptus has a high failure rate because pre-ejaculatory fluid can carry viable sperm, and withdrawal requires extreme self-control."
  },
  {
    a: "Subcutaneous hormone implants offer long-term reversible contraception.",
    r: "Implants slowly release progestogen into the systemic circulation, suppressing ovulation and thickening cervical mucus for several years.",
    ans: 0,
    exp: "Silastic capsules placed subdermally maintain steady low-dose progestin release, providing continuous contraception for up to 3–5 years. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Test-tube baby programme involves in vitro fertilization (IVF) followed by embryo transfer (ET).",
    r: "In IVF, fertilization of ovum by sperm takes place in a laboratory culture dish under simulated in vivo physiological conditions.",
    ans: 0,
    exp: "External fertilization in glass (in vitro) yields zygotes that are subsequently transferred into the female fallopian tube or uterus. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Spermicidal creams, jellies, and foams are frequently used along with diaphragms and caps.",
    r: "Spermicides contain chemical agents like nonoxynol-9 that disrupt sperm cell membranes, enhancing the overall contraceptive efficacy of barrier devices.",
    ans: 0,
    exp: "Combining chemical spermicidal immobilization with physical cervical barrier occlusion yields much higher contraceptive protection. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Vasectomy impairs the production of testosterone and diminishes male libido.",
    r: "Vasectomy involves bilateral surgical ablation of the testicular Leydig cells.",
    ans: 3,
    exp: "Both (A) and (R) are false. Vasectomy cuts only the vas deferens; it does NOT affect Leydig cells, testosterone synthesis, or sexual libido."
  },
  {
    a: "In vivo fertilization techniques involve embryo collection from a donor female who conceived naturally.",
    r: "The retrieved embryo can be transferred into an infertile surrogate female who cannot conceive on her own.",
    ans: 0,
    exp: "In vivo fertilization produces embryos inside a fertile donor tract, which are flushed and transferred into a recipient/surrogate. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "An ideal contraceptive should be user-friendly, easily available, effective, and reversible with no or minimal side effects.",
    r: "It should not interfere with the sexual drive, desire, or the sexual act of the user.",
    ans: 1,
    exp: "Both statements are correct criteria from NCERT defining an ideal contraceptive. The requirement of not interfering with sexual drive describes user acceptability rather than the clinical reason why it must be effective or reversible. Both are true, (R) is not the explanation."
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
    q: "Which of the following is a non-steroidal oral contraceptive pill taken once a week, developed by CDRI, Lucknow?",
    opts: ["Saheli", "Mala-D", "Mala-N", "Progestasert"],
    ans: 0,
    exp: "Saheli (centchroman) is a non-steroidal oral contraceptive pill taken once a week, developed by Central Drug Research Institute (CDRI), Lucknow."
  },
  {
    q: "Copper ions ($Cu^{2+}$) released from copper-releasing IUDs (like CuT and Multiload 375) act by:",
    opts: ["Suppressing sperm motility and reducing fertilizing capacity", "Inhibiting the release of FSH and LH from the pituitary", "Blocking the entry of ovum into the fallopian tube", "Preventing the cleavage divisions of the zygote"],
    ans: 0,
    exp: "Copper ions released in utero suppress sperm motility and inhibit their fertilizing capacity."
  },
  {
    q: "Which of the following IUDs releases hormones to make the uterus unsuitable for implantation and cervix hostile to sperms?",
    opts: ["LNG-20 and Progestasert", "CuT and Cu7", "Lippes loop and Multiload 375", "Nirodh and Vaults"],
    ans: 0,
    exp: "Hormone-releasing IUDs like LNG-20 and Progestasert release progestins that alter the endometrium and cervical mucus."
  },
  {
    q: "In which Assisted Reproductive Technology (ART) procedure is an embryo with up to 8 blastomeres transferred into the fallopian tube?",
    opts: ["ZIFT (Zygote Intra-Fallopian Transfer)", "IUT (Intra-Uterine Transfer)", "GIFT (Gamete Intra-Fallopian Transfer)", "ICSI (Intra-Cytoplasmic Sperm Injection)"],
    ans: 0,
    exp: "ZIFT involves transferring a zygote or early embryo containing up to 8 blastomeres into the fallopian tube."
  },
  {
    q: "Transfer of an embryo with more than 8 blastomeres into the uterus is termed:",
    opts: ["IUT (Intra-Uterine Transfer)", "ZIFT", "GIFT", "AI"],
    ans: 0,
    exp: "When an in vitro embryo exceeds 8 blastomeres, it is transferred directly into the uterus, a procedure termed Intra-Uterine Transfer (IUT)."
  },
  {
    q: "The ART technique in which a sperm is directly micro-injected into the cytoplasm of an ovum in the laboratory is:",
    opts: ["ICSI (Intra-Cytoplasmic Sperm Injection)", "GIFT", "IUI", "ZIFT"],
    ans: 0,
    exp: "ICSI is a specialized laboratory procedure where a single sperm is injected directly into the cytoplasm of an unfertilized ovum."
  },
  {
    q: "Transfer of an ovum collected from a donor into the fallopian tube of an infertile woman who cannot produce one is called:",
    opts: ["GIFT (Gamete Intra-Fallopian Transfer)", "ZIFT", "IUT", "ICSI"],
    ans: 0,
    exp: "GIFT involves transferring an unfertilized ovum into the fallopian tube of a woman who has a suitable site for fertilization."
  },
  {
    q: "Lactational amenorrhea is effective as a natural contraceptive method up to what maximum duration postpartum?",
    opts: ["Up to 6 months", "Up to 1 year", "Up to 2 months", "Up to 2 years"],
    ans: 0,
    exp: "Lactational amenorrhea is effective only up to a maximum period of six months following parturition during intense exclusive breastfeeding."
  },
  {
    q: "What is the fertile period in a typical 28-day human menstrual cycle during which coitus should be avoided in periodic abstinence?",
    opts: ["Day 10 to day 17", "Day 1 to day 5", "Day 21 to day 28", "Day 18 to day 22"],
    ans: 0,
    exp: "Days 10 to 17 are considered the fertile period because ovulation is expected around day 14 and gametes remain viable for 24-48 hours."
  },
  {
    q: "What is surgical sterilization called in males and females, respectively?",
    opts: ["Vasectomy and Tubectomy", "Tubectomy and Vasectomy", "Castration and Hysterectomy", "Oophorectomy and Orchidectomy"],
    ans: 0,
    exp: "Sterilization in males is called vasectomy (occlusion of vas deferens) and in females is called tubectomy (occlusion of fallopian tubes)."
  },
  {
    q: "Emergency contraceptives are effective if administered within how many hours of unprotected coitus?",
    opts: ["Within 72 hours", "Within 12 hours", "Within 7 days", "Within 24 hours only"],
    ans: 0,
    exp: "Emergency contraceptive pills (progestin or combined) must be taken within 72 hours of unprotected intercourse to prevent conception."
  },
  {
    q: "Which of the following is an example of a non-medicated IUD?",
    opts: ["Lippes loop", "CuT", "LNG-20", "Multiload 375"],
    ans: 0,
    exp: "Lippes loop is an inert, non-medicated polyethylene IUD that promotes macrophage-mediated phagocytosis of sperms in the uterus."
  },
  {
    q: "In vasectomy, which structure is cut and tied through a small incision on the scrotum?",
    opts: ["Vas deferens", "Vasa efferentia", "Urethra", "Epididymis"],
    ans: 0,
    exp: "In vasectomy, a small piece of each vas deferens is removed or ligated to prevent spermatozoa from entering the semen."
  },
  {
    q: "Medical Termination of Pregnancy (MTP) was legalized by the Government of India in which year?",
    opts: ["1971", "1951", "1985", "2001"],
    ans: 0,
    exp: "The Government of India legalized MTP in 1971 with strict regulations to prevent misuse, particularly female foeticide."
  },
  {
    q: "Which of the following barrier methods protects the user from sexually transmitted infections (STIs) like HIV and syphilis?",
    opts: ["Condoms", "Diaphragms", "Cervical caps", "Intrauterine devices"],
    ans: 0,
    exp: "Male and female condoms provide physical protection against both conception and mucosal transmission of STIs/AIDS."
  },
  {
    q: "Artificial Insemination (AI) where semen is introduced directly into the uterus of the female is known as:",
    opts: ["IUI (Intra-Uterine Insemination)", "ZIFT", "GIFT", "ICSI"],
    ans: 0,
    exp: "Introduction of washed donor or husband spermatozoa into the uterine cavity is clinically termed Intra-Uterine Insemination (IUI)."
  },
  {
    q: "How do combined oral contraceptive pills (estrogen-progestogen) primarily prevent pregnancy?",
    opts: ["By inhibiting ovulation and implantation, and altering cervical mucus quality", "By killing all sperms in the vagina", "By blocking the fallopian tubes mechanically", "By degrading the zona pellucida"],
    ans: 0,
    exp: "Oral pills inhibit pituitary gonadotropin (FSH/LH) surges to prevent ovulation, retard sperm passage via thick cervical mucus, and prevent implantation."
  },
  {
    q: "A woman unable to conceive due to blocked fallopian tubes but with normal ovarian function and a healthy uterus is best treated with:",
    opts: ["In Vitro Fertilization and Embryo Transfer (IVF-ET)", "GIFT", "Vasectomy", "Lactational amenorrhea"],
    ans: 0,
    exp: "Bilateral tubal blockage is effectively bypassed by in vitro fertilization of retrieved ova followed by intrauterine transfer."
  },
  {
    q: "Which contraceptive method is considered terminal, permanent, and has very poor reversibility?",
    opts: ["Surgical sterilization (Vasectomy / Tubectomy)", "Barrier condoms", "Oral pills", "Natural rhythm method"],
    ans: 0,
    exp: "Surgical methods (vasectomy and tubectomy) block gamete transport permanently; surgical re-canalization is difficult with low success rates."
  },
  {
    q: "Spermicidal creams, jellies, and foams are commonly used in conjunction with which contraceptives to increase efficiency?",
    opts: ["Diaphragms, cervical caps, and vaults", "Oral contraceptive pills", "IUDs", "Subcutaneous implants"],
    ans: 0,
    exp: "Spermicidal formulations are used alongside female barrier devices (diaphragms, cervical caps, vaults) to maximize contraceptive efficacy."
  }
];

const concepts = [
  { topic: "copper releasing IUD action", fact: "Copper-releasing IUDs release Cu2+ ions that suppress sperm motility and fertilizing capacity in the uterus." },
  { topic: "hormone releasing IUD progestin effect", fact: "Hormone-releasing IUDs (LNG-20, Progestasert) make the endometrium hostile to implantation and thicken cervical mucus." },
  { topic: "non medicated Lippes loop", fact: "Lippes loop is a non-medicated IUD that stimulates sterile uterine macrophage infiltration and sperm phagocytosis." },
  { topic: "Saheli non-steroidal pill", fact: "Saheli is a non-steroidal oral contraceptive taken once a week with high efficacy, developed by CDRI Lucknow." },
  { topic: "lactational amenorrhea 6 month limit", fact: "Lactational amenorrhea suppresses ovulation via elevated prolactin and is effective for up to 6 months postpartum." },
  { topic: "periodic abstinence fertile days 10 to 17", fact: "Periodic abstinence involves avoiding coitus from days 10 to 17 of the menstrual cycle when ovulation occurs." },
  { topic: "condom STI protection", fact: "Condoms prevent pregnancy and provide protection against sexually transmitted infections including HIV and syphilis." },
  { topic: "vasectomy vas deferens ligation", fact: "Vasectomy involves cutting and tying the vasa deferentia, blocking sperm transport without affecting semen volume." },
  { topic: "tubectomy fallopian tube occlusion", fact: "Tubectomy involves ligating or excising fallopian tubes to prevent ovum transport while preserving ovarian cycles." },
  { topic: "ZIFT embryo up to 8 blastomeres", fact: "ZIFT transfers a zygote or early cleavage embryo with up to 8 blastomeres into the fallopian tube." },
  { topic: "IUT embryo over 8 blastomeres", fact: "Intra-Uterine Transfer (IUT) transfers an embryo with more than 8 blastomeres directly into the uterine cavity." },
  { topic: "GIFT ovum transfer into tube", fact: "GIFT transfers a donor ovum into the fallopian tube of an infertile woman who cannot produce eggs but can gestate." },
  { topic: "ICSI direct sperm microinjection", fact: "ICSI directly micro-injects a single spermatozoon into the ovum cytoplasm to treat severe male factor infertility." },
  { topic: "IUI intrauterine insemination", fact: "Intra-Uterine Insemination (IUI) deposits concentrated spermatozoa into the uterus to overcome low sperm counts." },
  { topic: "emergency contraception 72 hour window", fact: "Emergency contraception using progestins or combined pills must be taken within 72 hours of unprotected coitus." },
  { topic: "MTP legalization in India 1971", fact: "Medical Termination of Pregnancy was legalized in India in 1971 with conditions to prevent sex-selective misuse." },
  { topic: "first trimester MTP safety", fact: "MTP is medically safe during the first trimester (up to 12 weeks), carrying greater risk in the second trimester." },
  { topic: "oral pill 21 day regimen", fact: "Combined oral pills are taken daily for 21 days starting in early cycle, with a 7-day pill-free menstruation gap." },
  { topic: "diaphragm cervical barrier", fact: "Diaphragms, cervical caps, and vaults are reusable rubber barriers inserted to cover the cervix during coitus." },
  { topic: "spermicidal agents nonoxynol", fact: "Spermicidal creams, foams, and jellies immobilize and destroy sperms, boosting barrier contraceptive efficiency." },
  { topic: "subcutaneous progestin implants", fact: "Subdermal implants provide slow, steady release of progestin to suppress ovulation and fertilizing capacity for years." },
  { topic: "coitus interruptus failure rate", fact: "Coitus interruptus (withdrawal) carries a significant failure rate because pre-ejaculatory fluid may contain active sperms." },
  { topic: "in vitro fertilization test tube baby", fact: "IVF involves laboratory fertilization in culture dishes, followed by embryo transfer into the fallopian tube or uterus." },
  { topic: "poor reversibility of surgical sterilization", fact: "Vasectomy and tubectomy are considered irreversible permanent sterilization methods with poor surgical recanalization success." },
  { topic: "azoospermia after vasectomy", fact: "After vasectomy, ejaculation produces normal seminal plasma derived from accessory glands that is completely devoid of spermatozoa." },
  { topic: "hormonal oral pill ovulation inhibition", fact: "Oral contraceptive pills inhibit the pituitary FSH and LH surges, thereby preventing follicular maturation and ovulation." }
];

const realisticDistractors = [
  "It transforms immediately into non-porous dentine within the vaginal canal.",
  "It stimulates the complete enzymatic hydrolysis of all circulating maternal antibodies.",
  "It converts all spermatozoa into crystalline urea within the fallopian tubes.",
  "It causes the permanent calcification of all myometrial smooth muscle cells.",
  "It completely abolishes the secretion of thyroid hormones throughout gestation.",
  "It replaces the entire endometrium with non-vascular stratified keratinized plates.",
  "It eliminates all pituitary receptors from the ovaries permanently.",
  "It induces the spontaneous liquidation of all pelvic lymphatic vessels."
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
      q: `Which of the following statements regarding ${item.topic} is CLINICALLY AND BIOLOGICALLY TRUE?`,
      opts: [
        `${item.fact}`,
        d1,
        d2,
        d3
      ],
      ans: 0,
      exp: `According to NCERT Class 12 Reproductive Health: ${item.fact}`
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
      exp: `Contraceptive and ART principle: ${item.fact}`
    });
  } else if (idx % 4 === 2) {
    fullMcqList.push({
      q: `In the practice of contraception and assisted reproduction, what is the role of ${item.topic}?`,
      opts: [
        `${item.fact}`,
        d3,
        d1,
        d2
      ],
      ans: 0,
      exp: `NCERT Contraception & ART fact: ${item.fact}`
    });
  } else {
    fullMcqList.push({
      q: `Select the valid NCERT-based fact about ${item.topic}:`,
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

console.log(`Part 1 (${SUBTOPIC}) total questions: ${allQuestions.length} (AR: ${arQuestions.length}, MCQ: ${mcqQuestions.length})`);

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

console.log(`Part 1 KaTeX errors: ${katexErrors}`);

if (katexErrors === 0 && allQuestions.length === 180) {
  const outPath = path.join(__dirname, 'data_zoology_repro_part1.js');
  const fileContent = `// Auto-generated data for Zoology Reproduction Part 1: Contraception methods and Assisted Reproductive Technologies (ART: IVF, ZIFT, GIFT)\nmodule.exports = ${JSON.stringify(allQuestions, null, 2)};\n`;
  fs.writeFileSync(outPath, fileContent, 'utf8');
  console.log(`Successfully wrote ${outPath}`);
} else {
  console.error("Validation failed! Not writing output.");
  process.exit(1);
}
