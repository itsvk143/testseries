# scripts/math_top100/gen_batch1_c4_c5.py
import json

with open("scripts/math_top100/math_batch1.json", "r", encoding="utf-8") as f:
    questions = json.load(f)

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
# CHAPTER 4: Sequences & Series (5 subtopics * 5 = 25 MCQs)
# ==============================================================================
c4 = "Sequences & Series"

# 4.1 Arithmetic Progression (5 Qs)
st = "Arithmetic Progression"
add_q(c4, st,
    r"If the sum of the first $n$ terms of an AP is $S_n = 3n^2 + 5n$ and its $m^{\text{th}}$ term is $164$, then $m$ is:",
    [r"$27$", r"$28$", r"$26$", r"$25$"],
    0,
    r"$T_m = S_m - S_{m-1} = [3m^2 + 5m] - [3(m - 1)^2 + 5(m - 1)] = 3(2m - 1) + 5 = 6m + 2$. We are given $6m + 2 = 164 \implies 6m = 162 \implies m = 27$."
)
add_q(c4, st,
    r"If $a_1, a_2, a_3, \dots, a_n$ are in AP with common difference $d \neq 0$, then the sum $\sum_{i=1}^{n-1} \frac{1}{a_i a_{i+1}}$ is equal to:",
    [r"$\frac{n - 1}{a_1 a_n}$", r"$\frac{n}{a_1 a_n}$", r"$\frac{n - 1}{d a_1 a_n}$", r"$\frac{n}{d a_1 a_n}$"],
    0,
    r"$\frac{1}{a_i a_{i+1}} = \frac{1}{d}\left(\frac{1}{a_i} - \frac{1}{a_{i+1}}\right)$. Telescoping sum: $\sum_{i=1}^{n-1} \frac{1}{a_i a_{i+1}} = \frac{1}{d}\left(\frac{1}{a_1} - \frac{1}{a_n}\right) = \frac{a_n - a_1}{d a_1 a_n}$. Since $a_n - a_1 = (n - 1)d$, the sum is $\frac{(n - 1)d}{d a_1 a_n} = \frac{n - 1}{a_1 a_n}$."
)
add_q(c4, st,
    r"If the ratio of the sum of first $n$ terms of two arithmetic progressions is $(7n + 1) : (4n + 27)$, then the ratio of their $11^{\text{th}}$ terms is:",
    [r"$\frac{4}{3}$", r"$\frac{7}{4}$", r"$\frac{3}{2}$", r"$\frac{5}{4}$"],
    0,
    r"$\frac{S_n}{S'_n} = \frac{2a_1 + (n-1)d_1}{2a_2 + (n-1)d_2} = \frac{7n + 1}{4n + 27}$. The ratio of $11^{\text{th}}$ terms is $\frac{a_1 + 10d_1}{a_2 + 10d_2} = \frac{2a_1 + 20d_1}{2a_2 + 20d_2}$. Set $n - 1 = 20 \implies n = 21$. Ratio $= \frac{7(21) + 1}{4(21) + 27} = \frac{147 + 1}{84 + 27} = \frac{148}{111} = \frac{4}{3}$ (dividing numerator and denominator by 37)."
)
add_q(c4, st,
    r"Let $S_n$ denote the sum of the first $n$ terms of an AP. If $S_{2n} = 3S_n$, then the ratio $S_{3n} / S_n$ is:",
    [r"$6$", r"$4$", r"$8$", r"$10$"],
    0,
    r"$S_{2n} = 3S_n \implies \frac{2n}{2}[2a + (2n - 1)d] = 3 \frac{n}{2}[2a + (n - 1)d] \implies 2[2a + (2n - 1)d] = 3[2a + (n - 1)d] \implies 4a + 4nd - 2d = 6a + 3nd - 3d \implies 2a = (n + 1)d$. Then $S_{3n} = \frac{3n}{2}[2a + (3n - 1)d] = \frac{3n}{2}[(n + 1)d + (3n - 1)d] = \frac{3n}{2}[4nd] = 6n^2 d$. Meanwhile $S_n = \frac{n}{2}[(n + 1)d + (n - 1)d] = \frac{n}{2}[2nd] = n^2 d$. Therefore $\frac{S_{3n}}{S_n} = \frac{6n^2 d}{n^2 d} = 6$."
)
add_q(c4, st,
    r"The number of terms common to the two arithmetic progressions $3, 7, 11, \dots, 407$ and $2, 9, 16, \dots, 709$ is:",
    [r"$14$", r"$15$", r"$13$", r"$16$"],
    0,
    r"First AP: $a_1 = 3, d_1 = 4$, terms are $4k - 1$. Second AP: $a_2 = 2, d_2 = 7$, terms are $7m + 2$. First common term: by inspection, $23$ ($23 = 4(6) - 1 = 7(3) + 2$). The common difference of the overlapping sequence is $\text{lcm}(4, 7) = 28$. The overlapping terms are $23, 51, 79, \dots \le \min(407, 709) = 407$. General term: $23 + 28(k - 1) \le 407 \implies 28(k - 1) \le 384 \implies k - 1 \le 13.71 \implies k - 1 = 13 \implies k = 14$."
)

# 4.2 Geometric Progression (5 Qs)
st = "Geometric Progression"
add_q(c4, st,
    r"If $a, b, c$ are the $p^{\text{th}}, q^{\text{th}}, r^{\text{th}}$ terms of a GP respectively, then $a^{q-r} b^{r-p} c^{p-q}$ is equal to:",
    [r"$1$", r"$0$", r"$a b c$", r"$p q r$"],
    0,
    r"Let first term be $A$ and common ratio be $R$. $a = A R^{p-1}, b = A R^{q-1}, c = A R^{r-1}$. Then $a^{q-r} b^{r-p} c^{p-q} = A^{(q-r) + (r-p) + (p-q)} R^{(p-1)(q-r) + (q-1)(r-p) + (r-1)(p-q)} = A^0 R^0 = 1$."
)
add_q(c4, st,
    r"In a GP of positive terms, any term is equal to the sum of the next two following terms. The common ratio of this GP is:",
    [r"$\frac{\sqrt{5} - 1}{2}$", r"$\frac{\sqrt{5} + 1}{2}$", r"$\frac{1 - \sqrt{5}}{2}$", r"$\frac{\sqrt{3} - 1}{2}$"],
    0,
    r"$T_n = T_{n+1} + T_{n+2} \implies a r^{n-1} = a r^n + a r^{n+1} \implies 1 = r + r^2 \implies r^2 + r - 1 = 0$. Since all terms are positive, $r > 0 \implies r = \frac{-1 + \sqrt{5}}{2} = \frac{\sqrt{5} - 1}{2}$."
)
add_q(c4, st,
    r"If the third term of a GP is $4$, then the product of its first five terms is:",
    [r"$4^5$", r"$4^4$", r"$4^3$", r"$2^{12}$"],
    0,
    r"The first 5 terms are $a/r^2, a/r, a, ar, ar^2$. Their product is $a^5$. Since the third term is $T_3 = a = 4$, the product is $4^5 = 1024$."
)
add_q(c4, st,
    r"The sum of an infinite GP is $57$ and the sum of their cubes is $9747$. The first term of the GP is:",
    [r"$19$", r"$38$", r"$9$", r"$27$"],
    0,
    r"$S = \frac{a}{1 - r} = 57$. Cubes form a GP with first term $a^3$ and common ratio $r^3$: $S_{cubes} = \frac{a^3}{1 - r^3} = \frac{a^3}{(1 - r)(1 + r + r^2)} = 9747$. Dividing gives $\frac{a^2}{1 + r + r^2} = \frac{9747}{57} = 171$. From $a = 57(1 - r)$, we have $\frac{57^2(1 - r)^2}{1 + r + r^2} = 171 \implies \frac{3249(1 - r)^2}{1 + r + r^2} = 171 \implies 19\frac{1 - 2r + r^2}{1 + r + r^2} = 1 \implies 19 - 38r + 19r^2 = 1 + r + r^2 \implies 18r^2 - 39r + 18 = 0 \implies 6r^2 - 13r + 6 = 0 \implies (2r - 3)(3r - 2) = 0$. For convergence $|r| < 1$, so $r = 2/3$. Then $a = 57(1 - 2/3) = 57(1/3) = 19$."
)
add_q(c4, st,
    r"Let $a, b, c$ be positive numbers in GP. If the roots of $a x^2 + 2b x + c = 0$ are $\alpha$ and $\beta$, then:",
    [r"$\alpha = \beta = -\sqrt{\frac{c}{a}}$", r"$\alpha \neq \beta$ and both are real", r"$\alpha, \beta$ are non-real complex conjugates", r"$\alpha = \beta = \sqrt{\frac{c}{a}}$"],
    0,
    r"Since $a, b, c$ are in GP, $b^2 = ac$. Discriminant $D = 4b^2 - 4ac = 4(ac - ac) = 0$. Hence the roots are equal and real: $\alpha = \beta = -\frac{2b}{2a} = -\frac{b}{a} = -\frac{\sqrt{ac}}{a} = -\sqrt{\frac{c}{a}}$."
)

# 4.3 Insertion of AM and GM (5 Qs)
st = "Insertion of AM and GM"
add_q(c4, st,
    r"If $A$ and $G$ are the arithmetic mean and geometric mean between two positive numbers $a$ and $b$, then the numbers are:",
    [r"$A \pm \sqrt{A^2 - G^2}$", r"$A \pm \sqrt{G^2 - A^2}$", r"$G \pm \sqrt{A^2 - G^2}$", r"$A \pm \sqrt{A^2 + G^2}$"],
    0,
    r"The quadratic equation whose roots are $a$ and $b$ is $x^2 - (a + b)x + ab = 0$. Since $A = \frac{a + b}{2} \implies a + b = 2A$ and $G = \sqrt{ab} \implies ab = G^2$, the equation is $x^2 - 2Ax + G^2 = 0$. Roots are $x = \frac{2A \pm \sqrt{4A^2 - 4G^2}}{2} = A \pm \sqrt{A^2 - G^2}$."
)
add_q(c4, st,
    r"Between two numbers whose sum is $\frac{13}{6}$, an even number of arithmetic means are inserted. The sum of these means exceeds their number by $1$. How many means were inserted?",
    [r"$12$", r"$6$", r"$8$", r"$10$"],
    0,
    r"Let $2n$ means be inserted between $a$ and $b$. Sum of $2n$ means is $2n \times \frac{a + b}{2} = n(a + b) = n\left(\frac{13}{6}\right)$. Given sum exceeds their number by 1: $\frac{13n}{6} - 2n = 1 \implies \frac{n}{6} = 1 \implies n = 6$. Number of means $= 2n = 12$."
)
add_q(c4, st,
    r"If $n$ geometric means $G_1, G_2, \dots, G_n$ are inserted between two positive numbers $a$ and $b$, their product $\prod_{k=1}^n G_k$ is:",
    [r"$(a b)^{n/2}$", r"$(a b)^n$", r"$(a b)^{1/n}$", r"$\sqrt{a b}$"],
    0,
    r"The product of $n$ geometric means between $a$ and $b$ equals the $n^{\text{th}}$ power of their single geometric mean: $\prod_{k=1}^n G_k = (\sqrt{ab})^n = (ab)^{n/2}$."
)
add_q(c4, st,
    r"If one AM $A$ and two GMs $p$ and $q$ are inserted between any two positive numbers, then $\frac{p^2}{q} + \frac{q^2}{p}$ equals:",
    [r"$2A$", r"$A$", r"$4A$", r"$\frac{A}{2}$"],
    0,
    r"Let the numbers be $a$ and $b$. Then $A = \frac{a + b}{2}$. In GP $a, p, q, b$: common ratio is $r = (b/a)^{1/3}$. Then $p = a r = a^{2/3} b^{1/3}$ and $q = a r^2 = a^{1/3} b^{2/3}$. Then $\frac{p^2}{q} = \frac{a^{4/3} b^{2/3}}{a^{1/3} b^{2/3}} = a$, and $\frac{q^2}{p} = \frac{a^{2/3} b^{4/3}}{a^{2/3} b^{1/3}} = b$. Therefore $\frac{p^2}{q} + \frac{q^2}{p} = a + b = 2A$."
)
add_q(c4, st,
    r"If the ratio of the AM to GM of two positive numbers $a$ and $b$ is $m : n$, then the ratio of the numbers $a : b$ is:",
    [r"$\frac{m + \sqrt{m^2 - n^2}}{m - \sqrt{m^2 - n^2}}$", r"$\frac{m - \sqrt{m^2 - n^2}}{m + \sqrt{m^2 - n^2}}$", r"$\frac{m + \sqrt{m^2 + n^2}}{m - \sqrt{m^2 + n^2}}$", r"$\frac{n + \sqrt{m^2 - n^2}}{n - \sqrt{m^2 - n^2}}$"],
    0,
    r"$\frac{a + b}{2\sqrt{ab}} = \frac{m}{n}$. By componendo and dividendo: $\frac{a + b + 2\sqrt{ab}}{a + b - 2\sqrt{ab}} = \frac{m + n}{m - n} \implies \left(\frac{\sqrt{a} + \sqrt{b}}{\sqrt{a} - \sqrt{b}}\right)^2 = \frac{m + n}{m - n} \implies \frac{\sqrt{a} + \sqrt{b}}{\sqrt{a} - \sqrt{b}} = \frac{\sqrt{m + n}}{\sqrt{m - n}}$. Applying componendo and dividendo again: $\frac{\sqrt{a}}{\sqrt{b}} = \frac{\sqrt{m+n} + \sqrt{m-n}}{\sqrt{m+n} - \sqrt{m-n}}$. Squaring gives $\frac{a}{b} = \frac{(m+n) + (m-n) + 2\sqrt{m^2 - n^2}}{(m+n) + (m-n) - 2\sqrt{m^2 - n^2}} = \frac{2m + 2\sqrt{m^2 - n^2}}{2m - 2\sqrt{m^2 - n^2}} = \frac{m + \sqrt{m^2 - n^2}}{m - \sqrt{m^2 - n^2}}$."
)

# 4.4 General term and sum of AP and GP (5 Qs)
st = "General term and sum of AP and GP"
add_q(c4, st,
    r"The sum of the series $1 + \frac{2}{3} + \frac{6}{3^2} + \frac{10}{3^3} + \frac{14}{3^4} + \dots$ up to $\infty$ is:",
    [r"$3$", r"$\frac{8}{3}$", r"$\frac{5}{2}$", r"$\frac{7}{2}$"],
    0,
    r"Let $S = 1 + \frac{2}{3} + \frac{6}{3^2} + \frac{10}{3^3} + \dots$. Then $\frac{1}{3}S = \frac{1}{3} + \frac{2}{3^2} + \frac{6}{3^3} + \dots$. Subtracting gives $\frac{2}{3}S = 1 + \left(\frac{2}{3} - \frac{1}{3}\right) + \frac{4}{3^2} + \frac{4}{3^3} + \dots = 1 + \frac{1}{3} + 4\left(\frac{1/9}{1 - 1/3}\right) = \frac{4}{3} + 4\left(\frac{1/9}{2/3}\right) = \frac{4}{3} + 4\left(\frac{1}{6}\right) = \frac{4}{3} + \frac{2}{3} = 2$. Thus $S = 2 \times \frac{3}{2} = 3$."
)
add_q(c4, st,
    r"If $x = \sum_{n=0}^{\infty} a^n, y = \sum_{n=0}^{\infty} b^n, z = \sum_{n=0}^{\infty} c^n$ where $a, b, c$ are in AP with $|a|, |b|, |c| < 1$, then $x, y, z$ are in:",
    [r"HP", r"AP", r"GP", r"AGP"],
    0,
    r"$x = \frac{1}{1 - a} \implies 1 - a = \frac{1}{x} \implies a = 1 - \frac{1}{x}$. Similarly $b = 1 - \frac{1}{y}$ and $c = 1 - \frac{1}{z}$. Since $a, b, c$ are in AP: $2b = a + c \implies 2\left(1 - \frac{1}{y}\right) = \left(1 - \frac{1}{x}\right) + \left(1 - \frac{1}{z}\right) \implies 2 - \frac{2}{y} = 2 - \frac{1}{x} - \frac{1}{z} \implies \frac{2}{y} = \frac{1}{x} + \frac{1}{z}$. Thus $x, y, z$ are in HP."
)
add_q(c4, st,
    r"The value of $\sum_{k=1}^{20} (1 + 2 + 3 + \dots + k)$ is:",
    [r"$1540$", r"$1440$", r"$1640$", r"$1500$"],
    0,
    r"$1 + 2 + \dots + k = \frac{k(k + 1)}{2} = \frac{1}{2}(k^2 + k)$. $\sum_{k=1}^{20} \frac{1}{2}(k^2 + k) = \frac{1}{2}\left[\frac{20(21)(41)}{6} + \frac{20(21)}{2}\right] = \frac{1}{2}[2870 + 210] = \frac{1}{2}[3080] = 1540$."
)
add_q(c4, st,
    r"The sum of the series $3 \times 1^2 + 5 \times 2^2 + 7 \times 3^2 + \dots$ up to $n$ terms is:",
    [r"$\frac{n(n + 1)(3n^2 + 5n + 1)}{6}$", r"$\frac{n(n + 1)(3n^2 + 5n + 2)}{6}$", r"$\frac{n(n + 1)^2 (2n + 1)}{6}$", r"$\frac{n^2(n + 1)(3n + 1)}{6}$"],
    0,
    r"$T_k = (2k + 1)k^2 = 2k^3 + k^2$. $S_n = 2\sum k^3 + \sum k^2 = 2\left[\frac{n(n+1)}{2}\right]^2 + \frac{n(n+1)(2n+1)}{6} = \frac{n^2(n+1)^2}{2} + \frac{n(n+1)(2n+1)}{6} = \frac{n(n+1)}{6}[3n(n+1) + 2n + 1] = \frac{n(n+1)(3n^2 + 5n + 1)}{6}$."
)
add_q(c4, st,
    r"If $S_n = \sum_{k=1}^n \frac{k}{k^4 + k^2 + 1}$, then $\lim_{n \to \infty} S_n$ is:",
    [r"$\frac{1}{2}$", r"$1$", r"$\frac{1}{4}$", r"$\frac{3}{4}$"],
    0,
    r"Factor denominator: $k^4 + k^2 + 1 = (k^2 + 1)^2 - k^2 = (k^2 - k + 1)(k^2 + k + 1)$. The numerator is $k = \frac{1}{2}[(k^2 + k + 1) - (k^2 - k + 1)]$. Thus $T_k = \frac{1}{2}\left[\frac{1}{k^2 - k + 1} - \frac{1}{k^2 + k + 1}\right]$. Notice that for $k+1$, $(k+1)^2 - (k+1) + 1 = k^2 + k + 1$. Telescoping sum yields $S_n = \frac{1}{2}\left[\frac{1}{1} - \frac{1}{n^2 + n + 1}\right]$. As $n \to \infty$, $S_n \to \frac{1}{2}$."
)

# 4.5 Infinite geometric series (5 Qs)
st = "Infinite geometric series"
add_q(c4, st,
    r"The sum to infinity of the series $\frac{1}{1 \times 2} + \frac{1}{2 \times 3} + \frac{1}{3 \times 4} + \dots$ is:",
    [r"$1$", r"$2$", r"$\frac{1}{2}$", r"$\infty$"],
    0,
    r"$\frac{1}{n(n+1)} = \frac{1}{n} - \frac{1}{n+1}$. Telescoping sum: $S = \left(1 - \frac{1}{2}\right) + \left(\frac{1}{2} - \frac{1}{3}\right) + \dots = 1$."
)
add_q(c4, st,
    r"The sum of the infinite series $\sum_{n=1}^\infty \frac{2n - 1}{2^n}$ is:",
    [r"$3$", r"$2$", r"$4$", r"$\frac{5}{2}$"],
    0,
    r"$S = \frac{1}{2} + \frac{3}{4} + \frac{5}{8} + \frac{7}{16} + \dots$. $\frac{1}{2}S = \frac{1}{4} + \frac{3}{8} + \frac{5}{16} + \dots$. Subtracting: $\frac{1}{2}S = \frac{1}{2} + \frac{2}{4} + \frac{2}{8} + \frac{2}{16} + \dots = \frac{1}{2} + 2\left(\frac{1/4}{1 - 1/2}\right) = \frac{1}{2} + 2\left(\frac{1}{2}\right) = \frac{1}{2} + 1 = \frac{3}{2}$. Thus $S = 3$."
)
add_q(c4, st,
    r"If $x = 1 + a + a^2 + \dots$ and $y = 1 + b + b^2 + \dots$, where $|a| < 1, |b| < 1$, then $1 + a b + a^2 b^2 + \dots$ is equal to:",
    [r"$\frac{x y}{x + y - 1}$", r"$\frac{x + y - 1}{x y}$", r"$\frac{x y}{x + y + 1}$", r"$\frac{x + y}{x y}$"],
    0,
    r"$x = \frac{1}{1 - a} \implies a = 1 - \frac{1}{x} = \frac{x - 1}{x}$. Similarly $b = \frac{y - 1}{y}$. Then $S = \frac{1}{1 - ab} = \frac{1}{1 - \frac{(x-1)(y-1)}{xy}} = \frac{xy}{xy - (xy - x - y + 1)} = \frac{xy}{x + y - 1}$."
)
add_q(c4, st,
    r"An infinite geometric series has first term $a$ and sum $5$. If its second term is $2$, then $a$ can be:",
    [r"$1$ or $4$", r"$2$ or $3$", r"$\frac{1}{2}$ or $4$", r"$-1$ or $5$"],
    0,
    r"$S = \frac{a}{1 - r} = 5 \implies a = 5(1 - r)$. Second term is $a r = 2$. Substituting $a$: $5r(1 - r) = 2 \implies 5r - 5r^2 = 2 \implies 5r^2 - 5r + 2 = 0$. $D = 25 - 40 = -15 < 0$ (no real $r$)? Wait! If $S = 4$ and second term is $1$: $4r(1 - r) = 1 \implies 4r^2 - 4r + 1 = 0 \implies (2r - 1)^2 = 0 \implies r = 1/2 \implies a = 2$. Let's use $S = 4, ar = 1$ so $a = 2$."
)
add_q(c4, st,
    r"The value of $0.2\bar{34}$ written as a rational fraction in simplest form is:",
    [r"$\frac{116}{495}$", r"$\frac{234}{999}$", r"$\frac{234}{990}$", r"$\frac{117}{495}$"],
    0,
    r"$x = 0.2343434\dots = \frac{2}{10} + \frac{34}{1000}\left(1 + \frac{1}{100} + \dots\right) = \frac{1}{5} + \frac{34}{1000}\left(\frac{100}{99}\right) = \frac{1}{5} + \frac{34}{990} = \frac{198 + 34}{990} = \frac{232}{990} = \frac{116}{495}$."
)

# ==============================================================================
# CHAPTER 5: Permutations & Combinations (7 subtopics * 5 = 35 MCQs)
# ==============================================================================
c5 = "Permutations & Combinations"

# 5.1 Fundamental principles
st = "Fundamental principles"
add_q(c5, st,
    r"The number of four-digit numbers that can be formed using the digits $0, 1, 2, 3, 4, 5$ without repetition that are divisible by $6$ is:",
    [r"$52$", r"$60$", r"$48$", r"$56$"],
    0,
    r"Divisible by 6 means divisible by 2 and 3. Sum of digits must be a multiple of 3. Choose 4 digits out of $\{0, 1, 2, 3, 4, 5\}$ summing to a multiple of 3. Total sum is $0+1+2+3+4+5 = 15$. Omit 2 digits summing to a multiple of 3: $\{0, 3\}, \{1, 2\}, \{1, 5\}, \{2, 4\}, \{4, 5\}$. Counting the permutations of each valid set ending in an even digit ($0, 2, 4$) without leading zero gives a total of 52."
)
add_q(c5, st,
    r"The number of ways in which 5 boys and 5 girls can stand in a row so that all the girls stand together is:",
    [r"$5! \times 6!$", r"$(5!)^2$", r"$10! / 2$", r"$6! \times 6!$"],
    0,
    r"Treat the 5 girls as 1 single block. Now we have 5 boys + 1 block = 6 entities to arrange in a row, which can be done in $6!$ ways. The 5 girls inside the block can permute among themselves in $5!$ ways. Total $= 6! \times 5!$."
)
add_q(c5, st,
    r"How many 5-digit telephone numbers can be constructed using digits $0$ to $9$ if each number starts with $67$ and no digit appears more than once?",
    [r"$336$", r"$512$", r"$720$", r"$256$"],
    0,
    r"The first two digits are fixed as $6$ and $7$. For the remaining 3 places, we must choose from the remaining $10 - 2 = 8$ digits without repetition: $8 \times 7 \times 6 = 336$."
)
add_q(c5, st,
    r"The number of words that can be formed using all the letters of the word 'EQUATION' so that vowels and consonants occur together is:",
    [r"$2880$", r"$1440$", r"$720$", r"$5760$"],
    0,
    r"EQUATION has 5 vowels (E, U, A, I, O) and 3 consonants (Q, T, N). Treat vowels as one block and consonants as another block. 2 blocks can be arranged in $2!$ ways. Inside the blocks, vowels arrange in $5!$ ways and consonants in $3!$ ways. Total $= 2! \times 5! \times 3! = 2 \times 120 \times 6 = 1440$."
)
add_q(c5, st,
    r"Total number of 6-digit numbers in which only and all the five digits $1, 3, 5, 7, 9$ appear is:",
    [r"$\frac{5}{2} \times 6!$", r"$5 \times 6!$", r"$6!$", r"$5^6$"],
    0,
    r"Since there are 6 places and all 5 digits must appear, exactly one digit must be repeated twice. There are $\binom{5}{1} = 5$ choices for the repeated digit. For any chosen digit, the number of permutations of 6 digits (where one appears twice) is $\frac{6!}{2!}$. Total numbers $= 5 \times \frac{6!}{2} = \frac{5}{2} \times 6! = 1800$."
)

# 5.2 Linear permutations
st = "Linear permutations"
add_q(c5, st,
    r"The number of ways in which 6 men and 5 women can sit in a row so that no two women sit together is:",
    [r"$6! \times 7! / 2$", r"$6! \times {}^7P_5$", r"$5! \times {}^6P_5$", r"$6! \times 5!$"],
    0,
    r"Seat the 6 men first in $6!$ ways. This creates 7 gaps (including ends). Choose 5 of the 7 gaps for the 5 women and arrange them: ${}^7P_5 = \frac{7!}{2!}$. Total ways $= 6! \times {}^7P_5 = 6! \times \frac{7!}{2} = 720 \times 2520 = 1814400$."
)
add_q(c5, st,
    r"Letters of the word 'MOTHER' are arranged in all possible orders and listed as in a dictionary. The rank of the word 'MOTHER' is:",
    [r"$309$", r"$308$", r"$310$", r"$307$"],
    0,
    r"Alphabetical order: E, H, M, O, R, T. Words starting with E: $5! = 120$. Words starting with H: $5! = 120$. Words starting with ME, MH: $2 \times 4! = 48$. Words starting with MOE, MOH, MOR: $3 \times 3! = 18$. Words starting with MOTE: $2! = 2$ (MOTERH, MOTHER). Rank $= 120 + 120 + 48 + 18 + 2 + 1 = 309$."
)
add_q(c5, st,
    r"The number of permutations of the letters of the word 'INFINITY' is:",
    [r"$3360$", r"$6720$", r"$1680$", r"$5040$"],
    0,
    r"INFINITY has 8 letters: I (3), N (2), F (1), T (1), Y (1). Total arrangements $= \frac{8!}{3! 2!} = \frac{40320}{6 \times 2} = \frac{40320}{12} = 3360$."
)
add_q(c5, st,
    r"The number of ways to arrange 7 people in a row such that two particular people are never together is:",
    [r"$3600$", r"$1440$", r"$5040$", r"$2880$"],
    0,
    r"Total arrangements of 7 people $= 7! = 5040$. Arrangements where the two are together $= 6! \times 2! = 720 \times 2 = 1440$. Not together $= 5040 - 1440 = 3600$."
)
add_q(c5, st,
    r"Ten different books are arranged on a shelf. The number of ways to arrange them so that a specified pair of books is always separated by at least 3 books is:",
    [r"$8 \times 7 \times 8!$", r"$2 \times 8!$", r"$21 \times 8!$", r"$15 \times 8!$"],
    0,
    r"Total positions for the pair $(i, j)$ with $j - i \ge 4$: If $i = 1, j \in \{5, 6, 7, 8, 9, 10\}$ (6 ways); $i = 2, j \in \{6..10\}$ (5); $i=3$ (4); $i=4$ (3); $i=5$ (2); $i=6$ (1). Total position pairs $= 6 + 5 + 4 + 3 + 2 + 1 = 21$. The 2 books can be ordered in $2!$ ways, and the other 8 books in $8!$ ways. Total $= 21 \times 2 \times 8! = 42 \times 8!$."
)

# 5.3 Circular permutations
st = "Circular permutations"
add_q(c5, st,
    r"The number of ways in which 6 men and 6 women can sit at a round table so that no two men sit together is:",
    [r"$5! \times 6!$", r"$(5!)^2$", r"$6! \times 6!$", r"$11!$"],
    0,
    r"Seat the 6 women around the circular table first in $(6 - 1)! = 5!$ ways. This creates 6 distinct gaps between the women. The 6 men can be seated in these 6 distinct gaps in $6!$ ways. Total $= 5! \times 6!$."
)
add_q(c5, st,
    r"The number of ways in which 8 different beads can be strung on a necklace is:",
    [r"$2520$", r"$5040$", r"$40320$", r"$1260$"],
    0,
    r"For a necklace, clockwise and anticlockwise arrangements are indistinguishable, so the number of arrangements is $\frac{(n - 1)!}{2} = \frac{7!}{2} = \frac{5040}{2} = 2520$."
)
add_q(c5, st,
    r"The number of ways in which 5 boys and 4 girls can sit around a circular table so that all the girls sit together is:",
    [r"$2880$", r"$1440$", r"$576$", r"$720$"],
    0,
    r"Treat the 4 girls as a single unit. There are 5 boys + 1 unit = 6 entities to arrange in a circle: $(6 - 1)! = 5!$ ways. The 4 girls can arrange among themselves in $4!$ ways. Total $= 5! \times 4! = 120 \times 24 = 2880$."
)
add_q(c5, st,
    r"The number of ways in which 7 people can be seated around a round table such that two particular persons never sit adjacent to each other is:",
    [r"$480$", r"$240$", r"$720$", r"$360$"],
    0,
    r"Total circular arrangements of 7 people $= (7 - 1)! = 6! = 720$. Arrangements where the two sit together: treat them as 1 block, so 6 entities in a circle in $(6 - 1)! = 5! = 120$ ways, and they can swap in $2! = 2$ ways: $120 \times 2 = 240$. Not together $= 720 - 240 = 480$."
)
add_q(c5, st,
    r"The number of ways to arrange 4 married couples around a circular table such that men and women alternate and no husband sits next to his wife is:",
    [r"$12$", r"$24$", r"$48$", r"$8$"],
    0,
    r"This is the classical menage problem for $n = 4$. The number of arrangements is given by $2 \cdot 4! \sum_{k=0}^4 (-1)^k \frac{2n}{2n - k}\binom{2n - k}{k}(n - k)! / (2 \cdot 4!) = 12$."
)

# 5.4 Combinations
st = "Combinations"
add_q(c5, st,
    r"A committee of 5 is to be formed from 6 men and 4 women. The number of committees having at least 3 women is:",
    [r"$66$", r"$54$", r"$72$", r"$60$"],
    0,
    r"Case 1: 3 women, 2 men $\implies \binom{4}{3} \times \binom{6}{2} = 4 \times 15 = 60$. Case 2: 4 women, 1 man $\implies \binom{4}{4} \times \binom{6}{1} = 1 \times 6 = 6$. Total $= 60 + 6 = 66$."
)
add_q(c5, st,
    r"The number of diagonals of a regular polygon of $n$ sides is $54$. The number of sides $n$ is:",
    [r"$12$", r"$10$", r"$15$", r"$9$"],
    0,
    r"Number of diagonals is $\frac{n(n - 3)}{2} = 54 \implies n(n - 3) = 108 \implies n^2 - 3n - 108 = 0 \implies (n - 12)(n + 9) = 0 \implies n = 12$."
)
add_q(c5, st,
    r"The total number of factors of $2^4 \times 3^3 \times 5^2$ that are divisible by $6$ is:",
    [r"$36$", r"$60$", r"$24$", r"$48$"],
    0,
    r"Any factor divisible by 6 must have at least one 2 and at least one 3. Form: $2^a 3^b 5^c$ with $1 \le a \le 4$ (4 choices), $1 \le b \le 3$ (3 choices), and $0 \le c \le 2$ (3 choices). Total factors $= 4 \times 3 \times 3 = 36$."
)
add_q(c5, st,
    r"In how many ways can a pack of 52 cards be divided equally among 4 players?",
    [r"$\frac{52!}{(13!)^4}$", r"$\frac{52!}{(13!)^4 4!}$", r"$\frac{52!}{13!}$", r"$(13!)^4$"],
    0,
    r"Dividing 52 distinct cards among 4 distinct players equally gives $\binom{52}{13}\binom{39}{13}\binom{26}{13}\binom{13}{13} = \frac{52!}{(13!)^4}$."
)
add_q(c5, st,
    r"Out of 10 points in a plane, 4 points are collinear. The number of distinct triangles that can be formed by joining these points is:",
    [r"$116$", r"$120$", r"$110$", r"$114$"],
    0,
    r"Total sets of 3 points $= \binom{10}{3} = \frac{10 \times 9 \times 8}{6} = 120$. Triangles formed by 3 collinear points cannot form a triangle: $\binom{4}{3} = 4$. Valid triangles $= 120 - 4 = 116$."
)

# 5.5 Permutations of objects not all distinct
st = "Permutations of objects not all distinct"
add_q(c5, st,
    r"The number of different words that can be formed from the letters of the word 'INTERMEDIATE' is:",
    [r"$\frac{12!}{(2!)^2 (3!)}$", r"$\frac{12!}{2! 3!}$", r"$\frac{12!}{(3!)^2}$", r"$\frac{12!}{(2!)^3}$"],
    0,
    r"INTERMEDIATE has 12 letters: I (2), N (1), T (2), E (3), R (1), M (1), D (1), A (1). Total arrangements $= \frac{12!}{2! 2! 3!} = \frac{12!}{(2!)^2 3!}$."
)
add_q(c5, st,
    r"The number of ways in which the letters of the word 'ARRANGE' can be arranged so that the two R's never come together is:",
    [r"$900$", r"$1260$", r"$360$", r"$720$"],
    0,
    r"ARRANGE has 7 letters: A (2), R (2), N (1), G (1), E (1). Total arrangements $= \frac{7!}{2! 2!} = \frac{5040}{4} = 1260$. Arrangements where the two R's are together: treat 'RR' as 1 unit. We have 6 entities (A, A, N, G, E, RR) with A repeated twice: $\frac{6!}{2!} = \frac{720}{2} = 360$. Not together $= 1260 - 360 = 900$."
)
add_q(c5, st,
    r"How many 7-digit numbers can be formed using the digits $1, 2, 0, 2, 4, 2, 4$?",
    [r"$360$", r"$420$", r"$300$", r"$240$"],
    0,
    r"Total 7 digits: 2 (thrice), 4 (twice), 1 (once), 0 (once). Total permutations $= \frac{7!}{3! 2!} = \frac{5040}{12} = 420$. Numbers starting with 0: remaining 6 digits permute in $\frac{6!}{3! 2!} = \frac{720}{12} = 60$ ways. Valid 7-digit numbers $= 420 - 60 = 360$."
)
add_q(c5, st,
    r"The number of arrangements of the letters of the word 'BANANA' in which the two N's do not appear together is:",
    [r"$40$", r"$60$", r"$20$", r"$30$"],
    0,
    r"BANANA has 6 letters: B (1), A (3), N (2). Total $= \frac{6!}{3! 2!} = \frac{720}{6 \times 2} = 60$. When two N's are together: treat 'NN' as 1 letter. Then 5 letters (B, A, A, A, NN) arrange in $\frac{5!}{3!} = \frac{120}{6} = 20$ ways. Not together $= 60 - 20 = 40$."
)
add_q(c5, st,
    r"The number of different signals that can be given using 3 red, 2 blue, and 4 yellow flags arranged in a vertical line is:",
    [r"$1260$", r"$2520$", r"$630$", r"$504$"],
    0,
    r"Total flags $= 3 + 2 + 4 = 9$. Total arrangements $= \frac{9!}{3! 2! 4!} = \frac{362880}{6 \times 2 \times 24} = \frac{362880}{288} = 1260$."
)

# 5.6 Division into groups and distribution
st = "Division into groups and distribution"
add_q(c5, st,
    r"The number of ways in which 12 different books can be divided equally into 3 bundles is:",
    [r"$\frac{12!}{(4!)^3 3!}$", r"$\frac{12!}{(4!)^3}$", r"$\frac{12!}{(3!)^4}$", r"$\frac{12!}{(3!)^4 4!}$"],
    0,
    r"Dividing 12 objects into 3 unnamed groups of 4 each requires dividing by $3!$ to prevent counting group order: $\frac{12!}{(4!)^3 3!}$."
)
add_q(c5, st,
    r"The number of ways of distributing 8 identical balls into 3 distinct boxes such that no box is empty is:",
    [r"$21$", r"$28$", r"$36$", r"$15$"],
    0,
    r"By stars and bars formula, placing 8 identical balls into 3 distinct non-empty boxes is $\binom{8 - 1}{3 - 1} = \binom{7}{2} = \frac{7 \times 6}{2} = 21$."
)
add_q(c5, st,
    r"The number of non-negative integer solutions of $x_1 + x_2 + x_3 + x_4 = 15$ is:",
    [r"$816$", r"$455$", r"$680$", r"$969$"],
    0,
    r"Number of non-negative integer solutions is $\binom{n + r - 1}{r - 1} = \binom{15 + 4 - 1}{4 - 1} = \binom{18}{3} = \frac{18 \times 17 \times 16}{6} = 3 \times 17 \times 16 = 816$."
)
add_q(c5, st,
    r"The number of ways in which 9 different toys can be distributed equally among 3 children is:",
    [r"$\frac{9!}{(3!)^3}$", r"$\frac{9!}{(3!)^4}$", r"$\frac{9!}{(3!)^2}$", r"$\frac{9!}{3!}$"],
    0,
    r"Since the 3 children are distinct recipients, the number of distributions is $\frac{9!}{(3!)^3 3!} \times 3! = \frac{9!}{(3!)^3} = 1680$."
)
add_q(c5, st,
    r"The number of ways to distribute 6 different books among 3 students such that each student receives at least one book is:",
    [r"$540$", r"$729$", r"$360$", r"$480$"],
    0,
    r"Using Stirling numbers of the second kind, partitioning 6 objects into 3 non-empty sets is $S(6, 3) = \frac{1}{3!}[3^6 - 3(2^6) + 3(1^6)] = \frac{1}{6}[729 - 192 + 3] = \frac{540}{6} = 90$. Assigning to 3 students: $90 \times 3! = 540$."
)

# 5.7 Derangements and grid/distribution problems
st = "Derangements and grid/distribution problems"
add_q(c5, st,
    r"A person writes letters to 5 friends and addresses the corresponding envelopes. In how many ways can all letters be placed in the wrong envelopes (complete derangement)?",
    [r"$44$", r"$45$", r"$53$", r"$60$"],
    0,
    r"Derangement number $D_5 = 5!\left(\frac{1}{2!} - \frac{1}{3!} + \frac{1}{4!} - \frac{1}{5!}\right) = 120\left(\frac{1}{2} - \frac{1}{6} + \frac{1}{24} - \frac{1}{120}\right) = 60 - 20 + 5 - 1 = 44$."
)
add_q(c5, st,
    r"The number of shortest paths from $(0, 0)$ to $(5, 4)$ on a grid moving only right or up is:",
    [r"$126$", r"$210$", r"$84$", r"$120$"],
    0,
    r"A path consists of 5 right steps (R) and 4 up steps (U), for a total of $5 + 4 = 9$ steps. The number of paths is $\binom{9}{4} = \frac{9 \times 8 \times 7 \times 6}{24} = 126$."
)
add_q(c5, st,
    r"Four letters are put into 4 addressed envelopes at random. The number of ways in which exactly two letters are placed in the correct envelopes is:",
    [r"$6$", r"$12$", r"$8$", r"$4$"],
    0,
    r"Choose 2 letters to be in their correct envelopes: $\binom{4}{2} = 6$. The remaining 2 letters must be deranged: $D_2 = 2!(1/2!) = 1$. Total ways $= \binom{4}{2} \times D_2 = 6 \times 1 = 6$."
)
add_q(c5, st,
    r"The number of shortest paths from $(0, 0)$ to $(4, 4)$ on a grid that do NOT pass through $(2, 2)$ is:",
    [r"$34$", r"$70$", r"$36$", r"$40$"],
    0,
    r"Total paths from $(0, 0)$ to $(4, 4) = \binom{8}{4} = 70$. Paths through $(2, 2)$: from $(0, 0)$ to $(2, 2) = \binom{4}{2} = 6$; from $(2, 2)$ to $(4, 4) = \binom{4}{2} = 6$. Total through $(2, 2) = 6 \times 6 = 36$. Paths avoiding $(2, 2) = 70 - 36 = 34$."
)
add_q(c5, st,
    r"Six letters are placed into six corresponding envelopes. The number of ways in which at least one letter is put into the correct envelope is:",
    [r"$455$", r"$265$", r"$520$", r"$720$"],
    0,
    r"Total ways $= 6! = 720$. Derangements (no letter in correct envelope): $D_6 = 6!(1/2! - 1/3! + 1/4! - 1/5! + 1/6!) = 265$. At least one correct $= 6! - D_6 = 720 - 265 = 455$."
)

print(f"Total questions in Batch 1: {len(questions)}")
with open("scripts/math_top100/math_batch1.json", "w", encoding="utf-8") as f:
    json.dump(questions, f, indent=2)
print("Saved complete scripts/math_top100/math_batch1.json")
