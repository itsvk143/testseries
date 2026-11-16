import fs from "fs";
import path from "path";

const dir = path.join(process.cwd(), "public/images/diagrams/kinematics");

// 1. Horizontal Projectile from Tower
const svg1 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 320" width="100%" height="320" style="background:#ffffff; font-family: 'Segoe UI', Arial, sans-serif;">
  <defs>
    <marker id="arr-blue" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto">
      <polygon points="0 0, 7 2.5, 0 5" fill="#2563eb" />
    </marker>
    <marker id="arr-red" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto">
      <polygon points="0 0, 7 2.5, 0 5" fill="#dc2626" />
    </marker>
  </defs>

  <text x="300" y="24" text-anchor="middle" font-size="14" font-weight="bold" fill="#0f172a">Horizontal Projectile Launched from Height h = 45 m</text>

  <!-- Ground -->
  <line x1="40" y1="280" x2="560" y2="280" stroke="#334155" stroke-width="2.5" />
  <pattern id="hatch" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
    <line x1="0" y1="0" x2="0" y2="8" stroke="#cbd5e1" stroke-width="1.5" />
  </pattern>
  <rect x="40" y="280" width="520" height="15" fill="url(#hatch)" />

  <!-- Tower -->
  <rect x="80" y="80" width="50" height="200" fill="#f1f5f9" stroke="#334155" stroke-width="2" />
  <line x1="60" y1="80" x2="60" y2="280" stroke="#64748b" stroke-width="1.5" stroke-dasharray="3,3" />
  <line x1="55" y1="80" x2="65" y2="80" stroke="#64748b" stroke-width="1.5" />
  <line x1="55" y1="280" x2="65" y2="280" stroke="#64748b" stroke-width="1.5" />
  <text x="45" y="185" font-size="12" font-weight="bold" fill="#334155">h = 45 m</text>

  <!-- Projectile launch point -->
  <circle cx="130" cy="80" r="5" fill="#2563eb" />
  <line x1="130" y1="80" x2="220" y2="80" stroke="#2563eb" stroke-width="2.5" marker-end="url(#arr-blue)" />
  <text x="175" y="70" font-size="12" font-weight="bold" fill="#2563eb">u = 20 m/s</text>

  <!-- Parabolic Trajectory: y = 80 + 200*(x-130)^2 / 340^2 -->
  <path d="M 130 80 Q 320 80 470 280" fill="none" stroke="#dc2626" stroke-width="2.5" stroke-dasharray="5,3" />

  <!-- Landing point -->
  <circle cx="470" cy="280" r="5" fill="#dc2626" />
  <text x="470" y="305" font-size="12" font-weight="bold" fill="#dc2626">Landing Point (x = R)</text>

  <!-- Velocity vector at landing -->
  <line x1="470" y1="280" x2="520" y2="280" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="2,2" marker-end="url(#arr-blue)" />
  <text x="525" y="284" font-size="11" fill="#2563eb">v_x = 20</text>
  <line x1="470" y1="280" x2="470" y2="315" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="2,2" />
  <line x1="470" y1="280" x2="515" y2="315" stroke="#dc2626" stroke-width="2.5" marker-end="url(#arr-red)" />
  <text x="520" y="325" font-size="11" font-weight="bold" fill="#dc2626">v_net</text>

  <!-- Range Dimension Line -->
  <line x1="130" y1="260" x2="470" y2="260" stroke="#16a34a" stroke-width="1.5" stroke-dasharray="3,3" />
  <line x1="130" y1="255" x2="130" y2="265" stroke="#16a34a" stroke-width="1.5" />
  <line x1="470" y1="255" x2="470" y2="265" stroke="#16a34a" stroke-width="1.5" />
  <text x="300" y="252" text-anchor="middle" font-size="12" font-weight="bold" fill="#16a34a">Range R = u √(2h/g)</text>
</svg>`;

// 2. Apex Vectors & Radius of Curvature
const svg2 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 580 320" width="100%" height="320" style="background:#ffffff; font-family: 'Segoe UI', Arial, sans-serif;">
  <defs>
    <marker id="arr2-b" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto">
      <polygon points="0 0, 7 2.5, 0 5" fill="#2563eb" />
    </marker>
    <marker id="arr2-r" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto">
      <polygon points="0 0, 7 2.5, 0 5" fill="#dc2626" />
    </marker>
  </defs>

  <text x="290" y="24" text-anchor="middle" font-size="14" font-weight="bold" fill="#0f172a">Oblique Projectile Motion: Highest Point (Apex)</text>

  <!-- Ground -->
  <line x1="40" y1="260" x2="540" y2="260" stroke="#334155" stroke-width="2.5" />

  <!-- Trajectory Parabola: peak at (290, 80) -->
  <path d="M 80 260 Q 290 -80 500 260" fill="none" stroke="#2563eb" stroke-width="2.5" />

  <!-- Launch at (80, 260) -->
  <circle cx="80" cy="260" r="4" fill="#0f172a" />
  <line x1="80" y1="260" x2="150" y2="150" stroke="#0f172a" stroke-width="2" marker-end="url(#arr2-b)" />
  <text x="130" y="140" font-size="12" font-weight="bold" fill="#0f172a">u = 20 m/s</text>
  <line x1="80" y1="260" x2="150" y2="260" stroke="#64748b" stroke-dasharray="2,2" />
  <text x="110" y="252" font-size="12" font-weight="bold" fill="#dc2626">θ = 60°</text>

  <!-- Highest point Apex (290, 90) -->
  <circle cx="290" cy="90" r="5" fill="#dc2626" />
  <text x="290" y="75" text-anchor="middle" font-size="13" font-weight="bold" fill="#dc2626">Apex P (Highest Point)</text>

  <!-- Velocity at apex: purely horizontal -->
  <line x1="290" y1="90" x2="380" y2="90" stroke="#2563eb" stroke-width="2.5" marker-end="url(#arr2-b)" />
  <text x="390" y="94" font-size="12" font-weight="bold" fill="#2563eb">v = u cos 60° = 10 m/s</text>

  <!-- Acceleration at apex: purely vertical g downwards -->
  <line x1="290" y1="90" x2="290" y2="160" stroke="#dc2626" stroke-width="2.5" marker-end="url(#arr2-r)" />
  <text x="300" y="140" font-size="12" font-weight="bold" fill="#dc2626">a = g = 10 m/s²</text>

  <!-- Osculating circle / curvature arc -->
  <path d="M 230 115 A 100 100 0 0 1 350 115" fill="none" stroke="#16a34a" stroke-width="2" stroke-dasharray="4,4" />
  <text x="290" y="210" text-anchor="middle" font-size="12" font-weight="bold" fill="#16a34a">Radius of Curvature: ρ = v² / a_⊥ = (u cos θ)² / g</text>
</svg>`;

// 3. Complementary Launch Angles
const svg3 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 580 320" width="100%" height="320" style="background:#ffffff; font-family: 'Segoe UI', Arial, sans-serif;">
  <defs>
    <marker id="arr3-b" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto">
      <polygon points="0 0, 7 2.5, 0 5" fill="#2563eb" />
    </marker>
    <marker id="arr3-m" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto">
      <polygon points="0 0, 7 2.5, 0 5" fill="#7c3aed" />
    </marker>
  </defs>

  <text x="290" y="24" text-anchor="middle" font-size="14" font-weight="bold" fill="#0f172a">Complementary Launch Angles: θ₁ = 30° and θ₂ = 60° (Same Range R)</text>

  <!-- Ground -->
  <line x1="40" y1="260" x2="540" y2="260" stroke="#334155" stroke-width="2.5" />
  <text x="50" y="280" font-size="12" fill="#64748b">Launch O (0,0)</text>
  <text x="470" y="280" font-size="12" font-weight="bold" fill="#0f172a">Range R (Equal)</text>

  <!-- Trajectory 1: theta = 30 deg (low trajectory, lower height H1) -->
  <path d="M 60 260 Q 270 90 480 260" fill="none" stroke="#2563eb" stroke-width="2.5" />
  <circle cx="270" cy="175" r="4" fill="#2563eb" />
  <line x1="270" y1="175" x2="270" y2="260" stroke="#2563eb" stroke-dasharray="2,2" stroke-width="1.5" />
  <text x="250" y="220" font-size="12" font-weight="bold" fill="#2563eb">H₁</text>
  <text x="140" y="200" font-size="11" font-weight="bold" fill="#2563eb">Trajectory 1 (θ₁ = 30°)</text>

  <!-- Trajectory 2: theta = 60 deg (high trajectory, higher height H2) -->
  <path d="M 60 260 Q 270 -80 480 260" fill="none" stroke="#7c3aed" stroke-width="2.5" stroke-dasharray="5,2" />
  <circle cx="270" cy="90" r="4" fill="#7c3aed" />
  <line x1="270" y1="90" x2="270" y2="175" stroke="#7c3aed" stroke-dasharray="2,2" stroke-width="1.5" />
  <text x="250" y="135" font-size="12" font-weight="bold" fill="#7c3aed">H₂</text>
  <text x="170" y="80" font-size="11" font-weight="bold" fill="#7c3aed">Trajectory 2 (θ₂ = 60°)</text>

  <!-- Summary Box -->
  <rect x="330" y="140" width="190" height="50" rx="6" fill="#f8fafc" stroke="#cbd5e1" />
  <text x="425" y="160" text-anchor="middle" font-size="11" fill="#334155">Since θ₁ + θ₂ = 90°:</text>
  <text x="425" y="178" text-anchor="middle" font-size="12" font-weight="bold" fill="#dc2626">Range R = 4 √(H₁ · H₂)</text>
</svg>`;

fs.writeFileSync(path.join(dir, "test3_q1_horizontal_proj.svg"), svg1, "utf8");
fs.writeFileSync(path.join(dir, "test3_q4_apex_curvature.svg"), svg2, "utf8");
fs.writeFileSync(path.join(dir, "test3_q2_complementary_angles.svg"), svg3, "utf8");

console.log("Successfully generated all 3 diagram SVG assets for Test 3 (Projectile Motion)!");
