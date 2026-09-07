'use client';
import { useEffect, useRef } from 'react';

/**
 * LatexRenderer — renders text containing LaTeX math and chemistry expressions.
 *
 * Supported delimiters:
 *   $$...$$         — block (display) math
 *   $...$           — inline math
 *   \ce{...}        — chemical equations  (via mhchem)
 *   \pu{...}        — physical units      (via mhchem)
 *   \(...\)         — standard LaTeX inline math
 *   \[...\]         — standard LaTeX display math
 *
 * Examples:
 *   "The reaction $\ce{H2SO4 + 2NaOH -> Na2SO4 + 2H2O}$ is exothermic."
 *   "Acceleration due to gravity is $\pu{9.8 m/s^2}$."
 *   "$$\frac{F}{A} = P$$"
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
            // Dynamic imports — safe on Vercel, no SSR issues, no crash if mhchem path differs
            const { default: katex } = await import('katex');
            try {
                // mhchem registers \ce{} and \pu{} globally on katex
                await import('katex/contrib/mhchem/mhchem');
            } catch {
                // mhchem not available — \ce{} and \pu{} will fall back to plain text
            }

            if (cancelled || !containerRef.current) return;

            /**
             * KaTeX render options — used for all math blocks.
             * macros: shortcuts for common NEET/JEE physics & chemistry symbols.
             */
            const katexOpts = (displayMode) => ({
                displayMode,
                throwOnError: false,
                trust: true,
                strict: false,
                macros: {
                    // Units and Symbols
                    '\\degree':    '^{\\circ}',
                    '\\celsius':   '^{\\circ}\\mathrm{C}',
                    '\\angstrom':  '\\text{\\AA}',
                    '\\micro':     '\\mu',
                    '\\ohm':       '\\Omega',
                    '\\Ohm':       '\\Omega',
                    // Physics shortcuts
                    '\\kgms':      '\\mathrm{kg\\,m\\,s^{-1}}',
                    '\\ms':        '\\mathrm{m\\,s^{-1}}',
                    '\\mssq':      '\\mathrm{m\\,s^{-2}}',
                    '\\Nm':        '\\mathrm{N\\,m}',
                    '\\Jmol':      '\\mathrm{J\\,mol^{-1}}',
                    // Common Greek shorthand
                    '\\la':        '\\lambda',
                    '\\om':        '\\omega',
                    '\\De':        '\\Delta',
                    // Chemistry shortcuts
                    '\\kJ':        '\\mathrm{kJ}',
                    '\\mol':       '\\mathrm{mol}',
                    // Arrow styles used in reactions
                    '\\ra':        '\\rightarrow',
                    '\\rla':       '\\rightleftharpoons',
                }
            });

            /**
             * Fix \command(expr) → \command{expr} for known single-argument LaTeX commands.
             */
            const fixCommandParens = (str) => {
                const cmds = 'sqrt|vec|hat|bar|dot|ddot|tilde|overline|underline|mathbf|mathrm|mathit|text|boldsymbol';
                const re = new RegExp(`\\\\(${cmds})\\(([^()]+)\\)`, 'g');
                return str.replace(re, (m, cmd, content) => `\\${cmd}{${content}}`);
            };

            /**
             * Pre-process: fix common AI formatting mistakes, escaped characters, and delimiters.
             */
            const preProcess = (input) => {
                if (!input || typeof input !== 'string') return '';
                // Strip internal question/generator tags like [Top 100 AIR NEET], [Top 100 AIR Standard], [Ranker Standard], etc.
                let fixed = input.replace(/^\s*\[\s*(?:Top\b[^\]]*|Ranker\b[^\]]*|Olympiad\b[^\]]*|Cumulative\s+Grand\b[^\]]*)\]\s*/i, '');

                // 1. Normalize triple or more dollars ($$$+ → $$)
                fixed = fixed.replace(/\${3,}/g, () => '$$');

                // 1.1 Unescape escaped dollar signs (\$ → $)
                fixed = fixed.replace(/\\(\$)/g, '$1');

                // 2. Normalize quadruple & double backslashes before LaTeX commands: \\alpha → \alpha
                fixed = fixed.replace(/\\\\+([a-zA-Z])/g, '\\$1');

                // 3. Convert LaTeX \( ... \) and \[ ... \] to $ ... $ and $$ ... $$
                fixed = fixed.replace(/\\\(\s*\$?([\s\S]*?)\$?\s*\\\)/g, (m, g1) => `$${g1}$`);
                fixed = fixed.replace(/\\\[([\s\S]*?)\\\]/g, (m, g1) => `$$${g1}$$`);

                // 3.1. Fix $\frac${num}{den} where $ was placed right after \frac and optional trailing $
                fixed = fixed.replace(/\$\s*\\frac\s*\$\s*\{((?:[^{}]|\{[^{}]*\})*)\}\s*\{((?:[^{}]|\{[^{}]*\})*)\}\s*\$?(\$)?/g, (m, num, den, extra) => {
                    return `$\\frac{${num}}{${den}}$${extra || ''}`;
                });
                fixed = fixed.replace(/\\frac\s*\$\s*\{((?:[^{}]|\{[^{}]*\})*)\}\s*\{((?:[^{}]|\{[^{}]*\})*)\}\s*\$?(\$)?/g, (m, num, den, extra) => {
                    return `\\frac{${num}}{${den}}${extra || ''}`;
                });

                // 3.2. Fix displaced dollar on ion charges: e.g. \text{Fe}^{2}$+}$ -> \text{Fe}^{2+}$
                fixed = fixed.replace(/(\^[0-9]+|\^\{[0-9]+\})\$([+\-])\}/g, (m, sup, sign) => {
                    const cleanSup = sup.replace(/[{}^]/g, '');
                    return `^{${cleanSup}${sign}}$`;
                });

                // 3.3. Un-math-ify English words erroneously wrapped in $word$: e.g. $is$ -> is, $\text{Fe}^{2+}$$is$ -> $\text{Fe}^{2+}$ is
                fixed = fixed.replace(/(?<!\\)\$(is|and|or|of|in|to|with|for|where|which|when|then|if|at|by|from)\$(?!\$)/gi, ' $1 ');

                // 3.5. Clean accidental nested dollars inside fraction and command arguments
                fixed = fixed.replace(/\\frac\{([^{}]*)\}\s*\{((?:[^{}]|\{[^{}]*\})*)\}/g, (m, a, b) => {
                    return `\\frac{${a.replace(/\$/g, '')}}{${b.replace(/\$/g, '')}}`;
                });
                fixed = fixed.replace(/\\(sqrt|text|mathrm|mathbf)\{((?:[^{}]|\{[^{}]*\})*)\}/g, (m, cmd, inner) => {
                    return `\\${cmd}{${inner.replace(/\$/g, '')}}`;
                });

                // 4. Fix nested $...$$...$$: e.g. $E = E^\circ - $$\frac{...}$$ -> $E = E^\circ - \frac{...}$
                fixed = fixed.replace(/\$([^$]+?)\s*([+\-=])\s*\$\$\\frac\{([^$]+?)\}\$\$/g, (m, p1, p2, p3) => `$${p1} ${p2} \\frac{${p3}}$`);
                fixed = fixed.replace(/\$([^$]+?)\s*([+\-=])\s*\$\\frac\{([^$]+?)\}\$/g, (m, p1, p2, p3) => `$${p1} ${p2} \\frac{${p3}}$`);

                // 5. Fix opening $$ with closing $ for standalone formulas or options
                fixed = fixed.replace(/(^|\s)\$\$([a-zA-Z0-9\\_{}^+\-=().,;:/\s]+?)\$(?!\$)/g, (match, prefix, content) => {
                    const stripped = content.replace(/\\(text|mathrm|mathbf)\{[^{}]*\}/g, '').trim();
                    const words = stripped.match(/[a-zA-Z]{4,}/g) || [];
                    const nonCmdWords = words.filter(w => !['frac', 'sqrt', 'alpha', 'beta', 'rightleftharpoons', 'approx', 'times', 'cell'].includes(w));
                    if (nonCmdWords.length >= 3) return match;
                    return `${prefix}$$${content}$$`;
                });

                // 6. Fix opening $ with closing $$ for standalone formulas or options
                fixed = fixed.replace(/(?<!\$)\$([a-zA-Z0-9\\_{}^+\-=().,;:/\s]+?)\$\$(\s|[.,;]|$)/g, (match, content, suffix) => {
                    const stripped = content.replace(/\\(text|mathrm|mathbf)\{[^{}]*\}/g, '').trim();
                    const words = stripped.match(/[a-zA-Z]{4,}/g) || [];
                    const nonCmdWords = words.filter(w => !['frac', 'sqrt', 'alpha', 'beta', 'rightleftharpoons', 'approx', 'times', 'cell'].includes(w));
                    if (nonCmdWords.length >= 3) return match;
                    return `$$${content}$$${suffix}`;
                });

                // 7. Fix attached unit exponents: e.g. m/s$$^2$ -> $\text{m/s}^2$
                fixed = fixed.replace(/\b([a-zA-Z\/]+)\$\$?\^\{?([0-9\-]+)\}?\$?/g, (m, u, exp) => `$\\text{${u}}^{${exp}}$`);

                // 8. Fix \command(content) → \command{content} inside $...$
                fixed = fixed.replace(/(\$\$?)([\s\S]*?)(\$\$?)/g, (match, open, content, close) => {
                    // Also clean any accidental nested $ inside math mode
                    const cleanedContent = content.replace(/\$/g, '');
                    return open + fixCommandParens(cleanedContent) + close;
                });

                // 9. If entire input has NO $ delimiters and starts with a LaTeX command or number with unit
                // e.g. option stored as: \sqrt{\frac{hG}{c^3}} or -5744\text{ J}
                if (!fixed.includes('$')) {
                    const trimmed = fixed.trim();
                    if (/^[-+0-9.\s]*\\[a-zA-Z]/.test(trimmed)) {
                        fixed = `$${fixCommandParens(trimmed)}$`;
                    } else {
                        // Detect standalone LaTeX commands in normal text: e.g. \omega_0, \alpha, \vec{F}
                        // and wrap them in $...$
                        const bareLatex = /\\(alpha|beta|gamma|delta|epsilon|zeta|eta|theta|iota|kappa|lambda|mu|nu|xi|pi|rho|sigma|tau|upsilon|phi|chi|psi|omega|Delta|Theta|Lambda|Xi|Pi|Sigma|Phi|Psi|Omega|vec|hat|sqrt|frac|pm|times|approx|degree)(?![a-zA-Z])(?:_\{?[0-9a-zA-Z]+\}?|\^\{?[0-9a-zA-Z]+\}?|\{[^{}]*\})*/g;
                        fixed = fixed.replace(bareLatex, (m) => `$${m}$`);
                    }
                }

                return fixed;
            };

            const sanitizeMath = (math) => {
                let m = math.trim();
                // Remove accidental inner dollar signs
                m = m.replace(/\$/g, '');
                // Map unicode Greek and symbols
                m = m.replace(/μ/g, '\\mu ')
                     .replace(/Ω/g, '\\Omega ')
                     .replace(/°C/g, '^\\circ\\mathrm{C}')
                     .replace(/°/g, '^\\circ ')
                     .replace(/×/g, '\\times ')
                     .replace(/±/g, '\\pm ');
                return fixCommandParens(m);
            };

            /**
             * Split input into segments: $$, $, \ce{}, \pu{}, or plain text.
             */
            const processText = (input) => {
                const prepared = preProcess(input);

                const parts = prepared.split(
                    /(\$\$[\s\S]*?\$\$|\$[\s\S]*?\$|\\ce\{(?:[^{}]|\{[^{}]*\})*\}|\\pu\{[^}]*\})/g
                );

                const fragment = document.createDocumentFragment();

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
                            fragment.appendChild(span);
                        } else {
                            const div = document.createElement('div');
                            div.style.overflowX = 'auto';
                            div.style.textAlign = 'center';
                            div.style.margin = '8px 0';
                            try {
                                katex.render(math, div, katexOpts(true));
                            } catch {
                                div.textContent = part;
                            }
                            fragment.appendChild(div);
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
                        fragment.appendChild(span);

                    } else if (part.startsWith('\\ce{') || part.startsWith('\\pu{')) {
                        const span = document.createElement('span');
                        try {
                            katex.render(part, span, katexOpts(false));
                        } catch {
                            span.textContent = part;
                        }
                        fragment.appendChild(span);

                    } else {
                        const span = document.createElement('span');
                        const trimmedPart = part.trim();
                        // Last-resort: if segment looks like raw LaTeX (starts with \),
                        // attempt to render it as inline math before falling back to plain text.
                        if (trimmedPart.startsWith('\\') && trimmedPart.length > 2) {
                            try {
                                katex.render(sanitizeMath(trimmedPart), span, katexOpts(false));
                            } catch {
                                span.textContent = part;
                            }
                        } else {
                            span.textContent = part;
                        }
                        fragment.appendChild(span);
                    }
                });

                return fragment;
            };

            containerRef.current.innerHTML = '';
            containerRef.current.appendChild(processText(text));
        };

        render().catch(() => {
            // Fallback: show plain text if everything fails
            if (containerRef.current) containerRef.current.textContent = text;
        });

        return () => { cancelled = true; };

    }, [text]);

    return <span ref={containerRef} />;
};

export default LatexRenderer;
