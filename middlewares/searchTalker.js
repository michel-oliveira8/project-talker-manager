const fs = require('fs').promises;

module.exports = async (req, res) => {
    const { name } = req.query;

    const talkers = await fs.readFile('./talker.json', 'utf-8')
    .then((response) => JSON.parse(response));

    const searchName = talkers.filter((t) => t.name.includes(name));
    console.log(searchName);

    if (!name || name === '') {
        return res.status(200).json(talkers);
    }
    if (searchName.length === 0) {
        return res.status(200).json([]);
    }
    res.status(200).json(searchName);
};