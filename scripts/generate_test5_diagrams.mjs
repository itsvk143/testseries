import fs from "fs";
import path from "path";

const dir = path.join(process.cwd(), "public/images/diagrams/kinematics");

// 1. Centripetal Acceleration & Velocity in UCM
const svg1 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 320" width="100%" height="320" style="background:#ffffff; font-family: 'Segoe UI', Arial, sans-serif;">
  <defs>
    <marker id="arr-b1" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto">
      <polygon points="0 0, 7 2.5, 0 5" fill="#2563eb" />
    </marker>
    <marker id="arr-r1" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto">
      <polygon points="0 0, 7 2.5, 0 5" fill="#dc2626" />
    </marker>
  </defs>

  <text x="280" y="24" text-anchor="middle" font-size="14" font-weight="bold" fill="#0f172a">Uniform Circular Motion: Velocity &amp; Centripetal Acceleration</text>

  <!-- Circular path: center at (220, 170), radius = 100 -->
  <circle cx="220" cy="170" r="100" fill="none" stroke="#94a3b8" stroke-width="2" stroke-dasharray="4,4" />

  <!-- Center O -->
  <circle cx="220" cy="170" r="4" fill="#0f172a" />
  <text x="205" y="175" font-size="13" font-weight="bold" fill="#0f172a">O</text>

  <!-- Radius vector to point P at (320, 170) -->
  <line x1="220" y1="170" x2="320" y2="170" stroke="#0f172a" stroke-width="2" />
  <text x="265" y="162" text-anchor="middle" font-size="12" font-weight="bold" fill="#0f172a">R = 2 m</text>

  <!-- Point P -->
  <circle cx="320" cy="170" r="6" fill="#2563eb" />
  <text x="330" y="185" font-size="13" font-weight="bold" fill="#2563eb">P</text>

  <!-- Tangential Velocity vector v straight up: from (320, 170) to (320, 80) length 90 -->
  <line x1="320" y1="170" x2="320" y2="85" stroke="#2563eb" stroke-width="3" marker-end="url(#arr-b1)" />
  <text x="335" y="125" font-size="12" font-weight="bold" fill="#2563eb">v = 10 m/s</text>

  <!-- Centripetal Acceleration vector a_c straight left: from (320, 170) to (235, 170) -->
  <line x1="320" y1="170" x2="245" y2="170" stroke="#dc2626" stroke-width="3" marker-end="url(#arr-r1)" />
  <text x="280" y="195" text-anchor="middle" font-size="12" font-weight="bold" fill="#dc2626">a_c = v²/R</text>

  <!-- Right angle symbol between v and a_c -->
  <rect x="305" y="155" width="15" height="15" fill="none" stroke="#64748b" stroke-width="1.5" />

  <!-- Summary Box -->
  <rect x="370" y="190" width="170" height="70" rx="6" fill="#f8fafc" stroke="#cbd5e1" />
  <text x="455" y="212" text-anchor="middle" font-size="11" fill="#334155">Centripetal Acceleration:</text>
  <text x="455" y="230" text-anchor="middle" font-size="12" font-weight="bold" fill="#dc2626">a_c = 10² / 2 = 50 m/s²</text>
  <text x="455" y="248" text-anchor="middle" font-size="11" fill="#2563eb">Direction: Towards Center O</text>
</svg>`;

// 2. Change in Velocity Vector across 60 deg arc
const svg2 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 580 320" width="100%" height="320" style="background:#ffffff; font-family: 'Segoe UI', Arial, sans-serif;">
  <defs>
    <marker id="arr-b2" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto">
      <polygon points="0 0, 7 2.5, 0 5" fill="#2563eb" />
    </marker>
    <marker id="arr-p2" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto">
      <polygon points="0 0, 7 2.5, 0 5" fill="#7c3aed" />
    </marker>
  </defs>

  <text x="290" y="24" text-anchor="middle" font-size="14" font-weight="bold" fill="#0f172a">Change in Velocity Vector: θ = 60° Angular Displacement</text>

  <!-- Circular arc: Center at (180, 240), R = 150 -->
  <path d="M 330 240 A 150 150 0 0 0 255 110" fill="none" stroke="#cbd5e1" stroke-width="2" stroke-dasharray="3,3" />

  <!-- Center O -->
  <circle cx="180" cy="240" r="4" fill="#0f172a" />
  <text x="165" y="245" font-size="12" font-weight="bold" fill="#0f172a">O</text>

  <!-- Point A at (330, 240) [theta = 0] -->
  <line x1="180" y1="240" x2="330" y2="240" stroke="#334155" stroke-width="1.5" />
  <circle cx="330" cy="240" r="5" fill="#2563eb" />
  <text x="340" y="255" font-size="12" font-weight="bold" fill="#2563eb">A</text>
  <!-- v_A upwards -->
  <line x1="330" y1="240" x2="330" y2="160" stroke="#2563eb" stroke-width="2.5" marker-end="url(#arr-b2)" />
  <text x="340" y="200" font-size="11" font-weight="bold" fill="#2563eb">v_A = 10 m/s</text>

  <!-- Point B at (255, 110) [theta = 60 deg] -->
  <line x1="180" y1="240" x2="255" y2="110" stroke="#334155" stroke-width="1.5" />
  <circle cx="255" cy="110" r="5" fill="#2563eb" />
  <text x="260" y="100" font-size="12" font-weight="bold" fill="#2563eb">B</text>
  <!-- Angle theta at O -->
  <path d="M 230 240 A 50 50 0 0 0 205 197" fill="none" stroke="#dc2626" stroke-width="2" />
  <text x="235" y="220" font-size="11" font-weight="bold" fill="#dc2626">θ = 60°</text>
  <!-- v_B tangent at B: perpendicular to OB (angle 150 deg) -->
  <line x1="255" y1="110" x2="185" y2="69" stroke="#2563eb" stroke-width="2.5" marker-end="url(#arr-b2)" />
  <text x="180" y="60" font-size="11" font-weight="bold" fill="#2563eb">v_B = 10 m/s</text>

  <!-- Vector Subtraction Triangle: Δv = v_B - v_A -->
  <g transform="translate(390, 80)">
    <text x="60" y="0" text-anchor="middle" font-size="12" font-weight="bold" fill="#0f172a">Vector Triangle</text>
    <!-- v_B vector -->
    <line x1="20" y1="80" x2="90" y2="40" stroke="#2563eb" stroke-width="2.5" marker-end="url(#arr-b2)" />
    <text x="50" y="55" font-size="11" fill="#2563eb">v_B</text>
    <!-- v_A vector -->
    <line x1="20" y1="80" x2="20" y2="10" stroke="#2563eb" stroke-width="2.5" marker-end="url(#arr-b2)" />
    <text x="5" y="45" font-size="11" fill="#2563eb">v_A</text>
    <!-- Δv connecting v_A head (20,10) to v_B head (90,40) -->
    <line x1="20" y1="10" x2="85" y2="38" stroke="#7c3aed" stroke-width="3" marker-end="url(#arr-p2)" />
    <text x="60" y="20" font-size="11" font-weight="bold" fill="#7c3aed">|Δv| = 2v sin(θ/2)</text>
  </g>

  <!-- Result Box -->
  <rect x="360" y="210" width="190" height="60" rx="6" fill="#f8fafc" stroke="#cbd5e1" />
  <text x="455" y="232" text-anchor="middle" font-size="11" fill="#334155">Magnitude of Change in Velocity:</text>
  <text x="455" y="252" text-anchor="middle" font-size="12" font-weight="bold" fill="#7c3aed">|Δv| = 2(10) sin 30° = 10 m/s</text>
</svg>`;

// 3. Conical Pendulum
const svg3 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 320" width="100%" height="320" style="background:#ffffff; font-family: 'Segoe UI', Arial, sans-serif;">
  <defs>
    <marker id="arr-b3" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto">
      <polygon points="0 0, 7 2.5, 0 5" fill="#2563eb" />
    </marker>
    <marker id="arr-r3" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto">
      <polygon points="0 0, 7 2.5, 0 5" fill="#dc2626" />
    </marker>
  </defs>

  <text x="270" y="24" text-anchor="middle" font-size="14" font-weight="bold" fill="#0f172a">Dynamics of Conical Pendulum in Uniform Circular Motion</text>

  <!-- Ceiling support -->
  <line x1="160" y1="50" x2="260" y2="50" stroke="#334155" stroke-width="3" />
  <!-- Pivot S at (210, 50) -->
  <circle cx="210" cy="50" r="4" fill="#0f172a" />
  <text x="195" y="45" font-size="12" font-weight="bold" fill="#0f172a">S</text>

  <!-- Vertical dashed line -->
  <line x1="210" y1="50" x2="210" y2="240" stroke="#64748b" stroke-dasharray="3,3" stroke-width="1.5" />

  <!-- String of length L from (210,50) to bob at (310, 240) -->
  <line x1="210" y1="50" x2="310" y2="240" stroke="#0f172a" stroke-width="2.5" />
  <text x="275" y="140" font-size="12" font-weight="bold" fill="#0f172a">L = 1 m</text>

  <!-- Angle theta with vertical -->
  <path d="M 210 90 A 40 40 0 0 0 230 84" fill="none" stroke="#dc2626" stroke-width="2" />
  <text x="225" y="110" font-size="12" font-weight="bold" fill="#dc2626">θ = 45°</text>

  <!-- Horizontal circular orbit (ellipse) centered at (210, 240) -->
  <ellipse cx="210" cy="240" rx="100" ry="25" fill="none" stroke="#94a3b8" stroke-width="2" stroke-dasharray="4,4" />

  <!-- Bob at (310, 240) -->
  <circle cx="310" cy="240" r="10" fill="#2563eb" stroke="#1d4ed8" stroke-width="1.5" />
  <text x="325" y="245" font-size="12" font-weight="bold" fill="#2563eb">m</text>

  <!-- Tension vector along string towards S -->
  <line x1="310" y1="240" x2="260" y2="145" stroke="#dc2626" stroke-width="2.5" marker-end="url(#arr-r3)" />
  <text x="280" y="185" font-size="12" font-weight="bold" fill="#dc2626">T</text>

  <!-- Gravity vector mg downwards -->
  <line x1="310" y1="240" x2="310" y2="295" stroke="#16a34a" stroke-width="2.5" marker-end="url(#arr-b3)" />
  <text x="320" y="285" font-size="11" font-weight="bold" fill="#16a34a">mg</text>

  <!-- Radius r -->
  <line x1="210" y1="240" x2="310" y2="240" stroke="#64748b" stroke-dasharray="2,2" stroke-width="1.5" />
  <text x="255" y="255" font-size="11" font-weight="bold" fill="#64748b">r = L sin θ</text>

  <!-- Summary Box -->
  <rect x="350" y="70" width="170" height="75" rx="6" fill="#f8fafc" stroke="#cbd5e1" />
  <text x="435" y="92" text-anchor="middle" font-size="11" fill="#334155">Time Period of Revolution:</text>
  <text x="435" y="112" text-anchor="middle" font-size="12" font-weight="bold" fill="#2563eb">T = 2π √(L cos θ / g)</text>
  <text x="435" y="130" text-anchor="middle" font-size="11" fill="#dc2626">Centripetal: T sin θ = mω²r</text>
</svg>`;

fs.writeFileSync(path.join(dir, "test5_q1_ucm_vectors.svg"), svg1, "utf8");
fs.writeFileSync(path.join(dir, "test5_q2_delta_v.svg"), svg2, "utf8");
fs.writeFileSync(path.join(dir, "test5_q4_conical_pendulum.svg"), svg3, "utf8");

console.log("Successfully generated all 3 diagram SVG assets for Test 5 (Uniform Circular Motion)!");
