// ES5 Style

const lalo = {
  nombre: "Reinaldo",
  edad: 36,
  imprimir: function () {
    console.log("Nombre: " + this.nombre + " - edad: " + this.edad);
  },
};

// ES6 Style

const lucho = {
  nombre: "Daniel",
  edad: 38,
  imprimir() {
    console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`);
  },
};

lalo.imprimir();
lucho.imprimir();

// ES5 Pseudo classes style: The first character in mayus indicates this function will be a class constructor.

function Persona(nombre, edad) {
  console.log("Esto es una función normal, lo que marca la diferencia...");
  console.log(
    "... es cuando se crea una instancia de clase con la palabra reservada new ..."
  );
  console.log("... en una nueva variable.");

  this.nombre = nombre;
  this.edad = edad;

  this.imprimir = function () {
    console.log("Nombre: " + this.nombre + " - edad: " + this.edad);
  };
}

console.log("Aquí se llamó como una función tradicional: ")

Persona();

console.log("----------")

const madre = new Persona("Licé", "Pachón");

console.log(madre);
madre.imprimir();

const abuela = new Persona("Miriam", "Ortiz de Mora");
console.log(abuela);
abuela.imprimir();
