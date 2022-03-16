const fs = require('fs');
console.log('before:', process.memoryUsage().rss);
const data1 = fs.readFileSync('./big.txt');
console.log('buffer:', process.memoryUsage().rss);