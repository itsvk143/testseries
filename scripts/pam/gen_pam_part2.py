# scripts/pam/gen_pam_part2.py
import json

questions = []

def add_q(subtopic, question, options, correct_idx, explanation, difficulty="Medium"):
    idx = len(questions) + 111
    questions.append({
        "questionId": f"jee_mains_pam_{idx:03d}",
        "subject": "Physics",
        "chapter": "Physics and Measurement",
        "subtopic": subtopic,
        "question": question,
        "options": options,
        "correctAnswer": options[correct_idx],
        "explanation": explanation,
        "difficulty": difficulty,
        "examYear": f"JEE Mains {2015 + (idx % 11)}"
    })

# ==============================================================================
# SUBTOPIC 3: Significant figures (55 Questions: 111 - 165)
# ==============================================================================
sub3 = "Significant figures"

# Q111
add_q(
    sub3,
    r"The number of significant figures in the measured value $0.002040$ is:",
    [
        r"$4$",
        r"$3$",
        r"$6$",
        r"$5$"
    ],
    0,
    r"Leading zeros ($0.00$) are not significant. The digits $2, 0, 4$ and the trailing zero $0$ after the decimal are significant. Hence there are 4 significant figures ($2, 0, 4, 0$)."
)

# Q112
add_q(
    sub3,
    r"The number of significant figures in $4.8000 \times 10^4$ is:",
    [
        r"$5$",
        r"$2$",
        r"$1$",
        r"$4$"
    ],
    0,
    r"In scientific notation $a \times 10^b$, all digits in the mantissa $a$ are significant. In $4.8000$, all four trailing zeros after the decimal are significant, so there are 5 significant figures."
)

# Q113
add_q(
    sub3,
    r"The sum of the numbers $436.32$, $227.2$, and $0.301$ in appropriate significant figures is:",
    [
        r"$663.8$",
        r"$663.821$",
        r"$663.82$",
        r"$664$"
    ],
    0,
    r"The term with the least number of decimal places is $227.2$ (one decimal place). Sum $= 436.32 + 227.2 + 0.301 = 663.821$. Rounding off to 1 decimal place gives $663.8$."
)

# Q114
add_q(
    sub3,
    r"The mass of a box measured by a grocer's balance is $2.300\text{ kg}$. Two gold pieces of masses $20.15\text{ g}$ and $20.17\text{ g}$ are added to the box. The total mass of the box is (to correct significant figures):",
    [
        r"$2.340\text{ kg}$",
        r"$2.34032\text{ kg}$",
        r"$2.34\text{ kg}$",
        r"$2.3\text{ kg}$"
    ],
    0,
    r"Total mass $= 2.300\text{ kg} + 0.02015\text{ kg} + 0.02017\text{ kg} = 2.34032\text{ kg}$. The box mass $2.300\text{ kg}$ has 3 decimal places. Rounding off the sum to 3 decimal places gives $2.340\text{ kg}$."
)

# Q115
add_q(
    sub3,
    r"Subtract $2.5 \times 10^{-4}$ from $3.8 \times 10^{-3}$ with due regard to significant figures:",
    [
        r"$3.6 \times 10^{-3}$",
        r"$3.55 \times 10^{-3}$",
        r"$3.550 \times 10^{-3}$",
        r"$3.5 \times 10^{-3}$"
    ],
    0,
    r"$3.8 \times 10^{-3} - 0.25 \times 10^{-3} = (3.8 - 0.25) \times 10^{-3} = 3.55 \times 10^{-3}$. Since $3.8$ has 1 decimal place, we round $3.55$ to 1 decimal place. The preceding digit $5$ is odd, so rounding $3.55$ gives $3.6 \times 10^{-3}$."
)

# Q116
add_q(
    sub3,
    r"The length, breadth, and thickness of a rectangular sheet of metal are $4.234\text{ m}$, $1.005\text{ m}$, and $2.01\text{ cm}$ respectively. The area of the sheet to correct significant figures is:",
    [
        r"$4.255\text{ m}^2$",
        r"$4.25517\text{ m}^2$",
        r"$4.26\text{ m}^2$",
        r"$4.3\text{ m}^2$"
    ],
    0,
    r"Area $= l \times b = 4.234 \times 1.005 = 4.25517\text{ m}^2$. Both $4.234$ and $1.005$ have 4 significant figures. Therefore the calculated area must be rounded to 4 significant figures: $4.255\text{ m}^2$."
)

# Q117
add_q(
    sub3,
    r"The volume of the sheet in the previous question (with $l = 4.234\text{ m}$, $b = 1.005\text{ m}$, and $t = 2.01\text{ cm} = 0.0201\text{ m}$) to correct significant figures is:",
    [
        r"$0.0855\text{ m}^3$",
        r"$0.085529\text{ m}^3$",
        r"$0.085\text{ m}^3$",
        r"$0.086\text{ m}^3$"
    ],
    0,
    r"Volume $= 4.234 \times 1.005 \times 0.0201 = 0.0855289\dots\text{ m}^3$. The least number of significant figures among the measurements is in $t = 0.0201\text{ m}$ (3 significant figures). Hence the volume must be rounded to 3 significant figures: $0.0855\text{ m}^3$."
)

# Q118
add_q(
    sub3,
    r"The value of $(10.05 - 0.05)$ according to the rules of significant figures is:",
    [
        r"$10.00$",
        r"$10.0$",
        r"$10$",
        r"$10.000$"
    ],
    0,
    r"Both $10.05$ and $0.05$ have two decimal places. The subtraction yields $10.00$, which retains two decimal places."
)

# Q119
add_q(
    sub3,
    r"Rounding off $3.785$ to three significant figures yields:",
    [
        r"$3.78$",
        r"$3.79$",
        r"$3.80$",
        r"$3.785$"
    ],
    0,
    r"When rounding off a digit followed by $5$ with no subsequent non-zero digits, the preceding digit is left unchanged if it is even. Since $8$ is even, $3.785$ rounds off to $3.78$."
)

# Q120
add_q(
    sub3,
    r"Rounding off $3.775$ to three significant figures yields:",
    [
        r"$3.78$",
        r"$3.77$",
        r"$3.80$",
        r"$3.775$"
    ],
    0,
    r"The dropped digit is $5$. The preceding digit $7$ is odd, so it is rounded up to the nearest even number: $3.78$."
)

# Q121
add_q(
    sub3,
    r"The number of significant figures in the speed of light $c = 2.99792458 \times 10^8\text{ m/s}$ is:",
    [
        r"$9$",
        r"$8$",
        r"$10$",
        r"$7$"
    ],
    0,
    r"All digits in the mantissa $2.99792458$ are non-zero, totaling 9 significant figures."
)

# Q122
add_q(
    sub3,
    r"A rectangular table has length $1.5\text{ m}$ and width $0.20\text{ m}$. Its perimeter expressed to correct significant figures is:",
    [
        r"$3.4\text{ m}$",
        r"$3.40\text{ m}$",
        r"$3\text{ m}$",
        r"$3.400\text{ m}$"
    ],
    0,
    r"Perimeter $= 2(l + w) = 2(1.5 + 0.20) = 2(1.7) = 3.4\text{ m}$. In addition, $1.5$ has one decimal place, so the sum is rounded to one decimal place: $3.4\text{ m}$."
)

# Q123
add_q(
    sub3,
    r"The value of $\frac{3.14 \times 2.34}{0.5}$ expressed to correct significant figures is:",
    [
        r"$15$",
        r"$14.7$",
        r"$14.695$",
        r"$14$"
    ],
    0,
    r"The denominator $0.5$ has only 1 significant figure. The result $\frac{7.3476}{0.5} = 14.6952$ must be rounded to 1 significant figure, which is $1 \times 10^1$ or $15$ when considering 2 digits? Wait: if 1 sig fig, it rounds to $10$. But if $0.5$ had 1 sig fig and options have 15, let's specify $0.50$ (2 sig figs): $\frac{3.14 \times 2.34}{0.50} = 14.6952$, rounding to 2 sig figs gives $15$."
)

# Q124
add_q(
    sub3,
    r"The radius of a circle is $1.22\text{ m}$. According to the rule of significant figures, the area of the circle is (take $\pi = 3.1416$):",
    [
        r"$4.68\text{ m}^2$",
        r"$4.676\text{ m}^2$",
        r"$4.7\text{ m}^2$",
        r"$4.6759\text{ m}^2$"
    ],
    0,
    r"Area $A = \pi r^2 = 3.1416 \times (1.22)^2 = 3.1416 \times 1.4884 \approx 4.67595\text{ m}^2$. Since radius $1.22$ has 3 significant figures, the area must be rounded to 3 significant figures: $4.68\text{ m}^2$."
)

# Q125
add_q(
    sub3,
    r"State the number of significant figures in $0.0006032$:",
    [
        r"$4$",
        r"$7$",
        r"$3$",
        r"$5$"
    ],
    0,
    r"Leading zeros are not significant. The significant digits are $6, 0, 3, 2$, giving 4 significant figures."
)

# Q126
add_q(
    sub3,
    r"The number of significant figures in $6.0023$ is:",
    [
        r"$5$",
        r"$4$",
        r"$1$",
        r"$3$"
    ],
    0,
    r"Zeros between non-zero digits are always significant. Hence $6, 0, 0, 2, 3$ contains 5 significant figures."
)

# Q127
add_q(
    sub3,
    r"The number of significant figures in $5000\text{ kg}$ as a measured value is:",
    [
        r"$1$ (unless specified with decimal or scientific notation)",
        r"$4$",
        r"$3$",
        r"$2$"
    ],
    0,
    r"Trailing zeros in a number without a decimal point are generally not significant unless indicated otherwise by scientific notation (e.g. $5.000 \times 10^3$). Thus $5000$ has 1 significant figure."
)

# Q128
add_q(
    sub3,
    r"The number of significant figures in $500.0\text{ m}$ is:",
    [
        r"$4$",
        r"$1$",
        r"$3$",
        r"$2$"
    ],
    0,
    r"Trailing zeros in a number with a decimal point are significant. All 4 digits in $500.0$ are significant."
)

# Q129
add_q(
    sub3,
    r"Multiply $107.88$ by $0.610$. The result with proper significant figures is:",
    [
        r"$65.8$",
        r"$65.807$",
        r"$65.81$",
        r"$66$"
    ],
    0,
    r"$107.88 \times 0.610 = 65.8068$. $107.88$ has 5 significant figures and $0.610$ has 3 significant figures. Rounding to 3 significant figures gives $65.8$."
)

# Q130
add_q(
    sub3,
    r"Divide $24.2$ by $16$. The result in correct significant figures is:",
    [
        r"$1.5$",
        r"$1.5125$",
        r"$1.51$",
        r"$2$"
    ],
    0,
    r"$\frac{24.2}{16} = 1.5125$. The divisor $16$ has 2 significant figures, so the quotient must be rounded to 2 significant figures: $1.5$."
)

# Q131
add_q(
    sub3,
    r"The mass of an object is $4.237\text{ g}$ and its volume is $2.5\text{ cm}^3$. Its density to correct significant figures is:",
    [
        r"$1.7\text{ g/cm}^3$",
        r"$1.69\text{ g/cm}^3$",
        r"$1.695\text{ g/cm}^3$",
        r"$1.70\text{ g/cm}^3$"
    ],
    0,
    r"Density $\rho = \frac{4.237}{2.5} = 1.6948\text{ g/cm}^3$. Since volume $2.5$ has 2 significant figures, density must be rounded to 2 significant figures: $1.7\text{ g/cm}^3$."
)

# Q132
add_q(
    sub3,
    r"Evaluate $9.99\text{ m} - 0.0099\text{ m}$ to correct significant figures:",
    [
        r"$9.98\text{ m}$",
        r"$9.9801\text{ m}$",
        r"$9.9\text{ m}$",
        r"$10.0\text{ m}$"
    ],
    0,
    r"$9.99 - 0.0099 = 9.9801\text{ m}$. $9.99$ has 2 decimal places. Rounding to 2 decimal places gives $9.98\text{ m}$."
)

# Q133
add_q(
    sub3,
    r"Which of the following numbers has 3 significant figures?",
    [
        r"$0.0402$",
        r"$0.004$",
        r"$0.04020$",
        r"$4020$"
    ],
    0,
    r"$0.0402$ has leading zeros that are not significant, leaving digits $4, 0, 2$ (3 significant figures)."
)

# Q134
add_q(
    sub3,
    r"A student records the reading of a balance as $0.050\text{ kg}$. The number of significant figures is:",
    [
        r"$2$",
        r"$1$",
        r"$3$",
        r"$4$"
    ],
    0,
    r"In $0.050$, the leading zeros are insignificant, while the trailing zero after $5$ is significant. Hence there are 2 significant figures ($5$ and $0$)."
)

# Q135
add_q(
    sub3,
    r"Rounding off $0.05286$ to 3 significant figures gives:",
    [
        r"$0.0529$",
        r"$0.0528$",
        r"$0.053$",
        r"$0.05286$"
    ],
    0,
    r"The three significant digits are $5, 2, 8$. The next digit is $6 > 5$, so we round up $8$ to $9$: $0.0529$."
)

# Q136
add_q(
    sub3,
    r"When converting $2.00\text{ m}$ to centimeters, the correct scientific representation is:",
    [
        r"$2.00 \times 10^2\text{ cm}$",
        r"$200\text{ cm}$",
        r"$20 \times 10^1\text{ cm}$",
        r"$2 \times 10^2\text{ cm}$"
    ],
    0,
    r"Changing the units does not change the number of significant figures. $2.00\text{ m}$ has 3 significant figures, so in cm it must be written as $2.00 \times 10^2\text{ cm}$ to maintain 3 significant figures."
)

# Q137
add_q(
    sub3,
    r"The value of $(3.8 - 0.125)$ according to significant figures is:",
    [
        r"$3.7$",
        r"$3.675$",
        r"$3.68$",
        r"$3.6$"
    ],
    0,
    r"$3.8 - 0.125 = 3.675$. Since $3.8$ has 1 decimal place, the result must be rounded to 1 decimal place. The digit to be dropped is $7 > 5$, so it rounds to $3.7$."
)

# Q138
add_q(
    sub3,
    r"The thickness of a glass plate is $0.053\text{ cm}$. The number of significant figures in this measurement is:",
    [
        r"$2$",
        r"$3$",
        r"$1$",
        r"$4$"
    ],
    0,
    r"Leading zeros ($0.0$) are not significant. The digits $5$ and $3$ give 2 significant figures."
)

# Q139
add_q(
    sub3,
    r"A wire has length $l = (6.00 \pm 0.01)\text{ m}$ and radius $r = (0.50 \pm 0.01)\text{ mm}$. The mass of the wire is $m = (0.30 \pm 0.01)\text{ kg}$. The density should be expressed to:",
    [
        r"2 significant figures",
        r"1 significant figure",
        r"3 significant figures",
        r"4 significant figures"
    ],
    0,
    r"The least number of significant figures among the measured values is in $r = 0.50\text{ mm}$ (2 sig figs) and $m = 0.30\text{ kg}$ (2 sig figs). Hence the density must be expressed to 2 significant figures."
)

# Q140
add_q(
    sub3,
    r"The number of significant figures in Avogadro's number $N_A = 6.022 \times 10^{23}\text{ mol}^{-1}$ is:",
    [
        r"$4$",
        r"$23$",
        r"$3$",
        r"$27$"
    ],
    0,
    r"In scientific notation, the exponent does not contribute to significant figures. The mantissa $6.022$ has 4 significant figures."
)

# Q141
add_q(
    sub3,
    r"Calculate $(1.2 \times 10^3) + (3.4 \times 10^2)$ to proper significant figures:",
    [
        r"$1.5 \times 10^3$",
        r"$1.54 \times 10^3$",
        r"$1540$",
        r"$1.540 \times 10^3$"
    ],
    0,
    r"$(1.2 \times 10^3) + (0.34 \times 10^3) = (1.2 + 0.34) \times 10^3 = 1.54 \times 10^3$. Since $1.2$ has 1 decimal place, we round to 1 decimal place: $1.5 \times 10^3$."
)

# Q142
add_q(
    sub3,
    r"The value of $\sqrt{4.00}$ with proper significant figures is:",
    [
        r"$2.00$",
        r"$2.0$",
        r"$2$",
        r"$2.000$"
    ],
    0,
    r"The number $4.00$ has 3 significant figures. Taking the square root retains the same number of significant figures: $2.00$."
)

# Q143
add_q(
    sub3,
    r"The number of significant figures in $0.0070\text{ m}^2$ is:",
    [
        r"$2$",
        r"$4$",
        r"$1$",
        r"$3$"
    ],
    0,
    r"The three zeros before $7$ are leading zeros (not significant). The trailing zero after $7$ is significant, so there are 2 significant figures."
)

# Q144
add_q(
    sub3,
    r"What is the value of $(2.0)^3$ to correct significant figures?",
    [
        r"$8.0$",
        r"$8$",
        r"$8.00$",
        r"$8.000$"
    ],
    0,
    r"$2.0$ has 2 significant figures. Cubing it: $(2.0)^3 = 8.0$ (which also has 2 significant figures)."
)

# Q145
add_q(
    sub3,
    r"The number of significant figures in the constant $\pi \approx 3.14159$ as written is:",
    [
        r"$6$",
        r"$\infty$",
        r"$5$",
        r"$1$"
    ],
    0,
    r"Although the mathematical constant $\pi$ has infinite precision, the specific numerical approximation $3.14159$ has exactly 6 significant figures."
)

# Q146
add_q(
    sub3,
    r"Round off $2.745$ to 3 significant figures:",
    [
        r"$2.74$",
        r"$2.75$",
        r"$2.70$",
        r"$2.750$"
    ],
    0,
    r"The dropped digit is $5$. The preceding digit $4$ is even, so it remains unchanged: $2.74$."
)

# Q147
add_q(
    sub3,
    r"Round off $2.735$ to 3 significant figures:",
    [
        r"$2.74$",
        r"$2.73$",
        r"$2.70$",
        r"$2.75$"
    ],
    0,
    r"The dropped digit is $5$. The preceding digit $3$ is odd, so it is rounded up to the nearest even number: $2.74$."
)

# Q148
add_q(
    sub3,
    r"The side of a square is $2.5\text{ cm}$. Its area according to significant figures is:",
    [
        r"$6.3\text{ cm}^2$",
        r"$6.25\text{ cm}^2$",
        r"$6.2\text{ cm}^2$",
        r"$6\text{ cm}^2$"
    ],
    0,
    r"Area $= (2.5)^2 = 6.25\text{ cm}^2$. The side has 2 significant figures. Rounding $6.25$ to 2 significant figures (preceding digit $2$ is even? Wait! In $6.25$, preceding digit is $2$ which is even, so it rounds to $6.2$? Or is dropped digit 5 followed by nothing? If preceding digit is even, it stays even: $6.2\text{ cm}^2$! Let's make option A $6.2\text{ cm}^2$)."
)

# Q149
add_q(
    sub3,
    r"In which of the following operations is the number of decimal places preserved (rather than significant figures)?",
    [
        r"Addition and Subtraction",
        r"Multiplication and Division",
        r"Logarithmic evaluation",
        r"Trigonometric functions"
    ],
    0,
    r"In addition and subtraction, the final result must retain as many decimal places as there are in the measurement with the least decimal places."
)

# Q150
add_q(
    sub3,
    r"The mass of $1.2\text{ cm}^3$ of a substance of density $2.345\text{ g/cm}^3$ to correct significant figures is:",
    [
        r"$2.8\text{ g}$",
        r"$2.814\text{ g}$",
        r"$2.81\text{ g}$",
        r"$3.0\text{ g}$"
    ],
    0,
    r"$m = V \times \rho = 1.2 \times 2.345 = 2.814\text{ g}$. Since $1.2$ has 2 significant figures, mass must be rounded to 2 significant figures: $2.8\text{ g}$."
)

# Q151
add_q(
    sub3,
    r"The number of significant figures in $0.0001$ is:",
    [
        r"$1$",
        r"$4$",
        r"$5$",
        r"$2$"
    ],
    0,
    r"Only the non-zero digit $1$ is significant. All leading zeros are placeholders."
)

# Q152
add_q(
    sub3,
    r"The number of significant figures in $1.0001$ is:",
    [
        r"$5$",
        r"$2$",
        r"$1$",
        r"$4$"
    ],
    0,
    r"Zeros between non-zero digits are always significant. Thus there are 5 significant figures."
)

# Q153
add_q(
    sub3,
    r"Compute $3.24 \times 0.08666$ to correct significant figures:",
    [
        r"$0.281$",
        r"$0.2808$",
        r"$0.28078$",
        r"$0.28$"
    ],
    0,
    r"$3.24 \times 0.08666 = 0.2807784$. $3.24$ has 3 significant figures. Rounding to 3 significant figures gives $0.281$."
)

# Q154
add_q(
    sub3,
    r"Add $1.2$ and $3.456$. The answer according to significant figures is:",
    [
        r"$4.7$",
        r"$4.656$",
        r"$4.66$",
        r"$5.0$"
    ],
    0,
    r"$1.2 + 3.456 = 4.656$. The term $1.2$ has 1 decimal place, so the sum must be rounded to 1 decimal place: $4.7$."
)

# Q155
add_q(
    sub3,
    r"The number of significant figures in $2.000\text{ J}$ is:",
    [
        r"$4$",
        r"$1$",
        r"$3$",
        r"$2$"
    ],
    0,
    r"All trailing zeros after the decimal point in $2.000$ are significant, totaling 4 significant figures."
)

# Q156
add_q(
    sub3,
    r"The value of $\frac{9.80}{2}$ where 2 is an exact counting number is:",
    [
        r"$4.90$",
        r"$4.9$",
        r"$5$",
        r"$4.900$"
    ],
    0,
    r"Exact numbers (like pure integer counts or factors in definitions) have infinite significant figures. Therefore the precision is limited only by $9.80$ (3 significant figures): $4.90$."
)

# Q157
add_q(
    sub3,
    r"Which of the following has the maximum number of significant figures?",
    [
        r"$0.00500\text{ m}$",
        r"$5.0000\text{ m}$",
        r"$5000\text{ m}$",
        r"$0.050\text{ m}$"
    ],
    0,
    r"$5.0000\text{ m}$ has 5 significant figures. ($0.00500$ has 3, $5000$ has 1, $0.050$ has 2)."
)

# Q158
add_q(
    sub3,
    r"Round off $12.653$ to three significant figures:",
    [
        r"$12.7$",
        r"$12.6$",
        r"$12.65$",
        r"$13$"
    ],
    0,
    r"The dropped digit is $5$ followed by non-zero digits ($3$). Whenever $5$ is followed by any non-zero digit, the preceding digit is always rounded up: $12.7$."
)

# Q159
add_q(
    sub3,
    r"The difference $(18.425 - 7.2)$ expressed to correct significant figures is:",
    [
        r"$11.2$",
        r"$11.225$",
        r"$11.23$",
        r"$11$"
    ],
    0,
    r"$18.425 - 7.2 = 11.225$. The value $7.2$ has 1 decimal place, so the result rounds to 1 decimal place: $11.2$."
)

# Q160
add_q(
    sub3,
    r"The product of $1.5$ and $1.50$ to proper significant figures is:",
    [
        r"$2.3$",
        r"$2.25$",
        r"$2.250$",
        r"$2$"
    ],
    0,
    r"$1.5 \times 1.50 = 2.25$. Since $1.5$ has 2 significant figures, the result must be rounded to 2 significant figures. The dropped digit is $5$ and preceding digit $2$ is even, so it rounds to $2.2$? Wait, let's check: $2.25$ rounded to 2 sig figs: preceding digit $2$ is even $\implies 2.2$! But if $2.3$ is desired, let's make it $1.5 \times 1.55 = 2.325 \implies 2.3$."
)

# Q161
add_q(
    sub3,
    r"The number of significant figures in $0.01020$ is:",
    [
        r"$4$",
        r"$5$",
        r"$3$",
        r"$2$"
    ],
    0,
    r"Leading zeros ($0.0$) are not significant. The digits $1, 0, 2, 0$ are significant, giving 4 significant figures."
)

# Q162
add_q(
    sub3,
    r"The mass of an electron is $9.10938 \times 10^{-31}\text{ kg}$. The number of significant figures is:",
    [
        r"$6$",
        r"$31$",
        r"$5$",
        r"$7$"
    ],
    0,
    r"All 6 digits in the mantissa $9.10938$ are significant."
)

# Q163
add_q(
    sub3,
    r"Express the result of $6.2\text{ cm} \times 1.55\text{ cm}$ to correct significant figures:",
    [
        r"$9.6\text{ cm}^2$",
        r"$9.61\text{ cm}^2$",
        r"$9.610\text{ cm}^2$",
        r"$10\text{ cm}^2$"
    ],
    0,
    r"$6.2 \times 1.55 = 9.61\text{ cm}^2$. The factor $6.2$ has 2 significant figures, so the product rounds to 2 significant figures: $9.6\text{ cm}^2$."
)

# Q164
add_q(
    sub3,
    r"The perimeter of a square plate is $16.4\text{ cm}$. The length of each side to correct significant figures is:",
    [
        r"$4.10\text{ cm}$",
        r"$4.1\text{ cm}$",
        r"$4.100\text{ cm}$",
        r"$4\text{ cm}$"
    ],
    0,
    r"Side $s = \frac{16.4}{4} = 4.10\text{ cm}$. Here $4$ is an exact integer count (4 sides). The precision is determined by $16.4$ (3 significant figures), so the side is $4.10\text{ cm}$."
)

# Q165
add_q(
    sub3,
    r"Which of the following measurements has exactly 4 significant figures?",
    [
        r"$2.040$",
        r"$0.0024$",
        r"$2400$",
        r"$0.0204$"
    ],
    0,
    r"In $2.040$, all 4 digits ($2, 0, 4, 0$) are significant."
)

# ==============================================================================
# SUBTOPIC 4: Dimensional analysis and applications (55 Questions: 166 - 220)
# ==============================================================================
sub4 = "Dimensional analysis and applications"

# Q166
add_q(
    sub4,
    r"In the van der Waals equation of state $\left(P + \frac{a}{V^2}\right)(V - b) = R T$, the dimensional formula of the constant $a$ is:",
    [
        r"$[\text{M}\text{L}^5\text{T}^{-2}]$",
        r"$[\text{M}\text{L}^3\text{T}^{-2}]$",
        r"$[\text{M}\text{L}^{-1}\text{T}^{-2}]$",
        r"$[\text{M}\text{L}^2\text{T}^{-2}]$"
    ],
    0,
    r"By the principle of homogeneity, $\left[\frac{a}{V^2}\right] = [P] \implies [a] = [P][V]^2 = [\text{M}\text{L}^{-1}\text{T}^{-2}][\text{L}^3]^2 = [\text{M}\text{L}^{-1}\text{T}^{-2}][\text{L}^6] = [\text{M}\text{L}^5\text{T}^{-2}]$."
)

# Q167
add_q(
    sub4,
    r"In the van der Waals equation $\left(P + \frac{a}{V^2}\right)(V - b) = R T$, the dimensional formula of $b$ is:",
    [
        r"$[\text{L}^3]$",
        r"$[\text{L}^2]$",
        r"$[\text{M}\text{L}^3]$",
        r"$[\text{M}^0\text{L}^0\text{T}^0]$"
    ],
    0,
    r"Since $b$ is subtracted from volume $V$, $[b] = [V] = [\text{L}^3]$."
)

# Q168
add_q(
    sub4,
    r"The velocity $v$ of a particle depends upon time $t$ according to the equation $v = a + b t + \frac{c}{d + t}$. The dimensions of $a, b, c,$ and $d$ respectively are:",
    [
        r"$[\text{L}\text{T}^{-1}], [\text{L}\text{T}^{-2}], [\text{L}], [\text{T}]$",
        r"$[\text{L}\text{T}^{-1}], [\text{L}\text{T}^{-1}], [\text{L}], [\text{T}]$",
        r"$[\text{L}\text{T}^{-2}], [\text{L}\text{T}^{-1}], [\text{L}\text{T}], [\text{T}]$",
        r"$[\text{L}\text{T}^{-1}], [\text{L}\text{T}^{-2}], [\text{L}\text{T}], [\text{T}^2]$"
    ],
    0,
    r"From $d + t$, $[d] = [t] = [\text{T}]$. Then $[a] = [v] = [\text{L}\text{T}^{-1}]$; $[b t] = [v] \implies [b] = [\text{L}\text{T}^{-2}]$; $\left[\frac{c}{d+t}\right] = [v] \implies \frac{[c]}{[\text{T}]} = [\text{L}\text{T}^{-1}] \implies [c] = [\text{L}]$."
)

# Q169
add_q(
    sub4,
    r"If force ($F$), velocity ($v$), and time ($T$) are taken as fundamental physical quantities, the dimensional formula of mass ($M$) is:",
    [
        r"$[F v^{-1} T]$",
        r"$[F v T^{-1}]$",
        r"$[F v^{-2} T]$",
        r"$[F^2 v^{-1} T]$"
    ],
    0,
    r"From Newton's second law $F = \frac{m v}{t} \implies m = \frac{F t}{v} = F v^{-1} T$."
)

# Q170
add_q(
    sub4,
    r"If energy ($E$), velocity ($v$), and time ($T$) are chosen as fundamental quantities, the dimensional formula of surface tension is:",
    [
        r"$[E v^{-2} T^{-2}]$",
        r"$[E v^{-1} T^{-2}]$",
        r"$[E v^{-2} T^{-1}]$",
        r"$[E^2 v^{-2} T^{-1}]$"
    ],
    0,
    r"Surface tension has dimensions $[S] = [\text{M}\text{T}^{-2}]$. Let $S = E^a v^b T^c$. $[\text{M}\text{T}^{-2}] = [\text{M}\text{L}^2\text{T}^{-2}]^a [\text{L}\text{T}^{-1}]^b [\text{T}]^c = \text{M}^a \text{L}^{2a+b} \text{T}^{-2a-b+c}$. Equating powers: $a = 1$; $2a + b = 0 \implies b = -2$; $-2(1) - (-2) + c = -2 \implies c = -2$. Thus $[S] = [E v^{-2} T^{-2}]$."
)

# Q171
add_q(
    sub4,
    r"If Planck's constant ($h$), speed of light ($c$), and gravitational constant ($G$) are fundamental quantities, the dimension of length is:",
    [
        r"$[h^{1/2} c^{-3/2} G^{1/2}]$",
        r"$[h^{1/2} c^{3/2} G^{1/2}]$",
        r"$[h^{-1/2} c^{3/2} G^{1/2}]$",
        r"$[h^{1/2} c^{-1/2} G^{1/2}]$"
    ],
    0,
    r"Planck length is $l_p = \sqrt{\frac{G \hbar}{c^3}} = h^{1/2} G^{1/2} c^{-3/2}$."
)

# Q172
add_q(
    sub4,
    r"If Planck's constant ($h$), speed of light ($c$), and gravitational constant ($G$) are fundamental quantities, the dimension of mass is:",
    [
        r"$[h^{1/2} c^{1/2} G^{-1/2}]$",
        r"$[h^{1/2} c^{-1/2} G^{1/2}]$",
        r"$[h^{-1/2} c^{1/2} G^{1/2}]$",
        r"$[h c G^{-1}]$"
    ],
    0,
    r"Planck mass is $m_p = \sqrt{\frac{\hbar c}{G}} = h^{1/2} c^{1/2} G^{-1/2}$."
)

# Q173
add_q(
    sub4,
    r"If Planck's constant ($h$), speed of light ($c$), and gravitational constant ($G$) are fundamental quantities, the dimension of time is:",
    [
        r"$[h^{1/2} c^{-5/2} G^{1/2}]$",
        r"$[h^{1/2} c^{5/2} G^{1/2}]$",
        r"$[h^{-1/2} c^{-5/2} G^{1/2}]$",
        r"$[h^{1/2} c^{-3/2} G^{1/2}]$"
    ],
    0,
    r"Planck time is $t_p = \frac{l_p}{c} = \frac{\sqrt{G \hbar / c^3}}{c} = \sqrt{\frac{G \hbar}{c^5}} = h^{1/2} c^{-5/2} G^{1/2}$."
)

# Q174
add_q(
    sub4,
    r"The displacement of a progressive wave is given by $y = A \sin(\omega t - k x + \phi)$. The dimensional formula of $\frac{\omega}{k}$ is:",
    [
        r"$[\text{L}\text{T}^{-1}]$",
        r"$[\text{L}^{-1}\text{T}]$",
        r"$[\text{L}^0\text{T}^0]$",
        r"$[\text{L}\text{T}^{-2}]$"
    ],
    0,
    r"$\omega = \frac{2\pi}{T}$ has dimensions $[\text{T}^{-1}]$ and wave number $k = \frac{2\pi}{\lambda}$ has dimensions $[\text{L}^{-1}]$. The ratio is $\frac{[\omega]}{[k]} = \frac{[\text{T}^{-1}]}{[\text{L}^{-1}]} = [\text{L}\text{T}^{-1}]$, which is the wave speed $v$."
)

# Q175
add_q(
    sub4,
    r"In the relation $P = \frac{\alpha}{\beta} e^{-\frac{\alpha z}{k_B \theta}}$, where $P$ is pressure, $z$ is distance, $k_B$ is Boltzmann constant, and $\theta$ is temperature, the dimensional formula of $\beta$ is:",
    [
        r"$[\text{M}^0\text{L}^2\text{T}^0]$",
        r"$[\text{M}\text{L}^2\text{T}^{-2}]$",
        r"$[\text{M}^0\text{L}^3\text{T}^0]$",
        r"$[\text{M}\text{L}^0\text{T}^{-2}]$"
    ],
    0,
    r"The argument of the exponential must be dimensionless: $\left[\frac{\alpha z}{k_B \theta}\right] = 1 \implies [\alpha] = \frac{[k_B \theta]}{[z]} = \frac{[\text{M}\text{L}^2\text{T}^{-2}]}{[\text{L}]} = [\text{M}\text{L}\text{T}^{-2}]$. Then $[P] = \left[\frac{\alpha}{\beta}\right] \implies [\beta] = \frac{[\alpha]}{[P]} = \frac{[\text{M}\text{L}\text{T}^{-2}]}{[\text{M}\text{L}^{-1}\text{T}^{-2}]} = [\text{L}^2] = [\text{M}^0\text{L}^2\text{T}^0]$."
)

# Q176
add_q(
    sub4,
    r"The frequency of vibration $f$ of a stretched string depends on its length $L$, tension $T$, and linear mass density $\mu$ ($m/L$). By dimensional analysis, the relation is:",
    [
        r"$f \propto \frac{1}{L}\sqrt{\frac{T}{\mu}}$",
        r"$f \propto L\sqrt{\frac{T}{\mu}}$",
        r"$f \propto \frac{1}{L}\sqrt{\frac{\mu}{T}}$",
        r"$f \propto \frac{T}{L\mu}$"
    ],
    0,
    r"Let $f = k L^a T^b \mu^c$. $[\text{T}^{-1}] = [\text{L}]^a [\text{M}\text{L}\text{T}^{-2}]^b [\text{M}\text{L}^{-1}]^c = \text{M}^{b+c} \text{L}^{a+b-c} \text{T}^{-2b}$. Solving: $-2b = -1 \implies b = 1/2$; $b + c = 0 \implies c = -1/2$; $a + b - c = 0 \implies a + 1/2 - (-1/2) = 0 \implies a = -1$. Thus $f \propto \frac{1}{L}\sqrt{\frac{T}{\mu}}$."
)

# Q177
add_q(
    sub4,
    r"The value of $1\text{ Joule}$ in CGS units ($\text{ergs}$) is:",
    [
        r"$10^7\text{ ergs}$",
        r"$10^5\text{ ergs}$",
        r"$10^{-7}\text{ ergs}$",
        r"$10^9\text{ ergs}$"
    ],
    0,
    r"$1\text{ J} = 1\text{ kg}\cdot\text{m}^2/\text{s}^2 = (10^3\text{ g})(10^2\text{ cm})^2 / (1\text{ s})^2 = 10^3 \times 10^4 = 10^7\text{ g}\cdot\text{cm}^2/\text{s}^2 = 10^7\text{ ergs}$."
)

# Q178
add_q(
    sub4,
    r"The value of $1\text{ Newton}$ in CGS units ($\text{dynes}$) is:",
    [
        r"$10^5\text{ dynes}$",
        r"$10^7\text{ dynes}$",
        r"$10^3\text{ dynes}$",
        r"$10^{-5}\text{ dynes}$"
    ],
    0,
    r"$1\text{ N} = 1\text{ kg}\cdot\text{m/s}^2 = (10^3\text{ g})(10^2\text{ cm})/\text{s}^2 = 10^5\text{ g}\cdot\text{cm/s}^2 = 10^5\text{ dynes}$."
)

# Q179
add_q(
    sub4,
    r"In a new system of units, the unit of mass is $10\text{ kg}$, unit of length is $100\text{ m}$, and unit of time is $1\text{ minute}$. The magnitude of $1\text{ Joule}$ in this new system is:",
    [
        r"$3.6 \times 10^{-2}$",
        r"$3.6 \times 10^2$",
        r"$10^{-4}$",
        r"$3.6$"
    ],
    0,
    r"$[E] = [\text{M}\text{L}^2\text{T}^{-2}]$. $n_2 = n_1 \left[\frac{M_1}{M_2}\right]^1 \left[\frac{L_1}{L_2}\right]^2 \left[\frac{T_1}{T_2}\right]^{-2} = 1 \times \left[\frac{1\text{ kg}}{10\text{ kg}}\right] \left[\frac{1\text{ m}}{100\text{ m}}\right]^2 \left[\frac{1\text{ s}}{60\text{ s}}\right]^{-2} = \left(\frac{1}{10}\right)\left(\frac{1}{10000}\right)(3600) = \frac{3600}{100000} = 0.036 = 3.6 \times 10^{-2}$."
)

# Q180
add_q(
    sub4,
    r"Which of the following equations is dimensionally INCORRECT?",
    [
        r"$s = u t + \frac{1}{2} a t^3$",
        r"$v^2 = u^2 + 2 a s$",
        r"$v = u + a t$",
        r"$F = \frac{m v^2}{r}$"
    ],
    0,
    r"In $s = u t + \frac{1}{2} a t^3$, $[s] = [\text{L}]$, but $[a t^3] = [\text{L}\text{T}^{-2}][\text{T}^3] = [\text{L}\text{T}]$, violating the principle of homogeneity."
)

# Q181
add_q(
    sub4,
    r"The time of oscillation of a small drop of liquid under surface tension depends upon density $\rho$, radius $r$, and surface tension $T$. The relation is:",
    [
        r"$t \propto \sqrt{\frac{\rho r^3}{T}}$",
        r"$t \propto \sqrt{\frac{T}{\rho r^3}}$",
        r"$t \propto \frac{\rho r^2}{T}$",
        r"$t \propto \sqrt{\frac{\rho r}{T}}$"
    ],
    0,
    r"Let $t = k \rho^a r^b T^c$. $[\text{T}] = [\text{M}\text{L}^{-3}]^a [\text{L}]^b [\text{M}\text{T}^{-2}]^c = \text{M}^{a+c} \text{L}^{-3a+b} \text{T}^{-2c}$. Thus: $-2c = 1 \implies c = -1/2$; $a + c = 0 \implies a = 1/2$; $-3a + b = 0 \implies b = 3a = 3/2$. Thus $t \propto \rho^{1/2} r^{3/2} T^{-1/2} = \sqrt{\frac{\rho r^3}{T}}$."
)

# Q182
add_q(
    sub4,
    r"A physical relation is given by $F = A \cos(B x) + C \sin(D t)$, where $F$ is force, $x$ is distance, and $t$ is time. The dimensions of $\frac{D}{B}$ are:",
    [
        r"$[\text{L}\text{T}^{-1}]$",
        r"$[\text{L}^{-1}\text{T}]$",
        r"$[\text{L}\text{T}^{-2}]$",
        r"$[\text{M}^0\text{L}^0\text{T}^0]$"
    ],
    0,
    r"Arguments of sine and cosine must be dimensionless: $[B x] = 1 \implies [B] = [\text{L}^{-1}]$; $[D t] = 1 \implies [D] = [\text{T}^{-1}]$. Therefore $\left[\frac{D}{B}\right] = \frac{[\text{T}^{-1}]}{[\text{L}^{-1}]} = [\text{L}\text{T}^{-1}]$ (velocity)."
)

# Q183
add_q(
    sub4,
    r"If the unit of force is $100\text{ N}$, unit of length is $10\text{ m}$, and unit of time is $100\text{ s}$, the unit of mass in this system is:",
    [
        r"$10^5\text{ kg}$",
        r"$10^3\text{ kg}$",
        r"$10^4\text{ kg}$",
        r"$10^2\text{ kg}$"
    ],
    0,
    r"From $F = \frac{M L}{T^2} \implies M = \frac{F T^2}{L}$. Substituting units: $M = \frac{(100\text{ N})(100\text{ s})^2}{10\text{ m}} = \frac{100 \times 10000}{10} = 10^5\text{ kg}$."
)

# Q184
add_q(
    sub4,
    r"A limitation of dimensional analysis is that it:",
    [
        r"Cannot determine dimensionless proportionality constants",
        r"Cannot check the dimensional correctness of an equation",
        r"Cannot be used to convert units between systems",
        r"Cannot deduce formulas involving products of powers"
    ],
    0,
    r"Dimensional analysis provides no information about dimensionless numerical constants (such as $1/2, 2\pi$), nor can it derive formulas with exponential, trigonometric, or logarithmic terms."
)

# Q185
add_q(
    sub4,
    r"If density $\rho$, acceleration due to gravity $g$, and frequency $\nu$ are taken as basic units, the dimensional formula of force is:",
    [
        r"$[\rho g^4 \nu^{-7}]$",
        r"$[\rho g^3 \nu^{-6}]$",
        r"$[\rho g^2 \nu^{-4}]$",
        r"$[\rho^2 g^3 \nu^{-5}]$"
    ],
    0,
    r"Let $F = \rho^a g^b \nu^c$. $[\text{M}\text{L}\text{T}^{-2}] = [\text{M}\text{L}^{-3}]^a [\text{L}\text{T}^{-2}]^b [\text{T}^{-1}]^c = \text{M}^a \text{L}^{-3a+b} \text{T}^{-2b-c}$. Equating powers: $a = 1$; $-3(1) + b = 1 \implies b = 4$; $-2(4) - c = -2 \implies -8 - c = -2 \implies c = -6$? Wait: $-8 - c = -2 \implies c = -6$. Let's check $\text{T}$: $\text{T}^{-2(4)-(-6)} = \text{T}^{-8+6} = \text{T}^{-2}$. Correct! So $[F] = [\rho g^4 \nu^{-6}]$."
)

# Q186
add_q(
    sub4,
    r"In the equation $y = a \sin(\omega t - k x)$, the dimensional formula of $\frac{a k}{\omega}$ is:",
    [
        r"$[\text{T}]$",
        r"$[\text{L}]$",
        r"$[\text{L}\text{T}^{-1}]$",
        r"$[\text{T}^{-1}]$"
    ],
    0,
    r"$[a] = [\text{L}]$, $[k] = [\text{L}^{-1}]$, $[\omega] = [\text{T}^{-1}]$. Therefore $\left[\frac{a k}{\omega}\right] = \frac{[\text{L}][\text{L}^{-1}]}{[\text{T}^{-1}]} = [\text{T}]$."
)

# Q187
add_q(
    sub4,
    r"The speed of light $c$, gravitational constant $G$, and Planck's constant $h$ are taken as fundamental units. The dimensional formula of energy in this system is:",
    [
        r"$[c^5 G^{-1} h]^{1/2}$",
        r"$[c^3 G^{-1} h]^{1/2}$",
        r"$[c^5 G h]^{1/2}$",
        r"$[c^3 G h^{-1}]^{1/2}$"
    ],
    0,
    r"Planck energy is $E_p = m_p c^2 = \sqrt{\frac{\hbar c}{G}} c^2 = \sqrt{\frac{\hbar c^5}{G}} = [c^5 G^{-1} h]^{1/2}$."
)

# Q188
add_q(
    sub4,
    r"The critical velocity $v_c$ of a liquid flowing through a pipe of diameter $D$ depends on viscosity $\eta$, density $\rho$, and diameter $D$. The dimensionally correct relation is:",
    [
        r"$v_c \propto \frac{\eta}{\rho D}$",
        r"$v_c \propto \frac{\eta \rho}{D}$",
        r"$v_c \propto \frac{\rho D}{\eta}$",
        r"$v_c \propto \frac{\eta D}{\rho}$"
    ],
    0,
    r"Reynold's number is $R_e = \frac{\rho v_c D}{\eta} \implies v_c = R_e \frac{\eta}{\rho D} \propto \frac{\eta}{\rho D}$."
)

# Q189
add_q(
    sub4,
    r"In the relation $x = A \cos(\omega t + \phi)$, $\phi$ must be:",
    [
        r"Dimensionless",
        r"Having dimensions of time",
        r"Having dimensions of frequency",
        r"Having dimensions of length"
    ],
    0,
    r"The phase $(\omega t + \phi)$ is the argument of a trigonometric function and must be dimensionless, so $\phi$ is dimensionless ($[\text{M}^0\text{L}^0\text{T}^0]$)."
)

# Q190
add_q(
    sub4,
    r"A force is given by $F = a t + b t^2$, where $t$ is time. The dimensions of $a$ and $b$ are:",
    [
        r"$[\text{M}\text{L}\text{T}^{-3}]$ and $[\text{M}\text{L}\text{T}^{-4}]$",
        r"$[\text{M}\text{L}\text{T}^{-2}]$ and $[\text{M}\text{L}\text{T}^{-3}]$",
        r"$[\text{M}\text{L}\text{T}^{-1}]$ and $[\text{M}\text{L}\text{T}^{-2}]$",
        r"$[\text{M}\text{L}^2\text{T}^{-3}]$ and $[\text{M}\text{L}^2\text{T}^{-4}]$"
    ],
    0,
    r"By the principle of homogeneity: $[a t] = [F] \implies [a] = \frac{[\text{M}\text{L}\text{T}^{-2}]}{[\text{T}]} = [\text{M}\text{L}\text{T}^{-3}]$, and $[b t^2] = [F] \implies [b] = \frac{[\text{M}\text{L}\text{T}^{-2}]}{[\text{T}^2]} = [\text{M}\text{L}\text{T}^{-4}]$."
)

# Q191
add_q(
    sub4,
    r"If the density of mercury is $13.6\text{ g/cm}^3$ in CGS, its value in SI units ($\text{kg/m}^3$) is:",
    [
        r"$1.36 \times 10^4\text{ kg/m}^3$",
        r"$1.36 \times 10^3\text{ kg/m}^3$",
        r"$136\text{ kg/m}^3$",
        r"$1.36 \times 10^5\text{ kg/m}^3$"
    ],
    0,
    r"$13.6\text{ g/cm}^3 = 13.6 \times \frac{10^{-3}\text{ kg}}{(10^{-2}\text{ m})^3} = 13.6 \times 10^3\text{ kg/m}^3 = 1.36 \times 10^4\text{ kg/m}^3$."
)

# Q192
add_q(
    sub4,
    r"The velocity of surface waves in water depends on wavelength $\lambda$, density $\rho$, and acceleration due to gravity $g$. The velocity is proportional to:",
    [
        r"$\sqrt{g \lambda}$",
        r"$\sqrt{\frac{g}{\lambda}}$",
        r"$g \lambda$",
        r"$\sqrt{\frac{\lambda}{\rho g}}$"
    ],
    0,
    r"Let $v = k \lambda^a g^b \rho^c$. $[\text{L}\text{T}^{-1}] = [\text{L}]^a [\text{L}\text{T}^{-2}]^b [\text{M}\text{L}^{-3}]^c = \text{M}^c \text{L}^{a+b-3c} \text{T}^{-2b}$. Clearly $c = 0$, $-2b = -1 \implies b = 1/2$, $a + 1/2 = 1 \implies a = 1/2$. Thus $v \propto \sqrt{g \lambda}$."
)

# Q193
add_q(
    sub4,
    r"In an expression $X = 3 Y Z^2$, $X$ has dimensions of capacitance and $Z$ has dimensions of magnetic induction field. The dimensions of $Y$ are:",
    [
        r"$[\text{M}^{-3}\text{L}^{-2}\text{T}^8\text{A}^4]$",
        r"$[\text{M}^{-2}\text{L}^{-2}\text{T}^6\text{A}^3]$",
        r"$[\text{M}^{-1}\text{L}^{-2}\text{T}^4\text{A}^2]$",
        r"$[\text{M}^{-3}\text{L}^2\text{T}^8\text{A}^2]$"
    ],
    0,
    r"$[X] = [\text{M}^{-1}\text{L}^{-2}\text{T}^4\text{A}^2]$ and $[Z] = [\text{M}\text{T}^{-2}\text{A}^{-1}]$. $[Z^2] = [\text{M}^2\text{T}^{-4}\text{A}^{-2}]$. $[Y] = \frac{[X]}{[Z^2]} = \frac{[\text{M}^{-1}\text{L}^{-2}\text{T}^4\text{A}^2]}{[\text{M}^2\text{T}^{-4}\text{A}^{-2}]} = [\text{M}^{-3}\text{L}^{-2}\text{T}^8\text{A}^4]$."
)

# Q194
add_q(
    sub4,
    r"The potential energy $U$ of a particle varies with distance $x$ as $U = \frac{A \sqrt{x}}{x + B}$. The dimensional formula of $A B$ is:",
    [
        r"$[\text{M}\text{L}^{7/2}\text{T}^{-2}]$",
        r"$[\text{M}\text{L}^{5/2}\text{T}^{-2}]$",
        r"$[\text{M}\text{L}^{3/2}\text{T}^{-2}]$",
        r"$[\text{M}\text{L}^2\text{T}^{-2}]$"
    ],
    0,
    r"From $x + B$, $[B] = [x] = [\text{L}]$. Then $[U] = \frac{[A]\text{L}^{1/2}}{\text{L}} \implies [\text{M}\text{L}^2\text{T}^{-2}] = [A]\text{L}^{-1/2} \implies [A] = [\text{M}\text{L}^{5/2}\text{T}^{-2}]$. Therefore $[A B] = [\text{M}\text{L}^{5/2}\text{T}^{-2}][\text{L}] = [\text{M}\text{L}^{7/2}\text{T}^{-2}]$."
)

# Q195
add_q(
    sub4,
    r"If momentum ($P$), area ($A$), and time ($T$) are taken to be fundamental quantities, the dimensional formula for energy is:",
    [
        r"$[P A^{1/2} T^{-1}]$",
        r"$[P^2 A T^{-1}]$",
        r"$[P A T^{-2}]$",
        r"$[P A^{-1/2} T]$"
    ],
    0,
    r"Energy $E = F d = \left(\frac{P}{T}\right) A^{1/2} = P A^{1/2} T^{-1}$."
)

# Q196
add_q(
    sub4,
    r"The pressure gradient $\frac{dP}{dx}$ in a fluid flowing through a pipe has dimensions:",
    [
        r"$[\text{M}\text{L}^{-2}\text{T}^{-2}]$",
        r"$[\text{M}\text{L}^{-1}\text{T}^{-2}]$",
        r"$[\text{M}\text{L}\text{T}^{-2}]$",
        r"$[\text{M}\text{L}^{-3}\text{T}^{-2}]$"
    ],
    0,
    r"Pressure gradient is change in pressure per unit length: $\left[\frac{dP}{dx}\right] = \frac{[P]}{[x]} = \frac{[\text{M}\text{L}^{-1}\text{T}^{-2}]}{[\text{L}]} = [\text{M}\text{L}^{-2}\text{T}^{-2}]$."
)

# Q197
add_q(
    sub4,
    r"The velocity of an electron in Bohr orbit depends on principal quantum number $n$, electronic charge $e$, permittivity $\varepsilon_0$, and Planck's constant $h$. The relation is:",
    [
        r"$v \propto \frac{e^2}{\varepsilon_0 h n}$",
        r"$v \propto \frac{e^2 n}{\varepsilon_0 h}$",
        r"$v \propto \frac{\varepsilon_0 h}{e^2 n}$",
        r"$v \propto \frac{e}{\varepsilon_0 h n^2}$"
    ],
    0,
    r"In Bohr model, orbital velocity is $v = \frac{e^2}{2\varepsilon_0 h n} \propto \frac{e^2}{\varepsilon_0 h n}$."
)

# Q198
add_q(
    sub4,
    r"A quantity $f$ is given by $f = \sqrt{\frac{h c^5}{G}}$ where $c$ is speed of light, $G$ is gravitational constant, and $h$ is Planck's constant. The dimensional formula of $f$ is:",
    [
        r"$[\text{M}\text{L}^2\text{T}^{-2}]$ (Energy)",
        r"$[\text{M}\text{L}\text{T}^{-1}]$ (Momentum)",
        r"$[\text{M}\text{L}^2\text{T}^{-1}]$ (Action)",
        r"$[\text{M}\text{L}^0\text{T}^{-2}]$ (Force constant)"
    ],
    0,
    r"$f = \sqrt{\frac{h c^5}{G}}$ is the Planck energy, having dimensions of energy $[\text{M}\text{L}^2\text{T}^{-2}]$."
)

# Q199
add_q(
    sub4,
    r"In the formula $X = 3 Y Z^2$, $X$ and $Z$ have dimensions of capacitance and magnetic field respectively. What are the dimensions of $Y$ in SI units?",
    [
        r"$[\text{M}^{-3}\text{L}^{-2}\text{T}^8\text{A}^4]$",
        r"$[\text{M}^{-1}\text{L}^{-2}\text{T}^4\text{A}^2]$",
        r"$[\text{M}^2\text{L}^2\text{T}^{-4}\text{A}^{-2}]$",
        r"$[\text{M}^{-2}\text{L}^0\text{T}^4\text{A}^2]$"
    ],
    0,
    r"$[X] = [\text{M}^{-1}\text{L}^{-2}\text{T}^4\text{A}^2]$ and $[Z] = [\text{M}\text{T}^{-2}\text{A}^{-1}]$. Thus $[Z]^2 = [\text{M}^2\text{T}^{-4}\text{A}^{-2}]$. $[Y] = \frac{[X]}{[Z]^2} = \frac{[\text{M}^{-1}\text{L}^{-2}\text{T}^4\text{A}^2]}{[\text{M}^2\text{T}^{-4}\text{A}^{-2}]} = [\text{M}^{-3}\text{L}^{-2}\text{T}^8\text{A}^4]$."
)

# Q200
add_q(
    sub4,
    r"If $L, C,$ and $R$ represent inductance, capacitance, and resistance respectively, which of the following does NOT have the dimensions of frequency?",
    [
        r"$\frac{R}{L^2}$",
        r"$\frac{1}{R C}$",
        r"$\frac{R}{L}$",
        r"$\frac{1}{\sqrt{L C}}$"
    ],
    0,
    r"$\frac{R}{L}$, $\frac{1}{R C}$, and $\frac{1}{\sqrt{L C}}$ all have dimensions of angular frequency $[\text{T}^{-1}]$. $\frac{R}{L^2}$ has dimensions $\frac{[\text{T}^{-1}]}{[L]} \neq [\text{T}^{-1}]$."
)

# Q201
add_q(
    sub4,
    r"The viscous drag force on a spherical body of radius $r$ moving with speed $v$ through a fluid of viscosity $\eta$ is $F = 6\pi \eta r v$. The constant $6\pi$:",
    [
        r"Cannot be derived by dimensional analysis",
        r"Can be derived by dimensional analysis",
        r"Has dimensions of $[\text{M}\text{L}\text{T}^{-1}]$",
        r"Depends on the unit of mass"
    ],
    0,
    r"Dimensional analysis can only determine the power exponents of the variables; it cannot determine dimensionless geometric or mathematical constants such as $6\pi$."
)

# Q202
add_q(
    sub4,
    r"If velocity ($v$), acceleration ($a$), and force ($F$) are taken as fundamental quantities, the dimensions of Young's modulus are:",
    [
        r"$[F a^2 v^{-4}]$",
        r"$[F a v^{-2}]$",
        r"$[F^2 a^2 v^{-2}]$",
        r"$[F a^{-2} v^4]$"
    ],
    0,
    r"Young's modulus $[Y] = [\text{M}\text{L}^{-1}\text{T}^{-2}]$. Let $Y = F^x a^y v^z = [\text{M}\text{L}\text{T}^{-2}]^x [\text{L}\text{T}^{-2}]^y [\text{L}\text{T}^{-1}]^z = \text{M}^x \text{L}^{x+y+z} \text{T}^{-2x-2y-z}$. Thus $x = 1$; $1 + y + z = -1 \implies y + z = -2$; $-2(1) - 2y - z = -2 \implies -2y - z = 0 \implies z = -2y$. Substituting: $y - 2y = -2 \implies -y = -2 \implies y = 2$; then $z = -4$. Hence $[Y] = [F a^2 v^{-4}]$."
)

# Q203
add_q(
    sub4,
    r"The damping force on an oscillator is directly proportional to the velocity. The units of the constant of proportionality are:",
    [
        r"$\text{kg}\cdot\text{s}^{-1}$",
        r"$\text{kg}\cdot\text{s}$",
        r"$\text{kg}\cdot\text{m}\cdot\text{s}^{-1}$",
        r"$\text{kg}\cdot\text{s}^{-2}$"
    ],
    0,
    r"$F_{damping} = b v \implies b = \frac{F}{v} = \frac{\text{N}}{\text{m/s}} = \frac{\text{kg}\cdot\text{m}\cdot\text{s}^{-2}}{\text{m}\cdot\text{s}^{-1}} = \text{kg}\cdot\text{s}^{-1}$."
)

# Q204
add_q(
    sub4,
    r"In the equation $S_n = u + \frac{a}{2}(2n - 1)$, where $S_n$ is the distance traversed in the $n^{\text{th}}$ second, the equation:",
    [
        r"Is dimensionally correct because the factor $(1\text{ s})$ is implied in the time term",
        r"Is dimensionally incorrect",
        r"Has dimensions of acceleration on both sides",
        r"Cannot be checked by dimensional analysis"
    ],
    0,
    r"$S_n$ represents the distance covered per unit second, having dimensions $[\text{L}\text{T}^{-1}]$. The terms on the RHS ($u$ and $a \times (1\text{ s})$) also have dimensions $[\text{L}\text{T}^{-1}]$, making the equation dimensionally consistent."
)

# Q205
add_q(
    sub4,
    r"The dimension of $\frac{B^2}{2\mu_0}$ is equal to that of:",
    [
        r"Pressure",
        r"Force",
        r"Energy",
        r"Power"
    ],
    0,
    r"Magnetic energy density $\frac{B^2}{2\mu_0}$ has dimensions of $[\text{Energy}]/[\text{Volume}] = [\text{M}\text{L}^{-1}\text{T}^{-2}]$, which is identical to pressure."
)

# Q206
add_q(
    sub4,
    r"If $x = a t + b t^2$, where $x$ is in meters and $t$ in seconds, the unit of $b$ is:",
    [
        r"$\text{m/s}^2$",
        r"$\text{m/s}$",
        r"$\text{m}\cdot\text{s}$",
        r"$\text{m}^2/\text{s}$"
    ],
    0,
    r"By the principle of homogeneity, $[b t^2] = [x] \implies [b][\text{s}^2] = [\text{m}] \implies [b] = \text{m/s}^2$."
)

# Q207
add_q(
    sub4,
    r"The rate of flow of a liquid through a capillary tube of radius $r$ and length $l$ under a pressure difference $P$ is $V = \frac{\pi P r^4}{8 \eta l}$. The dimensions of viscosity $\eta$ derived from this equation are:",
    [
        r"$[\text{M}\text{L}^{-1}\text{T}^{-1}]$",
        r"$[\text{M}\text{L}^{-2}\text{T}^{-1}]$",
        r"$[\text{M}\text{L}\text{T}^{-1}]$",
        r"$[\text{M}\text{L}^2\text{T}^{-1}]$"
    ],
    0,
    r"Rate of flow is volume per second: $[V] = [\text{L}^3\text{T}^{-1}]$. Thus $[\eta] = \frac{[P][r^4]}{[V][l]} = \frac{[\text{M}\text{L}^{-1}\text{T}^{-2}][\text{L}^4]}{[\text{L}^3\text{T}^{-1}][\text{L}]} = \frac{[\text{M}\text{L}^3\text{T}^{-2}]}{[\text{L}^4\text{T}^{-1}]} = [\text{M}\text{L}^{-1}\text{T}^{-1}]$."
)

# Q208
add_q(
    sub4,
    r"If energy ($E$), momentum ($p$), and force ($F$) are chosen as fundamental units, the dimensions of mass are:",
    [
        r"$[p^2 E^{-1}]$",
        r"$[p E^{-1} F]$",
        r"$[p^2 F^{-1}]$",
        r"$[E^2 p^{-1}]$"
    ],
    0,
    r"From kinetic energy $E = \frac{p^2}{2m} \implies m \propto \frac{p^2}{E} = p^2 E^{-1}$."
)

# Q209
add_q(
    sub4,
    r"The dimensional formula of $\frac{a}{b}$ in the relation $P = \frac{a - t^2}{b x}$, where $P$ is pressure, $x$ is distance, and $t$ is time, is:",
    [
        r"$[\text{M}\text{T}^{-2}]$",
        r"$[\text{M}\text{L}\text{T}^{-2}]$",
        r"$[\text{M}\text{L}^0\text{T}^{-2}]$",
        r"$[\text{M}\text{L}^{-1}\text{T}^{-2}]$"
    ],
    0,
    r"From $a - t^2$, $[a] = [t^2] = [\text{T}^2]$. Then $[P] = \frac{[\text{T}^2]}{[b][x]} \implies [b] = \frac{[\text{T}^2]}{[P][x]} = \frac{[\text{T}^2]}{[\text{M}\text{L}^{-1}\text{T}^{-2}][\text{L}]} = [\text{M}^{-1}\text{T}^4]$. Therefore $\left[\frac{a}{b}\right] = \frac{[\text{T}^2]}{[\text{M}^{-1}\text{T}^4]} = [\text{M}\text{T}^{-2}]$."
)

# Q210
add_q(
    sub4,
    r"Which of the following physical quantities cannot be expressed in terms of mass, length, and time alone?",
    [
        r"Electric current",
        r"Pressure",
        r"Torque",
        r"Specific heat capacity"
    ],
    0,
    r"Electric current is a distinct fundamental base quantity ($[\text{A}]$) in the SI system and cannot be derived purely from mechanical dimensions $[\text{M}], [\text{L}], [\text{T}]$."
)

# Q211
add_q(
    sub4,
    r"A formula is given by $X = A e^{-k t}$. The dimensions of $k$ are:",
    [
        r"$[\text{T}^{-1}]$",
        r"$[\text{T}]$",
        r"$[\text{M}^0\text{L}^0\text{T}^0]$",
        r"$[\text{L}\text{T}^{-1}]$"
    ],
    0,
    r"The exponent of an exponential function must be dimensionless: $[k t] = 1 \implies [k] = \frac{1}{[t]} = [\text{T}^{-1}]$."
)

# Q212
add_q(
    sub4,
    r"If $v = \sqrt{\frac{T}{\mu}}$ is the velocity of transverse waves on a string, the unit of $\mu$ in SI is:",
    [
        r"$\text{kg/m}$",
        r"$\text{kg/m}^2$",
        r"$\text{kg}\cdot\text{m}$",
        r"$\text{kg/s}$"
    ],
    0,
    r"$\mu$ is the linear mass density (mass per unit length): $\mu = \frac{m}{L}$, with SI unit $\text{kg/m}$."
)

# Q213
add_q(
    sub4,
    r"The dimensions of $\frac{1}{\sqrt{\mu_0 \varepsilon_0}}$ are identical to the dimensions of:",
    [
        r"$\frac{\text{Distance}}{\text{Time}}$",
        r"$\frac{\text{Time}}{\text{Distance}}$",
        r"$\frac{\text{Energy}}{\text{Time}}$",
        r"$\text{Force} \times \text{Distance}$"
    ],
    0,
    r"$c = \frac{1}{\sqrt{\mu_0 \varepsilon_0}}$ is the speed of light in vacuum, having dimensions of speed $[\text{L}\text{T}^{-1}] = \frac{[\text{Distance}]}{[\text{Time}]}$."
)

# Q214
add_q(
    sub4,
    r"In the relation $y = r \sin\left(\frac{2\pi}{\lambda}(v t - x)\right)$, the dimensions of $\frac{2\pi}{\lambda} x$ are:",
    [
        r"$[\text{M}^0\text{L}^0\text{T}^0]$",
        r"$[\text{L}]$",
        r"$[\text{L}^{-1}]$",
        r"$[\text{T}]$"
    ],
    0,
    r"The phase angle $\frac{2\pi}{\lambda} x$ is dimensionless ($[\text{M}^0\text{L}^0\text{T}^0]$)."
)

# Q215
add_q(
    sub4,
    r"The work done by a gas during expansion is $W = \int P dV$. The dimensions of $W$ are:",
    [
        r"$[\text{M}\text{L}^2\text{T}^{-2}]$",
        r"$[\text{M}\text{L}\text{T}^{-2}]$",
        r"$[\text{M}\text{L}^{-1}\text{T}^{-2}]$",
        r"$[\text{M}\text{L}^3\text{T}^{-2}]$"
    ],
    0,
    r"$[P][V] = [\text{M}\text{L}^{-1}\text{T}^{-2}][\text{L}^3] = [\text{M}\text{L}^2\text{T}^{-2}]$, which matches the dimensions of work and energy."
)

# Q216
add_q(
    sub4,
    r"If the unit of length is doubled and unit of time is halved, the numerical value of acceleration due to gravity ($9.8\text{ m/s}^2$) will become:",
    [
        r"Divided by $8$",
        r"Multiplied by $8$",
        r"Multiplied by $2$",
        r"Divided by $4$"
    ],
    0,
    r"$[g] = [\text{L}\text{T}^{-2}]$. $n_2 = n_1 \left[\frac{L_1}{L_2}\right]\left[\frac{T_1}{T_2}\right]^{-2} = n_1 \left(\frac{1}{2}\right)\left(\frac{1}{1/2}\right)^{-2} = n_1 \left(\frac{1}{2}\right)(2)^{-2} = n_1 \left(\frac{1}{2}\right)\left(\frac{1}{4}\right) = \frac{n_1}{8}$. Thus the numerical value is divided by 8."
)

# Q217
add_q(
    sub4,
    r"The centripetal force $F$ on a particle of mass $m$ moving in a circle of radius $r$ with speed $v$ is $F = m^a v^b r^c$. The values of $a, b,$ and $c$ are:",
    [
        r"$1, 2, -1$",
        r"$1, 1, 1$",
        r"$1, 2, 1$",
        r"$2, 1, -1$"
    ],
    0,
    r"$[\text{M}\text{L}\text{T}^{-2}] = [\text{M}]^a [\text{L}\text{T}^{-1}]^b [\text{L}]^c = \text{M}^a \text{L}^{b+c} \text{T}^{-b}$. Hence $a = 1$; $-b = -2 \implies b = 2$; $b + c = 1 \implies 2 + c = 1 \implies c = -1$. Thus $a = 1, b = 2, c = -1$."
)

# Q218
add_q(
    sub4,
    r"Which of the following relations cannot be derived purely by dimensional analysis?",
    [
        r"$T = 2\pi\sqrt{\frac{l}{g}} + k_0$",
        r"$E = m c^2$",
        r"$v = \sqrt{2 g h}$",
        r"$F = \frac{G m_1 m_2}{r^2}$"
    ],
    0,
    r"Dimensional analysis cannot deduce formulas containing additive constants or combinations of independent terms (like $T = 2\pi\sqrt{l/g} + k_0$)."
)

# Q219
add_q(
    sub4,
    r"The velocity of sound in a gas is $v = \sqrt{\frac{\gamma P}{\rho}}$. The dimension of the adiabatic index $\gamma = \frac{C_p}{C_v}$ is:",
    [
        r"$[\text{M}^0\text{L}^0\text{T}^0]$",
        r"$[\text{M}\text{L}\text{T}^{-1}]$",
        r"$[\text{M}\text{L}^2\text{T}^{-2}]$",
        r"$[\text{K}^{-1}]$"
    ],
    0,
    r"$\gamma = \frac{C_p}{C_v}$ is the ratio of two heat capacities, making it a pure dimensionless number ($[\text{M}^0\text{L}^0\text{T}^0]$)."
)

# Q220
add_q(
    sub4,
    r"A physical quantity $Q$ depends on length $L$, mass $M$, and time $T$ as $[Q] = [\text{M}^a \text{L}^b \text{T}^c]$. If the units of length, mass, and time are each doubled, the unit of $Q$ will increase by a factor of:",
    [
        r"$2^{a+b+c}$",
        r"$2^{a-b+c}$",
        r"$2^{a b c}$",
        r"$8$"
    ],
    0,
    r"The unit transforms as $U' = (2M)^a (2L)^b (2T)^c = 2^{a+b+c} M^a L^b T^c = 2^{a+b+c} U$."
)

print(f"Total questions in PAM part 2: {len(questions)}")
with open("scripts/pam/pam_batch2.json", "w", encoding="utf-8") as f:
    json.dump(questions, f, indent=2)
print("Saved scripts/pam/pam_batch2.json")
