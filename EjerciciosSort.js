

/*- Dado el array [5, 2, 9, 1, 7], usa sort() para ordenarlo de mayor a menor. */
const numeros = [5, 2, 9, 1, 7];
const orendenarNumeros = numeros.sort((a, b) => b - a);
console.log(orendenarNumeros); // [1, 2, 5, 7, 9]

const ascendente = [...numeros].sort((a, b) => a - b); // menor a mayor
const descendente = [...numeros].sort((a, b) => b - a); // mayor a menor
console.log(ascendente);   // [1, 2, 5, 7, 9]
console.log(descendente);  // [9, 7, 5, 2, 1]


/*
- Dado el array ["banana", "manzana", "kiwi", "uva"], usa sort() para ordenarlo alfabéticamente.
 */

const frutas = ["banana", "manzana", "kiwi", "uva"];
const ordenFrutas = frutas.sort((a, b) => a.localeCompare(b));
console.log(ordenFrutas); // ["banana", "kiwi", "manzana", "uva"]

/* Versión sin localeCompare */
const ordenFrutasSinLocale = [...frutas].sort((a, b) => {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
});
console.log(ordenFrutasSinLocale);

/* 
 - Dado el array ["Ana", "luis", "Marta", "pedro"], usa sort() para ordenarlo alfabéticamente ignorando mayúsculas/minúsculas.

*/
const nombres = ["Ana", "luis", "Marta", "pedro"];
const ordenNombres = nombres.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
console.log(ordenNombres); // ["Ana", "luis", "Marta", "pedro"]

/*

- Dado el array de objetos:

const productos = [
  { nombre: "camisa", precio: 20 },
  { nombre: "pantalón", precio: 50 },
  { nombre: "zapatos", precio: 80 }
];
 Usa sort() para ordenarlos por precio de menor a mayor.
 */

 const productos = [
    { nombre: "camisa", precio: 70 },
    { nombre: "pantalón", precio: 50 },
    { nombre: "zapatos", precio: 80 }
 ];
const ordenarProductos = productos.sort((a, b) => a.precio - b.precio);
console.log(ordenarProductos);

