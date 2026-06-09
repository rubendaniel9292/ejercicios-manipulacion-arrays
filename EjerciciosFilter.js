/*
- Dado el array [5, 12, 8, 130, 44], usa filter() para obtener los números mayores a 10
 */

const nums = [5, 12, 8, 130, 44];
const mayoresa10 = nums.filter(n => n > 10)
console.log(mayoresa10);; // [12, 130, 44]
//con bucle for
for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 10) {
        console.log(nums[i]);
    }
}

/*
- Dado el array ["ana", "luis", "marta", "pedro"], usa filter() para obtener solo los nombres que contienen la letra "a".

 */

const igualesA = ["ana", "luis", "marta", "pedro"];
const nombresconA = igualesA.filter(nombre => nombre.includes("a"));
console.log(nombresconA); // ["ana", "marta"]

/*
- Dado el array [true, false, true, false, true], usa filter() para obtener solo los valores true.

 */
const boleanos = [true, false, true, false, true];

const onlyTrue = boleanos.filter(b => b === true);
console.log(onlyTrue); // [true, true, true]
/* 
- Dado el array de objetos:
- Usa filter() para obtener solo los productos con precio mayor a 30.

*/
const productos = [
    { nombre: "camisa", precio: 20 },
    { nombre: "pantalón", precio: 50 },
    { nombre: "zapatos", precio: 80 }
];
const productosFiltrados = productos.filter(producto => producto.precio > 30);
console.log(productosFiltrados);

const prodctoBucle = []
for (let i = 0; i < productos.length; i++) {
    if (productos[i].precio > 30) {
        console.log("index", i + 1)
        prodctoBucle.push(productos[i]);
    }

}
console.log(prodctoBucle);