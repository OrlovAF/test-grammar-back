const grammarCheckMiddleware = (req, res, next) => {
  const { text } = req.body;

  if( !text ) {
    return res.status(401).json({ message: 'Text should not be empty!' });
  }

  next();
}

module.exports = grammarCheckMiddleware;
