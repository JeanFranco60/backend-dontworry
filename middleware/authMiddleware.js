const jwt = require("jsonwebtoken");

const jwtMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1]; // Obtener el token del header "Authorization"

  if (!token) {
    return res.status(401).json({ errors: ["No token provided"] });
  }

  jwt.verify(token, process.env.TOKEN_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ errors: ["Token is invalid or expired"] });
    }

    req.user = decoded; // Guardar los datos del usuario decodificados en el request
    next(); // Pasar al siguiente middleware o ruta
  });
};

module.exports = jwtMiddleware;
