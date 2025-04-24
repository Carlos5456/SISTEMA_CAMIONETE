const express = require('express');
const cors = require('cors');
const pecaRoutes = require('./routes/pecaRoutes');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/pecas', pecaRoutes);

module.exports = app;