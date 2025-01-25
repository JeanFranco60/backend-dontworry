const mercadopago = require("mercadopago");

// Configuración de Mercado Pago
mercadopago.configurations.setAccessToken(process.env.MP_ACCESS_TOKEN);

exports.createPreference = async (preferenceData) => {
  try {
    const preference = {
      items: preferenceData.items, // Array de objetos { title, unit_price, quantity }
      payer: preferenceData.payer, // Datos del comprador
      back_urls: {
        success: `${process.env.FRONTEND_URL}/success`,
        failure: `${process.env.FRONTEND_URL}/failure`,
        pending: `${process.env.FRONTEND_URL}/pending`,
      },
      notification_url: `${process.env.BACKEND_URL}/api/payments/webhook`,
    };

    // Crear preferencia
    const response = await mercadopago.preferences.create(preference);
    return response.body; // Devuelve el cuerpo de la respuesta (preferencia creada)
  } catch (error) {
    console.error("Error al crear la preferencia:", error);
    throw new Error("No se pudo crear la preferencia de pago.");
  }
};

exports.processNotification = async (notification) => {
  try {
    // Manejar notificaciones según el tipo de evento
    switch (notification.type) {
      case "payment":
        console.log("Pago recibido:", notification.data.id);
        break;
      case "plan":
        console.log("Plan actualizado:", notification.data.id);
        break;
      default:
        console.log("Notificación desconocida:", notification);
    }
  } catch (error) {
    console.error("Error procesando la notificación:", error);
  }
};
