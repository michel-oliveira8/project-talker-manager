module.exports = (req, res, next) => {
    const { email } = req.body;
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
   if (!email || email === ' ') {
  return res.status(400).json({ message: 'O campo "email" é obrigatório' }); 
  }
   if (!emailRegex) {
  return res.status(400).json({ message: 'O "email" deve ter o formato "email@email.com"' });
  }
  next();
  };