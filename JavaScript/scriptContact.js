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

const formContacto = document.getElementById("formContacto");

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
    localStorage.setItem("Contactos", JSON.stringify(arrayContactos));
})


async function handleSubmit(event) {
    event.preventDefault();
    let data = new FormData(event.target);
    fetch(event.target.action, {
      method: formContacto.method,
      body: data,
      headers: {
          'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        swal("Gracias por tu consulta!", "Tus datos fueron enviados", "success");
        formContacto.reset()
      } else {
        response.json().then(data => {
          if (Object.hasOwn(data, 'errors')) {
            status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
          } else {
            swal("Ups!", "Hubo un error con el envio de tu formulario", "error")
          }
        })
      }
    }).catch(error => {
      swal("Ups!", "Hubo un error con el envio de tu formulario", "error")
    });
  }
  formContacto.addEventListener("submit", handleSubmit)





