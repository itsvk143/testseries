module.exports = [
  {
    "type": "ASSERTION_REASON",
    "question": "Assertion: The theorem of perpendicular axes ($I_z = I_x + I_y$) is applicable only to thin laminar (planar) bodies and not to three-dimensional bodies.\\nReason: For a planar lamina lying in the $xy$-plane, the $z$-coordinate of every mass element is zero, so $r^2 = x^2 + y^2$, whereas for a 3D body $r^2 = x^2 + y^2 + z^2$.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 0,
    "explanation": "By definition, $I_z = \\int (x^2 + y^2) dm$. For a two-dimensional lamina in the $xy$-plane, $I_x = \\int y^2 dm$ and $I_y = \\int x^2 dm$. Thus $I_x + I_y = \\int (x^2 + y^2) dm = I_z$. For a 3D body, $I_x = \\int (y^2 + z^2)dm$ and $I_y = \\int (x^2 + z^2)dm$, so $I_x + I_y \\neq I_z$. Both statements are true and Reason explains Assertion.",
    "marks": 4,
    "negativeMarks": 1,
    "subTopic": "Theorems of parallel and perpendicular axes",
    "chapter": "Rotational Motion",
    "subject": "Physics"
  },
  {
    "type": "ASSERTION_REASON",
    "question": "Assertion: The parallel axis theorem ($I = I_{cm} + M d^2$) cannot be used directly to relate moments of inertia about two arbitrary parallel axes if neither axis passes through the center of mass.\\nReason: The parallel axis theorem requires that one of the two parallel axes must strictly pass through the center of mass of the body.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 0,
    "explanation": "If axes $A$ and $B$ are parallel and neither is through the center of mass, $I_B \\neq I_A + M d_{AB}^2$. Instead, one must first find $I_{cm} = I_A - M d_A^2$ and then calculate $I_B = I_{cm} + M d_B^2$. Both statements are true and Reason explains Assertion.",
    "marks": 4,
    "negativeMarks": 1,
    "subTopic": "Theorems of parallel and perpendicular axes",
    "chapter": "Rotational Motion",
    "subject": "Physics"
  },
  {
    "type": "ASSERTION_REASON",
    "question": "Assertion: Among all parallel axes in a given direction, the moment of inertia of a body is minimum about the axis passing through its center of mass.\\nReason: From the parallel axis theorem $I = I_{cm} + M d^2$, since $M d^2 \\ge 0$, $I$ attains its minimum value $I_{cm}$ when the perpendicular distance $d = 0$.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 0,
    "explanation": "Because $M d^2$ is strictly positive for any non-zero displacement $d$, any axis parallel to a CM axis has a larger moment of inertia than $I_{cm}$. Hence $I_{cm}$ is the absolute minimum. Both statements are true and Reason explains Assertion.",
    "marks": 4,
    "negativeMarks": 1,
    "subTopic": "Theorems of parallel and perpendicular axes",
    "chapter": "Rotational Motion",
    "subject": "Physics"
  },
  {
    "type": "ASSERTION_REASON",
    "question": "Assertion: The moment of inertia of a uniform circular disc of mass $M$ and radius $R$ about any diameter is $\\frac{1}{4}M R^2$.\\nReason: By the perpendicular axis theorem, $I_z = I_x + I_y$, and by symmetry $I_x = I_y = I_{\\text{dia}}$, so $2 I_{\\text{dia}} = \\frac{1}{2}M R^2 \\implies I_{\\text{dia}} = \\frac{1}{4}M R^2$.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 0,
    "explanation": "For a circular disc lying in the $xy$-plane, every diameter is an axis of symmetry, making $I_x = I_y = I_{\\text{dia}}$. With $I_z = \\frac{1}{2}MR^2$, the perpendicular axis theorem gives $I_{\\text{dia}} = I_z / 2 = \\frac{1}{4}MR^2$. Both statements are true and Reason explains Assertion.",
    "marks": 4,
    "negativeMarks": 1,
    "subTopic": "Theorems of parallel and perpendicular axes",
    "chapter": "Rotational Motion",
    "subject": "Physics"
  },
  {
    "type": "ASSERTION_REASON",
    "question": "Assertion: The moment of inertia of a uniform circular disc about a tangent in the plane of the disc is $\\frac{5}{4}M R^2$.\\nReason: Applying the parallel axis theorem to the diameter axis, $I_{\\text{tangent}} = I_{\\text{dia}} + M R^2 = \\frac{1}{4}M R^2 + M R^2 = \\frac{5}{4}M R^2$.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 0,
    "explanation": "A tangent in the plane is parallel to a diameter and displaced by perpendicular distance $d = R$. Since the diameter passes through the center of mass with $I_{\\text{dia}} = \\frac{1}{4}MR^2$, $I = \\frac{1}{4}MR^2 + MR^2 = \\frac{5}{4}MR^2$. Both statements are true and Reason explains Assertion.",
    "marks": 4,
    "negativeMarks": 1,
    "subTopic": "Theorems of parallel and perpendicular axes",
    "chapter": "Rotational Motion",
    "subject": "Physics"
  },
  {
    "type": "ASSERTION_REASON",
    "question": "Assertion: The moment of inertia of a uniform circular ring of mass $M$ and radius $R$ about a tangent perpendicular to its plane is $2 M R^2$.\\nReason: The polar axis through the center has $I_{cm} = M R^2$, and by parallel axis theorem, displacing by distance $d = R$ gives $I = M R^2 + M R^2 = 2 M R^2$.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 0,
    "explanation": "The tangent perpendicular to the plane is parallel to the central symmetry axis ($I_z = MR^2$). By the parallel axis theorem, $I = I_{cm} + MR^2 = MR^2 + MR^2 = 2MR^2$. Both statements are true and Reason is the correct explanation.",
    "marks": 4,
    "negativeMarks": 1,
    "subTopic": "Theorems of parallel and perpendicular axes",
    "chapter": "Rotational Motion",
    "subject": "Physics"
  },
  {
    "type": "ASSERTION_REASON",
    "question": "Assertion: The moment of inertia of a uniform thin rod of mass $M$ and length $L$ about an axis perpendicular to its length through one end is $\\frac{1}{3}M L^2$.\\nReason: The moment of inertia about the center of mass is $I_{cm} = \\frac{1}{12}M L^2$, and the distance from the center to an end is $d = L/2$, so $I_{\\text{end}} = \\frac{1}{12}M L^2 + M(L/2)^2 = \\frac{1}{3}M L^2$.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 0,
    "explanation": "By the parallel axis theorem: $I = I_{cm} + M d^2 = \\frac{1}{12}ML^2 + M\\left(\\frac{L}{2}\\right)^2 = \\frac{1}{12}ML^2 + \\frac{1}{4}ML^2 = \\frac{1 + 3}{12}ML^2 = \\frac{1}{3}ML^2$. Both statements are true and Reason explains Assertion.",
    "marks": 4,
    "negativeMarks": 1,
    "subTopic": "Theorems of parallel and perpendicular axes",
    "chapter": "Rotational Motion",
    "subject": "Physics"
  },
  {
    "type": "ASSERTION_REASON",
    "question": "Assertion: The parallel axis theorem applies to three-dimensional objects such as spheres, cylinders, and blocks.\\nReason: The derivation of the parallel axis theorem $\\int (\\vec{r}' + \\vec{d})^2 dm = I_{cm} + M d^2$ holds for any arbitrary three-dimensional mass distribution because the cross-term $\\vec{d} \\cdot \\int \\vec{r}' dm$ vanishes identically.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 0,
    "explanation": "Unlike the perpendicular axis theorem (which requires planarity), the parallel axis theorem is completely general for all 3D bodies because $\\int \\vec{r}' dm = 0$ is the fundamental definition of the center of mass. Both statements are true and Reason explains Assertion.",
    "marks": 4,
    "negativeMarks": 1,
    "subTopic": "Theorems of parallel and perpendicular axes",
    "chapter": "Rotational Motion",
    "subject": "Physics"
  },
  {
    "type": "ASSERTION_REASON",
    "question": "Assertion: For a uniform solid sphere of mass $M$ and radius $R$, the moment of inertia about a tangent line is $\\frac{7}{5}M R^2$.\\nReason: The central diameter axis has $I_{cm} = \\frac{2}{5}M R^2$, and by parallel axis theorem, $I_{\\text{tangent}} = \\frac{2}{5}M R^2 + M R^2 = \\frac{7}{5}M R^2$.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 0,
    "explanation": "A tangent to a solid sphere is parallel to the central diameter at perpendicular distance $d = R$. Thus $I = I_{cm} + M d^2 = \\frac{2}{5}MR^2 + MR^2 = \\frac{7}{5}MR^2$. Both statements are true and Reason is the correct explanation.",
    "marks": 4,
    "negativeMarks": 1,
    "subTopic": "Theorems of parallel and perpendicular axes",
    "chapter": "Rotational Motion",
    "subject": "Physics"
  },
  {
    "type": "ASSERTION_REASON",
    "question": "Assertion: For a thin spherical shell of mass $M$ and radius $R$, the moment of inertia about a tangent is $\\frac{5}{3}M R^2$.\\nReason: The diameter axis has $I_{cm} = \\frac{2}{3}M R^2$, so by parallel axis theorem, $I_{\\text{tangent}} = \\frac{2}{3}M R^2 + M R^2 = \\frac{5}{3}M R^2$.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 0,
    "explanation": "For a thin hollow spherical shell, $I_{cm} = \\frac{2}{3}MR^2$. Applying parallel axis theorem at distance $d = R$ gives $I = \\frac{2}{3}MR^2 + MR^2 = \\frac{5}{3}MR^2$. Both statements are true and Reason explains Assertion.",
    "marks": 4,
    "negativeMarks": 1,
    "subTopic": "Theorems of parallel and perpendicular axes",
    "chapter": "Rotational Motion",
    "subject": "Physics"
  },
  {
    "type": "ASSERTION_REASON",
    "question": "Assertion: The perpendicular axis theorem cannot be applied to find the moment of inertia of a solid cylinder about its transverse central axis.\\nReason: A solid cylinder is a three-dimensional body with non-zero thickness along its longitudinal axis, violating the two-dimensional planar requirement of the perpendicular axis theorem.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 0,
    "explanation": "The perpendicular axis theorem requires $z = 0$ everywhere. Because a cylinder has mass distributed over length $L$ along the $z$-axis, $I_z \\neq I_x + I_y$. Both statements are true and Reason explains Assertion.",
    "marks": 4,
    "negativeMarks": 1,
    "subTopic": "Theorems of parallel and perpendicular axes",
    "chapter": "Rotational Motion",
    "subject": "Physics"
  },
  {
    "type": "ASSERTION_REASON",
    "question": "Assertion: For a thin rectangular plate of mass $M$ and dimensions $a \\times b$, the moment of inertia about an axis through its center perpendicular to its plate is $\\frac{1}{12}M(a^2 + b^2)$.\\nReason: In the plane of the plate, $I_x = \\frac{1}{12}M b^2$ and $I_y = \\frac{1}{12}M a^2$, so by the perpendicular axis theorem $I_z = I_x + I_y = \\frac{1}{12}M(a^2 + b^2)$.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 0,
    "explanation": "The plate acts as a 2D lamina. The axis through CM parallel to side $a$ has $I_x = \\frac{1}{12}M b^2$, and parallel to side $b$ has $I_y = \\frac{1}{12}M a^2$. Perpendicular axis theorem gives $I_z = I_x + I_y = \\frac{1}{12}M(a^2 + b^2)$. Both statements are true and Reason explains Assertion.",
    "marks": 4,
    "negativeMarks": 1,
    "subTopic": "Theorems of parallel and perpendicular axes",
    "chapter": "Rotational Motion",
    "subject": "Physics"
  },
  {
    "type": "ASSERTION_REASON",
    "question": "Assertion: The moment of inertia of a square plate of side $a$ about any in-plane axis passing through its center is $\\frac{1}{12}M a^2$.\\nReason: By symmetry, $I_x = I_y$, and rotating axes by any angle $\\theta$ gives $I_\\theta = I_x\\cos^2\\theta + I_y\\sin^2\\theta = I_x(\\cos^2\\theta + \\sin^2\\theta) = I_x = \\frac{1}{12}M a^2$.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 0,
    "explanation": "For a square lamina, $I_x = I_y = \\frac{1}{12}Ma^2$. In any 2D planar body where $I_x = I_y$, the moment of inertia about any coplanar axis inclined at angle $\\theta$ through the origin is $I_\\theta = I_x\\cos^2\\theta + I_y\\sin^2\\theta = I_x$. Both statements are true and Reason explains Assertion.",
    "marks": 4,
    "negativeMarks": 1,
    "subTopic": "Theorems of parallel and perpendicular axes",
    "chapter": "Rotational Motion",
    "subject": "Physics"
  },
  {
    "type": "ASSERTION_REASON",
    "question": "Assertion: If the radius of gyration of a body about a center of mass axis is $k_{cm}$, its radius of gyration about a parallel axis at distance $d$ is $k = \\sqrt{k_{cm}^2 + d^2}$.\\nReason: From the parallel axis theorem, $M k^2 = M k_{cm}^2 + M d^2$, which simplifies to $k^2 = k_{cm}^2 + d^2$.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 0,
    "explanation": "Dividing both sides of the parallel axis theorem $I = I_{cm} + Md^2$ by the total mass $M$ yields $k^2 = k_{cm}^2 + d^2 \\implies k = \\sqrt{k_{cm}^2 + d^2}$. Both statements are true and Reason is the correct explanation.",
    "marks": 4,
    "negativeMarks": 1,
    "subTopic": "Theorems of parallel and perpendicular axes",
    "chapter": "Rotational Motion",
    "subject": "Physics"
  },
  {
    "type": "ASSERTION_REASON",
    "question": "Assertion: The moment of inertia of a ring about a diameter is half of its moment of inertia about its central transverse axis.\\nReason: By the perpendicular axis theorem, $I_z = I_x + I_y$, and since $I_x = I_y$ by symmetry, $I_x = I_z / 2$.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 0,
    "explanation": "Because a circular ring is symmetric about all diameters, $I_x = I_y$. Applying the perpendicular axis theorem to the planar ring yields $I_z = 2I_x \\implies I_x = I_z/2 = \\frac{1}{2}MR^2$. Both statements are true and Reason explains Assertion.",
    "marks": 4,
    "negativeMarks": 1,
    "subTopic": "Theorems of parallel and perpendicular axes",
    "chapter": "Rotational Motion",
    "subject": "Physics"
  },
  {
    "type": "ASSERTION_REASON",
    "question": "Assertion: The moment of inertia of a solid cylinder of radius $R$ and length $L$ about a transverse axis passing through its center of mass is $\\frac{1}{4}M R^2 + \\frac{1}{12}M L^2$.\\nReason: Slicing the cylinder into thin circular discs of thickness $dx$ and applying the parallel axis theorem to each disc yields the combined formula.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 0,
    "explanation": "Each thin disc of mass $dm$ has diametral moment of inertia $dI = \\frac{1}{4}(dm)R^2 + (dm)x^2$. Integrating $x^2 dm$ over length $L$ gives $\\frac{1}{12}ML^2$, so total $I = \\frac{1}{4}MR^2 + \\frac{1}{12}ML^2$. Both statements are true and Reason explains Assertion.",
    "marks": 4,
    "negativeMarks": 1,
    "subTopic": "Theorems of parallel and perpendicular axes",
    "chapter": "Rotational Motion",
    "subject": "Physics"
  },
  {
    "type": "ASSERTION_REASON",
    "question": "Assertion: If the moment of inertia of a body about an axis passing through its center of mass is zero, all the mass must lie along that axis.\\nReason: Moment of inertia is defined as $\\sum m_i r_i^2$, and since mass $m_i > 0$ and $r_i^2 \\ge 0$, the sum can be zero if and only if $r_i = 0$ for every particle.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 0,
    "explanation": "Because $I = \\sum m_i r_i^2$ is a sum of non-negative terms, $I = 0$ requires every single particle to have $r_i = 0$, meaning the body is an infinitely thin mathematical line along the axis. Both statements are true and Reason explains Assertion.",
    "marks": 4,
    "negativeMarks": 1,
    "subTopic": "Theorems of parallel and perpendicular axes",
    "chapter": "Rotational Motion",
    "subject": "Physics"
  },
  {
    "type": "ASSERTION_REASON",
    "question": "Assertion: For an equilateral triangular lamina of mass $M$ and side $a$, the moment of inertia about an axis through its center perpendicular to its plane is $\\frac{1}{12}M a^2$.\\nReason: By the perpendicular axis theorem, $I_z = I_x + I_y$, and symmetry about centroidal axes yields this relation.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 1,
    "explanation": "For an equilateral triangular plate, $I_z = \\frac{1}{12}Ma^2$ is mathematically correct. However, Reason simply cites $I_z = I_x + I_y$ without explaining the integration or proportionality factor of the equilateral geometry. Both statements are true facts, but Reason does not completely explain Assertion.",
    "marks": 4,
    "negativeMarks": 1,
    "subTopic": "Theorems of parallel and perpendicular axes",
    "chapter": "Rotational Motion",
    "subject": "Physics"
  },
  {
    "type": "ASSERTION_REASON",
    "question": "Assertion: The moment of inertia of a uniform circular disc of radius $R$ about an axis tangent to the disc and perpendicular to its plane is $\\frac{3}{2}M R^2$.\\nReason: The central transverse axis has $I_{cm} = \\frac{1}{2}M R^2$, and by the parallel axis theorem, $I = \\frac{1}{2}M R^2 + M R^2 = \\frac{3}{2}M R^2$.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 0,
    "explanation": "The tangent perpendicular to the plane of the disc is parallel to the central normal axis $I_z = \\frac{1}{2}MR^2$ at distance $d = R$. By parallel axis theorem: $I = \\frac{1}{2}MR^2 + MR^2 = \\frac{3}{2}MR^2$. Both statements are true and Reason is the correct explanation.",
    "marks": 4,
    "negativeMarks": 1,
    "subTopic": "Theorems of parallel and perpendicular axes",
    "chapter": "Rotational Motion",
    "subject": "Physics"
  },
  {
    "type": "ASSERTION_REASON",
    "question": "Assertion: The moment of inertia of a hollow cylinder of mass $M$ and radius $R$ about its central longitudinal axis is $M R^2$.\\nReason: Every mass element of the thin cylindrical shell is situated at the exact same perpendicular distance $R$ from the central longitudinal axis, so $\\int r^2 dm = R^2 \\int dm = M R^2$.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 0,
    "explanation": "For a thin-walled hollow cylinder (cylindrical shell), all mass resides at radius $R$ from the axis. Thus $I = \\int R^2 dm = R^2 M$. Both statements are true and Reason explains Assertion.",
    "marks": 4,
    "negativeMarks": 1,
    "subTopic": "Theorems of parallel and perpendicular axes",
    "chapter": "Rotational Motion",
    "subject": "Physics"
  },
  {
    "type": "ASSERTION_REASON",
    "question": "Assertion: The parallel axis theorem holds true even if the center of mass lies outside the physical body.\\nReason: The derivation of $I = I_{cm} + M d^2$ relies purely on the mathematical definition $\\int \\vec{r}' dm = 0$ for the center of mass, irrespective of whether material is located at that point.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 0,
    "explanation": "For example, in a ring or hollow sphere where the center of mass is in empty space, the parallel axis theorem applies perfectly without restriction. Both statements are true and Reason explains Assertion.",
    "marks": 4,
    "negativeMarks": 1,
    "subTopic": "Theorems of parallel and perpendicular axes",
    "chapter": "Rotational Motion",
    "subject": "Physics"
  },
  {
    "type": "ASSERTION_REASON",
    "question": "Assertion: The moment of inertia of a uniform circular ring about a tangent in its own plane is $\\frac{3}{2}M R^2$.\\nReason: A diameter has $I_{\\text{dia}} = \\frac{1}{2}M R^2$, and applying the parallel axis theorem at distance $d = R$ gives $I = \\frac{1}{2}M R^2 + M R^2 = \\frac{3}{2}M R^2$.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 0,
    "explanation": "By the perpendicular axis theorem, the diametral moment of inertia is $I_{\\text{dia}} = \\frac{1}{2}MR^2$. By the parallel axis theorem, a tangent in the plane is parallel to a diameter at distance $R$, giving $I = \\frac{1}{2}MR^2 + MR^2 = \\frac{3}{2}MR^2$. Both statements are true and Reason is the correct explanation.",
    "marks": 4,
    "negativeMarks": 1,
    "subTopic": "Theorems of parallel and perpendicular axes",
    "chapter": "Rotational Motion",
    "subject": "Physics"
  },
  {
    "type": "ASSERTION_REASON",
    "question": "Assertion: If two solid spheres have identical masses and radii, but one is made of aluminum and the other of gold (with a hollow center), the hollow gold sphere has a larger moment of inertia about its diameter.\\nReason: In the hollow sphere, the mass is distributed farther from the axis of rotation, increasing the radius of gyration and moment of inertia.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 0,
    "explanation": "Moment of inertia is $I = \\int r^2 dm$. Concentrating mass near the outer periphery increases $r$ for all mass elements. A hollow sphere of the same mass and outer radius has $I = \\frac{2}{3}MR^2 > \\frac{2}{5}MR^2$. Both statements are true and Reason explains Assertion.",
    "marks": 4,
    "negativeMarks": 1,
    "subTopic": "Theorems of parallel and perpendicular axes",
    "chapter": "Rotational Motion",
    "subject": "Physics"
  },
  {
    "type": "ASSERTION_REASON",
    "question": "Assertion: The radius of gyration of a uniform disc of radius $R$ about a diameter is $\\frac{R}{2}$.\\nReason: The moment of inertia of a disc about its diameter is $I = \\frac{1}{4}M R^2$, so $M k^2 = \\frac{1}{4}M R^2 \\implies k = \\frac{R}{2}$.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 0,
    "explanation": "Setting $I = M k^2 = \\frac{1}{4}MR^2$ directly gives $k = \\sqrt{R^2/4} = R/2$. Both statements are true and Reason is the correct explanation.",
    "marks": 4,
    "negativeMarks": 1,
    "subTopic": "Theorems of parallel and perpendicular axes",
    "chapter": "Rotational Motion",
    "subject": "Physics"
  },
  {
    "type": "ASSERTION_REASON",
    "question": "Assertion: The moment of inertia of a uniform rod about an axis passing through one of its ends at angle $\\theta$ to the rod is $\\frac{1}{3}M L^2 \\sin^2\\theta$.\\nReason: The perpendicular distance of a mass element at distance $x$ from the end to the axis of rotation is $r_\\perp = x\\sin\\theta$, so $I = \\int_0^L (x\\sin\\theta)^2 \\left(\\frac{M}{L}\\right)dx = \\frac{1}{3}M L^2 \\sin^2\\theta$.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 0,
    "explanation": "Because only the perpendicular distance from the axis matters in moment of inertia, each element is at $r_\\perp = x\\sin\\theta$. Integrating yields $I = \\frac{M\\sin^2\\theta}{L}\\int_0^L x^2 dx = \\frac{1}{3}ML^2\\sin^2\\theta$. Both statements are true and Reason explains Assertion.",
    "marks": 4,
    "negativeMarks": 1,
    "subTopic": "Theorems of parallel and perpendicular axes",
    "chapter": "Rotational Motion",
    "subject": "Physics"
  },
  {
    "type": "ASSERTION_REASON",
    "question": "Assertion: If the temperature of a solid metal disc increases, its moment of inertia about its symmetry axis increases.\\nReason: Thermal expansion increases the radius of the disc ($R' = R(1 + \\alpha \\Delta T)$), shifting the mass farther from the axis of rotation.",
    "options": [
      "Both Assertion and Reason are true and Reason is the correct explanation of Assertion.",
      "Both Assertion and Reason are true but Reason is not the correct explanation of Assertion.",
      "Assertion is true but Reason is false.",
      "Assertion is false but Reason is true."
    ],
    "correctAnswer": 0,
    "explanation": "Moment of inertia is $I = \\frac{1}{2}M R^2$. Since mass $M$ is conserved and radius increases as $R' = R(1 + \\alpha \\Delta T)$, $I' = \\frac{1}{2}M R^2 (1 + 2\\alpha \\Delta T) = I(1 + 2\\alpha \\Delta T) > I$. Both statements are true and Reason explains Assertion.",
    "marks": 4,
    "negativeMarks": 1,
    "subTopic": "Theorems of parallel and perpendicular axes",
    "chapter": "Rotational Motion",
    "subject": "Physics"
  },
  {
    "type": "MCQ",
    "question": "The ratio of the moment of inertia of a uniform circular disc about a tangent in its plane to that about a tangent perpendicular to its plane is:",
    "options": [
      "$5:6$",
      "$6:5$",
      "$4:5$",
      "$3:4$"
    ],
    "correctAnswer": 0,
    "explanation": "About a tangent in its plane: $I_1 = I_{\\text{dia}} + M R^2 = \\frac{1}{4}M R^2 + M R^2 = \\frac{5}{4}M R^2$. About a tangent perpendicular to its plane: $I_2 = I_z + M R^2 = \\frac{1}{2}M R^2 + M R^2 = \\frac{3}{2}M R^2 = \\frac{6}{4}M R^2$. The ratio is $\\frac{I_1}{I_2} = \\frac{5/4}{6/4} = 5:6$.",
    "marks": 4,
    "negativeMarks": 1,
    "subTopic": "Theorems of parallel and perpendicular axes",
    "chapter": "Rotational Motion",
    "subject": "Physics"
  },
  {
    "type": "MCQ",
    "question": "The radius of gyration of a uniform thin rod of length $L$ about an axis perpendicular to its length and passing through a point located at distance $L/4$ from one of its ends is:",
    "options": [
      "$\\frac{\\sqrt{7}}{12}L$",
      "$\\frac{\\sqrt{7}}{4\\sqrt{3}}L$",
      "$\\frac{\\sqrt{13}}{12}L$",
      "$\\frac{1}{4}L$"
    ],
    "correctAnswer": 1,
    "explanation": "The center of mass is at $L/2$ from the end. The distance from the center of mass to the point $L/4$ from the end is $d = L/2 - L/4 = L/4$. By parallel axis theorem: $I = I_{cm} + M d^2 = \\frac{1}{12}M L^2 + M\\left(\\frac{L}{4}\\right)^2 = \\frac{1}{12}M L^2 + \\frac{1}{16}M L^2 = \\frac{4 + 3}{48}M L^2 = \\frac{7}{48}M L^2$. Radius of gyration is $k = \\sqrt{\\frac{7}{48}}L = \\frac{\\sqrt{7}}{\\sqrt{48}}L = \\frac{\\sqrt{7}}{4\\sqrt{3}}L$.",
    "marks": 4,
    "negativeMarks": 1,
    "subTopic": "Theorems of parallel and perpendicular axes",
    "chapter": "Rotational Motion",
    "subject": "Physics"
  },
  {
    "type": "MCQ",
    "question": "A uniform square plate of side $a$ and mass $M$ has moment of inertia $I_0$ about an axis passing through its center of mass perpendicular to the plate. What is its moment of inertia about an axis passing through one of its corners perpendicular to the plate?",
    "options": [
      "$4 I_0$",
      "$3 I_0$",
      "$2 I_0$",
      "$\\frac{5}{2} I_0$"
    ],
    "correctAnswer": 0,
    "explanation": "For a square plate, $I_0 = \\frac{1}{12}M(a^2 + a^2) = \\frac{1}{6}M a^2$. The distance from the center of mass to a corner is $d = \\frac{a}{\\sqrt{2}}$. By parallel axis theorem: $I_{\\text{corner}} = I_0 + M d^2 = \\frac{1}{6}M a^2 + M\\left(\\frac{a}{\\sqrt{2}}\\right)^2 = \\frac{1}{6}M a^2 + \\frac{1}{2}M a^2 = \\frac{4}{6}M a^2 = \\frac{2}{3}M a^2$. Since $I_0 = \\frac{1}{6}M a^2$, $I_{\\text{corner}} = 4\\left(\\frac{1}{6}M a^2\\right) = 4 I_0$.",
    "marks": 4,
    "negativeMarks": 1,
    "subTopic": "Theorems of parallel and perpendicular axes",
    "chapter": "Rotational Motion",
    "subject": "Physics"
  },
  {
    "type": "MCQ",
    "question": "Three identical thin rods, each of mass $M$ and length $L$, are joined together to form an equilateral triangle. The moment of inertia of this triangular frame about an axis passing through one of the vertices and perpendicular to the plane of the triangle is:",
    "options": [
      "$\\frac{3}{2}M L^2$",
      "$\\frac{5}{4}M L^2$",
      "$\\frac{2}{3}M L^2$",
      "$2 M L^2$"
    ],
    "correctAnswer": 0,
    "explanation": "The two sides meeting at the vertex each have moment of inertia about their end equal to $\\frac{1}{3}M L^2$. The third opposite side has its center of mass at distance $d = \\frac{\\sqrt{3}}{2}L$ from the vertex. By parallel axis theorem, its moment of inertia is $\\frac{1}{12}M L^2 + M\\left(\\frac{\\sqrt{3}}{2}L\\right)^2 = \\frac{1}{12}M L^2 + \\frac{3}{4}M L^2 = \\frac{1 + 9}{12}M L^2 = \\frac{10}{12}M L^2 = \\frac{5}{6}M L^2$. Total moment of inertia is $I = 2\\left(\\frac{1}{3}M L^2\\right) + \\frac{5}{6}M L^2 = \\frac{2}{3}M L^2 + \\frac{5}{6}M L^2 = \\frac{4 + 5}{6}M L^2 = \\frac{9}{6}M L^2 = \\frac{3}{2}M L^2$.",
    "marks": 4,
    "negativeMarks": 1,
    "subTopic": "Theorems of parallel and perpendicular axes",
    "chapter": "Rotational Motion",
    "subject": "Physics"
  },
  {
    "type": "MCQ",
    "question": "A uniform thin wire of mass $M$ and length $L$ is bent into a circle of radius $R = L/(2\\pi)$. The moment of inertia of this circular ring about a tangential axis in the plane of the ring is:",
    "options": [
      "$\\frac{3 M L^2}{8\\pi^2}$",
      "$\\frac{M L^2}{4\\pi^2}$",
      "$\\frac{3 M L^2}{4\\pi^2}$",
      "$\\frac{M L^2}{8\\pi^2}$"
    ],
    "correctAnswer": 0,
    "explanation": "For a ring, $I_{\\text{tangent, in-plane}} = \\frac{3}{2}M R^2$. Substituting $R = \\frac{L}{2\\pi}$ gives $I = \\frac{3}{2}M\\left(\\frac{L}{2\\pi}\\right)^2 = \\frac{3}{2}M\\left(\\frac{L^2}{4\\pi^2}\\right) = \\frac{3 M L^2}{8\\pi^2}$.",
    "marks": 4,
    "negativeMarks": 1,
    "subTopic": "Theorems of parallel and perpendicular axes",
    "chapter": "Rotational Motion",
    "subject": "Physics"
  },
  {
    "type": "MCQ",
    "question": "The moment of inertia of a uniform circular disc of mass $M$ and radius $R$ about a chord at distance $R/2$ from the center is:",
    "options": [
      "$\\frac{1}{2}M R^2$",
      "$\\frac{3}{4}M R^2$",
      "$\\frac{5}{8}M R^2$",
      "$\\frac{1}{4}M R^2$"
    ],
    "correctAnswer": 0,
    "explanation": "A diameter parallel to the chord has $I_{\\text{dia}} = \\frac{1}{4}M R^2$. The chord is at perpendicular distance $d = R/2$ from this diameter passing through the center of mass. By parallel axis theorem: $I = I_{\\text{dia}} + M d^2 = \\frac{1}{4}M R^2 + M\\left(\\frac{R}{2}\\right)^2 = \\frac{1}{4}M R^2 + \\frac{1}{4}M R^2 = \\frac{1}{2}M R^2$.",
    "marks": 4,
    "negativeMarks": 1,
    "subTopic": "Theorems of parallel and perpendicular axes",
    "chapter": "Rotational Motion",
    "subject": "Physics"
  },
  {
    "type": "MCQ",
    "question": "From a circular disc of radius $R$ and mass $9M$, a small disc of radius $R/3$ is removed with its center at distance $2R/3$ from the center of the original disc. What is the moment of inertia of the remaining disc about the central axis perpendicular to the plane?",
    "options": [
      "$4 M R^2$",
      "$\\frac{9}{2} M R^2$",
      "$\\frac{7}{2} M R^2$",
      "$3 M R^2$"
    ],
    "correctAnswer": 0,
    "explanation": "Area of original disc is $\\pi R^2$, mass is $9M$. Area of removed disc is $\\pi(R/3)^2 = \\frac{\\pi R^2}{9}$, so its mass is $m = M$. Moment of inertia of original disc is $I_1 = \\frac{1}{2}(9M)R^2 = \\frac{9}{2}MR^2$. For the removed disc, its moment of inertia about its own center is $I_{cm} = \\frac{1}{2}M(R/3)^2 = \\frac{1}{18}MR^2$. By parallel axis theorem, about the origin at $d = 2R/3$: $I_2 = \\frac{1}{18}MR^2 + M(2R/3)^2 = \\frac{1}{18}MR^2 + \\frac{4}{9}MR^2 = \\frac{1 + 8}{18}MR^2 = \\frac{9}{18}MR^2 = \\frac{1}{2}MR^2$. For the remaining part: $I = I_1 - I_2 = \\frac{9}{2}MR^2 - \\frac{1}{2}MR^2 = 4MR^2$.",
    "marks": 4,
    "negativeMarks": 1,
    "subTopic": "Theorems of parallel and perpendicular axes",
    "chapter": "Rotational Motion",
    "subject": "Physics"
  },
  {
    "type": "NUMERICAL",
    "question": "A uniform thin rod of mass $3\\,\\text{kg}$ and length $2\\,\\text{m}$ has moment of inertia about its center of mass perpendicular to length $I_{cm}$. What is its moment of inertia in $\\text{kg}\\cdot\\text{m}^2$ about an axis perpendicular to length passing through one of its ends?",
    "correctAnswer": 4,
    "explanation": "$I_{\\text{end}} = \\frac{1}{3}M L^2 = \\frac{1}{3}(3)(2^2) = 4\\,\\text{kg}\\cdot\\text{m}^2$.",
    "marks": 4,
    "negativeMarks": 1,
    "subTopic": "Theorems of parallel and perpendicular axes",
    "chapter": "Rotational Motion",
    "subject": "Physics",
    "options": []
  },
  {
    "type": "NUMERICAL",
    "question": "A uniform circular disc of mass $4\\,\\text{kg}$ and radius $0.5\\,\\text{m}$ has moment of inertia $I$. What is its moment of inertia about a diameter in $\\text{kg}\\cdot\\text{m}^2$?",
    "correctAnswer": 0.25,
    "explanation": "$I_{\\text{dia}} = \\frac{1}{4}M R^2 = \\frac{1}{4}(4)(0.5)^2 = 1(0.25) = 0.25\\,\\text{kg}\\cdot\\text{m}^2$.",
    "marks": 4,
    "negativeMarks": 1,
    "subTopic": "Theorems of parallel and perpendicular axes",
    "chapter": "Rotational Motion",
    "subject": "Physics",
    "options": []
  },
  {
    "type": "NUMERICAL",
    "question": "For the disc in the previous problem, what is its moment of inertia in $\\text{kg}\\cdot\\text{m}^2$ about a tangent in the plane of the disc?",
    "correctAnswer": 1.25,
    "explanation": "$I_{\\text{tangent, in-plane}} = \\frac{5}{4}M R^2 = \\frac{5}{4}(4)(0.25) = 5(0.25) = 1.25\\,\\text{kg}\\cdot\\text{m}^2$.",
    "marks": 4,
    "negativeMarks": 1,
    "subTopic": "Theorems of parallel and perpendicular axes",
    "chapter": "Rotational Motion",
    "subject": "Physics",
    "options": []
  },
  {
    "type": "NUMERICAL",
    "question": "A uniform circular ring has mass $2\\,\\text{kg}$ and radius $0.4\\,\\text{m}$. Find its moment of inertia in $\\text{kg}\\cdot\\text{m}^2$ about a tangent perpendicular to the plane of the ring.",
    "correctAnswer": 0.64,
    "explanation": "$I = 2 M R^2 = 2(2)(0.4)^2 = 4(0.16) = 0.64\\,\\text{kg}\\cdot\\text{m}^2$.",
    "marks": 4,
    "negativeMarks": 1,
    "subTopic": "Theorems of parallel and perpendicular axes",
    "chapter": "Rotational Motion",
    "subject": "Physics",
    "options": []
  },
  {
    "type": "NUMERICAL",
    "question": "A solid sphere of mass $5\\,\\text{kg}$ and radius $0.2\\,\\text{m}$ has moment of inertia about a tangent equal to $k\\,\\text{kg}\\cdot\\text{m}^2$. Find the value of $k$.",
    "correctAnswer": 0.28,
    "explanation": "$I = \\frac{7}{5}M R^2 = \\frac{7}{5}(5)(0.2)^2 = 7(0.04) = 0.28\\,\\text{kg}\\cdot\\text{m}^2$.",
    "marks": 4,
    "negativeMarks": 1,
    "subTopic": "Theorems of parallel and perpendicular axes",
    "chapter": "Rotational Motion",
    "subject": "Physics",
    "options": []
  },
  {
    "type": "NUMERICAL",
    "question": "A thin hollow spherical shell of mass $6\\,\\text{kg}$ and radius $0.5\\,\\text{m}$ has moment of inertia about a tangent equal to $k\\,\\text{kg}\\cdot\\text{m}^2$. Find $k$.",
    "correctAnswer": 2.5,
    "explanation": "$I = \\frac{5}{3}M R^2 = \\frac{5}{3}(6)(0.5)^2 = 10(0.25) = 2.5\\,\\text{kg}\\cdot\\text{m}^2$.",
    "marks": 4,
    "negativeMarks": 1,
    "subTopic": "Theorems of parallel and perpendicular axes",
    "chapter": "Rotational Motion",
    "subject": "Physics",
    "options": []
  },
  {
    "type": "NUMERICAL",
    "question": "A thin rectangular plate of mass $12\\,\\text{kg}$ has length $0.4\\,\\text{m}$ and breadth $0.3\\,\\text{m}$. What is its moment of inertia in $\\text{kg}\\cdot\\text{m}^2$ about an axis passing through its center perpendicular to its plane?",
    "correctAnswer": 0.25,
    "explanation": "$I_z = \\frac{1}{12}M(a^2 + b^2) = \\frac{1}{12}(12)(0.4^2 + 0.3^2) = 1(0.16 + 0.09) = 0.25\\,\\text{kg}\\cdot\\text{m}^2$.",
    "marks": 4,
    "negativeMarks": 1,
    "subTopic": "Theorems of parallel and perpendicular axes",
    "chapter": "Rotational Motion",
    "subject": "Physics",
    "options": []
  },
  {
    "type": "NUMERICAL",
    "question": "Four point masses each of $1\\,\\text{kg}$ are fixed at the corners of a light square frame of side $2\\,\\text{m}$. What is the moment of inertia in $\\text{kg}\\cdot\\text{m}^2$ about an axis passing through one corner perpendicular to the plane of the frame?",
    "correctAnswer": 16,
    "explanation": "Corner 1 has distance 0. Corners 2 and 4 have distance $2\\,\\text{m}$. Corner 3 (diagonally opposite) has distance $\\sqrt{2^2 + 2^2} = \\sqrt{8}\\,\\text{m}$. $I = 1(0^2) + 1(2^2) + 1(2^2) + 1((\\sqrt{8})^2) = 0 + 4 + 4 + 8 = 16\\,\\text{kg}\\cdot\\text{m}^2$.",
    "marks": 4,
    "negativeMarks": 1,
    "subTopic": "Theorems of parallel and perpendicular axes",
    "chapter": "Rotational Motion",
    "subject": "Physics",
    "options": []
  },
  {
    "type": "NUMERICAL",
    "question": "The moment of inertia of a uniform circular disc of radius $R = 10\\,\\text{cm}$ and mass $2\\,\\text{kg}$ about an axis tangent to the disc and perpendicular to its plane is $I$. What is the value of $I$ in $\\text{kg}\\cdot\\text{m}^2$?",
    "correctAnswer": 0.03,
    "explanation": "$I = \\frac{3}{2}M R^2 = \\frac{3}{2}(2)(0.1)^2 = 3(0.01) = 0.03\\,\\text{kg}\\cdot\\text{m}^2$.",
    "marks": 4,
    "negativeMarks": 1,
    "subTopic": "Theorems of parallel and perpendicular axes",
    "chapter": "Rotational Motion",
    "subject": "Physics",
    "options": []
  },
  {
    "type": "NUMERICAL",
    "question": "A uniform rod of mass $M$ and length $L$ has radius of gyration $k = L/\\sqrt{n}$ about an axis perpendicular to its length through one of its ends. What is the integer $n$?",
    "correctAnswer": 3,
    "explanation": "$I = M k^2 = \\frac{1}{3}M L^2 \\implies k^2 = \\frac{L^2}{3} \\implies k = \\frac{L}{\\sqrt{3}}$. Thus $n = 3$.",
    "marks": 4,
    "negativeMarks": 1,
    "subTopic": "Theorems of parallel and perpendicular axes",
    "chapter": "Rotational Motion",
    "subject": "Physics",
    "options": []
  },
  {
    "type": "NUMERICAL",
    "question": "A circular disc has moment of inertia $I_1 = 0.4\\,\\text{kg}\\cdot\\text{m}^2$ about its central transverse axis. What is its moment of inertia in $\\text{kg}\\cdot\\text{m}^2$ about any diameter?",
    "correctAnswer": 0.2,
    "explanation": "By the perpendicular axis theorem, $I_{\\text{dia}} = \\frac{I_z}{2} = \\frac{0.4}{2} = 0.2\\,\\text{kg}\\cdot\\text{m}^2$.",
    "marks": 4,
    "negativeMarks": 1,
    "subTopic": "Theorems of parallel and perpendicular axes",
    "chapter": "Rotational Motion",
    "subject": "Physics",
    "options": []
  },
  {
    "type": "NUMERICAL",
    "question": "A uniform thin square plate of mass $6\\,\\text{kg}$ and side $1\\,\\text{m}$ has moment of inertia about an axis through its center along a diagonal equal to $k\\,\\text{kg}\\cdot\\text{m}^2$. Find $k$.",
    "correctAnswer": 0.5,
    "explanation": "By symmetry, the moment of inertia about any in-plane axis through the center of a square is $I = \\frac{1}{12}M a^2 = \\frac{1}{12}(6)(1^2) = 0.5\\,\\text{kg}\\cdot\\text{m}^2$.",
    "marks": 4,
    "negativeMarks": 1,
    "subTopic": "Theorems of parallel and perpendicular axes",
    "chapter": "Rotational Motion",
    "subject": "Physics",
    "options": []
  },
  {
    "type": "NUMERICAL",
    "question": "The moment of inertia of a solid cylinder of mass $4\\,\\text{kg}$, radius $0.3\\,\\text{m}$, and length $0.8\\,\\text{m}$ about an axis passing through its center perpendicular to its length is $I\\,\\text{kg}\\cdot\\text{m}^2$. Find $I$ (rounded to two decimal places).",
    "correctAnswer": 0.3,
    "explanation": "$I = \\frac{1}{4}M R^2 + \\frac{1}{12}M L^2 = \\frac{1}{4}(4)(0.3)^2 + \\frac{1}{12}(4)(0.8)^2 = 0.09 + \\frac{1}{3}(0.64) = 0.09 + 0.2133 = 0.3033 \\approx 0.30\\,\\text{kg}\\cdot\\text{m}^2$.",
    "marks": 4,
    "negativeMarks": 1,
    "subTopic": "Theorems of parallel and perpendicular axes",
    "chapter": "Rotational Motion",
    "subject": "Physics",
    "options": []
  },
  {
    "type": "NUMERICAL",
    "question": "A uniform circular wire of radius $0.5\\,\\text{m}$ and mass $2\\,\\text{kg}$ has moment of inertia about an axis tangent to the wire in its plane equal to $k\\,\\text{kg}\\cdot\\text{m}^2$. Find $k$.",
    "correctAnswer": 0.75,
    "explanation": "$I = \\frac{3}{2}M R^2 = \\frac{3}{2}(2)(0.5)^2 = 3(0.25) = 0.75\\,\\text{kg}\\cdot\\text{m}^2$.",
    "marks": 4,
    "negativeMarks": 1,
    "subTopic": "Theorems of parallel and perpendicular axes",
    "chapter": "Rotational Motion",
    "subject": "Physics",
    "options": []
  },
  {
    "type": "NUMERICAL",
    "question": "A body has moment of inertia $I_{cm} = 2.0\\,\\text{kg}\\cdot\\text{m}^2$ about its center of mass. If its mass is $5\\,\\text{kg}$, what is its moment of inertia in $\\text{kg}\\cdot\\text{m}^2$ about an axis parallel to the first at a distance of $0.6\\,\\text{m}$?",
    "correctAnswer": 3.8,
    "explanation": "$I = I_{cm} + M d^2 = 2.0 + 5(0.6)^2 = 2.0 + 5(0.36) = 2.0 + 1.8 = 3.8\\,\\text{kg}\\cdot\\text{m}^2$.",
    "marks": 4,
    "negativeMarks": 1,
    "subTopic": "Theorems of parallel and perpendicular axes",
    "chapter": "Rotational Motion",
    "subject": "Physics",
    "options": []
  },
  {
    "type": "NUMERICAL",
    "question": "The moment of inertia of a uniform rod of mass $M$ and length $L$ about an axis through its center making an angle of $30^\\circ$ with the rod is $\\frac{M L^2}{n}$. What is the integer $n$?",
    "correctAnswer": 48,
    "explanation": "$I = \\frac{1}{12}M L^2 \\sin^2(30^\\circ) = \\frac{1}{12}M L^2 \\left(\\frac{1}{2}\\right)^2 = \\frac{1}{48}M L^2$. Thus $n = 48$.",
    "marks": 4,
    "negativeMarks": 1,
    "subTopic": "Theorems of parallel and perpendicular axes",
    "chapter": "Rotational Motion",
    "subject": "Physics",
    "options": []
  },
  {
    "type": "NUMERICAL",
    "question": "A uniform wheel has radius of gyration $k_{cm} = 0.3\\,\\text{m}$ about its center of mass. What is its radius of gyration in meters about a parallel axis located at distance $d = 0.4\\,\\text{m}$ from the center of mass?",
    "correctAnswer": 0.5,
    "explanation": "$k = \\sqrt{k_{cm}^2 + d^2} = \\sqrt{0.3^2 + 0.4^2} = \\sqrt{0.09 + 0.16} = \\sqrt{0.25} = 0.5\\,\\text{m}$.",
    "marks": 4,
    "negativeMarks": 1,
    "subTopic": "Theorems of parallel and perpendicular axes",
    "chapter": "Rotational Motion",
    "subject": "Physics",
    "options": []
  },
  {
    "type": "NUMERICAL",
    "question": "Two identical circular rings each of mass $1\\,\\text{kg}$ and radius $1\\,\\text{m}$ are joined such that their planes are mutually perpendicular with a common center. What is the moment of inertia in $\\text{kg}\\cdot\\text{m}^2$ of the combined system about an axis passing through the common diameter of both rings?",
    "correctAnswer": 1.5,
    "explanation": "For the ring whose plane contains the axis, the axis is a diameter, so $I_1 = \\frac{1}{2}M R^2$. For the other ring whose plane is perpendicular to the axis, the axis is its central normal axis, so $I_2 = M R^2$. Total moment of inertia is $I = I_1 + I_2 = \\frac{1}{2}M R^2 + M R^2 = \\frac{3}{2}M R^2 = 1.5(1)(1^2) = 1.5\\,\\text{kg}\\cdot\\text{m}^2$.",
    "marks": 4,
    "negativeMarks": 1,
    "subTopic": "Theorems of parallel and perpendicular axes",
    "chapter": "Rotational Motion",
    "subject": "Physics",
    "options": []
  },
  {
    "type": "NUMERICAL",
    "question": "A solid sphere of mass $10\\,\\text{kg}$ and radius $0.5\\,\\text{m}$ has moment of inertia $I_1$ about its diameter and $I_2$ about a tangent. What is the ratio $I_2 / I_1$?",
    "correctAnswer": 3.5,
    "explanation": "$I_1 = \\frac{2}{5}M R^2$ and $I_2 = \\frac{7}{5}M R^2$. The ratio is $\\frac{I_2}{I_1} = \\frac{7/5}{2/5} = \\frac{7}{2} = 3.5$.",
    "marks": 4,
    "negativeMarks": 1,
    "subTopic": "Theorems of parallel and perpendicular axes",
    "chapter": "Rotational Motion",
    "subject": "Physics",
    "options": []
  },
  {
    "type": "NUMERICAL",
    "question": "A uniform thin rod of mass $2\\,\\text{kg}$ and length $1.2\\,\\text{m}$ has moment of inertia $I$ about an axis perpendicular to the rod at distance $0.2\\,\\text{m}$ from the center of mass. Find $I$ in $\\text{kg}\\cdot\\text{m}^2$.",
    "correctAnswer": 0.32,
    "explanation": "$I_{cm} = \\frac{1}{12}M L^2 = \\frac{1}{12}(2)(1.2^2) = \\frac{1}{6}(1.44) = 0.24\\,\\text{kg}\\cdot\\text{m}^2$. $I = I_{cm} + M d^2 = 0.24 + 2(0.2)^2 = 0.24 + 2(0.04) = 0.24 + 0.08 = 0.32\\,\\text{kg}\\cdot\\text{m}^2$.",
    "marks": 4,
    "negativeMarks": 1,
    "subTopic": "Theorems of parallel and perpendicular axes",
    "chapter": "Rotational Motion",
    "subject": "Physics",
    "options": []
  }
];
