const fs = require('fs');
const path = require('path');
const katex = require('katex');

const SUBTOPIC = "Innate and acquired immunity, vaccination, and AIDS";
const CHAPTER = "Biology and Human Welfare";
const SUBJECT = "Zoology";

const arDirections = "Directions: In each of the following questions, a statement of Assertion (A) is given followed by a corresponding statement of Reason (R). Select the correct answer from the options given below:\n(a) Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.\n(b) Both Assertion and Reason are true, but Reason is not the correct explanation of Assertion.\n(c) Assertion is true, but Reason is false.\n(d) Assertion is false, but Reason is true.";

const arOptions = [
  "Both Assertion and Reason are true, and Reason is the correct explanation of Assertion.",
  "Both Assertion and Reason are true, but Reason is not the correct explanation of Assertion.",
  "Assertion is true, but Reason is false.",
  "Assertion is false, but Reason is true."
];

const arData = [
  {
    a: "Mucus coating of the epithelium lining the respiratory, gastrointestinal, and urogenital tracts is categorized as a physical barrier of innate immunity.",
    r: "Mucus physically traps microbes entering these tracts, preventing them from accessing and adhering to underlying epithelial host cells.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason is the correct explanation. The mucus secreted by goblet cells provides a sticky physical barrier that traps invading pathogens, which are then cleared by ciliary action or peristalsis."
  },
  {
    a: "Hydrochloric acid secreted by gastric parietal cells and lysozyme present in human tears serve as physiological barriers of innate immunity.",
    r: "These secretions create hostile chemical environments and enzymatically degrade microbial cell walls, preventing microbial colonization.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason is the correct explanation. Gastric acid ($HCl$, pH 1.5-2.0) kills ingested bacteria, while lysozyme in saliva and tears hydrolyzes peptidoglycan bonds in bacterial cell walls."
  },
  {
    a: "Polymorphonuclear leukocytes (PMNL-neutrophils) and monocytes provide cellular barriers in innate immunity.",
    r: "These circulating white blood cells can phagocytose, ingest, and destroy invading foreign microorganisms in blood and extravascular tissues.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason is the correct explanation. PMNL-neutrophils and monocytes/macrophages act as cellular barriers by rapidly migrating to infection sites and destroying pathogens via phagocytosis."
  },
  {
    a: "Virus-infected cells secrete proteins called interferons to protect neighboring non-infected cells from viral infection.",
    r: "Interferons belong to the cytokine barriers of innate immunity and induce an antiviral state in neighboring uninfected cells.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason is the correct explanation. Interferons (IFN-alpha and IFN-beta) are cytokine barriers that trigger neighboring cells to produce enzymes that inhibit viral protein synthesis and degrade viral RNA."
  },
  {
    a: "Acquired immunity is characterized by immunological memory.",
    r: "When the body encounters a pathogen for the first time, it produces a slow, low-intensity primary response and generates memory B and T cells.",
    ans: 1,
    exp: "Both Assertion and Reason are true, but Reason is not the complete explanation of why memory exists; memory is specifically due to the long-term survival of primed memory lymphocytes that enable a rapid, heightened secondary (anamnestic) response upon re-encounter."
  },
  {
    a: "The secondary (anamnestic) immune response to a previously encountered pathogen is rapid and highly intensified.",
    r: "The human immune system retains memory of the first encounter and immediately activates pre-existing memory B and T lymphocytes.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason correctly explains that pre-existing memory B and T cells rapidly proliferate and differentiate into effector cells upon subsequent exposure, producing massive antibody titers."
  },
  {
    a: "Humoral immune response is mediated by antibodies circulating in body fluids such as blood and lymph.",
    r: "B lymphocytes themselves do not directly phagocytose bacteria, but differentiate into plasma cells that produce an army of specific antibody proteins.",
    ans: 1,
    exp: "Both Assertion and Reason are true, but Reason explains the cellular origin of antibodies rather than why it is termed 'humoral' (which is termed humoral because antibodies are released into humor/body fluids)."
  },
  {
    a: "Cell-Mediated Immunity (CMI) is primarily responsible for the graft rejection observed following human organ transplants.",
    r: "Cytotoxic T lymphocytes can distinguish non-self MHC antigens expressed on the transplanted allograft and initiate targeted cytotoxic destruction.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason is the correct explanation. T lymphocytes recognize non-self allogeneic MHC molecules on graft tissue, releasing perforins and granzymes that cause vascular damage and graft rejection."
  },
  {
    a: "Patients undergoing organ transplantation must take immunosuppressive drugs like cyclosporin A for the rest of their lives.",
    r: "Immunosuppressants selectively inhibit T-lymphocyte activation and cytokine production, preventing cell-mediated graft rejection.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason correctly explains that lifelong immunosuppression suppresses T-cell-mediated alloreactivity, preserving graft function."
  },
  {
    a: "Injecting preformed antibodies or antitoxins during a tetanus infection provides artificial passive immunity.",
    r: "Tetanus toxin acts rapidly, so immediate protection is required without waiting for the host's active immune system to produce antibodies.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason correctly explains that in fulminant or acute toxin exposure, preformed antitoxin must be administered immediately because active antibody synthesis is too slow."
  },
  {
    a: "Colostrum secreted by the mother during the initial days of lactation provides passive immunity to the newborn infant.",
    r: "Colostrum contains abundant amounts of secretory IgA antibodies that protect the infant's gut against enteric pathogens.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason correctly explains that maternal IgA in colostrum provides immediate mucosal passive protection to the infant's developing gastrointestinal tract."
  },
  {
    a: "Vaccination generates long-lasting active immunity against specific infectious diseases.",
    r: "Vaccines introduce live, virulent pathogens directly into the bloodstream to trigger maximal destructive systemic infection.",
    ans: 2,
    exp: "Assertion is true, but Reason is false. Vaccines introduce killed, attenuated (weakened) pathogens, or harmless antigenic subunits/toxoids, never virulent live pathogens capable of causing lethal systemic infection."
  },
  {
    a: "Recombinant Hepatitis B vaccine is produced using genetically engineered baker's yeast, Saccharomyces cerevisiae.",
    r: "Recombinant DNA technology allows the large-scale production of Hepatitis B surface antigen (HBsAg) in yeast expression vectors.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason correctly explains that the HBsAg gene is cloned and expressed in yeast, enabling safe and abundant production of the recombinant vaccine."
  },
  {
    a: "Allergic reactions are mediated predominantly by immunoglobulin E (IgE) antibodies.",
    r: "Allergen binding cross-links IgE molecules bound to Fc-epsilon receptors on tissue mast cells, triggering the exocytosis of histamine and serotonin.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason is the correct explanation. Cross-linking of surface-bound IgE by multivalent allergens causes explosive mast cell degranulation with rapid release of histamine and serotonin."
  },
  {
    a: "Administration of antihistamines, adrenaline, and corticosteroids rapidly alleviates the acute symptoms of allergy and anaphylaxis.",
    r: "These pharmacological agents counteract the vasodilatory, bronchoconstrictive, and inflammatory effects induced by mast cell mediators.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason correctly explains that antihistamines block H1 receptors, adrenaline stimulates alpha/beta adrenergic receptors (vasoconstriction and bronchodilation), and steroids suppress inflammation."
  },
  {
    a: "Rheumatoid arthritis is classified as an autoimmune disease.",
    r: "In rheumatoid arthritis, the body's immune system fails to recognize self-antigens and attacks synovial tissues, causing chronic joint inflammation.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason correctly explains that breakdown of self-tolerance causes autoreactive T and B cells to produce rheumatoid factor and attack synovial joints."
  },
  {
    a: "Human Immunodeficiency Virus (HIV) is categorized as a retrovirus.",
    r: "HIV possesses an RNA genome enclosed by an envelope and uses the enzyme reverse transcriptase to synthesize a DNA copy within the host cell.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason is the correct explanation. Retroviruses are RNA viruses that replicate via a DNA intermediate synthesized by RNA-dependent DNA polymerase (reverse transcriptase)."
  },
  {
    a: "HIV infection is transmitted through normal casual social contacts like shaking hands, hugging, or sharing utensils.",
    r: "HIV is an airborne droplet virus that spreads through respiratory aerosol particles produced during coughing and sneezing.",
    ans: 3,
    exp: "Assertion is false, and Reason is false (option d). HIV is not transmitted by casual touch, hugging, or sharing utensils, nor is it an airborne virus; it spreads exclusively through infected body fluids (blood, semen, vaginal secretions, breast milk)."
  },
  {
    a: "During HIV infection in humans, macrophages act as an 'HIV factory'.",
    r: "HIV enters macrophages where viral RNA is reverse-transcribed into viral DNA, and macrophages continuously produce new viral progeny without immediately dying.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason is the correct explanation. Unlike CD4+ T helper cells which are rapidly depleted, macrophages sustain continuous viral replication, acting as a major persistent viral reservoir."
  },
  {
    a: "An individual suffering from advanced AIDS often succumbs to opportunistic infections by Mycobacterium, Toxoplasma, and Pneumocystis.",
    r: "HIV selectively infects and depletes CD4+ T helper lymphocytes, crippling both cell-mediated immunity and helper signaling for antibody production.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason correctly explains that the progressive loss of CD4+ T cells destroys immune defense against opportunistic pathogens that healthy immune systems easily control."
  },
  {
    a: "Enzyme-Linked Immunosorbent Assay (ELISA) is widely employed as an initial screening test for HIV infection.",
    r: "ELISA detects circulating antibodies produced by the host against HIV viral envelope antigens (such as gp120).",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason is the correct explanation. Screening ELISA detects anti-HIV antibodies in the patient's serum, followed by a confirmatory Western Blot test."
  },
  {
    a: "Anti-retroviral therapy (ART) can cure HIV/AIDS completely and permanently eradicate the virus from the patient's body.",
    r: "Anti-retroviral drugs eradicate the proviral DNA integrated into host genomic DNA across all cellular reservoirs including resting memory T cells.",
    ans: 3,
    exp: "Assertion is false, and Reason is false (option d). Anti-retroviral drugs (reverse transcriptase inhibitors, protease inhibitors) can only prolong life and delay disease progression; they cannot cure AIDS or eliminate integrated provirus from latent reservoirs."
  },
  {
    a: "NACO (National AIDS Control Organisation) in India plays a leading role in preventing the spread of HIV.",
    r: "NACO coordinates public awareness campaigns, ensures safe blood banking, promotes condom usage, and distributes free disposable syringes to high-risk groups.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason is the correct explanation of NACO's proactive preventative public health measures."
  },
  {
    a: "Bone marrow and thymus are recognized as the primary lymphoid organs in the human body.",
    r: "Immature lymphocytes originate, proliferate, and mature into antigen-sensitive lymphocytes within the bone marrow and thymus.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason correctly explains that primary lymphoid organs are the dedicated anatomical sites for lymphocyte generation, maturation, and central tolerance selection."
  },
  {
    a: "The thymus is a lobed organ located near the heart, beneath the breastbone, that remains constant in size throughout human adult life.",
    r: "Thymic involution occurs during childhood, causing the thymus to completely disappear before puberty.",
    ans: 3,
    exp: "Assertion is false, and Reason is false (option d). The thymus is large at birth, continues to grow until puberty, and then undergoes gradual age-related involution (atrophy), reducing significantly in size by old age, but does not completely vanish before puberty."
  },
  {
    a: "The spleen acts as an efficient immunological and hematological filter of the blood.",
    r: "The spleen contains abundant lymphocytes and macrophages that trap blood-borne microorganisms and phagocytose worn-out erythrocytes.",
    ans: 0,
    exp: "Both Assertion and Reason are true, and Reason is the correct explanation. Splenic white pulp traps blood-borne antigens to mount immune responses, while splenic red pulp macrophages clear senescent red blood cells."
  }
];

const mcqData = [];
function addMcq(q, opts, ans, exp) {
  mcqData.push({ q, opts, ans, exp });
}

// 1-10: Innate barriers
addMcq(
  "Which of the following is correctly classified as a physical barrier of innate immunity in humans?",
  ["Skin (stratum corneum) and mucus coating of respiratory epithelium", "Lysozyme in tears and saliva", "Polymorphonuclear leukocytes in blood", "Interferons secreted by virus-infected cells"],
  0,
  "Physical barriers prevent entry of pathogens into the body and include the keratinized skin and the mucus coating of the epithelium lining the respiratory, gastrointestinal, and urogenital tracts."
);

addMcq(
  "Which of the following secretions is an example of a physiological barrier of innate immunity?",
  ["Hydrochloric acid in the stomach", "Mucus in the bronchioles", "Monocytes in connective tissue", "Natural killer lymphocytes"],
  0,
  "Physiological barriers include acid in the stomach, saliva in the mouth, and tears from eyes, which inhibit microbial growth chemically."
);

addMcq(
  "The cellular barrier of innate immunity includes which of the following cell types?",
  ["PMNL-neutrophils, monocytes, and Natural Killer (NK) cells", "B lymphocytes only", "Plasma cells only", "Helper T lymphocytes only"],
  0,
  "Cellular barriers of innate immunity consist of phagocytic cells such as PMNL-neutrophils, monocytes, tissue macrophages, and large granular Natural Killer (NK) cells."
);

addMcq(
  "Interferons belong to which category of innate immune defense barriers?",
  ["Cytokine barriers", "Physical barriers", "Physiological barriers", "Cellular barriers"],
  0,
  "Interferons are glycoprotein cytokines secreted by virus-infected host cells that protect neighboring non-infected cells, representing the cytokine barrier."
);

addMcq(
  "Which enzyme present in saliva and tears hydrolyzes bacterial cell walls, providing innate protection?",
  ["Lysozyme", "Pepsin", "Amylase", "Lipase"],
  0,
  "Lysozyme acts as an antibacterial enzyme by hydrolyzing the glycosidic bonds in peptidoglycan of bacterial cell walls, causing osmotic lysis."
);

addMcq(
  "Polymorphonuclear leukocytes (PMNL) are predominantly represented in human peripheral blood by:",
  ["Neutrophils", "Eosinophils", "Basophils", "Lymphocytes"],
  0,
  "PMNLs are characterized by multi-lobed nuclei and granules; neutrophils constitute 60-65% of total circulating leukocytes and are the primary PMNLs."
);

addMcq(
  "Which innate immune cells non-specifically recognize and destroy tumor cells and virus-infected cells without requiring prior sensitization?",
  ["Natural Killer (NK) cells", "Plasma cells", "Erythrocytes", "Memory B cells"],
  0,
  "NK cells are large granular lymphocytes that destroy abnormal, malignant, or virus-infected cells displaying altered or absent MHC class I molecules."
);

addMcq(
  "The low pH ($1.5 - 2.0$) of gastric juice that kills swallowed microorganisms is maintained by secretion of:",
  ["Hydrochloric acid ($HCl$) by parietal (oxyntic) cells", "Bicarbonate by chief cells", "Lactic acid by enterocytes", "Acetic acid by goblet cells"],
  0,
  "Parietal (oxyntic) cells in the gastric glands secrete concentrated hydrochloric acid ($HCl$), creating a highly bactericidal physiological barrier."
);

addMcq(
  "Which barrier of innate immunity is compromised first when a patient suffers extensive third-degree skin burns?",
  ["Physical barrier", "Cytokine barrier", "Humoral barrier", "Cellular barrier"],
  0,
  "Third-degree burns destroy the epidermal and dermal layers of the skin, eliminating the body's primary physical barrier against opportunistic infections like Pseudomonas aeruginosa."
);

addMcq(
  "What is the primary biological function of alpha and beta interferons in antiviral innate immunity?",
  ["Inducing nearby uninfected cells to synthesize enzymes that inhibit viral replication", "Directly neutralizing bacterial exotoxins in the bloodstream", "Stimulating rapid production of secretory IgA", "Promoting histamine exocytosis from mast cells"],
  0,
  "Interferons bind cell-surface receptors on adjacent uninfected cells, inducing synthesis of antiviral proteins (such as PKR and 2',5'-OAS) that block viral mRNA translation."
);

// 11-20: Acquired immunity & cells
addMcq(
  "Which of the following characteristics distinguishes acquired (adaptive) immunity from innate immunity?",
  ["Pathogen-specificity and immunological memory", "Immediate non-specific action within minutes", "Independence from lymphocyte activation", "Absence of clonal expansion"],
  0,
  "Acquired immunity is pathogen-specific, possesses memory, exhibits high diversity, and distinguishes self from non-self."
);

addMcq(
  "The primary immune response produced when the body encounters a pathogen for the very first time is characterized by:",
  ["Low intensity and a lag period before antibody levels rise", "Immediate, extremely high antibody titers", "Sole involvement of cytotoxic T lymphocytes", "Complete absence of IgM production"],
  0,
  "The primary response is characterized by a latency phase and low-intensity antibody production (predominantly IgM followed by IgG) as naive lymphocytes undergo clonal selection."
);

addMcq(
  "A heightened, rapid, and vigorous secondary immune response is also referred to as a/an:",
  ["Anamnestic response", "Allergic reaction", "Tolerogenic response", "Innate response"],
  0,
  "The secondary response is termed an anamnestic response because memory cells quickly recognize the antigen and mount an intense, high-affinity antibody surge."
);

addMcq(
  "Which cells are directly responsible for the humoral immune response by secreting thousands of antibody molecules per second?",
  ["Plasma cells derived from B lymphocytes", "Cytotoxic T lymphocytes", "Tissue mast cells", "Basophils"],
  0,
  "Upon activation and differentiation by antigen, B lymphocytes develop into plasma cells, which are specialized effector cells producing and secreting specific antibodies."
);

addMcq(
  "Cell-mediated immunity (CMI) is primarily mediated by which population of immune cells?",
  ["T lymphocytes", "B lymphocytes", "Erythrocytes", "Thrombocytes"],
  0,
  "Cell-mediated immunity is mediated by T lymphocytes, particularly helper T cells (CD4+) and cytotoxic T cells (CD8+)."
);

addMcq(
  "Tissue matching and blood group matching are mandatory before performing organ transplants in humans to minimize:",
  ["Graft rejection mediated by cell-mediated immunity", "Allergic asthma", "Immediate bacterial sepsis", "Autoimmune destruction of red blood cells"],
  0,
  "Allograft rejection is driven by recipient T cells recognizing foreign Human Leukocyte Antigens (HLA / MHC) on the donor organ; tissue matching reduces this CMI response."
);

addMcq(
  "Which immunosuppressive drug, produced by the fungus Trichoderma polysporum, is administered to organ transplant recipients to prevent graft rejection?",
  ["Cyclosporin A", "Statin", "Penicillin", "Streptokinase"],
  0,
  "Cyclosporin A is a cyclic peptide calcineurin inhibitor that blocks T-cell activation and IL-2 transcription, preventing cell-mediated graft rejection."
);

addMcq(
  "Which molecule on cytotoxic T cells recognizes peptide antigens presented on MHC class I molecules of target cells?",
  ["T-cell receptor (TCR) along with CD8 co-receptor", "B-cell receptor (BCR) along with CD19", "Secretory component", "Fc-epsilon receptor"],
  0,
  "Cytotoxic T cells express TCRs that bind viral or abnormal peptides presented within the groove of MHC class I molecules, assisted by the CD8 co-receptor."
);

addMcq(
  "The immunological ability of higher vertebrates to reject foreign tissue grafts while tolerating their own body tissues illustrates:",
  ["Self vs non-self discrimination", "Innate phagocytic clearance", "Complement tick-over", "Non-specific inflammation"],
  0,
  "The immune system distinguishes 'self' antigens from 'non-self' foreign antigens; foreign allografts are recognized as non-self and attacked."
);

addMcq(
  "Failure of self-tolerance mechanisms resulting in the immune system attacking the body's own cells leads to:",
  ["Autoimmune disease", "Active immunization", "Passive immunization", "Severe combined immunodeficiency"],
  0,
  "When central or peripheral tolerance fails and autoreactive clones attack self-antigens, tissue damage and autoimmune diseases develop."
);

// 21-30: Active vs Passive Immunity
addMcq(
  "When a person produces their own antibodies in response to exposure to living microbes during a natural infection, they develop:",
  ["Natural active immunity", "Natural passive immunity", "Artificial passive immunity", "Artificial active immunity"],
  0,
  "Natural active immunity develops when an individual contracts a disease naturally and their immune system actively produces antibodies and memory cells."
);

addMcq(
  "Vaccination with an attenuated pathogen triggers which category of immunity?",
  ["Artificial active immunity", "Natural passive immunity", "Artificial passive immunity", "Natural active immunity"],
  0,
  "Vaccination deliberately introduces harmless antigens to stimulate the recipient's own immune system to generate antibodies and memory, representing artificial active immunity."
);

addMcq(
  "The yellowish fluid colostrum secreted by the mammary glands during the first few days of lactation confers:",
  ["Natural passive immunity via IgA antibodies", "Artificial active immunity via IgM antibodies", "Natural active immunity via IgG antibodies", "Artificial passive immunity via IgE antibodies"],
  0,
  "Colostrum contains high concentrations of secretory IgA antibodies that are transferred naturally from mother to infant, conferring natural passive immunity."
);

addMcq(
  "Maternal antibodies crossing the placenta to enter fetal circulation provide the developing fetus with:",
  ["Natural passive immunity (IgG)", "Natural active immunity (IgM)", "Artificial active immunity (IgA)", "Artificial passive immunity (IgE)"],
  0,
  "IgG is the only immunoglobulin class that crosses the human placenta via neonatal Fc receptors (FcRn), providing natural passive immunity against infections in utero and during early life."
);

addMcq(
  "Administration of Anti-Tetanus Serum (ATS) immediately after a deep wound provides:",
  ["Artificial passive immunity", "Artificial active immunity", "Natural passive immunity", "Natural active immunity"],
  0,
  "ATS contains preformed polyclonal antibodies against tetanus toxin raised in horses or human donors, providing immediate artificial passive protection."
);

addMcq(
  "Anti-snake venom administered to a snakebite victim is an example of:",
  ["Artificial passive immunization containing preformed antibodies", "Artificial active immunization containing attenuated venom", "Natural passive immunity from maternal milk", "Cell-mediated immune rejection"],
  0,
  "Anti-snake venom provides ready-made, preformed antibodies (neutralizing antivenom) that bind and neutralize snake toxins immediately, exemplifying artificial passive immunity."
);

addMcq(
  "Why is passive immunization preferred over active immunization in acute rabies exposure or venomous snakebites?",
  ["Because active immunity is slow and requires days to develop, whereas toxins act lethally within hours", "Because passive immunity produces lifelong memory cells", "Because vaccines destroy the recipient's bone marrow", "Because passive immunity does not involve any antibodies"],
  0,
  "Active immunization requires days to weeks for naive B cells to proliferate and secrete protective antibody levels, which is far too slow to counter acute deadly toxins or rapid viral spread."
);

addMcq(
  "Which characteristic is unique to active immunity and absent in passive immunity?",
  ["Generation of immunological memory B and T cells", "Immediate neutralization of free circulating toxins", "Transfer of ready-made serum proteins", "Zero risk of serum sickness"],
  0,
  "Active immunity stimulates the host's clonal expansion of B and T lymphocytes, producing long-lasting memory cells; passive immunity provides transient protection without memory."
);

addMcq(
  "Which type of immunity is temporary and declines as the injected or transferred antibodies are metabolized and cleared from circulation?",
  ["Passive immunity", "Active immunity", "Cell-mediated memory immunity", "Innate physical barrier immunity"],
  0,
  "Passive immunity lasts only as long as the donor antibodies remain in the recipient's bloodstream (typically a few weeks to months) because no host memory cells are generated."
);

addMcq(
  "Administration of Rho(D) immune globulin (RhoGAM) to an Rh-negative mother after delivering an Rh-positive baby functions by:",
  ["Passively clearing fetal Rh-positive RBCs before maternal B cells are sensitized, preventing active anti-Rh antibody formation", "Stimulating maternal memory B cells to produce anti-Rh antibodies", "Inducing permanent graft-versus-host tolerance in the mother", "Vaccinating the infant actively against Rh antigens"],
  0,
  "RhoGAM contains passive anti-Rh (anti-D) antibodies that destroy circulating fetal Rh-positive erythrocytes before the mother's immune system can recognize them and mount an active primary immune response."
);

// 31-40: Vaccination principles & modern vaccines
addMcq(
  "The fundamental immunological principle underlying vaccination is:",
  ["Memory of the immune system", "Spontaneous mutation of pathogen antigens", "Inhibition of all phagocytes", "Immediate destruction of host bone marrow"],
  0,
  "Vaccination relies on the adaptive immune system's property of memory; exposure to harmless antigen generates memory cells that mount a rapid secondary response upon future infection."
);

addMcq(
  "A toxoid used in vaccines (such as tetanus toxoid) is best defined as:",
  ["A bacterial exotoxin chemically treated (e.g. with formalin) to eliminate toxicity while retaining immunogenicity", "A virulent living bacterial culture", "An antibody purified from equine serum", "A viral capsid lacking genetic material"],
  0,
  "A toxoid is an inactivated bacterial toxin rendered non-toxic by chemical treatment (formalin) or heat, which still retains its three-dimensional epitopes to stimulate antibody production."
);

addMcq(
  "The recombinant Hepatitis B vaccine approved for human immunization is manufactured using:",
  ["Baker's yeast (Saccharomyces cerevisiae) carrying the HBsAg gene", "Inactivated whole Hepatitis B virions grown in monkey kidneys", "Live attenuated virions harvested from human plasma", "Bacterial toxoids treated with glutaraldehyde"],
  0,
  "The recombinant Hepatitis B vaccine uses the yeast Saccharomyces cerevisiae engineered with recombinant plasmids encoding the Hepatitis B surface antigen (HBsAg)."
);

addMcq(
  "The BCG (Bacillus Calmette-Guérin) vaccine used to protect against tuberculosis is an example of a/an:",
  ["Live attenuated bacterial vaccine", "Inactivated killed viral vaccine", "Recombinant DNA subunit vaccine", "Toxoid preparation"],
  0,
  "BCG is a live attenuated strain of Mycobacterium bovis cultured over hundreds of passages by Calmette and Guérin to lose virulence while retaining immunogenicity."
);

addMcq(
  "The Salk polio vaccine differs fundamentally from the Sabin polio vaccine in that the Salk vaccine is:",
  ["An inactivated (killed) injectable poliovirus vaccine, whereas Sabin is an oral live attenuated vaccine", "An oral live attenuated vaccine, whereas Sabin is a killed vaccine", "A recombinant yeast subunit vaccine", "A toxoid prepared by formalin inactivation of exotoxin"],
  0,
  "Jonas Salk developed the inactivated polio vaccine (IPV) administered by intramuscular injection; Albert Sabin developed the oral polio vaccine (OPV) using live attenuated polioviruses."
);

addMcq(
  "An adjuvant added to certain vaccine formulations (such as alum / aluminum hydroxide) functions to:",
  ["Enhance and prolong the immune response to the co-administered antigen by creating a depot and stimulating innate PRRs", "Directly destroy the host's erythrocytes", "Act as an antiviral antibiotic", "Neutralize stomach acid before absorption"],
  0,
  "Adjuvants nonspecifically enhance the immunogenicity of vaccines by promoting slow antigen release from an injection depot and stimulating local antigen-presenting cells."
);

addMcq(
  "Subunit vaccines contain:",
  ["Specific purified antigenic components (capsular polysaccharides or surface proteins) rather than the whole pathogen", "The entire virulent living pathogen", "Antibodies isolated from convalescent human serum", "Active bacterial endotoxins only"],
  0,
  "Subunit vaccines present only essential immunogenic components (such as surface glycoproteins or capsular polysaccharides) to the immune system, minimizing adverse reactions."
);

addMcq(
  "The phenomenon whereby non-vaccinated individuals are indirectly protected from an infectious disease when a high percentage of the population is immune is termed:",
  ["Herd immunity", "Passive immunity", "Autoimmunity", "Graft-versus-host immunity"],
  0,
  "Herd immunity occurs when high vaccine coverage reduces the overall reservoir of infectious individuals, breaking transmission chains and protecting susceptible individuals."
);

addMcq(
  "MMR vaccine provides active immunization against which three infectious diseases?",
  ["Measles, Mumps, and Rubella", "Malaria, Measles, and Rabies", "Meningitis, Mumps, and Rickets", "Measles, Meningitis, and Ringworm"],
  0,
  "The MMR combination vaccine protects against Measles (rubeola), Mumps (infectious parotitis), and Rubella (German measles) using live attenuated viruses."
);

addMcq(
  "Which vaccine was the very first successful human vaccine developed in history, introduced by Edward Jenner in 1796?",
  ["Smallpox vaccine using cowpox virus (vaccinia)", "Rabies vaccine using desiccated rabbit spinal cords", "Polio vaccine using formalin-inactivated virus", "Tetanus toxoid"],
  0,
  "Edward Jenner inoculated an 8-year-old boy with cowpox fluid from a milkmaid's lesion, demonstrating cross-protective immunity against lethal smallpox."
);

// 41-50: Allergies & Hypersensitivity
addMcq(
  "An exaggerated, inappropriate immune response of the body to normally harmless environmental substances is called:",
  ["Allergy (hypersensitivity)", "Autoimmunity", "Immunodeficiency", "Passive immunization"],
  0,
  "Allergy is an exaggerated immune response to common environmental foreign substances (allergens) that do not elicit responses in most people."
);

addMcq(
  "Substances that induce an allergic response (such as pollen grains, dust mites, and animal dander) are known as:",
  ["Allergens", "Toxoids", "Hormones", "Interferons"],
  0,
  "Allergens are non-parasitic antigens capable of stimulating a Type I hypersensitivity response mediated by IgE antibodies."
);

addMcq(
  "Which class of immunoglobulins is primarily synthesized and elevated in allergic conditions and helminthic infections?",
  ["IgE", "IgM", "IgG", "IgD"],
  0,
  "IgE is produced in high amounts during atopic allergic reactions and helminthic parasite infections, binding tightly to mast cells and basophils."
);

addMcq(
  "Tissue mast cells release which vasoactive mediators upon allergen-induced cross-linking of surface IgE?",
  ["Histamine and serotonin", "Insulin and glucagon", "Pepsin and trypsin", "Thyroxine and calcitonin"],
  0,
  "Mast cell degranulation releases preformed histamine and serotonin, along with newly synthesized leukotrienes and prostaglandins, causing vasodilation and bronchoconstriction."
);

addMcq(
  "Common clinical symptoms of allergic rhinitis (hay fever) and asthma include:",
  ["Sneezing, watery eyes, running nose, and wheezing difficulty in breathing", "Jaundice, clay-colored stools, and ascites", "High fever with chills every 48 hours", "Muscle tremors and rigid spastic paralysis"],
  0,
  "Histamine causes vasodilation, increased mucosal secretions, and bronchial smooth muscle constriction, presenting as sneezing, rhinorrhea, lacrimation, and dyspnea."
);

addMcq(
  "Which drug is considered the first-line, life-saving medication for treating severe systemic anaphylactic shock?",
  ["Adrenaline (epinephrine)", "Penicillin", "Aspirin", "Paracetamol"],
  0,
  "Adrenaline counteracts anaphylactic collapse by stimulating alpha-1 receptors (causing vasoconstriction and raising blood pressure) and beta-2 receptors (causing bronchodilation)."
);

addMcq(
  "Which pharmacological agent suppresses inflammation and mast cell mediator release during severe or chronic allergic attacks?",
  ["Corticosteroids", "Tetanus antitoxin", "Insulin", "Streptokinase"],
  0,
  "Corticosteroids (such as prednisolone) inhibit phospholipase A2 and reduce cytokine gene expression, suppressing the late-phase allergic inflammatory response."
);

addMcq(
  "Why are children raised in overly sanitized, modernized urban environments reporting a higher incidence of allergies and asthma?",
  ["Reduced early-life microbial exposure diminishes immune regulatory training (the Hygiene Hypothesis)", "Excessive natural active immunity gained in infancy", "Complete absence of mast cells in urban children", "Genetically modified food eliminating all IgE"],
  0,
  "According to the Hygiene Hypothesis, modern sterile lifestyles limit early-childhood exposure to diverse environmental microbes, impairing Treg development and predisposing to Th2/IgE allergic responses."
);

addMcq(
  "The skin prick test used in clinical allergy diagnosis functions by:",
  ["Introducing minute amounts of specific allergens into the epidermis to observe localized wheal-and-flare reactions", "Measuring blood glucose concentration following a fast", "Detecting bacterial genomic DNA with PCR", "Determining the erythrocyte sedimentation rate (ESR)"],
  0,
  "In a skin prick test, drops of suspected allergens are introduced into epidermal scratches; localized histamine release produces a diagnostic pruritic wheal-and-flare within 15-20 minutes."
);

addMcq(
  "Asthma is primarily characterized by chronic inflammation of the lower respiratory tract leading to:",
  ["Hyper-responsiveness of bronchi and bronchioles with episodic wheezing and bronchospasm", "Destruction of alveolar walls by elastase", "Fibrotic scarring of the upper nasal septum", "Bacterial consolidation of lung lobules"],
  0,
  "Asthma is an allergic/inflammatory disorder of the airways involving mast cells, eosinophils, and Th2 cells, producing bronchial smooth muscle constriction and excessive mucus."
);

// 51-60: Autoimmunity
addMcq(
  "Autoimmune diseases occur when the immune system fails to recognize:",
  ["Self-antigens from non-self foreign antigens, attacking the body's own tissues", "Bacterial endotoxins", "Viral capsids", "Fungal spores"],
  0,
  "Autoimmunity is defined by the breakdown of immunological self-tolerance, causing autoreactive lymphocytes to attack and damage the body's own healthy cells and organs."
);

addMcq(
  "Rheumatoid arthritis is characterized by chronic inflammation of which anatomical structure?",
  ["Synovial membrane of diarthrodial joints", "Coronary artery tunica intima", "Glomerular basement membrane exclusively", "Alveolar epithelial lining"],
  0,
  "Rheumatoid arthritis is a systemic autoimmune disorder that primarily targets the synovial membranes of joints, forming an invasive pannus that erodes cartilage and bone."
);

addMcq(
  "Rheumatoid factor (RF) detected in the serum of most patients with rheumatoid arthritis is typically an:",
  ["Autoantibody (often IgM) directed against the Fc region of self-IgG", "Antibody against streptococcal cell wall polysaccharides", "Antibody against snake venom proteins", "Antibody against bacterial lipopolysaccharide"],
  0,
  "Rheumatoid factor is an autoantibody (most commonly IgM) that specifically binds the Fc region of the patient's own IgG antibodies, forming pathogenic immune complexes."
);

addMcq(
  "In Myasthenia gravis, autoantibodies bind to and destroy which receptors?",
  ["Nicotinic acetylcholine receptors at the motor endplate of skeletal muscle", "Beta-adrenergic receptors in cardiac myocytes", "Dopamine D2 receptors in the basal ganglia", "Insulin receptors on adipocytes"],
  0,
  "Myasthenia gravis is an antibody-mediated autoimmune disease where autoantibodies block and internalize neuromuscular junction acetylcholine receptors, causing progressive skeletal muscle weakness."
);

addMcq(
  "Hashimoto's thyroiditis is an autoimmune disorder that leads to destruction of thyroid follicles and results in:",
  ["Hypothyroidism with elevated serum TSH levels", "Extreme hyperthyroidism with exophthalmos", "Hypercalcemic tetany", "Diabetes insipidus"],
  0,
  "Hashimoto's thyroiditis is characterized by autoimmune destruction of thyroid parenchyma by anti-TPO antibodies and cytotoxic T cells, causing primary hypothyroidism."
);

addMcq(
  "Which autoimmune condition is caused by autoantibodies that stimulate the TSH receptor, mimicking TSH and driving thyrotoxicosis?",
  ["Graves' disease", "Addison's disease", "Cushing's syndrome", "Hashimoto's thyroiditis"],
  0,
  "Graves' disease involves thyroid-stimulating immunoglobulins (TSI) that act as agonists on the TSH receptor, causing uncontrolled synthesis and secretion of thyroid hormones."
);

addMcq(
  "In Type 1 Diabetes Mellitus, the autoimmune destruction selectively targets which cells?",
  ["Beta cells in the pancreatic Islets of Langerhans", "Alpha cells producing glucagon", "Acinar cells producing pancreatic lipase", "Delta cells producing somatostatin"],
  0,
  "Type 1 Diabetes Mellitus is a T-cell-mediated autoimmune disease that selectively destroys the insulin-producing beta cells of the pancreatic islets."
);

addMcq(
  "Systemic Lupus Erythematosus (SLE) is classically characterized by the presence of high titers of circulating antibodies directed against:",
  ["Double-stranded DNA (anti-dsDNA) and nuclear antigens", "Actin and myosin heavy chains", "Tubulin and dynein motors", "Myelin basic protein only"],
  0,
  "SLE is marked by the production of antinuclear antibodies (ANA) and anti-dsDNA antibodies, which form immune complexes that deposit in skin, kidneys (lupus nephritis), and joints."
);

addMcq(
  "Pernicious anemia is an autoimmune disorder resulting from antibodies that destroy:",
  ["Gastric parietal cells and intrinsic factor", "Erythrocyte membranes in the spleen", "Megakaryocytes in the bone marrow", "Renal tubular cells producing erythropoietin"],
  0,
  "Autoantibodies attack gastric parietal cells and intrinsic factor, preventing dietary vitamin B12 absorption in the ileum and resulting in megaloblastic anemia."
);

addMcq(
  "Guillain-Barré syndrome is an acute autoimmune peripheral neuropathy often triggered following an infection by:",
  ["Campylobacter jejuni", "Vibrio cholerae", "Entamoeba histolytica", "Ascaris lumbricoides"],
  0,
  "Campylobacter jejuni enteritis can trigger Guillain-Barré syndrome through molecular mimicry between lipooligosaccharides on the bacterial surface and human gangliosides in peripheral nerves."
);

// 61-80: Lymphoid organs
addMcq(
  "Which of the following pairs represents the primary lymphoid organs in humans?",
  ["Bone marrow and Thymus", "Spleen and Lymph nodes", "Tonsils and Peyer's patches", "Appendix and MALT"],
  0,
  "Primary lymphoid organs are the bone marrow and thymus, where immature lymphocytes originate, proliferate, and mature into antigen-sensitive B and T cells."
);

addMcq(
  "All circulating blood cells, including both B and T lymphocytes, originate in which tissue in adult humans?",
  ["Bone marrow", "Thymus", "Spleen", "Liver sinusoids"],
  0,
  "Pluripotent hematopoietic stem cells in the red bone marrow are the sole site of origin for all circulating blood cells, including B and T lymphocyte precursors."
);

addMcq(
  "Where do immature T lymphocytes undergo maturation and selection into immunocompetent T cells?",
  ["Thymus", "Bone marrow", "Spleen", "Palatine tonsils"],
  0,
  "Pro-T cells migrate from the bone marrow to the thymus gland, where they undergo TCR gene rearrangement, positive selection, and negative selection."
);

addMcq(
  "What anatomical change happens to the thymus gland as a human progresses from infancy through puberty into old age?",
  ["It is large at birth, grows until puberty, and then undergoes gradual involution, shrinking significantly in old age", "It continuously enlarges throughout entire adult life", "It remains completely identical in mass from birth to death", "It disintegrates completely before the first year of life"],
  0,
  "The thymus reaches its maximum relative size in infancy and peak absolute weight at puberty, after which it undergoes thymic involution and is largely replaced by adipose tissue in old age."
);

addMcq(
  "Which of the following is categorized as a secondary lymphoid organ?",
  ["Spleen", "Thymus", "Red bone marrow", "Yellow bone marrow"],
  0,
  "Secondary lymphoid organs include the spleen, lymph nodes, tonsils, Peyer's patches, appendix, and MALT, where mature lymphocytes encounter antigens and undergo clonal expansion."
);

addMcq(
  "The spleen acts as a 'graveyard' for which blood cell type, destroying old and worn-out specimens?",
  ["Erythrocytes (red blood cells)", "Platelets only", "Neutrophils only", "Basophils only"],
  0,
  "The red pulp of the spleen contains sinusoids and phagocytic macrophages that filter, sequester, and destroy senescent, non-deformable erythrocytes (which have a ~120-day lifespan)."
);

addMcq(
  "Which anatomical component of the spleen is populated primarily by lymphocytes and serves an immune surveillance function for the bloodstream?",
  ["White pulp", "Red pulp", "Splenic cords of Billroth", "Trabeculae"],
  0,
  "The white pulp consists of lymphoid aggregates (periarteriolar lymphoid sheaths and follicles) that mount adaptive immune responses to blood-borne antigens."
);

addMcq(
  "Small solid structures distributed along the lymphatic system that trap microorganisms and foreign antigens present in lymph fluid are:",
  ["Lymph nodes", "Peyer's patches", "Brunner's glands", "Crypts of Lieberkühn"],
  0,
  "Lymph nodes are encapsulated secondary lymphoid organs stationed along lymphatic vessels that filter lymph and trap antigens, facilitating lymphocyte activation."
);

addMcq(
  "What does MALT stand for in immunology?",
  ["Mucosa-Associated Lymphoid Tissue", "Macrophage-Activated Lymphoid Tissue", "Medullary-Associated Lymph Node Tissue", "Myeloid-Activating Lymphoid Tumor"],
  0,
  "MALT stands for Mucosa-Associated Lymphoid Tissue, which is distributed beneath mucosal linings of the digestive, respiratory, and urogenital tracts."
);

addMcq(
  "What proportion of the total lymphoid tissue in the human body is constituted by MALT?",
  ["About 50 percent", "About 5 percent", "About 20 percent", "About 95 percent"],
  0,
  "According to NCERT Class 12 Biology, Mucosa-Associated Lymphoid Tissue (MALT) constitutes about 50% of the lymphoid tissue in the human body."
);

addMcq(
  "Peyer's patches are specialized aggregations of lymphoid follicles located within the submucosa and lamina propria of the:",
  ["Ileum of the small intestine", "Stomach antrum", "Duodenum exclusively", "Ascending colon"],
  0,
  "Peyer's patches are prominent secondary lymphoid structures of the gut-associated lymphoid tissue (GALT) situated in the wall of the ileum."
);

addMcq(
  "Tonsils situated around the pharynx function primarily to:",
  ["Trap inhaled and swallowed pathogens at the entrance of the respiratory and alimentary tracts", "Synthesize intrinsic factor for vitamin B12", "Store large quantities of bile salts", "Produce thyroid-stimulating hormone"],
  0,
  "The tonsils (pharyngeal, palatine, and lingual) form Waldeyer's ring, providing immune surveillance and antibody generation against pathogens entering via the mouth and nose."
);

addMcq(
  "The vermiform appendix attached to the cecum contains abundant lymphoid tissue and functions as a/an:",
  ["Secondary lymphoid organ", "Primary endocrine gland", "Primary lymphoid organ", "Accessory digestive enzyme producer"],
  0,
  "The appendix is rich in lymphoid follicles and serves as a secondary lymphoid organ as well as a safe house for beneficial symbiotic gut flora."
);

addMcq(
  "Which vessel collects filtered lymph from the lower extremities, abdominal viscera, and left side of the upper body, returning it to the venous circulation at the left subclavian vein?",
  ["Thoracic duct", "Right lymphatic duct", "Hepatic portal vein", "Inferior vena cava directly"],
  0,
  "The thoracic duct is the main lymphatic trunk of the body, draining lymph into the junction of the left internal jugular and left subclavian veins."
);

addMcq(
  "In a lymph node, the germinal centers of secondary follicles are the specialized anatomical sites for:",
  ["B-cell proliferation, somatic hypermutation, and affinity maturation", "Thymocyte positive selection", "Erythropoiesis", "Direct destruction of aged red blood cells"],
  0,
  "Germinal centers develop within B-cell follicles following antigen activation and helper T-cell signals; here B cells undergo intense proliferation, somatic hypermutation, and affinity selection."
);

addMcq(
  "Naive circulating T and B lymphocytes migrate from the bloodstream into the paracortex of lymph nodes via specialized blood vessels known as:",
  ["High Endothelial Venules (HEVs)", "Hepatic sinusoids", "Splenic sinusoids", "Fenestrated glomerular capillaries"],
  0,
  "High endothelial venules (HEVs) have plump, cuboidal endothelial cells expressing specific selectins and integrin ligands that mediate the extravasation of recirculating lymphocytes into lymphoid organs."
);

addMcq(
  "Which cells in the follicle-associated epithelium overlying Peyer's patches are specialized to transport luminal antigens directly to underlying lymphoid follicles?",
  ["Microfold (M) cells", "Parietal cells", "Chief cells", "Paneth cells"],
  0,
  "M cells lack surface microvilli and take up intact macromolecules, viruses, and bacteria from the gut lumen via transcytosis, presenting them to underlying dendritic cells and macrophages."
);

addMcq(
  "The surgical removal of the spleen (splenectomy) is clinically associated with a high lifelong risk of:",
  ["Overwhelming post-splenectomy infection (OPSI) caused by encapsulated bacteria like Streptococcus pneumoniae", "Pernicious anemia", "Immediate fatal hypercalcemia", "Aplastic anemia"],
  0,
  "Because the spleen is the primary organ for filtering opsonized encapsulated bacteria (S. pneumoniae, N. meningitidis, H. influenzae) from the blood, splenectomized individuals require prophylactic vaccination against these pathogens."
);

addMcq(
  "The primary site where B-lymphocyte precursors undergo immunoglobulin gene rearrangement and negative selection against self-antigens is the:",
  ["Bone marrow", "Thymus", "Spleen", "Thyroid"],
  0,
  "B-cell development, including heavy and light chain V(D)J rearrangement and clonal deletion/receptor editing of autoreactive immature B cells, takes place in the red bone marrow."
);

addMcq(
  "Which organ produces humoral factors like thymosins that promote lymphocyte differentiation?",
  ["Thymus", "Thyroid", "Parathyroid", "Pancreas"],
  0,
  "Thymic epithelial cells secrete peptide hormones, including thymosins, thymopoietin, and thymulin, which support the differentiation and maturation of T lymphocytes."
);

// 81-110: AIDS: Causative agent, structure, epidemiology
addMcq(
  "What does the acronym AIDS stand for?",
  ["Acquired Immuno Deficiency Syndrome", "Acute Infectious Disease Syndrome", "Active Immunological Disorder Syndrome", "Autoimmune Deficiency Sickness"],
  0,
  "AIDS stands for Acquired Immuno Deficiency Syndrome, signifying a deficiency of the immune system acquired during an individual's lifetime rather than being a congenital defect."
);

addMcq(
  "AIDS was first clinically recognized and reported in the year:",
  ["1981", "1971", "1951", "1991"],
  0,
  "AIDS was first reported in 1981 among young homosexual men in the United States by the CDC, and within decades spread worldwide, infecting over 60 million people."
);

addMcq(
  "The causative organism of AIDS is Human Immunodeficiency Virus (HIV), which belongs to which group of viruses?",
  ["Retrovirus", "Rhabdovirus", "Reovirus", "Rotavirus"],
  0,
  "HIV is a member of the Retroviridae family (genus Lentivirus), characterized by an enveloped diploid single-stranded positive-sense RNA genome."
);

addMcq(
  "The genome of Human Immunodeficiency Virus (HIV) consists of:",
  ["Two identical single-stranded RNA molecules ($ssRNA$)", "One double-stranded DNA molecule ($dsDNA$)", "Two double-stranded RNA molecules ($dsRNA$)", "One circular single-stranded DNA molecule"],
  0,
  "The core of HIV contains two identical copies of positive-sense single-stranded RNA, making the viral genome diploid, associated with nucleocapsid proteins."
);

addMcq(
  "Which viral enzyme packaged within the HIV capsid converts viral RNA into double-stranded complementary DNA (cDNA)?",
  ["Reverse transcriptase (RNA-dependent DNA polymerase)", "DNA-dependent RNA polymerase", "DNA ligase", "Topoisomerase II"],
  0,
  "Reverse transcriptase synthesizes a complementary DNA strand from the viral single-stranded RNA template, followed by synthesis of the second DNA strand to produce double-stranded viral DNA."
);

addMcq(
  "Which major viral surface glycoprotein of HIV binds with high affinity to the CD4 receptor on human host cells?",
  ["gp120", "gp41", "p24", "p17"],
  0,
  "The outer envelope glycoprotein gp120 binds specifically to the CD4 receptor on helper T cells, macrophages, and dendritic cells, while gp41 mediates membrane fusion."
);

addMcq(
  "The viral transmembrane glycoprotein that facilitates fusion between the HIV envelope and the host cell plasma membrane is:",
  ["gp41", "gp120", "p24", "Reverse transcriptase"],
  0,
  "gp41 forms a non-covalent complex with gp120; following gp120 binding to CD4 and chemokine co-receptors (CCR5/CXCR4), gp41 undergoes a conformational change that drives viral-host membrane fusion."
);

addMcq(
  "The major capsid protein of HIV, frequently detected in blood during early acute infection and used in p24 antigen assays, is:",
  ["p24", "p17", "gp120", "gp41"],
  0,
  "p24 is the conical core capsid protein enclosing the viral RNA and enzymes; early detection of circulating p24 antigen allows diagnosis of HIV before antibody seroconversion."
);

addMcq(
  "Which cellular co-receptors are utilized along with CD4 by HIV to gain entry into human host cells?",
  ["Chemokine receptors CCR5 and CXCR4", "Insulin receptor and glucagon receptor", "Acetylcholine receptor and GABA receptor", "Toll-like receptors TLR4 and TLR9"],
  0,
  "HIV requires a coreceptor in addition to CD4: macrophage-tropic (M-tropic / R5) strains use CCR5, while T-tropic (X4) strains use CXCR4."
);

addMcq(
  "Individuals with a homozygous 32-base-pair deletion in which gene ($\Delta 32$) are naturally resistant to infection by R5 strains of HIV-1?",
  ["CCR5", "CD4", "CXCR4", "HLA-B27"],
  0,
  "A 32-base-pair deletion in the CCR5 gene (CCR5-delta32) prevents expression of functional CCR5 coreceptor on macrophages and T cells, rendering homozygous individuals immune to M-tropic HIV-1 infection."
);

addMcq(
  "Which viral enzyme integrates the newly synthesized HIV double-stranded viral DNA into the host cell's nuclear chromosomal DNA?",
  ["Integrase", "Reverse transcriptase", "Protease", "Endonuclease R"],
  0,
  "HIV integrase catalyzes the covalent insertion of proviral double-stranded DNA into the host genome, establishing lifelong persistent infection (provirus state)."
);

addMcq(
  "Which viral enzyme cleaves large precursor polyproteins (gag and gag-pol) into functional structural proteins and enzymes during HIV virion maturation?",
  ["HIV protease", "Amylase", "DNA ligase", "Neuraminidase"],
  0,
  "HIV aspartyl protease cleaves gag and gag-pol polyproteins into mature functional capsid, matrix, reverse transcriptase, and integrase proteins; protease inhibitors block this essential step."
);

addMcq(
  "Which of the following is an established route of transmission for HIV?",
  ["Transfusion of contaminated blood and sharing infected unsterilized hypodermic needles", "Mosquito and insect bites", "Coughing and airborne droplets", "Swimming in public pools"],
  0,
  "HIV is transmitted exclusively via exposure to infected body fluids: sexual intercourse, contaminated blood transfusions, shared needles among intravenous drug users, and mother-to-child transmission."
);

addMcq(
  "Why is HIV NOT transmitted through insect vectors such as mosquitoes or bedbugs?",
  ["The virus cannot replicate within insects and is digested in the insect gut, and insect mouthparts do not inject blood from previous hosts", "Mosquitoes only bite people who are immune to HIV", "Insect saliva contains high titers of antiretroviral drugs", "HIV instantly crystallizes inside insects"],
  0,
  "HIV cannot replicate in invertebrate cells, does not survive in the mosquito digestive tract, and mosquitoes do not inject blood from previous meals; transmission is purely biological."
);

addMcq(
  "Which group of people has the highest risk of contracting HIV infection?",
  ["Individuals with multiple sexual partners and intravenous drug abusers sharing needles", "Vegetarians living in rural communities", "Individuals who exercise regularly", "Schoolchildren who share textbooks"],
  0,
  "High-risk groups include individuals with multiple sexual partners, commercial sex workers, intravenous drug abusers sharing needles, individuals receiving unscreened blood transfusions, and infants born to HIV-infected mothers."
);

addMcq(
  "Can HIV be transmitted from an infected pregnant mother to her child?",
  ["Yes, across the placenta during pregnancy, during delivery, and through breast milk during lactation", "No, the placenta is 100% impermeable to all viral particles at all times", "Only if the infant has an inherited chromosome mutation", "Only through casual skin contact after birth"],
  0,
  "Mother-to-child transmission (vertical transmission) can occur in utero across the placenta, intrapartum during labor and delivery, and postpartum through breastfeeding."
);

addMcq(
  "Can a person acquire HIV infection through casual social interaction such as shaking hands, hugging, or sharing food with an infected individual?",
  ["No, HIV does not spread through touch or casual physical contact; it spreads only through body fluids", "Yes, shaking hands immediately transmits viral capsids across intact skin", "Yes, sharing drinking water causes instantaneous airborne infection", "Yes, HIV can survive for months on dry dining tables"],
  0,
  "HIV is a fragile, enveloped virus that cannot survive environmental desiccation and is not transmitted by touch, hugging, eating together, or social contact."
);

addMcq(
  "What is the typical clinical incubation period between initial HIV infection and the manifestation of full-blown AIDS symptoms?",
  ["Usually 5 to 10 years, though it can range from a few months to several years", "Exactly 24 to 48 hours", "Never more than 2 weeks", "40 to 50 years"],
  0,
  "Following acute viral infection, there is a prolonged asymptomatic latency phase (clinical latency) lasting on average 5 to 10 years, during which CD4+ T cell counts slowly decline."
);

addMcq(
  "Which host immune cells serve as the initial 'factory' for continuous HIV production in the body without immediately being lysed?",
  ["Macrophages", "B lymphocytes", "Erythrocytes", "Platelets"],
  0,
  "Macrophages and monocytes are infected early via CD4 and CCR5; they sustain viral replication without cytolytic destruction, acting as a continuous 'HIV factory' and spreading the virus to the CNS."
);

addMcq(
  "Which vital lymphocyte population is progressively infected, destroyed, and depleted during the course of HIV infection?",
  ["Helper T lymphocytes ($T_H$ / CD4+)", "Cytotoxic T lymphocytes ($T_C$ / CD8+)", "Erythrocytes", "Neutrophils"],
  0,
  "HIV replicates actively inside CD4+ T helper cells, causing syncytium formation, cytopathic lysis, and apoptosis, leading to a catastrophic decline in circulating CD4+ T cells."
);

// 111-135: HIV pathophysiology, opportunistic infections, diagnosis
addMcq(
  "When the CD4+ T-cell count in an HIV-infected patient falls below what threshold is the diagnosis of clinical AIDS typically made?",
  ["Below 200 cells per cubic millimeter of blood ($\\text{cells/mm}^3$)", "Below 2,000 cells/$\\text{mm}^3$", "Below 10,000 cells/$\\text{mm}^3$", "Below 500,000 cells/$\\text{mm}^3$"],
  0,
  "A normal healthy adult has 500-1,500 CD4+ T cells/$\\text{mm}^3$; when the count drops below 200 cells/$\\text{mm}^3$, profound immunodeficiency ensues and the patient meets the criteria for AIDS."
);

addMcq(
  "Due to profound depletion of CD4+ T helper cells, AIDS patients become susceptible to opportunistic infections caused by which protozoan parasite that commonly affects the brain?",
  ["Toxoplasma gondii", "Entamoeba histolytica", "Plasmodium vivax", "Giardia lamblia"],
  0,
  "Toxoplasma gondii encephalitis is a frequent life-threatening opportunistic central nervous system infection in AIDS patients with CD4 counts below 100 cells/$\\text{mm}^3$."
);

addMcq(
  "Which opportunistic fungal pathogen is a major cause of life-threatening pneumonia in AIDS patients?",
  ["Pneumocystis jirovecii (carinii)", "Saccharomyces cerevisiae", "Rhizopus stolonifer", "Penicillium notatum"],
  0,
  "Pneumocystis jirovecii pneumonia (PCP) is a classic AIDS-defining opportunistic pulmonary fungal infection, characterized by dyspnea, non-productive cough, and diffuse ground-glass infiltrates."
);

addMcq(
  "Which bacterial infection is the single leading cause of death among HIV/AIDS patients worldwide?",
  ["Mycobacterium tuberculosis", "Vibrio cholerae", "Clostridium tetani", "Salmonella typhi"],
  0,
  "Tuberculosis (caused by Mycobacterium tuberculosis) is the most prevalent opportunistic bacterial infection and leading cause of mortality in individuals living with HIV globally."
);

addMcq(
  "Which vascular malignancy caused by Human Herpesvirus 8 (HHV-8) characteristically appears as violaceous, purplish skin lesions in AIDS patients?",
  ["Kaposi's sarcoma", "Burkitt's lymphoma", "Basal cell carcinoma", "Osteosarcoma"],
  0,
  "Kaposi's sarcoma is an AIDS-defining endothelial neoplasm driven by HHV-8 (KSHV), producing characteristic multifocal purplish-brown cutaneous and mucosal plaques and nodules."
);

addMcq(
  "In HIV replication, after viral single-stranded RNA is reverse-transcribed into double-stranded DNA, this viral DNA is termed a:",
  ["Provirus", "Prion", "Plasmid", "Cosmid"],
  0,
  "Once the double-stranded viral DNA integrates into the host cell's nuclear genome, it is designated as a provirus, replicated faithfully along with host chromosomes during cell division."
);

addMcq(
  "The primary standard serological test widely used for initial screening of blood samples for HIV antibodies is:",
  ["ELISA (Enzyme-Linked Immunosorbent Assay)", "Widal test", "Mantoux test", "Northern blotting"],
  0,
  "ELISA is the universally recommended first-line screening test for HIV due to its high sensitivity in detecting anti-HIV antibodies in serum."
);

addMcq(
  "Which molecular diagnostic technique is used as a confirmatory test to verify the presence of specific antibodies against distinct HIV proteins following a positive screening ELISA?",
  ["Western Blot test", "Southern Blot test", "PCR test for plant viroids", "Gram staining"],
  0,
  "Western blot separates HIV viral proteins by electrophoresis, transfers them to nitrocellulose, and detects specific patient antibodies against viral proteins (gp120, gp41, p24) for confirmation."
);

addMcq(
  "The 'window period' in HIV diagnosis refers to the time interval:",
  ["Between initial infection with HIV and the first detectable appearance of anti-HIV antibodies in the blood", "Between birth and the manifestation of old age", "Between starting antiretroviral drugs and complete eradication of virus", "Between taking a vaccine and death"],
  0,
  "The window period is the phase (typically 2 to 12 weeks) post-infection when an individual is highly infectious, but antibody titers are too low to be detected by standard antibody-based ELISA."
);

addMcq(
  "Which molecular technique allows direct detection of viral genetic material and viral load in an HIV-infected patient during the window period before antibodies appear?",
  ["Reverse Transcription-Polymerase Chain Reaction (RT-PCR)", "Widal agglutination test", "Mantoux intradermal test", "Platelet count test"],
  0,
  "RT-PCR amplifies viral RNA directly from plasma, allowing precise quantification of viral load and detection of acute HIV infection during the seronegative window period."
);

addMcq(
  "Which class of antiretroviral drugs works by directly mimicking natural deoxynucleotides to prematurely terminate the viral DNA chain synthesized by reverse transcriptase?",
  ["Nucleoside Reverse Transcriptase Inhibitors (NRTIs, e.g. Zidovudine / AZT)", "Protease inhibitors (e.g. Ritonavir)", "Integrase strand transfer inhibitors (e.g. Raltegravir)", "CCR5 entry blockers (e.g. Maraviroc)"],
  0,
  "Zidovudine (AZT) is a thymidine analogue lacking a 3'-OH group; once incorporated into the growing viral DNA chain by reverse transcriptase, it causes chain termination."
);

addMcq(
  "Zidovudine (AZT / azidothymidine) was the first drug approved by the FDA to treat HIV infection; its mechanism is:",
  ["Inhibition of viral reverse transcriptase as an NRTI", "Blocking CD4 receptors on T cells", "Destroying bacterial peptidoglycan walls", "Neutralizing histamine release from mast cells"],
  0,
  "AZT is a nucleoside reverse transcriptase inhibitor (NRTI) that selectively inhibits retroviral reverse transcriptase, suppressing viral replication."
);

addMcq(
  "Why does monotherapy (treatment with a single antiretroviral drug) fail in HIV infection, leading to rapid drug resistance?",
  ["HIV reverse transcriptase lacks proofreading ability ($3'\\rightarrow 5'$ exonuclease), causing a very high mutation rate that generates drug-resistant viral mutants", "HIV synthesizes a thick peptidoglycan capsule that blocks drugs", "Human stomach acid destroys all antiretroviral drugs", "Patients rapidly develop antibodies that destroy the drug"],
  0,
  "Because reverse transcriptase makes frequent replication errors without proofreading, HIV generates massive genetic diversity (quasi-species); single drugs rapidly select for pre-existing resistant mutants."
);

addMcq(
  "Highly Active Antiretroviral Therapy (HAART), or combination antiretroviral therapy (cART), combines at least three drugs from different classes in order to:",
  ["Potently suppress viral replication below detectable levels and prevent the emergence of drug-resistant viral mutations", "Completely eradicate proviral DNA from latent memory T cells within 24 hours", "Permanently eliminate the patient's need for CD4 cells", "Stimulate massive histamine production"],
  0,
  "HAART uses a cocktail of multiple antiretroviral drugs targeting different replication stages (e.g., 2 NRTIs + 1 NNRTI or Integrase inhibitor) to suppress viral replication and prevent resistant mutant emergence."
);

addMcq(
  "Does current antiretroviral therapy (ART) provide a permanent cure for HIV infection?",
  ["No, ART cannot eradicate the integrated provirus from latent reservoirs, but it can suppress viral replication and significantly prolong the patient's lifespan", "Yes, taking ART for 6 months permanently cures 100% of patients", "Yes, ART destroys all human cells carrying CD4 receptors", "No, ART has zero effect on HIV and patients die within days"],
  0,
  "Current ART prolongs life and reduces viral load to undetectable levels, but cannot eradicate replication-competent proviruses hiding in resting memory CD4+ T-cell reservoirs; hence it is not a cure."
);

// 136-154: Prevention, public health, NACO, WHO, global initiatives
addMcq(
  "What is the official role of NACO in India?",
  ["National AIDS Control Organisation, an apex government agency coordinating HIV/AIDS prevention, awareness, and treatment programs", "National Air Quality Control Organisation", "National Association of Cancer Oncology", "New Antibiotics Care Organisation"],
  0,
  "NACO (National AIDS Control Organisation), established under the Ministry of Health and Family Welfare, formulates policies and implements HIV/AIDS prevention and control in India."
);

addMcq(
  "Which international health day is observed globally every year on December 1st to raise awareness of the AIDS pandemic?",
  ["World AIDS Day", "World Health Day", "World Cancer Day", "World Malaria Day"],
  0,
  "December 1st is designated as World AIDS Day to raise global awareness, support people living with HIV, and commemorate those who have died from AIDS-related illnesses."
);

addMcq(
  "The internationally recognized symbol for HIV/AIDS awareness and solidarity with people living with HIV is the:",
  ["Red Ribbon", "Pink Ribbon", "Yellow Ribbon", "White Ribbon"],
  0,
  "The Red Ribbon was created in 1991 by artists in New York as a global symbol of solidarity, compassion, and awareness for people living with HIV/AIDS."
);

addMcq(
  "Which preventative measure is recommended by WHO and NACO to eliminate transmission of HIV through blood transfusions?",
  ["Mandatory screening of all donated blood units for HIV-1 and HIV-2 antibodies and p24 antigen prior to transfusion", "Boiling all blood units at 100°C before infusion", "Freezing blood units at -80°C for one hour", "Adding high concentrations of penicillin directly to donor blood"],
  0,
  "All donor blood and blood products must undergo strict mandatory serological and nucleic acid screening for HIV, HBV, HCV, and syphilis prior to clinical transfusion."
);

addMcq(
  "Which harm-reduction strategy is implemented by public health organizations to curb HIV transmission among intravenous drug abusers?",
  ["Distribution of sterile, disposable needles and syringes (Needle-Syringe Exchange Programs)", "Encouraging sharing of needles among family members", "Providing intravenous heroin free of charge in public parks", "Banning all hypodermic needles in medical hospitals"],
  0,
  "Needle and syringe exchange programs provide sterile equipment to intravenous drug users, successfully decreasing the high risk of blood-borne transmission of HIV and hepatitis."
);

addMcq(
  "Use of condoms during sexual intercourse prevents HIV transmission by:",
  ["Providing an impermeable mechanical barrier that prevents contact with infected genital fluids (semen and vaginal secretions)", "Chemically neutralizing viral reverse transcriptase upon contact", "Stimulating the production of memory cytotoxic T lymphocytes", "Inducing permanent host tolerance to viral antigens"],
  0,
  "Consistent and correct use of latex or polyurethane condoms creates an impermeable physical barrier preventing direct exchange of virus-laden semen and cervicovaginal secretions."
);

addMcq(
  "Pre-Exposure Prophylaxis (PrEP) is an evidence-based biomedical HIV prevention intervention wherein:",
  ["HIV-negative individuals at high risk take daily antiretroviral medications (e.g. Tenofovir + Emtricitabine) to prevent acquiring HIV infection", "HIV-positive patients are given monthly vaccines", "Newborns are treated with broad-spectrum antibacterials", "Patients are injected with horse serum antitoxins"],
  0,
  "PrEP involves high-risk HIV-negative individuals taking daily oral antiretroviral drugs, which establish protective tissue drug concentrations that prevent HIV acquisition if exposed."
);

addMcq(
  "Post-Exposure Prophylaxis (PEP) for healthcare workers who experience an accidental needlestick injury from an HIV-positive patient should be initiated:",
  ["As soon as possible, ideally within 2 hours and no later than 72 hours post-exposure, continuing for 28 days", "Only after waiting 6 months to see if antibodies appear", "After 1 year of monitoring", "Never, because needlestick injuries carry zero risk"],
  0,
  "PEP should be started immediately (within hours, maximum 72 hours) with a 28-day course of combination antiretroviral drugs to stop viral replication before permanent infection is established."
);

addMcq(
  "Which statement correctly describes the social approach toward individuals living with HIV/AIDS advocated by medical ethicists and public health bodies?",
  ["They should be treated with empathy, dignity, and compassion, without social ostracism or discrimination", "They should be quarantined in isolated colonies away from society", "They should be expelled from schools and workplaces", "Their diagnosis should be published openly on public billboards"],
  0,
  "WHO and national guidelines emphasize that HIV patients should not be stigmatized or isolated; non-discriminatory integration into society is vital for effective diagnosis, care, and containment."
);

addMcq(
  "The WHO target '95-95-95' for ending the AIDS epidemic by 2030 aims to ensure that:",
  ["95% of people living with HIV know their status, 95% of diagnosed people receive ART, and 95% on ART achieve viral suppression", "95% of the world population gets vaccinated with a retroviral vaccine", "95% of mosquitoes are eradicated worldwide", "95% of hospitals stop treating infectious diseases"],
  0,
  "UNAIDS set the 95-95-95 global target: 95% of individuals living with HIV diagnosed, 95% of those diagnosed on ART, and 95% of those on ART achieving sustained viral suppression."
);

addMcq(
  "The slogan 'U = U' endorsed by the global medical community in HIV care stands for:",
  ["Undetectable = Untransmittable", "Universal = Unpreventable", "Unvaccinated = Unprotected", "Uncontrolled = Unlimited"],
  0,
  "'Undetectable = Untransmittable' (U=U) means that an individual living with HIV on effective ART with an undetectable viral load in blood cannot sexually transmit HIV to others."
);

addMcq(
  "Which diagnostic test measures the amount of HIV genetic material circulating in plasma, guiding the effectiveness of ART?",
  ["Plasma HIV viral load by quantitative RT-PCR", "Total erythrocyte sedimentation rate (ESR)", "Hemoglobin estimation by Sahli's method", "Direct Coombs test"],
  0,
  "Viral load testing by quantitative RT-PCR directly measures HIV RNA copies per milliliter of plasma, assessing replication rate and treatment efficacy."
);

addMcq(
  "In an HIV-infected patient with severe oral candidiasis (thrush), the fungal pathogen responsible is:",
  ["Candida albicans", "Aspergillus fumigatus", "Rhizopus oryzae", "Trichophyton rubrum"],
  0,
  "Oral and esophageal candidiasis (thrush) caused by the yeast Candida albicans is a common early clinical indicator of cell-mediated immunodeficiency in HIV-infected patients."
);

addMcq(
  "Which cells in mucosal tissues are among the first to capture HIV particles via DC-SIGN receptors and transport them to draining lymph nodes?",
  ["Dendritic cells (such as Langerhans cells)", "Keratinocytes only", "Erythrocytes", "Adipocytes"],
  0,
  "Dendritic cells express C-type lectin receptors like DC-SIGN that bind HIV envelope gp120; they capture the virus and migrate to lymph nodes, inadvertently presenting it to CD4+ T cells."
);

addMcq(
  "In HIV patients, progressive multifocal leukoencephalopathy (PML) is a demyelinating CNS disease caused by reactivation of which opportunistic virus?",
  ["JC virus (John Cunningham polyomavirus)", "Hepatitis A virus", "Rabies virus", "Poliovirus"],
  0,
  "JC polyomavirus remains latent in healthy individuals, but in severely immunocompromised AIDS patients it reactivates, destroying oligodendrocytes and causing fatal demyelinating PML."
);

addMcq(
  "Why is it scientifically challenging to develop an effective protective vaccine against HIV?",
  ["Extremely high antigenic variability due to error-prone reverse transcriptase, conformational masking of conserved epitopes, and integration of provirus into host genomes", "HIV antigens cannot trigger any B-cell response", "HIV is too large to be detected by human lymphocytes", "All antibodies against viruses are destroyed in the stomach"],
  0,
  "High mutation rates, diverse viral clades, glycan shielding of envelope spikes, and early establishment of latent proviral reservoirs make developing an effective HIV vaccine extraordinarily difficult."
);

addMcq(
  "Non-Governmental Organisations (NGOs) and government agencies organize adolescent education programs to:",
  ["Educate young people regarding safe sex practices, modes of HIV transmission, and dispelling myths and misconceptions", "Discourage students from studying biological sciences", "Promote needle sharing among adolescents", "Instruct students that HIV spreads via handshakes"],
  0,
  "Adolescent peer education programs empower youth with accurate knowledge on sexual health, transmission vectors, and prevention, reducing risky behaviors and dismantling stigma."
);

addMcq(
  "A healthcare worker accidentally pricked by a needle used on an HIV-infected patient should immediately:",
  ["Wash the puncture site thoroughly with soap and water and report immediately for post-exposure prophylaxis (PEP) evaluation", "Suck the puncture wound vigorously with their mouth", "Apply a tourniquet and amputate the affected finger", "Ignore the incident completely"],
  0,
  "Immediate post-exposure protocol mandates washing the site thoroughly with soap and running water (without squeezing), reporting to the occupational health officer, and initiating PEP within 2 hours."
);

addMcq(
  "According to NCERT Class 12 Biology, AIDS is not spread by which of the following activities?",
  ["Mere touch or physical contact", "Sexual contact with an infected partner", "Transfusion of contaminated blood", "Sharing infected needles"],
  0,
  "NCERT states explicitly that HIV/AIDS is not transmitted by mere touch or casual physical contact; it spreads only when there is exchange of body fluids."
);


const extra20Mcqs = [
  [
    "In healthy individuals, the normal ratio of circulating CD4+ helper T cells to CD8+ cytotoxic T cells is approximately 2:1. In advanced HIV/AIDS, this ratio:",
    [
      "Inverts to less than 0.5:1 due to selective destruction of CD4+ T cells",
      "Increases to greater than 10:1",
      "Remains precisely constant at 2:1",
      "Rises to infinity as CD8 cells disappear completely"
    ],
    0,
    "Selective destruction and apoptosis of CD4+ T cells by HIV leads to a characteristic inversion of the CD4:CD8 T-cell ratio from ~2.0 down to less than 0.5."
  ],
  [
    "Long-Term Non-Progressors (LTNPs) are a unique subset of HIV-infected individuals who:",
    [
      "Remain asymptomatic with stable normal CD4+ counts for 10 or more years without antiretroviral therapy",
      "Die of acute AIDS within 48 hours of infection",
      "Produce no antibodies against any pathogens",
      "Lack all erythrocytes in circulation"
    ],
    0,
    "LTNPs (approx. 5% of HIV patients) sustain normal CD4+ counts (>500 cells/mm^3) and low viral replication for many years in the absence of ART due to host genetic and immune factors."
  ],
  [
    "Elite controllers are rare HIV-1-infected individuals who:",
    [
      "Maintain undetectable plasma viral loads (<50 copies/mL) naturally without antiretroviral therapy",
      "Rapidly progress to fatal opportunistic infections within weeks",
      "Completely lack the CD4 receptor on all cells",
      "Synthesize massive amounts of viral envelope gp120 in urine"
    ],
    0,
    "Elite controllers possess potent HIV-specific CD8+ cytotoxic T-cell responses that keep plasma viremia below limits of standard detection without drug treatment."
  ],
  [
    "During late stages of HIV infection, the virus frequently undergoes a phenotypic coreceptor 'switch' from:",
    [
      "CCR5-using (R5 / macrophage-tropic) to CXCR4-using (X4 / T-cell-tropic) strains",
      "CXCR4-using to CCR5-using strains",
      "CD4-using to CD8-using strains",
      "gp120-dependent to insulin-dependent strains"
    ],
    0,
    "Early infection is predominantly established by R5 (CCR5-tropic) viruses; in about 50% of patients, mutations in the V3 loop of gp120 cause a switch to X4 (CXCR4-tropic) strains, precipitating rapid CD4 decline."
  ],
  [
    "Multinucleated giant cells (syncytia) formed in HIV-infected cell cultures occur due to:",
    [
      "Interaction between viral gp120 expressed on infected cell membranes and CD4 receptors on adjacent uninfected cells",
      "Direct phagocytosis of RBCs by lymphocytes",
      "Fusion of bacterial spores with host ribosomes",
      "Overproduction of histamine from mast cells"
    ],
    0,
    "Viral gp120 displayed on the surface of an HIV-infected cell binds CD4 and coreceptors on neighboring cells, triggering membrane fusion and the formation of giant multinucleated syncytia."
  ],
  [
    "Which antiretroviral drug class binds allosterically to a hydrophobic pocket near the active site of reverse transcriptase without being incorporated into DNA?",
    [
      "Non-Nucleoside Reverse Transcriptase Inhibitors (NNRTIs, e.g. Efavirenz, Nevirapine)",
      "Nucleoside Reverse Transcriptase Inhibitors (NRTIs, e.g. Zidovudine)",
      "Protease inhibitors (e.g. Ritonavir)",
      "Fusion inhibitors (e.g. Enfuvirtide)"
    ],
    0,
    "NNRTIs do not require intracellular phosphorylation and do not act as chain terminators; instead, they bind an allosteric non-substrate pocket on reverse transcriptase, locking its catalytic conformation."
  ],
  [
    "Integrase Strand Transfer Inhibitors (INSTIs, such as Raltegravir and Dolutegravir) exert their antiretroviral effect by:",
    [
      "Inhibiting the catalytic insertion of linear proviral DNA ends into host chromosomal DNA",
      "Blocking the translation of host actin mRNA",
      "Preventing the absorption of dietary carbohydrates",
      "Degrading host lysosomal acid hydrolases"
    ],
    0,
    "INSTIs selectively bind the active site of HIV integrase, blocking the magnesium-dependent strand transfer step that joins the viral DNA to host genomic DNA."
  ],
  [
    "Enfuvirtide (T-20) is an antiretroviral medication belonging to the class of:",
    [
      "Fusion inhibitors that block gp41-mediated viral entry into the host cell",
      "Protease inhibitors blocking polyprotein maturation",
      "Nucleoside reverse transcriptase inhibitors",
      "Integrase strand transfer inhibitors"
    ],
    0,
    "Enfuvirtide is a synthetic 36-amino-acid biomimetic peptide that binds the HR1 region of HIV transmembrane glycoprotein gp41, preventing hairpin formation and fusion."
  ],
  [
    "Maraviroc is an antiretroviral drug classified as a/an:",
    [
      "CCR5 coreceptor antagonist that blocks gp120 binding to host cell CCR5",
      "Integrase inhibitor",
      "Reverse transcriptase chain terminator",
      "Protease cleavage enhancer"
    ],
    0,
    "Maraviroc is a chemokine receptor antagonist that binds human CCR5, preventing the viral envelope glycoprotein gp120 from utilizing CCR5 as a coreceptor for entry."
  ],
  [
    "In patients with advanced AIDS (CD4 count < 100 cells/mm^3), severe headache, neck stiffness, and cryptococcal meningitis are caused by which encapsulated fungal yeast?",
    [
      "Cryptococcus neoformans",
      "Candida albicans",
      "Aspergillus niger",
      "Saccharomyces cerevisiae"
    ],
    0,
    "Cryptococcus neoformans is an opportunistic encapsulated yeast that inhaled into lungs disseminates to the meninges in immunocompromised patients, diagnosed by India ink staining showing clear halos."
  ],
  [
    "Cytomegalovirus (CMV) infection in advanced AIDS patients (CD4 < 50 cells/mm^3) most frequently manifests as:",
    [
      "Retinitis causing necrotizing retinal lesions and progressive blindness",
      "Acute bacterial lobar pneumonia",
      "Spastic paraplegia of lower limbs",
      "Severe skin vitiligo"
    ],
    0,
    "CMV reactivates when CD4+ T counts drop below 50 cells/mm^3, typically causing CMV retinitis with characteristic 'pizza-pie' hemorrhages and retinal exudates, leading to blindness if untreated."
  ],
  [
    "Oral hairy leukoplakia, presenting as white, non-scrapable corrugated patches on the lateral borders of the tongue in HIV patients, is caused by reactivation of:",
    [
      "Epstein-Barr Virus (EBV / HHV-4)",
      "Herpes simplex virus type 1",
      "Human papillomavirus type 16",
      "Varicella-zoster virus"
    ],
    0,
    "Oral hairy leukoplakia is a benign hyperplastic epithelial lesion of the lateral tongue induced by uncontrolled opportunistic replication of Epstein-Barr virus in immunosuppressed HIV patients."
  ],
  [
    "The clinical phenomenon known as 'slim disease' historically described in East Africa refers to:",
    [
      "HIV wasting syndrome characterized by severe involuntary weight loss (>10%), chronic diarrhea, and prolonged fever",
      "Severe obesity caused by thyroid overactivity",
      "Muscle hypertrophy from physical exertion",
      "Loss of appetite in acute hepatitis A"
    ],
    0,
    "'Slim disease' was the early vernacular name given to the catastrophic wasting syndrome of AIDS in Uganda and Tanzania, characterized by profound emaciation, chronic diarrhea, and asthenia."
  ],
  [
    "The 'Red Ribbon Express' was a major public health initiative in India launched by NACO consisting of a:",
    [
      "Specially designed multi-coach exhibition train that traveled across India to spread HIV/AIDS awareness and counseling",
      "Fleet of high-speed ambulances in metropolitan cities",
      "Specialized air-transport medical plane",
      "Mobile pharmaceutical manufacturing unit"
    ],
    0,
    "The Red Ribbon Express was an innovative nationwide awareness campaign on rails launched by NACO, traveling through hundreds of stations to educate rural and urban populations on HIV prevention."
  ],
  [
    "Which lymphoid tissue structures act as a persistent reservoir where intact HIV virions remain trapped on the follicular dendritic cell network, continually infecting migrating T cells?",
    [
      "Germinal centers of secondary lymphoid follicles in lymph nodes",
      "Hassall's corpuscles in the thymic medulla",
      "Red pulp sinusoids of the spleen",
      "Central bone marrow fat droplets"
    ],
    0,
    "Follicular dendritic cells (FDCs) in lymphoid germinal centers retain infectious HIV particles on their dendrites via complement and Fc receptors for years, serving as a persistent viral reservoir."
  ],
  [
    "The viral matrix protein that lines the inner surface of the HIV lipid bilayer membrane, providing structural integrity to the virion, is designated as:",
    [
      "p17",
      "p24",
      "gp120",
      "gp41"
    ],
    0,
    "HIV matrix protein p17 forms a spherical shell beneath the viral membrane, playing essential roles in virion assembly, envelope incorporation, and nuclear import of pre-integration complexes."
  ],
  [
    "The HIV genome encodes non-structural regulatory proteins, among which Tat and Rev function to:",
    [
      "Tat activates high-level viral transcription, while Rev facilitates nuclear export of unspliced viral mRNAs",
      "Synthesize host cholesterol and triglycerides",
      "Directly lyse erythrocytes in blood",
      "Neutralize stomach hydrochloric acid"
    ],
    0,
    "Tat (Trans-Activator of Transcription) enhances transcriptional elongation by RNA polymerase II, while Rev (Regulator of Expression of Virion Proteins) exports intron-containing viral RNAs into the cytoplasm."
  ],
  [
    "Which laboratory test provides the definitive evaluation of immune competence in an HIV-positive patient to determine the timing of opportunistic infection prophylaxis?",
    [
      "Flow cytometric absolute CD4+ T-lymphocyte count",
      "Total serum bilirubin",
      "Urine specific gravity",
      "Blood urea nitrogen"
    ],
    0,
    "Flow cytometry using fluorescent monoclonal antibodies against CD3 and CD4 is the gold standard for counting absolute CD4+ T cells/mm^3, dictating clinical staging and prophylactic drug therapy."
  ],
  [
    "Transmission of HIV via organ transplantation (kidney, liver, heart) can be prevented by:",
    [
      "Screening prospective organ donors using both serological antibody assays and nucleic acid amplification tests (NAT)",
      "Administering antibiotics to the transplanted organ",
      "Rinsing the donor organ with normal saline alone",
      "Freezing the organ at 0°C for 5 minutes"
    ],
    0,
    "Mandatory multi-marker screening (including NAT for viral RNA) of organ donors ensures that transmission of blood-borne pathogens like HIV, HBV, and HCV through solid organ transplants is avoided."
  ],
  [
    "Why are condoms considered highly effective in preventing sexual transmission of HIV when used consistently and correctly?",
    [
      "Because latex condoms provide an unbroken physical barrier impermeable to HIV particles and other sexually transmitted pathogens",
      "Because condoms release high doses of penicillin during intercourse",
      "Because condoms alter the human genome",
      "Because latex kills all viruses within seconds"
    ],
    0,
    "Intact latex and synthetic polyurethane condoms create a mechanical barrier that prevents physical contact with virions present in semen and cervicovaginal secretions, preventing sexual transmission."
  ]
];
extra20Mcqs.forEach(m => addMcq(m[0], m[1], m[2], m[3]));

console.log(`AR questions: ${arData.length}, MCQ questions: ${mcqData.length}`);

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
const mcqQuestions = mcqData.map(m => ({
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

console.log(`Part 6 (${SUBTOPIC}) total questions: ${allQuestions.length} (AR: ${arQuestions.length}, MCQ: ${mcqQuestions.length})`);

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

console.log(`Part 6 KaTeX errors: ${katexErrors}`);

if (katexErrors === 0 && allQuestions.length === 180) {
  const outPath = path.join(__dirname, 'data_zoology_biohuman_part6.js');
  const fileContent = `// Auto-generated data for Zoology Biology and Human Welfare Part 6: ${SUBTOPIC}\nmodule.exports = ${JSON.stringify(allQuestions, null, 2)};\n`;
  fs.writeFileSync(outPath, fileContent, 'utf8');
  console.log(`Successfully wrote ${outPath}`);
} else {
  console.error("Validation failed! Not writing output.");
  process.exit(1);
}
