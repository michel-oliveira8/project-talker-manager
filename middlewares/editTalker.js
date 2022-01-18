const fs = require('fs').promises;

module.exports = async (req, res) => {
    const { id } = req.params;
    const { name, age, talk } = req.body;

    const talkers = await fs.readFile('./talker.json', 'utf-8')
    .then((response) => JSON.parse(response));

    const talkersIndex = talkers.findIndex((t) => t.id === parseInt(id, 10));

    talkers[talkersIndex] = { ...talkers[talkersIndex], name, age, talk };

    await fs.writeFile('./talker.json', JSON.stringify(talkers));

    res.status(200).json({ id: +id, name, age, talk });
};