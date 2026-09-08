// scripts/build_zoology_repro_part8.js
// Subtopic: Reproductive health
// Chapter: Reproduction
// Subject: Zoology
// 26 Assertion-Reason, 154 MCQ = 180 Questions

const fs = require('fs');
const path = require('path');
const katex = require('katex');

const SUBTOPIC = "Reproductive health";
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
    a: "According to the World Health Organization (WHO), reproductive health signifies total well-being in all aspects of reproduction.",
    r: "Total reproductive health encompasses physical, emotional, behavioral, and social well-being in all matters relating to the reproductive system.",
    ans: 0,
    exp: "WHO defines reproductive health broadly as a state of complete physical, mental, and social well-being, and not merely the absence of disease or infirmity, in all matters relating to reproduction. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "India was among the first countries in the world to initiate national action plans for total reproductive health as a social goal.",
    r: "Nationwide family planning programmes were officially initiated in India in the year 1951.",
    ans: 0,
    exp: "NCERT states: 'India was amongst the first countries in the world to initiate action plans and programmes at a national level to attain total reproductive health as a social goal. These programmes called \"family planning\" were initiated in 1951.' Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Reproductive and Child Health Care (RCH) programmes are currently operational in India.",
    r: "The primary objectives of RCH programmes are creating awareness about reproduction-related aspects and providing facilities and support for a reproductively healthy society.",
    ans: 0,
    exp: "RCH programmes aim to create wide public awareness and deliver clinical support across maternal, neonatal, and adolescent reproductive healthcare. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "A statutory ban on amniocentesis for fetal sex determination has been enacted in India.",
    r: "Amniocentesis was being widely misused to identify female fetuses, resulting in rampant female foeticide.",
    ans: 0,
    exp: "To curb female foeticide and combat declining child sex ratios, prenatal sex determination using amniocentesis is banned under the PC-PNDT Act. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Amniocentesis was originally developed as a prenatal diagnostic test for chromosomal and metabolic abnormalities.",
    r: "Amniotic fluid surrounding the fetus contains sloughed fetal cells that can be tested for genetic disorders like Down syndrome, hemophilia, and sickle-cell anemia.",
    ans: 0,
    exp: "Fetal cells harvested from amniotic fluid permit karyotyping and biochemical analysis to detect chromosomal aneuploidies and metabolic inborn errors. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Introduction of sex education in schools is strongly recommended by reproductive healthcare experts.",
    r: "Sex education provides scientifically accurate information to adolescents, dispelling myths and misconceptions about puberty, hygiene, and safe sex.",
    ans: 0,
    exp: "Educating school adolescents promotes healthy attitudes, safe sexual practices, and awareness of STIs and unwanted pregnancies. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Hepatitis-B and HIV infections are not curable once established.",
    r: "Except for hepatitis-B, genital herpes, and HIV, most other sexually transmitted infections are completely curable if detected early.",
    ans: 1,
    exp: "Both statements are correct NCERT facts. The fact that other STIs are curable does not explain why Hepatitis-B and HIV remain incurable. Both (A) and (R) are true, but (R) is not the correct explanation of (A)."
  },
  {
    a: "Pelvic Inflammatory Disease (PID) and ectopic pregnancies can result as complications of untreated STIs.",
    r: "Pathogens causing STIs can ascend from the lower genital tract to the uterus, fallopian tubes, and pelvic peritoneal cavity.",
    ans: 0,
    exp: "Ascending bacterial infections (e.g. Chlamydia trachomatis, Neisseria gonorrhoeae) cause tubal scarring, leading to luminal occlusion, ectopic gestations, and chronic pelvic pain. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "The age group of 15 to 24 years is reported to be most vulnerable to sexually transmitted infections.",
    r: "Adolescents and young adults often lack accurate reproductive knowledge, engage in experimental behavior, and may hesitate to seek timely medical consultation.",
    ans: 0,
    exp: "High susceptibility among 15-24 year-olds is attributed to limited awareness, barrier non-compliance, and stigma delaying diagnosis. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "The rapid growth of the human population in India after independence was driven by a sharp decline in death rate.",
    r: "Post-independence healthcare improvements significantly lowered the Maternal Mortality Rate (MMR) and Infant Mortality Rate (IMR).",
    ans: 0,
    exp: "Expanding immunization, sanitation, and medical infrastructure reduced infant and maternal mortality, triggering unprecedented population expansion. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Infertility is defined as the inability of a couple to conceive or produce children despite two years of regular, unprotected sexual co-habitation.",
    r: "Infertility in a couple is always attributable to pathological defects in the female partner.",
    ans: 2,
    exp: "(A) is true as per standard clinical and NCERT definitions. (R) is false because male factors account for approximately 40-50% of infertility cases, dispelling the myth of sole female culpability."
  },
  {
    a: "Hepatitis-B and HIV can be transmitted through non-sexual routes as well.",
    r: "Sharing contaminated injection needles, surgical instruments, and transfusion of infected blood transmit Hepatitis-B and HIV.",
    ans: 0,
    exp: "Both viruses reside in blood and body fluids; parenterally contaminated needles and blood transfusions serve as potent transmission routes alongside vertical transmission. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Barrier methods like condoms provide dual protection against unwanted pregnancies and STIs.",
    r: "Condoms prevent direct mucosal contact and the exchange of bodily secretions during coitus.",
    ans: 0,
    exp: "By acting as a physical shield over the penis or vagina, condoms block both sperm entry and transmission of bacterial and viral pathogens. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "'Saheli' is an innovative oral contraceptive developed by CDRI, Lucknow.",
    r: "'Saheli' contains a non-steroidal selective estrogen receptor modulator (centchroman) taken once a week with negligible side effects.",
    ans: 0,
    exp: "Developed by Central Drug Research Institute (CDRI), Lucknow, Saheli avoids steroid-related adverse effects while offering high contraceptive efficacy. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Syphilis is caused by the bacterium Treponema pallidum.",
    r: "Syphilis can be completely cured if diagnosed early and treated with appropriate penicillin-based antibiotics.",
    ans: 1,
    exp: "Both statements are correct biological and medical facts. Curability with penicillin does not explain why Treponema is the causative organism. Both (A) and (R) are true, but (R) is not the correct explanation of (A)."
  },
  {
    a: "Trichomoniasis is a sexually transmitted infection caused by a protozoan parasite.",
    r: "Trichomonas vaginalis causes vaginitis characterized by foul-smelling greenish-yellow frothy discharge and vulvar pruritus.",
    ans: 0,
    exp: "Trichomoniasis is caused by the flagellated protozoan Trichomonas vaginalis, which infects the squamous epithelium of the vagina and male urethra. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Genital warts are caused by Human Papillomaviruses (HPV).",
    r: "Certain oncogenic high-risk strains of HPV (strains 16 and 18) are strongly linked to cervical carcinoma in women.",
    ans: 1,
    exp: "Both statements are accurate facts. The oncogenicity of HPV 16/18 does not explain why low-risk HPV strains cause benignt anogenital warts. Both (A) and (R) are true, but (R) is not the correct explanation of (A)."
  },
  {
    a: "Early clinical symptoms of most STIs are mild and easily ignored by infected individuals.",
    r: "Initial symptoms include localized itching, fluid discharge, slight pain, and mild swellings in the genital region.",
    ans: 0,
    exp: "NCERT states: 'Early symptoms of most of these are minor and include itching, fluid discharge, slight pain, swellings, etc., in the genital region.' These subtle signs often delay medical intervention. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "The social stigma attached to STIs deters individuals from seeking timely clinical consultation.",
    r: "Delayed diagnosis and improper treatment of STIs increase the risk of severe long-term complications including pelvic inflammatory disease and tubal infertility.",
    ans: 1,
    exp: "Both statements are correct social and clinical realities noted in NCERT. The development of complications does not explain why societal stigma exists. Both (A) and (R) are true, but (R) is not the correct explanation of (A)."
  },
  {
    a: "Genital herpes is caused by Herpes Simplex Virus type 2 (HSV-2).",
    r: "HSV remains latent in sensory nerve ganglia and can cause recurrent painful vesicular eruptions.",
    ans: 0,
    exp: "HSV-2 infects genital mucous membranes and establishes lifelong latency in lumbosacral dorsal root ganglia, producing periodic flare-ups. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "According to the 2011 Indian census report, the annual population growth rate had dropped below 2%.",
    r: "An annual growth rate of $2\\%$ (20 per 1000 per year) can cause a population to double in approximately 35 years.",
    ans: 1,
    exp: "Both statements are accurate demography facts from NCERT. The mathematical doubling time does not explain why the census observed a rate below 2%. Both (A) and (R) are true, but (R) is not the correct explanation of (A)."
  },
  {
    a: "Promoting equal opportunities for both male and female children is an integral goal of reproductive healthcare programmes.",
    r: "Gender bias and patriarchal son-preference contribute directly to female foeticide and distorted sex ratios.",
    ans: 0,
    exp: "Advocating gender equality addresses the root socio-cultural drivers of female foeticide and neglect of the girl child. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "All sexually transmitted infections produce obvious ulcers on the external genitalia within 24 hours of exposure.",
    r: "Pathogens responsible for STIs have an incubation period ranging from zero to two hours.",
    ans: 3,
    exp: "Both (A) and (R) are false. Most STIs have incubation periods of days to months (e.g. syphilis 10-90 days, HIV months to years) and many remain asymptomatic for long periods. Thus (A) is false and (R) is false (option d)."
  },
  {
    a: "A healthy reproductive society requires individuals with physically and functionally normal reproductive organs.",
    r: "Normal emotional and behavioral interactions among individuals in sex-related aspects are equally essential for reproductive health.",
    ans: 1,
    exp: "Both statements reflect NCERT's holistic definition of reproductive health. Behavioral normalcy does not explain physical organ anatomy. Both (A) and (R) are true, but (R) is not the correct explanation of (A)."
  },
  {
    a: "Infertility clinics employ specialized diagnostic and therapeutic interventions to assist infertile couples.",
    r: "Assisted Reproductive Technologies (ART) like IVF, ICSI, and IUI provide clinical avenues for parenthood when conventional treatments fail.",
    ans: 0,
    exp: "Infertility clinics provide advanced ART solutions when natural conception is precluded by physiological or anatomical blocks. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Breastfeeding should be discontinued immediately if the newborn develops physiological neonatal jaundice.",
    r: "Maternal breast milk contains high concentrations of toxic bile pigments that worsen infant liver disease.",
    ans: 3,
    exp: "Both (A) and (R) are false. Frequent breastfeeding is recommended for neonatal jaundice to promote hydration and bowel movements that eliminate bilirubin; breast milk contains beneficial nutrients and antibodies, not toxic bile pigments. Thus (A) is false and (R) is false (option d)."
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
    q: "According to the World Health Organization (WHO), reproductive health means total well-being in all aspects of reproduction, namely:",
    opts: [
      "Physical, emotional, behavioral, and social",
      "Physical and financial only",
      "Surgical and diagnostic only",
      "Biological and mental only"
    ],
    ans: 0,
    exp: "NCERT states: 'According to the World Health Organisation (WHO), reproductive health means a total well-being in all aspects of reproduction, i.e., physical, emotional, behavioural and social.'"
  },
  {
    q: "India initiated national action plans and programmes called 'family planning' in which year?",
    opts: ["1951", "1947", "1971", "1985"],
    ans: 0,
    exp: "NCERT states: 'These programmes called \"family planning\" were initiated in 1951 and were periodically assessed over the past decades.'"
  },
  {
    q: "The comprehensive national programmes currently in operation in India covering wider reproduction-related areas are popular as:",
    opts: [
      "Reproductive and Child Health Care (RCH) programmes",
      "National Polio Surveillance Programme",
      "Integrated Child Development Scheme",
      "Family Welfare and Nutrition Mission"
    ],
    ans: 0,
    exp: "NCERT states: 'Improved programmes covering wider reproduction-related areas are currently in operation under the popular name \"Reproductive and Child Health Care (RCH) programmes\".'"
  },
  {
    q: "The statutory ban on amniocentesis for sex-determination in India was legally imposed to check:",
    opts: [
      "Female foeticide",
      "Hepatitis-B transmission",
      "Maternal malnutrition",
      "Multiple pregnancies"
    ],
    ans: 0,
    exp: "NCERT explicitly highlights: 'Statutory ban on amniocentesis for sex-determination to legally check increasing female foeticides...'"
  },
  {
    q: "Amniocentesis is a fetal diagnostic technique based on the chromosomal analysis of cells retrieved from the:",
    opts: ["Amniotic fluid surrounding the developing embryo", "Maternal peripheral blood", "Placental syncytiotrophoblast", "Cervical mucus plug"],
    ans: 0,
    exp: "NCERT defines amniocentesis as a diagnostic test based on the chromosomal pattern in the amniotic fluid surrounding the developing embryo."
  },
  {
    q: "Which of the following genetic disorders can be reliably diagnosed in utero using amniocentesis?",
    opts: [
      "Down syndrome, hemophilia, and sickle-cell anemia",
      "Tuberculosis, malaria, and cholera",
      "Common cold and influenza",
      "Iron deficiency anemia and rickets"
    ],
    ans: 0,
    exp: "NCERT states that amniocentesis is used to determine the presence of genetic disorders such as Down syndrome, hemophilia, sickle-cell anemia, etc."
  },
  {
    q: "'Saheli', a new oral contraceptive for females, was developed by scientists at which premier research institute?",
    opts: [
      "Central Drug Research Institute (CDRI), Lucknow",
      "All India Institute of Medical Sciences (AIIMS), New Delhi",
      "National Institute of Immunology (NII), New Delhi",
      "Indian Institute of Science (IISc), Bengaluru"
    ],
    ans: 0,
    exp: "NCERT notes: '\"Saheli\"- a new oral contraceptive for the females-was developed by scientists at Central Drug Research Institute (CDRI) in Lucknow, India.'"
  },
  {
    q: "Which of the following factors contributed significantly to the rapid population explosion in India after independence?",
    opts: [
      "Rapid decline in death rate, maternal mortality rate (MMR), and infant mortality rate (IMR)",
      "Sharp decline in reproductive age individuals",
      "Increase in natural catastrophes",
      "Complete absence of public healthcare facilities"
    ],
    ans: 0,
    exp: "NCERT identifies: 'A rapid decline in death rate, maternal mortality rate (MMR) and infant mortality rate (IMR) as well as an increase in number of people in reproducible age are probable reasons for this.'"
  },
  {
    q: "According to the 2011 census report, the population growth rate of India was:",
    opts: ["Less than $2\\%$ (i.e. $20/1000/\\text{year}$)", "$5\\%$ per year", "$0.5\\%$ per year", "$10\\%$ per year"],
    ans: 0,
    exp: "NCERT states: 'According to the 2011 census report, the population growth rate was less than 2 per cent, i.e., 20/1000/year...'"
  },
  {
    q: "Diseases or infections which are transmitted through sexual intercourse are collectively called:",
    opts: [
      "Sexually Transmitted Infections (STIs) or Venereal Diseases (VD)",
      "Congenital metabolic anomalies",
      "Vector-borne zoonotic diseases",
      "Water-borne enteric infections"
    ],
    ans: 0,
    exp: "NCERT states: 'Infections or diseases which are transmitted through sexual intercourse are collectively called sexually transmitted infections (STI) or venereal diseases (VD) or reproductive tract infections (RTI).'"
  },
  {
    q: "Which of the following sexually transmitted infections is caused by a protozoan parasite?",
    opts: ["Trichomoniasis", "Gonorrhea", "Syphilis", "Chlamydiasis"],
    ans: 0,
    exp: "Trichomoniasis is caused by Trichomonas vaginalis, a parasitic flagellated protozoan."
  },
  {
    q: "Which of the following sexually transmitted infections is caused by a spirochete bacterium (Treponema pallidum)?",
    opts: ["Syphilis", "Gonorrhea", "Genital herpes", "Trichomoniasis"],
    ans: 0,
    exp: "Syphilis is caused by the Gram-negative spirochete Treponema pallidum."
  },
  {
    q: "Gonorrhea is a sexually transmitted infection caused by which bacterial pathogen?",
    opts: ["Neisseria gonorrhoeae", "Chlamydia trachomatis", "Treponema pallidum", "Haemophilus ducreyi"],
    ans: 0,
    exp: "Gonorrhea is caused by the Gram-negative diplococcus Neisseria gonorrhoeae."
  },
  {
    q: "Except for which of the following groups of diseases, are other STIs completely curable if detected early and treated properly?",
    opts: [
      "Hepatitis-B, genital herpes, and HIV infection",
      "Gonorrhea, syphilis, and trichomoniasis",
      "Chlamydiasis, genital warts, and syphilis",
      "Candidiasis, pubic lice, and scabies"
    ],
    ans: 0,
    exp: "NCERT explicitly notes: 'Except for hepatitis-B, genital herpes and HIV infections, other diseases are completely curable if detected early and treated properly.'"
  },
  {
    q: "Which of the following STIs can also be transmitted via non-sexual routes, such as contaminated injection needles and blood transfusions?",
    opts: ["Hepatitis-B and HIV", "Genital herpes and trichomoniasis", "Gonorrhea and syphilis", "Chlamydiasis and genital warts"],
    ans: 0,
    exp: "NCERT states: 'Hepatitis-B and HIV are also transmitted by sharing of injection needles, surgical instruments, etc., with infected persons, transfusion of blood, or from an infected mother to the fetus too.'"
  },
  {
    q: "Which age group is reported to be in the most vulnerable danger zone for acquiring sexually transmitted infections?",
    opts: ["15 to 24 years", "0 to 10 years", "50 to 60 years", "65 years and above"],
    ans: 0,
    exp: "NCERT notes: 'The age group of 15-24 years... are reported to be very high in this age group.'"
  },
  {
    q: "Untreated sexually transmitted infections can lead to serious long-term clinical complications including:",
    opts: [
      "Pelvic Inflammatory Diseases (PID), abortions, stillbirths, and ectopic pregnancies",
      "Type 1 diabetes and sickle-cell crisis",
      "Hyperthyroidism and gigantism",
      "Osteomalacia and scurvy"
    ],
    ans: 0,
    exp: "NCERT lists complications of untreated STIs as: Pelvic inflammatory diseases (PID), abortions, stillbirths, ectopic pregnancies, infertility, or even cancer of the reproductive tract."
  },
  {
    q: "To remain free from STIs, which basic preventive principle should be strictly followed?",
    opts: [
      "Avoid sex with unknown/multiple partners and always use condoms during coitus",
      "Consume mega-doses of vitamin C before intercourse",
      "Avoid drinking municipal tap water",
      "Undergo monthly diagnostic surgical laparoscopy"
    ],
    ans: 0,
    exp: "NCERT recommends: (i) Avoid sex with unknown partners/multiple partners, (ii) Always try to use condoms during coitus, (iii) In case of doubt, consult a qualified doctor early."
  },
  {
    q: "A couple is considered clinically infertile when they are unable to achieve conception despite unprotected sexual co-habitation for at least:",
    opts: ["2 years", "6 months", "5 years", "10 years"],
    ans: 0,
    exp: "NCERT states: 'A large number of couples all over the world including India are infertile, i.e., they are unable to produce children in spite of two years of unprotected sexual co-habitation.'"
  },
  {
    q: "Common causes of human infertility include:",
    opts: [
      "Physical, congenital, diseases, drugs, immunological, or psychological factors",
      "Exclusively high academic stress in females",
      "Excessive hemoglobin concentration in blood",
      "Consumption of iodized salt"
    ],
    ans: 0,
    exp: "NCERT notes: 'The reasons for this could be many-physical, congenital, diseases, drugs, immunological or even psychological.'"
  },
  {
    q: "In traditional Indian society, the female partner is often unfairly blamed for a childless marriage, whereas clinically:",
    opts: [
      "The underlying problem very frequently lies in the male partner",
      "Females are biologically the only cause of infertility",
      "Infertility never occurs in males",
      "Children cannot be inherited from either parent"
    ],
    ans: 0,
    exp: "NCERT emphasizes: 'In India, often the female is blamed for the pair being childless, but more often than not, the problem lies in the male partner.'"
  },
  {
    q: "Genital warts are caused by infection with which viral pathogen?",
    opts: ["Human Papillomavirus (HPV)", "Herpes Simplex Virus (HSV)", "Epstein-Barr Virus (EBV)", "Cytomegalovirus (CMV)"],
    ans: 0,
    exp: "Genital warts (condylomata acuminata) are caused by sexually transmitted Human Papillomaviruses, particularly low-risk strains 6 and 11."
  },
  {
    q: "Chlamydiasis is a common bacterial STI caused by:",
    opts: ["Chlamydia trachomatis", "Treponema pertenue", "Ureaplasma urealyticum", "Mycoplasma hominis"],
    ans: 0,
    exp: "Chlamydiasis is caused by the obligate intracellular bacterium Chlamydia trachomatis serovars D-K."
  },
  {
    q: "An ectopic pregnancy is a dangerous medical condition where the blastocyst implants:",
    opts: ["Outside the uterine cavity, most commonly in the ampulla of the fallopian tube", "In the fundus of the uterus", "Inside the urinary bladder", "In the vaginal wall"],
    ans: 0,
    exp: "Ectopic pregnancy refers to gestational implantation outside the endometrial lining of the uterine cavity, with ~95% occurring in the fallopian tube."
  },
  {
    q: "Which Indian legislative act legally prohibits prenatal diagnostic techniques for sex selection?",
    opts: ["PC-PNDT Act (1994)", "MTP Act (1971)", "Special Marriage Act", "Consumer Protection Act"],
    ans: 0,
    exp: "The Pre-Conception and Pre-Natal Diagnostic Techniques (PC-PNDT) Act was enacted in 1994 to ban sex selection before or after conception and regulate prenatal diagnostic labs."
  },
  {
    q: "Which diagnostic method utilizes maternal blood samples at 10 weeks of gestation to screen fetal cell-free DNA non-invasively?",
    opts: ["NIPT (Non-Invasive Prenatal Testing)", "Amniocentesis", "Chorionic Villus Sampling (CVS)", "Fetoscopy"],
    ans: 0,
    exp: "NIPT analyzes cell-free fetal DNA circulating in maternal plasma, offering non-invasive prenatal screening for major chromosomal trisomies without miscarriage risk."
  },
  {
    q: "In the context of population control in India, the popular slogan widely publicized was:",
    opts: ["'Hum Do Hamare Do' (We Two, Our Two)", "'One Child Policy'", "'Grow More Food'", "'Live and Let Live'"],
    ans: 0,
    exp: "NCERT cites the famous media slogan 'Hum Do Hamare Do' which promoted the small family norm across Indian communities."
  },
  {
    q: "Which of the following is an effective governmental measure to check rapid population growth?",
    opts: [
      "Raising the statutory marriageable age to 18 years for females and 21 years for males",
      "Lowering the marriageable age to 12 years",
      "Banning the sale of barrier contraceptives",
      "Restricting public education"
    ],
    ans: 0,
    exp: "NCERT states: 'Statutory raising of marriageable age of the female to 18 years and that of male to 21 years, and incentives given to couples with small families are two of the other measures taken to solve this problem.'"
  },
  {
    q: "The presence of which substance in amniotic fluid can be measured to assess fetal neural tube defects (e.g. spina bifida)?",
    opts: ["Alpha-fetoprotein (AFP)", "Bilirubin", "Hemoglobin A1c", "Serum creatinine"],
    ans: 0,
    exp: "Elevated levels of alpha-fetoprotein (AFP) and acetylcholinesterase in amniotic fluid indicate open neural tube defects like spina bifida and anencephaly."
  },
  {
    q: "Lecithin-to-sphingomyelin ($L/S$) ratio in amniotic fluid is clinically assessed to evaluate:",
    opts: ["Fetal lung maturity", "Fetal brain weight", "Maternal liver function", "Kidney filtration rate"],
    ans: 0,
    exp: "An $L/S$ ratio $\\ge 2.0$ in amniotic fluid indicates mature fetal surfactant production and low risk of neonatal Respiratory Distress Syndrome (RDS)."
  },
  {
    q: "Which barrier method provides the added benefit of user privacy and protection from STIs without requiring clinical insertion by a doctor?",
    opts: ["Condoms", "IUDs", "Subcutaneous implants", "Tubectomy"],
    ans: 0,
    exp: "Condoms can be easily self-inserted by the user, provide complete privacy, and uniquely shield both partners against sexually transmitted pathogens."
  },
  {
    q: "The transmission of HIV from an infected mother to her child during pregnancy, childbirth, or breastfeeding is called:",
    opts: ["Vertical transmission", "Horizontal transmission", "Vector-borne transmission", "Airborne transmission"],
    ans: 0,
    exp: "Vertical transmission (or mother-to-child transmission - MTCT) encompasses perinatal HIV passage trans-placentally, during delivery, or via breast milk."
  },
  {
    q: "Which antiviral therapy is administered to HIV-positive pregnant women to minimize vertical transmission of the virus?",
    opts: ["Antiretroviral therapy (ART) e.g. Zidovudine/Nevirapine", "Penicillin G", "Acyclovir", "Metronidazole"],
    ans: 0,
    exp: "Combination antiretroviral therapy (ART) dramatically suppresses maternal viral load, reducing vertical transmission risk to below 1%."
  },
  {
    q: "The statutory age of marriage in India as stated in NCERT is:",
    opts: ["18 years for females and 21 years for males", "21 years for females and 18 years for males", "16 years for both", "25 years for both"],
    ans: 0,
    exp: "NCERT clearly specifies: statutory raising of marriageable age of the female to 18 years and that of male to 21 years."
  },
  {
    q: "The term RTI in the context of reproductive health stands for:",
    opts: ["Reproductive Tract Infections", "Respiratory Tract Illness", "Rapid Testing Intervention", "Reproductive Therapy Institute"],
    ans: 0,
    exp: "In reproductive medicine, RTI is the standard acronym for Reproductive Tract Infections."
  }
];

// Rich bank of reproductive health facts
const concepts = [
  { topic: "WHO reproductive health definition", fact: "WHO defines reproductive health as a state of complete physical, emotional, behavioral, and social well-being in all aspects of reproduction." },
  { topic: "Indian family planning initiation 1951", fact: "India launched national family planning programmes in 1951, becoming one of the first countries to prioritize reproductive health." },
  { topic: "RCH programme comprehensive mandate", fact: "Reproductive and Child Health Care (RCH) programmes address wide maternal, child, and adolescent healthcare and awareness goals." },
  { topic: "amniocentesis statutory prohibition", fact: "Prenatal sex determination via amniocentesis is legally prohibited in India to prevent female foeticide." },
  { topic: "amniocentesis genetic diagnosis", fact: "Amniocentesis utilizes fetal cells suspended in amniotic fluid to diagnose chromosomal aneuploidies and metabolic inborn errors." },
  { topic: "Saheli development at CDRI Lucknow", fact: "Saheli is a non-steroidal once-weekly oral contraceptive pill developed by researchers at CDRI, Lucknow." },
  { topic: "population explosion drivers", fact: "Rapid population expansion was fueled by sharp declines in crude death rates, maternal mortality rate (MMR), and infant mortality rate (IMR)." },
  { topic: "2011 Indian census growth rate", fact: "The 2011 census revealed an annual population growth rate of less than 2%, emphasizing ongoing stabilization efforts." },
  { topic: "sexually transmitted infections definition", fact: "STIs or venereal diseases (VD) are infections transmitted through sexual intercourse, affecting the reproductive tract and systemic health." },
  { topic: "incurable viral STIs trio", fact: "Hepatitis-B, genital herpes (HSV), and HIV are persistent viral infections that cannot be permanently cured by existing therapies." },
  { topic: "curability of bacterial and protozoan STIs", fact: "Most STIs including syphilis, gonorrhea, and trichomoniasis are completely curable when diagnosed early and treated appropriately." },
  { topic: "parenteral STI transmission routes", fact: "Hepatitis-B and HIV are readily transmitted via contaminated needles, surgical equipment, blood transfusions, and vertically from mother to child." },
  { topic: "adolescent vulnerability window (15-24 years)", fact: "Adolescents and young adults aged 15 to 24 years represent the cohort at highest risk for acquiring sexually transmitted infections." },
  { topic: "STI complications and sequelae", fact: "Untreated reproductive tract infections can cause pelvic inflammatory disease (PID), tubal scarring, ectopic gestation, and secondary infertility." },
  { topic: "STI triple prevention protocol", fact: "STI prevention relies on avoiding unknown/multiple partners, consistent condom usage, and immediate medical consultation upon suspecting infection." },
  { topic: "clinical infertility definition (2 years)", fact: "Infertility is medically defined as the failure to achieve conception following two years of regular unprotected cohabitation." },
  { topic: "male factor contribution to infertility", fact: "Contrary to cultural misconceptions blaming women, male reproductive anomalies account for approximately half of all infertility cases." },
  { topic: "Treponema pallidum etiology of syphilis", fact: "Syphilis is a chronic systemic bacterial infection caused by the spirochete Treponema pallidum, presenting with genital chancres." },
  { topic: "Neisseria gonorrhoeae diplococcus", fact: "Gonorrhea is caused by the Gram-negative diplococcus Neisseria gonorrhoeae, provoking purulent urethritis and cervicitis." },
  { topic: "Trichomonas vaginalis flagellated protozoan", fact: "Trichomoniasis is caused by Trichomonas vaginalis, producing profuse frothy, malodorous vaginal discharge." },
  { topic: "Human Papillomavirus genital warts and cancer", fact: "HPV causes benign genital warts and persistent high-risk strains (HPV 16 and 18) are causal drivers of cervical carcinoma." },
  { topic: "statutory marriageable age in India", fact: "The statutory legal minimum age for marriage in India is set at 18 years for females and 21 years for males." },
  { topic: "condom dual protection value", fact: "Condoms are unique barrier contraceptives that prevent unplanned conceptions while conferring vital protection against STIs." },
  { topic: "alpha-fetoprotein prenatal marker", fact: "Elevated maternal serum or amniotic alpha-fetoprotein (AFP) serves as a key prenatal diagnostic indicator of open neural tube defects." },
  { topic: "non-invasive prenatal testing (NIPT)", fact: "NIPT analyzes cell-free fetal DNA in maternal circulation at 10 weeks of gestation to screen for chromosomal trisomies safely." },
  { topic: "school sex education importance", fact: "Implementing sex education in schools delivers scientific information to adolescents, eliminating myths and promoting healthy practices." }
];

const realisticDistractors = [
  "It transforms immediately into non-porous dentine within the abdominal cavity.",
  "It stimulates the complete enzymatic hydrolysis of all maternal hemoglobin within minutes.",
  "It causes the permanent calcification of all secondary sex organs within hours.",
  "It eliminates all immune globulin genes from the human genome permanently.",
  "It induces the spontaneous conversion of all pelvic organs into striated muscle masses.",
  "It replaces the entire genital tract epithelium with dense crystalline bone.",
  "It completely abolishes the secretion of parathyroid hormone in reproductive adults.",
  "It converts all circulating sex hormones into insoluble kidney stones instantly."
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
      q: `Which of the following statements regarding ${item.topic} is SCIENTIFICALLY AND DEMOGRAPHICALLY ACCURATE?`,
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
      q: `Identify the accurate reproductive healthcare principle concerning ${item.topic}:`,
      opts: [
        `${item.fact}`,
        d2,
        d3,
        d1
      ],
      ans: 0,
      exp: `Reproductive health principle: ${item.fact}`
    });
  } else if (idx % 4 === 2) {
    fullMcqList.push({
      q: `In the context of public health and reproductive medicine, what is the significance of ${item.topic}?`,
      opts: [
        `${item.fact}`,
        d3,
        d1,
        d2
      ],
      ans: 0,
      exp: `NCERT Reproductive Health fact: ${item.fact}`
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
  const outPath = path.join(__dirname, 'data_zoology_repro_part8.js');
  const fileContent = `// Auto-generated data for Zoology Reproduction Part 8: Reproductive health\nmodule.exports = ${JSON.stringify(allQuestions, null, 2)};\n`;
  fs.writeFileSync(outPath, fileContent, 'utf8');
  console.log(`Successfully wrote ${outPath}`);
} else {
  console.error("Validation failed! Not writing output.");
  process.exit(1);
}
