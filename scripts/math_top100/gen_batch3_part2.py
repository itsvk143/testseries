import json

batch3_part2 = []

# ==========================================
# CHAPTER 14: Application of Derivatives (6 topics x 5 = 30 Qs)
# ==========================================
ch = "Application of Derivatives"

# Topic 1: Maxima and minima
top = "Maxima and minima"
q_list = [
    {
        "question": r"The maximum value of the function $f(x) = \left(\frac{1}{x}\right)^x$ for $x > 0$ is:",
        "options": [
            r"$e^{1/e}$",
            r"$e$",
            r"$e^e$",
            r"$\left(\frac{1}{e}\right)^e$"
        ],
        "correctAnswer": 0,
        "explanation": r"Let $y = x^{-x}$. Then $\ln y = -x\ln x$. Differentiating with respect to $x$: $\frac{1}{y}\frac{dy}{dx} = -(\ln x + 1)$. Setting $\frac{dy}{dx} = 0 \implies \ln x = -1 \implies x = \frac{1}{e}$. At $x = 1/e$, $f(1/e) = (e)^{1/e} = e^{1/e}$, which is the local and absolute maximum since $f''(1/e) < 0$."
    },
    {
        "question": r"The absolute minimum value of $f(x) = 2x^3 - 9x^2 + 12x + 6$ on the interval $[0, 2]$ is:",
        "options": [
            r"$6$",
            r"$10$",
            r"$11$",
            r"$7$"
        ],
        "correctAnswer": 0,
        "explanation": r"We find critical points: $f'(x) = 6x^2 - 18x + 12 = 6(x^2 - 3x + 2) = 6(x - 1)(x - 2) = 0 \implies x = 1, 2$. We evaluate $f(x)$ at $x = 0, 1, 2$: $f(0) = 6$; $f(1) = 2(1) - 9(1) + 12(1) + 6 = 11$; $f(2) = 2(8) - 9(4) + 12(2) + 6 = 16 - 36 + 24 + 6 = 10$. The minimum value on $[0, 2]$ is $6$ (at $x = 0$)."
    },
    {
        "question": r"If the sum of two positive numbers is $k$, then the minimum value of the sum of their squares is:",
        "options": [
            r"$\frac{k^2}{2}$",
            r"$\frac{k^2}{4}$",
            r"$k^2$",
            r"$\frac{k^2}{8}$"
        ],
        "correctAnswer": 0,
        "explanation": r"Let the two positive numbers be $x$ and $k - x$. The sum of their squares is $S(x) = x^2 + (k - x)^2 = 2x^2 - 2kx + k^2$. Differentiating: $S'(x) = 4x - 2k = 0 \implies x = k/2$. The minimum value is $S(k/2) = 2(k/2)^2 - 2k(k/2) + k^2 = \frac{k^2}{2} - k^2 + k^2 = \frac{k^2}{2}$."
    },
    {
        "question": r"The maximum slope of the curve $y = -x^3 + 3x^2 + 9x - 27$ occurs at the point:",
        "options": [
            r"$(1, -16)$",
            r"$(1, 16)$",
            r"$(-1, -32)$",
            r"$(0, -27)$"
        ],
        "correctAnswer": 0,
        "explanation": r"The slope is $m(x) = \frac{dy}{dx} = -3x^2 + 6x + 9$. To maximize $m(x)$, take $m'(x) = -6x + 6 = 0 \implies x = 1$. The corresponding y-coordinate is $y(1) = -(1)^3 + 3(1)^2 + 9(1) - 27 = -1 + 3 + 9 - 27 = -16$. Thus the point is $(1, -16)$."
    },
    {
        "question": r"The function $f(x) = x^4 - 62x^2 + ax + 9$ attains its maximum at $x = 1$ in the interval $[0, 2]$. Then the value of $a$ is:",
        "options": [
            r"$120$",
            r"$60$",
            r"$-120$",
            r"$0$"
        ],
        "correctAnswer": 0,
        "explanation": r"Since $x = 1$ is an interior extremum, $f'(1) = 0$. Differentiating: $f'(x) = 4x^3 - 124x + a$. At $x = 1$: $f'(1) = 4(1) - 124(1) + a = 0 \implies -120 + a = 0 \implies a = 120$."
    }
]
for q in q_list:
    batch3_part2.append({"chapter": ch, "subtopic": top, **q})

# Topic 2: Rate of change
top = "Rate of change"
q_list = [
    {
        "question": r"The radius of a circular plate is increasing at the rate of $0.05\text{ cm/s}$. The rate of increase of its area when the radius is $10\text{ cm}$ is:",
        "options": [
            r"$\pi\text{ cm}^2/\text{s}$",
            r"$0.5\pi\text{ cm}^2/\text{s}$",
            r"$2\pi\text{ cm}^2/\text{s}$",
            r"$0.1\pi\text{ cm}^2/\text{s}$"
        ],
        "correctAnswer": 0,
        "explanation": r"Area is $A = \pi r^2$. Differentiating with respect to $t$: $\frac{dA}{dt} = 2\pi r \frac{dr}{dt} = 2\pi(10)(0.05) = \pi\text{ cm}^2/\text{s}$."
    },
    {
        "question": r"A particle moves along the curve $6y = x^3 + 2$. The points on the curve at which the y-coordinate is changing 8 times as fast as the x-coordinate are:",
        "options": [
            r"$(4, 11)$ and $(-4, -31/3)$",
            r"$(4, 11)$ only",
            r"$(2, 5/3)$ and $(-2, -1)$",
            r"$(3, 29/6)$ and $(-3, -25/6)$"
        ],
        "correctAnswer": 0,
        "explanation": r"Differentiating with respect to $t$: $6\frac{dy}{dt} = 3x^2 \frac{dx}{dt} \implies \frac{dy}{dt} = \frac{x^2}{2}\frac{dx}{dt}$. We are given $\frac{dy}{dt} = 8\frac{dx}{dt} \implies \frac{x^2}{2} = 8 \implies x^2 = 16 \implies x = \pm 4$. For $x = 4$, $6y = 64 + 2 = 66 \implies y = 11$. For $x = -4$, $6y = -64 + 2 = -62 \implies y = -31/3$. Thus the points are $(4, 11)$ and $(-4, -31/3)$."
    },
    {
        "question": r"Water is running into a conical tank of height $10\text{ m}$ and base radius $5\text{ m}$ at the rate of $2\text{ m}^3/\text{min}$. The rate at which the water level is rising when the depth of water is $4\text{ m}$ is:",
        "options": [
            r"$\frac{1}{2\pi}\text{ m/min}$",
            r"$\frac{1}{4\pi}\text{ m/min}$",
            r"$\frac{2}{\pi}\text{ m/min}$",
            r"$\frac{1}{\pi}\text{ m/min}$"
        ],
        "correctAnswer": 0,
        "explanation": r"By similar triangles, $\frac{r}{h} = \frac{5}{10} = \frac{1}{2} \implies r = \frac{h}{2}$. The volume is $V = \frac{1}{3}\pi r^2 h = \frac{1}{3}\pi \left(\frac{h}{2}\right)^2 h = \frac{\pi}{12} h^3$. Differentiating: $\frac{dV}{dt} = \frac{\pi}{4} h^2 \frac{dh}{dt}$. Given $\frac{dV}{dt} = 2$ and $h = 4$: $2 = \frac{\pi}{4} (16) \frac{dh}{dt} = 4\pi \frac{dh}{dt} \implies \frac{dh}{dt} = \frac{2}{4\pi} = \frac{1}{2\pi}\text{ m/min}$."
    },
    {
        "question": r"A lamp is placed at height $h$ on a street pole. A man of height $1.8\text{ m}$ walks away from the pole at $1.5\text{ m/s}$. If $h = 5.4\text{ m}$, the rate at which the length of his shadow is increasing is:",
        "options": [
            r"$0.75\text{ m/s}$",
            r"$1.5\text{ m/s}$",
            r"$0.5\text{ m/s}$",
            r"$1.0\text{ m/s}$"
        ],
        "correctAnswer": 0,
        "explanation": r"Let $x$ be the distance of the man from the pole and $s$ be the length of his shadow. By similar triangles: $\frac{5.4}{x + s} = \frac{1.8}{s} \implies 3s = x + s \implies 2s = x \implies s = \frac{x}{2}$. Differentiating: $\frac{ds}{dt} = \frac{1}{2}\frac{dx}{dt} = \frac{1}{2}(1.5) = 0.75\text{ m/s}$."
    },
    {
        "question": r"The total revenue received from the sale of $x$ units of a product is given by $R(x) = 3x^2 + 36x + 5$. The marginal revenue when $x = 15$ is:",
        "options": [
            r"$126$",
            r"$116$",
            r"$96$",
            r"$136$"
        ],
        "correctAnswer": 0,
        "explanation": r"Marginal revenue is $MR = \frac{dR}{dx} = 6x + 36$. For $x = 15$: $MR = 6(15) + 36 = 90 + 36 = 126$."
    }
]
for q in q_list:
    batch3_part2.append({"chapter": ch, "subtopic": top, **q})

# Topic 3: Increasing and decreasing functions
top = "Increasing and decreasing functions"
q_list = [
    {
        "question": r"The function $f(x) = 2x^3 - 3x^2 - 12x + 5$ is strictly increasing in the interval:",
        "options": [
            r"$(-\infty, -1) \cup (2, \infty)$",
            r"$(-1, 2)$",
            r"$(-\infty, -2) \cup (1, \infty)$",
            r"$(-2, 1)$"
        ],
        "correctAnswer": 0,
        "explanation": r"Differentiating: $f'(x) = 6x^2 - 6x - 12 = 6(x^2 - x - 2) = 6(x - 2)(x + 1)$. For strictly increasing, $f'(x) > 0 \implies (x - 2)(x + 1) > 0 \implies x < -1$ or $x > 2$. Thus $x \in (-\infty, -1) \cup (2, \infty)$."
    },
    {
        "question": r"The function $f(x) = \frac{\ln x}{x}$ is strictly decreasing in the interval:",
        "options": [
            r"$(e, \infty)$",
            r"$(0, e)$",
            r"$(0, 1)$",
            r"$(1, e)$"
        ],
        "correctAnswer": 0,
        "explanation": r"Differentiating for $x > 0$: $f'(x) = \frac{x(1/x) - \ln x(1)}{x^2} = \frac{1 - \ln x}{x^2}$. For decreasing, $f'(x) < 0 \implies 1 - \ln x < 0 \implies \ln x > 1 \implies x > e$. Thus $f(x)$ is strictly decreasing on $(e, \infty)$."
    },
    {
        "question": r"The values of $a$ for which the function $f(x) = \sin x - ax + b$ is strictly decreasing for all $x \in \mathbb{R}$ are:",
        "options": [
            r"$a \ge 1$",
            r"$a > 1$",
            r"$a \le -1$",
            r"$-1 \le a \le 1$"
        ],
        "correctAnswer": 0,
        "explanation": r"Differentiating: $f'(x) = \cos x - a$. For $f(x)$ to be strictly decreasing on $\mathbb{R}$, we require $f'(x) \le 0$ for all $x$, with equality at isolated points. Thus $\cos x - a \le 0 \implies a \ge \cos x$ for all $x$. Since the maximum of $\cos x$ is $1$, this requires $a \ge 1$."
    },
    {
        "question": r"The function $f(x) = x^x$ is strictly increasing in the interval:",
        "options": [
            r"$\left(\frac{1}{e}, \infty\right)$",
            r"$\left(0, \frac{1}{e}\right)$",
            r"$(1, \infty)$",
            r"$(0, 1)$"
        ],
        "correctAnswer": 0,
        "explanation": r"For $x > 0$, $f(x) = e^{x\ln x}$, so $f'(x) = x^x(1 + \ln x)$. For strictly increasing, $f'(x) > 0 \implies 1 + \ln x > 0 \implies \ln x > -1 \implies x > e^{-1} = \frac{1}{e}$. Thus $x \in (1/e, \infty)$."
    },
    {
        "question": r"The interval in which $f(x) = 2x^2 - \ln |x|$ ($x \neq 0$) is strictly increasing is:",
        "options": [
            r"$\left(-\frac{1}{2}, 0\right) \cup \left(\frac{1}{2}, \infty\right)$",
            r"$\left(0, \frac{1}{2}\right) \cup \left(\frac{1}{2}, \infty\right)$",
            r"$\left(\frac{1}{2}, \infty\right)$",
            r"$\left(-\infty, -\frac{1}{2}\right) \cup \left(0, \frac{1}{2}\right)$"
        ],
        "correctAnswer": 0,
        "explanation": r"Differentiating: $f'(x) = 4x - \frac{1}{x} = \frac{4x^2 - 1}{x} = \frac{(2x - 1)(2x + 1)}{x}$. By sign scheme, the critical points are $-1/2, 0, 1/2$. For $x > 1/2$: $f'(x) > 0$. For $0 < x < 1/2$: $f'(x) < 0$. For $-1/2 < x < 0$: $f'(x) > 0$. For $x < -1/2$: $f'(x) < 0$. Thus $f'(x) > 0$ on $(-1/2, 0) \cup (1/2, \infty)$."
    }
]
for q in q_list:
    batch3_part2.append({"chapter": ch, "subtopic": top, **q})

# Topic 4: Points of inflection and concavity
top = "Points of inflection and concavity"
q_list = [
    {
        "question": r"The point of inflection of the curve $y = x^3 - 3x^2 + 2$ is:",
        "options": [
            r"$(1, 0)$",
            r"$(0, 2)$",
            r"$(2, -2)$",
            r"$(-1, -2)$"
        ],
        "correctAnswer": 0,
        "explanation": r"First derivative: $y' = 3x^2 - 6x$. Second derivative: $y'' = 6x - 6$. Setting $y'' = 0 \implies 6(x - 1) = 0 \implies x = 1$. Since $y''$ changes sign across $x = 1$ (negative for $x < 1$, positive for $x > 1$), $x = 1$ is an inflection point. At $x = 1$, $y = 1^3 - 3(1)^2 + 2 = 0$. The point of inflection is $(1, 0)$."
    },
    {
        "question": r"The curve $y = e^{-x^2}$ has points of inflection at $x$ equal to:",
        "options": [
            r"$\pm \frac{1}{\sqrt{2}}$",
            r"$\pm 1$",
            r"$0$",
            r"$\pm \sqrt{2}$"
        ],
        "correctAnswer": 0,
        "explanation": r"First derivative: $y' = -2x e^{-x^2}$. Second derivative: $y'' = -2e^{-x^2} + (-2x)(-2x)e^{-x^2} = 2e^{-x^2}(2x^2 - 1)$. Setting $y'' = 0 \implies 2x^2 - 1 = 0 \implies x = \pm \frac{1}{\sqrt{2}}$. Since $y''$ changes sign across both points, they are points of inflection."
    },
    {
        "question": r"The curve $y = x^4 - 4x^3$ is concave upwards in the interval:",
        "options": [
            r"$(-\infty, 0) \cup (2, \infty)$",
            r"$(0, 2)$",
            r"$(2, \infty)$",
            r"$(-\infty, 2)$"
        ],
        "correctAnswer": 0,
        "explanation": r"First derivative: $y' = 4x^3 - 12x^2$. Second derivative: $y'' = 12x^2 - 24x = 12x(x - 2)$. For concave upwards, $y'' > 0 \implies 12x(x - 2) > 0 \implies x < 0$ or $x > 2$. Thus $x \in (-\infty, 0) \cup (2, \infty)$."
    },
    {
        "question": r"The number of points of inflection of the curve $y = 3x^5 - 5x^4$ is:",
        "options": [
            r"$1$",
            r"$2$",
            r"$3$",
            r"$0$"
        ],
        "correctAnswer": 0,
        "explanation": r"First derivative: $y' = 15x^4 - 20x^3$. Second derivative: $y'' = 60x^3 - 60x^2 = 60x^2(x - 1)$. Setting $y'' = 0 \implies x = 0$ (multiplicity 2) or $x = 1$ (multiplicity 1). Across $x = 0$, $x^2 \ge 0$, so $y''$ does NOT change sign (it remains negative on both sides of $x=0$ near $0$). Across $x = 1$, $x - 1$ changes sign from negative to positive, so $y''$ changes sign. Hence, there is only $1$ point of inflection, at $x = 1$."
    },
    {
        "question": r"If the curve $y = ax^3 + bx^2$ has a point of inflection at $(1, 2)$, then the values of $a$ and $b$ are:",
        "options": [
            r"$a = -1, b = 3$",
            r"$a = 1, b = 1$",
            r"$a = 2, b = 0$",
            r"$a = -2, b = 4$"
        ],
        "correctAnswer": 0,
        "explanation": r"The point $(1, 2)$ lies on the curve: $a(1)^3 + b(1)^2 = 2 \implies a + b = 2$. Next, $y'' = 6ax + 2b$. At $x = 1$, $y'' = 0 \implies 6a + 2b = 0 \implies b = -3a$. Substituting into $a + b = 2$: $a - 3a = 2 \implies -2a = 2 \implies a = -1$. Then $b = -3(-1) = 3$. Thus $a = -1, b = 3$."
    }
]
for q in q_list:
    batch3_part2.append({"chapter": ch, "subtopic": top, **q})

# Topic 5: Monotonicity of functions
top = "Monotonicity of functions"
q_list = [
    {
        "question": r"If $f(x) = x^3 + bx^2 + cx + d$ and $b^2 < 3c$, then $f(x)$ is:",
        "options": [
            r"Strictly increasing on $\mathbb{R}$",
            r"Strictly decreasing on $\mathbb{R}$",
            r"Non-monotonic",
            r"Bounded"
        ],
        "correctAnswer": 0,
        "explanation": r"Differentiating: $f'(x) = 3x^2 + 2bx + c$. The discriminant of this quadratic is $D = (2b)^2 - 4(3)(c) = 4(b^2 - 3c)$. Since $b^2 < 3c$, $D < 0$. Because the leading coefficient is $3 > 0$ and $D < 0$, $f'(x) > 0$ for all $x \in \mathbb{R}$. Thus $f(x)$ is strictly increasing on $\mathbb{R}$."
    },
    {
        "question": r"Let $g(x) = f(x) + f(1 - x)$ and $f''(x) < 0$ for all $x \in [0, 1]$. Then in the interval $\left(0, \frac{1}{2}\right)$, $g(x)$ is:",
        "options": [
            r"Strictly increasing",
            r"Strictly decreasing",
            r"Constant",
            r"Non-monotonic"
        ],
        "correctAnswer": 0,
        "explanation": r"Differentiating $g(x)$: $g'(x) = f'(x) - f'(1 - x)$. Since $f''(x) < 0$, $f'(x)$ is a strictly decreasing function. For $x \in (0, 1/2)$, we have $x < 1 - x$. Since $f'$ is strictly decreasing, $x < 1 - x \implies f'(x) > f'(1 - x) \implies f'(x) - f'(1 - x) > 0 \implies g'(x) > 0$. Therefore, $g(x)$ is strictly increasing on $(0, 1/2)$."
    },
    {
        "question": r"The function $f(x) = \frac{x}{\sin x}$ for $x \in \left(0, \frac{\pi}{2}\right)$ is:",
        "options": [
            r"Strictly increasing",
            r"Strictly decreasing",
            r"Neither increasing nor decreasing",
            r"Concave downwards"
        ],
        "correctAnswer": 0,
        "explanation": r"Differentiating: $f'(x) = \frac{\sin x - x\cos x}{\sin^2 x} = \frac{\cos x(\tan x - x)}{\sin^2 x}$. For $x \in (0, \pi/2)$, $\cos x > 0$, $\sin^2 x > 0$, and $\tan x > x$. Therefore, $f'(x) > 0$ on $(0, \pi/2)$, so $f(x)$ is strictly increasing."
    },
    {
        "question": r"If $f(x) = 2x + \cot^{-1} x + \ln\left(\sqrt{1+x^2} - x\right)$, then $f(x)$ is:",
        "options": [
            r"Monotonically increasing on $\mathbb{R}$",
            r"Monotonically decreasing on $\mathbb{R}$",
            r"Increasing on $(0, \infty)$ and decreasing on $(-\infty, 0)$",
            r"Neither increasing nor decreasing"
        ],
        "correctAnswer": 0,
        "explanation": r"Differentiating: $f'(x) = 2 - \frac{1}{1+x^2} + \frac{1}{\sqrt{1+x^2}-x} \left(\frac{x}{\sqrt{1+x^2}} - 1\right) = 2 - \frac{1}{1+x^2} - \frac{1}{\sqrt{1+x^2}} = 1 + \left(1 - \frac{1}{1+x^2}\right) - \frac{1}{\sqrt{1+x^2}} = 1 + \frac{x^2}{1+x^2} - \frac{1}{\sqrt{1+x^2}}$. Since $\frac{1}{\sqrt{1+x^2}} \le 1$, $1 - \frac{1}{\sqrt{1+x^2}} \ge 0$, and $\frac{x^2}{1+x^2} \ge 0$. Thus $f'(x) \ge 0$ for all $x \in \mathbb{R}$, with equality only at $x = 0$. Hence $f(x)$ is monotonically increasing on $\mathbb{R}$."
    },
    {
        "question": r"The function $f(x) = \frac{ax + b}{cx + d}$ is strictly monotonic on its domain if and only if:",
        "options": [
            r"$ad - bc \neq 0$",
            r"$ad - bc = 0$",
            r"$ad + bc > 0$",
            r"$ab - cd \neq 0$"
        ],
        "correctAnswer": 0,
        "explanation": r"Differentiating: $f'(x) = \frac{a(cx+d) - c(ax+b)}{(cx+d)^2} = \frac{ad - bc}{(cx+d)^2}$. Since the denominator $(cx+d)^2 > 0$ everywhere on the domain, the sign of $f'(x)$ is strictly determined by the constant $ad - bc$. If $ad - bc \neq 0$, $f'(x)$ is either strictly positive or strictly negative everywhere on its domain, making $f(x)$ strictly monotonic."
    }
]
for q in q_list:
    batch3_part2.append({"chapter": ch, "subtopic": top, **q})

# Topic 6: Optimization problems
top = "Optimization problems"
q_list = [
    {
        "question": r"The maximum area of a rectangle that can be inscribed in a circle of radius $R$ is:",
        "options": [
            r"$2R^2$",
            r"$R^2$",
            r"$\frac{R^2}{2}$",
            r"$4R^2$"
        ],
        "correctAnswer": 0,
        "explanation": r"Let the rectangle have dimensions $x$ and $y$. The diagonal is the diameter: $x^2 + y^2 = (2R)^2 = 4R^2$. The area is $A = xy$. Using the inequality between AM and GM: $xy \le \frac{x^2 + y^2}{2} = \frac{4R^2}{2} = 2R^2$. Equality holds when $x = y = \sqrt{2}R$ (a square). Thus the maximum area is $2R^2$."
    },
    {
        "question": r"An open box with a square base is to be made from a given quantity of cardboard of area $C^2$. The maximum volume of the box is:",
        "options": [
            r"$\frac{C^3}{6\sqrt{3}}$",
            r"$\frac{C^3}{3\sqrt{3}}$",
            r"$\frac{C^3}{12\sqrt{3}}$",
            r"$\frac{C^3}{4\sqrt{3}}$"
        ],
        "correctAnswer": 0,
        "explanation": r"Let the base side be $x$ and height be $h$. The surface area is $x^2 + 4xh = C^2 \implies h = \frac{C^2 - x^2}{4x}$. The volume is $V(x) = x^2 h = x^2 \left(\frac{C^2 - x^2}{4x}\right) = \frac{1}{4}(C^2 x - x^3)$. Differentiating: $V'(x) = \frac{1}{4}(C^2 - 3x^2) = 0 \implies x = \frac{C}{\sqrt{3}}$. Substituting $x$: $V = \frac{1}{4}\left(\frac{C^3}{\sqrt{3}} - \frac{C^3}{3\sqrt{3}}\right) = \frac{1}{4}\left(\frac{2C^3}{3\sqrt{3}}\right) = \frac{C^3}{6\sqrt{3}}$."
    },
    {
        "question": r"The point on the curve $y = x^2$ which is closest to the point $\left(0, \frac{9}{2}\right)$ is:",
        "options": [
            r"$(\pm 2, 4)$",
            r"$(0, 0)$",
            r"$(\pm 1, 1)$",
            r"$(\pm \sqrt{2}, 2)$"
        ],
        "correctAnswer": 0,
        "explanation": r"Let the point on the curve be $(x, x^2)$. The square of distance is $D(x) = x^2 + (x^2 - 9/2)^2$. Let $u = x^2 \ge 0$. Then $f(u) = u + (u - 9/2)^2 = u + u^2 - 9u + 81/4 = u^2 - 8u + 81/4 = (u - 4)^2 - 16 + 81/4$. Since $u \ge 0$, the minimum occurs at $u = 4 \implies x^2 = 4 \implies x = \pm 2$. The corresponding y-coordinate is $y = 4$. Thus the points are $(\pm 2, 4)$."
    },
    {
        "question": r"The perimeter of a sector of a circle is $p$. The area of the sector is maximum when the radius of the circle is:",
        "options": [
            r"$\frac{p}{4}$",
            r"$\frac{p}{2}$",
            r"$\frac{p}{8}$",
            r"$\frac{p}{6}$"
        ],
        "correctAnswer": 0,
        "explanation": r"Perimeter of sector is $p = 2r + l \implies l = p - 2r$, where $l = r\theta$ is arc length. The area of the sector is $A = \frac{1}{2}lr = \frac{1}{2}(p - 2r)r = \frac{1}{2}(pr - 2r^2)$. Differentiating with respect to $r$: $A'(r) = \frac{1}{2}(p - 4r) = 0 \implies r = \frac{p}{4}$."
    },
    {
        "question": r"A wire of length $20\text{ cm}$ is cut into two pieces. One piece is bent into a square and the other into a circle. The total area enclosed is minimum when the side of the square $s$ and radius of the circle $r$ satisfy:",
        "options": [
            r"$s = 2r$",
            r"$s = r$",
            r"$s = 4r$",
            r"$2s = r$"
        ],
        "correctAnswer": 0,
        "explanation": r"Let $4s + 2\pi r = 20 \implies 2s + \pi r = 10 \implies s = \frac{10 - \pi r}{2}$. Total area is $A = s^2 + \pi r^2 = \frac{(10 - \pi r)^2}{4} + \pi r^2$. Differentiating with respect to $r$: $A'(r) = \frac{2(10 - \pi r)(-\pi)}{4} + 2\pi r = -\frac{\pi(10 - \pi r)}{2} + 2\pi r = 0 \implies -(10 - \pi r) + 4r = 0 \implies (4 + \pi)r = 10$. Then $s = \frac{10 - \pi r}{2} = \frac{(4+\pi)r - \pi r}{2} = \frac{4r}{2} = 2r$. Thus $s = 2r$ (side of the square equals diameter of the circle)."
    }
]
for q in q_list:
    batch3_part2.append({"chapter": ch, "subtopic": top, **q})

# ==========================================
# CHAPTER 15: Integrals (7 topics x 5 = 35 Qs)
# ==========================================
ch = "Integrals"

# Topic 1: Fundamental theorem of calculus
top = "Fundamental theorem of calculus"
q_list = [
    {
        "question": r"If $f(x) = \int_0^x t\sin t \, dt$, then $f'(x)$ is:",
        "options": [
            r"$x\sin x$",
            r"$\sin x + x\cos x$",
            r"$x\cos x$",
            r"$-x\cos x$"
        ],
        "correctAnswer": 0,
        "explanation": r"By the Fundamental Theorem of Calculus (part 1), if $f(x) = \int_a^x g(t)dt$, then $f'(x) = g(x)$. Here $g(t) = t\sin t$, so $f'(x) = x\sin x$."
    },
    {
        "question": r"The value of $\lim_{x \to 0} \frac{\int_0^{x^2} \cos(t^2) dt}{x\sin x}$ is:",
        "options": [
            r"$1$",
            r"$0$",
            r"$\frac{1}{2}$",
            r"$2$"
        ],
        "correctAnswer": 0,
        "explanation": r"Using L'Hospital's rule and Leibniz rule: $\lim_{x \to 0} \frac{\cos((x^2)^2) \cdot 2x}{\sin x + x\cos x} = \lim_{x \to 0} \frac{2x \cos(x^4)}{x\left(\frac{\sin x}{x} + \cos x\right)} = \lim_{x \to 0} \frac{2\cos(x^4)}{1 + 1} = \frac{2(1)}{2} = 1$."
    },
    {
        "question": r"If $\int_0^x f(t) dt = x + \int_x^1 t f(t) dt$, then the value of $f(1)$ is:",
        "options": [
            r"$\frac{1}{2}$",
            r"$1$",
            r"$0$",
            r"$2$"
        ],
        "correctAnswer": 0,
        "explanation": r"Differentiating both sides with respect to $x$: $f(x) = 1 - x f(x) \implies f(x)(1 + x) = 1 \implies f(x) = \frac{1}{1 + x}$. Thus $f(1) = \frac{1}{1 + 1} = \frac{1}{2}$."
    },
    {
        "question": r"If $F(x) = \int_1^x \frac{\ln t}{1 + t} dt$, then $F(x) + F(1/x)$ is equal to:",
        "options": [
            r"$\frac{1}{2}(\ln x)^2$",
            r"$(\ln x)^2$",
            r"$\frac{1}{2}\ln x$",
            r"$0$"
        ],
        "correctAnswer": 0,
        "explanation": r"Let $g(x) = F(x) + F(1/x)$. Differentiating: $g'(x) = F'(x) + F'(1/x)(-1/x^2) = \frac{\ln x}{1 + x} + \frac{\ln(1/x)}{1 + 1/x}\left(-\frac{1}{x^2}\right) = \frac{\ln x}{1 + x} + \frac{-\ln x}{\frac{x+1}{x}}\left(-\frac{1}{x^2}\right) = \frac{\ln x}{1 + x} + \frac{\ln x}{x(1 + x)} = \frac{\ln x(1 + 1/x)}{1 + x} = \frac{\ln x}{x}$. Integrating: $g(x) = \frac{1}{2}(\ln x)^2 + C$. Since $g(1) = F(1) + F(1) = 0$, $C = 0$. Thus $F(x) + F(1/x) = \frac{1}{2}(\ln x)^2$."
    },
    {
        "question": r"The derivative of $\int_{x^2}^{x^3} \frac{1}{\ln t} dt$ with respect to $x$ for $x > 1$ is:",
        "options": [
            r"$\frac{x^2 - x}{\ln x}$",
            r"$\frac{x^2 + x}{\ln x}$",
            r"$\frac{3x^2 - 2x}{\ln x}$",
            r"$\frac{x}{\ln x}$"
        ],
        "correctAnswer": 0,
        "explanation": r"Using Leibniz rule: $\frac{d}{dx} \int_{x^2}^{x^3} \frac{1}{\ln t} dt = \frac{1}{\ln(x^3)} \cdot 3x^2 - \frac{1}{\ln(x^2)} \cdot 2x = \frac{3x^2}{3\ln x} - \frac{2x}{2\ln x} = \frac{x^2}{\ln x} - \frac{x}{\ln x} = \frac{x^2 - x}{\ln x}$."
    }
]
for q in q_list:
    batch3_part2.append({"chapter": ch, "subtopic": top, **q})

# Topic 2: Integration by parts
top = "Integration by parts"
q_list = [
    {
        "question": r"The integral $\int e^x \left(\frac{1 - \sin x}{1 - \cos x}\right) dx$ is equal to:",
        "options": [
            r"$-e^x \cot\left(\frac{x}{2}\right) + C$",
            r"$e^x \cot\left(\frac{x}{2}\right) + C$",
            r"$-e^x \tan\left(\frac{x}{2}\right) + C$",
            r"$e^x \tan\left(\frac{x}{2}\right) + C$"
        ],
        "correctAnswer": 0,
        "explanation": r"Rewrite the integrand: $\frac{1 - 2\sin(x/2)\cos(x/2)}{2\sin^2(x/2)} = \frac{1}{2}\csc^2\left(\frac{x}{2}\right) - \cot\left(\frac{x}{2}\right) = -\cot\left(\frac{x}{2}\right) + \frac{1}{2}\csc^2\left(\frac{x}{2}\right)$. This matches $e^x(f(x) + f'(x))$ with $f(x) = -\cot(x/2)$ and $f'(x) = \frac{1}{2}\csc^2(x/2)$. The integral is $e^x f(x) + C = -e^x \cot(x/2) + C$."
    },
    {
        "question": r"The value of $\int x^2 e^{3x} dx$ is:",
        "options": [
            r"$\frac{e^{3x}}{27}(9x^2 - 6x + 2) + C$",
            r"$\frac{e^{3x}}{9}(3x^2 - 2x + 2) + C$",
            r"$\frac{e^{3x}}{27}(9x^2 + 6x + 2) + C$",
            r"$\frac{e^{3x}}{27}(9x^2 - 6x - 2) + C$"
        ],
        "correctAnswer": 0,
        "explanation": r"Using tabular integration: signs $+,-,+,-$; $u$ derivatives: $x^2, 2x, 2, 0$; $v$ integrals: $e^{3x}/3, e^{3x}/9, e^{3x}/27$. Total integral $= x^2 \frac{e^{3x}}{3} - 2x \frac{e^{3x}}{9} + 2 \frac{e^{3x}}{27} + C = \frac{e^{3x}}{27}(9x^2 - 6x + 2) + C$."
    },
    {
        "question": r"The integral $\int \ln(x + \sqrt{x^2 + 1}) dx$ is equal to:",
        "options": [
            r"$x\ln(x + \sqrt{x^2 + 1}) - \sqrt{x^2 + 1} + C$",
            r"$x\ln(x + \sqrt{x^2 + 1}) + \sqrt{x^2 + 1} + C$",
            r"$\frac{x^2}{2}\ln(x + \sqrt{x^2 + 1}) - \sqrt{x^2 + 1} + C$",
            r"$x\ln(x + \sqrt{x^2 + 1}) - x + C$"
        ],
        "correctAnswer": 0,
        "explanation": r"Using integration by parts with $u = \ln(x + \sqrt{x^2 + 1})$ and $dv = dx$: $du = \frac{1}{\sqrt{x^2 + 1}} dx$ and $v = x$. Then $\int u \, dv = uv - \int v \, du = x\ln(x + \sqrt{x^2 + 1}) - \int \frac{x}{\sqrt{x^2 + 1}} dx = x\ln(x + \sqrt{x^2 + 1}) - \sqrt{x^2 + 1} + C$."
    },
    {
        "question": r"The value of $\int e^x \left(\frac{x-1}{(x+1)^3}\right) dx$ is:",
        "options": [
            r"$\frac{e^x}{(x+1)^2} + C$",
            r"$-\frac{e^x}{(x+1)^2} + C$",
            r"$\frac{e^x}{x+1} + C$",
            r"$\frac{e^x}{(x+1)^3} + C$"
        ],
        "correctAnswer": 0,
        "explanation": r"Rewrite $\frac{x - 1}{(x+1)^3} = \frac{(x+1) - 2}{(x+1)^3} = \frac{1}{(x+1)^2} - \frac{2}{(x+1)^3}$. Let $f(x) = \frac{1}{(x+1)^2}$, then $f'(x) = -\frac{2}{(x+1)^3}$. The integral is of the form $\int e^x(f(x) + f'(x)) dx = e^x f(x) + C = \frac{e^x}{(x+1)^2} + C$."
    },
    {
        "question": r"If $I_n = \int_0^{\pi/2} x^n \sin x \, dx$ for $n \ge 2$, then $I_n + n(n-1)I_{n-2}$ is equal to:",
        "options": [
            r"$n\left(\frac{\pi}{2}\right)^{n-1}$",
            r"$\left(\frac{\pi}{2}\right)^n$",
            r"$n(n-1)\left(\frac{\pi}{2}\right)^{n-2}$",
            r"$0$"
        ],
        "correctAnswer": 0,
        "explanation": r"Integrating by parts twice: $I_n = [-x^n \cos x]_0^{\pi/2} + n\int_0^{\pi/2} x^{n-1}\cos x \, dx = 0 + n\left([x^{n-1}\sin x]_0^{\pi/2} - (n-1)\int_0^{\pi/2} x^{n-2}\sin x \, dx\right) = n\left(\frac{\pi}{2}\right)^{n-1} - n(n-1)I_{n-2}$. Hence $I_n + n(n-1)I_{n-2} = n\left(\frac{\pi}{2}\right)^{n-1}$."
    }
]
for q in q_list:
    batch3_part2.append({"chapter": ch, "subtopic": top, **q})

# Topic 3: Definite integrals
top = "Definite integrals"
q_list = [
    {
        "question": r"The value of the definite integral $\int_0^1 x(1-x)^9 dx$ is:",
        "options": [
            r"$\frac{1}{110}$",
            r"$\frac{1}{100}$",
            r"$\frac{1}{90}$",
            r"$\frac{1}{120}$"
        ],
        "correctAnswer": 0,
        "explanation": r"Using $\int_0^a f(x)dx = \int_0^a f(a-x)dx$: $\int_0^1 (1-x)x^9 dx = \int_0^1 (x^9 - x^{10}) dx = \left[\frac{x^{10}}{10} - \frac{x^{11}}{11}\right]_0^1 = \frac{1}{10} - \frac{1}{11} = \frac{1}{110}$."
    },
    {
        "question": r"The value of $\lim_{n \to \infty} \sum_{r=1}^n \frac{1}{\sqrt{n^2 - r^2}}$ is:",
        "options": [
            r"$\frac{\pi}{2}$",
            r"$\pi$",
            r"$\frac{\pi}{4}$",
            r"$1$"
        ],
        "correctAnswer": 0,
        "explanation": r"Rewrite the sum as a Riemann sum: $\lim_{n \to \infty} \frac{1}{n} \sum_{r=1}^n \frac{1}{\sqrt{1 - (r/n)^2}} = \int_0^1 \frac{dx}{\sqrt{1 - x^2}} = [\sin^{-1} x]_0^1 = \sin^{-1}(1) - \sin^{-1}(0) = \frac{\pi}{2}$."
    },
    {
        "question": r"The value of $\int_0^{\pi/2} \frac{\sin^3 x}{\sin x + \cos x} dx - \int_0^{\pi/2} \frac{\cos^3 x}{\sin x + \cos x} dx$ is:",
        "options": [
            r"$0$",
            r"$\frac{\pi}{4}$",
            r"$1$",
            r"$\frac{1}{2}$"
        ],
        "correctAnswer": 0,
        "explanation": r"Let $I = \int_0^{\pi/2} \frac{\sin^3 x - \cos^3 x}{\sin x + \cos x} dx$. Applying King's property ($x \to \pi/2 - x$): $I = \int_0^{\pi/2} \frac{\cos^3 x - \sin^3 x}{\cos x + \sin x} dx = -I \implies 2I = 0 \implies I = 0$."
    },
    {
        "question": r"The value of $\int_0^2 [x^2] dx$, where $[\cdot]$ denotes the greatest integer function, is:",
        "options": [
            r"$5 - \sqrt{2} - \sqrt{3}$",
            r"$5 - \sqrt{2} + \sqrt{3}$",
            r"$6 - \sqrt{2} - \sqrt{3}$",
            r"$4 - \sqrt{2} - \sqrt{3}$"
        ],
        "correctAnswer": 0,
        "explanation": r"Break the integral where $x^2$ is an integer: $\int_0^1 0\,dx + \int_1^{\sqrt{2}} 1\,dx + \int_{\sqrt{2}}^{\sqrt{3}} 2\,dx + \int_{\sqrt{3}}^2 3\,dx = 0 + 1(\sqrt{2} - 1) + 2(\sqrt{3} - \sqrt{2}) + 3(2 - \sqrt{3}) = \sqrt{2} - 1 + 2\sqrt{3} - 2\sqrt{2} + 6 - 3\sqrt{3} = 5 - \sqrt{2} - \sqrt{3}$."
    },
    {
        "question": r"The value of $\int_0^1 \frac{dx}{e^x + e^{-x}}$ is:",
        "options": [
            r"$\tan^{-1}(e) - \frac{\pi}{4}$",
            r"$\tan^{-1}(e)$",
            r"$\frac{\pi}{4}$",
            r"$\ln(e + 1)$"
        ],
        "correctAnswer": 0,
        "explanation": r"Multiply numerator and denominator by $e^x$: $\int_0^1 \frac{e^x}{e^{2x} + 1} dx$. Let $u = e^x \implies du = e^x dx$. Limits: $x = 0 \implies u = 1$, $x = 1 \implies u = e$. The integral becomes $\int_1^e \frac{du}{u^2 + 1} = [\tan^{-1} u]_1^e = \tan^{-1}(e) - \tan^{-1}(1) = \tan^{-1}(e) - \frac{\pi}{4}$."
    }
]
for q in q_list:
    batch3_part2.append({"chapter": ch, "subtopic": top, **q})

# Topic 4: Properties of definite integrals
top = "Properties of definite integrals"
q_list = [
    {
        "question": r"The value of $\int_{-\pi/2}^{\pi/2} \left(x^3 + x\cos x + \tan^5 x + 1\right) dx$ is:",
        "options": [
            r"$\pi$",
            r"$0$",
            r"$2\pi$",
            r"$\frac{\pi}{2}$"
        ],
        "correctAnswer": 0,
        "explanation": r"Notice that $x^3$, $x\cos x$, and $\tan^5 x$ are all odd functions: $(-x)^3 = -x^3$, $(-x)\cos(-x) = -x\cos x$, and $\tan^5(-x) = -\tan^5 x$. The integral of any odd function over $[-\pi/2, \pi/2]$ is $0$. Therefore, $\int_{-\pi/2}^{\pi/2} (x^3 + x\cos x + \tan^5 x + 1) dx = 0 + 0 + 0 + \int_{-\pi/2}^{\pi/2} 1\,dx = \frac{\pi}{2} - \left(-\frac{\pi}{2}\right) = \pi$."
    },
    {
        "question": r"The value of $\int_0^{\pi} \frac{x\sin x}{1 + \cos^2 x} dx$ is:",
        "options": [
            r"$\frac{\pi^2}{4}$",
            r"$\frac{\pi^2}{2}$",
            r"$\pi^2$",
            r"$\frac{\pi}{4}$"
        ],
        "correctAnswer": 0,
        "explanation": r"Let $I = \int_0^\pi \frac{x\sin x}{1 + \cos^2 x} dx$. Using $x \to \pi - x$: $I = \int_0^\pi \frac{(\pi - x)\sin(\pi - x)}{1 + \cos^2(\pi - x)} dx = \int_0^\pi \frac{(\pi - x)\sin x}{1 + \cos^2 x} dx = \pi \int_0^\pi \frac{\sin x}{1 + \cos^2 x} dx - I \implies 2I = \pi \int_0^\pi \frac{\sin x}{1 + \cos^2 x} dx$. Let $u = \cos x, du = -\sin x dx$: $2I = \pi \int_{-1}^1 \frac{du}{1 + u^2} = \pi [\tan^{-1} u]_{-1}^1 = \pi\left(\frac{\pi}{4} - \left(-\frac{\pi}{4}\right)\right) = \frac{\pi^2}{2} \implies I = \frac{\pi^2}{4}$."
    },
    {
        "question": r"The value of $\int_0^{\pi/2} \ln(\sin x) dx$ is equal to:",
        "options": [
            r"$-\frac{\pi}{2}\ln 2$",
            r"$\frac{\pi}{2}\ln 2$",
            r"$-\pi\ln 2$",
            r"$0$"
        ],
        "correctAnswer": 0,
        "explanation": r"Let $I = \int_0^{\pi/2} \ln(\sin x)dx$. By King's property, $I = \int_0^{\pi/2} \ln(\cos x)dx$. Adding: $2I = \int_0^{\pi/2} \ln(\sin x \cos x)dx = \int_0^{\pi/2} \ln\left(\frac{\sin 2x}{2}\right)dx = \int_0^{\pi/2} \ln(\sin 2x)dx - \frac{\pi}{2}\ln 2$. Substituting $2x = t$: $\int_0^{\pi/2} \ln(\sin 2x)dx = \frac{1}{2}\int_0^\pi \ln(\sin t)dt = \frac{1}{2} \cdot 2 \int_0^{\pi/2} \ln(\sin t)dt = I$. Thus $2I = I - \frac{\pi}{2}\ln 2 \implies I = -\frac{\pi}{2}\ln 2$."
    },
    {
        "question": r"The value of $\int_0^{100\pi} |\sin x| dx$ is:",
        "options": [
            r"$200$",
            r"$100$",
            r"$50$",
            r"$400$"
        ],
        "correctAnswer": 0,
        "explanation": r"Since $|\sin x|$ is periodic with period $\pi$, by the periodicity property: $\int_0^{nT} f(x)dx = n\int_0^T f(x)dx$. Here $n = 100$ and $T = \pi$. Thus $\int_0^{100\pi} |\sin x|dx = 100 \int_0^\pi \sin x \, dx = 100 [-\cos x]_0^\pi = 100(1 - (-1)) = 100(2) = 200$."
    },
    {
        "question": r"If $f(a + b - x) = f(x)$, then $\int_a^b x f(x) dx$ is equal to:",
        "options": [
            r"$\frac{a+b}{2}\int_a^b f(x) dx$",
            r"$(a+b)\int_a^b f(x) dx$",
            r"$\frac{a+b}{4}\int_a^b f(x) dx$",
            r"$\frac{b-a}{2}\int_a^b f(x) dx$"
        ],
        "correctAnswer": 0,
        "explanation": r"Let $I = \int_a^b x f(x)dx$. Using $x \to a+b-x$: $I = \int_a^b (a+b-x)f(a+b-x)dx = \int_a^b (a+b-x)f(x)dx = (a+b)\int_a^b f(x)dx - I$. Adding $I$ to both sides: $2I = (a+b)\int_a^b f(x)dx \implies I = \frac{a+b}{2}\int_a^b f(x)dx$."
    }
]
for q in q_list:
    batch3_part2.append({"chapter": ch, "subtopic": top, **q})

# Topic 5: Integration by substitution and algebraic fractions
top = "Integration by substitution and algebraic fractions"
q_list = [
    {
        "question": r"The integral $\int \frac{x^2 - 1}{x^4 + 1} dx$ is equal to:",
        "options": [
            r"$\frac{1}{2\sqrt{2}} \ln\left|\frac{x^2 - \sqrt{2}x + 1}{x^2 + \sqrt{2}x + 1}\right| + C$",
            r"$\frac{1}{\sqrt{2}} \tan^{-1}\left(\frac{x^2 - 1}{\sqrt{2}x}\right) + C$",
            r"$\frac{1}{2} \ln\left|\frac{x^2 - 1}{x^2 + 1}\right| + C$",
            r"$\frac{1}{2\sqrt{2}} \tan^{-1}\left(\frac{x^2 - 1}{\sqrt{2}x}\right) + C$"
        ],
        "correctAnswer": 0,
        "explanation": r"Divide numerator and denominator by $x^2$: $\int \frac{1 - 1/x^2}{x^2 + 1/x^2} dx = \int \frac{d(x + 1/x)}{(x + 1/x)^2 - 2}$. Let $t = x + 1/x$: $\int \frac{dt}{t^2 - (\sqrt{2})^2} = \frac{1}{2\sqrt{2}} \ln\left|\frac{t - \sqrt{2}}{t + \sqrt{2}}\right| + C = \frac{1}{2\sqrt{2}} \ln\left|\frac{x + 1/x - \sqrt{2}}{x + 1/x + \sqrt{2}}\right| + C = \frac{1}{2\sqrt{2}} \ln\left|\frac{x^2 - \sqrt{2}x + 1}{x^2 + \sqrt{2}x + 1}\right| + C$."
    },
    {
        "question": r"The integral $\int \frac{x^2 + 1}{x^4 + 1} dx$ is equal to:",
        "options": [
            r"$\frac{1}{\sqrt{2}}\tan^{-1}\left(\frac{x^2 - 1}{\sqrt{2}x}\right) + C$",
            r"$\frac{1}{2\sqrt{2}}\ln\left|\frac{x^2 - \sqrt{2}x + 1}{x^2 + \sqrt{2}x + 1}\right| + C$",
            r"$\frac{1}{\sqrt{2}}\tan^{-1}\left(\frac{x^2 + 1}{\sqrt{2}x}\right) + C$",
            r"$\sqrt{2}\tan^{-1}\left(\frac{x^2 - 1}{\sqrt{2}x}\right) + C$"
        ],
        "correctAnswer": 0,
        "explanation": r"Divide numerator and denominator by $x^2$: $\int \frac{1 + 1/x^2}{x^2 + 1/x^2} dx = \int \frac{d(x - 1/x)}{(x - 1/x)^2 + 2}$. Let $u = x - 1/x$: $\int \frac{du}{u^2 + (\sqrt{2})^2} = \frac{1}{\sqrt{2}}\tan^{-1}\left(\frac{u}{\sqrt{2}}\right) + C = \frac{1}{\sqrt{2}}\tan^{-1}\left(\frac{x - 1/x}{\sqrt{2}}\right) + C = \frac{1}{\sqrt{2}}\tan^{-1}\left(\frac{x^2 - 1}{\sqrt{2}x}\right) + C$."
    },
    {
        "question": r"The integral $\int \frac{dx}{x(x^7 + 1)}$ is equal to:",
        "options": [
            r"$\frac{1}{7}\ln\left|\frac{x^7}{x^7 + 1}\right| + C$",
            r"$\frac{1}{7}\ln\left|\frac{x^7 + 1}{x^7}\right| + C$",
            r"$\ln\left|\frac{x^7}{x^7 + 1}\right| + C$",
            r"$\frac{1}{8}\ln\left|\frac{x^8}{x^8 + 1}\right| + C$"
        ],
        "correctAnswer": 0,
        "explanation": r"Multiply numerator and denominator by $x^6$: $\int \frac{x^6 dx}{x^7(x^7 + 1)}$. Let $u = x^7 \implies du = 7x^6 dx$: $\frac{1}{7}\int \frac{du}{u(u+1)} = \frac{1}{7}\int \left(\frac{1}{u} - \frac{1}{u+1}\right)du = \frac{1}{7}\ln\left|\frac{u}{u+1}\right| + C = \frac{1}{7}\ln\left|\frac{x^7}{x^7 + 1}\right| + C$."
    },
    {
        "question": r"The integral $\int \frac{dx}{(x+1)^{3/4}(x-2)^{5/4}}$ is equal to:",
        "options": [
            r"$\frac{4}{3}\left(\frac{x+1}{x-2}\right)^{1/4} + C$",
            r"$-\frac{4}{3}\left(\frac{x+1}{x-2}\right)^{1/4} + C$",
            r"$\frac{4}{3}\left(\frac{x-2}{x+1}\right)^{1/4} + C$",
            r"$\frac{3}{4}\left(\frac{x+1}{x-2}\right)^{1/4} + C$"
        ],
        "correctAnswer": 1,
        "explanation": r"Rewrite as $\int \frac{dx}{\left(\frac{x+1}{x-2}\right)^{3/4}(x-2)^2}$. Let $t = \frac{x+1}{x-2} \implies dt = \frac{1(x-2) - (x+1)}{(x-2)^2}dx = \frac{-3}{(x-2)^2}dx$. The integral becomes $-\frac{1}{3}\int t^{-3/4} dt = -\frac{1}{3}\frac{t^{1/4}}{1/4} + C = -\frac{4}{3}t^{1/4} + C = -\frac{4}{3}\left(\frac{x+1}{x-2}\right)^{1/4} + C$."
    },
    {
        "question": r"The integral $\int \frac{2x + 5}{\sqrt{x^2 - 2x + 10}} dx$ is equal to:",
        "options": [
            r"$2\sqrt{x^2 - 2x + 10} + 7\ln|x - 1 + \sqrt{x^2 - 2x + 10}| + C$",
            r"$\sqrt{x^2 - 2x + 10} + 7\ln|x - 1 + \sqrt{x^2 - 2x + 10}| + C$",
            r"$2\sqrt{x^2 - 2x + 10} + \frac{7}{3}\tan^{-1}\left(\frac{x-1}{3}\right) + C$",
            r"$2\sqrt{x^2 - 2x + 10} - 7\ln|x - 1 + \sqrt{x^2 - 2x + 10}| + C$"
        ],
        "correctAnswer": 0,
        "explanation": r"Write $2x + 5 = (2x - 2) + 7$. Then $\int \frac{2x - 2}{\sqrt{x^2 - 2x + 10}} dx + 7\int \frac{dx}{\sqrt{(x-1)^2 + 3^2}} = 2\sqrt{x^2 - 2x + 10} + 7\ln|x - 1 + \sqrt{x^2 - 2x + 10}| + C$."
    }
]
for q in q_list:
    batch3_part2.append({"chapter": ch, "subtopic": top, **q})

# Topic 6: Trigonometric and irrational integrals
top = "Trigonometric and irrational integrals"
q_list = [
    {
        "question": r"The integral $\int \frac{dx}{5 + 4\cos x}$ is equal to:",
        "options": [
            r"$\frac{2}{3}\tan^{-1}\left(\frac{1}{3}\tan\frac{x}{2}\right) + C$",
            r"$\frac{1}{3}\tan^{-1}\left(3\tan\frac{x}{2}\right) + C$",
            r"$\frac{2}{3}\tan^{-1}\left(3\tan\frac{x}{2}\right) + C$",
            r"$\frac{1}{3}\tan^{-1}\left(\frac{1}{3}\tan\frac{x}{2}\right) + C$"
        ],
        "correctAnswer": 0,
        "explanation": r"Substitute $\cos x = \frac{1 - t^2}{1 + t^2}$ and $dx = \frac{2dt}{1 + t^2}$ where $t = \tan(x/2)$: $\int \frac{\frac{2dt}{1+t^2}}{5 + 4\frac{1-t^2}{1+t^2}} = \int \frac{2dt}{5(1+t^2) + 4(1-t^2)} = \int \frac{2dt}{9 + t^2} = 2 \cdot \frac{1}{3}\tan^{-1}\left(\frac{t}{3}\right) + C = \frac{2}{3}\tan^{-1}\left(\frac{1}{3}\tan\frac{x}{2}\right) + C$."
    },
    {
        "question": r"The value of $\int \frac{dx}{\sin(x - a)\sin(x - b)}$ is:",
        "options": [
            r"$\frac{1}{\sin(a - b)}\ln\left|\frac{\sin(x - a)}{\sin(x - b)}\right| + C$",
            r"$\frac{1}{\cos(a - b)}\ln\left|\frac{\sin(x - a)}{\sin(x - b)}\right| + C$",
            r"$\frac{1}{\sin(a - b)}\ln\left|\frac{\cos(x - a)}{\cos(x - b)}\right| + C$",
            r"$\sin(a - b)\ln\left|\frac{\sin(x - a)}{\sin(x - b)}\right| + C$"
        ],
        "correctAnswer": 0,
        "explanation": r"Multiply and divide by $\sin(a - b) = \sin((x - b) - (x - a))$: $\frac{1}{\sin(a - b)}\int \frac{\sin((x-b) - (x-a))}{\sin(x-a)\sin(x-b)} dx = \frac{1}{\sin(a - b)}\int (\cot(x - a) - \cot(x - b)) dx = \frac{1}{\sin(a - b)} [\ln|\sin(x - a)| - \ln|\sin(x - b)|] + C = \frac{1}{\sin(a - b)}\ln\left|\frac{\sin(x - a)}{\sin(x - b)}\right| + C$."
    },
    {
        "question": r"The integral $\int \frac{dx}{\sqrt{(x - 1)(2 - x)}}$ is equal to:",
        "options": [
            r"$2\sin^{-1}\sqrt{x - 1} + C$",
            r"$\sin^{-1}(2x - 3) + C$",
            r"Both A and B are equivalent representations",
            r"$\sin^{-1}\sqrt{x - 1} + C$"
        ],
        "correctAnswer": 2,
        "explanation": r"Under the radical, $(x - 1)(2 - x) = -x^2 + 3x - 2 = \frac{1}{4} - (x - 3/2)^2 = (1/2)^2 - (x - 3/2)^2$. Thus $\int \frac{dx}{\sqrt{(1/2)^2 - (x - 3/2)^2}} = \sin^{-1}\left(\frac{x - 3/2}{1/2}\right) + C = \sin^{-1}(2x - 3) + C$. Also substituting $x = 1 + \sin^2\theta$ gives $2\sin^{-1}\sqrt{x - 1} + C'$. Both representations are equivalent up to a constant."
    },
    {
        "question": r"The integral $\int \frac{\sin x}{\sin 3x} dx$ is equal to:",
        "options": [
            r"$\frac{1}{2\sqrt{3}}\ln\left|\frac{\sqrt{3} + \tan x}{\sqrt{3} - \tan x}\right| + C$",
            r"$\frac{1}{2\sqrt{3}}\ln\left|\frac{\sqrt{3}\tan x - 1}{\sqrt{3}\tan x + 1}\right| + C$",
            r"$\frac{1}{\sqrt{3}}\tan^{-1}(\sqrt{3}\tan x) + C$",
            r"$\frac{1}{3}\ln|\tan x| + C$"
        ],
        "correctAnswer": 0,
        "explanation": r"Using $\sin 3x = \sin x(3 - 4\sin^2 x)$: $\int \frac{dx}{3 - 4\sin^2 x} = \int \frac{\sec^2 x dx}{3\sec^2 x - 4\tan^2 x} = \int \frac{\sec^2 x dx}{3(1 + \tan^2 x) - 4\tan^2 x} = \int \frac{\sec^2 x dx}{3 - \tan^2 x}$. Let $t = \tan x$: $\int \frac{dt}{(\sqrt{3})^2 - t^2} = \frac{1}{2\sqrt{3}}\ln\left|\frac{\sqrt{3} + t}{\sqrt{3} - t}\right| + C = \frac{1}{2\sqrt{3}}\ln\left|\frac{\sqrt{3} + \tan x}{\sqrt{3} - \tan x}\right| + C$."
    },
    {
        "question": r"The value of $\int \frac{dx}{x\sqrt{x^2 - a^2}}$ is:",
        "options": [
            r"$\frac{1}{a}\sec^{-1}\left|\frac{x}{a}\right| + C$",
            r"$\frac{1}{a}\tan^{-1}\left|\frac{x}{a}\right| + C$",
            r"$\frac{1}{a}\sin^{-1}\left|\frac{x}{a}\right| + C$",
            r"$\sec^{-1}\left|\frac{x}{a}\right| + C$"
        ],
        "correctAnswer": 0,
        "explanation": r"Substitute $x = a\sec\theta \implies dx = a\sec\theta\tan\theta d\theta$. Then $\int \frac{a\sec\theta\tan\theta d\theta}{a\sec\theta \cdot a\tan\theta} = \frac{1}{a}\int d\theta = \frac{1}{a}\theta + C = \frac{1}{a}\sec^{-1}\left|\frac{x}{a}\right| + C$."
    }
]
for q in q_list:
    batch3_part2.append({"chapter": ch, "subtopic": top, **q})

# Topic 7: Leibniz rule (differentiation under integral sign)
top = "Leibniz rule (differentiation under integral sign)"
q_list = [
    {
        "question": r"If $g(x) = \int_{0}^{x^2} \sqrt{1 + t^3} \, dt$, then $g'(1)$ is equal to:",
        "options": [
            r"$2\sqrt{2}$",
            r"$\sqrt{2}$",
            r"$4\sqrt{2}$",
            r"$2$"
        ],
        "correctAnswer": 0,
        "explanation": r"By Leibniz rule: $g'(x) = \sqrt{1 + (x^2)^3} \cdot \frac{d}{dx}(x^2) - 0 = 2x\sqrt{1 + x^6}$. Evaluating at $x = 1$: $g'(1) = 2(1)\sqrt{1 + 1^6} = 2\sqrt{2}$."
    },
    {
        "question": r"The value of $\lim_{x \to 0} \frac{1}{x^3}\int_0^x \frac{t^2}{t^4 + 1} dt$ is:",
        "options": [
            r"$\frac{1}{3}$",
            r"$1$",
            r"$0$",
            r"$\frac{1}{6}$"
        ],
        "correctAnswer": 0,
        "explanation": r"Using L'Hospital's rule: $\lim_{x \to 0} \frac{\frac{d}{dx}\int_0^x \frac{t^2}{t^4+1}dt}{\frac{d}{dx}(x^3)} = \lim_{x \to 0} \frac{\frac{x^2}{x^4+1}}{3x^2} = \lim_{x \to 0} \frac{1}{3(x^4+1)} = \frac{1}{3}$."
    },
    {
        "question": r"If $y = \int_0^x (x - t)f(t) dt$, then $\frac{d^2 y}{dx^2}$ is equal to:",
        "options": [
            r"$f(x)$",
            r"$f'(x)$",
            r"$x f(x)$",
            r"$0$"
        ],
        "correctAnswer": 0,
        "explanation": r"Expand the integral: $y = x\int_0^x f(t)dt - \int_0^x t f(t)dt$. Differentiating using product rule and Leibniz rule: $\frac{dy}{dx} = 1 \cdot \int_0^x f(t)dt + x f(x) - x f(x) = \int_0^x f(t)dt$. Differentiating again: $\frac{d^2 y}{dx^2} = f(x)$."
    },
    {
        "question": r"If $\int_0^x f(t) dt = x^2 + \int_x^1 t^2 f(t) dt$, then $f'(1/2)$ is:",
        "options": [
            r"$\frac{24}{25}$",
            r"$\frac{16}{25}$",
            r"$0$",
            r"$1$"
        ],
        "correctAnswer": 0,
        "explanation": r"Differentiating both sides with respect to $x$: $f(x) = 2x - x^2 f(x) \implies f(x)(1 + x^2) = 2x \implies f(x) = \frac{2x}{1 + x^2}$. Differentiating $f(x)$: $f'(x) = \frac{2(1+x^2) - 2x(2x)}{(1+x^2)^2} = \frac{2 - 2x^2}{(1+x^2)^2}$. At $x = 1/2$: $f'(1/2) = \frac{2 - 2(1/4)}{(1 + 1/4)^2} = \frac{2 - 1/2}{(5/4)^2} = \frac{3/2}{25/16} = \frac{3}{2} \times \frac{16}{25} = \frac{24}{25}$."
    },
    {
        "question": r"The value of $\frac{d}{dx} \int_{\cos x}^{\sin x} \frac{1}{1 - t^2} dt$ for $x \in (0, \pi/2)$ is:",
        "options": [
            r"$\sec x + \csc x$",
            r"$\sec x - \csc x$",
            r"$\tan x + \cot x$",
            r"$1$"
        ],
        "correctAnswer": 0,
        "explanation": r"By Leibniz rule: $\frac{1}{1 - \sin^2 x}\frac{d}{dx}(\sin x) - \frac{1}{1 - \cos^2 x}\frac{d}{dx}(\cos x) = \frac{\cos x}{\cos^2 x} - \frac{-\sin x}{\sin^2 x} = \frac{1}{\cos x} + \frac{1}{\sin x} = \sec x + \csc x$."
    }
]
for q in q_list:
    batch3_part2.append({"chapter": ch, "subtopic": top, **q})

with open("scripts/math_top100/math_batch3_p2.json", "w") as f:
    json.dump(batch3_part2, f, indent=2)

print(f"Generated {len(batch3_part2)} questions for Batch 3 Part 2.")
