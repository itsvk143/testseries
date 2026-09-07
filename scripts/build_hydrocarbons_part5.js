const fs = require("fs");
const path = require("path");

const STANDARD_AR_OPTIONS = [
  "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
  "Both Assertion (A) and Reason (R) are true but Reason (R) is NOT the correct explanation of Assertion (A).",
  "Assertion (A) is true but Reason (R) is false.",
  "Assertion (A) is false but Reason (R) is true."
];

function ar(assertion, reason, correctAnswer, explanation) {
  return {
    type: "ASSERTION_REASON",
    question: `Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): ${assertion}\nReason (R): ${reason}`,
    options: STANDARD_AR_OPTIONS,
    correctAnswer,
    explanation,
    subTopic: "Conformations",
    chapter: "Hydrocarbons"
  };
}

function mcq(question, options, correctAnswer, explanation) {
  return {
    type: "MCQ",
    question,
    options,
    correctAnswer,
    explanation,
    subTopic: "Conformations",
    chapter: "Hydrocarbons"
  };
}

function num(question, correctAnswer, explanation) {
  return {
    type: "NUMERICAL",
    question,
    options: [],
    correctAnswer: String(correctAnswer),
    explanation,
    subTopic: "Conformations",
    chapter: "Hydrocarbons"
  };
}

const questions = [
  // 26 AR Questions
  ar(
    "The staggered conformation of ethane is thermodynamically more stable than the eclipsed conformation by $12.5\\text{ kJ/mol}$ ($3\\text{ kcal/mol}$).",
    "In the staggered conformation, the electron clouds of adjacent carbon-hydrogen $\\sigma$-bonds are at maximum distance from each other, minimizing torsional strain.",
    0,
    "In the staggered conformation, the dihedral angle between adjacent $\\text{C}-\\text{H}$ bonds is $60^\\circ$, keeping bonding electron pairs as far apart as possible and minimizing repulsive torsional interactions."
  ),
  ar(
    "Different conformational isomers of ethane cannot be isolated at room temperature.",
    "The energy barrier for rotation around the carbon-carbon single bond in ethane is only about $12.5\\text{ kJ/mol}$, which is easily overcome by thermal energy at room temperature.",
    0,
    "Because thermal collisions at $298\\text{ K}$ easily supply the small activation energy ($12.5\\text{ kJ/mol}$) needed for rotation, conformational interconversion occurs millions of times per second, making isolation impossible."
  ),
  ar(
    "In n-butane, the anti-conformation is the most stable conformation across the C2-C3 carbon-carbon bond.",
    "In the anti-conformation, the two bulky methyl groups are oriented at a dihedral angle of $180^\\circ$, completely eliminating both steric and torsional strain.",
    0,
    "The anti-conformation has a dihedral angle of $180^\\circ$ between the two methyl groups. This spatial separation minimizes van der Waals steric repulsion and ensures a perfectly staggered, strain-free arrangement."
  ),
  ar(
    "The fully eclipsed conformation of n-butane has the highest potential energy among all its conformations.",
    "In the fully eclipsed conformation, both severe torsional strain from eclipsed $\\sigma$-bonds and strong steric van der Waals repulsion between the two eclipsed methyl groups are present simultaneously.",
    0,
    "At a dihedral angle of $0^\\circ$, the two bulky methyl groups are brought into very close proximity, resulting in strong non-bonded electron cloud repulsion (van der Waals strain) combined with maximum torsional strain ($19-21\\text{ kJ/mol}$)."
  ),
  ar(
    "In ethane-1,2-diol (ethylene glycol), the gauche conformation is more stable than the anti-conformation.",
    "The gauche conformation of ethylene glycol is stabilized by the formation of an intramolecular hydrogen bond between the two adjacent hydroxyl groups.",
    0,
    "Although the anti-conformation eliminates steric repulsion, the gauche conformation places the two $-\\text{OH}$ groups at a dihedral angle of $60^\\circ$, enabling a stabilizing intramolecular $\\text{O}-\\text{H}\\cdots\\text{O}$ hydrogen bond that overrides steric strain."
  ),
  ar(
    "In 2-fluoroethanol, the gauche conformation is predominantly favored over the anti-conformation in the gas phase.",
    "Intramolecular hydrogen bonding between the highly electronegative fluorine atom and the hydroxyl hydrogen stabilizes the gauche conformation.",
    0,
    "The gauche conformation allows the formation of an intramolecular $\\text{O}-\\text{H}\\cdots\\text{F}$ hydrogen bond, which provides thermodynamic stabilization that outweighs gauche steric repulsion."
  ),
  ar(
    "The chair conformation of cyclohexane is completely free of both angle strain and torsional strain.",
    "In the chair conformation, all $\\text{C}-\\text{C}-\\text{C}$ bond angles are close to the ideal tetrahedral angle of $109.5^\\circ$ and all adjacent $\\text{C}-\\text{H}$ bonds are fully staggered.",
    0,
    "The chair conformation adopts angles of $109.5^\\circ$ (puckered ring eliminating Baeyer angle strain) while all neighboring $\\text{C}-\\text{H}$ bonds maintain a $60^\\circ$ staggered arrangement, eliminating torsional strain."
  ),
  ar(
    "The boat conformation of cyclohexane is significantly less stable than the chair conformation by about $29\\text{ kJ/mol}$.",
    "The boat conformation experiences both torsional strain from four pairs of eclipsed $\\text{C}-\\text{H}$ bonds along the sides and severe steric repulsion between the flagpole hydrogens at C1 and C4.",
    0,
    "In the boat form, the carbons at positions 1 and 4 have 'flagpole' hydrogens pointing towards each other within their van der Waals radii, while the two sets of parallel ring carbons have eclipsed $\\text{C}-\\text{H}$ bonds."
  ),
  ar(
    "Equatorial methylcyclohexane is more stable than axial methylcyclohexane.",
    "In axial methylcyclohexane, the methyl group experiences destabilizing 1,3-diaxial steric repulsions with the axial hydrogens at C3 and C5.",
    0,
    "An axial methyl group is in close spatial proximity to the two syn-axial hydrogens on carbons 3 and 5 (equivalent to two gauche-butane interactions), costing about $7.5\\text{ kJ/mol}$ of steric strain compared to the unhindered equatorial position."
  ),
  ar(
    "The twist-boat conformation of cyclohexane is lower in energy than the rigid boat conformation.",
    "Twisting of the boat ring partially relieves both the flagpole hydrogen steric interaction and the eclipsed $\\text{C}-\\text{H}$ torsional strain.",
    0,
    "Slight twisting of the boat structure moves the flagpole hydrogens further apart and twists the eclipsed side bonds towards a more staggered angle, lowering energy by about $6\\text{ kJ/mol}$ relative to the boat."
  ),
  ar(
    "In the Sawhorse projection of staggered ethane, the central carbon-carbon bond is drawn as a diagonal line projecting towards the viewer.",
    "Sawhorse projections view the molecule from an oblique angle to show the spatial orientation of all bonds on both carbon atoms clearly.",
    0,
    "Sawhorse projections display the $\\text{C}-\\text{C}$ bond at an angle to provide a three-dimensional perspective of the spatial orientation of the peripheral bonds."
  ),
  ar(
    "In the Newman projection of ethane, the front carbon is represented by a point and the back carbon by a circle.",
    "Newman projections view the carbon-carbon bond directly head-on along the bond axis.",
    0,
    "Viewing down the $\\text{C}-\\text{C}$ bond axis, the front carbon is depicted as the intersection of three bonds (a central point), while the rear carbon is shown as a larger circle with bonds emerging from its circumference."
  ),
  ar(
    "The relative stability order of the conformations of n-butane is: $\\text{Anti} > \\text{Gauche} > \\text{Partially Eclipsed} > \\text{Fully Eclipsed}$.",
    "The anti-conformation has zero steric strain, the gauche has minimal steric strain, while eclipsed conformations suffer from severe torsional strain.",
    0,
    "Anti ($\theta = 180^\circ$, energy minimum) is followed by gauche ($\theta = 60^\circ$, $3.8\text{ kJ/mol}$ higher), partially eclipsed ($\theta = 120^\circ$, $16\text{ kJ/mol}$), and fully eclipsed ($\theta = 0^\circ$, $19-21\text{ kJ/mol}$)."
  ),
  ar(
    "Cyclopentane does not adopt a completely planar regular pentagonal conformation.",
    "A planar cyclopentane ring would suffer from severe torsional strain due to ten pairs of fully eclipsed carbon-hydrogen bonds.",
    0,
    "Although a planar pentagon has interior angles of $108^\\circ$ (very close to $109.5^\\circ$), it would force all 10 $\\text{C}-\\text{H}$ bonds to be fully eclipsed. It puckers into an 'envelope' or 'half-chair' conformation to minimize torsional strain."
  ),
  ar(
    "Cyclopropane exhibits extreme ring strain and undergoes ring-opening reactions with electrophilic reagents.",
    "The internal $\\text{C}-\\text{C}-\\text{C}$ bond angles in cyclopropane are forced to be $60^\\circ$, causing severe angle strain (bent 'banana' bonds) and full torsional eclipsing.",
    0,
    "The $60^\\circ$ bond angles deviate by $49.5^\\circ$ from the tetrahedral angle ($109.5^\\circ$), causing enormous Baeyer angle strain ($115\\text{ kJ/mol}$) combined with six eclipsed $\\text{C}-\\text{H}$ bonds, making cyclopropane chemically reactive towards ring-opening."
  ),
  ar(
    "The dihedral angle in the eclipsed conformation of ethane is $0^\\circ$.",
    "In the eclipsed conformation, the carbon-hydrogen bonds on the front carbon directly overlap with those on the back carbon when viewed along the $\\text{C}-\\text{C}$ bond axis.",
    0,
    "Dihedral (torsional) angle is the angle between two specified planes passing through adjacent bonds. In the eclipsed conformation, the two $\\text{C}-\\text{H}$ bonds lie in the same plane, giving $\\theta = 0^\\circ$."
  ),
  ar(
    "At room temperature, cyclohexane flips rapidly between two equivalent chair conformations.",
    "Ring inversion (chair-chair interconversion) converts all axial substituents into equatorial positions and all equatorial substituents into axial positions.",
    0,
    "During ring flipping, the energy barrier is about $45\\text{ kJ/mol}$ (half-chair transition state). At room temperature, this occurs thousands of times per second, interconverting axial and equatorial bonds."
  ),
  ar(
    "trans-1,4-Dimethylcyclohexane exists predominantly in a diequatorial chair conformation.",
    "A diequatorial arrangement avoids all 1,3-diaxial steric repulsions, making it thermodynamically more stable than the diaxial conformation.",
    0,
    "In trans-1,4-dimethylcyclohexane, one conformation has both methyls equatorial $(e,e)$ and the flipped ring has both methyls axial $(a,a)$. The $(e,e)$ conformer has zero 1,3-diaxial strain and comprises $>99\\%$ of the equilibrium mixture."
  ),
  ar(
    "cis-1,3-Dimethylcyclohexane exists predominantly in the diequatorial $(e,e)$ chair conformation.",
    "The diequatorial conformer has both methyl groups in equatorial positions, avoiding severe 1,3-diaxial steric clash between two axial methyl groups.",
    0,
    "In the diaxial $(a,a)$ conformer of cis-1,3-dimethylcyclohexane, the two axial methyl groups on C1 and C3 point in the same direction and collide violently (syn-diaxial interaction, $\\approx 23\\text{ kJ/mol}$), driving the equilibrium almost entirely to $(e,e)$."
  ),
  ar(
    "The half-chair conformation of cyclohexane has the highest potential energy along the ring-inversion pathway.",
    "In the half-chair conformation, four adjacent ring carbons are forced into a coplanar arrangement, creating maximum angle and torsional strain.",
    0,
    "The half-chair represents the transition state in the conversion of chair to twist-boat, where planar flattening of four carbons creates severe torsional and angle strain ($45\\text{ kJ/mol}$ above chair)."
  ),
  ar(
    "Torsional strain is defined as the resistance to twisting about a single bond caused by repulsion between electron pairs in adjacent $\\sigma$-bonds.",
    "Steric strain arises when non-bonded atoms or groups are forced closer than their van der Waals radii permit.",
    1,
    "Both statements are accurate chemical definitions of torsional strain and steric (van der Waals) strain. However, the definition of steric strain does not explain the cause of torsional strain."
  ),
  ar(
    "In the gauche conformation of n-butane, the dihedral angle between the two methyl groups is $60^\\circ$.",
    "Gauche conformation corresponds to a staggered arrangement where the two bulky groups are adjacent to each other.",
    0,
    "Rotation by $60^\\circ$ from the fully eclipsed state places the two methyl groups adjacent in a staggered orientation, giving a dihedral angle of $60^\\circ$."
  ),
  ar(
    "The heat of combustion per methylene ($\\text{CH}_2$) group is lowest for cyclohexane among all cycloalkanes.",
    "Cyclohexane in its chair conformation is virtually strain-free with ideal tetrahedral angles and completely staggered bonds.",
    0,
    "Because chair cyclohexane possesses zero angle strain and zero torsional strain, its heat of combustion per $-\\text{CH}_2-$ unit ($658.6\\text{ kJ/mol}$) matches that of an unstrained acyclic alkane."
  ),
  ar(
    "tert-Butylcyclohexane exists almost exclusively ($>99.9\\%$) in the conformation with the tert-butyl group in the equatorial position.",
    "The bulky tert-butyl group experiences catastrophic 1,3-diaxial steric repulsion ($>20\\text{ kJ/mol}$) if placed in the axial position.",
    0,
    "The immense steric bulk of the three methyls in a tert-butyl group makes the axial conformer extremely high in energy, locking the ring firmly into the equatorial conformation (conformational locking)."
  ),
  ar(
    "Cyclobutane has a non-planar 'puckered' or butterfly conformation with a dihedral angle of about $25-30^\\circ$.",
    "Puckering of the four-membered ring relieves torsional strain among adjacent $\\text{C}-\\text{H}$ bonds at the cost of a slight increase in angle strain.",
    0,
    "A planar square cyclobutane would have eight fully eclipsed $\\text{C}-\\text{H}$ bonds. By puckering into a butterfly shape, it reduces severe torsional strain even though the internal angle narrows slightly to $\\approx 88^\\circ$."
  ),
  ar(
    "Conformations can be distinguished from configurations because conformations interconvert by simple bond rotation without breaking any chemical bonds.",
    "Configurations can only be interconverted by breaking and reforming covalent bonds.",
    0,
    "Conformations represent spatial variations achieved through rotation about single bonds, while configurations (like enantiomers, diastereomers, and geometrical isomers) require covalent bond rupture to interconvert."
  ),

  // 8 MCQ Questions
  mcq(
    "In which of the following compounds is the GAUCHE conformation more stable than the anti-conformation?",
    [
      "Ethane-1,2-diol (ethylene glycol)",
      "n-Butane",
      "1,2-Dichloroethane",
      "Propane"
    ],
    0,
    "In ethylene glycol $(\\text{HO}-\\text{CH}_2-\\text{CH}_2-\\text{OH})$, the gauche conformation allows the formation of a stabilizing intramolecular hydrogen bond, making it more stable than the anti-conformation."
  ),
  mcq(
    "The dihedral angle between the two carbon-hydrogen bonds in the staggered conformation of ethane is:",
    [
      "$60^\\circ$",
      "$0^\\circ$",
      "$120^\\circ$",
      "$180^\\circ$"
    ],
    0,
    "In staggered ethane, the hydrogen atoms on adjacent carbons are spaced evenly around the circle in a Newman projection with a dihedral angle of exactly $60^\\circ$."
  ),
  mcq(
    "What is the energy difference between the staggered and eclipsed conformations of ethane (the torsional barrier)?",
    [
      "$12.5\\text{ kJ/mol}$ ($3\\text{ kcal/mol}$)",
      "$50\\text{ kJ/mol}$ ($12\\text{ kcal/mol}$)",
      "$3.8\\text{ kJ/mol}$ ($0.9\\text{ kcal/mol}$)",
      "$100\\text{ kJ/mol}$ ($24\\text{ kcal/mol}$)"
    ],
    0,
    "The torsional barrier for rotation in ethane is $12.5\\text{ kJ/mol}$ ($3\\text{ kcal/mol}$), which corresponds to about $4.2\\text{ kJ/mol}$ per eclipsed $\\text{H}/\\text{H}$ interaction."
  ),
  mcq(
    "The most stable conformation of cyclohexane is the:",
    [
      "Chair conformation",
      "Boat conformation",
      "Twist-boat conformation",
      "Half-chair conformation"
    ],
    0,
    "The chair conformation is completely free of angle strain and torsional strain, making it the lowest-energy and most stable conformation of cyclohexane."
  ),
  mcq(
    "The instability of the boat conformation of cyclohexane is primarily attributed to:",
    [
      "Flagpole hydrogen steric repulsion and eclipsed $\\text{C}-\\text{H}$ bonds",
      "Angle strain of $120^\\circ$",
      "Loss of aromaticity",
      "Anti-coplanar steric hindrance"
    ],
    0,
    "The boat conformation suffers from steric repulsion between the 1,4-flagpole hydrogens and torsional strain from four pairs of eclipsed $\\text{C}-\\text{H}$ bonds along the sides."
  ),
  mcq(
    "The correct order of stability for the conformations of n-butane is:",
    [
      "Anti > Gauche > Partially Eclipsed > Fully Eclipsed",
      "Gauche > Anti > Partially Eclipsed > Fully Eclipsed",
      "Anti > Partially Eclipsed > Gauche > Fully Eclipsed",
      "Fully Eclipsed > Partially Eclipsed > Gauche > Anti"
    ],
    0,
    "Anti is most stable (lowest energy), followed by gauche ($3.8\\text{ kJ/mol}$ higher), partially eclipsed ($16\\text{ kJ/mol}$), and fully eclipsed ($19-21\\text{ kJ/mol}$, highest energy)."
  ),
  mcq(
    "In methylcyclohexane, the chair conformation with the methyl group in the equatorial position is preferred over the axial position due to the absence of:",
    [
      "1,3-Diaxial interactions",
      "Angle strain",
      "Torsional strain",
      "Baeyer strain"
    ],
    0,
    "An axial methyl group experiences steric repulsion with the axial hydrogens located at positions 3 and 5 (1,3-diaxial interactions). In the equatorial position, these repulsions are absent."
  ),
  mcq(
    "What is the dihedral angle between the two methyl groups in the fully eclipsed conformation of n-butane?",
    [
      "$0^\\circ$",
      "$60^\\circ$",
      "$120^\\circ$",
      "$180^\\circ$"
    ],
    0,
    "In the fully eclipsed conformation of n-butane, both methyl groups directly eclipse each other, giving a dihedral angle of $0^\\circ$."
  ),

  // 13 NUM Questions
  num(
    "What is the dihedral angle in degrees in the anti-conformation of n-butane?",
    180,
    "In the anti-conformation, the two methyl groups are pointing in exactly opposite directions with a dihedral angle of $180^\\circ$."
  ),
  num(
    "What is the dihedral angle in degrees between the two methyl groups in the gauche conformation of n-butane?",
    60,
    "In the gauche conformation, the two methyl groups are staggered at an angle of $60^\\circ$ relative to each other."
  ),
  num(
    "How many axial carbon-hydrogen bonds are present in one chair conformation of cyclohexane?",
    6,
    "In chair cyclohexane $(\\text{C}_6\\text{H}_{12})$, there are 6 axial $\\text{C}-\\text{H}$ bonds (3 pointing straight up and 3 pointing straight down) and 6 equatorial $\\text{C}-\\text{H}$ bonds."
  ),
  num(
    "How many equatorial carbon-hydrogen bonds are present in one chair conformation of cyclohexane?",
    6,
    "There are exactly 6 equatorial $\\text{C}-\\text{H}$ bonds radiating out around the perimeter of the chair ring."
  ),
  num(
    "What is the number of 1,3-diaxial steric interactions experienced by a single axial methyl substituent in axial methylcyclohexane?",
    2,
    "The axial methyl group on C1 interacts sterically with the two syn-axial hydrogens located at carbons C3 and C5, giving exactly 2 1,3-diaxial interactions."
  ),
  num(
    "What is the value of the internal bond angle in degrees in an ideal planar cyclopropane ring?",
    60,
    "A planar cyclopropane ring is an equilateral triangle with interior bond angles of exactly $60^\\circ$."
  ),
  num(
    "What is the deviation in degrees from the ideal tetrahedral angle ($109.5^\\circ$) for each carbon in cyclopropane (calculate $(109.5 - 60)/2$ rounded to nearest integer)? Or: What is the interior angle of a regular planar pentagon in degrees?",
    108,
    "The interior angle of a regular planar pentagon (planar cyclopentane) is $\\frac{(5-2) \\times 180^\\circ}{5} = \\frac{540^\\circ}{5} = 108^\\circ$."
  ),
  num(
    "How many pairs of fully eclipsed carbon-hydrogen bonds would be present in a hypothetical planar cyclopentane ring?",
    5,
    "A planar five-membered ring has 5 carbon-carbon bonds, each having one pair of eclipsed hydrogens above and one below the plane, giving 5 pairs (or 10 total eclipsed $\\text{C}-\\text{H}$ interactions). Number of adjacent carbon-carbon bond pairs = 5."
  ),
  num(
    "How many flagpole hydrogen atoms are present in the boat conformation of cyclohexane?",
    2,
    "In the boat conformation, there are 2 flagpole hydrogens pointing towards each other at carbons C1 and C4."
  ),
  num(
    "What is the energy contribution in $\\text{kJ/mol}$ of each eclipsed $\\text{H}/\\text{H}$ interaction in ethane, given the total torsional barrier is $12.5\\text{ kJ/mol}$? (Report $12.5 / 3 \\approx 4$ rounded to nearest integer)",
    4,
    "Ethane has three pairs of eclipsed $\\text{H}/\\text{H}$ interactions: $12.5 / 3 \\approx 4.17\\text{ kJ/mol} \\approx 4\\text{ kJ/mol}$."
  ),
  num(
    "What is the dihedral angle in degrees in the partially eclipsed conformation of n-butane?",
    120,
    "In the partially eclipsed conformation, rotation by $120^\\circ$ from the fully eclipsed state places each methyl group eclipsing a hydrogen atom ($\theta = 120^\\circ$)."
  ),
  num(
    "How many carbon atoms in chair cyclohexane lie in the same geometric plane?",
    4,
    "In chair cyclohexane, four carbon atoms (C2, C3, C5, C6) lie in a common horizontal plane, while C1 lies above the plane and C4 lies below the plane. Exactly 4 carbons are coplanar."
  ),
  num(
    "How many staggered conformations correspond to potential energy minima in one complete $360^\\circ$ rotation of n-butane?",
    3,
    "In a full $360^\\circ$ rotation, there are 3 staggered energy minima: one anti-conformation ($\theta = 180^\circ$) and two degenerate gauche-conformations ($\theta = 60^\circ$ and $\theta = 300^\circ$). Total = 3."
  )
];

console.log(`Part 5 questions count: ${questions.length}`);
const ars = questions.filter(q => q.type === "ASSERTION_REASON");
const mcqs = questions.filter(q => q.type === "MCQ");
const nums = questions.filter(q => q.type === "NUMERICAL");
console.log(`AR: ${ars.length}, MCQ: ${mcqs.length}, NUM: ${nums.length}`);

fs.writeFileSync(
  path.join(__dirname, "data_hydrocarbons_part5.js"),
  "module.exports = " + JSON.stringify(questions, null, 2) + ";\n"
);
console.log("Successfully wrote data_hydrocarbons_part5.js");
