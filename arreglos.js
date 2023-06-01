/*
Arreglos (arrays, matrices, colecciones de datos)

En JavaScript, un array es un objeto. Esto porque es un elemento especial que tiene propiedades y métodos propios de los objetos. Además, al ser un objeto, puede ser accedido principalmente mediante índices numéricos (claves). 

Es importante mencionar que aunque los arrays sean un objeto, éstos están diseñados específicamente para almacenar y manipular conjuntos ordenados de datos. Los arrays ofrecen características y funcionalidades específicas para trabajar con elementos indexados numéricamente, lo que los distingue de los objetos regulares en JavaScript.



*/

//Formas de declarar un array o arreglo

//1.- Usando los corchetes []
var miArray = [1, 2, 3, 4, 5, 6];

//Variable sin inicializar
var colores;

//Arreglo sin asignar a una variable
["azul", "rojo", "Naranja", "Verde"];

//Variable colores asignada e inicializada
var colores = ["azul", "rojo", "Naranja", "Verde", ["Verde pastel", "Amarillo pastel", "rosa pastel"]];

//Podemos tener distintos tipos de datos en un arreglo
var datosdeFelipe = ["Felipe", 31, "guadalajara", "Nikky", true, undefined, null];

//Cada asignatura esta asociada o una variable
var asignatura = "Matematicas";
var asignatura2 = "Ltearatura";
var asigantura3 = "Fisica";

var asignaturas = ["Matematicas", "Literatura", "Fisica"];

console.log(typeof(asignaturas));

//Aceeso a elementos de un arreglo
console.log("El elemento en la pocision 2 de mis asignaturas es: ", asignaturas[2]);

//si accedemos a un elemento que no existe, nos mostrara un undefined porque el espacio existe pero no tiene ningun valor
console.log("El elemento en la pocision 2 de mis asignaturas es: ", asignaturas[10]);

//mostrar la longitud del arreglos lenght
console.log(asignaturas.length);

//Ejemplos de arrays

//Array carrito de compras
var carrito = ["pantalon", "camisa", "corbata"];

var publicacion = ["Felipe", 137, "29-mayo-2023"];

console.log(publicacion);

//Modificar los elementos dentro de arrays

//Reasignamos el valor a un elemento de nuestro arreglo por medio de su index
publicacion[1] = 138;
console.log(publicacion);

//No teniamos un elemento en la posicion (index) 4 (indefinido = 150)
publicacion[4] = 150;

//Metodo para agregar elementos al final de un arreglo
asignaturas.push("Biologia");

console.log(asignaturas);

asignaturas.push("ingles");

console.log(asignaturas);

//Metedo para eliminar el ultimo elemento de un arreglo
asignaturas.pop();
console.log(asignaturas);

//Metodo para agregar elementos al principio de un arreglo (unnshift)
asignaturas.unshift("Quimica", "Educacion Fisica", "Artes");
console.log(asignaturas);

//Metodo para eliminar elementos del principio de un arreglo
asignaturas.shift();
console.log(asignaturas);

//Metodo para saber si mi arreglo incluye un elemento especifico
let carritoDeWalmart = ["Gansitos", "Coquita", "Galletas Marias", "Mazapan"];
console.log(carritoDeWalmart.includes("Coquita"));

regalo = carritoDeWalmart.includes("Coquita");
if(regalo === true){
    console.log("Te regalo un sarten");
}

var amigos = ["Felipe", "Mariana", "Fernanda", "Maara", "Gaby", "Marina"];
var mejoresAmigos;
var publico;

if(!amigos){
    console.log("Mi meme de bob esponja");
}

//Metodo para concatenar arreglos
var listaDeGolosinas = ["Gansitos", "Coquita", "Galletas Marias", "Mazapan"];

var listaDeFrutitasYVerduritas = ["manzanas", "mangos", "toronjas", "Platanos", "Fresas"];

var listaDecompras = listaDeGolosinas.concat (listaDeFrutitasYVerduritas);

console.log(listaDecompras);
console.log(listaDeGolosinas + listaDeFrutitasYVerduritas);

//Metodo para buscr un elemento en un arreglo y devolver el indice de su primera aparicion, Si el elemento no se encuentra, retorna -1
console.log(listaDecompras.indexOf("Chicharrones"));

//Metodo para unir elementos de un arreglo en una cadena de texto
console.log("Resumen de compra");
console.log(listaDecompras.join("****"));


//Modificacion del arreglo (push, pop, shift, unshift, splice)


//Acceso y Busqueda de elemento (indexof, lastindexof(), include)

//Transformacion de elementos (sort, reverse, map, forEach)

// Operaciones Logicas (every, some)

//Creacion de nuevos arregos (slice, concat, join, reverse)


/*Splice (Agregar, eliminar o remplazar elementos en posiciones expecificas)

Sintaxis del splice

array.splice(iniciamos, numeroElementosAborrar, ElementosAInsertar, )

*/


//splice para borrar elementos
var abecedario = ["A", "B", "C", "D", "E"];
abecedario.splice(2,2);

console.log(abecedario);

//splice para insertar
abecedario.splice (2,0, "C", "D");

console.log(abecedario);

//splice para remplazar elementos del arreglo
var vocales = ["A", "E", "I", "O", "U"]; //Remplazar E I
vocales.splice(1, 2, "COMER", "COMER", "COMER");// 

console.log(vocales);

