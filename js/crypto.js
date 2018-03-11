'use strict'
const crypto = require('crypto');

/**************************************哈希加密 *******/
const hash = crypto.createHash('sha512');
//可以是md5 sha1 sha256 sha512
hash.update('Hello, world!');
hash.update('Hello, nodejs!');
//可以多次update
console.log(hash.digest('hex'));

/*****************************************Hmac加密 *******/
//hmac也是哈希算法 还需要一个秘钥
const hmac = crypto.createHmac('sha256', 'secret-key');

hmac.update('Hello, world!');
hmac.update('Hello, nodejs!');
//可以多次update
console.log(hmac.digest('hex'));

/*******************************************AES加密 *******/

function aesEncrypt(data, key) {
    const cipher = crypto.createCipher('aes192', key);
    let crypted = cipher.update(data, 'utf8', 'hex');
    crypted += cipher.final('hex');
    return crypted;
}

function aesDecrypt(encrpted, key) {
    const decipher = crypto.createDecipher('aes192', key);
    let decrypted = decipher.update(encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}

let data = 'Hello, this is a secret message!';
let key = 'Password!';
let encrypted = aesEncrypt(data, key);
let decrypted = aesDecrypt(encrypted, key);

console.log('Plain text: ' + data);
console.log('Encrypted text: ' + encrypted);
console.log('Decrypted text: ' + decrypted);


/****************************************Diffie-Hellman*******************/
// xiaoming's keys:
let ming = crypto.createDiffieHellman(512);
let ming_keys = ming.generateKeys();

let prime = ming.getPrime();
let generator = ming.getGenerator();

console.log('Prime: ' + prime.toString('hex'));
console.log('Generator: ' + generator.toString('hex'));

// xiaohong's keys:
let hong = crypto.createDiffieHellman(prime, generator);
let hong_keys = hong.generateKeys();

// exchange and generate secret:
let ming_secret = ming.computeSecret(hong_keys);
let hong_secret = hong.computeSecret(ming_keys);

// print secret:
console.log('Secret of Xiao Ming: ' + ming_secret.toString('hex'));
console.log('Secret of Xiao Hong: ' + hong_secret.toString('hex'));