/*
- Dado el array [10, 20, 30, 40], usa find() para obtener el primer número mayor a 25.

 */
const number = [10, 20, 30, 40];
const primermayor2 = number.find(n => n > 25);
console.log(primermayor2); // 30
/*
- Dado el array de objetos:
- Usa find() para obtener el producto con precio igual a 50.
*/
const productos = [
    { nombre: "Producto 1", precio: 30 },
    { nombre: "Producto 2", precio: 50 },
    { nombre: "Producto 3", precio: 70 }
];
const productoPrecio50 = productos.find(producto => producto.precio === 50);
console.log(productoPrecio50); // { nombre: "Producto 2", precio: 50 }
/* 
- Dado el array ["ana", "luis", "marta", "pedro"], usa find() para obtener el primer nombre que empieza con "m".

*/
const nombres = ["ana", "luis", "marta", "pedro"];
const primerNombreM = nombres.find(nombre => nombre.startsWith("m"));
console.log(primerNombreM); // "marta"
/*
- Dado el array [true, false, false, true], usa find() para obtener el primer valor que sea false.

 */
const booleanos = [true, false, false, true];
const primerFalse = booleanos.find(val => val === false);
console.log(primerFalse); // false

/*
 Dado el array de objetos: - Usa find() para obtener el primer usuario que esté activo (activo: true).

 */
const usuarios = [
    { id: 1, activo: false },
    { id: 2, activo: true },
    { id: 3, activo: false }
];
const primerUsuarioActivo = usuarios.find(usuario => usuario.activo === true);
console.log(primerUsuarioActivo); // { id: 2, activo: true }