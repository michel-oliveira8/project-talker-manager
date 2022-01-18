const fs = require('fs').promises;

module.exports = async (req, res) => {
    const { name, age, talk } = req.body;
    const talkers = await fs.readFile('./talker.json', 'utf-8')
    .then((response) => JSON.parse(response));

    const createTalker = {
        name,
        age,
        id: talkers.length + 1,
        talk,
      };

    talkers.push(createTalker);
    await fs.writeFile('./talker.json', JSON.stringify(talkers));
    res.status(201).json(createTalker);
};
