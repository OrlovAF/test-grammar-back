const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const secretKey = process.env.SECRET_KEY;
  const token = req.headers?.authorization?.split(' ')[1];

  if(!token) {
    return res.status(401).json({ error: 'Your session expired!' });
  }

  try {
    req.user = jwt.verify(token, secretKey);
    next();
  } catch (e) {
    res.status(403).json({ error: 'Invalid token!' });
  }
}

module.exports = authMiddleware;