import json

batch2_part1 = []

# ==========================================
# CHAPTER 6: Binomial Theorem (5 topics x 5 = 25 Qs)
# ==========================================
ch = "Binomial Theorem"

# Topic 1: General term
top = "General term"
q_list = [
    {
        "question": r"In the expansion of $\left(\sqrt[3]{x} + \frac{1}{2\sqrt[3]{x}}\right)^{18}$, let $T_r$ and $T_{r+1}$ be two consecutive terms such that the ratio of the coefficient of $x^{-2}$ to the term independent of $x$ is $k$. If the term independent of $x$ is $T_m$, then $m$ equals:",
        "options": [
            r"$9$",
            r"$10$",
            r"$11$",
            r"$8$"
        ],
        "correctAnswer": 1,
        "explanation": r"The general term is $T_{r+1} = \binom{18}{r} (\sqrt[3]{x})^{18-r} \left(\frac{1}{2\sqrt[3]{x}}\right)^r = \binom{18}{r} 2^{-r} x^{\frac{18-2r}{3}}$. For the term independent of $x$, $\frac{18-2r}{3} = 0 \implies r = 9$. Thus, the independent term is $T_{9+1} = T_{10}$. Hence, $m = 10$."
    },
    {
        "question": r"If the 4th term in the binomial expansion of $\left(\frac{2}{x} + x^{\log_8 x}\right)^6$ (where $x > 0, x \neq 1$) is $20 \times 8^7$, then the value of $x$ is:",
        "options": [
            r"$8$",
            r"$16$",
            r"$64$",
            r"$4$"
        ],
        "correctAnswer": 2,
        "explanation": r"The 4th term is $T_4 = \binom{6}{3} \left(\frac{2}{x}\right)^3 (x^{\log_8 x})^3 = 20 \cdot \frac{8}{x^3} \cdot x^{3\log_8 x} = 160 \cdot x^{3\log_8 x - 3}$. We are given $160 x^{3(\log_8 x - 1)} = 20 \cdot 8^7 \implies x^{3(\log_8 x - 1)} = 8^6$. Taking $\log_8$ on both sides: $3(\log_8 x - 1)\log_8 x = 6 \implies (\log_8 x)^2 - \log_8 x - 2 = 0$. Factoring gives $(\log_8 x - 2)(\log_8 x + 1) = 0$. Since $x > 1$, $\log_8 x = 2 \implies x = 64$."
    },
    {
        "question": r"If the 6th term in the expansion of $\left(2^{\log_2 \sqrt{9^{x-1}+7}} + \frac{1}{2^{\frac{1}{5}\log_2(3^{x-1}+1)}}\right)^7$ is $84$, then the sum of all possible real values of $x$ is:",
        "options": [
            r"$1$",
            r"$2$",
            r"$3$",
            r"$4$"
        ],
        "correctAnswer": 2,
        "explanation": r"Note that $2^{\log_2 y} = y$. Thus the first term is $u = \sqrt{9^{x-1}+7}$ and the second term is $v = (3^{x-1}+1)^{-1/5}$. The 6th term is $T_6 = \binom{7}{5} u^{7-5} v^5 = 21 (\sqrt{9^{x-1}+7})^2 ((3^{x-1}+1)^{-1/5})^5 = 21 \frac{9^{x-1}+7}{3^{x-1}+1}$. Given $T_6 = 84$, we have $\frac{9^{x-1}+7}{3^{x-1}+1} = 4$. Let $t = 3^{x-1} > 0$. Then $t^2 + 7 = 4(t+1) \implies t^2 - 4t + 3 = 0 \implies t = 1$ or $t = 3$. If $3^{x-1} = 1 \implies x - 1 = 0 \implies x = 1$. If $3^{x-1} = 3 \implies x - 1 = 1 \implies x = 2$. Both are valid. The sum of all real values of $x$ is $1 + 2 = 3$."
    },
    {
        "question": r"The number of integral terms in the expansion of $(3^{1/2} + 5^{1/8})^{256}$ is:",
        "options": [
            r"$32$",
            r"$33$",
            r"$31$",
            r"$35$"
        ],
        "correctAnswer": 1,
        "explanation": r"The general term of $(3^{1/2} + 5^{1/8})^{256}$ is $T_{r+1} = \binom{256}{r} 3^{\frac{256-r}{2}} 5^{\frac{r}{8}}$ for $0 \le r \le 256$. For $T_{r+1}$ to be an integer, $r$ must be a multiple of $8$ and $256-r$ must be even (which is automatically true since $r$ is a multiple of $8$). Thus $r = 8k$ with $0 \le 8k \le 256 \implies 0 \le k \le 32$. The number of values of $k$ is $32 - 0 + 1 = 33$."
    },
    {
        "question": r"In the expansion of $\left(2x^3 - \frac{1}{x^2}\right)^{15}$, the coefficient of $x^5$ is:",
        "options": [
            r"$128 \binom{15}{7}$",
            r"$-128 \binom{15}{7}$",
            r"$64 \binom{15}{8}$",
            r"$-64 \binom{15}{8}$"
        ],
        "correctAnswer": 0,
        "explanation": r"The general term is $T_{r+1} = \binom{15}{r}(2x^3)^{15-r}(-x^{-2})^r = (-1)^r \binom{15}{r} 2^{15-r} x^{45-5r}$. We set $45 - 5r = 5 \implies 5r = 40 \implies r = 8$. Thus the coefficient is $(-1)^8 \binom{15}{8} 2^{15-8} = 2^7 \binom{15}{8} = 128 \binom{15}{7}$ (since $\binom{15}{8} = \binom{15}{7}$)."
    }
]
for q in q_list:
    batch2_part1.append({"chapter": ch, "subtopic": top, **q})

# Topic 2: Middle term
top = "Middle term"
q_list = [
    {
        "question": r"If the middle term in the expansion of $\left(\frac{x}{2} + 2\right)^8$ is $1120$, then the positive real value of $x$ is:",
        "options": [
            r"$\sqrt{2}$",
            r"$2$",
            r"$1$",
            r"$4$"
        ],
        "correctAnswer": 1,
        "explanation": r"Since $n = 8$ is even, there is one middle term: $T_{4+1} = T_5$. $T_5 = \binom{8}{4} \left(\frac{x}{2}\right)^4 (2)^4 = 70 \cdot \frac{x^4}{16} \cdot 16 = 70 x^4$. Given $70 x^4 = 1120 \implies x^4 = 16 \implies x = 2$ (positive real value)."
    },
    {
        "question": r"The middle term in the expansion of $\left(1 - 3x + 3x^2 - x^3\right)^{2n}$ is:",
        "options": [
            r"$\binom{6n}{3n} (-1)^n x^{3n}$",
            r"$\binom{6n}{3n} (-x)^{3n}$",
            r"$\binom{6n}{3n} x^{3n}$",
            r"$\binom{4n}{2n} (-1)^n x^{2n}$"
        ],
        "correctAnswer": 1,
        "explanation": r"Observe that $1 - 3x + 3x^2 - x^3 = (1 - x)^3$. Thus, the given expression is $\left((1 - x)^3\right)^{2n} = (1 - x)^{6n}$. The number of terms is $6n + 1$, so the middle term is $T_{3n+1} = \binom{6n}{3n} (1)^{3n} (-x)^{3n} = \binom{6n}{3n} (-x)^{3n}$."
    },
    {
        "question": r"In the expansion of $\left(x - \frac{1}{x}\right)^{2n}$, the middle term is given by:",
        "options": [
            r"$\frac{1 \cdot 3 \cdot 5 \cdots (2n-1)}{n!} (-2)^n$",
            r"$\frac{1 \cdot 3 \cdot 5 \cdots (2n-1)}{n!} 2^n$",
            r"$\frac{2 \cdot 4 \cdot 6 \cdots (2n)}{n!} (-1)^n$",
            r"$\frac{1 \cdot 3 \cdot 5 \cdots (2n-1)}{n!} (-1)^n$"
        ],
        "correctAnswer": 0,
        "explanation": r"The middle term of $(x - 1/x)^{2n}$ is $T_{n+1} = \binom{2n}{n} x^n (-1/x)^n = (-1)^n \binom{2n}{n}$. Expanding $\binom{2n}{n} = \frac{(2n)!}{(n!)^2} = \frac{[1 \cdot 3 \cdot 5 \cdots (2n-1)][2 \cdot 4 \cdots (2n)]}{(n!)^2} = \frac{1 \cdot 3 \cdot 5 \cdots (2n-1) \cdot 2^n n!}{(n!)^2} = \frac{1 \cdot 3 \cdot 5 \cdots (2n-1)}{n!} 2^n$. Multiplying by $(-1)^n$ gives $\frac{1 \cdot 3 \cdot 5 \cdots (2n-1)}{n!} (-2)^n$."
    },
    {
        "question": r"If the greatest term in the expansion of $(1 + x)^{2n}$ has the greatest coefficient, then the range of $x$ is:",
        "options": [
            r"$\left[\frac{n}{n+1}, \frac{n+1}{n}\right]$",
            r"$\left(\frac{n-1}{n}, \frac{n+1}{n}\right)$",
            r"$\left[\frac{n-1}{n+1}, \frac{n+1}{n-1}\right]$",
            r"$\left[\frac{1}{n}, n\right]$"
        ],
        "correctAnswer": 0,
        "explanation": r"The greatest coefficient in $(1+x)^{2n}$ is $\binom{2n}{n}$ (the middle term $T_{n+1}$). For $T_{n+1}$ to be the greatest term, we must have $T_{n+1} \ge T_n$ and $T_{n+1} \ge T_{n+2}$. Using $\frac{T_{n+1}}{T_n} = \frac{2n - n + 1}{n} x = \frac{n+1}{n} x \ge 1 \implies x \ge \frac{n}{n+1}$. Also $\frac{T_{n+2}}{T_{n+1}} = \frac{2n - (n+1) + 1}{n+1} x = \frac{n}{n+1} x \le 1 \implies x \le \frac{n+1}{n}$. Thus $x \in \left[\frac{n}{n+1}, \frac{n+1}{n}\right]$."
    },
    {
        "question": r"The sum of the coefficients of the two middle terms in the expansion of $(1 + x)^{2n-1}$ is equal to:",
        "options": [
            r"$\binom{2n-1}{n}$",
            r"$\binom{2n}{n}$",
            r"$\binom{2n}{n-1}$",
            r"$2\binom{2n-1}{n-1}$"
        ],
        "correctAnswer": 1,
        "explanation": r"Since $2n-1$ is odd, the middle terms are the $n\text{th}$ and $(n+1)\text{th}$ terms. Their coefficients are $\binom{2n-1}{n-1}$ and $\binom{2n-1}{n}$. Their sum is $\binom{2n-1}{n-1} + \binom{2n-1}{n} = \binom{2n}{n}$ by Pascal's identity."
    }
]
for q in q_list:
    batch2_part1.append({"chapter": ch, "subtopic": top, **q})

# Topic 3: Coefficient estimation
top = "Coefficient estimation"
q_list = [
    {
        "question": r"The coefficient of $x^{50}$ in the expansion of $(1+x)^{1000} + 2x(1+x)^{999} + 3x^2(1+x)^{998} + \cdots + 1001 x^{1000}$ is:",
        "options": [
            r"$\binom{1002}{50}$",
            r"$\binom{1001}{50}$",
            r"$\binom{1002}{51}$",
            r"$\binom{1000}{50}$"
        ],
        "correctAnswer": 0,
        "explanation": r"Let $S = (1+x)^{1000} + 2x(1+x)^{999} + \cdots + 1001 x^{1000}$. This is an AGP. Let $y = \frac{x}{1+x}$, then $S = (1+x)^{1000} [1 + 2y + 3y^2 + \cdots + 1001 y^{1000}]$. We know $(1 - y)^{-2} = 1 + 2y + 3y^2 + \cdots$. Substituting $1 - y = 1 - \frac{x}{1+x} = \frac{1}{1+x}$, so $(1 - y)^{-2} = (1+x)^2$. Thus the sum of the infinite series is $(1+x)^{1000} (1+x)^2 = (1+x)^{1002}$. Since the truncated terms have degree $\ge 1001 > 50$, the coefficient of $x^{50}$ in $S$ is simply the coefficient of $x^{50}$ in $(1+x)^{1002}$, which is $\binom{1002}{50}$."
    },
    {
        "question": r"The coefficient of $x^4$ in the expansion of $(1 + x - 2x^2)^7$ is:",
        "options": [
            r"$-91$",
            r"$91$",
            r"$-105$",
            r"$105$"
        ],
        "correctAnswer": 0,
        "explanation": r"We write $(1 + x - 2x^2)^7 = (1 - x)^7 (1 + 2x)^7 = (1 + x - 2x^2)^7$. Expanding by multinomial theorem: $\sum \frac{7!}{a! b! c!} 1^a x^b (-2x^2)^c$ where $a + b + c = 7$ and $b + 2c = 4$. Since $c \ge 0$, possible pairs $(b, c)$ are: (4, 0) $\implies a = 3$: $\frac{7!}{3!4!0!} (-2)^0 = 35$; (2, 1) $\implies a = 4$: $\frac{7!}{4!2!1!} (-2)^1 = 105 \times (-2) = -210$; (0, 2) $\implies a = 5$: $\frac{7!}{5!0!2!} (-2)^2 = 21 \times 4 = 84$. Sum = $35 - 210 + 84 = -91$."
    },
    {
        "question": r"The coefficient of $x^7$ in the expansion of $(1 - x - x^2 + x^3)^6$ is:",
        "options": [
            r"$-132$",
            r"$-144$",
            r"$144$",
            r"$132$"
        ],
        "correctAnswer": 1,
        "explanation": r"Factor the expression: $1 - x - x^2 + x^3 = (1 - x) - x^2(1 - x) = (1 - x)(1 - x^2) = (1 - x)^2 (1 + x)$. Thus $(1 - x - x^2 + x^3)^6 = (1 - x)^{12} (1 + x)^6$. Alternatively, $(1 - x)^6 (1 - x^2)^6$. Using $(1 - x^2)^6 (1 - x)^6 = \left(\sum_{k=0}^6 \binom{6}{k} (-1)^k x^{2k}\right) \left(\sum_{j=0}^6 \binom{6}{j} (-1)^j x^j\right)$. We need $2k + j = 7$: $k=1 \implies j=5$: $\binom{6}{1}(-1)^1 \binom{6}{5}(-1)^5 = (-6)(-6) = 36$; $k=2 \implies j=3$: $\binom{6}{2}(-1)^2 \binom{6}{3}(-1)^3 = 15 \times (-20) = -300$; $k=3 \implies j=1$: $\binom{6}{3}(-1)^3 \binom{6}{1}(-1)^1 = (-20)(-6) = 120$. Total coefficient = $36 - 300 + 120 = -144$."
    },
    {
        "question": r"The coefficient of $t^4$ in the expansion of $\left(\frac{1-t^6}{1-t}\right)^3$ is:",
        "options": [
            r"$12$",
            r"$15$",
            r"$10$",
            r"$14$"
        ],
        "correctAnswer": 1,
        "explanation": r"Notice that $\left(\frac{1-t^6}{1-t}\right)^3 = (1 - t^6)^3 (1 - t)^{-3} = (1 - 3t^6 + \cdots)(1 - t)^{-3}$. Since we only need terms up to $t^4$, the $(1 - t^6)^3$ factor only contributes $1$. Thus the coefficient of $t^4$ is that in $(1 - t)^{-3} = \sum_{r=0}^\infty \binom{r+3-1}{r} t^r = \sum_{r=0}^\infty \binom{r+2}{2} t^r$. For $r=4$, the coefficient is $\binom{4+2}{2} = \binom{6}{2} = 15$."
    },
    {
        "question": r"The coefficient of $x^{11}$ in the expansion of $(1 + x^2)^4 (1 + x^3)^7 (1 + x^4)^{12}$ is:",
        "options": [
            r"$1113$",
            r"$1085$",
            r"$1115$",
            r"$1050$"
        ],
        "correctAnswer": 0,
        "explanation": r"The general term is $\binom{4}{a} x^{2a} \binom{7}{b} x^{3b} \binom{12}{c} x^{4c}$ with $2a + 3b + 4c = 11$, where $0 \le a \le 4, 0 \le b \le 7, 0 \le c \le 12$. Since $2a + 4c$ is even, $3b = 11 - (2a+4c)$ must be odd, so $b$ is odd $\in \{1, 3\}$. Case 1: $b = 1 \implies 2a + 4c = 8 \implies a + 2c = 4$. Possibilities for $(a, c)$: (4, 0) $\implies \binom{4}{4}\binom{7}{1}\binom{12}{0} = 1 \times 7 \times 1 = 7$; (2, 1) $\implies \binom{4}{2}\binom{7}{1}\binom{12}{1} = 6 \times 7 \times 12 = 504$; (0, 2) $\implies \binom{4}{0}\binom{7}{1}\binom{12}{2} = 1 \times 7 \times 66 = 462$. Case 2: $b = 3 \implies 2a + 4c = 2 \implies a + 2c = 1$. Possibility: $(1, 0) \implies \binom{4}{1}\binom{7}{3}\binom{12}{0} = 4 \times 35 \times 1 = 140$. Total coefficient = $7 + 504 + 462 + 140 = 1113$."
    }
]
for q in q_list:
    batch2_part1.append({"chapter": ch, "subtopic": top, **q})

# Topic 4: Binomial identities
top = "Binomial identities"
q_list = [
    {
        "question": r"The value of $\sum_{r=0}^{20} r \binom{20}{r}^2$ is equal to:",
        "options": [
            r"$10 \binom{40}{20}$",
            r"$20 \binom{40}{20}$",
            r"$10 \binom{39}{19}$",
            r"$20 \binom{39}{20}$"
        ],
        "correctAnswer": 0,
        "explanation": r"Let $S = \sum_{r=0}^n r \binom{n}{r}^2$. Reversing the sum: $S = \sum_{r=0}^n (n - r) \binom{n}{n-r}^2 = \sum_{r=0}^n (n - r) \binom{n}{r}^2$. Adding the two expressions: $2S = n \sum_{r=0}^n \binom{n}{r}^2 = n \binom{2n}{n}$. Hence $S = \frac{n}{2} \binom{2n}{n}$. For $n = 20$, $S = \frac{20}{2} \binom{40}{20} = 10 \binom{40}{20}$."
    },
    {
        "question": r"The value of $\binom{30}{0}\binom{30}{10} - \binom{30}{1}\binom{30}{11} + \binom{30}{2}\binom{30}{12} - \cdots + \binom{30}{20}\binom{30}{30}$ is equal to:",
        "options": [
            r"$\binom{30}{10}$",
            r"$(-1)^{10} \binom{30}{10}$",
            r"$0$",
            r"$\binom{30}{20}$"
        ],
        "correctAnswer": 0,
        "explanation": r"Consider $(1 - x)^{30} (1 + x)^{30} = (1 - x^2)^{30}$. The LHS is $\left(\sum_{r=0}^{30} (-1)^r \binom{30}{r} x^r\right) \left(\sum_{s=0}^{30} \binom{30}{s} x^{30-s}\right)$. The coefficient of $x^{20}$ in $(1 - x^2)^{30}$ is obtained by setting $(x^2)^{10} = x^{20}$, which is $(-1)^{10} \binom{30}{10} = \binom{30}{10}$. On the LHS, the coefficient of $x^{20}$ is $\sum (-1)^r \binom{30}{r} \binom{30}{s}$ where $r + (30 - s) = 20 \implies s - r = 10 \implies s = r + 10$. Thus $\sum_{r=0}^{20} (-1)^r \binom{30}{r} \binom{30}{r+10} = \binom{30}{10}$."
    },
    {
        "question": r"The value of $\sum_{r=1}^n r \frac{\binom{n}{r}}{\binom{n}{r-1}}$ is equal to:",
        "options": [
            r"$\frac{n(n+1)}{2}$",
            r"$\frac{n(n-1)}{2}$",
            r"$n^2$",
            r"$\frac{(n+1)^2}{2}$"
        ],
        "correctAnswer": 0,
        "explanation": r"Using the identity $\frac{\binom{n}{r}}{\binom{n}{r-1}} = \frac{n - r + 1}{r}$, we have $r \frac{\binom{n}{r}}{\binom{n}{r-1}} = n - r + 1$. Summing from $r = 1$ to $n$: $\sum_{r=1}^n (n - r + 1) = n + (n-1) + \cdots + 1 = \frac{n(n+1)}{2}$."
    },
    {
        "question": r"The value of $\sum_{r=0}^{n} \frac{\binom{n}{r}}{r+1}$ is equal to:",
        "options": [
            r"$\frac{2^{n+1} - 1}{n+1}$",
            r"$\frac{2^n - 1}{n+1}$",
            r"$\frac{2^{n+1}}{n+1}$",
            r"$\frac{2^n}{n}$"
        ],
        "correctAnswer": 0,
        "explanation": r"We know $\frac{1}{r+1} \binom{n}{r} = \frac{1}{n+1} \binom{n+1}{r+1}$. Therefore, $\sum_{r=0}^n \frac{\binom{n}{r}}{r+1} = \frac{1}{n+1} \sum_{r=0}^n \binom{n+1}{r+1} = \frac{1}{n+1} \left(2^{n+1} - 1\right)$."
    },
    {
        "question": r"If $\sum_{r=0}^{2n} a_r (x - 2)^r = \sum_{r=0}^{2n} b_r (x - 3)^r$ and $a_k = 1$ for all $k \ge n$, then $b_n$ is equal to:",
        "options": [
            r"$\binom{2n+1}{n+1}$",
            r"$\binom{2n+1}{n}$",
            r"$\binom{2n}{n}$",
            r"$\binom{2n+1}{n+1} - 1$"
        ],
        "correctAnswer": 0,
        "explanation": r"We have $x - 2 = (x - 3) + 1$. Thus $\sum_{r=n}^{2n} ((x-3) + 1)^r = \sum_{r=n}^{2n} \sum_{j=0}^r \binom{r}{j} (x-3)^j$. The coefficient of $(x-3)^n$ is $b_n = \sum_{r=n}^{2n} \binom{r}{n} = \binom{n}{n} + \binom{n+1}{n} + \cdots + \binom{2n}{n} = \binom{2n+1}{n+1}$ by the hockey-stick identity."
    }
]
for q in q_list:
    batch2_part1.append({"chapter": ch, "subtopic": top, **q})

# Topic 5: Sum of binomial coefficients and series
top = "Sum of binomial coefficients and series"
q_list = [
    {
        "question": r"The value of $\sum_{r=0}^{50} (-1)^r \frac{\binom{50}{r}}{r+2}$ is equal to:",
        "options": [
            r"$\frac{1}{51 \times 52}$",
            r"$\frac{1}{52}$",
            r"$\frac{1}{51}$",
            r"$\frac{50}{51 \times 52}$"
        ],
        "correctAnswer": 0,
        "explanation": r"Using $(r+1)(r+2)$ or integrating: $\int_0^1 x (1 - x)^{50} dx = \int_0^1 (1 - t) t^{50} dt = \int_0^1 (t^{50} - t^{51}) dt = \frac{1}{51} - \frac{1}{52} = \frac{1}{51 \times 52}$. On the other hand, $\int_0^1 x (1-x)^{50} dx = \int_0^1 \sum_{r=0}^{50} (-1)^r \binom{50}{r} x^{r+1} dx = \sum_{r=0}^{50} (-1)^r \frac{\binom{50}{r}}{r+2}$. Hence the sum is $\frac{1}{51 \times 52}$."
    },
    {
        "question": r"The value of $\sum_{r=0}^{20} \frac{\binom{20}{r}}{(r+1)(r+2)}$ is equal to:",
        "options": [
            r"$\frac{2^{22} - 23}{21 \times 22}$",
            r"$\frac{2^{22} - 1}{21 \times 22}$",
            r"$\frac{2^{21} - 22}{21 \times 22}$",
            r"$\frac{2^{20} - 1}{21}$"
        ],
        "correctAnswer": 0,
        "explanation": r"Since $\frac{1}{(r+1)(r+2)} \binom{n}{r} = \frac{1}{(n+1)(n+2)} \binom{n+2}{r+2}$, the sum is $\frac{1}{(21)(22)} \sum_{r=0}^{20} \binom{22}{r+2} = \frac{1}{21 \times 22} \left[2^{22} - \binom{22}{0} - \binom{22}{1}\right] = \frac{2^{22} - 1 - 22}{21 \times 22} = \frac{2^{22} - 23}{21 \times 22}$."
    },
    {
        "question": r"The sum $\binom{20}{0} + \binom{20}{1} + \binom{20}{2} + \cdots + \binom{20}{10}$ is equal to:",
        "options": [
            r"$2^{19} + \frac{1}{2}\binom{20}{10}$",
            r"$2^{19}$",
            r"$2^{20} - \binom{20}{10}$",
            r"$2^{19} - \frac{1}{2}\binom{20}{10}$"
        ],
        "correctAnswer": 0,
        "explanation": r"Let $S = \sum_{r=0}^{10} \binom{20}{r}$. Since $\binom{20}{r} = \binom{20}{20-r}$, we have $2^{20} = \sum_{r=0}^{20} \binom{20}{r} = 2 \sum_{r=0}^9 \binom{20}{r} + \binom{20}{10} = 2\left(S - \binom{20}{10}\right) + \binom{20}{10} = 2S - \binom{20}{10}$. Hence $2S = 2^{20} + \binom{20}{10} \implies S = 2^{19} + \frac{1}{2}\binom{20}{10}$."
    },
    {
        "question": r"If $(1 + x + x^2)^n = a_0 + a_1 x + a_2 x^2 + \cdots + a_{2n} x^{2n}$, then the value of $a_0 + a_3 + a_6 + a_9 + \cdots$ is:",
        "options": [
            r"$3^{n-1}$",
            r"$3^n$",
            r"$\frac{3^n + 1}{2}$",
            r"$\frac{3^n - 1}{2}$"
        ],
        "correctAnswer": 0,
        "explanation": r"Let $\omega, \omega^2$ be the complex cube roots of unity. Substituting $x = 1, \omega, \omega^2$: $(1+1+1)^n = 3^n = \sum a_k$; $(1+\omega+\omega^2)^n = 0^n = 0 = \sum a_k \omega^k$; $(1+\omega^2+\omega)^n = 0 = \sum a_k \omega^{2k}$. Adding these three equations gives $3(a_0 + a_3 + a_6 + \cdots) = 3^n + 0 + 0 = 3^n \implies a_0 + a_3 + a_6 + \cdots = 3^{n-1}$."
    },
    {
        "question": r"The sum of the series $\sum_{r=1}^{10} r^2 \binom{10}{r}$ is equal to:",
        "options": [
            r"$55 \times 2^9$",
            r"$60 \times 2^9$",
            r"$100 \times 2^8$",
            r"$55 \times 2^{10}$"
        ],
        "correctAnswer": 0,
        "explanation": r"We write $r^2 = r(r-1) + r$. Then $\sum_{r=1}^n r^2 \binom{n}{r} = \sum_{r=2}^n r(r-1)\binom{n}{r} + \sum_{r=1}^n r\binom{n}{r} = n(n-1) 2^{n-2} + n 2^{n-1} = n 2^{n-2} [n - 1 + 2] = n(n+1) 2^{n-2}$. For $n = 10$: $10 \times 11 \times 2^8 = 110 \times 2^8 = 55 \times 2^9$."
    }
]
for q in q_list:
    batch2_part1.append({"chapter": ch, "subtopic": top, **q})

# ==========================================
# CHAPTER 7: Straight Lines (6 topics x 5 = 30 Qs)
# ==========================================
ch = "Straight Lines"

# Topic 1: Slope and intercept forms
top = "Slope and intercept forms"
q_list = [
    {
        "question": r"A straight line $L$ with negative slope passes through the point $(8, 2)$ and cuts the positive coordinate axes at points $A$ and $B$. The minimum value of $OA + OB$ (where $O$ is the origin) is:",
        "options": [
            r"$18$",
            r"$16$",
            r"$12$",
            r"$14$"
        ],
        "correctAnswer": 0,
        "explanation": r"Let the line equation be $\frac{x}{a} + \frac{y}{b} = 1$ with $a, b > 0$. Since it passes through $(8, 2)$, $\frac{8}{a} + \frac{2}{b} = 1$. We want to minimize $a + b = (a+b)\left(\frac{8}{a} + \frac{2}{b}\right) = 8 + 2 + \frac{2a}{b} + \frac{8b}{a} \ge 10 + 2\sqrt{16} = 10 + 8 = 18$ by AM-GM. Equality holds when $\frac{2a}{b} = \frac{8b}{a} \implies a = 2b \implies \frac{8}{2b} + \frac{2}{b} = 1 \implies b = 6, a = 12$. Thus the minimum value of $OA + OB$ is $18$."
    },
    {
        "question": r"A line passes through $P(1, 2)$ such that its intercept between the axes is bisected at $P$. The equation of the line is:",
        "options": [
            r"$2x + y = 4$",
            r"$x + 2y = 5$",
            r"$2x - y = 0$",
            r"$x + y = 3$"
        ],
        "correctAnswer": 0,
        "explanation": r"Let $A = (a, 0)$ and $B = (0, b)$. The midpoint of $AB$ is $(a/2, b/2) = (1, 2) \implies a = 2, b = 4$. Thus the equation in intercept form is $\frac{x}{2} + \frac{y}{4} = 1 \implies 2x + y = 4$."
    },
    {
        "question": r"A line $L$ cuts intercepts $a$ and $b$ on the coordinate axes such that $a + b = 5$ and the area of the triangle formed by the line with the coordinate axes is $3$. If the slope of $L$ is negative, then the equation of $L$ can be:",
        "options": [
            r"$3x + 2y = 6$",
            r"$2x + 3y = 6$",
            r"$x + y = 5$",
            r"$4x + y = 4$"
        ],
        "correctAnswer": 1,
        "explanation": r"Area is $\frac{1}{2}|ab| = 3 \implies ab = 6$ (since $a, b > 0$ for negative slope and triangle in 1st quadrant). Given $a + b = 5$ and $ab = 6$, $a$ and $b$ are the roots of $t^2 - 5t + 6 = 0 \implies t = 2, 3$. If $a = 3, b = 2$, line is $\frac{x}{3} + \frac{y}{2} = 1 \implies 2x + 3y = 6$."
    },
    {
        "question": r"If the line $\frac{x}{a} + \frac{y}{b} = 1$ moves such that $\frac{1}{a^2} + \frac{1}{b^2} = \frac{1}{c^2}$ (where $c$ is a constant), then the locus of the foot of the perpendicular from the origin to this line is:",
        "options": [
            r"$x^2 + y^2 = c^2$",
            r"$x^2 + y^2 = 2c^2$",
            r"$x^2 - y^2 = c^2$",
            r"$x + y = c$"
        ],
        "correctAnswer": 0,
        "explanation": r"The perpendicular distance $p$ from $(0, 0)$ to $\frac{x}{a} + \frac{y}{b} - 1 = 0$ is $p = \frac{1}{\sqrt{1/a^2 + 1/b^2}} = \frac{1}{\sqrt{1/c^2}} = c$. The foot of the perpendicular $(h, k)$ lies at distance $p$ from the origin, so $h^2 + k^2 = p^2 = c^2$. Hence the locus is $x^2 + y^2 = c^2$."
    },
    {
        "question": r"A line with slope $m$ passes through $(0, 0)$ and another line passes through $(a, 0)$ with slope $-\frac{1}{m}$. The locus of their point of intersection as $m$ varies is:",
        "options": [
            r"$x^2 + y^2 - ax = 0$",
            r"$x^2 + y^2 + ax = 0$",
            r"$x^2 + y^2 = a^2$",
            r"$x^2 - y^2 = ax$"
        ],
        "correctAnswer": 0,
        "explanation": r"The first line is $y = mx \implies m = \frac{y}{x}$. The second line is $y - 0 = -\frac{1}{m}(x - a) \implies y = -\frac{x}{y}(x - a) \implies y^2 = -x(x - a) = -x^2 + ax \implies x^2 + y^2 - ax = 0$, which is a circle with diameter joining $(0, 0)$ and $(a, 0)$."
    }
]
for q in q_list:
    batch2_part1.append({"chapter": ch, "subtopic": top, **q})

# Topic 2: Perpendicular distance
top = "Perpendicular distance"
q_list = [
    {
        "question": r"The product of the perpendiculars drawn from the points $\left(\pm\sqrt{a^2-b^2}, 0\right)$ to the line $\frac{x}{a}\cos\theta + \frac{y}{b}\sin\theta = 1$ is:",
        "options": [
            r"$b^2$",
            r"$a^2$",
            r"$a^2 + b^2$",
            r"$a^2 - b^2$"
        ],
        "correctAnswer": 0,
        "explanation": r"Let $c = \sqrt{a^2 - b^2}$. The perpendicular distance from $(c, 0)$ is $p_1 = \frac{\left|\frac{c}{a}\cos\theta - 1\right|}{\sqrt{\frac{\cos^2\theta}{a^2} + \frac{\sin^2\theta}{b^2}}}$. From $(-c, 0)$, $p_2 = \frac{\left|-\frac{c}{a}\cos\theta - 1\right|}{\sqrt{\frac{\cos^2\theta}{a^2} + \frac{\sin^2\theta}{b^2}}}$. The numerator of $p_1 p_2$ is $\left|1 - \frac{c^2}{a^2}\cos^2\theta\right| = 1 - \frac{a^2-b^2}{a^2}\cos^2\theta = \frac{a^2 - a^2\cos^2\theta + b^2\cos^2\theta}{a^2} = \frac{a^2\sin^2\theta + b^2\cos^2\theta}{a^2}$. The denominator is $\frac{b^2\cos^2\theta + a^2\sin^2\theta}{a^2 b^2}$. Dividing numerator by denominator gives $b^2$."
    },
    {
        "question": r"If the perpendicular distance of the line $3x - 4y + \lambda = 0$ from the origin is $3$, then the sum of all possible values of $\lambda$ is:",
        "options": [
            r"$0$",
            r"$30$",
            r"$-30$",
            r"$15$"
        ],
        "correctAnswer": 0,
        "explanation": r"The perpendicular distance from $(0, 0)$ to $3x - 4y + \lambda = 0$ is $d = \frac{|\lambda|}{\sqrt{3^2 + (-4)^2}} = \frac{|\lambda|}{5}$. Given $d = 3 \implies |\lambda| = 15 \implies \lambda = \pm 15$. The sum of all possible values of $\lambda$ is $15 + (-15) = 0$."
    },
    {
        "question": r"The foot of the perpendicular from the point $(2, 1)$ on the line $x - y + 1 = 0$ is:",
        "options": [
            r"$(1, 2)$",
            r"$(0, 1)$",
            r"$(2, 3)$",
            r"$(3, 4)$"
        ],
        "correctAnswer": 0,
        "explanation": r"Using the foot formula: $\frac{h - 2}{1} = \frac{k - 1}{-1} = -\frac{2 - 1 + 1}{1^2 + (-1)^2} = -\frac{2}{2} = -1$. Thus $h = 2 - 1 = 1$ and $k = 1 - (-1) = 2$. The foot of the perpendicular is $(1, 2)$."
    },
    {
        "question": r"The reflection of the point $(4, -13)$ in the line $5x + y + 6 = 0$ is:",
        "options": [
            r"$(-1, -14)$",
            r"$(-4, 13)$",
            r"$(1, 14)$",
            r"$(-2, -15)$"
        ],
        "correctAnswer": 0,
        "explanation": r"Using the image formula $\frac{x - x_1}{a} = \frac{y - y_1}{b} = -2\frac{a x_1 + b y_1 + c}{a^2 + b^2}$: $(x_1, y_1) = (4, -13)$, line $5x + y + 6 = 0$. Value $= -2\frac{5(4) + 1(-13) + 6}{5^2 + 1^2} = -2\frac{20 - 13 + 6}{26} = -2\frac{13}{26} = -1$. Then $x = 4 + 5(-1) = -1$, and $y = -13 + 1(-1) = -14$. Thus the image point is $(-1, -14)$."
    },
    {
        "question": r"The distance of the point $(1, 2)$ from the line $x - y + 5 = 0$ measured along the line parallel to $3x - 4y = 0$ is:",
        "options": [
            r"$\frac{20}{7}$",
            r"$\frac{20}{3}$",
            r"$20$",
            r"$10$"
        ],
        "correctAnswer": 2,
        "explanation": r"Let the line parallel to $3x - 4y = 0$ passing through $(1, 2)$ be parameterized by $x = 1 + r\cos\theta, y = 2 + r\sin\theta$ where $\tan\theta = 3/4 \implies \cos\theta = 4/5, \sin\theta = 3/5$. Substituting into $x - y + 5 = 0$: $(1 + 4r/5) - (2 + 3r/5) + 5 = 0 \implies 4 + r/5 = 0 \implies |r| = 20$. Hence the measured distance is $20$."
    }
]
for q in q_list:
    batch2_part1.append({"chapter": ch, "subtopic": top, **q})

# Topic 3: Angle between lines
top = "Angle between lines"
q_list = [
    {
        "question": r"The angle between the lines represented by the equation $2x^2 - 5xy + 2y^2 = 0$ is:",
        "options": [
            r"$\tan^{-1}\left(\frac{3}{4}\right)$",
            r"$\tan^{-1}\left(\frac{4}{3}\right)$",
            r"$\frac{\pi}{4}$",
            r"$\frac{\pi}{3}$"
        ],
        "correctAnswer": 0,
        "explanation": r"Comparing with $ax^2 + 2hxy + by^2 = 0$: $a = 2, b = 2, 2h = -5 \implies h = -5/2$. The angle $\theta$ is given by $\tan\theta = \left|\frac{2\sqrt{h^2 - ab}}{a + b}\right| = \frac{2\sqrt{25/4 - 4}}{2 + 2} = \frac{2\sqrt{9/4}}{4} = \frac{2(3/2)}{4} = \frac{3}{4}$. Hence $\theta = \tan^{-1}(3/4)$."
    },
    {
        "question": r"If the lines $y = (2 - \sqrt{3})x + 5$ and $y = (2 + \sqrt{3})x - 7$ make angles $\theta_1$ and $\theta_2$ with the positive x-axis, then the acute angle between the two lines is:",
        "options": [
            r"$\frac{\pi}{3}$",
            r"$\frac{\pi}{6}$",
            r"$\frac{\pi}{4}$",
            r"$\frac{\pi}{2}$"
        ],
        "correctAnswer": 0,
        "explanation": r"The slopes are $m_1 = 2 - \sqrt{3} = \tan 15^\circ$ and $m_2 = 2 + \sqrt{3} = \tan 75^\circ$. The angle between them is $\theta_2 - \theta_1 = 75^\circ - 15^\circ = 60^\circ = \frac{\pi}{3}$."
    },
    {
        "question": r"If one of the lines given by $6x^2 - xy + 4cy^2 = 0$ is $3x + 4y = 0$, then the value of $c$ is:",
        "options": [
            r"$-3$",
            r"$3$",
            r"$-1$",
            r"$2$"
        ],
        "correctAnswer": 0,
        "explanation": r"Since $3x + 4y = 0 \implies y = -\frac{3}{4}x$, substituting into the homogeneous equation: $6x^2 - x\left(-\frac{3}{4}x\right) + 4c\left(-\frac{3}{4}x\right)^2 = 0 \implies 6 + \frac{3}{4} + 4c\left(\frac{9}{16}\right) = 0 \implies \frac{27}{4} + \frac{9c}{4} = 0 \implies 9c = -27 \implies c = -3$."
    },
    {
        "question": r"A vertex of an equilateral triangle is $(2, 3)$ and the opposite side is $x + y = 2$. The equation of one of the other two sides is:",
        "options": [
            r"$y - 3 = (2 - \sqrt{3})(x - 2)$",
            r"$y - 3 = -(2 - \sqrt{3})(x - 2)$",
            r"$y - 3 = (\sqrt{3} - 1)(x - 2)$",
            r"$y - 3 = (\sqrt{3} + 1)(x - 2)$"
        ],
        "correctAnswer": 0,
        "explanation": r"The slope of the base line $x + y = 2$ is $m_1 = -1 = \tan 135^\circ$. The other two sides make angles of $60^\circ$ with this line, so their inclinations are $135^\circ \pm 60^\circ$, i.e., $195^\circ$ (or $15^\circ$) and $75^\circ$. The slopes are $\tan 15^\circ = 2 - \sqrt{3}$ and $\tan 75^\circ = 2 + \sqrt{3}$. Thus one of the sides is $y - 3 = (2 - \sqrt{3})(x - 2)$."
    },
    {
        "question": r"The equation $x^2 - 2cxy - y^2 = 0$ represents a pair of straight lines. The angle between them is:",
        "options": [
            r"$\frac{\pi}{2}$",
            r"$\frac{\pi}{4}$",
            r"$\frac{\pi}{3}$",
            r"$\tan^{-1}(c)$"
        ],
        "correctAnswer": 0,
        "explanation": r"For the equation $ax^2 + 2hxy + by^2 = 0$, $a = 1$ and $b = -1$. The sum of the coefficients $a + b = 1 + (-1) = 0$. When $a + b = 0$, the lines are mutually perpendicular, so the angle between them is $\frac{\pi}{2}$, regardless of $c$."
    }
]
for q in q_list:
    batch2_part1.append({"chapter": ch, "subtopic": top, **q})

# Topic 4: Concurrent lines
top = "Concurrent lines"
q_list = [
    {
        "question": r"If the lines $x + ay + a = 0$, $bx + y + b = 0$, and $cx + cy + 1 = 0$ ($a, b, c$ distinct and $\neq 1$) are concurrent, then the value of $\frac{a}{a-1} + \frac{b}{b-1} + \frac{c}{c-1}$ is:",
        "options": [
            r"$1$",
            r"$0$",
            r"$-1$",
            r"$2$"
        ],
        "correctAnswer": 0,
        "explanation": r"The condition for concurrency is $\begin{vmatrix} 1 & a & a \\ b & 1 & b \\ c & c & 1 \end{vmatrix} = 0$. Applying $R_1 \to R_1 - R_2$ and $R_2 \to R_2 - R_3$: $\begin{vmatrix} 1-b & a-1 & a-b \\ b-c & 1-c & b-1 \\ c & c & 1 \end{vmatrix} = 0$. Factoring $(1-a)(1-b)(1-c)$ leads to the standard identity $\frac{1}{1-a} + \frac{1}{1-b} + \frac{1}{1-c} = 1$. Then $\frac{a}{a-1} + \frac{b}{b-1} + \frac{c}{c-1} = \frac{a-1+1}{a-1} + \frac{b-1+1}{b-1} + \frac{c-1+1}{c-1} = 3 - \left(\frac{1}{1-a} + \frac{1}{1-b} + \frac{1}{1-c}\right) = 3 - 2 = 1$."
    },
    {
        "question": r"If $a, b, c$ are in arithmetic progression, then the family of lines $ax + by + c = 0$ always passes through the fixed point:",
        "options": [
            r"$(1, -2)$",
            r"$(1, 2)$",
            r"$(-1, 2)$",
            r"$(2, -1)$"
        ],
        "correctAnswer": 0,
        "explanation": r"Since $a, b, c$ are in AP, $2b = a + c \implies a - 2b + c = 0$. Comparing this with $ax + by + c = 0$, we immediately see $x = 1, y = -2$. Hence all such lines pass through $(1, -2)$."
    },
    {
        "question": r"If $4a^2 + 9b^2 - c^2 + 12ab = 0$, then the family of straight lines $ax + by + c = 0$ passes through one of two fixed points. One of these points is:",
        "options": [
            r"$(2, 3)$",
            r"$(-2, -3)$",
            r"$(3, 2)$",
            r"$(2, -3)$"
        ],
        "correctAnswer": 0,
        "explanation": r"The given relation can be rewritten as $(2a + 3b)^2 - c^2 = 0 \implies (2a + 3b - c)(2a + 3b + c) = 0$. If $2a + 3b + c = 0$, comparing with $ax + by + c = 0$ gives $(x, y) = (2, 3)$. If $2a + 3b - c = 0 \implies -2a - 3b + c = 0$, comparing gives $(x, y) = (-2, -3)$. Thus $(2, 3)$ is one of the fixed points."
    },
    {
        "question": r"The condition that the lines $ax + y + 1 = 0$, $x + by + 1 = 0$, and $x + y + c = 0$ are concurrent (where $a, b, c$ are distinct and $\neq 1$) is:",
        "options": [
            r"$\frac{1}{1-a} + \frac{1}{1-b} + \frac{1}{1-c} = 1$",
            r"$\frac{1}{1-a} + \frac{1}{1-b} + \frac{1}{1-c} = 0$",
            r"$a + b + c = 0$",
            r"$abc = 1$"
        ],
        "correctAnswer": 0,
        "explanation": r"The concurrency condition is $\begin{vmatrix} a & 1 & 1 \\ 1 & b & 1 \\ 1 & 1 & c \end{vmatrix} = 0$. Performing $R_1 \to R_1 - R_2, R_2 \to R_2 - R_3$ and factoring out $(1-a), (1-b), (1-c)$, this standard determinant evaluates to $\frac{1}{1-a} + \frac{1}{1-b} + \frac{1}{1-c} = 1$."
    },
    {
        "question": r"The three lines $x + 2y + 3 = 0$, $x + 2y - 7 = 0$, and $2x - y - 4 = 0$:",
        "options": [
            r"Form an isosceles right triangle",
            r"Are concurrent",
            r"Form an equilateral triangle",
            r"None of these"
        ],
        "correctAnswer": 3,
        "explanation": r"The first two lines $x + 2y + 3 = 0$ and $x + 2y - 7 = 0$ are parallel, so the three lines do not form a triangle and are not concurrent. Hence, none of these."
    }
]
for q in q_list:
    batch2_part1.append({"chapter": ch, "subtopic": top, **q})

# Topic 5: Family of lines and angular bisectors
top = "Family of lines and angular bisectors"
q_list = [
    {
        "question": r"The equation of the bisector of the acute angle between the lines $3x - 4y + 7 = 0$ and $12x + 5y - 2 = 0$ is:",
        "options": [
            r"$21x + 77y - 101 = 0$",
            r"$11x - 3y + 9 = 0$",
            r"$3x + 11y - 9 = 0$",
            r"$77x - 21y + 81 = 0$"
        ],
        "correctAnswer": 1,
        "explanation": r"Write lines with positive constant terms: $3x - 4y + 7 = 0$ and $-12x - 5y + 2 = 0$. Here $a_1 a_2 + b_1 b_2 = 3(-12) + (-4)(-5) = -36 + 20 = -16 < 0$. Since $a_1 a_2 + b_1 b_2 < 0$, the acute angle bisector corresponds to the positive sign: $\frac{3x - 4y + 7}{5} = +\frac{-12x - 5y + 2}{13} \implies 13(3x - 4y + 7) = 5(-12x - 5y + 2) \implies 39x - 52y + 91 = -60x - 25y + 10 \implies 99x - 27y + 81 = 0 \implies 11x - 3y + 9 = 0$."
    },
    {
        "question": r"The bisector of the obtuse angle between the lines $x + y - 1 = 0$ and $x - y + 2 = 0$ is:",
        "options": [
            r"$2y - 3 = 0$",
            r"$2x + 1 = 0$",
            r"$x + 2y = 0$",
            r"$x - 2y = 0$"
        ],
        "correctAnswer": 1,
        "explanation": r"Write equations with positive constants: $-x - y + 1 = 0$ and $x - y + 2 = 0$. Here $a_1 a_2 + b_1 b_2 = (-1)(1) + (-1)(-1) = -1 + 1 = 0$. The lines are perpendicular, so the bisectors are $x + y - 1 = \pm(x - y + 2)$. Taking the plus sign gives $2y - 3 = 0$, taking the minus sign gives $2x + 1 = 0$."
    },
    {
        "question": r"A line passes through the point of intersection of $x - 2y + 3 = 0$ and $2x - 3y + 4 = 0$ and is parallel to $3x + 4y = 1$. Its equation is:",
        "options": [
            r"$3x + 4y - 11 = 0$",
            r"$3x + 4y - 5 = 0$",
            r"$3x + 4y + 5 = 0$",
            r"$3x + 4y + 11 = 0$"
        ],
        "correctAnswer": 0,
        "explanation": r"Solving $x - 2y = -3$ and $2x - 3y = -4$: multiply first by 2: $2x - 4y = -6$. Subtracting from second: $y = 2$. Then $x = 2(2) - 3 = 1$. The intersection point is $(1, 2)$. A line parallel to $3x + 4y = 1$ is $3x + 4y + k = 0$. Passing through $(1, 2)$: $3(1) + 4(2) + k = 0 \implies k = -11$. Thus the equation is $3x + 4y - 11 = 0$."
    },
    {
        "question": r"The equation of the line belonging to the family $(3x - y + 2) + \lambda(x + y - 1) = 0$ which is at the greatest distance from the point $(1, 1)$ is:",
        "options": [
            r"Perpendicular to the line joining $(1, 1)$ to the intersection point",
            r"Parallel to $x + y = 0$",
            r"Parallel to $3x - y = 0$",
            r"None of these"
        ],
        "correctAnswer": 0,
        "explanation": r"The maximum perpendicular distance from a given point $P$ to any line of a concurrent family passing through $Q$ is achieved when the line is perpendicular to the line segment $PQ$."
    },
    {
        "question": r"The angular bisector containing the origin for the lines $3x - 4y + 1 = 0$ and $8x + 6y + 1 = 0$ is:",
        "options": [
            r"$2x + 14y - 1 = 0$",
            r"$14x - 2y + 3 = 0$",
            r"$2x - 14y + 1 = 0$",
            r"$14x + 2y - 3 = 0$"
        ],
        "correctAnswer": 0,
        "explanation": r"Both constant terms are positive ($c_1 = 1 > 0, c_2 = 1 > 0$). The bisector containing the origin is obtained by taking the positive sign: $\frac{3x - 4y + 1}{\sqrt{3^2 + 4^2}} = +\frac{8x + 6y + 1}{\sqrt{8^2 + 6^2}} \implies \frac{3x - 4y + 1}{5} = \frac{8x + 6y + 1}{10} \implies 2(3x - 4y + 1) = 8x + 6y + 1 \implies 6x - 8y + 2 = 8x + 6y + 1 \implies 2x + 14y - 1 = 0$."
    }
]
for q in q_list:
    batch2_part1.append({"chapter": ch, "subtopic": top, **q})

# Topic 6: Distance between parallel lines
top = "Distance between parallel lines"
q_list = [
    {
        "question": r"The distance between the parallel lines $5x + 12y - 7 = 0$ and $5x + 12y + 32 = 0$ is:",
        "options": [
            r"$3$",
            r"$2$",
            r"$4$",
            r"$1$"
        ],
        "correctAnswer": 0,
        "explanation": r"The perpendicular distance between two parallel lines $ax + by + c_1 = 0$ and $ax + by + c_2 = 0$ is $d = \frac{|c_1 - c_2|}{\sqrt{a^2 + b^2}} = \frac{|-7 - 32|}{\sqrt{5^2 + 12^2}} = \frac{39}{13} = 3$."
    },
    {
        "question": r"If the distance between the parallel lines $3x + 4y = 9$ and $6x + 8y = 15$ is $d$, then $10d$ equals:",
        "options": [
            r"$3$",
            r"$6$",
            r"$5$",
            r"$1$"
        ],
        "correctAnswer": 0,
        "explanation": r"Rewrite the second line as $3x + 4y = 15/2$. The distance between $3x + 4y - 9 = 0$ and $3x + 4y - 7.5 = 0$ is $d = \frac{|-9 - (-7.5)|}{\sqrt{3^2 + 4^2}} = \frac{1.5}{5} = \frac{3}{10}$. Hence $10d = 3$."
    },
    {
        "question": r"The equation of the line midway between the parallel lines $4x - 3y + 7 = 0$ and $4x - 3y - 3 = 0$ is:",
        "options": [
            r"$4x - 3y + 2 = 0$",
            r"$4x - 3y + 5 = 0$",
            r"$4x - 3y - 1 = 0$",
            r"$4x - 3y = 0$"
        ],
        "correctAnswer": 0,
        "explanation": r"The midway line has the same slope and its constant term is the average of the constant terms: $c = \frac{7 + (-3)}{2} = \frac{4}{2} = 2$. Thus, the equation is $4x - 3y + 2 = 0$."
    },
    {
        "question": r"A square has two of its sides along the lines $2x + y = 3$ and $2x + y = -2$. The area of the square is:",
        "options": [
            r"$5$",
            r"$25$",
            r"$\sqrt{5}$",
            r"$10$"
        ],
        "correctAnswer": 0,
        "explanation": r"The distance between the two parallel sides gives the length of the side of the square: $s = \frac{|3 - (-2)|}{\sqrt{2^2 + 1^2}} = \frac{5}{\sqrt{5}} = \sqrt{5}$. The area of the square is $s^2 = (\sqrt{5})^2 = 5$."
    },
    {
        "question": r"The locus of a point which moves such that the sum of the squares of its distances from the two parallel lines $x - y = 0$ and $x - y + 2 = 0$ is $4$ is:",
        "options": [
            r"$(x - y + 1)^2 = 3$",
            r"$(x - y)^2 + (x - y + 2)^2 = 8$",
            r"$x^2 + y^2 = 4$",
            r"$x - y = 2$"
        ],
        "correctAnswer": 1,
        "explanation": r"The distance of $(x, y)$ from $x - y = 0$ is $d_1 = \frac{|x-y|}{\sqrt{2}}$. The distance from $x - y + 2 = 0$ is $d_2 = \frac{|x-y+2|}{\sqrt{2}}$. We are given $d_1^2 + d_2^2 = 4 \implies \frac{(x-y)^2}{2} + \frac{(x-y+2)^2}{2} = 4 \implies (x-y)^2 + (x-y+2)^2 = 8$."
    }
]
for q in q_list:
    batch2_part1.append({"chapter": ch, "subtopic": top, **q})

with open("scripts/math_top100/math_batch2_p1.json", "w") as f:
    json.dump(batch2_part1, f, indent=2)

print(f"Generated {len(batch2_part1)} questions for Batch 2 Part 1.")
