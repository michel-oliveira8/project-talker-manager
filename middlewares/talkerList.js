const fs = require('fs').promises;

module.exports = async (_req, res) => {
    const talkerList = await fs.readFile('./talker.json', 'utf-8')
    .then((response) => JSON.parse(response));
    if (talkerList.length === 0) return res.status(200).json([]);
    res.status(200).json(talkerList);
};