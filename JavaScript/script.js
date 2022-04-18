// Venta de entradas para un evento.
// Datos a completar por el usuario.


/* let arrayEspectadores = [];

class Usuarios {
    constructor(nombre, apellido, edad, dni, domicilio) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.dni = dni;
        this.domicilio = domicilio;
    }
    terminado() {
        alert(`Listo ${this.nombre}! Tus datos fueron guardados. Te llegará un mail con tu entrada`);
    }
}

for (let i = 0; i < 2; i++) {
    function saludar(nombre) {
        let fraseSaludo = `Hola ${nombre}, como estas? Para comprar las entradas te pediremos unos datos`;
        alert (fraseSaludo);
    }
    const nombre = prompt(`Hola! Como es tu nombre?`);
    saludar(nombre);
    
    const usuario = new Usuarios(
        nombre,
        prompt ("ingrese su apellido"),
        parseInt (prompt ("Ingrese su edad")),
        parseInt (prompt ("Ingrese su dni")),
        prompt ("Ingrese su domicilio"),
    )


    let entradas = "";

    do {
        entradas = parseInt (prompt("Ingrese numero de entradas"));
        if (entradas < 1 || entradas > 10) {
            alert("Podes comprar hasta 10 entradas");
        }else {
            usuario.entradas = entradas;
        }
        
    } while (entradas < 1 || entradas > 10);    


    usuario.terminado();
    arrayEspectadores.push({usuario});
}


for (let objetosArray of arrayEspectadores) {
    console.log(objetosArray)
} */







const miFormulario = document.getElementById("formulario");
const inputNombre = document.getElementById("inputNombre")
const inputApellido = document.getElementById("inputApellido")
const inputEmail = document.getElementById("inputEmail")
const inputEntradas = document.getElementById("inputEntradas")
const selectPago = document.getElementById("selectedPago")
let pagoRealizado = document.getElementById("pagoRealizado")
const precioFinal = document.getElementById("precioFinal");


miFormulario.addEventListener("submit", (e) => {
    e.preventDefault();
    let formulario = e.target
    pagoRealizado.innerHTML +=
        `<div class="datosContainer animate__animated animate__fadeInRight id="datosContainer">
            <h3> Datos de tu compra: </h3>
                <ul>
                    <li><p> ${formulario.inputNombre.value} </p></li>
                    <li><p> ${formulario.inputApellido.value} </p></li>
                    <li><p> ${formulario.inputEmail.value} </p></li>
                    <li><p> ${formulario.selectPago.value} </p></li>
                    <li><p>Cantidad de entradas y Total: ${formulario.inputEntradas.value} </p></li>
                </ul>
            <input type="submit" class="btnComprar" id="btnComprar" value="Comprar">
        </div>`;
        
        
    const btnComprar = document.getElementById("btnComprar");
    
        
    btnComprar.addEventListener("click", (e) => {
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
    });
        
        
        
        
        
        
        
        
        
        
});
    
    
    
    
console.log();