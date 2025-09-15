const mercadopago = require('mercadopago');

// Configure sua chave de acesso
mercadopago.configure({
  access_token: process.env.MERCADOPAGO_ACCESS_TOKEN
});

// Cria uma preferência de pagamento
exports.createPreference = async (req, res) => {
  try {
    const { items } = req.body;
    const preference = {
      items: items,
      // ...adicione outras configurações se necessário...
    };

    const response = await mercadopago.preferences.create(preference);
    res.status(200).json({ id: response.body.id, init_point: response.body.init_point });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
