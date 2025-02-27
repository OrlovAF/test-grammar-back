const users = require ('../mock/users.json');

const loginMiddleware = (req, res, next) => {

  const { username, password } = req.body;

  if( !username || !password ) {
    return res.status(401).json({ message: 'Username and password should not be empty!' });
  }

  const currentUser = users.find(user => user.username === username);
  const isPasswordCorrect = password === currentUser?.password;

  if(!currentUser || !isPasswordCorrect) {
    return res.status(401).json({ message: 'Wrong credentials!' });
  }

  next();
}

module.exports = loginMiddleware;
