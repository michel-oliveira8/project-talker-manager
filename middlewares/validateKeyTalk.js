const validateTalk = (req, res, next) => {
    const { talk } = req.body;
    
    if (!talk || !talk.watchedAt || talk.rate === undefined) {
        return res.status(400).json({
            message: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios' });
    }
    next();
};

const validateRate = (req, res, next) => {
    const { talk } = req.body;
    const rateInteger = Number.isInteger(talk.rate);
    // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger

    if (!rateInteger || talk.rate < 1 || talk.rate > 5) {
        return res.status(400).json({ message: 'O campo "rate" deve ser um inteiro de 1 à 5' });
    }
    next();
};

const validateWatchedAt = (req, res, next) => {
    const { talk } = req.body;
    const regexDate = /(\d{2})\/?(\d{2})?\/(\d{4})/.test(talk.watchedAt);
    // Referencia: https://medium.com/xp-inc/regex-um-guia-pratico-para-express%C3%B5es-regulares-1ac5fa4dd39f

    if (!regexDate) {
        return res.status(400)
        .json({ message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' });
    }
    next();
};

module.exports = [
    validateTalk,
    validateRate,
    validateWatchedAt,
    
];