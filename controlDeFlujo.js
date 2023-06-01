/*
Control de flujo

Cuando hablamos de flujo de control hablamos del orden en que se ejecutan las instrucciones de un programa, siendo estas instrucciones las que determinan o controlan dicho flujo.

En un programa, a menos que el flujo de control se vea modificado por una instruccion de control (por ejemplo una condicional), el flujo de control se mantiene en el mismo orden en el que se escriben las instrucciones (de arriba a abajo y de izquierda a derecha).

Condicionales:
Son estructuras o condiciones que nos permiten modificar el orden natural de ejecucion de nuestro programa. Son sentencias especificas que nos ayudara a decidir si una condicion se cumple o no (verdadero o falso), a partir de esta respuesta se ejecuta una o varias instrucciones. 

Ejemplo:
Tengo limpia mi playera de la suerte?  //pregunta o instruccion que detona la condicion
    true: Entonces voy a la fiesta //respuesta con su posible instruccion
    false: Entonces me quedo a mimir //respuesta con su posible instruccion
*/

/*Condicion if (si?)

If nosr sirve para validar

If nos sirve para validar si una condición se cumple o no. Si se cumple, entonces se ejecuta el bloque de código que esté dentro del if. Si no se cumple, entonces no se ejecuta ningún bloque de código.


//Estructura basica de if

if (condicion){
    //Ejecuta este bloque de codigo


}*/

//Felipe tiene 17 añios, y quiere ir a una fiesta, dicha fiesta solo es para personas adultas (mayores de 18 años), ayuda a felipe a decidir si puede ir a la fiesta o no.

//Evaluamos una expresion (si felipe tiene menos de 18 años), en caso de que sea verdadero, mostramos el mensaje dentro del bloque, si es falso, no mostrara nada porque nuestro programa no esta preparado para esa situacion (incertidumbre).
let edadFelipe = 17;//Debemos tomar en cuenta primera edad de felipe
let edadpermitida = 18;

if (edadFelipe < edadpermitida){
    console.log("Lo siento Felipe, no puedes ir a la fiesta ");
}

/*
Else (de otro modo - si no)

Utilizamos esta instruccion o sentencia para especificar que un bloque se ejecutara si la condicion es verdadera, y otro bloque de codigo se ejecuta en caso de que la condicion sea falsa

Estructura basica else

if (condicion){
    //Este bloque se ejecuta si la condicion es verdadera
} else {
    //Este bloque se ejecuta si la condicion es falsa
}
*/

let edadAxel = false;
let edadEntrada = 18;

if (edadAxel < edadEntrada){//Verdadero
    console.log("Lo siento no puedes, entrar a la fiesta");
}else{
    //Se ejecuta cuando es falso
    console.log("Pasele joven");
}

/*
Test de nuestro programa 
    - "falsa" (String)
    - NaN
    - false (boolean)
    - 

*/

/*
Else if (ademas si / si no entonces)

Esta condicional nos ayuda a ejecutar una nueva condicion en caso de que la primera sea falsa, Podemos usar todas las estructuras else if que sean necesarias, terminando con una estructura else.

estructura basica del else if

if (condicion 1){
    //bloque de codigo que se ejcuta si la condicion 1 es verdadera
}else if (condicion 2) {
    //bloque de codigo que se ejcuta si la condicion 1 es falsa y la condicion 2 es verdadera
}else if (condicion 3){
    //bloque de codigo que se ejcuta si la condicion 1 es falsa y la condicion 2 es falsa
}else{
    //bloque de codigo que se ejecuta si la ondicion 1, 2 y 3 son falsas
}

Se pueden anidar x cantidad de else if entre el if que evaluea la condicion inicial y el else que termina toda la expresion.

*/

// let hora = prompt("Ingrese la hora actual");
// if (hora < 12){
//     console.log("Buenos dias");
// }else if(hora <= 19){
//     console.log("Buenas tardes ya, que barbaro como pasa el tiempo");
// }else{
//     console.log("Buenas noches, vamos a mimir");
// }

/*
Switch

Esta condicional nos permite hacer multiples operaciones y tomar decisiones en funcion de distintos estados de as variables. Evalua una expresion comparando el valor de un dato o variable, y ejecutando la instruccion asociada a ese caso.

- case: Evalua el caso o condicion asociado que dispara un bloque de codigo
- break: Termina el preceso sin que tengamos que paar por todas las iteraciones o casos.
- default: Termina el proceso en caso de que ninguna de las evaluaciones sea la correcta. Similar al else.

switch (expresion o condicion){
    case valor1:
        //Codigo que se ejecuta si la condicion es igual a valor1
    break,

    case valor2;
        //Codigo que se ejecuta si la condicion es igual a valor1
    break,

    case valor3;
    //Codigo que se ejecuta si la condicion es igual a valor1
    break,

    case valor4;
    //Codigo que se ejecuta si la condicion es igual a valor1
    break,

    case valor5;
    //Codigo que se ejecuta si la condicion es igual a valor1
    break,

    default; 
        //Ingresaste un piso incorrecto (un bloque de codigo que se ejecuta si no se cumple con ninguna de las condiciones anteriores)
}




*/

//Ejemplo de Switch

let Piso_Destino = prompt("ingresa el piso l que quieras ir: (1 al 5) ");

switch(Piso_Destino){
    //Para jugar con nuestros casos el tipo de dato debe coincidir para que se ejecute correctamente
    case "1":
        console.log("Vamos a piso 1 (musica de elevador de fondo)");
        break;

    case "2":
        console.log("Vamos a piso 2 (musica de elevador de fondo)");
        break;

    case "3":
        console.log("Vamos a piso 3 (musica de elevador de fondo)");
        break;

    case "4":
        console.log("Vamos a piso 4 (musica de elevador de fondo)");
        break;

    case "5":
        console.log("Vamos a piso 5 (musica de elevador de fondo)");
        break;

        default:
            console.log("Ingrsaste un piso que no es valido");
}

//Ejercicio de Evee
var elementosEvolucion = prompt("Ingresa el elemento con el que evolucionarias a tu pokemon");

switch(elementosEvolucion){
    case "piedraFuego":
        console.log("Tu Evee ha evolucionado a Flareon");
        break;
    
    case "piedraTrueno":
        console.log("Tu Evee ha evolucionado a jolteaon");
        break;
}