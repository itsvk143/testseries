import fs from "fs";
import path from "path";

const dir = path.join(process.cwd(), "public/images/diagrams/kinematics");

// 1. Two Trains on Parallel Tracks
const svg1 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 650 240" width="100%" height="240" style="background:#ffffff; font-family: 'Segoe UI', Arial, sans-serif;">
  <defs>
    <marker id="arr-blue" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto">
      <polygon points="0 0, 7 2.5, 0 5" fill="#2563eb" />
    </marker>
    <marker id="arr-green" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto">
      <polygon points="0 0, 7 2.5, 0 5" fill="#16a34a" />
    </marker>
  </defs>

  <text x="325" y="24" text-anchor="middle" font-size="14" font-weight="bold" fill="#0f172a">Relative Velocity: Two Trains Overtaking on Parallel Tracks</text>

  <!-- Track 1 -->
  <line x1="40" y1="90" x2="610" y2="90" stroke="#94a3b8" stroke-width="3" stroke-dasharray="10,5" />
  <!-- Track 2 -->
  <line x1="40" y1="170" x2="610" y2="170" stroke="#94a3b8" stroke-width="3" stroke-dasharray="10,5" />

  <!-- Train A (Fast train, length = 120m, moving right at 20 m/s) -->
  <!-- Located at x=60 to 180 (length 120px) on Track 1 -->
  <rect x="60" y="70" width="140" height="36" rx="4" fill="#dbeafe" stroke="#2563eb" stroke-width="2" />
  <text x="130" y="93" text-anchor="middle" font-size="12" font-weight="bold" fill="#1e40af">Train A (L_A = 120 m)</text>
  <line x1="200" y1="88" x2="280" y2="88" stroke="#2563eb" stroke-width="2.5" marker-end="url(#arr-blue)" />
  <text x="240" y="78" text-anchor="middle" font-size="11" font-weight="bold" fill="#2563eb">v_A = 20 m/s</text>

  <!-- Train B (Slow train, length = 180m, moving right at 10 m/s) -->
  <!-- Located at x=200 to 380 (length 180px) on Track 2 -->
  <rect x="200" y="150" width="200" height="36" rx="4" fill="#dcfce7" stroke="#16a34a" stroke-width="2" />
  <text x="300" y="173" text-anchor="middle" font-size="12" font-weight="bold" fill="#166534">Train B (L_B = 180 m)</text>
  <line x1="400" y1="168" x2="460" y2="168" stroke="#16a34a" stroke-width="2.5" marker-end="url(#arr-green)" />
  <text x="430" y="158" text-anchor="middle" font-size="11" font-weight="bold" fill="#16a34a">v_B = 10 m/s</text>

  <!-- Relative distance & formula box -->
  <rect x="470" y="65" width="165" height="60" rx="6" fill="#f8fafc" stroke="#cbd5e1" />
  <text x="552" y="85" text-anchor="middle" font-size="11" fill="#334155">Relative Speed:</text>
  <text x="552" y="102" text-anchor="middle" font-size="11" font-weight="bold" fill="#2563eb">v_rel = v_A - v_B = 10 m/s</text>
  <text x="552" y="117" text-anchor="middle" font-size="11" fill="#64748b">Distance = L_A + L_B</text>
</svg>`;

// 2. Rain-Man Relative Velocity Triangle
const svg2 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 560 320" width="100%" height="320" style="background:#ffffff; font-family: 'Segoe UI', Arial, sans-serif;">
  <defs>
    <marker id="arr-blue2" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto">
      <polygon points="0 0, 7 2.5, 0 5" fill="#2563eb" />
    </marker>
    <marker id="arr-red2" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto">
      <polygon points="0 0, 7 2.5, 0 5" fill="#dc2626" />
    </marker>
    <marker id="arr-purple" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto">
      <polygon points="0 0, 7 2.5, 0 5" fill="#7c3aed" />
    </marker>
  </defs>

  <text x="280" y="24" text-anchor="middle" font-size="14" font-weight="bold" fill="#0f172a">Rain–Man Relative Velocity &amp; Umbrella Orientation</text>

  <!-- Ground -->
  <line x1="40" y1="280" x2="520" y2="280" stroke="#334155" stroke-width="2" />

  <!-- Person running east at 20 m/s -->
  <!-- Stick figure at (140, 240) -->
  <circle cx="140" cy="210" r="12" fill="#0f172a" />
  <line x1="140" y1="222" x2="140" y2="255" stroke="#0f172a" stroke-width="3" />
  <line x1="140" y1="255" x2="125" y2="280" stroke="#0f172a" stroke-width="3" />
  <line x1="140" y1="255" x2="155" y2="280" stroke="#0f172a" stroke-width="3" />
  <!-- Arm holding umbrella tilted 45 deg east -->
  <line x1="140" y1="230" x2="160" y2="215" stroke="#0f172a" stroke-width="2.5" />
  <!-- Umbrella shaft tilted at 45 deg -->
  <line x1="160" y1="215" x2="185" y2="175" stroke="#dc2626" stroke-width="3" />
  <path d="M 160 160 Q 195 145 220 185" fill="#dc2626" stroke="#991b1b" stroke-width="2" />
  <text x="195" y="145" font-size="11" font-weight="bold" fill="#dc2626">Umbrella at 45° to vertical</text>

  <!-- Velocity vector of man -->
  <line x1="140" y1="240" x2="220" y2="240" stroke="#2563eb" stroke-width="2.5" marker-end="url(#arr-blue2)" />
  <text x="180" y="258" font-size="11" font-weight="bold" fill="#2563eb">v_m = 20 m/s East</text>

  <!-- Vector Triangle in upper right -->
  <!-- Origin O at (380, 70) -->
  <circle cx="380" cy="70" r="4" fill="#0f172a" />
  <text x="365" y="70" font-size="12" font-weight="bold" fill="#0f172a">O</text>

  <!-- Rain vector v_r straight down: (380, 70) to (380, 190) length 120 -->
  <line x1="380" y1="70" x2="380" y2="190" stroke="#2563eb" stroke-width="2.5" marker-end="url(#arr-blue2)" />
  <text x="290" y="135" font-size="12" font-weight="bold" fill="#2563eb">v_r = 20 m/s (down)</text>

  <!-- Vector -v_m to the left: from (380, 190) to (260, 190) -->
  <line x1="380" y1="190" x2="260" y2="190" stroke="#16a34a" stroke-width="2.5" marker-end="url(#arr-blue2)" />
  <text x="320" y="210" text-anchor="middle" font-size="12" font-weight="bold" fill="#16a34a">-v_m = 20 m/s (West)</text>

  <!-- Resultant relative velocity vector v_rm from (380, 70) to (260, 190) -->
  <line x1="380" y1="70" x2="265" y2="185" stroke="#7c3aed" stroke-width="3" marker-end="url(#arr-purple)" />
  <text x="260" y="115" font-size="12" font-weight="bold" fill="#7c3aed">v_rm = 20√2 m/s</text>

  <!-- Angle theta with vertical -->
  <path d="M 380 110 A 40 40 0 0 1 350 100" fill="none" stroke="#dc2626" stroke-width="2" />
  <text x="355" y="125" font-size="12" font-weight="bold" fill="#dc2626">θ = 45°</text>
</svg>`;

// 3. River-Boat Shortest Path (Zero Drift)
const svg3 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 580 320" width="100%" height="320" style="background:#ffffff; font-family: 'Segoe UI', Arial, sans-serif;">
  <defs>
    <marker id="arr-b3" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto">
      <polygon points="0 0, 7 2.5, 0 5" fill="#2563eb" />
    </marker>
    <marker id="arr-r3" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto">
      <polygon points="0 0, 7 2.5, 0 5" fill="#dc2626" />
    </marker>
    <marker id="arr-g3" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto">
      <polygon points="0 0, 7 2.5, 0 5" fill="#16a34a" />
    </marker>
  </defs>

  <text x="290" y="24" text-anchor="middle" font-size="14" font-weight="bold" fill="#0f172a">River–Boat Problem: Crossing Along Shortest Path (Zero Drift)</text>

  <!-- River Banks -->
  <rect x="40" y="70" width="500" height="170" fill="#eff6ff" stroke="#93c5fd" stroke-width="1.5" />
  <line x1="40" y1="70" x2="540" y2="70" stroke="#334155" stroke-width="3" />
  <line x1="40" y1="240" x2="540" y2="240" stroke="#334155" stroke-width="3" />
  <text x="50" y="60" font-size="11" font-weight="bold" fill="#64748b">North Bank</text>
  <text x="50" y="258" font-size="11" font-weight="bold" fill="#64748b">South Bank</text>

  <!-- Width dimension -->
  <line x1="70" y1="70" x2="70" y2="240" stroke="#64748b" stroke-dasharray="3,3" stroke-width="1.5" />
  <text x="75" y="160" font-size="12" font-weight="bold" fill="#64748b">w = 500 m</text>

  <!-- River Flow vector v_r to East -->
  <line x1="180" y1="120" x2="280" y2="120" stroke="#2563eb" stroke-width="2.5" marker-end="url(#arr-b3)" />
  <text x="230" y="110" text-anchor="middle" font-size="12" font-weight="bold" fill="#2563eb">v_r = 3 m/s (East)</text>

  <!-- Point A (start) at (250, 240) and Point B (straight across) at (250, 70) -->
  <circle cx="250" cy="240" r="5" fill="#0f172a" />
  <text x="250" y="258" text-anchor="middle" font-size="12" font-weight="bold" fill="#0f172a">A (Start)</text>

  <circle cx="250" cy="70" r="5" fill="#16a34a" />
  <text x="250" y="62" text-anchor="middle" font-size="12" font-weight="bold" fill="#16a34a">B (Directly Opposite)</text>

  <!-- Boat heading vector v_br upstream: from (250, 240) to (160, 120) length 150 -->
  <line x1="250" y1="240" x2="160" y2="120" stroke="#dc2626" stroke-width="3" marker-end="url(#arr-r3)" />
  <text x="145" y="190" font-size="12" font-weight="bold" fill="#dc2626">v_b = 5 m/s</text>

  <!-- River flow component connecting (160, 120) to (250, 120) -->
  <line x1="160" y1="120" x2="245" y2="120" stroke="#2563eb" stroke-width="2" stroke-dasharray="3,3" marker-end="url(#arr-b3)" />

  <!-- Resultant velocity vector v_net straight North: from (250, 240) to (250, 75) -->
  <line x1="250" y1="240" x2="250" y2="78" stroke="#16a34a" stroke-width="3" stroke-dasharray="5,2" marker-end="url(#arr-g3)" />
  <text x="260" y="160" font-size="12" font-weight="bold" fill="#16a34a">v_res = √(5² - 3²) = 4 m/s</text>

  <!-- Angle alpha with vertical -->
  <path d="M 250 200 A 40 40 0 0 0 230 215" fill="none" stroke="#dc2626" stroke-width="2" />
  <text x="220" y="195" font-size="11" font-weight="bold" fill="#dc2626">α = 37°</text>

  <!-- Summary Box -->
  <rect x="360" y="140" width="170" height="70" rx="6" fill="#ffffff" stroke="#cbd5e1" />
  <text x="445" y="162" text-anchor="middle" font-size="11" fill="#334155">Zero Drift Condition:</text>
  <text x="445" y="180" text-anchor="middle" font-size="11" font-weight="bold" fill="#dc2626">sin α = v_r / v_b = 3/5</text>
  <text x="445" y="198" text-anchor="middle" font-size="11" font-weight="bold" fill="#16a34a">Time t = w / v_res = 125 s</text>
</svg>`;

fs.writeFileSync(path.join(dir, "test4_q1_trains_overtaking.svg"), svg1, "utf8");
fs.writeFileSync(path.join(dir, "test4_q3_rain_man.svg"), svg2, "utf8");
fs.writeFileSync(path.join(dir, "test4_q7_river_shortest_path.svg"), svg3, "utf8");

console.log("Successfully generated all 3 diagram SVG assets for Test 4 (Relative Velocity)!");
