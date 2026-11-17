import fs from 'fs';
import path from 'path';

const outDir = path.join(process.cwd(), 'public/images/diagrams/thermo');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

console.log("=== STEP 2: GENERATING 12 VECTOR SVG DIAGRAMS FOR THERMODYNAMICS ===");

// Common SVG theme styling: crisp dark-mode compatible with white/amber/cyan/emerald accents
const svgHeader = (width, height, title) => `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}">
  <defs>
    <style>
      .bg { fill: #0f172a; }
      .axis { stroke: #94a3b8; stroke-width: 2.5; stroke-linecap: round; }
      .grid { stroke: #334155; stroke-width: 1; stroke-dasharray: 4,4; opacity: 0.7; }
      .curve-iso { stroke: #38bdf8; stroke-width: 3.5; fill: none; }
      .curve-adi { stroke: #f43f5e; stroke-width: 3.5; fill: none; }
      .curve-main { stroke: #a855f7; stroke-width: 3; fill: none; }
      .area-fill { fill: rgba(56, 189, 248, 0.2); }
      .area-fill-adi { fill: rgba(244, 63, 94, 0.2); }
      .text-title { font-family: system-ui, -apple-system, sans-serif; font-size: 15px; font-weight: 700; fill: #f8fafc; }
      .text-label { font-family: system-ui, -apple-system, sans-serif; font-size: 13px; font-weight: 600; fill: #cbd5e1; }
      .text-math { font-family: 'Times New Roman', serif; font-size: 14px; font-style: italic; fill: #f8fafc; }
      .text-sub { font-family: system-ui, -apple-system, sans-serif; font-size: 11px; fill: #94a3b8; }
      .point { fill: #f59e0b; stroke: #ffffff; stroke-width: 2; }
      .arrow { fill: #94a3b8; }
      .box { stroke: #64748b; stroke-width: 2; fill: #1e293b; rx: 8; }
      .diathermic { stroke: #10b981; stroke-width: 4; stroke-linecap: round; }
      .adiabatic-wall { stroke: #ef4444; stroke-width: 6; stroke-dasharray: 8,4; stroke-linecap: round; }
    </style>
    <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#94a3b8" />
    </marker>
    <marker id="arrow-blue" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#38bdf8" />
    </marker>
    <marker id="arrow-red" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#f43f5e" />
    </marker>
    <marker id="arrow-purple" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 10 5 L 0 9 z" fill="#a855f7" />
    </marker>
  </defs>
  <rect width="100%" height="100%" class="bg" rx="12" />
  <text x="20" y="30" class="text-title">${title}</text>
`;

const diagrams = [
  // =========================================================================
  // TEST 1: THERMAL EQUILIBRIUM
  // =========================================================================
  {
    filename: "test1_q1_zeroth_law_systems.svg",
    content: `${svgHeader(560, 340, "Zeroth Law: Thermal Equilibrium of Systems A, B, and C")}
  <!-- System A Box -->
  <rect x="70" y="80" width="160" height="100" class="box" fill="#1e293b" />
  <text x="130" y="130" class="text-title" fill="#38bdf8">System A</text>
  <text x="130" y="155" class="text-math">T_A</text>

  <!-- System B Box -->
  <rect x="70" y="200" width="160" height="100" class="box" fill="#1e293b" />
  <text x="130" y="250" class="text-title" fill="#f43f5e">System B</text>
  <text x="130" y="275" class="text-math">T_B</text>

  <!-- Adiabatic wall between A and B -->
  <line x1="70" y1="190" x2="230" y2="190" class="adiabatic-wall" />
  <text x="240" y="195" class="text-label" fill="#ef4444">Adiabatic (Insulating) Wall</text>

  <!-- Diathermic wall between (A, B) and C -->
  <line x1="240" y1="70" x2="240" y2="310" class="diathermic" />
  <text x="245" y="60" class="text-label" fill="#10b981">Diathermic (Conducting) Wall</text>

  <!-- System C Box -->
  <rect x="330" y="100" width="160" height="180" class="box" fill="#1e293b" />
  <text x="390" y="180" class="text-title" fill="#a855f7">System C</text>
  <text x="400" y="210" class="text-math">T_C</text>

  <!-- Heat exchange arrows -->
  <path d="M 220 130 Q 285 130 340 160" stroke="#38bdf8" stroke-width="2.5" fill="none" marker-end="url(#arrow-blue)" />
  <path d="M 220 250 Q 285 250 340 220" stroke="#f43f5e" stroke-width="2.5" fill="none" marker-end="url(#arrow-red)" />

  <text x="180" y="325" class="text-label" fill="#facc15">If T_A = T_C and T_B = T_C  ⇒  T_A = T_B (Thermal Equilibrium)</text>
</svg>`
  },
  {
    filename: "test1_q2_temperature_scales_thermometer.svg",
    content: `${svgHeader(560, 340, "Calibration & Comparison of Temperature Scales: °C vs °F")}
  <!-- Celsius Scale Stem -->
  <rect x="130" y="80" width="30" height="200" rx="15" fill="#334155" stroke="#94a3b8" stroke-width="2" />
  <rect x="135" y="160" width="20" height="115" rx="10" fill="#ef4444" />
  <circle cx="145" cy="285" r="24" fill="#ef4444" stroke="#94a3b8" stroke-width="2" />
  <text x="125" y="65" class="text-title" fill="#38bdf8">Celsius (°C)</text>

  <!-- Steam point 100°C -->
  <line x1="165" y1="100" x2="195" y2="100" stroke="#94a3b8" stroke-width="2" />
  <text x="205" y="105" class="text-label">100°C (Steam point)</text>

  <!-- Ice point 0°C -->
  <line x1="165" y1="240" x2="195" y2="240" stroke="#94a3b8" stroke-width="2" />
  <text x="205" y="245" class="text-label">0°C (Ice point)</text>

  <!-- Fahrenheit Scale Stem -->
  <rect x="370" y="80" width="30" height="200" rx="15" fill="#334155" stroke="#94a3b8" stroke-width="2" />
  <rect x="375" y="160" width="20" height="115" rx="10" fill="#ef4444" />
  <circle cx="385" cy="285" r="24" fill="#ef4444" stroke="#94a3b8" stroke-width="2" />
  <text x="355" y="65" class="text-title" fill="#f43f5e">Fahrenheit (°F)</text>

  <!-- Steam point 212°F -->
  <line x1="405" y1="100" x2="435" y2="100" stroke="#94a3b8" stroke-width="2" />
  <text x="445" y="105" class="text-label">212°F (Steam point)</text>

  <!-- Ice point 32°F -->
  <line x1="405" y1="240" x2="435" y2="240" stroke="#94a3b8" stroke-width="2" />
  <text x="445" y="245" class="text-label">32°F (Ice point)</text>

  <!-- Conversion Relation Formula -->
  <text x="140" y="325" class="text-title" fill="#facc15">Relation: (C - 0)/100 = (F - 32)/180   |   Coincides at -40°</text>
</svg>`
  },
  {
    filename: "test1_q3_heat_transfer_equilibrium.svg",
    content: `${svgHeader(560, 340, "Thermal Contact & Direction of Spontaneous Heat Flow")}
  <!-- Body 1 Hot -->
  <rect x="60" y="100" width="160" height="120" class="box" fill="#1e293b" />
  <circle cx="140" cy="140" r="30" fill="rgba(239, 68, 68, 0.25)" stroke="#ef4444" stroke-width="2" />
  <text x="110" y="145" class="text-title" fill="#ef4444">Body 1</text>
  <text x="95" y="185" class="text-label">T_1 = 80°C (Hot)</text>
  <text x="90" y="205" class="text-sub">High average KE</text>

  <!-- Thermal Interface Conducting Bridge -->
  <rect x="220" y="135" width="120" height="50" fill="#334155" stroke="#10b981" stroke-width="3" rx="4" />
  <!-- Heat flow arrow -->
  <line x1="240" y1="160" x2="310" y2="160" stroke="#facc15" stroke-width="5" marker-end="url(#arrow)" />
  <text x="250" y="150" class="text-title" fill="#facc15">Heat Q</text>

  <!-- Body 2 Cold -->
  <rect x="340" y="100" width="160" height="120" class="box" fill="#1e293b" />
  <circle cx="420" cy="140" r="30" fill="rgba(56, 189, 248, 0.25)" stroke="#38bdf8" stroke-width="2" />
  <text x="390" y="145" class="text-title" fill="#38bdf8">Body 2</text>
  <text x="375" y="185" class="text-label">T_2 = 20°C (Cold)</text>
  <text x="370" y="205" class="text-sub">Low average KE</text>

  <!-- Equilibrium summary banner -->
  <rect x="60" y="250" width="440" height="60" rx="8" fill="#1e293b" stroke="#64748b" stroke-width="1.5" />
  <text x="80" y="275" class="text-label" fill="#f8fafc">At Equilibrium: Spontaneous heat flow stops when T_1 = T_2 = T_eq</text>
  <text x="80" y="295" class="text-sub" fill="#94a3b8">Heat Lost by Hot Body = Heat Gained by Cold Body (Principle of Calorimetry)</text>
</svg>`
  },

  // =========================================================================
  // TEST 2: LAWS OF THERMODYNAMICS
  // =========================================================================
  {
    filename: "test2_q1_first_law_piston_cylinder.svg",
    content: `${svgHeader(560, 340, "First Law of Thermodynamics: ΔQ = ΔU + W (Piston-Cylinder)")}
  <!-- Cylinder Body -->
  <rect x="120" y="70" width="220" height="200" fill="#1e293b" stroke="#94a3b8" stroke-width="3" stroke-top="none" />
  <line x1="120" y1="70" x2="120" y2="270" stroke="#94a3b8" stroke-width="4" />
  <line x1="340" y1="70" x2="340" y2="270" stroke="#94a3b8" stroke-width="4" />
  <line x1="120" y1="270" x2="340" y2="270" stroke="#94a3b8" stroke-width="4" />

  <!-- Gas Volume -->
  <rect x="123" y="150" width="214" height="117" fill="rgba(56, 189, 248, 0.2)" />
  <text x="180" y="210" class="text-title" fill="#38bdf8">Gas: P, V, T</text>
  <text x="175" y="235" class="text-label" fill="#facc15">ΔU = n C_v ΔT</text>

  <!-- Movable Piston -->
  <rect x="123" y="130" width="214" height="20" fill="#64748b" stroke="#cbd5e1" stroke-width="2" />
  <rect x="220" y="60" width="20" height="70" fill="#64748b" stroke="#cbd5e1" stroke-width="2" />
  <line x1="230" y1="50" x2="230" y2="20" stroke="#10b981" stroke-width="3" marker-end="url(#arrow)" />
  <text x="245" y="40" class="text-title" fill="#10b981">W = P ΔV (Work done)</text>

  <!-- Heat Added Flame -->
  <path d="M 210 300 Q 230 275 250 300 Q 230 320 210 300 Z" fill="#ef4444" stroke="#f59e0b" stroke-width="2" />
  <line x1="230" y1="325" x2="230" y2="280" stroke="#f43f5e" stroke-width="3" marker-end="url(#arrow-red)" />
  <text x="260" y="305" class="text-title" fill="#f43f5e">Heat Added: ΔQ > 0</text>

  <!-- Law Summary Box -->
  <rect x="360" y="100" width="180" height="150" class="box" />
  <text x="375" y="125" class="text-title" fill="#facc15">Sign Conventions</text>
  <text x="375" y="150" class="text-label" fill="#f8fafc">ΔQ > 0 : Heat in</text>
  <text x="375" y="175" class="text-label" fill="#f8fafc">ΔQ &lt; 0 : Heat out</text>
  <text x="375" y="200" class="text-label" fill="#f8fafc">W > 0 : Work by gas</text>
  <text x="375" y="225" class="text-label" fill="#f8fafc">W &lt; 0 : Work on gas</text>
</svg>`
  },
  {
    filename: "test2_q2_heat_engine_reservoir.svg",
    content: `${svgHeader(560, 340, "Heat Engine Operating Between Reservoirs: T_H and T_C")}
  <!-- Source Hot Reservoir -->
  <rect x="180" y="50" width="200" height="55" rx="6" fill="#ef4444" stroke="#fca5a5" stroke-width="2" />
  <text x="210" y="83" class="text-title" fill="#ffffff">Hot Reservoir (T_H)</text>

  <!-- Heat Q_H Arrow -->
  <line x1="280" y1="105" x2="280" y2="150" stroke="#f59e0b" stroke-width="6" marker-end="url(#arrow)" />
  <text x="290" y="132" class="text-title" fill="#facc15">Q_H</text>

  <!-- Working Engine Circle -->
  <circle cx="280" cy="180" r="32" fill="#1e293b" stroke="#a855f7" stroke-width="3" />
  <text x="258" y="185" class="text-title" fill="#a855f7">Engine</text>

  <!-- Work Output Arrow -->
  <line x1="312" y1="180" x2="430" y2="180" stroke="#10b981" stroke-width="6" marker-end="url(#arrow)" />
  <text x="440" y="185" class="text-title" fill="#10b981">W = Q_H - Q_C</text>

  <!-- Rejected Heat Q_C Arrow -->
  <line x1="280" y1="212" x2="280" y2="255" stroke="#38bdf8" stroke-width="6" marker-end="url(#arrow)" />
  <text x="290" y="240" class="text-title" fill="#38bdf8">Q_C</text>

  <!-- Cold Sink Reservoir -->
  <rect x="180" y="255" width="200" height="55" rx="6" fill="#3b82f6" stroke="#93c5fd" stroke-width="2" />
  <text x="210" y="288" class="text-title" fill="#ffffff">Cold Sink (T_C)</text>

  <!-- Efficiency formula banner -->
  <text x="20" y="185" class="text-label" fill="#facc15">Efficiency:</text>
  <text x="20" y="205" class="text-math" fill="#ffffff">η = W / Q_H</text>
  <text x="20" y="225" class="text-math" fill="#ffffff">η = 1 - (Q_C / Q_H)</text>
</svg>`
  },
  {
    filename: "test2_q3_refrigerator_cop.svg",
    content: `${svgHeader(560, 340, "Refrigerator / Heat Pump: Coefficient of Performance (β)")}
  <!-- Hot Reservoir (Surroundings) -->
  <rect x="180" y="50" width="200" height="55" rx="6" fill="#ef4444" stroke="#fca5a5" stroke-width="2" />
  <text x="210" y="83" class="text-title" fill="#ffffff">Hot Reservoir (T_H)</text>

  <!-- Rejected Heat Q_H Arrow (Upward) -->
  <line x1="280" y1="150" x2="280" y2="105" stroke="#ef4444" stroke-width="6" marker-end="url(#arrow-red)" />
  <text x="290" y="132" class="text-title" fill="#f43f5e">Q_H = Q_C + W</text>

  <!-- Working Refrigerator Circle -->
  <circle cx="280" cy="180" r="32" fill="#1e293b" stroke="#38bdf8" stroke-width="3" />
  <text x="260" y="185" class="text-title" fill="#38bdf8">Ref / HP</text>

  <!-- Work Input Arrow (Inward from right) -->
  <line x1="430" y1="180" x2="315" y2="180" stroke="#f59e0b" stroke-width="6" marker-end="url(#arrow)" />
  <text x="350" y="165" class="text-title" fill="#facc15">Work In (W)</text>

  <!-- Extracted Heat Q_C Arrow (Upward from cold reservoir) -->
  <line x1="280" y1="255" x2="280" y2="215" stroke="#38bdf8" stroke-width="6" marker-end="url(#arrow-blue)" />
  <text x="290" y="240" class="text-title" fill="#38bdf8">Q_C (Absorbed)</text>

  <!-- Cold Reservoir (Interior) -->
  <rect x="180" y="255" width="200" height="55" rx="6" fill="#3b82f6" stroke="#93c5fd" stroke-width="2" />
  <text x="195" y="288" class="text-title" fill="#ffffff">Cold Body / Inside (T_C)</text>

  <!-- COP formula banner -->
  <text x="20" y="175" class="text-label" fill="#38bdf8">Coefficient of Perf:</text>
  <text x="20" y="195" class="text-math" fill="#ffffff">β = Q_C / W</text>
  <text x="20" y="215" class="text-math" fill="#ffffff">β = Q_C / (Q_H - Q_C)</text>
  <text x="20" y="240" class="text-sub" fill="#facc15">Carnot: β = T_C / (T_H - T_C)</text>
</svg>`
  },

  // =========================================================================
  // TEST 3: ISOTHERMAL AND ADIABATIC PROCESSES
  // =========================================================================
  {
    filename: "test3_q1_isothermal_vs_adiabatic_expansion.svg",
    content: `${svgHeader(560, 340, "P-V Indicator Diagram: Isothermal vs Adiabatic Expansion")}
  <!-- Axes -->
  <line x1="80" y1="290" x2="520" y2="290" class="axis" marker-end="url(#arrow)" />
  <line x1="80" y1="290" x2="80" y2="50" class="axis" marker-end="url(#arrow)" />
  <text x="500" y="320" class="text-title">Volume (V)</text>
  <text x="35" y="65" class="text-title">P</text>

  <!-- Initial State Point A -->
  <circle cx="150" cy="90" r="5" class="point" />
  <text x="140" y="80" class="text-title" fill="#f59e0b">A (P_1, V_1, T_1)</text>

  <!-- Isothermal Curve (Blue) -->
  <!-- PV = const: (150, 90) -> (420, 200) -->
  <path d="M 150 90 Q 260 150 420 200" class="curve-iso" marker-end="url(#arrow-blue)" />
  <circle cx="420" cy="200" r="5" fill="#38bdf8" />
  <text x="430" y="200" class="text-title" fill="#38bdf8">B (Isothermal, T_1)</text>
  <text x="430" y="220" class="text-sub">Slope = -P/V</text>

  <!-- Adiabatic Curve (Red, steeper) -->
  <!-- PV^gamma = const: (150, 90) -> (420, 260) -->
  <path d="M 150 90 Q 230 180 420 260" class="curve-adi" marker-end="url(#arrow-red)" />
  <circle cx="420" cy="260" r="5" fill="#f43f5e" />
  <text x="430" y="260" class="text-title" fill="#f43f5e">C (Adiabatic, T_2 &lt; T_1)</text>
  <text x="430" y="280" class="text-sub">Slope = -γ P/V</text>

  <!-- Volume Grid Lines -->
  <line x1="150" y1="90" x2="150" y2="290" class="grid" />
  <line x1="420" y1="200" x2="420" y2="290" class="grid" />
  <text x="145" y="305" class="text-label">V_1</text>
  <text x="415" y="305" class="text-label">V_2</text>

  <!-- Comparison Note -->
  <rect x="250" y="80" width="180" height="50" rx="6" fill="#1e293b" stroke="#64748b" />
  <text x="260" y="100" class="text-label" fill="#facc15">|Slope_ad| = γ |Slope_iso|</text>
  <text x="260" y="120" class="text-label" fill="#f8fafc">Work_iso > Work_ad</text>
</svg>`
  },
  {
    filename: "test3_q2_four_processes_pv_comparison.svg",
    content: `${svgHeader(560, 340, "Comparison of Four Thermodynamic Processes on a P-V Graph")}
  <!-- Axes -->
  <line x1="80" y1="290" x2="520" y2="290" class="axis" marker-end="url(#arrow)" />
  <line x1="80" y1="290" x2="80" y2="50" class="axis" marker-end="url(#arrow)" />
  <text x="500" y="320" class="text-title">V</text>
  <text x="45" y="65" class="text-title">P</text>

  <!-- Common Initial State O -->
  <circle cx="200" cy="160" r="5" class="point" />
  <text x="175" y="155" class="text-title" fill="#f59e0b">(P_0, V_0)</text>

  <!-- 1. Isochoric (Vertical) -->
  <line x1="200" y1="160" x2="200" y2="60" stroke="#a855f7" stroke-width="3.5" marker-end="url(#arrow-purple)" />
  <text x="150" y="75" class="text-title" fill="#a855f7">1. Isochoric (W = 0)</text>

  <!-- 2. Isobaric (Horizontal) -->
  <line x1="200" y1="160" x2="450" y2="160" stroke="#10b981" stroke-width="3.5" marker-end="url(#arrow)" />
  <text x="350" y="150" class="text-title" fill="#10b981">2. Isobaric (Max W)</text>

  <!-- 3. Isothermal (Blue curve) -->
  <path d="M 200 160 Q 300 190 440 220" class="curve-iso" marker-end="url(#arrow-blue)" />
  <text x="370" y="210" class="text-title" fill="#38bdf8">3. Isothermal (T = c)</text>

  <!-- 4. Adiabatic (Red curve, steeper) -->
  <path d="M 200 160 Q 280 230 400 270" class="curve-adi" marker-end="url(#arrow-red)" />
  <text x="320" y="280" class="text-title" fill="#f43f5e">4. Adiabatic (Q = 0)</text>

  <!-- Order of Work Done Banner -->
  <rect x="70" y="300" width="460" height="30" rx="4" fill="#1e293b" />
  <text x="80" y="320" class="text-label" fill="#facc15">Expansion Work: W_isobaric > W_isothermal > W_adiabatic > W_isochoric (0)</text>
</svg>`
  },
  {
    filename: "test3_q3_adiabatic_compression_tv_curve.svg",
    content: `${svgHeader(560, 340, "Adiabatic Compression: Temperature Rise & T-V Relation")}
  <!-- Axes -->
  <line x1="80" y1="290" x2="520" y2="290" class="axis" marker-end="url(#arrow)" />
  <line x1="80" y1="290" x2="80" y2="50" class="axis" marker-end="url(#arrow)" />
  <text x="470" y="320" class="text-title">Volume (V)</text>
  <text x="45" y="65" class="text-title">P</text>

  <!-- State 1 Initial (Lower P, Larger V, Low Temp T_1) -->
  <circle cx="420" cy="240" r="5" fill="#38bdf8" />
  <text x="400" y="270" class="text-title" fill="#38bdf8">State 1 (P_1, V_1, T_1)</text>

  <!-- State 2 Final (High P, Smaller V, High Temp T_2) -->
  <circle cx="160" cy="80" r="5" fill="#f43f5e" />
  <text x="140" y="65" class="text-title" fill="#f43f5e">State 2 (P_2, V_2, T_2)</text>

  <!-- Compression Path along Adiabatic (Reversed Arrow) -->
  <path d="M 420 240 Q 240 200 160 80" class="curve-adi" marker-end="url(#arrow-red)" />

  <!-- Grid lines -->
  <line x1="160" y1="80" x2="160" y2="290" class="grid" />
  <line x1="420" y1="240" x2="420" y2="290" class="grid" />
  <text x="150" y="305" class="text-label">V_2</text>
  <text x="415" y="305" class="text-label">V_1 (V_2 &lt; V_1)</text>

  <!-- Formula Callout -->
  <rect x="250" y="110" width="220" height="70" class="box" />
  <text x="260" y="135" class="text-title" fill="#facc15">T V^(γ - 1) = constant</text>
  <text x="260" y="155" class="text-label" fill="#f8fafc">Since V_2 &lt; V_1  ⇒  T_2 > T_1</text>
  <text x="260" y="172" class="text-sub" fill="#10b981">Work done ON gas: W &lt; 0  ⇒  ΔU > 0</text>
</svg>`
  },

  // =========================================================================
  // TEST 4: WORK DONE IN THERMODYNAMIC PROCESSES
  // =========================================================================
  {
    filename: "test4_q1_cyclic_process_pv_ellipse.svg",
    content: `${svgHeader(560, 340, "Cyclic Process on P-V Diagram: Work = Enclosed Area")}
  <!-- Axes -->
  <line x1="80" y1="290" x2="520" y2="290" class="axis" marker-end="url(#arrow)" />
  <line x1="80" y1="290" x2="80" y2="50" class="axis" marker-end="url(#arrow)" />
  <text x="500" y="320" class="text-title">V</text>
  <text x="45" y="65" class="text-title">P</text>

  <!-- Elliptical Cycle -->
  <ellipse cx="280" cy="170" rx="140" ry="80" fill="rgba(168, 85, 247, 0.2)" stroke="#a855f7" stroke-width="3" />

  <!-- Direction Arrows (Clockwise) -->
  <path d="M 270 90 L 290 90" stroke="#facc15" stroke-width="4" marker-end="url(#arrow)" />
  <path d="M 420 160 L 420 180" stroke="#facc15" stroke-width="4" marker-end="url(#arrow)" />
  <path d="M 290 250 L 270 250" stroke="#facc15" stroke-width="4" marker-end="url(#arrow)" />
  <path d="M 140 180 L 140 160" stroke="#facc15" stroke-width="4" marker-end="url(#arrow)" />

  <!-- Labels on Limits -->
  <line x1="140" y1="170" x2="140" y2="290" class="grid" />
  <line x1="420" y1="170" x2="420" y2="290" class="grid" />
  <text x="135" y="305" class="text-label">V_1</text>
  <text x="415" y="305" class="text-label">V_2</text>

  <line x1="80" y1="90" x2="280" y2="90" class="grid" />
  <line x1="80" y1="250" x2="280" y2="250" class="grid" />
  <text x="45" y="95" class="text-label">P_2</text>
  <text x="45" y="255" class="text-label">P_1</text>

  <!-- Formula Callout -->
  <text x="210" y="165" class="text-title" fill="#facc15">W_net = Area Enclosed</text>
  <text x="180" y="185" class="text-label" fill="#f8fafc">W = π · [(P_2 - P_1)/2] · [(V_2 - V_1)/2]</text>
  <text x="195" y="205" class="text-sub" fill="#10b981">Clockwise Cycle: W_net > 0 (Work by gas)</text>
</svg>`
  },
  {
    filename: "test4_q2_triangular_cycle_work.svg",
    content: `${svgHeader(560, 340, "Right-Angled Triangular Cycle A -> B -> C -> A")}
  <!-- Axes -->
  <line x1="80" y1="290" x2="520" y2="290" class="axis" marker-end="url(#arrow)" />
  <line x1="80" y1="290" x2="80" y2="50" class="axis" marker-end="url(#arrow)" />
  <text x="500" y="320" class="text-title">V (m³)</text>
  <text x="30" y="65" class="text-title">P (N/m²)</text>

  <!-- Triangle Vertices: A(180, 240), B(180, 90), C(420, 240) -->
  <polygon points="180,240 180,90 420,240" fill="rgba(56, 189, 248, 0.25)" stroke="#38bdf8" stroke-width="3" />

  <!-- Process Arrows -->
  <line x1="180" y1="240" x2="180" y2="150" stroke="#facc15" stroke-width="3" marker-end="url(#arrow)" />
  <line x1="180" y1="90" x2="310" y2="170" stroke="#facc15" stroke-width="3" marker-end="url(#arrow)" />
  <line x1="420" y1="240" x2="280" y2="240" stroke="#facc15" stroke-width="3" marker-end="url(#arrow)" />

  <!-- Vertices labels -->
  <circle cx="180" cy="240" r="5" class="point" />
  <text x="135" y="245" class="text-title">A (P_1, V_1)</text>

  <circle cx="180" cy="90" r="5" class="point" />
  <text x="135" y="95" class="text-title">B (P_2, V_1)</text>

  <circle cx="420" cy="240" r="5" class="point" />
  <text x="430" y="245" class="text-title">C (P_1, V_2)</text>

  <!-- Grid lines -->
  <line x1="180" y1="240" x2="180" y2="290" class="grid" />
  <line x1="420" y1="240" x2="420" y2="290" class="grid" />
  <text x="175" y="305" class="text-label">V_1</text>
  <text x="415" y="305" class="text-label">V_2</text>

  <line x1="80" y1="240" x2="180" y2="240" class="grid" />
  <line x1="80" y1="90" x2="180" y2="90" class="grid" />
  <text x="45" y="245" class="text-label">P_1</text>
  <text x="45" y="95" class="text-label">P_2</text>

  <!-- Work Area Formula -->
  <rect x="250" y="80" width="220" height="60" class="box" />
  <text x="260" y="105" class="text-title" fill="#facc15">W_net = (1/2) · Base · Height</text>
  <text x="260" y="125" class="text-label" fill="#f8fafc">W_net = (1/2)(V_2 - V_1)(P_2 - P_1)</text>
</svg>`
  },
  {
    filename: "test4_q3_three_paths_work_comparison.svg",
    content: `${svgHeader(560, 340, "Path Dependence of Work: Initial State i to Final State f")}
  <!-- Axes -->
  <line x1="80" y1="290" x2="520" y2="290" class="axis" marker-end="url(#arrow)" />
  <line x1="80" y1="290" x2="80" y2="50" class="axis" marker-end="url(#arrow)" />
  <text x="500" y="320" class="text-title">V</text>
  <text x="45" y="65" class="text-title">P</text>

  <!-- State Points -->
  <!-- Initial i(160, 100) -->
  <circle cx="160" cy="100" r="5" class="point" />
  <text x="125" y="105" class="text-title" fill="#f59e0b">i (P_i, V_i)</text>

  <!-- Final f(400, 240) -->
  <circle cx="400" cy="240" r="5" class="point" />
  <text x="410" y="245" class="text-title" fill="#f59e0b">f (P_f, V_f)</text>

  <!-- Corner A(400, 100) -->
  <circle cx="400" cy="100" r="4" fill="#64748b" />
  <text x="410" y="95" class="text-label">A</text>

  <!-- Corner B(160, 240) -->
  <circle cx="160" cy="240" r="4" fill="#64748b" />
  <text x="135" y="245" class="text-label">B</text>

  <!-- Path 1: i -> A -> f (Top path, Blue) -->
  <path d="M 160 100 L 400 100 L 400 240" stroke="#38bdf8" stroke-width="3" fill="none" />
  <line x1="260" y1="100" x2="280" y2="100" stroke="#38bdf8" stroke-width="4" marker-end="url(#arrow-blue)" />
  <text x="270" y="85" class="text-label" fill="#38bdf8">Path 1 (via A)</text>

  <!-- Path 2: i -> f (Direct diagonal, Green) -->
  <line x1="160" y1="100" x2="400" y2="240" stroke="#10b981" stroke-width="3" />
  <line x1="270" y1="164" x2="290" y2="176" stroke="#10b981" stroke-width="4" marker-end="url(#arrow)" />
  <text x="295" y="165" class="text-label" fill="#10b981">Path 2 (Direct)</text>

  <!-- Path 3: i -> B -> f (Bottom path, Red) -->
  <path d="M 160 100 L 160 240 L 400 240" stroke="#f43f5e" stroke-width="3" fill="none" />
  <line x1="260" y1="240" x2="280" y2="240" stroke="#f43f5e" stroke-width="4" marker-end="url(#arrow-red)" />
  <text x="270" y="260" class="text-label" fill="#f43f5e">Path 3 (via B)</text>

  <!-- Work comparison note -->
  <rect x="230" y="15" width="310" height="55" class="box" />
  <text x="240" y="35" class="text-title" fill="#facc15">Work Done: W_1 > W_2 > W_3</text>
  <text x="240" y="55" class="text-label" fill="#f8fafc">Internal Energy: ΔU_1 = ΔU_2 = ΔU_3 (State Function)</text>
</svg>`
  }
];

for (const d of diagrams) {
  const filePath = path.join(outDir, d.filename);
  fs.writeFileSync(filePath, d.content, 'utf8');
  console.log(`Generated: ${d.filename} (${(fs.statSync(filePath).size / 1024).toFixed(1)} KB)`);
}

console.log("\nAll 12 vector diagrams successfully generated in public/images/diagrams/thermo/");
