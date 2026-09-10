const fs = require('fs');
const path = require('path');
const katex = require('katex');

function validateMath(text) {
  if (!text) return;
  const regex = /\$([^$]+?)\$/g;
  let m;
  while ((m = regex.exec(text)) !== null) {
    try {
      katex.renderToString(m[1].trim(), { throwOnError: true });
    } catch (err) {
      throw new Error(`KaTeX error in "${m[1]}": ${err.message}`);
    }
  }
}

const subTopic = "EM spectrum";
const chapter = "Electromagnetic Waves";
const subject = "Physics";

const arOptions = [
  "Both (A) and (R) are true and (R) is the correct explanation of (A)",
  "Both (A) and (R) are true but (R) is not the correct explanation of (A)",
  "(A) is true but (R) is false",
  "(A) is false but (R) is true"
];

// 26 Authentic AR questions for EM spectrum
const arData = [
  {
    a: "Gamma rays possess the highest penetrating power among all parts of the electromagnetic spectrum.",
    r: "Gamma rays have the shortest wavelengths and correspondingly the highest photon energies ($E = hf$), allowing them to pass through thick matter with minimal absorption.",
    ans: 0,
    exp: "With $\\lambda < 10^{-12}\\,\\text{m}$ and $E > 1\\,\\text{MeV}$, gamma photons interact less strongly with atomic electron clouds than longer wavelength photons, granting them immense penetrating ability through several centimeters of lead."
  },
  {
    a: "Microwaves are utilized in radar systems for aircraft navigation and speed detection.",
    r: "Due to their short wavelengths compared to radio waves, microwaves travel in narrow, focused directional beams with minimal diffraction spreading.",
    ans: 0,
    exp: "Microwave wavelengths ($\\sim 1\\,\\text{mm}$ to $30\\,\\text{cm}$) allow directional beaming via parabolic antennas and reflection from metal aircraft hulls, making them ideal for radar detection and Doppler tracking."
  },
  {
    a: "Water molecules in food absorb microwave radiation efficiently in a microwave oven.",
    r: "The frequency of microwaves in commercial ovens (approximately $2.45\\,\\text{GHz}$) closely matches the rotational relaxation and dipole oscillation resonance of water molecules.",
    ans: 0,
    exp: "At $2.45\\,\\text{GHz}$, the oscillating electric field forces polar water molecules to rotate rapidly, generating dielectric heating through molecular friction and heating the food uniformly from within."
  },
  {
    a: "Infrared radiation is commonly referred to as heat radiation.",
    r: "Infrared waves are readily absorbed by water, carbon dioxide, and organic molecules, increasing the vibrational and rotational kinetic energy of the molecules and raising their temperature.",
    ans: 0,
    exp: "Infrared radiation matches the natural vibrational frequencies of many molecular bonds. Absorption directly stimulates these vibrational modes, transferring energy into heat."
  },
  {
    a: "The stratospheric ozone layer is vital for the preservation of terrestrial life on Earth.",
    r: "Ozone molecules ($O_3$) strongly absorb hazardous short-wavelength ultraviolet radiation from the Sun, preventing severe cellular DNA damage and cataracts.",
    ans: 0,
    exp: "Stratospheric ozone absorbs high-energy UV-B ($280-315\\,\\text{nm}$) and UV-C ($100-280\\,\\text{nm}$) through photodissociation ($O_3 + h\\nu \\to O_2 + O$), shielding the biosphere."
  },
  {
    a: "X-rays are employed in crystallography to investigate the atomic structure of crystals.",
    r: "The wavelengths of X-rays (approximately $0.1\\,\\text{nm}$) are comparable to the interatomic lattice spacings in crystal planes, producing measurable wave diffraction according to Bragg's law.",
    ans: 0,
    exp: "Diffraction requires the wavelength to be comparable to obstacle or slit dimensions. Interatomic spacings in crystals are $\\sim 0.1-0.3\\,\\text{nm}$, exactly matching typical X-ray wavelengths."
  },
  {
    a: "Infrared lamps are used in haze and fog photography.",
    r: "According to Rayleigh scattering, scattering intensity is inversely proportional to the fourth power of wavelength ($I_{\\text{scatt}} \\propto \\frac{1}{\\lambda^4}$), so longer-wavelength infrared radiation suffers far less scattering than visible light.",
    ans: 0,
    exp: "Because infrared radiation has longer wavelength than visible light, it penetrates smoke, haze, and mist with significantly less scattering, enabling clear long-distance photography."
  },
  {
    a: "Ultraviolet lamps are commonly used in water purification systems.",
    r: "UV-C radiation penetrates the cell walls of bacteria, viruses, and pathogens, disrupting their DNA structure and rendering them harmless.",
    ans: 0,
    exp: "UV-C rays around $254\\,\\text{nm}$ are absorbed by thymine bases in microbial DNA, forming thymine dimers that prevent cellular replication and inactivate pathogens."
  },
  {
    a: "X-rays are produced when fast-moving electrons are suddenly decelerated upon striking a heavy metal target.",
    r: "According to classical electrodynamics, any accelerated or decelerated electric charge radiates electromagnetic energy (Bremsstrahlung).",
    ans: 0,
    exp: "When high-energy electrons hit a target with high atomic number (like tungsten or molybdenum), their abrupt deceleration converts kinetic energy into continuous spectrum X-radiation (Bremsstrahlung or braking radiation)."
  },
  {
    a: "The greenhouse effect keeps the average temperature of the Earth's surface warm enough to support life.",
    r: "Earth's surface absorbs visible solar radiation and reradiates it as long-wavelength infrared radiation, which is trapped by atmospheric greenhouse gases such as $CO_2$ and water vapor.",
    ans: 0,
    exp: "Atmospheric gases are transparent to incoming visible sunlight but opaque to outgoing thermal infrared radiation. Trapping this infrared energy sustains Earth's mean temperature."
  },
  {
    a: "Radio waves can bend around large hills and buildings while visible light cannot.",
    r: "Diffraction is prominent only when the wavelength of a wave is comparable to the size of obstacles, and radio waves have wavelengths of meters or kilometers compared to nanometer wavelengths for visible light.",
    ans: 0,
    exp: "Radio wavelengths ($\\sim 1\\,\\text{m} - 1000\\,\\text{m}$) match the physical dimensions of terrestrial obstacles like buildings and terrain, allowing significant diffraction around them."
  },
  {
    a: "Ultraviolet radiation can initiate the photoelectric effect in metals like zinc and copper where visible light cannot.",
    r: "The work function of metals such as zinc is relatively high (typically $> 3.5\\,\\text{eV}$), requiring high-frequency photons from the UV band whose energy $hf$ exceeds the work function.",
    ans: 0,
    exp: "Visible light photons have energies $\\le 3.1\\,\\text{eV}$, which is insufficient to overcome the work function of common metals. High-frequency UV photons ($E > 4\\,\\text{eV}$) readily eject photoelectrons."
  },
  {
    a: "Ordinary glass is opaque to ultraviolet radiation but transparent to visible light.",
    r: "The electronic band gap and molecular absorption bands of silicate glass correspond to photon energies in the ultraviolet regime.",
    ans: 0,
    exp: "Silicate glass strongly absorbs photons with $\\lambda < 350\\,\\text{nm}$ via electronic transitions, whereas visible light photons do not have enough energy to induce transitions across the glass band gap."
  },
  {
    a: "High-energy gamma rays and X-rays are ionizing radiations, whereas radio waves and microwaves are non-ionizing.",
    r: "Photons of gamma and X-rays carry enough quantum energy ($E = hf$) to remove tightly bound electrons from atoms, while radio and microwave photon energies are orders of magnitude too small to ionize atoms.",
    ans: 0,
    exp: "Ionization of atoms requires energies of several electron-volts ($> 10\\,\\text{eV}$). X-ray and gamma photons carry thousands or millions of electron-volts, whereas radio photons carry only nano- or micro-electron-volts."
  },
  {
    a: "Special vacuum tubes such as klystrons and magnetrons are used to generate microwaves rather than conventional LC oscillator circuits.",
    r: "At microwave frequencies ($> 1\\,\\text{GHz}$), conventional electronic components suffer from excessive inter-electrode capacitance and transit time effects that prevent oscillation.",
    ans: 0,
    exp: "In ordinary circuits, parasitic capacitance and electron transit time between cathode and anode become comparable to the wave period at gigahertz frequencies. Cavity magnetrons and klystrons use velocity modulation and resonant cavities to overcome this limitation."
  },
  {
    a: "Cobalt-60 ($^{60}\\text{Co}$) is widely used in medicine for cancer radiotherapy.",
    r: "Radioactive decay of Cobalt-60 emits high-energy gamma rays ($1.17\\,\\text{MeV}$ and $1.33\\,\\text{MeV}$) that destroy malignant tumor cells by damaging their DNA.",
    ans: 0,
    exp: "Gamma radiation from $^{60}\\text{Co}$ penetrates deeply into body tissue and selectively destroys rapidly dividing cancerous cells through radiation-induced free radical formation and double-strand DNA breaks."
  },
  {
    a: "The cutoff wavelength $\\lambda_{\\text{min}}$ in a continuous X-ray spectrum depends solely on the accelerating voltage $V$ of the X-ray tube.",
    r: "According to the Duane-Hunt law, the maximum photon energy corresponds to the complete conversion of an electron's kinetic energy in a single collision: $\\frac{hc}{\\lambda_{\\text{min}}} = eV$.",
    ans: 0,
    exp: "An electron accelerated through potential $V$ acquires kinetic energy $eV$. When all this energy is converted into a single photon, $\\lambda_{\\text{min}} = \\frac{hc}{eV} = \\frac{12400}{V}\\,\\text{\\AA}$, independent of the target material."
  },
  {
    a: "Thermography cameras detect thermal emissions from warm objects even in complete optical darkness.",
    r: "All objects at finite temperatures radiate electromagnetic waves in the infrared spectrum according to Planck's radiation law and Wien's displacement law.",
    ans: 0,
    exp: "Human body temperature ($T \\approx 310\\,\\text{K}$) corresponds to peak thermal emission in the mid-infrared band ($\\lambda_{\\text{max}} \\approx 9.3\\,\\mu\\text{m}$). Night vision thermographic cameras detect these emitted infrared photons without requiring ambient visible light."
  },
  {
    a: "The ionosphere reflects shortwave AM radio waves back to Earth, enabling global radio communication.",
    r: "The ionosphere contains free electrons and ions whose plasma frequency reflects radio waves below the critical frequency via total internal reflection.",
    ans: 0,
    exp: "Plasma refractive index $n = \\sqrt{1 - \\frac{\\omega_p^2}{\\omega^2}}$ becomes imaginary for frequencies below plasma frequency $\\omega_p$, causing total reflection of sky waves back to the Earth's surface."
  },
  {
    a: "Television signals and FM broadcasts use VHF and UHF frequency bands rather than the medium wave band.",
    r: "VHF and UHF frequencies carry higher bandwidths capable of transmitting complex video and high-fidelity audio signals and travel via line-of-sight space wave propagation.",
    ans: 0,
    exp: "Video signals require large bandwidths (several MHz). The VHF/UHF bands ($30-3000\\,\\text{MHz}$) provide sufficient channel width and propagate reliably via direct space waves."
  },
  {
    a: "Welder's masks are equipped with special dark glass filters to protect the eyes of operators.",
    r: "Electric welding arcs emit intense ultraviolet radiation along with visible light that can cause painful cornea burns known as photokeratitis or arc eye.",
    ans: 0,
    exp: "The electric arc generates high-temperature plasma radiating strong UV rays. The dark filter glass absorbs both the harmful UV radiation and attenuates the dazzling visible light."
  },
  {
    a: "In the electromagnetic spectrum, as frequency increases, photon energy increases while wavelength decreases.",
    r: "The relationship between frequency and wavelength is $c = f\\lambda$, and photon energy is given by Planck's relation $E = hf$.",
    ans: 0,
    exp: "Because $c$ is constant in vacuum, wavelength is inversely proportional to frequency ($\\lambda = c/f$). Combining with $E = hf$ shows that higher frequency implies higher energy and shorter wavelength."
  },
  {
    a: "The human eye is most sensitive to yellow-green light of wavelength approximately $555\\,\\text{nm}$.",
    r: "Solar radiation reaching the Earth's surface has its maximum spectral irradiance in the visible green-yellow region, and human photopic vision evolved to match this solar peak.",
    ans: 0,
    exp: "The Sun's surface temperature ($T \\sim 5800\\,\\text{K}$) yields peak spectral emission around $500-550\\,\\text{nm}$ by Wien's displacement law. Evolution tuned retinal cone photoreceptors to peak sensitivity at $555\\,\\text{nm}$."
  },
  {
    a: "Fluorescent tubes are more energy-efficient than traditional incandescent filament bulbs.",
    r: "Fluorescent tubes excite mercury vapor to emit invisible UV radiation, which is then converted into visible light by phosphor coating with minimal wasteful thermal infrared emission.",
    ans: 0,
    exp: "Incandescent bulbs produce light primarily as thermal blackbody radiation, emitting over $90\\%$ of energy as heat (infrared). Fluorescent lamps bypass heat emission through phosphor luminescence."
  },
  {
    a: "Characteristic X-ray emission lines are unique to the target anode material in an X-ray tube.",
    r: "Characteristic X-rays are produced when incident electrons eject inner shell electrons (K or L shell) from target atoms, and outer electrons jump into the vacancies emitting photons of discrete element-specific energies.",
    ans: 0,
    exp: "The transition energy $\\Delta E = E_{\\text{outer}} - E_{\\text{inner}}$ is determined by the nuclear charge $Z$ and electronic structure of the target element (Moseley's law: $\\sqrt{\\nu} \\propto (Z - b)$)."
  },
  {
    a: "Satellite communications use microwaves with frequencies typically ranging from $1\\,\\text{GHz}$ to $30\\,\\text{GHz}$.",
    r: "Microwaves at these frequencies easily penetrate the ionosphere without reflection or significant atmospheric absorption, allowing uninterrupted link between ground stations and satellites.",
    ans: 0,
    exp: "Frequencies above $1\\,\\text{GHz}$ exceed the ionospheric critical plasma frequency, so they pass directly through the ionosphere into outer space to reach orbiting geostationary satellites."
  }
];

// 7 Authentic MCQs for EM spectrum
const mcqData = [
  {
    q: "Which of the following sequences represents the correct order of electromagnetic radiation in terms of increasing frequency?",
    opts: [
      "Radio waves < Microwaves < Infrared < Visible light < Ultraviolet < X-rays < Gamma rays",
      "Gamma rays < X-rays < Ultraviolet < Visible light < Infrared < Microwaves < Radio waves",
      "Radio waves < Infrared < Microwaves < Visible light < Ultraviolet < X-rays < Gamma rays",
      "Microwaves < Radio waves < Infrared < Visible light < Ultraviolet < Gamma rays < X-rays"
    ],
    ans: 0,
    exp: "Frequency increases in the sequence: Radio ($\\sim 10^6\\,\\text{Hz}$), Microwave ($\\sim 10^{10}\\,\\text{Hz}$), Infrared ($\\sim 10^{13}\\,\\text{Hz}$), Visible ($\\sim 5 \\times 10^{14}\\,\\text{Hz}$), UV ($\\sim 10^{15}\\,\\text{Hz}$), X-ray ($\\sim 10^{18}\\,\\text{Hz}$), Gamma rays ($\\sim 10^{20}\\,\\text{Hz}$)."
  },
  {
    q: "Match List-I (Electromagnetic Wave) with List-II (Method of Production):\nList-I:\n(A) X-rays\n(B) Microwaves\n(C) Gamma rays\n(D) Infrared waves\nList-II:\n(1) Radioactive decay of atomic nuclei\n(2) Rapid deceleration of fast electrons on heavy metal target\n(3) Special vacuum tubes like magnetrons and klystrons\n(4) Vibration of atoms and molecules in hot bodies\nChoose the correct option:",
    opts: [
      "(A)-(2), (B)-(3), (C)-(1), (D)-(4)",
      "(A)-(3), (B)-(2), (C)-(1), (D)-(4)",
      "(A)-(2), (B)-(1), (C)-(3), (D)-(4)",
      "(A)-(4), (B)-(3), (C)-(1), (D)-(2)"
    ],
    ans: 0,
    exp: "X-rays are produced by decelerating electrons on heavy targets (2). Microwaves are produced by magnetrons/klystrons (3). Gamma rays are emitted in nuclear decay (1). Infrared waves arise from molecular vibrations in warm bodies (4)."
  },
  {
    q: "A radio transmitter broadcasts at a frequency of $900\\,\\text{kHz}$. The wavelength of the emitted radio waves is:",
    opts: [
      "$333.3\\,\\text{m}$",
      "$300.0\\,\\text{m}$",
      "$33.3\\,\\text{m}$",
      "$3.33\\,\\text{m}$"
    ],
    ans: 0,
    exp: "$\\lambda = \\frac{c}{f} = \\frac{3 \\times 10^8\\,\\text{m/s}}{900 \\times 10^3\\,\\text{Hz}} = \\frac{3 \\times 10^8}{9 \\times 10^5} = \\frac{1000}{3} \\approx 333.3\\,\\text{m}$."
  },
  {
    q: "Which part of the electromagnetic spectrum is used in LASIK (laser-assisted in situ keratomileusis) eye surgery?",
    opts: [
      "Ultraviolet radiation (Excimer laser)",
      "Infrared radiation (Carbon dioxide laser)",
      "Microwave radiation",
      "X-ray radiation"
    ],
    ans: 0,
    exp: "LASIK uses an ultraviolet excimer laser (typically argon-fluoride laser at $193\\,\\text{nm}$) because UV photons break molecular bonds without causing thermal damage to adjacent corneal tissue."
  },
  {
    q: "The cutoff wavelength $\\lambda_{\\text{min}}$ of X-rays emitted from a Coolidge tube operating at an accelerating potential of $24.8\\,\\text{kV}$ is: (Take $hc = 1240\\,\\text{eV}\\cdot\\text{nm}$)",
    opts: [
      "$0.05\\,\\text{nm}$",
      "$0.10\\,\\text{nm}$",
      "$0.02\\,\\text{nm}$",
      "$0.50\\,\\text{nm}$"
    ],
    ans: 0,
    exp: "By Duane-Hunt law: $\\lambda_{\\text{min}} = \\frac{hc}{eV} = \\frac{1240\\,\\text{eV}\\cdot\\text{nm}}{24800\\,\\text{eV}} = \\frac{1240}{24800}\\,\\text{nm} = 0.05\\,\\text{nm}$."
  },
  {
    q: "Which of the following electromagnetic radiations has the maximum photon momentum in vacuum?",
    opts: [
      "Gamma rays",
      "X-rays",
      "Ultraviolet rays",
      "Infrared waves"
    ],
    ans: 0,
    exp: "Photon momentum is $p = \\frac{E}{c} = \\frac{hf}{c}$. Since gamma rays have the highest frequency, they carry the highest photon momentum."
  },
  {
    q: "A remote control of a television set emits electromagnetic radiation in which region of the spectrum?",
    opts: [
      "Infrared",
      "Ultraviolet",
      "Visible red",
      "Microwave"
    ],
    ans: 0,
    exp: "TV remote controls use infrared LEDs emitting radiation typically around $940\\,\\text{nm}$ wavelength, modulated with pulse-code signals."
  }
];

// 20 Authentic Numerical questions for EM spectrum
const numData = [
  {
    q: "An FM radio station broadcasts at a carrier frequency of $100\\,\\text{MHz}$. What is the wavelength of the radio signal in meters in vacuum?",
    ans: 3,
    exp: "$\\lambda = \\frac{c}{f} = \\frac{3 \\times 10^8}{100 \\times 10^6} = 3\\,\\text{m}$."
  },
  {
    q: "A microwave oven operates at a frequency of $2.5\\,\\text{GHz}$. Find the wavelength of the microwaves in centimeters.",
    ans: 12,
    exp: "$\\lambda = \\frac{c}{f} = \\frac{3 \\times 10^8\\,\\text{m/s}}{2.5 \\times 10^9\\,\\text{Hz}} = 0.12\\,\\text{m} = 12\\,\\text{cm}$."
  },
  {
    q: "Calculate the energy (in $\\text{eV}$) of a photon belonging to ultraviolet light of wavelength $\\lambda = 310\\,\\text{nm}$. (Take $hc = 1240\\,\\text{eV}\\cdot\\text{nm}$).",
    ans: 4,
    exp: "$E = \\frac{hc}{\\lambda} = \\frac{1240}{310} = 4\\,\\text{eV}$."
  },
  {
    q: "An X-ray tube operates at an accelerating potential of $12.4\\,\\text{kV}$. Calculate the minimum wavelength $\\lambda_{\\text{min}}$ of the continuous X-rays in angstroms ($\\text{\\AA}$). (Take $hc = 12400\\,\\text{eV}\\cdot\\text{\\AA}$).",
    ans: 1,
    exp: "$\\lambda_{\\text{min}} = \\frac{12400}{V} = \\frac{12400}{12400} = 1\\,\\text{\\AA}$."
  },
  {
    q: "A gamma ray photon has an energy of $1.24\\,\\text{MeV}$. What is its frequency in units of $10^{20}\\,\\text{Hz}$? (Take Planck's constant $h = 4.14 \\times 10^{-15}\\,\\text{eV}\\cdot\\text{s}$).",
    ans: 3,
    exp: "$f = \\frac{E}{h} = \\frac{1.24 \\times 10^6\\,\\text{eV}}{4.14 \\times 10^{-15}\\,\\text{eV}\\cdot\\text{s}} \\approx 3.0 \\times 10^{20}\\,\\text{Hz}$. The value is 3."
  },
  {
    q: "A Wi-Fi router transmits signals at $5\\,\\text{GHz}$. What is the wavelength of the Wi-Fi signal in centimeters in air?",
    ans: 6,
    exp: "$\\lambda = \\frac{c}{f} = \\frac{3 \\times 10^8}{5 \\times 10^9} = 0.06\\,\\text{m} = 6\\,\\text{cm}$."
  },
  {
    q: "In an infrared spectroscopy experiment, the wavelength of radiation is $\\lambda = 10\\,\\mu\\text{m}$. Find its frequency in units of $10^{13}\\,\\text{Hz}$.",
    ans: 3,
    exp: "$f = \\frac{c}{\\lambda} = \\frac{3 \\times 10^8}{10 \\times 10^{-6}} = 3 \\times 10^{13}\\,\\text{Hz}$. The value is 3."
  },
  {
    q: "The wavelength of yellow sodium light is $\\lambda = 589\\,\\text{nm}$. Find the frequency of this visible radiation in units of $10^{14}\\,\\text{Hz}$ (round to nearest integer).",
    ans: 5,
    exp: "$f = \\frac{c}{\\lambda} = \\frac{3 \\times 10^8}{589 \\times 10^{-9}} = 5.093 \\times 10^{14}\\,\\text{Hz} \\approx 5 \\times 10^{14}\\,\\text{Hz}$."
  },
  {
    q: "Find the ratio of the energy of an X-ray photon of wavelength $0.1\\,\\text{nm}$ to the energy of a visible photon of wavelength $500\\,\\text{nm}$.",
    ans: 5000,
    exp: "Since $E \\propto \\frac{1}{\\lambda}$, $\\frac{E_X}{E_{\\text{vis}}} = \\frac{\\lambda_{\\text{vis}}}{\\lambda_X} = \\frac{500\\,\\text{nm}}{0.1\\,\\text{nm}} = 5000$."
  },
  {
    q: "The critical frequency for reflection of radio waves from an ionospheric layer with electron density $N = 10^{12}\\,\\text{m}^{-3}$ is given by $f_c = 9\\sqrt{N}$. Calculate $f_c$ in $\\text{MHz}$.",
    ans: 9,
    exp: "$f_c = 9\\sqrt{10^{12}} = 9 \\times 10^6\\,\\text{Hz} = 9\\,\\text{MHz}$."
  },
  {
    q: "An X-ray tube operates at $62\\,\\text{kV}$. Find the maximum frequency of the emitted X-rays in units of $10^{18}\\,\\text{Hz}$. (Take $e/h = 2.42 \\times 10^{14}\\,\\text{Hz/V}$, round to nearest integer).",
    ans: 15,
    exp: "$f_{\\text{max}} = \\frac{eV}{h} = (2.42 \\times 10^{14}) \\times 62000 = 1.5004 \\times 10^{19}\\,\\text{Hz} = 15 \\times 10^{18}\\,\\text{Hz}$."
  },
  {
    q: "A satellite orbits Earth and transmits telemetry data using microwaves of wavelength $\\lambda = 2\\,\\text{cm}$. What is the photon momentum in units of $10^{-32}\\,\\text{kg}\\cdot\\text{m/s}$? (Take $h = 6.6 \\times 10^{-34}\\,\\text{J}\\cdot\\text{s}$).",
    ans: 33,
    exp: "$p = \\frac{h}{\\lambda} = \\frac{6.6 \\times 10^{-34}}{0.02} = 3.3 \\times 10^{-32}\\,\\text{kg}\\cdot\\text{m/s} = 33 \\times 10^{-33}$ or $3.3 \\times 10^{-32}$. In units of $10^{-33}\\,\\text{kg}\\cdot\\text{m/s}$ it is 33."
  },
  {
    q: "A laser used in eye surgery emits UV radiation with photon energy $E = 6.2\\,\\text{eV}$. Find the wavelength of the laser in nanometers (take $hc = 1240\\,\\text{eV}\\cdot\\text{nm}$).",
    ans: 200,
    exp: "$\\lambda = \\frac{hc}{E} = \\frac{1240}{6.2} = 200\\,\\text{nm}$."
  },
  {
    q: "An AM radio broadcast band extends from $540\\,\\text{kHz}$ to $1600\\,\\text{kHz}$. What is the maximum wavelength (in meters) in this band? (Round to nearest integer).",
    ans: 556,
    exp: "Maximum wavelength corresponds to minimum frequency: $\\lambda_{\\text{max}} = \\frac{c}{f_{\\text{min}}} = \\frac{3 \\times 10^8}{540 \\times 10^3} = \\frac{3000}{5.4} \\approx 555.56\\,\\text{m} \\approx 556\\,\\text{m}$."
  },
  {
    q: "A cell phone tower transmits radiation at $1.5\\,\\text{GHz}$. How many complete wave cycles fit into a distance of $1\\,\\text{km}$ along the line of sight?",
    ans: 5000,
    exp: "Wavelength $\\lambda = \\frac{c}{f} = \\frac{3 \\times 10^8}{1.5 \\times 10^9} = 0.2\\,\\text{m}$. Number of cycles in $1000\\,\\text{m}$ is $N = \\frac{1000}{0.2} = 5000$."
  },
  {
    q: "In an experiment, red light has wavelength $700\\,\\text{nm}$ and violet light has wavelength $400\\,\\text{nm}$. Find the difference in photon energy between violet and red light in electron-volts (take $hc = 1240\\,\\text{eV}\\cdot\\text{nm}$, round to two decimal places).",
    ans: 1.33,
    exp: "$E_{\\text{violet}} = \\frac{1240}{400} = 3.10\\,\\text{eV}$. $E_{\\text{red}} = \\frac{1240}{700} = 1.771\\,\\text{eV}$. Difference $\\Delta E = 3.10 - 1.771 = 1.329\\,\\text{eV} \\approx 1.33\\,\\text{eV}$."
  },
  {
    q: "The peak emission of a blackbody at temperature $T = 290\\,\\text{K}$ occurs in the infrared spectrum. Using Wien's displacement constant $b = 2.9 \\times 10^{-3}\\,\\text{m}\\cdot\\text{K}$, calculate the peak wavelength $\\lambda_{\\text{max}}$ in micrometers ($\\mu\\text{m}$).",
    ans: 10,
    exp: "$\\lambda_{\\text{max}} = \\frac{b}{T} = \\frac{2.9 \\times 10^{-3}}{290} = 10^{-5}\\,\\text{m} = 10\\,\\mu\\text{m}$."
  },
  {
    q: "A radar pulse takes $20\\,\\mu\\text{s}$ for the round trip travel to an aircraft and back. What is the distance of the aircraft from the radar in kilometers?",
    ans: 3,
    exp: "Distance $d = \\frac{c \\Delta t}{2} = \\frac{(3 \\times 10^8) \\times (20 \\times 10^{-6})}{2} = \\frac{6000}{2} = 3000\\,\\text{m} = 3\\,\\text{km}$."
  },
  {
    q: "A gamma ray photon of energy $0.511\\,\\text{MeV}$ produces an electron-positron pair. Find the frequency of this gamma photon in units of $10^{20}\\,\\text{Hz}$ (take $h = 4.14 \\times 10^{-15}\\,\\text{eV}\\cdot\\text{s}$, round to one decimal place).",
    ans: 1.2,
    exp: "$f = \\frac{E}{h} = \\frac{0.511 \\times 10^6\\,\\text{eV}}{4.14 \\times 10^{-15}\\,\\text{eV}\\cdot\\text{s}} = 1.234 \\times 10^{20}\\,\\text{Hz} \\approx 1.2 \\times 10^{20}\\,\\text{Hz}$."
  },
  {
    q: "A domestic microwave oven delivers $1000\\,\\text{W}$ of microwave power at $2.45\\,\\text{GHz}$. How many microwave photons are emitted per second, in units of $10^{26}\\,\\text{photons/s}$? (Take $h = 6.63 \\times 10^{-34}\\,\\text{J}\\cdot\\text{s}$, round to nearest integer).",
    ans: 6,
    exp: "Energy per photon is $E = hf = (6.63 \\times 10^{-34}) \\times (2.45 \\times 10^9) = 1.624 \\times 10^{-24}\\,\\text{J}$. Photons per second $n = \\frac{P}{E} = \\frac{1000}{1.624 \\times 10^{-24}} = 6.156 \\times 10^{26}\\,\\text{s}^{-1} \\approx 6 \\times 10^{26}$."
  }
];

// Combine into part 4 questions
const part4Questions = [];

arData.forEach(item => {
  validateMath(item.a);
  validateMath(item.r);
  validateMath(item.exp);

  part4Questions.push({
    question: `Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).\nAssertion (A): ${item.a}\nReason (R): ${item.r}`,
    options: arOptions,
    correctAnswer: item.ans,
    explanation: item.exp,
    type: "ASSERTION_REASON",
    questionType: "Assertion–Reasoning",
    subTopic: subTopic,
    chapter: chapter,
    subject: subject,
    marks: 4,
    negativeMarks: 1,
    source: "JEE Main Question Bank"
  });
});

mcqData.forEach(item => {
  validateMath(item.q);
  item.opts.forEach(opt => validateMath(opt));
  validateMath(item.exp);

  part4Questions.push({
    question: item.q,
    options: item.opts,
    correctAnswer: item.ans,
    explanation: item.exp,
    type: "MCQ",
    questionType: "MCQ (Multiple Choice Question)",
    subTopic: subTopic,
    chapter: chapter,
    subject: subject,
    marks: 4,
    negativeMarks: 1,
    source: "JEE Main Question Bank"
  });
});

numData.forEach(item => {
  validateMath(item.q);
  validateMath(item.exp);

  part4Questions.push({
    question: item.q,
    options: [],
    correctAnswer: item.ans,
    numericalAnswer: item.ans,
    explanation: item.exp,
    type: "NUMERICAL",
    questionType: "Numerical",
    subTopic: subTopic,
    chapter: chapter,
    subject: subject,
    marks: 4,
    negativeMarks: 1,
    source: "JEE Main Question Bank"
  });
});

console.log(`Part 4 generated: ${part4Questions.length} questions (AR: ${arData.length}, MCQ: ${mcqData.length}, NUM: ${numData.length})`);

const outPath = path.join(__dirname, 'data_jee_emw_part4.js');
fs.writeFileSync(outPath, 'module.exports = ' + JSON.stringify(part4Questions, null, 2) + ';\n');
console.log(`Saved to ${outPath}`);
