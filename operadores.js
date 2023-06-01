/*
operadores

Los operadores nos permiten realizar un aperacion en uno o varios operandos (Variables o datos), 

- Operadores de asignacion
- Operadores de cadena
- Operadores de comparacion
- Operadores aritmeticos

Operadores de asignacion (=)
Los operadores de asignacion (=) se utilizan para asignarle valor a una variable, asigna un valorde la izquierda basado en el valor del operador de la derecha.


*/

//Operadores de asignacion
let edadFelipe = 31;
var recipiente = "cafe";

/*
Oeradores de comparacion (>, <, >=, <=, ==, ===; !=, !==)
lso operadores de cmparacion nos ayudan a comparar  dos expresiones o valores y nos devuelven un valor boolean que representa la relacion de sus vlores.

*/

let numero1 = 13;
let numero2 = 25;
let numero3 = "25";

//operador menor que
console.log("El valor 13 es menor que el valor 25 " + (numero1 < numero2)); 

//Operador mayor que
console.log("El valor 13 es menor que el valor 25 " + (numero1>numero2)); 

//Operador mayor o igual que
console.log("El valor 13 es menor que el valor 25 " + (numero2>=numero3)); 

//Operador de igualdad
console.log("El valor 25 es igual que el valor 25 " + (numero2==numero3));

//Operador de igual estricto (evalua el valor y evalua el tipo de dato)
console.log("El valor 25 es igual que el valor 25? " + (numero2===numero3));

//Operador de desigualdad (!=)
console.log("El valor 13 no es igual al valor 25? " + (numero1 != numero2));

//Operador de desigualdad estricta (!==)
console.log("El valor 25 no es igual al valor 25? " + (numero2 !== numero3));


/*
Operadores Logicos (&& (and), ||(or), !(not))

Los operadores logicos nos devuelven un rasultado a partir de que se cumpla (o no) una condicion, El resultado sera un valor boolean y sus operadores son logicos o asimilables entre ellos (Lospodemos combinar, y, Los podemos poner en un orden especifico)

AND (&&)
Sirve para determinar si dos expresiones son verdaderas, 
    - Si ambas expresiones son verdaderas, el resultado es verdadero,
    - Si una de las dos expresiones es falsa, todo el resultado es falso,

OR (||)
Sirve para determinar si dos expresiones son falsas.
    - Si cualquiera de esas afiermaciones es verdadera, todo es verdadero.
    - Si las dos afirmaciones son falsas, todo es falso

*/

//Ejemplo con ADN (&&)

var num1 = 12;
var num2 = 24;

afirmacion1 = (num1 > num2); //false
afirmacion2 = (num1 != num2); //verdadero

console.log(afirmacion1 && afirmacion2); //imprime true porque ambas afirmaciones son verdaderas

//Ejemplo con OR (||)
afirmacion3 = (num1 < num2);//verdadero
afirmacion4 = (num1 !== num2);//verdadero

console.log(afirmacion3 || afirmacion4);// true porque al menos una afirmacion es verdadera

//Ejemplo con NOt (!)
console.log(!afirmacion3); //Falso
console.log(!afirmacion4); //Falso

//Ejercicio de combinacion de operaciones


//!Combinando operaciones2

num1 = 12;
num2 = 24;
num3 = 25;
num4 = 92;
num5 = 91;

op = (num5 > num2 && num4 < num3) || (!(num1 === num2) || num3 != num3);

 console.log(op);

/*
Operaciones aritmeticas (+, -, *, /, %, **, ++, --)

    + (suma): suma dos o mas valores numericos
    - (resta): resta dos o mas valores numericos
    * (multiplicacion): multiplica dos o mas vlores numericos
    / (division): divide dos o mas valores numericos
    % (modulo o residuo): retorna el residuo de una division
    ** (exponienciacion): retorna el resultado de una potencia, Se escribe la base de los asteriscos, y el exponente despues de los asteriscos
    ++(incremento):
    --(decrementp): 


*/

let valor1 = 55;
let valor2 = 17;

console.log("Suma: ", (valor1 + valor2));
console.log("Resta: ", (valor1 - valor2));
console.log("Multiplicacion: ", (valor1 * valor2));
console.log("Division: ", (valor1 / valor2));
console.log("Residuo: ", (valor1 % valor2));
console.log("Exponente: ", (valor1 ** valor2));
console.log("Incremento: ", ++valor1);
console.log("Decremento: ", --valor1);

console.log(valor1);

