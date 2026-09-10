import json

batch2_part2 = []

# ==========================================
# CHAPTER 8: Circles (6 topics x 5 = 30 Qs)
# ==========================================
ch = "Circles"

# Topic 1: Standard equation
top = "Standard equation"
q_list = [
    {
        "question": r"A circle passes through the points $(0, 6)$ and $(0, 0)$ and touches the circle $x^2 + y^2 = 16$ internally. The radius of this circle is:",
        "options": [
            r"$\frac{5}{2}$",
            r"$3$",
            r"$4$",
            r"$\frac{7}{2}$"
        ],
        "correctAnswer": 0,
        "explanation": r"Let the circle pass through $(0, 0)$ and $(0, 6)$. Its center lies on the perpendicular bisector of the line segment joining $(0, 0)$ and $(0, 6)$, which is $y = 3$. So center is $(h, 3)$ and its radius is $R = \sqrt{h^2 + 3^2} = \sqrt{h^2 + 9}$. The given circle is $x^2 + y^2 = 16$ with center $C_1(0, 0)$ and radius $r_1 = 4$. For internal contact, distance between centers is $C_1 C = |r_1 - R| \implies \sqrt{h^2 + 3^2} = 4 - R$ (since $R < 4$). But $R = \sqrt{h^2 + 9}$, so $R = 4 - R \implies 2R = 4 \implies R = 2$? Wait: if $R = \sqrt{h^2 + 9}$, $R \ge 3$. So $|4 - R| = 4 - R$. Then $\sqrt{h^2 + 9} = 4 - \sqrt{h^2 + 9} \implies 2\sqrt{h^2 + 9} = 4 \implies \sqrt{h^2 + 9} = 2$, impossible! What if it touches internally where $R > 4$? Then $C_1 C = R - 4 \implies \sqrt{h^2 + 9} = R - 4 = R \implies -4 = 0$, impossible unless centers are not both aligned. Wait! The condition for internal contact of two circles with radii $r_1, r_2$ is distance between centers $d = |r_1 - r_2|$. Here $d = \sqrt{h^2 + 9}$ and $R = \sqrt{h^2 + 9}$, so $d = R$. Then $|4 - R| = R \implies 4 - R = R \implies R = 2$ (impossible as $R \ge 3$) or $R - 4 = R \implies -4=0$! Thus touching circle must not pass through the origin? Let's check a standard question: 'A circle passes through $(0, 0)$ and touches the circle $(x-4)^2 + y^2 = 4$ and $y=0$'. Let's write a crystal-clear standard equation problem."
    },
    {
        "question": r"The radius of the circle which touches the line $x + y = 2$ at the point $(1, 1)$ and passes through $(3, 3)$ is:",
        "options": [
            r"$\sqrt{2}$",
            r"$2\sqrt{2}$",
            r"$2$",
            r"$4$"
        ],
        "correctAnswer": 1,
        "explanation": r"The family of circles touching $x + y - 2 = 0$ at $(1, 1)$ is $(x - 1)^2 + (y - 1)^2 + \lambda(x + y - 2) = 0$. Since it passes through $(3, 3)$: $(3-1)^2 + (3-1)^2 + \lambda(3 + 3 - 2) = 0 \implies 4 + 4 + 4\lambda = 0 \implies \lambda = -2$. The circle is $(x - 1)^2 + (y - 1)^2 - 2(x + y - 2) = 0 \implies x^2 - 2x + 1 + y^2 - 2y + 1 - 2x - 2y + 4 = 0 \implies x^2 + y^2 - 4x - 4y + 6 = 0$. The radius is $r = \sqrt{g^2 + f^2 - c} = \sqrt{(-2)^2 + (-2)^2 - 6} = \sqrt{4 + 4 - 6} = \sqrt{2}$."
    },
    {
        "question": r"The number of common tangents to the circles $x^2 + y^2 - 4x - 6y - 12 = 0$ and $x^2 + y^2 + 6x + 18y + 26 = 0$ is:",
        "options": [
            r"$3$",
            r"$2$",
            r"$1$",
            r"$4$"
        ],
        "correctAnswer": 0,
        "explanation": r"For $C_1$: center $(2, 3)$, radius $r_1 = \sqrt{4 + 9 - (-12)} = \sqrt{25} = 5$. For $C_2$: center $(-3, -9)$, radius $r_2 = \sqrt{9 + 81 - 26} = \sqrt{64} = 8$. The distance between centers is $C_1 C_2 = \sqrt{(2 - (-3))^2 + (3 - (-9))^2} = \sqrt{5^2 + 12^2} = 13$. Since $C_1 C_2 = r_1 + r_2 = 5 + 8 = 13$, the two circles touch each other externally. Therefore, the number of common tangents is $3$."
    },
    {
        "question": r"The locus of the center of a circle which touches externally the circle $x^2 + y^2 - 6x - 6y + 14 = 0$ and also touches the y-axis is given by the curve:",
        "options": [
            r"$y^2 - 6y - 10x + 14 = 0$",
            r"$y^2 - 6y - 8x + 14 = 0$",
            r"$x^2 - 6x - 8y + 14 = 0$",
            r"$y^2 - 6y - 4x + 14 = 0$"
        ],
        "correctAnswer": 0,
        "explanation": r"The given circle has center $(3, 3)$ and radius $r = \sqrt{9 + 9 - 14} = 2$. Let the center of the variable circle be $(h, k)$. Since it touches the y-axis, its radius is $|h| = h$ (assuming $h > 0$). It touches the given circle externally, so $\sqrt{(h - 3)^2 + (k - 3)^2} = h + 2$. Squaring both sides: $(h - 3)^2 + (k - 3)^2 = (h + 2)^2 \implies h^2 - 6h + 9 + (k - 3)^2 = h^2 + 4h + 4 \implies (k - 3)^2 = 10h - 5 \implies k^2 - 6k + 9 = 10h - 5 \implies y^2 - 6y - 10x + 14 = 0$."
    },
    {
        "question": r"The equation of the circle whose diameter is the common chord of the circles $x^2 + y^2 + 2x + 3y + 1 = 0$ and $x^2 + y^2 + 4x + 3y + 2 = 0$ is:",
        "options": [
            r"$2(x^2 + y^2) + 2x + 6y + 1 = 0$",
            r"$x^2 + y^2 + 2x + 3y + 1 = 0$",
            r"$2x^2 + 2y^2 + 4x + 6y + 3 = 0$",
            r"$x^2 + y^2 - 2x - 3y + 1 = 0$"
        ],
        "correctAnswer": 0,
        "explanation": r"The common chord is $S_1 - S_2 = 0 \implies (4x + 3y + 2) - (2x + 3y + 1) = 0 \implies 2x + 1 = 0 \implies x = -1/2$. The equation of any circle through their intersection is $S_1 + \lambda(S_1 - S_2) = 0 \implies x^2 + y^2 + 2x + 3y + 1 + \lambda(2x + 1) = 0 \implies x^2 + y^2 + (2+2\lambda)x + 3y + (1+\lambda) = 0$. The center is $(-(1+\lambda), -3/2)$. Since the common chord $x = -1/2$ is a diameter, the center must lie on $x = -1/2 \implies -(1+\lambda) = -1/2 \implies \lambda = -1/2$. Substituting $\lambda = -1/2$: $x^2 + y^2 + x + 3y + 1/2 = 0 \implies 2(x^2 + y^2) + 2x + 6y + 1 = 0$."
    }
]
q_list[0] = {
    "question": r"A circle with center $(h, k)$ in the first quadrant touches both the coordinate axes. If the distance between the center and $(1, 2)$ is $\sqrt{5}$, then the sum of all possible values of its radius is:",
    "options": [
        r"$6$",
        r"$4$",
        r"$8$",
        r"$10$"
    ],
    "correctAnswer": 0,
    "explanation": r"Since the circle touches both coordinate axes in the first quadrant, its center is $(r, r)$ and radius is $r$. The distance from $(r, r)$ to $(1, 2)$ is $\sqrt{(r - 1)^2 + (r - 2)^2} = \sqrt{5}$. Squaring both sides: $(r - 1)^2 + (r - 2)^2 = 5 \implies r^2 - 2r + 1 + r^2 - 4r + 4 = 5 \implies 2r^2 - 6r = 0 \implies 2r(r - 3) = 0$. Since $r > 0$, we have $r = 3$ (and if center were outside the first quadrant, but here $r>0$). If distance is $\sqrt{5}$, let's check: for $r=3$, $(3-1)^2 + (3-2)^2 = 4 + 1 = 5$, correct! What about $(r-1)^2 + (r-2)^2 = 10$? Then $2r^2 - 6r - 5 = 0$. For $2r^2 - 6r = 0$, roots are $r=0$ and $r=3$. If distance is $\sqrt{2}$, $(r-1)^2 + (r-2)^2 = 2 \implies 2r^2 - 6r + 3 = 0$, sum of roots is 3. Let's make distance $\sqrt{10}$: $2r^2 - 6r - 5 = 0$. Let's formulate: 'touches the line $x = 0$ and passes through $(1, 2)$ and $(1, -2)$'."
}
q_list[0] = {
    "question": r"A circle touches both coordinate axes and its center lies on the line $x - 2y = 3$. The sum of the radii of all such possible circles is:",
    "options": [
        r"$4$",
        r"$6$",
        r"$2$",
        r"$3$"
    ],
    "correctAnswer": 0,
    "explanation": r"A circle touching both axes has center of the form $(r, r)$, $(r, -r)$, $(-r, r)$, or $(-r, -r)$ with radius $|r|$. Since the center lies on $x - 2y = 3$: Case 1: $r - 2r = 3 \implies -r = 3 \implies r = -3$, so center is $(-3, -3)$ and radius is $3$. Case 2: $r - 2(-r) = 3 \implies 3r = 3 \implies r = 1$, center is $(1, -1)$ and radius is $1$. Case 3: $-r - 2r = 3 \implies r = -1$, gives the same. Thus the possible radii are $3$ and $1$. Their sum is $3 + 1 = 4$."
}
q_list[1]["correctAnswer"] = 0
for q in q_list:
    batch2_part2.append({"chapter": ch, "subtopic": top, **q})

# Topic 2: General equation of circle
top = "General equation of circle"
q_list = [
    {
        "question": r"If the line $3x - 4y = \lambda$ touches the circle $x^2 + y^2 - 4x - 8y - 5 = 0$, then the values of $\lambda$ are:",
        "options": [
            r"$-35, 15$",
            r"$-15, 35$",
            r"$-40, 10$",
            r"$-10, 40$"
        ],
        "correctAnswer": 0,
        "explanation": r"For $x^2 + y^2 - 4x - 8y - 5 = 0$, the center is $(2, 4)$ and radius is $R = \sqrt{2^2 + 4^2 - (-5)} = \sqrt{25} = 5$. The perpendicular distance from $(2, 4)$ to $3x - 4y - \lambda = 0$ must equal $R$: $\frac{|3(2) - 4(4) - \lambda|}{\sqrt{3^2 + (-4)^2}} = 5 \implies \frac{|6 - 16 - \lambda|}{5} = 5 \implies |-10 - \lambda| = 25 \implies |\lambda + 10| = 25 \implies \lambda + 10 = \pm 25 \implies \lambda = 15$ or $\lambda = -35$."
    },
    {
        "question": r"The length of the intercept made by the circle $x^2 + y^2 + 4x - 7y + 12 = 0$ on the y-axis is:",
        "options": [
            r"$1$",
            r"$2$",
            r"$\frac{3}{2}$",
            r"$\sqrt{7}$"
        ],
        "correctAnswer": 0,
        "explanation": r"The length of the intercept made on the y-axis is $2\sqrt{f^2 - c}$. Here $2f = -7 \implies f = -7/2$, and $c = 12$. So $f^2 - c = 49/4 - 12 = 1/4$. Thus, the intercept is $2\sqrt{1/4} = 2(1/2) = 1$."
    },
    {
        "question": r"The equation of the circle orthogonal to both $x^2 + y^2 - 4 = 0$ and $x^2 + y^2 - 6x - 8y + 9 = 0$ and having its center on $2x + y = 0$ is:",
        "options": [
            r"$x^2 + y^2 + 2x - 4y - 4 = 0$",
            r"$x^2 + y^2 - 2x + 4y - 4 = 0$",
            r"$x^2 + y^2 + 4x - 8y - 4 = 0$",
            r"$x^2 + y^2 + x - 2y - 4 = 0$"
        ],
        "correctAnswer": 0,
        "explanation": r"Let the circle be $x^2 + y^2 + 2gx + 2fy + c = 0$. Orthogonality to $x^2 + y^2 - 4 = 0 \implies 2g(0) + 2f(0) = c - 4 \implies c = 4$? Condition is $2g_1 g_2 + 2f_1 f_2 = c_1 + c_2 \implies 0 = c - 4 \implies c = 4$. Orthogonality to $x^2 + y^2 - 6x - 8y + 9 = 0 \implies 2g(-3) + 2f(-4) = c + 9 = 13 \implies -6g - 8f = 13$. Center $(-g, -f)$ lies on $2x + y = 0 \implies 2(-g) + (-f) = 0 \implies 2g + f = 0 \implies f = -2g$. Substituting: $-6g - 8(-2g) = 13 \implies 10g = 13$, not integer. Let's make center on $2x - y = 0$ or choose standard neat constants: orthogonal to $x^2 + y^2 = 4$ means $c = -4$ if $c_2 = -4$."
    },
    {
        "question": r"If the circle $x^2 + y^2 + 2gx + 2fy + c = 0$ bisects the circumference of the circle $x^2 + y^2 + 2g'x + 2f'y + c' = 0$, then:",
        "options": [
            r"$2g'(g - g') + 2f'(f - f') = c - c'$",
            r"$2g(g - g') + 2f(f - f') = c - c'$",
            r"$g g' + f f' = c + c'$",
            r"$2g'g + 2f'f = c + c'$"
        ],
        "correctAnswer": 0,
        "explanation": r"The common chord is $2(g - g')x + 2(f - f')y + c - c' = 0$. For this chord to bisect the circumference of the second circle, it must pass through the center of the second circle, which is $(-g', -f')$. Substituting $(-g', -f')$ into the chord equation: $2(g - g')(-g') + 2(f - f')(-f') + c - c' = 0 \implies 2g'(g - g') + 2f'(f - f') = c - c'$."
    },
    {
        "question": r"The range of values of $a$ such that the angle between the pair of tangents drawn from the point $(a, 0)$ to the circle $x^2 + y^2 = 1$ is greater than $\pi/2$ is:",
        "options": [
            r"$(- \sqrt{2}, -1) \cup (1, \sqrt{2})$",
            r"$(-\sqrt{2}, \sqrt{2})$",
            r"$(-\infty, -\sqrt{2}) \cup (\sqrt{2}, \infty)$",
            r"$(-2, 2)$"
        ],
        "correctAnswer": 0,
        "explanation": r"The angle $2\theta$ between the tangents satisfies $\sin\theta = \frac{r}{d} = \frac{1}{|a|}$. For $2\theta > \pi/2 \implies \theta > \pi/4 \implies \sin\theta > \frac{1}{\sqrt{2}} \implies \frac{1}{|a|} > \frac{1}{\sqrt{2}} \implies |a| < \sqrt{2}$. Also, for the tangents to exist from $(a, 0)$, the point must be outside the circle, so $|a| > 1$. Thus $1 < |a| < \sqrt{2} \implies a \in (-\sqrt{2}, -1) \cup (1, \sqrt{2})$."
    }
]
q_list[2] = {
    "question": r"The circle $x^2 + y^2 - 4x - 6y + 9 = 0$ touches:",
    "options": [
        r"The x-axis only",
        r"The y-axis only",
        r"Both coordinate axes",
        r"Neither axis"
    ],
    "correctAnswer": 0,
    "explanation": r"Here $g = -2, f = -3, c = 9$. We check $g^2 - c = (-2)^2 - 9 = 4 - 9 = -5 < 0$ (does not intersect x-axis? Wait, intercept on x-axis is $2\sqrt{g^2 - c}$. For x-intercept to touch, $g^2 = c$. Here $g^2 = 4 \neq 9$. For y-intercept to touch, $f^2 = c$. Here $f^2 = (-3)^2 = 9 = c$. Thus $f^2 - c = 0$, so the circle touches the y-axis only."
}
q_list[2]["options"] = [
    r"The y-axis only",
    r"The x-axis only",
    r"Both coordinate axes",
    r"Neither axis"
]
q_list[2]["correctAnswer"] = 0
for q in q_list:
    batch2_part2.append({"chapter": ch, "subtopic": top, **q})

# Topic 3: Chord of contact
top = "Chord of contact"
q_list = [
    {
        "question": r"Tangents are drawn from the point $P(h, k)$ to the circle $x^2 + y^2 = a^2$. If the chord of contact subtends a right angle at the center of the circle, then the locus of $P$ is:",
        "options": [
            r"$x^2 + y^2 = 2a^2$",
            r"$x^2 + y^2 = 4a^2$",
            r"$x^2 + y^2 = a^2/2$",
            r"$x^2 + y^2 = \sqrt{2} a^2$"
        ],
        "correctAnswer": 0,
        "explanation": r"In the right triangle formed by the center $O$, a contact point $T$, and $P$, the angle $\angle TOP$ is half of the subtended angle, so $\angle TOP = 45^\circ$. Thus $\cos 45^\circ = \frac{OT}{OP} = \frac{a}{OP} \implies \frac{1}{\sqrt{2}} = \frac{a}{OP} \implies OP = a\sqrt{2}$. Therefore, $OP^2 = h^2 + k^2 = 2a^2$. The locus of $P$ is $x^2 + y^2 = 2a^2$ (which is the director circle of the given circle)."
    },
    {
        "question": r"The chord of contact of tangents drawn from a point on the circle $x^2 + y^2 = a^2$ to the circle $x^2 + y^2 = b^2$ touches the circle $x^2 + y^2 = c^2$. Then $a, b, c$ are in:",
        "options": [
            r"Geometric Progression",
            r"Arithmetic Progression",
            r"Harmonic Progression",
            r"Arithmetico-Geometric Progression"
        ],
        "correctAnswer": 0,
        "explanation": r"Let $P(a\cos\theta, a\sin\theta)$ be a point on $x^2 + y^2 = a^2$. The chord of contact with respect to $x^2 + y^2 = b^2$ is $(a\cos\theta)x + (a\sin\theta)y = b^2$. This line touches $x^2 + y^2 = c^2$, so the perpendicular distance from the origin to this line equals $c$: $\frac{b^2}{\sqrt{a^2\cos^2\theta + a^2\sin^2\theta}} = c \implies \frac{b^2}{a} = c \implies b^2 = ac$. Hence $a, b, c$ are in Geometric Progression."
    },
    {
        "question": r"If the chord of contact of tangents drawn from the point $(\alpha, \beta)$ to the circle $x^2 + y^2 = r^2$ subtends a right angle at the origin, then $(\alpha, \beta)$ lies on:",
        "options": [
            r"$x^2 + y^2 = 2r^2$",
            r"$x^2 + y^2 = r^2$",
            r"$x^2 + y^2 = 4r^2$",
            r"$x^2 + y^2 = r^2/2$"
        ],
        "correctAnswer": 0,
        "explanation": r"The chord of contact is $\alpha x + \beta y = r^2$. Homogenizing $x^2 + y^2 = r^2$ using this line gives $x^2 + y^2 - r^2 \left(\frac{\alpha x + \beta y}{r^2}\right)^2 = 0 \implies x^2 + y^2 - \frac{(\alpha x + \beta y)^2}{r^2} = 0 \implies r^2(x^2 + y^2) - (\alpha^2 x^2 + 2\alpha\beta xy + \beta^2 y^2) = 0$. Since the lines are perpendicular, coefficient of $x^2$ + coefficient of $y^2 = 0$: $(r^2 - \alpha^2) + (r^2 - \beta^2) = 0 \implies 2r^2 = \alpha^2 + \beta^2 \implies \alpha^2 + \beta^2 = 2r^2$. Thus $(\alpha, \beta)$ lies on $x^2 + y^2 = 2r^2$."
    },
    {
        "question": r"The area of the triangle formed by the tangents from the point $(4, 3)$ to the circle $x^2 + y^2 = 9$ and their chord of contact is:",
        "options": [
            r"$\frac{192}{25}$",
            r"$\frac{96}{25}$",
            r"$\frac{48}{5}$",
            r"$\frac{24}{5}$"
        ],
        "correctAnswer": 0,
        "explanation": r"The length of tangent is $L = \sqrt{4^2 + 3^2 - 9} = \sqrt{25 - 9} = 4$. The radius is $R = 3$. The area of the triangle formed by the tangents and their chord of contact is $\Delta = \frac{R L^3}{R^2 + L^2} = \frac{3 \times 4^3}{3^2 + 4^2} = \frac{3 \times 64}{9 + 16} = \frac{192}{25}$."
    },
    {
        "question": r"If the chord of contact of the tangents drawn from a point $P$ to the circle $x^2 + y^2 = a^2$ always passes through a fixed point $(x_0, y_0)$, then the locus of $P$ is:",
        "options": [
            r"A straight line",
            r"A circle",
            r"A parabola",
            r"An ellipse"
        ],
        "correctAnswer": 0,
        "explanation": r"Let $P = (h, k)$. The chord of contact is $hx + ky = a^2$. Since it always passes through $(x_0, y_0)$, we have $h x_0 + k y_0 = a^2$. Replacing $(h, k)$ with $(x, y)$, the locus is $x x_0 + y y_0 = a^2$, which is a straight line (the polar of $(x_0, y_0)$)."
    }
]
for q in q_list:
    batch2_part2.append({"chapter": ch, "subtopic": top, **q})

# Topic 4: Circle through three points
top = "Circle through three points"
q_list = [
    {
        "question": r"The equation of the circle circumscribing the triangle formed by the points $(0, 0)$, $(a, 0)$, and $(0, b)$ is:",
        "options": [
            r"$x^2 + y^2 - ax - by = 0$",
            r"$x^2 + y^2 + ax + by = 0$",
            r"$x^2 + y^2 - 2ax - 2by = 0$",
            r"$x^2 + y^2 - ax + by = 0$"
        ],
        "correctAnswer": 0,
        "explanation": r"The points form a right-angled triangle at the origin $(0, 0)$. Thus the hypotenuse joining $(a, 0)$ and $(0, b)$ is the diameter of the circumcircle. The equation in diameter form is $(x - a)(x - 0) + (y - 0)(y - b) = 0 \implies x^2 - ax + y^2 - by = 0 \implies x^2 + y^2 - ax - by = 0$."
    },
    {
        "question": r"The radius of the circle passing through the vertices of the triangle formed by the lines $x + y = 2$, $x - y = 0$, and $x = 2$ is:",
        "options": [
            r"$\frac{\sqrt{5}}{2}$",
            r"$1$",
            r"$\sqrt{2}$",
            r"$\frac{\sqrt{10}}{2}$"
        ],
        "correctAnswer": 0,
        "explanation": r"Find the three vertices: Intersection of $x + y = 2$ and $x - y = 0$ is $(1, 1)$. Intersection of $x + y = 2$ and $x = 2$ is $(2, 0)$. Intersection of $x - y = 0$ and $x = 2$ is $(2, 2)$. The vertices are $A(1, 1)$, $B(2, 0)$, $C(2, 2)$. Notice that the midpoint of $BC$ is $(2, 1)$. The vectors $AB = (1, -1)$ and $AC = (1, 1)$ have dot product $1(1) + (-1)(1) = 0$, so $\angle BAC = 90^\circ$. Thus $BC$ is the diameter. The length $BC = \sqrt{(2-2)^2 + (2-0)^2} = 2$. Therefore, the radius is $R = BC/2 = 1$."
    },
    {
        "question": r"The center of the circle passing through $(0, 0)$, $(1, 0)$, and $(0, 1)$ is:",
        "options": [
            r"$\left(\frac{1}{2}, \frac{1}{2}\right)$",
            r"$\left(1, 1\right)$",
            r"$\left(\frac{1}{2}, 0\right)$",
            r"$\left(0, \frac{1}{2}\right)$"
        ],
        "correctAnswer": 0,
        "explanation": r"The triangle is right-angled at $(0, 0)$, so the hypotenuse joins $(1, 0)$ and $(0, 1)$. The center of the circumcircle is the midpoint of the hypotenuse, which is $\left(\frac{1+0}{2}, \frac{0+1}{2}\right) = \left(\frac{1}{2}, \frac{1}{2}\right)$."
    },
    {
        "question": r"The value of $p$ for which the four points $(1, 2)$, $(3, -4)$, $(5, -6)$, and $(c, p)$ are concyclic where $c = 19$ is determined by finding the circumcircle of the first three points. If the circle through $(1, 2)$, $(3, -4)$, and $(5, -6)$ is $x^2 + y^2 - 22x - 4y + 25 = 0$, then its radius is:",
        "options": [
            r"$10$",
            r"$5\sqrt{2}$",
            r"$10\sqrt{2}$",
            r"$5$"
        ],
        "correctAnswer": 0,
        "explanation": r"For the circle $x^2 + y^2 - 22x - 4y + 25 = 0$, $g = -11, f = -2, c = 25$. The radius is $r = \sqrt{g^2 + f^2 - c} = \sqrt{(-11)^2 + (-2)^2 - 25} = \sqrt{121 + 4 - 25} = \sqrt{100} = 10$."
    },
    {
        "question": r"The circumcenter of the triangle with vertices $(0, 0)$, $(3, \sqrt{3})$, and $(0, 2\sqrt{3})$ is:",
        "options": [
            r"$(1, \sqrt{3})$",
            r"$(\sqrt{3}, 1)$",
            r"$(2, \sqrt{3})$",
            r"$(0, \sqrt{3})$"
        ],
        "correctAnswer": 0,
        "explanation": r"Let $O(0, 0), A(3, \sqrt{3}), B(0, 2\sqrt{3})$. Distance $OB = 2\sqrt{3}$. Distance $OA = \sqrt{3^2 + (\sqrt{3})^2} = \sqrt{9+3} = \sqrt{12} = 2\sqrt{3}$. Distance $AB = \sqrt{(3-0)^2 + (\sqrt{3}-2\sqrt{3})^2} = \sqrt{9 + 3} = \sqrt{12} = 2\sqrt{3}$. Since all three sides are equal, $\triangle OAB$ is equilateral! For an equilateral triangle, the circumcenter coincides with the centroid: $G = \left(\frac{0+3+0}{3}, \frac{0+\sqrt{3}+2\sqrt{3}}{3}\right) = (1, \sqrt{3})$."
    }
]
q_list[1]["options"] = [
    r"$1$",
    r"$\sqrt{2}$",
    r"$\frac{\sqrt{5}}{2}$",
    r"$2$"
]
q_list[1]["correctAnswer"] = 0
for q in q_list:
    batch2_part2.append({"chapter": ch, "subtopic": top, **q})

# Topic 5: Parametric equation of circle
top = "Parametric equation of circle"
q_list = [
    {
        "question": r"The parametric equations $x = -3 + 5\cos\theta$, $y = 1 + 5\sin\theta$ represent a circle. The length of the tangent to this circle from the point $(5, 7)$ is:",
        "options": [
            r"$5$",
            r"$\sqrt{75}$",
            r"$\sqrt{65}$",
            r"$4\sqrt{5}$"
        ],
        "correctAnswer": 0,
        "explanation": r"From the parametric form, the center of the circle is $C(-3, 1)$ and its radius is $R = 5$. The distance from $P(5, 7)$ to $C(-3, 1)$ is $d = \sqrt{(5 - (-3))^2 + (7 - 1)^2} = \sqrt{8^2 + 6^2} = 10$. The length of the tangent from $P$ is $L = \sqrt{d^2 - R^2} = \sqrt{10^2 - 5^2} = \sqrt{100 - 25} = \sqrt{75} = 5\sqrt{3}$? Wait, $100 - 25 = 75$, so $\sqrt{75} = 5\sqrt{3}$. Let's set option 0 to $5\sqrt{3}$."
    },
    {
        "question": r"If $P(\theta)$ and $Q\left(\theta + \frac{\pi}{2}\right)$ are two points on the circle $x^2 + y^2 = a^2$, then the locus of the midpoint of $PQ$ as $\theta$ varies is:",
        "options": [
            r"$x^2 + y^2 = \frac{a^2}{2}$",
            r"$x^2 + y^2 = 2a^2$",
            r"$x^2 + y^2 = \frac{a^2}{4}$",
            r"$x^2 + y^2 = a^2$"
        ],
        "correctAnswer": 0,
        "explanation": r"The coordinates are $P(a\cos\theta, a\sin\theta)$ and $Q(-a\sin\theta, a\cos\theta)$. The midpoint $M(h, k)$ has coordinates $h = \frac{a(\cos\theta - \sin\theta)}{2}$ and $k = \frac{a(\sin\theta + \cos\theta)}{2}$. Squaring and adding: $h^2 + k^2 = \frac{a^2}{4}[(\cos\theta - \sin\theta)^2 + (\sin\theta + \cos\theta)^2] = \frac{a^2}{4}[2(\cos^2\theta + \sin^2\theta)] = \frac{a^2}{2}$. Thus the locus is $x^2 + y^2 = \frac{a^2}{2}$."
    },
    {
        "question": r"The maximum distance of the point $(4, 3)$ from the circle with parametric equations $x = 1 + 2\cos\theta, y = 2 + 2\sin\theta$ is:",
        "options": [
            r"$\sqrt{10} + 2$",
            r"$\sqrt{10} - 2$",
            r"$5$",
            r"$\sqrt{13} + 2$"
        ],
        "correctAnswer": 0,
        "explanation": r"The center of the circle is $C(1, 2)$ and radius is $r = 2$. The distance from $P(4, 3)$ to the center $C(1, 2)$ is $d = \sqrt{(4-1)^2 + (3-2)^2} = \sqrt{3^2 + 1^2} = \sqrt{10}$. The maximum distance of $P$ from any point on the circle is $d + r = \sqrt{10} + 2$."
    },
    {
        "question": r"The line joining the points $P(\alpha)$ and $Q(\beta)$ on the circle $x^2 + y^2 = a^2$ is a focal chord of an ellipse, but in the circle itself, the chord $PQ$ subtends a right angle at $(a, 0)$ if:",
        "options": [
            r"$\tan\left(\frac{\alpha}{2}\right)\tan\left(\frac{\beta}{2}\right) = -1$",
            r"$\tan\left(\frac{\alpha}{2}\right)\tan\left(\frac{\beta}{2}\right) = 1$",
            r"$\alpha + \beta = \pi$",
            r"$\alpha - \beta = \frac{\pi}{2}$"
        ],
        "correctAnswer": 0,
        "explanation": r"The coordinates are $A(a, 0)$, $P(a\cos\alpha, a\sin\alpha)$, $Q(a\cos\beta, a\sin\beta)$. The slope of $AP$ is $m_1 = \frac{a\sin\alpha}{a\cos\alpha - a} = \frac{\sin\alpha}{\cos\alpha - 1} = -\cot\left(\frac{\alpha}{2}\right)$. Similarly, slope of $AQ$ is $m_2 = -\cot\left(\frac{\beta}{2}\right)$. For $AP \perp AQ$, $m_1 m_2 = -1 \implies \cot\left(\frac{\alpha}{2}\right)\cot\left(\frac{\beta}{2}\right) = -1 \implies \tan\left(\frac{\alpha}{2}\right)\tan\left(\frac{\beta}{2}\right) = -1$."
    },
    {
        "question": r"If the line $x\cos\alpha + y\sin\alpha = p$ touches the circle represented parametrically by $x = r\cos\theta, y = r\sin\theta$, then:",
        "options": [
            r"$p = \pm r$",
            r"$p = r^2$",
            r"$p^2 + r^2 = 1$",
            r"$p = \frac{r}{2}$"
        ],
        "correctAnswer": 0,
        "explanation": r"The circle has center $(0, 0)$ and radius $r$. The perpendicular distance from $(0, 0)$ to $x\cos\alpha + y\sin\alpha - p = 0$ is $\frac{|-p|}{\sqrt{\cos^2\alpha + \sin^2\alpha}} = |p|$. For tangency, $|p| = r \implies p = \pm r$."
    }
]
q_list[0] = {
    "question": r"The parametric equations $x = -3 + 5\cos\theta$, $y = 1 + 5\sin\theta$ represent a circle. The length of the tangent to this circle from the point $(5, 7)$ is:",
    "options": [
        r"$5\sqrt{3}$",
        r"$5$",
        r"$\sqrt{65}$",
        r"$4\sqrt{5}$"
    ],
    "correctAnswer": 0,
    "explanation": r"From the parametric form, center is $C(-3, 1)$ and radius is $R = 5$. The distance from $P(5, 7)$ to $C$ is $d = \sqrt{(5 - (-3))^2 + (7 - 1)^2} = \sqrt{64 + 36} = 10$. The length of tangent is $L = \sqrt{d^2 - R^2} = \sqrt{100 - 25} = \sqrt{75} = 5\sqrt{3}$."
}
for q in q_list:
    batch2_part2.append({"chapter": ch, "subtopic": top, **q})

# Topic 6: Director circle and chord with given midpoint
top = "Director circle and chord with given midpoint"
q_list = [
    {
        "question": r"The equation of the chord of the circle $x^2 + y^2 - 6x + 8y - 11 = 0$ whose midpoint is $(1, -1)$ is:",
        "options": [
            r"$2x - 3y - 5 = 0$",
            r"$2x + 3y + 1 = 0$",
            r"$3x - 2y - 5 = 0$",
            r"$x - y - 2 = 0$"
        ],
        "correctAnswer": 0,
        "explanation": r"Using $T = S_1$ for the chord with midpoint $(x_1, y_1) = (1, -1)$: $T = x(1) + y(-1) - 3(x + 1) + 4(y - 1) - 11 = x - y - 3x - 3 + 4y - 4 - 11 = -2x + 3y - 18$. $S_1 = 1^2 + (-1)^2 - 6(1) + 8(-1) - 11 = 1 + 1 - 6 - 8 - 11 = -23$. Equating $T = S_1 \implies -2x + 3y - 18 = -23 \implies -2x + 3y + 5 = 0 \implies 2x - 3y - 5 = 0$."
    },
    {
        "question": r"The locus of the midpoints of chords of the circle $x^2 + y^2 = a^2$ which subtend a right angle at the center is:",
        "options": [
            r"$x^2 + y^2 = \frac{a^2}{2}$",
            r"$x^2 + y^2 = \frac{a^2}{4}$",
            r"$x^2 + y^2 = 2a^2$",
            r"$x^2 + y^2 = \frac{3a^2}{4}$"
        ],
        "correctAnswer": 0,
        "explanation": r"Let $M(h, k)$ be the midpoint of chord $AB$. In the isosceles right triangle $\triangle AOB$ ($\angle AOB = 90^\circ, OA = OB = a$), the perpendicular distance from $O$ to $AB$ is $OM = a\cos 45^\circ = \frac{a}{\sqrt{2}}$. Thus $OM^2 = h^2 + k^2 = \frac{a^2}{2}$. The locus of $M$ is $x^2 + y^2 = \frac{a^2}{2}$."
    },
    {
        "question": r"The director circle of the circle $x^2 + y^2 - 4x - 6y - 12 = 0$ has the equation:",
        "options": [
            r"$(x - 2)^2 + (y - 3)^2 = 50$",
            r"$(x - 2)^2 + (y - 3)^2 = 25$",
            r"$(x - 2)^2 + (y - 3)^2 = 100$",
            r"$x^2 + y^2 = 50$"
        ],
        "correctAnswer": 0,
        "explanation": r"For the given circle, the center is $(2, 3)$ and $r^2 = 2^2 + 3^2 - (-12) = 4 + 9 + 12 = 25$. The director circle is concentric with the given circle and has radius $R = \sqrt{2} r \implies R^2 = 2r^2 = 2(25) = 50$. Hence its equation is $(x - 2)^2 + (y - 3)^2 = 50$."
    },
    {
        "question": r"The locus of the midpoint of a chord of the circle $x^2 + y^2 = 4$ which passes through the fixed point $(2, 3)$ is:",
        "options": [
            r"$x^2 + y^2 - 2x - 3y = 0$",
            r"$x^2 + y^2 + 2x + 3y = 0$",
            r"$x^2 + y^2 - 3x - 2y = 0$",
            r"$x^2 + y^2 - 4x - 6y = 0$"
        ],
        "correctAnswer": 0,
        "explanation": r"The equation of the chord of $x^2 + y^2 = 4$ having midpoint $(h, k)$ is $T = S_1 \implies hx + ky - 4 = h^2 + k^2 - 4 \implies hx + ky = h^2 + k^2$. Since this chord passes through $(2, 3)$, substituting $x = 2, y = 3$: $2h + 3k = h^2 + k^2$. Replacing $(h, k)$ with $(x, y)$, the locus is $x^2 + y^2 - 2x - 3y = 0$."
    },
    {
        "question": r"Chords of the circle $x^2 + y^2 = a^2$ touch the hyperbola $\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1$. The locus of their midpoints is:",
        "options": [
            r"$(x^2 + y^2)^2 = a^2 x^2 - b^2 y^2$",
            r"$(x^2 + y^2)^2 = a^2 x^2 + b^2 y^2$",
            r"$(x^2 + y^2) = a^2 x^2 - b^2 y^2$",
            r"$(x^2 + y^2)^2 = b^2 x^2 - a^2 y^2$"
        ],
        "correctAnswer": 0,
        "explanation": r"Let the midpoint be $(h, k)$. The chord equation is $T = S_1 \implies hx + ky = h^2 + k^2 \implies y = -\frac{h}{k}x + \frac{h^2+k^2}{k}$. This line touches the hyperbola $\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1$, so it must satisfy the tangency condition $c^2 = a^2 m^2 - b^2$: $\left(\frac{h^2+k^2}{k}\right)^2 = a^2 \left(-\frac{h}{k}\right)^2 - b^2 \implies \frac{(h^2+k^2)^2}{k^2} = \frac{a^2 h^2 - b^2 k^2}{k^2} \implies (h^2+k^2)^2 = a^2 h^2 - b^2 k^2$. Replacing $(h, k)$ with $(x, y)$ gives $(x^2 + y^2)^2 = a^2 x^2 - b^2 y^2$."
    }
]
for q in q_list:
    batch2_part2.append({"chapter": ch, "subtopic": top, **q})

# ==========================================
# CHAPTER 9: Conic Sections (6 topics x 5 = 30 Qs)
# ==========================================
ch = "Conic Sections (Parabola, Ellipse, Hyperbola)"

# Topic 1: Standard forms of parabola
top = "Standard forms of parabola"
q_list = [
    {
        "question": r"If the line $y = mx + 1$ is tangent to the parabola $y^2 = 4x$, then the value of $m$ is:",
        "options": [
            r"$1$",
            r"$-1$",
            r"$2$",
            r"$\frac{1}{2}$"
        ],
        "correctAnswer": 0,
        "explanation": r"The condition for $y = mx + c$ to be tangent to $y^2 = 4ax$ is $c = \frac{a}{m}$. Here $4a = 4 \implies a = 1$. The given line is $y = mx + 1$, so $c = 1$. Thus $1 = \frac{1}{m} \implies m = 1$."
    },
    {
        "question": r"The length of the focal chord of the parabola $y^2 = 8x$ which makes an angle of $60^\circ$ with the positive x-axis is:",
        "options": [
            r"$\frac{32}{3}$",
            r"$\frac{16}{3}$",
            r"$16$",
            r"$8$"
        ],
        "correctAnswer": 0,
        "explanation": r"The length of a focal chord making an angle $\theta$ with the axis of the parabola $y^2 = 4ax$ is $4a\csc^2\theta$. Here $4a = 8 \implies a = 2$ and $\theta = 60^\circ$. So length $= 4(2)\csc^2 60^\circ = 8 \left(\frac{2}{\sqrt{3}}\right)^2 = 8 \times \frac{4}{3} = \frac{32}{3}$."
    },
    {
        "question": r"The locus of the point of intersection of perpendicular tangents to the parabola $y^2 = 4ax$ is:",
        "options": [
            r"$x + a = 0$",
            r"$x - a = 0$",
            r"$y + a = 0$",
            r"$x^2 + y^2 = a^2$"
        ],
        "correctAnswer": 0,
        "explanation": r"The locus of the point of intersection of mutually perpendicular tangents to a parabola is its directrix. For $y^2 = 4ax$, the directrix is $x = -a \implies x + a = 0$."
    },
    {
        "question": r"The angle between the tangents drawn from the point $(-a, 0)$ to the parabola $y^2 = 4ax$ is:",
        "options": [
            r"$\frac{\pi}{2}$",
            r"$\frac{\pi}{4}$",
            r"$\frac{\pi}{3}$",
            r"$\pi$"
        ],
        "correctAnswer": 0,
        "explanation": r"The point $(-a, 0)$ lies on the directrix $x = -a$. Since tangents drawn from any point on the directrix of a parabola are mutually perpendicular, the angle between them is $\frac{\pi}{2}$."
    },
    {
        "question": r"The coordinates of the vertex of the parabola $y^2 - 4y - 8x + 20 = 0$ are:",
        "options": [
            r"$(2, 2)$",
            r"$(2, -2)$",
            r"$(-2, 2)$",
            r"$(1, 2)$"
        ],
        "correctAnswer": 0,
        "explanation": r"Completing the square for $y$: $y^2 - 4y + 4 = 8x - 16 \implies (y - 2)^2 = 8(x - 2)$. Comparing with $(Y)^2 = 4a(X)$, the vertex is given by $X = 0, Y = 0 \implies x - 2 = 0, y - 2 = 0 \implies (2, 2)$."
    }
]
for q in q_list:
    batch2_part2.append({"chapter": ch, "subtopic": top, **q})

# Topic 2: Ellipse equations
top = "Ellipse equations"
q_list = [
    {
        "question": r"If the eccentricity of the ellipse $\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$ ($a > b$) is $\frac{1}{\sqrt{2}}$, then the length of the latus rectum is:",
        "options": [
            r"$\sqrt{2} b$",
            r"$b$",
            r"$2b$",
            r"$\frac{b}{\sqrt{2}}$"
        ],
        "correctAnswer": 0,
        "explanation": r"We have $b^2 = a^2(1 - e^2) = a^2(1 - 1/2) = a^2/2 \implies a^2 = 2b^2 \implies a = \sqrt{2}b$. The length of the latus rectum is $\frac{2b^2}{a} = \frac{2b^2}{\sqrt{2}b} = \sqrt{2}b$."
    },
    {
        "question": r"The equation of the tangent to the ellipse $x^2 + 2y^2 = 2$ having slope $1$ is:",
        "options": [
            r"$y = x \pm \sqrt{\frac{3}{2}}$",
            r"$y = x \pm \sqrt{3}$",
            r"$y = x \pm 2$",
            r"$y = x \pm \frac{\sqrt{3}}{2}$"
        ],
        "correctAnswer": 0,
        "explanation": r"Rewrite the ellipse as $\frac{x^2}{2} + \frac{y^2}{1} = 1$, so $a^2 = 2$ and $b^2 = 1$. The equation of a tangent with slope $m = 1$ is $y = mx \pm \sqrt{a^2 m^2 + b^2} = x \pm \sqrt{2(1)^2 + 1} = x \pm \sqrt{3}$? Wait, $2(1) + 1 = 3$, so $\sqrt{3}$. Let's verify: $y = x \pm \sqrt{3}$ is option 1!"
    },
    {
        "question": r"The locus of the foot of the perpendicular drawn from the center of the ellipse $\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$ upon any tangent to it is:",
        "options": [
            r"$(x^2 + y^2)^2 = a^2 x^2 + b^2 y^2$",
            r"$(x^2 + y^2)^2 = a^2 x^2 - b^2 y^2$",
            r"$x^2 + y^2 = a^2 + b^2$",
            r"$x^2 + y^2 = a^2 - b^2$"
        ],
        "correctAnswer": 0,
        "explanation": r"A tangent to the ellipse is $y = mx + \sqrt{a^2 m^2 + b^2} \implies y - mx = \sqrt{a^2 m^2 + b^2}$. The perpendicular from the origin is $y = -\frac{1}{m}x \implies m = -\frac{x}{y}$. Substituting $m$: $y + \frac{x^2}{y} = \sqrt{a^2 \frac{x^2}{y^2} + b^2} \implies \frac{x^2 + y^2}{y} = \frac{\sqrt{a^2 x^2 + b^2 y^2}}{y} \implies (x^2 + y^2)^2 = a^2 x^2 + b^2 y^2$."
    },
    {
        "question": r"If the normal at an end of a latus rectum of the ellipse $\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$ passes through an extremity of the minor axis, then the eccentricity $e$ satisfies:",
        "options": [
            r"$e^4 + e^2 - 1 = 0$",
            r"$e^2 + e - 1 = 0$",
            r"$e^4 - e^2 + 1 = 0$",
            r"$e^3 + e - 1 = 0$"
        ],
        "correctAnswer": 0,
        "explanation": r"The extremity of the latus rectum is $(ae, b^2/a)$. The normal at $(x_1, y_1)$ is $\frac{a^2 x}{x_1} - \frac{b^2 y}{y_1} = a^2 - b^2 \implies \frac{a^2 x}{ae} - \frac{b^2 y}{b^2/a} = a^2 e^2 \implies \frac{ax}{e} - ay = a^2 e^2 \implies \frac{x}{e} - y = ae^2$. This normal passes through $(0, -b)$: $0 - (-b) = ae^2 \implies b = ae^2 \implies b^2 = a^2 e^4$. Since $b^2 = a^2(1 - e^2)$, we get $a^2(1 - e^2) = a^2 e^4 \implies 1 - e^2 = e^4 \implies e^4 + e^2 - 1 = 0$."
    },
    {
        "question": r"The product of the perpendiculars from the two foci upon any tangent to the ellipse $\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$ is equal to:",
        "options": [
            r"$b^2$",
            r"$a^2$",
            r"$ab$",
            r"$a^2 + b^2$"
        ],
        "correctAnswer": 0,
        "explanation": r"Let the tangent be $y - mx - \sqrt{a^2 m^2 + b^2} = 0$. The foci are $(\pm ae, 0)$. The product of the perpendiculars is $p_1 p_2 = \frac{|-mae - \sqrt{a^2 m^2 + b^2}|}{\sqrt{1 + m^2}} \frac{|mae - \sqrt{a^2 m^2 + b^2}|}{\sqrt{1 + m^2}} = \frac{|a^2 m^2 + b^2 - m^2 a^2 e^2|}{1 + m^2} = \frac{|a^2 m^2(1 - e^2) + b^2|}{1 + m^2} = \frac{m^2 b^2 + b^2}{1 + m^2} = \frac{b^2(1 + m^2)}{1 + m^2} = b^2$."
    }
]
q_list[1]["correctAnswer"] = 1  # y = x \pm \sqrt{3}
for q in q_list:
    batch2_part2.append({"chapter": ch, "subtopic": top, **q})

# Topic 3: Hyperbola equations
top = "Hyperbola equations"
q_list = [
    {
        "question": r"If the line $y = 2x + c$ is a tangent to the hyperbola $\frac{x^2}{4} - \frac{y^2}{9} = 1$, then the value of $c^2$ is:",
        "options": [
            r"$7$",
            r"$25$",
            r"$5$",
            r"$16$"
        ],
        "correctAnswer": 0,
        "explanation": r"The condition for $y = mx + c$ to be tangent to $\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1$ is $c^2 = a^2 m^2 - b^2$. Here $a^2 = 4, b^2 = 9, m = 2$. Thus $c^2 = 4(2^2) - 9 = 4(4) - 9 = 16 - 9 = 7$."
    },
    {
        "question": r"The locus of the point of intersection of perpendicular tangents to the hyperbola $\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1$ ($a > b$) is:",
        "options": [
            r"$x^2 + y^2 = a^2 - b^2$",
            r"$x^2 + y^2 = a^2 + b^2$",
            r"$x^2 - y^2 = a^2 - b^2$",
            r"$x^2 + y^2 = 2(a^2 - b^2)$"
        ],
        "correctAnswer": 0,
        "explanation": r"The director circle of the hyperbola $\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1$ is the locus of the intersection of perpendicular tangents, which is given by $x^2 + y^2 = a^2 - b^2$ (for $a > b$)."
    },
    {
        "question": r"If $e_1$ and $e_2$ are the eccentricities of a hyperbola and its conjugate hyperbola respectively, then:",
        "options": [
            r"$\frac{1}{e_1^2} + \frac{1}{e_2^2} = 1$",
            r"$e_1^2 + e_2^2 = 1$",
            r"$\frac{1}{e_1} + \frac{1}{e_2} = 1$",
            r"$e_1 e_2 = 1$"
        ],
        "correctAnswer": 0,
        "explanation": r"For the hyperbola $\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1$, $e_1^2 = 1 + \frac{b^2}{a^2} = \frac{a^2 + b^2}{a^2} \implies \frac{1}{e_1^2} = \frac{a^2}{a^2 + b^2}$. For the conjugate hyperbola $-\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$, $e_2^2 = 1 + \frac{a^2}{b^2} = \frac{a^2 + b^2}{b^2} \implies \frac{1}{e_2^2} = \frac{b^2}{a^2 + b^2}$. Adding them: $\frac{1}{e_1^2} + \frac{1}{e_2^2} = \frac{a^2 + b^2}{a^2 + b^2} = 1$."
    },
    {
        "question": r"The equation of the chord of contact of tangents drawn from $(2, 1)$ to the hyperbola $\frac{x^2}{16} - \frac{y^2}{9} = 1$ is:",
        "options": [
            r"$9x - 8y - 72 = 0$",
            r"$9x - 8y = 144$",
            r"$18x - 9y = 144$",
            r"$8x - 9y - 72 = 0$"
        ],
        "correctAnswer": 0,
        "explanation": r"The chord of contact is $T = 0 \implies \frac{x x_1}{16} - \frac{y y_1}{9} = 1$. Substituting $(x_1, y_1) = (2, 1)$: $\frac{2x}{16} - \frac{y}{9} = 1 \implies \frac{x}{8} - \frac{y}{9} = 1 \implies 9x - 8y = 72 \implies 9x - 8y - 72 = 0$."
    },
    {
        "question": r"The length of the conjugate axis of a hyperbola is $8$ and its eccentricity is $\frac{5}{3}$. The length of its latus rectum is:",
        "options": [
            r"$\frac{32}{3}$",
            r"$\frac{64}{3}$",
            r"$\frac{16}{3}$",
            r"$8$"
        ],
        "correctAnswer": 0,
        "explanation": r"Length of conjugate axis is $2b = 8 \implies b = 4$. Given $e = 5/3$, we know $b^2 = a^2(e^2 - 1) \implies 16 = a^2(25/9 - 1) = a^2(16/9) \implies a^2 = 9 \implies a = 3$. The length of the latus rectum is $\frac{2b^2}{a} = \frac{2(16)}{3} = \frac{32}{3}$."
    }
]
for q in q_list:
    batch2_part2.append({"chapter": ch, "subtopic": top, **q})

# Topic 4: Focal properties and eccentricity of conics
top = "Focal properties and eccentricity of conics"
q_list = [
    {
        "question": r"If $S$ and $S'$ are the foci of the ellipse $\frac{x^2}{25} + \frac{y^2}{16} = 1$, and $P$ is any point on the ellipse, then $SP + S'P$ is equal to:",
        "options": [
            r"$10$",
            r"$8$",
            r"$6$",
            r"$12$"
        ],
        "correctAnswer": 0,
        "explanation": r"By the focal property of an ellipse, the sum of the distances of any point $P$ from the two foci is constant and equal to the major axis $2a$. Here $a^2 = 25 \implies a = 5$. Thus $SP + S'P = 2a = 10$."
    },
    {
        "question": r"If the distance between the foci of an ellipse is equal to the length of its minor axis, then the eccentricity of the ellipse is:",
        "options": [
            r"$\frac{1}{\sqrt{2}}$",
            r"$\frac{1}{2}$",
            r"$\frac{\sqrt{3}}{2}$",
            r"$\frac{1}{\sqrt{3}}$"
        ],
        "correctAnswer": 0,
        "explanation": r"Distance between foci is $2ae$ and length of minor axis is $2b$. Given $2ae = 2b \implies ae = b \implies a^2 e^2 = b^2$. Since $b^2 = a^2(1 - e^2)$, we have $a^2 e^2 = a^2(1 - e^2) \implies e^2 = 1 - e^2 \implies 2e^2 = 1 \implies e = \frac{1}{\sqrt{2}}$."
    },
    {
        "question": r"For a hyperbola $\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1$, let $S$ and $S'$ be the foci. If $P$ is any point on the hyperbola, then $|SP - S'P|$ is equal to:",
        "options": [
            r"$2a$",
            r"$2b$",
            r"$2ae$",
            r"$\frac{2a}{e}$"
        ],
        "correctAnswer": 0,
        "explanation": r"By the focal property of a hyperbola, the absolute difference between the distances of any point on the hyperbola from its foci is constant and equal to the transverse axis $2a$, i.e., $|SP - S'P| = 2a$."
    },
    {
        "question": r"An ellipse has its foci at $(1, 0)$ and $(3, 0)$ and its eccentricity is $\frac{1}{2}$. The equation of the ellipse is:",
        "options": [
            r"$\frac{(x-2)^2}{4} + \frac{y^2}{3} = 1$",
            r"$\frac{(x-2)^2}{3} + \frac{y^2}{4} = 1$",
            r"$\frac{(x-1)^2}{4} + \frac{y^2}{3} = 1$",
            r"$\frac{(x-2)^2}{16} + \frac{y^2}{12} = 1$"
        ],
        "correctAnswer": 0,
        "explanation": r"The center is the midpoint of the foci: $\left(\frac{1+3}{2}, 0\right) = (2, 0)$. Distance between foci is $2ae = 3 - 1 = 2$. With $e = 1/2$, $2a(1/2) = 2 \implies a = 2 \implies a^2 = 4$. Then $b^2 = a^2(1 - e^2) = 4(1 - 1/4) = 4(3/4) = 3$. Hence the equation is $\frac{(x - 2)^2}{4} + \frac{y^2}{3} = 1$."
    },
    {
        "question": r"If the eccentricity of a conic is $e$, then the conic represents an ellipse, parabola, or hyperbola according as:",
        "options": [
            r"$e < 1, e = 1, e > 1$",
            r"$e = 0, e = 1, e > 1$",
            r"$e > 1, e = 1, e < 1$",
            r"$e \le 1, e = 1, e \ge 1$"
        ],
        "correctAnswer": 0,
        "explanation": r"By definition of conic sections: $e < 1$ represents an ellipse, $e = 1$ represents a parabola, and $e > 1$ represents a hyperbola."
    }
]
for q in q_list:
    batch2_part2.append({"chapter": ch, "subtopic": top, **q})

# Topic 5: Directrix and focus equations
top = "Directrix and focus equations"
q_list = [
    {
        "question": r"The equation of the directrix of the parabola $y^2 + 4y + 4x + 2 = 0$ is:",
        "options": [
            r"$x = \frac{3}{2}$",
            r"$x = -\frac{1}{2}$",
            r"$x = \frac{1}{2}$",
            r"$x = -\frac{3}{2}$"
        ],
        "correctAnswer": 0,
        "explanation": r"Rewrite as $(y + 2)^2 = -4x - 2 + 4 = -4x + 2 = -4(x - 1/2)$. Here $4a = 4 \implies a = 1$. The axis is horizontal opening to the left: $Y^2 = -4aX$ where $Y = y + 2, X = x - 1/2$. The directrix of $Y^2 = -4aX$ is $X = a \implies x - 1/2 = 1 \implies x = 3/2$."
    },
    {
        "question": r"The focus of the parabola $(y - 2)^2 = 12(x + 1)$ is:",
        "options": [
            r"$(2, 2)$",
            r"$(-1, 2)$",
            r"$(3, 2)$",
            r"$(2, -1)$"
        ],
        "correctAnswer": 0,
        "explanation": r"Here $4a = 12 \implies a = 3$. The vertex is $(-1, 2)$. The focus is $(h + a, k) = (-1 + 3, 2) = (2, 2)$."
    },
    {
        "question": r"The equations of the directrices of the ellipse $9x^2 + 16y^2 = 144$ are:",
        "options": [
            r"$x = \pm \frac{16}{\sqrt{7}}$",
            r"$x = \pm \frac{9}{\sqrt{7}}$",
            r"$y = \pm \frac{16}{\sqrt{7}}$",
            r"$x = \pm \frac{4}{\sqrt{7}}$"
        ],
        "correctAnswer": 0,
        "explanation": r"Standard form: $\frac{x^2}{16} + \frac{y^2}{9} = 1 \implies a^2 = 16, b^2 = 9 \implies a = 4, b = 3$. Eccentricity $e = \sqrt{1 - 9/16} = \frac{\sqrt{7}}{4}$. The directrices are $x = \pm \frac{a}{e} = \pm \frac{4}{\sqrt{7}/4} = \pm \frac{16}{\sqrt{7}}$."
    },
    {
        "question": r"The distance between the directrices of the hyperbola $\frac{x^2}{9} - \frac{y^2}{16} = 1$ is:",
        "options": [
            r"$\frac{18}{5}$",
            r"$\frac{9}{5}$",
            r"$\frac{32}{5}$",
            r"$\frac{25}{3}$"
        ],
        "correctAnswer": 0,
        "explanation": r"Here $a = 3, b = 4$. Eccentricity $e = \sqrt{1 + 16/9} = \frac{5}{3}$. The distance between the directrices is $\frac{2a}{e} = \frac{2(3)}{5/3} = \frac{18}{5}$."
    },
    {
        "question": r"A parabola has focus at $(0, 0)$ and the line $x + y = 2$ as its directrix. The equation of its axis is:",
        "options": [
            r"$x - y = 0$",
            r"$x + y = 0$",
            r"$x - y = 2$",
            r"$x + 2y = 0$"
        ],
        "correctAnswer": 0,
        "explanation": r"The axis of a parabola is perpendicular to the directrix and passes through the focus. The directrix is $x + y = 2$ (slope $-1$), so the axis has slope $1$ and passes through $(0, 0)$. Thus its equation is $y - 0 = 1(x - 0) \implies x - y = 0$."
    }
]
for q in q_list:
    batch2_part2.append({"chapter": ch, "subtopic": top, **q})

# Topic 6: Rectangular hyperbola and asymptotes
top = "Rectangular hyperbola and asymptotes"
q_list = [
    {
        "question": r"The eccentricity of any rectangular hyperbola is always equal to:",
        "options": [
            r"$\sqrt{2}$",
            r"$2$",
            r"$\sqrt{3}$",
            r"$\frac{\sqrt{5}}{2}$"
        ],
        "correctAnswer": 0,
        "explanation": r"For a rectangular hyperbola, the lengths of the transverse and conjugate axes are equal ($a = b$). The eccentricity is $e = \sqrt{1 + \frac{b^2}{a^2}} = \sqrt{1 + 1} = \sqrt{2}$."
    },
    {
        "question": r"The angle between the asymptotes of the hyperbola $\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1$ is $2\theta$. If the eccentricity is $2$, then $\theta$ is:",
        "options": [
            r"$\frac{\pi}{3}$",
            r"$\frac{\pi}{6}$",
            r"$\frac{\pi}{4}$",
            r"$\frac{5\pi}{12}$"
        ],
        "correctAnswer": 0,
        "explanation": r"The asymptotes are $y = \pm \frac{b}{a}x$. The angle between them is $2\theta$ where $\tan\theta = \frac{b}{a}$. Since $e = 2$, $e^2 = 1 + \frac{b^2}{a^2} \implies 4 = 1 + \tan^2\theta \implies \tan^2\theta = 3 \implies \tan\theta = \sqrt{3} \implies \theta = \frac{\pi}{3}$."
    },
    {
        "question": r"If the normal at point $t_1$ on the rectangular hyperbola $xy = c^2$ meets the curve again at $t_2$, then:",
        "options": [
            r"$t_1^3 t_2 = -1$",
            r"$t_1 t_2 = -1$",
            r"$t_1^2 t_2 = 1$",
            r"$t_1 t_2^3 = -1$"
        ],
        "correctAnswer": 0,
        "explanation": r"A point on $xy = c^2$ is $(ct, c/t)$. The slope of the tangent is $\frac{dy}{dx} = -\frac{1}{t^2}$, so the slope of the normal is $t^2$. The equation of the normal at $t_1$ is $y - \frac{c}{t_1} = t_1^2(x - ct_1)$. If this meets the curve again at $(ct_2, c/t_2)$, substituting gives $\frac{c}{t_2} - \frac{c}{t_1} = t_1^2(ct_2 - ct_1) \implies c\frac{t_1 - t_2}{t_1 t_2} = c t_1^2(t_2 - t_1)$. Since $t_1 \neq t_2$, $-\frac{1}{t_1 t_2} = t_1^2 \implies t_1^3 t_2 = -1$."
    },
    {
        "question": r"The equation of the asymptotes of the hyperbola $2x^2 + 5xy + 2y^2 - 11x - 7y - 4 = 0$ is:",
        "options": [
            r"$2x^2 + 5xy + 2y^2 - 11x - 7y + 5 = 0$",
            r"$2x^2 + 5xy + 2y^2 - 11x - 7y = 0$",
            r"$2x^2 + 5xy + 2y^2 - 11x - 7y - 5 = 0$",
            r"$2x^2 + 5xy + 2y^2 = 0$"
        ],
        "correctAnswer": 0,
        "explanation": r"The equation of the asymptotes differs from the hyperbola only by a constant: $2x^2 + 5xy + 2y^2 - 11x - 7y + \lambda = 0$. For this to represent a pair of straight lines, the discriminant $\Delta = abc + 2fgh - af^2 - bg^2 - ch^2 = 0$. Here $a = 2, b = 2, h = 5/2, g = -11/2, f = -7/2, c = \lambda$. Solving $\Delta = 0$ gives $\lambda = 5$. Thus the equation is $2x^2 + 5xy + 2y^2 - 11x - 7y + 5 = 0$."
    },
    {
        "question": r"A triangle has its vertices on the rectangular hyperbola $xy = c^2$. The orthocenter of this triangle:",
        "options": [
            r"Also lies on the hyperbola",
            r"Lies at the origin",
            r"Lies on the conjugate hyperbola",
            r"None of these"
        ],
        "correctAnswer": 0,
        "explanation": r"Let the three vertices be $(ct_i, c/t_i)$ for $i = 1, 2, 3$. The orthocenter of this triangle is known to be $\left(-\frac{c}{t_1 t_2 t_3}, -c t_1 t_2 t_3\right)$. Its product of coordinates is $\left(-\frac{c}{t_1 t_2 t_3}\right)(-c t_1 t_2 t_3) = c^2$. Since $x \cdot y = c^2$, the orthocenter also lies on the same rectangular hyperbola!"
    }
]
for q in q_list:
    batch2_part2.append({"chapter": ch, "subtopic": top, **q})

# ==========================================
# CHAPTER 10: Trigonometric Identities (3 topics x 5 = 15 Qs)
# ==========================================
ch = "Trigonometric Identities"

# Topic 1: Multiple and sub-multiple angles
top = "Multiple and sub-multiple angles"
q_list = [
    {
        "question": r"The value of $\cos 20^\circ \cos 40^\circ \cos 80^\circ$ is equal to:",
        "options": [
            r"$\frac{1}{8}$",
            r"$\frac{1}{16}$",
            r"$\frac{1}{4}$",
            r"$\frac{\sqrt{3}}{8}$"
        ],
        "correctAnswer": 0,
        "explanation": r"Using the identity $\cos\theta \cos(60^\circ - \theta) \cos(60^\circ + \theta) = \frac{1}{4}\cos 3\theta$ with $\theta = 20^\circ$: $\cos 20^\circ \cos 40^\circ \cos 80^\circ = \frac{1}{4}\cos(3 \times 20^\circ) = \frac{1}{4}\cos 60^\circ = \frac{1}{4} \times \frac{1}{2} = \frac{1}{8}$."
    },
    {
        "question": r"The value of $\sin 10^\circ \sin 50^\circ \sin 70^\circ$ is equal to:",
        "options": [
            r"$\frac{1}{8}$",
            r"$\frac{1}{16}$",
            r"$\frac{1}{4}$",
            r"$\frac{\sqrt{3}}{8}$"
        ],
        "correctAnswer": 0,
        "explanation": r"Using the identity $\sin\theta \sin(60^\circ - \theta) \sin(60^\circ + \theta) = \frac{1}{4}\sin 3\theta$ with $\theta = 10^\circ$: $\sin 10^\circ \sin 50^\circ \sin 70^\circ = \frac{1}{4}\sin(3 \times 10^\circ) = \frac{1}{4}\sin 30^\circ = \frac{1}{4} \times \frac{1}{2} = \frac{1}{8}$."
    },
    {
        "question": r"The value of $\tan 20^\circ \tan 40^\circ \tan 80^\circ$ is equal to:",
        "options": [
            r"$\sqrt{3}$",
            r"$\frac{1}{\sqrt{3}}$",
            r"$1$",
            r"$3$"
        ],
        "correctAnswer": 0,
        "explanation": r"Using the identity $\tan\theta \tan(60^\circ - \theta) \tan(60^\circ + \theta) = \tan 3\theta$ with $\theta = 20^\circ$: $\tan 20^\circ \tan 40^\circ \tan 80^\circ = \tan(3 \times 20^\circ) = \tan 60^\circ = \sqrt{3}$."
    },
    {
        "question": r"The value of $\cos\left(\frac{2\pi}{7}\right) + \cos\left(\frac{4\pi}{7}\right) + \cos\left(\frac{6\pi}{7}\right)$ is:",
        "options": [
            r"$-\frac{1}{2}$",
            r"$\frac{1}{2}$",
            r"$0$",
            r"$-1$"
        ],
        "correctAnswer": 0,
        "explanation": r"Using the sum formula $\sum_{k=1}^n \cos(k\theta) = \frac{\sin(n\theta/2)\cos((n+1)\theta/2)}{\sin(\theta/2)}$ with $n = 3, \theta = \frac{2\pi}{7}$: $\frac{\sin(3\pi/7)\cos(4\pi/7)}{\sin(\pi/7)} = \frac{\frac{1}{2}[\sin(\pi) - \sin(\pi/7)]}{\sin(\pi/7)} = \frac{-\frac{1}{2}\sin(\pi/7)}{\sin(\pi/7)} = -\frac{1}{2}$."
    },
    {
        "question": r"If $\tan\left(\frac{\theta}{2}\right) = \sqrt{\frac{1-e}{1+e}}\tan\left(\frac{\phi}{2}\right)$, then $\cos\phi$ is equal to:",
        "options": [
            r"$\frac{\cos\theta - e}{1 - e\cos\theta}$",
            r"$\frac{\cos\theta + e}{1 + e\cos\theta}$",
            r"$\frac{1 - e\cos\theta}{\cos\theta - e}$",
            r"$\frac{\cos\theta}{1 - e}$"
        ],
        "correctAnswer": 0,
        "explanation": r"From the given relation, $\tan^2(\phi/2) = \frac{1+e}{1-e}\tan^2(\theta/2)$. Using $\cos\phi = \frac{1 - \tan^2(\phi/2)}{1 + \tan^2(\phi/2)} = \frac{1 - \frac{1+e}{1-e}\tan^2(\theta/2)}{1 + \frac{1+e}{1-e}\tan^2(\theta/2)} = \frac{(1-e)\cos^2(\theta/2) - (1+e)\sin^2(\theta/2)}{(1-e)\cos^2(\theta/2) + (1+e)\sin^2(\theta/2)} = \frac{(\cos^2(\theta/2) - \sin^2(\theta/2)) - e(\cos^2(\theta/2) + \sin^2(\theta/2))}{(\cos^2(\theta/2) + \sin^2(\theta/2)) - e(\cos^2(\theta/2) - \sin^2(\theta/2))} = \frac{\cos\theta - e}{1 - e\cos\theta}$."
    }
]
for q in q_list:
    batch2_part2.append({"chapter": ch, "subtopic": top, **q})

# Topic 2: Trigonometric equations and general solutions
top = "Trigonometric equations and general solutions"
q_list = [
    {
        "question": r"The number of solutions of the equation $\sin 5x \cos 3x = \sin 6x \cos 2x$ in the interval $\left[0, \frac{\pi}{2}\right]$ is:",
        "options": [
            r"$5$",
            r"$4$",
            r"$3$",
            r"$6$"
        ],
        "correctAnswer": 0,
        "explanation": r"Multiplying both sides by 2: $2\sin 5x \cos 3x = 2\sin 6x \cos 2x \implies \sin 8x + \sin 2x = \sin 8x + \sin 4x \implies \sin 4x - \sin 2x = 0 \implies 2\sin x \cos 3x = 0$. Thus $\sin x = 0$ or $\cos 3x = 0$. For $x \in [0, \pi/2]$: $\sin x = 0 \implies x = 0$. For $\cos 3x = 0 \implies 3x \in [0, 3\pi/2]$: $3x = \frac{\pi}{2}, \frac{3\pi}{2} \implies x = \frac{\pi}{6}, \frac{\pi}{2}$. Also check $\sin 2x = \sin 4x \implies 2\sin 2x \cos 2x - \sin 2x = 0 \implies \sin 2x(2\cos 2x - 1) = 0 \implies 2x = 0, \pi \implies x = 0, \pi/2$, or $\cos 2x = 1/2 \implies 2x = \pi/3 \implies x = \pi/6$. The solutions are $x = 0, \frac{\pi}{6}, \frac{\pi}{2}$. Wait, are there 3 solutions? Let's check $2\sin 4x - 2\sin 2x$: $\sin 4x = \sin 2x \implies 4x = n\pi + (-1)^n 2x$. If $n=0$: $2x = 0 \implies x = 0$. If $n=1$: $4x = \pi - 2x \implies 6x = \pi \implies x = \pi/6$. If $n=2$: $4x = 2\pi + 2x \implies 2x = 2\pi \implies x = \pi \notin [0, \pi/2]$. If $n=3$: $4x = 3\pi - 2x \implies 6x = 3\pi \implies x = \pi/2$. Total solutions in $[0, \pi/2]$ are $\{0, \pi/6, \pi/2\}$, which is 3 solutions."
    },
    {
        "question": r"The general solution of the equation $\tan\theta + \tan 2\theta + \sqrt{3}\tan\theta\tan 2\theta = \sqrt{3}$ is:",
        "options": [
            r"$\theta = \frac{n\pi}{3} + \frac{\pi}{9}, n \in \mathbb{Z}$",
            r"$\theta = n\pi + \frac{\pi}{3}, n \in \mathbb{Z}$",
            r"$\theta = \frac{n\pi}{3} + \frac{\pi}{6}, n \in \mathbb{Z}$",
            r"$\theta = n\pi \pm \frac{\pi}{3}, n \in \mathbb{Z}$"
        ],
        "correctAnswer": 0,
        "explanation": r"Rewrite the equation as $\tan\theta + \tan 2\theta = \sqrt{3}(1 - \tan\theta\tan 2\theta) \implies \frac{\tan\theta + \tan 2\theta}{1 - \tan\theta\tan 2\theta} = \sqrt{3} \implies \tan(3\theta) = \sqrt{3} = \tan\left(\frac{\pi}{3}\right)$. Therefore, $3\theta = n\pi + \frac{\pi}{3} \implies \theta = \frac{n\pi}{3} + \frac{\pi}{9}, n \in \mathbb{Z}$."
    },
    {
        "question": r"The number of values of $x$ in the interval $[0, 2\pi]$ satisfying the equation $\sin^4 x - 2\sin^2 x - 1 = 0$ is:",
        "options": [
            r"$0$",
            r"$2$",
            r"$4$",
            r"$1$"
        ],
        "correctAnswer": 0,
        "explanation": r"Let $t = \sin^2 x \ge 0$. The equation is $t^2 - 2t - 1 = 0 \implies t = \frac{2 \pm \sqrt{4 + 4}}{2} = 1 \pm \sqrt{2}$. Since $t \ge 0$, we have $t = 1 + \sqrt{2} \approx 2.414$. But $\sin^2 x \le 1$, so $t = \sin^2 x = 1 + \sqrt{2} > 1$ is impossible. Thus there is no real solution, so the number of solutions is $0$."
    },
    {
        "question": r"The sum of all solutions of the equation $\cos x \cos\left(\frac{\pi}{3} - x\right) \cos\left(\frac{\pi}{3} + x\right) = \frac{1}{8}$ in $[0, 2\pi]$ is:",
        "options": [
            r"$6\pi$",
            r"$4\pi$",
            r"$3\pi$",
            r"$2\pi$"
        ],
        "correctAnswer": 0,
        "explanation": r"Using the triple angle identity, the LHS is $\frac{1}{4}\cos 3x$. So $\frac{1}{4}\cos 3x = \frac{1}{8} \implies \cos 3x = \frac{1}{2}$. For $x \in [0, 2\pi]$, $3x \in [0, 6\pi]$. The values for $3x$ are $\frac{\pi}{3}, \frac{5\pi}{3}, \frac{7\pi}{3}, \frac{11\pi}{3}, \frac{13\pi}{3}, \frac{17\pi}{3}$. Sum of $3x = \frac{\pi}{3}(1 + 5 + 7 + 11 + 13 + 17) = \frac{\pi}{3}(54) = 18\pi$. Hence the sum of all solutions $x$ is $\frac{18\pi}{3} = 6\pi$."
    },
    {
        "question": r"The number of solutions of $\sqrt{3}\sin x + \cos x = 4$ is:",
        "options": [
            r"$0$",
            r"$1$",
            r"$2$",
            r"Infinite"
        ],
        "correctAnswer": 0,
        "explanation": r"The maximum value of $a\sin x + b\cos x$ is $\sqrt{a^2 + b^2} = \sqrt{(\sqrt{3})^2 + 1^2} = \sqrt{3 + 1} = 2$. Since $4 > 2$, the equation has no solution, so the number of solutions is $0$."
    }
]
q_list[0]["options"] = [
    r"$3$",
    r"$4$",
    r"$5$",
    r"$6$"
]
q_list[0]["correctAnswer"] = 0
for q in q_list:
    batch2_part2.append({"chapter": ch, "subtopic": top, **q})

# Topic 3: Maximum and minimum values of trigonometric expressions
top = "Maximum and minimum values of trigonometric expressions"
q_list = [
    {
        "question": r"The minimum value of $f(x) = 2\sin^2 x + 3\cos^2 x$ is:",
        "options": [
            r"$2$",
            r"$3$",
            r"$1$",
            r"$5$"
        ],
        "correctAnswer": 0,
        "explanation": r"Rewrite $f(x) = 2\sin^2 x + 2\cos^2 x + \cos^2 x = 2(\sin^2 x + \cos^2 x) + \cos^2 x = 2 + \cos^2 x$. Since $0 \le \cos^2 x \le 1$, the minimum value is $2 + 0 = 2$ (attained when $\cos x = 0$)."
    },
    {
        "question": r"The maximum value of $5\cos\theta + 3\cos\left(\theta + \frac{\pi}{3}\right) + 3$ is:",
        "options": [
            r"$10$",
            r"$11$",
            r"$8$",
            r"$7$"
        ],
        "correctAnswer": 0,
        "explanation": r"Expand the cosine term: $3\cos(\theta + \pi/3) = 3(\cos\theta\cos(\pi/3) - \sin\theta\sin(\pi/3)) = \frac{3}{2}\cos\theta - \frac{3\sqrt{3}}{2}\sin\theta$. Thus $5\cos\theta + 3\cos(\theta + \pi/3) = \left(5 + \frac{3}{2}\right)\cos\theta - \frac{3\sqrt{3}}{2}\sin\theta = \frac{13}{2}\cos\theta - \frac{3\sqrt{3}}{2}\sin\theta$. The maximum value of $A\cos\theta + B\sin\theta$ is $\sqrt{A^2 + B^2} = \sqrt{\frac{169}{4} + \frac{27}{4}} = \sqrt{\frac{196}{4}} = \sqrt{49} = 7$. Adding the constant $3$, the maximum value is $7 + 3 = 10$."
    },
    {
        "question": r"The minimum value of $\sec^2\theta + \csc^2\theta$ for all permissible values of $\theta$ is:",
        "options": [
            r"$4$",
            r"$2$",
            r"$1$",
            r"$8$"
        ],
        "correctAnswer": 0,
        "explanation": r"We have $\sec^2\theta + \csc^2\theta = \frac{1}{\cos^2\theta} + \frac{1}{\sin^2\theta} = \frac{\sin^2\theta + \cos^2\theta}{\sin^2\theta\cos^2\theta} = \frac{1}{\sin^2\theta\cos^2\theta} = \frac{4}{(2\sin\theta\cos\theta)^2} = \frac{4}{\sin^2 2\theta}$. Since $\sin^2 2\theta \le 1$, the minimum value is $\frac{4}{1} = 4$."
    },
    {
        "question": r"The maximum value of $\sin^6 x + \cos^6 x$ is $M$ and the minimum value is $m$. The value of $M - m$ is:",
        "options": [
            r"$\frac{3}{4}$",
            r"$\frac{1}{4}$",
            r"$\frac{1}{2}$",
            r"$1$"
        ],
        "correctAnswer": 0,
        "explanation": r"We know $\sin^6 x + \cos^6 x = (\sin^2 x + \cos^2 x)^3 - 3\sin^2 x \cos^2 x (\sin^2 x + \cos^2 x) = 1 - 3\sin^2 x \cos^2 x = 1 - \frac{3}{4}\sin^2 2x$. Since $0 \le \sin^2 2x \le 1$, the maximum is $M = 1 - 0 = 1$, and the minimum is $m = 1 - \frac{3}{4} = \frac{1}{4}$. Thus $M - m = 1 - \frac{1}{4} = \frac{3}{4}$."
    },
    {
        "question": r"The range of the function $f(x) = \frac{\sin x + \cos x}{\sqrt{2 + \sin 2x}}$ is:",
        "options": [
            r"$[-1, 1]$",
            r"$\left[-\frac{1}{\sqrt{3}}, \frac{1}{\sqrt{3}}\right]$",
            r"$[-\sqrt{2}, \sqrt{2}]$",
            r"$\left[-\frac{1}{2}, \frac{1}{2}\right]$"
        ],
        "correctAnswer": 0,
        "explanation": r"Let $t = \sin x + \cos x \in [-\sqrt{2}, \sqrt{2}]$. Then $t^2 = 1 + \sin 2x \implies \sin 2x = t^2 - 1$. The denominator becomes $\sqrt{2 + (t^2 - 1)} = \sqrt{1 + t^2}$. Thus $f(x) = \frac{t}{\sqrt{1 + t^2}}$. For $t \in [-\sqrt{2}, \sqrt{2}]$, the function $g(t) = \frac{t}{\sqrt{1 + t^2}}$ is strictly increasing. At $t = \sqrt{2}$, $g(\sqrt{2}) = \frac{\sqrt{2}}{\sqrt{1 + 2}} = \frac{\sqrt{2}}{\sqrt{3}} = \sqrt{2/3}$. Wait! At $t = -\sqrt{2}$, $g(-\sqrt{2}) = -\sqrt{2/3}$. Thus the range is $[-\sqrt{2/3}, \sqrt{2/3}]$. Let's formulate a standard clean question: 'The range of $f(x) = 3\sin x + 4\cos x + 5$' or similar."
    }
]
q_list[4] = {
    "question": r"The minimum value of $4^x + 4^{1-x} + 2\cos(2\pi x)$ for $x \in \mathbb{R}$ is:",
    "options": [
        r"$2$",
        r"$4$",
        r"$6$",
        r"$0$"
    ],
    "correctAnswer": 0,
    "explanation": r"By AM-GM inequality, $4^x + 4^{1-x} \ge 2\sqrt{4^x \cdot 4^{1-x}} = 2\sqrt{4} = 4$, with equality when $4^x = 4^{1-x} \implies x = 1 - x \implies x = 1/2$. For $x = 1/2$, the cosine term is $2\cos(2\pi \cdot 1/2) = 2\cos\pi = -2$. Since both $4^x + 4^{1-x}$ achieves its minimum ($4$) and $2\cos(2\pi x)$ achieves its minimum ($-2$) at the exact same point $x = 1/2$, the global minimum is $4 + (-2) = 2$."
}
for q in q_list:
    batch2_part2.append({"chapter": ch, "subtopic": top, **q})

with open("scripts/math_top100/math_batch2_p2.json", "w") as f:
    json.dump(batch2_part2, f, indent=2)

print(f"Generated {len(batch2_part2)} questions for Batch 2 Part 2.")
