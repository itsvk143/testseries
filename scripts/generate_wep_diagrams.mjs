import fs from "fs";
import path from "path";

const dir = path.join(process.cwd(), "public/images/diagrams/work_energy_power");
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

// Common marker definitions
const defs = `
  <defs>
    <marker id="arr-blue" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto">
      <polygon points="0 0, 7 2.5, 0 5" fill="#2563eb" />
    </marker>
    <marker id="arr-red" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto">
      <polygon points="0 0, 7 2.5, 0 5" fill="#dc2626" />
    </marker>
    <marker id="arr-green" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto">
      <polygon points="0 0, 7 2.5, 0 5" fill="#16a34a" />
    </marker>
    <marker id="arr-purple" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto">
      <polygon points="0 0, 7 2.5, 0 5" fill="#7c3aed" />
    </marker>
    <marker id="arr-dark" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto">
      <polygon points="0 0, 7 2.5, 0 5" fill="#0f172a" />
    </marker>
  </defs>
`;

// ================= TEST 1: WORK-ENERGY THEOREM =================
// 1.1 Force-Displacement F(x) Graph with positive and negative areas
const t1_q1 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 320" width="100%" height="320" style="background:#ffffff; font-family: 'Segoe UI', Arial, sans-serif;">
  ${defs}
  <text x="280" y="24" text-anchor="middle" font-size="14" font-weight="bold" fill="#0f172a">Force–Displacement Graph F(x) vs x</text>
  <!-- Axes -->
  <line x1="60" y1="180" x2="520" y2="180" stroke="#0f172a" stroke-width="2" marker-end="url(#arr-dark)" />
  <line x1="100" y1="290" x2="100" y2="40" stroke="#0f172a" stroke-width="2" marker-end="url(#arr-dark)" />
  <text x="515" y="200" font-size="12" font-weight="bold" fill="#0f172a">x (m)</text>
  <text x="75" y="45" font-size="12" font-weight="bold" fill="#0f172a">F (N)</text>

  <!-- Grid lines and markers -->
  <line x1="100" y1="80" x2="500" y2="80" stroke="#e2e8f0" stroke-width="1" stroke-dasharray="3,3" />
  <line x1="100" y1="240" x2="500" y2="240" stroke="#e2e8f0" stroke-width="1" stroke-dasharray="3,3" />
  <text x="80" y="85" text-anchor="end" font-size="11" font-weight="bold" fill="#2563eb">+20</text>
  <text x="90" y="185" text-anchor="end" font-size="11" font-weight="bold" fill="#0f172a">0</text>
  <text x="80" y="245" text-anchor="end" font-size="11" font-weight="bold" fill="#dc2626">-10</text>

  <!-- x values: 0 at 100, 4m at 220, 8m at 340, 10m at 420 -->
  <!-- Positive trapezoid (0 to 4m at F=20, down to 0 at 6m -> 280) -->
  <polygon points="100,180 100,80 220,80 280,180" fill="#dbeafe" fill-opacity="0.7" stroke="#2563eb" stroke-width="2.5" />
  <text x="180" y="140" font-size="12" font-weight="bold" fill="#1e40af">Area A₁ = +70 J</text>

  <!-- Negative triangle (6m to 8m at F=-10, back to 0 at 10m -> 420) -->
  <polygon points="280,180 340,240 420,180" fill="#fee2e2" fill-opacity="0.7" stroke="#dc2626" stroke-width="2.5" />
  <text x="340" y="205" text-anchor="middle" font-size="11" font-weight="bold" fill="#b91c1c">Area A₂ = -14 J</text>

  <!-- Ticks on x-axis -->
  <line x1="220" y1="176" x2="220" y2="184" stroke="#0f172a" stroke-width="1.5" />
  <text x="220" y="198" text-anchor="middle" font-size="11" fill="#334155">3</text>
  <line x1="280" y1="176" x2="280" y2="184" stroke="#0f172a" stroke-width="1.5" />
  <text x="280" y="198" text-anchor="middle" font-size="11" fill="#334155">5</text>
  <line x1="340" y1="176" x2="340" y2="184" stroke="#0f172a" stroke-width="1.5" />
  <text x="340" y="172" text-anchor="middle" font-size="11" fill="#334155">7</text>
  <line x1="420" y1="176" x2="420" y2="184" stroke="#0f172a" stroke-width="1.5" />
  <text x="420" y="198" text-anchor="middle" font-size="11" fill="#334155">10</text>

  <!-- Formula Callout -->
  <rect x="360" y="55" width="180" height="70" rx="6" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
  <text x="450" y="75" text-anchor="middle" font-size="11" fill="#334155">Work-Energy Theorem:</text>
  <text x="450" y="95" text-anchor="middle" font-size="12" font-weight="bold" fill="#2563eb">W_net = A₁ + A₂ = 56 J</text>
  <text x="450" y="112" text-anchor="middle" font-size="11" fill="#16a34a">ΔK = ½ m (v² - u²)</text>
</svg>`;

// 1.2 Angled Pull on Incline
const t1_q2 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 320" width="100%" height="320" style="background:#ffffff; font-family: 'Segoe UI', Arial, sans-serif;">
  ${defs}
  <text x="280" y="24" text-anchor="middle" font-size="14" font-weight="bold" fill="#0f172a">Work Done by Force Pulled at Angle φ on Incline (θ = 37°)</text>
  <!-- Incline -->
  <polygon points="60,260 460,260 460,80" fill="#f8fafc" stroke="#334155" stroke-width="2" />
  <path d="M 140 260 A 80 80 0 0 0 125 231" fill="none" stroke="#dc2626" stroke-width="2" />
  <text x="145" y="248" font-size="12" font-weight="bold" fill="#dc2626">θ = 37°</text>

  <!-- Block rotated on incline -->
  <g transform="translate(260, 170) rotate(-24.2)">
    <rect x="-35" y="-30" width="70" height="30" fill="#dbeafe" stroke="#2563eb" stroke-width="2" />
    <text x="0" y="-10" text-anchor="middle" font-size="11" font-weight="bold" fill="#1e40af">m = 5 kg</text>
    <!-- Applied Force F at angle phi to incline -->
    <line x1="35" y1="-15" x2="115" y2="-45" stroke="#7c3aed" stroke-width="2.5" marker-end="url(#arr-purple)" />
    <text x="125" y="-45" font-size="12" font-weight="bold" fill="#7c3aed">F = 50 N</text>
    <line x1="35" y1="-15" x2="105" y2="-15" stroke="#64748b" stroke-width="1.5" stroke-dasharray="3,3" />
    <text x="75" y="-22" font-size="10" font-weight="bold" fill="#7c3aed">φ = 37°</text>
    <!-- Displacement vector s up the incline -->
    <line x1="-35" y1="-45" x2="55" y2="-45" stroke="#16a34a" stroke-width="2" marker-end="url(#arr-green)" />
    <text x="10" y="-55" font-size="11" font-weight="bold" fill="#16a34a">s = 10 m (displacement)</text>
    <!-- Friction force f_k down the incline -->
    <line x1="-35" y1="0" x2="-85" y2="0" stroke="#dc2626" stroke-width="2" marker-end="url(#arr-red)" />
    <text x="-95" y="15" font-size="11" font-weight="bold" fill="#dc2626">f_k</text>
  </g>

  <!-- Gravity mg down -->
  <line x1="250" y1="170" x2="250" y2="250" stroke="#0f172a" stroke-width="2" marker-end="url(#arr-dark)" />
  <text x="258" y="235" font-size="11" font-weight="bold" fill="#0f172a">W = mg</text>

  <!-- Callout box -->
  <rect x="360" y="80" width="180" height="70" rx="6" fill="#f1f5f9" stroke="#cbd5e1" />
  <text x="450" y="100" text-anchor="middle" font-size="11" fill="#334155">Work of Applied Force:</text>
  <text x="450" y="120" text-anchor="middle" font-size="12" font-weight="bold" fill="#7c3aed">W_F = F s cos φ</text>
  <text x="450" y="138" text-anchor="middle" font-size="11" fill="#2563eb">= 50 × 10 × cos 37° = 400 J</text>
</svg>`;

// 1.3 Block Compressed Against Spring on Rough Floor
const t1_q3 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 320" width="100%" height="320" style="background:#ffffff; font-family: 'Segoe UI', Arial, sans-serif;">
  ${defs}
  <text x="280" y="24" text-anchor="middle" font-size="14" font-weight="bold" fill="#0f172a">Spring-Mass Stopping Distance via Work-Energy Theorem</text>
  <!-- Floor and Wall -->
  <line x1="40" y1="240" x2="520" y2="240" stroke="#334155" stroke-width="2.5" />
  <line x1="80" y1="120" x2="80" y2="240" stroke="#334155" stroke-width="3" />
  <!-- Hatching for wall -->
  <line x1="70" y1="130" x2="80" y2="140" stroke="#94a3b8" stroke-width="1.5" />
  <line x1="70" y1="160" x2="80" y2="170" stroke="#94a3b8" stroke-width="1.5" />
  <line x1="70" y1="190" x2="80" y2="200" stroke="#94a3b8" stroke-width="1.5" />
  <line x1="70" y1="220" x2="80" y2="230" stroke="#94a3b8" stroke-width="1.5" />

  <!-- Spring coils from wall to block -->
  <path d="M 80 200 L 110 200 L 120 180 L 135 220 L 150 180 L 165 220 L 180 180 L 195 220 L 210 180 L 220 200 L 240 200" fill="none" stroke="#2563eb" stroke-width="3" />
  <text x="160" y="170" text-anchor="middle" font-size="12" font-weight="bold" fill="#2563eb">k = 200 N/m</text>

  <!-- Block of mass m -->
  <rect x="240" y="160" width="70" height="80" fill="#dbeafe" stroke="#2563eb" stroke-width="2" />
  <text x="275" y="205" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e40af">m = 2 kg</text>

  <!-- Initial velocity vector -->
  <line x1="275" y1="140" x2="350" y2="140" stroke="#16a34a" stroke-width="2.5" marker-end="url(#arr-green)" />
  <text x="360" y="145" font-size="12" font-weight="bold" fill="#16a34a">v₀ = 4 m/s</text>

  <!-- Compression distance arrow -->
  <line x1="240" y1="265" x2="330" y2="265" stroke="#dc2626" stroke-width="2" marker-end="url(#arr-red)" />
  <line x1="240" y1="250" x2="240" y2="275" stroke="#64748b" stroke-width="1.5" />
  <line x1="330" y1="250" x2="330" y2="275" stroke="#64748b" stroke-width="1.5" />
  <text x="285" y="285" text-anchor="middle" font-size="11" font-weight="bold" fill="#dc2626">Maximum Compression x_max</text>

  <!-- Rough floor indicator -->
  <text x="420" y="230" text-anchor="middle" font-size="11" fill="#64748b">Rough Floor (μ = 0.2)</text>

  <!-- Calculation Card -->
  <rect x="360" y="60" width="180" height="75" rx="6" fill="#f8fafc" stroke="#cbd5e1" />
  <text x="450" y="80" text-anchor="middle" font-size="11" fill="#334155">Work-Energy Balance:</text>
  <text x="450" y="100" text-anchor="middle" font-size="12" font-weight="bold" fill="#dc2626">-½ k x² - μmg x = 0 - ½ mv₀²</text>
  <text x="450" y="118" text-anchor="middle" font-size="11" fill="#2563eb">100 x² + 4 x - 16 = 0</text>
</svg>`;

// ================= TEST 2: KINETIC/POTENTIAL ENERGY =================
// 2.1 Spring Launching Mass Up Smooth Ramp
const t2_q1 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 320" width="100%" height="320" style="background:#ffffff; font-family: 'Segoe UI', Arial, sans-serif;">
  ${defs}
  <text x="280" y="24" text-anchor="middle" font-size="14" font-weight="bold" fill="#0f172a">Elastic Potential Energy to Gravitational Potential Energy</text>
  <!-- Curved Track -->
  <path d="M 60 250 L 260 250 Q 360 250 420 180 L 480 110" fill="none" stroke="#334155" stroke-width="3" />
  <!-- Vertical wall on left -->
  <line x1="60" y1="180" x2="60" y2="250" stroke="#334155" stroke-width="3" />
  <!-- Compressed Spring -->
  <path d="M 60 230 L 80 230 L 90 215 L 105 245 L 120 215 L 135 245 L 150 215 L 160 230 L 175 230" fill="none" stroke="#2563eb" stroke-width="2.5" />
  <text x="110" y="205" text-anchor="middle" font-size="11" font-weight="bold" fill="#2563eb">k = 400 N/m</text>

  <!-- Initial block at compressed spring -->
  <rect x="175" y="210" width="40" height="40" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5" />
  <text x="195" y="235" text-anchor="middle" font-size="11" font-weight="bold" fill="#1e40af">m=1kg</text>
  <text x="120" y="270" text-anchor="middle" font-size="11" font-weight="bold" fill="#dc2626">x = 0.2 m</text>

  <!-- Final block at peak height h -->
  <g transform="translate(480, 110) rotate(-40)">
    <rect x="-20" y="-40" width="40" height="40" fill="#fef3c7" stroke="#d97706" stroke-width="2" />
    <text x="0" y="-15" text-anchor="middle" font-size="10" font-weight="bold" fill="#b45309">v = 0</text>
  </g>

  <!-- Height dimension h -->
  <line x1="480" y1="110" x2="530" y2="110" stroke="#64748b" stroke-width="1" stroke-dasharray="2,2" />
  <line x1="260" y1="250" x2="530" y2="250" stroke="#64748b" stroke-width="1" stroke-dasharray="2,2" />
  <line x1="515" y1="110" x2="515" y2="250" stroke="#dc2626" stroke-width="2" marker-start="url(#arr-red)" marker-end="url(#arr-red)" />
  <text x="535" y="185" font-size="12" font-weight="bold" fill="#dc2626">h</text>

  <!-- Energy Balance Box -->
  <rect x="250" y="55" width="190" height="70" rx="6" fill="#f8fafc" stroke="#cbd5e1" />
  <text x="345" y="75" text-anchor="middle" font-size="11" fill="#334155">Energy Conservation:</text>
  <text x="345" y="95" text-anchor="middle" font-size="12" font-weight="bold" fill="#2563eb">½ k x² = m g h</text>
  <text x="345" y="113" text-anchor="middle" font-size="11" fill="#16a34a">h = (½ × 400 × 0.04) / (1 × 10) = 0.8 m</text>
</svg>`;

// 2.2 Gravitational Potential Energy at Different Reference Levels
const t2_q2 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 320" width="100%" height="320" style="background:#ffffff; font-family: 'Segoe UI', Arial, sans-serif;">
  ${defs}
  <text x="280" y="24" text-anchor="middle" font-size="14" font-weight="bold" fill="#0f172a">Gravitational Potential Energy & Reference Independence of ΔU</text>
  <!-- Three Reference Levels -->
  <line x1="60" y1="80" x2="380" y2="80" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="4,4" />
  <text x="390" y="85" font-size="11" font-weight="bold" fill="#2563eb">Level A (y = +h₂)</text>

  <line x1="60" y1="170" x2="380" y2="170" stroke="#16a34a" stroke-width="1.5" stroke-dasharray="4,4" />
  <text x="390" y="175" font-size="11" font-weight="bold" fill="#16a34a">Level B (Reference y = 0)</text>

  <line x1="60" y1="260" x2="380" y2="260" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="4,4" />
  <text x="390" y="265" font-size="11" font-weight="bold" fill="#dc2626">Level C (y = -h₁)</text>

  <!-- Mass m at Position 1 (Level A) and Position 2 (Level C) -->
  <circle cx="160" cy="80" r="16" fill="#dbeafe" stroke="#2563eb" stroke-width="2" />
  <text x="160" y="84" text-anchor="middle" font-size="10" font-weight="bold" fill="#1e40af">m</text>
  <text x="160" y="55" text-anchor="middle" font-size="11" font-weight="bold" fill="#2563eb">Initial Position 1</text>

  <circle cx="160" cy="260" r="16" fill="#fee2e2" stroke="#dc2626" stroke-width="2" />
  <text x="160" y="264" text-anchor="middle" font-size="10" font-weight="bold" fill="#b91c1c">m</text>
  <text x="160" y="295" text-anchor="middle" font-size="11" font-weight="bold" fill="#dc2626">Final Position 2</text>

  <!-- Falling vector -->
  <line x1="160" y1="102" x2="160" y2="238" stroke="#7c3aed" stroke-width="2" stroke-dasharray="3,3" marker-end="url(#arr-purple)" />
  <text x="180" y="175" font-size="11" font-weight="bold" fill="#7c3aed">Δy = -(h₁ + h₂)</text>

  <!-- Box -->
  <rect x="250" y="105" width="130" height="50" rx="6" fill="#f8fafc" stroke="#cbd5e1" />
  <text x="315" y="125" text-anchor="middle" font-size="11" fill="#334155">Change in PE:</text>
  <text x="315" y="143" text-anchor="middle" font-size="11" font-weight="bold" fill="#dc2626">ΔU = -mg(h₁ + h₂)</text>
</svg>`;

// 2.3 Momentum vs Kinetic Energy Graph
const t2_q3 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 320" width="100%" height="320" style="background:#ffffff; font-family: 'Segoe UI', Arial, sans-serif;">
  ${defs}
  <text x="280" y="24" text-anchor="middle" font-size="14" font-weight="bold" fill="#0f172a">Linear Momentum p versus Kinetic Energy K (p = √(2mK))</text>
  <!-- Axes -->
  <line x1="80" y1="260" x2="500" y2="260" stroke="#0f172a" stroke-width="2" marker-end="url(#arr-dark)" />
  <line x1="80" y1="260" x2="80" y2="50" stroke="#0f172a" stroke-width="2" marker-end="url(#arr-dark)" />
  <text x="495" y="280" font-size="12" font-weight="bold" fill="#0f172a">Kinetic Energy K</text>
  <text x="50" y="55" font-size="12" font-weight="bold" fill="#0f172a">p</text>

  <!-- Curve for m₁ = 4 kg (steeper) -->
  <path d="M 80 260 Q 180 120 460 70" fill="none" stroke="#2563eb" stroke-width="3" />
  <text x="465" y="65" font-size="12" font-weight="bold" fill="#2563eb">m₁ = 4 kg (Heavier)</text>

  <!-- Curve for m₂ = 1 kg (shallower) -->
  <path d="M 80 260 Q 220 180 460 140" fill="none" stroke="#dc2626" stroke-width="3" />
  <text x="465" y="145" font-size="12" font-weight="bold" fill="#dc2626">m₂ = 1 kg (Lighter)</text>

  <!-- Constant K dashed vertical line -->
  <line x1="320" y1="260" x2="320" y2="90" stroke="#64748b" stroke-width="1.5" stroke-dasharray="3,3" />
  <circle cx="320" cy="115" r="5" fill="#2563eb" />
  <circle cx="320" cy="172" r="5" fill="#dc2626" />
  <text x="320" y="280" text-anchor="middle" font-size="11" font-weight="bold" fill="#64748b">Same K</text>
  <text x="330" y="112" font-size="11" font-weight="bold" fill="#2563eb">p₁</text>
  <text x="330" y="172" font-size="11" font-weight="bold" fill="#dc2626">p₂</text>

  <!-- Summary Box -->
  <rect x="110" y="65" width="160" height="60" rx="6" fill="#f8fafc" stroke="#cbd5e1" />
  <text x="190" y="85" text-anchor="middle" font-size="11" fill="#334155">For same K:</text>
  <text x="190" y="105" text-anchor="middle" font-size="12" font-weight="bold" fill="#0f172a">p₁ / p₂ = √(m₁/m₂) = 2</text>
</svg>`;

// ================= TEST 3: CONSERVATIVE FORCES & POTENTIAL ENERGY =================
// 3.1 Potential Energy Curve U(x) with Equilibria
const t3_q1 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 320" width="100%" height="320" style="background:#ffffff; font-family: 'Segoe UI', Arial, sans-serif;">
  ${defs}
  <text x="280" y="24" text-anchor="middle" font-size="14" font-weight="bold" fill="#0f172a">Potential Energy Curve U(x) & Equilibrium Points</text>
  <!-- Axes -->
  <line x1="60" y1="260" x2="520" y2="260" stroke="#0f172a" stroke-width="2" marker-end="url(#arr-dark)" />
  <line x1="80" y1="280" x2="80" y2="40" stroke="#0f172a" stroke-width="2" marker-end="url(#arr-dark)" />
  <text x="515" y="278" font-size="12" font-weight="bold" fill="#0f172a">x</text>
  <text x="60" y="45" font-size="12" font-weight="bold" fill="#0f172a">U(x)</text>

  <!-- U(x) curve: valley at x1 (stable), peak at x2 (unstable), flat at x3 (neutral) -->
  <path d="M 90 90 C 130 90, 150 220, 200 220 C 250 220, 280 110, 340 110 C 400 110, 420 180, 460 180 L 510 180" fill="none" stroke="#2563eb" stroke-width="3" />

  <!-- Points -->
  <!-- Stable at x=200 -->
  <circle cx="200" cy="220" r="6" fill="#16a34a" stroke="#ffffff" stroke-width="1.5" />
  <text x="200" y="245" text-anchor="middle" font-size="11" font-weight="bold" fill="#16a34a">x₁ (Stable)</text>
  <text x="200" y="210" text-anchor="middle" font-size="10" fill="#16a34a">d²U/dx² &gt; 0</text>

  <!-- Unstable at x=340 -->
  <circle cx="340" cy="110" r="6" fill="#dc2626" stroke="#ffffff" stroke-width="1.5" />
  <text x="340" y="95" text-anchor="middle" font-size="11" font-weight="bold" fill="#dc2626">x₂ (Unstable)</text>
  <text x="340" y="130" text-anchor="middle" font-size="10" fill="#dc2626">d²U/dx² &lt; 0</text>

  <!-- Neutral at x=480 -->
  <circle cx="485" cy="180" r="6" fill="#7c3aed" stroke="#ffffff" stroke-width="1.5" />
  <text x="485" y="165" text-anchor="middle" font-size="11" font-weight="bold" fill="#7c3aed">x₃ (Neutral)</text>

  <!-- Force relation callout -->
  <rect x="220" y="45" width="170" height="40" rx="6" fill="#f8fafc" stroke="#cbd5e1" />
  <text x="305" y="68" text-anchor="middle" font-size="12" font-weight="bold" fill="#0f172a">F(x) = - dU/dx</text>
</svg>`;

// 3.2 Closed Path Work in Conservative Field
const t3_q2 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 320" width="100%" height="320" style="background:#ffffff; font-family: 'Segoe UI', Arial, sans-serif;">
  ${defs}
  <text x="280" y="24" text-anchor="middle" font-size="14" font-weight="bold" fill="#0f172a">Work Done Around Closed Loop in Uniform Gravitational Field (∮ F·dr = 0)</text>
  <!-- Triangular Path A -> B -> C -> A -->
  <polygon points="120,240 380,240 380,90" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />

  <!-- Direction Arrows on Edges -->
  <line x1="120" y1="240" x2="260" y2="240" stroke="#2563eb" stroke-width="2.5" marker-end="url(#arr-blue)" />
  <line x1="260" y1="240" x2="380" y2="240" stroke="#2563eb" stroke-width="2.5" />
  <text x="250" y="260" text-anchor="middle" font-size="11" font-weight="bold" fill="#2563eb">Path 1: W_AB = 0 (perpendicular to g)</text>

  <line x1="380" y1="240" x2="380" y2="160" stroke="#dc2626" stroke-width="2.5" marker-end="url(#arr-red)" />
  <line x1="380" y1="160" x2="380" y2="90" stroke="#dc2626" stroke-width="2.5" />
  <text x="445" y="165" text-anchor="middle" font-size="11" font-weight="bold" fill="#dc2626">Path 2: W_BC = -mgh</text>

  <line x1="380" y1="90" x2="240" y2="170" stroke="#16a34a" stroke-width="2.5" marker-end="url(#arr-green)" />
  <line x1="240" y1="170" x2="120" y2="240" stroke="#16a34a" stroke-width="2.5" />
  <text x="200" y="145" text-anchor="middle" font-size="11" font-weight="bold" fill="#16a34a">Path 3: W_CA = +mgh</text>

  <!-- Vertices -->
  <circle cx="120" cy="240" r="5" fill="#0f172a" />
  <text x="105" y="255" font-size="12" font-weight="bold" fill="#0f172a">A</text>
  <circle cx="380" cy="240" r="5" fill="#0f172a" />
  <text x="395" y="255" font-size="12" font-weight="bold" fill="#0f172a">B</text>
  <circle cx="380" cy="90" r="5" fill="#0f172a" />
  <text x="395" y="85" font-size="12" font-weight="bold" fill="#0f172a">C</text>

  <!-- Gravity Vector g -->
  <line x1="80" y1="120" x2="80" y2="170" stroke="#0f172a" stroke-width="2" marker-end="url(#arr-dark)" />
  <text x="65" y="150" font-size="12" font-weight="bold" fill="#0f172a">g</text>

  <!-- Summary Box -->
  <rect x="230" y="45" width="130" height="40" rx="6" fill="#f1f5f9" stroke="#94a3b8" />
  <text x="295" y="70" text-anchor="middle" font-size="12" font-weight="bold" fill="#0f172a">W_net = 0 - mgh + mgh = 0</text>
</svg>`;

// 3.3 Central Potential U(r) = -A/r + B/r²
const t3_q3 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 320" width="100%" height="320" style="background:#ffffff; font-family: 'Segoe UI', Arial, sans-serif;">
  ${defs}
  <text x="280" y="24" text-anchor="middle" font-size="14" font-weight="bold" fill="#0f172a">Interatomic Potential Energy U(r) = a/r¹² - b/r⁶</text>
  <!-- Axes -->
  <line x1="80" y1="180" x2="520" y2="180" stroke="#0f172a" stroke-width="2" marker-end="url(#arr-dark)" />
  <line x1="100" y1="290" x2="100" y2="40" stroke="#0f172a" stroke-width="2" marker-end="url(#arr-dark)" />
  <text x="515" y="200" font-size="12" font-weight="bold" fill="#0f172a">r</text>
  <text x="75" y="45" font-size="12" font-weight="bold" fill="#0f172a">U(r)</text>

  <!-- Lennard-Jones shape curve -->
  <path d="M 120 45 C 130 180, 145 250, 190 250 C 250 250, 320 195, 500 185" fill="none" stroke="#2563eb" stroke-width="3" />

  <!-- Minimum at r0 -->
  <line x1="190" y1="250" x2="190" y2="180" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="3,3" />
  <circle cx="190" cy="250" r="6" fill="#dc2626" />
  <text x="190" y="275" text-anchor="middle" font-size="12" font-weight="bold" fill="#dc2626">r₀ (Equilibrium)</text>
  <text x="190" y="170" text-anchor="middle" font-size="11" fill="#dc2626">F(r₀) = 0</text>

  <!-- Regions -->
  <text x="140" y="140" font-size="11" font-weight="bold" fill="#b91c1c">Repulsive (r &lt; r₀)</text>
  <text x="280" y="225" font-size="11" font-weight="bold" fill="#16a34a">Attractive (r &gt; r₀)</text>
</svg>`;

// ================= TEST 4: CONSERVATION OF MECHANICAL ENERGY =================
// 4.1 Roller Coaster Loop-the-Loop Track
const t4_q1 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 320" width="100%" height="320" style="background:#ffffff; font-family: 'Segoe UI', Arial, sans-serif;">
  ${defs}
  <text x="280" y="24" text-anchor="middle" font-size="14" font-weight="bold" fill="#0f172a">Loop-the-Loop: Conservation of Mechanical Energy</text>
  <!-- Track: Ramp from height h down to loop of radius R -->
  <path d="M 60 70 Q 140 250 240 250 A 75 75 0 1 0 315 175 Q 350 250 480 250" fill="none" stroke="#334155" stroke-width="3" />

  <!-- Ground line -->
  <line x1="40" y1="250" x2="520" y2="250" stroke="#94a3b8" stroke-width="1.5" />

  <!-- Release position at height h -->
  <circle cx="60" cy="70" r="10" fill="#2563eb" />
  <text x="60" y="50" text-anchor="middle" font-size="11" font-weight="bold" fill="#2563eb">Release (v = 0)</text>

  <!-- Height h dimension -->
  <line x1="45" y1="70" x2="45" y2="250" stroke="#dc2626" stroke-width="1.5" marker-start="url(#arr-red)" marker-end="url(#arr-red)" />
  <text x="30" y="165" font-size="12" font-weight="bold" fill="#dc2626">h</text>

  <!-- Loop center and radius R -->
  <circle cx="280" cy="175" r="3" fill="#0f172a" />
  <line x1="280" y1="175" x2="280" y2="100" stroke="#16a34a" stroke-width="1.5" stroke-dasharray="2,2" />
  <text x="290" y="140" font-size="11" font-weight="bold" fill="#16a34a">R</text>

  <!-- Top of loop point -->
  <circle cx="280" cy="100" r="8" fill="#d97706" />
  <text x="280" y="90" text-anchor="middle" font-size="11" font-weight="bold" fill="#d97706">Top (v_top ≥ √(gR))</text>

  <!-- Formula Callout -->
  <rect x="360" y="60" width="180" height="70" rx="6" fill="#f8fafc" stroke="#cbd5e1" />
  <text x="450" y="80" text-anchor="middle" font-size="11" fill="#334155">Critical Condition:</text>
  <text x="450" y="100" text-anchor="middle" font-size="12" font-weight="bold" fill="#dc2626">h_min = 2.5 R</text>
  <text x="450" y="118" text-anchor="middle" font-size="11" fill="#2563eb">mgh = mg(2R) + ½m(gR)</text>
</svg>`;

// 4.2 Pendulum Energy Exchange
const t4_q2 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 320" width="100%" height="320" style="background:#ffffff; font-family: 'Segoe UI', Arial, sans-serif;">
  ${defs}
  <text x="280" y="24" text-anchor="middle" font-size="14" font-weight="bold" fill="#0f172a">Simple Pendulum: Mechanical Energy Transformation</text>
  <!-- Ceiling support -->
  <line x1="200" y1="50" x2="360" y2="50" stroke="#334155" stroke-width="3" />
  <circle cx="280" cy="50" r="4" fill="#0f172a" />

  <!-- String at extreme angle theta_0 -->
  <line x1="280" y1="50" x2="160" y2="180" stroke="#64748b" stroke-width="2" />
  <circle cx="160" cy="180" r="16" fill="#fef3c7" stroke="#d97706" stroke-width="2" />
  <text x="160" y="184" text-anchor="middle" font-size="10" font-weight="bold" fill="#b45309">m</text>
  <text x="110" y="185" font-size="11" font-weight="bold" fill="#d97706">v = 0 (Peak U)</text>

  <!-- String at mean position (lowest point) -->
  <line x1="280" y1="50" x2="280" y2="240" stroke="#2563eb" stroke-width="2" stroke-dasharray="3,3" />
  <circle cx="280" cy="240" r="16" fill="#dbeafe" stroke="#2563eb" stroke-width="2" />
  <text x="280" y="244" text-anchor="middle" font-size="10" font-weight="bold" fill="#1e40af">m</text>
  <line x1="280" y1="240" x2="350" y2="240" stroke="#16a34a" stroke-width="2.5" marker-end="url(#arr-green)" />
  <text x="360" y="245" font-size="11" font-weight="bold" fill="#16a34a">v_max = √(2gh)</text>

  <!-- Arc path of bob -->
  <path d="M 160 180 Q 210 240 280 240 Q 350 240 400 180" fill="none" stroke="#cbd5e1" stroke-width="1.5" stroke-dasharray="2,2" />

  <!-- Height drop h -->
  <line x1="160" y1="180" x2="220" y2="180" stroke="#dc2626" stroke-width="1" stroke-dasharray="2,2" />
  <line x1="200" y1="180" x2="200" y2="240" stroke="#dc2626" stroke-width="1.5" marker-start="url(#arr-red)" marker-end="url(#arr-red)" />
  <text x="210" y="215" font-size="11" font-weight="bold" fill="#dc2626">h = L(1 - cos θ₀)</text>

  <!-- Angle arc -->
  <path d="M 280 100 A 50 50 0 0 0 252 88" fill="none" stroke="#7c3aed" stroke-width="2" />
  <text x="250" y="115" font-size="11" font-weight="bold" fill="#7c3aed">θ₀</text>
</svg>`;

// 4.3 Block on Rough Incline Compressing Buffer Spring
const t4_q3 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 320" width="100%" height="320" style="background:#ffffff; font-family: 'Segoe UI', Arial, sans-serif;">
  ${defs}
  <text x="280" y="24" text-anchor="middle" font-size="14" font-weight="bold" fill="#0f172a">Mechanical Energy Loss on Rough Incline Compressing Spring</text>
  <!-- Incline -->
  <polygon points="60,260 480,260 480,80" fill="#f8fafc" stroke="#334155" stroke-width="2" />
  <path d="M 140 260 A 80 80 0 0 0 128 230" fill="none" stroke="#dc2626" stroke-width="2" />
  <text x="145" y="250" font-size="12" font-weight="bold" fill="#dc2626">θ = 30°</text>

  <!-- Rigid barrier at bottom -->
  <g transform="translate(180, 208) rotate(-25.5)">
    <rect x="-10" y="-35" width="10" height="35" fill="#334155" />
    <!-- Spring mounted at base -->
    <path d="M 0 -17 L 20 -17 L 30 -30 L 45 -4 L 60 -30 L 75 -4 L 85 -17 L 105 -17" fill="none" stroke="#2563eb" stroke-width="2.5" />
    <text x="50" y="-35" text-anchor="middle" font-size="10" font-weight="bold" fill="#2563eb">k</text>
  </g>

  <!-- Block released from top -->
  <g transform="translate(380, 122) rotate(-25.5)">
    <rect x="-25" y="-25" width="50" height="25" fill="#dbeafe" stroke="#2563eb" stroke-width="2" />
    <text x="0" y="-8" text-anchor="middle" font-size="10" font-weight="bold" fill="#1e40af">m = 2 kg</text>
  </g>

  <!-- Distance d down incline -->
  <text x="320" y="115" font-size="11" font-weight="bold" fill="#16a34a">Slide Distance d = 4 m</text>
  <text x="350" y="180" font-size="11" font-weight="bold" fill="#dc2626">Rough: μ = 0.2</text>
</svg>`;

// ================= TEST 5: VERTICAL CIRCULAR MOTION =================
// 5.1 Vertical Circle Free-Body at Critical Points
const t5_q1 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 320" width="100%" height="320" style="background:#ffffff; font-family: 'Segoe UI', Arial, sans-serif;">
  ${defs}
  <text x="280" y="24" text-anchor="middle" font-size="14" font-weight="bold" fill="#0f172a">Forces in Vertical Circular Motion (String-Constrained Bob)</text>
  <!-- Circular Path -->
  <circle cx="280" cy="170" r="100" fill="none" stroke="#cbd5e1" stroke-width="2" stroke-dasharray="4,4" />
  <circle cx="280" cy="170" r="4" fill="#0f172a" />

  <!-- TOP POINT A -->
  <circle cx="280" cy="70" r="14" fill="#fee2e2" stroke="#dc2626" stroke-width="2" />
  <text x="280" y="74" text-anchor="middle" font-size="9" font-weight="bold" fill="#b91c1c">TOP</text>
  <!-- Forces at top: mg and T_top both DOWN -->
  <line x1="280" y1="84" x2="280" y2="120" stroke="#dc2626" stroke-width="2" marker-end="url(#arr-red)" />
  <text x="290" y="105" font-size="10" font-weight="bold" fill="#dc2626">T_top + mg</text>
  <line x1="280" y1="70" x2="230" y2="70" stroke="#16a34a" stroke-width="2" marker-end="url(#arr-green)" />
  <text x="200" y="65" font-size="10" font-weight="bold" fill="#16a34a">v_top ≥ √(gR)</text>

  <!-- BOTTOM POINT B -->
  <circle cx="280" cy="270" r="14" fill="#dbeafe" stroke="#2563eb" stroke-width="2" />
  <text x="280" y="274" text-anchor="middle" font-size="9" font-weight="bold" fill="#1e40af">BOT</text>
  <!-- Forces at bottom: T_bot UP, mg DOWN -->
  <line x1="280" y1="256" x2="280" y2="215" stroke="#2563eb" stroke-width="2" marker-end="url(#arr-blue)" />
  <text x="290" y="235" font-size="10" font-weight="bold" fill="#2563eb">T_bot</text>
  <line x1="280" y1="284" x2="280" y2="310" stroke="#0f172a" stroke-width="2" marker-end="url(#arr-dark)" />
  <text x="290" y="305" font-size="10" font-weight="bold" fill="#0f172a">mg</text>
  <line x1="280" y1="270" x2="340" y2="270" stroke="#16a34a" stroke-width="2" marker-end="url(#arr-green)" />
  <text x="350" y="274" font-size="10" font-weight="bold" fill="#16a34a">v_bot ≥ √(5gR)</text>

  <!-- Summary Box -->
  <rect x="375" y="80" width="165" height="70" rx="6" fill="#f8fafc" stroke="#cbd5e1" />
  <text x="457" y="100" text-anchor="middle" font-size="11" fill="#334155">Tension Difference:</text>
  <text x="457" y="122" text-anchor="middle" font-size="13" font-weight="bold" fill="#dc2626">T_bot - T_top = 6 mg</text>
  <text x="457" y="140" text-anchor="middle" font-size="10" fill="#64748b">Independent of velocity!</text>
</svg>`;

// 5.2 Tension vs Position Angle θ
const t5_q2 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 320" width="100%" height="320" style="background:#ffffff; font-family: 'Segoe UI', Arial, sans-serif;">
  ${defs}
  <text x="280" y="24" text-anchor="middle" font-size="14" font-weight="bold" fill="#0f172a">Tension as a Function of Angle θ from Lowest Point</text>
  <!-- Circle -->
  <circle cx="240" cy="170" r="95" fill="none" stroke="#cbd5e1" stroke-width="1.5" stroke-dasharray="3,3" />
  <circle cx="240" cy="170" r="3" fill="#0f172a" />
  <!-- Vertical reference line -->
  <line x1="240" y1="170" x2="240" y2="265" stroke="#94a3b8" stroke-width="1" stroke-dasharray="2,2" />

  <!-- Bob at angle theta = 60 deg from vertical -->
  <line x1="240" y1="170" x2="158" y2="218" stroke="#0f172a" stroke-width="2" />
  <circle cx="158" cy="218" r="14" fill="#dbeafe" stroke="#2563eb" stroke-width="2" />
  <text x="158" y="222" text-anchor="middle" font-size="10" font-weight="bold" fill="#1e40af">m</text>

  <!-- Angle arc theta -->
  <path d="M 240 220 A 50 50 0 0 1 199 194" fill="none" stroke="#7c3aed" stroke-width="2" />
  <text x="225" y="215" font-size="11" font-weight="bold" fill="#7c3aed">θ</text>

  <!-- Tension T pointing to center -->
  <line x1="158" y1="218" x2="208" y2="188" stroke="#2563eb" stroke-width="2.5" marker-end="url(#arr-blue)" />
  <text x="175" y="195" font-size="11" font-weight="bold" fill="#2563eb">T(θ)</text>

  <!-- Gravity mg and resolved components -->
  <line x1="158" y1="218" x2="158" y2="285" stroke="#0f172a" stroke-width="2" marker-end="url(#arr-dark)" />
  <text x="165" y="275" font-size="11" font-weight="bold" fill="#0f172a">mg</text>

  <!-- Equation Callout -->
  <rect x="350" y="80" width="190" height="85" rx="6" fill="#f8fafc" stroke="#cbd5e1" />
  <text x="445" y="105" text-anchor="middle" font-size="11" fill="#334155">Radial Dynamics Equation:</text>
  <text x="445" y="127" text-anchor="middle" font-size="12" font-weight="bold" fill="#2563eb">T(θ) - mg cos θ = m v² / R</text>
  <text x="445" y="148" text-anchor="middle" font-size="11" font-weight="bold" fill="#16a34a">T(θ) = mg (3 cos θ - 2) + T_bot</text>
</svg>`;

// 5.3 Particle Leaving Smooth Sphere/Hemisphere
const t5_q3 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 320" width="100%" height="320" style="background:#ffffff; font-family: 'Segoe UI', Arial, sans-serif;">
  ${defs}
  <text x="280" y="24" text-anchor="middle" font-size="14" font-weight="bold" fill="#0f172a">Particle Sliding Down Smooth Sphere: Detachment Condition (N = 0)</text>
  <!-- Hemisphere -->
  <path d="M 120 260 A 130 130 0 0 1 380 260 Z" fill="#f1f5f9" stroke="#334155" stroke-width="2.5" />
  <circle cx="250" cy="260" r="3" fill="#0f172a" />
  <line x1="100" y1="260" x2="480" y2="260" stroke="#0f172a" stroke-width="2" />

  <!-- Particle at detachment angle theta (cos theta = 2/3 => ~48.2 deg from vertical) -->
  <line x1="250" y1="260" x2="347" y2="173" stroke="#64748b" stroke-width="1.5" stroke-dasharray="3,3" />
  <circle cx="347" cy="173" r="12" fill="#fee2e2" stroke="#dc2626" stroke-width="2" />
  <text x="347" y="177" text-anchor="middle" font-size="9" font-weight="bold" fill="#b91c1c">m</text>

  <!-- Vertical dashed line from center -->
  <line x1="250" y1="260" x2="250" y2="130" stroke="#64748b" stroke-width="1" stroke-dasharray="2,2" />
  <path d="M 250 180 A 80 80 0 0 1 303 207" fill="none" stroke="#7c3aed" stroke-width="2" />
  <text x="275" y="195" font-size="11" font-weight="bold" fill="#7c3aed">θ</text>

  <!-- Normal reaction vanishing: N = 0 -->
  <text x="375" y="165" font-size="11" font-weight="bold" fill="#dc2626">N = 0 (Leaves surface)</text>

  <!-- Height drop h -->
  <line x1="250" y1="130" x2="440" y2="130" stroke="#64748b" stroke-width="1" stroke-dasharray="2,2" />
  <line x1="347" y1="173" x2="440" y2="173" stroke="#64748b" stroke-width="1" stroke-dasharray="2,2" />
  <line x1="425" y1="130" x2="425" y2="173" stroke="#dc2626" stroke-width="1.5" marker-start="url(#arr-red)" marker-end="url(#arr-red)" />
  <text x="435" y="155" font-size="11" font-weight="bold" fill="#dc2626">h = R/3</text>

  <!-- Box -->
  <rect x="360" y="55" width="180" height="60" rx="6" fill="#f8fafc" stroke="#cbd5e1" />
  <text x="450" y="75" text-anchor="middle" font-size="11" fill="#334155">Detachment Point:</text>
  <text x="450" y="95" text-anchor="middle" font-size="12" font-weight="bold" fill="#2563eb">cos θ = 2/3</text>
  <text x="450" y="110" text-anchor="middle" font-size="10" fill="#16a34a">Height from base = 2R/3</text>
</svg>`;

// ================= TEST 6: POWER & VARIABLE FORCE =================
// 6.1 Power–Time Graph P(t) vs t
const t6_q1 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 320" width="100%" height="320" style="background:#ffffff; font-family: 'Segoe UI', Arial, sans-serif;">
  ${defs}
  <text x="280" y="24" text-anchor="middle" font-size="14" font-weight="bold" fill="#0f172a">Power–Time Graph: Work Done = Area under P(t) Curve</text>
  <!-- Axes -->
  <line x1="80" y1="250" x2="500" y2="250" stroke="#0f172a" stroke-width="2" marker-end="url(#arr-dark)" />
  <line x1="100" y1="270" x2="100" y2="50" stroke="#0f172a" stroke-width="2" marker-end="url(#arr-dark)" />
  <text x="495" y="270" font-size="12" font-weight="bold" fill="#0f172a">t (s)</text>
  <text x="65" y="55" font-size="12" font-weight="bold" fill="#0f172a">P (W)</text>

  <!-- P(t) curve: rises linearly from 0 to 100 W in 4s, stays constant till 8s -->
  <polygon points="100,250 220,130 380,130 380,250" fill="#dbeafe" fill-opacity="0.7" stroke="#2563eb" stroke-width="2.5" />
  <line x1="220" y1="130" x2="220" y2="250" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="3,3" />

  <!-- Labels on axes -->
  <text x="90" y="135" text-anchor="end" font-size="11" font-weight="bold" fill="#2563eb">100</text>
  <text x="220" y="268" text-anchor="middle" font-size="11" fill="#334155">4</text>
  <text x="380" y="268" text-anchor="middle" font-size="11" fill="#334155">8</text>

  <!-- Area Callouts -->
  <text x="170" y="210" text-anchor="middle" font-size="11" font-weight="bold" fill="#1e40af">A₁ = 200 J</text>
  <text x="300" y="200" text-anchor="middle" font-size="11" font-weight="bold" fill="#1e40af">A₂ = 400 J</text>

  <!-- Box -->
  <rect x="360" y="60" width="180" height="60" rx="6" fill="#f8fafc" stroke="#cbd5e1" />
  <text x="450" y="80" text-anchor="middle" font-size="11" fill="#334155">Total Work Delivered:</text>
  <text x="450" y="102" text-anchor="middle" font-size="13" font-weight="bold" fill="#2563eb">W = ∫ P dt = 600 J</text>
</svg>`;

// 6.2 Car Moving at Speed v Overcoming Resistance (P = F·v)
const t6_q2 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 320" width="100%" height="320" style="background:#ffffff; font-family: 'Segoe UI', Arial, sans-serif;">
  ${defs}
  <text x="280" y="24" text-anchor="middle" font-size="14" font-weight="bold" fill="#0f172a">Power Delivered by Engine Overcoming Resistance (P = F · v)</text>
  <!-- Road -->
  <line x1="60" y1="240" x2="500" y2="240" stroke="#334155" stroke-width="3" />

  <!-- Car body -->
  <rect x="180" y="180" width="160" height="45" rx="10" fill="#dbeafe" stroke="#2563eb" stroke-width="2" />
  <path d="M 210 180 L 235 145 L 285 145 L 315 180 Z" fill="#93c5fd" stroke="#2563eb" stroke-width="2" />
  <circle cx="215" cy="225" r="16" fill="#0f172a" />
  <circle cx="215" cy="225" r="7" fill="#cbd5e1" />
  <circle cx="305" cy="225" r="16" fill="#0f172a" />
  <circle cx="305" cy="225" r="7" fill="#cbd5e1" />

  <!-- Driving force vector F_engine forward -->
  <line x1="340" y1="190" x2="440" y2="190" stroke="#16a34a" stroke-width="3" marker-end="url(#arr-green)" />
  <text x="445" y="195" font-size="12" font-weight="bold" fill="#16a34a">F_engine = 2000 N</text>

  <!-- Velocity vector v forward -->
  <line x1="260" y1="130" x2="350" y2="130" stroke="#2563eb" stroke-width="2.5" marker-end="url(#arr-blue)" />
  <text x="360" y="135" font-size="12" font-weight="bold" fill="#2563eb">v = 20 m/s (72 km/h)</text>

  <!-- Resistance force vector backwards -->
  <line x1="180" y1="190" x2="80" y2="190" stroke="#dc2626" stroke-width="3" marker-end="url(#arr-red)" />
  <text x="70" y="180" text-anchor="end" font-size="12" font-weight="bold" fill="#dc2626">F_resist = kv²</text>

  <!-- Power Formula Box -->
  <rect x="360" y="60" width="180" height="55" rx="6" fill="#f8fafc" stroke="#cbd5e1" />
  <text x="450" y="80" text-anchor="middle" font-size="11" fill="#334155">Engine Power Output:</text>
  <text x="450" y="100" text-anchor="middle" font-size="13" font-weight="bold" fill="#2563eb">P = F · v = 40 kW</text>
</svg>`;

// 6.3 Constant Power Motion v(t) ~ t^{1/2} and x(t) ~ t^{3/2}
const t6_q3 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 320" width="100%" height="320" style="background:#ffffff; font-family: 'Segoe UI', Arial, sans-serif;">
  ${defs}
  <text x="280" y="24" text-anchor="middle" font-size="14" font-weight="bold" fill="#0f172a">Kinematics Under Constant Power: v ∝ t¹/² and x ∝ t³/²</text>
  <!-- Axes -->
  <line x1="80" y1="260" x2="500" y2="260" stroke="#0f172a" stroke-width="2" marker-end="url(#arr-dark)" />
  <line x1="80" y1="260" x2="80" y2="50" stroke="#0f172a" stroke-width="2" marker-end="url(#arr-dark)" />
  <text x="495" y="280" font-size="12" font-weight="bold" fill="#0f172a">time t</text>
  <text x="50" y="55" font-size="12" font-weight="bold" fill="#0f172a">v, x</text>

  <!-- v(t) ~ t^{1/2} parabola sideways -->
  <path d="M 80 260 Q 180 180 460 140" fill="none" stroke="#2563eb" stroke-width="3" />
  <text x="465" y="145" font-size="12" font-weight="bold" fill="#2563eb">v(t) = √(2Pt/m) ∝ t¹/²</text>

  <!-- x(t) ~ t^{3/2} curve -->
  <path d="M 80 260 Q 260 250 460 70" fill="none" stroke="#7c3aed" stroke-width="3" />
  <text x="465" y="75" font-size="12" font-weight="bold" fill="#7c3aed">x(t) ∝ t³/²</text>

  <!-- Box -->
  <rect x="110" y="70" width="190" height="65" rx="6" fill="#f8fafc" stroke="#cbd5e1" />
  <text x="205" y="90" text-anchor="middle" font-size="11" fill="#334155">Constant Power P = dK/dt:</text>
  <text x="205" y="110" text-anchor="middle" font-size="12" font-weight="bold" fill="#0f172a">½ m v² = P t</text>
  <text x="205" y="125" text-anchor="middle" font-size="10" fill="#64748b">Force decreases as F ∝ 1/√t</text>
</svg>`;

// ================= TEST 7: ELASTIC & INELASTIC COLLISIONS =================
// 7.1 1D Head-on Elastic Collision
const t7_q1 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 320" width="100%" height="320" style="background:#ffffff; font-family: 'Segoe UI', Arial, sans-serif;">
  ${defs}
  <text x="280" y="24" text-anchor="middle" font-size="14" font-weight="bold" fill="#0f172a">One-Dimensional Elastic Collision (e = 1)</text>

  <!-- BEFORE COLLISION -->
  <rect x="50" y="60" width="460" height="100" rx="8" fill="#f8fafc" stroke="#cbd5e1" />
  <text x="70" y="85" font-size="12" font-weight="bold" fill="#334155">BEFORE COLLISION:</text>
  <!-- Mass 1 -->
  <circle cx="160" cy="120" r="22" fill="#dbeafe" stroke="#2563eb" stroke-width="2" />
  <text x="160" y="124" text-anchor="middle" font-size="11" font-weight="bold" fill="#1e40af">m₁=4kg</text>
  <line x1="182" y1="120" x2="250" y2="120" stroke="#2563eb" stroke-width="2.5" marker-end="url(#arr-blue)" />
  <text x="210" y="110" font-size="11" font-weight="bold" fill="#2563eb">u₁ = 6 m/s</text>
  <!-- Mass 2 -->
  <circle cx="360" cy="120" r="16" fill="#fee2e2" stroke="#dc2626" stroke-width="2" />
  <text x="360" y="124" text-anchor="middle" font-size="10" font-weight="bold" fill="#b91c1c">m₂=2kg</text>
  <line x1="376" y1="120" x2="420" y2="120" stroke="#dc2626" stroke-width="2" marker-end="url(#arr-red)" />
  <text x="390" y="110" font-size="11" font-weight="bold" fill="#dc2626">u₂ = 0</text>

  <!-- AFTER COLLISION -->
  <rect x="50" y="180" width="460" height="100" rx="8" fill="#f8fafc" stroke="#cbd5e1" />
  <text x="70" y="205" font-size="12" font-weight="bold" fill="#334155">AFTER COLLISION:</text>
  <!-- Mass 1 final -->
  <circle cx="160" cy="240" r="22" fill="#dbeafe" stroke="#2563eb" stroke-width="2" />
  <text x="160" y="244" text-anchor="middle" font-size="11" font-weight="bold" fill="#1e40af">m₁</text>
  <line x1="182" y1="240" x2="230" y2="240" stroke="#2563eb" stroke-width="2.5" marker-end="url(#arr-blue)" />
  <text x="200" y="230" font-size="11" font-weight="bold" fill="#2563eb">v₁ = 2 m/s</text>
  <!-- Mass 2 final -->
  <circle cx="360" cy="240" r="16" fill="#fee2e2" stroke="#dc2626" stroke-width="2" />
  <text x="360" y="244" text-anchor="middle" font-size="10" font-weight="bold" fill="#b91c1c">m₂</text>
  <line x1="376" y1="240" x2="460" y2="240" stroke="#dc2626" stroke-width="2.5" marker-end="url(#arr-red)" />
  <text x="410" y="230" font-size="11" font-weight="bold" fill="#dc2626">v₂ = 8 m/s</text>
</svg>`;

// 7.2 Ballistic Pendulum (Perfectly Inelastic)
const t7_q2 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 320" width="100%" height="320" style="background:#ffffff; font-family: 'Segoe UI', Arial, sans-serif;">
  ${defs}
  <text x="280" y="24" text-anchor="middle" font-size="14" font-weight="bold" fill="#0f172a">Ballistic Pendulum: Inelastic Impact + Energy Conservation</text>
  <!-- Support -->
  <line x1="150" y1="50" x2="350" y2="50" stroke="#334155" stroke-width="3" />

  <!-- Incoming Bullet -->
  <rect x="70" y="200" width="25" height="10" rx="3" fill="#0f172a" />
  <line x1="95" y1="205" x2="155" y2="205" stroke="#dc2626" stroke-width="2.5" marker-end="url(#arr-red)" />
  <text x="110" y="195" font-size="11" font-weight="bold" fill="#dc2626">m = 0.02 kg, u = 400 m/s</text>

  <!-- Suspended Wooden Block at rest -->
  <line x1="220" y1="50" x2="220" y2="185" stroke="#64748b" stroke-width="2" />
  <rect x="195" y="185" width="50" height="40" fill="#fed7aa" stroke="#c2410c" stroke-width="2" />
  <text x="220" y="210" text-anchor="middle" font-size="11" font-weight="bold" fill="#9a3412">M = 1.98 kg</text>

  <!-- Combined system swinging to height h -->
  <line x1="220" y1="50" x2="330" y2="135" stroke="#64748b" stroke-width="2" stroke-dasharray="2,2" />
  <g transform="translate(330, 135) rotate(35)">
    <rect x="-25" y="0" width="50" height="40" fill="#fef08a" stroke="#ca8a04" stroke-width="2" />
    <text x="0" y="25" text-anchor="middle" font-size="10" font-weight="bold" fill="#854d0e">(M + m)</text>
  </g>

  <!-- Height rise h -->
  <line x1="245" y1="205" x2="420" y2="205" stroke="#94a3b8" stroke-width="1" stroke-dasharray="2,2" />
  <line x1="330" y1="155" x2="420" y2="155" stroke="#94a3b8" stroke-width="1" stroke-dasharray="2,2" />
  <line x1="400" y1="155" x2="400" y2="205" stroke="#dc2626" stroke-width="2" marker-start="url(#arr-red)" marker-end="url(#arr-red)" />
  <text x="415" y="185" font-size="12" font-weight="bold" fill="#dc2626">h = 0.8 m</text>
</svg>`;

// 7.3 2D Oblique Elastic Collision of Equal Masses
const t7_q3 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 320" width="100%" height="320" style="background:#ffffff; font-family: 'Segoe UI', Arial, sans-serif;">
  ${defs}
  <text x="280" y="24" text-anchor="middle" font-size="14" font-weight="bold" fill="#0f172a">2D Elastic Collision of Equal Masses (θ₁ + θ₂ = 90°)</text>

  <!-- Target mass at rest -->
  <circle cx="260" cy="160" r="18" fill="#fee2e2" stroke="#dc2626" stroke-width="2" />
  <text x="260" y="164" text-anchor="middle" font-size="10" font-weight="bold" fill="#b91c1c">m (At rest)</text>

  <!-- Incoming incident mass -->
  <line x1="60" y1="140" x2="235" y2="155" stroke="#2563eb" stroke-width="2.5" marker-end="url(#arr-blue)" />
  <circle cx="100" cy="142" r="18" fill="#dbeafe" stroke="#2563eb" stroke-width="2" />
  <text x="100" y="146" text-anchor="middle" font-size="10" font-weight="bold" fill="#1e40af">m, u</text>

  <!-- Scattered trajectories -->
  <!-- Mass 1 deflected at 30 deg up -->
  <line x1="260" y1="160" x2="410" y2="85" stroke="#2563eb" stroke-width="2.5" marker-end="url(#arr-blue)" />
  <circle cx="410" cy="85" r="16" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5" />
  <text x="435" y="85" font-size="11" font-weight="bold" fill="#2563eb">v₁ at θ₁ = 30°</text>

  <!-- Mass 2 deflected at 60 deg down -->
  <line x1="260" y1="160" x2="360" y2="280" stroke="#dc2626" stroke-width="2.5" marker-end="url(#arr-red)" />
  <circle cx="360" cy="280" r="16" fill="#fee2e2" stroke="#dc2626" stroke-width="1.5" />
  <text x="385" y="285" font-size="11" font-weight="bold" fill="#dc2626">v₂ at θ₂ = 60°</text>

  <!-- Angle between velocity vectors -->
  <path d="M 335 122 A 90 90 0 0 1 310 220" fill="none" stroke="#7c3aed" stroke-width="2" />
  <text x="350" y="175" font-size="12" font-weight="bold" fill="#7c3aed">θ₁ + θ₂ = 90°</text>
</svg>`;

// Write all SVGs
const svgs = [
  { name: "test1_q1_fx_trapezoid_graph.svg", content: t1_q1 },
  { name: "test1_q2_angled_pull_incline.svg", content: t1_q2 },
  { name: "test1_q3_variable_force_spring.svg", content: t1_q3 },
  { name: "test2_q1_spring_compression_mass.svg", content: t2_q1 },
  { name: "test2_q2_gravitational_pe_reference.svg", content: t2_q2 },
  { name: "test2_q3_two_blocks_kinetic_energy.svg", content: t2_q3 },
  { name: "test3_q1_u_vs_x_potential_well.svg", content: t3_q1 },
  { name: "test3_q2_closed_path_conservative.svg", content: t3_q2 },
  { name: "test3_q3_central_force_r_graph.svg", content: t3_q3 },
  { name: "test4_q1_curved_track_loop.svg", content: t4_q1 },
  { name: "test4_q2_pendulum_energy_exchange.svg", content: t4_q2 },
  { name: "test4_q3_rough_incline_energy_loss.svg", content: t4_q3 },
  { name: "test5_q1_vertical_circle_free_body.svg", content: t5_q1 },
  { name: "test5_q2_tension_vs_angle.svg", content: t5_q2 },
  { name: "test5_q3_sphere_leaving_hemisphere.svg", content: t5_q3 },
  { name: "test6_q1_power_time_graph.svg", content: t6_q1 },
  { name: "test6_q2_force_velocity_vectors.svg", content: t6_q2 },
  { name: "test6_q3_constant_power_vt_graph.svg", content: t6_q3 },
  { name: "test7_q1_1d_elastic_collision.svg", content: t7_q1 },
  { name: "test7_q2_ballistic_pendulum.svg", content: t7_q2 },
  { name: "test7_q3_2d_oblique_collision.svg", content: t7_q3 },
];

svgs.forEach(s => {
  const filePath = path.join(dir, s.name);
  fs.writeFileSync(filePath, s.content.trim());
  console.log(`Generated: ${s.name}`);
});

console.log(`\nAll 21 Work, Energy & Power diagrams generated successfully in public/images/diagrams/work_energy_power/!`);
