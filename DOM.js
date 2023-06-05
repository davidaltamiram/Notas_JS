/*DOM

Cuando aprendemos a crear paginas web, normalmente comenzamos con la construccion de sitios que estan estructurados con HTML y que tienen CSS como fuente de estilo. Hasta este momento, nuestras paginas son estaticas. Si nosotros queremos convertir estas paginas a paginas dinamicas, debemos agregar JavaScript a la ecuacion. Debemos recordar que cuando hablamos de paginas dinamicas, nos referimos a paginas que cambian de acuerdo a los datos que nos envie el usuario, esto con el fin de brindar una experiencias mucho mas completa, ademas de tener tareas o acciones que se puedan automatizar.

DOM significa Document Object Model, o modelo de objetos de documento. Podemos hacer una analogia con un arbol, donde el DOM es el arbol y cada una de las etiquetas del HTML es un nodo o rama, ademas de que cada nodo puede tener una propiedad o un atributo, que es lo que nos permite saber que es lo que esta dentro de ese nodo.

Cuando nos referimos al DOM, nos referimos a esta estructura de arbol, que podremos modificar de forma rapida y dinamica desde el propio JS y donde podremos agregar, eliminar, modificar y cambiar el contenido de nuestras paginas. Gracias a que usamos JS para estas modificaciones, vamos a poder automatizar tareas que se realicen cuando el usuario haga alguna tarea determinada, como mover el raton, pulsar un boton, hacer click en alguna parte del documento, escribir un texto, etc.

En resumen, DOM es lo que nos permite manejar HTML con JavaScript a traves del navegador y podemos visualizarlo como un gran arbol, donde cada etiqueta puede representar un nodo, y cada nodo puede tener una propiedad o un atributo (hojitas de arbol); es la representación de la página web en la memoria del navegador, a la que podemos acceder a través de JS.



Elementos del DOM


Todos los elementos del DOM se consideran nodos. 

 - Document (Es el nodo raiz)
 - Element (todas las etiquetas de HTML)
 - Texto (textos que estan dentro de las etiquetas)
 - Atributo (todos los atributos que pueden llegar a tener las etiquetas)
 - Comentario (Todos los comentarios del documento)


Comunicacion entre HTML y JS

Metodos de selccion de elementos

Son elementos que nos van a permitir seleccion uno o varias elementos o grupos de ellos del dOM. Estos metodos se utilizan en el documento, para eso se agrega un document.getElement


Tradicionales 

//getElementByID: busca elementos por su ID
//getElementsByClassName: busca por elementos por su clase
//getElementsByTagName


Modernos 
    querySelector(): Busca el primer elemento que coincide con el selector de CSS
    querySelectorAll(): Busca todos los elementos que coinciden con el selector de CSS

 */

//Traer elementos con getElementByID
var parrafo = document.getElementById("parrafo1");
//parrafo.style.color= "blue";

//Mensajes personalizados
//parrafo.innerHTML = "Hola Felipe, bienvenido. Puedes comprar :D";
//console.log(parrafo); //Info de Objeto


//Traer elementos con getElementsByClassName
let parrafitos = document.getElementsByClassName("parrafos");
console.log(parrafitos); //Info de HTML Collection


var parrafosEtiqueta = document.getElementsByTagName("p");

console.log(parrafosEtiqueta);


//Metodos mas actuales

var parrafoQuerySelector = document.querySelector("#parrafo1");
var parrafoQuerySelectorAll = document.querySelectorAll(".parrafos");

console.log(parrafoQuerySelectorAll);


//Eventos (accion y reaccion)

/*
Los evento son una forma mucho mas facil de modificar o alterar el contenido de un elemento. Los eventos son acciones que se pueden realizar sobre un elemento u objeto y se usan para modificar atributos, estilos, textos o para invocar funciones de JS

*/

//Creo una funcion llamada cambiaColor donde yo paso un color como parametro (red, blue, black)
function cambiaColor(color){

    //Con ese color que paso como parametro, se lo aplico a un elemnto en especifico
    parrafo.style.color = color;

}
/*
Evento (accion y reaccion)

Los eventos son una forma muchos mas facil de modificar o alterar el contenido de un elemento los eventos son acciones que se pueden realizar sobre un elemento u objeto y se usan para modificar atributos, estilos, textos o para invocar funciones de JS


*/
//Crea una funcion llamada cambia color donde yo paso un color como parametro (red, black, blue)
// function cambiaColor(color){
//     //Con ese color que paso como parametro, se lo aplico a un elemento en especifico
//     prueba.style.color = color;


// }

//Evento con EventListener
/*Es un evento que permite escuchar el evento indicado (primer parametro) y el caso de que ocurra (escuche ), se ejecuta la funcion asociada (segundo parametro)

sintaxis
object.addEventListener(nombreDeElevento, FuncionqueseDispara);


*/

//Referenciar boton
// const botoncambiarcolor = document.querySelector("#cambiarColor");

// botoncambiarcolor.addEventListener("click", 
// function(){
//     alert("Has presionado el boton para cambiar el color");
// } )


/*
Elementos para crear y agregar elementos

1 Se crean
2 Se agregan

//Sintaxis para crear elementos
elementoPadre.createElement("tipoDeElemento");


*/

//Para crear elementos createElement()
const div = document.createElement("div");

//Para insertarlo appendchild
document.body.appendChild(div);

//Codigo para agregar una imagen a mi documento
var appendImg = document.createElement("img");
appendImg.src = "./img/meme2.jpg";
appendImg.alt = "Imagen sorpresa";

//2do insertar
document.body.appendChild(appendImg);