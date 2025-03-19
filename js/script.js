document.addEventListener("DOMContentLoaded", function() {
    const soundButton = document.getElementById("toggle-sound");
    let isSoundOn = false;

    // Cargar el audio
    const audio = new Audio("assets/audio/Audio-inicio.mp3");
    audio.loop = true;

    soundButton.addEventListener("click", function() {
        if (isSoundOn) {
            audio.pause();
            soundButton.textContent = "🔊 Activar Sonido";
        } else {
            audio.play();
            soundButton.textContent = "🔇 Desactivar Sonido";
        }
        isSoundOn = !isSoundOn;
    });
});
// Función para enviar el testimonio
function enviarMensaje() {
    let nombre = document.getElementById("nombre").value;
    let mensaje = document.getElementById("mensaje").value;

    if (nombre.trim() === "" || mensaje.trim() === "") {
        alert("Por favor, completa ambos campos.");
        return;
    }

    let nuevoTestimonio = document.createElement("li");
    nuevoTestimonio.innerHTML = <strong>${nombre}:</strong> ${mensaje};

    document.getElementById("lista-testimonios").appendChild(nuevoTestimonio);

    // Guardar en localStorage para que no se pierda al recargar
    guardarTestimonio(nombre, mensaje);

    // Limpiar los campos
    document.getElementById("nombre").value = "";
    document.getElementById("mensaje").value = "";
}

// Función para guardar en localStorage
function guardarTestimonio(nombre, mensaje) {
    let testimonios = JSON.parse(localStorage.getItem("testimonios")) || [];
    testimonios.push({ nombre, mensaje });
    localStorage.setItem("testimonios", JSON.stringify(testimonios));
}

// Función para cargar testimonios almacenados al abrir la página
function cargarTestimonios() {
    let testimonios = JSON.parse(localStorage.getItem("testimonios")) || [];
    let lista = document.getElementById("lista-testimonios");

    testimonios.forEach(testimonio => {
        let li = document.createElement("li");
        li.innerHTML = <strong>${testimonio.nombre}:</strong> ${testimonio.mensaje};
        lista.appendChild(li);
    });
}

// Cargar testimonios cuando se abra el foro
document.addEventListener("DOMContentLoaded", cargarTestimonios);







