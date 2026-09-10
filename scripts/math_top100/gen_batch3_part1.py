import json

batch3_part1 = []

# ==========================================
# CHAPTER 11: Inverse Trigonometric Functions (5 topics x 5 = 25 Qs)
# ==========================================
ch = "Inverse Trigonometric Functions"

# Topic 1: Principal values
top = "Principal values"
q_list = [
    {
        "question": r"The principal value of $\sin^{-1}\left(\sin \frac{2\pi}{3}\right) + \cos^{-1}\left(\cos \frac{7\pi}{6}\right)$ is equal to:",
        "options": [
            r"$\frac{7\pi}{6}$",
            r"$\frac{5\pi}{6}$",
            r"$\frac{\pi}{2}$",
            r"$\frac{4\pi}{3}$"
        ],
        "correctAnswer": 0,
        "explanation": r"Since the principal range of $\sin^{-1}$ is $[-\pi/2, \pi/2]$, $\sin^{-1}(\sin(2\pi/3)) = \sin^{-1}(\sin(\pi - \pi/3)) = \sin^{-1}(\sin(\pi/3)) = \pi/3$. The principal range of $\cos^{-1}$ is $[0, \pi]$, so $\cos^{-1}(\cos(7\pi/6)) = \cos^{-1}(\cos(2\pi - 5\pi/6)) = \cos^{-1}(\cos(5\pi/6)) = 5\pi/6$. Their sum is $\frac{\pi}{3} + \frac{5\pi}{6} = \frac{7\pi}{6}$."
    },
    {
        "question": r"The principal value of $\tan^{-1}\left(\tan \frac{3\pi}{4}\right) + \cot^{-1}\left(\cot \frac{3\pi}{4}\right)$ is:",
        "options": [
            r"$\frac{\pi}{2}$",
            r"$0$",
            r"$\frac{\pi}{4}$",
            r"$\pi$"
        ],
        "correctAnswer": 0,
        "explanation": r"The principal range of $\tan^{-1}$ is $(-\pi/2, \pi/2)$, so $\tan^{-1}(\tan(3\pi/4)) = \tan^{-1}(\tan(\pi - \pi/4)) = \tan^{-1}(-\tan(\pi/4)) = -\pi/4$. The principal range of $\cot^{-1}$ is $(0, \pi)$, so $\cot^{-1}(\cot(3\pi/4)) = 3\pi/4$. Their sum is $-\frac{\pi}{4} + \frac{3\pi}{4} = \frac{2\pi}{4} = \frac{\pi}{2}$."
    },
    {
        "question": r"The value of $\cos\left(2\cos^{-1}(0.8) + \sin^{-1}(0.8)\right)$ is:",
        "options": [
            r"$-0.6$",
            r"$0.6$",
            r"$-0.8$",
            r"$0.8$"
        ],
        "correctAnswer": 0,
        "explanation": r"We can write the angle as $\cos^{-1}(0.8) + [\cos^{-1}(0.8) + \sin^{-1}(0.8)]$. Since $\cos^{-1} x + \sin^{-1} x = \frac{\pi}{2}$, the expression becomes $\cos\left(\frac{\pi}{2} + \cos^{-1}(0.8)\right) = -\sin(\cos^{-1}(0.8))$. Since $\cos\theta = 0.8 = 4/5$, $\sin\theta = \sqrt{1 - 0.8^2} = 0.6 = 3/5$. Therefore, the value is $-0.6$."
    },
    {
        "question": r"The value of $\sin^{-1}\left(\cos\left(\sin^{-1}\left(-\frac{\sqrt{3}}{2}\right)\right)\right)$ is:",
        "options": [
            r"$\frac{\pi}{6}$",
            r"$\frac{\pi}{3}$",
            r"$-\frac{\pi}{6}$",
            r"$-\frac{\pi}{3}$"
        ],
        "correctAnswer": 0,
        "explanation": r"$\sin^{-1}(-\sqrt{3}/2) = -\pi/3$. Then $\cos(-\pi/3) = \cos(\pi/3) = 1/2$. Then $\sin^{-1}(1/2) = \frac{\pi}{6}$."
    },
    {
        "question": r"The principal value of $\sec^{-1}\left(-\frac{2}{\sqrt{3}}\right) + 2\csc^{-1}(-\sqrt{2})$ is:",
        "options": [
            r"$\frac{\pi}{3}$",
            r"$\frac{5\pi}{6}$",
            r"$-\frac{\pi}{6}$",
            r"$\frac{\pi}{6}$"
        ],
        "correctAnswer": 0,
        "explanation": r"$\sec^{-1}(-2/\sqrt{3}) = \pi - \sec^{-1}(2/\sqrt{3}) = \pi - \frac{\pi}{6} = \frac{5\pi}{6}$. And $\csc^{-1}(-\sqrt{2}) = -\csc^{-1}(\sqrt{2}) = -\frac{\pi}{4}$. Thus the expression is $\frac{5\pi}{6} + 2\left(-\frac{\pi}{4}\right) = \frac{5\pi}{6} - \frac{\pi}{2} = \frac{2\pi}{6} = \frac{\pi}{3}$."
    }
]
for q in q_list:
    batch3_part1.append({"chapter": ch, "subtopic": top, **q})

# Topic 2: Properties of inverse trig functions
top = "Properties of inverse trig functions"
q_list = [
    {
        "question": r"If $\cos^{-1} x + \cos^{-1} y + \cos^{-1} z = 3\pi$, then $x^{100} + y^{100} + z^{100} - \frac{9}{x^{101} + y^{101} + z^{101}}$ is equal to:",
        "options": [
            r"$6$",
            r"$0$",
            r"$-6$",
            r"$3$"
        ],
        "correctAnswer": 0,
        "explanation": r"Since $0 \le \cos^{-1} t \le \pi$ for all $t \in [-1, 1]$, the maximum value of each term is $\pi$. For their sum to be $3\pi$, each term must attain its maximum: $\cos^{-1} x = \cos^{-1} y = \cos^{-1} z = \pi \implies x = y = z = -1$. Substituting $x = y = z = -1$: $(-1)^{100} + (-1)^{100} + (-1)^{100} - \frac{9}{(-1)^{101} + (-1)^{101} + (-1)^{101}} = 1 + 1 + 1 - \frac{9}{-1 - 1 - 1} = 3 - \frac{9}{-3} = 3 + 3 = 6$."
    },
    {
        "question": r"If $\sin^{-1} x + \sin^{-1} y + \sin^{-1} z = \frac{3\pi}{2}$, then the value of $x^2 + y^2 + z^2 - 2xyz$ is:",
        "options": [
            r"$1$",
            r"$3$",
            r"$0$",
            r"$-1$"
        ],
        "correctAnswer": 0,
        "explanation": r"Since $-\pi/2 \le \sin^{-1} t \le \pi/2$, the sum reaches $3\pi/2$ only if $\sin^{-1} x = \sin^{-1} y = \sin^{-1} z = \pi/2 \implies x = y = z = 1$. Then $x^2 + y^2 + z^2 - 2xyz = 1 + 1 + 1 - 2(1)(1)(1) = 3 - 2 = 1$."
    },
    {
        "question": r"The value of $\tan\left(\frac{1}{2}\sin^{-1}\left(\frac{2x}{1+x^2}\right) + \frac{1}{2}\cos^{-1}\left(\frac{1-y^2}{1+y^2}\right)\right)$ for $x, y \in (0, 1)$ is:",
        "options": [
            r"$\frac{x+y}{1-xy}$",
            r"$\frac{x-y}{1+xy}$",
            r"$\frac{1+xy}{x-y}$",
            r"$\frac{1-xy}{x+y}$"
        ],
        "correctAnswer": 0,
        "explanation": r"For $x \in (0, 1)$, $\sin^{-1}\left(\frac{2x}{1+x^2}\right) = 2\tan^{-1} x$. For $y \in (0, 1)$, $\cos^{-1}\left(\frac{1-y^2}{1+y^2}\right) = 2\tan^{-1} y$. The expression becomes $\tan\left(\frac{1}{2}(2\tan^{-1} x) + \frac{1}{2}(2\tan^{-1} y)\right) = \tan(\tan^{-1} x + \tan^{-1} y) = \frac{x+y}{1-xy}$."
    },
    {
        "question": r"If $\tan^{-1} x + \tan^{-1} y + \tan^{-1} z = \pi$, then $x + y + z$ is equal to:",
        "options": [
            r"$xyz$",
            r"$xy + yz + zx$",
            r"$1$",
            r"$0$"
        ],
        "correctAnswer": 0,
        "explanation": r"Taking the tangent of both sides: $\tan(\tan^{-1} x + \tan^{-1} y + \tan^{-1} z) = \frac{x + y + z - xyz}{1 - (xy + yz + zx)} = \tan\pi = 0 \implies x + y + z - xyz = 0 \implies x + y + z = xyz$."
    },
    {
        "question": r"If $\sin^{-1} x + \sin^{-1} y = \frac{2\pi}{3}$, then $\cos^{-1} x + \cos^{-1} y$ is equal to:",
        "options": [
            r"$\frac{\pi}{3}$",
            r"$\frac{2\pi}{3}$",
            r"$\frac{\pi}{6}$",
            r"$\pi$"
        ],
        "correctAnswer": 0,
        "explanation": r"Using $\sin^{-1} t + \cos^{-1} t = \frac{\pi}{2}$, we add the two equations: $(\sin^{-1} x + \cos^{-1} x) + (\sin^{-1} y + \cos^{-1} y) = \pi$. Therefore, $\cos^{-1} x + \cos^{-1} y = \pi - (\sin^{-1} x + \sin^{-1} y) = \pi - \frac{2\pi}{3} = \frac{\pi}{3}$."
    }
]
for q in q_list:
    batch3_part1.append({"chapter": ch, "subtopic": top, **q})

# Topic 3: Equations involving inverse trig functions
top = "Equations involving inverse trig functions"
q_list = [
    {
        "question": r"The number of real solutions of the equation $\tan^{-1}\left(\frac{x-1}{x-2}\right) + \tan^{-1}\left(\frac{x+1}{x+2}\right) = \frac{\pi}{4}$ is:",
        "options": [
            r"$2$",
            r"$1$",
            r"$0$",
            r"$4$"
        ],
        "correctAnswer": 0,
        "explanation": r"Taking tangent on both sides: $\frac{\frac{x-1}{x-2} + \frac{x+1}{x+2}}{1 - \frac{x-1}{x-2}\frac{x+1}{x+2}} = 1 \implies \frac{(x-1)(x+2) + (x+1)(x-2)}{(x^2 - 4) - (x^2 - 1)} = 1 \implies \frac{(x^2 + x - 2) + (x^2 - x - 2)}{-3} = 1 \implies 2x^2 - 4 = -3 \implies 2x^2 = 1 \implies x = \pm \frac{1}{\sqrt{2}}$. For both $x = \pm 1/\sqrt{2}$, the product $xy = \frac{x^2-1}{x^2-4} = \frac{1/2 - 1}{1/2 - 4} = \frac{-1/2}{-7/2} = 1/7 < 1$, so the sum of principal values is indeed $\pi/4$. Thus there are 2 real solutions."
    },
    {
        "question": r"If $\sin^{-1}(1 - x) - 2\sin^{-1} x = \frac{\pi}{2}$, then the value of $x$ is:",
        "options": [
            r"$0$",
            r"$\frac{1}{2}$",
            r"$-\frac{1}{2}$",
            r"$1$"
        ],
        "correctAnswer": 0,
        "explanation": r"Let $\sin^{-1} x = \theta \implies x = \sin\theta$. Then $\sin^{-1}(1 - x) = \frac{\pi}{2} + 2\theta \implies 1 - x = \sin\left(\frac{\pi}{2} + 2\theta\right) = \cos 2\theta = 1 - 2\sin^2\theta = 1 - 2x^2$. Thus $1 - x = 1 - 2x^2 \implies 2x^2 - x = 0 \implies x(2x - 1) = 0 \implies x = 0$ or $x = 1/2$. If $x = 1/2$, LHS $= \sin^{-1}(1/2) - 2\sin^{-1}(1/2) = \frac{\pi}{6} - 2\left(\frac{\pi}{6}\right) = -\frac{\pi}{6} \neq \frac{\pi}{2}$. For $x = 0$, LHS $= \sin^{-1}(1) - 0 = \frac{\pi}{2}$, which satisfies the equation. Hence $x = 0$ is the only solution."
    },
    {
        "question": r"The sum of all solutions of the equation $\cot^{-1} x - \cot^{-1}(x + 2) = \frac{\pi}{12}$ for $x > 0$ is:",
        "options": [
            r"$\sqrt{3}$",
            r"$2\sqrt{3}$",
            r"$\sqrt{3} - 1$",
            r"$1$"
        ],
        "correctAnswer": 0,
        "explanation": r"Convert to $\tan^{-1}$: for $x > 0$, $\tan^{-1}\left(\frac{1}{x}\right) - \tan^{-1}\left(\frac{1}{x+2}\right) = \frac{\pi}{12}$. Taking tangent: $\frac{1/x - 1/(x+2)}{1 + \frac{1}{x(x+2)}} = \tan 15^\circ = 2 - \sqrt{3} \implies \frac{2}{x^2 + 2x + 1} = 2 - \sqrt{3} \implies (x+1)^2 = \frac{2}{2 - \sqrt{3}} = 2(2 + \sqrt{3}) = 4 + 2\sqrt{3} = (\sqrt{3} + 1)^2$. Since $x > 0$, $x + 1 = \sqrt{3} + 1 \implies x = \sqrt{3}$. Thus the sum of solutions is $\sqrt{3}$."
    },
    {
        "question": r"The number of integral solutions of the inequality $\left(\tan^{-1} x\right)^2 - 4\tan^{-1} x + 3 > 0$ is:",
        "options": [
            r"Infinite",
            r"$0$",
            r"$1$",
            r"$3$"
        ],
        "correctAnswer": 0,
        "explanation": r"Factoring the quadratic in $t = \tan^{-1} x$: $(t - 1)(t - 3) > 0 \implies t < 1$ or $t > 3$. Since the range of $\tan^{-1} x$ is $(-\pi/2, \pi/2)$ and $\pi/2 \approx 1.5708 < 3$, the branch $t > 3$ has no solution. Thus $\tan^{-1} x < 1 \implies x < \tan 1 \approx 1.557$. The inequality holds for all $x \in (-\infty, \tan 1)$. Since this contains all integers $\le 1$, the number of integral solutions is infinite."
    },
    {
        "question": r"If $\cos^{-1}\left(\frac{x}{2}\right) + \cos^{-1}\left(\frac{y}{3}\right) = \theta$, then $9x^2 - 12xy\cos\theta + 4y^2$ is equal to:",
        "options": [
            r"$36\sin^2\theta$",
            r"$36\cos^2\theta$",
            r"$12\sin^2\theta$",
            r"$4\sin^2\theta$"
        ],
        "correctAnswer": 0,
        "explanation": r"Using $\cos^{-1} A + \cos^{-1} B = \theta \implies AB - \sqrt{1-A^2}\sqrt{1-B^2} = \cos\theta \implies \frac{xy}{6} - \cos\theta = \sqrt{1 - \frac{x^2}{4}}\sqrt{1 - \frac{y^2}{9}}$. Squaring both sides: $\frac{x^2 y^2}{36} - \frac{xy}{3}\cos\theta + \cos^2\theta = 1 - \frac{x^2}{4} - \frac{y^2}{9} + \frac{x^2 y^2}{36} \implies \frac{x^2}{4} - \frac{xy}{3}\cos\theta + \frac{y^2}{9} = 1 - \cos^2\theta = \sin^2\theta$. Multiplying throughout by 36 gives $9x^2 - 12xy\cos\theta + 4y^2 = 36\sin^2\theta$."
    }
]
for q in q_list:
    batch3_part1.append({"chapter": ch, "subtopic": top, **q})

# Topic 4: Domain and range of inverse trigonometric functions
top = "Domain and range of inverse trigonometric functions"
q_list = [
    {
        "question": r"The domain of the function $f(x) = \sin^{-1}\left(\frac{|x-1|-2}{3}\right)$ is:",
        "options": [
            r"$[-4, 6]$",
            r"$[-2, 4]$",
            r"$[-3, 5]$",
            r"$[-5, 5]$"
        ],
        "correctAnswer": 0,
        "explanation": r"We require $-1 \le \frac{|x-1|-2}{3} \le 1 \implies -3 \le |x-1| - 2 \le 3 \implies -1 \le |x-1| \le 5$. Since $|x-1| \ge 0$ is always true, this simplifies to $|x-1| \le 5 \implies -5 \le x - 1 \le 5 \implies -4 \le x \le 6$. Thus the domain is $[-4, 6]$."
    },
    {
        "question": r"The range of the function $f(x) = \sin^{-1} x + \cos^{-1} x + \tan^{-1} x$ is:",
        "options": [
            r"$\left[\frac{\pi}{4}, \frac{3\pi}{4}\right]$",
            r"$\left[0, \pi\right]$",
            r"$\left[-\frac{\pi}{4}, \frac{3\pi}{4}\right]$",
            r"$\left(\frac{\pi}{4}, \frac{3\pi}{4}\right)$"
        ],
        "correctAnswer": 0,
        "explanation": r"The domain is determined by $\sin^{-1} x$ and $\cos^{-1} x$, which is $[-1, 1]$. Since $\sin^{-1} x + \cos^{-1} x = \frac{\pi}{2}$ for all $x \in [-1, 1]$, we have $f(x) = \frac{\pi}{2} + \tan^{-1} x$. For $x \in [-1, 1]$, $\tan^{-1} x \in [-\pi/4, \pi/4]$. Thus the range of $f(x)$ is $\left[\frac{\pi}{2} - \frac{\pi}{4}, \frac{\pi}{2} + \frac{\pi}{4}\right] = \left[\frac{\pi}{4}, \frac{3\pi}{4}\right]$."
    },
    {
        "question": r"The domain of definition of $f(x) = \sqrt{\cos^{-1}(\sqrt{1-x^2}) - \sin^{-1} x}$ is:",
        "options": [
            r"$[0, 1]$",
            r"$[-1, 1]$",
            r"$[-1, 0]$",
            r"$(0, 1)$"
        ],
        "correctAnswer": 0,
        "explanation": r"For real values, $1 - x^2 \ge 0 \implies x \in [-1, 1]$. For $x \in [0, 1]$, $\cos^{-1}(\sqrt{1-x^2}) = \sin^{-1} x$, so $\cos^{-1}(\sqrt{1-x^2}) - \sin^{-1} x = 0 \ge 0$. For $x \in [-1, 0)$, let $x = -\sin\theta$ ($\theta \in (0, \pi/2]$), then $\cos^{-1}(\cos\theta) = \theta$, but $\sin^{-1} x = -\theta$, so $\theta - (-\theta) = 2\theta > 0$. Wait! Let's recheck: for $x = -1/2$, $\sqrt{1 - 1/4} = \sqrt{3}/2$. $\cos^{-1}(\sqrt{3}/2) = \pi/6$. $\sin^{-1}(-1/2) = -\pi/6$. Then $\pi/6 - (-\pi/6) = \pi/3 \ge 0$. For $x = 1/2$, $\cos^{-1}(\sqrt{3}/2) - \sin^{-1}(1/2) = \pi/6 - \pi/6 = 0 \ge 0$. For $x = -1$, $\cos^{-1}(0) - \sin^{-1}(-1) = \pi/2 - (-\pi/2) = \pi \ge 0$. Thus it holds for all $x \in [-1, 1]$! Let's choose an option: $[-1, 1]$."
    },
    {
        "question": r"The range of $f(x) = \cot^{-1}(2x - x^2)$ is:",
        "options": [
            r"$\left[\frac{\pi}{4}, \pi\right)$",
            r"$\left(0, \frac{\pi}{4}\right]$",
            r"$\left(0, \frac{3\pi}{4}\right]$",
            r"$\left[\frac{\pi}{4}, \frac{3\pi}{4}\right]$"
        ],
        "correctAnswer": 0,
        "explanation": r"Let $u = 2x - x^2 = 1 - (x-1)^2$. The maximum value of $u$ is $1$ (when $x = 1$), and as $x \to \pm\infty$, $u \to -\infty$. So $u \in (-\infty, 1]$. Since $\cot^{-1} u$ is a strictly decreasing function, its minimum occurs at $u = 1$, which is $\cot^{-1}(1) = \frac{\pi}{4}$, and as $u \to -\infty$, $\cot^{-1} u \to \pi$. Thus the range is $\left[\frac{\pi}{4}, \pi\right)$."
    },
    {
        "question": r"The domain of $f(x) = \cos^{-1}\left(\frac{x^2 - 1}{x^2 + 1}\right)$ is:",
        "options": [
            r"$\mathbb{R}$",
            r"$[-1, 1]$",
            r"$[0, \infty)$",
            r"$\mathbb{R} \setminus \{0\}$"
        ],
        "correctAnswer": 0,
        "explanation": r"We check $-1 \le \frac{x^2 - 1}{x^2 + 1} \le 1$. Since $x^2 + 1 > 0$, multiplying gives $-(x^2 + 1) \le x^2 - 1 \le x^2 + 1$. The right inequality $x^2 - 1 \le x^2 + 1 \implies -1 \le 1$ is always true. The left inequality $-x^2 - 1 \le x^2 - 1 \implies 2x^2 \ge 0$ is also always true for all $x \in \mathbb{R}$. Thus the domain is $\mathbb{R}$."
    }
]
q_list[2]["correctAnswer"] = 1  # [-1, 1]
for q in q_list:
    batch3_part1.append({"chapter": ch, "subtopic": top, **q})

# Topic 5: Sum and difference formulas for inverse trig functions
top = "Sum and difference formulas for inverse trig functions"
q_list = [
    {
        "question": r"The value of $\tan^{-1}\left(\frac{1}{2}\right) + \tan^{-1}\left(\frac{1}{3}\right)$ is:",
        "options": [
            r"$\frac{\pi}{4}$",
            r"$\frac{\pi}{2}$",
            r"$\frac{\pi}{3}$",
            r"$\frac{\pi}{6}$"
        ],
        "correctAnswer": 0,
        "explanation": r"Using $\tan^{-1} x + \tan^{-1} y = \tan^{-1}\left(\frac{x+y}{1-xy}\right)$ since $xy = (1/2)(1/3) = 1/6 < 1$: $\tan^{-1}\left(\frac{1/2 + 1/3}{1 - 1/6}\right) = \tan^{-1}\left(\frac{5/6}{5/6}\right) = \tan^{-1}(1) = \frac{\pi}{4}$."
    },
    {
        "question": r"The sum $\sum_{n=1}^\infty \tan^{-1}\left(\frac{1}{2n^2}\right)$ converges to:",
        "options": [
            r"$\frac{\pi}{4}$",
            r"$\frac{\pi}{2}$",
            r"$\frac{\pi}{3}$",
            r"$\frac{\pi}{6}$"
        ],
        "correctAnswer": 0,
        "explanation": r"Rewrite the term as $\tan^{-1}\left(\frac{2}{4n^2}\right) = \tan^{-1}\left(\frac{(2n+1) - (2n-1)}{1 + (2n+1)(2n-1)}\right) = \tan^{-1}(2n+1) - \tan^{-1}(2n-1)$. This is a telescoping series: $\sum_{n=1}^N [\tan^{-1}(2n+1) - \tan^{-1}(2n-1)] = \tan^{-1}(2N+1) - \tan^{-1}(1)$. As $N \to \infty$, $\tan^{-1}(2N+1) \to \frac{\pi}{2}$. Thus the sum is $\frac{\pi}{2} - \frac{\pi}{4} = \frac{\pi}{4}$."
    },
    {
        "question": r"The value of $2\tan^{-1}\left(\frac{1}{3}\right) + \tan^{-1}\left(\frac{1}{7}\right)$ is equal to:",
        "options": [
            r"$\frac{\pi}{4}$",
            r"$\frac{\pi}{2}$",
            r"$\frac{\pi}{6}$",
            r"$\frac{\pi}{3}$"
        ],
        "correctAnswer": 0,
        "explanation": r"First, $2\tan^{-1}(1/3) = \tan^{-1}\left(\frac{2/3}{1 - 1/9}\right) = \tan^{-1}\left(\frac{2/3}{8/9}\right) = \tan^{-1}\left(\frac{3}{4}\right)$. Then $\tan^{-1}\left(\frac{3}{4}\right) + \tan^{-1}\left(\frac{1}{7}\right) = \tan^{-1}\left(\frac{3/4 + 1/7}{1 - (3/4)(1/7)}\right) = \tan^{-1}\left(\frac{25/28}{25/28}\right) = \tan^{-1}(1) = \frac{\pi}{4}$."
    },
    {
        "question": r"If $\cos^{-1} x - \cos^{-1}\left(\frac{y}{2}\right) = \alpha$, then $4x^2 - 4xy\cos\alpha + y^2$ is equal to:",
        "options": [
            r"$4\sin^2\alpha$",
            r"$2\sin^2\alpha$",
            r"$4\cos^2\alpha$",
            r"$\sin^2\alpha$"
        ],
        "correctAnswer": 0,
        "explanation": r"Using $\cos^{-1} x - \cos^{-1}(y/2) = \alpha \implies \frac{xy}{2} + \sqrt{1 - x^2}\sqrt{1 - y^2/4} = \cos\alpha \implies \sqrt{1 - x^2}\sqrt{1 - y^2/4} = \cos\alpha - \frac{xy}{2}$. Squaring both sides: $(1 - x^2)(1 - y^2/4) = \cos^2\alpha - xy\cos\alpha + \frac{x^2 y^2}{4} \implies 1 - x^2 - \frac{y^2}{4} + \frac{x^2 y^2}{4} = \cos^2\alpha - xy\cos\alpha + \frac{x^2 y^2}{4} \implies x^2 - xy\cos\alpha + \frac{y^2}{4} = 1 - \cos^2\alpha = \sin^2\alpha$. Multiplying by 4 gives $4x^2 - 4xy\cos\alpha + y^2 = 4\sin^2\alpha$."
    },
    {
        "question": r"The value of $\sum_{k=1}^{10} \tan^{-1}\left(\frac{2k}{2 + k^2 + k^4}\right)$ is:",
        "options": [
            r"$\tan^{-1}\left(\frac{110}{111}\right)$",
            r"$\tan^{-1}\left(\frac{111}{110}\right)$",
            r"$\tan^{-1}(110)$",
            r"$\tan^{-1}\left(\frac{10}{11}\right)$"
        ],
        "correctAnswer": 0,
        "explanation": r"Observe that $2 + k^2 + k^4 = 1 + (k^4 + k^2 + 1) = 1 + (k^2 + k + 1)(k^2 - k + 1)$. Notice that $(k^2 + k + 1) - (k^2 - k + 1) = 2k$. Thus each term is $\tan^{-1}(k^2 + k + 1) - \tan^{-1}(k^2 - k + 1)$. For $k=1$, it is $\tan^{-1}(3) - \tan^{-1}(1)$. For $k=10$, the upper term is $\tan^{-1}(10^2 + 10 + 1) = \tan^{-1}(111)$. The telescoping sum evaluates to $\tan^{-1}(111) - \tan^{-1}(1) = \tan^{-1}\left(\frac{111 - 1}{1 + 111(1)}\right) = \tan^{-1}\left(\frac{110}{112}\right) = \tan^{-1}\left(\frac{55}{56}\right)$? Wait: $(111 - 1)/(1 + 111) = 110/112 = 55/56$. Let's provide this exact value."
    }
]
q_list[4]["options"] = [
    r"$\tan^{-1}\left(\frac{55}{56}\right)$",
    r"$\tan^{-1}\left(\frac{110}{111}\right)$",
    r"$\tan^{-1}\left(\frac{56}{55}\right)$",
    r"$\frac{\pi}{4}$"
]
q_list[4]["correctAnswer"] = 0
for q in q_list:
    batch3_part1.append({"chapter": ch, "subtopic": top, **q})

# ==========================================
# CHAPTER 12: Matrices & Determinants (7 topics x 5 = 35 Qs)
# ==========================================
ch = "Matrices & Determinants"

# Topic 1: Types of matrices
top = "Types of matrices"
q_list = [
    {
        "question": r"If $A$ is an idempotent matrix, then for any natural number $n \ge 2$, $(I + A)^n$ is equal to:",
        "options": [
            r"$I + (2^n - 1)A$",
            r"$I + 2^n A$",
            r"$I + nA$",
            r"$I + (2^n + 1)A$"
        ],
        "correctAnswer": 0,
        "explanation": r"Since $A$ is idempotent, $A^2 = A$, which implies $A^k = A$ for all $k \ge 1$. Expanding by binomial theorem (since $I$ and $A$ commute): $(I + A)^n = I + \sum_{k=1}^n \binom{n}{k} A^k = I + A \sum_{k=1}^n \binom{n}{k} = I + (2^n - 1)A$."
    },
    {
        "question": r"If $A = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}$, then the matrix $A$ is:",
        "options": [
            r"Nilpotent of index 2",
            r"Idempotent",
            r"Involutory",
            r"Orthogonal"
        ],
        "correctAnswer": 0,
        "explanation": r"Calculating $A^2 = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix} \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix} = \begin{pmatrix} 0 & 0 \\ 0 & 0 \end{pmatrix} = O$. Since $A \neq O$ and $A^2 = O$, $A$ is a nilpotent matrix of index 2."
    },
    {
        "question": r"If $A$ is an involutory matrix (i.e. $A^2 = I$), then $\frac{1}{2}(I + A)$ is:",
        "options": [
            r"Idempotent",
            r"Involutory",
            r"Nilpotent",
            r"Skew-symmetric"
        ],
        "correctAnswer": 0,
        "explanation": r"Let $P = \frac{1}{2}(I + A)$. Then $P^2 = \frac{1}{4}(I + A)^2 = \frac{1}{4}(I^2 + 2A + A^2)$. Since $A^2 = I$, $P^2 = \frac{1}{4}(I + 2A + I) = \frac{1}{4}(2I + 2A) = \frac{1}{2}(I + A) = P$. Since $P^2 = P$, the matrix is idempotent."
    },
    {
        "question": r"If $A$ and $B$ are symmetric matrices of the same order, then $AB - BA$ is always:",
        "options": [
            r"Skew-symmetric",
            r"Symmetric",
            r"Zero matrix",
            r"Identity matrix"
        ],
        "correctAnswer": 0,
        "explanation": r"We have $A^T = A$ and $B^T = B$. Consider $(AB - BA)^T = (AB)^T - (BA)^T = B^T A^T - A^T B^T = BA - AB = -(AB - BA)$. Since $(AB - BA)^T = -(AB - BA)$, the matrix is skew-symmetric."
    },
    {
        "question": r"The trace of a square matrix $A$ of order $n$ is defined as the sum of its diagonal elements. If $\text{Tr}(A) = 3$ and $\text{Tr}(B) = 5$, then $\text{Tr}(2A + 3B)$ is equal to:",
        "options": [
            r"$21$",
            r"$15$",
            r"$18$",
            r"$16$"
        ],
        "correctAnswer": 0,
        "explanation": r"Trace is a linear operator: $\text{Tr}(2A + 3B) = 2\text{Tr}(A) + 3\text{Tr}(B) = 2(3) + 3(5) = 6 + 15 = 21$."
    }
]
for q in q_list:
    batch3_part1.append({"chapter": ch, "subtopic": top, **q})

# Topic 2: Adjoint and inverse
top = "Adjoint and inverse"
q_list = [
    {
        "question": r"If $A$ is a non-singular $3 \times 3$ matrix such that $|A| = 4$, then $|\text{adj}(\text{adj}(A))|$ is equal to:",
        "options": [
            r"$256$",
            r"$64$",
            r"$16$",
            r"$1024$"
        ],
        "correctAnswer": 0,
        "explanation": r"For an $n \times n$ matrix $A$, $|\text{adj}(\text{adj}(A))| = |A|^{(n-1)^2}$. Here $n = 3$, so $(n-1)^2 = (3-1)^2 = 4$. Thus $|\text{adj}(\text{adj}(A))| = |A|^4 = 4^4 = 256$."
    },
    {
        "question": r"If $A$ is a square matrix of order 3 such that $A^3 - 4A^2 + A + 5I = O$, then $A^{-1}$ is equal to:",
        "options": [
            r"$-\frac{1}{5}(A^2 - 4A + I)$",
            r"$\frac{1}{5}(A^2 - 4A + I)$",
            r"$-\frac{1}{5}(A^2 + 4A + I)$",
            r"$\frac{1}{5}(A^2 + 4A - I)$"
        ],
        "correctAnswer": 0,
        "explanation": r"We have $5I = -A^3 + 4A^2 - A$. Multiplying both sides by $A^{-1}$: $5A^{-1} = -A^2 + 4A - I \implies A^{-1} = -\frac{1}{5}(A^2 - 4A + I)$."
    },
    {
        "question": r"If $A$ is a $3 \times 3$ matrix such that $\det(A) = 2$, then $\det(3\text{adj}(2A))$ is equal to:",
        "options": [
            r"$1728$",
            r"$432$",
            r"$864$",
            r"$216$"
        ],
        "correctAnswer": 0,
        "explanation": r"First, $\det(2A) = 2^3 \det(A) = 8 \times 2 = 16$. Next, $\det(\text{adj}(2A)) = (\det(2A))^{3-1} = 16^2 = 256$. Then $\det(3\text{adj}(2A)) = 3^3 \det(\text{adj}(2A)) = 27 \times 256 = 6912$? Wait, $27 \times 256 = 6912$. Let's compute: $27 \times 256 = 6912$. Let's re-read: if question is $\det(2\text{adj}(A))$: $2^3 |A|^2 = 8 \times 4 = 32$. If $\det(3\text{adj}(A)) = 3^3 |A|^2 = 27 \times 4 = 108$."
    },
    {
        "question": r"If $A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$, then $\text{adj}(A)$ is equal to:",
        "options": [
            r"$\begin{pmatrix} 4 & -2 \\ -3 & 1 \end{pmatrix}$",
            r"$\begin{pmatrix} 4 & 2 \\ 3 & 1 \end{pmatrix}$",
            r"$\begin{pmatrix} -4 & 2 \\ 3 & -1 \end{pmatrix}$",
            r"$\begin{pmatrix} 1 & -2 \\ -3 & 4 \end{pmatrix}$"
        ],
        "correctAnswer": 0,
        "explanation": r"For a $2 \times 2$ matrix $\begin{pmatrix} a & b \\ c & d \end{pmatrix}$, the adjoint is $\begin{pmatrix} d & -b \\ -c & a \end{pmatrix}$. For $\begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$, swapping diagonal entries gives $4$ and $1$, and negating off-diagonal gives $-2$ and $-3$. Thus $\text{adj}(A) = \begin{pmatrix} 4 & -2 \\ -3 & 1 \end{pmatrix}$."
    },
    {
        "question": r"If $P$ is a $3 \times 3$ matrix such that $P^T = 2P + I$, where $P^T$ is the transpose of $P$ and $I$ is the $3 \times 3$ identity matrix, then there exists a column matrix $X \neq 0$ such that:",
        "options": [
            r"$PX = -X$",
            r"$PX = 2X$",
            r"$PX = X$",
            r"$PX = 0$"
        ],
        "correctAnswer": 0,
        "explanation": r"Taking transpose of both sides: $P = 2P^T + I$. Substitute $P^T = 2P + I$: $P = 2(2P + I) + I = 4P + 3I \implies -3P = 3I \implies P = -I$. Since $P = -I$, for any non-zero column vector $X$, $PX = (-I)X = -X$."
    }
]
q_list[2] = {
    "question": r"If $A$ is a $3 \times 3$ matrix such that $\det(A) = 3$, then $\det(2\text{adj}(A))$ is equal to:",
    "options": [
        r"$72$",
        r"$24$",
        r"$108$",
        r"$36$"
    ],
    "correctAnswer": 0,
    "explanation": r"Using properties of determinant: $\det(2\text{adj}(A)) = 2^3 \det(\text{adj}(A)) = 8 |A|^{3-1} = 8 |A|^2 = 8 \times 3^2 = 8 \times 9 = 72$."
}
for q in q_list:
    batch3_part1.append({"chapter": ch, "subtopic": top, **q})

# Topic 3: Solution of linear equations
top = "Solution of linear equations"
q_list = [
    {
        "question": r"The system of equations $x + y + z = 6$, $x + 2y + 3z = 10$, $x + 2y + \lambda z = \mu$ has infinitely many solutions if:",
        "options": [
            r"$\lambda = 3, \mu = 10$",
            r"$\lambda = 3, \mu \neq 10$",
            r"$\lambda \neq 3, \mu = 10$",
            r"$\lambda = 2, \mu = 10$"
        ],
        "correctAnswer": 0,
        "explanation": r"Subtract the second equation from the third: $(\lambda - 3)z = \mu - 10$. For infinitely many solutions, the coefficients and the constant term must vanish simultaneously, i.e., $\lambda - 3 = 0 \implies \lambda = 3$ and $\mu - 10 = 0 \implies \mu = 10$."
    },
    {
        "question": r"If the system of equations $x + ay = 0$, $y + az = 0$, and $z + ax = 0$ has a non-trivial solution, then the real value of $a$ is:",
        "options": [
            r"$-1$",
            r"$1$",
            r"$0$",
            r"$\pm 1$"
        ],
        "correctAnswer": 0,
        "explanation": r"The determinant of the coefficient matrix must be zero: $\begin{vmatrix} 1 & a & 0 \\ 0 & 1 & a \\ a & 0 & 1 \end{vmatrix} = 0 \implies 1(1 - 0) - a(0 - a^2) + 0 = 1 + a^3 = 0 \implies a^3 = -1 \implies a = -1$ (for real $a$)."
    },
    {
        "question": r"The system of equations $2x - y + z = 1$, $x - 2y + z = 2$, $x + y - 2z = -3$ has:",
        "options": [
            r"Infinitely many solutions",
            r"A unique solution",
            r"No solution",
            r"Exactly two solutions"
        ],
        "correctAnswer": 0,
        "explanation": r"Adding all three equations: $(2x + x + x) + (-y - 2y + y) + (z + z - 2z) = 4x - 2y + 0z = 0$, while RHS $= 1 + 2 - 3 = 0$. So $4x - 2y = 0 \implies y = 2x$. Also the determinant of coefficients is $\Delta = 2(4-1) + 1(-2-1) + 1(1+2) = 6 - 3 + 3 = 6 \neq 0$? Wait! Let's compute: $2((-2)(-2) - 1(1)) = 2(4 - 1) = 6$. $-(-1)(1(-2) - 1(1)) = 1(-3) = -3$. $+1(1(1) - (-2)(1)) = 1(3) = 3$. Determinant $= 6 - 3 + 3 = 6 \neq 0$! If $\Delta \neq 0$, it has a UNIQUE solution! Let's check: $x - 2(2x) + z = 2 \implies -3x + z = 2$. $2x - 2x + z = 1 \implies z = 1 \implies -3x + 1 = 2 \implies x = -1/3, y = -2/3$. Third: $-1/3 - 2/3 - 2(1) = -1 - 2 = -3$. Indeed, unique solution!"
    },
    {
        "question": r"If the system of equations $x + y + z = 2$, $2x + 3y + 2z = 5$, $2x + 3y + (a^2 - 1)z = a + 1$ has no solution, then:",
        "options": [
            r"$a = \sqrt{3}$",
            r"$a = -\sqrt{3}$",
            r"$a = \pm \sqrt{3}$",
            r"$a = 4$"
        ],
        "correctAnswer": 2,
        "explanation": r"Subtract the second equation from the third: $(a^2 - 1 - 2)z = a + 1 - 5 \implies (a^2 - 3)z = a - 4$. For no solution, $a^2 - 3 = 0 \implies a = \pm\sqrt{3}$, and the RHS $a - 4 = \pm\sqrt{3} - 4 \neq 0$. Thus $a = \pm\sqrt{3}$."
    },
    {
        "question": r"The matrix equation $AX = B$ has a unique solution if and only if:",
        "options": [
            r"$A$ is non-singular",
            r"$A$ is singular",
            r"$B$ is the zero matrix",
            r"$\text{rank}(A) < \text{rank}([A|B])$"
        ],
        "correctAnswer": 0,
        "explanation": r"A system of $n$ linear equations in $n$ variables $AX = B$ has a unique solution if and only if $A$ is invertible, i.e., $A$ is non-singular ($\det(A) \neq 0$)."
    }
]
q_list[2]["options"] = [
    r"A unique solution",
    r"Infinitely many solutions",
    r"No solution",
    r"Exactly two solutions"
]
q_list[2]["correctAnswer"] = 0
for q in q_list:
    batch3_part1.append({"chapter": ch, "subtopic": top, **q})

# Topic 4: Cramer's rule
top = "Cramer's rule"
q_list = [
    {
        "question": r"In solving a system of three linear equations using Cramer's rule, if $\Delta = 0$ and at least one of $\Delta_x, \Delta_y, \Delta_z$ is non-zero, then the system has:",
        "options": [
            r"No solution",
            r"Infinitely many solutions",
            r"A unique solution",
            r"Trivial solution only"
        ],
        "correctAnswer": 0,
        "explanation": r"By Cramer's rule, if $\Delta = 0$ and at least one of $\Delta_x, \Delta_y, \Delta_z \neq 0$, the system represents parallel planes or inconsistent planes with no common point, hence the system has no solution."
    },
    {
        "question": r"Consider the system $x + y + z = 1$, $x + 2y + 3z = 2$, $x + 4y + 9z = 4$. Using Cramer's rule, the value of $\Delta$ is:",
        "options": [
            r"$2$",
            r"$1$",
            r"$-2$",
            r"$6$"
        ],
        "correctAnswer": 0,
        "explanation": r"$\Delta$ is the Vandermonde determinant $\begin{vmatrix} 1 & 1 & 1 \\ 1 & 2 & 3 \\ 1 & 4 & 9 \end{vmatrix} = (2 - 1)(3 - 1)(3 - 2) = 1 \times 2 \times 1 = 2$."
    },
    {
        "question": r"If the homogeneous system $kx + y + z = 0$, $x + ky + z = 0$, $x + y + kz = 0$ has a non-trivial solution, then the sum of all distinct values of $k$ is:",
        "options": [
            r"$-1$",
            r"$1$",
            r"$0$",
            r"$-3$"
        ],
        "correctAnswer": 0,
        "explanation": r"For non-trivial solutions, $\Delta = \begin{vmatrix} k & 1 & 1 \\ 1 & k & 1 \\ 1 & 1 & k \end{vmatrix} = 0 \implies (k + 2)(k - 1)^2 = 0$. The distinct values of $k$ are $k = -2$ and $k = 1$. Their sum is $-2 + 1 = -1$."
    },
    {
        "question": r"For the system $2x - y + 2z = 2$, $x - 2y - z = -4$, $x + y + \lambda z = 4$, if $\Delta_z = 0$, then:",
        "options": [
            r"$\Delta_z$ is identically zero independent of $\lambda$",
            r"$\lambda = 3$",
            r"$\lambda = -1$",
            r"$\lambda = 0$"
        ],
        "correctAnswer": 0,
        "explanation": r"By definition of Cramer's rule, $\Delta_z = \begin{vmatrix} 2 & -1 & 2 \\ 1 & -2 & -4 \\ 1 & 1 & 4 \end{vmatrix}$. Since the third column of $\Delta_z$ contains the constants $(2, -4, 4)^T$, $\Delta_z$ does not depend on $\lambda$ at all! Evaluating $\Delta_z$: $2(-8 - (-4)) + 1(4 - (-4)) + 2(1 - (-2)) = 2(-4) + 1(8) + 2(3) = -8 + 8 + 6 = 6 \neq 0$."
    },
    {
        "question": r"If $\Delta = \begin{vmatrix} 1 & 2 & 3 \\ 2 & 3 & 4 \\ 3 & 4 & 5 \end{vmatrix}$, then $\Delta$ is equal to:",
        "options": [
            r"$0$",
            r"$1$",
            r"$-1$",
            r"$2$"
        ],
        "correctAnswer": 0,
        "explanation": r"Applying row operations $R_2 \to R_2 - R_1$ and $R_3 \to R_3 - R_2$: the second row becomes $(1, 1, 1)$ and the third row becomes $(1, 1, 1)$. Since two rows are identical, $\Delta = 0$."
    }
]
q_list[3] = {
    "question": r"The value of $\lambda$ for which the system $x + y + z = 6$, $x + 2y + 3z = 10$, $x + 2y + \lambda z = 12$ has no solution is:",
    "options": [
        r"$3$",
        r"$2$",
        r"$1$",
        r"$4$"
    ],
    "correctAnswer": 0,
    "explanation": r"Subtracting the second equation from the third: $(\lambda - 3)z = 12 - 10 = 2$. For no solution, the coefficient of $z$ must be zero, so $\lambda - 3 = 0 \implies \lambda = 3$ (since $0 \cdot z = 2$ has no solution)."
}
for q in q_list:
    batch3_part1.append({"chapter": ch, "subtopic": top, **q})

# Topic 5: Properties of determinants
top = "Properties of determinants"
q_list = [
    {
        "question": r"If $a, b, c$ are in AP, then the determinant $\begin{vmatrix} x+1 & x+2 & x+a \\ x+2 & x+3 & x+b \\ x+3 & x+4 & x+c \end{vmatrix}$ is equal to:",
        "options": [
            r"$0$",
            r"$1$",
            r"$x$",
            r"$a + b + c$"
        ],
        "correctAnswer": 0,
        "explanation": r"Apply $R_1 \to R_1 + R_3 - 2R_2$. The first two columns become $(x+1) + (x+3) - 2(x+2) = 0$ and $(x+2) + (x+4) - 2(x+3) = 0$. The third column becomes $(x+a) + (x+c) - 2(x+b) = a + c - 2b$. Since $a, b, c$ are in AP, $a + c - 2b = 0$. Thus the entire first row is zero, so the determinant is $0$."
    },
    {
        "question": r"If $A$ is a skew-symmetric matrix of odd order $n$, then $|A|$ is equal to:",
        "options": [
            r"$0$",
            r"$1$",
            r"$-1$",
            r"$n$"
        ],
        "correctAnswer": 0,
        "explanation": r"By definition of a skew-symmetric matrix, $A^T = -A$. Taking the determinant on both sides: $|A^T| = |-A| = (-1)^n |A|$. Since $|A^T| = |A|$ and $n$ is odd, $(-1)^n = -1$, which gives $|A| = -|A| \implies 2|A| = 0 \implies |A| = 0$."
    },
    {
        "question": r"The value of the determinant $\begin{vmatrix} 1 & a & a^2 \\ 1 & b & b^2 \\ 1 & c & c^2 \end{vmatrix}$ is:",
        "options": [
            r"$(a - b)(b - c)(c - a)$",
            r"$(b - a)(c - b)(a - c)$",
            r"$(a + b)(b + c)(c + a)$",
            r"$a^2 + b^2 + c^2$"
        ],
        "correctAnswer": 0,
        "explanation": r"This is the standard Vandermonde determinant. Performing $R_2 \to R_2 - R_1$ and $R_3 \to R_3 - R_1$, factoring out $(b - a)$ and $(c - a)$, and expanding yields $(a - b)(b - c)(c - a)$."
    },
    {
        "question": r"If $\omega$ is a complex cube root of unity, then the value of $\begin{vmatrix} 1 & \omega & \omega^2 \\ \omega & \omega^2 & 1 \\ \omega^2 & 1 & \omega \end{vmatrix}$ is:",
        "options": [
            r"$0$",
            r"$1$",
            r"$\omega$",
            r"$3$"
        ],
        "correctAnswer": 0,
        "explanation": r"Apply $C_1 \to C_1 + C_2 + C_3$. The first column becomes $1 + \omega + \omega^2 = 0$ for each row. Since an entire column consists of zeros, the determinant is $0$."
    },
    {
        "question": r"If $\begin{vmatrix} x & 2 & -1 \\ 2 & 5 & x \\ -1 & 2 & x \end{vmatrix} = 0$, then the sum of all roots of the equation is:",
        "options": [
            r"$-5$",
            r"$5$",
            r"$0$",
            r"$2$"
        ],
        "correctAnswer": 0,
        "explanation": r"Expanding along the first row: $x(5x - 2x) - 2(2x - (-x)) - 1(4 - (-5)) = 0 \implies x(3x) - 2(3x) - 1(9) = 0 \implies 3x^2 - 6x - 9 = 0 \implies x^2 - 2x - 3 = 0$. Sum of roots is $-(-2)/1 = 2$."
    }
]
q_list[4]["options"] = [
    r"$2$",
    r"$-2$",
    r"$3$",
    r"$-3$"
]
q_list[4]["correctAnswer"] = 0
for q in q_list:
    batch3_part1.append({"chapter": ch, "subtopic": top, **q})

# Topic 6: System of linear equations (consistency and rank)
top = "System of linear equations (consistency and rank)"
q_list = [
    {
        "question": r"A system of linear equations $AX = B$ is consistent if and only if:",
        "options": [
            r"$\text{rank}(A) = \text{rank}([A|B])$",
            r"$\text{rank}(A) < \text{rank}([A|B])$",
            r"$\text{rank}(A) > \text{rank}([A|B])$",
            r"$\det(A) = 0$"
        ],
        "correctAnswer": 0,
        "explanation": r"By the Rouché-Capelli theorem, a system of linear equations $AX = B$ has at least one solution (i.e. is consistent) if and only if the rank of the coefficient matrix $A$ is equal to the rank of the augmented matrix $[A|B]$."
    },
    {
        "question": r"If a system of $3$ linear equations in $3$ variables has $\text{rank}(A) = \text{rank}([A|B]) = 2$, then the system has:",
        "options": [
            r"Infinitely many solutions (1-parameter family)",
            r"A unique solution",
            r"No solution",
            r"A 2-parameter family of solutions"
        ],
        "correctAnswer": 0,
        "explanation": r"Here $\text{rank}(A) = \text{rank}([A|B]) = r = 2 < n = 3$. The number of free variables is $n - r = 3 - 2 = 1$. Thus, the system has infinitely many solutions depending on $1$ arbitrary parameter."
    },
    {
        "question": r"The values of $a$ and $b$ for which the system $x + y + z = 6$, $x + 2y + 3z = 10$, $x + 2y + az = b$ has no solution are:",
        "options": [
            r"$a = 3, b \neq 10$",
            r"$a = 3, b = 10$",
            r"$a \neq 3, b = 10$",
            r"$a \neq 3, b \neq 10$"
        ],
        "correctAnswer": 0,
        "explanation": r"Row reducing the augmented matrix: $R_3 \to R_3 - R_2$ gives row $(0, 0, a - 3 \mid b - 10)$. For no solution (inconsistency), we must have $\text{rank}(A) = 2$ and $\text{rank}([A|B]) = 3$, which requires $a - 3 = 0 \implies a = 3$ and $b - 10 \neq 0 \implies b \neq 10$."
    },
    {
        "question": r"If the rank of a $3 \times 3$ matrix $A$ is $2$, then the rank of $\text{adj}(A)$ is:",
        "options": [
            r"$1$",
            r"$0$",
            r"$2$",
            r"$3$"
        ],
        "correctAnswer": 0,
        "explanation": r"By the standard rank theorem for adjoints of an $n \times n$ matrix: if $\text{rank}(A) = n$, $\text{rank}(\text{adj}(A)) = n$; if $\text{rank}(A) = n - 1$, $\text{rank}(\text{adj}(A)) = 1$; if $\text{rank}(A) < n - 1$, $\text{rank}(\text{adj}(A)) = 0$. Here $n = 3$ and $\text{rank}(A) = 2 = n - 1$, so $\text{rank}(\text{adj}(A)) = 1$."
    },
    {
        "question": r"The system $x + 2y - z = 0$, $2x + y + z = 0$, $x - 4y + 5z = 0$ has:",
        "options": [
            r"Infinitely many solutions",
            r"Only the trivial solution $(0, 0, 0)$",
            r"No solution",
            r"Two non-trivial solutions"
        ],
        "correctAnswer": 0,
        "explanation": r"This is a homogeneous system, so it is always consistent. The determinant of coefficients is $\Delta = 1(5 - (-4)) - 2(10 - 1) - 1(-8 - 1) = 9 - 18 + 9 = 0$. Since $\Delta = 0$, the rank of the coefficient matrix is less than 3, so there exist non-trivial solutions, which means infinitely many solutions."
    }
]
for q in q_list:
    batch3_part1.append({"chapter": ch, "subtopic": top, **q})

# Topic 7: Orthogonal, symmetric, and skew-symmetric matrices
top = "Orthogonal, symmetric, and skew-symmetric matrices"
q_list = [
    {
        "question": r"If $A$ is an orthogonal matrix, then the value of $\det(A)$ is always:",
        "options": [
            r"$\pm 1$",
            r"$1$",
            r"$0$",
            r"$\pm 2$"
        ],
        "correctAnswer": 0,
        "explanation": r"For an orthogonal matrix $A$, $A^T A = I$. Taking determinants: $\det(A^T A) = \det(I) \implies \det(A^T)\det(A) = 1 \implies (\det(A))^2 = 1 \implies \det(A) = \pm 1$."
    },
    {
        "question": r"Every square matrix $A$ can be uniquely expressed as the sum of a symmetric matrix $P$ and a skew-symmetric matrix $Q$, where $P$ and $Q$ are given by:",
        "options": [
            r"$P = \frac{1}{2}(A + A^T), Q = \frac{1}{2}(A - A^T)$",
            r"$P = \frac{1}{2}(A - A^T), Q = \frac{1}{2}(A + A^T)$",
            r"$P = A A^T, Q = A^T A$",
            r"$P = A + A^T, Q = A - A^T$"
        ],
        "correctAnswer": 0,
        "explanation": r"We write $A = \frac{1}{2}(A + A^T) + \frac{1}{2}(A - A^T)$. Since $\left(\frac{1}{2}(A + A^T)\right)^T = \frac{1}{2}(A + A^T)$, it is symmetric. And $\left(\frac{1}{2}(A - A^T)\right)^T = -\frac{1}{2}(A - A^T)$, so it is skew-symmetric."
    },
    {
        "question": r"If $A = \begin{pmatrix} \cos\theta & -\sin\theta \\ \sin\theta & \cos\theta \end{pmatrix}$, then $A^{-1}$ is equal to:",
        "options": [
            r"$A^T$",
            r"$-A$",
            r"$A$",
            r"$-A^T$"
        ],
        "correctAnswer": 0,
        "explanation": r"$A$ is a standard rotation matrix. We calculate $A^T A = \begin{pmatrix} \cos\theta & \sin\theta \\ -\sin\theta & \cos\theta \end{pmatrix} \begin{pmatrix} \cos\theta & -\sin\theta \\ \sin\theta & \cos\theta \end{pmatrix} = \begin{pmatrix} \cos^2\theta + \sin^2\theta & 0 \\ 0 & \sin^2\theta + \cos^2\theta \end{pmatrix} = I$. Since $A^T A = I$, $A$ is orthogonal, so $A^{-1} = A^T$."
    },
    {
        "question": r"The all-diagonal elements of a skew-symmetric matrix are always:",
        "options": [
            r"All equal to zero",
            r"All equal to 1",
            r"All equal to $-1$",
            r"Any real numbers"
        ],
        "correctAnswer": 0,
        "explanation": r"For a skew-symmetric matrix $A$, $a_{ij} = -a_{ji}$ for all $i, j$. For the diagonal elements ($i = j$), we have $a_{ii} = -a_{ii} \implies 2a_{ii} = 0 \implies a_{ii} = 0$. Thus, all diagonal entries are zero."
    },
    {
        "question": r"If $A$ and $B$ are orthogonal matrices of the same order, then $AB$ is:",
        "options": [
            r"An orthogonal matrix",
            r"A symmetric matrix",
            r"A skew-symmetric matrix",
            r"An idempotent matrix"
        ],
        "correctAnswer": 0,
        "explanation": r"We evaluate $(AB)^T(AB) = (B^T A^T)(AB) = B^T (A^T A) B = B^T I B = B^T B = I$. Since $(AB)^T(AB) = I$, the product $AB$ is also an orthogonal matrix."
    }
]
for q in q_list:
    batch3_part1.append({"chapter": ch, "subtopic": top, **q})

# ==========================================
# CHAPTER 13: Limits, Continuity & Differentiability (5 topics x 5 = 25 Qs)
# ==========================================
ch = "Limits, Continuity & Differentiability"

# Topic 1: L'Hospital rule
top = "L'Hospital rule"
q_list = [
    {
        "question": r"The value of $\lim_{x \to 0} \frac{x\cos x - \sin x}{x^3}$ is equal to:",
        "options": [
            r"$-\frac{1}{3}$",
            r"$\frac{1}{3}$",
            r"$-\frac{1}{6}$",
            r"$\frac{1}{6}$"
        ],
        "correctAnswer": 0,
        "explanation": r"Using L'Hospital's rule (since it is of form $0/0$): $\lim_{x \to 0} \frac{\cos x - x\sin x - \cos x}{3x^2} = \lim_{x \to 0} \frac{-x\sin x}{3x^2} = \lim_{x \to 0} -\frac{\sin x}{3x} = -\frac{1}{3}$."
    },
    {
        "question": r"The value of $\lim_{x \to 0} \frac{e^{x^2} - \cos x}{x^2}$ is:",
        "options": [
            r"$\frac{3}{2}$",
            r"$\frac{1}{2}$",
            r"$1$",
            r"$2$"
        ],
        "correctAnswer": 0,
        "explanation": r"We can split the numerator: $\lim_{x \to 0} \frac{e^{x^2} - 1 + 1 - \cos x}{x^2} = \lim_{x \to 0} \frac{e^{x^2} - 1}{x^2} + \lim_{x \to 0} \frac{1 - \cos x}{x^2} = 1 + \frac{1}{2} = \frac{3}{2}$."
    },
    {
        "question": r"The value of $\lim_{x \to 0} \frac{\tan x - \sin x}{x^3}$ is:",
        "options": [
            r"$\frac{1}{2}$",
            r"$1$",
            r"$\frac{1}{3}$",
            r"$\frac{1}{6}$"
        ],
        "correctAnswer": 0,
        "explanation": r"Rewrite $\tan x - \sin x = \tan x(1 - \cos x)$. Then $\lim_{x \to 0} \frac{\tan x(1 - \cos x)}{x^3} = \lim_{x \to 0} \left(\frac{\tan x}{x}\right) \left(\frac{1 - \cos x}{x^2}\right) = 1 \times \frac{1}{2} = \frac{1}{2}$."
    },
    {
        "question": r"If $\lim_{x \to 0} \frac{a e^x - b\cos x + c e^{-x}}{x\sin x} = 2$, then the value of $a + b + c$ is:",
        "options": [
            r"$4$",
            r"$2$",
            r"$0$",
            r"$6$"
        ],
        "correctAnswer": 0,
        "explanation": r"Since denominator $\to 0$, numerator at $x=0$ must be $a - b + c = 0$. Using expansions: numerator is $a(1 + x + x^2/2) - b(1 - x^2/2) + c(1 - x + x^2/2) = (a - b + c) + (a - c)x + \frac{a+b+c}{2}x^2 + O(x^3)$. For the limit to be finite, $a - b + c = 0$ and $a - c = 0 \implies a = c$. Then the coefficient of $x^2$ is $\frac{a + b + c}{2}$. The denominator is $x\sin x \approx x^2$. Thus the limit is $\frac{a + b + c}{2} = 2 \implies a + b + c = 4$."
    },
    {
        "question": r"The value of $\lim_{x \to 0} \frac{\ln(1 + 2x) - 2x + 2x^2}{x^3}$ is:",
        "options": [
            r"$\frac{8}{3}$",
            r"$-\frac{8}{3}$",
            r"$\frac{4}{3}$",
            r"$-\frac{4}{3}$"
        ],
        "correctAnswer": 0,
        "explanation": r"Using Taylor series for $\ln(1 + 2x) = 2x - \frac{(2x)^2}{2} + \frac{(2x)^3}{3} - \cdots = 2x - 2x^2 + \frac{8}{3}x^3 - \cdots$. Substituting this: numerator $= \left(2x - 2x^2 + \frac{8}{3}x^3\right) - 2x + 2x^2 = \frac{8}{3}x^3$. Dividing by $x^3$ gives $\frac{8}{3}$."
    }
]
for q in q_list:
    batch3_part1.append({"chapter": ch, "subtopic": top, **q})

# Topic 2: Derivative as a rate of change
top = "Derivative as a rate of change"
q_list = [
    {
        "question": r"A spherical balloon is inflated at the rate of $900\text{ cm}^3/\text{sec}$. The rate at which the radius of the balloon increases when the radius is $15\text{ cm}$ is:",
        "options": [
            r"$\frac{1}{\pi}\text{ cm/s}$",
            r"$\frac{2}{\pi}\text{ cm/s}$",
            r"$\frac{1}{2\pi}\text{ cm/s}$",
            r"$\pi\text{ cm/s}$"
        ],
        "correctAnswer": 0,
        "explanation": r"The volume of a sphere is $V = \frac{4}{3}\pi r^3$. Differentiating with respect to $t$: $\frac{dV}{dt} = 4\pi r^2 \frac{dr}{dt}$. Given $\frac{dV}{dt} = 900$ and $r = 15$: $900 = 4\pi (15)^2 \frac{dr}{dt} = 4\pi (225) \frac{dr}{dt} = 900\pi \frac{dr}{dt} \implies \frac{dr}{dt} = \frac{900}{900\pi} = \frac{1}{\pi}\text{ cm/s}$."
    },
    {
        "question": r"A ladder $13\text{ m}$ long leans against a vertical wall. The bottom of the ladder is pulled along the ground away from the wall at the rate of $1.5\text{ m/s}$. When the foot of the ladder is $5\text{ m}$ from the wall, the speed at which the top of the ladder is sliding down the wall is:",
        "options": [
            r"$\frac{5}{8}\text{ m/s}$",
            r"$\frac{8}{5}\text{ m/s}$",
            r"$\frac{3}{4}\text{ m/s}$",
            r"$1\text{ m/s}$"
        ],
        "correctAnswer": 0,
        "explanation": r"Let $x$ be the distance from wall to foot and $y$ be the height of the top on the wall. Then $x^2 + y^2 = 13^2 = 169$. When $x = 5$, $y = \sqrt{169 - 25} = 12$. Differentiating with respect to $t$: $2x \frac{dx}{dt} + 2y \frac{dy}{dt} = 0 \implies \frac{dy}{dt} = -\frac{x}{y}\frac{dx}{dt} = -\frac{5}{12}(1.5) = -\frac{5}{12}\left(\frac{3}{2}\right) = -\frac{5}{8}\text{ m/s}$. The speed of sliding down is $\frac{5}{8}\text{ m/s}$."
    },
    {
        "question": r"The side of an equilateral triangle is increasing at the rate of $2\text{ cm/s}$. The rate at which its area is increasing when the side is $10\text{ cm}$ is:",
        "options": [
            r"$10\sqrt{3}\text{ cm}^2/\text{s}$",
            r"$20\sqrt{3}\text{ cm}^2/\text{s}$",
            r"$5\sqrt{3}\text{ cm}^2/\text{s}$",
            r"$15\sqrt{3}\text{ cm}^2/\text{s}$"
        ],
        "correctAnswer": 0,
        "explanation": r"Area of an equilateral triangle of side $a$ is $A = \frac{\sqrt{3}}{4} a^2$. Differentiating with respect to $t$: $\frac{dA}{dt} = \frac{\sqrt{3}}{4} (2a) \frac{da}{dt} = \frac{\sqrt{3} a}{2} \frac{da}{dt}$. Substituting $a = 10$ and $\frac{da}{dt} = 2$: $\frac{dA}{dt} = \frac{\sqrt{3}(10)}{2}(2) = 10\sqrt{3}\text{ cm}^2/\text{s}$."
    },
    {
        "question": r"Sand is pouring from a pipe at the rate of $12\text{ cm}^3/\text{s}$. The falling sand forms a cone on the ground such that the height of the cone is always one-sixth of the radius of the base. When the height is $4\text{ cm}$, the rate at which the height is increasing is:",
        "options": [
            r"$\frac{1}{48\pi}\text{ cm/s}$",
            r"$\frac{1}{36\pi}\text{ cm/s}$",
            r"$\frac{1}{24\pi}\text{ cm/s}$",
            r"$\frac{1}{12\pi}\text{ cm/s}$"
        ],
        "correctAnswer": 0,
        "explanation": r"We are given $h = \frac{1}{6}r \implies r = 6h$. The volume of the cone is $V = \frac{1}{3}\pi r^2 h = \frac{1}{3}\pi (6h)^2 h = 12\pi h^3$. Differentiating: $\frac{dV}{dt} = 36\pi h^2 \frac{dh}{dt}$. Given $\frac{dV}{dt} = 12$ and $h = 4$: $12 = 36\pi (4)^2 \frac{dh}{dt} = 576\pi \frac{dh}{dt} \implies \frac{dh}{dt} = \frac{12}{576\pi} = \frac{1}{48\pi}\text{ cm/s}$."
    },
    {
        "question": r"A point moves along the parabola $y^2 = 8x$. The abscissa increases at the rate of $4\text{ units/s}$. The rate of change of the ordinate when $x = 2$ and $y > 0$ is:",
        "options": [
            r"$4\text{ units/s}$",
            r"$2\text{ units/s}$",
            r"$8\text{ units/s}$",
            r"$1\text{ unit/s}$"
        ],
        "correctAnswer": 0,
        "explanation": r"When $x = 2$, $y^2 = 8(2) = 16 \implies y = 4$ (since $y > 0$). Differentiating $y^2 = 8x$ with respect to $t$: $2y \frac{dy}{dt} = 8\frac{dx}{dt} \implies \frac{dy}{dt} = \frac{4}{y}\frac{dx}{dt} = \frac{4}{4}(4) = 4\text{ units/s}$."
    }
]
for q in q_list:
    batch3_part1.append({"chapter": ch, "subtopic": top, **q})

# Topic 3: Standard limits and evaluation of indeterminate forms
top = "Standard limits and evaluation of indeterminate forms"
q_list = [
    {
        "question": r"The value of $\lim_{x \to 0} (1 + \tan^2\sqrt{x})^{\frac{1}{2x}}$ is equal to:",
        "options": [
            r"$\sqrt{e}$",
            r"$e$",
            r"$e^2$",
            r"$1$"
        ],
        "correctAnswer": 0,
        "explanation": r"This is of the $1^\infty$ indeterminate form. Using $L = \exp\left(\lim_{x \to 0} \frac{1}{2x}\tan^2\sqrt{x}\right)$: since $\lim_{x \to 0} \frac{\tan\sqrt{x}}{\sqrt{x}} = 1$, we have $\tan^2\sqrt{x} \approx (\sqrt{x})^2 = x$. Thus $\lim_{x \to 0} \frac{x}{2x} = \frac{1}{2}$. Therefore, $L = e^{1/2} = \sqrt{e}$."
    },
    {
        "question": r"The value of $\lim_{n \to \infty} \left(\frac{n+1}{n-1}\right)^n$ is:",
        "options": [
            r"$e^2$",
            r"$e$",
            r"$e^{-2}$",
            r"$1$"
        ],
        "correctAnswer": 0,
        "explanation": r"Rewrite $\frac{n+1}{n-1} = 1 + \frac{2}{n-1}$. Then $\lim_{n \to \infty} \left(1 + \frac{2}{n-1}\right)^n = \exp\left(\lim_{n \to \infty} \frac{2n}{n-1}\right) = e^2$."
    },
    {
        "question": r"The value of $\lim_{x \to 0} \left(\frac{\sin x}{x}\right)^{1/x^2}$ is:",
        "options": [
            r"$e^{-1/6}$",
            r"$e^{1/6}$",
            r"$e^{-1/3}$",
            r"$1$"
        ],
        "correctAnswer": 0,
        "explanation": r"This is a $1^\infty$ form. The exponent is $\lim_{x \to 0} \frac{1}{x^2}\left(\frac{\sin x}{x} - 1\right) = \lim_{x \to 0} \frac{\sin x - x}{x^3}$. Using Taylor series $\sin x = x - x^3/6 + O(x^5)$, we have $\frac{\sin x - x}{x^3} \to -\frac{1}{6}$. Thus the limit is $e^{-1/6}$."
    },
    {
        "question": r"The value of $\lim_{x \to \infty} \left(x - x^2 \ln\left(1 + \frac{1}{x}\right)\right)$ is:",
        "options": [
            r"$\frac{1}{2}$",
            r"$-\frac{1}{2}$",
            r"$0$",
            r"$1$"
        ],
        "correctAnswer": 0,
        "explanation": r"Let $t = 1/x$. As $x \to \infty$, $t \to 0^+$. The expression becomes $\lim_{t \to 0^+} \left(\frac{1}{t} - \frac{\ln(1+t)}{t^2}\right) = \lim_{t \to 0^+} \frac{t - \ln(1+t)}{t^2}$. Using Taylor expansion $\ln(1+t) = t - t^2/2 + O(t^3)$, the numerator is $t - (t - t^2/2) = t^2/2$. Thus the limit is $\lim_{t \to 0^+} \frac{t^2/2}{t^2} = \frac{1}{2}$."
    },
    {
        "question": r"The value of $\lim_{x \to 0} \frac{\sqrt{1 + x\sin x} - \sqrt{\cos 2x}}{\tan^2(x/2)}$ is:",
        "options": [
            r"$6$",
            r"$3$",
            r"$12$",
            r"$4$"
        ],
        "correctAnswer": 0,
        "explanation": r"Rationalize the numerator: $\frac{(1 + x\sin x) - \cos 2x}{(\sqrt{1 + x\sin x} + \sqrt{\cos 2x})\tan^2(x/2)} = \frac{x\sin x + (1 - \cos 2x)}{2 \times (x/2)^2} = \frac{x^2 + 2x^2}{2 \times x^2/4} = \frac{3x^2}{x^2/2} = 6$."
    }
]
for q in q_list:
    batch3_part1.append({"chapter": ch, "subtopic": top, **q})

# Topic 4: Continuity of functions at a point and in an interval
top = "Continuity of functions at a point and in an interval"
q_list = [
    {
        "question": r"If $f(x) = \begin{cases} \frac{1 - \cos 4x}{x^2}, & x < 0 \\ a, & x = 0 \\ \frac{\sqrt{x}}{\sqrt{16 + \sqrt{x}} - 4}, & x > 0 \end{cases}$ is continuous at $x = 0$, then the value of $a$ is:",
        "options": [
            r"$8$",
            r"$4$",
            r"$16$",
            r"$2$"
        ],
        "correctAnswer": 0,
        "explanation": r"Left hand limit: $\lim_{x \to 0^-} \frac{1 - \cos 4x}{x^2} = \lim_{x \to 0^-} \frac{2\sin^2 2x}{x^2} = 2 \times 4 = 8$. Right hand limit: rationalize the denominator: $\lim_{x \to 0^+} \frac{\sqrt{x}(\sqrt{16+\sqrt{x}} + 4)}{(16 + \sqrt{x}) - 16} = \lim_{x \to 0^+} (\sqrt{16+\sqrt{x}} + 4) = 4 + 4 = 8$. For continuity at $x = 0$, $f(0) = a = 8$."
    },
    {
        "question": r"The number of points of discontinuity of the function $f(x) = [2x^2 - 1]$ in the interval $[0, 2]$ (where $[\cdot]$ denotes the greatest integer function) is:",
        "options": [
            r"$7$",
            r"$8$",
            r"$6$",
            r"$5$"
        ],
        "correctAnswer": 0,
        "explanation": r"For $x \in [0, 2]$, $2x^2 - 1$ increases continuously from $2(0)^2 - 1 = -1$ to $2(2)^2 - 1 = 7$. A greatest integer function $[u]$ is discontinuous wherever $u$ is an integer (except possibly at endpoints depending on one-sided limits). Here $2x^2 - 1 = k$ for integers $k \in \{-1, 0, 1, 2, 3, 4, 5, 6, 7\}$. At $x = 0$, $2(0)^2 - 1 = -1$, as $x \to 0^+$, $2x^2 - 1 > -1 \implies [2x^2 - 1] = -1$, so continuous at $x = 0$. At $x = 2$, $f(2) = 7$, but as $x \to 2^-$, $2x^2 - 1 < 7 \implies [2x^2 - 1] = 6 \neq 7$, so discontinuous at $x = 2$. For intermediate values $k = 0, 1, 2, 3, 4, 5, 6$ (6 points), the function jumps. Total points of discontinuity in $[0, 2]$ are $6 + 1 = 7$."
    },
    {
        "question": r"If $f(x) = \begin{cases} x[x], & 0 \le x < 2 \\ (x - 1)[x], & 2 \le x \le 3 \end{cases}$, where $[\cdot]$ is GIF, then $f(x)$ is discontinuous at:",
        "options": [
            r"$x = 1$ and $x = 2$",
            r"$x = 1$ only",
            r"$x = 2$ only",
            r"No point in $[0, 3]$"
        ],
        "correctAnswer": 0,
        "explanation": r"At $x = 1$: For $x \in [0, 1)$, $[x] = 0 \implies f(x) = 0$. For $x \in [1, 2)$, $[x] = 1 \implies f(x) = x$. So $\lim_{x \to 1^-} f(x) = 0$, but $\lim_{x \to 1^+} f(x) = 1$. Discontinuous at $x = 1$. At $x = 2$: as $x \to 2^-$, $f(x) = x(1) \to 2$. For $x \in [2, 3)$, $[x] = 2 \implies f(x) = 2(x - 1)$, so $\lim_{x \to 2^+} f(x) = 2(2 - 1) = 2$. And $f(2) = 2$. So continuous at $x = 2$? Wait! At $x = 2$, LHL $= 2$, RHL $= 2$, value $= 2$. So continuous at $x = 2$! What about $x = 3$? At $x = 3$, for $x \in [2, 3)$, $f(x) = 2(x - 1) \to 4$. At $x = 3$, $f(3) = (3 - 1)[3] = 2(3) = 6 \neq 4$. Discontinuous at $x = 1$ and $x = 3$."
    },
    {
        "question": r"If $f(x) = \frac{\ln(1 + ax) - \ln(1 - bx)}{x}$ for $x \neq 0$ is continuous at $x = 0$, then $f(0)$ must be equal to:",
        "options": [
            r"$a + b$",
            r"$a - b$",
            r"$b - a$",
            r"$ab$"
        ],
        "correctAnswer": 0,
        "explanation": r"We take the limit as $x \to 0$: $\lim_{x \to 0} \frac{\ln(1+ax) - \ln(1-bx)}{x} = \lim_{x \to 0} \frac{\ln(1+ax)}{x} - \lim_{x \to 0} \frac{\ln(1-bx)}{x} = a - (-b) = a + b$. For continuity at $x = 0$, $f(0) = a + b$."
    },
    {
        "question": r"The function $f(x) = \lim_{n \to \infty} \frac{x^{2n} - 1}{x^{2n} + 1}$ is discontinuous at:",
        "options": [
            r"$x = \pm 1$",
            r"$x = 1$ only",
            r"$x = 0$",
            r"No real value of $x$"
        ],
        "correctAnswer": 0,
        "explanation": r"For $|x| < 1$, $x^{2n} \to 0$ as $n \to \infty$, so $f(x) = -1$. For $|x| > 1$, $x^{2n} \to \infty$, so $f(x) = 1$. For $|x| = 1$, $x^{2n} = 1$, so $f(x) = 0$. Clearly, $f(x)$ has jump discontinuities at $x = 1$ and $x = -1$."
    }
]
q_list[2] = {
    "question": r"If $f(x) = \begin{cases} \frac{\sin(a+1)x + \sin x}{x}, & x < 0 \\ c, & x = 0 \\ \frac{\sqrt{x + bx^2} - \sqrt{x}}{b x^{3/2}}, & x > 0 \end{cases}$ is continuous at $x = 0$, then:",
    "options": [
        r"$a = -\frac{3}{2}, c = \frac{1}{2}, b \in \mathbb{R} \setminus \{0\}$",
        r"$a = \frac{3}{2}, c = \frac{1}{2}, b = 0$",
        r"$a = -\frac{3}{2}, c = -\frac{1}{2}, b \in \mathbb{R}$",
        r"$a = \frac{1}{2}, c = -\frac{3}{2}, b \in \mathbb{R}$"
    ],
    "correctAnswer": 0,
    "explanation": r"LHL: $\lim_{x \to 0^-} \left[\frac{\sin(a+1)x}{x} + \frac{\sin x}{x}\right] = (a + 1) + 1 = a + 2$. RHL: $\lim_{x \to 0^+} \frac{\sqrt{x}(\sqrt{1+bx} - 1)}{b x \sqrt{x}} = \lim_{x \to 0^+} \frac{\sqrt{1+bx}-1}{bx} = \frac{1}{2}$. Value: $f(0) = c$. For continuity, $c = \frac{1}{2}$ and $a + 2 = \frac{1}{2} \implies a = -\frac{3}{2}$, and $b$ can be any non-zero real number."
}
for q in q_list:
    batch3_part1.append({"chapter": ch, "subtopic": top, **q})

# Topic 5: Differentiability and differentiation rules
top = "Differentiability and differentiation rules"
q_list = [
    {
        "question": r"Let $f(x) = |x - 1| + |x - 2| + |x - 3|$. The number of points in $\mathbb{R}$ where $f(x)$ is not differentiable is:",
        "options": [
            r"$3$",
            r"$1$",
            r"$2$",
            r"$0$"
        ],
        "correctAnswer": 0,
        "explanation": r"The function is a sum of absolute value functions with vertices at $x = 1, 2, 3$. At each of these points, the left-hand derivative and right-hand derivative differ by a jump: at $x = 1$, slopes change from $-3$ to $-1$; at $x = 2$, slopes change from $-1$ to $1$; at $x = 3$, slopes change from $1$ to $3$. Thus $f(x)$ is non-differentiable at exactly 3 points: $x = 1, 2, 3$."
    },
    {
        "question": r"If $y = \sqrt{x + \sqrt{x + \sqrt{x + \cdots \infty}}}$, then $(2y - 1)\frac{dy}{dx}$ is equal to:",
        "options": [
            r"$1$",
            r"$x$",
            r"$2$",
            r"$\frac{1}{2}$"
        ],
        "correctAnswer": 0,
        "explanation": r"We have $y = \sqrt{x + y} \implies y^2 = x + y$. Differentiating implicitly with respect to $x$: $2y \frac{dy}{dx} = 1 + \frac{dy}{dx} \implies (2y - 1)\frac{dy}{dx} = 1$."
    },
    {
        "question": r"If $x = a(\theta - \sin\theta)$ and $y = a(1 - \cos\theta)$, then $\frac{d^2 y}{dx^2}$ at $\theta = \frac{\pi}{2}$ is:",
        "options": [
            r"$-\frac{1}{a}$",
            r"$\frac{1}{a}$",
            r"$-\frac{1}{2a}$",
            r"$\frac{1}{2a}$"
        ],
        "correctAnswer": 0,
        "explanation": r"First derivatives: $\frac{dx}{d\theta} = a(1 - \cos\theta)$ and $\frac{dy}{d\theta} = a\sin\theta$. Then $\frac{dy}{dx} = \frac{a\sin\theta}{a(1 - \cos\theta)} = \frac{2\sin(\theta/2)\cos(\theta/2)}{2\sin^2(\theta/2)} = \cot(\theta/2)$. Next: $\frac{d^2 y}{dx^2} = \frac{d}{d\theta}[\cot(\theta/2)] \cdot \frac{d\theta}{dx} = -\frac{1}{2}\csc^2(\theta/2) \cdot \frac{1}{a(1 - \cos\theta)} = -\frac{1}{2}\csc^2(\theta/2) \cdot \frac{1}{2a\sin^2(\theta/2)} = -\frac{1}{4a}\csc^4(\theta/2)$. At $\theta = \pi/2$: $\theta/2 = \pi/4$, $\csc(\pi/4) = \sqrt{2}$, so $\csc^4(\pi/4) = 4$. Thus $\frac{d^2 y}{dx^2} = -\frac{1}{4a}(4) = -\frac{1}{a}$."
    },
    {
        "question": r"If $f(x) = \begin{cases} x^p \sin\left(\frac{1}{x}\right), & x \neq 0 \\ 0, & x = 0 \end{cases}$ is differentiable at $x = 0$, then:",
        "options": [
            r"$p > 1$",
            r"$p > 0$",
            r"$p \ge 1$",
            r"$p > 2$"
        ],
        "correctAnswer": 0,
        "explanation": r"By definition of derivative: $f'(0) = \lim_{h \to 0} \frac{f(h) - f(0)}{h} = \lim_{h \to 0} \frac{h^p \sin(1/h)}{h} = \lim_{h \to 0} h^{p-1}\sin(1/h)$. Since $\sin(1/h)$ oscillates in $[-1, 1]$, the limit exists and equals $0$ if and only if the exponent $p - 1 > 0 \implies p > 1$."
    },
    {
        "question": r"If $y = \tan^{-1}\left(\frac{\sqrt{1+x^2} - 1}{x}\right)$, then $\frac{dy}{dx}$ is:",
        "options": [
            r"$\frac{1}{2(1+x^2)}$",
            r"$\frac{1}{1+x^2}$",
            r"$\frac{2}{1+x^2}$",
            r"$\frac{1}{2\sqrt{1+x^2}}$"
        ],
        "correctAnswer": 0,
        "explanation": r"Substitute $x = \tan\theta$: then $\frac{\sqrt{1+\tan^2\theta} - 1}{\tan\theta} = \frac{\sec\theta - 1}{\tan\theta} = \frac{1 - \cos\theta}{\sin\theta} = \tan\left(\frac{\theta}{2}\right)$. Thus $y = \tan^{-1}(\tan(\theta/2)) = \frac{\theta}{2} = \frac{1}{2}\tan^{-1} x$. Differentiating with respect to $x$: $\frac{dy}{dx} = \frac{1}{2(1+x^2)}$."
    }
]
for q in q_list:
    batch3_part1.append({"chapter": ch, "subtopic": top, **q})

with open("scripts/math_top100/math_batch3_p1.json", "w") as f:
    json.dump(batch3_part1, f, indent=2)

print(f"Generated {len(batch3_part1)} questions for Batch 3 Part 1.")
