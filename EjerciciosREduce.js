/*
- Dado el array [5, 10, 15], usa reduce() para obtener la suma total.

 */
const nums = [5, 10, 15];
const sumaTotal = nums.reduce((acc, n) => acc + n, 0);
console.log(sumaTotal); // 30

/* 
- Dado el array [2, 3, 4], usa reduce() para obtener el producto total.

*/
const nums2 = [2, 3, 4];
const productoTotal = nums2.reduce((acc, n) => acc * n, 1);
console.log(productoTotal); // 24

/*
- Dado el array ["a", "b", "c"], usa reduce() para concatenar todos los caracteres en un solo string.

 */
const chars = ["a", "b", "c"];
const concatenado = chars.reduce((acc, char) => acc + char, "")
console.log(concatenado); // "abc"

/*
- Dado el array [true, false, true, true], usa reduce() para contar cuántos valores true hay.

 */

const bools = [true, false, true, true];
const continueTrue = bools.reduce((acc, val) => acc + (val ? 1 : 0), 0);
console.log(continueTrue); // 3

/*
- Dado el array ["", "hola", null, "mundo", undefined, "JS"], usa filter() para eliminar los valores falsy ("", null, undefined).

 */
const valores = ["", "hola", null, "mundo", undefined, "JS"];
const valuresTurnos = valores.filter(val => val) || [];
console.log(valuresTurnos); // ["hola", "mundo", "JS"]      