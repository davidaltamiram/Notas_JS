/*

Programacion Orientada a Objetos en Javascript

Paradigma de programacion que nos permite crear soluciones a problemas que se nos presentan, tomando como ejemplo los objetos del mundo real. 

Otras formas de programar:

- Programacion funcional
- Programacion imperativa
- Programacion declarativa

- key value = llaves de valor, (descripcion, valor - nombre, felipe)
*/

//Arreglos (objetos)
var casaArreglo = [3, 2, 1, "Rojo"];

//Creacion de un objeto casa (atributos)
const casa = {
    numeroHabitaciones: 3,
    numPisos: 2,
    numBanios: 1,
    color: "rojo",
}

//Casa[Indice]; //Normalmente se hace con un arreglo
casa [3];

//Para imprimmir la informacion de un objeto, utilizo la referencia al objeto, despues un punto, y por ultimo el nombre de la propiedad  metodo que quiero mostrar
console.log("El color de la casa es: ",casa.color);

//plantilla para repetir 50 veces la misma casa (Estandarizar esa produccion en cadena)

//Clase para generar una plantilla, esta plantilla va a tener predefinidas las llaves (Keys) de nuestras propiedades, y cada que instancie o cree un nuevo objeto, esa informacion se a ir perzonalizando

class casaPlantilla{
    //1- Definir mis propiedades como variables, para posteriormente agregarle valores (este valor se lo vamos a dar cuando instanciemos el onjeto)

    numHabitaciones = 0;
    numBanios = 0;
    numPisos = 0;
    color = "";


    //3- Definir una funcion constructora,ESta funcion es una funcion especial que se dedica unica y exclusivamente a tomar los datos que definimos como variables,para usarlas como parametros de construccion y asi poder instanciar nuestro objeto


    //Los parametros se pasan en el orden en el que fueron declarados, para que cada valor que se use, se asigne a la variable correspondiente
    constructor(numHabitaciones, numBanios, numPisos, color){
        this.numHabitaciones = numHabitaciones;
        this.numBanios = numBanios;
        this.numPisos = numPisos;
        this.color = color;
    }


    //2- Definimos los metodos como funciones, porque estas funciones nos dicen que es lo que puede hacer mi objeto
    encenderLuces(){
        console.log("Click, Luces encendidas");
    }

    abrirVentanas(){
        console.log("Swiiiiiifftt, ventanas abiertas");
    }

    guardarmeDelFresnito(){
        console.log("Que agusticidad");
    }

}
//En la clase definimos todo de forma "normal" (declaran las variables como las usamos = y ;, pero cuando el objeto se crea (instancia), se vizualiza de otra forma con : y , entre cada valor.)


/*Instanciar casas
Para instanciar objetos usamos la siguiente sintaxis:

variable con nombre = palabraReservadaNew ReferenciaDelaClase(Parametros de construccion);

let obsjeto = new Claseobjeto (parametros);


*/

//Tengo una variable llamada "casa de felipe", que es un nuevo objeto de la clase "casaplantilla" y que tiene los siguintes parametros
let casaDeFelipe = new casaPlantilla (6, 3, 3, "Azul");

console.log(casaDeFelipe);
casaDeFelipe.guardarmeDelFresnito();
casaDeFelipe.encenderLuces();
console.log(casaDeFelipe.numHabitaciones);

//Ejemplo de POO con gatitos
class gatitos{
    //1 propiedades
    nombre = "";
    edad = 0;
    tamaño = "";
    caracter = "";
    numeroVidas = 0;  
    color = "";
    raza = "";
    vacunas = false;

    //3- constructor
    constructor(nombre, edad, tamaño, caracter, numeroVidas, color, raza, vacunas){
        this.nombre = nombre;
        this.edad = edad;
        this.tamaño = tamaño;
        this.caracter = caracter;
        this.numeroVidas = numeroVidas;
        this.color = color;
        this.raza = raza;
        this.vacunas = vacunas;
    }


    //2- metaodos
    imprimirInf(){
        console.log("El nombre de mi gato es: ", this.nombre);
        console.log("La edad de mi gato es: ", this.edad);
        console.log("El tamaño de mi gato es: ", this.tamaño);
        console.log("El numero de vidas de mi gato es: ", this.numeroVidas);
        console.log("La raza de mi gato es: ", this.raza);
    }

    maullar(){
        console.log("Miauuuu");
    }

    rasguniar(){
        console.log("Rrrrrrrrrrr");
    }

    cuidarGato(){
        if(this.numeroVidas < 3){
        console.log("Cuida a tu gatito porque tiene pocas vidas");
        }
    }

}

//instanciar 
let juanchito = new gatitos("Juancho Del campo", 5, "Grande", "Tranquilo", 7, "Naranja", "angora", true);
let nenito = new gatitos ("Neenito", 3, "Mediano", "Travieso", 2, "Blanco con Naranja", "Desconocida", true);
let patas = new gatitos ("Patas", 5, "Mediano", "Travieso", 6, "Blanco con cafe", "marciana", true);
let dalila = new gatitos ("Dalila", 1, "Grande", "Travieso", 4, "Blanco con Naranja", "Cholo", true);
let perejil = new gatitos ("Perejil", 2, "Mediano", "Travieso", 7, "Blanco", "Cholo", true);


juanchito.imprimirInf();
nenito.imprimirInf();

juanchito.cuidarGato();
nenito.cuidarGato();

/*
Json (Javascript Object Notation)

Es un formato estandar basado en texto (String) para representar datos estructurados (objetos) basados en la sintaxis de objetos de javascript ({,  :})

json es una estructura 

*/

//Objeto normal de JAVASCRIPT
objeto = {
    nombre: "Felipe",
    edad: 15
}

console.log("Este es un objeto normal ",objeto);
console.log("Este es el nombre de mi objeto ",objeto.nombre);

/*Como nuestro servidor no interpreta objetos "puros", necesitamos convertirlos a cadenas de texto, Este proceso se le conoce como serializar Json.stringify & Json.parse

sintaxis para pasar de objeto normal de js a Json es JSON.stringify (Objeto que quiero serializar)


*/
let objetoSerializado = (JSON.stringify(objeto));

//Podemos imprimir nuestro objeto serializado, y lo veremos como una cadena de texto
console.log("Este es un objo Serializado ",objetoSerializado);

//Si tratamos de acceder a alguna de la propiedades de nuestro objeto serializado, no podremos ya que nos mosrara "undefined"
console.log(objetoSerializado.nombre);

//Para deserializar un objeti JSON, vamos a utilizar un metodo llamado JSON.parse(Objeto que queremos deserializa)

let objetoDeSerializado = (JSON.parse(objetoSerializado));
console.log(objetoDeSerializado);

console.log(objetoDeSerializado.nombre);


