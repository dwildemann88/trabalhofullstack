const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');
const Pessoa = require('./models/Pessoa');
const cors = require('cors');

const app = express();
app.use(cors()); // Permite CORS
app.use(bodyParser.json());

// Endpoint para criar uma pessoa
app.post('/pessoa', async (req, res) => {
  try {
    const { nome, cpf, telefone } = req.body;
    
    // Valida se os campos obrigatórios estão presentes
    if (!nome || !cpf) {
      return res.status(400).json({ error: 'Nome e CPF são obrigatórios' });
    }
    
    const pessoa = await Pessoa.create({ nome, cpf, telefone });
    res.status(201).json(pessoa);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao criar pessoa' });
  }
});

// Rota para listar pessoas (opcional, se você tiver implementado)
app.get('/pessoas', async (req, res) => {
  try {
    const pessoas = await Pessoa.findAll();
    res.status(200).json(pessoas);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao buscar pessoas' });
  }
});

app.listen(3000, async () => {
  await sequelize.sync();
  console.log('Servidor rodando na porta 3000');
});
