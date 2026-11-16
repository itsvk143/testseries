import fs from "fs";
import path from "path";

const dir = path.join(process.cwd(), "public/images/diagrams/kinematics");

// 1. Tower Meeting Point Diagram
const svg1 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 340" width="100%" height="340" style="background:#ffffff; font-family: 'Segoe UI', Arial, sans-serif;">
  <defs>
    <marker id="arr-b1" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto">
      <polygon points="0 0, 7 2.5, 0 5" fill="#2563eb" />
    </marker>
    <marker id="arr-r1" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto">
      <polygon points="0 0, 7 2.5, 0 5" fill="#dc2626" />
    </marker>
  </defs>

  <text x="270" y="24" text-anchor="middle" font-size="14" font-weight="bold" fill="#0f172a">Meeting of Two Balls Projected under Gravity</text>

  <!-- Ground -->
  <line x1="40" y1="300" x2="500" y2="300" stroke="#334155" stroke-width="2.5" />

  <!-- Vertical Tower -->
  <rect x="80" y="60" width="50" height="240" fill="#f1f5f9" stroke="#334155" stroke-width="2" />
  <text x="105" y="180" text-anchor="middle" font-size="12" font-weight="bold" fill="#475569" transform="rotate(-90 105 180)">Tower H = 100 m</text>

  <!-- Ball A at top (dropped, u_A = 0) -->
  <circle cx="170" cy="65" r="7" fill="#dc2626" />
  <text x="170" y="50" text-anchor="middle" font-size="12" font-weight="bold" fill="#dc2626">Ball A (Dropped, u_A = 0)</text>
  <line x1="170" y1="75" x2="170" y2="105" stroke="#dc2626" stroke-width="2.5" marker-end="url(#arr-r1)" />

  <!-- Ball B at bottom (projected up, u_B = 50 m/s) -->
  <circle cx="170" cy="295" r="7" fill="#2563eb" />
  <text x="170" y="325" text-anchor="middle" font-size="12" font-weight="bold" fill="#2563eb">Ball B (u_B = 50 m/s)</text>
  <line x1="170" y1="285" x2="170" y2="255" stroke="#2563eb" stroke-width="2.5" marker-end="url(#arr-b1)" />

  <!-- Meeting point M at y = 80 m (scaled: y = 300 - 0.8*240 = 300 - 192 = 108) -->
  <line x1="140" y1="108" x2="200" y2="108" stroke="#16a34a" stroke-dasharray="4,3" stroke-width="2" />
  <circle cx="170" cy="108" r="6" fill="#16a34a" />
  <text x="210" y="112" font-size="12" font-weight="bold" fill="#16a34a">Meeting Point M</text>

  <!-- Dimension line from ground to M (y = 80 m) -->
  <line x1="280" y1="108" x2="280" y2="300" stroke="#16a34a" stroke-width="1.5" />
  <line x1="275" y1="108" x2="285" y2="108" stroke="#16a34a" stroke-width="1.5" />
  <line x1="275" y1="300" x2="285" y2="300" stroke="#16a34a" stroke-width="1.5" />
  <text x="290" y="210" font-size="13" font-weight="bold" fill="#16a34a">y = 80 m</text>

  <!-- Summary Box -->
  <rect x="340" y="120" width="180" height="90" rx="6" fill="#f8fafc" stroke="#cbd5e1" />
  <text x="430" y="145" text-anchor="middle" font-size="11" fill="#334155">Relative Motion:</text>
  <text x="430" y="165" text-anchor="middle" font-size="12" font-weight="bold" fill="#2563eb">v_rel = 50 m/s, a_rel = 0</text>
  <text x="430" y="185" text-anchor="middle" font-size="11" fill="#dc2626">Time to meet: t = 100/50 = 2 s</text>
  <text x="430" y="202" text-anchor="middle" font-size="11" font-weight="bold" fill="#16a34a">Height: y = 50(2) - 5(4) = 80 m</text>
</svg>`;

// 2. Geometric Partitioning of v-t Area
const svg2 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 320" width="100%" height="320" style="background:#ffffff; font-family: 'Segoe UI', Arial, sans-serif;">
  <defs>
    <marker id="arr-axis" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto">
      <polygon points="0 0, 7 2.5, 0 5" fill="#334155" />
    </marker>
  </defs>

  <text x="270" y="24" text-anchor="middle" font-size="14" font-weight="bold" fill="#0f172a">Geometric Derivation of Kinematic Equation: s = ut + ½at²</text>

  <!-- Axes -->
  <line x1="80" y1="260" x2="480" y2="260" stroke="#334155" stroke-width="2" marker-end="url(#arr-axis)" />
  <line x1="80" y1="260" x2="80" y2="40" stroke="#334155" stroke-width="2" marker-end="url(#arr-axis)" />
  <text x="495" y="264" font-size="13" font-weight="bold" fill="#334155">t (s)</text>
  <text x="50" y="45" font-size="13" font-weight="bold" fill="#334155">v (m/s)</text>
  <text x="65" y="275" font-size="12" fill="#64748b">O</text>

  <!-- Region 1: Rectangle (ut) from (80, 260) to (380, 160) -->
  <rect x="80" y="160" width="300" height="100" fill="#dbeafe" stroke="#3b82f6" stroke-width="1.5" />
  <text x="230" y="215" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e40af">Region I (Rectangle): Area = u · t = 50 m</text>

  <!-- Region 2: Triangle (½at²) from (80, 160) to (380, 60) -->
  <polygon points="80,160 380,160 380,60" fill="#fef3c7" stroke="#f59e0b" stroke-width="1.5" />
  <text x="280" y="130" text-anchor="middle" font-size="12" font-weight="bold" fill="#b45309">Region II (Triangle): Area = ½ a t² = 25 m</text>

  <!-- Bold curve on top from (80, 160) to (380, 60) -->
  <line x1="80" y1="160" x2="380" y2="60" stroke="#2563eb" stroke-width="3" />
  <circle cx="80" cy="160" r="4" fill="#2563eb" />
  <circle cx="380" cy="60" r="4" fill="#2563eb" />

  <!-- Ticks -->
  <line x1="75" y1="160" x2="85" y2="160" stroke="#334155" stroke-width="2" />
  <text x="65" y="164" font-size="12" font-weight="bold" fill="#0f172a">u = 10</text>

  <line x1="75" y1="60" x2="85" y2="60" stroke="#334155" stroke-width="2" />
  <text x="65" y="64" font-size="12" font-weight="bold" fill="#0f172a">v = 20</text>

  <line x1="380" y1="255" x2="380" y2="265" stroke="#334155" stroke-width="2" />
  <text x="380" y="280" text-anchor="middle" font-size="12" font-weight="bold" fill="#0f172a">t = 5 s</text>

  <!-- Ratio annotation -->
  <text x="230" y="305" text-anchor="middle" font-size="12" font-weight="bold" fill="#16a34a">Ratio of Region I to Region II = 50 m / 25 m = 2 : 1</text>
</svg>`;

// 3. Falling Water Drops at Regular Time Intervals
const svg3 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 330" width="100%" height="330" style="background:#ffffff; font-family: 'Segoe UI', Arial, sans-serif;">
  <text x="270" y="24" text-anchor="middle" font-size="14" font-weight="bold" fill="#0f172a">Water Drops Falling from Tap at Regular Time Intervals</text>

  <!-- Ceiling & Tap at (150, 60) -->
  <rect x="80" y="45" width="140" height="15" fill="#334155" />
  <!-- Tap nozzle -->
  <rect x="140" y="60" width="20" height="15" fill="#64748b" />
  <text x="170" y="73" font-size="12" font-weight="bold" fill="#0f172a">Tap (Height H = 5 m)</text>

  <!-- Ground -->
  <line x1="60" y1="290" x2="480" y2="290" stroke="#334155" stroke-width="2.5" />
  <text x="270" y="310" text-anchor="middle" font-size="12" font-weight="bold" fill="#334155">Ground Floor</text>

  <!-- Drops:
       Total time T = 1 s, Δt = 1/3 s.
       4th drop at t=0: y=0 (scaled px = 75)
       3rd drop at t=1/3 s: y = 5/9 m = 0.56 m (scaled px = 75 + 0.56/5 * 215 = 75 + 24 = 99)
       2nd drop at t=2/3 s: y = 20/9 m = 2.22 m (scaled px = 75 + 2.22/5 * 215 = 75 + 95 = 170)
       1st drop at t=1 s: y = 5 m (hits ground at px = 290)
  -->

  <!-- 4th Drop -->
  <circle cx="150" cy="78" r="4" fill="#3b82f6" />
  <text x="170" y="82" font-size="11" font-weight="bold" fill="#2563eb">4th Drop (t = 0, Leaving Tap)</text>

  <!-- 3rd Drop -->
  <circle cx="150" cy="99" r="5" fill="#3b82f6" />
  <line x1="150" y1="99" x2="230" y2="99" stroke="#94a3b8" stroke-dasharray="2,2" />
  <text x="240" y="103" font-size="11" font-weight="bold" fill="#2563eb">3rd Drop: y₃ = 5/9 m (from tap)</text>

  <!-- 2nd Drop -->
  <circle cx="150" cy="170" r="5" fill="#3b82f6" />
  <line x1="150" y1="170" x2="230" y2="170" stroke="#94a3b8" stroke-dasharray="2,2" />
  <text x="240" y="174" font-size="11" font-weight="bold" fill="#2563eb">2nd Drop: y₂ = 20/9 m (from tap)</text>

  <!-- 1st Drop -->
  <circle cx="150" cy="290" r="6" fill="#1d4ed8" />
  <text x="170" y="285" font-size="11" font-weight="bold" fill="#1d4ed8">1st Drop (Touching Ground)</text>

  <!-- Distance between 2nd and 3rd drop annotation -->
  <line x1="130" y1="99" x2="130" y2="170" stroke="#dc2626" stroke-width="2" />
  <line x1="125" y1="99" x2="135" y2="99" stroke="#dc2626" stroke-width="2" />
  <line x1="125" y1="170" x2="135" y2="170" stroke="#dc2626" stroke-width="2" />
  <text x="120" y="138" text-anchor="end" font-size="11" font-weight="bold" fill="#dc2626">Δy = 5/3 m</text>

  <!-- Summary Card -->
  <rect x="300" y="195" width="210" height="75" rx="6" fill="#f8fafc" stroke="#cbd5e1" />
  <text x="405" y="215" text-anchor="middle" font-size="11" fill="#334155">Galileo's Odd Ratio for Drops:</text>
  <text x="405" y="233" text-anchor="middle" font-size="11" font-weight="bold" fill="#2563eb">Distances in ratios 1 : 3 : 5</text>
  <text x="405" y="253" text-anchor="middle" font-size="12" font-weight="bold" fill="#dc2626">Distance (2nd to 3rd) = 1.67 m</text>
</svg>`;

fs.writeFileSync(path.join(dir, "test6_q1_tower_balls_meeting.svg"), svg1, "utf8");
fs.writeFileSync(path.join(dir, "test6_q4_vt_area_partition.svg"), svg2, "utf8");
fs.writeFileSync(path.join(dir, "test6_q7_water_drops.svg"), svg3, "utf8");

console.log("Successfully generated all 3 diagram SVG assets for Test 6 (Uniformly Accelerated Motion)!");
