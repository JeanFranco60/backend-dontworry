const mercadoPagoService = require("../services/mercadoPagoServices");

exports.createPreference = async (req, res) => {
  try {
    const preference = await mercadoPagoService.createPreference(req.body);
    res.status(200).json(preference);
  } catch (error) {
    console.error("Error al crear preferencia:", error.message);
    res.status(500).json({ error: "Error al crear la preferencia" });
  }
};

exports.handleWebhook = async (req, res) => {
  try {
    const notification = req.body;
    console.log("Notificación recibida:", notification);

    // Procesar la notificación según el tipo de evento
    await mercadoPagoService.processNotification(notification);

    res.status(200).send("Webhook recibido y procesado");
  } catch (error) {
    console.error("Error en el webhook:", error.message);
    res.status(500).send("Error al procesar el webhook");
  }
};
