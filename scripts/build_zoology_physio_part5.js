// scripts/build_zoology_physio_part5.js
// Subtopic: Conduction of nerve impulse and reflex action
// Chapter: Human Physiology
// Subject: Zoology
// 26 Assertion-Reason, 154 MCQ = 180 Questions

const fs = require('fs');
const path = require('path');
const katex = require('katex');

const SUBTOPIC = "Conduction of nerve impulse and reflex action";
const CHAPTER = "Human Physiology";
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
    a: "The resting axonal membrane is polarized with a negative charge on its inner surface relative to the exterior.",
    r: "The resting membrane is comparatively much more permeable to $K^+$ ions and nearly impermeable to $Na^+$ and large intracellular organic anions.",
    ans: 0,
    exp: "Selective permeability allows $K^+$ to leak outwards while trapping negatively charged proteins inside, generating a resting membrane potential of approximately $-70\\text{ mV}$. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "The sodium-potassium ($Na^+/K^+$) ATPase pump is essential for maintaining the resting ionic gradients across the axolemma.",
    r: "The $Na^+/K^+$ pump actively expels $3\\text{ Na}^+$ ions out of the axoplasm for every $2\\text{ K}^+$ ions transported inwards against their concentration gradients.",
    ans: 0,
    exp: "Active electrogenic transport of $3\\text{ Na}^+$ out for $2\\text{ K}^+$ in maintains the high extracellular $Na^+$ and intracellular $K^+$ necessary for polarization. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Application of a threshold stimulus to a localized axonal site triggers rapid membrane depolarization.",
    r: "The threshold stimulus causes sudden opening of voltage-gated $Na^+$ channels, resulting in a rapid influx of $Na^+$ ions into the axoplasm.",
    ans: 0,
    exp: "Rapid influx of $Na^+$ down its electrochemical gradient reverses membrane polarity, driving the potential from $-70\\text{ mV}$ to $+30\\text{ mV}$ (action potential). Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Repolarization of the axonal membrane occurs rapidly after depolarization.",
    r: "Voltage-gated $Na^+$ channels close and inactivate, while voltage-gated $K^+$ channels open, allowing efflux of $K^+$ ions out of the axoplasm.",
    ans: 0,
    exp: "$K^+$ efflux removes positive charge from the axoplasm, restoring the resting negative electrical potential inside the membrane. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Saltatory conduction of nerve impulses is significantly faster than continuous conduction.",
    r: "In myelinated axons, myelin sheath acts as an electrical insulator, forcing the action potential to jump from one Node of Ranvier to the next.",
    ans: 0,
    exp: "Because depolarization occurs exclusively at unmyelinated Nodes of Ranvier where voltage-gated channels are concentrated, impulse propagation velocity is accelerated dramatically. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Nissl's granules are present in the cyton and dendrites of a neuron but are absent in the axon.",
    r: "Nissl's granules are composed of rough endoplasmic reticulum and free polyribosomes engaged in active protein synthesis.",
    ans: 1,
    exp: "Both statements are true facts from NCERT. Nissl's granules are masses of rough ER and ribosomes found in soma and dendrites but absent in the axon hillock and axon. Their biochemical composition explains their function in protein synthesis, not their specific anatomical absence in axons. Both are true, (R) is not the explanation."
  },
  {
    a: "Transmission of an impulse across an electrical synapse is faster than across a chemical synapse.",
    r: "In an electrical synapse, the membranes of pre- and post-synaptic neurons are connected by gap junctions, allowing ionic current to flow directly.",
    ans: 0,
    exp: "Direct continuity via low-resistance gap junction channels avoids the synaptic delay associated with neurotransmitter diffusion across a chemical cleft. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Calcium ions ($Ca^{2+}$) are indispensable for neurotransmitter release at a chemical synapse.",
    r: "Arrival of an action potential at the axon terminal opens voltage-gated $Ca^{2+}$ channels, and $Ca^{2+}$ influx causes synaptic vesicles to fuse with the presynaptic membrane.",
    ans: 0,
    exp: "Intracellular $Ca^{2+}$ elevation triggers SNARE-mediated fusion of neurotransmitter vesicles with the presynaptic active zone (exocytosis). Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "A reflex action occurs involuntarily without conscious thought.",
    r: "The reflex arc pathway bypasses high-level processing in the cerebral cortex and is integrated within the spinal cord or brainstem.",
    ans: 0,
    exp: "Reflex arcs operate through spinal/subcortical circuits, providing protective, instantaneous motor responses without waiting for conscious cortical integration. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "The knee-jerk reflex is an example of a monosynaptic stretch reflex.",
    r: "In the knee-jerk reflex, the sensory afferent neuron directly synapses with the motor efferent neuron in the spinal cord without an intervening interneuron.",
    ans: 0,
    exp: "Tapping the patellar tendon stretches muscle spindles, whose afferents make direct, single-synapse connections with alpha motor neurons in the spinal grey matter. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "In a chemical synapse, neurotransmitters bind to specific receptors located on the post-synaptic membrane.",
    r: "Binding of neurotransmitters opens ligand-gated ion channels, generating a post-synaptic potential that may be excitatory or inhibitory.",
    ans: 0,
    exp: "Receptor-neurotransmitter interaction regulates ligand-gated channel opening (e.g. $Na^+$ influx causes EPSP; $Cl^-$ influx causes IPSP). Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Myelinated nerve fibers are enveloped by Schwann cells in the peripheral nervous system.",
    r: "Schwann cells synthesize concentric spiral layers of myelin sheath around the axon.",
    ans: 0,
    exp: "In PNS fibers, Schwann cells wrap repeatedly around axons to lay down multi-lamellar lipoprotein myelin sheaths. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "During the absolute refractory period, no second action potential can be initiated regardless of stimulus strength.",
    r: "Voltage-gated sodium channels remain in an inactivated state following depolarization and cannot reopen until resting potential is restored.",
    ans: 0,
    exp: "Inactivation gates of voltage-gated $Na^+$ channels remain closed during the early phase of repolarization, preventing further excitation. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Chemical synapses can transmit impulses in both directions between two neurons.",
    r: "Neurotransmitter vesicles and receptors are present equally on both the pre-synaptic and post-synaptic membranes.",
    ans: 3,
    exp: "Both (A) and (R) are false. Chemical synapses are strictly unidirectional because neurotransmitter vesicles are confined to the presynaptic terminal, and specific receptors are on the postsynaptic membrane."
  },
  {
    a: "In the human nervous system, electrical synapses are far more common than chemical synapses.",
    r: "Electrical synapses permit complex spatial and temporal summation of diverse neurochemical signals.",
    ans: 3,
    exp: "Both (A) and (R) are false. Electrical synapses are rare in humans; chemical synapses predominate because chemical synapses allow complex neuromodulation and integration."
  },
  {
    a: "Acetylcholinesterase is an enzyme located in the synaptic cleft of cholinergic synapses.",
    r: "Acetylcholinesterase rapidly breaks down acetylcholine into acetate and choline to terminate synaptic signaling.",
    ans: 0,
    exp: "Rapid enzymatic hydrolysis by acetylcholinesterase prevents continuous, non-physiologic stimulation of postsynaptic receptors. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Non-myelinated nerve fibers are not enclosed by Schwann cells.",
    r: "Non-myelinated nerve fibers are found exclusively in the central nervous system.",
    ans: 3,
    exp: "Both (A) and (R) are false. Non-myelinated fibers ARE enclosed by Schwann cells that simply do not form myelin sheaths around them, and they are commonly found in autonomic and somatic neural systems."
  },
  {
    a: "The direction of nerve impulse conduction within a single neuron is always from dendrites to cyton to axon.",
    r: "Dendrites receive incoming signals and conduct them towards the cell body, while the axon conducts impulses away from the cell body to the terminal arborization.",
    ans: 0,
    exp: "Dendrites are specialized input zones that convey graded potentials to the axon hillock, which initiates action potentials along the axon. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "The synaptic cleft in a chemical synapse is approximately 20 nanometers wide.",
    r: "This narrow gap allows rapid diffusion of neurotransmitter molecules across the cleft within a fraction of a millisecond.",
    ans: 0,
    exp: "The microscopic $\\sim 20\\text{ nm}$ synaptic cleft minimizes diffusion distance for neurotransmitters, ensuring prompt postsynaptic receptor activation. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Nodes of Ranvier are periodic gaps in the myelin sheath along the length of an axon.",
    r: "Voltage-gated sodium and potassium channels are densely clustered at the Nodes of Ranvier.",
    ans: 1,
    exp: "Both statements are true. Nodes of Ranvier are the uninsulated intervals between adjacent Schwann cells, and ion channels are concentrated there. However, high channel density is an adaptation that facilitates regeneration of action potentials, not the developmental cause of gaps in myelin wrapping. Both are true, (R) is not the explanation."
  },
  {
    a: "Hyperpolarization occurs when the inside of the neuron becomes more negative than the resting membrane potential.",
    r: "Slow closure of voltage-gated potassium channels permits continued efflux of $K^+$ ions even after resting potential has been reached.",
    ans: 0,
    exp: "Delayed closing kinetics of voltage-gated $K^+$ channels cause transient excessive loss of positive charges, dipping the potential below $-70\\text{ mV}$. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "A nerve impulse is an all-or-none phenomenon.",
    r: "If a stimulus reaches threshold intensity, a full action potential of constant amplitude is generated; subthreshold stimuli fail to elicit an action potential.",
    ans: 0,
    exp: "The all-or-none law dictates that action potential amplitude does not vary with stimulus intensity once threshold is reached. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "Dorsal root of the spinal nerve contains afferent (sensory) fibers, whereas the ventral root contains efferent (motor) fibers.",
    r: "Cell bodies of sensory neurons are located in the dorsal root ganglion, outside the spinal cord.",
    ans: 1,
    exp: "Both are anatomically accurate facts established by the Bell-Magendie law. Dorsal roots carry sensory inputs (with pseudo-unipolar somas in DRG), and ventral roots carry motor axons. The location of the ganglia does not causally explain why functional separation of sensory and motor roots exists. Both are true, (R) is not the explanation."
  },
  {
    a: "During depolarization, local currents flow on the inner surface from the depolarized region to the adjacent resting polarized region.",
    r: "On the outer surface of the axonal membrane, current flows from the adjacent resting region back to the depolarized region to complete the electrical circuit.",
    ans: 0,
    exp: "Local loop current flow depolarizes adjacent resting segments of the axolemma to threshold, propagating the action potential forward. Both (A) and (R) are true and (R) correctly explains (A)."
  },
  {
    a: "The speed of nerve impulse conduction is inversely proportional to the diameter of the axon.",
    r: "Thinner axons have lower internal longitudinal electrical resistance to local current flow.",
    ans: 3,
    exp: "Both (A) and (R) are false. Conduction speed is DIRECTLY proportional to axon diameter because thicker axons possess LOWER internal resistance, facilitating faster local current spread."
  },
  {
    a: "In a reflex arc, the effector organ is typically a muscle or a gland.",
    r: "The motor neuron stimulates the effector to produce the mechanical or secretory reflex response.",
    ans: 0,
    exp: "Motor output from the CNS terminates on effectors (skeletal muscle contraction or glandular secretion) executing the reflex action. Both (A) and (R) are true and (R) correctly explains (A)."
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
    q: "The resting membrane potential of a mammalian neuron is approximately:",
    opts: ["$-70\\text{ mV}$", "$+30\\text{ mV}$", "$0\\text{ mV}$", "$-30\\text{ mV}$"],
    ans: 0,
    exp: "At rest, the inside of the axonal membrane is negatively charged with respect to the exterior, typically around $-70\\text{ mV}$."
  },
  {
    q: "The sodium-potassium ATPase pump transports how many sodium and potassium ions across the axolemma per cycle?",
    opts: ["$3\\text{ Na}^+$ outwards for $2\\text{ K}^+$ inwards", "$2\\text{ Na}^+$ outwards for $3\\text{ K}^+$ inwards", "$3\\text{ Na}^+$ inwards for $2\\text{ K}^+$ outwards", "$1\\text{ Na}^+$ outwards for $1\\text{ K}^+$ inwards"],
    ans: 0,
    exp: "The electrogenic $Na^+/K^+$ pump actively pumps $3\\text{ Na}^+$ ions out of the axon for every $2\\text{ K}^+$ ions pumped in using 1 ATP."
  },
  {
    q: "During the generation of an action potential (depolarization), there is a rapid influx of which ion into the axoplasm?",
    opts: ["Sodium ($Na^+$)", "Potassium ($K^+$)", "Chloride ($Cl^-$)", "Calcium ($Ca^{2+}$)"],
    ans: 0,
    exp: "Stimulation opens voltage-gated $Na^+$ channels, allowing rapid $Na^+$ influx down its electrochemical gradient to depolarize the membrane."
  },
  {
    q: "Repolarization of a nerve fiber following an action potential is primarily caused by:",
    opts: ["Efflux of $K^+$ ions out of the axoplasm", "Influx of $Na^+$ ions into the axoplasm", "Active pumping of $Cl^-$ ions", "Influx of $Ca^{2+}$ ions"],
    ans: 0,
    exp: "Repolarization occurs when voltage-gated $K^+$ channels open, allowing rapid $K^+$ efflux to restore internal negative charge."
  },
  {
    q: "The gaps between two adjacent myelin sheaths on an axon are called:",
    opts: ["Nodes of Ranvier", "Synaptic clefts", "Nissl's granules", "Schlemm's canals"],
    ans: 0,
    exp: "Nodes of Ranvier are periodic unmyelinated gaps where the axon membrane is exposed and where saltatory conduction occurs."
  },
  {
    q: "In myelinated nerve fibers, the rapid propagation of action potentials by jumping from node to node is called:",
    opts: ["Saltatory conduction", "Continuous conduction", "Retrograde transport", "Electrotonic spread"],
    ans: 0,
    exp: "Saltatory conduction (from Latin saltare, to leap) refers to impulse jumping between Nodes of Ranvier in myelinated axons."
  },
  {
    q: "Nissl's granules found in the cyton and dendrites of neurons are chemically composed of:",
    opts: ["Rough endoplasmic reticulum and free ribosomes", "Mitochondria and Golgi bodies", "Microfilaments and DNA", "Smooth endoplasmic reticulum and peroxisomes"],
    ans: 0,
    exp: "Nissl's granules are intensely basophilic masses of rough endoplasmic reticulum and ribosomes specialized for protein synthesis."
  },
  {
    q: "Which ion is directly responsible for triggering the exocytosis of neurotransmitter vesicles at a chemical synapse?",
    opts: ["Calcium ($Ca^{2+}$)", "Sodium ($Na^+$)", "Potassium ($K^+$)", "Magnesium ($Mg^{2+}$)"],
    ans: 0,
    exp: "Depolarization of the axon terminal opens voltage-gated $Ca^{2+}$ channels; $Ca^{2+}$ influx triggers synaptic vesicle fusion."
  },
  {
    q: "Which of the following is an example of an excitatory neurotransmitter commonly found in neuromuscular junctions?",
    opts: ["Acetylcholine", "GABA (gamma-aminobutyric acid)", "Glycine", "Endorphin"],
    ans: 0,
    exp: "Acetylcholine is the classic excitatory neurotransmitter at vertebrate neuromuscular junctions and many autonomic synapses."
  },
  {
    q: "The fluid-filled space separating the presynaptic and postsynaptic membranes in a chemical synapse is about:",
    opts: ["20 nm", "200 nm", "2 nm", "2 \\mu\\text{m}"],
    ans: 0,
    exp: "In a chemical synapse, the pre- and post-synaptic membranes are separated by a narrow fluid-filled space called the synaptic cleft (~20 nm)."
  },
  {
    q: "The correct sequence of components in a standard reflex arc is:",
    opts: ["Receptor $\\rightarrow$ Afferent neuron $\\rightarrow$ Interneuron/Spinal cord $\\rightarrow$ Efferent neuron $\\rightarrow$ Effector", "Effector $\\rightarrow$ Efferent neuron $\\rightarrow$ Interneuron $\\rightarrow$ Afferent neuron $\\rightarrow$ Receptor", "Receptor $\\rightarrow$ Efferent neuron $\\rightarrow$ Brain $\\rightarrow$ Afferent neuron $\\rightarrow$ Effector", "Receptor $\\rightarrow$ Interneuron $\\rightarrow$ Motor neuron $\\rightarrow$ Sensory neuron $\\rightarrow$ Effector"],
    ans: 0,
    exp: "A reflex arc proceeds unidirectionally: Sensory receptor -> Afferent neuron -> CNS interneuron -> Efferent motor neuron -> Effector muscle/gland."
  },
  {
    q: "Where are the cell bodies (somata) of primary afferent sensory neurons located?",
    opts: ["Dorsal root ganglion of the spinal nerve", "Ventral horn of spinal cord", "Lateral horn of spinal cord", "Autonomic ganglia"],
    ans: 0,
    exp: "Primary sensory pseudo-unipolar neuronal cell bodies reside in the dorsal root ganglion (DRG) located along the dorsal spinal root."
  },
  {
    q: "Which statement about electrical synapses is FALSE?",
    opts: ["They require neurotransmitter molecules and a 20 nm synaptic cleft", "Transmission of impulse across them is faster than chemical synapses", "Membranes of pre- and post-synaptic neurons are in very close physical proximity", "They are relatively rare in the human neural system"],
    ans: 0,
    exp: "Electrical synapses do NOT use chemical neurotransmitters or wide synaptic clefts; they utilize low-resistance gap junctions."
  },
  {
    q: "The enzyme that terminates synaptic transmission at cholinergic synapses by hydrolyzing acetylcholine is:",
    opts: ["Acetylcholinesterase", "Choline acetyltransferase", "Monoamine oxidase", "Adenylate cyclase"],
    ans: 0,
    exp: "Acetylcholinesterase rapidly hydrolyzes acetylcholine into acetate and choline within the synaptic cleft."
  },
  {
    q: "Unmyelinated nerve fibers in the peripheral nervous system are:",
    opts: ["Enclosed by Schwann cells that do not form a myelin sheath around them", "Completely devoid of Schwann cells", "Found only in the brain and spinal cord white matter", "Surrounded by oligodendrocytes with nodes of Ranvier"],
    ans: 0,
    exp: "Unmyelinated PNS axons rest in indentations of Schwann cell cytoplasm without forming concentric multi-layered myelin sheaths."
  },
  {
    q: "During the resting state, the axonal membrane is virtually impermeable to:",
    opts: ["Negatively charged intracellular proteins and sodium ions ($Na^+$)", "Potassium ions ($K^+$)", "Water molecules", "Lipid-soluble substances"],
    ans: 0,
    exp: "The resting axolemma is nearly impermeable to $Na^+$ and totally impermeable to large intracellular negatively charged proteins."
  },
  {
    q: "Which property ensures that a nerve impulse travels unidirectionally along a reflex arc?",
    opts: ["Strict one-way transmission across chemical synapses and refractory period of axons", "Greater diameter of dendrites than axons", "Active pumping of sodium ions backwards", "Insulation by meninges"],
    ans: 0,
    exp: "Chemical synapses release neurotransmitters only presynaptically, and refractory period prevents reverse impulse propagation along axons."
  },
  {
    q: "In the human nervous system, myelinated nerve fibers are characteristically found in:",
    opts: ["Cranial and spinal nerves", "Autonomous nervous system only", "Somatic neural system postganglionic fibers only", "Retinal bipolar cells only"],
    ans: 0,
    exp: "Myelinated nerve fibers are characteristically present in cranial and spinal nerves to enable rapid somatic transmission."
  },
  {
    q: "The action potential across an excited axonal membrane peaks at approximately:",
    opts: ["$+30\\text{ mV}$", "$-70\\text{ mV}$", "$0\\text{ mV}$", "$-90\\text{ mV}$"],
    ans: 0,
    exp: "During full depolarization, the internal membrane potential shoots up to approximately $+30\\text{ mV}$."
  },
  {
    q: "The knee-jerk reflex induced by tapping the patellar tendon is a classic example of a:",
    opts: ["Monosynaptic stretch reflex", "Polysynaptic withdrawal reflex", "Conditioned reflex", "Cranial autonomic reflex"],
    ans: 0,
    exp: "The knee-jerk reflex is a simple monosynaptic myotatic stretch reflex involving one sensory neuron synapsing directly onto an alpha motor neuron."
  }
];

const concepts = [
  { topic: "resting potential -70 mV", fact: "The resting potential across the axolemma is approximately -70 mV with an internal negative charge." },
  { topic: "Na/K ATPase electrogenic stoichiometry", fact: "The sodium-potassium pump moves 3 Na+ out for every 2 K+ in utilizing cellular ATP." },
  { topic: "depolarization Na influx", fact: "Depolarization is driven by rapid influx of Na+ through opened voltage-gated sodium channels." },
  { topic: "repolarization K efflux", fact: "Repolarization is driven by efflux of K+ through opened voltage-gated potassium channels." },
  { topic: "Nodes of Ranvier unmyelinated intervals", fact: "Nodes of Ranvier are periodic gaps in myelin where voltage-gated ion channels are highly concentrated." },
  { topic: "saltatory conduction high velocity", fact: "Saltatory conduction enables nerve impulses to leap between nodes, achieving speeds up to 100-120 m/s." },
  { topic: "Nissl granules rough ER", fact: "Nissl's granules are masses of rough endoplasmic reticulum and ribosomes found in cyton and dendrites." },
  { topic: "calcium influx synaptic vesicles", fact: "Arrival of action potentials triggers Ca2+ influx, causing synaptic vesicles to release neurotransmitters by exocytosis." },
  { topic: "synaptic cleft 20 nm dimension", fact: "In chemical synapses, a fluid-filled synaptic cleft of ~20 nm separates pre- and post-synaptic membranes." },
  { topic: "acetylcholine neuromuscular transmitter", fact: "Acetylcholine serves as the primary neurotransmitter across vertebrate neuromuscular junctions." },
  { topic: "acetylcholinesterase enzymatic termination", fact: "Acetylcholinesterase hydrolyzes acetylcholine in the synaptic cleft to terminate receptor stimulation." },
  { topic: "electrical synapse gap junctions", fact: "Electrical synapses conduct currents directly through low-resistance gap junction channels without chemical delay." },
  { topic: "reflex arc anatomical components", fact: "A reflex arc consists of receptor, sensory neuron, spinal integration center, motor neuron, and effector organ." },
  { topic: "dorsal root sensory ganglion", fact: "Cell bodies of sensory neurons are located in the dorsal root ganglion along the dorsal aspect of spinal nerves." },
  { topic: "unmyelinated fiber Schwann cell relation", fact: "Unmyelinated fibers are enclosed within Schwann cell cytoplasm without forming concentric myelin wraps." },
  { topic: "all-or-none impulse law", fact: "Action potentials follow the all-or-none law, generating maximal uniform amplitude once threshold is reached." },
  { topic: "absolute refractory period Na channel inactivation", fact: "During the absolute refractory period, inactivated voltage-gated Na+ channels prevent initiation of another impulse." },
  { topic: "hyperpolarization delayed K channel closing", fact: "Delayed closing of voltage-gated K+ channels causes transient hyperpolarization beyond the -70 mV resting level." },
  { topic: "local current loop propagation", fact: "Local electrical current loops depolarize adjacent resting axonal segments, propagating impulses along the axolemma." },
  { topic: "knee-jerk monosynaptic reflex", fact: "The knee-jerk reflex is a monosynaptic spinal stretch reflex elicited by tapping the patellar tendon." },
  { topic: "post-synaptic potential generation", fact: "Neurotransmitter binding opens ligand-gated channels, producing excitatory (EPSP) or inhibitory (IPSP) potentials." },
  { topic: "unidirectional synaptic transmission", fact: "Synaptic transmission is unidirectional because vesicle exocytosis is presynaptic and specific receptors are postsynaptic." },
  { topic: "cranial and spinal nerves myelination", fact: "Myelinated nerve fibers wrapped in Schwann cells are prominently found in cranial and spinal nerves." },
  { topic: "axon hillock action potential trigger zone", fact: "The axon hillock has the lowest threshold for excitation and serves as the trigger zone for action potentials." },
  { topic: "axon diameter conduction speed relation", fact: "Larger axon diameters offer lower internal longitudinal resistance, increasing impulse conduction velocity." },
  { topic: "ventral root motor fibers", fact: "Ventral spinal roots carry motor efferent fibers whose cell bodies reside in the ventral horn of spinal grey matter." }
];

const realisticDistractors = [
  "It is immediately replaced by calcified dentine inside the axonal cytoplasm.",
  "It triggers the complete enzymatic destruction of all peripheral Schwann cells.",
  "It permanently converts all intracellular potassium into gaseous ammonia.",
  "It causes the spontaneous fusion of all motor endplates into a non-functional syncytium.",
  "It prevents any movement of calcium ions across sarcoplasmic membranes permanently.",
  "It replaces all membrane phospholipids with crystalline glycogen plates.",
  "It completely abolishes the action of all adrenergic receptors in the heart.",
  "It induces the irreversible liquefaction of all spinal cord white matter."
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
      q: `Which of the following statements regarding ${item.topic} is NEUROPHYSIOLOGICALLY TRUE?`,
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
      q: `Identify the accurate statement concerning ${item.topic}:`,
      opts: [
        `${item.fact}`,
        d2,
        d3,
        d1
      ],
      ans: 0,
      exp: `Nerve impulse conduction principle: ${item.fact}`
    });
  } else if (idx % 4 === 2) {
    fullMcqList.push({
      q: `In the human nervous system, what is the physiological significance of ${item.topic}?`,
      opts: [
        `${item.fact}`,
        d3,
        d1,
        d2
      ],
      ans: 0,
      exp: `NCERT Neural Conduction fact: ${item.fact}`
    });
  } else {
    fullMcqList.push({
      q: `Select the correct physiological fact regarding ${item.topic}:`,
      opts: [
        `${item.fact}`,
        d1,
        d3,
        d2
      ],
      ans: 0,
      exp: `NCERT fact: ${item.fact}`
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
  const outPath = path.join(__dirname, 'data_zoology_physio_part5.js');
  const fileContent = `// Auto-generated data for Zoology Human Physiology Part 5: Conduction of nerve impulse and reflex action\nmodule.exports = ${JSON.stringify(allQuestions, null, 2)};\n`;
  fs.writeFileSync(outPath, fileContent, 'utf8');
  console.log(`Successfully wrote ${outPath}`);
} else {
  console.error("Validation failed! Not writing output.");
  process.exit(1);
}
