/*- Dado el array [1, 2, 3, 4, 5], usa slice() para obtener [2, 3, 4].
 */
const numeros = [1, 2, 3, 4, 5];
const subArray = numeros.slice(1, 4);
console.log(subArray); // [2, 3, 4]
/*- Dado el array ["a", "b", "c", "d", "e"], usa slice() para obtener los 3 primeros elementos.
 */
const letras = ["a", "b", "c", "d", "e"];
const subArrayLetras = letras.slice(0, 3);
console.log(subArrayLetras); // ["a", "b", "c"]

/*- Dado el array ["rojo", "verde", "azul", "amarillo"], usa slice() para obtener los 2 últimos elementos.
 */
const colores = ["rojo", "verde", "azul", "amarillo"];
const ultimosColores = colores.slice(-2);
console.log(ultimosColores); // ["azul", "amarillo"]

/*- Dado el array [10, 20, 30, 40, 50], usa slice() para obtener una copia completa del array.
 */
const numeros2 = [10, 20, 30, 40, 50];
const copiaNumeros = numeros2.slice();
console.log(copiaNumeros); // [10, 20, 30, 40, 50]
/*- Dado el array [100, 200, 300, 400, 500], usa slice() para obtener [200, 300, 400]
 */
const numeros3 = [100, 200, 300, 400, 500];
const subArrayNumeros3 = numeros3.slice(1, 4);
console.log(subArrayNumeros3); // [200, 300, 400]
/*- Dado el array ["lunes", "martes", "miércoles", "jueves", "viernes"], usa slice() para obtener solo los días laborales (sin viernes).
 */
const dias = ["lunes", "martes", "miércoles", "jueves", "viernes"];
const diasLaborales = dias.slice(0, 4);
console.log(diasLaborales); // ["lunes", "martes", "miércoles", "jueves"]