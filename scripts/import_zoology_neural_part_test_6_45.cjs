const { MongoClient, ObjectId } = require('mongodb');
require('dotenv').config({ path: '.env.local' });

const zoologyQuestions = [
  {
    qNo: 1,
    question: "During the resting state, the axonal membrane is",
    options: [
      "Completely permeable to sodium ions",
      "Comparatively more permeable to potassium ions than sodium ions",
      "Nearly permeable to negatively charged proteins present in axoplasm",
      "Equally permeable to both K+ and Na+"
    ],
    correctAnswer: 1,
    correctOption: "b",
    explanation: "At rest, the axonal membrane is comparatively more permeable to potassium ions (K+) and nearly impermeable to sodium ions (Na+). It is also completely impermeable to negatively charged proteins present within the axoplasm.",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)"
  },
  {
    qNo: 2,
    question: "While running a marathon, the neural system of a healthy man will co-ordinate the functions of how many of the organs mentioned in the box given below?\nLungs, Muscles, Heart, Kidney, Blood vessels\nSelect the correct option.",
    options: [
      "Two",
      "Three",
      "Four",
      "Five"
    ],
    correctAnswer: 3,
    correctOption: "d",
    explanation: "During strenuous physical activity like a marathon, the neural system coordinates the functions of all five listed organs: Muscles (locomotion), Lungs (increased ventilation), Heart (elevated cardiac output), Blood vessels (vasomotor redistribution), and Kidney (fluid and electrolyte homeostasis). Total = 5.",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)"
  },
  {
    qNo: 3,
    question: "Read the following statements w.r.t. humans.\nStatement A: Only the neural system harmonizes and integrates all the activity of every organ and tissue so that they function in a synchronised fashion.\nStatement B: Pons consists of fibre tracts that interconnect different regions of the brain.\nChoose the correct option.",
    options: [
      "Both statements A and B are correct",
      "Both statements A and B are incorrect",
      "Only statement A is correct",
      "Only statement A is incorrect"
    ],
    correctAnswer: 3,
    correctOption: "d",
    explanation: "Statement A is incorrect: The neural system and the endocrine system jointly coordinate and integrate all organ activities. Statement B is correct: Pons consists of white fibrous tracts that interconnect different regions of the brain. Therefore, only Statement A is incorrect.",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)"
  },
  {
    qNo: 4,
    question: "In humans, the neural system and endocrine system differ as",
    options: [
      "Former provides slower coordination than the latter",
      "Former provides organised network of point-to-point connection unlike the latter",
      "Response mediated by former takes longer time as compared to the latter",
      "Former integrates the functions of various organs through intracellular messengers unlike the latter"
    ],
    correctAnswer: 1,
    correctOption: "b",
    explanation: "The neural system provides an organized network of point-to-point connections for rapid and quick coordination, whereas the endocrine system provides chemical integration via hormones released directly into the bloodstream.",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)"
  },
  {
    qNo: 5,
    question: "Assertion (A): In humans, the nervous system can handle vast amounts of data, controls intricate actions and shows higher cognitive functions.\nReason (R): In each minute, the central nervous system receives millions of information from environment through motor nerve fibres and then it integrates them all so that our body can respond.\nIn the light of above statements, choose the correct option.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
      "Both (A) and (R) are false",
      "(A) is true but (R) is false"
    ],
    correctAnswer: 3,
    correctOption: "d",
    explanation: "Assertion (A) is true. Reason (R) is false: Sensory information from the environment is transmitted to the CNS via sensory (afferent) nerve fibres, not motor (efferent) nerve fibres. Motor fibres carry impulses away from the CNS to effector organs.",
    type: "ASSERTION_REASON",
    questionType: "Assertion-Reason Question"
  },
  {
    qNo: 6,
    question: "Comprehend the given statements:\n(a) The neural system of all animals is composed of highly specialised cells called neurons.\n(b) In Hydra, a network of interconnected nerve cells is present but it lacks a centralised brain and specialised sense organs.\n(c) When an excitatory neurotransmitter excites the motor neuron, the neuronal membrane becomes highly permeable to certain cations.\nSelect the correct option.",
    options: [
      "(a), (b) and (c) are correct",
      "Only (a) and (b) are correct",
      "Only (c) is correct",
      "(b) and (c) are incorrect"
    ],
    correctAnswer: 0,
    correctOption: "a",
    explanation: "(a) is correct: Neurons are the specialized structural and functional cells of the neural system. (b) is correct: Hydra possesses a primitive diffuse nerve net without a brain. (c) is correct: Excitatory neurotransmitters open ligand-gated cation channels (primarily Na+ influx), causing depolarization. All three statements are correct.",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)"
  },
  {
    qNo: 7,
    question: "The central nervous system is composed mainly of (i) ____ and (ii) ____ where the part encased in vertebral column connects to the brain through a large opening in the occipital bone called (iii) ____.\nSelect the correct option to fill in the respective blanks w.r.t. humans.",
    options: [
      "(i) Brain; (ii) Spinal nerves; (iii) Foramen magnum",
      "(i) Spinal cord; (ii) Cranial nerves; (iii) Foramen magnum",
      "(i) Ganglia; (ii) Spinal nerves; (iii) Foramen magnum",
      "(i) Brain; (ii) Spinal cord; (iii) Foramen magnum"
    ],
    correctAnswer: 3,
    correctOption: "d",
    explanation: "The central nervous system (CNS) comprises the brain and the spinal cord. The spinal cord connects to the brain through the foramen magnum, a large opening in the occipital bone of the skull.",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)"
  },
  {
    qNo: 8,
    question: "In humans, the PNS is divided into two divisions, i.e., somatic and autonomic neural systems, where the",
    options: [
      "Autonomic neural system relays impulses from CNS to biceps",
      "Somatic neural system relays impulses from CNS to muscles of intestine that are characterised by branched muscle fibres",
      "Somatic neural system is further sub-divided into sympathetic and parasympathetic neural systems",
      "Autonomic neural system transmits regulatory impulses from CNS to the muscles with uninucleated and unbranched muscle fibres"
    ],
    correctAnswer: 3,
    correctOption: "d",
    explanation: "The autonomic neural system (ANS) innervates involuntary internal visceral organs and smooth muscles (which are spindle-shaped, uninucleated, and unbranched). Somatic neural system relays impulses from CNS to skeletal muscles (striated, multinucleated).",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)"
  },
  {
    qNo: 9,
    question: "Which of the following are included in PNS?\n(a) Nerves\n(b) Nerve fibres\n(c) Ganglia\n(d) Plexuses\nChoose the correct option w.r.t. humans.",
    options: [
      "(a), (b), (c) and (d)",
      "Only (b) and (c)",
      "Only (a) and (d)",
      "Only (c) and (d)"
    ],
    correctAnswer: 0,
    correctOption: "a",
    explanation: "The peripheral nervous system (PNS) comprises all neural structures located outside the CNS, including cranial and spinal nerves, their nerve fibres, ganglia, and autonomic plexuses. All four are included.",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)"
  },
  {
    qNo: 10,
    question: "'X' relays impulses from the brain and spinal cord to the viscera and from the viscera to the brain and spinal cord. 'X' is a part of",
    options: [
      "Both somatic and parasympathetic nervous systems",
      "Central nervous system",
      "Peripheral nervous system",
      "Both somatic and sympathetic nervous systems"
    ],
    correctAnswer: 2,
    correctOption: "c",
    explanation: "The visceral nervous system comprises the complex of nerves, fibres, ganglia, and plexuses that conduct signals between the CNS and the viscera; it is a specialized division of the peripheral nervous system (PNS).",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)"
  },
  {
    qNo: 11,
    question: "The part of the hindbrain located dorsally to the brain stem integrates information received from",
    options: [
      "Semicircular canals of ear and auditory system",
      "Aortic arch and carotid bodies",
      "Central chemoreceptors and lungs",
      "Visceral structures such as biceps and intestine"
    ],
    correctAnswer: 0,
    correctOption: "a",
    explanation: "The part of the hindbrain located dorsally to the brain stem is the cerebellum. It integrates sensory inputs from the vestibular apparatus (semicircular canals of the inner ear) and proprioceptors to coordinate motor activity, posture, and equilibrium.",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)"
  },
  {
    qNo: 12,
    question: "Select the correct pair that shows antagonistic effects on heart.",
    options: [
      "Somatic and visceral neural systems",
      "Sympathetic and parasympathetic neural systems",
      "Autonomic and somatic neural systems",
      "Central and peripheral neural systems"
    ],
    correctAnswer: 1,
    correctOption: "b",
    explanation: "The two divisions of the autonomic nervous system have antagonistic actions on the heart: the sympathetic nervous system increases heart rate and cardiac output, while the parasympathetic nervous system (via the vagus nerve) slows heart rate.",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)"
  },
  {
    qNo: 13,
    question: "Choose the incorrect statement w.r.t. humans.",
    options: [
      "Association areas present in the cerebral cortex are responsible for complex functions like memory",
      "For regulation of respiration, there is a centre present in medulla oblongata whose functioning can also be influenced by centres present in pons",
      "Corpora quadrigemina is composed of two upper elevations and two lower elevations which serve as reflex centres for certain activities such as visual and auditory",
      "The new potential generated at the presynaptic membrane may be either excitatory or inhibitory based on types of neurotransmitters released there"
    ],
    correctAnswer: 3,
    correctOption: "d",
    explanation: "The new potential (EPSP or IPSP) is generated at the postsynaptic membrane, not the presynaptic membrane, upon binding of neurotransmitters to specific receptors.",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)"
  },
  {
    qNo: 14,
    question: "Select the incorrect option w.r.t. the structural unit of the human neural tissue.",
    options: [
      "They are linked with other cells of the body to form complex neural connections for transmission of information",
      "The plasma membrane of the short fibres which arise from their cell body contain numerous receptor sites for binding of chemical messengers from other neurons",
      "The proximal end of the long fibre attached to their cell body is branched, where each branch terminates as fusiform-shaped structure",
      "In PNS, terminal branch of axon is unmyelinated"
    ],
    correctAnswer: 2,
    correctOption: "c",
    explanation: "The distal (terminal) end of an axon is branched into telodendria, terminating in bulb-like synaptic knobs (not the proximal end, which originates at the axon hillock). Furthermore, synaptic knobs are bulbous/button-shaped, not fusiform.",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)"
  },
  {
    qNo: 15,
    question: "Match the column I with column II and select the correct option w.r.t. type of neurons present in humans.\nColumn I:\n(i) Cell body with one axon and two or more dendrites\n(ii) Cell body with two axons and one dendrite\n(iii) Cell body with one axon and no dendrite\n(iv) Cell body with one axon and one dendrite\nColumn II:\n(a) Retina of eye\n(b) Embryonic stage\n(c) Cerebral cortex",
    options: [
      "(i)(c), (ii)(a), (iii)(b)",
      "(i)(c), (iii)(a), (iv)(b)",
      "(ii)(a), (iii)(b), (iv)(c)",
      "(i)(c), (iii)(b), (iv)(a)"
    ],
    correctAnswer: 3,
    correctOption: "d",
    explanation: "(i) Multipolar neuron (one axon, two or more dendrites) -> (c) Cerebral cortex. (iii) Unipolar neuron (cell body with only one axon) -> (b) Embryonic stage. (iv) Bipolar neuron (one axon and one dendrite) -> (a) Retina of eye. Matching: (i)-(c), (iii)-(b), (iv)-(a).",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)"
  },
  {
    qNo: 16,
    question: "Read the following statements:\nStatement A: Oligodendrocytes form the myelin sheath around the nerve fibres present in PNS.\nStatement B: Neurons are divided on the basis of presence or absence of an electrical insulating layer which is made up of modified biomacromolecules that constitute 10% of the total cellular mass.\nChoose the correct option.",
    options: [
      "Both statements A and B are correct",
      "Both statements A and B are incorrect",
      "Only statement A is correct",
      "Only statement B is correct"
    ],
    correctAnswer: 1,
    correctOption: "b",
    explanation: "Statement A is incorrect: Schwann cells form myelin in the PNS; oligodendrocytes form myelin in the CNS. Statement B is incorrect: Myelin sheath is predominantly composed of lipids (~70-80% dry weight, not 10%). Both statements are incorrect.",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)"
  },
  {
    qNo: 17,
    question: "The type of nerve fibres that possess Schwann cells but not myelin sheath are commonly found in\n(a) Peripheral neural system\n(b) Autonomic neural system\n(c) Somatic neural system\nSelect the correct option.",
    options: [
      "Only (a) and (b)",
      "Only (b) and (c)",
      "Only (a) and (c)",
      "(a), (b) and (c)"
    ],
    correctAnswer: 3,
    correctOption: "d",
    explanation: "Unmyelinated nerve fibres enclosed by Schwann cells that do not form a multi-layered myelin sheath are commonly found in both the autonomic and somatic neural systems (which together constitute the PNS). Thus, (a), (b), and (c) are all applicable.",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)"
  },
  {
    qNo: 18,
    question: "Unmyelinated nerve fibres of CNS are characterized by the presence of",
    options: [
      "Neurilemma",
      "Nodes of Ranvier",
      "Axolemma",
      "Schwann cells"
    ],
    correctAnswer: 2,
    correctOption: "c",
    explanation: "Unmyelinated axons in the CNS lack Schwann cells and neurilemma (which are restricted to the PNS) and lack nodes of Ranvier (which occur between myelin segments). However, all functional nerve fibres are bound by their own plasma membrane, the axolemma.",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)"
  },
  {
    qNo: 19,
    question: "Read the following w.r.t. humans.\n(a) Lies at the base of diencephalon.\n(b) Contains centre for controlling sexual desire.\n(c) Helps to keep the water content of the body constant by controlling the urge for drinking.\n(d) Assists in maintaining the body temperature at roughly 37°C via complex thermostat system.\n(e) Contains osmoreceptors for regulation of blood volume and thus blood pressure.\nHow many of the above given features are true w.r.t. hypothalamus?",
    options: [
      "Four",
      "Three",
      "Five",
      "Two"
    ],
    correctAnswer: 2,
    correctOption: "c",
    explanation: "All five statements are verified characteristics of the human hypothalamus: (a) floor of diencephalon, (b) regulation of sexual drive with limbic system, (c) thirst center, (d) central thermostat (37°C), (e) osmoreceptors for ADH release and blood pressure control. Total = 5.",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)"
  },
  {
    qNo: 20,
    question: "Select the correct statement:",
    options: [
      "All the neurons possess different types of ion channels on their membrane",
      "All the ion channels present on neurons are permeable to all the types of ions",
      "Presence of voltage-gated ion channels (that always remain open) is responsible for excitability in neurons",
      "All the ion channels present on neurons are modified polysaccharides that do not require ATP for transport of ions"
    ],
    correctAnswer: 0,
    correctOption: "a",
    explanation: "Neuronal membranes possess various selective ion channels (Na+, K+, Ca2+, Cl- channels). Ion channels are transmembrane proteins displaying high selectivity, and voltage-gated channels are gated (they do not remain continuously open).",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)"
  },
  {
    qNo: 21,
    question: "The event during nerve impulse conduction when voltage-gated K+ channels remain open for a time so that membrane potential becomes more negative than the resting membrane potential, is known as",
    options: [
      "Depolarisation",
      "Repolarisation",
      "Hyperpolarisation",
      "Both repolarisation and hyperpolarisation"
    ],
    correctAnswer: 2,
    correctOption: "c",
    explanation: "During repolarization, voltage-gated K+ channels close slowly, leading to continued K+ efflux that causes the membrane potential to become more negative than the resting potential (-70 mV to around -80 or -90 mV). This phase is termed hyperpolarisation.",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)"
  },
  {
    qNo: 22,
    question: "The process through which two or more organs interact and complement the functions of each other is known as",
    options: [
      "Homeostasis",
      "Metabolism",
      "Desynchronisation",
      "Coordination"
    ],
    correctAnswer: 3,
    correctOption: "d",
    explanation: "Coordination is the process through which two or more organs interact and complement the functions of one another to maintain homeostasis in the body (NCERT Section 21.1).",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)"
  },
  {
    qNo: 23,
    question: "If the sodium-potassium pump present on the resting axonal membrane suddenly stops working, then the",
    options: [
      "Concentration of intracellular K+ will increase significantly",
      "Nerve fibre will be no more responsive for the stimulation",
      "Passive transportation of Na+ inside the cell will stop immediately",
      "Development of positive charge on the outside of axonal membrane will occur during depolarisation"
    ],
    correctAnswer: 1,
    correctOption: "b",
    explanation: "The Na+/K+ ATPase pump actively maintains the steep ionic gradients (Na+ outside, K+ inside) and resting potential. If it stops, gradients dissipate over time and resting potential is lost, making the neuron inexcitable and non-responsive to stimulation.",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)"
  },
  {
    qNo: 24,
    question: "A nerve cell can do all of the following, except",
    options: [
      "Detect stimuli",
      "Transmit stimuli",
      "Produce stimuli",
      "Receive stimuli"
    ],
    correctAnswer: 2,
    correctOption: "c",
    explanation: "Neurons are specialized excitable cells designed to detect, receive, and transmit stimuli. They do not generate or produce environmental stimuli themselves.",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)"
  },
  {
    qNo: 25,
    question: "When nerve impulse conduction is occurring through an axon from site 'X' to 'Z' through 'Y' in forward direction, then the current flows on the",
    options: [
      "Outer surface from 'Z' to 'Y' through 'X'",
      "Inner surface from 'Z' to 'X' through 'Y'",
      "Outer surface from 'Y' to 'Z' through 'X'",
      "Inner surface from 'X' to 'Z' through 'Y'"
    ],
    correctAnswer: 3,
    correctOption: "d",
    explanation: "During forward nerve impulse propagation, local current on the inner surface of the axolemma flows from the active depolarized site to the adjacent polarized site in the forward direction ('X' -> 'Y' -> 'Z'), while on the outer surface it flows in the reverse direction to complete the circuit.",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)"
  },
  {
    qNo: 26,
    question: "A 65-year-old man was brought to the hospital after a minor stroke. He was unable to maintain balance while walking, though his cognitive functions remained unaffected. After close examination, the doctor declared that his ______ was mainly affected.\nSelect the correct option to fill in the blank.",
    options: [
      "Medulla oblongata",
      "Hypothalamus",
      "Cerebrum",
      "Cerebellum"
    ],
    correctAnswer: 3,
    correctOption: "d",
    explanation: "The cerebellum coordinates voluntary muscular activity, posture, and balance/equilibrium without governing conscious cognitive thought. Stroke-induced ataxia with preserved cognition points to cerebellum impairment.",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)"
  },
  {
    qNo: 27,
    question: "Choose the incorrect statement.",
    options: [
      "The whole process of repolarisation is very fast and takes place within a fraction of a second",
      "A nerve impulse cannot be generated when there is a sub-threshold stimulus",
      "In myelinated nerve fibres, the nerve impulse does not travel as a continuous wave of depolarisation",
      "In myelinated nerve fibres, depolarisation of axonal membrane occurs along the whole axon, but not at nodes of Ranvier"
    ],
    correctAnswer: 3,
    correctOption: "d",
    explanation: "In myelinated nerve fibres, the myelin sheath acts as an insulator; depolarization and action potential generation occur exclusively at the unmyelinated nodes of Ranvier (saltatory conduction), not along the insulated internodes.",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)"
  },
  {
    qNo: 28,
    question: "In humans, electrical synapses differ from chemical synapses as",
    options: [
      "Former are abundant in our system as compared to latter",
      "Only in former, the impulse can travel in one direction",
      "In latter, the current flows directly from one neuron to another without the help of neurotransmitters",
      "In former, the transmission of impulse is very similar to impulse conduction along a single axon"
    ],
    correctAnswer: 3,
    correctOption: "d",
    explanation: "In electrical synapses, gap junctions allow direct ionic continuity between pre- and postsynaptic membranes, making impulse transmission very similar to impulse conduction along a single continuous axon (NCERT Section 21.3.2).",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)"
  },
  {
    qNo: 29,
    question: "If a drug binds to the receptors of neurotransmitter present on a post-synaptic neuron and inhibits its function, then, which of the following steps will not occur after a wave of depolarisation reaches the pre-synaptic membrane for synaptic transmission?",
    options: [
      "Fusion of synaptic vesicles with pre-synaptic membrane",
      "Opening of Na+ channels leading to generation of inhibitory/excitatory potential in post-synaptic neuron",
      "Release of neurotransmitters in synaptic cleft",
      "Diffusion of Ca2+ into the axon terminal from the surrounding fluid"
    ],
    correctAnswer: 1,
    correctOption: "b",
    explanation: "Blocking postsynaptic receptors does not affect presynaptic events (Ca2+ entry, vesicle fusion, neurotransmitter release). However, postsynaptic ion channel opening and the subsequent generation of postsynaptic potentials (EPSP/IPSP) will be blocked.",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)"
  },
  {
    qNo: 30,
    question: "How many of the structures mentioned in the box below constitute the limbic system in humans?\nAmygdala, Hippocampus, Pons, Cerebellum, Inner parts of cerebrum\nSelect the correct option.",
    options: [
      "Five",
      "Three",
      "Four",
      "Two"
    ],
    correctAnswer: 1,
    correctOption: "b",
    explanation: "The limbic system is formed by the inner parts of the cerebral hemispheres and deeply associated subcortical structures: amygdala, hippocampus, and inner parts of cerebrum (total = 3). Pons and cerebellum are parts of the hindbrain.",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)"
  },
  {
    qNo: 31,
    question: "The meninx named 'X' is a thin layer made up of connective tissue and is located directly above the meninx named 'Y' which is in direct contact with the brain tissue. Here, 'X' is",
    options: [
      "Dura mater",
      "Sub-dural space",
      "Arachnoid",
      "Pia mater"
    ],
    correctAnswer: 2,
    correctOption: "c",
    explanation: "From outer to inner, cranial meninges are: Dura mater (outermost, tough), Arachnoid mater ('X', middle, very thin web-like connective tissue), and Pia mater ('Y', innermost, in direct contact with brain tissue). Thus, 'X' is Arachnoid.",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)"
  },
  {
    qNo: 32,
    question: "We can correctly say that in humans",
    options: [
      "The central neural system is completely enclosed within cranium",
      "Neuroglial cells are excitable cells",
      "The cerebral hemisphere is divided only into two lobes",
      "Cerebrum is the most developed part of the brain"
    ],
    correctAnswer: 3,
    correctOption: "d",
    explanation: "The cerebrum forms the major, most extensively developed, and highest-order processing center of the human brain. CNS also includes spinal cord; neuroglia are non-excitable; each hemisphere has four major lobes.",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)"
  },
  {
    qNo: 33,
    question: "Select the correct statement w.r.t. humans.",
    options: [
      "Cerebrum forms the major part of the brain stem",
      "A deep cleft divides the cerebrum transversely into two halves",
      "Nissl's granules are present in axons",
      "If we remove the parietal bones from the skull and meninges from the brain, a deeply convoluted structure will be seen"
    ],
    correctAnswer: 3,
    correctOption: "d",
    explanation: "The outer cerebral cortex is deeply convoluted with gyri and sulci. Removing the cranial bones and meninges exposes this convoluted cerebral surface. Cerebrum does not form the brain stem; longitudinal cleft divides hemispheres; Nissl's granules are absent in axons.",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)"
  },
  {
    qNo: 34,
    question: "Which division of the nervous system would likely be activated, if a student enters the examination hall to sit for his science paper provided to him and suddenly realises that he had mistakenly prepared for mathematics exam instead?",
    options: [
      "Somatic neural system",
      "Parasympathetic neural system",
      "Sympathetic neural system",
      "Only CNS present below the medulla oblongata"
    ],
    correctAnswer: 2,
    correctOption: "c",
    explanation: "Acute panic, stress, and fight-or-flight emergency responses trigger activation of the sympathetic neural system, inducing tachycardia, pupil dilation, and heightened alertness.",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)"
  },
  {
    qNo: 35,
    question: "In humans, the outer layer of cerebrum is thrown in various grooves and bulges which",
    options: [
      "Have an opaque white appearance",
      "Provide space for the formation of myelin sheath to increase conduction of impulse",
      "Greatly enlarge the surface area to allow for large number of neurons to be packed into the confines of the skull",
      "Do not show any neural activities"
    ],
    correctAnswer: 2,
    correctOption: "c",
    explanation: "The convolutions (gyri and sulci) of the cerebral cortex greatly increase the cortical surface area, accommodating a vast number of neuronal cell bodies within the confines of the skull.",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)"
  },
  {
    qNo: 36,
    question: "Most of the times you see a car approaching from distance and by hearing the sound of its engine, your brain combines the visual and auditory cues to determine its speed and distance so that you can get out of its way. This intersensory association is perceived/integrated in",
    options: [
      "Cerebral cortex",
      "Hypothalamus",
      "Medulla oblongata",
      "Spinal cord"
    ],
    correctAnswer: 0,
    correctOption: "a",
    explanation: "The cerebral cortex contains dedicated association areas (neither purely sensory nor purely motor) responsible for complex functions such as intersensory associations, memory, and communication.",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)"
  },
  {
    qNo: 37,
    question: "The left and right cerebral hemispheres are able to exchange information with each other and work together effectively through a tract known as",
    options: [
      "Corpora quadrigemina",
      "Brain stem",
      "Cerebral aqueduct",
      "Corpus callosum"
    ],
    correctAnswer: 3,
    correctOption: "d",
    explanation: "The cerebral hemispheres are connected by a large, prominent transverse tract of myelinated nerve fibres known as the corpus callosum.",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)"
  },
  {
    qNo: 38,
    question: "The appearance of grey colour on the outer surface of the largest part of the human brain is mainly due to",
    options: [
      "Accumulation of myelinated neurons",
      "Presence of secretions of oligodendrocytes in large concentration",
      "Concentration of neuronal cell bodies",
      "Accumulation of only dendrites"
    ],
    correctAnswer: 2,
    correctOption: "c",
    explanation: "The cerebral cortex is referred to as grey matter because of its greyish appearance, which is imparted by the dense concentration of non-myelinated neuronal cell bodies (soma).",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)"
  },
  {
    qNo: 39,
    question: "Read the following statements w.r.t. 'X'.\n(a) Cerebrum wraps around the 'X'.\n(b) Most of the sensory messages reaching the brain must pass through the 'X' in order to be sensed consciously.\n(c) Motor messages from cerebrum to the brain stem pass through the 'X'.\nIdentify X and select the correct option.",
    options: [
      "Thalamus",
      "Hypothalamus",
      "Cerebellum",
      "Amygdala"
    ],
    correctAnswer: 0,
    correctOption: "a",
    explanation: "The cerebrum wraps around the thalamus, which serves as the major sensory and motor relay station and coordinating center for sensory and motor signaling.",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)"
  },
  {
    qNo: 40,
    question: "Assertion (A): At rest, the membranes of neurons are in a polarised state.\nReason (R): In a resting neuron, the outer surface of axonal membrane possesses a positive charge and its inner surface possesses a negative charge.\nIn the light of above statements, choose the correct option.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A)",
      "Both (A) and (R) are false",
      "(A) is true but (R) is false",
      "Both (A) and (R) are true but (R) is not the correct explanation of (A)"
    ],
    correctAnswer: 0,
    correctOption: "a",
    explanation: "Assertion (A) is true: The resting axonal membrane is polarized. Reason (R) is true: Polarization is defined by this electrical potential difference (positive outer surface and negative inner surface). (R) correctly explains (A).",
    type: "ASSERTION_REASON",
    questionType: "Assertion-Reason Question"
  },
  {
    qNo: 41,
    question: "The structure located between the thalamus/hypothalamus of forebrain and the pons of hindbrain receives and integrates\n(a) Visual inputs\n(b) Tactile inputs\n(c) Auditory inputs\nChoose the correct option.",
    options: [
      "Only (a) and (b)",
      "(a), (b) and (c)",
      "Only (b) and (c)",
      "Only (a)"
    ],
    correctAnswer: 1,
    correctOption: "b",
    explanation: "The midbrain (located between diencephalon and pons) integrates visual reflexes (superior colliculi), auditory reflexes (inferior colliculi), and carries ascending somatosensory pathways conveying tactile inputs. All (a), (b), and (c) are integrated.",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)"
  },
  {
    qNo: 42,
    question: "Which of the following is a part of hindbrain but is not a part of the brain stem?",
    options: [
      "Pons",
      "Medulla oblongata",
      "Cerebellum",
      "Midbrain"
    ],
    correctAnswer: 2,
    correctOption: "c",
    explanation: "The brain stem is composed of the midbrain, pons, and medulla oblongata. Although the cerebellum is part of the hindbrain, it is situated dorsally and does not form part of the brain stem.",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)"
  },
  {
    qNo: 43,
    question: "In humans, the part of the brain which is directly connected to the spinal cord, contains centres for the control of all of the following, except",
    options: [
      "Respiration",
      "Gastric secretions",
      "Cardiovascular reflexes",
      "Olfaction"
    ],
    correctAnswer: 3,
    correctOption: "d",
    explanation: "The medulla oblongata is directly continuous with the spinal cord; it contains centers controlling respiration, cardiovascular reflexes, and gastric secretions. Olfaction is processed in the forebrain (olfactory bulb and cortex), not the medulla.",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)"
  },
  {
    qNo: 44,
    question: "Read the following statements:\n(a) Cerebral aqueduct passes through the hindbrain and contains cerebrospinal fluid.\n(b) Destruction of medulla oblongata is not fatal for a person.\n(c) Some chemicals can act as both neurotransmitters and hormones.\nHow many of the above statements is/are incorrect?",
    options: [
      "Three",
      "Zero",
      "Two",
      "One"
    ],
    correctAnswer: 2,
    correctOption: "c",
    explanation: "(a) is incorrect: Cerebral aqueduct passes through the midbrain, not the hindbrain. (b) is incorrect: Destruction of the medulla is fatal as it controls vital respiratory and cardiac centers. (c) is correct: Epinephrine and norepinephrine act as both neurotransmitters and hormones. Total incorrect statements = 2.",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)"
  },
  {
    qNo: 45,
    question: "The neural system of insects is better organised than coelenterates because the former have",
    options: [
      "Network of neurons but no neural tissue",
      "Only a single ganglion and network of neurons",
      "Less than three ganglia and neural tissue",
      "Brain along with a number of ganglia and neural tissues"
    ],
    correctAnswer: 3,
    correctOption: "d",
    explanation: "In insects, the neural system is better organized than in coelenterates, possessing a brain along with a number of ganglia and neural tissues (NCERT Section 21.2).",
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)"
  }
];

async function run() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.error("Missing MONGODB_URI");
    process.exit(1);
  }

  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db();

  console.log("Connected to MongoDB. Starting insertion of 45 Zoology questions (Neural Control and Coordination)...");

  const insertedIds = [];
  const now = new Date();

  for (const q of zoologyQuestions) {
    const existing = await db.collection('questionBank').findOne({
      subject: 'Zoology',
      question: q.question
    });

    if (existing) {
      console.log(`Q${q.qNo} already exists with ID: ${existing._id}`);
      insertedIds.push(existing._id);
    } else {
      const doc = {
        type: q.type,
        question: q.question,
        options: q.options,
        correctAnswer: q.correctAnswer,
        correctOption: q.correctOption,
        explanation: q.explanation,
        subject: "Zoology",
        chapter: "Human Physiology",
        topic: "Neural Control and Coordination",
        subTopic: "Neural Control and Coordination",
        difficulty: "Difficult",
        class: "Class 11",
        marks: 4,
        negativeMarks: 1,
        tag: "Top 100 AIR NEET",
        createdAt: now,
        updatedAt: now,
        cognitiveLevel: "Application & Synthesis",
        commercialId: `NEET-ZOO-NCC-${String(q.qNo).padStart(3, '0')}`,
        commercialReady: true,
        exam: "NEET",
        idealTimeSeconds: 60,
        targetExams: ["NEET"],
        questionType: q.questionType,
        usedInTests: ["neet-PART-6"]
      };

      const res = await db.collection('questionBank').insertOne(doc);
      console.log(`Q${q.qNo} inserted with ID: ${res.insertedId}`);
      insertedIds.push(res.insertedId);
    }
  }

  console.log(`\nAll ${insertedIds.length} question IDs ready. Now mapping to neet-PART-6 (Zoology section)...`);

  const testPaper = await db.collection('testPapers').findOne({ testId: 'neet-PART-6' });
  if (!testPaper) {
    console.error("Test paper neet-PART-6 not found in testPapers!");
    await client.close();
    process.exit(1);
  }

  const existingQuestions = testPaper.questions || [];
  console.log(`Current questions in neet-PART-6: ${existingQuestions.length}`);

  // In neet-PART-6 (180 questions):
  // Indices 0-44: Physics (45 Qs)
  // Indices 45-89: Chemistry (45 Qs)
  // Indices 90-134: Botany (45 Qs)
  // Indices 135-179: Zoology (45 Qs) -> Replace with our 45 newly inserted Zoology questions!
  const physicsQs = existingQuestions.slice(0, 45);
  const chemistryQs = existingQuestions.slice(45, 90);
  const botanyQs = existingQuestions.slice(90, 135);

  const updatedQuestions = [
    ...physicsQs,
    ...chemistryQs,
    ...botanyQs,
    ...insertedIds
  ];

  console.log(`Updated questions length: ${updatedQuestions.length} (Physics: ${physicsQs.length}, Chemistry: ${chemistryQs.length}, Botany: ${botanyQs.length}, Zoology: ${insertedIds.length})`);

  const updateResult = await db.collection('testPapers').updateOne(
    { testId: 'neet-PART-6' },
    {
      $set: {
        questions: updatedQuestions,
        questionsCount: updatedQuestions.length,
        totalQuestions: updatedQuestions.length,
        updatedAt: new Date()
      }
    }
  );

  console.log(`testPapers update result: matched=${updateResult.matchedCount}, modified=${updateResult.modifiedCount}`);

  // Post-import verification
  const verifiedDoc = await db.collection('testPapers').findOne({ testId: 'neet-PART-6' });
  const zooSlice = verifiedDoc.questions.slice(135, 180);
  console.log("Zoology slice in neet-PART-6 length:", zooSlice.length);

  const verifiedZooQuestions = await db.collection('questionBank').find({
    _id: { $in: zooSlice }
  }).toArray();

  console.log("Verified Zoology questions count in questionBank:", verifiedZooQuestions.length);
  console.log("Difficulties:", [...new Set(verifiedZooQuestions.map(q => q.difficulty))]);
  console.log("Subjects:", [...new Set(verifiedZooQuestions.map(q => q.subject))]);
  console.log("Chapters:", [...new Set(verifiedZooQuestions.map(q => q.chapter))]);
  console.log("Topics:", [...new Set(verifiedZooQuestions.map(q => q.topic))]);

  await client.close();
  console.log("Done successfully!");
}

run().catch(err => {
  console.error("Error executing script:", err);
  process.exit(1);
});
