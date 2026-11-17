import fs from 'fs';
import path from 'path';

const outDir = path.join(process.cwd(), 'public', 'images', 'diagrams', 'solids');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

console.log("=== GENERATING 15 SCIENTIFIC VECTOR SVG DIAGRAMS FOR SOLIDS & ASSOCIATED TOPICS ===");

const svgWrap = (content, width = 600, height = 360) => `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}">
  <defs>
    <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#3b82f6" />
    </marker>
    <marker id="arrow-red" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#ef4444" />
    </marker>
    <marker id="arrow-green" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#10b981" />
    </marker>
    <marker id="arrow-dark" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#0f172a" />
    </marker>
    <linearGradient id="metalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#cbd5e1" />
      <stop offset="100%" stop-color="#64748b" />
    </linearGradient>
    <linearGradient id="waterGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#93c5fd" />
      <stop offset="100%" stop-color="#3b82f6" />
    </linearGradient>
    <linearGradient id="brassGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#fef08a" />
      <stop offset="100%" stop-color="#eab308" />
    </linearGradient>
    <linearGradient id="steelGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#e2e8f0" />
      <stop offset="100%" stop-color="#94a3b8" />
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="#ffffff" rx="8" />
  ${content}
</svg>`;

const diagrams = [
  // ==========================================
  // TEST 1: ELASTICITY (3 DIAGRAMS)
  // ==========================================
  {
    name: "test1_q1_stress_strain_curve.svg",
    width: 600,
    height: 360,
    content: `
      <!-- Title -->
      <text x="300" y="28" font-family="system-ui, sans-serif" font-size="16" font-weight="bold" fill="#0f172a" text-anchor="middle">Stress-Strain Curve for a Ductile Metal Wire</text>
      
      <!-- Graph Axes -->
      <line x1="70" y1="290" x2="540" y2="290" stroke="#0f172a" stroke-width="2" marker-end="url(#arrow-dark)" />
      <line x1="70" y1="290" x2="70" y2="50" stroke="#0f172a" stroke-width="2" marker-end="url(#arrow-dark)" />
      <text x="550" y="295" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#0f172a">Strain (ε)</text>
      <text x="40" y="45" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#0f172a">Stress (σ)</text>
      <text x="60" y="305" font-family="system-ui, sans-serif" font-size="12" fill="#64748b">O</text>

      <!-- Curve path -->
      <!-- O(70,290) -> P(160,180) straight Hooke line -->
      <!-- P(160,180) -> E(190,165) elastic limit -->
      <!-- E(190,165) -> Y(230,170) yield point -->
      <!-- Y(230,170) -> U(380,100) ultimate tensile strength -->
      <!-- U(380,100) -> B(490,140) breaking point -->
      <path d="M 70 290 L 160 180 Q 180 165 210 165 Q 230 170 260 155 Q 350 95 380 95 Q 440 95 490 140" fill="none" stroke="#2563eb" stroke-width="3" />

      <!-- Points -->
      <!-- P: Proportional limit -->
      <circle cx="160" cy="180" r="4" fill="#10b981" />
      <text x="150" y="170" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#059669">P (Prop. Limit)</text>
      <line x1="160" y1="180" x2="160" y2="290" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3,3" />

      <!-- E: Elastic limit (Yield point) -->
      <circle cx="210" cy="165" r="4" fill="#2563eb" />
      <text x="210" y="150" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#1d4ed8">E (Elastic Limit)</text>

      <!-- U: Ultimate tensile strength -->
      <circle cx="380" cy="95" r="5" fill="#f59e0b" />
      <text x="380" y="80" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#d97706" text-anchor="middle">U (Tensile Strength)</text>
      <line x1="70" y1="95" x2="380" y2="95" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="3,3" />

      <!-- B: Fracture / Breaking point -->
      <circle cx="490" cy="140" r="5" fill="#ef4444" />
      <text x="505" y="145" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#dc2626">B (Fracture)</text>

      <!-- Shaded elastic region O to P -->
      <path d="M 70 290 L 160 180 L 160 290 Z" fill="#93c5fd" fill-opacity="0.3" />
      <text x="115" y="275" font-family="system-ui, sans-serif" font-size="11" fill="#1e40af" text-anchor="middle">Hooke's Law: σ = Y · ε</text>

      <!-- Card in bottom right -->
      <rect x="250" y="180" width="240" height="90" rx="6" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
      <text x="370" y="202" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#0f172a" text-anchor="middle">Key Regions & Properties</text>
      <text x="260" y="222" font-family="system-ui, sans-serif" font-size="11" fill="#334155">• OP: Linear elastic region (slope = Y)</text>
      <text x="260" y="238" font-family="system-ui, sans-serif" font-size="11" fill="#334155">• PE: Non-linear elastic region</text>
      <text x="260" y="254" font-family="system-ui, sans-serif" font-size="11" fill="#334155">• EB: Plastic deformation & necking</text>
    `
  },
  {
    name: "test1_q2_wire_extension_cantilever.svg",
    width: 600,
    height: 360,
    content: `
      <!-- Title -->
      <text x="300" y="28" font-family="system-ui, sans-serif" font-size="16" font-weight="bold" fill="#0f172a" text-anchor="middle">Stretching of an Elastic Wire and Potential Energy Stored</text>
      
      <!-- Ceiling support -->
      <rect x="180" y="55" width="240" height="15" fill="#475569" rx="2" />
      <line x1="180" y1="70" x2="420" y2="70" stroke="#1e293b" stroke-width="2" />
      <!-- Hatching on ceiling -->
      <line x1="200" y1="55" x2="190" y2="70" stroke="#94a3b8" stroke-width="1.5" />
      <line x1="230" y1="55" x2="220" y2="70" stroke="#94a3b8" stroke-width="1.5" />
      <line x1="260" y1="55" x2="250" y2="70" stroke="#94a3b8" stroke-width="1.5" />
      <line x1="290" y1="55" x2="280" y2="70" stroke="#94a3b8" stroke-width="1.5" />
      <line x1="320" y1="55" x2="310" y2="70" stroke="#94a3b8" stroke-width="1.5" />
      <line x1="350" y1="55" x2="340" y2="70" stroke="#94a3b8" stroke-width="1.5" />
      <line x1="380" y1="55" x2="370" y2="70" stroke="#94a3b8" stroke-width="1.5" />
      <line x1="410" y1="55" x2="400" y2="70" stroke="#94a3b8" stroke-width="1.5" />

      <!-- Stretched wire -->
      <line x1="300" y1="70" x2="300" y2="220" stroke="#2563eb" stroke-width="4" stroke-linecap="round" />
      
      <!-- Hanging block of mass M -->
      <rect x="260" y="220" width="80" height="40" rx="4" fill="url(#metalGrad)" stroke="#334155" stroke-width="2" />
      <text x="300" y="245" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#ffffff" text-anchor="middle">Mass M</text>

      <!-- Force vector downward -->
      <line x1="300" y1="260" x2="300" y2="300" stroke="#ef4444" stroke-width="2.5" marker-end="url(#arrow-red)" />
      <text x="315" y="295" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#dc2626">F = M g</text>

      <!-- Dimension L -->
      <line x1="230" y1="70" x2="230" y2="200" stroke="#0f172a" stroke-width="1.5" marker-start="url(#arrow-dark)" marker-end="url(#arrow-dark)" />
      <text x="210" y="140" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#0f172a">Length L</text>

      <!-- Extension ΔL -->
      <line x1="230" y1="200" x2="230" y2="220" stroke="#ef4444" stroke-width="2" marker-start="url(#arrow-red)" marker-end="url(#arrow-red)" />
      <text x="210" y="215" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#dc2626">ΔL</text>

      <!-- Wire cross section area A annotation -->
      <ellipse cx="300" cy="140" rx="12" ry="6" fill="#bfdbfe" stroke="#1d4ed8" stroke-width="1.5" />
      <text x="325" y="145" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#1e40af">Area A, Modulus Y</text>

      <!-- Right Side Formula Card -->
      <rect x="370" y="100" width="205" height="150" rx="8" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1.5" />
      <text x="472" y="125" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#1e40af" text-anchor="middle">Hooke's Law Formulas</text>
      <text x="385" y="152" font-family="system-ui, sans-serif" font-size="12" fill="#334155">• Extension:</text>
      <text x="405" y="172" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#1e40af">ΔL = (F L) / (A Y)</text>
      <text x="385" y="198" font-family="system-ui, sans-serif" font-size="12" fill="#334155">• Elastic Energy Stored:</text>
      <text x="405" y="218" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#dc2626">U = ½ F ΔL = ½ (A Y / L) (ΔL)²</text>
      <text x="385" y="238" font-family="system-ui, sans-serif" font-size="11" fill="#475569">• Energy density: u = ½ σ ε</text>
    `
  },
  {
    name: "test1_q3_stress_strain_comparison.svg",
    width: 600,
    height: 360,
    content: `
      <!-- Title -->
      <text x="300" y="28" font-family="system-ui, sans-serif" font-size="16" font-weight="bold" fill="#0f172a" text-anchor="middle">Comparative Stress-Strain Curves: Material A vs Material B</text>
      
      <!-- Graph axes -->
      <line x1="80" y1="290" x2="540" y2="290" stroke="#0f172a" stroke-width="2" marker-end="url(#arrow-dark)" />
      <line x1="80" y1="290" x2="80" y2="50" stroke="#0f172a" stroke-width="2" marker-end="url(#arrow-dark)" />
      <text x="550" y="295" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#0f172a">Strain</text>
      <text x="50" y="45" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#0f172a">Stress</text>

      <!-- Material A (Steeper slope, ductile, high strength): from (80,290) to (180,110), then curves to (350,80) and fractures at (460,110) -->
      <path d="M 80 290 L 180 110 Q 240 80 320 80 Q 400 80 460 110" fill="none" stroke="#2563eb" stroke-width="3" />
      <circle cx="460" cy="110" r="5" fill="#2563eb" />
      <text x="475" y="115" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#1d4ed8">Fracture A</text>
      <text x="210" y="95" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#1e40af">Material A (Ductile)</text>

      <!-- Material B (Lower slope, brittle, fractures early): from (80,290) to (240,170) and breaks sharply at (260,160) -->
      <path d="M 80 290 L 240 170 Q 250 165 260 160" fill="none" stroke="#ef4444" stroke-width="3" />
      <circle cx="260" cy="160" r="5" fill="#ef4444" />
      <text x="275" y="165" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#dc2626">Fracture B (Brittle)</text>
      <text x="200" y="220" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#dc2626">Material B</text>

      <!-- Comparison Summary Table Card -->
      <rect x="230" y="200" width="310" height="85" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
      <text x="385" y="222" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#0f172a" text-anchor="middle">Comparison of Mechanical Properties</text>
      <text x="245" y="242" font-family="system-ui, sans-serif" font-size="11" fill="#334155">• Slope = Young's Modulus: YA &gt; YB (A is stiffer/more elastic)</text>
      <text x="245" y="258" font-family="system-ui, sans-serif" font-size="11" fill="#334155">• Tensile Strength: Material A &gt; Material B</text>
      <text x="245" y="274" font-family="system-ui, sans-serif" font-size="11" fill="#334155">• Plastic range: Large for A (Ductile), Small for B (Brittle)</text>
    `
  },

  // ==========================================
  // TEST 2: FLUID MECHANICS (3 DIAGRAMS)
  // ==========================================
  {
    name: "test2_q1_hydraulic_lift.svg",
    width: 600,
    height: 360,
    content: `
      <!-- Title -->
      <text x="300" y="28" font-family="system-ui, sans-serif" font-size="16" font-weight="bold" fill="#0f172a" text-anchor="middle">Pascal's Principle: Hydraulic Lift Mechanical Advantage</text>
      
      <!-- Hydraulic fluid U-tube container -->
      <!-- Left column narrow: x=100 to 160 (width 60) -->
      <!-- Bottom channel: y=250 to 300, x=100 to 500 -->
      <!-- Right column wide: x=340 to 500 (width 160) -->
      <path d="M 100 120 L 100 300 L 500 300 L 500 120 L 460 120 L 460 250 L 160 250 L 160 120 Z" fill="#94a3b8" />
      
      <!-- Liquid inside -->
      <path d="M 100 180 L 160 180 L 160 250 L 460 250 L 460 180 L 500 180 L 500 300 L 100 300 Z" fill="url(#waterGrad)" />
      
      <!-- Left piston: area A1, force F1 -->
      <rect x="100" y="165" width="60" height="15" fill="#334155" rx="2" />
      <line x1="130" y1="100" x2="130" y2="160" stroke="#ef4444" stroke-width="3" marker-end="url(#arrow-red)" />
      <text x="130" y="90" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#dc2626" text-anchor="middle">Force F₁</text>
      <text x="130" y="200" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">Area A₁</text>

      <!-- Right piston: area A2, load F2 -->
      <rect x="340" y="165" width="160" height="15" fill="#334155" rx="2" />
      <!-- Car load on right piston -->
      <rect x="370" y="130" width="100" height="35" rx="6" fill="#f59e0b" stroke="#b45309" stroke-width="2" />
      <text x="420" y="152" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">Car Load (F₂)</text>
      <line x1="420" y1="165" x2="420" y2="100" stroke="#10b981" stroke-width="3" marker-end="url(#arrow-green)" />
      <text x="420" y="90" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#15803d" text-anchor="middle">Lift Force F₂</text>
      <text x="420" y="200" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">Area A₂</text>

      <!-- Equal pressure annotation -->
      <text x="300" y="275" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#ffffff" text-anchor="middle">Pressure Transmitted: P = F₁ / A₁ = F₂ / A₂</text>

      <!-- Formula card in top center -->
      <rect x="180" y="45" width="240" height="40" rx="6" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
      <text x="300" y="70" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#0f172a" text-anchor="middle">F₂ = F₁ · (A₂ / A₁)   (Force Multiplier)</text>
    `
  },
  {
    name: "test2_q2_bernoulli_pipe_venturi.svg",
    width: 600,
    height: 360,
    content: `
      <!-- Title -->
      <text x="300" y="28" font-family="system-ui, sans-serif" font-size="16" font-weight="bold" fill="#0f172a" text-anchor="middle">Continuity Equation and Bernoulli's Theorem in a Venturimeter</text>
      
      <!-- Venturi pipe body -->
      <!-- Wide left: (60,160) to (180,160), constricts to (260,190) throat (340,190), widens to (420,160) to (540,160) -->
      <!-- Bottom: (60,260) to (180,260), constricts to (260,230) throat (340,230), widens to (420,260) to (540,260) -->
      <path d="M 60 160 L 180 160 Q 220 160 260 190 L 340 190 Q 380 160 420 160 L 540 160 L 540 260 L 420 260 Q 380 260 340 230 L 260 230 Q 220 260 180 260 L 60 260 Z" fill="#eff6ff" stroke="#2563eb" stroke-width="2" />

      <!-- Manometer tube 1 at wide section (x=140) -->
      <rect x="135" y="70" width="18" height="90" fill="#ffffff" stroke="#2563eb" stroke-width="1.5" />
      <rect x="136" y="90" width="16" height="70" fill="url(#waterGrad)" />
      <text x="144" y="62" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#1e40af" text-anchor="middle">h₁</text>

      <!-- Manometer tube 2 at constriction throat (x=300) -->
      <rect x="291" y="70" width="18" height="120" fill="#ffffff" stroke="#2563eb" stroke-width="1.5" />
      <rect x="292" y="140" width="16" height="50" fill="url(#waterGrad)" />
      <text x="300" y="62" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#dc2626" text-anchor="middle">h₂</text>

      <!-- Height difference h -->
      <line x1="160" y1="90" x2="280" y2="90" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="3,3" />
      <line x1="280" y1="90" x2="280" y2="140" stroke="#ef4444" stroke-width="2" marker-start="url(#arrow-red)" marker-end="url(#arrow-red)" />
      <text x="260" y="120" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#dc2626">Δh</text>

      <!-- Flow velocity vectors -->
      <line x1="80" y1="210" x2="130" y2="210" stroke="#2563eb" stroke-width="2" marker-end="url(#arrow)" />
      <text x="100" y="235" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#1e40af">v₁, A₁, P₁</text>

      <line x1="270" y1="210" x2="330" y2="210" stroke="#2563eb" stroke-width="3" marker-end="url(#arrow)" />
      <text x="300" y="245" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#dc2626" text-anchor="middle">v₂ &gt; v₁ (Throat: A₂, P₂ &lt; P₁)</text>

      <!-- Bottom Card: Equations -->
      <rect x="80" y="280" width="440" height="65" rx="6" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
      <text x="300" y="302" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#0f172a" text-anchor="middle">Continuity: A₁ v₁ = A₂ v₂    |    Bernoulli: P₁ + ½ ρ v₁² = P₂ + ½ ρ v₂²</text>
      <text x="300" y="325" font-family="system-ui, sans-serif" font-size="12" fill="#1e40af" text-anchor="middle">Pressure Difference: P₁ - P₂ = ½ ρ (v₂² - v₁²) = ρ g Δh</text>
    `
  },
  {
    name: "test2_q3_terminal_velocity_stokes.svg",
    width: 600,
    height: 360,
    content: `
      <!-- Title -->
      <text x="300" y="28" font-family="system-ui, sans-serif" font-size="16" font-weight="bold" fill="#0f172a" text-anchor="middle">Stokes' Law and Terminal Velocity of a Falling Sphere</text>
      
      <!-- Viscous liquid column -->
      <rect x="180" y="55" width="140" height="280" fill="url(#waterGrad)" rx="6" />
      
      <!-- Sphere in fluid: center (250, 190), radius r = 24 -->
      <circle cx="250" cy="190" r="24" fill="url(#metalGrad)" stroke="#1e293b" stroke-width="2" />
      <text x="250" y="195" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">Sphere (ρs, r)</text>

      <!-- Forces acting on sphere -->
      <!-- Downward: Gravity W = mg -->
      <line x1="250" y1="214" x2="250" y2="290" stroke="#ef4444" stroke-width="3" marker-end="url(#arrow-red)" />
      <text x="260" y="285" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#dc2626">W = mg = (4/3)πr³ρs g</text>

      <!-- Upward: Buoyant Force FB -->
      <line x1="235" y1="166" x2="235" y2="100" stroke="#10b981" stroke-width="2.5" marker-end="url(#arrow-green)" />
      <text x="140" y="115" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#15803d">FB = (4/3)πr³ρf g</text>

      <!-- Upward: Viscous drag Fv -->
      <line x1="265" y1="166" x2="265" y2="110" stroke="#3b82f6" stroke-width="2.5" marker-end="url(#arrow)" />
      <text x="280" y="130" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#2563eb">Fv = 6πηr v</text>

      <!-- Right Card: Equilibrium & Terminal Velocity -->
      <rect x="350" y="70" width="225" height="220" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
      <text x="462" y="98" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#0f172a" text-anchor="middle">At Terminal Velocity (a = 0):</text>
      <text x="365" y="125" font-family="system-ui, sans-serif" font-size="12" fill="#334155">Downward force = Upward forces</text>
      <text x="375" y="148" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#dc2626">W = FB + Fv</text>
      <line x1="365" y1="165" x2="560" y2="165" stroke="#cbd5e1" stroke-width="1" />
      <text x="462" y="190" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#1e40af" text-anchor="middle">Terminal Velocity vt</text>
      <text x="462" y="215" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#0f172a" text-anchor="middle">vt = [2 r² (ρs - ρf) g] / (9 η)</text>
      <text x="462" y="245" font-family="system-ui, sans-serif" font-size="12" fill="#1e40af" text-anchor="middle">Key Relation: vt ∝ r²</text>
      <text x="462" y="268" font-family="system-ui, sans-serif" font-size="11" fill="#475569" text-anchor="middle">If ρs &gt; ρf : falls downward</text>
    `
  },

  // ==========================================
  // TEST 3: SURFACE TENSION & CAPILLARITY (3 DIAGRAMS)
  // ==========================================
  {
    name: "test3_q1_excess_pressure_drop_bubble.svg",
    width: 600,
    height: 360,
    content: `
      <!-- Title -->
      <text x="300" y="28" font-family="system-ui, sans-serif" font-size="16" font-weight="bold" fill="#0f172a" text-anchor="middle">Excess Pressure: Liquid Drop vs Soap Bubble</text>
      
      <!-- Liquid Drop (left): center (180, 180), R = 60 -->
      <circle cx="180" cy="180" r="60" fill="url(#waterGrad)" stroke="#1d4ed8" stroke-width="2.5" />
      <text x="180" y="175" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#ffffff" text-anchor="middle">Liquid Drop</text>
      <text x="180" y="195" font-family="system-ui, sans-serif" font-size="12" fill="#ffffff" text-anchor="middle">(1 free surface)</text>
      
      <!-- Radius R line -->
      <line x1="180" y1="180" x2="235" y2="150" stroke="#ffffff" stroke-width="1.5" />
      <text x="210" y="160" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#ffffff">R</text>

      <!-- Soap Bubble (right): center (420, 180), outer R = 60, inner r = 54 -->
      <circle cx="420" cy="180" r="60" fill="none" stroke="#2563eb" stroke-width="6" />
      <circle cx="420" cy="180" r="54" fill="#eff6ff" />
      <text x="420" y="175" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#1e40af" text-anchor="middle">Soap Bubble</text>
      <text x="420" y="195" font-family="system-ui, sans-serif" font-size="12" fill="#3b82f6" text-anchor="middle">(2 free surfaces)</text>
      
      <!-- Radius R line -->
      <line x1="420" y1="180" x2="475" y2="150" stroke="#2563eb" stroke-width="1.5" />
      <text x="450" y="160" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#1e40af">R</text>

      <!-- Bottom Card: Comparative formulas -->
      <rect x="70" y="265" width="460" height="75" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
      <text x="180" y="292" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#1e40af" text-anchor="middle">Liquid Drop: ΔP = 2T / R</text>
      <text x="180" y="315" font-family="system-ui, sans-serif" font-size="11" fill="#475569" text-anchor="middle">Liquid inside, Air outside</text>

      <line x1="300" y1="275" x2="300" y2="330" stroke="#cbd5e1" stroke-width="1" />

      <text x="420" y="292" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#dc2626" text-anchor="middle">Soap Bubble: ΔP = 4T / R</text>
      <text x="420" y="315" font-family="system-ui, sans-serif" font-size="11" fill="#475569" text-anchor="middle">Air inside AND Air outside</text>
    `
  },
  {
    name: "test3_q2_capillary_rise_meniscus.svg",
    width: 600,
    height: 360,
    content: `
      <!-- Title -->
      <text x="300" y="28" font-family="system-ui, sans-serif" font-size="16" font-weight="bold" fill="#0f172a" text-anchor="middle">Capillary Rise and Jurin's Law in a Vertical Tube</text>
      
      <!-- Liquid beaker: x=100 to 360, y=180 to 310 -->
      <rect x="100" y="180" width="260" height="130" fill="url(#waterGrad)" rx="4" />
      <line x1="80" y1="180" x2="380" y2="180" stroke="#1d4ed8" stroke-width="2" />
      <text x="120" y="200" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#ffffff">Beaker Level</text>

      <!-- Capillary tube: x=210 to 250 (radius r = 20) -->
      <rect x="210" y="60" width="40" height="230" fill="#ffffff" fill-opacity="0.8" stroke="#334155" stroke-width="2" />
      <!-- Water inside capillary up to y=100 -->
      <rect x="212" y="100" width="36" height="190" fill="url(#waterGrad)" />
      
      <!-- Concave meniscus at y=100 -->
      <path d="M 212 100 Q 230 115 248 100" fill="none" stroke="#1e40af" stroke-width="2" />

      <!-- Capillary height h dimension -->
      <line x1="280" y1="100" x2="280" y2="180" stroke="#ef4444" stroke-width="2" marker-start="url(#arrow-red)" marker-end="url(#arrow-red)" />
      <line x1="250" y1="100" x2="295" y2="100" stroke="#ef4444" stroke-width="1" stroke-dasharray="3,3" />
      <text x="290" y="145" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#dc2626">Height h</text>

      <!-- Tube radius r -->
      <line x1="210" y1="75" x2="250" y2="75" stroke="#0f172a" stroke-width="1.5" marker-start="url(#arrow-dark)" marker-end="url(#arrow-dark)" />
      <text x="230" y="70" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#0f172a" text-anchor="middle">2r</text>

      <!-- Right Card: Jurin's Law & Formula -->
      <rect x="380" y="70" width="200" height="220" rx="8" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1.5" />
      <text x="480" y="98" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#1e40af" text-anchor="middle">Capillary Ascent Formula</text>
      <text x="480" y="130" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#0f172a" text-anchor="middle">h = (2T cos θ) / (r ρ g)</text>
      
      <line x1="395" y1="150" x2="565" y2="150" stroke="#bfdbfe" stroke-width="1" />
      <text x="480" y="175" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#1e40af" text-anchor="middle">Jurin's Law:</text>
      <text x="480" y="198" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#dc2626" text-anchor="middle">h · r = constant</text>
      <text x="480" y="222" font-family="system-ui, sans-serif" font-size="12" fill="#334155" text-anchor="middle">Narrower tube ⇒ Greater rise</text>
      <text x="480" y="248" font-family="system-ui, sans-serif" font-size="11" fill="#475569" text-anchor="middle">In insufficient length tube: liquid does NOT overflow; meniscus flattens</text>
    `
  },
  {
    name: "test3_q3_contact_angle_wetting.svg",
    width: 600,
    height: 360,
    content: `
      <!-- Title -->
      <text x="300" y="28" font-family="system-ui, sans-serif" font-size="16" font-weight="bold" fill="#0f172a" text-anchor="middle">Angle of Contact θ: Wetting vs Non-Wetting Liquids</text>
      
      <!-- Solid surface baseline -->
      <line x1="60" y1="230" x2="540" y2="230" stroke="#334155" stroke-width="3" />
      <rect x="60" y="230" width="480" height="20" fill="#e2e8f0" />
      <text x="300" y="245" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#475569" text-anchor="middle">Solid Surface</text>

      <!-- Case 1: Acute Contact Angle (θ < 90°, Water on Glass) -->
      <!-- Spreading drop on left: center around x = 180 -->
      <path d="M 110 230 Q 180 130 250 230 Z" fill="url(#waterGrad)" stroke="#1d4ed8" stroke-width="2" />
      <!-- Tangent line at triple interface (250, 230) -->
      <line x1="250" y1="230" x2="200" y2="155" stroke="#ef4444" stroke-width="2" />
      <path d="M 235 230 A 20 20 0 0 1 235 207" fill="none" stroke="#ef4444" stroke-width="1.5" />
      <text x="215" y="220" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#dc2626">θ &lt; 90°</text>
      <text x="180" y="275" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#1e40af" text-anchor="middle">Wetting Liquid (Water)</text>
      <text x="180" y="295" font-family="system-ui, sans-serif" font-size="11" fill="#475569" text-anchor="middle">Adhesive &gt; Cohesive | Capillary Rise</text>

      <!-- Case 2: Obtuse Contact Angle (θ > 90°, Mercury on Glass) -->
      <!-- Round bead drop on right: center around x = 420 -->
      <ellipse cx="420" cy="175" rx="50" ry="55" fill="url(#metalGrad)" stroke="#334155" stroke-width="2" />
      <!-- Tangent line at triple interface (470, 230) -->
      <line x1="470" y1="230" x2="510" y2="160" stroke="#ef4444" stroke-width="2" />
      <path d="M 440 230 A 30 30 0 0 1 485 205" fill="none" stroke="#ef4444" stroke-width="1.5" />
      <text x="445" y="220" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#dc2626">θ &gt; 90°</text>
      <text x="420" y="275" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#0f172a" text-anchor="middle">Non-Wetting Liquid (Mercury)</text>
      <text x="420" y="295" font-family="system-ui, sans-serif" font-size="11" fill="#475569" text-anchor="middle">Cohesive &gt; Adhesive | Capillary Fall</text>

      <!-- Top Formula Box -->
      <rect x="150" y="45" width="300" height="35" rx="6" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1" />
      <text x="300" y="68" font-family="system-ui, sans-serif" font-size="12" fill="#0f172a" text-anchor="middle">Young's Equilibrium: T_sa = T_sl + T_la · cos θ</text>
    `
  },

  // ==========================================
  // TEST 4: THERMAL EXPANSION & CALORIMETRY (3 DIAGRAMS)
  // ==========================================
  {
    name: "test4_q1_bimetallic_strip.svg",
    width: 600,
    height: 360,
    content: `
      <!-- Title -->
      <text x="300" y="28" font-family="system-ui, sans-serif" font-size="16" font-weight="bold" fill="#0f172a" text-anchor="middle">Bimetallic Strip: Differential Thermal Expansion (α_brass &gt; α_steel)</text>
      
      <!-- Fixed support on left -->
      <rect x="50" y="60" width="20" height="250" fill="#334155" />
      
      <!-- 1. Room Temperature (Straight) at y=100 -->
      <rect x="70" y="90" width="180" height="12" fill="url(#brassGrad)" stroke="#ca8a04" stroke-width="1" />
      <rect x="70" y="102" width="180" height="12" fill="url(#steelGrad)" stroke="#64748b" stroke-width="1" />
      <text x="160" y="82" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#a16207">Brass (α₁)</text>
      <text x="160" y="128" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#475569">Steel (α₂)</text>
      <text x="270" y="106" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#0f172a">Room Temp T₀ (Straight)</text>

      <!-- 2. On Heating (Bends downward towards steel) at y=200 -->
      <!-- Curved strip: Brass outer, Steel inner -->
      <path d="M 70 190 Q 180 190 230 240 L 222 248 Q 175 200 70 202 Z" fill="url(#brassGrad)" stroke="#ca8a04" stroke-width="1" />
      <path d="M 70 202 Q 175 200 222 248 L 214 256 Q 170 210 70 214 Z" fill="url(#steelGrad)" stroke="#64748b" stroke-width="1" />
      <text x="260" y="225" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#dc2626">Heated (T &gt; T₀)</text>
      <text x="260" y="242" font-family="system-ui, sans-serif" font-size="11" fill="#475569">Bends toward Steel</text>

      <!-- Right Card: Principles & Applications -->
      <rect x="360" y="80" width="215" height="210" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
      <text x="467" y="105" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#0f172a" text-anchor="middle">Physical Mechanism</text>
      <text x="375" y="130" font-family="system-ui, sans-serif" font-size="12" fill="#334155">• α_brass &gt; α_steel</text>
      <text x="375" y="152" font-family="system-ui, sans-serif" font-size="12" fill="#334155">• When heated:</text>
      <text x="385" y="172" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#dc2626">Brass expands more</text>
      <text x="385" y="188" font-family="system-ui, sans-serif" font-size="11" fill="#475569">⇒ Forms convex outer curve</text>
      <text x="375" y="210" font-family="system-ui, sans-serif" font-size="12" fill="#334155">• When cooled:</text>
      <text x="385" y="230" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#2563eb">Brass contracts more</text>
      <text x="385" y="246" font-family="system-ui, sans-serif" font-size="11" fill="#475569">⇒ Bends toward brass</text>
      <text x="375" y="272" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#0f172a">Use: Thermostats & fire alarms</text>
    `
  },
  {
    name: "test4_q2_heating_curve_water.svg",
    width: 600,
    height: 360,
    content: `
      <!-- Title -->
      <text x="300" y="28" font-family="system-ui, sans-serif" font-size="16" font-weight="bold" fill="#0f172a" text-anchor="middle">Heating Curve of Water: Sensible Heat vs Latent Heat</text>
      
      <!-- Graph Axes -->
      <line x1="70" y1="300" x2="540" y2="300" stroke="#0f172a" stroke-width="2" marker-end="url(#arrow-dark)" />
      <line x1="70" y1="300" x2="70" y2="50" stroke="#0f172a" stroke-width="2" marker-end="url(#arrow-dark)" />
      <text x="550" y="305" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#0f172a">Heat Added (Q)</text>
      <text x="30" y="45" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#0f172a">Temp (°C)</text>

      <!-- Temperatures marks -->
      <line x1="65" y1="250" x2="75" y2="250" stroke="#0f172a" stroke-width="2" />
      <text x="45" y="255" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#0f172a">0°C</text>

      <line x1="65" y1="130" x2="75" y2="130" stroke="#0f172a" stroke-width="2" />
      <text x="30" y="135" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#0f172a">100°C</text>

      <!-- Heating curve line -->
      <!-- 1. Ice warming (-10 to 0): (70,280) to (120,250) -->
      <line x1="70" y1="280" x2="120" y2="250" stroke="#2563eb" stroke-width="3" />
      <text x="85" y="260" font-family="system-ui, sans-serif" font-size="10" font-weight="bold" fill="#1e40af">Ice</text>

      <!-- 2. Melting plateau at 0°C: (120,250) to (200,250) -->
      <line x1="120" y1="250" x2="200" y2="250" stroke="#ef4444" stroke-width="4" />
      <text x="160" y="240" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#dc2626" text-anchor="middle">Melting: Q = m Lf</text>

      <!-- 3. Water heating (0 to 100): (200,250) to (310,130) -->
      <line x1="200" y1="250" x2="310" y2="130" stroke="#2563eb" stroke-width="3" />
      <text x="245" y="180" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#1e40af">Water: Q = mcΔT</text>

      <!-- 4. Boiling plateau at 100°C: (310,130) to (470,130) (longer plateau because Lv >> Lf) -->
      <line x1="310" y1="130" x2="470" y2="130" stroke="#ef4444" stroke-width="4" />
      <text x="390" y="120" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#dc2626" text-anchor="middle">Boiling: Q = m Lv (Longer: Lv = 540 cal/g)</text>

      <!-- 5. Steam heating: (470,130) to (520,70) -->
      <line x1="470" y1="130" x2="520" y2="70" stroke="#2563eb" stroke-width="3" />
      <text x="500" y="90" font-family="system-ui, sans-serif" font-size="10" font-weight="bold" fill="#1e40af">Steam</text>

      <!-- Latent heat note box -->
      <rect x="180" y="28" width="300" height="25" rx="4" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1" />
      <text x="330" y="45" font-family="system-ui, sans-serif" font-size="11" fill="#334155" text-anchor="middle">During phase change, Temperature remains constant (ΔT = 0)</text>
    `
  },
  {
    name: "test4_q3_thermal_stress_rod.svg",
    width: 600,
    height: 360,
    content: `
      <!-- Title -->
      <text x="300" y="28" font-family="system-ui, sans-serif" font-size="16" font-weight="bold" fill="#0f172a" text-anchor="middle">Thermal Stress in a Metal Rod Clamped Between Rigid Walls</text>
      
      <!-- Left rigid wall -->
      <rect x="80" y="100" width="25" height="160" fill="#334155" />
      <line x1="80" y1="100" x2="65" y2="120" stroke="#94a3b8" stroke-width="1.5" />
      <line x1="80" y1="140" x2="65" y2="160" stroke="#94a3b8" stroke-width="1.5" />
      <line x1="80" y1="180" x2="65" y2="200" stroke="#94a3b8" stroke-width="1.5" />
      <line x1="80" y1="220" x2="65" y2="240" stroke="#94a3b8" stroke-width="1.5" />
      <text x="92" y="90" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#334155" text-anchor="middle">Wall</text>

      <!-- Right rigid wall -->
      <rect x="350" y="100" width="25" height="160" fill="#334155" />
      <line x1="375" y1="100" x2="390" y2="120" stroke="#94a3b8" stroke-width="1.5" />
      <line x1="375" y1="140" x2="390" y2="160" stroke="#94a3b8" stroke-width="1.5" />
      <line x1="375" y1="180" x2="390" y2="200" stroke="#94a3b8" stroke-width="1.5" />
      <line x1="375" y1="220" x2="390" y2="240" stroke="#94a3b8" stroke-width="1.5" />
      <text x="362" y="90" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#334155" text-anchor="middle">Wall</text>

      <!-- Metal Rod clamped between walls -->
      <rect x="105" y="160" width="245" height="40" rx="3" fill="url(#metalGrad)" stroke="#1e293b" stroke-width="2" />
      <text x="227" y="185" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#ffffff" text-anchor="middle">Metal Rod (L, A, Y, α)</text>

      <!-- Compressive forces exerted by walls when heated by ΔT -->
      <line x1="105" y1="180" x2="145" y2="180" stroke="#ef4444" stroke-width="3" marker-end="url(#arrow-red)" />
      <line x1="350" y1="180" x2="310" y2="180" stroke="#ef4444" stroke-width="3" marker-end="url(#arrow-red)" />
      <text x="125" y="165" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#dc2626">F</text>
      <text x="330" y="165" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#dc2626">F</text>

      <!-- Length L dimension line -->
      <line x1="105" y1="220" x2="350" y2="220" stroke="#0f172a" stroke-width="1.5" marker-start="url(#arrow-dark)" marker-end="url(#arrow-dark)" />
      <text x="227" y="240" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#0f172a" text-anchor="middle">Length L</text>

      <!-- Right Card: Mathematical Formulas -->
      <rect x="395" y="100" width="185" height="160" rx="8" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1.5" />
      <text x="487" y="125" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#1e40af" text-anchor="middle">Thermal Stress</text>
      <text x="405" y="152" font-family="system-ui, sans-serif" font-size="12" fill="#334155">• Thermal Strain:</text>
      <text x="420" y="172" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#1e40af">ε = ΔL / L = α ΔT</text>
      
      <text x="405" y="198" font-family="system-ui, sans-serif" font-size="12" fill="#334155">• Thermal Stress:</text>
      <text x="420" y="218" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#dc2626">σ = Y α ΔT</text>
      
      <text x="405" y="240" font-family="system-ui, sans-serif" font-size="12" fill="#334155">• Compressive Force:</text>
      <text x="420" y="255" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#dc2626">F = Y A α ΔT</text>
    `
  },

  // ==========================================
  // TEST 5: STEFAN'S LAW OF RADIATION (3 DIAGRAMS)
  // ==========================================
  {
    name: "test5_q1_blackbody_radiation_curves.svg",
    width: 600,
    height: 360,
    content: `
      <!-- Title -->
      <text x="300" y="28" font-family="system-ui, sans-serif" font-size="16" font-weight="bold" fill="#0f172a" text-anchor="middle">Blackbody Radiation Spectra: Wien's Law & Stefan-Boltzmann Law</text>
      
      <!-- Graph Axes -->
      <line x1="70" y1="290" x2="540" y2="290" stroke="#0f172a" stroke-width="2" marker-end="url(#arrow-dark)" />
      <line x1="70" y1="290" x2="70" y2="50" stroke="#0f172a" stroke-width="2" marker-end="url(#arrow-dark)" />
      <text x="550" y="295" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#0f172a">Wavelength λ</text>
      <text x="25" y="45" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#0f172a">E_λ</text>

      <!-- Curve T3 (Highest temp, e.g. 2000 K, peak at x=150, y=80) -->
      <path d="M 70 290 Q 110 80 150 80 Q 220 80 340 220 T 520 280" fill="none" stroke="#ef4444" stroke-width="3" />
      <circle cx="150" cy="80" r="4" fill="#ef4444" />
      <text x="160" y="75" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#dc2626">T₃ = 2000 K</text>

      <!-- Curve T2 (Medium temp, e.g. 1500 K, peak at x=200, y=140) -->
      <path d="M 70 290 Q 140 140 200 140 Q 280 140 380 240 T 520 285" fill="none" stroke="#f59e0b" stroke-width="2.5" />
      <circle cx="200" cy="140" r="4" fill="#f59e0b" />
      <text x="210" y="135" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#d97706">T₂ = 1500 K</text>

      <!-- Curve T1 (Lowest temp, e.g. 1000 K, peak at x=280, y=210) -->
      <path d="M 70 290 Q 200 210 280 210 Q 360 210 440 265 T 520 288" fill="none" stroke="#2563eb" stroke-width="2" />
      <circle cx="280" cy="210" r="4" fill="#2563eb" />
      <text x="290" y="205" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#1e40af">T₁ = 1000 K</text>

      <!-- Wien's peak shift locus line connecting peaks -->
      <path d="M 150 80 Q 210 150 280 210" fill="none" stroke="#64748b" stroke-width="1.5" stroke-dasharray="4,4" />
      <text x="240" y="175" font-family="system-ui, sans-serif" font-size="11" fill="#475569">λ_max · T = b</text>

      <!-- Card in bottom right -->
      <rect x="270" y="225" width="260" height="60" rx="6" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
      <text x="400" y="245" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#0f172a" text-anchor="middle">Area under curve = Total Emitted Power</text>
      <text x="400" y="268" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#dc2626" text-anchor="middle">E = σ T⁴ (Stefan-Boltzmann Law)</text>
    `
  },
  {
    name: "test5_q2_stefan_cooling_surroundings.svg",
    width: 600,
    height: 360,
    content: `
      <!-- Title -->
      <text x="300" y="28" font-family="system-ui, sans-serif" font-size="16" font-weight="bold" fill="#0f172a" text-anchor="middle">Stefan's Law: Heat Exchange with Surroundings</text>
      
      <!-- Enclosure at Temperature T0 (Surroundings) -->
      <rect x="80" y="60" width="260" height="260" rx="12" fill="#eff6ff" stroke="#3b82f6" stroke-width="3" />
      <text x="210" y="85" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#1e40af" text-anchor="middle">Surroundings at Temp T₀</text>

      <!-- Radiating body inside enclosure at Temp T -->
      <circle cx="210" cy="190" r="50" fill="#fef08a" stroke="#ca8a04" stroke-width="2.5" />
      <text x="210" y="185" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#a16207" text-anchor="middle">Body (T, A, e)</text>
      <text x="210" y="205" font-family="system-ui, sans-serif" font-size="12" fill="#a16207" text-anchor="middle">Temp T &gt; T₀</text>

      <!-- Outward emission radiation arrows -->
      <line x1="210" y1="135" x2="210" y2="105" stroke="#ef4444" stroke-width="2.5" marker-end="url(#arrow-red)" />
      <line x1="265" y1="190" x2="295" y2="190" stroke="#ef4444" stroke-width="2.5" marker-end="url(#arrow-red)" />
      <line x1="210" y1="245" x2="210" y2="275" stroke="#ef4444" stroke-width="2.5" marker-end="url(#arrow-red)" />
      <line x1="155" y1="190" x2="125" y2="190" stroke="#ef4444" stroke-width="2.5" marker-end="url(#arrow-red)" />
      <text x="240" y="115" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#dc2626">P_emit</text>

      <!-- Inward absorption arrows -->
      <line x1="100" y1="130" x2="160" y2="160" stroke="#3b82f6" stroke-width="2" marker-end="url(#arrow)" />
      <line x1="320" y1="250" x2="260" y2="220" stroke="#3b82f6" stroke-width="2" marker-end="url(#arrow)" />
      <text x="110" y="150" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#2563eb">P_absorb</text>

      <!-- Right Card: Stefan-Boltzmann Power Equations -->
      <rect x="360" y="70" width="220" height="240" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
      <text x="470" y="98" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#0f172a" text-anchor="middle">Stefan-Boltzmann Law</text>
      
      <text x="375" y="125" font-family="system-ui, sans-serif" font-size="12" fill="#334155">• Emitted Power:</text>
      <text x="390" y="145" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#dc2626">P_emit = e σ A T⁴</text>

      <text x="375" y="172" font-family="system-ui, sans-serif" font-size="12" fill="#334155">• Absorbed Power:</text>
      <text x="390" y="192" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#2563eb">P_abs = e σ A T₀⁴</text>

      <line x1="375" y1="205" x2="565" y2="205" stroke="#cbd5e1" stroke-width="1" />
      <text x="375" y="225" font-family="system-ui, sans-serif" font-size="12" fill="#334155">• Net Rate of Loss:</text>
      <text x="390" y="248" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#0f172a">P_net = e σ A (T⁴ - T₀⁴)</text>
      <text x="470" y="280" font-family="system-ui, sans-serif" font-size="11" fill="#475569" text-anchor="middle">For blackbody: e = 1</text>
    `
  },
  {
    name: "test5_q3_power_vs_temperature_graph.svg",
    width: 600,
    height: 360,
    content: `
      <!-- Title -->
      <text x="300" y="28" font-family="system-ui, sans-serif" font-size="16" font-weight="bold" fill="#0f172a" text-anchor="middle">Radiated Power vs Temperature: P ∝ T⁴ and Logarithmic Plot</text>
      
      <!-- Graph 1 (Left): P vs T (Linear scale) -->
      <g transform="translate(40, 60)">
        <text x="120" y="15" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#0f172a" text-anchor="middle">Power vs Temp (P vs T)</text>
        <line x1="30" y1="220" x2="220" y2="220" stroke="#0f172a" stroke-width="2" marker-end="url(#arrow-dark)" />
        <line x1="30" y1="220" x2="30" y2="30" stroke="#0f172a" stroke-width="2" marker-end="url(#arrow-dark)" />
        <text x="225" y="225" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#0f172a">T (K)</text>
        <text x="25" y="20" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#0f172a">P</text>
        
        <!-- Quartic curve P ∝ T^4 -->
        <path d="M 30 220 Q 120 215 160 140 T 200 40" fill="none" stroke="#2563eb" stroke-width="3" />
        <text x="110" y="110" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#1e40af">P ∝ T⁴</text>
      </g>

      <!-- Graph 2 (Right): log P vs log T (Straight line slope 4) -->
      <g transform="translate(320, 60)">
        <text x="120" y="15" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#0f172a" text-anchor="middle">Logarithmic Plot (log P vs log T)</text>
        <line x1="30" y1="220" x2="220" y2="220" stroke="#0f172a" stroke-width="2" marker-end="url(#arrow-dark)" />
        <line x1="30" y1="220" x2="30" y2="30" stroke="#0f172a" stroke-width="2" marker-end="url(#arrow-dark)" />
        <text x="225" y="225" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#0f172a">log T</text>
        <text x="20" y="20" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#0f172a">log P</text>
        
        <!-- Straight line -->
        <line x1="30" y1="180" x2="190" y2="40" stroke="#ef4444" stroke-width="3" />
        <text x="130" y="90" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#dc2626">Slope = 4</text>
        <text x="130" y="110" font-family="system-ui, sans-serif" font-size="11" fill="#475569">log P = 4 log T + log(eσA)</text>
      </g>

      <!-- Bottom Card: Physical Summary -->
      <rect x="80" y="300" width="440" height="40" rx="6" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1" />
      <text x="300" y="325" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#0f172a" text-anchor="middle">If Absolute Temp doubles (2T): Radiated power increases 2⁴ = 16 times!</text>
    `
  }
];

let count = 0;
for (const d of diagrams) {
  const filePath = path.join(outDir, d.name);
  fs.writeFileSync(filePath, svgWrap(d.content, d.width, d.height), 'utf8');
  console.log(`- Created [${++count}/${diagrams.length}]: ${d.name}`);
}

console.log("All 15 vector SVG diagrams successfully created!");
