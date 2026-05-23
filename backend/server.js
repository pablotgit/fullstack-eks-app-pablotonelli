const express = require("express");
const cors = require("cors");

const app = express();

// configuraciones necesarias
app.use(cors());
app.use(express.json());

// puerto del backend
const PORT = 3000;

// endpoint de prueba
app.get("/", (req, res) => {
  res.json({
    message: "Backend funcionando correctamente"
  });
});

// endpoint login
app.post("/login", (req, res) => {

  const { username, password } = req.body;

  // usuario de prueba
  if (username === "admin" && password === "1234") {
    return res.json({
      success: true,
      message: "Login exitoso"
    });
  }

  // login incorrecto
  return res.status(401).json({
    success: false,
    message: "Usuario o contraseña incorrectos"
  });

});

// levantar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});