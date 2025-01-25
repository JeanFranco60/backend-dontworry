const jwt = require("jsonwebtoken");

const jwtMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  // Validar que el encabezado Authorization esté presente y tenga el formato correcto
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res
      .status(401)
      .json({ errors: ["Authorization header is missing or malformed"] });
  }

  // Extraer el token del encabezado
  const token = authHeader.split(" ")[1];

  // Verificar el token
  jwt.verify(token, process.env.TOKEN_SECRET, (err, decoded) => {
    if (err) {
      const errorMessage =
        err.name === "TokenExpiredError"
          ? "Token has expired"
          : "Token is invalid or malformed";
      return res.status(403).json({ errors: [errorMessage] });
    }

    // Guardar los datos del usuario decodificados en el objeto `req`
    req.user = decoded;

    // Pasar al siguiente middleware o ruta
    next();
  });
};

module.exports = jwtMiddleware;
