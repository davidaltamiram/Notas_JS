// alert("Estoy Vivoooo!!!");

//Este s un comentario de una sola linea

/*Este 
Es
Un 
Comentario
Mutilinea*/

/*
Variables
Es un elemento del cual su valor puede cmabiar o variar dependiendo la circunstancia. Esta variable ocupa un espacio de memoria y dependiendo de su valor o del elemento que este dentro de este espacio, es el tipo de variable ue tenemos.

nombre =      "david";
"declarar"    "Inicializar"

Variable = recipiente donde pondremos el valor
valor = la informacion con a que llenamos el recipiente

- Declarar: es solo gregar la variable sin valor - Ponerle nombre a nuestro recipiente 
- inicializar: es asignar una variable con valor - llenar el recipiente


*/
recipiente = "agua";
recipiente = "cafe";
recipiente = "leche";

//Usamos esta linea de codigo para imprimir o mastrar informacion de mi recipiente
console.log(recipiente);

//Declarar vs inicializar
// quiereseserminovia;
// edad;
// altura;
// peso;
// genero;

/*Tipos de datos primitivos y no primitivos
Se llaman primitivos porque son atos que no pueden ser modificados, ya vienen con el lenguaje y se consideran el dato mas simple omas basico que existe

    - string = Sirve para agregar valores en forma de texto, para que se considere asi, el valor debe estar dentro de comillas simples (''), dobles ("") y backticks(``).

    - Number = Sirve para agregar vallores en formato numerico (Para poder usarlos en operaciones aritmeticas), Estos valores no usan comillas.

    - Boolean = Sirven para representar valores del tipo true o false (encendido o apagado, 0 y 1, si y no)

    - Undefined = Sirve para representar una variable o un tipo de dato que no iene valor, cuando declaramos variables sin inicializar, tendremos datos del tipo undefined. 

    - Null = Sirve para definir que un valor es nulo, 

    -NAN (NOT AT NUMBER) SIRVE para representar un valor que no es un numero, lo obtenemos si hacemos una operacion con una variable que no es un numro o con

    - Symbol
    
    - Object (no es primitivo)

    camel case para buenas practicas

*/

//Ejemplo para la concatenacion
apododefelipe = "El 'amante' numero uno de los chilaquiles verdes";
console.log(apododefelipe);

//Ejemplo de datos numericos
edaadDeFelipe = 31;
costoDeUnGansito = 18.50;
cuentaDeFelipe = -156.35;

console.log(edaadDeFelipe);
console.log(costoDeUnGansito);
console.log(cuentaDeFelipe);

//Ejemplos de valores Booleanos
esAdministrador = true;
contraseniaCorrecta = false,
cuentaPremium = false;

//Ejemplos de datos indefinidos
// respuestaDeMicrush;
// precioBoletoEstacionamiento;


// console.log(respuestaDeMicrush);

//Ejemplos de datos nulos
respuestaDeMicrush = null;

console.log(typeof(respuestaDeMicrush));

// Ejemeplos con valores NaN
operacionmatematica = 0/0 ;

console.log(typeof(operacionmatematica));

// Typof

console.log(typeof(esAdministrador)); //Boolean
console.log(typeof(edaadDeFelipe)); // number

