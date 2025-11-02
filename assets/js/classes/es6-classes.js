export class Persona {
  static _cantidadInstancias = 0;
  static get cantidadInstancias() {
    return Persona._cantidadInstancias;
  }
  static mensaje() {
    console.log("Soy un método estático.");
  }

  _comida = "";

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

  set comida(value) {
    this._comida = value.toLowerCase();
  }

  get comida() {
    return `La comida favorita de ${this.codigo} es: ${this._comida}.`;
  }

  quienSoy() {
    console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
  }

  miFrase() {
    console.log(`${this.codigo} dice: ${this.frase}`);
  }
}

/*
 *  const spiderman = new Persona(
 *    "Peter Parker",
 *    "Spider-man",
 *    "Soy tu amigable vecino Spider-man."
 *  );
 *
 *  spiderman.quienSoy();
 *
 *  spiderman.miFrase();
 *
 *  spiderman.comida = "Pizza";
 *
 *  console.log("🚀 ~ spiderman.comida:", spiderman.comida);
 *
 *  console.log("🚀 ~ spiderMan:", spiderman);
 *
 *  console.log("- - - - - - - - - - - -");
 *
 *  console.log("🚀 ~ Persona.cantidadInstancias:", Persona.cantidadInstancias);
 *
 *  Persona.mensaje();
 */
