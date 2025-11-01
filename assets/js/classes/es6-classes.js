class Persona {
  static _cantidadInstancias = 0;
  static get cantidadInstancias() {
    return Persona._cantidadInstancias;
  }
  static mensaje() {
    console.log("Soy un método estático.");
  }

  nombre = "";
  codigo = "";
  frase = "";
  comida = "";

  constructor(
    nombre = "Sin nombre.",
    codigo = "Sin código.",
    frase = "Sin frase."
  ) {
    this.nombre = nombre;
    this.codigo = codigo;
    this.frase = frase;

    Persona._cantidadInstancias++;
  }

  set setComida(comida) {
    this.comida = comida.toLowerCase();
  }

  get getComida() {
    return `La comida favorita de ${this.codigo} es: ${this.comida}.`;
  }

  quienSoy() {
    console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
  }

  miFrase() {
    console.log(`${this.codigo} dice: ${this.frase}`);
  }
}

const spiderman = new Persona(
  "Peter Parker",
  "Spider-man",
  "Soy tu amigable vecino Spider-man."
);

spiderman.quienSoy();

spiderman.miFrase();

spiderman.setComida = "Pizza";

console.log("🚀 ~ spiderman.getComida:", spiderman.getComida);

console.log("🚀 ~ spiderMan:", spiderman);

console.log("- - - - - - - - - - - -");

console.log("🚀 ~ Persona.cantidadInstancias:", Persona.cantidadInstancias);

Persona.mensaje();
