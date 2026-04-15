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
 *
 * Examples:
 *   "The reaction $\ce{H2SO4 + 2NaOH -> Na2SO4 + 2H2O}$ is exothermic."
 *   "Acceleration due to gravity is $\pu{9.8 m/s^2}$."
 *   "$$\frac{F}{A} = P$$"
 */
const LatexRenderer = ({ text }) => {
    const containerRef = useRef(null);

    useEffect(() => {
        if (!containerRef.current || !text) return;

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
                trust: false,
                strict: false,
                macros: {
                    // Physics shortcuts
                    '\\kgms':  '\\mathrm{kg\\,m\\,s^{-1}}',
                    '\\ms':    '\\mathrm{m\\,s^{-1}}',
                    '\\mssq':  '\\mathrm{m\\,s^{-2}}',
                    '\\Nm':    '\\mathrm{N\\,m}',
                    '\\Jmol':  '\\mathrm{J\\,mol^{-1}}',
                    // Common Greek shorthand
                    '\\la':    '\\lambda',
                    '\\om':    '\\omega',
                    '\\De':    '\\Delta',
                    // Chemistry shortcuts
                    '\\kJ':    '\\mathrm{kJ}',
                    '\\mol':   '\\mathrm{mol}',
                    // Arrow styles used in reactions
                    '\\ra':    '\\rightarrow',
                    '\\rla':   '\\rightleftharpoons',
                }
            });

            /**
             * Pre-process: fix common AI formatting mistakes before splitting:
             * 1. Orphaned closing $  e.g. \sqrt{\frac{hG}{c^3}}$  → $\sqrt{\frac{hG}{c^3}}$
             * 2. Double-escaped backslashes \\frac → \frac (stored by AI as JSON-safe)
             */
            const preProcess = (input) => {
                // Fix: LaTeX expression followed by bare $ with no opening $ 
                // Match: starts with \ and ends with }$ or similar, not already wrapped in $
                let fixed = input.replace(/(^|[^$])(\\[a-zA-Z]+(?:\{[^$]*?\})+)\$(?!\$)/g, (match, pre, expr) => {
                    return `${pre}$${expr}$`;
                });
                return fixed;
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
                        const math = part.slice(2, -2).trim();

                        // Treat short $$...$$ as INLINE if it looks like a unit or simple value.
                        // This prevents units like "m/s" or "J s" from being rendered as
                        // display-block elements breaking the sentence onto a new line.
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
                            try { katex.render(math, span, katexOpts(false)); }
                            catch { span.textContent = part; }
                            fragment.appendChild(span);
                        } else {
                            const div = document.createElement('div');
                            div.style.overflowX = 'auto';
                            div.style.textAlign = 'center';
                            div.style.margin = '8px 0';
                            try { katex.render(math, div, katexOpts(true)); }
                            catch { div.textContent = part; }
                            fragment.appendChild(div);
                        }

                    } else if (part.startsWith('$') && part.endsWith('$')) {
                        const math = part.slice(1, -1).trim();
                        const span = document.createElement('span');
                        span.style.padding = '0 2px';
                        try { katex.render(math, span, katexOpts(false)); }
                        catch { span.textContent = part; }
                        fragment.appendChild(span);

                    } else if (part.startsWith('\\ce{') || part.startsWith('\\pu{')) {
                        const span = document.createElement('span');
                        try { katex.render(part, span, katexOpts(false)); }
                        catch { span.textContent = part; }
                        fragment.appendChild(span);

                    } else {
                        const span = document.createElement('span');
                        span.textContent = part;
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
