const crypto = require('crypto');
const key = crypto.randomBytes(32); // 32 bytes = 256 bits
const hexKey = key.toString('hex');

console.log("Chave Hexadecimal de 32 bytes:");
console.log(hexKey);
