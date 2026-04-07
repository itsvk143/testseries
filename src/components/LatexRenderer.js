'use client';
import 'katex/dist/katex.min.css';
import katex from 'katex';
// mhchem is bundled with katex >= 0.13 — import to register \ce{} and \pu{} commands
import 'katex/contrib/mhchem/mhchem';
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
                // Common Greek shorthand (if not using \alpha etc.)
                '\\la':    '\\lambda',
                '\\om':    '\\omega',
                '\\De':    '\\Delta',
                // Chemistry shortcuts
                '\\kJ':    '\\mathrm{kJ}',
                '\\mol':   '\\mathrm{mol}',
                // Arrow styles often used in reactions
                '\\ra':    '\\rightarrow',
                '\\rla':   '\\rightleftharpoons',
            }
        });

        /**
         * Split input into segments that are either:
         *  - $$...$$ block math
         *  - $...$   inline math
         *  - \ce{...} or \pu{...} chemical/unit expressions (wrapped for katex)
         *  - plain text
         */
        const processText = (input) => {
            // Combined regex: matches $$, $, or \ce{}/\pu{} groups
            const parts = input.split(
                /(\$\$[\s\S]*?\$\$|\$[\s\S]*?\$|\\ce\{(?:[^{}]|\{[^{}]*\})*\}|\\pu\{[^}]*\})/g
            );

            const fragment = document.createDocumentFragment();

            parts.forEach(part => {
                if (!part) return;

                if (part.startsWith('$$') && part.endsWith('$$')) {
                    // ── Block math ──────────────────────────────────
                    const math = part.slice(2, -2).trim();
                    const div = document.createElement('div');
                    div.style.overflowX = 'auto';
                    try {
                        katex.render(math, div, katexOpts(true));
                    } catch (e) {
                        div.textContent = part;
                    }
                    fragment.appendChild(div);

                } else if (part.startsWith('$') && part.endsWith('$')) {
                    // ── Inline math ───────────────────────────────
                    const math = part.slice(1, -1).trim();
                    const span = document.createElement('span');
                    try {
                        katex.render(math, span, katexOpts(false));
                    } catch (e) {
                        span.textContent = part;
                    }
                    fragment.appendChild(span);

                } else if (part.startsWith('\\ce{') || part.startsWith('\\pu{')) {
                    // ── Chemical equation / physical unit ─────────
                    // Wrap in $ so KaTeX sees it as a math expression
                    const span = document.createElement('span');
                    try {
                        katex.render(part, span, katexOpts(false));
                    } catch (e) {
                        span.textContent = part;
                    }
                    fragment.appendChild(span);

                } else {
                    // ── Plain text ────────────────────────────────
                    const span = document.createElement('span');
                    span.textContent = part;
                    fragment.appendChild(span);
                }
            });

            return fragment;
        };

        containerRef.current.innerHTML = '';
        containerRef.current.appendChild(processText(text));

    }, [text]);

    return <span ref={containerRef} />;
};

export default LatexRenderer;
