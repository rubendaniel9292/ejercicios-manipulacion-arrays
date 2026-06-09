/*
- Dado el array [1, 2, 3, 4], usa join() para obtener "1-2-3-4".

 */
const numeros = [1, 2, 3, 4];
const unidosConGuion = numeros.join("-");
console.log(unidosConGuion); // "1-2-3-4"

/*
- Dado el array ["Hola", "mundo"], usa join() para obtener "Hola mundo".

 */
const palabras = ["Hola", "mundo"];
const frase = palabras.join(" ");
console.log(frase); // "Hola mundo"

/*
- Dado el array ["2024", "06", "15"], usa join() para obtener "2024/06/15".

 */
const fechaPartes = ["2024", "06", "15"];
const fecha = fechaPartes.join("/");
console.log(fecha); // "2024/06/15"
/*- Dado el array [10, 20, 30], usa join() para obtener "10 | 20 | 30".
 */
const numeross = [10, 20, 30];
const unidosConPipe = numeross.join(" | ");
console.log(unidosConPipe); // "10 | 20 | 30"