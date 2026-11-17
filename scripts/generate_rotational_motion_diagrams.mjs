import fs from "fs";
import path from "path";

const dir = path.join(process.cwd(), "public/images/diagrams/rotational_motion");
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

const diagrams = [
  // ------------------------------------------------------------------------
  // TEST 1: CENTER OF MASS
  // ------------------------------------------------------------------------
  {
    filename: "test1_q1_triangle_three_masses.svg",
    content: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 320" width="100%" height="100%">
  <rect width="500" height="320" fill="#0f172a" rx="12"/>
  <defs>
    <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#94a3b8"/>
    </marker>
  </defs>

  <!-- Axes -->
  <line x1="60" y1="260" x2="440" y2="260" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrow)"/>
  <line x1="100" y1="280" x2="100" y2="40" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrow)"/>
  <text x="430" y="285" fill="#94a3b8" font-size="14" font-family="sans-serif">x</text>
  <text x="80" y="50" fill="#94a3b8" font-size="14" font-family="sans-serif">y</text>

  <!-- Equilateral triangle outline -->
  <polygon points="100,260 340,260 220,52" fill="rgba(56, 189, 248, 0.08)" stroke="#38bdf8" stroke-width="2.5" stroke-dasharray="6,4"/>

  <!-- Masses -->
  <!-- m1 at (0,0) -->
  <circle cx="100" cy="260" r="14" fill="#38bdf8" stroke="#ffffff" stroke-width="2"/>
  <text x="100" y="265" fill="#0f172a" font-size="12" font-weight="bold" font-family="sans-serif" text-anchor="middle">m₁</text>
  <text x="65" y="255" fill="#e2e8f0" font-size="13" font-family="sans-serif">1 kg (0,0)</text>

  <!-- m2 at (L,0) -->
  <circle cx="340" cy="260" r="16" fill="#38bdf8" stroke="#ffffff" stroke-width="2"/>
  <text x="340" y="265" fill="#0f172a" font-size="12" font-weight="bold" font-family="sans-serif" text-anchor="middle">m₂</text>
  <text x="340" y="295" fill="#e2e8f0" font-size="13" font-family="sans-serif" text-anchor="middle">2 kg (L, 0)</text>

  <!-- m3 at (L/2, sqrt(3)/2 L) -->
  <circle cx="220" cy="52" r="18" fill="#38bdf8" stroke="#ffffff" stroke-width="2"/>
  <text x="220" y="57" fill="#0f172a" font-size="12" font-weight="bold" font-family="sans-serif" text-anchor="middle">m₃</text>
  <text x="220" y="25" fill="#e2e8f0" font-size="13" font-family="sans-serif" text-anchor="middle">3 kg (L/2, √3L/2)</text>

  <!-- Side length label -->
  <line x1="100" y1="275" x2="340" y2="275" stroke="#cbd5e1" stroke-width="1.5"/>
  <text x="220" y="295" fill="#38bdf8" font-size="14" font-weight="bold" font-family="sans-serif" text-anchor="middle">Side = L = 1 m</text>

  <!-- Center of mass marker -->
  <circle cx="200" cy="156" r="6" fill="#ef4444" stroke="#ffffff" stroke-width="1.5"/>
  <text x="215" y="152" fill="#ef4444" font-size="13" font-weight="bold" font-family="sans-serif">CM (x_cm, y_cm)</text>
</svg>`
  },
  {
    filename: "test1_q2_l_shaped_lamina.svg",
    content: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 320" width="100%" height="100%">
  <rect width="480" height="320" fill="#0f172a" rx="12"/>
  <defs>
    <marker id="arrow2" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#94a3b8"/>
    </marker>
  </defs>

  <!-- Axes -->
  <line x1="50" y1="260" x2="420" y2="260" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrow2)"/>
  <line x1="80" y1="280" x2="80" y2="40" stroke="#94a3b8" stroke-width="2" marker-end="url(#arrow2)"/>
  <text x="410" y="285" fill="#94a3b8" font-size="14" font-family="sans-serif">x</text>
  <text x="60" y="50" fill="#94a3b8" font-size="14" font-family="sans-serif">y</text>
  <text x="65" y="275" fill="#94a3b8" font-size="14" font-family="sans-serif">O</text>

  <!-- L-shaped body made of 3 unit squares -->
  <polygon points="80,260 260,260 260,170 170,170 170,80 80,80" fill="rgba(14, 165, 233, 0.2)" stroke="#0ea5e9" stroke-width="3"/>

  <!-- Grid division lines -->
  <line x1="170" y1="260" x2="170" y2="170" stroke="#0ea5e9" stroke-width="1.5" stroke-dasharray="4,4"/>
  <line x1="80" y1="170" x2="170" y2="170" stroke="#0ea5e9" stroke-width="1.5" stroke-dasharray="4,4"/>

  <!-- Centroids of each square -->
  <circle cx="125" cy="215" r="5" fill="#38bdf8"/>
  <text x="125" y="235" fill="#cbd5e1" font-size="11" font-family="sans-serif" text-anchor="middle">C₁(L/2, L/2)</text>

  <circle cx="215" cy="215" r="5" fill="#38bdf8"/>
  <text x="215" y="235" fill="#cbd5e1" font-size="11" font-family="sans-serif" text-anchor="middle">C₂(3L/2, L/2)</text>

  <circle cx="125" cy="125" r="5" fill="#38bdf8"/>
  <text x="125" y="105" fill="#cbd5e1" font-size="11" font-family="sans-serif" text-anchor="middle">C₃(L/2, 3L/2)</text>

  <!-- Center of mass of whole lamina -->
  <circle cx="155" cy="185" r="7" fill="#ef4444" stroke="#ffffff" stroke-width="1.5"/>
  <text x="175" y="190" fill="#ef4444" font-size="13" font-weight="bold" font-family="sans-serif">CM (5L/6, 5L/6)</text>

  <!-- Dimension labels -->
  <text x="125" y="278" fill="#94a3b8" font-size="12" font-family="sans-serif" text-anchor="middle">L</text>
  <text x="215" y="278" fill="#94a3b8" font-size="12" font-family="sans-serif" text-anchor="middle">L</text>
  <text x="50" y="215" fill="#94a3b8" font-size="12" font-family="sans-serif">L</text>
  <text x="50" y="125" fill="#94a3b8" font-size="12" font-family="sans-serif">L</text>
</svg>`
  },
  {
    filename: "test1_q3_two_particles_internal_forces.svg",
    content: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 240" width="100%" height="100%">
  <rect width="500" height="240" fill="#0f172a" rx="12"/>
  <defs>
    <marker id="forceArr" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#f59e0b"/>
    </marker>
  </defs>

  <!-- Smooth floor -->
  <line x1="40" y1="180" x2="460" y2="180" stroke="#64748b" stroke-width="3"/>
  <text x="250" y="210" fill="#94a3b8" font-size="13" font-family="sans-serif" text-anchor="middle">Frictionless Horizontal Surface (μ = 0)</text>

  <!-- Left block m1 -->
  <rect x="80" y="120" width="60" height="60" rx="6" fill="#38bdf8" stroke="#ffffff" stroke-width="2"/>
  <text x="110" y="155" fill="#0f172a" font-size="16" font-weight="bold" font-family="sans-serif" text-anchor="middle">m₁</text>

  <!-- Right block m2 -->
  <rect x="340" y="110" width="80" height="70" rx="6" fill="#38bdf8" stroke="#ffffff" stroke-width="2"/>
  <text x="380" y="152" fill="#0f172a" font-size="16" font-weight="bold" font-family="sans-serif" text-anchor="middle">m₂</text>

  <!-- Spring between blocks -->
  <path d="M 140 150 L 160 150 L 170 135 L 185 165 L 200 135 L 215 165 L 230 135 L 245 165 L 260 135 L 275 165 L 290 135 L 305 165 L 320 135 L 330 150 L 340 150" fill="none" stroke="#e2e8f0" stroke-width="3" stroke-linecap="round"/>

  <!-- Internal spring forces -->
  <line x1="140" y1="90" x2="190" y2="90" stroke="#f59e0b" stroke-width="3" marker-end="url(#forceArr)"/>
  <text x="165" y="80" fill="#f59e0b" font-size="13" font-weight="bold" font-family="sans-serif" text-anchor="middle">+F_spring</text>

  <line x1="340" y1="90" x2="290" y2="90" stroke="#f59e0b" stroke-width="3" marker-end="url(#forceArr)"/>
  <text x="315" y="80" fill="#f59e0b" font-size="13" font-weight="bold" font-family="sans-serif" text-anchor="middle">-F_spring</text>

  <!-- Center of mass -->
  <circle cx="245" cy="150" r="6" fill="#ef4444" stroke="#ffffff" stroke-width="1.5"/>
  <text x="245" y="125" fill="#ef4444" font-size="13" font-weight="bold" font-family="sans-serif" text-anchor="middle">CM (v_cm = 0, a_cm = 0)</text>
</svg>`
  },

  // ------------------------------------------------------------------------
  // TEST 2: TORQUE
  // ------------------------------------------------------------------------
  {
    filename: "test2_q1_pivoted_rod_angled_force.svg",
    content: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 260" width="100%" height="100%">
  <rect width="500" height="260" fill="#0f172a" rx="12"/>
  <defs>
    <marker id="torqueArr" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#f59e0b"/>
    </marker>
  </defs>

  <!-- Pivot / Wall -->
  <line x1="80" y1="70" x2="80" y2="210" stroke="#64748b" stroke-width="4"/>
  <line x1="80" y1="80" x2="65" y2="95" stroke="#64748b" stroke-width="2"/>
  <line x1="80" y1="110" x2="65" y2="125" stroke="#64748b" stroke-width="2"/>
  <line x1="80" y1="140" x2="65" y2="155" stroke="#64748b" stroke-width="2"/>
  <line x1="80" y1="170" x2="65" y2="185" stroke="#64748b" stroke-width="2"/>
  <line x1="80" y1="200" x2="65" y2="215" stroke="#64748b" stroke-width="2"/>

  <!-- Hinge Pin -->
  <circle cx="80" cy="140" r="8" fill="#94a3b8" stroke="#ffffff" stroke-width="2"/>
  <text x="80" y="165" fill="#cbd5e1" font-size="13" font-weight="bold" font-family="sans-serif" text-anchor="middle">Pivot O</text>

  <!-- Uniform rod of length L -->
  <rect x="80" y="134" width="280" height="12" rx="3" fill="#38bdf8" stroke="#ffffff" stroke-width="1.5"/>

  <!-- Rod length label -->
  <line x1="80" y1="180" x2="360" y2="180" stroke="#94a3b8" stroke-width="1.5"/>
  <line x1="80" y1="175" x2="80" y2="185" stroke="#94a3b8" stroke-width="1.5"/>
  <line x1="360" y1="175" x2="360" y2="185" stroke="#94a3b8" stroke-width="1.5"/>
  <text x="220" y="200" fill="#94a3b8" font-size="14" font-family="sans-serif" text-anchor="middle">Length = L</text>

  <!-- Applied Force at angle theta -->
  <line x1="360" y1="140" x2="430" y2="60" stroke="#f59e0b" stroke-width="3" marker-end="url(#torqueArr)"/>
  <text x="445" y="65" fill="#f59e0b" font-size="16" font-weight="bold" font-family="sans-serif">F</text>

  <!-- Dotted line extension & angle -->
  <line x1="360" y1="140" x2="440" y2="140" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4"/>
  <path d="M 400 140 A 40 40 0 0 0 395 105" fill="none" stroke="#38bdf8" stroke-width="2"/>
  <text x="415" y="125" fill="#38bdf8" font-size="14" font-weight="bold" font-family="sans-serif">θ = 30°</text>

  <!-- Perpendicular arm -->
  <line x1="80" y1="140" x2="250" y2="65" stroke="#ec4899" stroke-width="1.5" stroke-dasharray="3,3"/>
  <text x="210" y="55" fill="#ec4899" font-size="12" font-family="sans-serif">d_⊥ = L sin θ</text>
</svg>`
  },
  {
    filename: "test2_q2_seesaw_equilibrium.svg",
    content: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 240" width="100%" height="100%">
  <rect width="500" height="240" fill="#0f172a" rx="12"/>

  <!-- Ground -->
  <line x1="50" y1="200" x2="450" y2="200" stroke="#64748b" stroke-width="2"/>

  <!-- Fulcrum (wedge) -->
  <polygon points="250,130 230,195 270,195" fill="#94a3b8" stroke="#ffffff" stroke-width="2"/>
  <text x="250" y="218" fill="#cbd5e1" font-size="13" font-weight="bold" font-family="sans-serif" text-anchor="middle">Fulcrum</text>

  <!-- Horizontal Beam -->
  <rect x="70" y="120" width="360" height="10" rx="3" fill="#38bdf8" stroke="#ffffff" stroke-width="1.5"/>

  <!-- Mass m1 on left -->
  <rect x="110" y="70" width="50" height="50" rx="5" fill="#f59e0b" stroke="#ffffff" stroke-width="2"/>
  <text x="135" y="100" fill="#0f172a" font-size="14" font-weight="bold" font-family="sans-serif" text-anchor="middle">m₁</text>

  <!-- Mass m2 on right -->
  <rect x="360" y="85" width="40" height="35" rx="5" fill="#f59e0b" stroke="#ffffff" stroke-width="2"/>
  <text x="380" y="108" fill="#0f172a" font-size="13" font-weight="bold" font-family="sans-serif" text-anchor="middle">m₂</text>

  <!-- Distances -->
  <!-- d1 -->
  <line x1="135" y1="145" x2="250" y2="145" stroke="#cbd5e1" stroke-width="1.5"/>
  <line x1="135" y1="140" x2="135" y2="150" stroke="#cbd5e1" stroke-width="1.5"/>
  <line x1="250" y1="140" x2="250" y2="150" stroke="#cbd5e1" stroke-width="1.5"/>
  <text x="192" y="165" fill="#38bdf8" font-size="13" font-family="sans-serif" text-anchor="middle">d₁ = 1.5 m</text>

  <!-- d2 -->
  <line x1="250" y1="145" x2="380" y2="145" stroke="#cbd5e1" stroke-width="1.5"/>
  <line x1="380" y1="140" x2="380" y2="150" stroke="#cbd5e1" stroke-width="1.5"/>
  <text x="315" y="165" fill="#38bdf8" font-size="13" font-family="sans-serif" text-anchor="middle">d₂ = 2.5 m</text>

  <!-- Equilibrium condition label -->
  <text x="250" y="45" fill="#10b981" font-size="14" font-weight="bold" font-family="sans-serif" text-anchor="middle">Rotational Equilibrium: m₁ g d₁ = m₂ g d₂</text>
</svg>`
  },
  {
    filename: "test2_q3_couple_forces.svg",
    content: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 460 280" width="100%" height="100%">
  <rect width="460" height="280" fill="#0f172a" rx="12"/>
  <defs>
    <marker id="cArr" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#f59e0b"/>
    </marker>
  </defs>

  <!-- Steering Wheel / Circular disc -->
  <circle cx="230" cy="140" r="80" fill="none" stroke="#38bdf8" stroke-width="5"/>
  <circle cx="230" cy="140" r="12" fill="#94a3b8" stroke="#ffffff" stroke-width="2"/>

  <!-- Spokes -->
  <line x1="230" y1="60" x2="230" y2="220" stroke="#38bdf8" stroke-width="3"/>
  <line x1="150" y1="140" x2="310" y2="140" stroke="#38bdf8" stroke-width="3"/>

  <!-- Force at top pointing right -->
  <line x1="230" y1="60" x2="320" y2="60" stroke="#f59e0b" stroke-width="3.5" marker-end="url(#cArr)"/>
  <text x="335" y="65" fill="#f59e0b" font-size="16" font-weight="bold" font-family="sans-serif">+F</text>

  <!-- Force at bottom pointing left -->
  <line x1="230" y1="220" x2="140" y2="220" stroke="#f59e0b" stroke-width="3.5" marker-end="url(#cArr)"/>
  <text x="110" y="225" fill="#f59e0b" font-size="16" font-weight="bold" font-family="sans-serif">-F</text>

  <!-- Arm d between forces -->
  <line x1="245" y1="60" x2="245" y2="220" stroke="#ec4899" stroke-width="1.5" stroke-dasharray="4,4"/>
  <line x1="240" y1="60" x2="250" y2="60" stroke="#ec4899" stroke-width="1.5"/>
  <line x1="240" y1="220" x2="250" y2="220" stroke="#ec4899" stroke-width="1.5"/>
  <text x="270" y="145" fill="#ec4899" font-size="14" font-weight="bold" font-family="sans-serif">Arm d = 2R</text>

  <text x="230" y="25" fill="#e2e8f0" font-size="14" font-weight="bold" font-family="sans-serif" text-anchor="middle">Couple Torque: τ = F × d (Pure Rotation)</text>
</svg>`
  },

  // ------------------------------------------------------------------------
  // TEST 3: MOMENT OF INERTIA
  // ------------------------------------------------------------------------
  {
    filename: "test3_q1_rod_center_vs_end.svg",
    content: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 280" width="100%" height="100%">
  <rect width="520" height="280" fill="#0f172a" rx="12"/>
  <defs>
    <marker id="rotArr" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#f59e0b"/>
    </marker>
  </defs>

  <!-- Left: Central transverse axis -->
  <g transform="translate(10, 0)">
    <!-- Central axis -->
    <line x1="130" y1="30" x2="130" y2="210" stroke="#f59e0b" stroke-width="2.5" stroke-dasharray="6,4"/>
    <ellipse cx="130" cy="50" rx="20" ry="8" fill="none" stroke="#f59e0b" stroke-width="2" marker-end="url(#rotArr)"/>
    <text x="130" y="25" fill="#f59e0b" font-size="12" font-weight="bold" font-family="sans-serif" text-anchor="middle">Axis (CM)</text>

    <!-- Rod -->
    <rect x="30" y="115" width="200" height="12" rx="4" fill="#38bdf8" stroke="#ffffff" stroke-width="1.5"/>
    <circle cx="130" cy="121" r="4" fill="#ef4444"/>

    <!-- Formula -->
    <text x="130" y="165" fill="#38bdf8" font-size="14" font-weight="bold" font-family="sans-serif" text-anchor="middle">I_cm = (1/12) ML²</text>
    <text x="130" y="190" fill="#94a3b8" font-size="12" font-family="sans-serif" text-anchor="middle">k = L / √12</text>
  </g>

  <!-- Divider -->
  <line x1="260" y1="20" x2="260" y2="260" stroke="#334155" stroke-width="2"/>

  <!-- Right: End transverse axis -->
  <g transform="translate(260, 0)">
    <!-- End axis -->
    <line x1="40" y1="30" x2="40" y2="210" stroke="#f59e0b" stroke-width="2.5" stroke-dasharray="6,4"/>
    <ellipse cx="40" cy="50" rx="20" ry="8" fill="none" stroke="#f59e0b" stroke-width="2" marker-end="url(#rotArr)"/>
    <text x="40" y="25" fill="#f59e0b" font-size="12" font-weight="bold" font-family="sans-serif" text-anchor="middle">Axis (End)</text>

    <!-- Rod -->
    <rect x="40" y="115" width="200" height="12" rx="4" fill="#38bdf8" stroke="#ffffff" stroke-width="1.5"/>
    <circle cx="140" cy="121" r="4" fill="#ef4444"/>
    <circle cx="40" cy="121" r="4" fill="#f59e0b"/>

    <!-- Formula -->
    <text x="140" y="165" fill="#38bdf8" font-size="14" font-weight="bold" font-family="sans-serif" text-anchor="middle">I_end = (1/3) ML²</text>
    <text x="140" y="190" fill="#94a3b8" font-size="12" font-family="sans-serif" text-anchor="middle">k = L / √3</text>
  </g>
</svg>`
  },
  {
    filename: "test3_q2_four_masses_square.svg",
    content: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 300" width="100%" height="100%">
  <rect width="480" height="300" fill="#0f172a" rx="12"/>
  <defs>
    <marker id="sqRot" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#f59e0b"/>
    </marker>
  </defs>

  <!-- Rotation axis through left side AB -->
  <line x1="140" y1="20" x2="140" y2="280" stroke="#f59e0b" stroke-width="3" stroke-dasharray="6,4"/>
  <ellipse cx="140" cy="40" rx="18" ry="7" fill="none" stroke="#f59e0b" stroke-width="2" marker-end="url(#sqRot)"/>
  <text x="140" y="15" fill="#f59e0b" font-size="12" font-weight="bold" font-family="sans-serif" text-anchor="middle">Rotation Axis</text>

  <!-- Square frame (massless rods) -->
  <polygon points="140,80 300,80 300,240 140,240" fill="rgba(56, 189, 248, 0.05)" stroke="#64748b" stroke-width="2"/>

  <!-- Masses at 4 corners -->
  <!-- Corner A -->
  <circle cx="140" cy="80" r="12" fill="#38bdf8" stroke="#ffffff" stroke-width="2"/>
  <text x="115" y="85" fill="#38bdf8" font-size="13" font-family="sans-serif">m (A)</text>

  <!-- Corner B -->
  <circle cx="140" cy="240" r="12" fill="#38bdf8" stroke="#ffffff" stroke-width="2"/>
  <text x="115" y="245" fill="#38bdf8" font-size="13" font-family="sans-serif">m (B)</text>

  <!-- Corner C -->
  <circle cx="300" cy="240" r="12" fill="#38bdf8" stroke="#ffffff" stroke-width="2"/>
  <text x="325" y="245" fill="#38bdf8" font-size="13" font-family="sans-serif">m (C)</text>

  <!-- Corner D -->
  <circle cx="300" cy="80" r="12" fill="#38bdf8" stroke="#ffffff" stroke-width="2"/>
  <text x="325" y="85" fill="#38bdf8" font-size="13" font-family="sans-serif">m (D)</text>

  <!-- Side a label -->
  <line x1="140" y1="260" x2="300" y2="260" stroke="#cbd5e1" stroke-width="1.5"/>
  <line x1="140" y1="255" x2="140" y2="265" stroke="#cbd5e1" stroke-width="1.5"/>
  <line x1="300" y1="255" x2="300" y2="265" stroke="#cbd5e1" stroke-width="1.5"/>
  <text x="220" y="280" fill="#cbd5e1" font-size="14" font-family="sans-serif" text-anchor="middle">Side = a</text>

  <text x="380" y="160" fill="#f59e0b" font-size="14" font-weight="bold" font-family="sans-serif">I = 2 m a²</text>
</svg>`
  },
  {
    filename: "test3_q3_ring_disc_annular.svg",
    content: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 260" width="100%" height="100%">
  <rect width="520" height="260" fill="#0f172a" rx="12"/>

  <!-- Left: Thin Ring -->
  <g transform="translate(20, 0)">
    <circle cx="80" cy="110" r="50" fill="none" stroke="#38bdf8" stroke-width="8"/>
    <circle cx="80" cy="110" r="5" fill="#ef4444"/>
    <line x1="80" y1="110" x2="130" y2="110" stroke="#ffffff" stroke-width="1.5"/>
    <text x="105" y="105" fill="#ffffff" font-size="11" font-family="sans-serif">R</text>
    <text x="80" y="190" fill="#e2e8f0" font-size="14" font-weight="bold" font-family="sans-serif" text-anchor="middle">Thin Ring</text>
    <text x="80" y="215" fill="#38bdf8" font-size="13" font-family="sans-serif" text-anchor="middle">I = M R²</text>
    <text x="80" y="235" fill="#94a3b8" font-size="12" font-family="sans-serif" text-anchor="middle">k = R</text>
  </g>

  <!-- Middle: Uniform Disc -->
  <g transform="translate(180, 0)">
    <circle cx="80" cy="110" r="50" fill="rgba(56, 189, 248, 0.25)" stroke="#38bdf8" stroke-width="2"/>
    <circle cx="80" cy="110" r="5" fill="#ef4444"/>
    <line x1="80" y1="110" x2="130" y2="110" stroke="#ffffff" stroke-width="1.5"/>
    <text x="105" y="105" fill="#ffffff" font-size="11" font-family="sans-serif">R</text>
    <text x="80" y="190" fill="#e2e8f0" font-size="14" font-weight="bold" font-family="sans-serif" text-anchor="middle">Uniform Disc</text>
    <text x="80" y="215" fill="#38bdf8" font-size="13" font-family="sans-serif" text-anchor="middle">I = (1/2) M R²</text>
    <text x="80" y="235" fill="#94a3b8" font-size="12" font-family="sans-serif" text-anchor="middle">k = R / √2</text>
  </g>

  <!-- Right: Solid Sphere -->
  <g transform="translate(340, 0)">
    <circle cx="80" cy="110" r="50" fill="rgba(147, 51, 234, 0.25)" stroke="#a855f7" stroke-width="2"/>
    <ellipse cx="80" cy="110" rx="50" ry="16" fill="none" stroke="#a855f7" stroke-width="1.5" stroke-dasharray="4,3"/>
    <circle cx="80" cy="110" r="5" fill="#ef4444"/>
    <line x1="80" y1="110" x2="130" y2="110" stroke="#ffffff" stroke-width="1.5"/>
    <text x="105" y="105" fill="#ffffff" font-size="11" font-family="sans-serif">R</text>
    <text x="80" y="190" fill="#e2e8f0" font-size="14" font-weight="bold" font-family="sans-serif" text-anchor="middle">Solid Sphere</text>
    <text x="80" y="215" fill="#a855f7" font-size="13" font-family="sans-serif" text-anchor="middle">I = (2/5) M R²</text>
    <text x="80" y="235" fill="#94a3b8" font-size="12" font-family="sans-serif" text-anchor="middle">k = √(2/5) R</text>
  </g>
</svg>`
  },

  // ------------------------------------------------------------------------
  // TEST 4: THEOREMS OF PARALLEL AND PERPENDICULAR AXES
  // ------------------------------------------------------------------------
  {
    filename: "test4_q1_parallel_axes_rod.svg",
    content: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 280" width="100%" height="100%">
  <rect width="500" height="280" fill="#0f172a" rx="12"/>

  <!-- Rod -->
  <rect x="50" y="130" width="400" height="16" rx="4" fill="#38bdf8" stroke="#ffffff" stroke-width="1.5"/>

  <!-- Center of mass axis (CM) -->
  <line x1="250" y1="30" x2="250" y2="240" stroke="#ef4444" stroke-width="2.5" stroke-dasharray="6,4"/>
  <circle cx="250" cy="138" r="5" fill="#ef4444"/>
  <text x="250" y="20" fill="#ef4444" font-size="13" font-weight="bold" font-family="sans-serif" text-anchor="middle">Axis CM (I_cm = ML²/12)</text>

  <!-- Parallel axis at distance d -->
  <line x1="350" y1="30" x2="350" y2="240" stroke="#f59e0b" stroke-width="2.5" stroke-dasharray="6,4"/>
  <circle cx="350" cy="138" r="5" fill="#f59e0b"/>
  <text x="350" y="20" fill="#f59e0b" font-size="13" font-weight="bold" font-family="sans-serif" text-anchor="middle">Parallel Axis (I)</text>

  <!-- Separation distance d -->
  <line x1="250" y1="90" x2="350" y2="90" stroke="#cbd5e1" stroke-width="1.5"/>
  <line x1="250" y1="85" x2="250" y2="95" stroke="#cbd5e1" stroke-width="1.5"/>
  <line x1="350" y1="85" x2="350" y2="95" stroke="#cbd5e1" stroke-width="1.5"/>
  <text x="300" y="80" fill="#cbd5e1" font-size="14" font-family="sans-serif" text-anchor="middle">d = L/4</text>

  <!-- Parallel axis theorem formula -->
  <text x="250" y="265" fill="#10b981" font-size="15" font-weight="bold" font-family="sans-serif" text-anchor="middle">Parallel Axis Theorem: I = I_cm + M d² = (7/48) ML²</text>
</svg>`
  },
  {
    filename: "test4_q2_perpendicular_axes_disc.svg",
    content: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 300" width="100%" height="100%">
  <rect width="480" height="300" fill="#0f172a" rx="12"/>
  <defs>
    <marker id="discArr" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#38bdf8"/>
    </marker>
  </defs>

  <!-- Circular disc in xy plane (drawn in perspective) -->
  <ellipse cx="240" cy="170" rx="130" ry="60" fill="rgba(56, 189, 248, 0.15)" stroke="#38bdf8" stroke-width="2.5"/>

  <!-- x-axis (diameter) -->
  <line x1="80" y1="170" x2="400" y2="170" stroke="#f59e0b" stroke-width="2" marker-end="url(#discArr)"/>
  <text x="415" y="175" fill="#f59e0b" font-size="14" font-family="sans-serif">x (I_d)</text>

  <!-- y-axis (diameter) in perspective -->
  <line x1="290" y1="110" x2="190" y2="230" stroke="#f59e0b" stroke-width="2" marker-end="url(#discArr)"/>
  <text x="175" y="245" fill="#f59e0b" font-size="14" font-family="sans-serif">y (I_d)</text>

  <!-- z-axis (perpendicular to disc plane) -->
  <line x1="240" y1="240" x2="240" y2="40" stroke="#ef4444" stroke-width="3" marker-end="url(#discArr)"/>
  <text x="240" y="30" fill="#ef4444" font-size="15" font-weight="bold" font-family="sans-serif" text-anchor="middle">z-axis (I_z = MR²/2)</text>

  <!-- Perpendicular Axis Theorem relation -->
  <text x="240" y="275" fill="#10b981" font-size="14" font-weight="bold" font-family="sans-serif" text-anchor="middle">Perpendicular Axis Theorem: I_z = I_x + I_y = 2 I_d ⇒ I_d = MR²/4</text>
</svg>`
  },
  {
    filename: "test4_q3_square_lamina_axes.svg",
    content: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 300" width="100%" height="100%">
  <rect width="480" height="300" fill="#0f172a" rx="12"/>

  <!-- Square lamina -->
  <rect x="140" y="60" width="160" height="160" rx="4" fill="rgba(14, 165, 233, 0.2)" stroke="#0ea5e9" stroke-width="2.5"/>

  <!-- Axis 1 (horizontal midline) -->
  <line x1="90" y1="140" x2="350" y2="140" stroke="#f59e0b" stroke-width="2.5" stroke-dasharray="6,4"/>
  <text x="365" y="145" fill="#f59e0b" font-size="13" font-family="sans-serif">Axis 1 (I₁)</text>

  <!-- Axis 2 (vertical midline) -->
  <line x1="220" y1="20" x2="220" y2="260" stroke="#f59e0b" stroke-width="2.5" stroke-dasharray="6,4"/>
  <text x="220" y="280" fill="#f59e0b" font-size="13" font-family="sans-serif" text-anchor="middle">Axis 2 (I₂)</text>

  <!-- Diagonal axes (dashed) -->
  <line x1="120" y1="40" x2="320" y2="240" stroke="#a855f7" stroke-width="1.5" stroke-dasharray="4,4"/>
  <line x1="120" y1="240" x2="320" y2="40" stroke="#a855f7" stroke-width="1.5" stroke-dasharray="4,4"/>

  <!-- Center point -->
  <circle cx="220" cy="140" r="5" fill="#ef4444"/>
  <text x="235" y="130" fill="#ef4444" font-size="12" font-family="sans-serif">O</text>

  <!-- Theorem and formula -->
  <text x="240" y="25" fill="#10b981" font-size="13" font-weight="bold" font-family="sans-serif" text-anchor="middle">By symmetry & Perpendicular Axis Theorem: I₁ = I₂ = I_diag = Ma²/12</text>
</svg>`
  },

  // ------------------------------------------------------------------------
  // TEST 5: ANGULAR MOMENTUM CONSERVATION
  // ------------------------------------------------------------------------
  {
    filename: "test5_q1_rotating_platform_person.svg",
    content: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 280" width="100%" height="100%">
  <rect width="520" height="280" fill="#0f172a" rx="12"/>

  <!-- Left: Arms Extended -->
  <g transform="translate(40, 0)">
    <!-- Turntable -->
    <ellipse cx="100" cy="220" rx="70" ry="18" fill="rgba(56, 189, 248, 0.2)" stroke="#38bdf8" stroke-width="2"/>
    <!-- Person -->
    <circle cx="100" cy="90" r="16" fill="#fde047"/>
    <line x1="100" y1="106" x2="100" y2="180" stroke="#cbd5e1" stroke-width="6"/>
    <!-- Arms extended holding weights -->
    <line x1="30" y1="130" x2="170" y2="130" stroke="#cbd5e1" stroke-width="5"/>
    <circle cx="30" cy="130" r="10" fill="#f59e0b"/>
    <circle cx="170" cy="130" r="10" fill="#f59e0b"/>
    <!-- Labels -->
    <text x="100" y="45" fill="#38bdf8" font-size="14" font-weight="bold" font-family="sans-serif" text-anchor="middle">Arms Extended</text>
    <text x="100" y="250" fill="#cbd5e1" font-size="13" font-family="sans-serif" text-anchor="middle">Large I₁, Small ω₁</text>
  </g>

  <!-- Arrow between states -->
  <g transform="translate(240, 130)">
    <line x1="0" y1="0" x2="30" y2="0" stroke="#10b981" stroke-width="3"/>
    <polygon points="30,-6 42,0 30,6" fill="#10b981"/>
    <text x="20" y="-15" fill="#10b981" font-size="12" font-family="sans-serif" text-anchor="middle">Pull in</text>
  </g>

  <!-- Right: Arms Folded -->
  <g transform="translate(300, 0)">
    <!-- Turntable -->
    <ellipse cx="100" cy="220" rx="70" ry="18" fill="rgba(56, 189, 248, 0.2)" stroke="#38bdf8" stroke-width="2"/>
    <!-- Person -->
    <circle cx="100" cy="90" r="16" fill="#fde047"/>
    <line x1="100" y1="106" x2="100" y2="180" stroke="#cbd5e1" stroke-width="6"/>
    <!-- Arms folded holding weights close -->
    <line x1="80" y1="130" x2="120" y2="130" stroke="#cbd5e1" stroke-width="5"/>
    <circle cx="75" cy="130" r="10" fill="#f59e0b"/>
    <circle cx="125" cy="130" r="10" fill="#f59e0b"/>
    <!-- Fast rotation arrows -->
    <path d="M 60 215 A 40 10 0 0 1 140 215" fill="none" stroke="#f59e0b" stroke-width="2.5"/>
    <!-- Labels -->
    <text x="100" y="45" fill="#38bdf8" font-size="14" font-weight="bold" font-family="sans-serif" text-anchor="middle">Arms Folded</text>
    <text x="100" y="250" fill="#cbd5e1" font-size="13" font-family="sans-serif" text-anchor="middle">Small I₂, Large ω₂</text>
  </g>
</svg>`
  },
  {
    filename: "test5_q2_particle_moving_straight_line.svg",
    content: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 260" width="100%" height="100%">
  <rect width="480" height="260" fill="#0f172a" rx="12"/>
  <defs>
    <marker id="vArr" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#38bdf8"/>
    </marker>
  </defs>

  <!-- Axes -->
  <line x1="60" y1="210" x2="420" y2="210" stroke="#64748b" stroke-width="2"/>
  <line x1="100" y1="230" x2="100" y2="40" stroke="#64748b" stroke-width="2"/>
  <text x="430" y="215" fill="#94a3b8" font-size="13" font-family="sans-serif">x</text>
  <text x="100" y="30" fill="#94a3b8" font-size="13" font-family="sans-serif">y</text>
  <text x="80" y="225" fill="#cbd5e1" font-size="14" font-family="sans-serif">O (Origin)</text>

  <!-- Straight path line y = d -->
  <line x1="60" y1="90" x2="420" y2="90" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="5,4"/>

  <!-- Perpendicular distance d -->
  <line x1="100" y1="90" x2="100" y2="210" stroke="#ec4899" stroke-width="2"/>
  <text x="75" y="155" fill="#ec4899" font-size="14" font-weight="bold" font-family="sans-serif">d</text>

  <!-- Moving particle m at position r -->
  <circle cx="280" cy="90" r="10" fill="#38bdf8" stroke="#ffffff" stroke-width="2"/>
  <text x="280" y="70" fill="#e2e8f0" font-size="13" font-family="sans-serif" text-anchor="middle">Mass m</text>

  <!-- Velocity vector v -->
  <line x1="280" y1="90" x2="380" y2="90" stroke="#38bdf8" stroke-width="3" marker-end="url(#vArr)"/>
  <text x="350" y="75" fill="#38bdf8" font-size="14" font-weight="bold" font-family="sans-serif">v</text>

  <!-- Position vector r -->
  <line x1="100" y1="210" x2="275" y2="95" stroke="#f59e0b" stroke-width="2" stroke-dasharray="4,3"/>
  <text x="180" y="165" fill="#f59e0b" font-size="14" font-family="sans-serif">r</text>

  <!-- Formula -->
  <text x="240" y="245" fill="#10b981" font-size="14" font-weight="bold" font-family="sans-serif" text-anchor="middle">L = |r × p| = m v d = Constant (at all times)</text>
</svg>`
  },
  {
    filename: "test5_q3_two_discs_dropped.svg",
    content: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 280" width="100%" height="100%">
  <rect width="480" height="280" fill="#0f172a" rx="12"/>

  <!-- Vertical Spindle -->
  <line x1="240" y1="30" x2="240" y2="250" stroke="#94a3b8" stroke-width="3"/>

  <!-- Upper Disc (falling / dropped) -->
  <ellipse cx="240" cy="80" rx="90" ry="24" fill="rgba(147, 51, 234, 0.3)" stroke="#a855f7" stroke-width="2"/>
  <circle cx="240" cy="80" r="5" fill="#ffffff"/>
  <text x="360" y="85" fill="#a855f7" font-size="14" font-weight="bold" font-family="sans-serif">Disc 2 (I₂, ω₂ = 0)</text>

  <!-- Drop indicator arrows -->
  <line x1="200" y1="110" x2="200" y2="135" stroke="#a855f7" stroke-width="2"/>
  <line x1="280" y1="110" x2="280" y2="135" stroke="#a855f7" stroke-width="2"/>

  <!-- Lower Disc (rotating initially) -->
  <ellipse cx="240" cy="170" rx="110" ry="30" fill="rgba(56, 189, 248, 0.3)" stroke="#38bdf8" stroke-width="2.5"/>
  <circle cx="240" cy="170" r="5" fill="#ffffff"/>
  <text x="375" y="175" fill="#38bdf8" font-size="14" font-weight="bold" font-family="sans-serif">Disc 1 (I₁, ω₁ = ω₀)</text>

  <!-- Angular velocity arrow on Disc 1 -->
  <path d="M 180 185 A 70 20 0 0 0 300 185" fill="none" stroke="#f59e0b" stroke-width="2.5"/>
  <polygon points="300,182 308,185 304,192" fill="#f59e0b"/>

  <!-- Conservation formula -->
  <text x="240" y="260" fill="#10b981" font-size="14" font-weight="bold" font-family="sans-serif" text-anchor="middle">Common Angular Velocity: ω = (I₁ ω₀) / (I₁ + I₂)</text>
</svg>`
  },

  // ------------------------------------------------------------------------
  // TEST 6: ROLLING MOTION
  // ------------------------------------------------------------------------
  {
    filename: "test6_q1_pure_rolling_wheel.svg",
    content: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 300" width="100%" height="100%">
  <rect width="480" height="300" fill="#0f172a" rx="12"/>
  <defs>
    <marker id="wArr" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#38bdf8"/>
    </marker>
  </defs>

  <!-- Ground -->
  <line x1="40" y1="240" x2="440" y2="240" stroke="#64748b" stroke-width="3"/>

  <!-- Wheel -->
  <circle cx="240" cy="150" r="90" fill="rgba(56, 189, 248, 0.1)" stroke="#38bdf8" stroke-width="3"/>
  <circle cx="240" cy="150" r="6" fill="#ef4444"/>

  <!-- Top point velocity = 2 v_cm -->
  <circle cx="240" cy="60" r="4" fill="#f59e0b"/>
  <line x1="240" y1="60" x2="380" y2="60" stroke="#f59e0b" stroke-width="3" marker-end="url(#wArr)"/>
  <text x="390" y="65" fill="#f59e0b" font-size="14" font-weight="bold" font-family="sans-serif">v_top = 2 v_cm</text>

  <!-- Center point velocity = v_cm -->
  <line x1="240" y1="150" x2="310" y2="150" stroke="#38bdf8" stroke-width="3" marker-end="url(#wArr)"/>
  <text x="320" y="155" fill="#38bdf8" font-size="14" font-weight="bold" font-family="sans-serif">v_cm = Rω</text>

  <!-- Bottom contact point velocity = 0 -->
  <circle cx="240" cy="240" r="5" fill="#10b981"/>
  <text x="240" y="265" fill="#10b981" font-size="14" font-weight="bold" font-family="sans-serif" text-anchor="middle">v_contact = 0 (Instantaneous Rest)</text>

  <!-- Radius label -->
  <line x1="240" y1="150" x2="160" y2="110" stroke="#cbd5e1" stroke-width="1.5"/>
  <text x="195" y="125" fill="#cbd5e1" font-size="13" font-family="sans-serif">R</text>

  <text x="240" y="30" fill="#e2e8f0" font-size="14" font-weight="bold" font-family="sans-serif" text-anchor="middle">Pure Rolling: v_cm = R ω</text>
</svg>`
  },
  {
    filename: "test6_q2_rolling_down_incline.svg",
    content: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 280" width="100%" height="100%">
  <rect width="500" height="280" fill="#0f172a" rx="12"/>
  <defs>
    <marker id="fArr" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#f59e0b"/>
    </marker>
  </defs>

  <!-- Incline -->
  <polygon points="60,230 420,230 420,70" fill="rgba(100, 116, 139, 0.15)" stroke="#64748b" stroke-width="2.5"/>

  <!-- Angle theta -->
  <path d="M 110 230 A 50 50 0 0 0 102 210" fill="none" stroke="#38bdf8" stroke-width="2"/>
  <text x="125" y="222" fill="#38bdf8" font-size="14" font-family="sans-serif">θ</text>

  <!-- Rolling Sphere / Disc on incline -->
  <g transform="translate(260, 120) rotate(-24)">
    <circle cx="0" cy="-40" r="40" fill="rgba(56, 189, 248, 0.25)" stroke="#38bdf8" stroke-width="2.5"/>
    <circle cx="0" cy="-40" r="4" fill="#ef4444"/>

    <!-- Acceleration down incline -->
    <line x1="0" y1="-40" x2="-60" y2="-40" stroke="#10b981" stroke-width="3" marker-end="url(#fArr)"/>
    <text x="-75" y="-50" fill="#10b981" font-size="13" font-weight="bold" font-family="sans-serif">a_cm</text>

    <!-- Friction pointing UP incline -->
    <line x1="0" y1="0" x2="40" y2="0" stroke="#f59e0b" stroke-width="2.5" marker-end="url(#fArr)"/>
    <text x="45" y="-5" fill="#f59e0b" font-size="12" font-weight="bold" font-family="sans-serif">f_s (static friction)</text>
  </g>

  <!-- Formula -->
  <text x="250" y="260" fill="#10b981" font-size="14" font-weight="bold" font-family="sans-serif" text-anchor="middle">Acceleration: a = (g sin θ) / (1 + k²/R²)</text>
</svg>`
  },
  {
    filename: "test6_q3_cylinder_on_rough_floor.svg",
    content: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 260" width="100%" height="100%">
  <rect width="480" height="260" fill="#0f172a" rx="12"/>
  <defs>
    <marker id="pullArr" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#f59e0b"/>
    </marker>
  </defs>

  <!-- Ground -->
  <line x1="40" y1="210" x2="440" y2="210" stroke="#64748b" stroke-width="3"/>

  <!-- Cylinder cross section -->
  <circle cx="220" cy="130" r="80" fill="rgba(56, 189, 248, 0.15)" stroke="#38bdf8" stroke-width="3"/>
  <circle cx="220" cy="130" r="5" fill="#ef4444"/>
  <text x="235" y="135" fill="#ef4444" font-size="12" font-family="sans-serif">CM</text>

  <!-- Radius vertical line -->
  <line x1="220" y1="50" x2="220" y2="210" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4"/>

  <!-- Force F applied at height h above center -->
  <line x1="220" y1="90" x2="330" y2="90" stroke="#f59e0b" stroke-width="3.5" marker-end="url(#pullArr)"/>
  <text x="345" y="95" fill="#f59e0b" font-size="16" font-weight="bold" font-family="sans-serif">F</text>

  <!-- Height h label -->
  <line x1="200" y1="90" x2="200" y2="130" stroke="#ec4899" stroke-width="1.5"/>
  <text x="180" y="115" fill="#ec4899" font-size="13" font-weight="bold" font-family="sans-serif">h</text>

  <!-- Condition for zero friction -->
  <text x="240" y="245" fill="#10b981" font-size="14" font-weight="bold" font-family="sans-serif" text-anchor="middle">For zero friction (pure rolling without f_s): h = I_cm / (MR)</text>
</svg>`
  }
];

console.log(`Writing ${diagrams.length} diagrams...`);
for (const d of diagrams) {
  const filePath = path.join(dir, d.filename);
  fs.writeFileSync(filePath, d.content.trim());
  console.log(`Generated: ${d.filename}`);
}

console.log(`\nAll ${diagrams.length} diagrams generated successfully in public/images/diagrams/rotational_motion/`);
