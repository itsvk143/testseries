import fs from 'fs';
import path from 'path';

const outDir = 'public/images/diagrams/kinematics';
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// 1. Diagram 1: Trapezoidal v-t graph (0 to 12 s)
// Accel 0-4s (0->20), Const 4-8s (20), Decel 8-12s (20->0)
const svg1 = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 320" width="100%" height="100%">
  <defs>
    <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#1e293b"/>
    </marker>
  </defs>
  <rect width="540" height="320" fill="#ffffff" rx="8"/>
  
  <!-- Title / Label -->
  <text x="270" y="28" font-family="system-ui, sans-serif" font-size="15" font-weight="bold" fill="#0f172a" text-anchor="middle">Velocity–Time (v–t) Graph</text>
  
  <!-- Grid Lines -->
  <g stroke="#e2e8f0" stroke-width="1" stroke-dasharray="3,3">
    <!-- horizontal grid -->
    <line x1="70" y1="90" x2="480" y2="90" />
    <line x1="70" y1="170" x2="480" y2="170" />
    <!-- vertical grid -->
    <line x1="200" y1="90" x2="200" y2="250" />
    <line x1="330" y1="90" x2="330" y2="250" />
    <line x1="460" y1="90" x2="460" y2="250" />
  </g>
  
  <!-- Shaded Region under Accel -->
  <polygon points="70,250 200,90 200,250" fill="rgba(59, 130, 246, 0.15)"/>
  <!-- Shaded Region under Const Vel -->
  <polygon points="200,90 330,90 330,250 200,250" fill="rgba(16, 185, 129, 0.15)"/>
  <!-- Shaded Region under Decel -->
  <polygon points="330,90 460,250 330,250" fill="rgba(239, 68, 68, 0.15)"/>
  
  <!-- Axes -->
  <line x1="50" y1="250" x2="500" y2="250" stroke="#1e293b" stroke-width="2" marker-end="url(#arrow)"/>
  <line x1="70" y1="270" x2="70" y2="40" stroke="#1e293b" stroke-width="2" marker-end="url(#arrow)"/>
  
  <!-- Axis labels -->
  <text x="515" y="255" font-family="system-ui, sans-serif" font-size="14" font-weight="600" fill="#0f172a">t (s)</text>
  <text x="70" y="25" font-family="system-ui, sans-serif" font-size="14" font-weight="600" fill="#0f172a" text-anchor="middle">v (m/s)</text>
  
  <!-- Ticks and Tick labels on x-axis -->
  <line x1="70" y1="250" x2="70" y2="256" stroke="#1e293b" stroke-width="2"/>
  <text x="70" y="272" font-family="system-ui, sans-serif" font-size="13" fill="#334155" text-anchor="middle">0</text>
  
  <line x1="200" y1="250" x2="200" y2="256" stroke="#1e293b" stroke-width="2"/>
  <text x="200" y="272" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#2563eb" text-anchor="middle">4</text>
  
  <line x1="330" y1="250" x2="330" y2="256" stroke="#1e293b" stroke-width="2"/>
  <text x="330" y="272" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#059669" text-anchor="middle">8</text>
  
  <line x1="460" y1="250" x2="460" y2="256" stroke="#1e293b" stroke-width="2"/>
  <text x="460" y="272" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#dc2626" text-anchor="middle">12</text>
  
  <!-- Ticks and Tick labels on y-axis -->
  <line x1="64" y1="170" x2="70" y2="170" stroke="#1e293b" stroke-width="2"/>
  <text x="58" y="175" font-family="system-ui, sans-serif" font-size="13" fill="#334155" text-anchor="end">10</text>
  
  <line x1="64" y1="90" x2="70" y2="90" stroke="#1e293b" stroke-width="2"/>
  <text x="58" y="95" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#1e293b" text-anchor="end">20</text>
  
  <!-- The Motion Plot Line -->
  <polyline points="70,250 200,90 330,90 460,250" fill="none" stroke="#2563eb" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  
  <!-- Points -->
  <circle cx="70" cy="250" r="4" fill="#2563eb"/>
  <circle cx="200" cy="90" r="5" fill="#2563eb"/>
  <circle cx="330" cy="90" r="5" fill="#2563eb"/>
  <circle cx="460" cy="250" r="4" fill="#2563eb"/>
  
  <!-- Annotations -->
  <text x="135" y="165" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#1d4ed8" text-anchor="middle">Accel.</text>
  <text x="265" y="125" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#047857" text-anchor="middle">v = const</text>
  <text x="395" y="165" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#b91c1c" text-anchor="middle">Decel.</text>
</svg>`;

// 2. Diagram 2: Position-Time (x-t) Graph Intersection of Two Objects
const svg2 = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 330" width="100%" height="100%">
  <defs>
    <marker id="arrow2" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#1e293b"/>
    </marker>
  </defs>
  <rect width="540" height="330" fill="#ffffff" rx="8"/>
  
  <text x="270" y="28" font-family="system-ui, sans-serif" font-size="15" font-weight="bold" fill="#0f172a" text-anchor="middle">Position–Time (x–t) Graphs of Bodies A and B</text>
  
  <!-- Grid -->
  <g stroke="#e2e8f0" stroke-width="1" stroke-dasharray="3,3">
    <line x1="70" y1="100" x2="480" y2="100" />
    <line x1="70" y1="160" x2="480" y2="160" />
    <line x1="330" y1="40" x2="330" y2="260" />
  </g>
  
  <!-- Axes -->
  <line x1="50" y1="260" x2="500" y2="260" stroke="#1e293b" stroke-width="2" marker-end="url(#arrow2)"/>
  <line x1="70" y1="280" x2="70" y2="40" stroke="#1e293b" stroke-width="2" marker-end="url(#arrow2)"/>
  
  <text x="515" y="265" font-family="system-ui, sans-serif" font-size="14" font-weight="600" fill="#0f172a">t (s)</text>
  <text x="70" y="25" font-family="system-ui, sans-serif" font-size="14" font-weight="600" fill="#0f172a" text-anchor="middle">x (m)</text>
  
  <!-- Ticks on x-axis -->
  <text x="70" y="282" font-family="system-ui, sans-serif" font-size="13" fill="#334155" text-anchor="middle">0</text>
  <line x1="200" y1="260" x2="200" y2="266" stroke="#1e293b" stroke-width="1.5"/>
  <text x="200" y="282" font-family="system-ui, sans-serif" font-size="13" fill="#334155" text-anchor="middle">2</text>
  <line x1="330" y1="260" x2="330" y2="266" stroke="#1e293b" stroke-width="2"/>
  <text x="330" y="282" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#7c3aed" text-anchor="middle">4</text>
  <line x1="460" y1="260" x2="460" y2="266" stroke="#1e293b" stroke-width="1.5"/>
  <text x="460" y="282" font-family="system-ui, sans-serif" font-size="13" fill="#334155" text-anchor="middle">6</text>
  
  <!-- Ticks on y-axis -->
  <line x1="64" y1="160" x2="70" y2="160" stroke="#1e293b" stroke-width="2"/>
  <text x="58" y="165" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#d97706" text-anchor="end">40</text>
  
  <line x1="64" y1="100" x2="70" y2="100" stroke="#1e293b" stroke-width="2"/>
  <text x="58" y="105" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#7c3aed" text-anchor="end">60</text>
  
  <!-- Line for Body A: (0,0) to (330, 100) to (460, 40) -->
  <line x1="70" y1="260" x2="460" y2="20" stroke="#2563eb" stroke-width="3" stroke-linecap="round"/>
  <text x="440" y="45" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#2563eb">Line A</text>
  
  <!-- Line for Body B: (0, 40m) -> (70, 160) to (330, 100) to (460, 70) -->
  <line x1="70" y1="160" x2="480" y2="65" stroke="#d97706" stroke-width="3" stroke-linecap="round"/>
  <text x="475" y="85" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#d97706">Line B</text>
  
  <!-- Meeting Point -->
  <circle cx="330" cy="100" r="6" fill="#7c3aed" stroke="#ffffff" stroke-width="2"/>
  <text x="345" y="105" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#7c3aed">P (4 s, 60 m)</text>
</svg>`;

// 3. Diagram 3: Curved v-t Graph with Extrema Points P, Q, R, S
const svg3 = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 330" width="100%" height="100%">
  <defs>
    <marker id="arrow3" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#1e293b"/>
    </marker>
  </defs>
  <rect width="540" height="330" fill="#ffffff" rx="8"/>
  
  <text x="270" y="28" font-family="system-ui, sans-serif" font-size="15" font-weight="bold" fill="#0f172a" text-anchor="middle">Velocity–Time Graph with Marked Points</text>
  
  <!-- Axes -->
  <line x1="50" y1="200" x2="500" y2="200" stroke="#1e293b" stroke-width="2" marker-end="url(#arrow3)"/>
  <line x1="70" y1="300" x2="70" y2="40" stroke="#1e293b" stroke-width="2" marker-end="url(#arrow3)"/>
  
  <text x="515" y="205" font-family="system-ui, sans-serif" font-size="14" font-weight="600" fill="#0f172a">t</text>
  <text x="70" y="25" font-family="system-ui, sans-serif" font-size="14" font-weight="600" fill="#0f172a" text-anchor="middle">v</text>
  <text x="55" y="215" font-family="system-ui, sans-serif" font-size="13" fill="#334155">O</text>
  
  <!-- Smooth Sinusoidal / Polynomial Curve -->
  <!-- Starts at (70, 200), rises through P(140, 130), peaks at Q(210, 80), crosses zero at R(310, 200), trough at S(400, 260) -->
  <path d="M 70 200 C 120 180, 160 80, 210 80 C 260 80, 270 200, 310 200 C 350 200, 360 260, 400 260 C 440 260, 460 230, 480 200" 
        fill="none" stroke="#2563eb" stroke-width="3" stroke-linecap="round"/>
        
  <!-- Horizontal Tangent at Peak Q -->
  <line x1="160" y1="80" x2="260" y2="80" stroke="#10b981" stroke-width="2" stroke-dasharray="4,4"/>
  <text x="210" y="65" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#047857" text-anchor="middle">slope = 0 (a = 0)</text>

  <!-- Horizontal Tangent at Trough S -->
  <line x1="350" y1="260" x2="450" y2="260" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4"/>

  <!-- Marked Points -->
  <!-- Point P -->
  <circle cx="140" cy="130" r="5" fill="#f59e0b"/>
  <text x="125" y="125" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#b45309">P</text>
  
  <!-- Point Q -->
  <circle cx="210" cy="80" r="6" fill="#10b981" stroke="#ffffff" stroke-width="2"/>
  <text x="210" y="105" font-family="system-ui, sans-serif" font-size="15" font-weight="bold" fill="#065f46" text-anchor="middle">Q</text>
  
  <!-- Point R -->
  <circle cx="310" cy="200" r="5" fill="#ef4444"/>
  <text x="315" y="190" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#b91c1c">R</text>
  
  <!-- Point S -->
  <circle cx="400" cy="260" r="5" fill="#64748b"/>
  <text x="400" y="285" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#334155" text-anchor="middle">S</text>
</svg>`;

// 4. Diagram 4: Piecewise v-t Graph with Negative Region (0-4s and 4-6s)
const svg4 = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 340" width="100%" height="100%">
  <defs>
    <marker id="arrow4" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#1e293b"/>
    </marker>
  </defs>
  <rect width="540" height="340" fill="#ffffff" rx="8"/>
  
  <text x="270" y="28" font-family="system-ui, sans-serif" font-size="15" font-weight="bold" fill="#0f172a" text-anchor="middle">Velocity–Time (v–t) Graph with Reversal</text>
  
  <!-- Grid -->
  <g stroke="#e2e8f0" stroke-width="1" stroke-dasharray="3,3">
    <line x1="70" y1="80" x2="480" y2="80" />
    <line x1="70" y1="260" x2="480" y2="260" />
    <line x1="200" y1="80" x2="200" y2="200" />
    <line x1="330" y1="40" x2="330" y2="300" />
    <line x1="410" y1="200" x2="410" y2="260" />
    <line x1="470" y1="200" x2="470" y2="260" />
  </g>
  
  <!-- Shaded Area A1 (Positive) -->
  <polygon points="70,200 200,80 330,200" fill="rgba(37, 99, 235, 0.2)"/>
  <text x="200" y="160" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#1d4ed8" text-anchor="middle">Area A₁ = +16 m</text>
  
  <!-- Shaded Area A2 (Negative) -->
  <polygon points="330,200 410,260 470,200" fill="rgba(239, 68, 68, 0.2)"/>
  <text x="410" y="240" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#b91c1c" text-anchor="middle">A₂ = -4 m</text>
  
  <!-- Axes -->
  <line x1="50" y1="200" x2="510" y2="200" stroke="#1e293b" stroke-width="2" marker-end="url(#arrow4)"/>
  <line x1="70" y1="310" x2="70" y2="40" stroke="#1e293b" stroke-width="2" marker-end="url(#arrow4)"/>
  
  <text x="525" y="205" font-family="system-ui, sans-serif" font-size="14" font-weight="600" fill="#0f172a">t (s)</text>
  <text x="70" y="25" font-family="system-ui, sans-serif" font-size="14" font-weight="600" fill="#0f172a" text-anchor="middle">v (m/s)</text>
  
  <!-- Ticks on x-axis -->
  <text x="70" y="218" font-family="system-ui, sans-serif" font-size="13" fill="#334155" text-anchor="middle">0</text>
  <line x1="200" y1="200" x2="200" y2="206" stroke="#1e293b" stroke-width="1.5"/>
  <text x="200" y="218" font-family="system-ui, sans-serif" font-size="13" fill="#334155" text-anchor="middle">2</text>
  <line x1="330" y1="200" x2="330" y2="206" stroke="#1e293b" stroke-width="2"/>
  <text x="330" y="218" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#1e293b" text-anchor="middle">4</text>
  <line x1="410" y1="200" x2="410" y2="206" stroke="#1e293b" stroke-width="1.5"/>
  <text x="410" y="192" font-family="system-ui, sans-serif" font-size="13" fill="#334155" text-anchor="middle">5</text>
  <line x1="470" y1="200" x2="470" y2="206" stroke="#1e293b" stroke-width="2"/>
  <text x="470" y="218" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#1e293b" text-anchor="middle">6</text>
  
  <!-- Ticks on y-axis -->
  <line x1="64" y1="80" x2="70" y2="80" stroke="#1e293b" stroke-width="2"/>
  <text x="58" y="85" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#1e293b" text-anchor="end">8</text>
  <line x1="64" y1="260" x2="70" y2="260" stroke="#1e293b" stroke-width="2"/>
  <text x="58" y="265" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#dc2626" text-anchor="end">-4</text>
  
  <!-- Plot Line -->
  <polyline points="70,200 200,80 330,200 410,260 470,200" fill="none" stroke="#2563eb" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <circle cx="70" cy="200" r="4" fill="#2563eb"/>
  <circle cx="200" cy="80" r="5" fill="#2563eb"/>
  <circle cx="330" cy="200" r="5" fill="#2563eb"/>
  <circle cx="410" cy="260" r="5" fill="#2563eb"/>
  <circle cx="470" cy="200" r="4" fill="#2563eb"/>
</svg>`;

fs.writeFileSync(path.join(outDir, 'test1_q2_vt_graph.svg'), svg1);
fs.writeFileSync(path.join(outDir, 'test1_q21_xt_meeting.svg'), svg2);
fs.writeFileSync(path.join(outDir, 'test1_q35_vt_inflection.svg'), svg3);
fs.writeFileSync(path.join(outDir, 'test1_q24_vt_area.svg'), svg4);

console.log('Test 1 SVG diagrams created successfully:');
console.log('1. test1_q2_vt_graph.svg');
console.log('2. test1_q21_xt_meeting.svg');
console.log('3. test1_q35_vt_inflection.svg');
console.log('4. test1_q24_vt_area.svg');
