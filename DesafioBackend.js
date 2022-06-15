class Usuario {
    // Constructor
    constructor(nombre, apellido, libros, mascotas) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.libros = [];
      this.mascotas = [];
    }
  
    // Metodos
    getFullName() {
      return `Hola, soy ${this.nombre} ${this.apellido}`;
    }
  
    addMascota(nuevaMascota) {
      this.mascotas.push(nuevaMascota);
    }
  
    countMascotas() {
      return this.mascotas.length;
    }
  
    addBook(nombre, autor) {
      this.libros.push({ nombre: nombre, autor: autor });
    }
  
    getBookNames() {
      const librosUsuario = [];
      this.libros.forEach(libro => {
        librosUsuario.push(libro.nombre);
      });
      return librosUsuario;
    }
  }
  
  // Creacion de objeto
  
  usuario = new Usuario("Diego", 'Maldonado');
  
  // Invocacion de metodos
  
  usuario.getFullName();
  usuario.addMascota('Pochi');
  usuario.addMascota('Mateo');
  usuario.addMascota('Dexter');
  usuario.countMascotas();
  usuario.addBook("El tao del jet kune do", "Bruce Lee");
  usuario.addBook("El arte de la guerra", "Sun Tzu");
  usuario.getBookNames();
  
  // Utilizados en un console.log();
  
  console.log(usuario.getFullName() + ' y tengo ' + usuario.countMascotas() + ' mascotas. Sus nombres son: ' + usuario.mascotas[0] + ', ' + usuario.mascotas[1] + ' y ' + usuario.mascotas[2]  + '. Me gusta leer y los ultimos dos libros que lei fueron ' + usuario.getBookNames());