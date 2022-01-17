const crypto = require('crypto');

module.exports = (_req, res) => {
    const token = crypto.randomBytes(10).toString('base64').replace(/\//g, '_').replace(/\+/g, '-');
    // Referencia: https://qastack.com.br/programming/8855687/secure-random-token-in-node-js
    if (token.length <= 16) {
      return res.status(200).json({ token });
    }
};