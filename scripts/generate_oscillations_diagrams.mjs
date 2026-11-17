import fs from 'fs';
import path from 'path';

const outDir = 'public/images/diagrams/oscillations';
fs.mkdirSync(outDir, { recursive: true });

console.log("=== GENERATING 15 VECTOR SVG DIAGRAMS FOR OSCILLATIONS & WAVES ===");

// 1. test1_q1_shm_displacement_velocity_acceleration_graphs.svg
const test1_q1 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 380" width="100%" height="100%">
  <defs>
    <marker id="axisArr" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#94a3b8"/>
    </marker>
  </defs>

  <rect width="100%" height="100%" fill="#0f172a" rx="12"/>

  <!-- Title -->
  <text x="270" y="28" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="15" font-weight="bold" text-anchor="middle">Phase Relations in SHM: Displacement, Velocity &amp; Acceleration</text>

  <!-- Axes -->
  <line x1="70" y1="200" x2="500" y2="200" stroke="#94a3b8" stroke-width="2" marker-end="url(#axisArr)"/>
  <line x1="100" y1="350" x2="100" y2="45" stroke="#94a3b8" stroke-width="2" marker-end="url(#axisArr)"/>

  <!-- Time markers -->
  <g stroke="#334155" stroke-dasharray="3,3" stroke-width="1">
    <line x1="180" y1="50" x2="180" y2="340"/>
    <line x1="260" y1="50" x2="260" y2="340"/>
    <line x1="340" y1="50" x2="340" y2="340"/>
    <line x1="420" y1="50" x2="420" y2="340"/>
  </g>

  <text x="180" y="218" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11" text-anchor="middle">T/4</text>
  <text x="260" y="218" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11" text-anchor="middle">T/2</text>
  <text x="340" y="218" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11" text-anchor="middle">3T/4</text>
  <text x="420" y="218" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11" text-anchor="middle">T</text>
  <text x="490" y="222" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="13" font-weight="bold">t</text>

  <!-- Curve 1: Displacement x(t) = A sin(wt) [Blue] -->
  <!-- Starts at 0, peak at T/4 (y=120), 0 at T/2, trough at 3T/4 (y=280), 0 at T -->
  <path d="M 100 200 Q 140 100 180 120 T 260 200 T 340 280 T 420 200 T 460 140" fill="none" stroke="#38bdf8" stroke-width="3"/>
  <text x="465" y="145" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="13" font-weight="bold">x(t)</text>

  <!-- Curve 2: Velocity v(t) = wA cos(wt) [Green] -->
  <!-- Starts at peak y=140, 0 at T/4, trough at T/2 (y=260), 0 at 3T/4, peak at T -->
  <path d="M 100 140 Q 140 140 180 200 T 260 260 T 340 200 T 420 140 T 460 180" fill="none" stroke="#10b981" stroke-width="2.5" stroke-dasharray="6,3"/>
  <text x="465" y="185" fill="#10b981" font-family="system-ui, sans-serif" font-size="13" font-weight="bold">v(t)</text>

  <!-- Curve 3: Acceleration a(t) = -w^2 A sin(wt) [Red] -->
  <!-- Inverted sine: starts at 0, trough at T/4 (y=280), 0 at T/2, peak at 3T/4 (y=120) -->
  <path d="M 100 200 Q 140 300 180 280 T 260 200 T 340 120 T 420 200 T 460 260" fill="none" stroke="#ef4444" stroke-width="2.5"/>
  <text x="465" y="270" fill="#ef4444" font-family="system-ui, sans-serif" font-size="13" font-weight="bold">a(t)</text>

  <!-- Legend / Info Box -->
  <rect x="70" y="48" width="220" height="78" rx="8" fill="#1e293b" stroke="#475569" stroke-width="1.2"/>
  <text x="85" y="68" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="12" font-weight="bold">• x(t) = A sin(ωt)</text>
  <text x="85" y="88" fill="#10b981" font-family="system-ui, sans-serif" font-size="12" font-weight="bold">• v(t) leads x(t) by π/2 (90°)</text>
  <text x="85" y="108" fill="#ef4444" font-family="system-ui, sans-serif" font-size="12" font-weight="bold">• a(t) leads x(t) by π (180° out of phase)</text>
</svg>`;

// 2. test1_q2_shm_potential_kinetic_total_energy_parabolas.svg
const test1_q2 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 380" width="100%" height="100%">
  <defs>
    <marker id="axisArr2" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#94a3b8"/>
    </marker>
  </defs>

  <rect width="100%" height="100%" fill="#0f172a" rx="12"/>

  <!-- Title -->
  <text x="270" y="28" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="15" font-weight="bold" text-anchor="middle">Energy Distribution in SHM: Potential, Kinetic &amp; Total Energy</text>

  <!-- Axes -->
  <line x1="70" y1="310" x2="480" y2="310" stroke="#94a3b8" stroke-width="2.5" marker-end="url(#axisArr2)"/>
  <line x1="270" y1="340" x2="270" y2="50" stroke="#94a3b8" stroke-width="2" marker-end="url(#axisArr2)"/>

  <!-- Origin & Axis Labels -->
  <text x="475" y="335" fill="#f8fafc" font-family="system-ui, sans-serif" font-size="14" font-weight="bold">x</text>
  <text x="280" y="60" fill="#f8fafc" font-family="system-ui, sans-serif" font-size="14" font-weight="bold">Energy E</text>
  <text x="258" y="328" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="12">x = 0</text>
  <text x="130" y="328" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="12" text-anchor="middle">-A</text>
  <text x="410" y="328" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="12" text-anchor="middle">+A</text>

  <!-- Bounds -->
  <line x1="130" y1="100" x2="130" y2="310" stroke="#475569" stroke-dasharray="3,3" stroke-width="1.5"/>
  <line x1="410" y1="100" x2="410" y2="310" stroke="#475569" stroke-dasharray="3,3" stroke-width="1.5"/>

  <!-- Total Energy E = 1/2 k A^2 (horizontal line at y=100) -->
  <line x1="130" y1="100" x2="410" y2="100" stroke="#f59e0b" stroke-width="3"/>
  <text x="420" y="105" fill="#f59e0b" font-family="system-ui, sans-serif" font-size="13" font-weight="bold">E = ½ kA² (Total)</text>

  <!-- Potential Energy U = 1/2 k x^2 (Parabola opening up: (-A, 100), (0, 310), (+A, 100)) -->
  <path d="M 130 100 Q 270 310 410 100" fill="none" stroke="#38bdf8" stroke-width="3"/>
  <text x="100" y="130" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="13" font-weight="bold">U = ½kx²</text>

  <!-- Kinetic Energy K = 1/2 k (A^2 - x^2) (Parabola opening down: (-A, 310), (0, 100), (+A, 310)) -->
  <path d="M 130 310 Q 270 -110 410 310" fill="none" stroke="#10b981" stroke-width="3"/>
  <text x="270" y="85" fill="#10b981" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" text-anchor="middle">K_max = ½kA²</text>

  <!-- Intersection points: K = U at x = +/- A / sqrt(2) -->
  <!-- Height is halfway: y = (100 + 310)/2 = 205. x = 270 +/- 140/sqrt(2) = 270 +/- 99 = 171, 369 -->
  <circle cx="171" cy="205" r="5" fill="#ef4444"/>
  <circle cx="369" cy="205" r="5" fill="#ef4444"/>
  <line x1="171" y1="205" x2="171" y2="310" stroke="#ef4444" stroke-dasharray="3,3" stroke-width="1.2"/>
  <line x1="369" y1="205" x2="369" y2="310" stroke="#ef4444" stroke-dasharray="3,3" stroke-width="1.2"/>
  <text x="171" y="345" fill="#ef4444" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" text-anchor="middle">-A/√2</text>
  <text x="369" y="345" fill="#ef4444" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" text-anchor="middle">+A/√2</text>
  <text x="270" y="200" fill="#ef4444" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" text-anchor="middle">K = U = E/2</text>
</svg>`;

// 3. test1_q3_simple_pendulum_restoring_force_components.svg
const test1_q3 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 380" width="100%" height="100%">
  <defs>
    <marker id="forceArr" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#ef4444"/>
    </marker>
    <marker id="tenArr" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#10b981"/>
    </marker>
  </defs>

  <rect width="100%" height="100%" fill="#0f172a" rx="12"/>

  <!-- Title -->
  <text x="270" y="28" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="15" font-weight="bold" text-anchor="middle">Simple Pendulum: Resolution of Gravity and Restoring Force</text>

  <!-- Rigid Support -->
  <line x1="200" y1="45" x2="320" y2="45" stroke="#94a3b8" stroke-width="4"/>
  <circle cx="260" cy="45" r="4" fill="#cbd5e1"/>

  <!-- Vertical reference line -->
  <line x1="260" y1="45" x2="260" y2="290" stroke="#64748b" stroke-dasharray="4,4" stroke-width="1.5"/>

  <!-- Deflected string (Length L) at angle theta=20 deg -->
  <!-- pivot at (260, 45). bob at x = 260 + 200*sin(20) = 260+68.4 = 328. y = 45 + 200*cos(20) = 45+188 = 233 -->
  <line x1="260" y1="45" x2="328" y2="233" stroke="#cbd5e1" stroke-width="2"/>
  <text x="285" y="140" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="13">Length L</text>

  <!-- Angle theta arc -->
  <path d="M 260 110 A 65 65 0 0 1 282 106" fill="none" stroke="#f59e0b" stroke-width="2"/>
  <text x="275" y="100" fill="#f59e0b" font-family="system-ui, sans-serif" font-size="12" font-weight="bold">θ</text>

  <!-- Pendulum Bob (Mass m) at (328, 233) -->
  <circle cx="328" cy="233" r="16" fill="#0284c7" stroke="#38bdf8" stroke-width="2.5"/>
  <text x="328" y="238" fill="#ffffff" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" text-anchor="middle">m</text>

  <!-- Tension T along string -->
  <line x1="328" y1="233" x2="294" y2="139" stroke="#10b981" stroke-width="2.5" marker-end="url(#tenArr)"/>
  <text x="280" y="150" fill="#10b981" font-family="system-ui, sans-serif" font-size="13" font-weight="bold">T</text>

  <!-- Gravity mg (downward) -->
  <line x1="328" y1="233" x2="328" y2="330" stroke="#ef4444" stroke-width="2.5" marker-end="url(#forceArr)"/>
  <text x="335" y="335" fill="#ef4444" font-family="system-ui, sans-serif" font-size="13" font-weight="bold">mg</text>

  <!-- Tangential restoring component mg sin(theta) -->
  <!-- Perpendicular to string, pointing towards equilibrium (down-left) -->
  <line x1="328" y1="233" x2="265" y2="256" stroke="#f59e0b" stroke-width="3" marker-end="url(#forceArr)"/>
  <text x="210" y="275" fill="#f59e0b" font-family="system-ui, sans-serif" font-size="13" font-weight="bold">F_restoring = -mg sin θ</text>

  <!-- Radial component mg cos(theta) -->
  <line x1="328" y1="233" x2="355" y2="307" stroke="#94a3b8" stroke-dasharray="3,3" stroke-width="2"/>
  <text x="360" y="315" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="12">mg cos θ</text>

  <!-- Summary Box -->
  <rect x="50" y="60" width="180" height="95" rx="8" fill="#1e293b" stroke="#475569" stroke-width="1.2"/>
  <text x="60" y="82" fill="#f8fafc" font-family="system-ui, sans-serif" font-size="12" font-weight="bold">For small angle θ:</text>
  <text x="60" y="102" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="11">sin θ ≈ θ = x / L</text>
  <text x="60" y="122" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="11" font-weight="bold">F = -(mg/L) x = -k x</text>
  <text x="60" y="142" fill="#f59e0b" font-family="system-ui, sans-serif" font-size="12" font-weight="bold">T = 2π √(L/g)</text>
</svg>`;

// 4. test2_q1_transverse_harmonic_wave_profile.svg
const test2_q1 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 380" width="100%" height="100%">
  <defs>
    <marker id="axisArr4" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#94a3b8"/>
    </marker>
    <marker id="waveArr" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#38bdf8"/>
    </marker>
    <marker id="partArr" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#ef4444"/>
    </marker>
  </defs>

  <rect width="100%" height="100%" fill="#0f172a" rx="12"/>

  <!-- Title -->
  <text x="270" y="28" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="15" font-weight="bold" text-anchor="middle">Snapshot of a Transverse Progressive Wave: y = A sin(kx - ωt)</text>

  <!-- Equilibrium axis -->
  <line x1="60" y1="200" x2="500" y2="200" stroke="#94a3b8" stroke-width="2" marker-end="url(#axisArr4)"/>
  <line x1="80" y1="330" x2="80" y2="50" stroke="#94a3b8" stroke-width="2" marker-end="url(#axisArr4)"/>

  <text x="495" y="225" fill="#f8fafc" font-family="system-ui, sans-serif" font-size="14" font-weight="bold">x</text>
  <text x="65" y="60" fill="#f8fafc" font-family="system-ui, sans-serif" font-size="14" font-weight="bold">y</text>

  <!-- Sine Wave curve -->
  <!-- Wavelength = 200px. Crest at x=130 (y=120), Trough at x=230 (y=280), Crest at x=330, Trough at x=430 -->
  <path d="M 80 200 Q 105 120 130 120 T 180 200 T 230 280 T 280 200 T 330 120 T 380 200 T 430 280 T 480 200" fill="none" stroke="#38bdf8" stroke-width="3.5"/>

  <!-- Wave Speed Vector v (to the right) -->
  <line x1="330" y1="65" x2="420" y2="65" stroke="#38bdf8" stroke-width="3" marker-end="url(#waveArr)"/>
  <text x="375" y="55" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" text-anchor="middle">Wave velocity v</text>

  <!-- Amplitude indicators -->
  <line x1="130" y1="120" x2="130" y2="200" stroke="#f59e0b" stroke-dasharray="3,3" stroke-width="1.8"/>
  <text x="140" y="165" fill="#f59e0b" font-family="system-ui, sans-serif" font-size="13" font-weight="bold">+A</text>

  <!-- Wavelength λ between two crests (x=130 to x=330) -->
  <line x1="130" y1="100" x2="330" y2="100" stroke="#10b981" stroke-width="2"/>
  <polyline points="130,95 130,105" stroke="#10b981" stroke-width="2"/>
  <polyline points="330,95 330,105" stroke="#10b981" stroke-width="2"/>
  <text x="230" y="90" fill="#10b981" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" text-anchor="middle">Wavelength λ</text>

  <!-- Particle Velocity vectors at nodes -->
  <!-- At x=180 (falling profile, slope is negative => v_p = -v * slope > 0: upward) -->
  <circle cx="180" cy="200" r="5" fill="#ef4444"/>
  <line x1="180" y1="200" x2="180" y2="140" stroke="#ef4444" stroke-width="3" marker-end="url(#partArr)"/>
  <text x="190" y="160" fill="#ef4444" font-family="system-ui, sans-serif" font-size="12" font-weight="bold">v_p (up)</text>

  <!-- At x=280 (rising profile, slope positive => v_p is downward) -->
  <circle cx="280" cy="200" r="5" fill="#ef4444"/>
  <line x1="280" y1="200" x2="280" y2="260" stroke="#ef4444" stroke-width="3" marker-end="url(#partArr)"/>
  <text x="290" y="250" fill="#ef4444" font-family="system-ui, sans-serif" font-size="12" font-weight="bold">v_p (down)</text>

  <!-- Summary Box -->
  <rect x="70" y="295" width="400" height="65" rx="8" fill="#1e293b" stroke="#475569" stroke-width="1.2"/>
  <text x="85" y="318" fill="#f8fafc" font-family="system-ui, sans-serif" font-size="13" font-weight="bold">Key Wave Equation Relations:</text>
  <text x="85" y="340" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="12">v = f λ = ω / k  |  v_particle = -v × (∂y/∂x)  |  (v_particle)_max = ωA</text>
</svg>`;

// 5. test2_q2_longitudinal_sound_wave_compression_rarefaction.svg
const test2_q2 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 380" width="100%" height="100%">
  <rect width="100%" height="100%" fill="#0f172a" rx="12"/>

  <!-- Title -->
  <text x="270" y="28" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="15" font-weight="bold" text-anchor="middle">Longitudinal Sound Wave: Compressions (C) &amp; Rarefactions (R)</text>

  <!-- Cylinder containing gas particles -->
  <rect x="60" y="60" width="420" height="90" fill="#1e293b" stroke="#64748b" stroke-width="2" rx="4"/>

  <!-- Dense lines for Compression 1 (around x=140) -->
  <g stroke="#38bdf8" stroke-width="2">
    <line x1="120" y1="65" x2="120" y2="145"/>
    <line x1="126" y1="65" x2="126" y2="145"/>
    <line x1="131" y1="65" x2="131" y2="145"/>
    <line x1="136" y1="65" x2="136" y2="145"/>
    <line x1="140" y1="65" x2="140" y2="145" stroke-width="3"/>
    <line x1="144" y1="65" x2="144" y2="145"/>
    <line x1="149" y1="65" x2="149" y2="145"/>
    <line x1="155" y1="65" x2="155" y2="145"/>
  </g>
  <text x="140" y="50" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" text-anchor="middle">Compression (C)</text>

  <!-- Rarefaction 1 (around x=240 - sparse lines) -->
  <g stroke="#94a3b8" stroke-width="1.5">
    <line x1="210" y1="65" x2="210" y2="145"/>
    <line x1="240" y1="65" x2="240" y2="145"/>
    <line x1="270" y1="65" x2="270" y2="145"/>
  </g>
  <text x="240" y="50" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" text-anchor="middle">Rarefaction (R)</text>

  <!-- Compression 2 (around x=340) -->
  <g stroke="#38bdf8" stroke-width="2">
    <line x1="320" y1="65" x2="320" y2="145"/>
    <line x1="326" y1="65" x2="326" y2="145"/>
    <line x1="331" y1="65" x2="331" y2="145"/>
    <line x1="336" y1="65" x2="336" y2="145"/>
    <line x1="340" y1="65" x2="340" y2="145" stroke-width="3"/>
    <line x1="344" y1="65" x2="344" y2="145"/>
    <line x1="349" y1="65" x2="349" y2="145"/>
    <line x1="355" y1="65" x2="355" y2="145"/>
  </g>
  <text x="340" y="50" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" text-anchor="middle">Compression (C)</text>

  <!-- Pressure Wave Graph aligned below -->
  <line x1="60" y1="260" x2="480" y2="260" stroke="#64748b" stroke-width="1.8"/>
  <text x="490" y="265" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="12">x</text>
  <text x="45" y="210" fill="#f8fafc" font-family="system-ui, sans-serif" font-size="12" font-weight="bold">ΔP</text>

  <!-- Pressure wave: peak at C1 (x=140), trough at R (x=240), peak at C2 (x=340) -->
  <path d="M 60 260 Q 100 200 140 200 T 240 320 T 340 200 T 440 320" fill="none" stroke="#ef4444" stroke-width="3"/>

  <!-- High & Low Pressure labels -->
  <text x="140" y="190" fill="#ef4444" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" text-anchor="middle">+ΔP_max (High P &amp; ρ)</text>
  <text x="240" y="340" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" text-anchor="middle">-ΔP_max (Low P &amp; ρ)</text>

  <!-- Wavelength λ between two compressions -->
  <line x1="140" y1="165" x2="340" y2="165" stroke="#10b981" stroke-width="2"/>
  <polyline points="140,160 140,170" stroke="#10b981" stroke-width="2"/>
  <polyline points="340,160 340,170" stroke="#10b981" stroke-width="2"/>
  <text x="240" y="160" fill="#10b981" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" text-anchor="middle">Wavelength λ (Distance C to C)</text>
</svg>`;

// 6. test2_q3_wave_displacement_vs_time_and_position.svg
const test2_q3 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 380" width="100%" height="100%">
  <rect width="100%" height="100%" fill="#0f172a" rx="12"/>

  <!-- Title -->
  <text x="270" y="28" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="15" font-weight="bold" text-anchor="middle">Dual Representation: y vs x (Snapshot) and y vs t (History)</text>

  <!-- Graph 1: y vs x (Spatial Profile) -->
  <g transform="translate(30, 60)">
    <rect width="220" height="200" fill="#1e293b" rx="8" stroke="#475569" stroke-width="1.2"/>
    <text x="110" y="24" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" text-anchor="middle">Spatial Snapshot (y vs x)</text>

    <!-- Axes -->
    <line x1="20" y1="110" x2="200" y2="110" stroke="#94a3b8" stroke-width="1.5"/>
    <line x1="30" y1="185" x2="30" y2="40" stroke="#94a3b8" stroke-width="1.5"/>
    <text x="195" y="125" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11">x (m)</text>
    <text x="15" y="48" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11">y</text>

    <!-- Sine Wave: λ = 0.4 m -->
    <path d="M 30 110 Q 55 60 80 60 T 130 110 T 180 160" fill="none" stroke="#38bdf8" stroke-width="2.5"/>

    <!-- Wavelength mark -->
    <line x1="80" y1="50" x2="180" y2="50" stroke="#10b981" stroke-width="1.8"/>
    <text x="130" y="44" fill="#10b981" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" text-anchor="middle">λ = 0.4 m</text>
  </g>

  <!-- Graph 2: y vs t (Temporal History) -->
  <g transform="translate(290, 60)">
    <rect width="220" height="200" fill="#1e293b" rx="8" stroke="#475569" stroke-width="1.2"/>
    <text x="110" y="24" fill="#10b981" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" text-anchor="middle">Temporal History (y vs t)</text>

    <!-- Axes -->
    <line x1="20" y1="110" x2="200" y2="110" stroke="#94a3b8" stroke-width="1.5"/>
    <line x1="30" y1="185" x2="30" y2="40" stroke="#94a3b8" stroke-width="1.5"/>
    <text x="195" y="125" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11">t (s)</text>
    <text x="15" y="48" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="11">y</text>

    <!-- Sine Wave: T = 0.05 s -->
    <path d="M 30 110 Q 60 60 90 60 T 150 110 T 210 160" fill="none" stroke="#10b981" stroke-width="2.5"/>

    <!-- Period mark -->
    <line x1="30" y1="170" x2="150" y2="170" stroke="#f59e0b" stroke-width="1.8"/>
    <text x="90" y="185" fill="#f59e0b" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" text-anchor="middle">T = 0.05 s</text>
  </g>

  <!-- Calculation Box below -->
  <rect x="50" y="285" width="440" height="75" rx="8" fill="#1e293b" stroke="#475569" stroke-width="1.2"/>
  <text x="70" y="308" fill="#f8fafc" font-family="system-ui, sans-serif" font-size="13" font-weight="bold">Wave Velocity Calculation from Graphs:</text>
  <text x="70" y="328" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="12">From Graph 1: λ = 0.4 m  |  From Graph 2: T = 0.05 s (Frequency f = 1/T = 20 Hz)</text>
  <text x="70" y="348" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="13" font-weight="bold">Wave speed v = λ / T = f λ = (0.4 m) / (0.05 s) = 8.0 m/s</text>
</svg>`;

// 7. test3_q1_constructive_destructive_interference_pulses.svg
const test3_q1 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 380" width="100%" height="100%">
  <defs>
    <marker id="arr7" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#38bdf8"/>
    </marker>
  </defs>

  <rect width="100%" height="100%" fill="#0f172a" rx="12"/>

  <!-- Title -->
  <text x="270" y="28" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="15" font-weight="bold" text-anchor="middle">Principle of Superposition: Constructive &amp; Destructive Interference</text>

  <!-- Top: Constructive Interference -->
  <g transform="translate(40, 50)">
    <rect width="460" height="135" fill="#1e293b" rx="8" stroke="#475569" stroke-width="1.2"/>
    <text x="15" y="24" fill="#10b981" font-family="system-ui, sans-serif" font-size="13" font-weight="bold">Case 1: Constructive Interference (In-Phase Crests)</text>

    <!-- Two approaching pulses -->
    <line x1="20" y1="80" x2="200" y2="80" stroke="#64748b" stroke-width="1.5"/>
    <path d="M 50 80 Q 70 40 90 80" fill="none" stroke="#38bdf8" stroke-width="2.5"/>
    <text x="70" y="35" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" text-anchor="middle">+A →</text>

    <path d="M 130 80 Q 150 40 170 80" fill="none" stroke="#38bdf8" stroke-width="2.5"/>
    <text x="150" y="35" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" text-anchor="middle">← +A</text>

    <!-- Resultant Superposed Pulse -->
    <line x1="240" y1="80" x2="440" y2="80" stroke="#64748b" stroke-width="1.5"/>
    <path d="M 310 80 Q 340 10 370 80" fill="none" stroke="#10b981" stroke-width="3.5"/>
    <text x="340" y="105" fill="#10b981" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" text-anchor="middle">Resultant Amplitude = +2A</text>
  </g>

  <!-- Bottom: Destructive Interference -->
  <g transform="translate(40, 205)">
    <rect width="460" height="150" fill="#1e293b" rx="8" stroke="#475569" stroke-width="1.2"/>
    <text x="15" y="24" fill="#ef4444" font-family="system-ui, sans-serif" font-size="13" font-weight="bold">Case 2: Complete Destructive Interference (Crest + Trough)</text>

    <!-- Crest (+A) and Trough (-A) approaching -->
    <line x1="20" y1="80" x2="200" y2="80" stroke="#64748b" stroke-width="1.5"/>
    <path d="M 50 80 Q 70 40 90 80" fill="none" stroke="#38bdf8" stroke-width="2.5"/>
    <text x="70" y="35" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" text-anchor="middle">+A →</text>

    <path d="M 130 80 Q 150 120 170 80" fill="none" stroke="#f59e0b" stroke-width="2.5"/>
    <text x="150" y="132" fill="#f59e0b" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" text-anchor="middle">← -A</text>

    <!-- Resultant Flat String (y = 0) with transverse particle velocity -->
    <line x1="240" y1="80" x2="440" y2="80" stroke="#ef4444" stroke-width="3"/>
    <text x="340" y="65" fill="#ef4444" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" text-anchor="middle">Net Displacement y = 0</text>
    <text x="340" y="105" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="11" text-anchor="middle">Potential Energy = 0</text>
    <text x="340" y="125" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" text-anchor="middle">All energy is Kinetic (moving particles)</text>
  </g>
</svg>`;

// 8. test3_q2_phasor_addition_resultant_amplitude.svg
const test3_q2 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 380" width="100%" height="100%">
  <defs>
    <marker id="phasorArr" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#38bdf8"/>
    </marker>
    <marker id="resArr" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#f59e0b"/>
    </marker>
  </defs>

  <rect width="100%" height="100%" fill="#0f172a" rx="12"/>

  <!-- Title -->
  <text x="270" y="28" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="15" font-weight="bold" text-anchor="middle">Phasor Superposition: Resultant Amplitude A_net and Phase Difference φ</text>

  <!-- Phasor Vector Diagram (Left) -->
  <g transform="translate(60, 70)">
    <!-- Vector A1 along horizontal -->
    <line x1="20" y1="180" x2="160" y2="180" stroke="#38bdf8" stroke-width="3" marker-end="url(#phasorArr)"/>
    <text x="90" y="200" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="13" font-weight="bold">A₁</text>

    <!-- Vector A2 at angle phi=50 deg from tip of A1 -->
    <!-- (160, 180) to (160 + 100*cos(50), 180 - 100*sin(50)) = (160+64, 180-77) = (224, 103) -->
    <line x1="160" y1="180" x2="224" y2="103" stroke="#10b981" stroke-width="3" marker-end="url(#phasorArr)"/>
    <text x="205" y="140" fill="#10b981" font-family="system-ui, sans-serif" font-size="13" font-weight="bold">A₂</text>

    <!-- Angle phi arc -->
    <line x1="160" y1="180" x2="220" y2="180" stroke="#64748b" stroke-dasharray="3,3" stroke-width="1.2"/>
    <path d="M 190 180 A 30 30 0 0 0 200 157" fill="none" stroke="#f59e0b" stroke-width="2"/>
    <text x="208" y="175" fill="#f59e0b" font-family="system-ui, sans-serif" font-size="12" font-weight="bold">φ</text>

    <!-- Resultant Vector A_net -->
    <line x1="20" y1="180" x2="224" y2="103" stroke="#f59e0b" stroke-width="3.5" marker-end="url(#resArr)"/>
    <text x="100" y="130" fill="#f59e0b" font-family="system-ui, sans-serif" font-size="14" font-weight="bold">A_net</text>
  </g>

  <!-- Mathematical Formula Box (Right) -->
  <rect x="290" y="70" width="220" height="200" rx="8" fill="#1e293b" stroke="#475569" stroke-width="1.2"/>
  <text x="305" y="98" fill="#f8fafc" font-family="system-ui, sans-serif" font-size="13" font-weight="bold">Resultant Amplitude:</text>
  <text x="305" y="125" fill="#f59e0b" font-family="system-ui, sans-serif" font-size="13" font-weight="bold">A² = A₁² + A₂² + 2A₁A₂ cos φ</text>

  <text x="305" y="155" fill="#10b981" font-family="system-ui, sans-serif" font-size="12" font-weight="bold">• Constructive (φ = 0, 2π):</text>
  <text x="320" y="175" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="12">A_max = A₁ + A₂</text>

  <text x="305" y="200" fill="#ef4444" font-family="system-ui, sans-serif" font-size="12" font-weight="bold">• Destructive (φ = π, 3π):</text>
  <text x="320" y="220" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="12">A_min = |A₁ - A₂|</text>

  <text x="305" y="250" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="12" font-weight="bold">Intensity ratio: I_max / I_min</text>
  <text x="305" y="265" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="12"> = [(A₁ + A₂) / (A₁ - A₂)]²</text>
</svg>`;

// 9. test3_q3_wave_reflection_rigid_vs_free_boundary.svg
const test3_q3 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 380" width="100%" height="100%">
  <rect width="100%" height="100%" fill="#0f172a" rx="12"/>

  <!-- Title -->
  <text x="270" y="28" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="15" font-weight="bold" text-anchor="middle">Wave Reflection: Rigid Boundary (Phase Change π) vs Free Boundary (Phase Change 0)</text>

  <!-- Top: Rigid Boundary Reflection -->
  <g transform="translate(40, 50)">
    <rect width="460" height="135" fill="#1e293b" rx="8" stroke="#475569" stroke-width="1.2"/>
    <text x="15" y="24" fill="#ef4444" font-family="system-ui, sans-serif" font-size="13" font-weight="bold">Case 1: Reflection from Rigid (Fixed) Boundary (Δφ = π = 180°)</text>

    <!-- String & Rigid Wall at x=380 -->
    <line x1="20" y1="80" x2="380" y2="80" stroke="#64748b" stroke-width="1.5"/>
    <rect x="380" y="30" width="20" height="90" fill="#475569" stroke="#94a3b8" stroke-width="1.5"/>

    <!-- Incident pulse (+A) moving right -->
    <path d="M 60 80 Q 90 40 120 80" fill="none" stroke="#38bdf8" stroke-width="2.5"/>
    <text x="90" y="35" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" text-anchor="middle">Incident (+A) →</text>

    <!-- Reflected pulse (-A, inverted) moving left -->
    <path d="M 230 80 Q 260 120 290 80" fill="none" stroke="#ef4444" stroke-width="2.5"/>
    <text x="260" y="132" fill="#ef4444" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" text-anchor="middle">← Reflected (-A, Inverted)</text>
  </g>

  <!-- Bottom: Free End Reflection -->
  <g transform="translate(40, 205)">
    <rect width="460" height="150" fill="#1e293b" rx="8" stroke="#475569" stroke-width="1.2"/>
    <text x="15" y="24" fill="#10b981" font-family="system-ui, sans-serif" font-size="13" font-weight="bold">Case 2: Reflection from Free (Open) Boundary (Δφ = 0)</text>

    <!-- String & Smooth Rod with ring at x=380 -->
    <line x1="20" y1="80" x2="380" y2="80" stroke="#64748b" stroke-width="1.5"/>
    <line x1="380" y1="30" x2="380" y2="120" stroke="#94a3b8" stroke-width="3"/>
    <circle cx="380" cy="80" r="5" fill="none" stroke="#f59e0b" stroke-width="2.5"/>

    <!-- Incident pulse (+A) moving right -->
    <path d="M 60 80 Q 90 40 120 80" fill="none" stroke="#38bdf8" stroke-width="2.5"/>
    <text x="90" y="35" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" text-anchor="middle">Incident (+A) →</text>

    <!-- Reflected pulse (+A, upright) moving left -->
    <path d="M 230 80 Q 260 40 290 80" fill="none" stroke="#10b981" stroke-width="2.5"/>
    <text x="260" y="35" fill="#10b981" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" text-anchor="middle">← Reflected (+A, Upright)</text>
  </g>
</svg>`;

// 10. test4_q1_standing_waves_stretched_string_harmonics.svg
const test4_q1 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 380" width="100%" height="100%">
  <rect width="100%" height="100%" fill="#0f172a" rx="12"/>

  <!-- Title -->
  <text x="270" y="28" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="15" font-weight="bold" text-anchor="middle">Standing Waves in Stretched String: Harmonics &amp; Nodes/Antinodes</text>

  <!-- Left and Right Fixed Supports -->
  <rect x="70" y="50" width="10" height="280" fill="#475569" stroke="#94a3b8" stroke-width="1.5"/>
  <rect x="440" y="50" width="10" height="280" fill="#475569" stroke="#94a3b8" stroke-width="1.5"/>

  <!-- Mode 1: Fundamental / 1st Harmonic (n=1, 1 Loop, f1 = v/2L) -->
  <g transform="translate(0, 60)">
    <text x="50" y="45" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" text-anchor="end">n=1</text>
    <path d="M 80 40 Q 260 -10 440 40" fill="none" stroke="#38bdf8" stroke-width="2.5"/>
    <path d="M 80 40 Q 260 90 440 40" fill="none" stroke="#38bdf8" stroke-width="2" stroke-dasharray="4,3"/>
    <circle cx="80" cy="40" r="3" fill="#ef4444"/>
    <circle cx="440" cy="40" r="3" fill="#ef4444"/>
    <text x="80" y="58" fill="#ef4444" font-family="system-ui, sans-serif" font-size="10" font-weight="bold" text-anchor="middle">N</text>
    <text x="260" y="58" fill="#10b981" font-family="system-ui, sans-serif" font-size="10" font-weight="bold" text-anchor="middle">A</text>
    <text x="440" y="58" fill="#ef4444" font-family="system-ui, sans-serif" font-size="10" font-weight="bold" text-anchor="middle">N</text>
    <text x="465" y="45" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="11">f₁ = v/2L</text>
  </g>

  <!-- Mode 2: 2nd Harmonic (n=2, 2 Loops, f2 = 2f1) -->
  <g transform="translate(0, 150)">
    <text x="50" y="45" fill="#10b981" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" text-anchor="end">n=2</text>
    <path d="M 80 40 Q 170 0 260 40 Q 350 80 440 40" fill="none" stroke="#10b981" stroke-width="2.5"/>
    <path d="M 80 40 Q 170 80 260 40 Q 350 0 440 40" fill="none" stroke="#10b981" stroke-width="2" stroke-dasharray="4,3"/>
    <circle cx="80" cy="40" r="3" fill="#ef4444"/>
    <circle cx="260" cy="40" r="3" fill="#ef4444"/>
    <circle cx="440" cy="40" r="3" fill="#ef4444"/>
    <text x="80" y="58" fill="#ef4444" font-family="system-ui, sans-serif" font-size="10" font-weight="bold" text-anchor="middle">N</text>
    <text x="170" y="58" fill="#10b981" font-family="system-ui, sans-serif" font-size="10" font-weight="bold" text-anchor="middle">A</text>
    <text x="260" y="58" fill="#ef4444" font-family="system-ui, sans-serif" font-size="10" font-weight="bold" text-anchor="middle">N</text>
    <text x="350" y="58" fill="#10b981" font-family="system-ui, sans-serif" font-size="10" font-weight="bold" text-anchor="middle">A</text>
    <text x="440" y="58" fill="#ef4444" font-family="system-ui, sans-serif" font-size="10" font-weight="bold" text-anchor="middle">N</text>
    <text x="465" y="45" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="11">f₂ = 2f₁</text>
  </g>

  <!-- Mode 3: 3rd Harmonic (n=3, 3 Loops, f3 = 3f1) -->
  <g transform="translate(0, 240)">
    <text x="50" y="45" fill="#f59e0b" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" text-anchor="end">n=3</text>
    <path d="M 80 40 Q 140 5 200 40 Q 260 75 320 40 Q 380 5 440 40" fill="none" stroke="#f59e0b" stroke-width="2.5"/>
    <path d="M 80 40 Q 140 75 200 40 Q 260 5 320 40 Q 380 75 440 40" fill="none" stroke="#f59e0b" stroke-width="2" stroke-dasharray="4,3"/>
    <circle cx="80" cy="40" r="3" fill="#ef4444"/>
    <circle cx="200" cy="40" r="3" fill="#ef4444"/>
    <circle cx="320" cy="40" r="3" fill="#ef4444"/>
    <circle cx="440" cy="40" r="3" fill="#ef4444"/>
    <text x="465" y="45" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="11">f₃ = 3f₁</text>
  </g>

  <!-- Summary text -->
  <text x="270" y="355" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="12" text-anchor="middle">Distance between adjacent nodes = λ/2 | Node to adjacent antinode = λ/4 | f₁ : f₂ : f₃ = 1 : 2 : 3</text>
</svg>`;

// 11. test4_q2_standing_waves_open_organ_pipe_harmonics.svg
const test4_q2 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 380" width="100%" height="100%">
  <rect width="100%" height="100%" fill="#0f172a" rx="12"/>

  <!-- Title -->
  <text x="270" y="28" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="15" font-weight="bold" text-anchor="middle">Open Organ Pipe: Antinodes at Both Open Ends (All Harmonics Allowed)</text>

  <!-- Pipe 1: Fundamental / 1st Harmonic (f1 = v / 2L) -->
  <g transform="translate(60, 55)">
    <rect x="50" y="10" width="300" height="60" fill="#1e293b" stroke="#94a3b8" stroke-width="2"/>
    <!-- Displacement envelope: Antinodes at both ends, Node at center (x=200) -->
    <path d="M 50 15 Q 200 40 350 15" fill="none" stroke="#38bdf8" stroke-width="2.5"/>
    <path d="M 50 65 Q 200 40 350 65" fill="none" stroke="#38bdf8" stroke-width="2.5"/>
    <circle cx="200" cy="40" r="4" fill="#ef4444"/>
    <text x="50" y="85" fill="#10b981" font-family="system-ui, sans-serif" font-size="11" font-weight="bold">A</text>
    <text x="200" y="85" fill="#ef4444" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" text-anchor="middle">N</text>
    <text x="350" y="85" fill="#10b981" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" text-anchor="end">A</text>
    <text x="375" y="45" fill="#f8fafc" font-family="system-ui, sans-serif" font-size="12" font-weight="bold">f₁ = v / 2L (λ₁ = 2L)</text>
  </g>

  <!-- Pipe 2: Second Harmonic (2nd Harmonic, 1st Overtone, f2 = 2f1) -->
  <g transform="translate(60, 155)">
    <rect x="50" y="10" width="300" height="60" fill="#1e293b" stroke="#94a3b8" stroke-width="2"/>
    <!-- 2 Nodes at x=125 and x=275, Antinodes at ends and center -->
    <path d="M 50 15 Q 125 40 200 65 Q 275 40 350 15" fill="none" stroke="#10b981" stroke-width="2.5"/>
    <path d="M 50 65 Q 125 40 200 15 Q 275 40 350 65" fill="none" stroke="#10b981" stroke-width="2.5"/>
    <circle cx="125" cy="40" r="4" fill="#ef4444"/>
    <circle cx="275" cy="40" r="4" fill="#ef4444"/>
    <text x="50" y="85" fill="#10b981" font-family="system-ui, sans-serif" font-size="11" font-weight="bold">A</text>
    <text x="125" y="85" fill="#ef4444" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" text-anchor="middle">N</text>
    <text x="200" y="85" fill="#10b981" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" text-anchor="middle">A</text>
    <text x="275" y="85" fill="#ef4444" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" text-anchor="middle">N</text>
    <text x="350" y="85" fill="#10b981" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" text-anchor="end">A</text>
    <text x="375" y="45" fill="#f8fafc" font-family="system-ui, sans-serif" font-size="12" font-weight="bold">f₂ = 2(v / 2L) = 2f₁</text>
  </g>

  <!-- Summary Box -->
  <rect x="60" y="265" width="420" height="90" rx="8" fill="#1e293b" stroke="#475569" stroke-width="1.2"/>
  <text x="75" y="288" fill="#f8fafc" font-family="system-ui, sans-serif" font-size="13" font-weight="bold">Open Organ Pipe Properties:</text>
  <text x="75" y="310" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="12">• Antinodes at both ends (pressure nodes, displacement antinodes)</text>
  <text x="75" y="328" fill="#10b981" font-family="system-ui, sans-serif" font-size="12">• All harmonics present: f_n = n(v / 2L), where n = 1, 2, 3, 4, ...</text>
  <text x="75" y="346" fill="#f59e0b" font-family="system-ui, sans-serif" font-size="12">• Ratio of frequencies: f₁ : f₂ : f₃ : f₄ = 1 : 2 : 3 : 4</text>
</svg>`;

// 12. test4_q3_standing_waves_closed_organ_pipe_harmonics.svg
const test4_q3 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 380" width="100%" height="100%">
  <rect width="100%" height="100%" fill="#0f172a" rx="12"/>

  <!-- Title -->
  <text x="270" y="28" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="15" font-weight="bold" text-anchor="middle">Closed Organ Pipe: Node at Closed End, Antinode at Open End</text>

  <!-- Pipe 1: Fundamental / 1st Harmonic (f1 = v / 4L) -->
  <g transform="translate(60, 55)">
    <!-- Pipe: left end closed (thick line) -->
    <rect x="50" y="10" width="300" height="60" fill="#1e293b" stroke="#94a3b8" stroke-width="2"/>
    <line x1="50" y1="10" x2="50" y2="70" stroke="#f43f5e" stroke-width="6"/>
    <!-- Displacement envelope: Node at x=50, Antinode at x=350 -->
    <path d="M 50 40 Q 200 40 350 15" fill="none" stroke="#38bdf8" stroke-width="2.5"/>
    <path d="M 50 40 Q 200 40 350 65" fill="none" stroke="#38bdf8" stroke-width="2.5"/>
    <circle cx="50" cy="40" r="4" fill="#ef4444"/>
    <text x="50" y="85" fill="#ef4444" font-family="system-ui, sans-serif" font-size="11" font-weight="bold">N (closed)</text>
    <text x="350" y="85" fill="#10b981" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" text-anchor="end">A (open)</text>
    <text x="375" y="45" fill="#f8fafc" font-family="system-ui, sans-serif" font-size="12" font-weight="bold">f₁ = v / 4L (λ₁ = 4L)</text>
  </g>

  <!-- Pipe 2: Third Harmonic (1st Overtone, f3 = 3f1) -->
  <g transform="translate(60, 155)">
    <rect x="50" y="10" width="300" height="60" fill="#1e293b" stroke="#94a3b8" stroke-width="2"/>
    <line x1="50" y1="10" x2="50" y2="70" stroke="#f43f5e" stroke-width="6"/>
    <!-- Node at x=50, Antinode at x=150, Node at x=250, Antinode at x=350 -->
    <path d="M 50 40 Q 100 40 150 15 Q 200 40 250 40 Q 300 40 350 65" fill="none" stroke="#f59e0b" stroke-width="2.5"/>
    <path d="M 50 40 Q 100 40 150 65 Q 200 40 250 40 Q 300 40 350 15" fill="none" stroke="#f59e0b" stroke-width="2.5"/>
    <circle cx="50" cy="40" r="4" fill="#ef4444"/>
    <circle cx="250" cy="40" r="4" fill="#ef4444"/>
    <text x="50" y="85" fill="#ef4444" font-family="system-ui, sans-serif" font-size="11" font-weight="bold">N</text>
    <text x="150" y="85" fill="#10b981" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" text-anchor="middle">A</text>
    <text x="250" y="85" fill="#ef4444" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" text-anchor="middle">N</text>
    <text x="350" y="85" fill="#10b981" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" text-anchor="end">A</text>
    <text x="375" y="45" fill="#f8fafc" font-family="system-ui, sans-serif" font-size="12" font-weight="bold">f₃ = 3(v / 4L) = 3f₁</text>
  </g>

  <!-- Summary Box -->
  <rect x="60" y="265" width="420" height="90" rx="8" fill="#1e293b" stroke="#475569" stroke-width="1.2"/>
  <text x="75" y="288" fill="#f8fafc" font-family="system-ui, sans-serif" font-size="13" font-weight="bold">Closed Organ Pipe Properties:</text>
  <text x="75" y="310" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="12">• Produces ONLY ODD harmonics: f_n = (2n - 1)(v / 4L)</text>
  <text x="75" y="328" fill="#f59e0b" font-family="system-ui, sans-serif" font-size="12">• Frequency ratio: f₁ : f₃ : f₅ = 1 : 3 : 5</text>
  <text x="75" y="346" fill="#10b981" font-family="system-ui, sans-serif" font-size="12">• For same length L: f_open = 2 × f_closed</text>
</svg>`;

// 13. test5_q1_beat_formation_envelope_waveform.svg
const test5_q1 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 380" width="100%" height="100%">
  <rect width="100%" height="100%" fill="#0f172a" rx="12"/>

  <!-- Title -->
  <text x="270" y="28" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="15" font-weight="bold" text-anchor="middle">Acoustic Beats: Waxing &amp; Waning Amplitude Envelope</text>

  <!-- Time axis -->
  <line x1="60" y1="180" x2="490" y2="180" stroke="#94a3b8" stroke-width="2"/>
  <text x="495" y="185" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="13">t</text>

  <!-- Modulated Beat Pattern -->
  <!-- Upper envelope: starts high at x=80 (y=90), pinches at x=200 (y=175), peaks at x=320 (y=90), pinches at x=440 (y=175) -->
  <path d="M 80 90 Q 140 100 200 175 Q 260 100 320 90 Q 380 100 440 175" fill="none" stroke="#f59e0b" stroke-width="2.5" stroke-dasharray="5,3"/>
  <!-- Lower envelope -->
  <path d="M 80 270 Q 140 260 200 185 Q 260 260 320 270 Q 380 260 440 185" fill="none" stroke="#f59e0b" stroke-width="2.5" stroke-dasharray="5,3"/>

  <!-- Fast carrier oscillation inside envelope -->
  <path d="M 80 90 Q 90 270 100 100 Q 110 250 120 120 Q 130 230 140 135 Q 150 215 160 150 Q 170 200 180 165 Q 190 190 200 180 Q 210 170 220 195 Q 230 155 240 210 Q 250 140 260 225 Q 270 125 280 240 Q 290 110 300 255 Q 310 95 320 270 Q 330 95 340 255 Q 350 110 360 240 Q 370 125 380 225 Q 390 140 400 210 Q 410 155 420 195 Q 430 170 440 180" fill="none" stroke="#38bdf8" stroke-width="2"/>

  <!-- Markers for Beat Period T_beat -->
  <line x1="80" y1="70" x2="320" y2="70" stroke="#10b981" stroke-width="2"/>
  <polyline points="80,65 80,75" stroke="#10b981" stroke-width="2"/>
  <polyline points="320,65 320,75" stroke="#10b981" stroke-width="2"/>
  <text x="200" y="60" fill="#10b981" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" text-anchor="middle">Beat Period T_beat = 1 / |f₁ - f₂|</text>

  <!-- Labels on peaks & pinches -->
  <text x="80" y="305" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" text-anchor="middle">Waxing (Max I)</text>
  <text x="200" y="305" fill="#ef4444" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" text-anchor="middle">Waning (Min I)</text>
  <text x="320" y="305" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" text-anchor="middle">Waxing (Max I)</text>

  <!-- Formula Box -->
  <rect x="70" y="325" width="400" height="45" rx="6" fill="#1e293b" stroke="#475569" stroke-width="1.2"/>
  <text x="270" y="352" fill="#f8fafc" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" text-anchor="middle">Beat Frequency: f_beat = |f₁ - f₂| beats per second</text>
</svg>`;

// 14. test5_q2_beat_intensity_waxing_waning_graph.svg
const test5_q2 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 380" width="100%" height="100%">
  <rect width="100%" height="100%" fill="#0f172a" rx="12"/>

  <!-- Title -->
  <text x="270" y="28" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="15" font-weight="bold" text-anchor="middle">Beat Intensity vs Time: Periodic Waxing &amp; Waning</text>

  <!-- Axes -->
  <line x1="70" y1="310" x2="490" y2="310" stroke="#94a3b8" stroke-width="2"/>
  <line x1="90" y1="330" x2="90" y2="50" stroke="#94a3b8" stroke-width="2"/>
  <text x="495" y="315" fill="#94a3b8" font-family="system-ui, sans-serif" font-size="13">t</text>
  <text x="75" y="60" fill="#f8fafc" font-family="system-ui, sans-serif" font-size="14" font-weight="bold">I(t)</text>

  <!-- Intensity Max & Min levels -->
  <line x1="90" y1="100" x2="470" y2="100" stroke="#f59e0b" stroke-dasharray="3,3" stroke-width="1.5"/>
  <text x="80" y="105" fill="#f59e0b" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" text-anchor="end">I_max</text>

  <line x1="90" y1="280" x2="470" y2="280" stroke="#64748b" stroke-dasharray="3,3" stroke-width="1.5"/>
  <text x="80" y="285" fill="#64748b" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" text-anchor="end">I_min</text>

  <!-- Intensity curve: peaks at x=100, x=260, x=420. Minima at x=180, x=340 -->
  <path d="M 90 100 Q 140 280 180 280 T 260 100 T 340 280 T 420 100 T 470 200" fill="none" stroke="#ef4444" stroke-width="3"/>

  <!-- Time markers -->
  <circle cx="100" cy="100" r="5" fill="#f59e0b"/>
  <circle cx="180" cy="280" r="5" fill="#38bdf8"/>
  <circle cx="260" cy="100" r="5" fill="#f59e0b"/>

  <!-- Delta t from Max to Min -->
  <line x1="100" y1="315" x2="180" y2="315" stroke="#38bdf8" stroke-width="2"/>
  <polyline points="100,310 100,320" stroke="#38bdf8" stroke-width="2"/>
  <polyline points="180,310 180,320" stroke="#38bdf8" stroke-width="2"/>
  <text x="140" y="335" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" text-anchor="middle">Δt = 1 / 2(f₁ - f₂)</text>

  <!-- Time for Full Beat Period -->
  <line x1="100" y1="80" x2="260" y2="80" stroke="#10b981" stroke-width="2"/>
  <polyline points="100,75 100,85" stroke="#10b981" stroke-width="2"/>
  <polyline points="260,75 260,85" stroke="#10b981" stroke-width="2"/>
  <text x="180" y="70" fill="#10b981" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" text-anchor="middle">T_beat = 1 / |f₁ - f₂|</text>

  <!-- Summary Box -->
  <rect x="290" y="140" width="220" height="110" rx="8" fill="#1e293b" stroke="#475569" stroke-width="1.2"/>
  <text x="305" y="165" fill="#f8fafc" font-family="system-ui, sans-serif" font-size="12" font-weight="bold">Key Beat Relationships:</text>
  <text x="305" y="188" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="11">• Max to Max time = 1 / Δf</text>
  <text x="305" y="208" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="11">• Max to Min time = 1 / (2Δf)</text>
  <text x="305" y="232" fill="#ef4444" font-family="system-ui, sans-serif" font-size="11" font-weight="bold">I_max = (A₁ + A₂)²  |  I_min = (A₁ - A₂)²</text>
</svg>`;

// 15. test5_q3_tuning_fork_waxing_loading_beat_frequency.svg
const test5_q3 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 380" width="100%" height="100%">
  <rect width="100%" height="100%" fill="#0f172a" rx="12"/>

  <!-- Title -->
  <text x="270" y="28" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="15" font-weight="bold" text-anchor="middle">Tuning Fork Frequency Determination: Loading with Wax &amp; Filing</text>

  <!-- Fork A (with wax) -->
  <g transform="translate(60, 60)">
    <rect width="180" height="200" fill="#1e293b" rx="8" stroke="#475569" stroke-width="1.2"/>
    <text x="90" y="24" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" text-anchor="middle">Fork A (Waxed / Loaded)</text>

    <!-- Tuning Fork Schematic -->
    <!-- Stem -->
    <rect x="85" y="130" width="10" height="45" fill="#94a3b8"/>
    <!-- U-bend -->
    <path d="M 65 80 L 65 130 A 25 25 0 0 0 115 130 L 115 80" fill="none" stroke="#94a3b8" stroke-width="8"/>
    <!-- Prongs -->
    <rect x="61" y="55" width="8" height="30" fill="#94a3b8"/>
    <rect x="111" y="55" width="8" height="30" fill="#94a3b8"/>

    <!-- Wax blob on prong -->
    <circle cx="65" cy="62" r="7" fill="#f59e0b"/>
    <text x="50" y="65" fill="#f59e0b" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" text-anchor="end">Wax</text>

    <text x="90" y="190" fill="#f59e0b" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" text-anchor="middle">Mass ↑ ⇒ Frequency f_A ↓</text>
  </g>

  <!-- Fork B (Standard / Unloaded) -->
  <g transform="translate(290, 60)">
    <rect width="180" height="200" fill="#1e293b" rx="8" stroke="#475569" stroke-width="1.2"/>
    <text x="90" y="24" fill="#10b981" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" text-anchor="middle">Fork B (Standard, f_B = 256 Hz)</text>

    <!-- Tuning Fork Schematic -->
    <rect x="85" y="130" width="10" height="45" fill="#94a3b8"/>
    <path d="M 65 80 L 65 130 A 25 25 0 0 0 115 130 L 115 80" fill="none" stroke="#94a3b8" stroke-width="8"/>
    <rect x="61" y="55" width="8" height="30" fill="#94a3b8"/>
    <rect x="111" y="55" width="8" height="30" fill="#94a3b8"/>

    <text x="90" y="190" fill="#10b981" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" text-anchor="middle">Standard Frequency</text>
  </g>

  <!-- Decision Logic Box below -->
  <rect x="50" y="275" width="440" height="85" rx="8" fill="#1e293b" stroke="#475569" stroke-width="1.2"/>
  <text x="65" y="298" fill="#f8fafc" font-family="system-ui, sans-serif" font-size="12" font-weight="bold">Determination Rules (Initial beat frequency = Δf):</text>
  <text x="65" y="320" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="11">1. If waxing A DECREASES beats: f_A &gt; f_B (f_A = f_B + Δf)</text>
  <text x="65" y="338" fill="#cbd5e1" font-family="system-ui, sans-serif" font-size="11">2. If waxing A INCREASES beats: f_A &lt; f_B (f_A = f_B - Δf)</text>
  <text x="65" y="354" fill="#38bdf8" font-family="system-ui, sans-serif" font-size="11" font-weight="bold">3. Filing prongs decreases mass ⇒ Frequency increases (opposite of waxing)</text>
</svg>`;

const diagrams = [
  { name: 'test1_q1_shm_displacement_velocity_acceleration_graphs.svg', content: test1_q1 },
  { name: 'test1_q2_shm_potential_kinetic_total_energy_parabolas.svg', content: test1_q2 },
  { name: 'test1_q3_simple_pendulum_restoring_force_components.svg', content: test1_q3 },
  { name: 'test2_q1_transverse_harmonic_wave_profile.svg', content: test2_q1 },
  { name: 'test2_q2_longitudinal_sound_wave_compression_rarefaction.svg', content: test2_q2 },
  { name: 'test2_q3_wave_displacement_vs_time_and_position.svg', content: test2_q3 },
  { name: 'test3_q1_constructive_destructive_interference_pulses.svg', content: test3_q1 },
  { name: 'test3_q2_phasor_addition_resultant_amplitude.svg', content: test3_q2 },
  { name: 'test3_q3_wave_reflection_rigid_vs_free_boundary.svg', content: test3_q3 },
  { name: 'test4_q1_standing_waves_stretched_string_harmonics.svg', content: test4_q1 },
  { name: 'test4_q2_standing_waves_open_organ_pipe_harmonics.svg', content: test4_q2 },
  { name: 'test4_q3_standing_waves_closed_organ_pipe_harmonics.svg', content: test4_q3 },
  { name: 'test5_q1_beat_formation_envelope_waveform.svg', content: test5_q1 },
  { name: 'test5_q2_beat_intensity_waxing_waning_graph.svg', content: test5_q2 },
  { name: 'test5_q3_tuning_fork_waxing_loading_beat_frequency.svg', content: test5_q3 }
];

for (const d of diagrams) {
  const filePath = path.join(outDir, d.name);
  fs.writeFileSync(filePath, d.content, 'utf8');
  console.log(`Generated: ${filePath}`);
}

console.log("\nAll 15 SVG diagrams generated successfully!");
