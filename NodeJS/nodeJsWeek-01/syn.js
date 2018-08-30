const fs = require('fs');
const util = require('util');
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);
//const readFile=util.readFile(fs.readFile);
//const writeFile=util.writeFile(fs.writeFile);


let text1="file1.txt";
let text2="file2.txt";
let text3="file3.txt";
let text4="file4.txt";

const file1=writeFile(text1,'1.The Brown Fox Quick Jumps Over The Lazy Dog');
const file2=writeFile(text2,'2.The Brown Fox Quick Jumps Over The Lazy Dog');
const file3=writeFile(text3,'3.The Brown Fox Quick Jumps Over The Lazy Dog');
const file4=writeFile(text4,'4.The Brown Fox Quick Jumps Over The Lazy Dog');


const f1 = fs.readFileSync('file1.txt', 'utf8');
const f2 = fs.readFileSync('file2.txt', 'utf8');
const f3 = fs.readFileSync('file3.txt', 'utf8');
const f4 = fs.readFileSync('file4.txt', 'utf8');


//console.log(f3);
const matchon = /quick/g;
const matching = /Quick/g;

//const totalfile1=(fs1+fs2+fs3+fs4);
const margeFile=(f1+f2+f3+f4).match(matching);
console.log(margeFile);

console.log(f1);
console.log(f2);
console.log(f3);
console.log(f4);
//console.log('syn-Process Time: : ' + totalfile.length);
//console.log('Syn found word : ' +  margeFile.length + ' times.');
