/*- Dado [1, 2] y [3, 4], usa concat() para obtener [1, 2, 3, 4].
 */
const array1 = [1, 2];
const array2 = [3, 4];
const combinado = array1.concat(array2);
console.log(combinado); // [1, 2, 3, 4]

/*- Dado ["a", "b"] y ["c", "d"], usa concat() para obtener ["a", "b", "c", "d"].
 */
const letras1 = ["a", "b"];
const letras2 = ["c", "d"];
const letrasCombinadas = letras1.concat(letras2);
console.log(letrasCombinadas); // ["a", "b", "c", "d"]

/*- Dado [true, false] y [false, true], usa concat() para obtener [true, false, false, true].
 */
const booleanos1 = [true, false];
const booleanos2 = [false, true];
const booleanosCombinados = booleanos1.concat(booleanos2);
console.log(booleanosCombinados); // [true, false, false, true]

/*- Dado [{id: 1}] y [{id: 2}], usa concat() para obtener [{id: 1}, {id: 2}].
 */
const objetos1 = [{ id: 1 }];
const objetos2 = [{ id: 2 }];
const objetosCombinados = objetos1.concat(objetos2);
console.log(objetosCombinados); // [{id: 1}, {id: 2}]

/*- Dado [10, 20, 30] y [40, 50, 60], usa concat() para obtener [10, 20, 30, 40, 50, 60].
 */
const numeros1 = [10, 20, 30];
const numeros2 = [40, 50, 60];
const numerosCombinados = numeros1.concat(numeros2);
console.log(numerosCombinados); //
/*- Dado ["rojo", "verde"] y ["azul"], usa concat() para obtener ["rojo", "verde", "azul"].
    */
const colores1 = ["rojo", "verde"];
const colores2 = ["azul"];
const coloresCombinados = colores1.concat(colores2);
console.log(coloresCombinados); // ["rojo", "verde", "azul"]

/*- Dado ["a", "b"] y ["c", "d", "e"], usa concat() para obtener ["a", "b", "c", "d", "e"].
 */
const letrasA = ["a", "b"];
const letrasB = ["c", "d", "e"];
const letrasUnidas = letrasA.concat(letrasB);
console.log(letrasUnidas); // ["a", "b", "c", "d", "e"]

/*
- Dado [1, 2, 3] y [4, 5, 6], usa concat() para obtener [1, 2, 3, 4, 5, 6].
*/

const numsA = [1, 2, 3];
const numsB = [4, 5, 6];
const numsUnidos = numsA.concat(numsB);
console.log(numsUnidos); // [1, 2, 3, 4, 5, 6]

/*
- Dado [{name: "Alice"}] y [{name: "Bob"}], usa concat() para obtener [{name: "Alice"}, {name: "Bob"}].
*/

const personasA = [{ name: "Alice" }];
const personasB = [{ name: "Bob" }];
const personasUnidas = personasA.concat(personasB);
console.log(personasUnidas); // [{name: "Alice"}, {name: "Bob"}]