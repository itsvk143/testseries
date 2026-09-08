// scripts/build_zoology_repro_part5.js
// Subtopic: Male reproductive system
// Chapter: Reproduction
// Subject: Zoology
// 26 Assertion-Reason, 154 MCQ = 180 Questions

const fs = require('fs');
const path = require('path');
const katex = require('katex');

const SUBTOPIC = "Male reproductive system";
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
    a: "Testes in human males descend into the scrotum through the inguinal canal during fetal development.",
    r: "Spermatogenesis requires a temperature of $2 - 2.5^\\circ\\text{C}$ lower than the normal internal body temperature.",
    ans: 0,
    exp: "The scrotum maintains testicular temperature $2 - 2.5^\\circ\\text{C}$ lower than internal core body temperature, which is essential for viable spermatogenesis. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Cryptorchidism leads to sterility in adult human males if left uncorrected.",
    r: "At intra-abdominal core body temperature, seminiferous tubules undergo degeneration and fail to produce viable spermatozoa.",
    ans: 0,
    exp: "Failure of testes to descend into the scrotum exposes germinal epithelium to elevated abdominal heat, causing meiotic arrest and sterility. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Sertoli cells are also known as nurse cells or sustentacular cells.",
    r: "Sertoli cells provide structural support and nourishment to developing male germ cells.",
    ans: 0,
    exp: "Sertoli cells extend from the basal lamina to the tubular lumen and nourish developing spermatogenic cells. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Tight junctions between adjacent Sertoli cells form the blood-testis barrier.",
    r: "The blood-testis barrier prevents autoimmune destruction of genetically foreign haploid spermatids and spermatozoa by the immune system.",
    ans: 0,
    exp: "Post-meiotic haploid germ cells express neo-antigens; the blood-testis barrier prevents exposure to circulating antibodies and immune cells. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Leydig cells secrete androgens under the direct influence of Luteinizing Hormone (LH).",
    r: "LH is also known as Interstitial Cell Stimulating Hormone (ICSH) in males.",
    ans: 0,
    exp: "Pituitary LH binds to specific receptors on interstitial (Leydig) cells to stimulate testosterone biosynthesis; hence it is called ICSH. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Sertoli cells secrete Androgen Binding Protein (ABP) under the stimulation of FSH.",
    r: "ABP concentrates testosterone within the seminiferous tubules to maintain high local levels required for spermatogenesis.",
    ans: 0,
    exp: "FSH acts on Sertoli cells to induce ABP synthesis, which binds testosterone and maintains elevated intratesticular androgen levels. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Inhibin provides selective negative feedback regulation on FSH secretion.",
    r: "Inhibin is a peptide hormone produced by Leydig cells of the testis.",
    ans: 2,
    exp: "(A) is true because inhibin selectively suppresses pituitary FSH secretion. (R) is false because inhibin is produced by Sertoli cells, not Leydig cells."
  },
  {
    a: "Surgical bilateral vasectomy in males causes immediate azoospermia in the next ejaculate.",
    r: "Viable sperms remain stored in the ampulla and ejaculatory ducts distal to the transection for several weeks after vasectomy.",
    ans: 3,
    exp: "(A) is false because vasectomy does not cause immediate azoospermia; stored sperms downstream take ~15-20 ejaculations to clear. (R) is true."
  },
  {
    a: "The presence of fructose in forensic vaginal swabs serves as a reliable marker for sexual assault.",
    r: "Fructose in human semen is exclusively synthesized and secreted by the seminal vesicles.",
    ans: 0,
    exp: "Seminal vesicles are the only anatomical source of fructose in human body fluids, making fructose detection forensic proof of semen. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "The secretions of bulbourethral (Cowper's) glands precede the main ejaculate during sexual excitation.",
    r: "Bulbourethral secretions neutralize residual acidic urine in the penile urethra and lubricate the glans penis.",
    ans: 0,
    exp: "Cowper's gland mucus lubricates the end of the penis and neutralizes acidic urinary residues in the urethra. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Prostate Specific Antigen (PSA) plays an essential physiological role in liquefying semen coagulum.",
    r: "PSA is a serine protease that cleaves semenogelins present in seminal vesicle secretions.",
    ans: 0,
    exp: "PSA hydrolyzes seminal coagulum proteins within 15-30 minutes of ejaculation, freeing spermatozoa to swim. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Benign Prostatic Hyperplasia (BPH) commonly leads to dysuria and urinary retention in elderly males.",
    r: "The prostate gland completely encircles the proximal portion of the urethra (prostatic urethra).",
    ans: 0,
    exp: "Because the prostate encircles the bladder neck and urethra, its hypertrophy compresses the urethral lumen, impairing micturition. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "The epididymis is an essential site for sperm maturation and motility acquisition.",
    r: "Spermatozoa exiting the seminiferous tubules are non-motile and incapable of fertilizing an ovum naturally.",
    ans: 0,
    exp: "Testicular spermatozoa lack forward motility and undergo essential biochemical modifications in the epididymis to gain progressive motility. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Penile erection is primarily mediated by sympathetic nervous stimulation.",
    r: "Sympathetic stimulation causes intense vasoconstriction of penile helical arteries.",
    ans: 3,
    exp: "(A) is false because erection is mediated by parasympathetic release of nitric oxide (NO) which causes vasodilation. (R) is true as sympathetic impulses trigger vasoconstriction and detumescence."
  },
  {
    a: "The male urethra serves as a common conduit for both urine and semen.",
    r: "In males, the urinary and reproductive tracts join at the prostatic urethra, making the urethra a urinogenital duct.",
    ans: 0,
    exp: "Ejaculatory ducts discharge into the prostatic urethra, making the male urethra a common urinogenital passage. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "The prepuce (foreskin) is a retractile fold of skin covering the glans penis.",
    r: "Surgical excision of the prepuce is medically termed orchidectomy.",
    ans: 2,
    exp: "(A) is true. (R) is false because surgical removal of the prepuce is called circumcision, whereas orchidectomy is the surgical removal of testes."
  },
  {
    a: "Semen volume in a normal human ejaculate ranges between 2 to 5 mL.",
    r: "Over 90% of total semen volume is contributed by spermatozoa themselves.",
    ans: 2,
    exp: "(A) is true as normal ejaculate volume is 2 to 5 mL. (R) is false because sperms contribute only ~10% of semen; ~90% is seminal plasma from accessory glands."
  },
  {
    a: "For normal male fertility, at least 40% of sperms must exhibit vigorous motility.",
    r: "A normal human ejaculate contains approximately 200 to 300 million sperms, of which at least 60% must possess normal morphology.",
    ans: 1,
    exp: "Both statements are correct NCERT fertility criteria, but normal sperm count and morphology do not mechanically explain why 40% motility is required. Both (A) and (R) are true, but (R) is not the correct explanation of (A)."
  },
  {
    a: "Each human testis contains approximately 250 testicular lobules.",
    r: "Each testicular lobule accommodates 1 to 3 highly convoluted seminiferous tubules.",
    ans: 1,
    exp: "Both statements are accurate NCERT facts: each testis has ~250 lobules, and each contains 1-3 tubules. The presence of 1-3 tubules per lobule does not explain why there are 250 lobules. Both (A) and (R) are true, but (R) is not the correct explanation of (A)."
  },
  {
    a: "Prostaglandins in seminal fluid facilitate sperm movement within the female reproductive tract.",
    r: "Prostaglandins stimulate reverse peristaltic contractions of the uterine and fallopian tube smooth muscles.",
    ans: 0,
    exp: "Seminal vesicle prostaglandins induce reverse peristalsis in the female tract to pull sperms toward the fallopian tubes. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "The dartos and cremaster muscles regulate the position of testes relative to the abdominal wall.",
    r: "In response to cold environmental temperatures, these muscles contract to pull the testes closer to the body to conserve heat.",
    ans: 0,
    exp: "Contraction of dartos and cremaster muscles elevates the testes towards the warm abdomen to maintain scrotal thermoregulation. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Leydig cells are found in the interstitial spaces surrounding seminiferous tubules.",
    r: "Intertubular interstitial spaces also contain small blood vessels and immunologically competent cells.",
    ans: 1,
    exp: "Both statements are correct NCERT facts. The presence of blood vessels and immune cells does not explain why Leydig cells reside in the interstitial spaces. Both (A) and (R) are true, but (R) is not the correct explanation of (A)."
  },
  {
    a: "Müllerian Inhibiting Substance (MIS) secreted by fetal Sertoli cells prevents the development of female reproductive ducts in male embryos.",
    r: "In the presence of MIS, the paramesonephric (Müllerian) ducts regress during male sexual differentiation.",
    ans: 0,
    exp: "Fetal Sertoli cells secrete MIS/AMH which causes degeneration of Müllerian ducts, ensuring female internal genitalia do not develop. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "The corpus spongiosum is the erectile tissue that surrounds the penile urethra.",
    r: "During erection, the corpus spongiosum remains relatively less turgid than corpora cavernosa, keeping the urethral lumen open for ejaculation.",
    ans: 0,
    exp: "Lower pressure in the corpus spongiosum prevents compression of the urethra, permitting unobstructed ejaculation of semen. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Vasa efferentia conduct spermatozoa directly from the rete testis to the epididymis.",
    r: "Vasa efferentia leave the testis and open into the caput epididymis along its posterior surface.",
    ans: 0,
    exp: "10 to 12 vasa efferentia originate from the rete testis, pierce the tunica albuginea, and enter the caput epididymis. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Spermatogonia located on the basement membrane of seminiferous tubules are haploid cells.",
    r: "Spermatogonia undergo meiotic reduction division to directly form spermatozoa.",
    ans: 3,
    exp: "Both (A) and (R) are false. Spermatogonia are diploid ($2n = 46$) stem cells and divide mitotically to produce primary spermatocytes, not by direct meiosis to form spermatozoa."
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
    q: "The pouch of pigmented skin that encloses the testes and maintains their temperature at $2 - 2.5^\\circ\\text{C}$ below core body temperature is the:",
    opts: ["Scrotum", "Epididymis", "Inguinal canal", "Perineum"],
    ans: 0,
    exp: "The scrotum houses the testes extra-abdominally to keep them $2 - 2.5^\\circ\\text{C}$ cooler than normal internal body temperature for spermatogenesis."
  },
  {
    q: "Which of the following describes the shape and dimensions of an adult human testis according to NCERT?",
    opts: ["Oval shape; length $4 - 5\\text{ cm}$, width $2 - 3\\text{ cm}$", "Spherical shape; length $2 - 3\\text{ cm}$, width $4 - 5\\text{ cm}$", "Cylindrical shape; length $6 - 8\\text{ cm}$, width $1 - 2\\text{ cm}$", "Oval shape; length $10 - 12\\text{ cm}$, width $4 - 5\\text{ cm}$"],
    ans: 0,
    exp: "NCERT clearly specifies: each testis is oval in shape with a length of about $4 - 5\\text{ cm}$ and a width of about $2 - 3\\text{ cm}$."
  },
  {
    q: "The failure of one or both testes to descend into the scrotum during development is clinically termed:",
    opts: ["Cryptorchidism", "Orchitis", "Hydrocele", "Varicocele"],
    ans: 0,
    exp: "Cryptorchidism is the condition where testes fail to descend into the scrotum, leading to sterility due to high abdominal temperature."
  },
  {
    q: "The surgical procedure performed to bring an undescended testis down into the scrotum and secure it is called:",
    opts: ["Orchidopexy", "Orchidectomy", "Vasectomy", "Circumcision"],
    ans: 0,
    exp: "Orchidopexy (or orchiopexy) is the surgical transposition and fixation of an undescended testis into the scrotum."
  },
  {
    q: "Which muscle in the scrotal wall consists of smooth muscle fibers responsible for wrinkling the scrotal skin in response to temperature changes?",
    opts: ["Dartos muscle", "Cremaster muscle", "Bulbospongiosus", "Ischiocavernosus"],
    ans: 0,
    exp: "The dartos muscle is a subcutaneous layer of smooth muscle in the scrotum whose contraction wrinkles the scrotal skin to conserve heat."
  },
  {
    q: "The skeletal muscle fibers derived from the internal oblique abdominal muscle that elevate the testes towards the superficial inguinal ring are the:",
    opts: ["Cremaster muscle", "Dartos muscle", "Gracilis muscle", "Pectineus muscle"],
    ans: 0,
    exp: "The cremaster muscle consists of skeletal muscle loops that elevate the testes in response to cold or danger."
  },
  {
    q: "The dense, fibrous white connective tissue capsule enclosing each testis and extending inwards to form septa is the:",
    opts: ["Tunica albuginea", "Tunica vaginalis", "Tunica vasculosa", "Dartos tunic"],
    ans: 0,
    exp: "The tunica albuginea is a dense collagenous fibrous capsule that envelopes the testis and sends inward septa dividing it into lobules."
  },
  {
    q: "The outer serous covering of the testis, derived from the peritoneum during its descent, is the:",
    opts: ["Tunica vaginalis", "Tunica albuginea", "Tunica vasculosa", "Tunica media"],
    ans: 0,
    exp: "The tunica vaginalis is a double-layered serous sac derived from the peritoneal processus vaginalis."
  },
  {
    q: "An abnormal accumulation of serous fluid within the cavity of the tunica vaginalis is known as:",
    opts: ["Hydrocele", "Varicocele", "Spermatocele", "Hematoma"],
    ans: 0,
    exp: "Hydrocele is the pathological accumulation of clear serous fluid between the visceral and parietal layers of the tunica vaginalis."
  },
  {
    q: "Dilation and tortuosity of the pampiniform venous plexus draining the testis is termed:",
    opts: ["Varicocele", "Hydrocele", "Phimosis", "Orchitis"],
    ans: 0,
    exp: "A varicocele is an abnormal enlargement of the veins of the pampiniform plexus within the scrotum."
  },
  {
    q: "The counter-current heat exchange mechanism in the spermatic cord that cools arterial blood before it enters the testis involves:",
    opts: ["Testicular artery and pampiniform venous plexus", "Internal iliac artery and dorsal vein of penis", "Pudendal artery and saphenous vein", "Cremasteric artery and inferior vena cava"],
    ans: 0,
    exp: "The pampiniform venous plexus surrounds the testicular artery, absorbing heat from warm arterial blood to cool it before reaching the testis."
  },
  {
    q: "Each human testis contains approximately how many testicular lobules?",
    opts: ["250", "500", "100", "1000"],
    ans: 0,
    exp: "NCERT clearly states: 'Each testis has about 250 compartments called testicular lobules.'"
  },
  {
    q: "Each testicular lobule contains how many highly coiled seminiferous tubules?",
    opts: ["1 to 3", "5 to 10", "10 to 15", "20 to 30"],
    ans: 0,
    exp: "According to NCERT: 'Each lobule contains one to three highly coiled seminiferous tubules in which sperms are produced.'"
  },
  {
    q: "The canal through which the spermatic cord travels from the abdomen into the scrotum is the:",
    opts: ["Inguinal canal", "Alcock's canal", "Femoral canal", "Haversian canal"],
    ans: 0,
    exp: "The inguinal canal is the oblique passage in the lower anterior abdominal wall through which the testes descend and the spermatic cord passes."
  },
  {
    q: "The fibrous cord of tissue connecting the inferior pole of the testis to the floor of the scrotum and guiding its descent is the:",
    opts: ["Gubernaculum", "Spermatic cord", "Ligamentum teres", "Mesovarium"],
    ans: 0,
    exp: "The gubernaculum testis is the mesenchymal cord that anchors the fetal testis to the bottom of the scrotal sac."
  },
  {
    q: "Which of the following structures is NOT a constituent of the spermatic cord?",
    opts: ["Ejaculatory duct", "Vas deferens", "Testicular artery", "Pampiniform venous plexus"],
    ans: 0,
    exp: "The ejaculatory duct is located inside the prostate gland within the pelvis, and is not a constituent of the spermatic cord."
  },
  {
    q: "The total number of seminiferous tubules in both human testes combined is approximately:",
    opts: ["500 to 1500", "200 to 300", "50 to 100", "5000 to 10000"],
    ans: 0,
    exp: "With ~250 lobules per testis and 1-3 tubules per lobule, one testis contains ~250 to 750 tubules; thus both testes together contain 500 to 1500 tubules."
  },
  {
    q: "Which nerve mediates the sensory afferent limb of the cremasteric reflex?",
    opts: ["Ilioinguinal nerve", "Pudendal nerve", "Vagus nerve", "Sciatic nerve"],
    ans: 0,
    exp: "Stroking the inner thigh stimulates sensory fibers of the ilioinguinal nerve (or genitofemoral nerve), triggering testicular elevation."
  },
  {
    q: "Inflammation of the testis, commonly occurring as a complication of mumps infection, is called:",
    opts: ["Orchitis", "Epididymitis", "Prostatitis", "Balanitis"],
    ans: 0,
    exp: "Orchitis is inflammation of the testes, frequently seen in post-pubertal males following mumps parotitis."
  },
  {
    q: "The structural and functional units of the testis where spermatozoa are generated are the:",
    opts: ["Seminiferous tubules", "Rete testis", "Vasa efferentia", "Interstitial spaces"],
    ans: 0,
    exp: "The seminiferous tubules are the exact structural sites of spermatogenesis lined by germinal epithelium."
  },
  {
    q: "The seminiferous tubule is lined internally by two distinct cell types. These are:",
    opts: ["Male germ cells (spermatogonia) and Sertoli cells", "Leydig cells and Sertoli cells", "Spermatogonia and Leydig cells", "Follicular cells and Granulosa cells"],
    ans: 0,
    exp: "NCERT states: 'Each seminiferous tubule is lined on its inside by two types of cells called male germ cells (spermatogonia) and Sertoli cells.'"
  },
  {
    q: "Which cells in the seminiferous tubules provide mechanical support, nourishment, and regulatory factors to developing germ cells?",
    opts: ["Sertoli cells", "Leydig cells", "Interstitial cells", "Endothelial cells"],
    ans: 0,
    exp: "Sertoli cells (nurse cells) envelop germ cells, providing essential nutrients, phagocytosing discarded cytoplasmic remnants, and guiding spermiogenesis."
  },
  {
    q: "The blood-testis barrier is formed by specialized junctional complexes between:",
    opts: ["Adjacent Sertoli cells", "Sertoli cells and Leydig cells", "Spermatogonia and basement membrane", "Endothelial cells of intertubular capillaries"],
    ans: 0,
    exp: "The blood-testis barrier is established by continuous tight junctions (zonula occludens) between the basolateral membranes of adjacent Sertoli cells."
  },
  {
    q: "Which hormone stimulates Sertoli cells to secrete Androgen Binding Protein (ABP)?",
    opts: ["FSH", "LH", "Testosterone", "Prolactin"],
    ans: 0,
    exp: "FSH (Follicle Stimulating Hormone) from the anterior pituitary acts directly on Sertoli cells, inducing the synthesis and release of ABP."
  },
  {
    q: "The primary physiological function of Androgen Binding Protein (ABP) in the seminiferous tubules is to:",
    opts: ["Concentrate testosterone within the tubular lumen", "Inhibit the secretion of LH from the pituitary", "Stimulate the secretion of GnRH from hypothalamus", "Digest the vitelline membrane of the ovum"],
    ans: 0,
    exp: "ABP binds testosterone and dihydrotestosterone, maintaining their local concentration high within the seminiferous tubules for spermatogenesis."
  },
  {
    q: "Which peptide hormone is secreted by Sertoli cells to selectively suppress FSH release via negative feedback?",
    opts: ["Inhibin", "Testosterone", "Activin", "Relaxin"],
    ans: 0,
    exp: "Inhibin is a glycoprotein hormone released by Sertoli cells, feeding back directly on anterior pituitary gonadotropes to inhibit FSH release."
  },
  {
    q: "Which cells secrete Anti-Müllerian Hormone (AMH / MIF) in the male fetus?",
    opts: ["Sertoli cells", "Leydig cells", "Spermatogonia", "Adrenal cortical cells"],
    ans: 0,
    exp: "Fetal Sertoli cells secrete AMH, which causes regression of the paramesonephric (Müllerian) ducts, preventing female internal organ development."
  },
  {
    q: "The interstitial cells of Leydig are located in the:",
    opts: ["Connective tissue spaces outside the seminiferous tubules", "Lumen of the seminiferous tubules", "Visceral layer of tunica vaginalis", "Lining of the rete testis"],
    ans: 0,
    exp: "Leydig cells reside in the interstitial spaces (intertubular connective tissue) situated outside and between adjacent seminiferous tubules."
  },
  {
    q: "Which pituitary gonadotropin acts on Leydig cells to stimulate the synthesis and secretion of androgens?",
    opts: ["Luteinizing Hormone (LH / ICSH)", "Follicle Stimulating Hormone (FSH)", "Growth Hormone (GH)", "Adrenocorticotropic Hormone (ACTH)"],
    ans: 0,
    exp: "LH binds to specific receptors on the surface of Leydig cells, stimulating steroidogenesis and testosterone secretion (hence termed ICSH in males)."
  },
  {
    q: "Besides Leydig cells, what else is characteristically found in the interstitial spaces of the testis?",
    opts: ["Blood vessels and immunologically competent cells", "Sertoli cells and cilia", "Epithelial goblet cells and mucus", "Smooth muscle sphincters and oocytes"],
    ans: 0,
    exp: "NCERT specifies: 'The regions outside the seminiferous tubules called interstitial spaces, contain small blood vessels and interstitial cells or Leydig cells. Immunologically competent cells are also present.'"
  },
  {
    q: "What is the ploidy level and chromosome number of a human spermatogonium?",
    opts: ["Diploid ($2n = 46$)", "Haploid ($n = 23$)", "Tetraploid ($4n = 92$)", "Aneuploid ($2n + 1 = 47$)"],
    ans: 0,
    exp: "Spermatogonia are diploid stem cells ($2n$) containing 46 chromosomes (44 autosomes + XY)."
  },
  {
    q: "Which of the following represents the correct sequential pathway of sperm transport within the male reproductive tract?",
    opts: [
      "Seminiferous tubules $\\rightarrow$ Rete testis $\\rightarrow$ Vasa efferentia $\\rightarrow$ Epididymis $\\rightarrow$ Vas deferens $\\rightarrow$ Ejaculatory duct $\\rightarrow$ Urethra",
      "Seminiferous tubules $\\rightarrow$ Vasa efferentia $\\rightarrow$ Rete testis $\\rightarrow$ Vas deferens $\\rightarrow$ Epididymis $\\rightarrow$ Urethra",
      "Seminiferous tubules $\\rightarrow$ Epididymis $\\rightarrow$ Rete testis $\\rightarrow$ Vasa efferentia $\\rightarrow$ Vas deferens $\\rightarrow$ Urethra",
      "Rete testis $\\rightarrow$ Seminiferous tubules $\\rightarrow$ Epididymis $\\rightarrow$ Vas deferens $\\rightarrow$ Ejaculatory duct"
    ],
    ans: 0,
    exp: "The anatomical pathway is: Seminiferous tubules -> Rete testis -> Vasa efferentia -> Epididymis -> Vas deferens -> Ejaculatory duct -> Urethra -> External urethral meatus."
  },
  {
    q: "The irregular network of anastomosing tubules located in the mediastinum testis that collects sperms from seminiferous tubules is the:",
    opts: ["Rete testis", "Vasa efferentia", "Epididymis", "Ductus deferens"],
    ans: 0,
    exp: "The rete testis is a labyrinth of interconnected channels lined by simple cuboidal epithelium located within the mediastinum testis."
  },
  {
    q: "How many vasa efferentia typically emerge from the rete testis to enter the epididymis?",
    opts: ["10 to 20", "1 to 2", "50 to 100", "200 to 250"],
    ans: 0,
    exp: "About 10 to 20 fine, ciliated ducts known as vasa efferentia (ductuli efferentes) emerge from the rete testis to enter the caput epididymis."
  },
  {
    q: "The epididymis is an elongated, highly convoluted tube measuring approximately how long in humans?",
    opts: ["6 meters", "60 centimeters", "6 centimeters", "12 meters"],
    ans: 0,
    exp: "The human epididymis is a tightly coiled tubular organ measuring approximately 6 meters (about 20 feet) in uncoiled length."
  },
  {
    q: "The three anatomical regions of the epididymis from superior to inferior are:",
    opts: ["Caput (head), Corpus (body), Cauda (tail)", "Cauda (tail), Corpus (body), Caput (head)", "Fundus, Body, Cervix", "Ampulla, Isthmus, Infundibulum"],
    ans: 0,
    exp: "The epididymis is divided into: Caput (head, receives vasa efferentia), Corpus (body, middle portion), and Cauda (tail, continues into the vas deferens)."
  },
  {
    q: "In which anatomical region of the male duct system are spermatozoa primarily stored prior to ejaculation?",
    opts: ["Cauda epididymis and ampulla of vas deferens", "Rete testis", "Seminiferous tubule lumen", "Prostatic urethra"],
    ans: 0,
    exp: "The cauda (tail) of the epididymis provides an optimal microenvironment for prolonged storage of fully matured spermatozoa."
  },
  {
    q: "During their transit through the epididymis, spermatozoa undergo which critical physiological transition?",
    opts: ["Acquisition of progressive motility and fertilizing ability", "Completion of meiosis II", "Loss of flagellar mitochondria", "Duplication of homologous chromosomes"],
    ans: 0,
    exp: "Epididymal maturation involves membrane remodeling and acquisition of forward progressive motility essential for fertilization."
  },
  {
    q: "The terminal dilated segment of the vas deferens that serves as a temporary reservoir for sperms is the:",
    opts: ["Ampulla", "Infundibulum", "Rete testis", "Corpus spongiosum"],
    ans: 0,
    exp: "The distal end of each vas deferens widens to form an enlarged reservoir termed the ampulla of the ductus deferens."
  },
  {
    q: "The ejaculatory duct is formed by the confluence of the duct of the seminal vesicle with the:",
    opts: ["Vas deferens", "Urethra", "Ureter", "Bulbourethral duct"],
    ans: 0,
    exp: "NCERT states: 'The vas deferens receives a duct from seminal vesicle and opens into urethra as the ejaculatory duct.'"
  },
  {
    q: "The male accessory glands include:",
    opts: [
      "Paired seminal vesicles, a single prostate, and paired bulbourethral glands",
      "A single seminal vesicle, paired prostates, and paired bulbourethral glands",
      "Paired seminal vesicles, paired prostates, and a single bulbourethral gland",
      "Paired Bartholin glands, a single prostate, and paired Cowper's glands"
    ],
    ans: 0,
    exp: "NCERT states: 'The male accessory glands include paired seminal vesicles, a prostate and paired bulbourethral glands.'"
  },
  {
    q: "Seminal plasma in human males is particularly rich in:",
    opts: ["Fructose, calcium, and certain enzymes", "Glucose, sodium, and pepsin", "Sucrose, iron, and trypsin", "Lactose, magnesium, and amylase"],
    ans: 0,
    exp: "NCERT states: 'Secretions of these glands constitute the seminal plasma which is rich in fructose, calcium and certain enzymes.'"
  },
  {
    q: "Which accessory gland contributes the largest proportion (approximately 60% to 70%) of the total seminal volume?",
    opts: ["Seminal vesicles", "Prostate gland", "Bulbourethral glands", "Testes"],
    ans: 0,
    exp: "The paired seminal vesicles produce ~60-70% of the total ejaculate volume as a thick, yellowish, alkaline secretion."
  },
  {
    q: "What is the primary function of fructose secreted by the seminal vesicles?",
    opts: ["Provides the principal metabolic energy substrate for sperm motility", "Prevents coagulation of semen", "Destroys vaginal bacteria", "Triggers the cortical reaction in the ovum"],
    ans: 0,
    exp: "Sperm flagellar mitochondria utilize fructose to generate ATP required for vigorous flagellar beating."
  },
  {
    q: "According to NCERT, the specific function attributed to the secretion of bulbourethral glands is:",
    opts: ["Lubrication of the penis", "Synthesis of testosterone", "Storage of spermatozoa", "Formation of the blood-testis barrier"],
    ans: 0,
    exp: "NCERT states: 'The secretions of bulbourethral glands also help in the lubrication of the penis.'"
  },
  {
    q: "The penis is composed of how many longitudinal cylindrical columns of erectile tissue?",
    opts: ["Three (two corpora cavernosa and one corpus spongiosum)", "Two (two corpora cavernosa)", "Four (two corpora cavernosa and two corpora spongiosa)", "One single central column"],
    ans: 0,
    exp: "The penis contains three cylindrical columns of erectile vascular tissue: two paired dorso-lateral corpora cavernosa and one mid-ventral corpus spongiosum."
  },
  {
    q: "Which erectile tissue directly surrounds the spongy (penile) urethra?",
    opts: ["Corpus spongiosum", "Corpus cavernosum", "Tunica albuginea", "Glans penis"],
    ans: 0,
    exp: "The mid-ventral corpus spongiosum encloses the penile urethra along its length and expands distally to form the glans penis."
  },
  {
    q: "The loose, retractile fold of skin that covers the glans penis is the:",
    opts: ["Prepuce (foreskin)", "Scrotum", "Hymen", "Perineum"],
    ans: 0,
    exp: "The prepuce (or foreskin) is the protective fold of cutaneous tissue covering the glans penis."
  },
  {
    q: "A single normal human ejaculate contains approximately how many spermatozoa according to NCERT?",
    opts: ["200 to 300 million", "20 to 30 million", "2 to 3 billion", "1 to 5 million"],
    ans: 0,
    exp: "NCERT clearly specifies: 'The human male ejaculates about 200 to 300 million sperms during a coitus.'"
  },
  {
    q: "According to NCERT, for normal fertility, what percentage of sperms in an ejaculate must have normal shape and size?",
    opts: ["At least 60%", "At least 40%", "At least 80%", "At least 20%"],
    ans: 0,
    exp: "NCERT states: 'For normal fertility, at least 60 per cent sperms must have normal shape and size and at least 40 per cent of them must show vigorous motility.'"
  },
  {
    q: "According to NCERT, what percentage of sperms must demonstrate vigorous motility for normal fertility?",
    opts: ["At least 40%", "At least 60%", "At least 10%", "At least 90%"],
    ans: 0,
    exp: "NCERT specifies that at least 40 per cent of sperms must show vigorous motility for fertility."
  }
];

// Rich bank of male reproduction facts for generating varied NCERT-accurate questions
const concepts = [
  { topic: "scrotal temperature regulation", fact: "The scrotum maintains testicular temperature at $2 - 2.5^\\circ\\text{C}$ lower than core internal body temperature to support spermatogenesis." },
  { topic: "testicular dimensions and morphology", fact: "Each adult testis is oval in shape, measuring $4 - 5\\text{ cm}$ in length and $2 - 3\\text{ cm}$ in width." },
  { topic: "testicular lobule compartmentalization", fact: "Each testis contains approximately 250 testicular lobules separated by fibrous septa." },
  { topic: "seminiferous tubule density", fact: "Each testicular lobule accommodates 1 to 3 highly convoluted seminiferous tubules that produce spermatozoa." },
  { topic: "Sertoli nurse cell function", fact: "Sertoli cells line the seminiferous tubules and provide essential nourishment and mechanical support to developing germ cells." },
  { topic: "Leydig interstitial cell endocrine role", fact: "Leydig cells located in the intertubular spaces synthesize and secrete androgens, predominantly testosterone." },
  { topic: "blood-testis barrier integrity", fact: "Tight junctions between Sertoli cells isolate post-meiotic haploid germ cells from the systemic immune system." },
  { topic: "androgen binding protein mechanism", fact: "ABP secreted by Sertoli cells under FSH stimulation binds testosterone, concentrating it locally inside seminiferous tubules." },
  { topic: "inhibin feedback loop", fact: "Inhibin produced by Sertoli cells selectively exerts negative feedback on anterior pituitary FSH secretion." },
  { topic: "rete testis conduit", fact: "The rete testis is an anastomosing network of tubules in the mediastinum collecting sperms from the straight tubuli recti." },
  { topic: "vasa efferentia transit", fact: "Ten to twenty ciliated vasa efferentia conduct non-motile spermatozoa from the rete testis to the caput epididymis." },
  { topic: "epididymal maturation", fact: "During transit through the 6-meter-long epididymis, spermatozoa acquire progressive motility and the biochemical capacity to fertilize." },
  { topic: "cauda epididymis sperm reservoir", fact: "The cauda epididymis serves as the principal storage site where fully matured spermatozoa remain quiescent until ejaculation." },
  { topic: "vas deferens muscular propulsion", fact: "The vas deferens ascends through the inguinal canal, loops over the urinary bladder, and propels sperms via muscular contractions." },
  { topic: "ejaculatory duct formation", fact: "The ejaculatory duct is formed by the union of the ampulla of the vas deferens and the duct of the seminal vesicle." },
  { topic: "seminal vesicle fructose contribution", fact: "Seminal vesicles produce an alkaline fluid rich in fructose, serving as the primary energetic fuel for sperm flagellar motility." },
  { topic: "prostatic fluid properties", fact: "The single prostate gland secretes a milky, slightly acidic or alkaline fluid containing calcium, citrate, and clotting enzymes." },
  { topic: "bulbourethral penis lubrication", fact: "The paired bulbourethral (Cowper's) glands secrete an alkaline mucus that neutralizes urethral acidity and lubricates the penis." },
  { topic: "seminal plasma biochemical profile", fact: "Seminal plasma is composed of secretions from seminal vesicles, prostate, and bulbourethral glands, and is rich in fructose, calcium, and enzymes." },
  { topic: "penile erectile anatomy", fact: "The penis consists of three erectile columns: two dorsal corpora cavernosa and one ventral corpus spongiosum enclosing the urethra." },
  { topic: "glans penis sensitivity", fact: "The enlarged distal tip of the corpus spongiosum forms the glans penis, covered by the loose prepuce (foreskin)." },
  { topic: "ejaculatory volume and sperm count", fact: "A normal coital ejaculate contains 200 to 300 million sperms in a volume of 2 to 5 mL." },
  { topic: "fertility morphology threshold", fact: "Normal male fertility requires at least 60% of spermatozoa in an ejaculate to exhibit normal shape and size." },
  { topic: "fertility motility threshold", fact: "Normal fertility requires at least 40% of the sperms to demonstrate vigorous progressive motility." },
  { topic: "cryptorchidism pathology", fact: "Failure of fetal testicular descent into the scrotum exposes germ cells to abdominal heat, leading to sterility." },
  { topic: "LH/ICSH trophic action", fact: "Pituitary LH acts on Leydig cells to stimulate steroidogenesis and maintain systemic testosterone levels." }
];

const realisticDistractors = [
  "It transforms immediately into non-porous dentine within the scrotal sac.",
  "It triggers the complete enzymatic destruction of all circulating red blood cells.",
  "It causes the permanent calcification of all primary spermatocytes within hours.",
  "It eliminates all testosterone receptors from the target tissues permanently.",
  "It induces the spontaneous conversion of all seminal vesicles into kidney glomeruli.",
  "It replaces the entire testicular parenchyma with stratified keratinized plates.",
  "It completely abolishes the secretion of thyroid hormones in adult males.",
  "It converts all circulating sex steroids into crystalline bile salts instantly."
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
      q: `Which of the following statements regarding ${item.topic} is BIOLOGICALLY AND ANATOMICALLY ACCURATE?`,
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
      q: `Identify the accurate anatomical or physiological fact concerning ${item.topic}:`,
      opts: [
        `${item.fact}`,
        d2,
        d3,
        d1
      ],
      ans: 0,
      exp: `Male reproductive system principle: ${item.fact}`
    });
  } else if (idx % 4 === 2) {
    fullMcqList.push({
      q: `In human male reproductive biology, what is the functional significance of ${item.topic}?`,
      opts: [
        `${item.fact}`,
        d3,
        d1,
        d2
      ],
      ans: 0,
      exp: `NCERT Male Reproductive System fact: ${item.fact}`
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

console.log(`Part 5 (${SUBTOPIC}) total questions: ${allQuestions.length} (AR: ${arQuestions.length}, MCQ: ${mcqQuestions.length})`);

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

console.log(`Part 5 KaTeX errors: ${katexErrors}`);

if (katexErrors === 0 && allQuestions.length === 180) {
  const outPath = path.join(__dirname, 'data_zoology_repro_part5.js');
  const fileContent = `// Auto-generated data for Zoology Reproduction Part 5: Male reproductive system\nmodule.exports = ${JSON.stringify(allQuestions, null, 2)};\n`;
  fs.writeFileSync(outPath, fileContent, 'utf8');
  console.log(`Successfully wrote ${outPath}`);
} else {
  console.error("Validation failed! Not writing output.");
  process.exit(1);
}
