const jwt = require("jsonwebtoken");

module.exports.login = async function (req,res) {
  const secretKey = process.env.SECRET_KEY;
  const { username } = req.body;

  const access_token = jwt.sign({ username }, secretKey, { expiresIn: '1h' });

  return res.json({ access_token });
}
