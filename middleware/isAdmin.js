module.exports = (req, res, next) => {
  const { role } = req.auth; // Suponiendo que el rol está en la información decodificada del JWT

  if (role !== "Admin") {
    return res
      .status(403)
      .json({
        error: "Acceso no autorizado. Se requiere rol de administrador",
      });
  }

  next(); // Si es administrador, se permite continuar
};
