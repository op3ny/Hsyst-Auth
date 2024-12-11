const crypto = require('crypto');

// Chave secreta fornecida (em formato hexadecimal)
const ciferaes = "1234";

// Converter a chave hexadecimal para um buffer de 32 bytes
const key = Buffer.from(ciferaes, 'hex');

// Verifique se a chave tem exatamente 32 bytes
if (key.length !== 32) {
  console.log('A chave deve ter exatamente 32 bytes (64 caracteres hexadecimais).');
  process.exit(1);
}

// Função para descriptografar o texto AES (sem precisar do IV explicitamente)
function decryptAES(encryptedText) {
  // O IV é extraído dos primeiros 16 bytes do texto criptografado
  const iv = Buffer.from(encryptedText.slice(0, 32), 'hex'); // Os primeiros 32 caracteres hexadecimais representam o IV

  // O texto criptografado começa após o IV (32 primeiros caracteres)
  const encryptedData = encryptedText.slice(32);

  // Criar o decodificador AES
  const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);

  // Descriptografar o texto
  let decrypted = decipher.update(encryptedData, 'hex', 'utf8');
  decrypted += decipher.final('utf8');

  return decrypted;
}

// Exemplo de texto criptografado (substitua pelo seu valor criptografado real)
const encryptedText = 'eusla'; // Coloque seu texto cifrado aqui

// Descriptografar o texto
const decryptedText = decryptAES(encryptedText);
console.log('Texto Descriptografado:', decryptedText);
