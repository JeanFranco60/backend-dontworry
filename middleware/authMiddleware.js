module.exports = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) return res.status(401).json({ error: "Acceso no autorizado" });
  // Verifica el token (JWT, por ejemplo)
  next();
};
