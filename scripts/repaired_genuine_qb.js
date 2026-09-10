// Repairs for genuine Question Bank questions in 3D Geometry
module.exports = {
  // Repair for 6a98e98b910bb37b0e55882a (Direction cosines and ratios)
  "6a98e98b910bb37b0e55882a": {
    question: "If a line makes an angle of $60^\\circ$ with each of the positive $x$ and $y$ axes, what is the angle it makes with the positive $z$-axis?",
    options: [
      "$30^\\circ$",
      "$45^\\circ$",
      "$60^\\circ$",
      "$90^\\circ$"
    ],
    correctAnswer: 1,
    explanation: "Let the direction angles be $\\alpha = 60^\\circ$, $\\beta = 60^\\circ$, and $\\gamma$. Since $\\cos^2\\alpha + \\cos^2\\beta + \\cos^2\\gamma = 1$, we have: $$\\cos^2 60^\\circ + \\cos^2 60^\\circ + \\cos^2\\gamma = 1 \\implies \\left(\\frac{1}{2}\\right)^2 + \\left(\\frac{1}{2}\\right)^2 + \\cos^2\\gamma = 1 \\implies \\frac{1}{4} + \\frac{1}{4} + \\cos^2\\gamma = 1 \\implies \\cos^2\\gamma = \\frac{1}{2}$$. Since the line makes an angle with the positive $z$-axis, $\\cos\\gamma = \\frac{1}{\\sqrt{2}} \\implies \\gamma = 45^\\circ$."
  },

  // Repair for 6a98e98b910bb37b0e558827 (Direction cosines and ratios)
  "6a98e98b910bb37b0e558827": {
    question: "Find the direction cosines of the line joining the points $A(1, 2, 3)$ and $B(4, 5, 6)$.",
    options: [
      "$(\\frac{1}{3}, \\frac{1}{3}, \\frac{1}{3})$",
      "$(\\frac{1}{\\sqrt{3}}, \\frac{1}{\\sqrt{3}}, \\frac{1}{\\sqrt{3}})$",
      "$(\\frac{3}{\\sqrt{3}}, \\frac{3}{\\sqrt{3}}, \\frac{3}{\\sqrt{3}})$",
      "$(\\frac{1}{27}, \\frac{1}{27}, \\frac{1}{27})$"
    ],
    correctAnswer: 1,
    explanation: "The direction ratios of the line segment joining $A(1, 2, 3)$ and $B(4, 5, 6)$ are $(4-1, 5-2, 6-3) = (3, 3, 3)$. The magnitude is $\\sqrt{3^2 + 3^2 + 3^2} = \\sqrt{27} = 3\\sqrt{3}$. Dividing each direction ratio by the magnitude gives the direction cosines: $l = \\frac{3}{3\\sqrt{3}} = \\frac{1}{\\sqrt{3}}$, $m = \\frac{1}{\\sqrt{3}}$, $n = \\frac{1}{\\sqrt{3}}$. Thus, the direction cosines are $(\\frac{1}{\\sqrt{3}}, \\frac{1}{\\sqrt{3}}, \\frac{1}{\\sqrt{3}})$."
  },

  // Repair for 6a98e993910bb37b0e55883c (Vector and Cartesian equations of lines)
  "6a98e993910bb37b0e55883c": {
    question: "The Cartesian equation of the line passing through the point $P(2, -1, 3)$ and parallel to the vector $3\\hat{i} - 2\\hat{j} + 5\\hat{k}$ is:",
    options: [
      "$\\frac{x-2}{3} = \\frac{y+1}{-2} = \\frac{z-3}{5}$",
      "$\\frac{x+2}{3} = \\frac{y-1}{-2} = \\frac{z+3}{5}$",
      "$\\frac{x-3}{2} = \\frac{y+2}{-1} = \\frac{z-5}{3}$",
      "$\\frac{x-2}{5} = \\frac{y+1}{-2} = \\frac{z-3}{3}$"
    ],
    correctAnswer: 0,
    explanation: "The symmetric Cartesian form of a line passing through $(x_1, y_1, z_1)$ with direction vector $(a, b, c)$ is $\\frac{x - x_1}{a} = \\frac{y - y_1}{b} = \\frac{z - z_1}{c}$. Here $(x_1, y_1, z_1) = (2, -1, 3)$ and $(a, b, c) = (3, -2, 5)$. Substituting gives $\\frac{x-2}{3} = \\frac{y+1}{-2} = \\frac{z-3}{5}$."
  },

  // Repair for 6a98e993910bb37b0e55883f (Vector and Cartesian equations of lines)
  "6a98e993910bb37b0e55883f": {
    question: "The vector equation of a line passing through the point $(1, -1, 2)$ and parallel to the line $\\frac{x-3}{2} = \\frac{y-1}{-3} = \\frac{z+2}{4}$ is:",
    options: [
      "$\\vec{r} = (\\hat{i} - \\hat{j} + 2\\hat{k}) + \\lambda(2\\hat{i} - 3\\hat{j} + 4\\hat{k})$",
      "$\\vec{r} = (2\\hat{i} - 3\\hat{j} + 4\\hat{k}) + \\lambda(\\hat{i} - \\hat{j} + 2\\hat{k})$",
      "$\\vec{r} = (\\hat{i} + \\hat{j} - 2\\hat{k}) + \\lambda(2\\hat{i} + 3\\hat{j} + 4\\hat{k})$",
      "$\\vec{r} = (3\\hat{i} + \\hat{j} - 2\\hat{k}) + \\lambda(\\hat{i} - \\hat{j} + 2\\hat{k})$"
    ],
    correctAnswer: 0,
    explanation: "The direction ratios of the given line are $(2, -3, 4)$, so the line is parallel to the vector $\\vec{b} = 2\\hat{i} - 3\\hat{j} + 4\\hat{k}$. Since it passes through $(1, -1, 2)$, its position vector is $\\vec{a} = \\hat{i} - \\hat{j} + 2\\hat{k}$. Thus, the vector equation is $\\vec{r} = \\vec{a} + \\lambda\\vec{b} = (\\hat{i} - \\hat{j} + 2\\hat{k}) + \\lambda(2\\hat{i} - 3\\hat{j} + 4\\hat{k})$."
  },

  // Repair for 6a98e993910bb37b0e558839 (Vector and Cartesian equations of lines)
  "6a98e993910bb37b0e558839": {
    question: "The distance of the point $P(2, -3, 2)$ from the line $\\frac{x-2}{1} = \\frac{y+3}{2} = \\frac{z+1}{2}$ is:",
    options: [
      "$\\sqrt{5}$",
      "$5$",
      "$\\sqrt{3}$",
      "$2$"
    ],
    correctAnswer: 0,
    explanation: "Let $A(2, -3, -1)$ be a point on the line with direction vector $\\vec{b} = \\hat{i} + 2\\hat{j} + 2\\hat{k}$. The vector $\\vec{AP} = (2-2)\\hat{i} + (-3 - (-3))\\hat{j} + (2 - (-1))\\hat{k} = 3\\hat{k}$. The projection of $\\vec{AP}$ onto the line is: $$p = \\frac{\\vec{AP} \\cdot \\vec{b}}{|\\vec{b}|} = \\frac{3(2)}{\\sqrt{1^2 + 2^2 + 2^2}} = \\frac{6}{3} = 2$$. By Pythagoras theorem, the perpendicular distance is $d = \\sqrt{|\\vec{AP}|^2 - p^2} = \\sqrt{3^2 - 2^2} = \\sqrt{9 - 4} = \\sqrt{5}$."
  },

  // Repair for 6a98e993910bb37b0e558840 (Vector and Cartesian equations of lines)
  "6a98e993910bb37b0e558840": {
    question: "The coordinates of the foot of the perpendicular drawn from the point $P(1, 2, 3)$ to the line $\\frac{x-6}{3} = \\frac{y-7}{2} = \\frac{z-7}{-2}$ are:",
    options: [
      "$(3, 5, 9)$",
      "$(6, 7, 7)$",
      "$(0, 3, 11)$",
      "$(3, 4, 8)$"
    ],
    correctAnswer: 0,
    explanation: "Any point on the line is $F(3\\lambda + 6, 2\\lambda + 7, -2\\lambda + 7)$. The vector $\\vec{PF} = (3\\lambda + 5)\\hat{i} + (2\\lambda + 5)\\hat{j} + (-2\\lambda + 4)\\hat{k}$. Since $\\vec{PF}$ is perpendicular to $\\vec{b} = 3\\hat{i} + 2\\hat{j} - 2\\hat{k}$: $$3(3\\lambda + 5) + 2(2\\lambda + 5) - 2(-2\\lambda + 4) = 0 \\implies 9\\lambda + 15 + 4\\lambda + 10 + 4\\lambda - 8 = 0 \\implies 17\\lambda + 17 = 0 \\implies \\lambda = -1$$. Substituting $\\lambda = -1$ into $F$ gives $F(3(-1)+6, 2(-1)+7, -2(-1)+7) = (3, 5, 9)$."
  },

  // Repair for 6a98e993910bb37b0e55883a (Vector and Cartesian equations of lines)
  "6a98e993910bb37b0e55883a": {
    question: "The image of the point $P(1, 2, 3)$ in the line $\\frac{x-6}{3} = \\frac{y-7}{2} = \\frac{z-7}{-2}$ is:",
    options: [
      "$(5, 8, 15)$",
      "$(3, 5, 9)$",
      "$(4, 6, 12)$",
      "$(5, 7, 13)$"
    ],
    correctAnswer: 0,
    explanation: "The foot of the perpendicular from $P(1, 2, 3)$ to the line is $F(3, 5, 9)$. Since $F$ is the midpoint of $P$ and its image $P'(x', y', z')$: $$\\frac{x' + 1}{2} = 3 \\implies x' = 5, \\quad \\frac{y' + 2}{2} = 5 \\implies y' = 8, \\quad \\frac{z' + 3}{2} = 9 \\implies z' = 15$$. Thus, the image is $(5, 8, 15)$."
  },

  // Repair for 6a98e993910bb37b0e55883d (Vector and Cartesian equations of lines)
  "6a98e993910bb37b0e55883d": {
    question: "The vector equation of the line passing through the point with position vector $2\\hat{i} + 3\\hat{j} - \\hat{k}$ and parallel to the vector $\\hat{i} - 2\\hat{j} + 3\\hat{k}$ is:",
    options: [
      "$\\vec{r} = (2\\hat{i} + 3\\hat{j} - \\hat{k}) + \\lambda(\\hat{i} - 2\\hat{j} + 3\\hat{k})$",
      "$\\vec{r} = (\\hat{i} - 2\\hat{j} + 3\\hat{k}) + \\lambda(2\\hat{i} + 3\\hat{j} - \\hat{k})$",
      "$\\vec{r} = (2\\hat{i} - 3\\hat{j} + \\hat{k}) + \\lambda(\\hat{i} + 2\\hat{j} - 3\\hat{k})$",
      "$\\vec{r} = (3\\hat{i} + \\hat{j} + 2\\hat{k}) + \\lambda(\\hat{i} - 2\\hat{j} + 3\\hat{k})$"
    ],
    correctAnswer: 0,
    explanation: "The vector equation of a line passing through a point with position vector $\\vec{a}$ and parallel to a vector $\\vec{b}$ is given by $\\vec{r} = \\vec{a} + \\lambda \\vec{b}$. Here $\\vec{a} = 2\\hat{i} + 3\\hat{j} - \\hat{k}$ and $\\vec{b} = \\hat{i} - 2\\hat{j} + 3\\hat{k}$. Thus, the vector equation is $\\vec{r} = (2\\hat{i} + 3\\hat{j} - \\hat{k}) + \\lambda(\\hat{i} - 2\\hat{j} + 3\\hat{k})$."
  },

  // Repair for 6a98e993910bb37b0e558837 (Vector and Cartesian equations of lines)
  "6a98e993910bb37b0e558837": {
    question: "If the lines $\\frac{x-1}{2} = \\frac{y-2}{3} = \\frac{z-3}{4}$ and $\\frac{x-2}{1} = \\frac{y-3}{2} = \\frac{z-4}{k}$ are coplanar, then the value of $k$ is:",
    options: [
      "$3$",
      "$2$",
      "$1$",
      "$4$"
    ],
    correctAnswer: 0,
    explanation: "The condition for coplanarity of two lines is: $$\\begin{vmatrix} x_2 - x_1 & y_2 - y_1 & z_2 - z_1 \\\\ a_1 & b_1 & c_1 \\\\ a_2 & b_2 & c_2 \\end{vmatrix} = 0$$. Here $(x_2 - x_1, y_2 - y_1, z_2 - z_1) = (2-1, 3-2, 4-3) = (1, 1, 1)$. Thus: $$\\begin{vmatrix} 1 & 1 & 1 \\\\ 2 & 3 & 4 \\\\ 1 & 2 & k \\end{vmatrix} = 0$$. Expanding along row 1: $$1(3k - 8) - 1(2k - 4) + 1(4 - 3) = 0 \\implies 3k - 8 - 2k + 4 + 1 = 0 \\implies k - 3 = 0 \\implies k = 3$$."
  },

  // Repair for 6a98e993910bb37b0e55883b (Vector and Cartesian equations of lines)
  "6a98e993910bb37b0e55883b": {
    question: "The point of intersection of the line $\\frac{x-1}{1} = \\frac{y-1}{2} = \\frac{z-2}{4}$ and the plane $x + y + z = 11$ is:",
    options: [
      "$(2, 3, 6)$",
      "$(1, 2, 4)$",
      "$(3, 5, 10)$",
      "$(2, 4, 5)$"
    ],
    correctAnswer: 0,
    explanation: "Any point on the line can be represented as $P(t + 1, 2t + 1, 4t + 2)$. Substituting these coordinates into the plane equation $x + y + z = 11$: $$(t + 1) + (2t + 1) + (4t + 2) = 11 \\implies 7t + 4 = 11 \\implies 7t = 7 \\implies t = 1$$. Substituting $t = 1$ gives $P(1+1, 2(1)+1, 4(1)+2) = (2, 3, 6)$."
  },

  // Repair for 6a98e993910bb37b0e55883e (Vector and Cartesian equations of lines)
  "6a98e993910bb37b0e55883e": {
    question: "The Cartesian equation of a line passing through $(1, 2, -1)$ and perpendicular to both vectors $\\vec{u} = 2\\hat{i} - \\hat{j} + \\hat{k}$ and $\\vec{v} = \\hat{i} + 3\\hat{j} - 2\\hat{k}$ is:",
    options: [
      "$\\frac{x-1}{-1} = \\frac{y-2}{5} = \\frac{z+1}{7}$",
      "$\\frac{x+1}{-1} = \\frac{y+2}{5} = \\frac{z-1}{7}$",
      "$\\frac{x-1}{1} = \\frac{y-2}{-5} = \\frac{z+1}{7}$",
      "$\\frac{x-1}{2} = \\frac{y-2}{1} = \\frac{z+1}{-2}$"
    ],
    correctAnswer: 0,
    explanation: "The direction vector of the line is $\\vec{b} = \\vec{u} \\times \\vec{v}$: $$\\vec{b} = \\begin{vmatrix} \\hat{i} & \\hat{j} & \\hat{k} \\\\ 2 & -1 & 1 \\\\ 1 & 3 & -2 \\end{vmatrix} = \\hat{i}(2 - 3) - \\hat{j}(-4 - 1) + \\hat{k}(6 - (-1)) = -\\hat{i} + 5\\hat{j} + 7\\hat{k}$$. The line passes through $(1, 2, -1)$, so its Cartesian equation is $\\frac{x-1}{-1} = \\frac{y-2}{5} = \\frac{z+1}{7}$."
  },

  // Repair for 6a98e993910bb37b0e558838 (Vector and Cartesian equations of lines)
  "6a98e993910bb37b0e558838": {
    question: "The perpendicular distance of the origin from the line $\\frac{x-1}{2} = \\frac{y-2}{-1} = \\frac{z-3}{0}$ is:",
    options: [
      "$\\sqrt{14}$",
      "$\\sqrt{5}$",
      "$3$",
      "$\\sqrt{10}$"
    ],
    correctAnswer: 0,
    explanation: "Notice that the vector from the origin to $(1, 2, 3)$ is $\\vec{v} = \\hat{i} + 2\\hat{j} + 3\\hat{k}$. The direction vector of the line is $\\vec{b} = 2\\hat{i} - \\hat{j} + 0\\hat{k}$. Their dot product is $\\vec{v} \\cdot \\vec{b} = (1)(2) + (2)(-1) + (3)(0) = 2 - 2 + 0 = 0$. Since $\\vec{v}$ is perpendicular to $\\vec{b}$, the point $(1, 2, 3)$ on the line is itself the foot of the perpendicular from the origin! The perpendicular distance is simply the distance of $(1, 2, 3)$ from the origin: $d = \\sqrt{1^2 + 2^2 + 3^2} = \\sqrt{1 + 4 + 9} = \\sqrt{14}$."
  }
};
