# scripts/pam/gen_pam_part3.py
import json

questions = []

def add_q(subtopic, question, options, correct_idx, explanation, difficulty="Medium"):
    idx = len(questions) + 221
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
# SUBTOPIC 5: Least count and precision (55 Questions: 221 - 275)
# ==============================================================================
sub5 = "Least count and precision"

# Q221
add_q(
    sub5,
    r"One main scale division ($\text{MSD}$) of a vernier callipers is $1\text{ mm}$ and $10$ vernier scale divisions ($\text{VSD}$) coincide with $9\text{ MSD}$. The least count of the instrument is:",
    [
        r"$0.1\text{ mm}$",
        r"$0.01\text{ mm}$",
        r"$0.05\text{ mm}$",
        r"$1.0\text{ mm}$"
    ],
    0,
    r"Least count $\text{LC} = 1\text{ MSD} - 1\text{ VSD} = 1\text{ mm} - \frac{9}{10}\text{ mm} = \frac{1}{10}\text{ mm} = 0.1\text{ mm}$ (or $0.01\text{ cm}$)."
)

# Q222
add_q(
    sub5,
    r"A vernier callipers has $20$ divisions on the vernier scale which coincide with $19$ divisions on the main scale. If $1\text{ MSD} = 1\text{ mm}$, the least count is:",
    [
        r"$0.05\text{ mm}$",
        r"$0.02\text{ mm}$",
        r"$0.01\text{ mm}$",
        r"$0.1\text{ mm}$"
    ],
    0,
    r"$\text{LC} = 1\text{ MSD} - 1\text{ VSD} = 1\text{ mm} - \frac{19}{20}\text{ mm} = \frac{1}{20}\text{ mm} = 0.05\text{ mm}$ (or $0.005\text{ cm}$)."
)

# Q223
add_q(
    sub5,
    r"A screw gauge has a pitch of $0.5\text{ mm}$ and $50$ divisions on its circular scale. The least count of the screw gauge is:",
    [
        r"$0.01\text{ mm}$",
        r"$0.001\text{ mm}$",
        r"$0.02\text{ mm}$",
        r"$0.05\text{ mm}$"
    ],
    0,
    r"$\text{LC} = \frac{\text{Pitch}}{\text{Number of circular divisions}} = \frac{0.5\text{ mm}}{50} = 0.01\text{ mm}$ (or $10\,\mu\text{m}$)."
)

# Q224
add_q(
    sub5,
    r"A screw gauge has a pitch of $1.0\text{ mm}$ and $100$ divisions on its circular scale. Its least count is:",
    [
        r"$0.01\text{ mm}$",
        r"$0.1\text{ mm}$",
        r"$0.001\text{ mm}$",
        r"$0.05\text{ mm}$"
    ],
    0,
    r"$\text{LC} = \frac{1.0\text{ mm}}{100} = 0.01\text{ mm}$."
)

# Q225
add_q(
    sub5,
    r"When the two jaws of a vernier callipers are in contact, the zero of the vernier scale lies to the right of the zero of the main scale and the 4th vernier division coincides with a main scale division. If $1\text{ MSD} = 1\text{ mm}$ and $\text{LC} = 0.1\text{ mm}$, the zero error is:",
    [
        r"$+0.4\text{ mm}$",
        r"$-0.4\text{ mm}$",
        r"$+0.04\text{ mm}$",
        r"$-0.04\text{ mm}$"
    ],
    0,
    r"When the vernier zero lies to the right of main scale zero, the zero error is positive: $\text{Zero Error} = + (4 \times \text{LC}) = + (4 \times 0.1\text{ mm}) = +0.4\text{ mm}$."
)

# Q226
add_q(
    sub5,
    r"When the jaws of a vernier callipers are closed, the zero of the vernier scale lies to the left of the zero mark of the main scale, and the 6th vernier division coincides with a main scale mark. There are 10 divisions on the vernier scale corresponding to $9\text{ mm}$. The zero error is:",
    [
        r"$-0.4\text{ mm}$",
        r"$+0.4\text{ mm}$",
        r"$-0.6\text{ mm}$",
        r"$+0.6\text{ mm}$"
    ],
    0,
    r"Here $\text{LC} = 0.1\text{ mm}$. When vernier zero lies to the left of main scale zero, the error is negative: $\text{Zero error} = - (10 - 6) \times \text{LC} = - 4 \times 0.1\text{ mm} = -0.4\text{ mm}$."
)

# Q227
add_q(
    sub5,
    r"In a vernier callipers with $\text{LC} = 0.1\text{ mm}$ and a zero error of $+0.2\text{ mm}$, the main scale reading for the diameter of a cylinder is $3.2\text{ cm}$ and the 5th vernier division coincides with a main scale division. The corrected diameter is:",
    [
        r"$3.23\text{ cm}$",
        r"$3.27\text{ cm}$",
        r"$3.25\text{ cm}$",
        r"$3.18\text{ cm}$"
    ],
    0,
    r"Observed reading $= \text{MSR} + (\text{VSR} \times \text{LC}) = 3.2\text{ cm} + (5 \times 0.01\text{ cm}) = 3.25\text{ cm}$. Corrected reading $= \text{Observed} - \text{Zero Error} = 3.25\text{ cm} - (+0.02\text{ cm}) = 3.23\text{ cm}$."
)

# Q228
add_q(
    sub5,
    r"A screw gauge with a least count of $0.01\text{ mm}$ has a negative zero error of $-0.03\text{ mm}$. When measuring the diameter of a wire, main scale reading is $2\text{ mm}$ and circular scale reading is $45$. The true diameter of the wire is:",
    [
        r"$2.48\text{ mm}$",
        r"$2.42\text{ mm}$",
        r"$2.45\text{ mm}$",
        r"$2.51\text{ mm}$"
    ],
    0,
    r"Observed reading $= 2\text{ mm} + (45 \times 0.01\text{ mm}) = 2.45\text{ mm}$. True reading $= \text{Observed} - \text{Zero Error} = 2.45\text{ mm} - (-0.03\text{ mm}) = 2.45 + 0.03 = 2.48\text{ mm}$."
)

# Q229
add_q(
    sub5,
    r"Backlash error in a screw gauge is caused by:",
    [
        r"Wear and tear or looseness of the screw threads in the nut",
        r"Unequal markings on the circular scale",
        r"Thermal expansion of the thimble",
        r"Irregular diameter of the spindle"
    ],
    0,
    r"Backlash error is due to mechanical play or loose fitting between the screw and the internal threads of the nut caused by wear and tear. It is avoided by advancing the screw in one direction only."
)

# Q230
add_q(
    sub5,
    r"The pitch of a spherometer is $1\text{ mm}$ and its circular scale has $100$ divisions. The least count of the spherometer is:",
    [
        r"$0.01\text{ mm}$",
        r"$0.001\text{ mm}$",
        r"$0.1\text{ mm}$",
        r"$0.05\text{ mm}$"
    ],
    0,
    r"$\text{LC} = \frac{\text{Pitch}}{\text{Number of circular divisions}} = \frac{1\text{ mm}}{100} = 0.01\text{ mm}$."
)

# Q231
add_q(
    sub5,
    r"In a spherometer, the radius of curvature $R$ of a spherical surface is given by $R = \frac{l^2}{6h} + \frac{h}{2}$, where $l$ is:",
    [
        r"The average distance between the three outer legs of the spherometer",
        r"The pitch of the spherometer",
        r"The height of the central leg",
        r"The radius of the circular disc"
    ],
    0,
    r"In the spherometer formula, $l$ is the mean distance between any two of the three fixed outer legs, and $h$ is the sagitta (elevation or depression of the central screw tip)."
)

# Q232
add_q(
    sub5,
    r"In a vernier callipers, $n$ divisions of the vernier scale coincide with $(n - 1)$ divisions of the main scale. If the value of $1\text{ MSD}$ is $a$ units, the least count of the callipers is:",
    [
        r"$\frac{a}{n}$",
        r"$\frac{a}{n - 1}$",
        r"$\frac{n - 1}{n} a$",
        r"$\frac{n}{n - 1} a$"
    ],
    0,
    r"$n\text{ VSD} = (n - 1)\text{ MSD} \implies 1\text{ VSD} = \frac{n - 1}{n} a$. Therefore $\text{LC} = 1\text{ MSD} - 1\text{ VSD} = a - \frac{n - 1}{n} a = \frac{a}{n}$."
)

# Q233
add_q(
    sub5,
    r"In a specially designed vernier callipers, $10$ divisions of the vernier scale coincide with $11$ divisions of the main scale, where $1\text{ MSD} = 1\text{ mm}$. The least count is:",
    [
        r"$0.1\text{ mm}$",
        r"$0.2\text{ mm}$",
        r"$0.05\text{ mm}$",
        r"$0.01\text{ mm}$"
    ],
    0,
    r"$\text{LC} = |1\text{ MSD} - 1\text{ VSD}| = \left|1 - \frac{11}{10}\right|\text{ mm} = 0.1\text{ mm}$."
)

# Q234
add_q(
    sub5,
    r"When the circular scale of a screw gauge is rotated through two complete revolutions, the spindle moves by $1\text{ mm}$. The circular scale has $50$ divisions. The least count is:",
    [
        r"$0.01\text{ mm}$",
        r"$0.02\text{ mm}$",
        r"$0.005\text{ mm}$",
        r"$0.05\text{ mm}$"
    ],
    0,
    r"Pitch $= \frac{\text{Distance moved}}{\text{Number of rotations}} = \frac{1\text{ mm}}{2} = 0.5\text{ mm}$. $\text{LC} = \frac{\text{Pitch}}{\text{Number of divisions}} = \frac{0.5\text{ mm}}{50} = 0.01\text{ mm}$."
)

# Q235
add_q(
    sub5,
    r"A student measures the thickness of a wire using a screw gauge. If the least count of the screw gauge is $0.001\text{ cm}$, which of the following readings is properly recorded?",
    [
        r"$0.053\text{ cm}$",
        r"$0.05\text{ cm}$",
        r"$0.0530\text{ cm}$",
        r"$0.05300\text{ cm}$"
    ],
    0,
    r"The reading must be recorded to the same number of decimal places as the least count ($0.001\text{ cm}$, which has 3 decimal places). Hence $0.053\text{ cm}$ is the correct format."
)

# Q236
add_q(
    sub5,
    r"A traveling microscope has a vernier scale with $50$ divisions which coincide with $49$ divisions of the main scale. If each main scale division is $0.5\text{ mm}$, the least count is:",
    [
        r"$0.01\text{ mm}$",
        r"$0.02\text{ mm}$",
        r"$0.001\text{ mm}$",
        r"$0.005\text{ mm}$"
    ],
    0,
    r"$\text{LC} = \frac{1\text{ MSD}}{N} = \frac{0.5\text{ mm}}{50} = 0.01\text{ mm}$ (or $0.001\text{ cm}$)."
)

# Q237
add_q(
    sub5,
    r"The accuracy of a measurement refers to:",
    [
        r"How close the measured value is to the true value",
        r"The limit or resolution of the measuring instrument",
        r"The number of significant figures in the measurement",
        r"The smallest division on the main scale"
    ],
    0,
    r"Accuracy is the degree of agreement between the measured value and the true/standard value. Precision is the degree of resolution or reproducibility of the measurement."
)

# Q238
add_q(
    sub5,
    r"Which of the following statements about precision and accuracy is correct?",
    [
        r"A measurement can be highly precise but inaccurate due to systematic zero error",
        r"A measurement that is precise is always accurate",
        r"A measurement that is accurate must always be highly precise",
        r"Precision depends solely on the skill of the experimenter"
    ],
    0,
    r"Precision is determined by the least count of the instrument and consistency of repeated readings, while a persistent zero error can shift all readings away from the true value, resulting in high precision with poor accuracy."
)

# Q239
add_q(
    sub5,
    r"When measuring the diameter of a sphere with a vernier callipers ($1\text{ MSD} = 1\text{ mm}$, $10\text{ VSD} = 9\text{ MSD}$), the main scale reads $2.4\text{ cm}$ and the 6th division of the vernier scale coincides with a main scale mark. The diameter is:",
    [
        r"$2.46\text{ cm}$",
        r"$2.406\text{ cm}$",
        r"$2.56\text{ cm}$",
        r"$2.46\text{ mm}$"
    ],
    0,
    r"$\text{LC} = 0.1\text{ mm} = 0.01\text{ cm}$. Reading $= \text{MSR} + (\text{VSR} \times \text{LC}) = 2.4\text{ cm} + (6 \times 0.01\text{ cm}) = 2.46\text{ cm}$."
)

# Q240
add_q(
    sub5,
    r"A screw gauge has a pitch of $0.5\text{ mm}$ and $100$ divisions on the circular scale. The diameter of a thin sheet is measured. The pitch scale reads $1\text{ mm}$ and circular scale reads $32$. If there is no zero error, the thickness is:",
    [
        r"$1.16\text{ mm}$",
        r"$1.32\text{ mm}$",
        r"$1.032\text{ mm}$",
        r"$1.64\text{ mm}$"
    ],
    0,
    r"$\text{LC} = \frac{0.5\text{ mm}}{100} = 0.005\text{ mm}$. Reading $= 1\text{ mm} + (32 \times 0.005\text{ mm}) = 1\text{ mm} + 0.16\text{ mm} = 1.16\text{ mm}$."
)

# Q241
add_q(
    sub5,
    r"If the zero mark of the circular scale of a screw gauge lies 3 divisions BELOW the reference line when the spindle and anvil touch, the zero error is:",
    [
        r"Positive",
        r"Negative",
        r"Zero",
        r"Infinite"
    ],
    0,
    r"When the zero mark has not reached the reference line (lies below it), the reading already registers a positive value before measurement begins; hence the zero error is positive."
)

# Q242
add_q(
    sub5,
    r"If the zero mark of the circular scale lies 4 divisions ABOVE the reference line when jaws are closed, the zero error is:",
    [
        r"Negative",
        r"Positive",
        r"Zero",
        r"Indeterminate"
    ],
    0,
    r"When the zero mark has moved past the reference line (lies above it), the instrument under-reads; hence the zero error is negative."
)

# Q243
add_q(
    sub5,
    r"To measure the internal diameter of a test tube, the appropriate instrument is:",
    [
        r"Vernier callipers using internal jaws",
        r"Screw gauge",
        r"Spherometer",
        r"Metre scale"
    ],
    0,
    r"Vernier callipers are equipped with a pair of upper (internal) jaws specifically designed for measuring internal diameters of tubes and cavities."
)

# Q244
add_q(
    sub5,
    r"The depth of a beaker is measured using:",
    [
        r"The metallic strip (depth probe) attached to the tail of a vernier callipers",
        r"A spherometer",
        r"A screw gauge",
        r"External jaws of vernier callipers"
    ],
    0,
    r"The thin metallic strip at the rear of a vernier callipers slides out as the jaws open, allowing precise measurement of the depth of hollow cylinders or beakers."
)

# Q245
add_q(
    sub5,
    r"A vernier scale has $50$ divisions coinciding with $49\text{ mm}$ of the main scale. If $1\text{ MSD} = 1\text{ mm}$, the least count in meters is:",
    [
        r"$2 \times 10^{-5}\text{ m}$",
        r"$2 \times 10^{-4}\text{ m}$",
        r"$10^{-4}\text{ m}$",
        r"$5 \times 10^{-5}\text{ m}$"
    ],
    0,
    r"$\text{LC} = \frac{1\text{ mm}}{50} = 0.02\text{ mm} = 0.02 \times 10^{-3}\text{ m} = 2 \times 10^{-5}\text{ m}$."
)

# Q246
add_q(
    sub5,
    r"In a screw gauge, $1$ complete rotation advances the spindle by $0.5\text{ mm}$. If the circular scale contains $200$ divisions, the least count is:",
    [
        r"$2.5\,\mu\text{m}$",
        r"$5\,\mu\text{m}$",
        r"$1\,\mu\text{m}$",
        r"$10\,\mu\text{m}$"
    ],
    0,
    r"$\text{LC} = \frac{0.5\text{ mm}}{200} = \frac{500\,\mu\text{m}}{200} = 2.5\,\mu\text{m}$ ($0.0025\text{ mm}$)."
)

# Q247
add_q(
    sub5,
    r"A spherometer has three legs forming an equilateral triangle of side $4.0\text{ cm}$. When placed on a flat glass plate, reading is $0.00\text{ mm}$. On a convex surface, reading is $2.00\text{ mm}$. The radius of curvature of the convex surface is:",
    [
        r"$13.43\text{ cm}$",
        r"$15.25\text{ cm}$",
        r"$10.00\text{ cm}$",
        r"$8.66\text{ cm}$"
    ],
    0,
    r"$R = \frac{l^2}{6h} + \frac{h}{2}$. Here $l = 4.0\text{ cm}$, $h = 2.00\text{ mm} = 0.20\text{ cm}$. $R = \frac{(4.0)^2}{6(0.20)} + \frac{0.20}{2} = \frac{16}{1.20} + 0.10 = 13.33 + 0.10 = 13.43\text{ cm}$."
)

# Q248
add_q(
    sub5,
    r"Ratchet arrangement in a micrometer screw gauge is provided to:",
    [
        r"Prevent over-tightening and ensure uniform contact pressure",
        r"Increase the pitch of the screw",
        r"Lock the spindle in place",
        r"Eliminate zero error"
    ],
    0,
    r"The ratchet mechanism slips and clicks once optimal pressure is reached, ensuring a uniform and non-deforming contact pressure on the measured object."
)

# Q249
add_q(
    sub5,
    r"Which instrument among the following gives the most precise measurement of the diameter of a thin wire?",
    [
        r"Screw gauge with $\text{LC} = 0.001\text{ mm}$",
        r"Vernier callipers with $\text{LC} = 0.01\text{ mm}$",
        r"Travelling microscope with $\text{LC} = 0.01\text{ mm}$",
        r"Metre scale with $\text{LC} = 1\text{ mm}$"
    ],
    0,
    r"The instrument with the smallest least count provides the greatest precision. A screw gauge with $\text{LC} = 0.001\text{ mm}$ is the most precise."
)

# Q250
add_q(
    sub5,
    r"In a vernier callipers, $1\text{ MSD} = 1\text{ mm}$. If $10$ vernier divisions coincide with $8\text{ MSD}$, the least count is:",
    [
        r"$0.2\text{ mm}$",
        r"$0.1\text{ mm}$",
        r"$0.08\text{ mm}$",
        r"$0.02\text{ mm}$"
    ],
    0,
    r"$\text{LC} = 1\text{ MSD} - 1\text{ VSD} = 1\text{ mm} - \frac{8}{10}\text{ mm} = 0.2\text{ mm}$."
)

# Q251
add_q(
    sub5,
    r"The main scale of a vernier callipers reads in millimeters. $20$ vernier scale divisions coincide with $16$ main scale divisions. The least count is:",
    [
        r"$0.2\text{ mm}$",
        r"$0.1\text{ mm}$",
        r"$0.05\text{ mm}$",
        r"$0.02\text{ mm}$"
    ],
    0,
    r"$\text{LC} = 1\text{ MSD} - \frac{16}{20}\text{ MSD} = 1\text{ mm} - 0.8\text{ mm} = 0.2\text{ mm}$."
)

# Q252
add_q(
    sub5,
    r"A screw gauge has $50$ divisions on its circular scale and advances $1\text{ mm}$ in $2$ rotations. The least count is:",
    [
        r"$0.01\text{ mm}$",
        r"$0.02\text{ mm}$",
        r"$0.05\text{ mm}$",
        r"$0.001\text{ mm}$"
    ],
    0,
    r"Pitch $= \frac{1\text{ mm}}{2} = 0.5\text{ mm}$. $\text{LC} = \frac{0.5\text{ mm}}{50} = 0.01\text{ mm}$."
)

# Q253
add_q(
    sub5,
    r"A vernier callipers with $\text{LC} = 0.01\text{ cm}$ has a zero error of $-0.03\text{ cm}$. The measured reading of a sphere is $4.52\text{ cm}$. The true diameter is:",
    [
        r"$4.55\text{ cm}$",
        r"$4.49\text{ cm}$",
        r"$4.52\text{ cm}$",
        r"$4.58\text{ cm}$"
    ],
    0,
    r"$\text{True Reading} = \text{Observed} - \text{Zero Error} = 4.52 - (-0.03) = 4.52 + 0.03 = 4.55\text{ cm}$."
)

# Q254
add_q(
    sub5,
    r"The circular scale of a micrometer has $100$ divisions and pitch $0.5\text{ mm}$. When used to measure the thickness of a plate, main scale reading is $2.5\text{ mm}$ and circular scale reading is $20$. The measured thickness is:",
    [
        r"$2.60\text{ mm}$",
        r"$2.70\text{ mm}$",
        r"$2.52\text{ mm}$",
        r"$2.55\text{ mm}$"
    ],
    0,
    r"$\text{LC} = \frac{0.5\text{ mm}}{100} = 0.005\text{ mm}$. Reading $= 2.5\text{ mm} + (20 \times 0.005\text{ mm}) = 2.5 + 0.10 = 2.60\text{ mm}$."
)

# Q255
add_q(
    sub5,
    r"When measuring the refractive index of a glass slab using a traveling microscope, the vertical scale is read. The least count of the vertical scale is typically:",
    [
        r"$0.01\text{ mm}$",
        r"$1.0\text{ mm}$",
        r"$0.1\text{ cm}$",
        r"$0.0001\text{ mm}$"
    ],
    0,
    r"A standard traveling microscope employs a main scale with $0.5\text{ mm}$ divisions and a $50$-division vernier, providing a least count of $\frac{0.5\text{ mm}}{50} = 0.01\text{ mm}$ ($0.001\text{ cm}$)."
)

# Q256
add_q(
    sub5,
    r"Which of the following causes positive zero error in a screw gauge?",
    [
        r"The zero mark of the circular scale remains below the baseline when the spindle contacts the anvil",
        r"The zero mark of the circular scale moves above the baseline",
        r"The pitch is larger than specified",
        r"Backlash play in the thimble"
    ],
    0,
    r"If the zero of the circular scale has not yet crossed the reference baseline (lies below it), it gives an initial positive reading, which represents a positive zero error."
)

# Q257
add_q(
    sub5,
    r"A student measures the diameter of a wire with a screw gauge having least count $0.001\text{ cm}$. Four readings are $0.052\text{ cm}$, $0.053\text{ cm}$, $0.053\text{ cm}$, and $0.054\text{ cm}$. The mean diameter is:",
    [
        r"$0.053\text{ cm}$",
        r"$0.0530\text{ cm}$",
        r"$0.05\text{ cm}$",
        r"$0.0528\text{ cm}$"
    ],
    0,
    r"Mean $= \frac{0.052 + 0.053 + 0.053 + 0.054}{4} = \frac{0.212}{4} = 0.053\text{ cm}$."
)

# Q258
add_q(
    sub5,
    r"A vernier callipers has $1\text{ mm}$ main scale divisions. $50$ vernier divisions equal $49\text{ MSD}$. If the zero error is $+0.04\text{ mm}$, and the observed reading for a cylinder length is $5.32\text{ cm}$, the true length is:",
    [
        r"$5.316\text{ cm}$",
        r"$5.324\text{ cm}$",
        r"$5.360\text{ cm}$",
        r"$5.280\text{ cm}$"
    ],
    0,
    r"$\text{Zero Error} = +0.04\text{ mm} = +0.004\text{ cm}$. $\text{True length} = 5.32\text{ cm} - (+0.004\text{ cm}) = 5.316\text{ cm}$."
)

# Q259
add_q(
    sub5,
    r"In a screw gauge, if the circular scale is rotated by $180^\circ$, the spindle advances by $0.25\text{ mm}$. The pitch of the screw gauge is:",
    [
        r"$0.50\text{ mm}$",
        r"$0.25\text{ mm}$",
        r"$1.00\text{ mm}$",
        r"$0.125\text{ mm}$"
    ],
    0,
    r"A complete rotation is $360^\circ$. If $180^\circ$ corresponds to $0.25\text{ mm}$, one full rotation ($360^\circ$) advances the spindle by $2 \times 0.25\text{ mm} = 0.50\text{ mm}$."
)

# Q260
add_q(
    sub5,
    r"If the least count of an instrument is decreased, the measurement becomes:",
    [
        r"More precise",
        r"Less precise",
        r"Less accurate",
        r"Independent of precision"
    ],
    0,
    r"Least count defines the smallest measurable unit. A smaller least count provides finer resolution, which increases the precision of the measurement."
)

# Q261
add_q(
    sub5,
    r"A micrometer screw gauge has $100$ divisions on its thimble and a pitch of $1\text{ mm}$. What is the smallest length that can be measured directly?",
    [
        r"$0.01\text{ mm}$",
        r"$0.1\text{ mm}$",
        r"$0.001\text{ mm}$",
        r"$0.005\text{ mm}$"
    ],
    0,
    r"The smallest directly measurable length is the least count: $\text{LC} = \frac{1\text{ mm}}{100} = 0.01\text{ mm}$."
)

# Q262
add_q(
    sub5,
    r"A vernier callipers has $25$ divisions on the vernier scale which coincide with $24$ divisions on the main scale ($1\text{ MSD} = 0.5\text{ mm}$). The least count is:",
    [
        r"$0.02\text{ mm}$",
        r"$0.01\text{ mm}$",
        r"$0.05\text{ mm}$",
        r"$0.04\text{ mm}$"
    ],
    0,
    r"$\text{LC} = \frac{1\text{ MSD}}{N} = \frac{0.5\text{ mm}}{25} = 0.02\text{ mm}$."
)

# Q263
add_q(
    sub5,
    r"When measuring a thickness with a screw gauge ($\text{LC} = 0.01\text{ mm}$), the main scale reading is $3\text{ mm}$ and circular scale reading is $67$. The thickness is:",
    [
        r"$3.67\text{ mm}$",
        r"$3.067\text{ mm}$",
        r"$3.67\text{ cm}$",
        r"$3.34\text{ mm}$"
    ],
    0,
    r"Reading $= 3\text{ mm} + (67 \times 0.01\text{ mm}) = 3 + 0.67 = 3.67\text{ mm}$."
)

# Q264
add_q(
    sub5,
    r"A student notes the following readings for the length of a rod using a metre scale: $10.2\text{ cm}$, $10.2\text{ cm}$, $10.3\text{ cm}$, $10.1\text{ cm}$. The true length is $10.5\text{ cm}$. The readings are:",
    [
        r"Precise but not accurate",
        r"Accurate but not precise",
        r"Both accurate and precise",
        r"Neither accurate nor precise"
    ],
    0,
    r"The measurements are close to each other (around $10.2\text{ cm}$), indicating high precision. However, they are systematically far from the true value of $10.5\text{ cm}$, so they lack accuracy."
)

# Q265
add_q(
    sub5,
    r"In a vernier callipers, each $1\text{ cm}$ on the main scale is divided into $10$ parts. If $10$ vernier scale divisions coincide with $9$ main scale divisions, the least count is:",
    [
        r"$0.01\text{ cm}$",
        r"$0.1\text{ cm}$",
        r"$0.001\text{ cm}$",
        r"$0.05\text{ cm}$"
    ],
    0,
    r"$1\text{ MSD} = \frac{1\text{ cm}}{10} = 0.1\text{ cm}$. $\text{LC} = \frac{1\text{ MSD}}{10} = \frac{0.1\text{ cm}}{10} = 0.01\text{ cm}$."
)

# Q266
add_q(
    sub5,
    r"The pitch of a screw gauge is $0.5\text{ mm}$. Its thimble has $50$ divisions. If the wire diameter measured has $\text{MSR} = 1.5\text{ mm}$ and $\text{CSR} = 28$, with a zero error of $+0.02\text{ mm}$, the corrected diameter is:",
    [
        r"$1.76\text{ mm}$",
        r"$1.80\text{ mm}$",
        r"$1.78\text{ mm}$",
        r"$1.74\text{ mm}$"
    ],
    0,
    r"$\text{LC} = \frac{0.5\text{ mm}}{50} = 0.01\text{ mm}$. Observed reading $= 1.5\text{ mm} + (28 \times 0.01) = 1.5 + 0.28 = 1.78\text{ mm}$. Corrected reading $= 1.78 - (+0.02) = 1.76\text{ mm}$."
)

# Q267
add_q(
    sub5,
    r"The main scale division of a spherometer is $0.5\text{ mm}$. If there are $50$ divisions on its circular dial, what is its least count?",
    [
        r"$0.01\text{ mm}$",
        r"$0.005\text{ mm}$",
        r"$0.02\text{ mm}$",
        r"$0.1\text{ mm}$"
    ],
    0,
    r"$\text{LC} = \frac{\text{Pitch}}{\text{Number of divisions}} = \frac{0.5\text{ mm}}{50} = 0.01\text{ mm}$."
)

# Q268
add_q(
    sub5,
    r"When measuring the thickness of a glass strip with a micrometer, the main scale reads $0.5\text{ mm}$ and circular scale reads $34$. Pitch is $0.5\text{ mm}$ and circular scale has $50$ divisions. The thickness is:",
    [
        r"$0.84\text{ mm}$",
        r"$0.67\text{ mm}$",
        r"$0.34\text{ mm}$",
        r"$1.18\text{ mm}$"
    ],
    0,
    r"$\text{LC} = \frac{0.5\text{ mm}}{50} = 0.01\text{ mm}$. Thickness $= 0.5\text{ mm} + (34 \times 0.01\text{ mm}) = 0.5 + 0.34 = 0.84\text{ mm}$."
)

# Q269
add_q(
    sub5,
    r"In a vernier callipers, if the zero mark of the vernier scale is situated exactly opposite the zero mark of the main scale when jaws are closed, then:",
    [
        r"Zero error is zero",
        r"Zero error is positive",
        r"Zero error is negative",
        r"The least count is zero"
    ],
    0,
    r"When the zero marks of both scales coincide perfectly upon closing the jaws, the instrument has zero zero error."
)

# Q270
add_q(
    sub5,
    r"A screw gauge has a pitch of $0.5\text{ mm}$. To achieve a least count of $1\,\mu\text{m}$, the circular scale must have:",
    [
        r"$500$ divisions",
        r"$50$ divisions",
        r"$100$ divisions",
        r"$250$ divisions"
    ],
    0,
    r"$1\,\mu\text{m} = 0.001\text{ mm}$. Number of divisions $N = \frac{\text{Pitch}}{\text{LC}} = \frac{0.5\text{ mm}}{0.001\text{ mm}} = 500$ divisions."
)

# Q271
add_q(
    sub5,
    r"If $N$ vernier scale divisions coincide with $(N - 2)$ main scale divisions ($1\text{ MSD} = 1\text{ mm}$), the least count is:",
    [
        r"$\frac{2}{N}\text{ mm}$",
        r"$\frac{1}{N}\text{ mm}$",
        r"$\frac{N - 2}{N}\text{ mm}$",
        r"$\frac{N}{2}\text{ mm}$"
    ],
    0,
    r"$\text{LC} = 1\text{ MSD} - 1\text{ VSD} = 1 - \frac{N - 2}{N} = \frac{N - (N - 2)}{N} = \frac{2}{N}\text{ mm}$."
)

# Q272
add_q(
    sub5,
    r"A vernier callipers has $10$ divisions on the vernier scale coinciding with $9$ divisions of the main scale. $1\text{ MSD} = 0.5\text{ mm}$. The least count is:",
    [
        r"$0.05\text{ mm}$",
        r"$0.01\text{ mm}$",
        r"$0.1\text{ mm}$",
        r"$0.02\text{ mm}$"
    ],
    0,
    r"$\text{LC} = \frac{1\text{ MSD}}{10} = \frac{0.5\text{ mm}}{10} = 0.05\text{ mm}$."
)

# Q273
add_q(
    sub5,
    r"The circular scale of a screw gauge has $50$ divisions and pitch $1\text{ mm}$. If the circular scale reading is $40$ and main scale reading is $4\text{ mm}$ with zero error $-0.04\text{ mm}$, the true reading is:",
    [
        r"$4.84\text{ mm}$",
        r"$4.76\text{ mm}$",
        r"$4.80\text{ mm}$",
        r"$4.44\text{ mm}$"
    ],
    0,
    r"$\text{LC} = \frac{1\text{ mm}}{50} = 0.02\text{ mm}$. Observed reading $= 4\text{ mm} + (40 \times 0.02\text{ mm}) = 4 + 0.80 = 4.80\text{ mm}$. True reading $= 4.80 - (-0.04) = 4.84\text{ mm}$."
)

# Q274
add_q(
    sub5,
    r"Which of the following operations helps to eliminate backlash error when using a micrometer screw gauge?",
    [
        r"Always turning the screw in the same direction when making a setting",
        r"Lubricating the screw threads with oil",
        r"Applying maximum force using the ratchet",
        r"Taking the mean of clockwise and counter-clockwise readings"
    ],
    0,
    r"Backlash error is avoided by ensuring that the screw is always advanced in one and the same direction when approaching the measurement point."
)

# Q275
add_q(
    sub5,
    r"A vernier callipers with least count $0.01\text{ cm}$ is used to measure the side of a square. The main scale reads $10.0\text{ cm}$ and the 3rd vernier division coincides with a main scale line. The area of the square is:",
    [
        r"$100.6\text{ cm}^2$",
        r"$100.0\text{ cm}^2$",
        r"$100.6009\text{ cm}^2$",
        r"$101.2\text{ cm}^2$"
    ],
    0,
    r"Measured side $= 10.0 + (3 \times 0.01) = 10.03\text{ cm}$ (4 significant figures). Area $= (10.03)^2 = 100.6009\text{ cm}^2$. Rounding to 4 significant figures gives $100.6\text{ cm}^2$."
)

print(f"Total questions in PAM part 3: {len(questions)}")
with open("scripts/pam/pam_batch3.json", "w", encoding="utf-8") as f:
    json.dump(questions, f, indent=2)
print("Saved scripts/pam/pam_batch3.json")
