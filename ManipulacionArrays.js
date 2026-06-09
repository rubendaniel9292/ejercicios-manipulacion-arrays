/*
1. map() – recorrer y transformar elementos
- Qué hace: crea un nuevo array aplicando una función a cada elemento.
- Ejemplo:

 */
const nums = [1, 2, 3];
const dobles = nums.map(n => n * 2);
console.log(dobles); // [2, 4, 6]   

/*
2. filter() – filtrar elementos
- Qué hace: devuelve un nuevo array con los elementos que cumplen una condición.
- Ejemplo:
*/
const nums2 = [10, 15, 20, 25];
const pares = nums2.filter(n => n % 2 === 0);
console.log(pares); // [10, 20]

/*
3. reduce() – acumular valores
- Qué hace: reduce el array a un único valor acumulando resultados paso a paso
 (suma, producto, objeto, etc.).
 array.reduce((acumulador, elementoActual, índice, array) => {
  // lógica
}, valorInicial)

- Ejemplo:

 */
const nums3 = [1, 2, 3, 4];
const suma = nums3.reduce((acc, n) => acc + n, 0);
console.log(suma); // 10

/**
 4. find() – encontrar un elemento
- Qué hace: devuelve el primer elemento que cumple la condición.
- Ejemplo:

 */
const users = [{ id: 1 }, { id: 2 }, { id: 3 }];
const user = users.find(u => u.id === 2);
console.log(user); // {id:2}
/*
}5. some() y every() – validaciones
- Qué hacen:
- some() → devuelve true si algún elemento cumple la condición.
- every() → devuelve true si todos cumplen la condición.
- Ejemplo:

 */

const nums4 = [2, 4, 6];
console.log(nums4.some(n => n > 5));  // true
console.log(nums4.every(n => n % 2 === 0)); // true

/*
6. sort() – ordenar
- Qué hace: ordena los elementos (¡modifica el array original!).
- Ejemplo:

 */

const nums5 = [30, 10, 20];
nums5.sort((a, b) => a + b); //+ orden descendente - orden asscedente
console.log(nums5); // [10, 20, 30]

/*
7. slice() – copiar parte de un array
- Qué hace: devuelve una copia parcial (no modifica el original).
- Ejemplo:
 */
const arr = [1, 2, 3, 4, 5];
const sub = arr.slice(1, 4);
console.log(sub); // [2, 3, 4]

/**
 8. splice() – insertar o eliminar
- Qué hace: agrega o elimina elementos (sí modifica el array).
- splice() → elimina por posición.
- filter() → elimina por condición/valor y devuelve un nuevo array.
- indexOf() + splice() → elimina un valor específico en el array original

- Ejemplo:

 */
const arr2 = [1, 2, 3];
arr2.splice(1, 1, 99);
console.log(arr2); // [1, 99, 3]

/*
9. concat() – unir arrays
- Qué hace: devuelve un nuevo array con la unión de otros.
- Ejemplo:

 */

const a = [1, 2];
const b = [3, 4];
const c = a.concat(b);
console.log(c); // [1, 2, 3, 4]

/*
10. join() – convertir en string
- Qué hace: une los elementos en un string con un separador.
- Ejemplo:

 */
const arr3 = ["JS", "es", "genial"];
console.log(arr3.join(" ")); // "JS es genial"

/* 
11. find() – encontrar un elemento
El método find() devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada.
 */
const array1 = [5, 12, 8, 130, 44];

const found = array1.find((element) => element > 10);

console.log(found);

/**
12. pop() – eliminar el último elemento
 El método pop() elimina el último elemento de un array y lo devuelve. Este método cambia la longitud del array.
 */
const plants = ["broccoli", "cauliflower", "cabbage", "kale", "tomato"];

console.log(plants.pop());
// Expected output: "tomato"

console.log(plants);
// Expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]

plants.pop();

console.log(plants);
// Expected output: Array ["broccoli", "cauliflower", "cabbage"]