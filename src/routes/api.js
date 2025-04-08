const express = require('express');
const router = express.Router();
const { loadData, saveData } = require('../data/database');

// Rotas
router.get('/data', (req, res) => {
  const data = loadData();
  res.json(data);
});

router.post('/data', (req, res) => {
  const newData = req.body;
  if (saveData(newData)) {
    res.json({ success: true, message: 'Dados salvos com sucesso!' });
  } else {
    res.status(500).json({ success: false, message: 'Erro ao salvar dados' });
  }
});

// Certifique-se de exportar o router corretamente
module.exports = router;