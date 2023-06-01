console.log("Estatus de la mama de bambi: " + mamadebambi);
/*Tipos de variabes
en Js tenemos 3 tipos principales de variables:

    Scope = (Alcance)


- var: Era la forma principal de declarar variables, Es una variable muy flexibe, tiene un scope (alcance) global, esto es, que el valor de esta variable esta disponible en todo el programa.

- let: Se utiliza o lo usamos para imitar el alcance de nuestras variables (scope), y si limita a un bloque de codigo o expresion (meter a la amam de bambi en una cajita), es una variable local

- const: Se usan para declarar una variable con un valor constante o inmutabe (que no cambia).

*/
//Es este caso, la amam de bambi esta visible desde cualquier lugar del programa
var mamadebambi = false;

var cazador = "listo para disparar";

let nombre = "David altamira";

const pi = 3.1416;

/*
function

Una funcion es una agrupacion de instrucciones que se ejecutan cuando se llaman o se invica, las funciones pueden recibir parametros y devolver valores, es importante mencionar que las funciones no se ejecutan sino se invocan.

Parametros = variables que necesitamos para alimentar mi funcion (todas las variables se tienen que utilizar)

Ejemplo: Limon, Azucar, Vasito de Agua, cucharita, hielitos, agua,

Nombre para la funcion = Con el nombre, nosotros vamos a poder activar o invocar la funcion (basicamente, tenemos que llamarla para que funcione)

Ejemplo: preparar aguita de limon.

Operaciones: Conjunto de instrucciones (en orden especifico)

Ejemplo: 1) Cortar e limon, 2) Exprimir el limon, etc..

Resultado: Las funciones generalmente deben tener un resultado.

Ejemplo: Vasito de Agua de limon.
*/

//1- Creamos la funcion con la palabra reservada function y le ponemos nombre,abrimos y cerramos parentesis (), despues abriremos y cerraremos llaves {}, los parentesis son para nuestros parametros o argumentos, y las llaves para delimitar el bloque o la funcion.

//2- Ponemos nuestros parametros (variables) dentro de los parentesis

//3- Poner las instrucciones dentro de las llaves

//4.- Invocar la funcion escribimos su nombre y abrimos y cerramos parentesis.



function aguita_limon(limon, agua, hielos, azucar, vaso, cuchara){

    var limon = "limon";
    var agua = "agua";
    var hielos = "hielos";
    var azucar = "azucar";
    var vaso = "vaso";
    var cuchara = "cuchara";


    console.log("Cortar el limon " + limon);
    console.log("Exprimir el limon ");
    console.log("Agregar el jugo de limon al vaso " + vaso);
    console.log("Agregamos los hielos al vaso " + hielos);
    console.log("Agregamos el agua al vaso " + agua);
    console.log("Endulzamos al gusto " + azucar);
    console.log("Mezclar y disfrutar " + cuchara);

    var cuchara = "tenedor";
    console.log(cuchara);
}

aguita_limon();


//Ejemplo de las tres formas de agregar parametros a funciones

//primera forma: usando parametros dentro de parentesis y reasigando e inicializando dentro de la funcion

function suma(a, b){//Valores estan en undefined
    a = 5; //cambio el undefined por 5
    b = 7; //cambio el undefined por 7
    suma = a + b; //Hago mi suma 
    console.log(suma);//imprimir mi operacion

}

suma();//invocacion la funcion


// Segunda forma: Usando los valores dentro del parentesis, ya inicializados

function resta(a=8, b=5){
    operacion = a - b;
    console.log(operacion);
}

resta();

// Tercera Forma: inicializando valores dentro de la invocacion
function multiplicacion(a, b){
    operacion = a * b;
    console.log(operacion);

}

multiplicacion(3, 9);

let funcionAnonima = function (a, b){
    operacion = a/b;
    console.log(operacion);
}

console.log(funcionAnonima);