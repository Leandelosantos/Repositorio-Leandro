class Contactos {
    constructor (nombre, apellido, telefono, pais, email, comentario) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
        this.pais = pais;
        this.email = email;
        this.comentario = comentario;
    }
}

let arrayContactos = [];

//Con este condicional puedo guardar los datos ingresados por los usuarios en el pasado, y si no los hay, los agrego.
if (localStorage.getItem("Contactos")) {
    arrayContactos = JSON.parse(localStorage.getItem("Contactos"))
} else {
    localStorage.setItem("Contactos", JSON.stringify(arrayContactos))
}

let formContacto = document.getElementById("formContacto");

formContacto.addEventListener("submit", (e) => {
    e.preventDefault();
    let dataForm = new FormData(e.target)
    const contacto = new Contactos (
        dataForm.get("nombre"),
        dataForm.get("apellido"),
        dataForm.get("telefono"),
        dataForm.get("pais"),
        dataForm.get("email"),
        dataForm.get("textareaContact")
        );

    arrayContactos.push(contacto);
    formContacto.reset();
    localStorage.setItem("Contactos", JSON.stringify(arrayContactos));
    console.log(arrayContactos)
    swal("Gracias por tu consulta!", "Tus datos fueron enviados", "success");
})







