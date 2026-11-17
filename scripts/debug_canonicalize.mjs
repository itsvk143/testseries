import fs from 'fs';

const q1Text = 'For the reaction $\\mathrm{2N_2O_5(g) \\longrightarrow 4NO_2(g) + O_2(g)}$, the rate of formation of $\\mathrm{NO_2}$ is $2.8 \\times 10^{-3} \\mathrm{M\\,s^{-1}}$. The rate of disappearance of $\\mathrm{N_2O_5}$ and the rate of the reaction respectively are:';

let s = q1Text;
console.log('Initial:', s);

s = s.replace(/\${3,}/g, () => '$$');
s = s.replace(/\\(\$)/g, '$1');
s = s.replace(/\\\\+([a-zA-Z])/g, '\\$1');
s = s.replace(/\\\(\s*\$?([\s\S]*?)\$?\s*\\\)/g, (m, g1) => `$${g1}$`);
s = s.replace(/\\\[([\s\S]*?)\\\]/g, (m, g1) => `$$${g1}$$`);
console.log('After 3:', s);

s = s.replace(/(?<!\\)\$(is|and|or|of|in|to|with|for|where|which|when|then|if|at|by|from)\$(?!\$)/gi, ' $1 ');
console.log('After 3.3:', s);

s = s.replace(/(^|\s)\$\$([a-zA-Z0-9\\_{}^+\-=().,;:/\s]+?)\$(?!\$)/g, (match, prefix, content) => {
    return `${prefix}$$${content}$$`;
});
s = s.replace(/(?<!\$)\$([a-zA-Z0-9\\_{}^+\-=().,;:/\s]+?)\$\$(\s|[.,;]|$)/g, (match, content, suffix) => {
    return `$$${content}$$${suffix}`;
});
console.log('After 6:', s);

s = s.replace(/(\$\$?)([\s\S]*?)(\$\$?)/g, (match, open, content, close) => {
    const cleanContent = content.replace(/\$/g, '');
    return open + cleanContent + close;
});
console.log('After 8:', s);

const segments = s.split(/(\$\$[\s\S]*?\$\$|\$[\s\S]*?\$)/g);
console.log('Segments:', segments);
