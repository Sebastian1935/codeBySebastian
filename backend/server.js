const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5500;

let schedule = {};

app.use(cors());
app.use(bodyParser.json());

// Configura Express para servir archivos estáticos desde el directorio 'public'
app.use(express.static(path.join(__dirname, "public")));

// Rutas de tu aplicación
app.get("/codeBySebastian/schedule", (req, res) => {
  res.json(schedule);
});

app.put("/codeBySebastian/schedule", (req, res) => {
  schedule = req.body;
  res.send("Horario actualizado correctamente");
});

// Define la ruta para /viewSchedule y sirve el archivo HTML
app.get("/codeBySebastian/viewSchedule", (req, res) => {
  // Usa el método 'sendFile' para enviar el archivo HTML al navegador
  res.sendFile(path.join(__dirname, "public", "viewSchedule.html"));
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
