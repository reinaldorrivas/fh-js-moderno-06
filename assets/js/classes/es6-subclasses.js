import { Persona } from "./es6-classes.js";

class Heroe extends Persona {
  team = "";

  constructor(nombre, código, frase, team) {
    super(nombre, código, frase);

    this.team = team;
  }

  // Esta función susplanta la del padre ya que usa el mismo nombre.
  quienSoy() {
    console.log(`Soy ${this.codigo}, del team ${this.team}`);
    super.miFrase();
  }
}

const spiderman = new Heroe(
  "Peter Parker",
  "Spider-man",
  "Soy tu amigable vecino Spider-man.",
  "Capitán América"
);

spiderman.quienSoy();
