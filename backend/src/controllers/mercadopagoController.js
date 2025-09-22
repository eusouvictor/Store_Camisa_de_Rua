require('dotenv').config();
const mercadopago = require('mercadopago');

mercadopago.configure({
  access_token: process.env.MERCADOPAGO_ACCESS_TOKEN
});

exports.createPreference = async (req, res) => {
  try {
    const { items } = req.body;
    const preference = {
      id: '1',
      title: 'Camisa de rua',
      description: 'Camisa de rua - Oversized',
      quantity: 1,
      currency_id: 'BRL',
      unit_price: 27.00,
      back_urls: {
        success: 'https://test.com/success', // URL de teste, precisamos substituir
        failure: 'https://test.com/failure', // URL de teste, precisamos substituir
        pending: 'https://test.com/pending', // URL de teste, precisamos substituir
      }
    };

    const response = await mercadopago.preferences.create(preference);
    res.status(200).json({ id: response.body.id, init_point: response.body.init_point });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
