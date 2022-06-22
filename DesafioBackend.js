const fs = require("fs");

class Contenedor {
  constructor(nombreDelArchivo) {
    this.nombreDelArchivo = nombreDelArchivo;
  }

  async save(guardarObjeto) {
    try {
      const resp = await fs.promises.readFile(this.nombreDelArchivo, "utf-8");
      if (resp == "") {
        guardarObjeto.id = 1;
        const arrayObj = [guardarObjeto];
        await console.log(guardarObjeto.id);
      } else {
        const datosObj = JSON.parse(resp);
        guardarObjeto.id = datosObj.length + 1;
        datosObj.push(guardarObjeto);
        await fs.promises.writeFile(
          this.nombreDelArchivo,
          JSON.stringify(datosObj)
        );
        return console.log(guardarObjeto.id);
      }
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  }

  async getById(id) {
    try {
      const resp = await fs.promises.readFile(this.nombreDelArchivo, "utf-8");
      const data = JSON.parse(resp);
      const resultado = data.findIndex((elemento) => elemento.id === id);
      if (resultado >= 0) {
        return console.log(data[resultado]);
      } else {
        return console.log(null);
      }
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  }

  async getAll() {
    try {
      const resp = await fs.promises.readFile(this.nombreDelArchivo, "utf-8");
      const data = await JSON.parse(resp);
      return console.log(data);
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  }

  async deleteById(id) {
    try {
      const resp = await fs.promises.readFile(this.nombreDelArchivo, "utf-8");
      const data = await JSON.parse(resp);
      const objEliminado = data.splice(id - 1, 1);
      if (objEliminado.length > 0) {
        await fs.promises.writeFile(
          this.nombreDelArchivo,
          JSON.stringify(JSON.stringify(datos))
        );
        return console.log("Objeto eliminado:\n", objEliminado);
      } else {
        console.log("El objeto no existe");
      }
    } catch (error) {
      console.log(`Error:${error}`);
    }
  }

  async deleteAll() {
    try {
      await fs.promises.writeFile(this.nombreDelArchivo, "");
      return console.log(`Se elimino todo de: ${this.nombreDelArchivo}`);
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  }
}

const contenedor1 = new Contenedor("productos.txt");

const producto1 = {
  nombre: "PROCESADOR INTEL CORE I7 10700F 4.8 GHZ COMET LAKE 1200 SIN GPU",
  precio: 49000,
  imagen: "https://mexx-img-2019.s3.amazonaws.com/39187_1.jpeg",
};

const producto2 = {
  nombre: "NOTEBOOK GAMER GIGABYTE AORUS I7 32GB SSD 512GB RTX 3080Q 8GB WIN10",
  precio: 505700,
  imagen: "https://mexx-img-2019.s3.amazonaws.com/notebook-gamer_42169_1.jpeg",
};

const producto3 = {
  nombre: "PLACA DE VIDEO GEFORCE RTX 3090 24GB ASUS ROG STRIX GAMING OC",
  precio: 460000,
  imagen:
    "https://mexx-img-2019.s3.amazonaws.com/Placa-de-video-rtx-3090-asus_39206_1.jpeg",
};

setTimeout(() => {
  contenedor1.save(producto1);
}, 500);
setTimeout(() => {
  contenedor1.save(producto2);
}, 1000);

setTimeout(() => {
  contenedor1.save(producto3);
}, 1500);

setTimeout(() => {
  contenedor1.getById(3);
}, 2000);