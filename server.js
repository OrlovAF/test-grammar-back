const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const loginRoutes = require('./routes/login');
const grammarRoutes = require('./routes/grammar');
const authMiddleware = require('./middlewares/auth');

dotenv.config();
app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/login', loginRoutes)
app.use('/grammar', authMiddleware, grammarRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
