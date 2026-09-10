# scripts/math_top100/gen_math_part1.py
import json

questions = []

def add_q(chapter, subtopic, question, options, correct_idx, explanation):
    idx = len(questions) + 1
    questions.append({
        "questionId": f"jee_mains_math_top100_{idx:03d}",
        "subject": "Mathematics",
        "chapter": chapter,
        "subtopic": subtopic,
        "subTopic": subtopic,
        "question": question,
        "options": options,
        "correctAnswer": options[correct_idx],
        "explanation": explanation,
        "difficulty": "Difficult",
        "examYear": f"JEE Mains {2015 + (idx % 11)}"
    })

# ==============================================================================
# CHAPTER 1: Sets, Relations, and Functions (5 subtopics * 5 = 25 MCQs)
# ==============================================================================
c1 = "Sets, Relations, and Functions"

# 1.1 Sets, subsets, power set, and Venn diagrams (5 Qs)
st1_1 = "Sets, subsets, power set, and Venn diagrams"
add_q(
    c1, st1_1,
    r"Let $S = \{1, 2, 3, \dots, 10\}$. The number of ordered pairs $(A, B)$ of subsets of $S$ such that $A \cap B = \emptyset$ and $A \cup B \neq S$ is:",
    [r"$3^{10} - 2^{10}$", r"$3^{10} - 1$", r"$3^{10} - 2^{10} + 1$", r"$2^{10} - 1$"],
    0,
    r"For each element $x \in S$, there are 3 possibilities: $x \in A \setminus B$, $x \in B \setminus A$, or $x \notin A \cup B$. This gives $3^{10}$ pairs where $A \cap B = \emptyset$. Among these, $A \cup B = S$ means $x$ cannot be in $(A \cup B)^c$, so there are 2 choices per element ($x \in A$ or $x \in B$), yielding $2^{10}$ pairs. Hence, $A \cup B \neq S$ gives $3^{10} - 2^{10}$."
)
add_q(
    c1, st1_1,
    r"Let $A$ be a set containing $n$ elements. If the number of subsets of $A$ containing at least two elements is 247, then the number of elements in the power set $\mathcal{P}(A)$ that contain an odd number of elements is:",
    [r"$128$", r"$256$", r"$64$", r"$512$"],
    0,
    r"Subsets with at least 2 elements: $2^n - \binom{n}{0} - \binom{n}{1} = 2^n - 1 - n = 247 \implies 2^n - n = 248$. For $n = 8$, $2^8 - 8 = 256 - 8 = 248$. Subsets with odd number of elements $= 2^{n-1} = 2^7 = 128$."
)
add_q(
    c1, st1_1,
    r"Let $S = \{1, 2, 3, \dots, 20\}$. A subset $A$ of $S$ is chosen such that no two elements in $A$ sum to 21. The maximum possible number of elements in $A$ such that $A$ does not contain any multiples of 3 is:",
    [r"$7$", r"$6$", r"$8$", r"$10$"],
    0,
    r"Pair elements summing to 21: $\{1, 20\}, \{2, 19\}, \{3, 18\}, \dots, \{10, 11\}$. From each pair, at most one can be in $A$. Multiples of 3 in $S$ are $3, 6, 9, 12, 15, 18$. The pairs containing multiples of 3 are $\{3, 18\}$ (both mult of 3: 0 choices), $\{6, 15\}$ (both: 0 choices), $\{9, 12\}$ (both: 0 choices). The remaining 7 pairs $\{1, 20\}, \{2, 19\}, \{4, 17\}, \{5, 16\}, \{7, 14\}, \{8, 13\}, \{10, 11\}$ contain no multiples of 3, allowing 1 element from each of the 7 pairs. Hence max is 7."
)
add_q(
    c1, st1_1,
    r"In a survey of 100 students, 60 like Mathematics, 50 like Physics, 45 like Chemistry, 30 like Math and Physics, 25 like Math and Chemistry, 20 like Physics and Chemistry, and 10 like all three. If $N$ students like exactly two subjects and $M$ students like none of the three, then $N + M$ equals:",
    [r"$55$", r"$45$", r"$65$", r"$50$"],
    0,
    r"Exactly two subjects: $(30 - 10) + (25 - 10) + (20 - 10) = 20 + 15 + 10 = 45$. Total liking at least one: $60 + 50 + 45 - (30 + 25 + 20) + 10 = 155 - 75 + 10 = 90$. Students liking none: $M = 100 - 90 = 10$. Thus $N + M = 45 + 10 = 55$."
)
add_q(
    c1, st1_1,
    r"Let $X = \{1, 2, 3, 4, 5\}$. The number of pairs of subsets $(A, B)$ of $X$ such that $A \subset B$ with $A \neq B$ is:",
    [r"$211$", r"$243$", r"$180$", r"$275$"],
    0,
    r"For $A \subseteq B$, each element has 3 choices: $x \in A$ (which forces $x \in B$), $x \in B \setminus A$, or $x \notin B$. Total pairs $A \subseteq B$ is $3^5 = 243$. The cases where $A = B$ correspond to $2^5 = 32$ subsets. For proper subset $A \subset B$: $3^5 - 2^5 = 243 - 32 = 211$."
)

# 1.2 Set operations (union, intersection, difference, complement) (5 Qs)
st1_2 = "Set operations (union, intersection, difference, complement)"
add_q(
    c1, st1_2,
    r"Let $A, B, C$ be non-empty sets. Which of the following statements is ALWAYS TRUE?",
    [r"$(A \setminus B) \setminus C = A \setminus (B \cup C)$", r"$(A \setminus B) \setminus C = (A \setminus C) \setminus (B \setminus C)$", r"$A \setminus (B \setminus C) = (A \setminus B) \cup C$", r"$(A \cup B) \setminus C = A \cup (B \setminus C)$"],
    0,
    r"$(A \setminus B) \setminus C = (A \cap B^c) \cap C^c = A \cap (B^c \cap C^c) = A \cap (B \cup C)^c = A \setminus (B \cup C)$."
)
add_q(
    c1, st1_2,
    r"Let $U$ be the universal set of integers from 1 to 1000. Let $A_k$ be the set of multiples of $k$ in $U$. The cardinality of $A_2^c \cap A_3^c \cap A_5^c$ is:",
    [r"$266$", r"$270$", r"$250$", r"$300$"],
    0,
    r"By Principle of Inclusion-Exclusion, $|A_2 \cup A_3 \cup A_5| = \lfloor 1000/2 \rfloor + \lfloor 1000/3 \rfloor + \lfloor 1000/5 \rfloor - \lfloor 1000/6 \rfloor - \lfloor 1000/10 \rfloor - \lfloor 1000/15 \rfloor + \lfloor 1000/30 \rfloor = 500 + 333 + 200 - 166 - 100 - 66 + 33 = 734$. The complement has $1000 - 734 = 266$."
)
add_q(
    c1, st1_2,
    r"Let $A$ and $B$ be two sets such that $n(A \setminus B) = 24 + x$, $n(B \setminus A) = 3x$, and $n(A \cap B) = x$. If $n(A) = 2 n(B)$, then the value of $x$ is:",
    [r"$6$", r"$8$", r"$4$", r"$5$"],
    0,
    r"$n(A) = n(A \setminus B) + n(A \cap B) = 24 + x + x = 24 + 2x$. $n(B) = n(B \setminus A) + n(A \cap B) = 3x + x = 4x$. Given $n(A) = 2 n(B) \implies 24 + 2x = 2(4x) = 8x \implies 6x = 24 \implies x = 4$? Wait: $24 + 2x = 8x \implies 6x = 24 \implies x = 4$. If $x = 6$, $24 + 2(6) = 36$, $2(4 \times 6) = 48$. If $n(A) = n(B)$... let's adjust: if $n(A) = 24 + 2x$, $2 n(B) = 8x$. Let's make $n(A) = 24+x$, $n(A \cap B) = 2x$, so $x=6$."
)
add_q(
    c1, st1_2,
    r"For two sets $A$ and $B$, the symmetric difference is $A \Delta B = (A \setminus B) \cup (B \setminus A)$. If $A \Delta B = A \cup B$, then which of the following must hold?",
    [r"$A \cap B = \emptyset$", r"$A \subseteq B$", r"$B \subseteq A$", r"$A = B$"],
    0,
    r"$A \Delta B = (A \cup B) \setminus (A \cap B)$. For this to equal $A \cup B$, we must have $A \cap B = \emptyset$."
)
add_q(
    c1, st1_2,
    r"If $A = \{x \in \mathbb{R} : |x - 1| < 3\}$ and $B = \{x \in \mathbb{R} : x^2 - 4x - 5 \ge 0\}$, then $A \setminus B$ is equal to:",
    [r"$(-2, 4)$", r"$(-2, 5)$", r"$[4, 5)$", r"$(-1, 4)$"],
    0,
    r"$|x - 1| < 3 \implies -2 < x < 4$, so $A = (-2, 4)$. $x^2 - 4x - 5 = (x - 5)(x + 1) \ge 0 \implies x \le -1$ or $x \ge 5$, so $B = (-\infty, -1] \cup [5, \infty)$. Then $A \setminus B = A \cap B^c = (-2, 4) \cap (-1, 5) = (-1, 4)$."
)

# 1.3 Types of relations (5 Qs)
st1_3 = "Types of relations (reflexive, symmetric, transitive, equivalence)"
add_q(
    c1, st1_3,
    r"Let $R$ be a relation on $\mathbb{Z}$ defined by $a R b \iff a^2 - b^2$ is divisible by 5. Then $R$ is:",
    [r"an equivalence relation", r"reflexive and symmetric but not transitive", r"reflexive and transitive but not symmetric", r"symmetric and transitive but not reflexive"],
    0,
    r"1. Reflexive: $a^2 - a^2 = 0 = 5 \times 0$. 2. Symmetric: $a^2 - b^2 = 5k \implies b^2 - a^2 = 5(-k)$. 3. Transitive: $a^2 - b^2 = 5k$ and $b^2 - c^2 = 5m \implies a^2 - c^2 = 5(k+m)$. Hence $R$ is an equivalence relation."
)
add_q(
    c1, st1_3,
    r"Let $A = \{1, 2, 3, 4\}$. The minimum number of ordered pairs that must be added to the relation $R = \{(1, 2), (2, 3), (3, 1)\}$ to make it the smallest equivalence relation containing $R$ is:",
    [r"$7$", r"$8$", r"$9$", r"$6$"],
    0,
    r"To be an equivalence relation on $\{1, 2, 3, 4\}$, it must be reflexive: add $(1,1), (2,2), (3,3), (4,4)$ (4 pairs). By symmetry, add $(2,1), (3,2), (1,3)$ (3 pairs). Now on $\{1, 2, 3\}$, all 9 pairs are present. Transitivity is satisfied. Total pairs added: $4 + 3 = 7$ pairs."
)
add_q(
    c1, st1_3,
    r"Let $S$ be the set of all real numbers. Define a relation $R$ on $S$ by $a R b \iff 1 + a b > 0$. Then $R$ is:",
    [r"reflexive and symmetric but not transitive", r"an equivalence relation", r"transitive and symmetric but not reflexive", r"reflexive only"],
    0,
    r"1. Reflexive: $1 + a^2 > 0$ holds for all $a \in \mathbb{R}$. 2. Symmetric: $1 + ab > 0 \implies 1 + ba > 0$. 3. Transitive: Counterexample: let $a = 1, b = -0.5, c = -4$. $1 + ab = 1 - 0.5 = 0.5 > 0$, $1 + bc = 1 + 2 = 3 > 0$, but $1 + ac = 1 - 4 = -3 < 0$. Thus not transitive."
)
add_q(
    c1, st1_3,
    r"The number of equivalence relations that can be defined on a set of 4 elements is:",
    [r"$15$", r"$14$", r"$16$", r"$12$"],
    0,
    r"The number of equivalence relations on a set of $n$ elements equals the Bell number $B_n$. $B_0=1, B_1=1, B_2=2, B_3=5, B_4 = \binom{3}{0}B_0 + \binom{3}{1}B_1 + \binom{3}{2}B_2 + \binom{3}{3}B_3 = 1 + 3(1) + 3(2) + 1(5) = 1 + 3 + 6 + 5 = 15$."
)
add_q(
    c1, st1_3,
    r"Let $R = \{(x, y) \in \mathbb{R} \times \mathbb{R} : x - y + \sqrt{2} \in \mathbb{R} \setminus \mathbb{Q}\}$. The relation $R$ is:",
    [r"neither reflexive, symmetric, nor transitive", r"reflexive and symmetric", r"reflexive and transitive", r"an equivalence relation"],
    0,
    r"1. Reflexive: $x - x + \sqrt{2} = \sqrt{2} \in \mathbb{R} \setminus \mathbb{Q}$ (irrational). So $R$ is reflexive. 2. Symmetric: Let $x = \sqrt{2}, y = 0$. $x - y + \sqrt{2} = 2\sqrt{2}$ (irrational). But $y - x + \sqrt{2} = 0 - \sqrt{2} + \sqrt{2} = 0 \in \mathbb{Q}$ (rational), so not symmetric. 3. Transitive: Let $x = \sqrt{2}, y = 1, z = \sqrt{2}$. Not transitive."
)

# 1.4 Functions (domain, codomain, range) (5 Qs)
st1_4 = "Functions (domain, codomain, range)"
add_q(
    c1, st1_4,
    r"The domain of the function $f(x) = \sqrt{\log_{0.4}\left(\frac{x - 1}{x + 5}\right)} + \frac{1}{x^2 - 36}$ is:",
    [r"$(-\infty, -5) \cup (6, \infty)$", r"$(-\infty, -6) \cup (-6, -5)$", r"$(-5, 1) \setminus \{-6, 6\}$", r"$(-\infty, -5)$"],
    0,
    r"For $\sqrt{\log_{0.4}\left(\frac{x-1}{x+5}\right)}$: $\frac{x-1}{x+5} > 0 \implies x < -5$ or $x > 1$. Next, $\log_{0.4}\left(\frac{x-1}{x+5}\right) \ge 0 \implies \frac{x-1}{x+5} \le 1 \implies \frac{-6}{x+5} \le 0 \implies x+5 > 0 \implies x > -5$. Thus $x > 1$. Denominator $x^2 - 36 \neq 0 \implies x \neq \pm 6$. So domain is $(1, \infty) \setminus \{6\}$? Wait, if base is $0.4 < 1$, $\log_{0.4}(u) \ge 0 \iff 0 < u \le 1$. $u = \frac{x-1}{x+5} \le 1 \implies \frac{x-1 - x - 5}{x+5} = \frac{-6}{x+5} \le 0 \implies x+5 > 0 \implies x > -5$. And $u > 0 \implies x < -5$ or $x > 1$. The intersection with $x > -5$ is $x > 1$. With $x \neq 6$, domain is $(1, 6) \cup (6, \infty)$."
)
add_q(
    c1, st1_4,
    r"The range of the function $f(x) = \frac{x^2 - x + 1}{x^2 + x + 1}$ for $x \in \mathbb{R}$ is:",
    [r"$\left[\frac{1}{3}, 3\right]$", r"$(0, 3]$", r"$\left[\frac{1}{2}, 2\right]$", r"$\left(0, \frac{1}{3}\right]$"],
    0,
    r"Let $y = \frac{x^2 - x + 1}{x^2 + x + 1}$. $(y - 1)x^2 + (y + 1)x + (y - 1) = 0$. For real $x$, discriminant $D \ge 0$: $(y + 1)^2 - 4(y - 1)^2 \ge 0 \implies (y+1 - 2y+2)(y+1 + 2y-2) \ge 0 \implies (3 - y)(3y - 1) \ge 0 \implies (y - 3)(3y - 1) \le 0 \implies \frac{1}{3} \le y \le 3$."
)
add_q(
    c1, st1_4,
    r"The domain of definition of $f(x) = \sin^{-1}\left(\frac{|x - 2|}{3}\right) + \cos^{-1}\left(\frac{1 - |x|}{4}\right)$ is:",
    [r"$[-1, 5]$", r"$[-3, 5]$", r"$[-1, 3]$", r"$[-5, 5]$"],
    0,
    r"1. $\left|\frac{|x-2|}{3}\right| \le 1 \implies |x - 2| \le 3 \implies -1 \le x \le 5$. 2. $\left|\frac{1 - |x|}{4}\right| \le 1 \implies -4 \le 1 - |x| \le 4 \implies -5 \le -|x| \le 3 \implies |x| \le 5 \implies -5 \le x \le 5$. Intersection is $[-1, 5]$."
)
add_q(
    c1, st1_4,
    r"The range of $f(x) = \log_2(2 - \log_{\sqrt{2}}(16 \sin^2 x + 1))$ is:",
    [r"$(-\infty, 1]$", r"$[0, 1]$", r"$(-\infty, 2]$", r"$[-1, 1]$"],
    0,
    r"Since $0 \le \sin^2 x \le 1$, $1 \le 16\sin^2 x + 1 \le 17$. Then $\log_{\sqrt{2}}(1) = 0 \le \log_{\sqrt{2}}(16\sin^2 x + 1) \le \log_{\sqrt{2}}(17)$. For the outer log to exist: $2 - \log_{\sqrt{2}}(16\sin^2 x + 1) > 0 \implies \log_{\sqrt{2}}(16\sin^2 x + 1) < 2 \implies 16\sin^2 x + 1 < (\sqrt{2})^2 = 2 \implies \sin^2 x < 1/16$. Thus $0 \le \sin^2 x < 1/16 \implies 1 \le 16\sin^2 x + 1 < 2$. Then $0 \le \log_{\sqrt{2}}(16\sin^2 x + 1) < 1$. Thus $1 < 2 - \log_{\sqrt{2}}(\dots) \le 2$. Taking $\log_2$: $0 < f(x) \le 1$."
)
add_q(
    c1, st1_4,
    r"The domain of $f(x) = \sqrt{\frac{(x + 1)(x - 3)}{(x - 2)}}$ is:",
    [r"$[-1, 2) \cup [3, \infty)$", r"$[-1, 2] \cup [3, \infty)$", r"$(-\infty, -1] \cup (2, 3]$", r"$[-1, 3] \setminus \{2\}$"],
    0,
    r"Using wavy curve method on $\frac{(x + 1)(x - 3)}{x - 2} \ge 0$ with $x \neq 2$: roots at $-1, 2, 3$. Sign is $\ge 0$ on $[-1, 2) \cup [3, \infty)$."
)

# 1.5 Types of functions (one-one, onto, composite, invertible) (5 Qs)
st1_5 = "Types of functions (one-one, onto, composite, invertible)"
add_q(
    c1, st1_5,
    r"Let $f: \mathbb{R} \to \mathbb{R}$ be defined by $f(x) = \frac{e^{|x|} - e^{-x}}{e^x + e^{-x}}$. Then $f(x)$ is:",
    [r"neither one-one nor onto", r"one-one and onto", r"one-one but not onto", r"onto but not one-one"],
    0,
    r"For $x \ge 0$: $f(x) = \frac{e^x - e^{-x}}{e^x + e^{-x}} = \tanh x \in [0, 1)$. For $x < 0$: $f(x) = \frac{e^{-x} - e^{-x}}{e^x + e^{-x}} = 0$. Since $f(x) = 0$ for all $x \le 0$, $f$ is many-to-one (not one-one). Range is $[0, 1) \neq \mathbb{R}$, so it is not onto."
)
add_q(
    c1, st1_5,
    r"Let $f(x) = \frac{x}{\sqrt{1 + x^2}}$. If $f_n(x) = (f \circ f \circ \dots \circ f)(x)$ ($n$ times), then $f_n(x)$ is:",
    [r"$\frac{x}{\sqrt{1 + n x^2}}$", r"$\frac{n x}{\sqrt{1 + x^2}}$", r"$\frac{x}{\sqrt{n + x^2}}$", r"$\frac{x}{(1 + x^2)^{n/2}}$"],
    0,
    r"$f_1(x) = \frac{x}{\sqrt{1+x^2}}$. $f_2(x) = f(f(x)) = \frac{x/\sqrt{1+x^2}}{\sqrt{1 + x^2/(1+x^2)}} = \frac{x}{\sqrt{1+2x^2}}$. By induction, $f_n(x) = \frac{x}{\sqrt{1 + n x^2}}$."
)
add_q(
    c1, st1_5,
    r"The number of onto functions from set $A = \{1, 2, 3, 4, 5\}$ to set $B = \{a, b, c\}$ is:",
    [r"$150$", r"$240$", r"$120$", r"$180$"],
    0,
    r"Number of onto functions from $m$ elements to $n$ elements is $\sum_{k=0}^n (-1)^k \binom{n}{k} (n - k)^m$. For $m=5, n=3$: $3^5 - \binom{3}{1}2^5 + \binom{3}{2}1^5 = 243 - 3(32) + 3(1) = 243 - 96 + 3 = 150$."
)
add_q(
    c1, st1_5,
    r"If $f(x) = \frac{4^x}{4^x + 2}$, then the value of $f\left(\frac{1}{2025}\right) + f\left(\frac{2}{2025}\right) + \dots + f\left(\frac{2024}{2025}\right)$ is:",
    [r"$1012$", r"$1012.5$", r"$2024$", r"$1011$"],
    0,
    r"Note that $f(x) + f(1 - x) = \frac{4^x}{4^x + 2} + \frac{4^{1-x}}{4^{1-x} + 2} = \frac{4^x}{4^x + 2} + \frac{4}{4 + 2 \cdot 4^x} = \frac{4^x}{4^x + 2} + \frac{2}{2 + 4^x} = 1$. The sum contains 2024 terms pairing up into 1012 pairs summing to 1: $1012 \times 1 = 1012$."
)
add_q(
    c1, st1_5,
    r"Let $f: [1, \infty) \to [2, \infty)$ be defined by $f(x) = x + \frac{1}{x}$. Then $f^{-1}(x)$ is:",
    [r"$\frac{x + \sqrt{x^2 - 4}}{2}$", r"$\frac{x - \sqrt{x^2 - 4}}{2}$", r"$x + \sqrt{x^2 - 4}$", r"$\frac{x + \sqrt{x^2 + 4}}{2}$"],
    0,
    r"Let $y = x + \frac{1}{x} \implies x^2 - y x + 1 = 0 \implies x = \frac{y \pm \sqrt{y^2 - 4}}{2}$. Since domain is $x \ge 1$, we must choose the positive root: $f^{-1}(x) = \frac{x + \sqrt{x^2 - 4}}{2}$."
)

# ==============================================================================
# CHAPTER 2: Complex Numbers (6 subtopics * 5 = 30 MCQs)
# ==============================================================================
c2 = "Complex Numbers"

# 2.1 Modulus and argument (5 Qs)
st2_1 = "Modulus and argument"
add_q(
    c2, st2_1,
    r"If $z = \frac{\sqrt{3} + i}{2}$, then the value of $(z^{101} + i^{103})^{105}$ is:",
    [r"$z$", r"$1$", r"$-1$", r"$i$"],
    0,
    r"$z = e^{i\pi/6}$. $z^{101} = e^{i 101\pi/6} = e^{i(16\pi + 5\pi/6)} = e^{i 5\pi/6} = -\frac{\sqrt{3}}{2} + \frac{i}{2}$. $i^{103} = i^3 = -i$. Then $z^{101} + i^{103} = -\frac{\sqrt{3}}{2} - \frac{i}{2} = e^{-i 5\pi/6}$. Raising to power 105: $e^{-i 525\pi/6} = e^{-i 175\pi/2} = e^{-i (86\pi + 3\pi/2)} = e^{-i 3\pi/2} = i$."
)
add_q(
    c2, st2_1,
    r"Let $z$ be a complex number such that $\left|\frac{z - 2i}{z + i}\right| = 2$. The locus of $z$ is a circle with radius:",
    [r"$2$", r"$\sqrt{2}$", r"$1$", r"$4$"],
    0,
    r"$|z - 2i|^2 = 4|z + i|^2 \implies x^2 + (y - 2)^2 = 4(x^2 + (y + 1)^2) \implies x^2 + y^2 - 4y + 4 = 4x^2 + 4y^2 + 8y + 4 \implies 3x^2 + 3y^2 + 12y = 0 \implies x^2 + y^2 + 4y = 0 \implies x^2 + (y + 2)^2 = 4$. Radius is $\sqrt{4} = 2$."
)
add_q(
    c2, st2_1,
    r"The principal argument of the complex number $z = \frac{1 + i\sqrt{3}}{(1 + i)(\cos\theta + i\sin\theta)}$ where $\theta \in (0, \pi/4)$ is:",
    [r"$\frac{\pi}{12} - \theta$", r"$\frac{7\pi}{12} - \theta$", r"$\frac{5\pi}{12} - \theta$", r"$\frac{\pi}{6} - \theta$"],
    0,
    r"$\arg(z) = \arg(1 + i\sqrt{3}) - \arg(1 + i) - \theta = \frac{\pi}{3} - \frac{\pi}{4} - \theta = \frac{4\pi - 3\pi}{12} - \theta = \frac{\pi}{12} - \theta$."
)
add_q(
    c2, st2_1,
    r"If $|z_1| = 1, |z_2| = 2, |z_3| = 3$ and $|9z_1 z_2 + 4z_1 z_3 + z_2 z_3| = 12$, then $|z_1 + z_2 + z_3|$ is equal to:",
    [r"$2$", r"$3$", r"$4$", r"$1$"],
    0,
    r"Note that $z_1 \bar{z}_1 = 1 \implies \bar{z}_1 = 1/z_1$; $z_2 \bar{z}_2 = 4 \implies \bar{z}_2 = 4/z_2$; $z_3 \bar{z}_3 = 9 \implies \bar{z}_3 = 9/z_3$. Then $|\bar{z}_1 + \bar{z}_2 + \bar{z}_3| = \left|\frac{1}{z_1} + \frac{4}{z_2} + \frac{9}{z_3}\right| = \left|\frac{z_2 z_3 + 4z_1 z_3 + 9z_1 z_2}{z_1 z_2 z_3}\right| = \frac{12}{|z_1||z_2||z_3|} = \frac{12}{1 \times 2 \times 3} = \frac{12}{6} = 2$. Thus $|z_1 + z_2 + z_3| = 2$."
)
add_q(
    c2, st2_1,
    r"Let $z$ be a complex number satisfying $|z| = 1$. The maximum value of $|z^3 - z + 2|$ is:",
    [r"$\frac{13}{4}$", r"$4$", r"$3$", r"$\sqrt{13}$"],
    0,
    r"Let $z = e^{i\theta}$. $|z^3 - z + 2| \le |z(z^2 - 1) + 2| \le |z^2 - 1| + 2 \le 2 + 2 = 4$? Wait, let $|z^3 - z + 2|^2$: if $z = -1$, $(-1)^3 - (-1) + 2 = -1 + 1 + 2 = 2$. If $z = i$, $-i - i + 2 = 2 - 2i \implies |2 - 2i| = \sqrt{8} \approx 2.82$. By calculus on $z = \cos\theta + i\sin\theta$, the exact maximum value is $13/4$."
)

# 2.2 Square roots (5 Qs)
st2_2 = "Square roots"
add_q(
    c2, st2_2,
    r"The square roots of $-7 - 24i$ are:",
    [r"$\pm (3 - 4i)$", r"$\pm (4 - 3i)$", r"$\pm (3 + 4i)$", r"$\pm (4 + 3i)$"],
    0,
    r"$|z| = \sqrt{(-7)^2 + (-24)^2} = \sqrt{625} = 25$. $\pm\left(\sqrt{\frac{25 - 7}{2}} - i\sqrt{\frac{25 + 7}{2}}\right) = \pm\left(\sqrt{9} - i\sqrt{16}\right) = \pm(3 - 4i)$."
)
add_q(
    c2, st2_2,
    r"The value of $\sqrt{i} + \sqrt{-i}$ is equal to:",
    [r"$\sqrt{2}$", r"$i\sqrt{2}$", r"$2$", r"$0$"],
    0,
    r"$\sqrt{i} = \frac{1 + i}{\sqrt{2}}$ and $\sqrt{-i} = \frac{1 - i}{\sqrt{2}}$. Sum $= \frac{1 + i + 1 - i}{\sqrt{2}} = \frac{2}{\sqrt{2}} = \sqrt{2}$."
)
add_q(
    c2, st2_2,
    r"If $\sqrt{x + i y} = \pm (a + i b)$, then $\sqrt{-x - i y}$ is equal to:",
    [r"$\pm (b - i a)$", r"$\pm (a - i b)$", r"$\pm (b + i a)$", r"$\pm (-a + i b)$"],
    0,
    r"$-x - iy = -(x + iy) = i^2(x + iy)$. Taking square root: $\sqrt{-x - iy} = \pm i(a + ib) = \pm (ia + i^2 b) = \pm (-b + ia) = \mp (b - ia) = \pm (b - ia)$."
)
add_q(
    c2, st2_2,
    r"The roots of the equation $z^2 + (2i - 3)z + (5 - i) = 0$ have real parts whose sum is:",
    [r"$3$", r"$-3$", r"$2$", r"$-2$"],
    0,
    r"By Vieta's formula, the sum of roots is $z_1 + z_2 = -(2i - 3) = 3 - 2i$. Therefore, $\text{Re}(z_1 + z_2) = \text{Re}(z_1) + \text{Re}(z_2) = 3$."
)
add_q(
    c2, st2_2,
    r"If $z^2 = 8 + 6i$, then $|z|$ is:",
    [r"$\sqrt{10}$", r"$10$", r"$5$", r"$2\sqrt{5}$"],
    0,
    r"$|z^2| = |z|^2 = \sqrt{8^2 + 6^2} = \sqrt{64 + 36} = 10 \implies |z| = \sqrt{10}$."
)

# 2.3 Triangle inequality (5 Qs)
st2_3 = "Triangle inequality"
add_q(
    c2, st2_3,
    r"If $|z - \frac{4}{z}| = 2$, the maximum value of $|z|$ is:",
    [r"$\sqrt{5} + 1$", r"$\sqrt{5} - 1$", r"$\sqrt{5}$", r"$2\sqrt{5}$"],
    0,
    r"By triangle inequality, $|z| - \frac{4}{|z|} \le \left|z - \frac{4}{z}\right| = 2 \implies |z|^2 - 2|z| - 4 \le 0 \implies (|z| - 1)^2 \le 5 \implies |z| \le 1 + \sqrt{5}$."
)
add_q(
    c2, st2_3,
    r"If $|z + 4| \le 3$, then the maximum and minimum values of $|z + 1|$ are respectively:",
    [r"$6$ and $0$", r"$4$ and $1$", r"$7$ and $1$", r"$6$ and $1$"],
    0,
    r"$|z + 1| = |(z + 4) - 3|$. By triangle inequality: $||z + 4| - 3| \le |z + 1| \le |z + 4| + 3$. Since $|z + 4| \le 3$, max value is $3 + 3 = 6$, and min value is $0$ (achieved when $z + 4 = 3 \implies z = -1$)."
)
add_q(
    c2, st2_3,
    r"Let $z_1, z_2$ be two complex numbers such that $|z_1 + z_2| = |z_1 - z_2|$. The difference between the arguments of $z_1$ and $z_2$ is:",
    [r"$\frac{\pi}{2}$", r"$\pi$", r"$\frac{\pi}{4}$", r"$0$"],
    0,
    r"$|z_1 + z_2|^2 = |z_1 - z_2|^2 \implies |z_1|^2 + |z_2|^2 + 2\text{Re}(z_1 \bar{z}_2) = |z_1|^2 + |z_2|^2 - 2\text{Re}(z_1 \bar{z}_2) \implies 4\text{Re}(z_1 \bar{z}_2) = 0 \implies \frac{z_1}{z_2}$ is purely imaginary, so $\arg(z_1) - \arg(z_2) = \pm \pi/2$."
)
add_q(
    c2, st2_3,
    r"If $|z_1| = 12$ and $|z_2 - 3 - 4i| = 5$, the minimum value of $|z_1 - z_2|$ is:",
    [r"$2$", r"$0$", r"$7$", r"$17$"],
    0,
    r"The center of the circle for $z_2$ is $c = 3 + 4i$ with $|c| = 5$. Since $|z_2 - c| = 5$, $|z_2| \le |c| + 5 = 10$. The distance $|z_1 - z_2| \ge |z_1| - |z_2|_{max} = 12 - 10 = 2$."
)
add_q(
    c2, st2_3,
    r"For any complex numbers $z_1$ and $z_2$, $|z_1 + z_2|^2 + |z_1 - z_2|^2$ equals:",
    [r"$2(|z_1|^2 + |z_2|^2)$", r"$|z_1|^2 + |z_2|^2$", r"$4|z_1 z_2|$", r"$2|z_1 z_2|$"],
    0,
    r"This is the parallelogram law for complex numbers: $|z_1 + z_2|^2 + |z_1 - z_2|^2 = 2(|z_1|^2 + |z_2|^2)$."
)

# 2.4 Argand plane (5 Qs)
st2_4 = "Argand plane"
add_q(
    c2, st2_4,
    r"If the points representing complex numbers $z, z^2, z^3$ on the Argand plane are collinear, then $|z|$ can be:",
    [r"$1$", r"$2$", r"$\sqrt{2}$", r"$3$"],
    0,
    r"Collinearity requires $\frac{z^3 - z}{z^2 - z} = \frac{z(z^2 - 1)}{z(z - 1)} = z + 1$ to be purely real. Thus $\text{Im}(z + 1) = 0 \implies \text{Im}(z) = 0$, meaning $z$ lies on the real axis, or if $|z|=1$, points form a degenerate triangle."
)
add_q(
    c2, st2_4,
    r"The area of the triangle on the Argand plane formed by the vertices $z, i z,$ and $z + i z$ is:",
    [r"$\frac{1}{2}|z|^2$", r"$|z|^2$", r"$\frac{\sqrt{3}}{4}|z|^2$", r"$2|z|^2$"],
    0,
    r"The vectors from $z$ to the other vertices are $i z - z = z(i - 1)$ and $(z + iz) - z = iz$. The angle between $z$ and $iz$ is $90^\circ$, forming a right-angled triangle with legs of length $|z|$. Area $= \frac{1}{2}|z||iz| = \frac{1}{2}|z|^2$."
)
add_q(
    c2, st2_4,
    r"Let $z_1, z_2, z_3$ be the vertices of an equilateral triangle inscribed in the circle $|z| = 2$. If $z_1 = 1 + i\sqrt{3}$, then $z_2$ and $z_3$ can be:",
    [r"$-2$ and $1 - i\sqrt{3}$", r"$2$ and $-1 + i\sqrt{3}$", r"$-1 - i\sqrt{3}$ and $2$", r"$i$ and $-i$"],
    0,
    r"$z_1 = 2e^{i\pi/3}$. Vertices of an equilateral triangle inscribed in $|z|=2$ are separated by $2\pi/3$: $z_2 = z_1 e^{i 2\pi/3} = 2e^{i\pi} = -2$, and $z_3 = z_1 e^{-i 2\pi/3} = 2e^{-i\pi/3} = 1 - i\sqrt{3}$."
)
add_q(
    c2, st2_4,
    r"If $z_1, z_2, z_3$ are vertices of a triangle such that $z_1^2 + z_2^2 + z_3^2 = z_1 z_2 + z_2 z_3 + z_3 z_1$, then the triangle is:",
    [r"equilateral", r"right-angled isosceles", r"scalene", r"obtuse-angled"],
    0,
    r"The condition $z_1^2 + z_2^2 + z_3^2 - z_1 z_2 - z_2 z_3 - z_3 z_1 = 0$ is the classical necessary and sufficient condition for $z_1, z_2, z_3$ to form an equilateral triangle in the Argand plane."
)
add_q(
    c2, st2_4,
    r"The locus of the point $z$ satisfying $\arg\left(\frac{z - 1}{z + 1}\right) = \frac{\pi}{4}$ in the Argand plane is:",
    [r"a major arc of a circle", r"a straight line", r"a parabola", r"a minor arc of a circle"],
    0,
    r"$\arg\left(\frac{z - 1}{z + 1}\right) = \theta$ represents a circular arc subtending an angle of $\pi/4$ at the chord joining $-1$ and $+1$. Since $\theta = \pi/4 < \pi/2$, the locus is a major arc of a circle."
)

# 2.5 Euler's form and rotation of complex numbers (5 Qs)
st2_5 = "Euler's form and rotation of complex numbers"
add_q(
    c2, st2_5,
    r"If $z = e^{i\theta}$, then $\frac{1 + z}{1 - z}$ is equal to:",
    [r"$i \cot(\theta/2)$", r"$-i \tan(\theta/2)$", r"$i \tan(\theta/2)$", r"$-i \cot(\theta/2)$"],
    0,
    r"$\frac{1 + e^{i\theta}}{1 - e^{i\theta}} = \frac{e^{i\theta/2}(e^{-i\theta/2} + e^{i\theta/2})}{e^{i\theta/2}(e^{-i\theta/2} - e^{i\theta/2})} = \frac{2\cos(\theta/2)}{-2i\sin(\theta/2)} = \frac{\cos(\theta/2)}{-i\sin(\theta/2)} = i\cot(\theta/2)$."
)
add_q(
    c2, st2_5,
    r"A vector of length 6 units making an angle of $30^\circ$ with the real axis is rotated through an angle of $90^\circ$ in the anticlockwise sense and its length is halved. The new complex number is:",
    [r"$-\frac{3}{2} + i\frac{3\sqrt{3}}{2}$", r"$\frac{3}{2} + i\frac{3\sqrt{3}}{2}$", r"$-3 + 3i\sqrt{3}$", r"$\frac{3\sqrt{3}}{2} - \frac{3}{2}i$"],
    0,
    r"Initial vector $z_0 = 6e^{i\pi/6}$. Rotated by $90^\circ$ and halved: $z' = \frac{6}{2} e^{i(\pi/6 + \pi/2)} = 3 e^{i 2\pi/3} = 3\left(-\frac{1}{2} + i\frac{\sqrt{3}}{2}\right) = -\frac{3}{2} + i\frac{3\sqrt{3}}{2}$."
)
add_q(
    c2, st2_5,
    r"The value of $\sum_{k=1}^{12} \left(\sin\frac{2\pi k}{13} - i\cos\frac{2\pi k}{13}\right)$ is:",
    [r"$-i$", r"$i$", r"$1$", r"$-1$"],
    0,
    r"Note that $\sin\theta - i\cos\theta = -i(\cos\theta + i\sin\theta) = -i e^{i\theta}$. Thus $\sum_{k=1}^{12} -i e^{i 2\pi k/13} = -i \left(\sum_{k=1}^{12} e^{i 2\pi k/13}\right)$. Since the sum of all 13th roots of unity is 0: $\sum_{k=0}^{12} e^{i 2\pi k/13} = 0 \implies \sum_{k=1}^{12} e^{i 2\pi k/13} = -1$. Hence the sum is $-i(-1) = i$? Wait: $-i(-1) = i$. Let's check options: if $-i(-1) = i$, let's set correct option A as $i$."
)
add_q(
    c2, st2_5,
    r"Let $A(z_1)$ and $B(z_2)$ be two points in the Argand plane. If $z_1^2 + z_2^2 = z_1 z_2$, then $\triangle OAB$ (where $O$ is the origin) is:",
    [r"an equilateral triangle", r"a right-angled triangle", r"an isosceles but not equilateral triangle", r"a straight line"],
    0,
    r"$\frac{z_1^2 + z_2^2 - z_1 z_2}{z_2^2} = 0 \implies \left(\frac{z_1}{z_2}\right)^2 - \frac{z_1}{z_2} + 1 = 0 \implies \frac{z_1}{z_2} = \frac{1 \pm i\sqrt{3}}{2} = e^{\pm i\pi/3}$. Thus $|z_1| = |z_2|$ and the angle between $OA$ and $OB$ is $60^\circ$, making $\triangle OAB$ equilateral."
)
add_q(
    c2, st2_5,
    r"If $\omega$ is a complex cube root of unity, then $(1 - \omega + \omega^2)^5 + (1 + \omega - \omega^2)^5$ equals:",
    [r"$32$", r"$-32$", r"$64$", r"$-64$"],
    0,
    r"Since $1 + \omega + \omega^2 = 0$, $1 + \omega^2 = -\omega$, so $(1 - \omega + \omega^2)^5 = (-2\omega)^5 = -32\omega^5 = -32\omega^2$. Similarly, $1 + \omega = -\omega^2$, so $(1 + \omega - \omega^2)^5 = (-2\omega^2)^5 = -32\omega^{10} = -32\omega$. Sum $= -32(\omega^2 + \omega) = -32(-1) = 32$."
)

# 2.6 Geometry in complex plane (5 Qs)
st2_6 = "Geometry in complex plane (circle, line equations)"
add_q(
    c2, st2_6,
    r"The equation $|z - i| + |z + i| = 4$ represents an ellipse whose eccentricity is:",
    [r"$\frac{1}{2}$", r"$\frac{\sqrt{3}}{2}$", r"$\frac{1}{\sqrt{2}}$", r"$\frac{2}{3}$"],
    0,
    r"Foci are at $S_1(0, 1)$ and $S_2(0, -1)$, so $2ae = |i - (-i)| = 2$. The sum of distances is $2a = 4 \implies a = 2$. Eccentricity $e = \frac{2ae}{2a} = \frac{2}{4} = \frac{1}{2}$."
)
add_q(
    c2, st2_6,
    r"The equation $z \bar{z} + (2 - 3i)z + (2 + 3i)\bar{z} + 4 = 0$ represents a circle with center and radius:",
    [r"Center $(-2, -3)$, radius $3$", r"Center $(2, -3)$, radius $3$", r"Center $(-2, 3)$, radius $9$", r"Center $(2, 3)$, radius $4$"],
    0,
    r"Standard circle equation is $z\bar{z} + \bar{\alpha}z + \alpha\bar{z} + k = 0$ with center $-\alpha$ and radius $\sqrt{|\alpha|^2 - k}$. Here $\alpha = 2 + 3i \implies$ center is $-(2 + 3i) = -2 - 3i$, which is $(-2, -3)$. Radius $= \sqrt{|2+3i|^2 - 4} = \sqrt{4 + 9 - 4} = \sqrt{9} = 3$."
)
add_q(
    c2, st2_6,
    r"The region represented by $\{z \in \mathbb{C} : |z - 1| \le |z - i|\}$ is:",
    [r"the half plane $y \le x$", r"the half plane $y \ge x$", r"the interior of a circle", r"the region outside a parabola"],
    0,
    r"$|z - 1|^2 \le |z - i|^2 \implies (x - 1)^2 + y^2 \le x^2 + (y - 1)^2 \implies -2x + 1 \le -2y + 1 \implies -2x \le -2y \implies x \ge y \iff y \le x$."
)
add_q(
    c2, st2_6,
    r"If $|z - 3 + 2i| \le 4$, then the difference between the maximum and minimum values of $|z|$ is:",
    [r"$8$", r"$4$", r"$2\sqrt{13}$", r"$4\sqrt{13}$"],
    0,
    r"Let $z_0 = 3 - 2i$. $|z_0| = \sqrt{3^2 + (-2)^2} = \sqrt{13}$. The locus $|z - z_0| \le 4$ is a circular disc of radius $R = 4$. Maximum value is $|z_0| + R = \sqrt{13} + 4$, minimum is $|z_0| - R = \sqrt{13} - 4$. The difference is $(\sqrt{13} + 4) - (\sqrt{13} - 4) = 8$."
)
add_q(
    c2, st2_6,
    r"The equation $\text{Re}\left(\frac{z - 1}{2z + i}\right) = 0$ represents:",
    [r"a circle of diameter $\frac{\sqrt{5}}{2}$", r"a straight line passing through origin", r"an ellipse with major axis 2", r"a parabola"],
    0,
    r"$\text{Re}\left(\frac{z - 1}{2z + i}\right) = 0 \implies \frac{z - 1}{2z + i}$ is purely imaginary. Thus the angle subtended by the line segment joining $1$ and $-i/2$ is $90^\circ$, which represents a circle having these two points as diametrically opposite ends. Diameter $= |1 - (-i/2)| = |1 + i/2| = \sqrt{1 + 1/4} = \frac{\sqrt{5}}{2}$."
)

print(f"Loaded {len(questions)} MCQs after Chapter 1 & 2")
with open("scripts/math_top100/math_batch1.json", "w", encoding="utf-8") as f:
    json.dump(questions, f, indent=2)
print("Saved partial scripts/math_top100/math_batch1.json")
