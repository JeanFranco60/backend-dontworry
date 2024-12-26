const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  // Obtiene el token del encabezado Authorization
  const token = req.headers.authorization?.split(" ")[1]; // "Bearer token"

  // Si no hay token, responde con un error
  if (!token)
    return res
      .status(401)
      .json({ error: "Acceso no autorizado, token no encontrado" });

  // Verifica el token usando la clave secreta
  jwt.verify(token, "tu_clave_secreta", (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: "Token inválido o expirado" });
    }
    // Si el token es válido, adjunta la información decodificada al objeto de la solicitud (req)
    req.auth = decoded;
    next();
  });
};
