require("dotenv").config();

const express = require("express");
const methodOverride = require("method-override");
const connectDB = require("./config/db");

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(methodOverride("_method"));

app.use(express.static("public"));

const productRoutes = require("./routes/productRoutes");
app.use(productRoutes);

const apiRoutes = require("./routes/apiRoutes");
app.use(apiRoutes);

app.get("/", (req, res) => {
  res.send("¡Servidor funcionando y conectado a MongoDB!");
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

