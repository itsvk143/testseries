import fs from "fs";
import { MongoClient, ObjectId } from "mongodb";

const env = fs.readFileSync(".env.local", "utf8");
let uri = "";
for (const line of env.split("\n")) {
  if (line.startsWith("MONGODB_URI=")) {
    uri = line.replace("MONGODB_URI=", "").trim().replace(/^['"]|['"]$/g, "");
  }
}

const client = new MongoClient(uri);
await client.connect();
const db = client.db();

const test = await db.collection("testPapers").findOne({ testId: "neet-CHAPTER-Chemistry-Chemical-Kinetics-12" });
const qIds = test.questions.map(id => ObjectId.isValid(id) && id.length === 24 ? new ObjectId(id) : id);
const qDocs = await db.collection("questionBank").find({ _id: { $in: qIds } }).toArray();
const map = new Map(qDocs.map(q => [q._id.toString(), q]));

let updatedCount = 0;

for (let i = 0; i < test.questions.length; i++) {
  const qId = test.questions[i];
  const q = map.get(qId.toString());
  if (!q) continue;

  let text = q.question || q.questionText || q.text || "";
  let explanation = q.explanation || "";
  let options = Array.isArray(q.options) ? [...q.options] : [];

  const originalText = text;
  const originalExp = explanation;

  // 1. Clean Assertion-Reason formatting in text: remove stray **
  if (text.includes("Assertion (A):") && text.includes("Reason (R):")) {
    text = text.replace(/Assertion \(A\):\s*\*\*\s*/gi, "Assertion (A): ")
               .replace(/\s*\*\*\s*\n+Reason \(R\):\s*\*\*\s*/gi, "\nReason (R): ")
               .replace(/\s*\*\*\s*$/g, "")
               .replace(/\n\s*\*\*\s*\n/g, "\n");
  }

  // 2. Clean specific question text issues
  // Q8: k_{obs} -> $k_{\text{obs}}$
  text = text.replace(/\bk_\{obs\}\b/g, "$k_{\\text{obs}}$")
             .replace(/\bk_\{th\}\b/g, "$k_{\\text{th}}$")
             .replace(/\(E_\{th\}\)/g, "($E_{\\text{th}}$)")
             .replace(/\bE_\{th\}\b/g, "$E_{\\text{th}}$")
             .replace(/\(E_\{a,b\}\)/g, "($E_{a,b}$)")
             .replace(/\(E_\{a,f\}\)/g, "($E_{a,f}$)")
             .replace(/\bE_\{a,b\}\b/g, "$E_{a,b}$")
             .replace(/\bE_\{a,f\}\b/g, "$E_{a,f}$")
             .replace(/factor A\b/g, "factor $A$")
             .replace(/\(T → \$\\infty\$\)/g, "($T \\longrightarrow \\infty$)")
             .replace(/\(T → \\infty\)/g, "($T \\longrightarrow \\infty$)")
             .replace(/greater than \$E_\{a\}\$ if:/g, "greater than $E_a$ if:")
             .replace(/\$E_\{a\}\$/g, "$E_a$")
             .replace(/\$E_\{th\}\$/g, "$E_{\\text{th}}$")
             .replace(/\$K_\{c\}\$/g, "$K_c$")
             .replace(/\$P_\{i\}\$/g, "$P_i$")
             .replace(/\$P_\{t\}\$/g, "$P_t$")
             .replace(/-\$2\.303/g, "$-2.303");

  // 3. Clean explanations
  explanation = explanation
    // Fix broken superscripts: $10^{1}$^{6} -> $10^{16}$
    .replace(/\$10\^\{?1\}?\$\^\{?6\}?/g, "$10^{16}$")
    .replace(/\$10\^\{?1\}?\$\^\{?5\}?/g, "$10^{15}$")
    // Fix broken brackets or math delimiters
    .replace(/r_\{2\}\s*\/\s*r_\{1\}\s*=\s*2ⁿ/g, "$r_2 / r_1 = 2^n$")
    .replace(/2ⁿ/g, "$2^n$")
    .replace(/2\^\{1\}\s*·\s*2\^\{1\/2\}/g, "$2^1 \\cdot 2^{1/2}$")
    .replace(/\$Rate = k\[\\mathrm\{A\}\]\]ⁿ/g, "$Rate = k[\\mathrm{A}]^n$")
    .replace(/k\[\\mathrm\{A\}\]\]ⁿ/g, "k[\\mathrm{A}]^n")
    .replace(/\$Rate = k\[\\mathrm\{A\}\]\$ⁿ/g, "$Rate = k[\\mathrm{A}]^n$")
    .replace(/\[R\]_tⁿ\^\{-1\}/g, "[R]_t^{n-1}")
    .replace(/\[R\]_\{0\}ⁿ\^\{-1\}/g, "[R]_0^{n-1}")
    .replace(/1\/\(n - 1\)\s*\[\s*1\/\$\[R\]_t\$ⁿ\^\{-1\}\s*-\s*1\/\$\[R\]_\{0\}\$ⁿ\^\{-1\}\s*\]\s*=\s*k\s*t/g, "$\\frac{1}{n-1}\\left[\\frac{1}{[R]^{n-1}} - \\frac{1}{[R]_0^{n-1}}\\right] = kt$")
    .replace(/\$S_\{N2\}\$/g, "$\\mathrm{S_N2}$")
    .replace(/\$E_\{th\}\$/g, "$E_{\\text{th}}$")
    .replace(/\bk_\{obs\}\b/g, "$k_{\\text{obs}}$")
    .replace(/k_\{1\}/g, "$k_1$")
    .replace(/k_\{2\}/g, "$k_2$")
    .replace(/\\mathrm\{BrO_\{3\}\^\{-\}\(aq\)\}\s*\+\s*5Br\^-\(aq\)\s*\+\s*6H⁺\\mathrm\{\(aq\)\s*\\longright/g, "\\mathrm{BrO_3^-(aq) + 5Br^-(aq) + 6H^+(aq) \\longrightarrow")
    .replace(/\\longright\s*$/g, "\\longrightarrow");

  // Also clean options if any have unformatted strings
  let optionsChanged = false;
  const cleanedOpts = options.map(opt => {
    let optText = typeof opt === 'string' ? opt : (opt.text || '');
    const orig = optText;
    optText = optText.replace(/\b16times\b/g, "$16\\text{ times}$")
                     .replace(/\b64times\b/g, "$64\\text{ times}$")
                     .replace(/\b1\/64times\b/g, "$\\frac{1}{64}\\text{ times}$")
                     .replace(/\b32times\b/g, "$32\\text{ times}$")
                     .replace(/\b256times\b/g, "$256\\text{ times}$")
                     .replace(/\b512times\b/g, "$512\\text{ times}$")
                     .replace(/\b128times\b/g, "$128\\text{ times}$")
                     .replace(/\(1\.5\)\^5\b/g, "$(1.5)^5$")
                     .replace(/\(1\.5\)\^\{50\}\b/g, "$(1.5)^{50}$")
                     .replace(/\(2\/3\)\^5\b/g, "$(2/3)^5$")
                     .replace(/5 × 1\.5/g, "$5 \\times 1.5$")
                     .replace(/1\/16\b/g, "1/16")
                     .replace(/1\/32\b/g, "1/32")
                     .replace(/1\/64\b/g, "1/64")
                     .replace(/1\/24\b/g, "1/24")
                     .replace(/\\ln\\left\(\$\\frac\{([^{}]+)\}\{([^{}]+)\}\$\\right\)\s*is plotted against t,\s*with slope\s*=\s*([^\n]+)/g, "$\\ln\\left(\\frac{$1}{$2}\\right)$ is plotted against t, with slope = $$3$")
                     .replace(/-\$\\frac\{E_a\}\{R\}\s*and\s*\\ln A\$/g, "$-\\frac{E_a}{R}$ and $\\ln A$")
                     .replace(/-\$\\frac\{E_a\}\{2\.303 R\}\s*and\s*\\log_\{10\} A\$/g, "$-\\frac{E_a}{2.303 R}$ and $\\log_{10} A$")
                     .replace(/-\$\\frac\{2\.303 R\}\{E_a\}\s*and\s*\\log_\{10\} A\$/g, "$-\\frac{2.303 R}{E_a}$ and $\\log_{10} A$")
                     .replace(/\$\\frac\{E_a\}\{2\.303 R\}\s*and\s*-\\log_\{10\} A\$/g, "$\\frac{E_a}{2.303 R}$ and $-\\log_{10} A$");
    
    if (optText !== orig) optionsChanged = true;
    return typeof opt === 'string' ? optText : { ...opt, text: optText };
  });

  if (text !== originalText || explanation !== originalExp || optionsChanged) {
    updatedCount++;
    console.log(`Updating Q${i + 1} (ID: ${qId})...`);
    await db.collection("questionBank").updateOne(
      { _id: q._id },
      {
        $set: {
          question: text,
          text: text,
          explanation: explanation,
          options: cleanedOpts,
          updatedAt: new Date()
        }
      }
    );
  }
}

console.log(`\nChemical Kinetics polish complete! Updated ${updatedCount} questions in questionBank.`);
await client.close();
