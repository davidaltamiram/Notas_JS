// var color = "" 
// while (color != "rojo"){ 
//    	color = prompt("dame un color (escribe rojo para salir)","") 
// }

/*
Bucles e interaciones

En js un bucle es una estructura de control que permite repetir un bloque de instrucciones, o lo que es lo mismo, repetir una tarea tantas veces queramos. Gracias a esto vamos a poder automatizar tareas repetitivas

- While (Mientras)
- Do While (Hacer mientras)
- For (Para)

While (Mientras)

Este bucle nos sirve para realizar una tarea repetitiva, mientras una condicion sea VERDADERA. A diferencia del if, que pregunta unavez y despues ejecuta el bloque de codigo, el while pregunta continuamente la condicion y ejecuta el bloque de codigo hasta que la condicion devuelva FALSE.

*/

//Estructura basica de una while
/*
while(tenerSuenio && tenerUnaCamita){
        //Hacer la durmicion
}



Ejemplo de un ciclo o bucle infinito
while (true){
    //bloque de codigo a ejecutar
    amarAMiCrush();
    NoAmarAMiCrush();
}


//Registrar usuario
let rolDeUsuario = "registrado"; //esto ya esta definido


while (!"registrado") { //la evaluacion es sobre el rol
    
    function registrarUsuario(){
        console.log("Usuario Registrado");
    }

}


dejaloComprar();


Casos de uso del ciclo While
- Para verificar si un usuario esta registrado o no
- Verificamos la disponibilidad de un producto (Stock)
- Realizar acciones sobre nuestro carrito de compras (Revisar productos, aplicar descuentos, impuestos, actualizar informacion, etc.)
- Recorrer publicaciones de un usuario
- Contador dde likes



*/
// let Felipe = "listaAmigos";
// let Fernanda = "bloqueada";

// while(listaAmigos){
//     console.log("Mostrar publicacion");

// }

//Codigo de mi sopita de verduras con pollito
var ingredientes = ["zanahorias", "cebollas", "apio", "papa", "espinacas", "pollito"]; //6 elementos

//DEclaramos una variable llamada contador inicializada en 0, para usarla como un contador
var contador = 0;

//Mientras los ingredientes agregados a la olla sean menos que los ingredientes que me quedan disponibles...
while(contador < ingredientes.length){
    //... ire agregando ingredientes a la olla
    console.log("Agregando "+ ingredientes[contador] + " a la olla");

    //.. y voy aumentando el contador para saber cuando parar
    contador ++;
}
console.log("La sopita ya esta lista, yumi");


function imprimirAsteriscos(){
    console.log("*******************************");
}
imprimirAsteriscos();

/*
Do - While (Hacer mientras)

Es similar al while, con la diferencia de que la condicion se evalua despues de cada iteracion, Esto garantiza que el bloque de codigo se ejecute almenos una vez, incluso si la condicion inicial es falsa


do {
    while()
}


*/

console.log("Ejemplo de Galletitas con Do-While")

//variable tiempo de coccion que servira como contador
var tiempoTranscurridoDeCoccion = 0;

//usamos el ciclo do-while

do {

    console.log("Horneando las galletas...");
    tiempoTranscurridoDeCoccion +=5;


//Todo el bloque de codigo se va evaluar mientras el tiempo de coccion sea menor a 30 minutos. Esto es porque las galletas se puden cocinar en 5, 10, 15, 20 o 25 minutos, teniendo un maximo de 30. Si pasamos de ese tiempo, puede que las galletas se quemen. 

//Esto es como si revisaramos el horno cada 5 minutos


} while (tiempoTranscurridoDeCoccion <30);


console.log("Las galletas estan listas");

/*For (para)
Se utiiza cuando se conoce el numero exacto de iteraciones que se realizaran, Consiste en tres partes: inicializacion, condicion y expresion final.
El bloque de codigo se ejecuta mientras la condicion sea verdadera, y despues de cada iteracion se ejecuta la expresion final.

for (inicializacion; conicion; expresion de iteracion){
    //bloque de codigo a ejecutar
}

- inicializacion: se ejecuta antes de que el bucle comience, y se utiliza para establecer una variable de control (contador)

- condicion: se verificar antes de cada iteracion, y si se evalua como verdadera, el bucle se ejecuta.

- expresion de iteracion: se ejecuta al final de cada iteraciones, y se utiliza para actualizar o modificar la variable de control 

*/

imprimirAsteriscos();
console.log("Ejemplo de la pizza con for");
//Definir lista de pasos
var pasosReceta = ["preparar masa", "Agregar los ingredientes", "Hornear la pizza"];

//Definir mi lista de tiempo por paso
var tiempoPorpaso = [15, 10, 20];

//En el cico for , para cada paso, se tiene un tiempo estimado.

//Para cada paso de la lista, voy a tomar en cuenta el tiempo que se necesita para hacerlo. Cada que vaya cumpliendo un paso, voy incrementando mi variable paso para saber cuantos pasos me quedan pendientes. Cuando ya no haya pasos, termino el proceso.
for (var paso = 0; paso < pasosReceta.length; paso++){

    console.log("Realizando paso " + pasosReceta[paso]);
    console.log("Esperando " + tiempoPorpaso[paso] + "minutos");

}

console.log("Disfruta tu pizza");

//Ejemplo contador con for

for (let i = 10; i > 0; i--){
    //aqui adentro
    console.log("Faltan " + i + " Segundos para el despegue");
}


//EJemplos de for para cupones de descuento
for (let cupones = 9; cupones > 0; cupones --){
    console.log("Tienes un cupon de descuento, nos quedan " + cupones);
}

//Escribe un programa que pida al usuario un numero entero, y muestre en pantalla si es un numero o no

//Que es un numero primo? es un numero mayor que 1, que solo se puede dividir entre 1 y entre si mismo
//Ejemplos de numeros primos: 2, 3, 5, 7, 11,
//operaciones: division, comparacion, residuo

//Paso 1: Le pido el dato al usuario
var numero = prompt("Ingresa un numero entero: ");

//Paso 2: que sea o no primo
var esprimo = true;

//Paso 3: operacion para demostrar si es o no es primo
if (numero <= 1){
    esprimo = false;
}else{
    let divisor = 2;
    while (divisor <= numero /2 && esprimo){
        if(numero % divisor === 0){
            esprimo = false;
        }
        divisor ++;
    }
}

