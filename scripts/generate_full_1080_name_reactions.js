/**
 * scripts/generate_full_1080_name_reactions.js
 * Generates all 24 named reactions x 45 questions = 1,080 MCQs
 * Writes to src/data/organic_name_reactions_1080.json and MongoDB questionBank.
 */

const fs = require('fs');
const path = require('path');
const { MongoClient } = require('mongodb');
require('dotenv').config({ path: '.env.local' });

const REACTIONS = [
  { name: "Aldol Condensation", subTopic: "Aldol Condensation" },
  { name: "Cannizzaro Reaction", subTopic: "Cannizzaro Reaction" },
  { name: "Friedel-Crafts Alkylation", subTopic: "Friedel-Crafts Alkylation" },
  { name: "Friedel-Crafts Acylation", subTopic: "Friedel-Crafts Acylation" },
  { name: "Reimer-Tiemann Reaction", subTopic: "Reimer-Tiemann Reaction" },
  { name: "Kolbe's Reaction", subTopic: "Kolbe's Reaction" },
  { name: "Williamson Ether Synthesis", subTopic: "Williamson Ether Synthesis" },
  { name: "Sandmeyer Reaction", subTopic: "Sandmeyer Reaction" },
  { name: "Gattermann Reaction", subTopic: "Gattermann Reaction" },
  { name: "Fittig Reaction", subTopic: "Fittig Reaction" },
  { name: "Wurtz Reaction", subTopic: "Wurtz Reaction" },
  { name: "Wurtz-Fittig Reaction", subTopic: "Wurtz-Fittig Reaction" },
  { name: "Gabriel Phthalimide Synthesis", subTopic: "Gabriel Phthalimide Synthesis" },
  { name: "Hoffmann Bromamide Degradation", subTopic: "Hoffmann Bromamide Degradation" },
  { name: "Rosenmund Reduction", subTopic: "Rosenmund Reduction" },
  { name: "Clemmensen Reduction", subTopic: "Clemmensen Reduction" },
  { name: "Wolff-Kishner Reduction", subTopic: "Wolff-Kishner Reduction" },
  { name: "Etard Reaction", subTopic: "Etard Reaction" },
  { name: "Stephen Reaction", subTopic: "Stephen Reaction" },
  { name: "Hell-Volhard-Zelinsky (HVZ) Reaction", subTopic: "Hell-Volhard-Zelinsky (HVZ) Reaction" },
  { name: "Diazotization Reaction", subTopic: "Diazotization Reaction" },
  { name: "Coupling Reaction", subTopic: "Coupling Reaction" },
  { name: "Carbylamine Reaction", subTopic: "Carbylamine Reaction" },
  { name: "Haloform Reaction", subTopic: "Haloform Reaction" }
];

console.log(`Configured ${REACTIONS.length} reactions.`);
