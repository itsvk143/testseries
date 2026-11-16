import fs from "fs";
import path from "path";

const dir = path.join(process.cwd(), "public/images/diagrams/kinematics");
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

// 1. Diagram 1: 1D Number Line Motion O -> A -> B
// O at x=0, A at x=+120m, B at x=-40m
const svg1 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 650 220" width="100%" height="220" style="background:#ffffff; font-family: 'Segoe UI', Arial, sans-serif;">
  <defs>
    <marker id="arrowhead" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
      <polygon points="0 0, 8 3, 0 6" fill="#2563eb" />
    </marker>
    <marker id="arrowhead-red" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
      <polygon points="0 0, 8 3, 0 6" fill="#dc2626" />
    </marker>
    <marker id="axis-arrow" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
      <polygon points="0 0, 8 3, 0 6" fill="#334155" />
    </marker>
  </defs>

  <!-- Title / Legend -->
  <text x="325" y="25" text-anchor="middle" font-size="14" font-weight="bold" fill="#0f172a">1D Rectilinear Motion along x-axis</text>

  <!-- Number line axis -->
  <line x1="50" y1="130" x2="600" y2="130" stroke="#334155" stroke-width="2.5" marker-end="url(#axis-arrow)" />
  <line x1="50" y1="130" x2="40" y2="130" stroke="#334155" stroke-width="2.5" />
  <text x="615" y="134" font-size="13" font-weight="bold" fill="#334155">x (m)</text>

  <!-- Tick marks -->
  <!-- Scale: x=0 at 220px, x=120 at 550px (dx=120 -> 330px, 2.75px per m). x=-40 at 110px. -->
  <!-- Tick at B (-40 m): 110px -->
  <line x1="110" y1="123" x2="110" y2="137" stroke="#334155" stroke-width="2" />
  <circle cx="110" cy="130" r="4" fill="#dc2626" />
  <text x="110" y="155" text-anchor="middle" font-size="13" font-weight="bold" fill="#dc2626">B (-40)</text>

  <!-- Tick at O (0 m): 220px -->
  <line x1="220" y1="120" x2="220" y2="140" stroke="#334155" stroke-width="2.5" />
  <circle cx="220" cy="130" r="4" fill="#0f172a" />
  <text x="220" y="155" text-anchor="middle" font-size="13" font-weight="bold" fill="#0f172a">O (0)</text>

  <!-- Intermediate tick: +60 m at 385px -->
  <line x1="385" y1="125" x2="385" y2="135" stroke="#94a3b8" stroke-width="1.5" />
  <text x="385" y="152" text-anchor="middle" font-size="12" fill="#64748b">+60</text>

  <!-- Tick at A (+120 m): 550px -->
  <line x1="550" y1="123" x2="550" y2="137" stroke="#334155" stroke-width="2" />
  <circle cx="550" cy="130" r="4" fill="#2563eb" />
  <text x="550" y="155" text-anchor="middle" font-size="13" font-weight="bold" fill="#2563eb">A (+120)</text>

  <!-- Path 1: O -> A (t = 0 to 6 s) -->
  <path d="M 220 100 L 540 100" fill="none" stroke="#2563eb" stroke-width="2.5" marker-end="url(#arrowhead)" />
  <text x="385" y="90" text-anchor="middle" font-size="12" font-weight="bold" fill="#2563eb">Path 1: O → A (in 6 s, +120 m)</text>

  <!-- Path 2: A -> B (t = 6 to 10 s) -->
  <path d="M 550 65 L 120 65" fill="none" stroke="#dc2626" stroke-width="2.5" marker-end="url(#arrowhead-red)" />
  <text x="330" y="55" text-anchor="middle" font-size="12" font-weight="bold" fill="#dc2626">Path 2: A → B (in 4 s, -160 m)</text>
</svg>`;

// 2. Diagram 2: Position-Time graph with tangents at P (t=2s, 30 deg) and Q (t=5s, 60 deg)
const svg2 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 550 320" width="100%" height="320" style="background:#ffffff; font-family: 'Segoe UI', Arial, sans-serif;">
  <defs>
    <marker id="axis-arr" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto">
      <polygon points="0 0, 7 2.5, 0 5" fill="#334155" />
    </marker>
  </defs>

  <text x="275" y="24" text-anchor="middle" font-size="14" font-weight="bold" fill="#0f172a">Position–Time (x–t) Graph with Tangents</text>

  <!-- Axes -->
  <line x1="70" y1="260" x2="490" y2="260" stroke="#334155" stroke-width="2" marker-end="url(#axis-arr)" />
  <line x1="70" y1="260" x2="70" y2="40" stroke="#334155" stroke-width="2" marker-end="url(#axis-arr)" />
  <text x="505" y="264" font-size="13" font-weight="bold" fill="#334155">t (s)</text>
  <text x="45" y="45" font-size="13" font-weight="bold" fill="#334155">x (m)</text>
  <text x="58" y="275" font-size="12" fill="#64748b">O</text>

  <!-- Grid lines -->
  <line x1="190" y1="260" x2="190" y2="200" stroke="#cbd5e1" stroke-dasharray="3,3" />
  <line x1="360" y1="260" x2="360" y2="105" stroke="#cbd5e1" stroke-dasharray="3,3" />
  <text x="190" y="278" text-anchor="middle" font-size="12" fill="#0f172a">t = 2 s</text>
  <text x="360" y="278" text-anchor="middle" font-size="12" fill="#0f172a">t = 5 s</text>

  <!-- Smooth position-time curve x(t) accelerating upward -->
  <path d="M 70 260 Q 200 240, 260 170 T 420 60" fill="none" stroke="#2563eb" stroke-width="3" />

  <!-- Point P at t=2s (x=190, y=200) -->
  <circle cx="190" cy="200" r="5" fill="#dc2626" />
  <text x="175" y="195" font-size="13" font-weight="bold" fill="#dc2626">P</text>

  <!-- Tangent at P: slope = tan(30) = 0.577. Line: from (120, 240) to (270, 153) -->
  <line x1="100" y1="252" x2="280" y2="148" stroke="#16a34a" stroke-width="2" />
  <!-- Horizontal reference line at P baseline -->
  <line x1="100" y1="252" x2="180" y2="252" stroke="#64748b" stroke-dasharray="2,2" />
  <path d="M 140 252 A 40 40 0 0 0 135 232" fill="none" stroke="#dc2626" stroke-width="1.5" />
  <text x="148" y="244" font-size="11" font-weight="bold" fill="#dc2626">30°</text>

  <!-- Point Q at t=5s (x=360, y=105) -->
  <circle cx="360" cy="105" r="5" fill="#dc2626" />
  <text x="345" y="100" font-size="13" font-weight="bold" fill="#dc2626">Q</text>

  <!-- Tangent at Q: slope = tan(60) = 1.732. Line: from (315, 183) to (395, 45) -->
  <line x1="315" y1="183" x2="395" y2="45" stroke="#16a34a" stroke-width="2" />
  <line x1="315" y1="183" x2="375" y2="183" stroke="#64748b" stroke-dasharray="2,2" />
  <path d="M 345 183 A 30 30 0 0 0 338 143" fill="none" stroke="#dc2626" stroke-width="1.5" />
  <text x="348" y="165" font-size="11" font-weight="bold" fill="#dc2626">60°</text>

  <!-- Legend -->
  <rect x="360" y="200" width="150" height="45" rx="6" fill="#f8fafc" stroke="#cbd5e1" />
  <text x="370" y="218" font-size="11" fill="#16a34a">— Tangent at P (slope = tan 30°)</text>
  <text x="370" y="234" font-size="11" fill="#16a34a">— Tangent at Q (slope = tan 60°)</text>
</svg>`;

// 3. Diagram 3: Acceleration vs Position (a-x) graph
// Triangle region: from x=0 to x=8m, a peaks at a=6 m/s^2 at x=0 and drops to 0 at x=8m
// Area under a-x graph = \int a dx = (v_f^2 - v_i^2)/2
const svg3 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 300" width="100%" height="300" style="background:#ffffff; font-family: 'Segoe UI', Arial, sans-serif;">
  <defs>
    <marker id="arr3" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto">
      <polygon points="0 0, 7 2.5, 0 5" fill="#334155" />
    </marker>
  </defs>

  <text x="270" y="25" text-anchor="middle" font-size="14" font-weight="bold" fill="#0f172a">Acceleration–Position (a–x) Graph</text>

  <!-- Shaded Area under triangle -->
  <polygon points="90,70 90,240 410,240" fill="#dbeafe" stroke="#93c5fd" stroke-width="1" />
  <text x="200" y="180" font-size="13" font-weight="bold" fill="#1e40af">Area = ½ × base × height</text>

  <!-- Axes -->
  <line x1="90" y1="240" x2="480" y2="240" stroke="#334155" stroke-width="2" marker-end="url(#arr3)" />
  <line x1="90" y1="240" x2="90" y2="45" stroke="#334155" stroke-width="2" marker-end="url(#arr3)" />
  <text x="490" y="244" font-size="13" font-weight="bold" fill="#334155">x (m)</text>
  <text x="45" y="48" font-size="13" font-weight="bold" fill="#334155">a (m/s²)</text>
  <text x="75" y="255" font-size="12" fill="#64748b">O</text>

  <!-- Linear curve from (x=0, a=6) to (x=8, a=0) -->
  <line x1="90" y1="70" x2="410" y2="240" stroke="#2563eb" stroke-width="3" />
  <circle cx="90" cy="70" r="5" fill="#dc2626" />
  <circle cx="410" cy="240" r="5" fill="#dc2626" />

  <!-- Ticks -->
  <line x1="85" y1="70" x2="95" y2="70" stroke="#334155" stroke-width="2" />
  <text x="75" y="74" text-anchor="end" font-size="13" font-weight="bold" fill="#0f172a">6</text>

  <line x1="410" y1="235" x2="410" y2="245" stroke="#334155" stroke-width="2" />
  <text x="410" y="260" text-anchor="middle" font-size="13" font-weight="bold" fill="#0f172a">8</text>

  <!-- Formula hint box -->
  <rect x="290" y="70" width="180" height="50" rx="6" fill="#f8fafc" stroke="#cbd5e1" />
  <text x="380" y="92" text-anchor="middle" font-size="12" fill="#334155">Work-Kinetic Energy Analogy:</text>
  <text x="380" y="110" text-anchor="middle" font-size="12" font-weight="bold" fill="#2563eb">∫ a dx = ½ (v² - u²)</text>
</svg>`;

// Write the files
fs.writeFileSync(path.join(dir, "test2_q1_numberline.svg"), svg1, "utf8");
fs.writeFileSync(path.join(dir, "test2_q16_xt_tangents.svg"), svg2, "utf8");
fs.writeFileSync(path.join(dir, "test2_q28_ax_graph.svg"), svg3, "utf8");

console.log("Successfully generated all 3 diagram SVG assets for Test 2 in public/images/diagrams/kinematics/!");
