const { findIncorrectWords } = require('../services/grammar')

module.exports.checkGrammar = async function (req,res) {
  const text = req.body.text;

  if(!text) {
    return res.status(400).json({ message: 'Invalid text!'})
  }

  const incorrectWords = await findIncorrectWords(req.body.text)

  res.json(incorrectWords);
}