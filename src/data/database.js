const fs = require('fs');
const path = require('path');

const DATA_FILE = path.join(__dirname, 'company-data.json');

// Carrega os dados do arquivo
function loadData() {
  try {
    if (fs.existsSync(DATA_FILE)) {
      return JSON.parse(fs.readFileSync(DATA_FILE, 'utf-8'));
    }
    return {
      suppliers: [],
      clients: [],
      products: [],
      transactions: []
    };
  } catch (error) {
    console.error('Erro ao carregar dados:', error);
    return {
      suppliers: [],
      clients: [],
      products: [],
      transactions: []
    };
  }
}

// Salva os dados no arquivo
function saveData(data) {
  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), 'utf-8');
    return true;
  } catch (error) {
    console.error('Erro ao salvar dados:', error);
    return false;
  }
}

// Exporte as funções explicitamente
module.exports = {
  loadData,
  saveData
};