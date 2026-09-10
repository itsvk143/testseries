import json

batch4_part1 = []

# ==========================================
# CHAPTER 16: Differential Equations (6 topics x 5 = 30 Qs)
# ==========================================
ch = "Differential Equations"

# Topic 1: Order and degree
top = "Order and degree"
q_list = [
    {
        "question": r"The order and degree of the differential equation $\left[1 + \left(\frac{dy}{dx}\right)^2\right]^{3/2} = \frac{d^2 y}{dx^2}$ are respectively:",
        "options": [
            r"$2$ and $2$",
            r"$2$ and $3$",
            r"$1$ and $2$",
            r"$2$ and $1$"
        ],
        "correctAnswer": 0,
        "explanation": r"Squaring both sides to make the equation polynomial in derivatives: $\left[1 + \left(\frac{dy}{dx}\right)^2\right]^3 = \left(\frac{d^2 y}{dx^2}\right)^2$. The highest order derivative is $\frac{d^2 y}{dx^2}$, so the order is $2$. Its power is $2$, so the degree is $2$."
    },
    {
        "question": r"The degree of the differential equation $\frac{d^2 y}{dx^2} + 3\left(\frac{dy}{dx}\right)^2 = \ln\left(\frac{d^2 y}{dx^2}\right)$ is:",
        "options": [
            r"Not defined",
            r"$1$",
            r"$2$",
            r"$3$"
        ],
        "correctAnswer": 0,
        "explanation": r"The differential equation cannot be expressed as a polynomial equation in derivatives due to the term $\ln\left(\frac{d^2 y}{dx^2}\right)$. Hence, its degree is not defined."
    },
    {
        "question": r"The order of the differential equation of all circles of given radius $a$ in the xy-plane is:",
        "options": [
            r"$2$",
            r"$3$",
            r"$1$",
            r"$4$"
        ],
        "correctAnswer": 0,
        "explanation": r"The family of all circles of given radius $a$ is $(x - h)^2 + (y - k)^2 = a^2$. There are two independent arbitrary constants ($h$ and $k$). Hence, eliminating them requires differentiating twice, giving a differential equation of order $2$."
    },
    {
        "question": r"The order and degree of the differential equation $\sqrt{\frac{dy}{dx}} - 4\frac{dy}{dx} - 7x = 0$ are:",
        "options": [
            r"$1$ and $2$",
            r"$1$ and $1$",
            r"$2$ and $1$",
            r"$1$ and $4$"
        ],
        "correctAnswer": 0,
        "explanation": r"Rewrite as $\sqrt{\frac{dy}{dx}} = 4\frac{dy}{dx} + 7x$. Squaring both sides: $\frac{dy}{dx} = \left(4\frac{dy}{dx} + 7x\right)^2 = 16\left(\frac{dy}{dx}\right)^2 + 56x\frac{dy}{dx} + 49x^2$. The highest derivative is $\frac{dy}{dx}$ (order $1$) and its highest exponent is $2$ (degree $2$)."
    },
    {
        "question": r"The differential equation corresponding to the family of curves $y = c_1 e^{2x} + c_2 e^{-2x}$ has order:",
        "options": [
            r"$2$",
            r"$1$",
            r"$3$",
            r"$4$"
        ],
        "correctAnswer": 0,
        "explanation": r"The general solution contains two independent arbitrary constants $c_1$ and $c_2$. Differentiating twice: $y' = 2c_1 e^{2x} - 2c_2 e^{-2x}$, and $y'' = 4c_1 e^{2x} + 4c_2 e^{-2x} = 4y \implies y'' - 4y = 0$, which is of order $2$."
    }
]
for q in q_list:
    batch4_part1.append({"chapter": ch, "subtopic": top, **q})

# Topic 2: Separation of variables
top = "Separation of variables"
q_list = [
    {
        "question": r"The solution of the differential equation $\frac{dy}{dx} = e^{x - y} + x^2 e^{-y}$ is:",
        "options": [
            r"$e^y = e^x + \frac{x^3}{3} + C$",
            r"$e^y = e^x + x^3 + C$",
            r"$e^{-y} = e^x + \frac{x^3}{3} + C$",
            r"$e^y = e^{-x} + \frac{x^3}{3} + C$"
        ],
        "correctAnswer": 0,
        "explanation": r"Rewrite the equation: $\frac{dy}{dx} = e^{-y}(e^x + x^2) \implies e^y dy = (e^x + x^2) dx$. Integrating both sides: $\int e^y dy = \int (e^x + x^2) dx \implies e^y = e^x + \frac{x^3}{3} + C$."
    },
    {
        "question": r"The general solution of the differential equation $\frac{dy}{dx} = \frac{1 + y^2}{1 + x^2}$ is:",
        "options": [
            r"$y - x = C(1 + xy)$",
            r"$y + x = C(1 - xy)$",
            r"$y - x = C(1 - xy)$",
            r"$xy = C$"
        ],
        "correctAnswer": 0,
        "explanation": r"Separating variables: $\frac{dy}{1 + y^2} = \frac{dx}{1 + x^2}$. Integrating: $\tan^{-1} y = \tan^{-1} x + \tan^{-1} C \implies \tan^{-1} y - \tan^{-1} x = \tan^{-1} C \implies \tan^{-1}\left(\frac{y - x}{1 + xy}\right) = \tan^{-1} C \implies \frac{y - x}{1 + xy} = C \implies y - x = C(1 + xy)$."
    },
    {
        "question": r"The curve passing through $(1, 1)$ whose slope at any point $(x, y)$ is $\frac{2y}{x}$ has the equation:",
        "options": [
            r"$y = x^2$",
            r"$y^2 = x$",
            r"$y = 2x - 1$",
            r"$y = x^3$"
        ],
        "correctAnswer": 0,
        "explanation": r"$\frac{dy}{dx} = \frac{2y}{x} \implies \frac{dy}{y} = 2\frac{dx}{x} \implies \ln y = 2\ln x + \ln C = \ln(C x^2) \implies y = C x^2$. Since it passes through $(1, 1)$, $1 = C(1)^2 \implies C = 1$. Thus $y = x^2$."
    },
    {
        "question": r"The solution of $(x^2 - y x^2)\frac{dy}{dx} + y^2 + x y^2 = 0$ is:",
        "options": [
            r"$\ln\left|\frac{x}{y}\right| - \frac{1}{x} - \frac{1}{y} = C$",
            r"$\ln|xy| + \frac{1}{x} + \frac{1}{y} = C$",
            r"$\ln\left|\frac{y}{x}\right| + \frac{1}{x} + \frac{1}{y} = C$",
            r"$\frac{x}{y} + \frac{1}{x} - \frac{1}{y} = C$"
        ],
        "correctAnswer": 0,
        "explanation": r"Factor: $x^2(1 - y) dy + y^2(1 + x) dx = 0 \implies \frac{1 - y}{y^2} dy + \frac{1 + x}{x^2} dx = 0 \implies \left(\frac{1}{y^2} - \frac{1}{y}\right) dy + \left(\frac{1}{x^2} + \frac{1}{x}\right) dx = 0$. Integrating: $-\frac{1}{y} - \ln|y| - \frac{1}{x} + \ln|x| = C \implies \ln\left|\frac{x}{y}\right| - \frac{1}{x} - \frac{1}{y} = C$."
    },
    {
        "question": r"If $\frac{dy}{dx} = \cos(x + y) + \sin(x + y)$, then substituting $u = x + y$ transforms the equation into a separable form. The general solution satisfies:",
        "options": [
            r"$\ln|1 + \tan u| = x + C$ (for simplified form)",
            r"$\int \frac{du}{1 + \cos u + \sin u} = x + C$",
            r"$\tan(u/2) = x + C$",
            r"$\cos u + \sin u = x + C$"
        ],
        "correctAnswer": 1,
        "explanation": r"Let $u = x + y \implies \frac{du}{dx} = 1 + \frac{dy}{dx} \implies \frac{dy}{dx} = \frac{du}{dx} - 1$. The equation becomes $\frac{du}{dx} - 1 = \cos u + \sin u \implies \frac{du}{dx} = 1 + \cos u + \sin u \implies \int \frac{du}{1 + \cos u + \sin u} = \int dx = x + C$."
    }
]
for q in q_list:
    batch4_part1.append({"chapter": ch, "subtopic": top, **q})

# Topic 3: Linear differential equations
top = "Linear differential equations"
q_list = [
    {
        "question": r"The integrating factor of the differential equation $\frac{dy}{dx} + y\tan x = \sec x$ is:",
        "options": [
            r"$\sec x$",
            r"$\cos x$",
            r"$\tan x$",
            r"$e^{\sec x}$"
        ],
        "correctAnswer": 0,
        "explanation": r"Here $P(x) = \tan x$. The integrating factor is $\text{IF} = e^{\int P(x)dx} = e^{\int \tan x dx} = e^{\ln|\sec x|} = \sec x$."
    },
    {
        "question": r"The solution of the differential equation $x\frac{dy}{dx} + 2y = x^2$ (with $x > 0$) is:",
        "options": [
            r"$y = \frac{x^2}{4} + \frac{C}{x^2}$",
            r"$y = \frac{x^2}{2} + \frac{C}{x^2}$",
            r"$y = \frac{x^4}{4} + C$",
            r"$y = x^2 + \frac{C}{x}$"
        ],
        "correctAnswer": 0,
        "explanation": r"Standard form: $\frac{dy}{dx} + \frac{2}{x}y = x$. $\text{IF} = e^{\int (2/x)dx} = e^{2\ln x} = x^2$. Multiplying by $\text{IF}$: $y \cdot x^2 = \int x \cdot x^2 dx = \int x^3 dx = \frac{x^4}{4} + C \implies y = \frac{x^2}{4} + \frac{C}{x^2}$."
    },
    {
        "question": r"If the integrating factor of $(x + 2y^3)\frac{dy}{dx} = y$ is $I(y)$, then $I(y)$ is equal to:",
        "options": [
            r"$\frac{1}{y}$",
            r"$y$",
            r"$\frac{1}{y^2}$",
            r"$y^2$"
        ],
        "correctAnswer": 0,
        "explanation": r"Rewrite as $\frac{dx}{dy} = \frac{x + 2y^3}{y} = \frac{x}{y} + 2y^2 \implies \frac{dx}{dy} - \frac{1}{y}x = 2y^2$. This is a linear DE in $x$ with $P(y) = -1/y$. The integrating factor is $\text{IF} = e^{\int -1/y dy} = e^{-\ln y} = \frac{1}{y}$."
    },
    {
        "question": r"The solution of the differential equation $(1 + x^2)\frac{dy}{dx} + 2xy - 4x^2 = 0$ with $y(0) = 0$ is:",
        "options": [
            r"$y = \frac{4x^3}{3(1 + x^2)}$",
            r"$y = \frac{4x^3}{1 + x^2}$",
            r"$y = \frac{x^3}{1 + x^2}$",
            r"$y = \frac{4x^2}{3(1 + x^2)}$"
        ],
        "correctAnswer": 0,
        "explanation": r"Standard form: $\frac{dy}{dx} + \frac{2x}{1+x^2}y = \frac{4x^2}{1+x^2}$. $\text{IF} = e^{\int \frac{2x}{1+x^2}dx} = e^{\ln(1+x^2)} = 1 + x^2$. The solution is $y(1 + x^2) = \int \frac{4x^2}{1+x^2}(1 + x^2)dx = \int 4x^2 dx = \frac{4x^3}{3} + C$. Given $y(0) = 0 \implies C = 0$. Thus $y = \frac{4x^3}{3(1 + x^2)}$."
    },
    {
        "question": r"If $y(x)$ satisfies $\frac{dy}{dx} + y = 2e^{-x}$ and $y(0) = 1$, then $y(1)$ is equal to:",
        "options": [
            r"$\frac{3}{e}$",
            r"$\frac{2}{e}$",
            r"$\frac{1}{e}$",
            r"$3e$"
        ],
        "correctAnswer": 0,
        "explanation": r"$\text{IF} = e^{\int 1 dx} = e^x$. The equation becomes $y e^x = \int 2e^{-x} e^x dx = \int 2 dx = 2x + C \implies y = (2x + C)e^{-x}$. Given $y(0) = 1 \implies 1 = (0 + C)e^0 \implies C = 1$. Thus $y(x) = (2x + 1)e^{-x}$. At $x = 1$: $y(1) = (2(1) + 1)e^{-1} = \frac{3}{e}$."
    }
]
for q in q_list:
    batch4_part1.append({"chapter": ch, "subtopic": top, **q})

# Topic 4: Homogeneous equations
top = "Homogeneous equations"
q_list = [
    {
        "question": r"The general solution of the homogeneous differential equation $(x^2 + y^2)dx - 2xy dy = 0$ is:",
        "options": [
            r"$x^2 - y^2 = Cx$",
            r"$x^2 + y^2 = Cx$",
            r"$x^2 - y^2 = Cy$",
            r"$x^2 + y^2 = Cy$"
        ],
        "correctAnswer": 0,
        "explanation": r"We have $\frac{dy}{dx} = \frac{x^2 + y^2}{2xy}$. Let $y = vx \implies \frac{dy}{dx} = v + x\frac{dv}{dx}$. Then $v + x\frac{dv}{dx} = \frac{1 + v^2}{2v} \implies x\frac{dv}{dx} = \frac{1 + v^2 - 2v^2}{2v} = \frac{1 - v^2}{2v} \implies \frac{2v}{1 - v^2} dv = \frac{dx}{x}$. Integrating: $-\ln|1 - v^2| = \ln|x| + \ln C_1 \implies \ln|x(1 - v^2)| = -\ln C_1 = \ln C \implies x(1 - y^2/x^2) = C \implies \frac{x^2 - y^2}{x} = C \implies x^2 - y^2 = Cx$."
    },
    {
        "question": r"The substitution $y = vx$ transforms the differential equation $x^2 \frac{dy}{dx} = xy + y^2$ into:",
        "options": [
            r"$\frac{dv}{v^2} = \frac{dx}{x}$",
            r"$\frac{dv}{v} = \frac{dx}{x}$",
            r"$\frac{dv}{1+v} = \frac{dx}{x}$",
            r"$v dv = \frac{dx}{x}$"
        ],
        "correctAnswer": 0,
        "explanation": r"Divide by $x^2$: $\frac{dy}{dx} = \frac{y}{x} + \left(\frac{y}{x}\right)^2$. With $y = vx$ and $\frac{dy}{dx} = v + x\frac{dv}{dx}$: $v + x\frac{dv}{dx} = v + v^2 \implies x\frac{dv}{dx} = v^2 \implies \frac{dv}{v^2} = \frac{dx}{x}$."
    },
    {
        "question": r"The curve passing through $(1, 0)$ and satisfying $(x^2 + y^2)dx + 2xy dy = 0$ is:",
        "options": [
            r"$x(x^2 + 3y^2) = 1$",
            r"$x^2 + y^2 = 1$",
            r"$x(x^2 - 3y^2) = 1$",
            r"$x^3 + 3xy^2 = 0$"
        ],
        "correctAnswer": 0,
        "explanation": r"Notice that $(x^2 dx + 2xy dy) + y^2 dx = 0 \implies d(x^3/3 + xy^2) = 0 \implies x^3/3 + xy^2 = C \implies x(x^2 + 3y^2) = 3C = C'$. Since it passes through $(1, 0)$: $1(1 + 0) = C' \implies C' = 1$. Thus $x(x^2 + 3y^2) = 1$."
    },
    {
        "question": r"The solution of $x\frac{dy}{dx} = y(\ln y - \ln x + 1)$ is:",
        "options": [
            r"$\ln\left(\frac{y}{x}\right) = Cx$",
            r"$\frac{y}{x} = Cx$",
            r"$\ln\left(\frac{x}{y}\right) = Cx$",
            r"$\ln(xy) = Cx$"
        ],
        "correctAnswer": 0,
        "explanation": r"Rewrite as $\frac{dy}{dx} = \frac{y}{x}\left(\ln\left(\frac{y}{x}\right) + 1\right)$. Let $y = vx \implies v + x\frac{dv}{dx} = v(\ln v + 1) = v\ln v + v \implies x\frac{dv}{dx} = v\ln v \implies \frac{dv}{v\ln v} = \frac{dx}{x}$. Integrating: $\ln(\ln v) = \ln x + \ln C = \ln(Cx) \implies \ln v = Cx \implies \ln(y/x) = Cx$."
    },
    {
        "question": r"A function $f(x, y)$ is homogeneous of degree $n$ if $f(tx, ty) = t^n f(x, y)$. The degree of homogeneity of $f(x, y) = \frac{x^3 + y^3}{x - y}$ is:",
        "options": [
            r"$2$",
            r"$3$",
            r"$1$",
            r"$0$"
        ],
        "correctAnswer": 0,
        "explanation": r"$f(tx, ty) = \frac{(tx)^3 + (ty)^3}{tx - ty} = \frac{t^3(x^3 + y^3)}{t(x - y)} = t^{3-1} \frac{x^3 + y^3}{x - y} = t^2 f(x, y)$. Thus the degree of homogeneity is $2$."
    }
]
for q in q_list:
    batch4_part1.append({"chapter": ch, "subtopic": top, **q})

# Topic 5: Exact differential equations and integrating factors
top = "Exact differential equations and integrating factors"
q_list = [
    {
        "question": r"The differential equation $(2xy + y)dx + (x^2 + x)dy = 0$ is exact because:",
        "options": [
            r"$\frac{\partial M}{\partial y} = \frac{\partial N}{\partial x} = 2x + 1$",
            r"$\frac{\partial M}{\partial x} = \frac{\partial N}{\partial y} = 2y$",
            r"$\frac{\partial M}{\partial y} = -\frac{\partial N}{\partial x}$",
            r"$\frac{\partial M}{\partial y} = 2x, \frac{\partial N}{\partial x} = 2x + 1$"
        ],
        "correctAnswer": 0,
        "explanation": r"Here $M(x, y) = 2xy + y$ and $N(x, y) = x^2 + x$. Then $\frac{\partial M}{\partial y} = 2x + 1$ and $\frac{\partial N}{\partial x} = 2x + 1$. Since $\frac{\partial M}{\partial y} = \frac{\partial N}{\partial x} = 2x + 1$, the equation is exact."
    },
    {
        "question": r"The general solution of the exact differential equation $(2x + 3y + 4)dx + (3x + 4y + 5)dy = 0$ is:",
        "options": [
            r"$x^2 + 3xy + 2y^2 + 4x + 5y = C$",
            r"$x^2 + 3xy + 4y^2 + 4x + 5y = C$",
            r"$2x^2 + 3xy + 4y^2 + 4x + 5y = C$",
            r"$x^2 + 6xy + 2y^2 + 4x + 5y = C$"
        ],
        "correctAnswer": 0,
        "explanation": r"Integrating $M$ with respect to $x$ (treating $y$ as constant): $\int (2x + 3y + 4)dx = x^2 + 3xy + 4x$. Integrating the terms in $N$ not containing $x$: $\int (4y + 5)dy = 2y^2 + 5y$. Summing gives $x^2 + 3xy + 2y^2 + 4x + 5y = C$."
    },
    {
        "question": r"An integrating factor for the differential equation $(x^2 + y^2 + 2x)dx + 2y dy = 0$ is:",
        "options": [
            r"$e^x$",
            r"$e^{-x}$",
            r"$e^y$",
            r"$\frac{1}{x^2 + y^2}$"
        ],
        "correctAnswer": 0,
        "explanation": r"Here $M = x^2 + y^2 + 2x$, $N = 2y$. $\frac{\partial M}{\partial y} = 2y$, $\frac{\partial N}{\partial x} = 0$. Then $\frac{\frac{\partial M}{\partial y} - \frac{\partial N}{\partial x}}{N} = \frac{2y - 0}{2y} = 1$ (a function of $x$ alone). The integrating factor is $\text{IF} = e^{\int 1 dx} = e^x$."
    },
    {
        "question": r"The differential equation $y dx - x dy + \ln x dx = 0$ can be made exact by multiplying by:",
        "options": [
            r"$\frac{1}{x^2}$",
            r"$\frac{1}{y^2}$",
            r"$\frac{1}{xy}$",
            r"$x$"
        ],
        "correctAnswer": 0,
        "explanation": r"Notice that $\frac{y dx - x dy}{x^2} = -d(y/x)$. Multiplying the given equation by $\frac{1}{x^2}$ gives $\frac{y dx - x dy}{x^2} + \frac{\ln x}{x^2} dx = 0 \implies -d(y/x) + \frac{\ln x}{x^2}dx = 0$, which is directly integrable (exact)."
    },
    {
        "question": r"The solution of $(y + x^3)dx - x dy = 0$ using an integrating factor is:",
        "options": [
            r"$\frac{y}{x} - \frac{x^2}{2} = C$",
            r"$\frac{y}{x} + \frac{x^2}{2} = C$",
            r"$\frac{x}{y} - \frac{x^2}{2} = C$",
            r"$yx - \frac{x^4}{4} = C$"
        ],
        "correctAnswer": 0,
        "explanation": r"Rewrite as $y dx - x dy + x^3 dx = 0$. Divide by $x^2$: $\frac{y dx - x dy}{x^2} + x dx = 0 \implies -d(y/x) + x dx = 0$. Integrating: $-\frac{y}{x} + \frac{x^2}{2} = C' \implies \frac{y}{x} - \frac{x^2}{2} = C$."
    }
]
for q in q_list:
    batch4_part1.append({"chapter": ch, "subtopic": top, **q})

# Topic 6: Formation of differential equations
top = "Formation of differential equations"
q_list = [
    {
        "question": r"The differential equation of the family of curves $y = A e^{3x} + B e^{-3x}$ is:",
        "options": [
            r"$\frac{d^2 y}{dx^2} - 9y = 0$",
            r"$\frac{d^2 y}{dx^2} + 9y = 0$",
            r"$\frac{d^2 y}{dx^2} - 3y = 0$",
            r"$\frac{dy}{dx} - 3y = 0$"
        ],
        "correctAnswer": 0,
        "explanation": r"Differentiating: $y' = 3A e^{3x} - 3B e^{-3x}$. Differentiating again: $y'' = 9A e^{3x} + 9B e^{-3x} = 9(A e^{3x} + B e^{-3x}) = 9y \implies y'' - 9y = 0$."
    },
    {
        "question": r"The differential equation representing the family of parabolas having their vertices at the origin and axes along the positive x-axis is:",
        "options": [
            r"$y^2 - 2xy\frac{dy}{dx} = 0 \implies y = 2x\frac{dy}{dx}$",
            r"$x = 2y\frac{dy}{dx}$",
            r"$y\frac{d^2 y}{dx^2} + \left(\frac{dy}{dx}\right)^2 = 0$",
            r"$y^2 = 4x\frac{dy}{dx}$"
        ],
        "correctAnswer": 0,
        "explanation": r"The equation of such parabolas is $y^2 = 4ax$. Differentiating: $2y y' = 4a \implies 4a = 2y y'$. Substituting into $y^2 = 4ax$: $y^2 = (2y y')x \implies y = 2x\frac{dy}{dx}$."
    },
    {
        "question": r"The differential equation of all non-vertical lines in a plane is:",
        "options": [
            r"$\frac{d^2 y}{dx^2} = 0$",
            r"$\frac{dy}{dx} = 0$",
            r"$\frac{d^2 x}{dy^2} = 0$",
            r"$\frac{d^3 y}{dx^3} = 0$"
        ],
        "correctAnswer": 0,
        "explanation": r"Any non-vertical line has equation $y = mx + c$, which has two arbitrary constants $m$ and $c$. Differentiating once: $y' = m$. Differentiating again: $y'' = 0$."
    },
    {
        "question": r"The differential equation of all circles touching the x-axis at the origin is:",
        "options": [
            r"$(x^2 - y^2)\frac{dy}{dx} - 2xy = 0$",
            r"$(x^2 + y^2)\frac{dy}{dx} - 2xy = 0$",
            r"$(y^2 - x^2)\frac{dy}{dx} - 2xy = 0$",
            r"$2xy\frac{dy}{dx} + x^2 - y^2 = 0$"
        ],
        "correctAnswer": 0,
        "explanation": r"The equation is $x^2 + (y - a)^2 = a^2 \implies x^2 + y^2 - 2ay = 0 \implies 2a = \frac{x^2 + y^2}{y}$. Differentiating $x^2 + y^2 - 2ay = 0$ with respect to $x$: $2x + 2y y' - 2a y' = 0 \implies 2x + (2y - 2a)y' = 0$. Substituting $2a = \frac{x^2+y^2}{y}$: $2x + \left(2y - \frac{x^2+y^2}{y}\right)y' = 0 \implies 2xy + (y^2 - x^2)y' = 0 \implies (x^2 - y^2)y' - 2xy = 0$."
    },
    {
        "question": r"The differential equation of the family of curves $y = c(x - c)^2$ (where $c$ is an arbitrary constant) has degree:",
        "options": [
            r"$3$",
            r"$2$",
            r"$1$",
            r"$4$"
        ],
        "correctAnswer": 0,
        "explanation": r"Differentiating: $y' = 2c(x - c)$. Dividing gives $\frac{y}{y'} = \frac{c(x-c)^2}{2c(x-c)} = \frac{x - c}{2} \implies x - c = \frac{2y}{y'} \implies c = x - \frac{2y}{y'}$. Substituting $c$ and $x - c$ into $y = c(x - c)^2$: $y = \left(x - \frac{2y}{y'}\right)\left(\frac{2y}{y'}\right)^2 = \left(\frac{x y' - 2y}{y'}\right)\frac{4y^2}{(y')^2} \implies y (y')^3 = 4y^2(x y' - 2y) \implies (y')^3 = 4y(x y' - 2y)$. The highest power of $y'$ is $3$, so the degree is $3$."
    }
]
for q in q_list:
    batch4_part1.append({"chapter": ch, "subtopic": top, **q})

# ==========================================
# CHAPTER 17: Areas (4 topics x 5 = 20 Qs)
# ==========================================
ch = "Areas"

# Topic 1: Area under a curve
top = "Area under a curve"
q_list = [
    {
        "question": r"The area bounded by the curve $y = \ln x$, the x-axis, and the ordinate $x = e$ is:",
        "options": [
            r"$1$",
            r"$e - 1$",
            r"$e$",
            r"$\frac{1}{2}$"
        ],
        "correctAnswer": 0,
        "explanation": r"The curve crosses the x-axis at $x = 1$. The area is $\int_1^e \ln x \, dx = [x\ln x - x]_1^e = (e\ln e - e) - (1\ln 1 - 1) = (e - e) - (0 - 1) = 1$."
    },
    {
        "question": r"The area under the curve $y = \sin x$ from $x = 0$ to $x = 2\pi$ enclosed with the x-axis is:",
        "options": [
            r"$4$",
            r"$0$",
            r"$2$",
            r"$2\pi$"
        ],
        "correctAnswer": 0,
        "explanation": r"The total enclosed area is the sum of areas above and below the x-axis: $\int_0^{2\pi} |\sin x| dx = \int_0^\pi \sin x dx + \int_\pi^{2\pi} (-\sin x) dx = [-\cos x]_0^\pi + [\cos x]_\pi^{2\pi} = (1 - (-1)) + (1 - (-1)) = 2 + 2 = 4$."
    },
    {
        "question": r"The area bounded by the parabola $y^2 = 4x$ and its latus rectum is:",
        "options": [
            r"$\frac{8}{3}$",
            r"$\frac{16}{3}$",
            r"$\frac{4}{3}$",
            r"$4$"
        ],
        "correctAnswer": 0,
        "explanation": r"Here $4a = 4 \implies a = 1$. The latus rectum is the line $x = 1$. By Archimedes' formula, the area bounded by $y^2 = 4ax$ and $x = a$ is $\frac{8}{3}a^2$. With $a = 1$, the area is $\frac{8}{3}$."
    },
    {
        "question": r"The area under the curve $y = \sqrt{a^2 - x^2}$ from $x = 0$ to $x = a$ is:",
        "options": [
            r"$\frac{\pi a^2}{4}$",
            r"$\frac{\pi a^2}{2}$",
            r"$\pi a^2$",
            r"$\frac{a^2}{2}$"
        ],
        "correctAnswer": 0,
        "explanation": r"The curve $y = \sqrt{a^2 - x^2}$ is the upper semicircle of $x^2 + y^2 = a^2$. The interval $[0, a]$ represents the first quadrant portion of the circle. Thus, the area is one quarter of the circle's area: $\frac{\pi a^2}{4}$."
    },
    {
        "question": r"The area enclosed between the curve $y = e^x$, the y-axis, and the line $y = e$ is:",
        "options": [
            r"$1$",
            r"$e - 1$",
            r"$e$",
            r"$2$"
        ],
        "correctAnswer": 0,
        "explanation": r"Integrating with respect to $y$ from $y = 1$ (where $x = 0$) to $y = e$: $\int_1^e x \, dy = \int_1^e \ln y \, dy = [y\ln y - y]_1^e = (e - e) - (0 - 1) = 1$."
    }
]
for q in q_list:
    batch4_part1.append({"chapter": ch, "subtopic": top, **q})

# Topic 2: Area between two curves
top = "Area between two curves"
q_list = [
    {
        "question": r"The area of the region bounded by the parabolas $y = x^2$ and $y^2 = x$ is:",
        "options": [
            r"$\frac{1}{3}$",
            r"$\frac{1}{6}$",
            r"$\frac{2}{3}$",
            r"$1$"
        ],
        "correctAnswer": 0,
        "explanation": r"The intersection points are $(0, 0)$ and $(1, 1)$. The area is $\int_0^1 (\sqrt{x} - x^2) dx = \left[\frac{2}{3}x^{3/2} - \frac{x^3}{3}\right]_0^1 = \frac{2}{3} - \frac{1}{3} = \frac{1}{3}$."
    },
    {
        "question": r"The area enclosed between the curves $y = \sin x$ and $y = \cos x$ from $x = 0$ to $x = \frac{\pi}{2}$ is:",
        "options": [
            r"$2\sqrt{2} - 2$",
            r"$\sqrt{2} - 1$",
            r"$2\sqrt{2}$",
            r"$2$"
        ],
        "correctAnswer": 0,
        "explanation": r"The curves intersect at $x = \pi/4$. On $[0, \pi/4]$, $\cos x \ge \sin x$. On $[\pi/4, \pi/2]$, $\sin x \ge \cos x$. The area is $\int_0^{\pi/4}(\cos x - \sin x)dx + \int_{\pi/4}^{\pi/2}(\sin x - \cos x)dx = [\sin x + \cos x]_0^{\pi/4} + [-\cos x - \sin x]_{\pi/4}^{\pi/2} = (\sqrt{2} - 1) + (-1 - 0 - (-\sqrt{2})) = 2\sqrt{2} - 2$."
    },
    {
        "question": r"The area of the region bounded by the curves $y = x^3$ and $y = x$ is:",
        "options": [
            r"$\frac{1}{2}$",
            r"$\frac{1}{4}$",
            r"$1$",
            r"$2$"
        ],
        "correctAnswer": 0,
        "explanation": r"The curves intersect at $x = -1, 0, 1$. By symmetry, the area is $2\int_0^1 (x - x^3)dx = 2\left[\frac{x^2}{2} - \frac{x^4}{4}\right]_0^1 = 2\left(\frac{1}{2} - \frac{1}{4}\right) = 2\left(\frac{1}{4}\right) = \frac{1}{2}$."
    },
    {
        "question": r"The area bounded by the curves $y = |x|$ and $y = 2 - x^2$ is:",
        "options": [
            r"$\frac{7}{3}$",
            r"$\frac{8}{3}$",
            r"$\frac{5}{3}$",
            r"$2$"
        ],
        "correctAnswer": 0,
        "explanation": r"The curves intersect where $2 - x^2 = |x| \implies x^2 + |x| - 2 = 0 \implies (|x| + 2)(|x| - 1) = 0 \implies |x| = 1 \implies x = \pm 1$. By symmetry, the area is $2\int_0^1 (2 - x^2 - x)dx = 2\left[2x - \frac{x^3}{3} - \frac{x^2}{2}\right]_0^1 = 2\left(2 - \frac{1}{3} - \frac{1}{2}\right) = 2\left(\frac{7}{6}\right) = \frac{7}{3}$."
    },
    {
        "question": r"The area of the region enclosed by the loop of the curve $a y^2 = x(x - a)^2$ for $a > 0$ is:",
        "options": [
            r"$\frac{8}{15}a^2$",
            r"$\frac{4}{15}a^2$",
            r"$\frac{16}{15}a^2$",
            r"$\frac{2}{3}a^2$"
        ],
        "correctAnswer": 0,
        "explanation": r"The loop exists for $0 \le x \le a$. The upper curve is $y = \frac{1}{\sqrt{a}}\sqrt{x}(a - x)$. The total area of the loop is $2\int_0^a \frac{1}{\sqrt{a}}(a x^{1/2} - x^{3/2})dx = \frac{2}{\sqrt{a}}\left[\frac{2a}{3}x^{3/2} - \frac{2}{5}x^{5/2}\right]_0^a = \frac{2}{\sqrt{a}}\left(\frac{2a^{5/2}}{3} - \frac{2a^{5/2}}{5}\right) = 2a^2\left(\frac{4}{15}\right) = \frac{8}{15}a^2$."
    }
]
for q in q_list:
    batch4_part1.append({"chapter": ch, "subtopic": top, **q})

# Topic 3: Area bounded by parabolas, circles, and lines
top = "Area bounded by parabolas, circles, and lines"
q_list = [
    {
        "question": r"The smaller area bounded by the circle $x^2 + y^2 = 4$ and the line $x = 1$ is:",
        "options": [
            r"$\frac{4\pi}{3} - \sqrt{3}$",
            r"$\frac{2\pi}{3} - \sqrt{3}$",
            r"$\frac{4\pi}{3} - \frac{\sqrt{3}}{2}$",
            r"$\frac{2\pi}{3} - \frac{\sqrt{3}}{2}$"
        ],
        "correctAnswer": 0,
        "explanation": r"The area of the circular sector of radius $R = 2$ from angle $-\pi/3$ to $\pi/3$ is $\frac{1}{2} R^2 (2\pi/3) = \frac{4\pi}{3}$. The area of the triangle formed by $(0, 0)$ and the chord is $\frac{1}{2} \times \text{base} \times \text{height} = \frac{1}{2}(2\sqrt{3})(1) = \sqrt{3}$. Thus the segment area is $\frac{4\pi}{3} - \sqrt{3}$."
    },
    {
        "question": r"The area bounded by the parabola $y = x^2$ and the line $y = 2x + 3$ is:",
        "options": [
            r"$\frac{32}{3}$",
            r"$\frac{16}{3}$",
            r"$\frac{64}{3}$",
            r"$8$"
        ],
        "correctAnswer": 0,
        "explanation": r"Intersection points: $x^2 = 2x + 3 \implies x^2 - 2x - 3 = 0 \implies (x - 3)(x + 1) = 0 \implies x = -1, 3$. The area is $\int_{-1}^3 (2x + 3 - x^2)dx = \left[x^2 + 3x - \frac{x^3}{3}\right]_{-1}^3 = (9 + 9 - 9) - (1 - 3 + 1/3) = 9 - (-5/3) = \frac{32}{3}$."
    },
    {
        "question": r"The area of the region in the first quadrant bounded by $y = x$, $x^2 + y^2 = 32$, and the x-axis is:",
        "options": [
            r"$4\pi$",
            r"$8\pi$",
            r"$2\pi$",
            r"$16\pi$"
        ],
        "correctAnswer": 0,
        "explanation": r"The line $y = x$ makes an angle of $\pi/4$ with the x-axis. The region bounded by the positive x-axis, the line $y = x$, and the circle $x^2 + y^2 = 32$ is a sector of angle $\pi/4$. The radius squared is $R^2 = 32$. The area of the sector is $\frac{1}{2} R^2 \theta = \frac{1}{2}(32)\left(\frac{\pi}{4}\right) = 4\pi$."
    },
    {
        "question": r"The area enclosed between the parabola $y^2 = 4ax$ and the line $y = mx$ is:",
        "options": [
            r"$\frac{8a^2}{3m^3}$",
            r"$\frac{4a^2}{3m^3}$",
            r"$\frac{8a^2}{m^3}$",
            r"$\frac{16a^2}{3m^3}$"
        ],
        "correctAnswer": 0,
        "explanation": r"Intersection points: $(mx)^2 = 4ax \implies m^2 x^2 - 4ax = 0 \implies x = 0$ or $x = \frac{4a}{m^2}$. The area is $\int_0^{4a/m^2} (2\sqrt{a}\sqrt{x} - mx)dx = \left[2\sqrt{a}\frac{2}{3}x^{3/2} - \frac{m x^2}{2}\right]_0^{4a/m^2} = \frac{4\sqrt{a}}{3}\left(\frac{4a}{m^2}\right)^{3/2} - \frac{m}{2}\left(\frac{16a^2}{m^4}\right) = \frac{4\sqrt{a}}{3}\frac{8a^{3/2}}{m^3} - \frac{8a^2}{m^3} = \frac{32a^2}{3m^3} - \frac{24a^2}{3m^3} = \frac{8a^2}{3m^3}$."
    },
    {
        "question": r"The area common to the circle $x^2 + y^2 = 16$ and the parabola $y^2 = 6x$ is:",
        "options": [
            r"$\frac{4}{3}(4\pi + \sqrt{3})$",
            r"$\frac{4}{3}(2\pi + \sqrt{3})$",
            r"$\frac{2}{3}(4\pi + \sqrt{3})$",
            r"$\frac{1}{3}(4\pi + \sqrt{3})$"
        ],
        "correctAnswer": 0,
        "explanation": r"Intersection points: $x^2 + 6x - 16 = 0 \implies (x + 8)(x - 2) = 0 \implies x = 2$ (since $x \ge 0$). At $x = 2$, $y = \pm\sqrt{12} = \pm 2\sqrt{3}$. The angle subtended by the arc is $\pi/3$ on each side, total $2\pi/3$. The area consists of the parabolic region from $x=0$ to $2$ plus the circular segment from $x=2$ to $4$: Parabolic part $= 2\int_0^2 \sqrt{6x}dx = 2\sqrt{6}\left[\frac{2}{3}x^{3/2}\right]_0^2 = \frac{4\sqrt{6}}{3}(2\sqrt{2}) = \frac{16\sqrt{3}}{3}$. Circular part $= \frac{1}{2}(16)(2\pi/3) - \frac{1}{2}(4\sqrt{3})(2) = \frac{16\pi}{3} - 4\sqrt{3}$. Total area $= \frac{16\sqrt{3}}{3} + \frac{16\pi}{3} - 4\sqrt{3} = \frac{16\pi}{3} + \frac{4\sqrt{3}}{3} = \frac{4}{3}(4\pi + \sqrt{3})$."
    }
]
for q in q_list:
    batch4_part1.append({"chapter": ch, "subtopic": top, **q})

# Topic 4: Symmetrical areas and piecewise integrations
top = "Symmetrical areas and piecewise integrations"
q_list = [
    {
        "question": r"The area bounded by the curve $|x| + |y| = 1$ is equal to:",
        "options": [
            r"$2$",
            r"$4$",
            r"$1$",
            r"$\sqrt{2}$"
        ],
        "correctAnswer": 0,
        "explanation": r"The curve $|x| + |y| = 1$ is a square with vertices at $(1, 0), (0, 1), (-1, 0), (0, -1)$. The length of each side is $\sqrt{1^2 + 1^2} = \sqrt{2}$. The area of the square is $(\sqrt{2})^2 = 2$."
    },
    {
        "question": r"The area bounded by the curve $y = |\sin x|$ and the x-axis from $x = -2\pi$ to $x = 2\pi$ is:",
        "options": [
            r"$8$",
            r"$4$",
            r"$0$",
            r"$2$"
        ],
        "correctAnswer": 0,
        "explanation": r"The area of one arch of $|\sin x|$ is $\int_0^\pi \sin x \, dx = 2$. The interval $[-2\pi, 2\pi]$ spans a length of $4\pi$, which contains exactly $4$ full arches. By symmetry, the total area is $4 \times 2 = 8$."
    },
    {
        "question": r"The area of the region bounded by $y = \max(x, x^3)$ and the x-axis between $x = 0$ and $x = 2$ is:",
        "options": [
            r"$\frac{17}{4}$",
            r"$\frac{15}{4}$",
            r"$4$",
            r"$\frac{9}{2}$"
        ],
        "correctAnswer": 0,
        "explanation": r"For $x \in [0, 1]$, $x \ge x^3$, so $\max(x, x^3) = x$. For $x \in [1, 2]$, $x^3 \ge x$, so $\max(x, x^3) = x^3$. The area is $\int_0^1 x \, dx + \int_1^2 x^3 \, dx = \left[\frac{x^2}{2}\right]_0^1 + \left[\frac{x^4}{4}\right]_1^2 = \frac{1}{2} + \left(\frac{16}{4} - \frac{1}{4}\right) = \frac{1}{2} + \frac{15}{4} = \frac{17}{4}$."
    },
    {
        "question": r"The area enclosed by the curve $x^2/a^2 + y^2/b^2 = 1$ is equal to:",
        "options": [
            r"$\pi ab$",
            r"$2\pi ab$",
            r"$\frac{\pi ab}{2}$",
            r"$\pi(a^2 + b^2)$"
        ],
        "correctAnswer": 0,
        "explanation": r"By symmetry across both axes, the area is $4 \int_0^a b\sqrt{1 - x^2/a^2} dx = \frac{4b}{a}\int_0^a \sqrt{a^2 - x^2}dx = \frac{4b}{a}\left(\frac{\pi a^2}{4}\right) = \pi ab$."
    },
    {
        "question": r"The area of the region bounded by $y = |x - 1|$ and $y = 3 - |x|$ is:",
        "options": [
            r"$4$",
            r"$2$",
            r"$8$",
            r"$6$"
        ],
        "correctAnswer": 0,
        "explanation": r"Intersection points: $|x - 1| = 3 - |x| \implies |x| + |x - 1| = 3$. For $x \ge 1$: $x + x - 1 = 3 \implies 2x = 4 \implies x = 2$. For $x \le 0$: $-x - (x - 1) = 3 \implies -2x + 1 = 3 \implies -2x = 2 \implies x = -1$. For $0 < x < 1$: $x - x + 1 = 1 \neq 3$. So the intersection points are $x = -1$ (where $y = 2$) and $x = 2$ (where $y = 1$). The region forms a parallelogram with vertices at $(0, 3), (2, 1), (1, 0), (-1, 2)$. The area is $\int_{-1}^2 (3 - |x| - |x - 1|)dx = \int_{-1}^0 (3 + x - (1 - x))dx + \int_0^1 (3 - x - (1 - x))dx + \int_1^2 (3 - x - (x - 1))dx = \int_{-1}^0 (2 + 2x)dx + \int_0^1 2\,dx + \int_1^2 (4 - 2x)dx = [2x + x^2]_{-1}^0 + 2(1) + [4x - x^2]_1^2 = (0 - (-2 + 1)) + 2 + ((8 - 4) - (4 - 1)) = 1 + 2 + 1 = 4$."
    }
]
for q in q_list:
    batch4_part1.append({"chapter": ch, "subtopic": top, **q})

# ==========================================
# CHAPTER 18: Vectors (5 topics x 5 = 25 Qs)
# ==========================================
ch = "Vectors"

# Topic 1: Scalar and vector products
top = "Scalar and vector products"
q_list = [
    {
        "question": r"If $\vec{a}, \vec{b}, \vec{c}$ are three unit vectors such that $\vec{a} + \vec{b} + \vec{c} = \vec{0}$, then the value of $\vec{a}\cdot\vec{b} + \vec{b}\cdot\vec{c} + \vec{c}\cdot\vec{a}$ is:",
        "options": [
            r"$-\frac{3}{2}$",
            r"$\frac{3}{2}$",
            r"$-3$",
            r"$0$"
        ],
        "correctAnswer": 0,
        "explanation": r"We have $|\vec{a} + \vec{b} + \vec{c}|^2 = |\vec{0}|^2 = 0 \implies |\vec{a}|^2 + |\vec{b}|^2 + |\vec{c}|^2 + 2(\vec{a}\cdot\vec{b} + \vec{b}\cdot\vec{c} + \vec{c}\cdot\vec{a}) = 0$. Since they are unit vectors, $1 + 1 + 1 + 2S = 0 \implies 2S = -3 \implies S = -\frac{3}{2}$."
    },
    {
        "question": r"For any vector $\vec{a}$, the value of $(\vec{a} \times \hat{i})^2 + (\vec{a} \times \hat{j})^2 + (\vec{a} \times \hat{k})^2$ is equal to:",
        "options": [
            r"$2|\vec{a}|^2$",
            r"$3|\vec{a}|^2$",
            r"$|\vec{a}|^2$",
            r"$4|\vec{a}|^2$"
        ],
        "correctAnswer": 0,
        "explanation": r"Let $\vec{a} = a_1 \hat{i} + a_2 \hat{j} + a_3 \hat{k}$. Then $\vec{a} \times \hat{i} = -a_2 \hat{k} + a_3 \hat{j}$, so $|\vec{a} \times \hat{i}|^2 = a_2^2 + a_3^2$. Similarly, $|\vec{a} \times \hat{j}|^2 = a_1^2 + a_3^2$ and $|\vec{a} \times \hat{k}|^2 = a_1^2 + a_2^2$. Summing them: $(a_2^2 + a_3^2) + (a_1^2 + a_3^2) + (a_1^2 + a_2^2) = 2(a_1^2 + a_2^2 + a_3^2) = 2|\vec{a}|^2$."
    },
    {
        "question": r"If $|\vec{a} \times \vec{b}|^2 + (\vec{a} \cdot \vec{b})^2 = 144$ and $|\vec{a}| = 4$, then $|\vec{b}|$ is equal to:",
        "options": [
            r"$3$",
            r"$9$",
            r"$12$",
            r"$4$"
        ],
        "correctAnswer": 0,
        "explanation": r"By Lagrange's identity, $|\vec{a} \times \vec{b}|^2 + (\vec{a} \cdot \vec{b})^2 = |\vec{a}|^2 |\vec{b}|^2$. Thus $144 = 4^2 |\vec{b}|^2 = 16 |\vec{b}|^2 \implies |\vec{b}|^2 = \frac{144}{16} = 9 \implies |\vec{b}| = 3$."
    },
    {
        "question": r"The value of $[\vec{a} - \vec{b}, \; \vec{b} - \vec{c}, \; \vec{c} - \vec{a}]$ is always equal to:",
        "options": [
            r"$0$",
            r"$[\vec{a} \; \vec{b} \; \vec{c}]$",
            r"$2[\vec{a} \; \vec{b} \; \vec{c}]$",
            r"$-[\vec{a} \; \vec{b} \; \vec{c}]$"
        ],
        "correctAnswer": 0,
        "explanation": r"Notice that the sum of the three vectors is $(\vec{a} - \vec{b}) + (\vec{b} - \vec{c}) + (\vec{c} - \vec{a}) = \vec{0}$. Since one vector can be written as a linear combination of the other two, the three vectors are coplanar. Thus their scalar triple product is identically $0$."
    },
    {
        "question": r"The value of $[\vec{a} + \vec{b}, \; \vec{b} + \vec{c}, \; \vec{c} + \vec{a}]$ is equal to:",
        "options": [
            r"$2[\vec{a} \; \vec{b} \; \vec{c}]$",
            r"$[\vec{a} \; \vec{b} \; \vec{c}]$",
            r"$0$",
            r"$4[\vec{a} \; \vec{b} \; \vec{c}]$"
        ],
        "correctAnswer": 0,
        "explanation": r"Using properties of determinants: $[\vec{a} + \vec{b}, \vec{b} + \vec{c}, \vec{c} + \vec{a}] = \begin{vmatrix} 1 & 1 & 0 \\ 0 & 1 & 1 \\ 1 & 0 & 1 \end{vmatrix} [\vec{a} \; \vec{b} \; \vec{c}] = (1(1 - 0) - 1(0 - 1) + 0)[\vec{a} \; \vec{b} \; \vec{c}] = (1 + 1)[\vec{a} \; \vec{b} \; \vec{c}] = 2[\vec{a} \; \vec{b} \; \vec{c}]$."
    }
]
for q in q_list:
    batch4_part1.append({"chapter": ch, "subtopic": top, **q})

# Topic 2: Position vectors
top = "Position vectors"
q_list = [
    {
        "question": r"If the vertices of $\triangle ABC$ have position vectors $\vec{a}, \vec{b}, \vec{c}$, then the position vector of its centroid $G$ is:",
        "options": [
            r"$\frac{\vec{a} + \vec{b} + \vec{c}}{3}$",
            r"$\frac{\vec{a} + \vec{b} + \vec{c}}{2}$",
            r"$\vec{a} + \vec{b} + \vec{c}$",
            r"$\frac{\vec{a} + 2\vec{b} + 3\vec{c}}{6}$"
        ],
        "correctAnswer": 0,
        "explanation": r"The centroid divides any median in the ratio $2:1$. The midpoint of $BC$ is $\frac{\vec{b} + \vec{c}}{2}$. Using section formula: $\vec{g} = \frac{1 \cdot \vec{a} + 2 \cdot \frac{\vec{b} + \vec{c}}{2}}{1 + 2} = \frac{\vec{a} + \vec{b} + \vec{c}}{3}$."
    },
    {
        "question": r"If $ABCD$ is a parallelogram with vertices having position vectors $\vec{a}, \vec{b}, \vec{c}, \vec{d}$ taken in order, then $\vec{d}$ is equal to:",
        "options": [
            r"$\vec{a} - \vec{b} + \vec{c}$",
            r"$\vec{a} + \vec{b} - \vec{c}$",
            r"$\vec{b} + \vec{c} - \vec{a}$",
            r"$\frac{\vec{a} + \vec{c}}{2}$"
        ],
        "correctAnswer": 0,
        "explanation": r"In a parallelogram, the diagonals bisect each other, so the midpoint of $AC$ equals the midpoint of $BD$: $\frac{\vec{a} + \vec{c}}{2} = \frac{\vec{b} + \vec{d}}{2} \implies \vec{a} + \vec{c} = \vec{b} + \vec{d} \implies \vec{d} = \vec{a} - \vec{b} + \vec{c}$."
    },
    {
        "question": r"The position vector of a point $P$ which divides the line joining $A(2\vec{a} + \vec{b})$ and $B(\vec{a} - 3\vec{b})$ externally in the ratio $1:2$ is:",
        "options": [
            r"$3\vec{a} + 5\vec{b}$",
            r"$3\vec{a} - 5\vec{b}$",
            r"$\vec{a} + 4\vec{b}$",
            r"$-3\vec{a} + 5\vec{b}$"
        ],
        "correctAnswer": 0,
        "explanation": r"Using the external section formula $\vec{r} = \frac{m\vec{b}_0 - n\vec{a}_0}{m - n}$ with $m = 1, n = 2$: $\vec{r} = \frac{1(\vec{a} - 3\vec{b}) - 2(2\vec{a} + \vec{b})}{1 - 2} = \frac{\vec{a} - 3\vec{b} - 4\vec{a} - 2\vec{b}}{-1} = \frac{-3\vec{a} - 5\vec{b}}{-1} = 3\vec{a} + 5\vec{b}$."
    },
    {
        "question": r"If $O$ is the origin and $G$ is the centroid of $\triangle ABC$, then $\vec{OA} + \vec{OB} + \vec{OC}$ is equal to:",
        "options": [
            r"$3\vec{OG}$",
            r"$\vec{OG}$",
            r"$\vec{0}$",
            r"$\frac{3}{2}\vec{OG}$"
        ],
        "correctAnswer": 0,
        "explanation": r"Since $\vec{OG} = \frac{\vec{OA} + \vec{OB} + \vec{OC}}{3}$, multiplying both sides by 3 gives $\vec{OA} + \vec{OB} + \vec{OC} = 3\vec{OG}$."
    },
    {
        "question": r"If the position vectors of the vertices of a tetrahedron are $\vec{0}, \vec{a}, \vec{b}, \vec{c}$, then its volume is:",
        "options": [
            r"$\frac{1}{6}|[\vec{a} \; \vec{b} \; \vec{c}]|$",
            r"$\frac{1}{3}|[\vec{a} \; \vec{b} \; \vec{c}]|$",
            r"$\frac{1}{2}|[\vec{a} \; \vec{b} \; \vec{c}]|$",
            r"$|[\vec{a} \; \vec{b} \; \vec{c}]|$"
        ],
        "correctAnswer": 0,
        "explanation": r"The volume of a tetrahedron with coterminous edges $\vec{a}, \vec{b}, \vec{c}$ from the origin is given by $V = \frac{1}{6}|[\vec{a} \; \vec{b} \; \vec{c}]|$."
    }
]
for q in q_list:
    batch4_part1.append({"chapter": ch, "subtopic": top, **q})

# Topic 3: Collinearity and coplanarity of vectors
top = "Collinearity and coplanarity of vectors"
q_list = [
    {
        "question": r"If the vectors $2\hat{i} - \hat{j} + \hat{k}$, $\hat{i} + 2\hat{j} - 3\hat{k}$, and $3\hat{i} + \lambda\hat{j} + 5\hat{k}$ are coplanar, then the value of $\lambda$ is:",
        "options": [
            r"$-4$",
            r"$4$",
            r"$-2$",
            r"$2$"
        ],
        "correctAnswer": 0,
        "explanation": r"For coplanarity, the scalar triple product is zero: $\begin{vmatrix} 2 & -1 & 1 \\ 1 & 2 & -3 \\ 3 & \lambda & 5 \end{vmatrix} = 0 \implies 2(10 + 3\lambda) + 1(5 + 9) + 1(\lambda - 6) = 0 \implies 20 + 6\lambda + 14 + \lambda - 6 = 0 \implies 7\lambda + 28 = 0 \implies \lambda = -4$."
    },
    {
        "question": r"The points with position vectors $60\hat{i} + 3\hat{j}$, $40\hat{i} - 8\hat{j}$, and $a\hat{i} - 52\hat{j}$ are collinear if $a$ equals:",
        "options": [
            r"$-40$",
            r"$40$",
            r"$-20$",
            r"$20$"
        ],
        "correctAnswer": 0,
        "explanation": r"Let the points be $A, B, C$. Vector $\vec{AB} = (40 - 60)\hat{i} + (-8 - 3)\hat{j} = -20\hat{i} - 11\hat{j}$. Vector $\vec{BC} = (a - 40)\hat{i} + (-52 - (-8))\hat{j} = (a - 40)\hat{i} - 44\hat{j}$. For collinearity, $\frac{a - 40}{-20} = \frac{-44}{-11} = 4 \implies a - 40 = 4(-20) = -80 \implies a = -40$."
    },
    {
        "question": r"Four points $A, B, C, D$ with position vectors $\vec{a}, \vec{b}, \vec{c}, \vec{d}$ are coplanar if and only if:",
        "options": [
            r"$[\vec{AB} \; \vec{AC} \; \vec{AD}] = 0$",
            r"$\vec{a} + \vec{b} + \vec{c} + \vec{d} = \vec{0}$",
            r"$[\vec{a} \; \vec{b} \; \vec{c}] = 0$",
            r"$\vec{a} \cdot \vec{b} = \vec{c} \cdot \vec{d}$"
        ],
        "correctAnswer": 0,
        "explanation": r"Four points are coplanar if and only if the three vectors coterminous at $A$ (namely $\vec{AB} = \vec{b} - \vec{a}$, $\vec{AC} = \vec{c} - \vec{a}$, $\vec{AD} = \vec{d} - \vec{a}$) are coplanar, which is equivalent to $[\vec{AB} \; \vec{AC} \; \vec{AD}] = 0$."
    },
    {
        "question": r"If $\vec{a}, \vec{b}, \vec{c}$ are non-coplanar vectors, then the vectors $\vec{a} + 2\vec{b} + 3\vec{c}$, $\lambda\vec{b} + 4\vec{c}$, and $(2\lambda - 1)\vec{c}$ are non-coplanar for:",
        "options": [
            r"All values of $\lambda$ except $\lambda = 0$ and $\lambda = 1/2$",
            r"All $\lambda \in \mathbb{R}$",
            r"No value of $\lambda$",
            r"Only $\lambda = 1$"
        ],
        "correctAnswer": 0,
        "explanation": r"The determinant of coefficients with respect to the basis $\{\vec{a}, \vec{b}, \vec{c}\}$ is $\begin{vmatrix} 1 & 2 & 3 \\ 0 & \lambda & 4 \\ 0 & 0 & 2\lambda - 1 \end{vmatrix} = 1 \cdot \lambda \cdot (2\lambda - 1) = \lambda(2\lambda - 1)$. For non-coplanarity, this determinant must be non-zero: $\lambda(2\lambda - 1) \neq 0 \implies \lambda \neq 0$ and $\lambda \neq 1/2$."
    },
    {
        "question": r"If $\vec{a} \times \vec{b} = \vec{0}$ and $\vec{a} \cdot \vec{b} = 0$ for non-zero vectors $\vec{a}$ and $\vec{b}$, then:",
        "options": [
            r"Such vectors cannot exist",
            r"$\vec{a} \parallel \vec{b}$",
            r"$\vec{a} \perp \vec{b}$",
            r"$|\vec{a}| = |\vec{b}|$"
        ],
        "correctAnswer": 0,
        "explanation": r"$\vec{a} \times \vec{b} = \vec{0} \implies \sin\theta = 0 \implies \theta = 0$ or $\pi$. But $\vec{a} \cdot \vec{b} = 0 \implies \cos\theta = 0 \implies \theta = \pi/2$. Since $\theta$ cannot be simultaneously $0$ (or $\pi$) and $\pi/2$, no such non-zero vectors exist."
    }
]
for q in q_list:
    batch4_part1.append({"chapter": ch, "subtopic": top, **q})

# Topic 4: Section formula and projection of vectors
top = "Section formula and projection of vectors"
q_list = [
    {
        "question": r"The projection of the vector $\vec{a} = 2\hat{i} + 3\hat{j} + 2\hat{k}$ on the vector $\vec{b} = \hat{i} + 2\hat{j} + \hat{k}$ is:",
        "options": [
            r"$\frac{5\sqrt{6}}{3}$",
            r"$\frac{5}{3}$",
            r"$\frac{10}{\sqrt{6}}$",
            r"$\frac{\sqrt{6}}{3}$"
        ],
        "correctAnswer": 0,
        "explanation": r"Projection of $\vec{a}$ on $\vec{b}$ is $\frac{\vec{a} \cdot \vec{b}}{|\vec{b}|}$. We calculate $\vec{a} \cdot \vec{b} = 2(1) + 3(2) + 2(1) = 2 + 6 + 2 = 10$. And $|\vec{b}| = \sqrt{1^2 + 2^2 + 1^2} = \sqrt{6}$. Thus the projection is $\frac{10}{\sqrt{6}} = \frac{10\sqrt{6}}{6} = \frac{5\sqrt{6}}{3}$."
    },
    {
        "question": r"If the projection of $\vec{a} = \lambda\hat{i} + \hat{j} + 4\hat{k}$ on $\vec{b} = 2\hat{i} + 6\hat{j} + 3\hat{k}$ is $4$, then $\lambda$ is equal to:",
        "options": [
            r"$5$",
            r"$4$",
            r"$3$",
            r"$-5$"
        ],
        "correctAnswer": 0,
        "explanation": r"We have $\frac{\vec{a} \cdot \vec{b}}{|\vec{b}|} = 4$. $|\vec{b}| = \sqrt{2^2 + 6^2 + 3^2} = \sqrt{4 + 36 + 9} = \sqrt{49} = 7$. $\vec{a} \cdot \vec{b} = 2\lambda + 6(1) + 4(3) = 2\lambda + 18$. Thus $\frac{2\lambda + 18}{7} = 4 \implies 2\lambda + 18 = 28 \implies 2\lambda = 10 \implies \lambda = 5$."
    },
    {
        "question": r"The vector component of $\vec{a}$ perpendicular to $\vec{b}$ is given by:",
        "options": [
            r"$\vec{a} - \frac{\vec{a} \cdot \vec{b}}{|\vec{b}|^2}\vec{b}$",
            r"$\frac{\vec{a} \cdot \vec{b}}{|\vec{b}|^2}\vec{b}$",
            r"$\vec{a} \times \vec{b}$",
            r"$\vec{b} - \frac{\vec{a} \cdot \vec{b}}{|\vec{a}|^2}\vec{a}$"
        ],
        "correctAnswer": 0,
        "explanation": r"Any vector $\vec{a}$ can be decomposed as $\vec{a} = \vec{a}_{\parallel} + \vec{a}_{\perp}$, where the component parallel to $\vec{b}$ is $\vec{a}_{\parallel} = \left(\frac{\vec{a} \cdot \vec{b}}{|\vec{b}|^2}\right)\vec{b}$. Thus the perpendicular component is $\vec{a}_{\perp} = \vec{a} - \vec{a}_{\parallel} = \vec{a} - \frac{\vec{a} \cdot \vec{b}}{|\vec{b}|^2}\vec{b}$."
    },
    {
        "question": r"If $P$ divides the line segment joining $A(1, -2, -1)$ and $B(2, 3, 1)$ internally in the ratio $2:3$, then the coordinates of $P$ are:",
        "options": [
            r"$\left(\frac{7}{5}, 0, -\frac{1}{5}\right)$",
            r"$\left(\frac{8}{5}, 1, \frac{1}{5}\right)$",
            r"$\left(\frac{7}{5}, 1, -\frac{1}{5}\right)$",
            r"$\left(0, \frac{7}{5}, -\frac{1}{5}\right)$"
        ],
        "correctAnswer": 0,
        "explanation": r"By the section formula: $x = \frac{2(2) + 3(1)}{2 + 3} = \frac{4 + 3}{5} = \frac{7}{5}$; $y = \frac{2(3) + 3(-2)}{5} = \frac{6 - 6}{5} = 0$; $z = \frac{2(1) + 3(-1)}{5} = \frac{2 - 3}{5} = -\frac{1}{5}$. Thus $P = \left(\frac{7}{5}, 0, -\frac{1}{5}\right)$."
    },
    {
        "question": r"If the projection of a line segment on the axes are $2, 3, 6$, then the length of the line segment is:",
        "options": [
            r"$7$",
            r"$11$",
            r"$49$",
            r"$\sqrt{11}$"
        ],
        "correctAnswer": 0,
        "explanation": r"If the projections of a line segment on the coordinate axes are $p_x, p_y, p_z$, then the length of the line segment is $L = \sqrt{p_x^2 + p_y^2 + p_z^2} = \sqrt{2^2 + 3^2 + 6^2} = \sqrt{4 + 9 + 36} = \sqrt{49} = 7$."
    }
]
for q in q_list:
    batch4_part1.append({"chapter": ch, "subtopic": top, **q})

# Topic 5: Vector addition and unit vectors
top = "Vector addition and unit vectors"
q_list = [
    {
        "question": r"A unit vector perpendicular to both $\vec{a} = 2\hat{i} - \hat{j} + \hat{k}$ and $\vec{b} = 3\hat{i} + 4\hat{j} - \hat{k}$ is:",
        "options": [
            r"$\frac{-3\hat{i} + 5\hat{j} + 11\hat{k}}{\sqrt{155}}$",
            r"$\frac{3\hat{i} + 5\hat{j} - 11\hat{k}}{\sqrt{155}}$",
            r"$\frac{-3\hat{i} - 5\hat{j} + 11\hat{k}}{\sqrt{155}}$",
            r"$\frac{5\hat{i} - 3\hat{j} + 11\hat{k}}{\sqrt{155}}$"
        ],
        "correctAnswer": 0,
        "explanation": r"Compute $\vec{a} \times \vec{b} = \begin{vmatrix} \hat{i} & \hat{j} & \hat{k} \\ 2 & -1 & 1 \\ 3 & 4 & -1 \end{vmatrix} = \hat{i}(1 - 4) - \hat{j}(-2 - 3) + \hat{k}(8 - (-3)) = -3\hat{i} + 5\hat{j} + 11\hat{k}$. Its magnitude is $\sqrt{(-3)^2 + 5^2 + 11^2} = \sqrt{9 + 25 + 121} = \sqrt{155}$. Thus the unit vector is $\frac{-3\hat{i} + 5\hat{j} + 11\hat{k}}{\sqrt{155}}$."
    },
    {
        "question": r"If $|\vec{a} + \vec{b}| = |\vec{a} - \vec{b}|$, then the angle between $\vec{a}$ and $\vec{b}$ is:",
        "options": [
            r"$\frac{\pi}{2}$",
            r"$\frac{\pi}{4}$",
            r"$\pi$",
            r"$0$"
        ],
        "correctAnswer": 0,
        "explanation": r"Squaring both sides: $|\vec{a} + \vec{b}|^2 = |\vec{a} - \vec{b}|^2 \implies |\vec{a}|^2 + |\vec{b}|^2 + 2\vec{a}\cdot\vec{b} = |\vec{a}|^2 + |\vec{b}|^2 - 2\vec{a}\cdot\vec{b} \implies 4\vec{a}\cdot\vec{b} = 0 \implies \vec{a}\cdot\vec{b} = 0$. Since their dot product is zero, the angle between them is $\frac{\pi}{2}$."
    },
    {
        "question": r"If $\vec{a}$ and $\vec{b}$ are unit vectors and $\theta$ is the angle between them, then $\sin\left(\frac{\theta}{2}\right)$ is equal to:",
        "options": [
            r"$\frac{1}{2}|\vec{a} - \vec{b}|$",
            r"$\frac{1}{2}|\vec{a} + \vec{b}|$",
            r"$|\vec{a} - \vec{b}|$",
            r"$\frac{1}{4}|\vec{a} - \vec{b}|$"
        ],
        "correctAnswer": 0,
        "explanation": r"We have $|\vec{a} - \vec{b}|^2 = |\vec{a}|^2 + |\vec{b}|^2 - 2\vec{a}\cdot\vec{b} = 1 + 1 - 2\cos\theta = 2(1 - \cos\theta) = 2(2\sin^2(\theta/2)) = 4\sin^2(\theta/2)$. Taking the square root: $|\vec{a} - \vec{b}| = 2\sin(\theta/2) \implies \sin\left(\frac{\theta}{2}\right) = \frac{1}{2}|\vec{a} - \vec{b}|$"
    },
    {
        "question": r"The unit vector coplanar with $\hat{i} + \hat{j} + 2\hat{k}$ and $\hat{i} + 2\hat{j} + \hat{k}$, and perpendicular to $\hat{i} + \hat{j} + \hat{k}$ is:",
        "options": [
            r"$\frac{-\hat{j} + \hat{k}}{\sqrt{2}}$",
            r"$\frac{\hat{i} - \hat{k}}{\sqrt{2}}$",
            r"$\frac{\hat{i} - \hat{j}}{\sqrt{2}}$",
            r"$\frac{\hat{j} + \hat{k}}{\sqrt{2}}$"
        ],
        "correctAnswer": 0,
        "explanation": r"Let $\vec{u} = \lambda(\hat{i} + \hat{j} + 2\hat{k}) + \mu(\hat{i} + 2\hat{j} + \hat{k}) = (\lambda + \mu)\hat{i} + (\lambda + 2\mu)\hat{j} + (2\lambda + \mu)\hat{k}$. Since $\vec{u} \perp (\hat{i} + \hat{j} + \hat{k})$, their dot product is zero: $(\lambda + \mu) + (\lambda + 2\mu) + (2\lambda + \mu) = 0 \implies 4\lambda + 4\mu = 0 \implies \mu = -\lambda$. Substituting $\mu = -\lambda$: $\vec{u} = 0\hat{i} - \lambda\hat{j} + \lambda\hat{k} = \lambda(-\hat{j} + \hat{k})$. Normalizing gives the unit vector $\frac{-\hat{j} + \hat{k}}{\sqrt{2}}$."
    },
    {
        "question": r"If $\vec{a} = \hat{i} + \hat{j} + \hat{k}$, $\vec{b} = 4\hat{i} + 3\hat{j} + 4\hat{k}$, and $\vec{c} = \hat{i} + \alpha\hat{j} + \beta\hat{k}$ are linearly dependent and $|\vec{c}| = \sqrt{3}$, then:",
        "options": [
            r"$\alpha = 1, \beta = 1$",
            r"$\alpha = 1, \beta = -1$",
            r"$\alpha = -1, \beta = 1$",
            r"$\alpha = \pm 1, \beta = 1$"
        ],
        "correctAnswer": 0,
        "explanation": r"For linear dependence, $[\vec{a} \; \vec{b} \; \vec{c}] = 0 \implies \begin{vmatrix} 1 & 1 & 1 \\ 4 & 3 & 4 \\ 1 & \alpha & \beta \end{vmatrix} = 0 \implies 1(3\beta - 4\alpha) - 1(4\beta - 4) + 1(4\alpha - 3) = 0 \implies 3\beta - 4\alpha - 4\beta + 4 + 4\alpha - 3 = 0 \implies -\beta + 1 = 0 \implies \beta = 1$. Then $|\vec{c}|^2 = 1^2 + \alpha^2 + \beta^2 = 1 + \alpha^2 + 1 = \alpha^2 + 2 = 3 \implies \alpha^2 = 1 \implies \alpha = \pm 1$. If $\alpha = 1, \beta = 1$, then $\vec{c} = \vec{a}$, which is linearly dependent. Thus $\alpha = 1, \beta = 1$ is valid."
    }
]
for q in q_list:
    batch4_part1.append({"chapter": ch, "subtopic": top, **q})

with open("scripts/math_top100/math_batch4_p1.json", "w") as f:
    json.dump(batch4_part1, f, indent=2)

print(f"Generated {len(batch4_part1)} questions for Batch 4 Part 1.")
