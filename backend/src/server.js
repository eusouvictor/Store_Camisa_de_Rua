const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Importar as rotas
const productRoutes = require('./routes/productRoutes');
app.use('/api/products', productRoutes);

// Exemplo de conexão com MySQL usando mysql2
const sequelize = require('./config/database');

// Sincroniza modelos com o banco de dados
sequelize.sync()
    .then(() => console.log('Banco de dados sincronizado!'))
    .catch(err => console.error('Erro ao sincronizar:', err));

// Inicia o servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
