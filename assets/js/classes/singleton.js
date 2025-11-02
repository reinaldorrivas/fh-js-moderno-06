class PersonajeService {
  static #instance;

  constructor(nombre) {
    if (PersonajeService.#instance) {
      return PersonajeService.#instance;
    }

    this.nombre = nombre;
    PersonajeService.#instance = this;
  }
}

const instanciaUno = new PersonajeService("Spiderman");
console.log("🚀 ~ instanciaUno:", instanciaUno);
const instanciaDos = new PersonajeService("Ironman");
console.log("🚀 ~ instanciaDos:", instanciaDos);
const instanciaTres = new PersonajeService("Wolverine");
console.log("🚀 ~ instanciaTres:", instanciaTres);
