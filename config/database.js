const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('meu_banco', 'postgres', 'nova_senha', {
  host: 'localhost',   // Se estiver rodando localmente. Se for remoto, adicione o endereço do servidor.
  dialect: 'postgres', // O tipo de banco de dados que você está usando
  port: 5432           // A porta padrão do Postgres é 5432
});

// Teste a conexão
sequelize.authenticate()
  .then(() => {
    console.log('Conexão com o banco de dados foi estabelecida com sucesso.');
  })
  .catch(err => {
    console.error('Não foi possível conectar ao banco de dados:', err);
  });

module.exports = sequelize;
