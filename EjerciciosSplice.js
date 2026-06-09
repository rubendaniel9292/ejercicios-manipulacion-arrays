/*
- Dado el array [1, 2, 3, 4, 5], usa splice() para eliminar el número 3.
 */
const numeros = [1, 2, 3, 4, 5];
const indice = numeros.splice(2, 1); // Elimina 1 elemento en el índice 2
console.log(numeros); // [1, 2, 4, 5]

/*
- Dado el array ["a", "b", "d", "e"], usa splice() para insertar "c" en la posición correcta.

 */
const letras = ["a", "b", "d", "e"];
letras.splice(2, 0, "c"); // En el índice 2, elimina 0 elementos e inserta "c"
console.log(letras); // ["a", "b", "c", "d", "e"]

/*- Dado el array [100, 200, 300, 400], usa splice() para reemplazar 200 por 250.
 */
const numeros2 = [100, 200, 300, 400];
numeros2.splice(1, 1, 250); // En el índice 1, elimina 1 elemento e inserta 250
console.log(numeros2); // [100, 250, 300, 400]

/* - Dado el array ["rojo", "verde", "azul"], usa splice() para eliminar "verde" y agregar "amarillo" en su lugar.
*/
const colores = ["rojo", "verde", "azul"];
colores.splice(1, 1, "amarillo"); // En el índice 1, elimina 1 elemento e inserta "amarillo"
console.log(colores); // ["rojo", "amarillo", "azul"]

/*- Dado el array [10, 20, 30], usa splice() para insertar 15 entre 10 y 20.
*/
const numeros3 = [10, 20, 30];
numeros3.splice(1, 0, 15); // En el índice 1, elimina 0 elementos e inserta 15
console.log(numeros3); // [10, 15, 20, 30]