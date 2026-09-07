require("dotenv").config({ path: ".env.local" });
const { MongoClient } = require("mongodb");

async function replace11() {
  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  const col = client.db().collection("questionBank");

  const docs = await col.find({
    subject: "Chemistry",
    chapter: /some basic concept/i,
    subTopic: "Stoichiometry",
    question: /What volume of hydrogen gas at STP is liberated when .* reacts with excess dilute hydrochloric acid\?/
  }).toArray();

  console.log("Found docs to replace:", docs.length);

  const replacements = [
    {
      q: "What is the mass of $\\text{CO}_2$ produced by the complete combustion of $114\\text{ g}$ of octane ($\\text{C}_8\\text{H}_{18}$, molar mass = $114\\text{ g/mol}$)?",
      opts: ["$352\\text{ g}$", "$176\\text{ g}$", "$704\\text{ g}$", "$88\\text{ g}$"],
      ans: 0,
      opt: "a",
      expl: "Combustion: $\\text{C}_8\\text{H}_{18} + 12.5\\text{O}_2 \\rightarrow 8\\text{CO}_2 + 9\\text{H}_2\\text{O}$. Moles of octane = $114 / 114 = 1.0\\text{ mol}$. Moles of $\\text{CO}_2 = 8.0\\text{ mol}$. Mass of $\\text{CO}_2 = 8.0 \\times 44 = 352\\text{ g}$."
    },
    {
      q: "When excess ozone is bubbled through an acidified potassium iodide solution: $2\\text{KI} + \\text{H}_2\\text{O} + \\text{O}_3 \\rightarrow 2\\text{KOH} + \\text{I}_2 + \\text{O}_2$, what mass of iodine (Atomic mass = $127$) is liberated from $0.2\\text{ moles}$ of ozone?",
      opts: ["$50.8\\text{ g}$", "$25.4\\text{ g}$", "$12.7\\text{ g}$", "$101.6\\text{ g}$"],
      ans: 0,
      opt: "a",
      expl: "Mole ratio $\\text{O}_3 : \\text{I}_2 = 1 : 1$. Moles of $\\text{I}_2 = 0.2\\text{ mol}$. Mass of $\\text{I}_2 = 0.2 \\times 254 = 50.8\\text{ g}$."
    },
    {
      q: "What mass of sulfuric acid is consumed in the manufacture of superphosphate from $310\\text{ g}$ of calcium phosphate: $\\text{Ca}_3(\\text{PO}_4)_2 + 2\\text{H}_2\\text{SO}_4 \\rightarrow \\text{Ca}(\\text{H}_2\\text{PO}_4)_2 + 2\\text{CaSO}_4$?",
      opts: ["$196\\text{ g}$", "$98\\text{ g}$", "$392\\text{ g}$", "$49\\text{ g}$"],
      ans: 0,
      opt: "a",
      expl: "Moles of $\\text{Ca}_3(\\text{PO}_4)_2 = 310 / 310 = 1.0\\text{ mol}$. Moles of $\\text{H}_2\\text{SO}_4 = 2.0\\text{ mol}$. Mass of $\\text{H}_2\\text{SO}_4 = 2.0 \\times 98 = 196\\text{ g}$."
    },
    {
      q: "Bleaching powder decomposes in the presence of cobalt catalyst: $2\\text{CaOCl}_2 \\rightarrow 2\\text{CaCl}_2 + \\text{O}_2$. What volume of $\\text{O}_2$ gas at STP is collected from $12.7\\text{ g}$ of bleaching powder (molar mass = $127\\text{ g/mol}$)?",
      opts: ["$1.12\\text{ L}$", "$2.24\\text{ L}$", "$0.56\\text{ L}$", "$3.36\\text{ L}$"],
      ans: 0,
      opt: "a",
      expl: "Moles of $\\text{CaOCl}_2 = 12.7 / 127 = 0.10\\text{ mol}$. Moles of $\\text{O}_2 = 0.10 / 2 = 0.05\\text{ mol}$. Volume at STP = $0.05 \\times 22.4\\text{ L} = 1.12\\text{ L}$."
    },
    {
      q: "When gold dissolves in aqua regia: $\\text{Au} + 4\\text{HCl} + \\text{HNO}_3 \\rightarrow \\text{HAuCl}_4 + \\text{NO} + 2\\text{H}_2\\text{O}$, what volume of $\\text{NO}$ gas at STP is liberated per mole of gold dissolved?",
      opts: ["$22.4\\text{ L}$", "$11.2\\text{ L}$", "$44.8\\text{ L}$", "$5.6\\text{ L}$"],
      ans: 0,
      opt: "a",
      expl: "The stoichiometric ratio is $1\\text{ mole of Au}$ to $1\\text{ mole of NO}$. At STP, $1\\text{ mole of NO}$ occupies $22.4\\text{ L}$."
    },
    {
      q: "What volume of $\\text{CO}_2$ gas at STP is released during the blast furnace reduction of $160\\text{ g}$ of haematite: $\\text{Fe}_2\\text{O}_3 + 3\\text{CO} \\rightarrow 2\\text{Fe} + 3\\text{CO}_2$?",
      opts: ["$67.2\\text{ L}$", "$22.4\\text{ L}$", "$44.8\\text{ L}$", "$33.6\\text{ L}$"],
      ans: 0,
      opt: "a",
      expl: "Moles of $\\text{Fe}_2\\text{O}_3 = 160 / 160 = 1.0\\text{ mol}$. Moles of $\\text{CO}_2 = 3.0\\text{ mol}$. Volume at STP = $3.0 \\times 22.4\\text{ L} = 67.2\\text{ L}$."
    },
    {
      q: "How many grams of sodium zincate ($\\text{Na}_2\\text{ZnO}_2$, molar mass = $143.4\\text{ g/mol}$) are produced by dissolving $8.14\\text{ g}$ of $\\text{ZnO}$ in excess sodium hydroxide solution: $\\text{ZnO} + 2\\text{NaOH} \\rightarrow \\text{Na}_2\\text{ZnO}_2 + \\text{H}_2\\text{O}$?",
      opts: ["$14.34\\text{ g}$", "$28.68\\text{ g}$", "$7.17\\text{ g}$", "$3.58\\text{ g}$"],
      ans: 0,
      opt: "a",
      expl: "Moles of $\\text{ZnO} = 8.14 / 81.4 = 0.10\\text{ mol}$. Moles of $\\text{Na}_2\\text{ZnO}_2 = 0.10\\text{ mol}$. Mass = $0.10 \\times 143.4 = 14.34\\text{ g}$."
    },
    {
      q: "In the Contact process, sulfur is burned to sulfur dioxide: $\\text{S} + \\text{O}_2 \\rightarrow \\text{SO}_2$. What volume of air ($21\\% \\text{ O}_2$ by volume) at STP is needed to burn $16.0\\text{ g}$ of sulfur?",
      opts: ["$53.33\\text{ L}$", "$11.20\\text{ L}$", "$22.40\\text{ L}$", "$26.67\\text{ L}$"],
      ans: 0,
      opt: "a",
      expl: "Moles of S = $16 / 32 = 0.50\\text{ mol}$. Volume of $\\text{O}_2 = 0.50 \\times 22.4 = 11.2\\text{ L}$. Volume of air = $11.2 / 0.21 \\approx 53.33\\text{ L}$."
    },
    {
      q: "What volume of hydrogen gas at STP is liberated when $2.43\\text{ g}$ of magnesium reacts with excess steam at elevated temperatures: $\\text{Mg} + \\text{H}_2\\text{O}(g) \\rightarrow \\text{MgO} + \\text{H}_2$?",
      opts: ["$2.24\\text{ L}$", "$4.48\\text{ L}$", "$1.12\\text{ L}$", "$0.56\\text{ L}$"],
      ans: 0,
      opt: "a",
      expl: "Moles of Mg = $2.43 / 24.3 = 0.10\\text{ mol}$. Moles of $\\text{H}_2 = 0.10\\text{ mol}$. Volume at STP = $0.10 \\times 22.4\\text{ L} = 2.24\\text{ L}$."
    },
    {
      q: "In the human stomach, an antacid containing $0.84\\text{ g}$ of sodium bicarbonate reacts with gastric juice ($\\text{HCl}$): $\\text{NaHCO}_3 + \\text{HCl} \\rightarrow \\text{NaCl} + \\text{H}_2\\text{O} + \\text{CO}_2$. What volume of $\\text{CO}_2$ gas at STP is generated?",
      opts: ["$0.224\\text{ L}$", "$0.448\\text{ L}$", "$1.120\\text{ L}$", "$2.240\\text{ L}$"],
      ans: 0,
      opt: "a",
      expl: "Moles of $\\text{NaHCO}_3 = 0.84 / 84 = 0.010\\text{ mol}$. Moles of $\\text{CO}_2 = 0.010\\text{ mol}$. Volume at STP = $0.010 \\times 22.4\\text{ L} = 0.224\\text{ L}$ ($224\\text{ mL}$)."
    },
    {
      q: "Arsenious acid is quantitatively oxidized by iodine in weakly alkaline solution: $\\text{H}_3\\text{AsO}_3 + \\text{I}_2 + \\text{H}_2\\text{O} \\rightarrow \\text{H}_3\\text{AsO}_4 + 2\\text{I}^- + 2\\text{H}^+$. How many grams of iodine ($\\text{I}_2$, molar mass = $253.8\\text{ g/mol}$) are consumed per gram of $\\text{H}_3\\text{AsO}_3$ (molar mass = $125.9\\text{ g/mol}$)?",
      opts: ["$2.016\\text{ g}$", "$1.008\\text{ g}$", "$0.496\\text{ g}$", "$4.032\\text{ g}$"],
      ans: 0,
      opt: "a",
      expl: "Mole ratio $\\text{I}_2 : \\text{H}_3\\text{AsO}_3 = 1 : 1$. Mass of $\\text{I}_2$ per gram of acid = $253.8 / 125.9 \\approx 2.016\\text{ g}$."
    }
  ];

  if (docs.length !== replacements.length) {
    throw new Error(`Mismatch: ${docs.length} vs ${replacements.length}`);
  }

  const bulk = docs.map((d, i) => ({
    updateOne: {
      filter: { _id: d._id },
      update: {
        $set: {
          question: replacements[i].q,
          options: replacements[i].opts,
          correctAnswer: replacements[i].ans,
          correctOption: replacements[i].opt,
          explanation: replacements[i].expl,
          updatedAt: new Date()
        }
      }
    }
  }));

  const res = await col.bulkWrite(bulk);
  console.log("Modified count:", res.modifiedCount);

  await client.close();
}

replace11().catch(err => {
  console.error("Error:", err);
  process.exit(1);
});
