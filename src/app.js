const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const apiRoutes = require('./routes/api');

const app = express();

// Middlewares
// Adicione no início do arquivo
if (process.env.NODE_ENV === 'production') {
  app.use(cors({
    origin: process.env.CORS_ORIGIN
  }))
} else {
  app.use(cors())
} // Permite todas as origens (em produção, restrinja isso)
app.use(bodyParser.json());

// Rotas
app.use('/api', apiRoutes);

// Rota padrão
app.get('/', (req, res) => {
  res.send('Backend da Gestão Empresarial');
});

module.exports = app;