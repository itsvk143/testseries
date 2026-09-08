const fs = require('fs');
const path = require('path');

const fileNames = [
  'data_jee_rm_part1.js',
  'data_jee_rm_part2.js',
  'data_jee_rm_part3.js',
  'data_jee_rm_part4.js',
  'data_jee_rm_part5.js',
  'data_jee_rm_part6.js',
  'data_jee_rm_part7.js',
  'data_jee_rm_part8.js'
];

fileNames.forEach(fn => {
  const fp = path.join(__dirname, fn);
  const data = require(fp);
  data.forEach(q => {
    if (q.type === 'NUMERICAL') {
      q.options = [];
    }
  });
  fs.writeFileSync(fp, 'module.exports = ' + JSON.stringify(data, null, 2) + ';\n');
  console.log(`Normalized ${fn}`);
});

console.log('All parts normalized!');
