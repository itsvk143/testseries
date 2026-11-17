import fs from 'fs';
import path from 'path';

const outDir = path.join(process.cwd(), 'public', 'images', 'diagrams', 'gravitation');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

console.log("=== GENERATING 18 SCIENTIFIC VECTOR SVG DIAGRAMS FOR GRAVITATION ===");

// Common SVG styling helper
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
      <path d="M 0 1.5 L 10 5 L 0 8.5 z" fill="#1e293b" />
    </marker>
    <linearGradient id="sunGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fef08a" />
      <stop offset="100%" stop-color="#f59e0b" />
    </linearGradient>
    <linearGradient id="earthGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#60a5fa" />
      <stop offset="100%" stop-color="#1d4ed8" />
    </linearGradient>
    <linearGradient id="planetGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#a78bfa" />
      <stop offset="100%" stop-color="#6d28d9" />
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="#ffffff" rx="8" />
  ${content}
</svg>`;

const diagrams = [
  // ==========================================
  // TEST 1: KEPLER'S LAWS (3 DIAGRAMS)
  // ==========================================
  {
    name: "test1_q1_kepler_ellipse_orbit.svg",
    width: 600,
    height: 360,
    content: `
      <!-- Title -->
      <text x="300" y="28" font-family="system-ui, sans-serif" font-size="16" font-weight="bold" fill="#0f172a" text-anchor="middle">Kepler's First Law: Elliptical Planetary Orbit</text>
      
      <!-- Major and minor axes -->
      <line x1="60" y1="180" x2="540" y2="180" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4" />
      <line x1="300" y1="70" x2="300" y2="290" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4" />
      
      <!-- Elliptical orbit: center (300, 180), a = 220, b = 110, c = sqrt(a^2 - b^2) = sqrt(48400 - 12100) = sqrt(36300) ≈ 190.5 -->
      <!-- Let a = 200, b = 120 -> c = sqrt(40000 - 14400) = sqrt(25600) = 160. Sun at (300 - 160, 180) = (140, 180) -->
      <ellipse cx="300" cy="180" rx="200" ry="120" fill="none" stroke="#2563eb" stroke-width="2.5" />
      
      <!-- Sun at Focus S1 (140, 180) -->
      <circle cx="140" cy="180" r="16" fill="url(#sunGrad)" stroke="#d97706" stroke-width="2" />
      <text x="140" y="215" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#b45309" text-anchor="middle">Sun (Focus S)</text>
      
      <!-- Empty Focus S2 (460, 180) -->
      <circle cx="460" cy="180" r="3" fill="#64748b" />
      <text x="460" y="200" font-family="system-ui, sans-serif" font-size="11" fill="#64748b" text-anchor="middle">Focus S'</text>

      <!-- Perihelion P at (100, 180) -->
      <circle cx="100" cy="180" r="8" fill="url(#earthGrad)" stroke="#1e40af" stroke-width="1.5" />
      <text x="80" y="165" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#1e3a8a" text-anchor="middle">Perihelion (P)</text>
      <!-- Velocity vector at Perihelion (tangent points downwards) -->
      <line x1="100" y1="180" x2="100" y2="250" stroke="#ef4444" stroke-width="2" marker-end="url(#arrow-red)" />
      <text x="80" y="240" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#dc2626">vp</text>

      <!-- Aphelion A at (500, 180) -->
      <circle cx="500" cy="180" r="8" fill="url(#earthGrad)" stroke="#1e40af" stroke-width="1.5" />
      <text x="515" y="165" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#1e3a8a" text-anchor="middle">Aphelion (A)</text>
      <!-- Velocity vector at Aphelion (tangent points upwards) -->
      <line x1="500" y1="180" x2="500" y2="135" stroke="#ef4444" stroke-width="2" marker-end="url(#arrow-red)" />
      <text x="515" y="140" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#dc2626">va</text>

      <!-- Distances rp and ra annotations -->
      <line x1="100" y1="270" x2="140" y2="270" stroke="#0f172a" stroke-width="1.5" marker-start="url(#arrow-dark)" marker-end="url(#arrow-dark)" />
      <text x="120" y="290" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#0f172a" text-anchor="middle">rp</text>

      <line x1="140" y1="310" x2="500" y2="310" stroke="#0f172a" stroke-width="1.5" marker-start="url(#arrow-dark)" marker-end="url(#arrow-dark)" />
      <text x="320" y="330" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#0f172a" text-anchor="middle">ra</text>

      <!-- Semi-major axis formula box -->
      <rect x="220" y="42" width="280" height="30" rx="5" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1" />
      <text x="360" y="62" font-family="system-ui, sans-serif" font-size="12" fill="#334155" text-anchor="middle">Semi-major axis a = (rp + ra)/2,   vp rp = va ra</text>
    `
  },
  {
    name: "test1_q2_areal_velocity_sectors.svg",
    width: 600,
    height: 360,
    content: `
      <!-- Title -->
      <text x="300" y="28" font-family="system-ui, sans-serif" font-size="16" font-weight="bold" fill="#0f172a" text-anchor="middle">Kepler's Second Law: Law of Areas (Areal Velocity)</text>
      
      <!-- Ellipse: a = 200, b = 120, Sun at (140, 180) -->
      <ellipse cx="300" cy="180" rx="200" ry="120" fill="none" stroke="#64748b" stroke-width="2" />

      <!-- Sector 1 near perihelion: Sun (140, 180) to P1(108, 140) to P2(108, 220) -->
      <path d="M 140 180 L 108 140 A 200 120 0 0 0 108 220 Z" fill="#93c5fd" fill-opacity="0.6" stroke="#2563eb" stroke-width="1.5" />
      <text x="90" y="185" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#1e40af">Area A1</text>
      <text x="65" y="135" font-family="system-ui, sans-serif" font-size="12" fill="#1e3a8a">Δt</text>

      <!-- Sector 2 near aphelion: Sun (140, 180) to A1(490, 150) to A2(490, 210) -->
      <path d="M 140 180 L 490 150 A 200 120 0 0 1 490 210 Z" fill="#86efac" fill-opacity="0.6" stroke="#16a34a" stroke-width="1.5" />
      <text x="430" y="185" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#15803d">Area A2</text>
      <text x="510" y="185" font-family="system-ui, sans-serif" font-size="12" fill="#15803d">Δt</text>

      <!-- Sun -->
      <circle cx="140" cy="180" r="14" fill="url(#sunGrad)" stroke="#d97706" stroke-width="2" />
      <text x="140" y="210" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#b45309" text-anchor="middle">Sun (S)</text>

      <!-- Points -->
      <circle cx="108" cy="140" r="4" fill="#1e40af" />
      <text x="100" y="130" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#1e40af">P1</text>
      <circle cx="108" cy="220" r="4" fill="#1e40af" />
      <text x="100" y="235" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#1e40af">P2</text>

      <circle cx="490" cy="150" r="4" fill="#15803d" />
      <text x="505" y="145" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#15803d">A1</text>
      <circle cx="490" cy="210" r="4" fill="#15803d" />
      <text x="505" y="225" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#15803d">A2</text>

      <!-- Explanatory Box -->
      <rect x="150" y="280" width="300" height="60" rx="8" fill="#f8fafc" stroke="#94a3b8" stroke-width="1.5" />
      <text x="300" y="302" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#0f172a" text-anchor="middle">Equal time Δt ⇒ Area A1 = Area A2</text>
      <text x="300" y="325" font-family="system-ui, sans-serif" font-size="12" fill="#334155" text-anchor="middle">dA/dt = L / (2m) = Constant (Angular Momentum Conserved)</text>
    `
  },
  {
    name: "test1_q3_t2_vs_r3_graph.svg",
    width: 600,
    height: 360,
    content: `
      <!-- Title -->
      <text x="300" y="28" font-family="system-ui, sans-serif" font-size="16" font-weight="bold" fill="#0f172a" text-anchor="middle">Kepler's Third Law: T² vs r³ Straight-Line Relation</text>
      
      <!-- Axes -->
      <line x1="80" y1="300" x2="540" y2="300" stroke="#0f172a" stroke-width="2" marker-end="url(#arrow-dark)" />
      <line x1="80" y1="300" x2="80" y2="50" stroke="#0f172a" stroke-width="2" marker-end="url(#arrow-dark)" />
      <text x="550" y="305" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#0f172a">r³ (or a³)</text>
      <text x="40" y="45" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#0f172a">T²</text>
      
      <!-- Linear fit line passing through origin (80, 300) to (500, 70) -->
      <line x1="80" y1="300" x2="500" y2="70" stroke="#2563eb" stroke-width="3" />
      
      <!-- Planets marked -->
      <!-- Mercury -->
      <circle cx="130" cy="273" r="5" fill="#f59e0b" stroke="#b45309" stroke-width="1.5" />
      <text x="145" y="278" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#334155">Mercury</text>
      <!-- Venus -->
      <circle cx="190" cy="240" r="5" fill="#f59e0b" stroke="#b45309" stroke-width="1.5" />
      <text x="205" y="245" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#334155">Venus</text>
      <!-- Earth -->
      <circle cx="260" cy="203" r="6" fill="#3b82f6" stroke="#1d4ed8" stroke-width="1.5" />
      <text x="275" y="208" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#1e3a8a">Earth (1 yr, 1 AU)</text>
      <!-- Mars -->
      <circle cx="340" cy="160" r="5" fill="#ef4444" stroke="#b91c1c" stroke-width="1.5" />
      <text x="355" y="165" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#334155">Mars</text>
      <!-- Jupiter -->
      <circle cx="450" cy="98" r="6" fill="#d97706" stroke="#92400e" stroke-width="1.5" />
      <text x="465" y="103" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#334155">Jupiter</text>

      <!-- Angle theta and slope box -->
      <path d="M 140 300 A 60 60 0 0 0 134 271" fill="none" stroke="#64748b" stroke-width="1.5" />
      <text x="150" y="290" font-family="system-ui, sans-serif" font-size="12" fill="#475569">θ</text>

      <rect x="310" y="220" width="240" height="60" rx="6" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1.5" />
      <text x="430" y="242" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#1e40af" text-anchor="middle">T² = [4π² / (GM)] · r³</text>
      <text x="430" y="265" font-family="system-ui, sans-serif" font-size="12" fill="#1e3a8a" text-anchor="middle">Slope = tan θ = 4π² / (GM)</text>
    `
  },

  // ==========================================
  // TEST 2: NEWTON'S LAW OF GRAVITATION (3 DIAGRAMS)
  // ==========================================
  {
    name: "test2_q1_two_masses_gravity.svg",
    width: 600,
    height: 360,
    content: `
      <!-- Title -->
      <text x="300" y="28" font-family="system-ui, sans-serif" font-size="16" font-weight="bold" fill="#0f172a" text-anchor="middle">Newton's Universal Law of Gravitation (Action-Reaction Pair)</text>
      
      <!-- Mass 1 at (150, 180) -->
      <circle cx="150" cy="180" r="30" fill="url(#planetGrad)" stroke="#4c1d95" stroke-width="2" />
      <text x="150" y="185" font-family="system-ui, sans-serif" font-size="16" font-weight="bold" fill="#ffffff" text-anchor="middle">m1</text>

      <!-- Mass 2 at (450, 180) -->
      <circle cx="450" cy="180" r="22" fill="url(#earthGrad)" stroke="#1e3a8a" stroke-width="2" />
      <text x="450" y="185" font-family="system-ui, sans-serif" font-size="15" font-weight="bold" fill="#ffffff" text-anchor="middle">m2</text>

      <!-- Center-to-center line -->
      <line x1="150" y1="180" x2="450" y2="180" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4" />

      <!-- Force F12 on m1 towards m2 -->
      <line x1="150" y1="180" x2="230" y2="180" stroke="#ef4444" stroke-width="3" marker-end="url(#arrow-red)" />
      <text x="210" y="165" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#dc2626">F₁₂</text>

      <!-- Force F21 on m2 towards m1 -->
      <line x1="450" y1="180" x2="370" y2="180" stroke="#ef4444" stroke-width="3" marker-end="url(#arrow-red)" />
      <text x="375" y="165" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#dc2626">F₂₁</text>

      <!-- Distance r dimension line -->
      <line x1="150" y1="250" x2="450" y2="250" stroke="#0f172a" stroke-width="2" marker-start="url(#arrow-dark)" marker-end="url(#arrow-dark)" />
      <line x1="150" y1="215" x2="150" y2="265" stroke="#64748b" stroke-width="1" />
      <line x1="450" y1="205" x2="450" y2="265" stroke="#64748b" stroke-width="1" />
      <text x="300" y="275" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#0f172a" text-anchor="middle">Distance r</text>

      <!-- Mathematical formula card -->
      <rect x="130" y="55" width="340" height="55" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
      <text x="300" y="78" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#0f172a" text-anchor="middle">F = G · (m₁ · m₂) / r²</text>
      <text x="300" y="98" font-family="system-ui, sans-serif" font-size="12" fill="#475569" text-anchor="middle">F₁₂ = -F₂₁   (Newton's Third Law in Central Force Field)</text>
    `
  },
  {
    name: "test2_q2_three_masses_triangle.svg",
    width: 600,
    height: 360,
    content: `
      <!-- Title -->
      <text x="300" y="28" font-family="system-ui, sans-serif" font-size="16" font-weight="bold" fill="#0f172a" text-anchor="middle">Superposition of Gravitational Forces (Equilateral Triangle)</text>
      
      <!-- Triangle vertices: A(300, 70), B(160, 270), C(440, 270) -->
      <!-- Centroid G = ( (300+160+440)/3, (70+270+270)/3 ) = (300, 203.3) -->
      <polygon points="300,70 160,270 440,270" fill="#f1f5f9" stroke="#64748b" stroke-width="2" />
      
      <!-- Centroid G -->
      <circle cx="300" cy="203.3" r="8" fill="#ef4444" stroke="#991b1b" stroke-width="1.5" />
      <text x="325" y="208" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#b91c1c">m₀ (at G)</text>

      <!-- Force vectors from G to A, B, C -->
      <line x1="300" y1="203.3" x2="300" y2="120" stroke="#ef4444" stroke-width="2" marker-end="url(#arrow-red)" />
      <text x="310" y="145" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#dc2626">FA</text>

      <line x1="300" y1="203.3" x2="215" y2="245" stroke="#ef4444" stroke-width="2" marker-end="url(#arrow-red)" />
      <text x="235" y="225" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#dc2626">FB</text>

      <line x1="300" y1="203.3" x2="385" y2="245" stroke="#ef4444" stroke-width="2" marker-end="url(#arrow-red)" />
      <text x="355" y="225" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#dc2626">FC</text>

      <!-- Masses at vertices -->
      <circle cx="300" cy="70" r="16" fill="url(#planetGrad)" stroke="#4c1d95" stroke-width="2" />
      <text x="300" y="75" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#ffffff" text-anchor="middle">m</text>
      <text x="300" y="48" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#0f172a" text-anchor="middle">Vertex A</text>

      <circle cx="160" cy="270" r="16" fill="url(#planetGrad)" stroke="#4c1d95" stroke-width="2" />
      <text x="160" y="275" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#ffffff" text-anchor="middle">m</text>
      <text x="130" y="295" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#0f172a">B</text>

      <circle cx="440" cy="270" r="16" fill="url(#planetGrad)" stroke="#4c1d95" stroke-width="2" />
      <text x="440" y="275" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#ffffff" text-anchor="middle">m</text>
      <text x="460" y="295" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#0f172a">C</text>

      <!-- Triangle side L -->
      <text x="300" y="295" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#334155" text-anchor="middle">Side L</text>

      <!-- Explanatory formula box -->
      <rect x="70" y="315" width="460" height="35" rx="6" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1" />
      <text x="300" y="337" font-family="system-ui, sans-serif" font-size="12" fill="#0f172a" text-anchor="middle">At Centroid: FA + FB + FC = 0    |    On Vertex A: F_net = √3 · (G m² / L²)</text>
    `
  },
  {
    name: "test2_q3_spherical_shell_field.svg",
    width: 600,
    height: 360,
    content: `
      <!-- Title -->
      <text x="300" y="28" font-family="system-ui, sans-serif" font-size="16" font-weight="bold" fill="#0f172a" text-anchor="middle">Gravitational Field Intensity E(r) of a Thin Spherical Shell</text>
      
      <!-- Graph axes -->
      <line x1="80" y1="280" x2="540" y2="280" stroke="#0f172a" stroke-width="2" marker-end="url(#arrow-dark)" />
      <line x1="80" y1="280" x2="80" y2="50" stroke="#0f172a" stroke-width="2" marker-end="url(#arrow-dark)" />
      <text x="550" y="285" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#0f172a">r</text>
      <text x="50" y="45" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#0f172a">E(r)</text>
      <text x="70" y="295" font-family="system-ui, sans-serif" font-size="12" fill="#64748b">0</text>

      <!-- Shell radius R marker at x = 240 -->
      <line x1="240" y1="280" x2="240" y2="90" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4" />
      <text x="240" y="300" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#0f172a" text-anchor="middle">r = R</text>

      <!-- Inside shell (r < R): E = 0 along x-axis from x=80 to x=240 -->
      <line x1="80" y1="280" x2="240" y2="280" stroke="#ef4444" stroke-width="4" />
      <circle cx="240" cy="280" r="4" fill="#ffffff" stroke="#ef4444" stroke-width="2" />
      <text x="160" y="260" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#dc2626" text-anchor="middle">E = 0 (Inside)</text>

      <!-- Discontinuous jump at r = R to E = GM / R^2 at (240, 90) -->
      <circle cx="240" cy="90" r="5" fill="#2563eb" stroke="#1d4ed8" stroke-width="1.5" />
      <text x="235" y="80" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#1e40af" text-anchor="end">GM / R²</text>
      <line x1="80" y1="90" x2="240" y2="90" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="3,3" />

      <!-- Outside shell: inverse square curve from (240, 90) to (520, 240) -->
      <path d="M 240 90 Q 320 200 520 255" fill="none" stroke="#2563eb" stroke-width="3" />
      <text x="400" y="160" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#1e40af">E ∝ 1/r² (Outside)</text>

      <!-- Shell illustration thumbnail in top right -->
      <g transform="translate(430, 45)">
        <circle cx="45" cy="45" r="35" fill="none" stroke="#64748b" stroke-width="4" stroke-dasharray="2,2" />
        <circle cx="45" cy="45" r="3" fill="#0f172a" />
        <line x1="45" y1="45" x2="70" y2="20" stroke="#0f172a" stroke-width="1.5" />
        <text x="60" y="40" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#0f172a">R</text>
        <text x="45" y="95" font-family="system-ui, sans-serif" font-size="10" fill="#64748b" text-anchor="middle">Spherical Shell (M, R)</text>
      </g>

      <rect x="120" y="315" width="360" height="32" rx="6" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1" />
      <text x="300" y="335" font-family="system-ui, sans-serif" font-size="12" fill="#334155" text-anchor="middle">Inside: E(r) = 0   |   Outside: E(r) = GM / r²</text>
    `
  },

  // ==========================================
  // TEST 3: GRAVITATIONAL POTENTIAL ENERGY (3 DIAGRAMS)
  // ==========================================
  {
    name: "test3_q1_u_vs_r_graph.svg",
    width: 600,
    height: 360,
    content: `
      <!-- Title -->
      <text x="300" y="28" font-family="system-ui, sans-serif" font-size="16" font-weight="bold" fill="#0f172a" text-anchor="middle">Gravitational Potential Energy U(r) vs Distance r</text>
      
      <!-- Axes: Origin (80, 80) since U is negative (4th quadrant) -->
      <line x1="80" y1="80" x2="540" y2="80" stroke="#0f172a" stroke-width="2" marker-end="url(#arrow-dark)" />
      <line x1="80" y1="80" x2="80" y2="330" stroke="#0f172a" stroke-width="2" marker-end="url(#arrow-dark)" />
      <text x="550" y="85" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#0f172a">r</text>
      <text x="80" y="348" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#0f172a">U(r)</text>
      <text x="65" y="75" font-family="system-ui, sans-serif" font-size="12" fill="#64748b">0</text>

      <!-- Earth surface at r = R (x = 180) -->
      <line x1="180" y1="80" x2="180" y2="280" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4" />
      <text x="180" y="65" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#0f172a" text-anchor="middle">r = R (Surface)</text>

      <!-- Curve U(r) = -GMm/r: from (180, 270) to (520, 110) -->
      <path d="M 180 270 Q 240 135 520 100" fill="none" stroke="#2563eb" stroke-width="3" />
      
      <!-- Potential energy value at surface -->
      <circle cx="180" cy="270" r="5" fill="#ef4444" stroke="#b91c1c" stroke-width="1.5" />
      <line x1="80" y1="270" x2="180" y2="270" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="3,3" />
      <text x="70" y="275" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#dc2626" text-anchor="end">-GMm / R</text>

      <!-- Asymptote explanation -->
      <text x="420" y="65" font-family="system-ui, sans-serif" font-size="12" fill="#2563eb">U → 0 as r → ∞</text>
      <line x1="420" y1="70" x2="490" y2="78" stroke="#2563eb" stroke-width="1" marker-end="url(#arrow)" />

      <!-- Formula card -->
      <rect x="230" y="160" width="280" height="85" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
      <text x="370" y="185" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#0f172a" text-anchor="middle">U(r) = - (G M m) / r</text>
      <text x="370" y="208" font-family="system-ui, sans-serif" font-size="12" fill="#334155" text-anchor="middle">Work done to escape = + (G M m) / R</text>
      <text x="370" y="230" font-family="system-ui, sans-serif" font-size="11" fill="#64748b" text-anchor="middle">Binding Energy = -U = + (G M m) / R</text>
    `
  },
  {
    name: "test3_q2_solid_sphere_potential.svg",
    width: 600,
    height: 360,
    content: `
      <!-- Title -->
      <text x="300" y="28" font-family="system-ui, sans-serif" font-size="16" font-weight="bold" fill="#0f172a" text-anchor="middle">Gravitational Potential V(r) of a Uniform Solid Sphere</text>
      
      <!-- Axes: Origin (80, 70), negative potential downward -->
      <line x1="80" y1="70" x2="540" y2="70" stroke="#0f172a" stroke-width="2" marker-end="url(#arrow-dark)" />
      <line x1="80" y1="70" x2="80" y2="330" stroke="#0f172a" stroke-width="2" marker-end="url(#arrow-dark)" />
      <text x="550" y="75" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#0f172a">r</text>
      <text x="75" y="348" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#0f172a">V(r)</text>
      <text x="65" y="65" font-family="system-ui, sans-serif" font-size="12" fill="#64748b">0</text>

      <!-- Center (r = 0): V_center = -1.5 GM/R at (80, 290) -->
      <circle cx="80" cy="290" r="5" fill="#ef4444" stroke="#991b1b" stroke-width="1.5" />
      <text x="70" y="295" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#dc2626" text-anchor="end">-1.5 GM/R</text>

      <!-- Surface (r = R): x = 240, V_surface = -GM/R at (240, 215) -->
      <line x1="240" y1="70" x2="240" y2="230" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4" />
      <text x="240" y="55" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#0f172a" text-anchor="middle">r = R (Surface)</text>
      <circle cx="240" cy="215" r="5" fill="#2563eb" stroke="#1e40af" stroke-width="1.5" />
      <line x1="80" y1="215" x2="240" y2="215" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="3,3" />
      <text x="70" y="220" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#2563eb" text-anchor="end">-GM/R</text>

      <!-- Parabolic inside curve: from (80, 290) to (240, 215) -->
      <path d="M 80 290 Q 180 280 240 215" fill="none" stroke="#ef4444" stroke-width="3" />
      <text x="145" y="250" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#dc2626">Parabolic (r ≤ R)</text>

      <!-- Hyperbolic outside curve: from (240, 215) to (520, 105) -->
      <path d="M 240 215 Q 320 120 520 100" fill="none" stroke="#2563eb" stroke-width="3" />
      <text x="360" y="140" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#1e40af">Hyperbolic ∝ -1/r (r ≥ R)</text>

      <!-- Info Box -->
      <rect x="230" y="255" width="310" height="65" rx="6" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1" />
      <text x="385" y="278" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#0f172a" text-anchor="middle">V_center = (3/2) · V_surface</text>
      <text x="385" y="302" font-family="system-ui, sans-serif" font-size="11" fill="#475569" text-anchor="middle">Inside: V(r) = - (GM / 2R³) · (3R² - r²)</text>
    `
  },
  {
    name: "test3_q3_four_mass_square_pe.svg",
    width: 600,
    height: 360,
    content: `
      <!-- Title -->
      <text x="300" y="28" font-family="system-ui, sans-serif" font-size="16" font-weight="bold" fill="#0f172a" text-anchor="middle">Gravitational Potential Energy of a 4-Mass Square Configuration</text>
      
      <!-- Square: side a = 160. Corners: (140, 90), (300, 90), (300, 250), (140, 250) -->
      <rect x="140" y="90" width="160" height="160" fill="#f8fafc" stroke="#2563eb" stroke-width="2.5" />
      
      <!-- Diagonals -->
      <line x1="140" y1="90" x2="300" y2="250" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4" />
      <line x1="300" y1="90" x2="140" y2="250" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4" />
      <text x="230" y="160" font-family="system-ui, sans-serif" font-size="12" fill="#64748b">√2 a</text>

      <!-- Side labels -->
      <text x="220" y="80" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#1e40af" text-anchor="middle">Side a</text>
      <text x="120" y="175" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#1e40af" text-anchor="middle">a</text>
      
      <!-- Masses at 4 corners -->
      <circle cx="140" cy="90" r="16" fill="url(#earthGrad)" stroke="#1e3a8a" stroke-width="2" />
      <text x="140" y="95" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#ffffff" text-anchor="middle">m</text>

      <circle cx="300" cy="90" r="16" fill="url(#earthGrad)" stroke="#1e3a8a" stroke-width="2" />
      <text x="300" y="95" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#ffffff" text-anchor="middle">m</text>

      <circle cx="300" cy="250" r="16" fill="url(#earthGrad)" stroke="#1e3a8a" stroke-width="2" />
      <text x="300" y="255" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#ffffff" text-anchor="middle">m</text>

      <circle cx="140" cy="250" r="16" fill="url(#earthGrad)" stroke="#1e3a8a" stroke-width="2" />
      <text x="140" y="255" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#ffffff" text-anchor="middle">m</text>

      <!-- Center point O -->
      <circle cx="220" cy="170" r="4" fill="#ef4444" />
      <text x="220" y="195" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#b91c1c" text-anchor="middle">Center O</text>

      <!-- Right Card: Pairwise breakdown -->
      <rect x="340" y="80" width="240" height="200" rx="8" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1.5" />
      <text x="460" y="105" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#1e3a8a" text-anchor="middle">Total Pairs = ⁴C₂ = 6</text>
      
      <text x="360" y="135" font-family="system-ui, sans-serif" font-size="12" fill="#334155">• 4 Sides of length a:</text>
      <text x="380" y="155" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#1e40af">U_sides = - 4 (G m² / a)</text>
      
      <text x="360" y="185" font-family="system-ui, sans-serif" font-size="12" fill="#334155">• 2 Diagonals of length √2 a:</text>
      <text x="380" y="205" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#1e40af">U_diag = - 2 (G m² / √2 a)</text>
      
      <line x1="355" y1="225" x2="565" y2="225" stroke="#93c5fd" stroke-width="1" />
      <text x="460" y="250" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#1e3a8a" text-anchor="middle">U_total = - (G m² / a) · (4 + √2)</text>
    `
  },

  // ==========================================
  // TEST 4: ESCAPE VELOCITY (3 DIAGRAMS)
  // ==========================================
  {
    name: "test4_q1_escape_trajectory.svg",
    width: 600,
    height: 360,
    content: `
      <!-- Title -->
      <text x="300" y="28" font-family="system-ui, sans-serif" font-size="16" font-weight="bold" fill="#0f172a" text-anchor="middle">Projection Trajectories and Escape Velocity from Planet Surface</text>
      
      <!-- Earth on left: center (120, 240), R = 70 -->
      <circle cx="120" cy="240" r="70" fill="url(#earthGrad)" stroke="#1d4ed8" stroke-width="2" />
      <text x="120" y="245" font-family="system-ui, sans-serif" font-size="15" font-weight="bold" fill="#ffffff" text-anchor="middle">Earth</text>
      
      <!-- Launch point at top of Earth (120, 170) -->
      <circle cx="120" cy="170" r="5" fill="#ef4444" stroke="#991b1b" stroke-width="1.5" />
      <text x="80" y="165" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#b91c1c">Launch</text>

      <!-- Trajectory 1: v < vo (Falls back to Earth) -->
      <path d="M 120 170 Q 180 170 185 220" fill="none" stroke="#64748b" stroke-width="2" stroke-dasharray="3,3" />
      <text x="195" y="200" font-family="system-ui, sans-serif" font-size="11" fill="#475569">v &lt; vo (Falls back)</text>

      <!-- Trajectory 2: v = vo (Circular Orbit) -->
      <ellipse cx="120" cy="240" rx="95" ry="70" fill="none" stroke="#10b981" stroke-width="2" />
      <text x="120" y="325" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#15803d" text-anchor="middle">v = vo (Circular Orbit)</text>

      <!-- Trajectory 3: vo < v < ve (Elliptical Orbit) -->
      <ellipse cx="170" cy="240" rx="145" ry="75" fill="none" stroke="#3b82f6" stroke-width="2" />
      <text x="290" y="315" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#1d4ed8">vo &lt; v &lt; ve (Ellipse)</text>

      <!-- Trajectory 4: v = ve (Parabola - Escape) -->
      <path d="M 120 170 Q 300 170 480 90" fill="none" stroke="#f59e0b" stroke-width="2.5" />
      <text x="490" y="85" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#d97706">v = ve = √(2gR) (Parabola)</text>

      <!-- Trajectory 5: v > ve (Hyperbola - Escapes with residual speed) -->
      <path d="M 120 170 Q 280 140 480 50" fill="none" stroke="#ef4444" stroke-width="2.5" />
      <text x="490" y="50" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#dc2626">v &gt; ve (Hyperbola, v_∞ &gt; 0)</text>

      <!-- Legend & Info card -->
      <rect x="310" y="180" width="270" height="90" rx="6" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
      <text x="445" y="202" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#0f172a" text-anchor="middle">Escape Speed: ve = √(2GM/R) = √(2gR)</text>
      <text x="445" y="224" font-family="system-ui, sans-serif" font-size="12" fill="#334155" text-anchor="middle">Earth: ve ≈ 11.2 km/s</text>
      <text x="445" y="246" font-family="system-ui, sans-serif" font-size="11" fill="#475569" text-anchor="middle">Independent of angle of projection θ (θ ≠ 0°)</text>
    `
  },
  {
    name: "test4_q2_escape_from_height_h.svg",
    width: 600,
    height: 360,
    content: `
      <!-- Title -->
      <text x="300" y="28" font-family="system-ui, sans-serif" font-size="16" font-weight="bold" fill="#0f172a" text-anchor="middle">Escape Velocity from Altitude h above Planet Surface</text>
      
      <!-- Planet Earth: center (300, 310), R = 150 -->
      <circle cx="300" cy="310" r="150" fill="url(#earthGrad)" stroke="#1d4ed8" stroke-width="2" />
      <text x="300" y="320" font-family="system-ui, sans-serif" font-size="16" font-weight="bold" fill="#ffffff" text-anchor="middle">Earth (M, R)</text>

      <!-- Earth surface at top (300, 160) -->
      <circle cx="300" cy="160" r="4" fill="#0f172a" />
      <text x="270" y="165" font-family="system-ui, sans-serif" font-size="12" fill="#0f172a">Surface</text>

      <!-- Launch altitude h at (300, 80) -->
      <line x1="300" y1="160" x2="300" y2="80" stroke="#ef4444" stroke-width="2" marker-start="url(#arrow-red)" marker-end="url(#arrow-red)" />
      <text x="315" y="125" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#dc2626">Altitude h</text>

      <!-- Projectile at height h -->
      <circle cx="300" cy="80" r="7" fill="#f59e0b" stroke="#b45309" stroke-width="1.5" />
      
      <!-- Escape velocity vector at height h -->
      <line x1="300" y1="80" x2="410" y2="40" stroke="#10b981" stroke-width="3" marker-end="url(#arrow-green)" />
      <text x="390" y="30" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#15803d">v_e(h)</text>

      <!-- Left Card: Formulas -->
      <rect x="30" y="60" width="230" height="130" rx="8" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1.5" />
      <text x="145" y="85" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#1e40af" text-anchor="middle">Energy Conservation:</text>
      <text x="145" y="110" font-family="system-ui, sans-serif" font-size="12" fill="#1e3a8a" text-anchor="middle">½ m ve² - GMm / (R+h) = 0</text>
      <line x1="45" y1="125" x2="245" y2="125" stroke="#bfdbfe" stroke-width="1" />
      <text x="145" y="148" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#1e40af" text-anchor="middle">ve(h) = √[2GM / (R+h)]</text>
      <text x="145" y="170" font-family="system-ui, sans-serif" font-size="12" fill="#334155" text-anchor="middle">= ve(0) · √[R / (R+h)]</text>

      <!-- Right Card: Special Case h = R -->
      <rect x="350" y="180" width="220" height="70" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
      <text x="460" y="205" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#0f172a" text-anchor="middle">For h = R (Altitude = Radius):</text>
      <text x="460" y="230" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#dc2626" text-anchor="middle">ve(R) = ve / √2 ≈ 7.92 km/s</text>
    `
  },
  {
    name: "test4_q3_atmosphere_retention.svg",
    width: 600,
    height: 360,
    content: `
      <!-- Title -->
      <text x="300" y="28" font-family="system-ui, sans-serif" font-size="16" font-weight="bold" fill="#0f172a" text-anchor="middle">Atmospheric Retention: Maxwell Speed Distribution vs Escape Speed</text>
      
      <!-- Graph Axes -->
      <line x1="60" y1="280" x2="540" y2="280" stroke="#0f172a" stroke-width="2" marker-end="url(#arrow-dark)" />
      <line x1="60" y1="280" x2="60" y2="50" stroke="#0f172a" stroke-width="2" marker-end="url(#arrow-dark)" />
      <text x="550" y="285" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#0f172a">v (speed)</text>
      <text x="40" y="45" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#0f172a">N(v)</text>

      <!-- Maxwell Distribution Curve: peak around x = 160 -->
      <path d="M 60 280 Q 110 90 160 90 T 260 220 T 500 278" fill="none" stroke="#2563eb" stroke-width="2.5" />
      <text x="160" y="80" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#2563eb" text-anchor="middle">v_rms of gas molecules</text>
      <line x1="160" y1="90" x2="160" y2="280" stroke="#93c5fd" stroke-width="1.5" stroke-dasharray="3,3" />

      <!-- Moon Escape Velocity at x = 200 (ve ≈ 2.38 km/s) -->
      <line x1="200" y1="280" x2="200" y2="60" stroke="#ef4444" stroke-width="2" stroke-dasharray="4,4" />
      <text x="205" y="75" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#dc2626">v_e (Moon) = 2.4 km/s</text>

      <!-- Escaping fraction shaded for Moon -->
      <text x="250" y="200" font-family="system-ui, sans-serif" font-size="11" fill="#dc2626">Molecules escape Moon</text>
      <text x="250" y="215" font-family="system-ui, sans-serif" font-size="11" fill="#dc2626">(v_rms &gt; v_e / 5)</text>

      <!-- Earth Escape Velocity at x = 480 (ve ≈ 11.2 km/s) -->
      <line x1="480" y1="280" x2="480" y2="60" stroke="#10b981" stroke-width="2" stroke-dasharray="4,4" />
      <text x="475" y="75" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#15803d" text-anchor="end">v_e (Earth) = 11.2 km/s</text>

      <!-- Comparison Summary Box -->
      <rect x="70" y="300" width="460" height="45" rx="6" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1" />
      <text x="300" y="318" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#0f172a" text-anchor="middle">Moon: v_rms &gt; v_e ⇒ Gas molecules escape into space (No atmosphere)</text>
      <text x="300" y="335" font-family="system-ui, sans-serif" font-size="11" fill="#334155" text-anchor="middle">Earth: v_rms ≪ v_e ⇒ Gas molecules (N₂, O₂) remain permanently trapped</text>
    `
  },

  // ==========================================
  // TEST 5: VARIATION OF G (3 DIAGRAMS)
  // ==========================================
  {
    name: "test5_q1_g_vs_r_graph.svg",
    width: 600,
    height: 360,
    content: `
      <!-- Title -->
      <text x="300" y="28" font-family="system-ui, sans-serif" font-size="16" font-weight="bold" fill="#0f172a" text-anchor="middle">Variation of Acceleration Due to Gravity g with Distance r</text>
      
      <!-- Graph Axes -->
      <line x1="80" y1="280" x2="540" y2="280" stroke="#0f172a" stroke-width="2" marker-end="url(#arrow-dark)" />
      <line x1="80" y1="280" x2="80" y2="50" stroke="#0f172a" stroke-width="2" marker-end="url(#arrow-dark)" />
      <text x="550" y="285" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#0f172a">r</text>
      <text x="55" y="45" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#0f172a">g(r)</text>
      <text x="68" y="295" font-family="system-ui, sans-serif" font-size="12" fill="#64748b">0</text>

      <!-- Peak at surface r = R (x = 240, y = 90) -->
      <line x1="240" y1="280" x2="240" y2="90" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,4" />
      <text x="240" y="300" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#0f172a" text-anchor="middle">r = R (Surface)</text>

      <!-- Peak value g0 = GM/R^2 -->
      <circle cx="240" cy="90" r="5" fill="#ef4444" stroke="#991b1b" stroke-width="1.5" />
      <line x1="80" y1="90" x2="240" y2="90" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="3,3" />
      <text x="70" y="95" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#dc2626" text-anchor="end">g₀ = GM/R²</text>

      <!-- Inside Earth (r <= R): Straight line from (80, 280) to (240, 90) -->
      <line x1="80" y1="280" x2="240" y2="90" stroke="#2563eb" stroke-width="3" />
      <text x="140" y="160" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#1e40af">g ∝ r</text>
      <text x="130" y="180" font-family="system-ui, sans-serif" font-size="11" fill="#1e3a8a">(Inside Earth)</text>

      <!-- Outside Earth (r >= R): Inverse square curve from (240, 90) to (520, 240) -->
      <path d="M 240 90 Q 320 200 520 240" fill="none" stroke="#2563eb" stroke-width="3" />
      <text x="360" y="150" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#1e40af">g ∝ 1/r²</text>
      <text x="350" y="170" font-family="system-ui, sans-serif" font-size="11" fill="#1e3a8a">(Outside Earth)</text>

      <!-- Center note -->
      <text x="90" y="265" font-family="system-ui, sans-serif" font-size="11" fill="#64748b">At Center (r=0): g = 0</text>

      <!-- Summary box -->
      <rect x="260" y="195" width="280" height="65" rx="6" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1" />
      <text x="400" y="217" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#0f172a" text-anchor="middle">At depth d: g_d = g · (1 - d/R)</text>
      <text x="400" y="240" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#0f172a" text-anchor="middle">At height h: g_h = g / (1 + h/R)²</text>
    `
  },
  {
    name: "test5_q2_earth_depth_height.svg",
    width: 600,
    height: 360,
    content: `
      <!-- Title -->
      <text x="300" y="28" font-family="system-ui, sans-serif" font-size="16" font-weight="bold" fill="#0f172a" text-anchor="middle">Variation of g with Altitude (Height h) and Depth (d)</text>
      
      <!-- Earth circle: center (200, 200), radius R = 110 -->
      <circle cx="200" cy="200" r="110" fill="url(#earthGrad)" stroke="#1d4ed8" stroke-width="2" />
      <circle cx="200" cy="200" r="3" fill="#ffffff" />
      <text x="200" y="220" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">Center O</text>

      <!-- Radius R line -->
      <line x1="200" y1="200" x2="280" y2="125" stroke="#ffffff" stroke-width="1.5" stroke-dasharray="3,3" />
      <text x="250" y="170" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#ffffff">Radius R</text>

      <!-- Height h above surface: surface at (200, 90), height point at (200, 45) -->
      <line x1="200" y1="90" x2="200" y2="45" stroke="#ef4444" stroke-width="2" marker-start="url(#arrow-red)" marker-end="url(#arrow-red)" />
      <circle cx="200" cy="45" r="5" fill="#ef4444" />
      <text x="215" y="65" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#dc2626">Height h</text>

      <!-- Depth d below surface: surface at (90, 200), inner circle radius R - d -->
      <circle cx="200" cy="200" r="70" fill="none" stroke="#fef08a" stroke-width="1.5" stroke-dasharray="4,4" />
      <line x1="90" y1="200" x2="130" y2="200" stroke="#fef08a" stroke-width="2" marker-start="url(#arrow)" marker-end="url(#arrow)" />
      <text x="110" y="190" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#fef08a">Depth d</text>

      <!-- Right Side Comparative Table Card -->
      <rect x="330" y="50" width="250" height="270" rx="8" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1.5" />
      <text x="455" y="78" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#1e40af" text-anchor="middle">Comparative Formulas</text>

      <!-- Height section -->
      <text x="350" y="110" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#0f172a">• At Height h (exact):</text>
      <text x="365" y="130" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#1e40af">g_h = g · [R / (R+h)]²</text>
      <text x="350" y="155" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#0f172a">• For small h (h ≪ R):</text>
      <text x="365" y="175" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#1e40af">g_h ≈ g · [1 - 2h/R]</text>
      <text x="365" y="195" font-family="system-ui, sans-serif" font-size="11" fill="#475569">Δg/g = - 2h/R</text>

      <!-- Depth section -->
      <line x1="345" y1="205" x2="565" y2="205" stroke="#bfdbfe" stroke-width="1" />
      <text x="350" y="225" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#0f172a">• At Depth d (linear):</text>
      <text x="365" y="245" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#1e40af">g_d = g · [1 - d/R]</text>
      <text x="365" y="265" font-family="system-ui, sans-serif" font-size="11" fill="#475569">Δg/g = - d/R</text>

      <!-- Critical equality -->
      <rect x="345" y="280" width="220" height="28" rx="4" fill="#dbeafe" />
      <text x="455" y="299" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#1e3a8a" text-anchor="middle">Equal decrease at d = 2h</text>
    `
  },
  {
    name: "test5_q3_earth_rotation_latitude.svg",
    width: 600,
    height: 360,
    content: `
      <!-- Title -->
      <text x="300" y="28" font-family="system-ui, sans-serif" font-size="16" font-weight="bold" fill="#0f172a" text-anchor="middle">Variation of g with Latitude λ due to Earth's Rotation</text>
      
      <!-- Earth: center (220, 190), R = 110 -->
      <circle cx="220" cy="190" r="110" fill="url(#earthGrad)" stroke="#1d4ed8" stroke-width="2" />
      
      <!-- Rotation axis (North-South poles) -->
      <line x1="220" y1="50" x2="220" y2="330" stroke="#0f172a" stroke-width="2" />
      <text x="220" y="45" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#0f172a" text-anchor="middle">North Pole (λ = 90°)</text>
      <text x="220" y="345" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#0f172a" text-anchor="middle">South Pole</text>

      <!-- Rotation arrow at North Pole -->
      <path d="M 205 60 A 15 10 0 1 1 235 60" fill="none" stroke="#ef4444" stroke-width="2" marker-end="url(#arrow-red)" />
      <text x="250" y="65" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#dc2626">ω</text>

      <!-- Equator line -->
      <line x1="110" y1="190" x2="330" y2="190" stroke="#ffffff" stroke-width="1.5" stroke-dasharray="4,4" />
      <text x="340" y="195" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#ffffff">Equator (λ = 0°)</text>

      <!-- Point P at latitude λ (angle 45°): (220 + 110*cos(45), 190 - 110*sin(45)) ≈ (298, 112) -->
      <line x1="220" y1="190" x2="298" y2="112" stroke="#ffffff" stroke-width="1.5" />
      <circle cx="298" cy="112" r="6" fill="#ef4444" stroke="#991b1b" stroke-width="1.5" />
      <text x="315" y="110" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#dc2626">Point P</text>

      <!-- Latitude angle arc λ -->
      <path d="M 260 190 A 40 40 0 0 0 248 162" fill="none" stroke="#fef08a" stroke-width="2" />
      <text x="265" y="175" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#fef08a">λ</text>

      <!-- Circular orbit of radius r = R cos λ -->
      <line x1="220" y1="112" x2="298" y2="112" stroke="#fef08a" stroke-width="1.5" stroke-dasharray="3,3" />
      <text x="250" y="105" font-family="system-ui, sans-serif" font-size="11" fill="#fef08a">r = R cos λ</text>

      <!-- Centrifugal acceleration vector pointing outward -->
      <line x1="298" y1="112" x2="350" y2="112" stroke="#ef4444" stroke-width="2" marker-end="url(#arrow-red)" />
      <text x="355" y="115" font-family="system-ui, sans-serif" font-size="10" font-weight="bold" fill="#dc2626">ω²R cos λ</text>

      <!-- Right Card: Formula and Key Conclusions -->
      <rect x="360" y="140" width="225" height="150" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
      <text x="472" y="165" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#0f172a" text-anchor="middle">Apparent Gravity g'</text>
      <text x="472" y="190" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#1e40af" text-anchor="middle">g' = g - R ω² cos² λ</text>
      <line x1="375" y1="205" x2="570" y2="205" stroke="#cbd5e1" stroke-width="1" />
      <text x="375" y="225" font-family="system-ui, sans-serif" font-size="11" fill="#334155">• Equator (λ=0°): g_eq = g - Rω² (Min)</text>
      <text x="375" y="245" font-family="system-ui, sans-serif" font-size="11" fill="#334155">• Pole (λ=90°): g_pole = g (Max)</text>
      <text x="375" y="265" font-family="system-ui, sans-serif" font-size="11" fill="#334155">• Difference: g_pole - g_eq = Rω²</text>
      <text x="375" y="280" font-family="system-ui, sans-serif" font-size="10" fill="#64748b">If Earth stops rotating: g at equator increases</text>
    `
  },

  // ==========================================
  // TEST 6: ORBITAL VELOCITY & SATELLITES (3 DIAGRAMS)
  // ==========================================
  {
    name: "test6_q1_satellite_circular_orbit.svg",
    width: 600,
    height: 360,
    content: `
      <!-- Title -->
      <text x="300" y="28" font-family="system-ui, sans-serif" font-size="16" font-weight="bold" fill="#0f172a" text-anchor="middle">Satellite in Circular Orbit: Orbital Velocity and Centripetal Force</text>
      
      <!-- Earth: center (240, 190), R = 60 -->
      <circle cx="240" cy="190" r="60" fill="url(#earthGrad)" stroke="#1d4ed8" stroke-width="2" />
      <text x="240" y="195" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#ffffff" text-anchor="middle">Earth (M)</text>

      <!-- Circular orbit: radius r = 125 -->
      <circle cx="240" cy="190" r="125" fill="none" stroke="#2563eb" stroke-width="2" stroke-dasharray="4,4" />

      <!-- Satellite at (240, 65) -->
      <rect x="233" y="58" width="14" height="14" rx="2" fill="#334155" />
      <!-- Solar panels -->
      <line x1="220" y1="65" x2="233" y2="65" stroke="#3b82f6" stroke-width="5" />
      <line x1="247" y1="65" x2="260" y2="65" stroke="#3b82f6" stroke-width="5" />
      <text x="240" y="50" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#0f172a" text-anchor="middle">Satellite (m)</text>

      <!-- Orbital velocity vector v_o (tangent pointing right) -->
      <line x1="260" y1="65" x2="330" y2="65" stroke="#10b981" stroke-width="3" marker-end="url(#arrow-green)" />
      <text x="340" y="70" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#15803d">v_o</text>

      <!-- Gravitational Force F_g (centripetal, pointing to center) -->
      <line x1="240" y1="75" x2="240" y2="125" stroke="#ef4444" stroke-width="2.5" marker-end="url(#arrow-red)" />
      <text x="250" y="105" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#dc2626">F_g = m v_o² / r</text>

      <!-- Orbital radius r line -->
      <line x1="240" y1="190" x2="152" y2="278" stroke="#94a3b8" stroke-width="1.5" />
      <text x="180" y="245" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#334155">r = R + h</text>

      <!-- Right Card: Key Equations -->
      <rect x="375" y="60" width="210" height="250" rx="8" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1.5" />
      <text x="480" y="88" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#1e40af" text-anchor="middle">Orbital Speed v_o</text>
      <text x="480" y="112" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#0f172a" text-anchor="middle">v_o = √[GM / (R+h)]</text>
      
      <line x1="390" y1="125" x2="570" y2="125" stroke="#bfdbfe" stroke-width="1" />
      <text x="480" y="148" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#1e40af" text-anchor="middle">Time Period T</text>
      <text x="480" y="172" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#0f172a" text-anchor="middle">T = 2π √[(R+h)³ / GM]</text>

      <line x1="390" y1="185" x2="570" y2="185" stroke="#bfdbfe" stroke-width="1" />
      <text x="480" y="208" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#1e40af" text-anchor="middle">Near Earth Surface (h ≈ 0):</text>
      <text x="480" y="230" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#dc2626" text-anchor="middle">v_o = √(gR) ≈ 7.92 km/s</text>
      <text x="480" y="252" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#dc2626" text-anchor="middle">T ≈ 84.6 minutes</text>
      <text x="480" y="275" font-family="system-ui, sans-serif" font-size="11" fill="#334155" text-anchor="middle">Relation: v_e = √2 · v_o</text>
    `
  },
  {
    name: "test6_q2_geostationary_vs_polar.svg",
    width: 600,
    height: 360,
    content: `
      <!-- Title -->
      <text x="300" y="28" font-family="system-ui, sans-serif" font-size="16" font-weight="bold" fill="#0f172a" text-anchor="middle">Geostationary vs Polar Satellite Orbits</text>
      
      <!-- Central Earth: center (240, 190), R = 45 -->
      <circle cx="240" cy="190" r="45" fill="url(#earthGrad)" stroke="#1d4ed8" stroke-width="2" />
      <text x="240" y="195" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">Earth</text>

      <!-- Geostationary Orbit (Equatorial, large ellipse in 2D perspective): rx = 160, ry = 45 -->
      <ellipse cx="240" cy="190" rx="160" ry="45" fill="none" stroke="#2563eb" stroke-width="2.5" />
      <!-- Satellite on Geostationary orbit -->
      <circle cx="395" cy="190" r="6" fill="#2563eb" />
      <text x="400" y="175" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#1e40af">Geo Satellite</text>

      <!-- Polar Orbit (Passing over poles, vertical ellipse): rx = 35, ry = 120 -->
      <ellipse cx="240" cy="190" rx="35" ry="120" fill="none" stroke="#10b981" stroke-width="2.5" />
      <!-- Satellite on Polar orbit -->
      <circle cx="240" cy="70" r="6" fill="#10b981" />
      <text x="250" y="65" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#15803d">Polar Satellite</text>

      <!-- Right Card: Detailed Comparison -->
      <rect x="360" y="55" width="225" height="280" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
      
      <!-- Geostationary details -->
      <text x="472" y="80" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#1e40af" text-anchor="middle">Geostationary Satellite</text>
      <text x="375" y="105" font-family="system-ui, sans-serif" font-size="11" fill="#334155">• Orbit: Equatorial plane</text>
      <text x="375" y="125" font-family="system-ui, sans-serif" font-size="11" fill="#334155">• Direction: West to East</text>
      <text x="375" y="145" font-family="system-ui, sans-serif" font-size="11" fill="#334155">• Period T: 24 hours</text>
      <text x="375" y="165" font-family="system-ui, sans-serif" font-size="11" fill="#334155">• Altitude h: ≈ 36,000 km</text>
      <text x="375" y="185" font-family="system-ui, sans-serif" font-size="11" fill="#334155">• Use: Telecommunications, TV</text>

      <line x1="375" y1="195" x2="570" y2="195" stroke="#cbd5e1" stroke-width="1" />
      
      <!-- Polar details -->
      <text x="472" y="218" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#15803d" text-anchor="middle">Polar Satellite</text>
      <text x="375" y="240" font-family="system-ui, sans-serif" font-size="11" fill="#334155">• Orbit: North-South polar</text>
      <text x="375" y="260" font-family="system-ui, sans-serif" font-size="11" fill="#334155">• Altitude h: 500 – 800 km</text>
      <text x="375" y="280" font-family="system-ui, sans-serif" font-size="11" fill="#334155">• Period T: ≈ 100 minutes</text>
      <text x="375" y="300" font-family="system-ui, sans-serif" font-size="11" fill="#334155">• Use: Remote sensing, weather</text>
    `
  },
  {
    name: "test6_q3_satellite_energies_graph.svg",
    width: 600,
    height: 360,
    content: `
      <!-- Title -->
      <text x="300" y="28" font-family="system-ui, sans-serif" font-size="16" font-weight="bold" fill="#0f172a" text-anchor="middle">Energies of an Orbiting Satellite: K, U, and Total Mechanical Energy E</text>
      
      <!-- Graph Axes: Origin at (80, 180) -->
      <line x1="80" y1="180" x2="540" y2="180" stroke="#0f172a" stroke-width="2" marker-end="url(#arrow-dark)" />
      <line x1="80" y1="330" x2="80" y2="50" stroke="#0f172a" stroke-width="2" marker-end="url(#arrow-dark)" />
      <text x="550" y="185" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#0f172a">r</text>
      <text x="65" y="45" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#0f172a">+E</text>
      <text x="65" y="345" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#0f172a">-E</text>
      <text x="68" y="175" font-family="system-ui, sans-serif" font-size="12" fill="#64748b">0</text>

      <!-- Earth surface at r = R (x = 160) -->
      <line x1="160" y1="60" x2="160" y2="320" stroke="#cbd5e1" stroke-width="1.5" stroke-dasharray="3,3" />
      <text x="160" y="335" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" fill="#0f172a" text-anchor="middle">r = R</text>

      <!-- Curve 1: Kinetic Energy K(r) = + GMm / (2r) in 1st quadrant -->
      <path d="M 160 110 Q 240 160 520 174" fill="none" stroke="#10b981" stroke-width="3" />
      <text x="420" y="150" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#15803d">K = + GMm / (2r)</text>

      <!-- Curve 2: Total Energy E(r) = - GMm / (2r) in 4th quadrant -->
      <path d="M 160 250 Q 240 200 520 186" fill="none" stroke="#ef4444" stroke-width="3" />
      <text x="420" y="215" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#dc2626">E = - GMm / (2r)</text>

      <!-- Curve 3: Potential Energy U(r) = - GMm / r in 4th quadrant (twice as negative as E) -->
      <path d="M 160 310 Q 240 220 520 192" fill="none" stroke="#2563eb" stroke-width="3" />
      <text x="420" y="275" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#1e40af">U = - GMm / r</text>

      <!-- Virial Theorem Box -->
      <rect x="230" y="55" width="310" height="70" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
      <text x="385" y="80" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#0f172a" text-anchor="middle">Virial Theorem Relationships:</text>
      <text x="385" y="105" font-family="system-ui, sans-serif" font-size="14" font-weight="bold" fill="#2563eb" text-anchor="middle">E = - K = U / 2     |     |U| = 2K = 2|E|</text>
    `
  }
];

let generated = 0;
for (const d of diagrams) {
  const filePath = path.join(outDir, d.name);
  fs.writeFileSync(filePath, svgWrap(d.content, d.width, d.height), 'utf8');
  console.log(`- Created [${++generated}/${diagrams.length}]: ${d.name}`);
}

console.log("All 18 Gravitation SVG diagrams successfully generated!");
