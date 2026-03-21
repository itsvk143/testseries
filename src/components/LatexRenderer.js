'use client';
import 'katex/dist/katex.min.css';
import katex from 'katex';
import { useEffect, useRef } from 'react';

const LatexRenderer = ({ text }) => {
    const containerRef = useRef(null);

    useEffect(() => {
        if (!containerRef.current || !text) return;

        // Simple parser to separate text from LaTeX
        // delimiter: $ for inline, $$ for block
        const processText = (input) => {
            // Logic to split by $...$ and $$...$$
            // This is a basic implementation.
            const parts = input.split(/(\$\$[\s\S]*?\$\$|\$[\s\S]*?\$)/g);

            const fragment = document.createDocumentFragment();

            parts.forEach(part => {
                if (part.startsWith('$$') && part.endsWith('$$')) {
                    // Block math
                    const math = part.slice(2, -2);
                    const span = document.createElement('div');
                    try {
                        katex.render(math, span, { displayMode: true, throwOnError: false });
                    } catch (e) { span.textContent = part; }
                    fragment.appendChild(span);
                } else if (part.startsWith('$') && part.endsWith('$')) {
                    // Inline math
                    const math = part.slice(1, -1);
                    const span = document.createElement('span');
                    try {
                        katex.render(math, span, { displayMode: false, throwOnError: false });
                    } catch (e) { span.textContent = part; }
                    fragment.appendChild(span);
                } else {
                    // Plain text
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
