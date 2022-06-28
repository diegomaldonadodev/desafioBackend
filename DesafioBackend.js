const express = require("express");
const app = express();

const productos = ["producto1", "producto2", "producto3"];

let rand = Math.floor(Math.random() * productos.length);


app.get("/productos", (req, res) => {
  res.send(productos);
});

app.get("/productoRandom", (req, res) => {
  res.send('aca va un producto aleatorio');
});

const server = app.listen(8080, () => {
  console.log("server is running on port 8080");
});

server.on("error", (error) => console.log(error));
