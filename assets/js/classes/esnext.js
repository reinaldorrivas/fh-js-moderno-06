class Rectangulo {
  #area = 0;

  constructor(base = 0, altura = 0) {
    this._base = base;
    this._altura = altura;

    this.#area = base * altura;
  }

  set base(value) {
    this._base = value;
    this.#area = value * this._altura;
  }

  get base() {
    return this._base;
  }

  set altura(value) {
    this._altura = value;
    this.#area = value * this._base;
  }

  get altura() {
    return this._altura;
  }

  valorArea() {
    return this.#area;
  }
}

const rectangulo = new Rectangulo(10, 15);

console.log("🚀 ~ rectangulo:", { ...rectangulo });

console.log(rectangulo.valorArea());

rectangulo.altura = 20;

console.log("🚀 ~ rectangulo:", { ...rectangulo });

console.log(rectangulo.valorArea());

rectangulo.base = 100;

console.log("🚀 ~ rectangulo:", { ...rectangulo });

console.log(rectangulo.valorArea());
