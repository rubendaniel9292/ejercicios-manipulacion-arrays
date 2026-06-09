/* 
- Dado el array [3, 5, 7, 9], usa some() para verificar si hay algún número par.



const numeros = [3, 5, 7, 9];
const hayNumerosPar = numeros.some(n => n % 2 === 0)
console.log(hayNumerosPar); // false
/*
- Dado el array ["ana", "luis", "marta"], usa some() para verificar si algún nombre contiene la letra "z".
 */

const nombres = ["ana", "luis", "marta"];
const hayNombreConZ = nombres.some(nombre => nombre.includes("z"));
console.log(hayNombreConZ);

/*
- Dado el array [10, 20, 30], usa every() para verificar si todos los números son mayores a 5.
 */
const nums = [10, 20, 30];
const todosMayoresQue5 = nums.every(n => n > 5);
console.log(todosMayoresQue5); // true

/* - Dado el array de objetos:
const productos = [
  { nombre: "camisa", disponible: true },
  { nombre: "pantalón", disponible: true },
  { nombre: "zapatos", disponible: false }
  ;
- Usa some() para verificar si hay algún producto no disponible. 
]*/
const productos = [
  { nombre: "camisa", disponible: true },
  { nombre: "pantalón", disponible: true },
  { nombre: "zapatos", disponible: false }
];
const todosDisponibles = productos.every(producto => producto.disponible === true);
console.log(todosDisponibles); // false

/*- Dado el array [true, true, false], usa every() para verificar si todos los valores son true. */
const valores = [true, true, false];
const valoresTodos = valores.every(v => v === true);
console.log(valoresTodos); // false