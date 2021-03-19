// Küthanenin Baglanmasi
const fs = require('fs');
/**
 * Dosyanin okunmasi
 */
const readMe = fs.readFileSync('./OrnekDosya.txt', 'utf8')
console.log(readMe)