# Instruções para rodar o back-end

1. Copie o arquivo `.env.example` para `.env` e preencha com seus dados do MySQL e token do Mercado Pago.
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie o servidor:
   ```bash
   npm start
   ```

## Estrutura das pastas
- `src/models/` — Modelos Sequelize (ex: Product.js)
- `src/controllers/` — Lógica das rotas (ex: productController.js, mercadopagoController.js)
- `src/routes/` — Rotas Express (ex: productRoutes.js)
- `src/config/` — Configuração do banco (database.js)
- `src/server.js` — Ponto de entrada do servidor

## Observações
- O arquivo `.env` é obrigatório para rodar o projeto.
- O banco de dados MySQL deve estar criado e acessível.
- As URLs de retorno do Mercado Pago devem ser ajustadas para produção.
