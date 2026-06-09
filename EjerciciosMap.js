/*
- Multiplicación:
Dado el array [2, 4, 6, 8], usa map() para obtener un nuevo array con cada número multiplicado por 5.

 */


const numeros = [2, 4, 6, 8];
const multiplicacionPorcinco = numeros.map(n => n * 5);
console.log(multiplicacionPorcinco);

// Versión con bucle for
const multiplicacionPorcincoBucle = [];
for (let i = 0; i < numeros.length; i++) {
    multiplicacionPorcincoBucle.push(numeros[i] * 5);
}
console.log(multiplicacionPorcincoBucle);

/*
- Mayúsculas:
Dado el array ["hola", "mundo", "javascript"], usa map() para devolver un nuevo array con todas las palabras en mayúsculas.

 */


const palabras = ["hola", "mundo", "javascript"];
const palabrasMayusculas = palabras.map(p => p.toUpperCase());
console.log(palabrasMayusculas);

// Versión con bucle for
const palabrasMayusculasBucle = [];
for (let i = 0; i < palabras.length; i++) {
    palabrasMayusculasBucle.push(palabras[i].toUpperCase());
}
console.log(palabrasMayusculasBucle);

/*
- Longitudes:
Dado el array ["perro", "gato", "elefante"], usa map() para obtener un nuevo array con la longitud de cada palabra.

 */

const animales = ["perro", "gato", "elefante"];
const contarLongitud = animales.map(a => a.length);
console.log(contarLongitud);

// Versión con bucle for
const contarLongitudBucle = [];
for (let i = 0; i < animales.length; i++) {
    contarLongitudBucle.push(animales[i].length);
}
console.log(contarLongitudBucle);

/*
- Objetos transformados:
Dado el array de objetos:
- Usa map() para obtener un nuevo array con solo los precios.

 */

const productos = [
    { nombre: "camisa", precio: 20 },
    { nombre: "pantalón", precio: 30 },
    { nombre: "zapatos", precio: 50 }
];
const precios = productos.map(p => p.precio);
console.log(precios);

// Versión con bucle for
const preciosBucle = [];
for (let i = 0; i < productos.length; i++) {
    preciosBucle.push(productos[i].precio);
}
console.log(preciosBucle);

/*
- Números a strings:
Dado el array [1, 2, 3, 4, 5], usa map() para convertir cada número en un string con el formato "Número: X".

 */


const numeros2 = [1, 2, 3, 4, 5];
const numerosComoString = numeros2.map(n => `Número: ${n}`);
console.log(numerosComoString);

// Versión con bucle for
const numerosComoStringBucle = [];
for (let i = 0; i < numeros2.length; i++) {
    numerosComoStringBucle.push(`Número: ${numeros2[i]}`);
}
console.log(numerosComoStringBucle);