import json
import os

def create_ydse_questions():
    questions = []
    
    # 1
    questions.append({
        "question": "In Young's double slit experiment, the fringe width is found to be $0.4\\text{ mm}$. If the entire apparatus is immersed in water of refractive index $4/3$ without changing any geometric parameters, the new fringe width will be:",
        "options": ["$0.3\\text{ mm}$", "$0.53\\text{ mm}$", "$0.4\\text{ mm}$", "$0.1\\text{ mm}$"],
        "correctAnswer": 0,
        "explanation": "Fringe width in medium $\\beta' = \\frac{\\beta}{\\mu} = \\frac{0.4}{4/3} = 0.3\\text{ mm}$."
    })
    # 2
    questions.append({
        "question": "In a YDSE, two slits are separated by $0.15\\text{ mm}$ and light of wavelength $600\\text{ nm}$ is used. The screen is placed $1.0\\text{ m}$ away. The distance of the second dark fringe from the central maximum is:",
        "options": ["$4.0\\text{ mm}$", "$6.0\\text{ mm}$", "$3.0\\text{ mm}$", "$2.0\\text{ mm}$"],
        "correctAnswer": 1,
        "explanation": "Position of $n^{\\text{th}}$ dark fringe is $y_n = (2n - 1)\\frac{\\lambda D}{2d}$. For $n = 2$ (second dark fringe):\n$y_2 = \\frac{3\\lambda D}{2d} = \\frac{3 \\times 600 \\times 10^{-9} \\times 1.0}{2 \\times 0.15 \\times 10^{-3}} = 6.0\\text{ mm}$."
    })
    # 3
    questions.append({
        "question": "In Young's double slit experiment using monochromatic light of wavelength $\\lambda$, the path difference corresponding to any point having half the peak intensity is:",
        "options": ["$\\lambda/8$", "$\\lambda/2$", "$\\lambda/4$", "$\\lambda/3$"],
        "correctAnswer": 2,
        "explanation": "Intensity $I = I_0 \\cos^2(\\phi/2)$. When $I = I_0 / 2$, $\\cos^2(\\phi/2) = 1/2 \\implies \\phi/2 = \\pi/4 \\implies \\phi = \\pi/2$.\nPath difference $\\Delta x = \\frac{\\lambda}{2\\pi}\\phi = \\frac{\\lambda}{2\\pi}\\frac{\\pi}{2} = \\frac{\\lambda}{4}$."
    })
    # 4
    questions.append({
        "question": "In YDSE, the ratio of maximum to minimum intensity in the interference pattern is $49:9$. The ratio of the amplitudes of the two interfering waves is:",
        "options": ["$5:2$", "$7:3$", "$4:3$", "$2:1$"],
        "correctAnswer": 0,
        "explanation": "$\\frac{I_{\\max}}{I_{\\min}} = \\left(\\frac{A_1 + A_2}{A_1 - A_2}\\right)^2 = \\frac{49}{9} \\implies \\frac{A_1 + A_2}{A_1 - A_2} = \\frac{7}{3}$.\nBy componendo and dividendo: $\\frac{A_1}{A_2} = \\frac{7+3}{7-3} = \\frac{10}{4} = \\frac{5}{2}$."
    })
    # 5
    questions.append({
        "question": "A thin mica sheet of thickness $t = 1.2\\times 10^{-6}\\text{ m}$ and refractive index $\\mu = 1.5$ is introduced in the path of one of the interfering beams in a YDSE. The central fringe shifts to the position originally occupied by the $n^{\\text{th}}$ bright fringe. If $\\lambda = 600\\text{ nm}$, then $n$ is:",
        "options": ["$3$", "$1$", "$2$", "$4$"],
        "correctAnswer": 1,
        "explanation": "Shift $\\Delta y = \\frac{(\\mu - 1)t D}{d} = n \\beta = n \\frac{\\lambda D}{d} \\implies n = \\frac{(\\mu - 1)t}{\\lambda} = \\frac{(1.5 - 1) \\times 1.2 \\times 10^{-6}}{600 \\times 10^{-9}} = \\frac{0.6 \\times 10^{-6}}{0.6 \\times 10^{-6}} = 1$."
    })
    # 6
    questions.append({
        "question": "In a YDSE, if the width of one of the slits is increased such that its amplitude becomes twice that of the other slit ($A_1 = 2A_2$), the ratio $\\frac{I_{\\max}}{I_{\\min}}$ will be:",
        "options": ["$4$", "$9$", "$2$", "$16$"],
        "correctAnswer": 1,
        "explanation": "$\\frac{I_{\\max}}{I_{\\min}} = \\left(\\frac{A_1 + A_2}{A_1 - A_2}\\right)^2 = \\left(\\frac{2A_2 + A_2}{2A_2 - A_2}\\right)^2 = \\left(\\frac{3}{1}\\right)^2 = 9$."
    })
    # 7
    questions.append({
        "question": "In YDSE with light of wavelength $\\lambda = 500\\text{ nm}$, the slit separation is $d = 1\\text{ mm}$ and screen distance $D = 1\\text{ m}$. The intensity at a point $y = 0.25\\text{ mm}$ from the central maximum is (where $I_0$ is the maximum intensity):",
        "options": ["$I_0/2$", "$I_0$", "$I_0/4$", "$3I_0/4$"],
        "correctAnswer": 0,
        "explanation": "Path difference $\\Delta x = \\frac{yd}{D} = \\frac{0.25 \\times 10^{-3} \\times 10^{-3}}{1} = 2.5 \\times 10^{-7}\\text{ m} = 250\\text{ nm} = \\lambda/2$.\nPhase difference $\\phi = \\frac{2\\pi}{\\lambda}\\Delta x = \\pi$.\nWait, if $\\Delta x = \\lambda/2$, intensity is zero! Let's check: $y = 0.25\\text{ mm} \\implies \\Delta x = 2.5 \\times 10^{-7}\\text{ m} = 250\\text{ nm} = \\lambda/2 \\implies \\phi = \\pi \\implies I = 0$.\nIf $y = 0.125\\text{ mm}$, $\\Delta x = 125\\text{ nm} = \\lambda/4 \\implies \\phi = \\pi/2 \\implies I = I_0 \\cos^2(\\pi/4) = I_0/2$."
    })
    # fix 7 to match explanation properly
    questions[-1]["question"] = "In YDSE with light of wavelength $\\lambda = 500\\text{ nm}$, the slit separation is $d = 1\\text{ mm}$ and screen distance $D = 1\\text{ m}$. The intensity at a point $y = 0.125\\text{ mm}$ from the central maximum is (where $I_0$ is the maximum intensity):"
    questions[-1]["options"] = ["$I_0/2$", "$I_0$", "$I_0/4$", "$3I_0/4$"]
    questions[-1]["correctAnswer"] = 0
    questions[-1]["explanation"] = "Path difference $\\Delta x = \\frac{yd}{D} = \\frac{0.125 \\times 10^{-3} \\times 10^{-3}}{1} = 125\\text{ nm} = \\lambda/4$.\nPhase difference $\\phi = \\frac{2\\pi}{\\lambda}\\Delta x = \\frac{\\pi}{2}$.\nIntensity $I = I_0 \\cos^2(\\phi/2) = I_0 \\cos^2(\\pi/4) = \\frac{I_0}{2}$."

    # 8
    questions.append({
        "question": "In a YDSE, light containing two wavelengths $\\lambda_1 = 600\\text{ nm}$ and $\\lambda_2 = 480\\text{ nm}$ is used. The minimum distance from the central maximum where the bright fringes of both wavelengths coincide is (given $d = 1\\text{ mm}, D = 1\\text{ m}$):",
        "options": ["$1.2\\text{ mm}$", "$3.6\\text{ mm}$", "$2.4\\text{ mm}$", "$4.8\\text{ mm}$"],
        "correctAnswer": 2,
        "explanation": "At coincidence: $n_1 \\lambda_1 = n_2 \\lambda_2 \\implies \\frac{n_1}{n_2} = \\frac{480}{600} = \\frac{4}{5}$.\nSmallest integer values: $n_1 = 4, n_2 = 5$.\nDistance $y = \\frac{n_1 \\lambda_1 D}{d} = \\frac{4 \\times 600 \\times 10^{-9} \\times 1}{10^{-3}} = 2.4 \\times 10^{-3}\\text{ m} = 2.4\\text{ mm}$."
    })
    # 9
    questions.append({
        "question": "If the source slit in Young's experiment is illuminated with white light, the central fringe will be:",
        "options": ["Dark", "Red", "Blue", "White"],
        "correctAnswer": 3,
        "explanation": "For the central fringe, path difference is zero for all wavelengths. Hence, all colors interfere constructively at the center, producing a sharp white fringe."
    })
    # 10
    questions.append({
        "question": "In YDSE, when one slit is covered by a transparent plate of thickness $t_1$ and refractive index $\\mu_1$, and the other slit by a plate of thickness $t_2$ and index $\\mu_2$, the net shift of the central fringe is given by:",
        "options": ["$\\frac{D}{d}[(\\mu_1 - 1)t_1 - (\\mu_2 - 1)t_2]$", "$\\frac{D}{d}[(\\mu_1 - 1)t_1 + (\\mu_2 - 1)t_2]$", "$\\frac{d}{D}[(\\mu_1 - 1)t_1 - (\\mu_2 - 1)t_2]$", "$\\frac{D}{2d}(\\mu_1 t_1 - \\mu_2 t_2)$"],
        "correctAnswer": 0,
        "explanation": "Optical path difference introduced is $\\Delta x = (\\mu_1 - 1)t_1 - (\\mu_2 - 1)t_2$. The resulting fringe shift is $y = \\frac{D}{d}\\Delta x = \\frac{D}{d}[(\\mu_1 - 1)t_1 - (\\mu_2 - 1)t_2]$."
    })
    # 11
    questions.append({
        "question": "In YDSE, if the distance between the two slits is doubled and the distance between the slits and the screen is halved, the fringe width becomes:",
        "options": ["Four times", "One-fourth", "Doubled", "Unchanged"],
        "correctAnswer": 1,
        "explanation": "$\\beta = \\frac{\\lambda D}{d}$. If $D' = D/2$ and $d' = 2d$, then $\\beta' = \\frac{\\lambda (D/2)}{2d} = \\frac{\\beta}{4}$."
    })
    # 12
    questions.append({
        "question": "In YDSE, the angular fringe width $\\theta$ is related to wavelength $\\lambda$ and slit separation $d$ by:",
        "options": ["$\\theta = \\lambda d$", "$\\theta = \\frac{d}{\\lambda}$", "$\\theta = \\frac{\\lambda}{d}$", "$\\theta = \\frac{\\lambda D}{d}$"],
        "correctAnswer": 2,
        "explanation": "Angular fringe width is $\\theta = \\frac{\\beta}{D} = \\frac{\\lambda D / d}{D} = \\frac{\\lambda}{d}$, independent of $D$."
    })
    # 13
    questions.append({
        "question": "In a YDSE, 12 fringes are observed in a certain segment of the screen when light of wavelength $600\\text{ nm}$ is used. If the light is replaced by light of wavelength $400\\text{ nm}$, the number of fringes observed in the same segment is:",
        "options": ["$8$", "$16$", "$15$", "$18$"],
        "correctAnswer": 3,
        "explanation": "Length of segment $L = n_1 \\beta_1 = n_2 \\beta_2 \\implies n_1 \\lambda_1 = n_2 \\lambda_2$.\n$n_2 = n_1 \\frac{\\lambda_1}{\\lambda_2} = 12 \\times \\frac{600}{400} = 18$."
    })
    # 14
    questions.append({
        "question": "In YDSE, if the separation between the slits is $d = 0.2\\text{ mm}$ and screen distance $D = 1\\text{ m}$, what is the path difference at a point $y = 1\\text{ mm}$ from the central maximum?",
        "options": ["$200\\text{ nm}$", "$400\\text{ nm}$", "$100\\text{ nm}$", "$500\\text{ nm}$"],
        "correctAnswer": 0,
        "explanation": "Path difference $\\Delta x = \\frac{y d}{D} = \\frac{(10^{-3}\\text{ m})(0.2 \\times 10^{-3}\\text{ m})}{1\\text{ m}} = 2 \\times 10^{-7}\\text{ m} = 200\\text{ nm}$."
    })
    # 15
    questions.append({
        "question": "In YDSE, what happens to the interference fringes if monochromatic light is replaced by red light after using violet light?",
        "options": ["Fringe width decreases", "Fringe width increases", "Fringes disappear", "Fringe width remains unchanged"],
        "correctAnswer": 1,
        "explanation": "Since $\\lambda_{\\text{red}} > \\lambda_{\\text{violet}}$ and $\\beta = \\frac{\\lambda D}{d}$, the fringe width $\\beta$ increases."
    })
    # 16
    questions.append({
        "question": "In YDSE, the intensity at the central maximum is $I_0$. What is the ratio of intensity at a point where path difference is $\\lambda/6$ to that at $\\lambda/3$?",
        "options": ["$2:1$", "$4:1$", "$3:1$", "$9:1$"],
        "correctAnswer": 2,
        "explanation": "Phase diff $\\phi_1 = \\frac{2\\pi}{\\lambda}\\frac{\\lambda}{6} = \\frac{\\pi}{3} \\implies I_1 = I_0 \\cos^2(\\pi/6) = I_0 \\left(\\frac{\\sqrt{3}}{2}\\right)^2 = \\frac{3}{4}I_0$.\nPhase diff $\\phi_2 = \\frac{2\\pi}{\\lambda}\\frac{\\lambda}{3} = \\frac{2\\pi}{3} \\implies I_2 = I_0 \\cos^2(\\pi/3) = I_0 \\left(\\frac{1}{2}\\right)^2 = \\frac{1}{4}I_0$.\nRatio $I_1 / I_2 = 3 / 1$."
    })
    # 17
    questions.append({
        "question": "In Young's experiment, the distance between slits is $0.5\\text{ mm}$ and screen distance is $100\\text{ cm}$. A bright fringe is formed at $1.2\\text{ mm}$ from central maximum. If this corresponds to the third bright fringe, the wavelength of light used is:",
        "options": ["$500\\text{ nm}$", "$400\\text{ nm}$", "$600\\text{ nm}$", "$200\\text{ nm}$"],
        "correctAnswer": 3,
        "explanation": "$y_3 = 3 \\frac{\\lambda D}{d} = 1.2 \\times 10^{-3}\\text{ m}$.\n$\\lambda = \\frac{y_3 d}{3D} = \\frac{1.2 \\times 10^{-3} \\times 0.5 \\times 10^{-3}}{3 \\times 1.0} = 2.0 \\times 10^{-7}\\text{ m} = 200\\text{ nm}$."
    })
    # 18
    questions.append({
        "question": "In a YDSE setup, if the two slits are illuminated by two separate independent identical laser torches of the same wavelength, what will be observed on the screen?",
        "options": ["Uniform illumination with no interference fringes", "A very bright stationary interference pattern", "Interference fringes that shift very slowly", "A single central bright spot only"],
        "correctAnswer": 0,
        "explanation": "Two independent sources cannot be mutually coherent as their relative phase changes randomly and extremely rapidly (in $10^{-8}\\text{ s}$). Hence, no sustained interference is observed, only uniform illumination."
    })
    # 19
    questions.append({
        "question": "In YDSE, the maximum intensity is $I_{\\max}$. The angular separation between two successive points having intensity $I_{\\max}/2$ is:",
        "options": ["$\\frac{\\lambda}{4d}$", "$\\frac{\\lambda}{2d}$", "$\\frac{\\lambda}{d}$", "$\\frac{2\\lambda}{d}$"],
        "correctAnswer": 1,
        "explanation": "Intensity $I = I_{\\max}/2$ occurs when $\\Delta x = \\pm \\lambda/4, \\pm 3\\lambda/4, \\dots$\nThe path difference separation between two successive half-maxima is $\\Delta(\\Delta x) = \\frac{\\lambda}{2}$.\nSince $\\Delta x = d \\sin\\theta \\approx d \\theta$, the angular separation is $\\Delta\\theta = \\frac{\\lambda}{2d}$."
    })
    # 20
    questions.append({
        "question": "In YDSE, the source slit $S$ is placed symmetrically relative to slits $S_1$ and $S_2$. If the source slit is moved upward by a distance $s$, the central fringe on the screen moves:",
        "options": ["Upward by $\\frac{D}{d}s$", "Downward by $\\frac{D}{d}s$", "Downward by $\\frac{D}{d'}s$ where $d'$ is distance from source to slits", "Upward by $\\frac{d}{D}s$"],
        "correctAnswer": 2,
        "explanation": "Moving the source upward by $s$ at distance $d'$ introduces an extra path difference $\\frac{s d}{d'}$. To compensate, the central fringe must shift downward on the screen: $\\Delta y = \\frac{D}{d}\\left(\\frac{s d}{d'}\\right) = \\frac{D}{d'}s$ downward."
    })
    # 21
    questions.append({
        "question": "In YDSE, when a glass plate of thickness $t$ and refractive index $1.5$ is placed in the path of one beam, the central bright fringe shifts by a distance equal to 5 fringe widths. The thickness of the plate in terms of $\\lambda$ is:",
        "options": ["$5\\lambda$", "$10\\lambda$", "$2.5\\lambda$", "$15\\lambda$"],
        "correctAnswer": 1,
        "explanation": "Shift $\\Delta y = 5 \\beta = 5 \\frac{\\lambda D}{d}$.\nAlso $\\Delta y = \\frac{(\\mu - 1)t D}{d}$.\nEquating: $(\\mu - 1)t = 5\\lambda \\implies (1.5 - 1)t = 5\\lambda \\implies 0.5 t = 5\\lambda \\implies t = 10\\lambda$."
    })
    # 22
    questions.append({
        "question": "If the slit separation in YDSE is comparable to or smaller than the wavelength ($d < \\lambda$), then on the screen:",
        "options": ["Fringes are extremely narrow and closely spaced", "Diffraction dominates and no two interference fringes can fit on the screen", "Infinite number of bright fringes appear", "The pattern remains exactly unchanged"],
        "correctAnswer": 1,
        "explanation": "Since $\\sin\\theta = \\frac{n\\lambda}{d}$, if $d < \\lambda$, $\\sin\\theta_1 = \\lambda/d > 1$, which is impossible. Thus, even the first order maximum cannot appear, and no interference pattern fits."
    })
    # 23
    questions.append({
        "question": "In YDSE, the intensity of light coming from one slit is double that from the other ($I_1 = 2I_2$). If $I_{\\max}$ and $I_{\\min}$ are the maximum and minimum intensities, the fringe visibility $V = \\frac{I_{\\max} - I_{\\min}}{I_{\\max} + I_{\\min}}$ is:",
        "options": ["$2\\sqrt{2}/3$", "$\\sqrt{2}/3$", "$1/3$", "$2/3$"],
        "correctAnswer": 0,
        "explanation": "Fringe visibility $V = \\frac{2\\sqrt{I_1 I_2}}{I_1 + I_2} = \\frac{2\\sqrt{2I_2^2}}{2I_2 + I_2} = \\frac{2\\sqrt{2}I_2}{3I_2} = \\frac{2\\sqrt{2}}{3}$."
    })
    # 24
    questions.append({
        "question": "In a YDSE, the separation between the slits is $d$ and the distance of the screen is $D$. If the wavelength is $\\lambda$, the path difference at the $n^{\\text{th}}$ minima is:",
        "options": ["$n\\lambda$", "$\\left(n - \\frac{1}{2}\\right)\\lambda$", "$\\left(n + \\frac{1}{2}\\right)\\lambda$", "$\\frac{n\\lambda}{2}$"],
        "correctAnswer": 1,
        "explanation": "Minima (destructive interference) occurs when path difference $\\Delta x = (2n - 1)\\frac{\\lambda}{2} = \\left(n - \\frac{1}{2}\\right)\\lambda$ for $n = 1, 2, 3, \\dots$"
    })
    # 25
    questions.append({
        "question": "In YDSE, when light of $\\lambda = 500\\text{ nm}$ is used, the fringe width is $2\\text{ mm}$. If the distance between the screen and slits is increased by $25\\%$, the new fringe width will be:",
        "options": ["$1.5\\text{ mm}$", "$2.0\\text{ mm}$", "$2.5\\text{ mm}$", "$3.0\\text{ mm}$"],
        "correctAnswer": 2,
        "explanation": "$\\beta \\propto D$. If $D' = 1.25 D$, then $\\beta' = 1.25 \\times 2\\text{ mm} = 2.5\\text{ mm}$."
    })
    # 26
    questions.append({
        "question": "In a YDSE, if both slits are painted with a filter such that one slit transmits red light and the other transmits blue light, the observer will see:",
        "options": ["Fringes of purple color", "Sharp alternately red and blue fringes", "A central red fringe and outer blue fringes", "No interference fringes"],
        "correctAnswer": 3,
        "explanation": "Interference fringes require coherent sources of the same wavelength/frequency. Since red and blue have different frequencies, no sustained interference pattern is produced."
    })
    # 27
    questions.append({
        "question": "In YDSE, the intensity at a point where the path difference is $\\lambda/4$ is $k$. If the maximum intensity is $I_0$, then $I_0$ is equal to:",
        "options": ["$2k$", "$k$", "$4k$", "$k/2$"],
        "correctAnswer": 0,
        "explanation": "Path difference $\\Delta x = \\lambda/4 \\implies \\phi = \\frac{2\\pi}{\\lambda}\\frac{\\lambda}{4} = \\frac{\\pi}{2}$.\n$I = I_0 \\cos^2(\\phi/2) = I_0 \\cos^2(\\pi/4) = \\frac{I_0}{2} = k \\implies I_0 = 2k$."
    })
    # 28
    questions.append({
        "question": "In YDSE, what is the effect on the interference pattern if the monochromatic source is shifted closer to the slits?",
        "options": ["Fringe width increases", "Fringe width remains unchanged, but intensity increases", "Fringes become curved", "Fringe width decreases"],
        "correctAnswer": 1,
        "explanation": "Fringe width $\\beta = \\frac{\\lambda D}{d}$ depends only on $\\lambda, D,$ and $d$. It does not depend on the distance of source from the slits. However, bringing the source closer increases illumination (intensity) of the slits."
    })
    # 29
    questions.append({
        "question": "In YDSE with two identical slits, if the intensity of each slit is $I_1$, the intensity at the first minimum is:",
        "options": ["$2I_1$", "$4I_1$", "$0$", "$I_1$"],
        "correctAnswer": 2,
        "explanation": "At any minimum (destructive interference) with equal amplitude slits, $I_{\\min} = (\\sqrt{I_1} - \\sqrt{I_1})^2 = 0$."
    })
    # 30
    questions.append({
        "question": "In YDSE, the distance between the two slits is $d = 0.5\\text{ mm}$ and the wavelength used is $500\\text{ nm}$. The angular width of the central fringe in radians is:",
        "options": ["$10^{-4}\\text{ rad}$", "$2 \\times 10^{-3}\\text{ rad}$", "$5 \\times 10^{-4}\\text{ rad}$", "$10^{-3}\\text{ rad}$"],
        "correctAnswer": 3,
        "explanation": "Angular fringe width $\\theta = \\frac{\\lambda}{d} = \\frac{500 \\times 10^{-9}}{0.5 \\times 10^{-3}} = 10^{-3}\\text{ rad}$."
    })
    # 31
    questions.append({
        "question": "In YDSE, if the width of one slit is 4 times that of the other, what is the ratio of $I_{\\max}$ to $I_{\\min}$?",
        "options": ["$9:1$", "$4:1$", "$16:1$", "$25:9$"],
        "correctAnswer": 0,
        "explanation": "Slit width $w \\propto I \\implies \\frac{I_1}{I_2} = 4 \\implies \\frac{A_1}{A_2} = \\sqrt{4} = 2$.\n$\\frac{I_{\\max}}{I_{\\min}} = \\left(\\frac{A_1 + A_2}{A_1 - A_2}\\right)^2 = \\left(\\frac{2+1}{2-1}\\right)^2 = 9:1$."
    })
    # 32
    questions.append({
        "question": "In YDSE, two slits are illuminated by monochromatic light. If a thin transparent sheet of mica is placed over both slits with equal thickness $t$ and identical refractive index $\\mu$, the fringe pattern:",
        "options": ["Remains completely unchanged in position", "Shifts upward by $\\frac{(\\mu-1)t D}{d}$", "Shifts downward by $\\frac{(\\mu-1)t D}{d}$", "Disappears completely"],
        "correctAnswer": 0,
        "explanation": "Since both beams undergo the same additional optical path $(\\mu - 1)t$, the net additional path difference is zero, so the positions of all fringes remain completely unchanged."
    })
    # 33
    questions.append({
        "question": "In YDSE, if white light is used, which color fringe is nearest to the central white fringe?",
        "options": ["Red", "Violet", "Yellow", "Green"],
        "correctAnswer": 1,
        "explanation": "Fringe position $y = \\frac{\\lambda D}{d}$. Since violet light has the shortest wavelength in the visible spectrum, its first bright fringe forms closest to the central white maximum."
    })
    # 34
    questions.append({
        "question": "In YDSE, a beam of light of wavelength $600\\text{ nm}$ produces an interference pattern with fringe width $3\\text{ mm}$. If the wavelength is changed to $400\\text{ nm}$ and slit separation is halved, the new fringe width is:",
        "options": ["$3\\text{ mm}$", "$2\\text{ mm}$", "$4\\text{ mm}$", "$6\\text{ mm}$"],
        "correctAnswer": 2,
        "explanation": "$\\beta' = \\frac{\\lambda' D}{d'} = \\frac{(400/600)\\lambda D}{d/2} = \\frac{2}{3} \\times 2 \\times \\beta = \\frac{4}{3} \\times 3\\text{ mm} = 4\\text{ mm}$."
    })
    # 35
    questions.append({
        "question": "In YDSE, the locus of points of zero path difference on the screen when the two slits are point sources is:",
        "options": ["A straight line", "A circle", "A hyperbola", "An ellipse"],
        "correctAnswer": 0,
        "explanation": "For points on the flat screen equidistant from the two slit sources (perpendicular bisector plane), the locus is a straight line."
    })
    # 36
    questions.append({
        "question": "In YDSE, if the two slits are illuminated by a broad extended source instead of a narrow pinhole/slit:",
        "options": ["Fringes become brighter and sharper", "Fringes disappear and uniform illumination results", "Fringes double in width", "Only central fringe remains"],
        "correctAnswer": 1,
        "explanation": "A broad source can be regarded as many independent point sources. Each produces its own interference pattern shifted slightly relative to others, washing out the pattern into uniform illumination."
    })
    # 37
    questions.append({
        "question": "In a YDSE, the distance between the slits is $1\\text{ mm}$ and screen distance is $1\\text{ m}$. Light of wavelength $650\\text{ nm}$ is used. The distance between the third bright fringe and fifth dark fringe on the same side of the central maximum is:",
        "options": ["$0.65\\text{ mm}$", "$0.975\\text{ mm}$", "$1.30\\text{ mm}$", "$0.325\\text{ mm}$"],
        "correctAnswer": 1,
        "explanation": "Position of 3rd bright: $y_3 = 3\\beta$.\nPosition of 5th dark: $y_{5\\text{d}} = (5 - 0.5)\\beta = 4.5\\beta$.\nDistance $\\Delta y = (4.5 - 3)\\beta = 1.5 \\beta = 1.5 \\frac{\\lambda D}{d} = 1.5 \\times \\frac{650 \\times 10^{-9} \\times 1}{10^{-3}} = 0.975\\text{ mm}$."
    })
    # 38
    questions.append({
        "question": "In YDSE, the ratio of intensities at points where the path differences are $\\lambda/4$ and $\\lambda/3$ is:",
        "options": ["$3:2$", "$1:1$", "$2:1$", "$4:3$"],
        "correctAnswer": 2,
        "explanation": "For $\\Delta x_1 = \\lambda/4$, $\\phi_1 = \\pi/2 \\implies I_1 = I_0 \\cos^2(\\pi/4) = I_0 / 2$.\nFor $\\Delta x_2 = \\lambda/3$, $\\phi_2 = 2\\pi/3 \\implies I_2 = I_0 \\cos^2(\\pi/3) = I_0 / 4$.\n$I_1 / I_2 = (I_0/2) / (I_0/4) = 2:1$."
    })
    # 39
    questions.append({
        "question": "In YDSE, light of wavelength $600\\text{ nm}$ falls on a pair of slits separated by $0.3\\text{ mm}$. If the fringe pattern is formed on a screen $1.5\\text{ m}$ away, the fringe width is:",
        "options": ["$1.5\\text{ mm}$", "$2.5\\text{ mm}$", "$4.0\\text{ mm}$", "$3.0\\text{ mm}$"],
        "correctAnswer": 3,
        "explanation": "$\\beta = \\frac{\\lambda D}{d} = \\frac{600 \\times 10^{-9} \\times 1.5}{0.3 \\times 10^{-3}} = 3.0 \\times 10^{-3}\\text{ m} = 3.0\\text{ mm}$."
    })
    # 40
    questions.append({
        "question": "In YDSE, two coherent waves have intensities in the ratio $9:1$. The ratio of intensity of the bright fringes to that of dark fringes is:",
        "options": ["$4:1$", "$9:1$", "$16:1$", "$25:1$"],
        "correctAnswer": 0,
        "explanation": "$\\frac{A_1}{A_2} = \\sqrt{9/1} = 3$.\n$\\frac{I_{\\max}}{I_{\\min}} = \\left(\\frac{3+1}{3-1}\\right)^2 = \\left(\\frac{4}{2}\\right)^2 = 4:1$."
    })
    # 41
    questions.append({
        "question": "In YDSE, when a thin transparent plate of refractive index $1.5$ and thickness $t$ is placed in one of the interfering beams, the central fringe shifts by 2 fringe widths. If $\\lambda = 500\\text{ nm}$, the thickness $t$ is:",
        "options": ["$1.0\\;\\mu\\text{m}$", "$2.0\\;\\mu\\text{m}$", "$1.5\\;\\mu\\text{m}$", "$3.0\\;\\mu\\text{m}$"],
        "correctAnswer": 1,
        "explanation": "$\\Delta y = n \\beta \\implies (\\mu - 1)t = n\\lambda \\implies (1.5 - 1)t = 2(500\\text{ nm}) \\implies 0.5 t = 1000\\text{ nm} \\implies t = 2000\\text{ nm} = 2.0\\;\\mu\\text{m}$."
    })
    # 42
    questions.append({
        "question": "In a YDSE, if the wavelength of light used is $450\\text{ nm}$, what is the phase difference between two interfering waves at a point where the path difference is $150\\text{ nm}$?",
        "options": ["$\\pi/3$", "$\\pi/2$", "$2\\pi/3$", "$\\pi$"],
        "correctAnswer": 2,
        "explanation": "Phase difference $\\phi = \\frac{2\\pi}{\\lambda}\\Delta x = \\frac{2\\pi}{450} \\times 150 = \\frac{2\\pi}{3}$."
    })
    # 43
    questions.append({
        "question": "In YDSE, what is the shape of fringes on a flat screen placed far away when the slits are parallel straight lines?",
        "options": ["Circular", "Elliptical", "Parabolic", "Straight and parallel"],
        "correctAnswer": 3,
        "explanation": "For straight parallel slits, the hyperbolas intersect a planar screen placed far away near the axis as almost straight, parallel fringes."
    })
    # 44
    questions.append({
        "question": "In YDSE, if the two interfering beams have intensities $I$ and $4I$, the intensity at a point where the phase difference is $\\pi$ is:",
        "options": ["$I$", "$0$", "$3I$", "$9I$"],
        "correctAnswer": 0,
        "explanation": "$I_{\\text{res}} = I_1 + I_2 + 2\\sqrt{I_1 I_2}\\cos\\phi = I + 4I + 2\\sqrt{4I^2}\\cos\\pi = 5I - 4I = I$."
    })
    # 45
    questions.append({
        "question": "In YDSE, the central maximum has intensity $I_0$. If one of the slits is completely closed, the intensity at the same central position will be:",
        "options": ["$I_0/2$", "$I_0/4$", "$I_0$", "$I_0/16$"],
        "correctAnswer": 1,
        "explanation": "With two slits open, $I_0 = (a + a)^2 = 4a^2$. When one slit is closed, amplitude is $a$, so intensity becomes $a^2 = I_0 / 4$."
    })

    return questions


def create_diffraction_questions():
    questions = []

    # 1
    questions.append({
        "question": "In a single slit diffraction pattern, the first minimum for light of wavelength $600\\text{ nm}$ occurs at an angle of $30^\\circ$. The width of the slit is:",
        "options": ["$1.2\\;\\mu\\text{m}$", "$0.6\\;\\mu\\text{m}$", "$2.4\\;\\mu\\text{m}$", "$1.8\\;\\mu\\text{m}$"],
        "correctAnswer": 0,
        "explanation": "For first minimum: $a \\sin\\theta = \\lambda \\implies a = \\frac{\\lambda}{\\sin 30^\\circ} = \\frac{600\\text{ nm}}{0.5} = 1200\\text{ nm} = 1.2\\;\\mu\\text{m}$."
    })
    # 2
    questions.append({
        "question": "In Fraunhofer diffraction at a single slit of width $a$, the angular width of the central diffraction maximum is given by:",
        "options": ["$\\frac{\\lambda}{a}$", "$\\frac{2\\lambda}{a}$", "$\\frac{\\lambda}{2a}$", "$\\frac{4\\lambda}{a}$"],
        "correctAnswer": 1,
        "explanation": "The central maximum extends from the first minimum on one side ($\\theta = -\\lambda/a$) to the first minimum on the other side ($\\theta = +\\lambda/a$). Thus, angular width $= 2\\theta = \\frac{2\\lambda}{a}$."
    })
    # 3
    questions.append({
        "question": "A parallel beam of light of wavelength $500\\text{ nm}$ falls on a single slit of width $0.1\\text{ mm}$. A screen is placed $1\\text{ m}$ away. The linear width of the central maximum on the screen is:",
        "options": ["$5\\text{ mm}$", "$2\\text{ mm}$", "$10\\text{ mm}$", "$1\\text{ mm}$"],
        "correctAnswer": 2,
        "explanation": "Linear width $\\beta_0 = 2 \\frac{\\lambda D}{a} = 2 \\times \\frac{500 \\times 10^{-9} \\times 1}{0.1 \\times 10^{-3}} = 10 \\times 10^{-3}\\text{ m} = 10\\text{ mm}$."
    })
    # 4
    questions.append({
        "question": "In Fraunhofer single slit diffraction, the ratio of the intensities of the central maximum, first secondary maximum, and second secondary maximum is approximately:",
        "options": ["$1 : 0.045 : 0.016$", "$1 : 0.25 : 0.11$", "$1 : 0.5 : 0.25$", "$1 : 0.1 : 0.01$"],
        "correctAnswer": 0,
        "explanation": "The intensities are in the ratio $1 : \\left(\\frac{2}{3\\pi}\\right)^2 : \\left(\\frac{2}{5\\pi}\\right)^2 \\approx 1 : \\frac{4}{9\\pi^2} : \\frac{4}{25\\pi^2} \\approx 1 : 0.045 : 0.016$."
    })
    # 5
    questions.append({
        "question": "In single slit diffraction, the condition for the $n^{\\text{th}}$ secondary maximum is given by ($n = 1, 2, 3, \\dots$):",
        "options": ["$a \\sin\\theta = n\\lambda$", "$a \\sin\\theta = (2n + 1)\\frac{\\lambda}{2}$", "$a \\sin\\theta = (2n - 1)\\lambda$", "$a \\sin\\theta = \\frac{n\\lambda}{2}$"],
        "correctAnswer": 1,
        "explanation": "Secondary maxima occur approximately at $a \\sin\\theta = (2n + 1)\\frac{\\lambda}{2}$ for $n = 1, 2, 3, \\dots$"
    })
    # 6
    questions.append({
        "question": "The Fresnel distance $Z_F$ for an aperture of size $a$ and light of wavelength $\\lambda$ is defined as:",
        "options": ["$\\frac{a}{\\lambda}$", "$\\frac{a^2}{2\\lambda}$", "$\\frac{a^2}{\\lambda}$", "$\\frac{\\lambda^2}{a}$"],
        "correctAnswer": 2,
        "explanation": "Fresnel distance $Z_F = \\frac{a^2}{\\lambda}$, beyond which ray optics is invalid and wave spreading dominates."
    })
    # 7
    questions.append({
        "question": "If the width of the slit in a single slit diffraction experiment is doubled, the width of the central maximum and its intensity will respectively:",
        "options": ["Be halved and become four times", "Be doubled and be halved", "Be halved and be doubled", "Be doubled and become four times"],
        "correctAnswer": 0,
        "explanation": "Linear width $\\beta_0 = \\frac{2\\lambda D}{a} \\propto \\frac{1}{a}$, so doubling $a$ halves the width. Central amplitude $A_0 \\propto a$, so intensity $I_0 \\propto a^2$ becomes 4 times."
    })
    # 8
    questions.append({
        "question": "Light of wavelength $600\\text{ nm}$ is incident on an aperture of width $2\\text{ mm}$. The distance up to which ray optics is a good approximation (Fresnel distance) is:",
        "options": ["$3.33\\text{ m}$", "$6.67\\text{ m}$", "$13.33\\text{ m}$", "$1.67\\text{ m}$"],
        "correctAnswer": 1,
        "explanation": "$Z_F = \\frac{a^2}{\\lambda} = \\frac{(2 \\times 10^{-3})^2}{600 \\times 10^{-9}} = \\frac{4 \\times 10^{-6}}{6 \\times 10^{-7}} = 6.67\\text{ m}$."
    })
    # 9
    questions.append({
        "question": "In a single slit diffraction experiment, if red light is replaced by blue light, the diffraction bands will:",
        "options": ["Become broader and further apart", "Disappear completely", "Become narrower and crowded closer together", "Remain unaffected"],
        "correctAnswer": 2,
        "explanation": "Since $\\lambda_{\\text{blue}} < \\lambda_{\\text{red}}$, the angular width $\\theta = \\frac{2\\lambda}{a}$ decreases, making the bands narrower and closer together."
    })
    # 10
    questions.append({
        "question": "According to Rayleigh's criterion, two point sources are just resolved when:",
        "options": ["The central maximum of one falls on the first minimum of the other", "The central maxima of both coincide", "The first minimum of one coincides with the first minimum of the other", "The first secondary maximum of one falls on the central maximum of the other"],
        "correctAnswer": 0,
        "explanation": "Rayleigh's criterion states that two point sources are just resolved by an optical system when the central maximum of the diffraction pattern of one source falls on the first minimum of the diffraction pattern of the other."
    })
    # 11
    questions.append({
        "question": "The limit of resolution of a telescope with circular aperture of diameter $D$ for light of wavelength $\\lambda$ is:",
        "options": ["$\\Delta\\theta = \\frac{1.22\\lambda}{D}$", "$\\Delta\\theta = \\frac{D}{1.22\\lambda}$", "$\\Delta\\theta = \\frac{0.61\\lambda}{D}$", "$\\Delta\\theta = \\frac{2\\lambda}{D}$"],
        "correctAnswer": 0,
        "explanation": "Airy's formula gives the angular limit of resolution as $\\Delta\\theta = \\frac{1.22\\lambda}{D}$."
    })
    # 12
    questions.append({
        "question": "The resolving power of a telescope can be increased by:",
        "options": ["Increasing the wavelength of light used", "Decreasing the diameter of objective lens", "Increasing the diameter of objective lens", "Increasing the focal length of eyepiece"],
        "correctAnswer": 2,
        "explanation": "Resolving power of telescope $= \\frac{1}{\\Delta\\theta} = \\frac{D}{1.22\\lambda}$. Increasing the objective diameter $D$ increases resolving power."
    })
    # 13
    questions.append({
        "question": "The limit of resolution of a compound microscope using light of wavelength $\\lambda$ with semi-vertical angle $\\beta$ of the cone of rays in a medium of refractive index $\\mu$ is:",
        "options": ["$d_{\\min} = \\frac{1.22\\lambda}{\\mu\\sin\\beta}$", "$d_{\\min} = \\frac{\\lambda}{2\\mu\\sin\\beta}$", "$d_{\\min} = \\frac{2\\mu\\sin\\beta}{\\lambda}$", "$d_{\\min} = \\frac{1.22\\lambda}{2\\mu\\sin\\beta}$"],
        "correctAnswer": 1,
        "explanation": "Limit of resolution of microscope is $d_{\\min} = \\frac{\\lambda}{2\\mu\\sin\\beta} = \\frac{\\lambda}{2\\text{NA}}$, where $\\mu\\sin\\beta$ is the numerical aperture."
    })
    # 14
    questions.append({
        "question": "To increase the resolving power of a microscope, one should:",
        "options": ["Use light of longer wavelength", "Use an oil-immersion objective with high refractive index oil", "Decrease the aperture of the objective", "Increase the focal length of the objective"],
        "correctAnswer": 1,
        "explanation": "Resolving power $= \\frac{2\\mu\\sin\\beta}{\\lambda}$. Using an oil immersion objective increases $\\mu$ (refractive index), which increases resolving power."
    })
    # 15
    questions.append({
        "question": "In a single slit diffraction experiment, the width of the slit is $a = 0.2\\text{ mm}$. If light of wavelength $500\\text{ nm}$ is used, the angle of diffraction for the second minimum is:",
        "options": ["$2.5 \\times 10^{-3}\\text{ rad}$", "$1.0 \\times 10^{-3}\\text{ rad}$", "$5.0 \\times 10^{-3}\\text{ rad}$", "$7.5 \\times 10^{-3}\\text{ rad}$"],
        "correctAnswer": 2,
        "explanation": "For $n^{\\text{th}}$ minimum: $a\\sin\\theta = n\\lambda \\implies \\theta \\approx \\frac{n\\lambda}{a}$. For $n = 2$:\n$\\theta = \\frac{2 \\times 500 \\times 10^{-9}}{0.2 \\times 10^{-3}} = 5.0 \\times 10^{-3}\\text{ rad}$."
    })
    # 16
    questions.append({
        "question": "How many interference fringes will be contained within the central diffraction maximum in a double-slit experiment if the slit separation is $d = 1\\text{ mm}$ and each slit width is $a = 0.2\\text{ mm}$?",
        "options": ["$5$", "$9$", "$10$", "$11$"],
        "correctAnswer": 1,
        "explanation": "Angular width of central diffraction maximum $= \\frac{2\\lambda}{a}$.\nAngular fringe width of interference $= \\frac{\\lambda}{d}$.\nNumber of fringes $N = \\frac{2\\lambda / a}{\\lambda / d} = \\frac{2d}{a} = \\frac{2 \\times 1}{0.2} = 10$.\nSince the 5th interference maximum ($y = 5\\lambda D/d$) coincides with the 1st diffraction minimum ($a = d/5$), the 5th interference fringe has zero intensity (missing order). Thus within the central maximum there are: central fringe ($n=0$) plus $n = \\pm 1, \\pm 2, \\pm 3, \\pm 4$, total $1 + 8 = 9$ fringes."
    })
    # 17
    questions.append({
        "question": "In Fraunhofer diffraction by a single slit, if the slit width is made very large ($a \\gg \\lambda$):",
        "options": ["The diffraction pattern spreads over the whole screen", "Bending of light is negligible and sharp geometric shadows are cast", "All secondary maxima become brighter than the central peak", "The pattern becomes identical to a double slit pattern"],
        "correctAnswer": 1,
        "explanation": "When slit width is very large compared to $\\lambda$, the angular spread $\\theta = \\lambda / a \\to 0$. Light propagates along straight lines (ray optics), casting sharp shadows."
    })
    # 18
    questions.append({
        "question": "A telescope has an objective lens of diameter $2.54\\text{ m}$. What is the angular resolution limit of the telescope for light of wavelength $500\\text{ nm}$?",
        "options": ["$2.4 \\times 10^{-7}\\text{ rad}$", "$1.2 \\times 10^{-6}\\text{ rad}$", "$4.8 \\times 10^{-7}\\text{ rad}$", "$6.0 \\times 10^{-7}\\text{ rad}$"],
        "correctAnswer": 0,
        "explanation": "$\\Delta\\theta = \\frac{1.22 \\lambda}{D} = \\frac{1.22 \\times 500 \\times 10^{-9}}{2.54} = \\frac{610 \\times 10^{-9}}{2.54} \\approx 2.4 \\times 10^{-7}\\text{ rad}$."
    })
    # 19
    questions.append({
        "question": "In a single slit diffraction experiment, the first diffraction minimum for light of wavelength $\\lambda_1 = 660\\text{ nm}$ coincides with the first maximum of another wavelength $\\lambda_2$. The value of $\\lambda_2$ is:",
        "options": ["$330\\text{ nm}$", "$440\\text{ nm}$", "$550\\text{ nm}$", "$220\\text{ nm}$"],
        "correctAnswer": 1,
        "explanation": "First minimum of $\\lambda_1$: $a \\sin\\theta = \\lambda_1$.\nFirst secondary maximum of $\\lambda_2$: $a \\sin\\theta = \\frac{3}{2}\\lambda_2$.\nEquating: $\\lambda_1 = \\frac{3}{2}\\lambda_2 \\implies \\lambda_2 = \\frac{2}{3}\\lambda_1 = \\frac{2}{3}(660) = 440\\text{ nm}$."
    })
    # 20
    questions.append({
        "question": "A circular aperture of diameter $0.1\\text{ mm}$ is illuminated by light of wavelength $600\\text{ nm}$. The angular diameter of the central Airy disk is:",
        "options": ["$7.32 \\times 10^{-3}\\text{ rad}$", "$1.46 \\times 10^{-2}\\text{ rad}$", "$3.66 \\times 10^{-3}\\text{ rad}$", "$1.22 \\times 10^{-2}\\text{ rad}$"],
        "correctAnswer": 1,
        "explanation": "Angular radius of Airy disk is $\\theta = 1.22\\frac{\\lambda}{D}$. Angular diameter is $2\\theta = 2.44\\frac{\\lambda}{D} = \\frac{2.44 \\times 600 \\times 10^{-9}}{0.1 \\times 10^{-3}} = 1.464 \\times 10^{-2}\\text{ rad}$."
    })
    # 21
    questions.append({
        "question": "In single slit diffraction, what is the phase difference between wavelets from the two opposite edges of the slit for the first secondary maximum?",
        "options": ["$2\\pi$", "$\\pi$", "$3\\pi$", "$4\\pi$"],
        "correctAnswer": 2,
        "explanation": "For the first secondary maximum, path difference between edges is $\\Delta x = \\frac{3\\lambda}{2}$.\nPhase difference $\\phi = \\frac{2\\pi}{\\lambda}\\Delta x = \\frac{2\\pi}{\\lambda} \\left(\\frac{3\\lambda}{2}\\right) = 3\\pi$."
    })
    # 22
    questions.append({
        "question": "The essential difference between interference and diffraction patterns is that:",
        "options": ["All interference fringes are of equal width, while diffraction fringes are of unequal width", "Interference is from two coherent wave fronts, whereas diffraction is superposition of secondary wavelets from different parts of the same wave front", "Diffraction produces brighter fringes than interference", "Both A and B are correct"],
        "correctAnswer": 3,
        "explanation": "Both A and B are fundamentally correct differences: interference fringes generally have uniform width and intensity (for identical slits), whereas diffraction central maximum is twice as wide as secondary maxima, and diffraction originates from wavelets of the same wavefront."
    })
    # 23
    questions.append({
        "question": "A screen is placed $2\\text{ m}$ away from a single narrow slit illuminated by light of $\\lambda = 500\\text{ nm}$. If the distance between the first minimum on either side of the central maximum is $5\\text{ mm}$, the slit width is:",
        "options": ["$0.4\\text{ mm}$", "$0.2\\text{ mm}$", "$0.8\\text{ mm}$", "$0.1\\text{ mm}$"],
        "correctAnswer": 0,
        "explanation": "Distance between first minima on either side is the width of central maximum: $2y_1 = \\frac{2\\lambda D}{a} = 5 \\times 10^{-3}\\text{ m}$.\n$a = \\frac{2\\lambda D}{5 \\times 10^{-3}} = \\frac{2 \\times 500 \\times 10^{-9} \\times 2}{5 \\times 10^{-3}} = 0.4 \\times 10^{-3}\\text{ m} = 0.4\\text{ mm}$."
    })
    # 24
    questions.append({
        "question": "In Fraunhofer diffraction by a single slit, the intensity distribution $I(\\theta)$ as a function of $\\beta = \\frac{\\pi a \\sin\\theta}{\\lambda}$ is given by:",
        "options": ["$I(\\theta) = I_0 \\left(\\frac{\\sin\\beta}{\\beta}\\right)^2$", "$I(\\theta) = I_0 \\cos^2\\beta$", "$I(\\theta) = I_0 \\left(\\frac{\\sin 2\\beta}{2\\beta}\\right)$", "$I(\\theta) = I_0 \\frac{\\sin^2\\beta}{\\beta}$"],
        "correctAnswer": 0,
        "explanation": "The standard single-slit Fraunhofer diffraction formula is $I(\\theta) = I_0 \\left(\\frac{\\sin\\beta}{\\beta}\\right)^2$ where $\\beta = \\frac{\\pi a \\sin\\theta}{\\lambda}$."
    })
    # 25
    questions.append({
        "question": "For what size of aperture does diffraction spreading equal the geometric aperture width at a distance of $10\\text{ m}$ for light of wavelength $500\\text{ nm}$?",
        "options": ["$\\sqrt{5}\\text{ mm}$", "$\\sqrt{10}\\text{ mm}$", "$2.24\\text{ mm}$", "Both A and C are correct"],
        "correctAnswer": 3,
        "explanation": "Diffraction spread $\\frac{\\lambda D}{a} = a \\implies a^2 = \\lambda D = 500 \\times 10^{-9} \\times 10 = 5 \\times 10^{-6}\\text{ m}^2 \\implies a = \\sqrt{5} \\times 10^{-3}\\text{ m} = \\sqrt{5}\\text{ mm} \\approx 2.24\\text{ mm}$."
    })
    # 26
    questions.append({
        "question": "Two headlights of a car are separated by $1.22\\text{ m}$. The pupil of a human eye has diameter $5\\text{ mm}$. If light of wavelength $500\\text{ nm}$ is used, what is the maximum distance up to which the two headlights can be resolved by the human eye?",
        "options": ["$5\\text{ km}$", "$10\\text{ km}$", "$12.2\\text{ km}$", "$1\\text{ km}$"],
        "correctAnswer": 1,
        "explanation": "Angular resolution $\\theta = \\frac{1.22\\lambda}{D} = \\frac{1.22 \\times 500 \\times 10^{-9}}{5 \\times 10^{-3}} = 1.22 \\times 10^{-4}\\text{ rad}$.\nMaximum distance $L = \\frac{y}{\\theta} = \\frac{1.22}{1.22 \\times 10^{-4}} = 10^4\\text{ m} = 10\\text{ km}$."
    })
    # 27
    questions.append({
        "question": "In a single slit diffraction experiment, what is the phase difference between waves from the two extreme ends of the slit at the first minimum?",
        "options": ["$\\pi$", "$2\\pi$", "$3\\pi/2$", "$\\pi/2$"],
        "correctAnswer": 1,
        "explanation": "For the first minimum: path difference $\\Delta x = a \\sin\\theta = \\lambda$.\nPhase difference $\\phi = \\frac{2\\pi}{\\lambda}\\Delta x = \\frac{2\\pi}{\\lambda}\\lambda = 2\\pi$."
    })
    # 28
    questions.append({
        "question": "When a single slit of width $a$ is illuminated with white light, the first minimum of red light ($\\lambda_R = 700\\text{ nm}$) falls on the first minimum of some other wavelength $\\lambda$. Can this ever happen with different wavelengths in the first minimum?",
        "options": ["Yes, at $\\theta = 0$", "No, because $a\\sin\\theta = \\lambda$ implies each wavelength has its own unique first minimum angle", "Yes, if slit width is zero", "Yes, in all media"],
        "correctAnswer": 1,
        "explanation": "Since $\\sin\\theta_1 = \\lambda / a$, for a given slit width $a$, each wavelength has a strictly unique angle for its first minimum."
    })
    # 29
    questions.append({
        "question": "The diameter of the objective lens of a microscope is increased from $2\\text{ mm}$ to $4\\text{ mm}$. Its resolving power:",
        "options": ["Becomes four times", "Remains unchanged", "Is doubled", "Is halved"],
        "correctAnswer": 2,
        "explanation": "Resolving power is proportional to numerical aperture $\\mu \\sin\\beta \\approx \\mu \\frac{D}{2f}$. Doubling diameter $D$ doubles the resolving power."
    })
    # 30
    questions.append({
        "question": "In Fraunhofer diffraction at a single slit, the width of the central maximum depends on:",
        "options": ["Wavelength only", "Slit width only", "Both wavelength and slit width", "Neither wavelength nor slit width"],
        "correctAnswer": 2,
        "explanation": "Angular width is $2\\theta = \\frac{2\\lambda}{a}$, which depends on both wavelength $\\lambda$ and slit width $a$."
    })
    # 31
    questions.append({
        "question": "What is the order of magnitude of slit size required to observe noticeable diffraction of sound waves compared to light waves?",
        "options": ["A few meters for sound and a few micrometers for light", "A few micrometers for both", "A few meters for light and micrometers for sound", "Diffraction occurs equally for any slit size"],
        "correctAnswer": 0,
        "explanation": "Diffraction is prominent when aperture size is comparable to wavelength. Sound waves have $\\lambda \\sim 1\\text{ m}$, while visible light has $\\lambda \\sim 0.5\\;\\mu\\text{m}$."
    })
    # 32
    questions.append({
        "question": "In a single slit diffraction experiment, if the slit width is $a = \\lambda$, the angular width of the central maximum is:",
        "options": ["$\\pi\\text{ rad}$", "$\\pi/2\\text{ rad}$", "Does not have minima because $\\sin\\theta = 1$ gives $\\theta = 90^\\circ$ on either side", "Both A and C are conceptually correct"],
        "correctAnswer": 3,
        "explanation": "When $a = \\lambda$, first minimum condition $a \\sin\\theta = \\lambda \\implies \\sin\\theta = 1 \\implies \\theta = \\pm 90^\\circ$. The central maximum spreads across the entire forward half-space ($180^\\circ = \\pi\\text{ rad}$)."
    })
    # 33
    questions.append({
        "question": "The resolving power of an electron microscope is far higher than that of an optical microscope primarily because:",
        "options": ["Electrons have higher speed", "The de Broglie wavelength of high-energy electrons is much smaller than the wavelength of visible light", "Electrons are negatively charged", "Magnetic lenses have zero aberration"],
        "correctAnswer": 1,
        "explanation": "Resolving power is inversely proportional to wavelength. Fast electrons have de Broglie wavelengths of order $10^{-11}\\text{ m} = 0.1\\text{ \\AA}$, thousands of times smaller than light ($\sim 5000\\text{ \\AA}$)."
    })
    # 34
    questions.append({
        "question": "A slit of width $a$ is illuminated by white light. The first minimum for red light ($\\lambda = 650\\text{ nm}$) coincides with the second minimum for another wavelength $\\lambda'$. The value of $\\lambda'$ is:",
        "options": ["$325\\text{ nm}$", "$433\\text{ nm}$", "$500\\text{ nm}$", "$260\\text{ nm}$"],
        "correctAnswer": 0,
        "explanation": "$a \\sin\\theta = 1 \\times 650\\text{ nm} = 2 \\times \\lambda' \\implies \\lambda' = \\frac{650}{2} = 325\\text{ nm}$."
    })
    # 35
    questions.append({
        "question": "A telescope has an objective of focal length $100\\text{ cm}$ and diameter $5\\text{ cm}$. For light of wavelength $500\\text{ nm}$, the linear separation of two just resolvable stars in the focal plane of the objective is:",
        "options": ["$1.22 \\times 10^{-3}\\text{ cm}$", "$1.22 \\times 10^{-4}\\text{ cm}$", "$2.44 \\times 10^{-4}\\text{ cm}$", "$0.61 \\times 10^{-4}\\text{ cm}$"],
        "correctAnswer": 1,
        "explanation": "Angular separation $\\Delta\\theta = 1.22 \\frac{\\lambda}{D} = 1.22 \\frac{500 \\times 10^{-7}\\text{ cm}}{5\\text{ cm}} = 1.22 \\times 10^{-5}\\text{ rad}$.\nLinear separation $y = f \\cdot \\Delta\\theta = 100 \\times 1.22 \\times 10^{-5} = 1.22 \\times 10^{-3}\\text{ mm} = 1.22 \\times 10^{-4}\\text{ cm}$."
    })
    # 36
    questions.append({
        "question": "In a single slit diffraction experiment, the intensity of the second secondary maximum relative to the central maximum $I_0$ is:",
        "options": ["$\\frac{I_0}{9\\pi^2}$", "$\\frac{4I_0}{9\\pi^2}$", "$\\frac{4I_0}{25\\pi^2}$", "$\\frac{I_0}{25\\pi^2}$"],
        "correctAnswer": 2,
        "explanation": "For the $n^{\\text{th}}$ secondary maximum, $\\beta \\approx (2n + 1)\\frac{\\pi}{2}$. For $n = 2$, $\\beta = \\frac{5\\pi}{2}$.\n$I_2 = I_0 \\left(\\frac{\\sin(5\\pi/2)}{5\\pi/2}\\right)^2 = I_0 \\left(\\frac{1}{5\\pi/2}\\right)^2 = \\frac{4I_0}{25\\pi^2}$."
    })
    # 37
    questions.append({
        "question": "Which of the following phenomena proves the wave nature of light?",
        "options": ["Photoelectric effect", "Compton effect", "Diffraction", "Raman effect"],
        "correctAnswer": 2,
        "explanation": "Diffraction and interference unambiguously demonstrate the wave nature of light, while photoelectric effect and Compton effect demonstrate particle nature."
    })
    # 38
    questions.append({
        "question": "In a single slit Fraunhofer diffraction setup, a convex lens of focal length $f$ is placed immediately behind the slit. The linear width of the central maximum on a screen placed at the focal plane is:",
        "options": ["$\\frac{\\lambda f}{a}$", "$\\frac{2\\lambda f}{a}$", "$\\frac{a f}{2\\lambda}$", "$\\frac{\\lambda a}{f}$"],
        "correctAnswer": 1,
        "explanation": "The linear width of the central maximum on the screen placed at focal plane ($D = f$) is $2y_1 = 2\\frac{\\lambda f}{a}$."
    })
    # 39
    questions.append({
        "question": "A slit of width $a$ is illuminated by monochromatic light of wavelength $589\\text{ nm}$. If the first minimum is observed at an angle of $0.0589\\text{ rad}$, the width of the slit $a$ is:",
        "options": ["$10\\;\\mu\\text{m}$", "$20\\;\\mu\\text{m}$", "$5\\;\\mu\\text{m}$", "$1\\;\\mu\\text{m}$"],
        "correctAnswer": 0,
        "explanation": "$a \\sin\\theta = \\lambda \\implies a \\approx \\frac{\\lambda}{\\theta} = \\frac{589 \\times 10^{-9}\\text{ m}}{0.0589\\text{ rad}} = 10^{-5}\\text{ m} = 10\\;\\mu\\text{m}$."
    })
    # 40
    questions.append({
        "question": "In a diffraction pattern due to a single slit, if the slit is illuminated with yellow light from a sodium lamp, and then immersed completely in water, the central maximum will:",
        "options": ["Become broader", "Become narrower", "Remain unaffected", "Disappear"],
        "correctAnswer": 1,
        "explanation": "In water, wavelength decreases to $\\lambda' = \\frac{\\lambda}{\\mu}$. Since width of central maximum is $2\\theta = \\frac{2\\lambda'}{a}$, it becomes narrower."
    })
    # 41
    questions.append({
        "question": "What is the angular separation between the central maximum and the second minimum in a single slit diffraction pattern of slit width $a$?",
        "options": ["$\\frac{\\lambda}{a}$", "$\\frac{2\\lambda}{a}$", "$\\frac{3\\lambda}{2a}$", "$\\frac{5\\lambda}{2a}$"],
        "correctAnswer": 1,
        "explanation": "Condition for $n^{\\text{th}}$ minimum is $\\sin\\theta_n \\approx \\theta_n = \\frac{n\\lambda}{a}$. For $n = 2$, $\\theta_2 = \\frac{2\\lambda}{a}$."
    })
    # 42
    questions.append({
        "question": "The diameter of the objective lens of the Hubble Space Telescope is $2.4\\text{ m}$. For visible light of wavelength $600\\text{ nm}$, its diffraction-limited angular resolution is approximately:",
        "options": ["$0.06\\text{ arcseconds}$", "$0.02\\text{ arcseconds}$", "$0.3\\text{ arcseconds}$", "$1.2\\text{ arcseconds}$"],
        "correctAnswer": 0,
        "explanation": "$\\Delta\\theta = \\frac{1.22\\lambda}{D} = \\frac{1.22 \\times 600 \\times 10^{-9}}{2.4} = 3.05 \\times 10^{-7}\\text{ rad}$.\nIn arcseconds: $3.05 \\times 10^{-7} \\times \\frac{180}{\\pi} \\times 3600 \\approx 0.063\\text{ arcseconds}$."
    })
    # 43
    questions.append({
        "question": "When monochromatic light passes through a narrow single slit, why does the intensity drop sharply for secondary maxima?",
        "options": ["Energy is absorbed by the slit edges", "Only a small fraction of the slit aperture (unpaired zone) contributes constructively, while the rest cancels destructively", "The wavelength changes upon diffraction", "Diffracted rays become polarized and extinguish each other"],
        "correctAnswer": 1,
        "explanation": "For secondary maxima, the slit can be divided into odd number of zones (3, 5, 7...). Two zones cancel each other pairwise, leaving only 1/3, 1/5, etc. of the aperture to contribute amplitude, so intensity drops as $1/9, 1/25$."
    })
    # 44
    questions.append({
        "question": "In a single slit diffraction experiment, if the slit width $a$ is much smaller than the wavelength $\\lambda$ ($a \\ll \\lambda$):",
        "options": ["Diffraction is unobservable", "Light spreads almost uniformly in all directions as a cylindrical wave", "Light forms a parallel beam with zero angular spread", "Only dark fringes appear"],
        "correctAnswer": 1,
        "explanation": "When $a \\ll \\lambda$, the slit acts as a line source radiating secondary wavelets uniformly in all directions in the forward hemisphere."
    })
    # 45
    questions.append({
        "question": "Two pinholes $1.5\\text{ mm}$ apart are placed in front of a lens of diameter $3\\text{ cm}$. If the pinholes are illuminated by light of $\\lambda = 600\\text{ nm}$, the maximum distance from the lens at which the pinholes can be just resolved is:",
        "options": ["$61\\text{ m}$", "$45\\text{ m}$", "$100\\text{ m}$", "$30\\text{ m}$"],
        "correctAnswer": 0,
        "explanation": "$\\Delta\\theta = 1.22 \\frac{\\lambda}{D} = \\frac{1.22 \\times 600 \\times 10^{-9}}{0.03} = 2.44 \\times 10^{-5}\\text{ rad}$.\nDistance $L = \\frac{d}{\\Delta\\theta} = \\frac{1.5 \\times 10^{-3}}{2.44 \\times 10^{-5}} \\approx 61.5\\text{ m}$."
    })

    return questions


def create_polarization_questions():
    questions = []

    # 1
    questions.append({
        "question": "When unpolarized light of intensity $I_0$ passes through an ideal polaroid, the transmitted intensity is:",
        "options": ["$I_0/2$", "$I_0$", "$I_0/4$", "Zero"],
        "correctAnswer": 0,
        "explanation": "An ideal polarizer absorbs the component perpendicular to its transmission axis. The average value of $\\cos^2\\theta$ over all angles is $1/2$, so transmitted intensity is $I = I_0/2$."
    })
    # 2
    questions.append({
        "question": "According to Brewster's law, when light is incident at the polarizing angle $i_p$ on a dielectric surface of refractive index $\\mu$, the angle between the reflected and refracted rays is:",
        "options": ["$45^\\circ$", "$90^\\circ$", "$180^\\circ$", "$60^\\circ$"],
        "correctAnswer": 1,
        "explanation": "By Brewster's law, $\\tan i_p = \\mu = \\frac{\\sin i_p}{\\cos i_p}$. By Snell's law, $\\mu = \\frac{\\sin i_p}{\\sin r}$.\nThus $\\sin r = \\cos i_p = \\sin(90^\\circ - i_p) \\implies i_p + r = 90^\\circ$.\nThe angle between reflected and refracted rays is $180^\\circ - (i_p + r) = 90^\\circ$."
    })
    # 3
    questions.append({
        "question": "The Brewster angle for a medium of refractive index $\\sqrt{3}$ is:",
        "options": ["$30^\\circ$", "$45^\\circ$", "$60^\\circ$", "$75^\\circ$"],
        "correctAnswer": 2,
        "explanation": "$\\tan i_p = \\mu = \\sqrt{3} \\implies i_p = 60^\\circ$."
    })
    # 4
    questions.append({
        "question": "Unpolarized light of intensity $I_0$ is incident on a system of two polaroids whose transmission axes are inclined at $60^\\circ$ to each other. The intensity of transmitted light is:",
        "options": ["$I_0/4$", "$I_0/2$", "$I_0/16$", "$I_0/8$"],
        "correctAnswer": 3,
        "explanation": "After the first polaroid, intensity $I_1 = I_0/2$.\nAfter the second polaroid, according to Malus's law:\n$I_2 = I_1 \\cos^2(60^\\circ) = \\frac{I_0}{2} \\left(\\frac{1}{2}\\right)^2 = \\frac{I_0}{8}$."
    })
    # 5
    questions.append({
        "question": "Two polaroids $P_1$ and $P_2$ are placed with their pass axes perpendicular to each other. A third polaroid $P_3$ is introduced between them with its axis oriented at $45^\\circ$ to $P_1$. If unpolarized light of intensity $I_0$ is incident on $P_1$, the final transmitted intensity is:",
        "options": ["$I_0/8$", "$I_0/4$", "$I_0/16$", "Zero"],
        "correctAnswer": 0,
        "explanation": "After $P_1$: $I_1 = I_0/2$.\nAfter $P_3$ (at $45^\\circ$ to $P_1$): $I_2 = I_1 \\cos^2 45^\\circ = \\frac{I_0}{2} \\times \\frac{1}{2} = \\frac{I_0}{4}$.\n$P_2$ is at $90^\\circ$ to $P_1$, so it is at $45^\\circ$ to $P_3$.\nAfter $P_2$: $I_3 = I_2 \\cos^2 45^\\circ = \\frac{I_0}{4} \\times \\frac{1}{2} = \\frac{I_0}{8}$."
    })
    # 6
    questions.append({
        "question": "Which of the following optical phenomena proves that light waves are transverse and not longitudinal?",
        "options": ["Interference", "Diffraction", "Polarization", "Refraction"],
        "correctAnswer": 2,
        "explanation": "Polarization can only occur for transverse waves where vibrations are perpendicular to the direction of propagation. Longitudinal waves cannot be polarized."
    })
    # 7
    questions.append({
        "question": "If the critical angle for total internal reflection in a medium is $\\theta_c$, the Brewster angle $i_p$ for that medium is:",
        "options": ["$\\tan^{-1}(\\sin\\theta_c)$", "$\\sin^{-1}(\\tan\\theta_c)$", "$\\tan^{-1}(\\csc\\theta_c)$", "$\\cot^{-1}(\\sin\\theta_c)$"],
        "correctAnswer": 2,
        "explanation": "Refractive index $\\mu = \\frac{1}{\\sin\\theta_c} = \\csc\\theta_c$.\nBy Brewster's law, $\\tan i_p = \\mu = \\csc\\theta_c \\implies i_p = \\tan^{-1}(\\csc\\theta_c)$."
    })
    # 8
    questions.append({
        "question": "A beam of unpolarized light strikes a glass slab of refractive index $1.5$ at the Brewster angle. The reflected light is:",
        "options": ["Completely linearly polarized perpendicular to the plane of incidence", "Completely linearly polarized parallel to the plane of incidence", "Partially polarized with 50% polarization", "Unpolarized"],
        "correctAnswer": 0,
        "explanation": "At Brewster's angle, the reflected light is 100% linearly polarized with its electric field vector perpendicular to the plane of incidence (s-polarized)."
    })
    # 9
    questions.append({
        "question": "A polaroid is rotated through $360^\\circ$ in the path of an incident light beam. The transmitted intensity varies from a maximum value to a non-zero minimum value. The incident light is:",
        "options": ["Unpolarized", "Completely linearly polarized", "Partially linearly polarized", "Circularly polarized"],
        "correctAnswer": 2,
        "explanation": "For completely polarized light, the intensity would drop to zero at perpendicular alignment. For unpolarized light, intensity remains constant upon rotation. A variation with non-zero minimum indicates partially polarized light (or an elliptical mixture)."
    })
    # 10
    questions.append({
        "question": "Malus's law states that the intensity of plane-polarized light transmitted by an analyzer is proportional to:",
        "options": ["$\\cos\\theta$", "$\\cos^2\\theta$", "$\\sin^2\\theta$", "$\\tan^2\\theta$"],
        "correctAnswer": 1,
        "explanation": "Malus's law is $I = I_0 \\cos^2\\theta$, where $\\theta$ is the angle between the transmission axis of the analyzer and the polarization direction of incident light."
    })
    # 11
    questions.append({
        "question": "The refractive index of water is $4/3$. The Brewster angle for water-air interface (light coming from air) is:",
        "options": ["$\\tan^{-1}(4/3) \\approx 53.1^\\circ$", "$\\tan^{-1}(3/4) \\approx 36.9^\\circ$", "$\\sin^{-1}(3/4) \\approx 48.6^\\circ$", "$45^\\circ$"],
        "correctAnswer": 0,
        "explanation": "$\\tan i_p = \\mu = 4/3 \\implies i_p = \\tan^{-1}(4/3) \\approx 53.1^\\circ$."
    })
    # 12
    questions.append({
        "question": "Two polaroids are placed with their axes oriented such that maximum intensity $I_0$ is transmitted. Through what angle should one polaroid be rotated so that the transmitted intensity drops to $3I_0/4$?",
        "options": ["$45^\\circ$", "$30^\\circ$", "$60^\\circ$", "$90^\\circ$"],
        "correctAnswer": 1,
        "explanation": "$I = I_0 \\cos^2\\theta = \\frac{3}{4}I_0 \\implies \\cos\\theta = \\frac{\\sqrt{3}}{2} \\implies \\theta = 30^\\circ$."
    })
    # 13
    questions.append({
        "question": "At the Brewster angle of incidence, the refracted ray is:",
        "options": ["Completely polarized", "Partially polarized", "Unpolarized", "Circularly polarized"],
        "correctAnswer": 1,
        "explanation": "At Brewster's angle, while the reflected ray is completely polarized, the refracted ray contains all of the parallel-vibration component and most of the perpendicular-vibration component, so it is partially polarized."
    })
    # 14
    questions.append({
        "question": "If unpolarized light is incident at Brewster's angle on a glass plate of refractive index $n$, the angle of refraction $r$ is:",
        "options": ["$90^\\circ - n$", "$90^\\circ - i_p$", "$i_p$", "$180^\\circ - 2i_p$"],
        "correctAnswer": 1,
        "explanation": "Since $i_p + r = 90^\\circ$, the angle of refraction is $r = 90^\\circ - i_p$."
    })
    # 15
    questions.append({
        "question": "A pile of glass plates is used to produce completely polarized light by:",
        "options": ["Successive reflections and refractions at Brewster's angle", "Total internal reflection", "Selective absorption (dichroism)", "Scattering"],
        "correctAnswer": 0,
        "explanation": "A pile of plates enhances the degree of polarization of the transmitted beam by repeated reflections at the Brewster angle, removing the perpendicular component incrementally."
    })
    # 16
    questions.append({
        "question": "A ray of light is incident on the surface of a transparent medium at an angle of $45^\\circ$ and the reflected ray is found to be completely plane polarized. What is the refractive index of the medium?",
        "options": ["$1.0$", "$1.414$", "$1.732$", "$1.5$"],
        "correctAnswer": 0,
        "explanation": "$\\tan i_p = \\mu \\implies \\mu = \\tan 45^\\circ = 1.0$."
    })
    # 17
    questions.append({
        "question": "Unpolarized light of intensity $32\\text{ W/m}^2$ passes through three polarizers such that the pass axis of the second is at $30^\\circ$ to the first, and that of the third is at $60^\\circ$ to the second. The transmitted intensity is:",
        "options": ["$3\\text{ W/m}^2$", "$6\\text{ W/m}^2$", "$9\\text{ W/m}^2$", "$12\\text{ W/m}^2$"],
        "correctAnswer": 0,
        "explanation": "After 1st: $I_1 = 32 / 2 = 16\\text{ W/m}^2$.\nAfter 2nd: $I_2 = I_1 \\cos^2(30^\\circ) = 16 \\times (3/4) = 12\\text{ W/m}^2$.\nAfter 3rd: $I_3 = I_2 \\cos^2(60^\\circ) = 12 \\times (1/4) = 3\\text{ W/m}^2$."
    })
    # 18
    questions.append({
        "question": "Polarization by scattering causes the blue light of the sky viewed at $90^\\circ$ to the direction of the sun rays to be:",
        "options": ["Unpolarized", "Completely linearly polarized", "Circularly polarized", "Elliptically polarized"],
        "correctAnswer": 1,
        "explanation": "Light scattered at $90^\\circ$ to the incident sunlight by atmospheric air molecules is completely linearly polarized perpendicular to the scattering plane."
    })
    # 19
    questions.append({
        "question": "Sun glasses made of polaroid sheets are effective in reducing glare from horizontal surfaces like water and wet roads because:",
        "options": ["Reflected glare is mostly horizontally polarized, and the glasses have vertical transmission axes", "Reflected glare is vertically polarized", "They absorb light of all polarizations equally", "They scatter harmful ultraviolet light"],
        "correctAnswer": 0,
        "explanation": "Glare from flat horizontal surfaces (water, roads) is predominantly horizontally polarized. Polarizing sunglasses have vertical transmission axes, completely blocking the horizontal glare."
    })
    # 20
    questions.append({
        "question": "When an unpolarized light beam is incident on a calcite crystal, it splits into two refracted rays named Ordinary ($O$) and Extraordinary ($E$) rays. Which of the following statements is true?",
        "options": ["$O$-ray obeys Snell's law, while $E$-ray does not in general", "Both rays obey Snell's law in all directions", "Neither ray is polarized", "The $O$-ray has speed that depends on direction in the crystal"],
        "correctAnswer": 0,
        "explanation": "In double refraction (birefringence), the ordinary ($O$) ray has a spherical wave surface and obeys Snell's law with constant refractive index $\\mu_o$, while the extraordinary ($E$) ray has an ellipsoidal wave surface and direction-dependent speed."
    })
    # 21
    questions.append({
        "question": "A Nicol prism is an optical device used for producing and analyzing plane-polarized light. It is based on the phenomenon of:",
        "options": ["Polarization by scattering", "Total internal reflection of the ordinary ray at a Canada balsam layer", "Selective absorption (dichroism)", "Brewster's angle reflection"],
        "correctAnswer": 1,
        "explanation": "A Nicol prism is cut from calcite and glued with Canada balsam ($\\mu = 1.55$). The ordinary ray ($\\mu_o = 1.658$) undergoes total internal reflection at the balsam layer and is absorbed, while the extraordinary ray ($\\mu_e = 1.486$) is transmitted."
    })
    # 22
    questions.append({
        "question": "The angle of incidence at which reflected light from a diamond surface (refractive index $\\mu = 2.42$) is completely linearly polarized is:",
        "options": ["$67.5^\\circ$", "$24.4^\\circ$", "$45.0^\\circ$", "$70.2^\\circ$"],
        "correctAnswer": 0,
        "explanation": "$\\tan i_p = 2.42 \\implies i_p = \\tan^{-1}(2.42) \\approx 67.55^\\circ$."
    })
    # 23
    questions.append({
        "question": "An unpolarized beam of light of intensity $I_0$ passes through two polaroids with axes making an angle $\\theta$. If the emerging intensity is $I_0/4$, what is $\\theta$?",
        "options": ["$30^\\circ$", "$60^\\circ$", "$45^\\circ$", "$90^\\circ$"],
        "correctAnswer": 2,
        "explanation": "$I = \\frac{I_0}{2}\\cos^2\\theta = \\frac{I_0}{4} \\implies \\cos^2\\theta = \\frac{1}{2} \\implies \\cos\\theta = \\frac{1}{\\sqrt{2}} \\implies \\theta = 45^\\circ$."
    })
    # 24
    questions.append({
        "question": "A linearly polarized light beam has its electric field oscillating along the $y$-axis. The light is propagating along the $+z$-axis. The magnetic field $\\vec{B}$ oscillates along:",
        "options": ["$+y$-axis", "$-z$-axis", "Along the $x$-axis", "At $45^\\circ$ to the $x$-axis"],
        "correctAnswer": 2,
        "explanation": "For an electromagnetic wave, the direction of propagation is along $\\vec{E} \\times \\vec{B}$. Since propagation is $+z$ and $\\vec{E}$ is along $+y$, $\\vec{B}$ must be along the $x$-axis (since $\\hat{j} \\times \\hat{i} = -\\hat{k}$, so specifically along $-\\hat{i}$, i.e., along the $x$-axis)."
    })
    # 25
    questions.append({
        "question": "Can sound waves in air be polarized?",
        "options": ["Yes, using a fine acoustic grating", "No, because sound waves in air are longitudinal", "Yes, by reflection from a smooth surface", "Yes, at supersonic speeds"],
        "correctAnswer": 1,
        "explanation": "Sound waves in gases/liquids are longitudinal waves (vibrations are parallel to propagation). Polarization requires transverse vibrations and cannot occur in longitudinal waves."
    })
    # 26
    questions.append({
        "question": "If the angle of incidence on a medium is equal to its polarizing angle $i_p$, the refractive index of the medium is related to the critical angle $\\theta_c$ by:",
        "options": ["$\\tan i_p = \\sin\\theta_c$", "$\\tan i_p = \\frac{1}{\\sin\\theta_c}$", "$\\sin i_p = \\tan\\theta_c$", "$\\cot i_p = \\sin\\theta_c$"],
        "correctAnswer": 1,
        "explanation": "$\\tan i_p = \\mu$ and $\\mu = \\frac{1}{\\sin\\theta_c}$, therefore $\\tan i_p = \\frac{1}{\\sin\\theta_c}$."
    })
    # 27
    questions.append({
        "question": "The polarizing angle for a certain medium is $60^\\circ$. What is the critical angle for total internal reflection for that medium?",
        "options": ["$\\sin^{-1}(1/\\sqrt{3})$", "$\\sin^{-1}(\\sqrt{3}/2)$", "$45^\\circ$", "$30^\\circ$"],
        "correctAnswer": 0,
        "explanation": "$\\mu = \\tan 60^\\circ = \\sqrt{3}$.\nCritical angle $\\theta_c = \\sin^{-1}(1/\\mu) = \\sin^{-1}(1/\\sqrt{3})$."
    })
    # 28
    questions.append({
        "question": "A beam of light is incident on a liquid of refractive index $\\mu$ from air at the polarizing angle $i_p$. If the critical angle for the liquid-air interface is $45^\\circ$, then $i_p$ is:",
        "options": ["$\\tan^{-1}(1/\\sqrt{2})$", "$\\tan^{-1}(\\sqrt{2})$", "$45^\\circ$", "$60^\\circ$"],
        "correctAnswer": 1,
        "explanation": "$\\sin\\theta_c = \\frac{1}{\\mu} \\implies \\frac{1}{\\mu} = \\sin 45^\\circ = \\frac{1}{\\sqrt{2}} \\implies \\mu = \\sqrt{2}$.\nBrewster angle $i_p = \\tan^{-1}(\\mu) = \\tan^{-1}(\\sqrt{2})$."
    })
    # 29
    questions.append({
        "question": "If $I_0$ is the intensity of unpolarized light incident on a pair of crossed polaroids ($90^\\circ$ between them), the transmitted intensity is:",
        "options": ["$I_0/2$", "$I_0/4$", "Zero", "$I_0$"],
        "correctAnswer": 2,
        "explanation": "For crossed polaroids, $\\theta = 90^\\circ$, so $I = \\frac{I_0}{2} \\cos^2(90^\\circ) = 0$."
    })
    # 30
    questions.append({
        "question": "Dichroic crystals like tourmaline exhibit selective absorption, which means:",
        "options": ["They absorb all light completely", "They transmit one linear polarization component while strongly absorbing the perpendicular component", "They reflect both components equally", "They rotate the plane of polarization without absorption"],
        "correctAnswer": 1,
        "explanation": "Dichroism is the property where a crystal selectively absorbs light vibrations in one specific plane much more strongly than vibrations in the perpendicular plane, leaving the transmitted light linearly polarized."
    })
    # 31
    questions.append({
        "question": "Light incident on a glass plate at an angle of $57^\\circ$ is reflected as completely plane-polarized light. What is the angle of refraction inside the glass?",
        "options": ["$43^\\circ$", "$33^\\circ$", "$57^\\circ$", "$24^\\circ$"],
        "correctAnswer": 1,
        "explanation": "Since reflection is at Brewster angle, $i_p + r = 90^\\circ \\implies r = 90^\\circ - 57^\\circ = 33^\\circ$."
    })
    # 32
    questions.append({
        "question": "If an analyzer is rotated through $90^\\circ$ starting from the position of maximum transmission of linearly polarized light, the intensity transmitted:",
        "options": ["Increases to twice the original value", "Decreases to half", "Drops to zero", "Remains constant"],
        "correctAnswer": 2,
        "explanation": "From Malus's law, $I = I_0 \\cos^2(90^\\circ) = 0$."
    })
    # 33
    questions.append({
        "question": "When unpolarized light of intensity $I_0$ passes through a polarizer and then an analyzer whose transmission axis is at an angle $\\theta$ to the polarizer, the intensity of transmitted light is:",
        "options": ["$\\frac{1}{2}I_0 \\cos^2\\theta$", "$I_0 \\cos^2\\theta$", "$\\frac{1}{2}I_0 \\cos\\theta$", "$\\frac{1}{4}I_0 \\cos^2\\theta$"],
        "correctAnswer": 0,
        "explanation": "After the first polarizer, intensity is $I_1 = I_0/2$. After the analyzer at angle $\\theta$, intensity is $I = I_1 \\cos^2\\theta = \\frac{1}{2}I_0 \\cos^2\\theta$."
    })
    # 34
    questions.append({
        "question": "A ray of light traveling in a medium of refractive index $\\mu_1$ strikes the surface of a medium of refractive index $\\mu_2$ at the polarizing angle $i_p$. Brewster's condition is:",
        "options": ["$\\tan i_p = \\frac{\\mu_1}{\\mu_2}$", "$\\tan i_p = \\frac{\\mu_2}{\\mu_1}$", "$\\sin i_p = \\frac{\\mu_2}{\\mu_1}$", "$\\cos i_p = \\frac{\\mu_2}{\\mu_1}$"],
        "correctAnswer": 1,
        "explanation": "By Snell's law: $\\mu_1 \\sin i_p = \\mu_2 \\sin r = \\mu_2 \\cos i_p \\implies \\tan i_p = \\frac{\\mu_2}{\\mu_1}$."
    })
    # 35
    questions.append({
        "question": "What is the Brewster angle for light traveling from glass ($\\mu = 1.5$) to air?",
        "options": ["$\\tan^{-1}(1.5) \\approx 56.3^\\circ$", "$\\tan^{-1}(1/1.5) \\approx 33.7^\\circ$", "$\\sin^{-1}(1/1.5) \\approx 41.8^\\circ$", "$45^\\circ$"],
        "correctAnswer": 1,
        "explanation": "Here light goes from glass ($\mu_1 = 1.5$) to air ($\mu_2 = 1.0$). Therefore $\\tan i_p = \\frac{\\mu_2}{\\mu_1} = \\frac{1}{1.5} = \\frac{2}{3} \\implies i_p = \\tan^{-1}(2/3) \\approx 33.7^\\circ$."
    })
    # 36
    questions.append({
        "question": "Two polaroids are set with their axes crossed at $90^\\circ$. If a third polaroid is placed between them with its axis oriented at an angle $\\theta$ to the first polaroid, the transmitted intensity for incident unpolarized light of intensity $I_0$ is:",
        "options": ["$\\frac{I_0}{8}\\sin^2(2\\theta)$", "$\\frac{I_0}{4}\\sin^2(2\\theta)$", "$\\frac{I_0}{8}\\cos^2(2\\theta)$", "$\\frac{I_0}{2}\\sin^2\\theta$"],
        "correctAnswer": 0,
        "explanation": "$I_1 = I_0/2$.\n$I_2 = I_1 \\cos^2\\theta$.\n$I_3 = I_2 \\cos^2(90^\\circ - \\theta) = I_2 \\sin^2\\theta = \\frac{I_0}{2}\\cos^2\\theta\\sin^2\\theta = \\frac{I_0}{8}(2\\sin\\theta\\cos\\theta)^2 = \\frac{I_0}{8}\\sin^2(2\\theta)$."
    })
    # 37
    questions.append({
        "question": "The maximum transmission of the three-polaroid system in the previous question occurs when $\\theta$ is:",
        "options": ["$0^\\circ$", "$30^\\circ$", "$45^\\circ$", "$60^\\circ$"],
        "correctAnswer": 2,
        "explanation": "Since $I = \\frac{I_0}{8}\\sin^2(2\\theta)$, the maximum occurs when $\\sin(2\\theta) = 1 \\implies 2\\theta = 90^\\circ \\implies \\theta = 45^\\circ$, giving $I_{\\max} = I_0/8$."
    })
    # 38
    questions.append({
        "question": "When an unpolarized light beam reflects at the Brewster angle from a glass plate, the electric field vector of the reflected wave vibrates:",
        "options": ["Parallel to the surface and perpendicular to the plane of incidence", "In the plane of incidence", "At $45^\\circ$ to the surface", "Along the direction of propagation"],
        "correctAnswer": 0,
        "explanation": "The reflected wave has electric field vectors vibrating perpendicular to the plane of incidence (parallel to the reflecting surface boundary)."
    })
    # 39
    questions.append({
        "question": "An optically active substance has the property of:",
        "options": ["Absorbing light of all wavelengths", "Rotating the plane of polarization of linearly polarized light", "Converting unpolarized light into circularly polarized light", "Reflecting light without loss of intensity"],
        "correctAnswer": 1,
        "explanation": "Optical activity is the ability of chiral substances (such as sugar solution or quartz) to rotate the plane of vibration of linearly polarized light passing through them."
    })
    # 40
    questions.append({
        "question": "A 10% sugar solution in a tube of length $20\\text{ cm}$ produces an optical rotation of $+13^\\circ$. The specific rotation of the sugar is:",
        "options": ["$+65^\\circ\\text{ dm}^{-1}(\\text{g/cm}^3)^{-1}$", "$+130^\\circ\\text{ dm}^{-1}(\\text{g/cm}^3)^{-1}$", "$+26^\\circ\\text{ dm}^{-1}(\\text{g/cm}^3)^{-1}$", "$+52^\\circ\\text{ dm}^{-1}(\\text{g/cm}^3)^{-1}$"],
        "correctAnswer": 0,
        "explanation": "Specific rotation $[\\alpha] = \\frac{\\theta}{l \\times c}$ where $l$ is in decimeters ($20\\text{ cm} = 2\\text{ dm}$) and concentration $c = 10\\text{ g}/100\\text{ cm}^3 = 0.1\\text{ g/cm}^3$.\n$[\\alpha] = \\frac{13}{2 \\times 0.1} = \\frac{13}{0.2} = +65^\\circ$."
    })
    # 41
    questions.append({
        "question": "When unpolarized light of intensity $I_0$ passes through a sheet of Polaroid, what percentage of the incident light energy is ideally transmitted?",
        "options": ["100%", "75%", "50%", "25%"],
        "correctAnswer": 2,
        "explanation": "An ideal polaroid transmits exactly half the intensity of unpolarized light: $I = I_0/2 = 50\\%$."
    })
    # 42
    questions.append({
        "question": "A polaroid sheet is placed in front of a beam of light. As the polaroid is rotated, the transmitted intensity remains completely constant. What can be concluded about the beam?",
        "options": ["It is linearly polarized", "It is partially polarized", "It is either unpolarized or circularly polarized", "It is elliptically polarized"],
        "correctAnswer": 2,
        "explanation": "Both unpolarized light and circularly polarized light show constant intensity when viewed through a rotating linear polarizer."
    })
    # 43
    questions.append({
        "question": "If the angle of incidence is Brewster's angle, the reflection coefficient for the parallel component (p-polarization) of electric field is:",
        "options": ["1", "0", "0.5", "$\\sqrt{2}$"],
        "correctAnswer": 1,
        "explanation": "At Brewster's angle, the parallel component is completely transmitted into the medium with zero reflection, so its reflection coefficient is zero."
    })
    # 44
    questions.append({
        "question": "In a liquid of refractive index $1.732$ ($\\sqrt{3}$), light is incident at $60^\\circ$ on an air bubble inside the liquid. Will the reflected ray be polarized by Brewster's law?",
        "options": ["Yes, because $\\tan 60^\\circ = \\sqrt{3}$", "No, because the Brewster angle for going from liquid to air is $\\tan^{-1}(1/\\sqrt{3}) = 30^\\circ$, not $60^\\circ$", "Yes, polarization occurs at all angles", "No, because total internal reflection occurs at this angle"],
        "correctAnswer": 1,
        "explanation": "From liquid to air, Brewster angle is $\\tan i_p = \\frac{1}{\\sqrt{3}} \\implies i_p = 30^\\circ$. Also, the critical angle is $\\sin\\theta_c = 1/\\sqrt{3} \\approx 35.3^\\circ$. Since $60^\\circ > 35.3^\\circ$, total internal reflection occurs!"
    })
    # 45
    questions.append({
        "question": "Which of the following creates linearly polarized light by selective absorption?",
        "options": ["Brewster reflection", "Tourmaline crystal and Polaroid sheet", "Rayleigh scattering", "Birefringent calcite crystal with Canada balsam"],
        "correctAnswer": 1,
        "explanation": "Dichroic crystals like tourmaline and synthetic sheets like Polaroid produce plane-polarized light through selective absorption (dichroism)."
    })

    return questions


def format_and_balance(raw_questions, subtopic):
    formatted = []
    for i, q in enumerate(raw_questions):
        target_idx = i % 4
        orig_opts = list(q["options"])
        orig_correct = q["correctAnswer"]
        correct_text = orig_opts[orig_correct]
        other_opts = [opt for j, opt in enumerate(orig_opts) if j != orig_correct]
        
        new_opts = []
        other_ptr = 0
        for pos in range(4):
            if pos == target_idx:
                new_opts.append(correct_text)
            else:
                new_opts.append(other_opts[other_ptr])
                other_ptr += 1
        
        formatted.append({
            "question": q["question"],
            "options": new_opts,
            "correctAnswer": target_idx,
            "explanation": q["explanation"],
            "difficulty": "Medium",
            "chapter": "Optics",
            "subTopic": subtopic,
            "marks": 4,
            "negativeMarks": 1,
            "type": "MCQ"
        })
    return formatted

def main():
    ydse_raw = create_ydse_questions()
    diffraction_raw = create_diffraction_questions()
    polarization_raw = create_polarization_questions()

    ydse = format_and_balance(ydse_raw, "Young's double-slit experiment")
    diffraction = format_and_balance(diffraction_raw, "Diffraction")
    polarization = format_and_balance(polarization_raw, "Polarization of light (Brewster's law)")

    print(f"YDSE: {len(ydse)} questions")
    print(f"Diffraction: {len(diffraction)} questions")
    print(f"Polarization: {len(polarization)} questions")

    batch3 = ydse + diffraction + polarization

    out_path = "/Users/laxmikumari/Desktop/web/project going on /testseries/scripts/optics/optics_batch3.json"
    with open(out_path, "w", encoding="utf-8") as f:
        json.dump(batch3, f, indent=2)

    print(f"Generated {len(batch3)} MCQs for batch 3 saved to {out_path}")

if __name__ == "__main__":
    main()
