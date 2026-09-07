// Part 3: Aufbau principle, Pauli exclusion principle, Hund's rule & Electronic configuration
// Each subtopic contains 48 rigorous, JEE Mains/NEET aligned questions with clean KaTeX and detailed explanations.

function createQ(subTopic, question, options, correctIndex, explanation, difficulty = "Medium", questionType = "MCQ") {
  return {
    question,
    options,
    correctAnswer: options[correctIndex],
    correctOption: correctIndex,
    explanation,
    subject: "Chemistry",
    chapter: "Atomic Structure",
    subTopic,
    difficulty,
    questionType,
    type: questionType === "ASSERTION_REASON" ? "assertion-reason" : "multiple-choice",
    source: "JEE Main & NEET Chapter Bank",
    targetExams: ["JEE Main", "NEET"]
  };
}

function getAufbauPauliHundQuestions() {
  const q = [];
  const add = (text, opts, ans, exp, diff = "Medium", type = "MCQ") => q.push(createQ("Aufbau principle, Pauli exclusion principle, Hund's rule", text, opts, ans, exp, diff, type));

  add(
    "The German word 'Aufbau' literally translates in atomic theory to:",
    ["Building up", "Exclusion", "Multiplicity", "Indeterminacy"],
    0,
    "The word 'Aufbau' is German for 'building up' or 'construction', referring to filling electrons into orbitals in order of increasing energy.",
    "Easy"
  );
  add(
    "According to the $(n + l)$ rule (Bohr-Bury rule), between two orbitals, the orbital with lower energy is the one having:",
    ["A lower value of $(n + l)$", "A higher value of $(n + l)$", "A higher value of $n$", "A higher value of $l$"],
    0,
    "In multi-electron atoms, electrons first occupy the subshell with the lowest $(n + l)$ value.",
    "Easy"
  );
  add(
    "If two subshells have identical values of $(n + l)$, which subshell will be filled first according to the Aufbau principle?",
    ["The subshell with the lower principal quantum number $n$", "The subshell with the higher principal quantum number $n$", "The subshell with the higher azimuthal quantum number $l$", "Either subshell arbitrarily"],
    0,
    "When $(n + l)$ is equal for two subshells, the one with the lower value of $n$ lies lower in energy and fills first (e.g., $3d$ has $3+2=5$ and $4p$ has $4+1=5$; $3d$ fills before $4p$).",
    "Easy"
  );
  add(
    "Which of the following subshells has the lowest energy in a multi-electron atom?",
    ["$4s$", "$3d$", "$4p$", "$4d$"],
    0,
    "Values of $(n+l)$:\n- $4s$: $4 + 0 = 4$\n- $3d$: $3 + 2 = 5$\n- $4p$: $4 + 1 = 5$\n- $4d$: $4 + 2 = 6$\nLowest $(n+l)$ is $4s$ (energy = 4).",
    "Easy"
  );
  add(
    "According to the Aufbau principle, the correct order of filling of atomic orbitals is:",
    ["$1s < 2s < 2p < 3s < 3p < 4s < 3d < 4p$", "$1s < 2s < 2p < 3s < 3d < 3p < 4s < 4p$", "$1s < 2s < 3s < 2p < 3p < 3d < 4s < 4p$", "$1s < 2s < 2p < 3s < 3p < 4s < 4p < 3d$"],
    0,
    "Following the $(n + l)$ rule, $4s$ ($n+l = 4$) fills before $3d$ ($n+l = 5$). Thus: $1s < 2s < 2p < 3s < 3p < 4s < 3d < 4p$.",
    "Easy"
  );
  add(
    "Pauli's Exclusion Principle states that:",
    ["No two electrons in an atom can have the same set of all four quantum numbers", "Electrons in degenerate orbitals must have parallel spins", "Orbitals of lowest energy are filled first", "Electron position and momentum cannot both be precisely measured"],
    0,
    "Pauli's exclusion principle states that no two electrons in the same atom can possess identical values for all four quantum numbers ($n, l, m_l, m_s$).",
    "Easy"
  );
  add(
    "As an immediate consequence of Pauli's exclusion principle, an atomic orbital can hold a maximum of:",
    ["2 electrons with opposite spins", "2 electrons with parallel spins", "6 electrons", "Unlimited electrons"],
    0,
    "Since an orbital fixes $n, l, m_l$, and $m_s$ has only two values ($+1/2, -1/2$), each orbital can hold at most two electrons with antiparallel spins.",
    "Easy"
  );
  add(
    "Hund's Rule of Maximum Multiplicity dictates that:",
    ["Electron pairing in degenerate orbitals cannot occur until each orbital is singly occupied with parallel spins", "Electrons must occupy orbitals of lowest energy first", "No two electrons can have identical quantum numbers", "Electrons in the same orbital must have opposite spins"],
    0,
    "Hund's rule states that for degenerate orbitals, pairing does not begin until each subshell orbital contains one electron with parallel spins.",
    "Easy"
  );
  add(
    "The electronic configuration of Nitrogen ($Z = 7$) is $1s^2 2s^2 2p_x^1 2p_y^1 2p_z^1$. Writing it as $1s^2 2s^2 2p_x^2 2p_y^1 2p_z^0$ would be a violation of:",
    ["Hund's rule of maximum multiplicity", "Pauli's exclusion principle", "Aufbau principle", "Heisenberg's uncertainty principle"],
    0,
    "Pairing electrons in $2p_x$ before singly occupying $2p_z$ violates Hund's rule, because the degenerate $2p$ orbitals are not filled with parallel unpaired spins first.",
    "Easy"
  );
  add(
    "If an orbital contains two electrons having parallel spins $(\\uparrow\\uparrow)$, this directly violates:",
    ["Pauli's exclusion principle", "Aufbau principle", "Hund's rule", "Bohr's quantization rule"],
    0,
    "Two electrons in the same orbital have the same $n, l, m_l$. If both have spin $\\uparrow$ ($m_s = +1/2$), all 4 quantum numbers would be identical, which violates Pauli's principle.",
    "Easy"
  );
  add(
    "The physical basis behind Hund's rule of maximum multiplicity is:",
    ["Minimization of electrostatic repulsion and maximization of exchange energy", "Minimization of nuclear attraction", "Maximization of kinetic energy", "Conservation of orbital angular momentum"],
    0,
    "Electrons in different degenerate orbitals stay farther apart, reducing Coulomb repulsion. Parallel spins also maximize stabilizing quantum exchange energy.",
    "Medium"
  );
  add(
    "The exchange energy in a subshell containing $n$ electrons with parallel spins is proportional to:",
    ["$\\frac{n(n - 1)}{2}$", "$n^2$", "$2n + 1$", "$n(n + 1)$"],
    0,
    "Exchange interactions occur between any pair of electrons having identical spin. The number of such pairs is given by the combination $\\binom{n}{2} = \\frac{n(n-1)}{2}$.",
    "Medium"
  );
  add(
    "In a half-filled $d$-subshell ($d^5$, e.g., $\\text{Mn}^{2+}$), all 5 electrons have parallel spins. What is the total number of exchange pairs?",
    ["10", "5", "15", "6"],
    0,
    "Number of exchange pairs = $\\binom{5}{2} = \\frac{5 \\times 4}{2} = 10$. This large exchange energy provides exceptional stability.",
    "Medium"
  );
  add(
    "In a $d^4$ configuration with all 4 electrons having parallel spins, how many exchange pairs exist?",
    ["6", "4", "10", "3"],
    0,
    "Number of exchange pairs = $\\binom{4}{2} = \\frac{4 \\times 3}{2} = 6$.",
    "Easy"
  );
  add(
    "What is the total electron spin $S$ and spin multiplicity $(2S + 1)$ for the ground state of a nitrogen atom ($2p^3$)?",
    ["$S = 3/2$, multiplicity $= 4$", "$S = 1/2$, multiplicity $= 2$", "$S = 1$, multiplicity $= 3$", "$S = 0$, multiplicity $= 1$"],
    0,
    "In $2p^3$, there are 3 unpaired electrons with parallel spins: $S = 1/2 + 1/2 + 1/2 = 3/2$. Multiplicity = $2S + 1 = 2(3/2) + 1 = 4$ (quartet state).",
    "Medium"
  );
  add(
    "What is the spin multiplicity $(2S + 1)$ for a completely filled subshell (such as $s^2, p^6, d^{10}$)?",
    ["1 (Singlet)", "2 (Doublet)", "3 (Triplet)", "0"],
    0,
    "In a completely filled subshell, all electrons are paired in opposite spins, so total spin $S = 0$. Multiplicity = $2(0) + 1 = 1$ (singlet state).",
    "Easy"
  );
  add(
    "What is the total spin $S$ and spin multiplicity for an oxygen atom in its ground state ($2p^4$)?",
    ["$S = 1$, multiplicity $= 3$", "$S = 2$, multiplicity $= 5$", "$S = 1/2$, multiplicity $= 2$", "$S = 0$, multiplicity $= 1$"],
    0,
    "In $2p^4$, Hund's rule gives: $(\\uparrow\\downarrow)(\\uparrow)(\\uparrow)$. There are 2 unpaired electrons with parallel spins: $S = 1/2 + 1/2 = 1$. Multiplicity = $2(1) + 1 = 3$ (triplet state).",
    "Medium"
  );
  add(
    "Which of the following electron orbital occupations represents a violation of BOTH Aufbau principle and Hund's rule?",
    ["Electrons filling $2p$ before $2s$ is completely filled, and pairing before filling all $2p$ orbitals", "Two electrons with identical spin in $1s$", "Filling $4s$ before $3d$", "Degenerate orbitals filled with single electrons of antiparallel spins"],
    0,
    "Leaving a lower energy orbital ($2s$) partially filled while filling a higher energy orbital ($2p$) violates Aufbau. Pairing electrons in $2p$ before single occupation violates Hund's rule.",
    "Medium"
  );
  add(
    "Consider the orbital diagram for carbon ($Z = 6$): $1s^2 2s^2 2p_x^1 2p_y^1$ with one electron having spin $+1/2$ and the other $-1/2$. This configuration violates:",
    ["Hund's rule of maximum multiplicity", "Pauli's exclusion principle", "Aufbau principle", "None of the above"],
    0,
    "Hund's rule requires degenerate orbitals to be singly occupied with parallel spins (same spin direction) to maximize multiplicity and exchange energy.",
    "Easy"
  );
  add(
    "Which of the following subshell pairs has the SAME value of $(n + l)$?",
    ["$3d$ and $4p$", "$3s$ and $3p$", "$4s$ and $4p$", "$2p$ and $3d$"],
    0,
    "For $3d$: $n+l = 3+2 = 5$. For $4p$: $n+l = 4+1 = 5$. Both have $(n + l) = 5$.",
    "Easy"
  );
  add(
    "Between the $5d$ and $6p$ subshells, which one has lower energy according to the Aufbau principle?",
    ["$5d$", "$6p$", "Both have identical energy in multi-electron atoms", "Depends on the atomic number"],
    0,
    "For $5d$: $n+l = 5+2 = 7$. For $6p$: $n+l = 6+1 = 7$. Since $(n+l)$ is identical, the subshell with lower $n$ ($5d$, $n=5$) has lower energy and fills first.",
    "Medium"
  );
  add(
    "Between $4f, 5d, 6p,$ and $7s$, which subshell has the lowest energy?",
    ["$6p$", "$4f$", "$5d$", "$7s$"],
    0,
    "Calculate $(n+l)$:\n- $6p$: $6 + 1 = 7$\n- $4f$: $4 + 3 = 7$\n- $5d$: $5 + 2 = 7$\n- $7s$: $7 + 0 = 7$\nAll four have $(n+l) = 7$! Therefore, the one with the lowest $n$ has the lowest energy: $4f$ ($n=4$) < $5d$ ($n=5$) < $6p$ ($n=6$) < $7s$ ($n=7$).",
    "Hard"
  );
  add(
    "Which subshell fills immediately after $6s$ is completely filled in the periodic table?",
    ["$4f$", "$5d$", "$6p$", "$5s$"],
    0,
    "After $6s$ ($n+l = 6$), the next available subshell with lowest energy is $4f$ ($n+l = 4+3 = 7$, with $n=4$).",
    "Medium"
  );
  add(
    "Which subshell fills immediately after $5p$ is completely filled?",
    ["$6s$", "$4f$", "$5d$", "$6p$"],
    0,
    "For $5p$, $n+l = 5+1 = 6$. The next lowest energy orbital is $6s$ ($n+l = 6+0 = 6$, but higher $n$), which fills before $4f$ ($n+l = 7$).",
    "Medium"
  );
  add(
    "How many electrons can be placed in subshells having $n + l = 3$ in an atom?",
    ["8", "2", "6", "10"],
    0,
    "Subshells with $n + l = 3$:\n- $n = 3, l = 0$ ($3s$): 2 electrons\n- $n = 2, l = 1$ ($2p$): 6 electrons\nTotal electrons = $2 + 6 = 8$.",
    "Medium"
  );
  add(
    "If Hund's rule was NOT followed, what would be the magnetic nature of the ground state of an isolated oxygen atom ($1s^2 2s^2 2p^4$)?",
    ["Diamagnetic (if paired as $2p_x^2 2p_y^2 2p_z^0$)", "Ferromagnetic", "Paramagnetic with 4 unpaired electrons", "Paramagnetic with 3 unpaired electrons"],
    0,
    "Without Hund's rule, electrons could pair up completely in $2p_x$ and $2p_y$, leaving $2p_z$ empty, giving 0 unpaired electrons (diamagnetic).",
    "Medium"
  );
  add(
    "If the spin quantum number could have three possible values ($m_s = +1/2, 0, -1/2$) instead of two, how many elements would be present in the first period of the periodic table?",
    ["3", "2", "6", "4"],
    0,
    "The first period fills the $1s$ orbital. If each orbital could hold 3 electrons (one for each spin state), the first period would have 3 elements.",
    "Medium"
  );
  add(
    "If each orbital could accommodate a maximum of 3 electrons, the maximum number of electrons in the 2nd principal shell ($n = 2$) would be:",
    ["12", "8", "18", "6"],
    0,
    "For $n = 2$, total orbitals = $n^2 = 2^2 = 4$ ($2s, 2p_x, 2p_y, 2p_z$). With 3 electrons per orbital, total electrons = $4 \\times 3 = 12$.",
    "Medium"
  );
  add(
    "If Pauli's exclusion principle did NOT hold, the ground state electronic configuration of Lithium ($Z = 3$) would be:",
    ["$1s^3$", "$1s^2 2s^1$", "$1s^1 2s^2$", "$1s^2 2p^1$"],
    0,
    "Without Pauli's exclusion principle, all three electrons would collapse into the lowest energy $1s$ orbital to minimize total energy, forming $1s^3$.",
    "Easy"
  );
  add(
    "The configuration $1s^2 2s^1 2p_x^1 2p_y^1 2p_z^1$ represents carbon in:",
    ["An excited state", "The ground state", "A forbidden state violating Pauli's principle", "An ionized state"],
    0,
    "In carbon ($Z = 6$), promoting one $2s$ electron to the empty $2p_z$ orbital produces an excited state configuration with 4 unpaired electrons.",
    "Easy"
  );
  add(
    "Which of the following represents an excited state of an atom?",
    ["$[\\text{Ne}] 3s^1 3p^2$", "$[\\text{Ne}] 3s^2 3p^1$", "$[\\text{Ar}] 3d^5 4s^1$", "$1s^2 2s^2 2p^6$"],
    0,
    "For an aluminum atom ($Z = 13$), the ground state is $[\\text{Ne}] 3s^2 3p^1$. Promoting a $3s$ electron to $3p$ gives $[\\text{Ne}] 3s^1 3p^2$, an excited state.",
    "Easy"
  );
  add(
    "Which of the following configurations is completely FORBIDDEN (cannot exist in ground or excited state)?",
    ["$1s^2 2s^2 2p^7$", "$1s^2 2s^1 2p^3$", "$1s^2 2s^2 2p^5 3s^1$", "$[\\text{Ar}] 3d^4 4s^2$"],
    0,
    "A $p$-subshell has 3 orbitals and can hold at most $3 \\times 2 = 6$ electrons. Accommodating 7 electrons in $2p$ directly violates Pauli's principle and is strictly forbidden.",
    "Easy"
  );
  add(
    "According to Hund's rule, the ground state term of an atom has the:",
    ["Maximum total spin multiplicity", "Minimum total spin multiplicity", "Zero total spin", "Minimum total orbital angular momentum"],
    0,
    "Hund's first rule states that the lowest energy state is the one that has maximum total spin $S$ (maximum spin multiplicity $2S+1$).",
    "Medium"
  );
  add(
    "What is the maximum number of unpaired electrons that can be present in a $d$-subshell?",
    ["5", "10", "3", "7"],
    0,
    "A $d$-subshell has 5 orbitals. By Hund's rule, each can hold 1 unpaired electron with parallel spins, giving a maximum of 5 unpaired electrons.",
    "Easy"
  );
  add(
    "What is the maximum number of unpaired electrons that can be present in an $f$-subshell?",
    ["7", "14", "5", "10"],
    0,
    "An $f$-subshell has 7 degenerate orbitals, accommodating up to 7 unpaired electrons with parallel spins ($f^7$, e.g., $\\text{Eu}^{2+}, \\text{Gd}^{3+}$).",
    "Easy"
  );
  add(
    "Which of the following elements has the maximum number of unpaired electrons in its ground state?",
    ["$\\text{Cr}$ ($Z = 24$)", "$\\text{Fe}$ ($Z = 26$)", "$\\text{Mn}$ ($Z = 25$)", "$\\text{Cu}$ ($Z = 29$)"],
    0,
    "Electronic configurations:\n- $\\text{Cr}$: $[\\text{Ar}] 3d^5 4s^1 \\implies 5 + 1 = 6$ unpaired electrons\n- $\\text{Mn}$: $[\\text{Ar}] 3d^5 4s^2 \\implies 5$ unpaired electrons\n- $\\text{Fe}$: $[\\text{Ar}] 3d^6 4s^2 \\implies 4$ unpaired electrons\n- $\\text{Cu}$: $[\\text{Ar}] 3d^{10} 4s^1 \\implies 1$ unpaired electron\nCr has the maximum (6).",
    "Easy"
  );
  add(
    "The electronic configuration of an atom is $1s^2 2s^2 2p^6 3s^2 3p^6 3d^3 4s^2$. The number of unpaired electrons in this atom is:",
    ["3", "2", "5", "1"],
    0,
    "All subshells are completely filled except $3d^3$. The 3 electrons in degenerate $d$-orbitals occupy separate orbitals with parallel spins, giving 3 unpaired electrons.",
    "Easy"
  );
  add(
    "Why does the $4s$ orbital fill before the $3d$ orbital in neutral atoms according to the Aufbau principle?",
    ["$4s$ has lower $(n + l)$ value ($4 + 0 = 4$) than $3d$ ($3 + 2 = 5$)", "$4s$ is closer to the nucleus on average than $3d$", "$4s$ can hold more electrons than $3d$", "$4s$ orbital has higher angular momentum"],
    0,
    "By the $(n+l)$ rule, $4s$ has $n+l = 4$ whereas $3d$ has $n+l = 5$. Lower $(n+l)$ means lower energy, so $4s$ fills before $3d$.",
    "Easy"
  );
  add(
    "When an atom like iron ($[\\text{Ar}] 3d^6 4s^2$) ionizes to form $\\text{Fe}^{2+}$, which electrons are removed first?",
    ["The $4s$ electrons", "The $3d$ electrons", "One $4s$ and one $3d$ electron", "The $3p$ electrons"],
    0,
    "Even though $4s$ fills before $3d$, the $4s$ electrons have higher principal quantum number ($n = 4$) and lie farther out. Upon ionization, electrons are always removed from the outermost shell first ($4s$).",
    "Easy"
  );
  add(
    "The ground state configuration of Boron ($Z = 5$) is $1s^2 2s^2 2p^1$. The spin multiplicity of the ground state is:",
    ["2", "1", "3", "4"],
    0,
    "There is 1 unpaired electron ($S = 1/2$). Spin multiplicity = $2S + 1 = 2(1/2) + 1 = 2$ (doublet state).",
    "Easy"
  );
  add(
    "In potassium ($Z = 19$), the 19th electron enters into which orbital?",
    ["$4s$", "$3d$", "$3p$", "$4p$"],
    0,
    "For potassium, $[\\text{Ar}]$ accounts for 18 electrons ($1s^2 2s^2 2p^6 3s^2 3p^6$). Since $4s$ ($n+l = 4$) has lower energy than $3d$ ($n+l = 5$), the 19th electron enters $4s$.",
    "Easy"
  );
  add(
    "Which quantum number distinguishes between the two electrons present in a helium atom ($1s^2$)?",
    ["Spin quantum number ($m_s$)", "Principal quantum number ($n$)", "Azimuthal quantum number ($l$)", "Magnetic quantum number ($m_l$)"],
    0,
    "Both electrons share $n = 1, l = 0, m_l = 0$. By Pauli's exclusion principle, one must have $m_s = +1/2$ and the other $m_s = -1/2$.",
    "Easy"
  );
  add(
    "The pairing energy ($P$) in crystal field theory relates to Hund's rule because:",
    ["Pairing electrons in the same orbital incurs repulsive coulombic and loss of exchange energy", "Pairing always releases energy", "Pairing violates Pauli's principle", "Pairing changes the nuclear charge"],
    0,
    "Forcing two electrons into the same orbital requires overcoming electrostatic repulsion and forfeits exchange stabilization, requiring pairing energy $P$.",
    "Medium"
  );
  add(
    "Assertion (A): The ground state electronic configuration of Nitrogen is $1s^2 2s^2 2p_x^1 2p_y^1 2p_z^1$ and not $1s^2 2s^2 2p_x^2 2p_y^1 2p_z^0$.\nReason (R): Hund's rule states that pairing of electrons in degenerate orbitals does not take place until each orbital is singly occupied.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "Hund's rule ensures that $2p$ electrons singly occupy separate orbitals before pairing begins. Both statements are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): Half-filled and fully filled subshells possess extra stability.\nReason (R): Half-filled and fully filled subshells have relatively symmetrical distribution of electrons and maximum exchange energy.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "Symmetry leads to smaller shielding and lower energy, and identical spin states maximize stabilizing exchange energy. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): In iron ($Z = 26$), electrons are removed from $4s$ before $3d$ during ionization to form $\\text{Fe}^{2+}$.\nReason (R): In multi-electron transition metal cations, once $3d$ is occupied, $3d$ orbitals fall lower in energy than $4s$ orbitals.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "As positive charge builds and $3d$ orbitals become populated, $3d$ electrons shield each other less than the nucleus attracts them, dropping $3d$ lower in energy than $4s$. Thus $4s$ electrons are lost first. Both are true and (R) explains (A).",
    "Medium",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): Two electrons occupying the same orbital must have antiparallel spins.\nReason (R): No two electrons in an atom can have the same values for all four quantum numbers according to Pauli's exclusion principle.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "For electrons in the same orbital, $n, l, m_l$ are identical. To comply with Pauli's principle, their $m_s$ values must differ ($+1/2$ and $-1/2$). Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): $4s$ orbital has lower energy than $3d$ orbital in neutral potassium and calcium atoms.\nReason (R): For $4s$, $n + l = 4$, whereas for $3d$, $n + l = 5$.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "By the $(n+l)$ rule, smaller $(n+l)$ corresponds to lower orbital energy. Both are true and (R) is the correct explanation.",
    "Easy",
    "ASSERTION_REASON"
  );

  return q;
}

function getElectronicConfigurationQuestions() {
  const q = [];
  const add = (text, opts, ans, exp, diff = "Medium", type = "MCQ") => q.push(createQ("Electronic configuration", text, opts, ans, exp, diff, type));

  add(
    "The anomalous electronic configuration of Chromium ($Z = 24$) in its ground state is:",
    ["$[\\text{Ar}] 3d^5 4s^1$", "$[\\text{Ar}] 3d^4 4s^2$", "$[\\text{Ar}] 3d^6 4s^0$", "$[\\text{Ar}] 3d^3 4s^2 4p^1$"],
    0,
    "Chromium has the configuration $[\\text{Ar}] 3d^5 4s^1$ rather than $3d^4 4s^2$ because a half-filled $d^5$ subshell gains extraordinary exchange energy and symmetry stability.",
    "Easy"
  );
  add(
    "The anomalous ground state electronic configuration of Copper ($Z = 29$) is:",
    ["$[\\text{Ar}] 3d^{10} 4s^1$", "$[\\text{Ar}] 3d^9 4s^2$", "$[\\text{Ar}] 3d^8 4s^2 4p^1$", "$[\\text{Ar}] 3d^{10} 4p^1$"],
    0,
    "Copper adopts $[\\text{Ar}] 3d^{10} 4s^1$ rather than $3d^9 4s^2$ due to the exceptional thermodynamic stability of the fully filled $3d^{10}$ subshell.",
    "Easy"
  );
  add(
    "What is the ground state electronic configuration of Palladium ($\\text{Pd}, Z = 46$)?",
    ["$[\\text{Kr}] 4d^{10} 5s^0$", "$[\\text{Kr}] 4d^8 5s^2$", "$[\\text{Kr}] 4d^9 5s^1$", "$[\\text{Kr}] 4d^{10} 5s^1$"],
    0,
    "Palladium is unique among transition metals in having a completely filled $4d^{10}$ shell and completely empty $5s^0$ shell: $[\\text{Kr}] 4d^{10} 5s^0$.",
    "Medium"
  );
  add(
    "The electronic configuration of Gadolinium ($\\text{Gd}, Z = 64$) is:",
    ["$[\\text{Xe}] 4f^7 5d^1 6s^2$", "$[\\text{Xe}] 4f^8 6s^2$", "$[\\text{Xe}] 4f^7 6s^2 6p^1$", "$[\\text{Xe}] 4f^6 5d^2 6s^2$"],
    0,
    "Gadolinium retains the extra-stable half-filled $4f^7$ subshell by placing the next electron in the $5d$ orbital: $[\\text{Xe}] 4f^7 5d^1 6s^2$.",
    "Medium"
  );
  add(
    "What is the electronic configuration of the ferric ion ($\\text{Fe}^{3+}, Z = 26$)?",
    ["$[\\text{Ar}] 3d^5$", "$[\\text{Ar}] 3d^6 4s^1$", "$[\\text{Ar}] 3d^4 4s^1$", "$[\\text{Ar}] 3d^3 4s^2$"],
    0,
    "Neutral $\\text{Fe}$ is $[\\text{Ar}] 3d^6 4s^2$. Ionization removes two $4s$ electrons and one $3d$ electron, leaving $[\\text{Ar}] 3d^5$.",
    "Easy"
  );
  add(
    "What is the electronic configuration of the cuprous ion ($\\text{Cu}^+, Z = 29$)?",
    ["$[\\text{Ar}] 3d^{10}$", "$[\\text{Ar}] 3d^9 4s^1$", "$[\\text{Ar}] 3d^8 4s^2$", "$[\\text{Ar}] 3d^{10} 4s^1$"],
    0,
    "Neutral $\\text{Cu}$ is $[\\text{Ar}] 3d^{10} 4s^1$. Loss of the single $4s$ electron produces $\\text{Cu}^+$ with $[\\text{Ar}] 3d^{10}$.",
    "Easy"
  );
  add(
    "What is the electronic configuration of the cupric ion ($\\text{Cu}^{2+}, Z = 29$)?",
    ["$[\\text{Ar}] 3d^9$", "$[\\text{Ar}] 3d^{10}$", "$[\\text{Ar}] 3d^8 4s^1$", "$[\\text{Ar}] 3d^7 4s^2$"],
    0,
    "$\\text{Cu}^{2+}$ is formed by losing one $4s$ electron and one $3d$ electron from $[\\text{Ar}] 3d^{10} 4s^1$, yielding $[\\text{Ar}] 3d^9$.",
    "Easy"
  );
  add(
    "Which of the following transition metal ions has the maximum number of unpaired electrons?",
    ["$\\text{Mn}^{2+}$ ($Z = 25$)", "$\\text{Fe}^{2+}$ ($Z = 26$)", "$\\text{Co}^{2+}$ ($Z = 27$)", "$\\text{Ni}^{2+}$ ($Z = 28$)"],
    0,
    "Configurations of $M^{2+}$:\n- $\\text{Mn}^{2+}$: $3d^5 \\implies 5$ unpaired electrons\n- $\\text{Fe}^{2+}$: $3d^6 \\implies 4$ unpaired electrons\n- $\\text{Co}^{2+}$: $3d^7 \\implies 3$ unpaired electrons\n- $\\text{Ni}^{2+}$: $3d^8 \\implies 2$ unpaired electrons\n$\\text{Mn}^{2+}$ has the maximum (5).",
    "Easy"
  );
  add(
    "The number of unpaired electrons in a neutral cobalt atom ($\\text{Co}, Z = 27$) in its ground state is:",
    ["3", "2", "4", "1"],
    0,
    "$\\text{Co}$ is $[\\text{Ar}] 3d^7 4s^2$. In $3d^7$, 2 orbitals are doubly occupied and 3 orbitals are singly occupied, so there are 3 unpaired electrons.",
    "Easy"
  );
  add(
    "Which of the following pairs of ions are isoelectronic?",
    ["$\\text{Na}^+$ and $\\text{Mg}^{2+}$", "$\\text{K}^+$ and $\\text{Na}^+$", "$\\text{Fe}^{2+}$ and $\\text{Fe}^{3+}$", "$\\text{Ca}^{2+}$ and $\\text{Mg}^{2+}$"],
    0,
    "$\\text{Na}^+$ has $11 - 1 = 10$ electrons ($1s^2 2s^2 2p^6$). $\\text{Mg}^{2+}$ has $12 - 2 = 10$ electrons ($1s^2 2s^2 2p^6$). Both have 10 electrons, making them isoelectronic.",
    "Easy"
  );
  add(
    "Which of the following species has 18 electrons (isoelectronic with Argon)?",
    ["$\\text{S}^{2-}, \\text{Cl}^-, \\text{K}^+, \\text{Ca}^{2+}$", "$\\text{O}^{2-}, \\text{F}^-, \\text{Na}^+, \\text{Mg}^{2+}$", "$\\text{N}^{3-}, \\text{P}^{3-}, \\text{As}^{3-}$", "$\\text{Fe}^{2+}, \\text{Co}^{3+}$"],
    0,
    "$\\text{S}^{2-}$ ($16+2=18$), $\\text{Cl}^-$ ($17+1=18$), $\\text{K}^+$ ($19-1=18$), $\\text{Ca}^{2+}$ ($20-2=18$) all have 18 electrons.",
    "Easy"
  );
  add(
    "The total number of $d$-electrons in an isolated neutral Chlorine atom ($Z = 17$) is:",
    ["0", "5", "7", "2"],
    0,
    "The ground state configuration of chlorine is $1s^2 2s^2 2p^6 3s^2 3p^5$. There are zero electrons in $d$-orbitals.",
    "Easy"
  );
  add(
    "The total number of $p$-electrons in a neutral Silicon atom ($Z = 14$) is:",
    ["8", "6", "2", "4"],
    0,
    "Silicon configuration: $1s^2 2s^2 2p^6 3s^2 3p^2$. Total $p$-electrons = $6$ (in $2p$) $+ 2$ (in $3p$) = 8.",
    "Easy"
  );
  add(
    "The total number of $s$-electrons in a neutral Potassium atom ($Z = 19$) is:",
    ["7", "8", "6", "9"],
    0,
    "Potassium: $1s^2 2s^2 2p^6 3s^2 3p^6 4s^1$. Total $s$-electrons = $2 + 2 + 2 + 1 = 7$.",
    "Easy"
  );
  add(
    "How many core (inner-shell) electrons and valence electrons are present in a neutral Germanium atom ($Z = 32$)?",
    ["28 core electrons and 4 valence electrons", "30 core electrons and 2 valence electrons", "18 core electrons and 14 valence electrons", "20 core electrons and 12 valence electrons"],
    0,
    "Germanium: $[\\text{Ar}] 3d^{10} 4s^2 4p^2$. The valence electrons belong to the outermost shell ($n = 4$): $4s^2 4p^2$, which gives 4 valence electrons. The remaining $32 - 4 = 28$ are core electrons.",
    "Medium"
  );
  add(
    "What is the ground state electronic configuration of the sulfide ion ($\\text{S}^{2-}, Z = 16$)?",
    ["$1s^2 2s^2 2p^6 3s^2 3p^6$", "$1s^2 2s^2 2p^6 3s^2 3p^4$", "$1s^2 2s^2 2p^6 3s^2 3p^5$", "$1s^2 2s^2 2p^6 3s^1 3p^6$"],
    0,
    "Neutral sulfur is $[\\text{Ne}] 3s^2 3p^4$. Adding 2 electrons fills the $3p$ subshell: $1s^2 2s^2 2p^6 3s^2 3p^6$ (noble gas configuration of Ar).",
    "Easy"
  );
  add(
    "The electronic configuration of Scandium ($\\text{Sc}, Z = 21$) is:",
    ["$[\\text{Ar}] 3d^1 4s^2$", "$[\\text{Ar}] 3d^2 4s^1$", "$[\\text{Ar}] 3d^3 4s^0$", "$[\\text{Ar}] 4s^2 4p^1$"],
    0,
    "Scandium is the first $3d$ transition element: $[\\text{Ar}] 3d^1 4s^2$.",
    "Easy"
  );
  add(
    "What is the electronic configuration of the titanous ion ($\\text{Ti}^{2+}, Z = 22$)?",
    ["$[\\text{Ar}] 3d^2$", "$[\\text{Ar}] 3d^1 4s^1$", "$[\\text{Ar}] 4s^2$", "$[\\text{Ar}] 3d^4$"],
    0,
    "Neutral $\\text{Ti}$ is $[\\text{Ar}] 3d^2 4s^2$. Loss of the two outermost $4s$ electrons leaves $[\\text{Ar}] 3d^2$.",
    "Easy"
  );
  add(
    "The ion $\\text{Ti}^{4+}$ ($Z = 22$) has the electronic configuration of:",
    ["Argon ($[\\text{Ar}]$)", "Neon ($[\\text{Ne}]$)", "$[\\text{Ar}] 3d^2$", "$[\\text{Ar}] 4s^2$"],
    0,
    "Neutral $\\text{Ti}$ is $[\\text{Ar}] 3d^2 4s^2$. Losing all 4 valence electrons produces $\\text{Ti}^{4+}$ with $[\\text{Ar}]$ (noble gas configuration, diamagnetic).",
    "Easy"
  );
  add(
    "The ground state configuration of Nickel ($\\text{Ni}, Z = 28$) is:",
    ["$[\\text{Ar}] 3d^8 4s^2$", "$[\\text{Ar}] 3d^9 4s^1$", "$[\\text{Ar}] 3d^{10} 4s^0$", "$[\\text{Ar}] 3d^7 4s^2 4p^1$"],
    0,
    "Nickel has the standard transition metal configuration: $[\\text{Ar}] 3d^8 4s^2$.",
    "Easy"
  );
  add(
    "What is the spin-only magnetic moment of $\\text{Ni}^{2+}$ ($Z = 28$)?",
    ["$2.83\\text{ BM}$", "$1.73\\text{ BM}$", "$3.87\\text{ BM}$", "$0\\text{ BM}$"],
    0,
    "$\\text{Ni}^{2+}$ is $[\\text{Ar}] 3d^8$. In $3d^8$, there are 2 unpaired electrons: $\\mu = \\sqrt{2(2+2)} = \\sqrt{8} \\approx 2.83\\text{ BM}$.",
    "Easy"
  );
  add(
    "Which of the following ions is diamagnetic?",
    ["$\\text{Sc}^{3+}$ ($Z = 21$)", "$\\text{Cr}^{3+}$ ($Z = 24$)", "$\\text{Fe}^{3+}$ ($Z = 26$)", "$\\text{Mn}^{2+}$ ($Z = 25$)",],
    0,
    "$\\text{Sc}^{3+}$ is $[\\text{Ar}]$, having all completely filled electron shells with 0 unpaired electrons, making it diamagnetic.",
    "Easy"
  );
  add(
    "An atom of an element has 2 electrons in K shell, 8 electrons in L shell, and 6 electrons in M shell. The element and its number of unpaired electrons are:",
    ["Sulfur ($Z = 16$), 2 unpaired electrons", "Oxygen ($Z = 8$), 2 unpaired electrons", "Silicon ($Z = 14$), 2 unpaired electrons", "Phosphorus ($Z = 15$), 3 unpaired electrons"],
    0,
    "Total electrons = $2 + 8 + 6 = 16$ (Sulfur). Valence shell is $3s^2 3p^4$. In $3p^4$, there are 2 unpaired electrons.",
    "Easy"
  );
  add(
    "What is the electronic configuration of a neutral Phosphorus atom ($Z = 15$)?",
    ["$1s^2 2s^2 2p^6 3s^2 3p^3$", "$1s^2 2s^2 2p^6 3s^1 3p^4$", "$1s^2 2s^2 2p^6 3s^2 3p^2 3d^1$", "$1s^2 2s^2 2p^6 3s^0 3p^5$"],
    0,
    "Phosphorus ($Z = 15$) has ground state configuration $[\\text{Ne}] 3s^2 3p^3$ with a stable half-filled $3p$ subshell.",
    "Easy"
  );
  add(
    "The electronic configuration of an element is $1s^2 2s^2 2p^6 3s^2 3p^6 3d^5 4s^1$. This element belongs to which group of the periodic table?",
    ["Group 6", "Group 5", "Group 7", "Group 16"],
    0,
    "This is Chromium ($Z = 24$). For $d$-block elements, Group number = $(n-1)d$ electrons $+ ns$ electrons = $5 + 1 = 6$.",
    "Medium"
  );
  add(
    "The electronic configuration of an element is $[\\text{Kr}] 4d^{10} 5s^1$. The element is:",
    ["Silver ($\\text{Ag}, Z = 47$)", "Gold ($\\text{Au}, Z = 79$)", "Copper ($\\text{Cu}, Z = 29$)", "Cadmium ($\\text{Cd}, Z = 48$)"],
    0,
    "Silver has atomic number 47 and anomalous configuration $[\\text{Kr}] 4d^{10} 5s^1$, analogous to copper.",
    "Easy"
  );
  add(
    "What is the ground state configuration of the zinc ion ($\\text{Zn}^{2+}, Z = 30$)?",
    ["$[\\text{Ar}] 3d^{10}$", "$[\\text{Ar}] 3d^9 4s^1$", "$[\\text{Ar}] 3d^8 4s^2$", "$[\\text{Ar}] 3d^{10} 4s^2$"],
    0,
    "Neutral $\\text{Zn}$ is $[\\text{Ar}] 3d^{10} 4s^2$. Ionization removes both $4s$ electrons, yielding $[\\text{Ar}] 3d^{10}$.",
    "Easy"
  );
  add(
    "An element with atomic number $Z = 35$ has its outermost electronic configuration as:",
    ["$4s^2 4p^5$", "$3d^{10} 4s^2 4p^3$", "$4s^1 4p^6$", "$3s^2 3p^5$"],
    0,
    "$Z = 35$ is Bromine: $[\\text{Ar}] 3d^{10} 4s^2 4p^5$. The outermost shell ($n = 4$) configuration is $4s^2 4p^5$.",
    "Easy"
  );
  add(
    "How many elements in the first transition series ($3d$ series, $Z = 21$ to $30$) have an anomalous ground-state electron configuration?",
    ["Two (Cr and Cu)", "Three (Cr, Mn, Cu)", "One (Cr only)", "Four (Sc, Cr, Cu, Zn)"],
    0,
    "In the $3d$ series, exactly two elements show anomalous ground state configurations: Chromium ($3d^5 4s^1$) and Copper ($3d^{10} 4s^1$).",
    "Easy"
  );
  add(
    "The electronic configuration of Europium ($\\text{Eu}, Z = 63$) is:",
    ["$[\\text{Xe}] 4f^7 6s^2$", "$[\\text{Xe}] 4f^6 5d^1 6s^2$", "$[\\text{Xe}] 4f^8 6s^1$", "$[\\text{Xe}] 4f^7 5d^1 6s^1$"],
    0,
    "Europium has a stable half-filled $4f^7$ subshell: $[\\text{Xe}] 4f^7 6s^2$.",
    "Medium"
  );
  add(
    "What is the ground state configuration of the nitride ion ($\\text{N}^{3-}, Z = 7$)?",
    ["$1s^2 2s^2 2p^6$", "$1s^2 2s^2 2p^5$", "$1s^2 2s^2 2p^4$", "$1s^2 2s^2 2p^3$"],
    0,
    "Neutral nitrogen is $1s^2 2s^2 2p^3$. Adding 3 electrons yields $1s^2 2s^2 2p^6$, which is isoelectronic with Neon.",
    "Easy"
  );
  add(
    "Which of the following atoms has exactly 1 unpaired electron in its ground state?",
    ["Aluminum ($\\text{Al}, Z = 13$)", "Silicon ($\\text{Si}, Z = 14$)", "Phosphorus ($\\text{P}, Z = 15$)", "Magnesium ($\\text{Mg}, Z = 12$)"],
    0,
    "Aluminum is $[\\text{Ne}] 3s^2 3p^1$. The single $3p$ electron is unpaired.",
    "Easy"
  );
  add(
    "Which of the following atoms has a diamagnetic ground state?",
    ["Calcium ($\\text{Ca}, Z = 20$)", "Potassium ($\\text{K}, Z = 19$)", "Scandium ($\\text{Sc}, Z = 21$)", "Lithium ($\\text{Li}, Z = 3$)"],
    0,
    "Calcium has configuration $[\\text{Ar}] 4s^2$. All occupied subshells are completely filled, leaving 0 unpaired electrons, making it diamagnetic.",
    "Easy"
  );
  add(
    "What is the electronic configuration of the vanadyl precursor ion $\\text{V}^{3+}$ ($Z = 23$)?",
    ["$[\\text{Ar}] 3d^2$", "$[\\text{Ar}] 3d^3 4s^1$", "$[\\text{Ar}] 3d^1 4s^1$", "$[\\text{Ar}] 3d^3$"],
    0,
    "Neutral $\\text{V}$ is $[\\text{Ar}] 3d^3 4s^2$. Losing two $4s$ electrons and one $3d$ electron yields $\\text{V}^{3+}$: $[\\text{Ar}] 3d^2$.",
    "Easy"
  );
  add(
    "The electronic configuration of an element with atomic number $Z = 57$ (Lanthanum, $\\text{La}$) is:",
    ["$[\\text{Xe}] 5d^1 6s^2$", "$[\\text{Xe}] 4f^1 6s^2$", "$[\\text{Xe}] 4f^2 6s^1$", "$[\\text{Xe}] 5d^2 6s^1$"],
    0,
    "Lanthanum is the prototype of lanthanoids with configuration $[\\text{Xe}] 5d^1 6s^2$ (the $4f$ subshell filling begins at Cerium, $Z = 58$).",
    "Medium"
  );
  add(
    "In a neutral Iron atom ($Z = 26$), how many electrons have $m_l = +1$?",
    ["4", "6", "2", "3"],
    0,
    "Iron: $1s^2 2s^2 2p^6 3s^2 3p^6 3d^6 4s^2$.\nOrbitals with $m_l = +1$:\n- $2p$: 2 electrons\n- $3p$: 2 electrons\n- $3d$: in $3d^6$, by Hund's rule: one orbital is paired ($m_l=-2$), others are singly occupied ($m_l = -1, 0, +1, +2$). Thus $m_l = +1$ has 1 electron.\nTotal = $2 + 2 + 1 = 5$.",
    "Hard"
  );
  add(
    "How many electrons in a neutral Manganese atom ($Z = 25$) have magnetic spin quantum number $m_s = +1/2$ (assuming maximum multiplicity)?",
    ["15", "10", "13", "12"],
    0,
    "Manganese: $1s^2 2s^2 2p^6 3s^2 3p^6 3d^5 4s^2$.\nIn paired orbitals ($1s^2, 2s^2, 2p^6, 3s^2, 3p^6, 4s^2$): 20 electrons $\\implies$ 10 have $m_s = +1/2$.\nIn $3d^5$: all 5 electrons have parallel spins ($m_s = +1/2$).\nTotal with $m_s = +1/2$ = $10 + 5 = 15$.",
    "Hard"
  );
  add(
    "What is the number of electrons in the penultimate shell ($n = 3$) of a neutral Cobalt atom ($Z = 27$)?",
    ["15", "14", "16", "8"],
    0,
    "For Cobalt ($[\\text{Ar}] 3d^7 4s^2$), the penultimate shell is $n = 3$ containing $3s^2, 3p^6, 3d^7$. Total electrons = $2 + 6 + 7 = 15$.",
    "Medium"
  );
  add(
    "What is the number of electrons in the penultimate shell ($n = 3$) of a neutral Copper atom ($Z = 29$)?",
    ["18", "17", "16", "8"],
    0,
    "Copper has configuration $1s^2 2s^2 2p^6 3s^2 3p^6 3d^{10} 4s^1$. In $n = 3$, there are $3s^2 3p^6 3d^{10} = 2 + 6 + 10 = 18$ electrons.",
    "Medium"
  );
  add(
    "Which of the following elements has the ground state configuration $[\\text{Ar}] 3d^{10} 4s^2 4p^3$?",
    ["Arsenic ($\\text{As}, Z = 33$)", "Antimony ($\\text{Sb}, Z = 51$)", "Phosphorus ($\\text{P}, Z = 15$)", "Selenium ($\\text{Se}, Z = 34$)"],
    0,
    "$[\\text{Ar}] 3d^{10} 4s^2 4p^3$ has $18 + 10 + 2 + 3 = 33$ electrons, which corresponds to Arsenic ($Z = 33$).",
    "Easy"
  );
  add(
    "The electronic configuration of an atom is $1s^2 2s^2 2p^6 3s^2 3p^6 3d^{10} 4s^2 4p^6 4d^{10} 5s^2 5p^6$. This corresponds to the noble gas:",
    ["Xenon ($\\text{Xe}, Z = 54$)", "Krypton ($\\text{Kr}, Z = 36$)", "Radon ($\\text{Rn}, Z = 86$)", "Argon ($\\text{Ar}, Z = 18$)"],
    0,
    "Summing all electrons: $2 + 2 + 6 + 2 + 6 + 10 + 2 + 6 + 10 + 2 + 6 = 54$, which is the atomic number of Xenon.",
    "Easy"
  );
  add(
    "What is the total number of unpaired electrons in the ion $\\text{Cr}^{3+}$ ($Z = 24$)?",
    ["3", "6", "4", "2"],
    0,
    "Neutral $\\text{Cr}$ is $[\\text{Ar}] 3d^5 4s^1$. Removing one $4s$ and two $3d$ electrons gives $\\text{Cr}^{3+}$: $[\\text{Ar}] 3d^3$. All 3 electrons are unpaired in degenerate $d$-orbitals.",
    "Easy"
  );
  add(
    "Which of the following pairs of elements have the same number of electrons in their outermost shell?",
    ["$\\text{N}$ and $\\text{P}$", "$\\text{C}$ and $\\text{O}$", "$\\text{Na}$ and $\\text{Mg}$", "$\\text{F}$ and $\\text{Ne}$"],
    0,
    "Nitrogen ($2s^2 2p^3$) and Phosphorus ($3s^2 3p^3$) are both in Group 15 and have 5 valence electrons in their outermost shell.",
    "Easy"
  );
  add(
    "The spin-only magnetic moment of $\\text{Mn}^{2+}$ ($Z = 25$) is:",
    ["$5.92\\text{ BM}$", "$4.90\\text{ BM}$", "$3.87\\text{ BM}$", "$1.73\\text{ BM}$"],
    0,
    "$\\text{Mn}^{2+}$ is $[\\text{Ar}] 3d^5$, having $n = 5$ unpaired electrons. $\\mu = \\sqrt{5(5+2)} = \\sqrt{35} \\approx 5.92\\text{ BM}$.",
    "Easy"
  );
  add(
    "Assertion (A): The ground state configuration of Chromium is $[\\text{Ar}] 3d^5 4s^1$ rather than $[\\text{Ar}] 3d^4 4s^2$.\nReason (R): Exactly half-filled subshells have symmetrical charge distribution and large exchange energy.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "Transferring an electron from $4s$ to $3d$ completes the half-filled $d^5$ subshell, gaining 6 exchange pairs and symmetric stability. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): The ground state configuration of Copper is $[\\text{Ar}] 3d^{10} 4s^1$.\nReason (R): Completely filled subshells possess extra stability due to symmetry and maximal exchange stabilization.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "Completely filled $d^{10}$ is exceptionally stable. Both are true and (R) is the correct explanation.",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): $\\text{Sc}^{3+}$ and $\\text{Ti}^{4+}$ are diamagnetic.\nReason (R): Both ions have completely filled noble gas electron configurations with zero unpaired electrons.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "Both $\\text{Sc}^{3+}$ and $\\text{Ti}^{4+}$ have the electronic configuration of Argon ($[\\text{Ar}]$), having no unpaired electrons and thus are diamagnetic. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );
  add(
    "Assertion (A): The electronic configuration of $\\text{Fe}^{2+}$ is $[\\text{Ar}] 3d^6$ and not $[\\text{Ar}] 3d^4 4s^2$.\nReason (R): When an atom loses electrons to form a cation, electrons from the outermost shell (highest $n$) are removed first.",
    ["Both (A) and (R) are true, and (R) is the correct explanation of (A)", "Both (A) and (R) are true, but (R) is not the correct explanation of (A)", "(A) is true, but (R) is false", "(A) is false, but (R) is true"],
    0,
    "For Fe ($[\\text{Ar}] 3d^6 4s^2$), the $4s$ electrons have principal quantum number $n = 4$ and are the outermost electrons, so they are lost first during ionization. Both are true and (R) explains (A).",
    "Easy",
    "ASSERTION_REASON"
  );

  return q;
}

module.exports = {
  getAufbauPauliHundQuestions,
  getElectronicConfigurationQuestions
};
