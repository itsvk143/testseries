import fs from "fs";
import path from "path";

const dir = path.join(process.cwd(), "public/images/diagrams/laws_of_motion");
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

// Helper arrow marker defs
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
  </defs>
`;

// ================= TEST 1: NEWTON'S LAWS =================
// 1.1 Inclined plane FBD
const t1_q1 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 320" width="100%" height="320" style="background:#ffffff; font-family: 'Segoe UI', Arial, sans-serif;">
  ${defs}
  <text x="280" y="24" text-anchor="middle" font-size="14" font-weight="bold" fill="#0f172a">Free-Body Diagram: Block on Smooth Incline (θ = 30°)</text>
  <!-- Incline surface -->
  <polygon points="60,260 460,260 460,60" fill="#f8fafc" stroke="#334155" stroke-width="2" />
  <!-- Angle theta -->
  <path d="M 140 260 A 80 80 0 0 0 128 226" fill="none" stroke="#dc2626" stroke-width="2" />
  <text x="150" y="245" font-size="12" font-weight="bold" fill="#dc2626">θ = 30°</text>
  <!-- Block rotated 30 deg -->
  <g transform="translate(260, 160) rotate(-30)">
    <rect x="-35" y="-35" width="70" height="35" fill="#dbeafe" stroke="#2563eb" stroke-width="2" />
    <text x="0" y="-13" text-anchor="middle" font-size="12" font-weight="bold" fill="#1e40af">m = 5 kg</text>
    <!-- Normal reaction N perpendicular up -->
    <line x1="0" y1="-35" x2="0" y2="-95" stroke="#2563eb" stroke-width="2.5" marker-end="url(#arr-blue)" />
    <text x="10" y="-80" font-size="12" font-weight="bold" fill="#2563eb">N</text>
    <!-- Downhill component mg sin theta -->
    <line x1="-35" y1="-17" x2="-95" y2="-17" stroke="#dc2626" stroke-width="2.5" marker-end="url(#arr-red)" />
    <text x="-95" y="-25" font-size="11" font-weight="bold" fill="#dc2626">mg sin 30°</text>
    <!-- Perpendicular gravity component mg cos theta -->
    <line x1="0" y1="0" x2="0" y2="60" stroke="#64748b" stroke-width="1.5" stroke-dasharray="2,2" marker-end="url(#arr-blue)" />
    <text x="10" y="55" font-size="11" fill="#64748b">mg cos 30°</text>
  </g>
  <!-- Gravity mg straight down -->
  <line x1="250" y1="160" x2="250" y2="245" stroke="#16a34a" stroke-width="2.5" marker-end="url(#arr-green)" />
  <text x="260" y="215" font-size="12" font-weight="bold" fill="#16a34a">W = mg</text>
  <!-- Summary Box -->
  <rect x="360" y="80" width="180" height="70" rx="6" fill="#f1f5f9" stroke="#cbd5e1" />
  <text x="450" y="102" text-anchor="middle" font-size="11" fill="#334155">Normal Reaction:</text>
  <text x="450" y="122" text-anchor="middle" font-size="12" font-weight="bold" fill="#2563eb">N = mg cos 30° = 25√3 N</text>
  <text x="450" y="140" text-anchor="middle" font-size="11" font-weight="bold" fill="#dc2626">a = g sin 30° = 5 m/s²</text>
</svg>`;

// 1.2 Elevator weighing machine
const t1_q2 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 320" width="100%" height="320" style="background:#ffffff; font-family: 'Segoe UI', Arial, sans-serif;">
  ${defs}
  <text x="270" y="24" text-anchor="middle" font-size="14" font-weight="bold" fill="#0f172a">Apparent Weight in an Accelerating Elevator</text>
  <!-- Elevator Cab -->
  <rect x="90" y="60" width="170" height="220" fill="#f8fafc" stroke="#334155" stroke-width="2.5" rx="6" />
  <text x="175" y="80" text-anchor="middle" font-size="12" font-weight="bold" fill="#64748b">Elevator Cab</text>
  <!-- Weighing scale -->
  <rect x="130" y="255" width="90" height="15" fill="#cbd5e1" stroke="#475569" stroke-width="1.5" />
  <text x="175" y="267" text-anchor="middle" font-size="10" font-weight="bold" fill="#0f172a">Scale</text>
  <!-- Person stick figure -->
  <circle cx="175" cy="140" r="16" fill="#0f172a" />
  <line x1="175" y1="156" x2="175" y2="215" stroke="#0f172a" stroke-width="4" />
  <line x1="175" y1="215" x2="155" y2="255" stroke="#0f172a" stroke-width="4" />
  <line x1="175" y1="215" x2="195" y2="255" stroke="#0f172a" stroke-width="4" />
  <line x1="175" y1="175" x2="145" y2="195" stroke="#0f172a" stroke-width="3" />
  <line x1="175" y1="175" x2="205" y2="195" stroke="#0f172a" stroke-width="3" />
  <!-- Elevator acceleration vector a upward -->
  <line x1="60" y1="200" x2="60" y2="120" stroke="#dc2626" stroke-width="3" marker-end="url(#arr-red)" />
  <text x="45" y="165" font-size="12" font-weight="bold" fill="#dc2626" transform="rotate(-90 45 165)">a = 2 m/s²</text>
  <!-- FBD of person on the right -->
  <g transform="translate(360, 160)">
    <circle cx="0" cy="0" r="10" fill="#2563eb" />
    <text x="15" y="5" font-size="12" font-weight="bold" fill="#2563eb">m = 60 kg</text>
    <!-- Normal reaction N upward -->
    <line x1="0" y1="0" x2="0" y2="-80" stroke="#2563eb" stroke-width="2.5" marker-end="url(#arr-blue)" />
    <text x="10" y="-65" font-size="12" font-weight="bold" fill="#2563eb">N (Reading)</text>
    <!-- Weight mg downward -->
    <line x1="0" y1="0" x2="0" y2="70" stroke="#16a34a" stroke-width="2.5" marker-end="url(#arr-green)" />
    <text x="10" y="60" font-size="12" font-weight="bold" fill="#16a34a">mg = 600 N</text>
  </g>
  <!-- Summary Box -->
  <rect x="290" y="240" width="220" height="60" rx="6" fill="#f1f5f9" stroke="#cbd5e1" />
  <text x="400" y="260" text-anchor="middle" font-size="11" fill="#334155">Newton's 2nd Law: N - mg = ma</text>
  <text x="400" y="280" text-anchor="middle" font-size="12" font-weight="bold" fill="#2563eb">N = m(g + a) = 60(12) = 720 N</text>
</svg>`;

// 1.3 Three connected blocks pulled by force F
const t1_q3 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 220" width="100%" height="220" style="background:#ffffff; font-family: 'Segoe UI', Arial, sans-serif;">
  ${defs}
  <text x="300" y="24" text-anchor="middle" font-size="14" font-weight="bold" fill="#0f172a">Three Connected Blocks on Smooth Horizontal Surface</text>
  <!-- Floor -->
  <line x1="40" y1="160" x2="560" y2="160" stroke="#334155" stroke-width="2" />
  <!-- Block 1 (2 kg) -->
  <rect x="70" y="100" width="60" height="60" fill="#dbeafe" stroke="#2563eb" stroke-width="2" />
  <text x="100" y="135" text-anchor="middle" font-size="12" font-weight="bold" fill="#1e40af">2 kg</text>
  <!-- String 1 (T1) -->
  <line x1="130" y1="130" x2="200" y2="130" stroke="#0f172a" stroke-width="2.5" />
  <text x="165" y="122" text-anchor="middle" font-size="11" font-weight="bold" fill="#dc2626">T₁</text>
  <!-- Block 2 (3 kg) -->
  <rect x="200" y="90" width="70" height="70" fill="#dbeafe" stroke="#2563eb" stroke-width="2" />
  <text x="235" y="130" text-anchor="middle" font-size="12" font-weight="bold" fill="#1e40af">3 kg</text>
  <!-- String 2 (T2) -->
  <line x1="270" y1="130" x2="350" y2="130" stroke="#0f172a" stroke-width="2.5" />
  <text x="310" y="122" text-anchor="middle" font-size="11" font-weight="bold" fill="#dc2626">T₂</text>
  <!-- Block 3 (5 kg) -->
  <rect x="350" y="75" width="85" height="85" fill="#dbeafe" stroke="#2563eb" stroke-width="2" />
  <text x="392" y="123" text-anchor="middle" font-size="12" font-weight="bold" fill="#1e40af">5 kg</text>
  <!-- Pulling Force F -->
  <line x1="435" y1="130" x2="520" y2="130" stroke="#16a34a" stroke-width="3" marker-end="url(#arr-green)" />
  <text x="475" y="120" text-anchor="middle" font-size="12" font-weight="bold" fill="#16a34a">F = 50 N</text>
  <!-- Bottom calculation bar -->
  <text x="300" y="195" text-anchor="middle" font-size="12" font-weight="bold" fill="#334155">a = 50 / (2+3+5) = 5 m/s²  |  T₁ = 10 N  |  T₂ = 25 N  |  T₁ : T₂ = 2 : 5</text>
</svg>`;

// ================= TEST 2: IMPULSE =================
// 2.1 Triangular F-t graph
const t2_q1 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 300" width="100%" height="300" style="background:#ffffff; font-family: 'Segoe UI', Arial, sans-serif;">
  ${defs}
  <text x="270" y="24" text-anchor="middle" font-size="14" font-weight="bold" fill="#0f172a">Force–Time (F–t) Graph: Triangular Impact Pulse</text>
  <!-- Axes -->
  <line x1="80" y1="240" x2="480" y2="240" stroke="#334155" stroke-width="2" />
  <line x1="80" y1="240" x2="80" y2="50" stroke="#334155" stroke-width="2" />
  <text x="495" y="244" font-size="12" font-weight="bold" fill="#334155">t (ms)</text>
  <text x="45" y="55" font-size="12" font-weight="bold" fill="#334155">F (N)</text>
  <text x="65" y="255" font-size="12" fill="#64748b">O</text>
  <!-- Shaded Triangle Area -->
  <polygon points="80,240 200,80 380,240" fill="#dbeafe" stroke="#2563eb" stroke-width="2.5" />
  <text x="220" y="180" font-size="13" font-weight="bold" fill="#1e40af">Impulse J = Area under F–t</text>
  <!-- Peak F_max line -->
  <line x1="80" y1="80" x2="200" y2="80" stroke="#94a3b8" stroke-dasharray="3,3" />
  <line x1="200" y1="80" x2="200" y2="240" stroke="#94a3b8" stroke-dasharray="3,3" />
  <text x="70" y="85" text-anchor="end" font-size="12" font-weight="bold" fill="#0f172a">600</text>
  <text x="200" y="260" text-anchor="middle" font-size="12" fill="#0f172a">2</text>
  <text x="380" y="260" text-anchor="middle" font-size="12" font-weight="bold" fill="#0f172a">6</text>
  <!-- Formula -->
  <rect x="280" y="80" width="190" height="55" rx="6" fill="#f8fafc" stroke="#cbd5e1" />
  <text x="375" y="102" text-anchor="middle" font-size="11" fill="#334155">J = ½ × base × height</text>
  <text x="375" y="122" text-anchor="middle" font-size="12" font-weight="bold" fill="#dc2626">J = ½(6×10⁻³)(600) = 1.8 N·s</text>
</svg>`;

// 2.2 Force-Time graph with positive and negative areas
const t2_q2 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 300" width="100%" height="300" style="background:#ffffff; font-family: 'Segoe UI', Arial, sans-serif;">
  ${defs}
  <text x="280" y="24" text-anchor="middle" font-size="14" font-weight="bold" fill="#0f172a">Force–Time Graph with Bidirectional Force (Signed Impulse)</text>
  <!-- Time axis in center -->
  <line x1="70" y1="160" x2="500" y2="160" stroke="#334155" stroke-width="2" />
  <line x1="70" y1="260" x2="70" y2="50" stroke="#334155" stroke-width="2" />
  <text x="515" y="164" font-size="12" font-weight="bold" fill="#334155">t (s)</text>
  <text x="40" y="55" font-size="12" font-weight="bold" fill="#334155">F (N)</text>
  <!-- Positive rectangle: t=0 to 4s, F = +5 N (area = +20 N s) -->
  <rect x="70" y="80" width="160" height="80" fill="#dcfce7" stroke="#16a34a" stroke-width="2" />
  <text x="150" y="125" text-anchor="middle" font-size="12" font-weight="bold" fill="#166534">Area I = +20 N·s</text>
  <!-- Negative triangle: t=4 to 8s, F drops to -4 N at t=6s (area = -8 N s) -->
  <polygon points="230,160 310,224 390,160" fill="#fee2e2" stroke="#dc2626" stroke-width="2" />
  <text x="310" y="185" text-anchor="middle" font-size="11" font-weight="bold" fill="#991b1b">Area II = -8 N·s</text>
  <!-- Ticks -->
  <text x="60" y="85" text-anchor="end" font-size="11" font-weight="bold" fill="#0f172a">+5</text>
  <text x="60" y="228" text-anchor="end" font-size="11" font-weight="bold" fill="#0f172a">-4</text>
  <text x="230" y="150" text-anchor="middle" font-size="11" fill="#0f172a">4</text>
  <text x="390" y="150" text-anchor="middle" font-size="11" fill="#0f172a">8</text>
  <!-- Net calculation -->
  <rect x="330" y="70" width="180" height="60" rx="6" fill="#f8fafc" stroke="#cbd5e1" />
  <text x="420" y="92" text-anchor="middle" font-size="11" fill="#334155">Net Impulse J_net:</text>
  <text x="420" y="112" text-anchor="middle" font-size="12" font-weight="bold" fill="#2563eb">J = +20 - 8 = +12 N·s</text>
</svg>`;

// 2.3 Ball rebounding from wall at angle
const t2_q3 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 300" width="100%" height="300" style="background:#ffffff; font-family: 'Segoe UI', Arial, sans-serif;">
  ${defs}
  <text x="270" y="24" text-anchor="middle" font-size="14" font-weight="bold" fill="#0f172a">Impulse in Oblique Elastic Collision with Wall</text>
  <!-- Vertical Wall at x=270 -->
  <line x1="270" y1="50" x2="270" y2="260" stroke="#334155" stroke-width="4" />
  <!-- Normal dashed line -->
  <line x1="120" y1="160" x2="270" y2="160" stroke="#64748b" stroke-dasharray="3,3" stroke-width="1.5" />
  <!-- Incident trajectory -->
  <line x1="140" y1="70" x2="270" y2="160" stroke="#2563eb" stroke-width="2.5" marker-end="url(#arr-blue)" />
  <text x="180" y="105" font-size="12" font-weight="bold" fill="#2563eb">u = 20 m/s</text>
  <!-- Reflected trajectory -->
  <line x1="270" y1="160" x2="140" y2="250" stroke="#dc2626" stroke-width="2.5" marker-end="url(#arr-red)" />
  <text x="180" y="225" font-size="12" font-weight="bold" fill="#dc2626">v = 20 m/s</text>
  <!-- Angles with normal: 60 deg -->
  <path d="M 230 160 A 40 40 0 0 1 245 142" fill="none" stroke="#0f172a" stroke-width="1.5" />
  <text x="215" y="145" font-size="11" font-weight="bold" fill="#0f172a">60°</text>
  <path d="M 230 160 A 40 40 0 0 0 245 178" fill="none" stroke="#0f172a" stroke-width="1.5" />
  <text x="215" y="180" font-size="11" font-weight="bold" fill="#0f172a">60°</text>
  <!-- Ball at wall -->
  <circle cx="270" cy="160" r="8" fill="#2563eb" />
  <!-- Impulse annotation -->
  <rect x="310" y="120" width="190" height="70" rx="6" fill="#f1f5f9" stroke="#cbd5e1" />
  <text x="405" y="142" text-anchor="middle" font-size="11" fill="#334155">Normal Impulse:</text>
  <text x="405" y="160" text-anchor="middle" font-size="12" font-weight="bold" fill="#dc2626">J = 2mu cos 60° = 4 N·s</text>
  <text x="405" y="178" text-anchor="middle" font-size="11" fill="#16a34a">F_avg = J / Δt = 200 N</text>
</svg>`;

// ================= TEST 3: CONSERVATION OF MOMENTUM =================
// 3.1 Recoil of rifle
const t3_q1 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 580 240" width="100%" height="240" style="background:#ffffff; font-family: 'Segoe UI', Arial, sans-serif;">
  ${defs}
  <text x="290" y="24" text-anchor="middle" font-size="14" font-weight="bold" fill="#0f172a">Conservation of Linear Momentum: Recoil of Rifle</text>
  <!-- Rifle Body -->
  <rect x="140" y="90" width="200" height="40" rx="4" fill="#cbd5e1" stroke="#334155" stroke-width="2" />
  <rect x="80" y="100" width="60" height="50" rx="4" fill="#94a3b8" stroke="#334155" stroke-width="2" />
  <text x="220" y="115" text-anchor="middle" font-size="12" font-weight="bold" fill="#0f172a">Rifle (M = 4 kg)</text>
  <!-- Bullet leaving barrel -->
  <ellipse cx="400" cy="110" rx="15" ry="6" fill="#dc2626" />
  <text x="400" y="95" text-anchor="middle" font-size="11" font-weight="bold" fill="#dc2626">Bullet (m = 20 g)</text>
  <!-- Bullet velocity arrow -->
  <line x1="420" y1="110" x2="520" y2="110" stroke="#dc2626" stroke-width="2.5" marker-end="url(#arr-red)" />
  <text x="470" y="130" text-anchor="middle" font-size="11" font-weight="bold" fill="#dc2626">v = 400 m/s</text>
  <!-- Rifle recoil arrow -->
  <line x1="120" y1="110" x2="40" y2="110" stroke="#2563eb" stroke-width="2.5" marker-end="url(#arr-blue)" />
  <text x="75" y="95" text-anchor="middle" font-size="11" font-weight="bold" fill="#2563eb">V_recoil = 2 m/s</text>
  <!-- Equation -->
  <text x="290" y="190" text-anchor="middle" font-size="12" font-weight="bold" fill="#334155">M·V + m·v = 0  ⇒  V = -(0.02 × 400) / 4 = -2 m/s</text>
</svg>`;

// 3.2 Explosion into 3 fragments
const t3_q2 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 300" width="100%" height="300" style="background:#ffffff; font-family: 'Segoe UI', Arial, sans-serif;">
  ${defs}
  <text x="270" y="24" text-anchor="middle" font-size="14" font-weight="bold" fill="#0f172a">Explosion of Body into Three Fragments (Vector Momentum)</text>
  <!-- Origin O (explosion center) -->
  <circle cx="240" cy="160" r="6" fill="#dc2626" />
  <text x="225" y="165" font-size="12" font-weight="bold" fill="#dc2626">O</text>
  <!-- Fragment 1 along +x: 30 m/s -->
  <line x1="240" y1="160" x2="360" y2="160" stroke="#2563eb" stroke-width="2.5" marker-end="url(#arr-blue)" />
  <text x="310" y="150" font-size="11" font-weight="bold" fill="#2563eb">p₁ = 30 kg·m/s (East)</text>
  <!-- Fragment 2 along +y: 40 m/s -->
  <line x1="240" y1="160" x2="240" y2="60" stroke="#16a34a" stroke-width="2.5" marker-end="url(#arr-green)" />
  <text x="248" y="105" font-size="11" font-weight="bold" fill="#16a34a">p₂ = 40 kg·m/s (North)</text>
  <!-- Fragment 3 balancing both: -(30i + 40j) -->
  <line x1="240" y1="160" x2="120" y2="260" stroke="#7c3aed" stroke-width="3" marker-end="url(#arr-purple)" />
  <text x="80" y="230" font-size="11" font-weight="bold" fill="#7c3aed">p₃ = 50 kg·m/s</text>
  <!-- Summary Box -->
  <rect x="330" y="190" width="180" height="65" rx="6" fill="#f8fafc" stroke="#cbd5e1" />
  <text x="420" y="212" text-anchor="middle" font-size="11" fill="#334155">p₁ + p₂ + p₃ = 0</text>
  <text x="420" y="232" text-anchor="middle" font-size="12" font-weight="bold" fill="#7c3aed">|p₃| = √(30² + 40²) = 50</text>
</svg>`;

// 3.3 Completely inelastic collision of two carts
const t3_q3 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 580 240" width="100%" height="240" style="background:#ffffff; font-family: 'Segoe UI', Arial, sans-serif;">
  ${defs}
  <text x="290" y="24" text-anchor="middle" font-size="14" font-weight="bold" fill="#0f172a">Completely Inelastic Collision: Combined Motion &amp; Energy Loss</text>
  <!-- Track -->
  <line x1="40" y1="160" x2="540" y2="160" stroke="#334155" stroke-width="2" />
  <!-- Combined cart -->
  <rect x="200" y="90" width="100" height="50" rx="4" fill="#dbeafe" stroke="#2563eb" stroke-width="2" />
  <text x="250" y="120" text-anchor="middle" font-size="12" font-weight="bold" fill="#1e40af">m₁ = 3 kg</text>
  <rect x="300" y="100" width="70" height="40" rx="4" fill="#fef3c7" stroke="#f59e0b" stroke-width="2" />
  <text x="335" y="125" text-anchor="middle" font-size="11" font-weight="bold" fill="#b45309">m₂ = 1 kg</text>
  <!-- Wheels -->
  <circle cx="225" cy="148" r="8" fill="#0f172a" />
  <circle cx="275" cy="148" r="8" fill="#0f172a" />
  <circle cx="350" cy="148" r="8" fill="#0f172a" />
  <!-- Common velocity arrow -->
  <line x1="380" y1="120" x2="470" y2="120" stroke="#16a34a" stroke-width="2.5" marker-end="url(#arr-green)" />
  <text x="425" y="108" text-anchor="middle" font-size="12" font-weight="bold" fill="#16a34a">V_common = 3 m/s</text>
  <!-- Summary text -->
  <text x="290" y="200" text-anchor="middle" font-size="12" font-weight="bold" fill="#334155">p_initial = (3)(4) = 12  ⇒  V = 12/(3+1) = 3 m/s  |  Loss in KE = 6 J</text>
</svg>`;

// ================= TEST 4: FRICTION =================
// 4.1 Friction vs Applied Force graph
const t4_q1 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 300" width="100%" height="300" style="background:#ffffff; font-family: 'Segoe UI', Arial, sans-serif;">
  ${defs}
  <text x="270" y="24" text-anchor="middle" font-size="14" font-weight="bold" fill="#0f172a">Static, Limiting and Kinetic Friction vs Applied Force</text>
  <!-- Axes -->
  <line x1="70" y1="240" x2="480" y2="240" stroke="#334155" stroke-width="2" />
  <line x1="70" y1="240" x2="70" y2="50" stroke="#334155" stroke-width="2" />
  <text x="495" y="244" font-size="12" font-weight="bold" fill="#334155">F_applied</text>
  <text x="35" y="55" font-size="12" font-weight="bold" fill="#334155">f_friction</text>
  <!-- Static friction curve: linear rise 45 deg from (70, 240) to (230, 80) -->
  <line x1="70" y1="240" x2="230" y2="80" stroke="#2563eb" stroke-width="3" />
  <text x="130" y="150" font-size="11" font-weight="bold" fill="#2563eb" transform="rotate(-45 130 150)">Static: f_s = F_app</text>
  <!-- Peak Limiting friction dot at (230, 80) -->
  <circle cx="230" cy="80" r="5" fill="#dc2626" />
  <text x="230" y="65" text-anchor="middle" font-size="12" font-weight="bold" fill="#dc2626">Limiting f_s(max) = μ_s N</text>
  <!-- Slight drop to kinetic friction at (245, 105) -->
  <line x1="230" y1="80" x2="245" y2="105" stroke="#dc2626" stroke-width="2" stroke-dasharray="2,2" />
  <!-- Horizontal kinetic friction line from (245, 105) to (460, 105) -->
  <line x1="245" y1="105" x2="460" y2="105" stroke="#16a34a" stroke-width="3" />
  <text x="350" y="95" text-anchor="middle" font-size="12" font-weight="bold" fill="#16a34a">Kinetic: f_k = μ_k N (constant)</text>
  <!-- Dotted line to axes -->
  <line x1="70" y1="105" x2="245" y2="105" stroke="#94a3b8" stroke-dasharray="3,3" />
  <text x="60" y="110" text-anchor="end" font-size="11" fill="#16a34a">f_k</text>
  <line x1="70" y1="80" x2="230" y2="80" stroke="#94a3b8" stroke-dasharray="3,3" />
  <text x="60" y="85" text-anchor="end" font-size="11" fill="#dc2626">f_s(max)</text>
</svg>`;

// 4.2 Block on inclined plane with static friction
const t4_q2 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 300" width="100%" height="300" style="background:#ffffff; font-family: 'Segoe UI', Arial, sans-serif;">
  ${defs}
  <text x="270" y="24" text-anchor="middle" font-size="14" font-weight="bold" fill="#0f172a">Friction on Inclined Plane: Angle of Repose Threshold</text>
  <!-- Incline -->
  <polygon points="60,250 440,250 440,80" fill="#f8fafc" stroke="#334155" stroke-width="2" />
  <text x="140" y="235" font-size="12" font-weight="bold" fill="#dc2626">θ = 37°</text>
  <!-- Block rotated -->
  <g transform="translate(250, 165) rotate(-24)">
    <rect x="-35" y="-30" width="70" height="30" fill="#fed7aa" stroke="#ea580c" stroke-width="2" />
    <text x="0" y="-10" text-anchor="middle" font-size="11" font-weight="bold" fill="#9a3412">m</text>
    <!-- Friction force acting up the plane -->
    <line x1="0" y1="0" x2="60" y2="0" stroke="#2563eb" stroke-width="2.5" marker-end="url(#arr-blue)" />
    <text x="45" y="-8" font-size="11" font-weight="bold" fill="#2563eb">f_s (up)</text>
    <!-- Downhill component mg sin theta -->
    <line x1="0" y1="0" x2="-60" y2="0" stroke="#dc2626" stroke-width="2.5" marker-end="url(#arr-red)" />
    <text x="-50" y="-8" font-size="11" font-weight="bold" fill="#dc2626">mg sin θ</text>
  </g>
  <!-- Summary Box -->
  <rect x="310" y="90" width="200" height="65" rx="6" fill="#f1f5f9" stroke="#cbd5e1" />
  <text x="410" y="112" text-anchor="middle" font-size="11" fill="#334155">Since tan 37° (0.75) &lt; μ_s (0.8):</text>
  <text x="410" y="132" text-anchor="middle" font-size="12" font-weight="bold" fill="#2563eb">Static Friction f_s = mg sin 37°</text>
  <text x="410" y="148" text-anchor="middle" font-size="10" fill="#dc2626">(Block remains strictly at rest)</text>
</svg>`;

// 4.3 Two-block system on frictionless floor
const t4_q3 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 240" width="100%" height="240" style="background:#ffffff; font-family: 'Segoe UI', Arial, sans-serif;">
  ${defs}
  <text x="280" y="24" text-anchor="middle" font-size="14" font-weight="bold" fill="#0f172a">Two-Block System: Maximum Force for No Relative Slipping</text>
  <!-- Floor -->
  <line x1="60" y1="180" x2="500" y2="180" stroke="#334155" stroke-width="2.5" />
  <text x="110" y="200" font-size="11" fill="#64748b">Frictionless Floor (μ = 0)</text>
  <!-- Bottom block B (3 kg) -->
  <rect x="180" y="110" width="160" height="70" fill="#dbeafe" stroke="#2563eb" stroke-width="2" />
  <text x="260" y="150" text-anchor="middle" font-size="12" font-weight="bold" fill="#1e40af">Block B (M = 3 kg)</text>
  <!-- Top block A (2 kg) -->
  <rect x="220" y="60" width="80" height="50" fill="#fed7aa" stroke="#ea580c" stroke-width="2" />
  <text x="260" y="90" text-anchor="middle" font-size="12" font-weight="bold" fill="#9a3412">Block A (2 kg)</text>
  <!-- Applied force F on bottom block -->
  <line x1="340" y1="145" x2="430" y2="145" stroke="#16a34a" stroke-width="3" marker-end="url(#arr-green)" />
  <text x="390" y="135" text-anchor="middle" font-size="12" font-weight="bold" fill="#16a34a">Force F</text>
  <!-- Rough interface indicator -->
  <line x1="220" y1="110" x2="300" y2="110" stroke="#dc2626" stroke-width="3" stroke-dasharray="4,2" />
  <text x="310" y="105" font-size="10" font-weight="bold" fill="#dc2626">μ_s = 0.4</text>
  <!-- Calculation box -->
  <rect x="360" y="55" width="170" height="55" rx="6" fill="#f8fafc" stroke="#cbd5e1" />
  <text x="445" y="75" text-anchor="middle" font-size="11" fill="#334155">a_max = μ_s g = 4 m/s²</text>
  <text x="445" y="95" text-anchor="middle" font-size="12" font-weight="bold" fill="#2563eb">F_max = (M+m)a = 20 N</text>
</svg>`;

// ================= TEST 5: BANKING OF ROADS =================
// 5.1 Frictionless banked road cross-section
const t5_q1 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 300" width="100%" height="300" style="background:#ffffff; font-family: 'Segoe UI', Arial, sans-serif;">
  ${defs}
  <text x="270" y="24" text-anchor="middle" font-size="14" font-weight="bold" fill="#0f172a">Frictionless Banked Road: Optimum Safe Speed</text>
  <!-- Banked surface -->
  <polygon points="80,240 440,240 440,110" fill="#f8fafc" stroke="#334155" stroke-width="2" />
  <text x="140" y="225" font-size="12" font-weight="bold" fill="#dc2626">θ = 30°</text>
  <!-- Vehicle on incline -->
  <g transform="translate(260, 175) rotate(-20)">
    <rect x="-40" y="-30" width="80" height="30" rx="4" fill="#dbeafe" stroke="#2563eb" stroke-width="2" />
    <text x="0" y="-10" text-anchor="middle" font-size="12" font-weight="bold" fill="#1e40af">Car</text>
    <!-- Normal reaction N perpendicular to road -->
    <line x1="0" y1="-30" x2="0" y2="-100" stroke="#2563eb" stroke-width="2.5" marker-end="url(#arr-blue)" />
    <text x="10" y="-85" font-size="12" font-weight="bold" fill="#2563eb">N</text>
  </g>
  <!-- Weight mg downward -->
  <line x1="250" y1="175" x2="250" y2="250" stroke="#16a34a" stroke-width="2.5" marker-end="url(#arr-green)" />
  <text x="260" y="235" font-size="12" font-weight="bold" fill="#16a34a">mg</text>
  <!-- Horizontal centripetal component N sin theta -->
  <line x1="250" y1="120" x2="160" y2="120" stroke="#dc2626" stroke-width="2.5" marker-end="url(#arr-red)" />
  <text x="205" y="110" text-anchor="middle" font-size="11" font-weight="bold" fill="#dc2626">N sin θ = mv²/R</text>
  <!-- Summary Box -->
  <rect x="330" y="55" width="180" height="60" rx="6" fill="#f1f5f9" stroke="#cbd5e1" />
  <text x="420" y="75" text-anchor="middle" font-size="11" fill="#334155">Optimum Speed:</text>
  <text x="420" y="95" text-anchor="middle" font-size="12" font-weight="bold" fill="#2563eb">v = √(Rg tan θ) = 10√2 m/s</text>
</svg>`;

// 5.2 Banked road with friction (maximum speed)
const t5_q2 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 300" width="100%" height="300" style="background:#ffffff; font-family: 'Segoe UI', Arial, sans-serif;">
  ${defs}
  <text x="270" y="24" text-anchor="middle" font-size="14" font-weight="bold" fill="#0f172a">Banked Road with Friction: Limiting Speed (v_max)</text>
  <!-- Incline -->
  <polygon points="70,240 430,240 430,100" fill="#f8fafc" stroke="#334155" stroke-width="2" />
  <!-- Car rotated -->
  <g transform="translate(250, 170) rotate(-21)">
    <rect x="-35" y="-28" width="70" height="28" rx="4" fill="#fee2e2" stroke="#dc2626" stroke-width="2" />
    <text x="0" y="-9" text-anchor="middle" font-size="11" font-weight="bold" fill="#991b1b">Car</text>
    <!-- Normal reaction -->
    <line x1="0" y1="-28" x2="0" y2="-90" stroke="#2563eb" stroke-width="2.5" marker-end="url(#arr-blue)" />
    <text x="10" y="-75" font-size="11" font-weight="bold" fill="#2563eb">N</text>
    <!-- Friction force acting DOWN the plane to resist skidding up -->
    <line x1="0" y1="0" x2="-55" y2="0" stroke="#dc2626" stroke-width="2.5" marker-end="url(#arr-red)" />
    <text x="-50" y="-8" font-size="11" font-weight="bold" fill="#dc2626">f_s (down)</text>
  </g>
  <!-- Formula Card -->
  <rect x="290" y="55" width="220" height="65" rx="6" fill="#f8fafc" stroke="#cbd5e1" />
  <text x="400" y="75" text-anchor="middle" font-size="11" fill="#334155">Centripetal: N sin θ + f_s cos θ</text>
  <text x="400" y="95" text-anchor="middle" font-size="12" font-weight="bold" fill="#dc2626">v_max = √[Rg(tan θ + μ) / (1 - μ tan θ)]</text>
</svg>`;

// 5.3 Level curved road
const t5_q3 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 240" width="100%" height="240" style="background:#ffffff; font-family: 'Segoe UI', Arial, sans-serif;">
  ${defs}
  <text x="270" y="24" text-anchor="middle" font-size="14" font-weight="bold" fill="#0f172a">Level (Unbanked) Curved Road: Friction as Centripetal Force</text>
  <!-- Flat road -->
  <line x1="60" y1="160" x2="480" y2="160" stroke="#334155" stroke-width="3" />
  <!-- Car rear view -->
  <rect x="260" y="90" width="80" height="70" rx="6" fill="#dbeafe" stroke="#2563eb" stroke-width="2" />
  <circle cx="275" cy="160" r="8" fill="#0f172a" />
  <circle cx="325" cy="160" r="8" fill="#0f172a" />
  <text x="300" y="130" text-anchor="middle" font-size="12" font-weight="bold" fill="#1e40af">Car</text>
  <!-- Friction towards center (left) -->
  <line x1="260" y1="160" x2="160" y2="160" stroke="#dc2626" stroke-width="3" marker-end="url(#arr-red)" />
  <text x="210" y="150" text-anchor="middle" font-size="12" font-weight="bold" fill="#dc2626">f_s = mv²/R (Center)</text>
  <!-- Summary Box -->
  <rect x="360" y="70" width="160" height="60" rx="6" fill="#f8fafc" stroke="#cbd5e1" />
  <text x="440" y="92" text-anchor="middle" font-size="11" fill="#334155">Safe Turning Condition:</text>
  <text x="440" y="112" text-anchor="middle" font-size="12" font-weight="bold" fill="#2563eb">v_max = √(μ_s g R)</text>
</svg>`;

// ================= TEST 6: CONNECTED MOTION & PULLEY =================
// 6.1 Standard Atwood machine
const t6_q1 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 320" width="100%" height="320" style="background:#ffffff; font-family: 'Segoe UI', Arial, sans-serif;">
  ${defs}
  <text x="270" y="24" text-anchor="middle" font-size="14" font-weight="bold" fill="#0f172a">Standard Atwood Machine: Acceleration &amp; Tension</text>
  <!-- Ceiling support -->
  <line x1="210" y1="40" x2="270" y2="40" stroke="#334155" stroke-width="3" />
  <line x1="240" y1="40" x2="240" y2="70" stroke="#334155" stroke-width="2" />
  <!-- Pulley -->
  <circle cx="240" cy="90" r="22" fill="#f1f5f9" stroke="#334155" stroke-width="2" />
  <circle cx="240" cy="90" r="4" fill="#0f172a" />
  <!-- String over pulley: left hangs at x=218, right at x=262 -->
  <line x1="218" y1="90" x2="218" y2="170" stroke="#0f172a" stroke-width="2" />
  <line x1="262" y1="90" x2="262" y2="220" stroke="#0f172a" stroke-width="2" />
  <!-- Left Mass m2 = 2 kg -->
  <rect x="198" y="170" width="40" height="40" rx="3" fill="#fed7aa" stroke="#ea580c" stroke-width="2" />
  <text x="218" y="195" text-anchor="middle" font-size="11" font-weight="bold" fill="#9a3412">2 kg</text>
  <line x1="180" y1="190" x2="180" y2="150" stroke="#16a34a" stroke-width="2" marker-end="url(#arr-green)" />
  <text x="170" y="175" font-size="10" font-weight="bold" fill="#16a34a">a</text>
  <!-- Right Mass m1 = 3 kg -->
  <rect x="242" y="220" width="40" height="40" rx="3" fill="#dbeafe" stroke="#2563eb" stroke-width="2" />
  <text x="262" y="245" text-anchor="middle" font-size="11" font-weight="bold" fill="#1e40af">3 kg</text>
  <line x1="295" y1="230" x2="295" y2="270" stroke="#dc2626" stroke-width="2" marker-end="url(#arr-red)" />
  <text x="305" y="255" font-size="10" font-weight="bold" fill="#dc2626">a</text>
  <!-- Tension markers -->
  <text x="228" y="135" font-size="11" font-weight="bold" fill="#2563eb">T</text>
  <text x="252" y="135" font-size="11" font-weight="bold" fill="#2563eb">T</text>
  <!-- Summary Box -->
  <rect x="340" y="120" width="180" height="85" rx="6" fill="#f8fafc" stroke="#cbd5e1" />
  <text x="430" y="142" text-anchor="middle" font-size="11" fill="#334155">Atwood Formulas:</text>
  <text x="430" y="162" text-anchor="middle" font-size="12" font-weight="bold" fill="#dc2626">a = (3-2)/(3+2) g = 2 m/s²</text>
  <text x="430" y="180" text-anchor="middle" font-size="12" font-weight="bold" fill="#2563eb">T = 2(3)(2)/5 g = 24 N</text>
  <text x="430" y="196" text-anchor="middle" font-size="10" fill="#64748b">Support Thrust = 2T = 48 N</text>
</svg>`;

// 6.2 Block on table connected to hanging mass
const t6_q2 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 280" width="100%" height="280" style="background:#ffffff; font-family: 'Segoe UI', Arial, sans-serif;">
  ${defs}
  <text x="270" y="24" text-anchor="middle" font-size="14" font-weight="bold" fill="#0f172a">Block on Smooth Table with Hanging Mass</text>
  <!-- Table -->
  <rect x="60" y="120" width="260" height="15" fill="#cbd5e1" stroke="#475569" stroke-width="1.5" />
  <line x1="90" y1="135" x2="90" y2="240" stroke="#475569" stroke-width="3" />
  <line x1="290" y1="135" x2="290" y2="240" stroke="#475569" stroke-width="3" />
  <!-- Pulley at edge (320, 120) -->
  <circle cx="320" cy="120" r="14" fill="#f1f5f9" stroke="#334155" stroke-width="2" />
  <!-- Block M = 4 kg on table -->
  <rect x="140" y="70" width="70" height="50" rx="3" fill="#dbeafe" stroke="#2563eb" stroke-width="2" />
  <text x="175" y="100" text-anchor="middle" font-size="12" font-weight="bold" fill="#1e40af">M = 4 kg</text>
  <!-- String: horizontal from (210, 106) to (320, 106), then down to (334, 180) -->
  <line x1="210" y1="106" x2="320" y2="106" stroke="#0f172a" stroke-width="2" />
  <line x1="334" y1="120" x2="334" y2="180" stroke="#0f172a" stroke-width="2" />
  <!-- Hanging Mass m = 1 kg -->
  <rect x="319" y="180" width="30" height="30" rx="3" fill="#fed7aa" stroke="#ea580c" stroke-width="2" />
  <text x="334" y="200" text-anchor="middle" font-size="10" font-weight="bold" fill="#9a3412">1 kg</text>
  <!-- Tension -->
  <text x="260" y="98" font-size="11" font-weight="bold" fill="#2563eb">T</text>
  <text x="345" y="150" font-size="11" font-weight="bold" fill="#2563eb">T</text>
  <!-- Summary Box -->
  <rect x="370" y="80" width="155" height="65" rx="6" fill="#f8fafc" stroke="#cbd5e1" />
  <text x="447" y="102" text-anchor="middle" font-size="11" fill="#334155">Acceleration:</text>
  <text x="447" y="120" text-anchor="middle" font-size="12" font-weight="bold" fill="#dc2626">a = mg / (M+m) = 2 m/s²</text>
  <text x="447" y="136" text-anchor="middle" font-size="11" font-weight="bold" fill="#2563eb">T = Ma = 8 N</text>
</svg>`;

// 6.3 Inclined plane pulley system
const t6_q3 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 300" width="100%" height="300" style="background:#ffffff; font-family: 'Segoe UI', Arial, sans-serif;">
  ${defs}
  <text x="270" y="24" text-anchor="middle" font-size="14" font-weight="bold" fill="#0f172a">Inclined Plane Pulley System with Hanging Mass</text>
  <!-- Wedge incline -->
  <polygon points="60,250 360,250 360,90" fill="#f8fafc" stroke="#334155" stroke-width="2" />
  <text x="130" y="235" font-size="12" font-weight="bold" fill="#dc2626">θ = 30°</text>
  <!-- Summit pulley at (360, 90) -->
  <circle cx="360" cy="90" r="14" fill="#f1f5f9" stroke="#334155" stroke-width="2" />
  <!-- Block A (5 kg) on incline -->
  <g transform="translate(220, 165) rotate(-28)">
    <rect x="-30" y="-30" width="60" height="30" fill="#dbeafe" stroke="#2563eb" stroke-width="2" />
    <text x="0" y="-10" text-anchor="middle" font-size="11" font-weight="bold" fill="#1e40af">A (5 kg)</text>
  </g>
  <!-- Hanging Mass B (5 kg) -->
  <line x1="374" y1="90" x2="374" y2="180" stroke="#0f172a" stroke-width="2" />
  <rect x="359" y="180" width="30" height="35" rx="3" fill="#fed7aa" stroke="#ea580c" stroke-width="2" />
  <text x="374" y="202" text-anchor="middle" font-size="10" font-weight="bold" fill="#9a3412">B (5 kg)</text>
  <!-- Summary Box -->
  <rect x="390" y="100" width="140" height="65" rx="6" fill="#f1f5f9" stroke="#cbd5e1" />
  <text x="460" y="120" text-anchor="middle" font-size="10" fill="#334155">Net Force = 50 - 25 = 25 N</text>
  <text x="460" y="138" text-anchor="middle" font-size="11" font-weight="bold" fill="#dc2626">a = 25 / 10 = 2.5 m/s²</text>
  <text x="460" y="154" text-anchor="middle" font-size="11" font-weight="bold" fill="#2563eb">T = 37.5 N</text>
</svg>`;

// ================= TEST 7: EQUILIBRIUM OF FORCES =================
// 7.1 Lami's theorem suspended weight
const t7_q1 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 300" width="100%" height="300" style="background:#ffffff; font-family: 'Segoe UI', Arial, sans-serif;">
  ${defs}
  <text x="270" y="24" text-anchor="middle" font-size="14" font-weight="bold" fill="#0f172a">Equilibrium of Three Concurrent Forces: Lami's Theorem</text>
  <!-- Ceiling -->
  <line x1="80" y1="60" x2="440" y2="60" stroke="#334155" stroke-width="3" />
  <!-- Knot P at (260, 160) -->
  <circle cx="260" cy="160" r="5" fill="#dc2626" />
  <text x="270" y="165" font-size="12" font-weight="bold" fill="#dc2626">P</text>
  <!-- String 1 to ceiling at (140, 60) -->
  <line x1="260" y1="160" x2="140" y2="60" stroke="#2563eb" stroke-width="2.5" />
  <text x="180" y="100" font-size="12" font-weight="bold" fill="#2563eb">T₁</text>
  <text x="165" y="75" font-size="11" fill="#64748b">30°</text>
  <!-- String 2 to ceiling at (380, 60) -->
  <line x1="260" y1="160" x2="380" y2="60" stroke="#7c3aed" stroke-width="2.5" />
  <text x="340" y="100" font-size="12" font-weight="bold" fill="#7c3aed">T₂</text>
  <text x="350" y="75" font-size="11" fill="#64748b">60°</text>
  <!-- Suspended weight straight down -->
  <line x1="260" y1="160" x2="260" y2="230" stroke="#16a34a" stroke-width="2.5" marker-end="url(#arr-green)" />
  <rect x="240" y="230" width="40" height="35" rx="3" fill="#dcfce7" stroke="#16a34a" stroke-width="2" />
  <text x="260" y="252" text-anchor="middle" font-size="11" font-weight="bold" fill="#166534">W = 100 N</text>
  <!-- Calculation box -->
  <rect x="360" y="180" width="165" height="60" rx="6" fill="#f8fafc" stroke="#cbd5e1" />
  <text x="442" y="202" text-anchor="middle" font-size="11" font-weight="bold" fill="#2563eb">T₁ = 100 sin 30° = 50 N</text>
  <text x="442" y="224" text-anchor="middle" font-size="11" font-weight="bold" fill="#7c3aed">T₂ = 100 cos 30° = 50√3 N</text>
</svg>`;

// 7.2 Closed force triangle
const t7_q2 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 280" width="100%" height="280" style="background:#ffffff; font-family: 'Segoe UI', Arial, sans-serif;">
  ${defs}
  <text x="270" y="24" text-anchor="middle" font-size="14" font-weight="bold" fill="#0f172a">Closed Force Triangle: Equilibrium Condition (Σ F = 0)</text>
  <!-- Closed Triangle: F1 horizontal, F2 vertical, F3 hypotenuse -->
  <!-- Vertex A at (140, 200), Vertex B at (340, 200), Vertex C at (340, 70) -->
  <!-- Vector F1: from A to B -->
  <line x1="140" y1="200" x2="330" y2="200" stroke="#2563eb" stroke-width="3" marker-end="url(#arr-blue)" />
  <text x="235" y="220" text-anchor="middle" font-size="12" font-weight="bold" fill="#2563eb">F₁ = 30 N</text>
  <!-- Vector F2: from B to C -->
  <line x1="340" y1="200" x2="340" y2="80" stroke="#16a34a" stroke-width="3" marker-end="url(#arr-green)" />
  <text x="355" y="145" font-size="12" font-weight="bold" fill="#16a34a">F₂ = 40 N</text>
  <!-- Vector F3: from C back to A -->
  <line x1="340" y1="70" x2="148" y2="195" stroke="#dc2626" stroke-width="3" marker-end="url(#arr-red)" />
  <text x="220" y="125" text-anchor="middle" font-size="12" font-weight="bold" fill="#dc2626">F₃ = 50 N</text>
  <!-- Annotation -->
  <rect x="360" y="170" width="165" height="55" rx="6" fill="#f8fafc" stroke="#cbd5e1" />
  <text x="442" y="192" text-anchor="middle" font-size="11" fill="#334155">Equilibrium:</text>
  <text x="442" y="210" text-anchor="middle" font-size="12" font-weight="bold" fill="#dc2626">F₁ + F₂ + F₃ = 0</text>
</svg>`;

// 7.3 Sphere in V-groove
const t7_q3 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 300" width="100%" height="300" style="background:#ffffff; font-family: 'Segoe UI', Arial, sans-serif;">
  ${defs}
  <text x="270" y="24" text-anchor="middle" font-size="14" font-weight="bold" fill="#0f172a">Sphere Resting in Smooth Symmetrical V-Groove</text>
  <!-- V-Groove: angle 60 deg total (30 deg with vertical) -->
  <!-- Apex at (260, 240) -->
  <line x1="260" y1="240" x2="120" y2="100" stroke="#334155" stroke-width="3" />
  <line x1="260" y1="240" x2="400" y2="100" stroke="#334155" stroke-width="3" />
  <line x1="260" y1="240" x2="260" y2="70" stroke="#64748b" stroke-dasharray="3,3" stroke-width="1.5" />
  <text x="240" y="210" font-size="11" font-weight="bold" fill="#dc2626">30°</text>
  <text x="268" y="210" font-size="11" font-weight="bold" fill="#dc2626">30°</text>
  <!-- Sphere resting in groove: center at (260, 140), radius = 50 -->
  <circle cx="260" cy="140" r="50" fill="#dbeafe" stroke="#2563eb" stroke-width="2.5" />
  <circle cx="260" cy="140" r="4" fill="#0f172a" />
  <!-- Weight W downward -->
  <line x1="260" y1="140" x2="260" y2="225" stroke="#16a34a" stroke-width="2.5" marker-end="url(#arr-green)" />
  <text x="270" y="210" font-size="11" font-weight="bold" fill="#16a34a">W = 100 N</text>
  <!-- Normal reaction vectors N1 and N2 perpendicular to walls through center -->
  <line x1="217" y1="175" x2="295" y2="110" stroke="#dc2626" stroke-width="2.5" marker-end="url(#arr-red)" />
  <text x="305" y="115" font-size="11" font-weight="bold" fill="#dc2626">N₁ = 100 N</text>
  <line x1="303" y1="175" x2="225" y2="110" stroke="#dc2626" stroke-width="2.5" marker-end="url(#arr-red)" />
  <text x="180" y="115" font-size="11" font-weight="bold" fill="#dc2626">N₂ = 100 N</text>
</svg>`;

// Write all 21 files
const files = [
  { name: "test1_q1_incline_fbd.svg", content: t1_q1 },
  { name: "test1_q2_elevator_apparent_weight.svg", content: t1_q2 },
  { name: "test1_q3_three_blocks_tension.svg", content: t1_q3 },

  { name: "test2_q1_triangle_ft_graph.svg", content: t2_q1 },
  { name: "test2_q2_bidirectional_ft_graph.svg", content: t2_q2 },
  { name: "test2_q3_wall_collision_impulse.svg", content: t2_q3 },

  { name: "test3_q1_rifle_recoil.svg", content: t3_q1 },
  { name: "test3_q2_three_fragment_explosion.svg", content: t3_q2 },
  { name: "test3_q3_inelastic_cart_collision.svg", content: t3_q3 },

  { name: "test4_q1_friction_vs_applied_force.svg", content: t4_q1 },
  { name: "test4_q2_angle_of_repose_incline.svg", content: t4_q2 },
  { name: "test4_q3_two_blocks_friction.svg", content: t4_q3 },

  { name: "test5_q1_frictionless_banked_road.svg", content: t5_q1 },
  { name: "test5_q2_banked_road_friction.svg", content: t5_q2 },
  { name: "test5_q3_level_curved_road.svg", content: t5_q3 },

  { name: "test6_q1_atwood_machine.svg", content: t6_q1 },
  { name: "test6_q2_table_hanging_pulley.svg", content: t6_q2 },
  { name: "test6_q3_incline_pulley_system.svg", content: t6_q3 },

  { name: "test7_q1_lamis_theorem_suspended.svg", content: t7_q1 },
  { name: "test7_q2_closed_force_triangle.svg", content: t7_q2 },
  { name: "test7_q3_sphere_in_v_groove.svg", content: t7_q3 },
];

for (const f of files) {
  fs.writeFileSync(path.join(dir, f.name), f.content, "utf8");
}

console.log(`Successfully generated all ${files.length} vector SVG diagrams in public/images/diagrams/laws_of_motion/!`);
