class Persona {
  static objectConstructor({ nombre, origen }) {
    return new Persona(nombre, origen);
  }

  constructor(nombre, origen) {
    this.nombre = nombre;
    this.origen = origen;
  }

  getInfo() {
    console.log(`${this.nombre} - ${this.origen}`);
  }
}

const instanciaUno = new Persona("Lalo", "Venezuela");

const instanciaDos = Persona.objectConstructor({
  nombre: "Lucho",
  origen: "Argentina",
});
