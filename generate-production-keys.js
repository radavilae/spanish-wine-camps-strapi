const crypto = require('crypto');

// Generar claves seguras
const jwtSecret = crypto.randomBytes(64).toString('hex');
const tokenSalt = crypto.randomBytes(64).toString('hex');
const appKeys = Array.from({length: 3}, () => crypto.randomBytes(32).toString('hex'));

console.log('=== VARIABLES DE ENTORNO PARA RENDER ===');
console.log('');
console.log('ADMIN_JWT_SECRET:');
console.log(jwtSecret);
console.log('');
console.log('API_TOKEN_SALT:');
console.log(tokenSalt);
console.log('');
console.log('APP_KEYS:');
console.log(appKeys.join(','));
console.log('');
console.log('TRANSFER_TOKEN_SALT:');
console.log(crypto.randomBytes(64).toString('hex'));
