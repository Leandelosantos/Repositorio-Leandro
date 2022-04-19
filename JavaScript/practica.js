//While, do...while. If, else, else if.

/* alert("Hola Javi! Empecemos!")
alert("Porfa contestar con si/no.")
let respuesta = prompt("Javi... Me aprobarias éste entregable"); {
    if (respuesta == "si") { 
        alert ("Gracias!!!");
    } else {
        alert ("Bueno :( La proxima será");
    }
} */


/* let numero1;
let numero2;
let operador;

do {
    numero1 = parseFloat(prompt("Ingrese un numero"))
    numero2 = parseFloat(prompt("Ingrese otro numero"))
    operador = prompt("ingrese una operacion matematica")
    if (operador == "+"){
        console.log(numero1 + numero2)
    }
    else if (operador == "-") {
        console.log(numero1 - numero2)
    }
    else if (operador == "*") {
        console.log(numero1 * numero2)
    }
    else if (operador == "/") {
        console.log(numero1 / numero2)
    }
} while(isNaN(numero1) || isNaN(numero2)) */


//-----------------------------------------------------------------------

// Funciones. Sintaxis

/* function saludo(_nombre) {
    let frase = `Hola ${_nombre}, como estas?`;
    alert(frase)
}

// Asi llamo a una funcion

saludo(prompt(`Ingrese su nombre`)) */

//-----------------------------------------------------------------------

/* Objetos. (Si es un solo objeto conviene crearlo asi)

const persona1 = {
    dni: "37007484";
    nombre: "Leandro";
    apellido: "de los santos aboy";
    edad: "29";
    esProfesor: false;
} */

// Los objetos, tambien se pueden crear, mediante una Funcion constructora (function), para asi, crearlos mas rapido y en una sola linea.
// Para que sea constructora, debe ir con mayuscula.
// Esto serian las propiedades y valores de la funcion constructora que se crean una vez.

/* function Persona(dni, nombre, apellido, edad, esProfesor) {
    this.dni = dni;
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.esProfesor = esProfesor;
}

// Y para crear el NUEVO objeto, lo hago de la siguiente forma:

const persona1 = new Persona(37007484, "Leandro", "lope", 29, false);
const persona2 = new Persona(21675432, "rocio", "victoria", 31, false);
const persona3 = new Persona(12345678, "German", "lope", 40, false);
const persona4 = new Persona(91234567, "Pechele", "duro", 104, false);
const persona5 = new Persona(56743217, "Angel", "hdp", 8, false); 

// Si quiero que estos datos me los agregue el usuario, luego de crear la funcion constructora, creo a la persona asi:

const persona1 = new Persona(
    parseInt (prompt ("Ingrese dni")),
    prompt ("Ingrese su nombre"),
    prompt ("ingrese su apellido"),
    parseInt (prompt ("Ingrese su edad"))
    prompt ("Ingrese si es profesor o no")
)

console.log(persona1)
*/

/*
// Metodos: Los objetos tienen metodos/propiedades: 

let cadena = "Hola Coder"; 

//Propiedad de objeto string: largo de cadena
console.log(cadena.length);

//Metodo de objeto string: pasar a minusculas
console.log(cadena.toLowerCase());

// Metodos personalizados: Se pueden crear metodos propios para objetos personalizados, referenciando funciones por su nombre o definiendo funciones anonimas asociadas a una propiedad de la funcion constructora:

function Persona(nombre, edad, calle) {
    this.nombre = nombre;
    this.edad = edad;
    this.calle = calle;
    this.hablar = function(){ console.log("Hola soy " + this.nombre)}
}

const persona1 = new Persona("Homero", 39, "Cabildo");
const persona2 = new Persona("Marge", 36, "Cabildo");

//Llamar a un metodo es similar a acceder a una propiedad, pero se agrega "()" al final del nombre del metodo:

persona1.hablar();
persona2.hablar();
*/


// Clases: Las clases son otra forma mas nueva de crear funciones constructoras. Tienen la ventaja de que SEPARAN los objetos de los metodos:

/* class Persona {
    constructor(nombre, edad, calle) {
        this.nombre = nombre;
        this.edad = edad;
        this.calle = calle;
    }
}

const persona1 = new Persona("Homero", 39, "Cabildo"); */

//En las clases, la funcion constructora, es reemplazada por el metodo constructor. Los metodos en las clases no referencian a propiedades, se declaran dentro del bloque sin la palabra FUNCTION:

/* class Persona {
    constructor(nombre, edad, calle) {
        this.nombre = nombre;
        this.edad = edad;
        this.calle = calle;
    }
    hablar() {
        console.log("Hola soy " + this.nombre);
    }
}

const persona1 = new Persona("Homero", 39, "Cabildo");
persona1.hablar(); */


/* //ARRAYS: Es un tipo de dato que sirve para almacenar valores en forma de lista. Pueden ser numeros, strings, booleanos, objetos o hasta una lista de listas.
//Los valores del array pueden ser distintos y es posible agregar o quitar elementos en todo momento.
//Los elementos del array tienen un indice, que va desde el 0 (el primer elemento del array) hasta el ultimo elemento.

//Se declara con corchetes []

let array = [];
let array2 = ["Hola", 5, true, "chau"];

console.log(array2)

//Para llamar a un elemento del array lo hago entre corchetes: 

console.log(array2 [2]);

//Recorrido del array con for: Esto me mostrará cada elemento del array.

for (let i = 0; i < array2.length; i++) {
    console.log(array2 [i])
}

// Si quiero recorrer los OBJETOS (solo sirve en arrays con objetos) dentro de un array se hace con un For... Of:

class Personas {
    constructor (nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
}

const persona1 = new Personas ("Leandro", "Aboy", 29);
const persona2 = new Personas ("German", "lope", 40);
const persona3 = new Personas ("Fernando", "costes", 40);

arrayPersonas = [persona1, persona2, persona3];

for (let objetosArray of arrayPersonas) {
    console.log(objetosArray)
} */

/* // Existen metodos para hacer modificaciones y demas en los arrays.
//Agregar un elemento al array.

array2.push({nombre: "Lionel", apellido: "Messi"});

console.log(array2); */



/* //Funciones de orden superior: Metodos de arrays.

const persona1 = {
    nombre: "Francisco",
    apellido: "Pugh",
};

const persona2 = {
    nombre: "German",
    apellido: "Cuevas",
};

const array1 = [persona1, persona2]

for (let persona of array1) {
    for(let propiedad in persona) {
        console.log(persona[propiedad]) // "propiedad" es un alias q se pone para poder recorrer los valores de los objetos. Éste FOR arrojará los valores de los objetos.
    }
} */


/* // STORAGE: el objeto STORAGE permite almacenar datos de manera local en el navegador sin realizar conexion con un servidor. Esto permite que el usuario preseve informacion de la aplicacion en el navegador. Hay dos tipos: localStorage y sessionStorage.


//localStorage: esel mas usado y guarda la informacion aunque se cierre el navegador. Cuando el usuario vuelva a ingresar, estará su informacion:

//Para almacenar informacion se utiliza el metodo "setItem":
/* localStorage.setItem("miNombre", "leandro"); --> Esto se compone de "clave/Key ", "valor". Y puede recibir valores: string, booleanos, numericos.*/

//Para acceder a la informacion almacenada en localStorage se utiliza "getItem":
/* let nombre = localStorage.getItem("miNombre") --> llamo solo a la clave.
console.log(nombre); "leandro" --> me da el valor por consola */


//sessionStorage: como su nombre lo dice, guarda la sesion del momento. Si se cierra la pagina, pestaña o navegador, esta info se borra.

//Para eliminar datos del STORAGE, con el metodo "removeItem" elimino el item seleccionado y con "clear" elimino todo el STORAGE. */


//JSON: Al intentar almacenar un objeto en el STORAGE, éste me lo toma como string ([object, object]), para poder almacenar un objeto uso JSON, que convierte los objetos a string para que se vean en el STORAGE. Ej:

/* const producto1 = { id:2, producto: "arroz"};
localStorage.setItem("producto1", producto1) --> clave: "producto1", valor: la constante producto1. Esto daria como resultado: [object, object], porque no se convirtio a un JSON. */

//Para poder convertirlo uso "JSON.stringify()". Ej:

/* const producto1 = { id:2, producto: "arroz"}; 
const enJSON = JSON.stringify(producto1);

console.log(enJSON); { id:2, producto: "arroz"} --> me da el objeto en string por consola.
console.log(typeof producto1); object --> me da el tipo de dato.
console.log(typeof enJSON); string

// Y ahora lo guardo en el STORAGE una vez convertido:
localStorage.setItem("producto1", enJSON) --> clave: "producto1", valor: enJSON (constante que guarda la conversion)
O tambien puede ser: localStorage.setItem("producto1", JSON.stringify(producto1)); --> clave: "producto1" (seria un alias), valor: la conversion del objeto "const producto1".

// Con "JSON.parse" hago el efecto contrario, paso de un objeto de JSON, a un string comun.*/

// Fetch, then y catch: 
//// const divDolar = document.getElementById("divDolar")

// fetch("https://criptoya.com/api/dolar") /* con "fetch()" pido a determinada url una api. Ésta viene en forma de Objeto Promesa, por lo que luego tengo que convertirla a json para que se pueda ver.  */

/* "then()" es un metodo el cual recibe una funcion por parametro con la cual se captura el valor de la promesa, en este caso el objeto promesa que va a pasar a formato json. SIEMPRE Y CUANDO LA PROMESA SEA ACEPTADA. De ser rechazada se usa "catch()"  */
/* "response y data" son alias para nombrar los parametros () */
// .then(response => response.json())  /* Conversion de obj promesa a Json */
// .then(data => {                     /* Si el then() anterior esta ok, se piden los datos del nuevo json concatenando otro then()*/
//    let {blue, oficial, ccl, mep, ccb, solidario} = data /* desestructuracion del objeto json, para poder elegir cada dato */
//    divDolar.innerHTML = 
//        `<h3>Cotizaciones</h3>
//            <ul>
//                <li>${blue}</li>
//                <li>${oficial}</li>
//                <li>${ccl}</li>
//            <ul>`

//})






    /* document.getElementById('formulario') */
/*     btnComprar.addEventListener('submit', (e) => {
        e.preventDefault();
        btnComprar.value = 'Sending...';

        const serviceID = 'default_service';
        const templateID = 'template_7fo97df';

    emailjs.sendForm(serviceID, templateID, btnComprar)
        .then(() => {
            btnComprar.value = 'Send Email';
            miFormulario.reset();
            swal("Gracias por tu consulta!", "Tus datos fueron enviados", "success");
        }, (err) => {
            btnComprar.value = 'Send Email';
            alert(JSON.stringify(err));
        });
    }); */


/*     btnComprar.addEventListener("click", (e) => {
        e.preventDefault();
        fetch("https://submit-form.com/your-form-id", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify({
              message: "Hello, Usuario",
            }),
          })
            .then(function (response) {
              console.log(response);
            })
            .catch(function (error) {
              console.error(error);
            });
    }); */