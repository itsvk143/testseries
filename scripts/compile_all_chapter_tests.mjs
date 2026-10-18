import fs from 'fs';
import chaptersPkg from '../src/data/chapters.js';
const { neetSyllabus, jeeMainsSyllabus } = chaptersPkg;
import utilsPkg from '../src/data/utils.js';
const { generateTests } = utilsPkg;
import bitsatPkg from '../src/data/exams/bitsat.js';
const { bitsatTests } = bitsatPkg;

// Generate NEET chapter tests
const neetChapterTests = [
  ...generateTests("neet", neetSyllabus.Physics["11"], "CHAPTER", "Physics", "11"),
  ...generateTests("neet", neetSyllabus.Physics["12"], "CHAPTER", "Physics", "12"),
  ...generateTests("neet", neetSyllabus.Chemistry["11"], "CHAPTER", "Chemistry", "11"),
  ...generateTests("neet", neetSyllabus.Chemistry["12"], "CHAPTER", "Chemistry", "12"),
  ...generateTests("neet", neetSyllabus.Botany["11"], "CHAPTER", "Botany", "11"),
  ...generateTests("neet", neetSyllabus.Botany["12"], "CHAPTER", "Botany", "12"),
  ...generateTests("neet", neetSyllabus.Zoology["11"], "CHAPTER", "Zoology", "11"),
  ...generateTests("neet", neetSyllabus.Zoology["12"], "CHAPTER", "Zoology", "12")
];

console.log("Total NEET chapter tests generated:", neetChapterTests.length);

const jeeChapterTests = [
  ...generateTests("jee-mains", jeeMainsSyllabus.Physics["11"], "CHAPTER", "Physics", "11"),
  ...generateTests("jee-mains", jeeMainsSyllabus.Physics["12"], "CHAPTER", "Physics", "12"),
  ...generateTests("jee-mains", jeeMainsSyllabus.Chemistry["11"], "CHAPTER", "Chemistry", "11"),
  ...generateTests("jee-mains", jeeMainsSyllabus.Chemistry["12"], "CHAPTER", "Chemistry", "12"),
  ...generateTests("jee-mains", jeeMainsSyllabus.Mathematics["11"], "CHAPTER", "Mathematics", "11"),
  ...generateTests("jee-mains", jeeMainsSyllabus.Mathematics["12"], "CHAPTER", "Mathematics", "12")
];

console.log("Total JEE chapter tests generated:", jeeChapterTests.length);

const bitsatChapterTests = (bitsatTests || []).filter(t => t.type === "CHAPTER");
console.log("Total BITSAT chapter tests:", bitsatChapterTests.length);

fs.writeFileSync("scripts/all_generated_chapter_tests.json", JSON.stringify({
  neet: neetChapterTests,
  jee: jeeChapterTests,
  bitsat: bitsatChapterTests
}, null, 2));

console.log("Saved to scripts/all_generated_chapter_tests.json");
