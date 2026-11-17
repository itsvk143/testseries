import fs from 'fs';
import path from 'path';

const outDir = 'public/images/diagrams/ktg';
fs.mkdirSync(outDir, { recursive: true });

console.log("=== GENERATING 15 VECTOR SVG DIAGRAMS FOR KINETIC THEORY ===");

// 1. test1_q1_boyle_law_pv_isotherms.svg
const test1_q1 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 380" width="100%" height="100%">
  <defs>
    <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#38bdf8"/>
    </marker>
    <marker id="axisArrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#94a3b8"/>
    </marker>
  </defs>

  <!-- Background -->
  <rect width="100%" height="100%" fill="#0f172a" rx="12"/>

  <!-- Grid lines -->
  <g stroke="#334155" stroke-dasharray="3,3" stroke-width="0.8">
    <line x1="80" y1="290" x2="490" y2="290"/>
    <line x1="80" y1="220" x2="490" y2="220"/>
    <line x1="80" y1="150" x2="490" y2="150"/>
    <line x1="80" y1="80" x2="490" y2="80"/>
    <line x1="160" y1="50" x2="160" y2="330"/>
    <line x1="260" y1="50" x2="260" y2="330"/>
    <line x1="360" y1="50" x2="360" y2="330"/>
    <line x1="460" y1="50" x2="460" y2="330"/>
  </g>

  <!-- Title -->
  <text x="270" y="32" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="16" font-weight="bold" text-anchor="middle">Boyle's Law: P-V Isothermal Curves at Different Temperatures</text>

  <!-- Axes -->
  <line x1="80" y1="330" x2="80" y2="45" stroke="#94a3b8" stroke-width="2.5" marker-end="url(#axisArrow)"/>
  <line x1="80" y1="330" x2="510" y2="330" stroke="#94a3b8" stroke-width="2.5" marker-end="url(#axisArrow)"/>

  <!-- Axis Labels -->
  <text x="50" y="55" fill="#f8fafc" font-family="system-ui, sans-serif" font-size="16" font-weight="bold" text-anchor="middle">P</text>
  <text x="50" y="75" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11" text-anchor="middle">(Pressure)</text>

  <text x="495" y="358" fill="#f8fafc" font-family="system-ui, sans-serif" font-size="16" font-weight="bold" text-anchor="middle">V</text>
  <text x="495" y="372" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11" text-anchor="middle">(Volume)</text>
  <text x="68" y="348" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="13">O</text>

  <!-- Constant V reference dashed line -->
  <line x1="260" y1="70" x2="260" y2="330" stroke="#f59e0b" stroke-dasharray="4,4" stroke-width="1.8"/>
  <text x="260" y="350" fill="#f59e0b" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" text-anchor="middle">V = constant</text>

  <!-- Isotherm T1 (lowest) -->
  <!-- PV = c1 = 12000. at V=100 P=120, at V=200 P=60, at V=300 P=40, at V=400 P=30 -->
  <path d="M 120 230 Q 180 300 450 318" fill="none" stroke="#3b82f6" stroke-width="3"/>
  <circle cx="260" cy="284" r="5" fill="#3b82f6"/>
  <text x="460" y="315" fill="#3b82f6" font-family="system-ui, sans-serif" font-size="15" font-weight="bold">T₁</text>

  <!-- Isotherm T2 (middle) -->
  <path d="M 120 160 Q 200 240 450 280" fill="none" stroke="#10b981" stroke-width="3"/>
  <circle cx="260" cy="226" r="5" fill="#10b981"/>
  <text x="460" y="278" fill="#10b981" font-family="system-ui, sans-serif" font-size="15" font-weight="bold">T₂</text>

  <!-- Isotherm T3 (highest) -->
  <path d="M 120 90 Q 220 180 450 235" fill="none" stroke="#ef4444" stroke-width="3"/>
  <circle cx="260" cy="162" r="5" fill="#ef4444"/>
  <text x="460" y="232" fill="#ef4444" font-family="system-ui, sans-serif" font-size="15" font-weight="bold">T₃</text>

  <!-- Legend / Info Box -->
  <rect x="290" y="65" width="225" height="75" rx="8" fill="#1e293b" stroke="#475569" stroke-width="1.2"/>
  <text x="305" y="88" fill="#f8fafc" font-family="system-ui, sans-serif" font-size="13" font-weight="bold">Ideal Gas: PV = nRT</text>
  <text x="305" y="108" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="12">At fixed V: P ∝ T</text>
  <text x="305" y="128" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="12" font-weight="bold">P(T₃) &gt; P(T₂) &gt; P(T₁) ⇒ T₃ &gt; T₂ &gt; T₁</text>
</svg>`;

// 2. test1_q2_charles_law_vt_isobars.svg
const test1_q2 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 380" width="100%" height="100%">
  <defs>
    <marker id="axisArrow2" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#94a3b8"/>
    </marker>
  </defs>

  <rect width="100%" height="100%" fill="#0f172a" rx="12"/>

  <!-- Title -->
  <text x="270" y="32" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="16" font-weight="bold" text-anchor="middle">Charles's Law: V-T Isobaric Lines at Different Pressures</text>

  <!-- Grid -->
  <g stroke="#334155" stroke-dasharray="3,3" stroke-width="0.8">
    <line x1="80" y1="280" x2="490" y2="280"/>
    <line x1="80" y1="210" x2="490" y2="210"/>
    <line x1="80" y1="140" x2="490" y2="140"/>
    <line x1="80" y1="70" x2="490" y2="70"/>
    <line x1="180" y1="50" x2="180" y2="330"/>
    <line x1="280" y1="50" x2="280" y2="330"/>
    <line x1="380" y1="50" x2="380" y2="330"/>
    <line x1="480" y1="50" x2="480" y2="330"/>
  </g>

  <!-- Axes -->
  <line x1="80" y1="330" x2="80" y2="45" stroke="#94a3b8" stroke-width="2.5" marker-end="url(#axisArrow2)"/>
  <line x1="80" y1="330" x2="510" y2="330" stroke="#94a3b8" stroke-width="2.5" marker-end="url(#axisArrow2)"/>

  <!-- Labels -->
  <text x="50" y="55" fill="#f8fafc" font-family="system-ui, sans-serif" font-size="16" font-weight="bold" text-anchor="middle">V</text>
  <text x="50" y="75" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11" text-anchor="middle">(Volume)</text>

  <text x="495" y="358" fill="#f8fafc" font-family="system-ui, sans-serif" font-size="16" font-weight="bold" text-anchor="middle">T (K)</text>
  <text x="495" y="372" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11" text-anchor="middle">(Absolute Temp)</text>
  <text x="68" y="348" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="13">O</text>

  <!-- Constant T reference line -->
  <line x1="350" y1="65" x2="350" y2="330" stroke="#f59e0b" stroke-dasharray="4,4" stroke-width="1.8"/>
  <text x="350" y="350" fill="#f59e0b" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" text-anchor="middle">T = constant</text>

  <!-- Isobar P1 (Steepest slope, lowest pressure) -->
  <line x1="80" y1="330" x2="440" y2="70" stroke="#ef4444" stroke-width="3"/>
  <circle cx="350" cy="135" r="5" fill="#ef4444"/>
  <text x="450" y="75" fill="#ef4444" font-family="system-ui, sans-serif" font-size="15" font-weight="bold">P₁</text>

  <!-- Isobar P2 (Medium slope) -->
  <line x1="80" y1="330" x2="470" y2="155" stroke="#10b981" stroke-width="3"/>
  <circle cx="350" cy="208" r="5" fill="#10b981"/>
  <text x="480" y="160" fill="#10b981" font-family="system-ui, sans-serif" font-size="15" font-weight="bold">P₂</text>

  <!-- Isobar P3 (Flattest slope, highest pressure) -->
  <line x1="80" y1="330" x2="480" y2="235" stroke="#3b82f6" stroke-width="3"/>
  <circle cx="350" cy="265" r="5" fill="#3b82f6"/>
  <text x="490" y="240" fill="#3b82f6" font-family="system-ui, sans-serif" font-size="15" font-weight="bold">P₃</text>

  <!-- Explanation box -->
  <rect x="95" y="60" width="230" height="90" rx="8" fill="#1e293b" stroke="#475569" stroke-width="1.2"/>
  <text x="110" y="82" fill="#f8fafc" font-family="system-ui, sans-serif" font-size="13" font-weight="bold">V = (nR/P) T</text>
  <text x="110" y="102" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="12">Slope = nR/P ∝ 1/P</text>
  <text x="110" y="122" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="12">Slope₁ &gt; Slope₂ &gt; Slope₃</text>
  <text x="110" y="140" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="12" font-weight="bold">Pressure relation: P₁ &lt; P₂ &lt; P₃</text>
</svg>`;

// 3. test1_q3_gay_lussac_pt_isochores.svg
const test1_q3 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 380" width="100%" height="100%">
  <defs>
    <marker id="axisArrow3" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#94a3b8"/>
    </marker>
  </defs>

  <rect width="100%" height="100%" fill="#0f172a" rx="12"/>

  <!-- Title -->
  <text x="270" y="32" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="16" font-weight="bold" text-anchor="middle">Gay-Lussac's Law: P-T Isochoric Lines at Different Volumes</text>

  <!-- Grid -->
  <g stroke="#334155" stroke-dasharray="3,3" stroke-width="0.8">
    <line x1="80" y1="280" x2="490" y2="280"/>
    <line x1="80" y1="210" x2="490" y2="210"/>
    <line x1="80" y1="140" x2="490" y2="140"/>
    <line x1="80" y1="70" x2="490" y2="70"/>
    <line x1="180" y1="50" x2="180" y2="330"/>
    <line x1="280" y1="50" x2="280" y2="330"/>
    <line x1="380" y1="50" x2="380" y2="330"/>
  </g>

  <!-- Axes -->
  <line x1="80" y1="330" x2="80" y2="45" stroke="#94a3b8" stroke-width="2.5" marker-end="url(#axisArrow3)"/>
  <line x1="80" y1="330" x2="510" y2="330" stroke="#94a3b8" stroke-width="2.5" marker-end="url(#axisArrow3)"/>

  <!-- Labels -->
  <text x="50" y="55" fill="#f8fafc" font-family="system-ui, sans-serif" font-size="16" font-weight="bold" text-anchor="middle">P</text>
  <text x="50" y="75" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11" text-anchor="middle">(Pressure)</text>

  <text x="495" y="358" fill="#f8fafc" font-family="system-ui, sans-serif" font-size="16" font-weight="bold" text-anchor="middle">T (K)</text>
  <text x="495" y="372" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11" text-anchor="middle">(Temperature)</text>
  <text x="68" y="348" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="13">O</text>

  <!-- Isochore V1 (Steepest slope, smallest volume) -->
  <line x1="80" y1="330" x2="440" y2="65" stroke="#ef4444" stroke-width="3"/>
  <text x="450" y="70" fill="#ef4444" font-family="system-ui, sans-serif" font-size="15" font-weight="bold">V₁</text>

  <!-- Isochore V2 (Medium slope) -->
  <line x1="80" y1="330" x2="470" y2="150" stroke="#10b981" stroke-width="3"/>
  <text x="480" y="155" fill="#10b981" font-family="system-ui, sans-serif" font-size="15" font-weight="bold">V₂</text>

  <!-- Isochore V3 (Flattest slope, largest volume) -->
  <line x1="80" y1="330" x2="480" y2="235" stroke="#3b82f6" stroke-width="3"/>
  <text x="490" y="240" fill="#3b82f6" font-family="system-ui, sans-serif" font-size="15" font-weight="bold">V₃</text>

  <!-- Fixed P horizontal reference line -->
  <line x1="80" y1="180" x2="490" y2="180" stroke="#f59e0b" stroke-dasharray="4,4" stroke-width="1.8"/>
  <text x="40" y="185" fill="#f59e0b" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" text-anchor="end">P = const</text>

  <!-- Box -->
  <rect x="95" y="60" width="225" height="90" rx="8" fill="#1e293b" stroke="#475569" stroke-width="1.2"/>
  <text x="110" y="82" fill="#f8fafc" font-family="system-ui, sans-serif" font-size="13" font-weight="bold">P = (nR/V) T</text>
  <text x="110" y="102" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="12">Slope = nR/V ∝ 1/V</text>
  <text x="110" y="122" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="12">Slope₁ &gt; Slope₂ &gt; Slope₃</text>
  <text x="110" y="140" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="12" font-weight="bold">Volume relation: V₁ &lt; V₂ &lt; V₃</text>
</svg>`;

// 4. test2_q1_molecular_collision_container_wall.svg
const test2_q1 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 380" width="100%" height="100%">
  <defs>
    <marker id="velArrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#38bdf8"/>
    </marker>
    <marker id="rebArrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#f43f5e"/>
    </marker>
    <pattern id="hatch" width="10" height="10" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
      <line x1="0" y1="0" x2="0" y2="10" stroke="#64748b" stroke-width="2"/>
    </pattern>
  </defs>

  <rect width="100%" height="100%" fill="#0f172a" rx="12"/>

  <!-- Title -->
  <text x="270" y="32" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="16" font-weight="bold" text-anchor="middle">Kinetic Theory: Elastic Collision of Molecule with Container Wall</text>

  <!-- Container Wall (Right) -->
  <rect x="420" y="60" width="30" height="260" fill="url(#hatch)" stroke="#94a3b8" stroke-width="2"/>
  <line x1="420" y1="60" x2="420" y2="320" stroke="#cbd5e1" stroke-width="3"/>
  <text x="470" y="195" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" transform="rotate(90 470 195)" text-anchor="middle">Wall Area A</text>

  <!-- Wall normal axis -->
  <line x1="60" y1="190" x2="420" y2="190" stroke="#475569" stroke-dasharray="4,4" stroke-width="1.5"/>
  <text x="395" y="180" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="12">x-axis</text>

  <!-- Incident Molecule -->
  <circle cx="160" cy="120" r="14" fill="#0284c7" stroke="#38bdf8" stroke-width="2.5"/>
  <text x="160" y="125" fill="#ffffff" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" text-anchor="middle">m</text>

  <!-- Incident Velocity Vector -->
  <line x1="174" y1="126" x2="410" y2="188" stroke="#38bdf8" stroke-width="3" marker-end="url(#velArrow)"/>
  <text x="280" y="140" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="14" font-weight="bold">Initial: +v_x</text>

  <!-- Collision Point on Wall -->
  <circle cx="420" cy="190" r="6" fill="#f59e0b"/>

  <!-- Rebound Molecule -->
  <circle cx="210" cy="250" r="14" fill="#be123c" stroke="#f43f5e" stroke-width="2.5"/>
  <text x="210" y="255" fill="#ffffff" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" text-anchor="middle">m</text>

  <!-- Rebound Velocity Vector -->
  <line x1="415" y1="192" x2="230" y2="245" stroke="#f43f5e" stroke-width="3" marker-end="url(#rebArrow)"/>
  <text x="330" y="240" fill="#f43f5e" font-family="system-ui, sans-serif" font-size="14" font-weight="bold">Rebound: -v_x</text>

  <!-- Mathematical Summary Box -->
  <rect x="50" y="280" width="340" height="75" rx="8" fill="#1e293b" stroke="#475569" stroke-width="1.2"/>
  <text x="65" y="302" fill="#f8fafc" font-family="system-ui, sans-serif" font-size="13" font-weight="bold">Momentum transfer per collision:</text>
  <text x="65" y="322" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="13">Δp_x = m(-v_x) - m(+v_x) = -2mv_x</text>
  <text x="65" y="342" fill="#f59e0b" font-family="system-ui, sans-serif" font-size="13" font-weight="bold">Momentum imparted to wall = +2mv_x</text>
</svg>`;

// 5. test2_q2_kinetic_energy_vs_absolute_temperature.svg
const test2_q2 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 380" width="100%" height="100%">
  <defs>
    <marker id="axisArrow5" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#94a3b8"/>
    </marker>
  </defs>

  <rect width="100%" height="100%" fill="#0f172a" rx="12"/>

  <!-- Title -->
  <text x="270" y="32" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="16" font-weight="bold" text-anchor="middle">Average Translational Kinetic Energy vs Absolute Temperature</text>

  <!-- Grid -->
  <g stroke="#334155" stroke-dasharray="3,3" stroke-width="0.8">
    <line x1="80" y1="280" x2="490" y2="280"/>
    <line x1="80" y1="210" x2="490" y2="210"/>
    <line x1="80" y1="140" x2="490" y2="140"/>
    <line x1="80" y1="70" x2="490" y2="70"/>
    <line x1="180" y1="50" x2="180" y2="330"/>
    <line x1="280" y1="50" x2="280" y2="330"/>
    <line x1="380" y1="50" x2="380" y2="330"/>
    <line x1="480" y1="50" x2="480" y2="330"/>
  </g>

  <!-- Axes -->
  <line x1="80" y1="330" x2="80" y2="45" stroke="#94a3b8" stroke-width="2.5" marker-end="url(#axisArrow5)"/>
  <line x1="80" y1="330" x2="510" y2="330" stroke="#94a3b8" stroke-width="2.5" marker-end="url(#axisArrow5)"/>

  <!-- Labels -->
  <text x="45" y="55" fill="#f8fafc" font-family="system-ui, sans-serif" font-size="15" font-weight="bold" text-anchor="middle">K_trans</text>
  <text x="45" y="75" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11" text-anchor="middle">(Avg KE)</text>

  <text x="495" y="358" fill="#f8fafc" font-family="system-ui, sans-serif" font-size="15" font-weight="bold" text-anchor="middle">T (K)</text>
  <text x="68" y="348" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="13">O (0 K)</text>

  <!-- Common linear plot for all ideal gases -->
  <line x1="80" y1="330" x2="460" y2="85" stroke="#10b981" stroke-width="3.5"/>
  <circle cx="280" cy="201" r="5" fill="#10b981"/>
  <circle cx="460" cy="85" r="5" fill="#10b981"/>

  <!-- Slope notation -->
  <path d="M 330 169 L 380 169 L 380 137" fill="none" stroke="#f59e0b" stroke-width="2"/>
  <text x="390" y="157" fill="#f59e0b" font-family="system-ui, sans-serif" font-size="13" font-weight="bold">Slope = 3/2 k_B</text>

  <!-- Gas markers showing same KE at same T -->
  <rect x="95" y="75" width="235" height="110" rx="8" fill="#1e293b" stroke="#475569" stroke-width="1.2"/>
  <text x="110" y="98" fill="#f8fafc" font-family="system-ui, sans-serif" font-size="13" font-weight="bold">K_trans = 3/2 k_B T</text>
  <text x="110" y="120" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="12">• Pure function of temperature only</text>
  <text x="110" y="140" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="12">• Independent of molecular mass M</text>
  <text x="110" y="160" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="12" font-weight="bold">At same T: K(He) = K(O₂) = K(H₂)</text>
  <text x="110" y="177" fill="#ef4444" font-family="system-ui, sans-serif" font-size="11">At T = 0 K: Molecular motion ceases</text>
</svg>`;

// 6. test2_q3_vrms_vs_sqrt_t_and_molar_mass.svg
const test2_q3 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 380" width="100%" height="100%">
  <defs>
    <marker id="axisArrow6" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#94a3b8"/>
    </marker>
  </defs>

  <rect width="100%" height="100%" fill="#0f172a" rx="12"/>

  <!-- Title -->
  <text x="270" y="32" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="16" font-weight="bold" text-anchor="middle">RMS Speed vs √T for Different Molecular Masses</text>

  <!-- Grid -->
  <g stroke="#334155" stroke-dasharray="3,3" stroke-width="0.8">
    <line x1="80" y1="280" x2="490" y2="280"/>
    <line x1="80" y1="210" x2="490" y2="210"/>
    <line x1="80" y1="140" x2="490" y2="140"/>
    <line x1="80" y1="70" x2="490" y2="70"/>
    <line x1="180" y1="50" x2="180" y2="330"/>
    <line x1="280" y1="50" x2="280" y2="330"/>
    <line x1="380" y1="50" x2="380" y2="330"/>
  </g>

  <!-- Axes -->
  <line x1="80" y1="330" x2="80" y2="45" stroke="#94a3b8" stroke-width="2.5" marker-end="url(#axisArrow6)"/>
  <line x1="80" y1="330" x2="510" y2="330" stroke="#94a3b8" stroke-width="2.5" marker-end="url(#axisArrow6)"/>

  <!-- Labels -->
  <text x="45" y="55" fill="#f8fafc" font-family="system-ui, sans-serif" font-size="15" font-weight="bold" text-anchor="middle">v_rms</text>
  <text x="45" y="75" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11" text-anchor="middle">(m/s)</text>

  <text x="495" y="358" fill="#f8fafc" font-family="system-ui, sans-serif" font-size="15" font-weight="bold" text-anchor="middle">√T</text>
  <text x="68" y="348" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="13">O</text>

  <!-- Hydrogen H2 (M=2 g/mol) - steepest slope -->
  <line x1="80" y1="330" x2="430" y2="60" stroke="#38bdf8" stroke-width="3"/>
  <text x="440" y="65" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="14" font-weight="bold">H₂ (M = 2)</text>

  <!-- Helium He (M=4 g/mol) -->
  <line x1="80" y1="330" x2="460" y2="140" stroke="#10b981" stroke-width="3"/>
  <text x="470" y="145" fill="#10b981" font-family="system-ui, sans-serif" font-size="14" font-weight="bold">He (M = 4)</text>

  <!-- Oxygen O2 (M=32 g/mol) - lowest slope -->
  <line x1="80" y1="330" x2="480" y2="245" stroke="#f43f5e" stroke-width="3"/>
  <text x="490" y="250" fill="#f43f5e" font-family="system-ui, sans-serif" font-size="14" font-weight="bold">O₂ (M = 32)</text>

  <!-- Formula box -->
  <rect x="95" y="60" width="220" height="90" rx="8" fill="#1e293b" stroke="#475569" stroke-width="1.2"/>
  <text x="110" y="82" fill="#f8fafc" font-family="system-ui, sans-serif" font-size="13" font-weight="bold">v_rms = √(3RT / M)</text>
  <text x="110" y="102" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="12">Slope = √(3R / M) ∝ 1/√M</text>
  <text x="110" y="122" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="12">M(H₂) &lt; M(He) &lt; M(O₂)</text>
  <text x="110" y="140" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="12" font-weight="bold">Slope(H₂) &gt; Slope(He) &gt; Slope(O₂)</text>
</svg>`;

// 7. test3_q1_degrees_of_freedom_monoatomic.svg
const test3_q1 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 380" width="100%" height="100%">
  <defs>
    <marker id="axisArr" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#38bdf8"/>
    </marker>
  </defs>

  <rect width="100%" height="100%" fill="#0f172a" rx="12"/>

  <!-- Title -->
  <text x="270" y="32" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="16" font-weight="bold" text-anchor="middle">Monoatomic Gas Molecule: Translational Degrees of Freedom (f = 3)</text>

  <!-- 3D Coordinate System -->
  <!-- Origin at (240, 200) -->
  <!-- x-axis (right) -->
  <line x1="240" y1="200" x2="420" y2="200" stroke="#38bdf8" stroke-width="3" marker-end="url(#axisArr)"/>
  <text x="435" y="205" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="15" font-weight="bold">v_x (x)</text>

  <!-- y-axis (up) -->
  <line x1="240" y1="200" x2="240" y2="60" stroke="#10b981" stroke-width="3" marker-end="url(#axisArr)"/>
  <text x="240" y="50" fill="#10b981" font-family="system-ui, sans-serif" font-size="15" font-weight="bold" text-anchor="middle">v_y (y)</text>

  <!-- z-axis (oblique down-left) -->
  <line x1="240" y1="200" x2="110" y2="290" stroke="#f59e0b" stroke-width="3" marker-end="url(#axisArr)"/>
  <text x="100" y="310" fill="#f59e0b" font-family="system-ui, sans-serif" font-size="15" font-weight="bold">v_z (z)</text>

  <!-- Monoatomic Atom (Point Mass Sphere) -->
  <circle cx="240" cy="200" r="28" fill="#6366f1" stroke="#a5b4fc" stroke-width="3"/>
  <text x="240" y="206" fill="#ffffff" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" text-anchor="middle">He / Ar</text>

  <!-- Summary Box -->
  <rect x="300" y="235" width="215" height="120" rx="8" fill="#1e293b" stroke="#475569" stroke-width="1.2"/>
  <text x="315" y="258" fill="#f8fafc" font-family="system-ui, sans-serif" font-size="13" font-weight="bold">Degrees of Freedom: f = 3</text>
  <text x="315" y="278" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="12">• Translational: 3 (x, y, z)</text>
  <text x="315" y="296" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="12">• Rotational: 0 (point mass)</text>
  <text x="315" y="314" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="12">• C_v = 3/2 R, C_p = 5/2 R</text>
  <text x="315" y="335" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="13" font-weight="bold">γ = C_p / C_v = 5/3 ≈ 1.67</text>
</svg>`;

// 8. test3_q2_degrees_of_freedom_diatomic.svg
const test3_q2 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 380" width="100%" height="100%">
  <defs>
    <marker id="axisArr8" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#38bdf8"/>
    </marker>
    <marker id="rotArr" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#f59e0b"/>
    </marker>
  </defs>

  <rect width="100%" height="100%" fill="#0f172a" rx="12"/>

  <!-- Title -->
  <text x="270" y="32" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="16" font-weight="bold" text-anchor="middle">Rigid Diatomic Molecule: Translational + Rotational Modes (f = 5)</text>

  <!-- Center of Mass at (200, 190) -->
  <!-- Molecular bond along X-axis -->
  <line x1="120" y1="190" x2="280" y2="190" stroke="#94a3b8" stroke-width="8"/>
  <circle cx="120" cy="190" r="24" fill="#0284c7" stroke="#38bdf8" stroke-width="2.5"/>
  <text x="120" y="196" fill="#ffffff" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" text-anchor="middle">O</text>

  <circle cx="280" cy="190" r="24" fill="#0284c7" stroke="#38bdf8" stroke-width="2.5"/>
  <text x="280" y="196" fill="#ffffff" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" text-anchor="middle">O</text>

  <circle cx="200" cy="190" r="4" fill="#ef4444"/>
  <text x="200" y="180" fill="#ef4444" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" text-anchor="middle">CM</text>

  <!-- Y-axis (vertical through CM) -->
  <line x1="200" y1="190" x2="200" y2="60" stroke="#10b981" stroke-width="2.5" marker-end="url(#axisArr8)"/>
  <text x="200" y="50" fill="#10b981" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" text-anchor="middle">y (rot axis 1)</text>

  <!-- Z-axis (oblique through CM) -->
  <line x1="200" y1="190" x2="90" y2="280" stroke="#a855f7" stroke-width="2.5" marker-end="url(#axisArr8)"/>
  <text x="80" y="300" fill="#a855f7" font-family="system-ui, sans-serif" font-size="14" font-weight="bold">z (rot axis 2)</text>

  <!-- Rotation arrows around Y and Z -->
  <path d="M 180 100 A 25 12 0 1 1 220 100" fill="none" stroke="#f59e0b" stroke-width="2.5" marker-end="url(#rotArr)"/>
  <text x="235" y="105" fill="#f59e0b" font-family="system-ui, sans-serif" font-size="12" font-weight="bold">ω_y (I_y ≠ 0)</text>

  <text x="295" y="180" fill="#64748b" font-family="system-ui, sans-serif" font-size="12">x (bond axis, I_x ≈ 0)</text>

  <!-- Summary Box -->
  <rect x="315" y="195" width="205" height="155" rx="8" fill="#1e293b" stroke="#475569" stroke-width="1.2"/>
  <text x="325" y="218" fill="#f8fafc" font-family="system-ui, sans-serif" font-size="13" font-weight="bold">Rigid Diatomic (O₂, N₂):</text>
  <text x="325" y="238" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="12">• Translational: 3 (x, y, z)</text>
  <text x="325" y="256" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="12">• Rotational: 2 (about y, z)</text>
  <text x="325" y="274" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="12">• Total DOF: f = 3 + 2 = 5</text>
  <text x="325" y="294" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="12">• C_v = 5/2 R, C_p = 7/2 R</text>
  <text x="325" y="316" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="13" font-weight="bold">γ = C_p / C_v = 7/5 = 1.40</text>
  <text x="325" y="338" fill="#ef4444" font-family="system-ui, sans-serif" font-size="11">Vibration inactive at room temp</text>
</svg>`;

// 9. test3_q3_degrees_of_freedom_polyatomic_triangular.svg
const test3_q3 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 380" width="100%" height="100%">
  <rect width="100%" height="100%" fill="#0f172a" rx="12"/>

  <!-- Title -->
  <text x="270" y="32" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="16" font-weight="bold" text-anchor="middle">Non-Linear Polyatomic Molecule: Degrees of Freedom (f = 6)</text>

  <!-- Non-linear Molecule (H2O Model) -->
  <!-- Oxygen at top center (190, 110) -->
  <circle cx="190" cy="110" r="26" fill="#ef4444" stroke="#fca5a5" stroke-width="2.5"/>
  <text x="190" y="116" fill="#ffffff" font-family="system-ui, sans-serif" font-size="15" font-weight="bold" text-anchor="middle">O</text>

  <!-- Hydrogen 1 at (120, 200) -->
  <line x1="172" y1="128" x2="135" y2="185" stroke="#94a3b8" stroke-width="5"/>
  <circle cx="120" cy="200" r="18" fill="#38bdf8" stroke="#bae6fd" stroke-width="2"/>
  <text x="120" y="205" fill="#ffffff" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" text-anchor="middle">H</text>

  <!-- Hydrogen 2 at (260, 200) -->
  <line x1="208" y1="128" x2="245" y2="185" stroke="#94a3b8" stroke-width="5"/>
  <circle cx="260" cy="200" r="18" fill="#38bdf8" stroke="#bae6fd" stroke-width="2"/>
  <text x="260" y="205" fill="#ffffff" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" text-anchor="middle">H</text>

  <!-- Bond Angle Arc 104.5 deg -->
  <path d="M 160 148 A 40 40 0 0 1 220 148" fill="none" stroke="#f59e0b" stroke-width="2"/>
  <text x="190" y="165" fill="#f59e0b" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" text-anchor="middle">104.5°</text>

  <!-- Axes of rotation indicators -->
  <g stroke="#10b981" stroke-width="1.8" stroke-dasharray="3,3">
    <line x1="190" y1="60" x2="190" y2="250"/>
    <line x1="70" y1="155" x2="310" y2="155"/>
  </g>
  <text x="190" y="265" fill="#10b981" font-family="system-ui, sans-serif" font-size="12" text-anchor="middle">I_x, I_y, I_z all non-zero</text>

  <!-- Summary Box -->
  <rect x="315" y="70" width="205" height="170" rx="8" fill="#1e293b" stroke="#475569" stroke-width="1.2"/>
  <text x="325" y="93" fill="#f8fafc" font-family="system-ui, sans-serif" font-size="13" font-weight="bold">Non-linear (H₂O, NH₃):</text>
  <text x="325" y="115" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="12">• Translational: 3</text>
  <text x="325" y="135" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="12">• Rotational: 3</text>
  <text x="325" y="155" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="12">• Total DOF: f = 3 + 3 = 6</text>
  <text x="325" y="177" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="12">• C_v = 6/2 R = 3R</text>
  <text x="325" y="197" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="12">• C_p = C_v + R = 4R</text>
  <text x="325" y="222" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="13" font-weight="bold">γ = C_p / C_v = 4/3 ≈ 1.33</text>
</svg>`;

// 10. test4_q1_equipartition_energy_split_diatomic.svg
const test4_q1 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 380" width="100%" height="100%">
  <rect width="100%" height="100%" fill="#0f172a" rx="12"/>

  <!-- Title -->
  <text x="270" y="32" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="16" font-weight="bold" text-anchor="middle">Law of Equipartition: Energy Distribution per Mole of Diatomic Gas</text>

  <!-- Base line -->
  <line x1="60" y1="280" x2="480" y2="280" stroke="#64748b" stroke-width="2"/>

  <!-- Bar 1: Translational Energy (3/2 RT) -->
  <rect x="90" y="100" width="90" height="180" fill="#38bdf8" rx="6"/>
  <text x="135" y="90" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" text-anchor="middle">3/2 RT</text>
  <text x="135" y="190" fill="#0f172a" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" text-anchor="middle">3 modes</text>
  <text x="135" y="305" fill="#f8fafc" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" text-anchor="middle">Translational</text>
  <text x="135" y="325" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11" text-anchor="middle">(60% of total)</text>

  <!-- Bar 2: Rotational Energy (2/2 RT = RT) -->
  <rect x="220" y="160" width="90" height="120" fill="#10b981" rx="6"/>
  <text x="265" y="150" fill="#10b981" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" text-anchor="middle">RT (2/2 RT)</text>
  <text x="265" y="225" fill="#0f172a" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" text-anchor="middle">2 modes</text>
  <text x="265" y="305" fill="#f8fafc" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" text-anchor="middle">Rotational</text>
  <text x="265" y="325" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11" text-anchor="middle">(40% of total)</text>

  <!-- Bar 3: Total Internal Energy U = 5/2 RT -->
  <rect x="350" y="50" width="90" height="230" fill="#f59e0b" rx="6"/>
  <text x="395" y="40" fill="#f59e0b" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" text-anchor="middle">5/2 RT</text>
  <text x="395" y="170" fill="#0f172a" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" text-anchor="middle">Total U</text>
  <text x="395" y="305" fill="#f8fafc" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" text-anchor="middle">Total Energy</text>
  <text x="395" y="325" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11" text-anchor="middle">(U = E_trans + E_rot)</text>

  <!-- Summary text -->
  <text x="270" y="360" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="13" text-anchor="middle">Ratio: E_trans : E_rot = (3/2 RT) : (RT) = 3 : 2</text>
</svg>`;

// 11. test4_q2_cv_vs_temperature_hydrogen.svg
const test4_q2 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 380" width="100%" height="100%">
  <defs>
    <marker id="axisArrow11" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#94a3b8"/>
    </marker>
  </defs>

  <rect width="100%" height="100%" fill="#0f172a" rx="12"/>

  <!-- Title -->
  <text x="270" y="30" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="15" font-weight="bold" text-anchor="middle">Variation of Molar Heat Capacity (C_v) with Temperature for H₂</text>

  <!-- Axes -->
  <line x1="70" y1="320" x2="70" y2="50" stroke="#94a3b8" stroke-width="2.5" marker-end="url(#axisArrow11)"/>
  <line x1="70" y1="320" x2="510" y2="320" stroke="#94a3b8" stroke-width="2.5" marker-end="url(#axisArrow11)"/>

  <!-- Y-axis levels for Cv -->
  <!-- 3/2 R at y=250 -->
  <line x1="65" y1="250" x2="500" y2="250" stroke="#334155" stroke-dasharray="3,3" stroke-width="1"/>
  <text x="60" y="254" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" text-anchor="end">3/2 R</text>

  <!-- 5/2 R at y=170 -->
  <line x1="65" y1="170" x2="500" y2="170" stroke="#334155" stroke-dasharray="3,3" stroke-width="1"/>
  <text x="60" y="174" fill="#10b981" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" text-anchor="end">5/2 R</text>

  <!-- 7/2 R at y=90 -->
  <line x1="65" y1="90" x2="500" y2="90" stroke="#334155" stroke-dasharray="3,3" stroke-width="1"/>
  <text x="60" y="94" fill="#f59e0b" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" text-anchor="end">7/2 R</text>

  <!-- Step Curve for H2 -->
  <!-- Low Temp (T < 100 K): C_v = 3/2 R -->
  <line x1="70" y1="250" x2="160" y2="250" stroke="#38bdf8" stroke-width="3.5"/>

  <!-- Transition to room temp -->
  <path d="M 160 250 C 190 250, 200 170, 230 170" fill="none" stroke="#10b981" stroke-width="3.5"/>

  <!-- Room Temp Plateau (250 K to 750 K): C_v = 5/2 R -->
  <line x1="230" y1="170" x2="360" y2="170" stroke="#10b981" stroke-width="3.5"/>

  <!-- Transition to high temp (vibrational activation) -->
  <path d="M 360 170 C 390 170, 400 90, 430 90" fill="none" stroke="#f59e0b" stroke-width="3.5"/>

  <!-- High Temp Plateau (T > 1000 K): C_v = 7/2 R -->
  <line x1="430" y1="90" x2="495" y2="90" stroke="#f59e0b" stroke-width="3.5"/>

  <!-- Temperature Markers on X-axis -->
  <text x="140" y="340" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11" text-anchor="middle">~100 K</text>
  <text x="300" y="340" fill="#10b981" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" text-anchor="middle">300 K (Room Temp)</text>
  <text x="460" y="340" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11" text-anchor="middle">&gt; 1000 K</text>

  <text x="495" y="358" fill="#f8fafc" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" text-anchor="middle">T (K)</text>

  <!-- Labels on Plateaus -->
  <text x="115" y="235" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="11" font-weight="bold">Only Translation</text>
  <text x="245" y="155" fill="#10b981" font-family="system-ui, sans-serif" font-size="11" font-weight="bold">Translation + Rotation</text>
  <text x="400" y="75" fill="#f59e0b" font-family="system-ui, sans-serif" font-size="11" font-weight="bold">Trans + Rot + Vib</text>
</svg>`;

// 12. test4_q3_internal_energy_vs_temperature_gases.svg
const test4_q3 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 380" width="100%" height="100%">
  <defs>
    <marker id="axisArrow12" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#94a3b8"/>
    </marker>
  </defs>

  <rect width="100%" height="100%" fill="#0f172a" rx="12"/>

  <!-- Title -->
  <text x="270" y="32" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="16" font-weight="bold" text-anchor="middle">Molar Internal Energy (U) vs Temperature for Different Gases</text>

  <!-- Axes -->
  <line x1="80" y1="330" x2="80" y2="45" stroke="#94a3b8" stroke-width="2.5" marker-end="url(#axisArrow12)"/>
  <line x1="80" y1="330" x2="510" y2="330" stroke="#94a3b8" stroke-width="2.5" marker-end="url(#axisArrow12)"/>

  <!-- Labels -->
  <text x="45" y="55" fill="#f8fafc" font-family="system-ui, sans-serif" font-size="16" font-weight="bold" text-anchor="middle">U</text>
  <text x="45" y="75" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11" text-anchor="middle">(J/mol)</text>

  <text x="495" y="358" fill="#f8fafc" font-family="system-ui, sans-serif" font-size="15" font-weight="bold" text-anchor="middle">T (K)</text>
  <text x="68" y="348" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="13">O</text>

  <!-- Polyatomic non-linear: U = 3RT (slope = 3R) -->
  <line x1="80" y1="330" x2="430" y2="60" stroke="#f43f5e" stroke-width="3"/>
  <text x="440" y="65" fill="#f43f5e" font-family="system-ui, sans-serif" font-size="14" font-weight="bold">Polyatomic (f=6, Slope=3R)</text>

  <!-- Diatomic: U = 2.5 RT (slope = 2.5R) -->
  <line x1="80" y1="330" x2="450" y2="125" stroke="#10b981" stroke-width="3"/>
  <text x="460" y="130" fill="#10b981" font-family="system-ui, sans-serif" font-size="14" font-weight="bold">Diatomic (f=5, Slope=2.5R)</text>

  <!-- Monoatomic: U = 1.5 RT (slope = 1.5R) -->
  <line x1="80" y1="330" x2="470" y2="200" stroke="#38bdf8" stroke-width="3"/>
  <text x="480" y="205" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="14" font-weight="bold">Monoatomic (f=3, Slope=1.5R)</text>

  <!-- Box -->
  <rect x="95" y="65" width="220" height="95" rx="8" fill="#1e293b" stroke="#475569" stroke-width="1.2"/>
  <text x="110" y="88" fill="#f8fafc" font-family="system-ui, sans-serif" font-size="13" font-weight="bold">U = (f/2) RT</text>
  <text x="110" y="108" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="12">Slope = dU/dT = C_v = (f/2)R</text>
  <text x="110" y="128" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="12">f_poly (6) &gt; f_dia (5) &gt; f_mono (3)</text>
  <text x="110" y="146" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="12" font-weight="bold">Slope: Poly &gt; Dia &gt; Mono</text>
</svg>`;

// 13. test5_q1_maxwell_boltzmann_speed_distribution.svg
const test5_q1 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 380" width="100%" height="100%">
  <defs>
    <marker id="axisArrow13" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#94a3b8"/>
    </marker>
  </defs>

  <rect width="100%" height="100%" fill="#0f172a" rx="12"/>

  <!-- Title -->
  <text x="270" y="32" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="16" font-weight="bold" text-anchor="middle">Maxwell-Boltzmann Distribution: v_mp, v_avg, and v_rms</text>

  <!-- Axes -->
  <line x1="70" y1="330" x2="70" y2="45" stroke="#94a3b8" stroke-width="2.5" marker-end="url(#axisArrow13)"/>
  <line x1="70" y1="330" x2="510" y2="330" stroke="#94a3b8" stroke-width="2.5" marker-end="url(#axisArrow13)"/>

  <!-- Labels -->
  <text x="45" y="55" fill="#f8fafc" font-family="system-ui, sans-serif" font-size="15" font-weight="bold" text-anchor="middle">dN/dv</text>
  <text x="45" y="75" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11" text-anchor="middle">(Fraction)</text>

  <text x="495" y="358" fill="#f8fafc" font-family="system-ui, sans-serif" font-size="15" font-weight="bold" text-anchor="middle">v</text>
  <text x="495" y="372" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11" text-anchor="middle">(Speed)</text>
  <text x="60" y="348" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="13">O</text>

  <!-- Maxwell Curve -->
  <path d="M 70 330 C 110 330, 160 80, 210 80 C 270 80, 340 280, 480 325" fill="none" stroke="#38bdf8" stroke-width="3.5"/>

  <!-- Shaded area indicator -->
  <path d="M 70 330 C 110 330, 160 80, 210 80 C 270 80, 340 280, 480 325 L 480 330 Z" fill="#38bdf8" fill-opacity="0.12"/>

  <!-- Peak: v_mp at x=210, y=80 -->
  <line x1="210" y1="80" x2="210" y2="330" stroke="#ef4444" stroke-dasharray="4,4" stroke-width="2"/>
  <circle cx="210" cy="80" r="5" fill="#ef4444"/>
  <text x="210" y="348" fill="#ef4444" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" text-anchor="middle">v_mp</text>

  <!-- Middle: v_avg at x=237, y=105 -->
  <line x1="237" y1="105" x2="237" y2="330" stroke="#10b981" stroke-dasharray="4,4" stroke-width="2"/>
  <circle cx="237" cy="105" r="5" fill="#10b981"/>
  <text x="245" y="365" fill="#10b981" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" text-anchor="middle">v_avg</text>

  <!-- Right: v_rms at x=258, y=135 -->
  <line x1="258" y1="135" x2="258" y2="330" stroke="#f59e0b" stroke-dasharray="4,4" stroke-width="2"/>
  <circle cx="258" cy="135" r="5" fill="#f59e0b"/>
  <text x="280" y="348" fill="#f59e0b" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" text-anchor="middle">v_rms</text>

  <!-- Speed Comparison Legend Box -->
  <rect x="310" y="65" width="215" height="135" rx="8" fill="#1e293b" stroke="#475569" stroke-width="1.2"/>
  <text x="325" y="88" fill="#f8fafc" font-family="system-ui, sans-serif" font-size="13" font-weight="bold">Speed Comparison:</text>
  <text x="325" y="110" fill="#ef4444" font-family="system-ui, sans-serif" font-size="12">v_mp = √(2RT/M) ≈ 1.414 c</text>
  <text x="325" y="130" fill="#10b981" font-family="system-ui, sans-serif" font-size="12">v_avg = √(8RT/πM) ≈ 1.596 c</text>
  <text x="325" y="150" fill="#f59e0b" font-family="system-ui, sans-serif" font-size="12">v_rms = √(3RT/M) ≈ 1.732 c</text>
  <text x="325" y="172" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="12" font-weight="bold">v_mp &lt; v_avg &lt; v_rms</text>
  <text x="325" y="190" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11">Ratio: 1 : 1.128 : 1.224</text>
</svg>`;

// 14. test5_q2_maxwell_distribution_two_temperatures.svg
const test5_q2 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 380" width="100%" height="100%">
  <defs>
    <marker id="axisArrow14" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#94a3b8"/>
    </marker>
  </defs>

  <rect width="100%" height="100%" fill="#0f172a" rx="12"/>

  <!-- Title -->
  <text x="270" y="32" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="16" font-weight="bold" text-anchor="middle">Maxwell Speed Distribution at Two Temperatures (T₂ &gt; T₁)</text>

  <!-- Axes -->
  <line x1="70" y1="330" x2="70" y2="45" stroke="#94a3b8" stroke-width="2.5" marker-end="url(#axisArrow14)"/>
  <line x1="70" y1="330" x2="510" y2="330" stroke="#94a3b8" stroke-width="2.5" marker-end="url(#axisArrow14)"/>

  <!-- Labels -->
  <text x="45" y="55" fill="#f8fafc" font-family="system-ui, sans-serif" font-size="15" font-weight="bold" text-anchor="middle">dN/dv</text>
  <text x="495" y="358" fill="#f8fafc" font-family="system-ui, sans-serif" font-size="15" font-weight="bold" text-anchor="middle">v</text>
  <text x="60" y="348" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="13">O</text>

  <!-- Curve 1 at T1 (Narrower, higher peak) -->
  <path d="M 70 330 C 110 330, 150 70, 190 70 C 240 70, 290 290, 420 328" fill="none" stroke="#38bdf8" stroke-width="3"/>
  <circle cx="190" cy="70" r="5" fill="#38bdf8"/>
  <line x1="190" y1="70" x2="190" y2="330" stroke="#38bdf8" stroke-dasharray="3,3" stroke-width="1.5"/>
  <text x="200" y="65" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="14" font-weight="bold">T₁</text>

  <!-- Curve 2 at T2 > T1 (Broadened, lower peak shifted right) -->
  <path d="M 70 330 C 120 330, 200 150, 270 150 C 340 150, 410 270, 490 326" fill="none" stroke="#f43f5e" stroke-width="3"/>
  <circle cx="270" cy="150" r="5" fill="#f43f5e"/>
  <line x1="270" y1="150" x2="270" y2="330" stroke="#f43f5e" stroke-dasharray="3,3" stroke-width="1.5"/>
  <text x="280" y="145" fill="#f43f5e" font-family="system-ui, sans-serif" font-size="14" font-weight="bold">T₂ (T₂ &gt; T₁)</text>

  <!-- Shift Arrow -->
  <path d="M 205 105 Q 240 100 255 135" fill="none" stroke="#f59e0b" stroke-width="2"/>
  <polygon points="255,142 248,132 258,130" fill="#f59e0b"/>

  <!-- Explanation Box -->
  <rect x="290" y="175" width="235" height="110" rx="8" fill="#1e293b" stroke="#475569" stroke-width="1.2"/>
  <text x="305" y="198" fill="#f8fafc" font-family="system-ui, sans-serif" font-size="13" font-weight="bold">As Temperature Increases:</text>
  <text x="305" y="218" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="12">• Peak shifts right (v_mp increases)</text>
  <text x="305" y="236" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="12">• Peak height drops (distribution flattens)</text>
  <text x="305" y="254" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="12">• High-speed tail broadens</text>
  <text x="305" y="272" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="12" font-weight="bold">Total area under curve is constant (= N)</text>
</svg>`;

// 15. test5_q3_mean_free_path_collision_cylinder.svg
const test5_q3 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 380" width="100%" height="100%">
  <defs>
    <marker id="axisArrow15" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#38bdf8"/>
    </marker>
  </defs>

  <rect width="100%" height="100%" fill="#0f172a" rx="12"/>

  <!-- Title -->
  <text x="270" y="32" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="16" font-weight="bold" text-anchor="middle">Mean Free Path: Molecular Collision Cylinder Concept</text>

  <!-- Collision Cylinder -->
  <!-- Left face ellipse at (140, 160) rx=25, ry=55 -->
  <ellipse cx="140" cy="160" rx="25" ry="55" fill="#1e293b" stroke="#38bdf8" stroke-width="2.5"/>

  <!-- Cylinder Body -->
  <path d="M 140 105 L 400 105 L 400 215 L 140 215 Z" fill="#38bdf8" fill-opacity="0.1" stroke="none"/>
  <line x1="140" y1="105" x2="400" y2="105" stroke="#38bdf8" stroke-width="2"/>
  <line x1="140" y1="215" x2="400" y2="215" stroke="#38bdf8" stroke-width="2"/>

  <!-- Right face ellipse at (400, 160) -->
  <ellipse cx="400" cy="160" rx="25" ry="55" fill="#38bdf8" fill-opacity="0.25" stroke="#38bdf8" stroke-width="2.5"/>

  <!-- Center trajectory line -->
  <line x1="140" y1="160" x2="425" y2="160" stroke="#f59e0b" stroke-dasharray="4,4" stroke-width="2" marker-end="url(#axisArrow15)"/>
  <text x="435" y="165" fill="#f59e0b" font-family="system-ui, sans-serif" font-size="13" font-weight="bold">v_avg t</text>

  <!-- Moving molecule at center of left face -->
  <circle cx="140" cy="160" r="18" fill="#0284c7" stroke="#38bdf8" stroke-width="2"/>
  <text x="140" y="165" fill="#ffffff" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" text-anchor="middle">d</text>

  <!-- Target molecule on edge of cylinder -->
  <circle cx="310" cy="115" r="18" fill="#f43f5e" stroke="#fda4af" stroke-width="2"/>
  <text x="310" y="120" fill="#ffffff" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" text-anchor="middle">d</text>

  <!-- Diameter label -->
  <line x1="110" y1="105" x2="110" y2="215" stroke="#94a3b8" stroke-width="1.5"/>
  <line x1="105" y1="105" x2="115" y2="105" stroke="#94a3b8" stroke-width="1.5"/>
  <line x1="105" y1="215" x2="115" y2="215" stroke="#94a3b8" stroke-width="1.5"/>
  <text x="95" y="165" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" text-anchor="end">2d</text>

  <!-- Cross section area label -->
  <text x="400" y="240" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" text-anchor="middle">Area = π d²</text>

  <!-- Summary Box -->
  <rect x="60" y="275" width="420" height="85" rx="8" fill="#1e293b" stroke="#475569" stroke-width="1.2"/>
  <text x="75" y="298" fill="#f8fafc" font-family="system-ui, sans-serif" font-size="13" font-weight="bold">Mean Free Path Formula:</text>
  <text x="75" y="320" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="13" font-weight="bold">λ = 1 / (√2 π d² n) = (k_B T) / (√2 π d² P)</text>
  <text x="75" y="342" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="12">• At constant volume (fixed n): λ is independent of T and P</text>
  <text x="75" y="354" fill="#f59e0b" font-family="system-ui, sans-serif" font-size="11">• At constant pressure: λ ∝ T; At constant temperature: λ ∝ 1/P</text>
</svg>`;

const diagrams = [
  { name: 'test1_q1_boyle_law_pv_isotherms.svg', content: test1_q1 },
  { name: 'test1_q2_charles_law_vt_isobars.svg', content: test1_q2 },
  { name: 'test1_q3_gay_lussac_pt_isochores.svg', content: test1_q3 },
  { name: 'test2_q1_molecular_collision_container_wall.svg', content: test2_q1 },
  { name: 'test2_q2_kinetic_energy_vs_absolute_temperature.svg', content: test2_q2 },
  { name: 'test2_q3_vrms_vs_sqrt_t_and_molar_mass.svg', content: test2_q3 },
  { name: 'test3_q1_degrees_of_freedom_monoatomic.svg', content: test3_q1 },
  { name: 'test3_q2_degrees_of_freedom_diatomic.svg', content: test3_q2 },
  { name: 'test3_q3_degrees_of_freedom_polyatomic_triangular.svg', content: test3_q3 },
  { name: 'test4_q1_equipartition_energy_split_diatomic.svg', content: test4_q1 },
  { name: 'test4_q2_cv_vs_temperature_hydrogen.svg', content: test4_q2 },
  { name: 'test4_q3_internal_energy_vs_temperature_gases.svg', content: test4_q3 },
  { name: 'test5_q1_maxwell_boltzmann_speed_distribution.svg', content: test5_q1 },
  { name: 'test5_q2_maxwell_distribution_two_temperatures.svg', content: test5_q2 },
  { name: 'test5_q3_mean_free_path_collision_cylinder.svg', content: test5_q3 }
];

for (const d of diagrams) {
  const filePath = path.join(outDir, d.name);
  fs.writeFileSync(filePath, d.content, 'utf8');
  console.log(`Generated: ${filePath}`);
}

console.log("\nAll 15 SVG diagrams generated successfully!");
