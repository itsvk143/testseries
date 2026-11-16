'use client';
import { useEffect, useRef } from 'react';

/**
 * LatexRenderer — Universal renderer for LaTeX math, chemical reactions, formulas,
 * physical units, and Markdown tables across PollTest.
 *
 * Supported formats & delimiters:
 *   $$...$$         — block (display) math
 *   $...$           — inline math
 *   \ce{...}        — chemical equations (via mhchem)
 *   \pu{...}        — physical units (via mhchem)
 *   \(...\)         — standard LaTeX inline math
 *   \[...\]         — standard LaTeX display math
 *   Markdown tables — experimental tables (e.g. kinetics data, match-the-column)
 *   Markdown bold   — **bold text**
 *
 * Automatically recognizes and formats:
 *   - Chemical reactions: 2N_2O_5(g) → 4NO_2(g) + O_2(g), BrO_3^-(aq) + 5Br^-(aq) + 6H^+(aq) → 3Br_2(l) + 3H_2O(l)
 *   - Rate laws: r = k[A][B]^2, Rate = k[A]^2[B], k_1[BrO_3^-][Br^-][H^+]^2
 *   - Arrhenius equations: k_1 = 10^{16}e^{-2000/T}, k_2 = 10^{15}e^{-1000/T}
 *   - Half-lives & concentrations: [R]_0, [R], t_{1/2}, \ln[R], \log[R]
 *   - Subscripts: k_1, k_2, k_3, E_a, K_c, p_A, T_1
 *   - Chemical ions: BrO_3^-, Br^-, H^+, Fe^{2+}, SO_4^{2-}, OH^-
 *   - Physical units with exponents: M s^{-1}, mol L^{-1}, atm^{-3/2} s^{-1}, kJ mol^{-1}
 *   - Equations with fractions: \frac{k_1}{5} = \frac{k_2}{3} = \frac{k_3}{6}, T = \frac{1000}{2.303} K
 */
const LatexRenderer = ({ text }) => {
    const containerRef = useRef(null);

    useEffect(() => {
        if (!containerRef.current) return;
        if (!text) {
            containerRef.current.innerHTML = '';
            return;
        }

        let cancelled = false;

        const render = async () => {
            const { default: katex } = await import('katex');
            try {
                await import('katex/contrib/mhchem/mhchem');
            } catch {
                // mhchem not available — fallback gracefully
            }

            if (cancelled || !containerRef.current) return;

            const katexOpts = (displayMode) => ({
                displayMode,
                throwOnError: false,
                trust: true,
                strict: false,
                macros: {
                    '\\degree':    '^{\\circ}',
                    '\\celsius':   '^{\\circ}\\mathrm{C}',
                    '\\angstrom':  '\\text{\\AA}',
                    '\\micro':     '\\mu',
                    '\\ohm':       '\\Omega',
                    '\\Ohm':       '\\Omega',
                    '\\kgms':      '\\mathrm{kg\\,m\\,s^{-1}}',
                    '\\ms':        '\\mathrm{m\\,s^{-1}}',
                    '\\mssq':      '\\mathrm{m\\,s^{-2}}',
                    '\\Nm':        '\\mathrm{N\\,m}',
                    '\\Jmol':      '\\mathrm{J\\,mol^{-1}}',
                    '\\la':        '\\lambda',
                    '\\om':        '\\omega',
                    '\\De':        '\\Delta',
                    '\\kJ':        '\\mathrm{kJ}',
                    '\\mol':       '\\mathrm{mol}',
                    '\\ra':        '\\rightarrow',
                    '\\rla':       '\\rightleftharpoons',
                }
            });

            const fixCommandParens = (str) => {
                const cmds = 'sqrt|vec|hat|bar|dot|ddot|tilde|overline|underline|mathbf|mathrm|mathit|text|boldsymbol';
                const re = new RegExp(`\\\\(${cmds})\\(([^()]+)\\)`, 'g');
                return str.replace(re, (m, cmd, content) => `\\${cmd}{${content}}`);
            };

            const sanitizeMath = (math) => {
                let m = math.trim();
                m = m.replace(/\$/g, '');
                m = m.replace(/\t(ext|imes|heta|au)/g, (match, g) => '\\' + (g === 'ext' ? 'text' : g === 'imes' ? 'times' : g === 'heta' ? 'theta' : 'tau'))
                     .replace(/\x0crac/g, '\\frac')
                     .replace(/\x08eta/g, '\\beta')
                     .replace(/\rightleftharpoons/g, '\\rightleftharpoons');

                // Map Unicode superscripts and subscripts
                m = m.replace(/¹/g, '^1')
                     .replace(/²/g, '^2')
                     .replace(/³/g, '^3')
                     .replace(/⁻/g, '^-')
                     .replace(/₀/g, '_0')
                     .replace(/₁/g, '_1')
                     .replace(/₂/g, '_2')
                     .replace(/₃/g, '_3')
                     .replace(/₄/g, '_4')
                     .replace(/₅/g, '_5');

                // Map Unicode Greek and symbols
                m = m.replace(/μ/g, '\\mu ')
                     .replace(/Ω/g, '\\Omega ')
                     .replace(/°C/g, '^\\circ\\mathrm{C}')
                     .replace(/°/g, '^\\circ ')
                     .replace(/×/g, '\\times ')
                     .replace(/±/g, '\\pm ')
                     .replace(/⇌/g, '\\rightleftharpoons ')
                     .replace(/\\circ\s*C\b/g, '\\circ\\mathrm{C}')
                     .replace(/\\circ\s*K\b/g, '\\circ\\mathrm{K}')
                     .replace(/\\circ\s*F\b/g, '\\circ\\mathrm{F}')
                     .replace(/\\\\+circ/g, '\\circ');

                // Fix mismatched paren/brace on \frac: e.g. \frac{y){4} -> \frac{y}{4}
                m = m.replace(/\\frac\{([^)}]+)\)/g, '\\frac{$1}');
                m = m.replace(/\\frac\(([^)}]+)\}/g, '\\frac{$1}');

                // Ensure percent in math mode is escaped as \% so it doesn't comment out equations
                m = m.replace(/(?<!\\)%/g, '\\%');

                return fixCommandParens(m);
            };

            const proseKeywords = new Set([
                'option', 'which', 'what', 'when', 'where', 'then', 'than', 'from', 'with', 'reaction',
                'react', 'calculate', 'find', 'given', 'show', 'plotted', 'versus', 'value', 'ratio',
                'slope', 'rate', 'constant', 'order', 'molecularity', 'time', 'temperature', 'energy',
                'activation', 'zero', 'first', 'second', 'initial', 'final', 'equilibrium', 'mechanism',
                'overall', 'following', 'consider', 'identify', 'correct', 'incorrect', 'statement',
                'graph', 'relation', 'among', 'between', 'represent', 'represents', 'is', 'are', 'in',
                'of', 'to', 'for', 'at', 'by', 'as', 'an', 'the'
            ]);

            const isProse = (str) => {
                const words = str.toLowerCase().replace(/[^a-z]/g, ' ').split(/\s+/).filter(Boolean);
                return words.some(w => proseKeywords.has(w));
            };

            const preProcess = (input) => {
                if (!input || typeof input !== 'string') return '';
                let fixed = input
                    .replace(/^\s*\[\s*(?:Top\b[^\]]*|Ranker\b[^\]]*|Olympiad\b[^\]]*|Cumulative\s+Grand\b[^\]]*)\]\s*/i, '')
                    .replace(/\t(ext|imes|heta|au)/g, (m, g) => {
                        if (g === 'ext') return '\\text';
                        if (g === 'imes') return '\\times';
                        if (g === 'heta') return '\\theta';
                        if (g === 'au') return '\\tau';
                        return m;
                    })
                    .replace(/\x0crac/g, '\\frac')
                    .replace(/\x08eta/g, '\\beta')
                    .replace(/\\frac\{([^)}]+)\)/g, '\\frac{$1}')
                    .replace(/\\frac\(([^)}]+)\}/g, '\\frac{$1}');

                // Normalize Assertion-Reason questions
                if (/Assertion\s*(?:\(A\))?\s*:/i.test(fixed) && /Reason\s*(?:\(R\))?\s*:/i.test(fixed)) {
                    const prefix = "Given below are two statements: one is labelled as Assertion (A) and the other is labelled as Reason (R).";
                    const body = fixed.replace(/^[\s\S]*?(?:Given below are two statements[^\n.]*[.]\s*)/i, "").trim();
                    const match = body.match(/Assertion\s*(?:\(A\))?\s*:\s*([\s\S]+?)\s*Reason\s*(?:\(R\))?\s*:\s*([\s\S]+)$/i);
                    if (match) {
                        fixed = `${prefix}\nAssertion (A): ${match[1].trim()}\nReason (R): ${match[2].trim()}`;
                    }
                }

                // Delimiter normalization
                fixed = fixed.replace(/\${3,}/g, () => '$$');
                fixed = fixed.replace(/\\(\$)/g, '$1');
                fixed = fixed.replace(/\\\\+circ/g, '\\circ');
                fixed = fixed.replace(/\\\\+([a-zA-Z])/g, '\\$1');

                // Convert LaTeX \( ... \) and \[ ... \] to $ ... $ and $$ ... $$
                fixed = fixed.replace(/\\\(\s*\$?([\s\S]*?)\$?\s*\\\)/g, (m, g1) => `$${g1}$`);
                fixed = fixed.replace(/\\\[([\s\S]*?)\\\]/g, (m, g1) => `$$${g1}$$`);

                // Fix displaced dollar fixes
                fixed = fixed.replace(/\$\s*\\frac\s*\$\s*\{((?:[^{}]|\{[^{}]*\})*)\}\s*\{((?:[^{}]|\{[^{}]*\})*)\}\s*\$?(\$)?/g, (m, num, den, extra) => {
                    return `$\\frac{${num}}{${den}}$${extra || ''}`;
                });
                fixed = fixed.replace(/\\frac\s*\$\s*\{((?:[^{}]|\{[^{}]*\})*)\}\s*\{((?:[^{}]|\{[^{}]*\})*)\}\s*\$?(\$)?/g, (m, num, den, extra) => {
                    return `\\frac{${num}}{${den}}$${extra || ''}`;
                });
                fixed = fixed.replace(/(\^[0-9]+|\^\{[0-9]+\})\$([+\-])\}/g, (m, sup, sign) => {
                    const cleanSup = sup.replace(/[{}^]/g, '');
                    return `^{${cleanSup}${sign}}$`;
                });
                fixed = fixed.replace(/(?<!\\)\$(is|and|or|of|in|to|with|for|where|which|when|then|if|at|by|from)\$(?!\$)/gi, ' $1 ');
                fixed = fixed.replace(/\\frac\{([^{}]*)\}\s*\{((?:[^{}]|\{[^{}]*\})*)\}/g, (m, a, b) => {
                    return `\\frac{${a.replace(/\$/g, '')}}{${b.replace(/\$/g, '')}}`;
                });
                fixed = fixed.replace(/\\(sqrt|text|mathrm|mathbf)\{((?:[^{}]|\{[^{}]*\})*)\}/g, (m, cmd, inner) => {
                    return `\\${cmd}{${inner.replace(/\$/g, '')}}`;
                });
                fixed = fixed.replace(/\$([^$]+?)\s*([+\-=])\s*\$\$\\frac\{([^$]+?)\}\$\$/g, (m, p1, p2, p3) => `$${p1} ${p2} \\frac{${p3}}$`);
                fixed = fixed.replace(/\$([^$]+?)\s*([+\-=])\s*\$\\frac\{([^$]+?)\}\$/g, (m, p1, p2, p3) => `$${p1} ${p2} \\frac{${p3}}$`);
                fixed = fixed.replace(/\b([a-zA-Z\/]+)\$\$?\^\{?([0-9\-]+)\}?\$?/g, (m, u, exp) => `$\\text{${u}}^{${exp}}$`);

                // Separate attached units from powers (e.g. 10^{-4}L -> 10^{-4} L, 10^{-3}M -> 10^{-3} M)
                fixed = fixed.replace(/(10\^\{?[+\-]?[0-9]+\}?)([a-zA-Z])/g, (m, p, u) => `${p} ${u}`);

                // Helper to process only text outside math delimiters
                const transformText = (str, transformFn) => {
                    const parts = str.split(/(\$\$[\s\S]*?\$\$|\$[\s\S]*?\$|\\ce\{(?:[^{}]|\{[^{}]*\})*\}|\\pu\{[^}]*\})/g);
                    for (let i = 0; i < parts.length; i += 2) {
                        if (parts[i]) {
                            parts[i] = transformFn(parts[i]);
                        }
                    }
                    return parts.join('');
                };

                // STEP 1A: Standalone formula or equality chains with \frac or \sqrt (e.g. \frac{k_1}{5} = \frac{k_2}{3} = \frac{k_3}{6} or T = \frac{1000}{2.303} K)
                fixed = transformText(fixed, seg => {
                    if (seg.includes('\\frac') || seg.includes('\\sqrt')) {
                        if (!isProse(seg)) {
                            let trimmed = seg.trim();
                            trimmed = trimmed.replace(/\s+([KkMmSsJg]|mol|cal|atm|bar)$/, ' \\text{ $1}');
                            return `$${trimmed}$`;
                        }
                    }
                    const fracChainRegex = /(?<![\w$\\])((?:[a-zA-Z0-9_]+\s*=\s*)?\\frac\{[^{}]+\}\{[^{}]+\}(?:\s*=\s*(?:\\frac\{[^{}]+\}\{[^{}]+\}|[a-zA-Z0-9_]+))*(?:\s+[KkMmSsJg]|mol|cal|atm|bar)?)(?![\w$])/g;
                    return seg.replace(fracChainRegex, (m) => {
                        let trimmed = m.trim().replace(/\s+([KkMmSsJg]|mol|cal|atm|bar)$/, ' \\text{ $1}');
                        return `$${trimmed}$`;
                    });
                });

                // STEP 1B: Isolated inline functional fractions and roots
                fixed = transformText(fixed, seg => {
                    seg = seg.replace(/(?:\\(?:ln|log|sin|cos|tan)\\left[([{])?\\frac\{[^{}]+\}\{[^{}]+\}(?:\\right[)\]}])?|\\frac\{[^{}]+\}\{[^{}]+\}/g, (m) => `$${m}$`);
                    seg = seg.replace(/(?<![\w$\\])([0-9]*\\sqrt\{?[0-9a-zA-Z]+\}?)(?![\w$])/g, (m) => `$${m}$`);
                    return seg;
                });

                // STEP 2: Chemical reactions with arrows
                // e.g. ( CH_3 )_2CHN=NCH(CH_3)_2(g) → N_2(g) + C_6H_{14}(g), 2N_2O_5(g) → 4NO_2(g) + O_2(g), BrO_3^-(aq) + 5Br^-(aq) + 6H^+(aq) → 3Br_2(l) + 3H_2O(l), A(g) + 2B(g) → C(g)
                fixed = transformText(fixed, seg => {
                    const term = '(?:[0-9/.]*\\s*(?:\\([\\sA-Za-z0-9_]+\\)|[A-Za-z0-9_+\\-^/={}]|\\([a-z]+\\))+)';
                    const side = `(?:${term}(?:\\s*\\+\\s*${term})*)`;
                    const arrow = '(?:→|->|-->|\\\\rightarrow|\\\\longrightarrow|⇌|\\\\rightleftharpoons|\\\\xrightarrow\\{[^{}]+\\}|<=>)';
                    const rxnRegex = new RegExp(`(?<![\\w$\\\\])(${side}\\s*${arrow}\\s*${side})(?=[.,;:?\\s]|$)`, 'g');
                    return seg.replace(rxnRegex, (match) => {
                        const leadingWs = match.match(/^\s*/)[0];
                        const trailingWs = match.match(/\s*$/)[0];
                        const core = match.trim();
                        let formatted = core
                            .replace(/\s*(?:→|->|-->|\\rightarrow|\\longrightarrow)\s*/g, ' \\longrightarrow ')
                            .replace(/\s*(?:⇌|\\rightleftharpoons|<=>)\s*/g, ' \\rightleftharpoons ')
                            .replace(/\(\s*([A-Za-z0-9_]+)\s*\)/g, '($1)');
                        return `${leadingWs}$\\mathrm{${formatted}}$${trailingWs}`;
                    });
                });

                // STEP 3: Arrhenius equations, Rate laws, and Proportionality
                fixed = transformText(fixed, seg => {
                    // Arrhenius equations: k_1 = 10^{16} e^{-2000/T}
                    const arrheniusEqRegex = /(?<![\w$\\])([a-zA-Z]_\{?[0-9a-zA-Z]+\}?\s*=\s*(?:[0-9]+(?:\.[0-9]+)?\s*(?:×|\*|\\times)\s*)?10\^\{?[+\-]?[0-9]+\}?\s*e\^\{?[+\-]?[0-9a-zA-Z/._]+\}?)(?![\w$])/g;
                    seg = seg.replace(arrheniusEqRegex, (match) => `$${match}$`);

                    // Equalities with scientific notation: e.g. k = 2.0 × 10^{-4}
                    const kEqRegex = /(?<![\w$\\])([a-zA-Z]\s*=\s*(?:[0-9]+(?:\.[0-9]+)?\s*(?:×|\*|\\times)\s*)?10\^\{?[+\-]?[0-9]+\}?)(?![\w$])/g;
                    seg = seg.replace(kEqRegex, (m) => {
                        let cleaned = m.replace(/([0-9]+(?:\.[0-9]+)?)\s*(?:×|\*|\\times)\s*10\^\{?([+\-]?[0-9]+)\}?/, '$1 \\times 10^{$2}');
                        return `$${cleaned}$`;
                    });

                    // Equalities: k_1 = k_2, 5k_1 = 3k_2 = 6k_3, k_{obs} = k_2 K_c
                    const eqRegex = /(?<![\w$\\])([0-9]*[a-zA-Z]_\{?[0-9a-zA-Z]+\}?\s*=\s*[0-9]*[a-zA-Z]_\{?[0-9a-zA-Z]+\}?(?:\s*=\s*[0-9]*[a-zA-Z]_\{?[0-9a-zA-Z]+\}?)*)(?![\w$])/g;
                    seg = seg.replace(eqRegex, (match) => `$${match}$`);

                    // Relations like n \neq 1
                    seg = seg.replace(/(?<![\w$\\])([a-zA-Z0-9]\s*\\neq\s*[a-zA-Z0-9])(?![\w$])/g, (m) => `$${m}$`);

                    // Order notation like n^{th}
                    seg = seg.replace(/(?<![\w$\\])\bn\^\{?th\}?(?![\w$])/g, '$n^{\\text{th}}$');

                    // Log base 10: \log_{10} k
                    seg = seg.replace(/(?<![\w$\\])\\log_\{?10\}?\s*([a-zA-Z])(?![\w$])/g, (m, v) => `$\\log_{10} ${v}$`);

                    // Values like \log 2 = 0.3010, \log 3 = 0.4771, \log 5 = 0.6990
                    const logEqRegex = /(?<![\w$\\])(\\?(?:log|ln)\s*[0-9]+(?:\.[0-9]+)?\s*=\s*[0-9]+(?:\.[0-9]+)?)(?![\w$])/g;
                    seg = seg.replace(logEqRegex, (m) => {
                        const formatted = m.startsWith('\\') ? m : '\\' + m;
                        return `$${formatted}$`;
                    });

                    // Reciprocal variable like 1/T
                    seg = seg.replace(/(?<![\w$\\])1\/([a-zA-Z])(?![\w$])/g, (m, v) => `$1/${v}$`);

                    // Prime notation like k'
                    seg = seg.replace(/(?<![\w$\\])\b([a-zA-Z])'(?![\w$])/g, (m, v) => `$${v}'$`);

                    // Rate law expressions: Rate = k[A]^2[B], r = k[A][B]^2, Rate = k'[R], k_1[BrO_3^-][Br^-][H^+]^2
                    const rateRegex = /(?<![\w$\\])((?:(?:Rate|rate|r)\s*=\s*)?[a-zA-Z]'?(?:_\{?[0-9a-zA-Z]+\}?)?(?:\[[A-Za-z0-9_+\-^/{}\s]*\](?:\^[0-9a-zA-Z+\-]+|\^\{[^{}]+\})?)+)(?![\w$])/g;
                    seg = seg.replace(rateRegex, (match) => {
                        let formatted = match.replace(/\[([A-Za-z0-9_+\-^/{}\s]*)\]/g, (m, inner) => {
                            return inner.includes(' ') ? `[\\text{${inner}}]` : `[\\mathrm{${inner}}]`;
                        });
                        return `$${formatted}$`;
                    });

                    // Proportionality: t_{1/2} \propto [R]_0^{-1}
                    const propRegex = /(?<![\w$\\])(t_\{?[0-9/.]+\}?\s*\\propto\s*[^,\n|]+)(?![\w$])/g;
                    seg = seg.replace(propRegex, (match) => `$${match.trim()}$`);

                    return seg;
                });

                // STEP 4: Concentrations, Half-life & Logarithmic Terms: [R]_0, [R], t_{1/2}, \ln[R], \log[R]
                fixed = transformText(fixed, seg => {
                    seg = seg.replace(/(?<![\w$\\])(\[[A-Z][a-zA-Z0-9_+\-^/{}]*\](?:_\{?[0-9a-zA-Z]+\}?|\^[0-9a-zA-Z+\-]+|\^\{[^{}]+\})?)(?![\w$])/g, (m) => `$${m}$`);
                    seg = seg.replace(/(?<![\w$\\])\bt_\{([0-9./%\\a-zA-Z]+)\}(?![\w$])/g, (m, sub) => {
                        const cleanSub = sub.replace(/(?<!\\)%/g, '\\%');
                        return `$t_{${cleanSub}}$`;
                    });
                    seg = seg.replace(/(?<![\w$\\])\bt_([0-9]+\/[0-9]+)(?![\w$])/g, (m, frac) => `$t_{${frac}}$`);
                    seg = seg.replace(/(?<![\w$\\])\\?(ln|log)\[([A-Z][a-zA-Z0-9_]*)\](?![\w$])/g, (m, fn, varName) => `$\\${fn}[${varName}]$`);
                    seg = seg.replace(/(?<![\w$\\])\\?(ln|log)\(([A-Z][a-zA-Z0-9_]*)\)(?![\w$])/g, (m, fn, varName) => `$\\${fn}(${varName})$`);
                    return seg;
                });

                // STEP 5: Chemical Ions with Charges (e.g. BrO_3^-, Br^-, H^+, Fe^{2+}, SO_4^{2-}, OH^-)
                fixed = transformText(fixed, seg => {
                    const ionRegex = /(?<![\w$\\])([A-Z][a-zA-Z0-9]*(?:_\{?[0-9a-zA-Z/.]+\}?)?)\^(\{?[+\-]?[0-9]*[+\-]\}?)(?:\(([a-z]+)\))?(?![\w$])/g;
                    return seg.replace(ionRegex, (m, formula, charge, state) => {
                        const cleanCharge = charge.startsWith('{') ? charge : `{${charge}}`;
                        const stateStr = state ? `(${state})` : '';
                        return `$\\mathrm{${formula}^${cleanCharge}${stateStr}}$`;
                    });
                });

                // STEP 6: Chemical Formulas with Subscripts (e.g. N_2O_5, NO_2, Br_2, O_2, H_2O, CO_2, CH_4)
                fixed = transformText(fixed, seg => {
                    const chemSubRegex = /(?<![\w$\\])\b([A-Z][a-zA-Z0-9]*(?:_[0-9]+)+(?:[A-Z][a-zA-Z0-9]*(?:_[0-9]+)*)*)(?:\(([a-z]+)\))?(?![\w$])/g;
                    return seg.replace(chemSubRegex, (m, formula, state) => {
                        const stateStr = state ? `(${state})` : '';
                        return `$\\mathrm{${formula}${stateStr}}$`;
                    });
                });

                // STEP 7: Subscripted Variables (e.g. k_1, k_2, k_3, E_a, E_{th}, K_c, p_A, T_1)
                fixed = transformText(fixed, seg => {
                    seg = seg.replace(/(?<![\w$\\])\b([a-zA-Z])_\{([0-9a-zA-Z/._()]+)\}\b(?![\w$])/g, (m, letter, sub) => `$${letter}_{${sub}}$`);
                    seg = seg.replace(/(?<![\w$\\])\b([a-zA-Z])_([0-9a-zA-Z])\b(?![\w$])/g, (m, letter, sub) => `$${letter}_{${sub}}$`);
                    return seg;
                });

                // STEP 8: Exponentials and Powers (e.g. e^{-2000/T}, 10^{16}, 10^16, 2.8 × 10^{-3})
                fixed = transformText(fixed, seg => {
                    seg = seg.replace(/(?<![\w$\\])\be\^(\{?[+\-]?[0-9a-zA-Z/._\s]+\}?)(?![\w$])/g, (m, exp) => {
                        const cleanExp = exp.startsWith('{') ? exp : `{${exp}}`;
                        return `$e^{${cleanExp}}$`;
                    });
                    const sciRegex = /(?<![\w$\\])(?:([0-9]+(?:\.[0-9]+)?)\s*(?:×|\*|\\times)\s*)?(?:10\^\{([+\-]?[0-9]+(?:\.[0-9]+)?)\}|10\^([+\-]?[0-9]+(?:\.[0-9]+)?))/g;
                    seg = seg.replace(sciRegex, (m, coeff, exp1, exp2) => {
                        const exp = exp1 !== undefined ? exp1 : exp2;
                        return coeff ? `$${coeff} \\times 10^{${exp}}$` : `$10^{${exp}}$`;
                    });
                    return seg;
                });

                // STEP 9: Physical Units with Exponents (e.g. M s^{-1}, mol L^{-1}, atm^{-3/2} s^{-1}, kJ mol^{-1}, bar min^{-1})
                fixed = transformText(fixed, seg => {
                    const unitRegex = /(?<![a-zA-Z$\\])(?:mol|atm|bar|min|sec|cm|kg|kJ|J|K|L|M|N|g|m|s)(?:\^\{[+\-]?[0-9/.]+\}|\^[+\-]?[0-9]+)?(?:\s*(?:mol|atm|bar|min|sec|cm|kg|kJ|J|K|L|M|N|g|m|s)(?:\^\{[+\-]?[0-9/.]+\}|\^[+\-]?[0-9]+)?)*(?![\w$])/g;
                    return seg.replace(unitRegex, (m) => {
                        if (!m.includes('^')) return m;
                        const clean = m.replace(/\s+/g, '\\,');
                        return `$\\mathrm{${clean}}$`;
                    });
                });

                // STEP 10: Numbers with units: 543K, 35.0mm Hg, 54.0mm Hg, 360s, 0.01M, 10M, 50minutes, unescape prose \%
                fixed = transformText(fixed, seg => {
                    seg = seg.replace(/([0-9]+)\s*minutes\b/g, '$1 minutes');
                    seg = seg.replace(/([0-9.]+)\s*\\%/g, '$1%');
                    seg = seg.replace(/\\%/g, '%');
                    seg = seg.replace(/(?<![\w$\\])([0-9]+(?:\.[0-9]+)?)\s*mm\s*Hg\b/g, '$$$1\\text{ mm Hg}$$');
                    seg = seg.replace(/(?<![\w$\\])([0-9]+(?:\.[0-9]+)?)\s*K\b/g, '$$$1\\text{ K}$$');
                    seg = seg.replace(/(?<![\w$\\])([0-9]+(?:\.[0-9]+)?)\s*s\b/g, '$$$1\\text{ s}$$');
                    seg = seg.replace(/(?<![\w$\\])([0-9]+(?:\.[0-9]+)?)\s*M\b/g, '$$$1\\text{ M}$$');
                    return seg;
                });

                // STEP 11: Specific symbols and temperatures outside math
                fixed = transformText(fixed, seg => {
                    return seg
                        .replace(/([0-9.]+)\s*(?:°|\\circ|\\degree)\s*([CKF])\b/g, '$$$1^\\circ\\mathrm{$2}$$')
                        .replace(/\\Delta\s*H\b/g, '$\\Delta H$')
                        .replace(/\\Delta\s*S\b/g, '$\\Delta S$')
                        .replace(/\\Delta\s*G\b/g, '$\\Delta G$')
                        .replace(/\\(sigma|pi|mu|alpha|beta|gamma|delta|Delta|lambda|theta|omega|Omega)(?:_\{?[0-9a-zA-Z*]+\}?|\^\{?[0-9a-zA-Z*]+\}?)*/g, (m) => `$${m}$`)
                        .replace(/\\neq\b/g, '$\\neq$')
                        .replace(/\\infty\b/g, '$\\infty$')
                        .replace(/\\pm\b/g, '$\\pm$')
                        .replace(/\\times\b/g, '$\\times$');
                });

                return fixed;
            };

            // Markdown Table Parser
            const parseContentBlocks = (str) => {
                const tableRegex = /((?:^[ \t]*\|[^\n]+\|[ \t]*\n)+)/gm;
                const blocks = [];
                let lastIndex = 0;
                let match;

                while ((match = tableRegex.exec(str)) !== null) {
                    const tableText = match[0];
                    const lines = tableText.trim().split('\n').map(l => l.trim()).filter(Boolean);
                    if (lines.length >= 2 && /^\|(?:\s*:?-+:?\s*\|)+$/.test(lines[1])) {
                        if (match.index > lastIndex) {
                            blocks.push({ type: 'text', content: str.slice(lastIndex, match.index) });
                        }
                        const headerLine = lines[0];
                        const dataLines = lines.slice(2);
                        const parseRow = (line) => line.replace(/^\|/, '').replace(/\|$/, '').split('|').map(c => c.trim());
                        blocks.push({
                            type: 'table',
                            headers: parseRow(headerLine),
                            rows: dataLines.map(parseRow)
                        });
                        lastIndex = match.index + tableText.length;
                    }
                }

                if (lastIndex < str.length) {
                    blocks.push({ type: 'text', content: str.slice(lastIndex) });
                }

                return blocks;
            };

            // Render a text string into a DocumentFragment (math, units, bold, linebreaks)
            const renderFragment = (rawText) => {
                const prepared = preProcess(rawText);
                const parts = prepared.split(
                    /(\$\$[\s\S]*?\$\$|\$[\s\S]*?\$|\\ce\{(?:[^{}]|\{[^{}]*\})*\}|\\pu\{[^}]*\})/g
                );

                const frag = document.createDocumentFragment();

                parts.forEach(part => {
                    if (!part) return;

                    if (part.startsWith('$$') && part.endsWith('$$')) {
                        const rawMath = part.slice(2, -2);
                        const math = sanitizeMath(rawMath);

                        const isLikelyInline = (
                            math.length < 60 &&
                            !math.includes('\n') &&
                            !math.includes('\\begin') &&
                            !math.includes('\\sum') &&
                            !math.includes('\\int') &&
                            !math.includes('\\prod') &&
                            !math.includes('\\lim')
                        );

                        if (isLikelyInline) {
                            const span = document.createElement('span');
                            span.style.padding = '0 2px';
                            try {
                                katex.render(math, span, katexOpts(false));
                            } catch {
                                span.textContent = part;
                            }
                            frag.appendChild(span);
                        } else {
                            const div = document.createElement('div');
                            div.style.overflowX = 'auto';
                            div.style.textAlign = 'center';
                            div.style.margin = '8px 0';
                            div.style.whiteSpace = 'normal';
                            try {
                                katex.render(math, div, katexOpts(true));
                            } catch {
                                div.textContent = part;
                            }
                            frag.appendChild(div);
                        }

                    } else if (part.startsWith('$') && part.endsWith('$')) {
                        const rawMath = part.slice(1, -1);
                        const math = sanitizeMath(rawMath);
                        const span = document.createElement('span');
                        span.style.padding = '0 2px';
                        try {
                            katex.render(math, span, katexOpts(false));
                        } catch {
                            span.textContent = part;
                        }
                        frag.appendChild(span);

                    } else if (part.startsWith('\\ce{') || part.startsWith('\\pu{')) {
                        const span = document.createElement('span');
                        try {
                            katex.render(part, span, katexOpts(false));
                        } catch {
                            span.textContent = part;
                        }
                        frag.appendChild(span);

                    } else {
                        // Plain text segment: support line breaks and Markdown bold (**text**)
                        const subLines = part.split('\n');
                        subLines.forEach((subLine, lineIdx) => {
                            if (lineIdx > 0) {
                                frag.appendChild(document.createElement('br'));
                            }
                            if (subLine) {
                                const trimmedPart = subLine.trim();
                                if (trimmedPart.startsWith('\\') && trimmedPart.length > 2) {
                                    const span = document.createElement('span');
                                    try {
                                        katex.render(sanitizeMath(trimmedPart), span, katexOpts(false));
                                    } catch {
                                        span.textContent = subLine;
                                    }
                                    frag.appendChild(span);
                                } else if (subLine.includes('**')) {
                                    // Split on **bold**
                                    const boldParts = subLine.split(/\*\*(.*?)\*\*/g);
                                    boldParts.forEach((bp, bpIdx) => {
                                        if (bpIdx % 2 === 1) {
                                            const strong = document.createElement('strong');
                                            strong.textContent = bp;
                                            frag.appendChild(strong);
                                        } else if (bp) {
                                            frag.appendChild(document.createTextNode(bp));
                                        }
                                    });
                                } else {
                                    frag.appendChild(document.createTextNode(subLine));
                                }
                            }
                        });
                    }
                });

                return frag;
            };

            // Main renderer: processes content blocks including tables
            const mainFragment = document.createDocumentFragment();
            const blocks = parseContentBlocks(text);
            const hasTable = blocks.some(b => b.type === 'table');

            blocks.forEach(block => {
                if (block.type === 'table') {
                    const tableWrapper = document.createElement('div');
                    tableWrapper.style.overflowX = 'auto';
                    tableWrapper.style.margin = '14px 0';
                    tableWrapper.style.width = '100%';
                    tableWrapper.style.whiteSpace = 'normal';

                    const table = document.createElement('table');
                    table.style.width = '100%';
                    table.style.borderCollapse = 'collapse';
                    table.style.fontSize = '0.9rem';
                    table.style.border = '1px solid rgba(255, 255, 255, 0.15)';
                    table.style.borderRadius = '8px';
                    table.style.overflow = 'hidden';

                    const thead = document.createElement('thead');
                    const trHead = document.createElement('tr');
                    trHead.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';

                    block.headers.forEach(headerText => {
                        const th = document.createElement('th');
                        th.style.padding = '8px 12px';
                        th.style.border = '1px solid rgba(255, 255, 255, 0.12)';
                        th.style.textAlign = 'left';
                        th.style.fontWeight = '600';
                        th.style.color = '#cbd5e1';
                        th.appendChild(renderFragment(headerText));
                        trHead.appendChild(th);
                    });
                    thead.appendChild(trHead);
                    table.appendChild(thead);

                    const tbody = document.createElement('tbody');
                    block.rows.forEach((row, rIdx) => {
                        const tr = document.createElement('tr');
                        tr.style.backgroundColor = rIdx % 2 === 0 ? 'transparent' : 'rgba(255, 255, 255, 0.03)';
                        row.forEach(cellText => {
                            const td = document.createElement('td');
                            td.style.padding = '8px 12px';
                            td.style.border = '1px solid rgba(255, 255, 255, 0.08)';
                            td.style.textAlign = 'left';
                            td.style.color = '#e2e8f0';
                            td.appendChild(renderFragment(cellText));
                            tr.appendChild(td);
                        });
                        tbody.appendChild(tr);
                    });
                    table.appendChild(tbody);
                    tableWrapper.appendChild(table);
                    mainFragment.appendChild(tableWrapper);
                } else {
                    mainFragment.appendChild(renderFragment(block.content));
                }
            });

            containerRef.current.innerHTML = '';
            if (hasTable) {
                containerRef.current.style.display = 'block';
            } else {
                containerRef.current.style.display = 'inline';
            }
            containerRef.current.appendChild(mainFragment);
        };

        render().catch(() => {
            if (containerRef.current) containerRef.current.textContent = text;
        });

        return () => { cancelled = true; };

    }, [text]);

    return <span ref={containerRef} style={{ display: 'inline', whiteSpace: 'pre-line' }} />;
};

export default LatexRenderer;
