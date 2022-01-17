const fs = require('fs').promises;

module.exports = async (req, res) => {
    const { id } = req.params;
  
    const talkers = await fs.readFile('./talker.json', 'utf-8')
    .then((response) => JSON.parse(response));
  
    const talkerId = talkers.find((t) => t.id === parseInt(id, 10));
  
    if (!talkerId) return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
    res.status(200).json(talkerId);
  };