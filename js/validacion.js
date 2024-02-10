window.onload = function () {
    var limpiar = document.getElementById("limpiar");
    limpiar.addEventListener("click", limpiando);

    var nombre = document.getElementById("nombre");
    nombre.addEventListener("input", campoNombre);

    var correo = document.getElementById("correo");
    correo.addEventListener("input", campoCorreo);

    var telefono = document.getElementById("telefono");
    telefono.addEventListener("input", campoTelefono);

    var web = document.getElementById("web");
    web.addEventListener("input", campoWeb);

    var mensaje = document.getElementById("mensaje");
    comentario.addEventListener("input", campoMensaje);
}

function limpiando() {
    document.location.reload(true);
}

function campoNombre() {
    var nombreUsuario = document.getElementById("nombre").value;

    if (nombreUsuario) {
        document.getElementById("nombre_error").innerHTML = " ";
        document.getElementById("nombre").style.outline = "none";
    }
}

function campoCorreo() {
    var correoUsuario = document.getElementById("correo").value;

    if (correoUsuario) {
        document.getElementById("correo_error").innerHTML = " ";
        document.getElementById("correo").style.outline = "none";
    }
}

function campoTelefono() {
    var telefonoUsuario = document.getElementById("telefono").value;

    if (telefonoUsuario) {
        document.getElementById("telefono_error").innerHTML = " ";
        document.getElementById("telefono").style.outline = "none";
    }
}

function campoWeb() {
    var webUsuario = document.getElementById("web").value;

    if (webUsuario) {
        document.getElementById("web_error").innerHTML = " ";
        document.getElementById("web").style.outline = "none";
    }
}

function campoMensaje() {
    var mensajeUsuario = document.getElementById("mensaje").value;

    if (mensajeUsuario) {
        document.getElementById("mensaje_error").innerHTML = " ";
        document.getElementById("mensaje").style.outline = "none";
    }
}

function validacion() {
    var expNombre = /^[A-Z]{1}[a-z]{2,9}\s[A-Z]{1}[a-z]{2,9}$/;
    var expCorreo = /^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/;
    var expTelefono = /^[0-9]{9}$/;
    var expWeb = /^(http|https|ftp)+\:+\/\/+(www\.|)+[a-z0-9\-\.]+([a-z\.]|)+\.[a-z]{2,4}$/i;

    var nombreUsuario = document.getElementById("nombre").value;
    var correoUsuario = document.getElementById("correo").value;
    var telefonoUsuario = document.getElementById("telefono").value;
    var webUsuario = document.getElementById("web").value;
    var mensajeUsuario = document.getElementById("mensaje").value;

    var nombreError = document.getElementById("nombre_error");
    var correoError = document.getElementById("correo_error");
    var telefonoError = document.getElementById("telefono_error");
    var webError = document.getElementById("web_error");
    var mensajeError = document.getElementById("mensaje_error");

    var campoNombre = document.getElementById("nombre");
    var campoCorreo = document.getElementById("correo");
    var campoTelefono = document.getElementById("telefono");
    var campoWeb = document.getElementById("web");
    var campoMensaje = document.getElementById("mensaje");

    if (!nombreUsuario) {
        var mensajeErrorNombre = "Se requiere el nombre completo del usuario.";
        nombreError.innerHTML = mensajeErrorNombre;
        return false;
    } else if (!expNombre.test(nombreUsuario)) {
        var mensajeInvalidoNombre = "El nombre completo es invalido.";
        nombreError.innerHTML = mensajeInvalidoNombre;
        return false;
    }

    if (!correoUsuario) {
        var mensajeErrorCorreo = "Se requiere el correo del usuario.";
        correoError.innerHTML = mensajeErrorCorreo;
        return false;
    } else if (!expCorreo.test(correoUsuario)) {
        var mensajeInvalidoCorreo = "El correo es invalido.";
        correoError.innerHTML = mensajeInvalidoCorreo;
        return false;
    }

    if (!telefonoUsuario) {
        var mensajeErrorTelefono = "Se requiere el teléfono del usuario.";
        telefonoError.innerHTML = mensajeErrorTelefono;
        return false;
    } else {
        if (!expTelefono.test(telefonoUsuario)) {
            var mensajeInvalidoTelefono = "El teléfono es inválido.";
            telefonoError.innerHTML = mensajeInvalidoTelefono;
            return false;
        }
    }

    if (!webUsuario) {
        var mensajeErrorWeb = "Se requiere la página web del usuario.";
        webError.innerHTML = mensajeErrorWeb;
        return false;
    } else if (!expWeb.test(webUsuario)) {
        var mensajeInvalidoWeb = "La página web es invalida.";
        webError.innerHTML = mensajeInvalidoWeb;
        return false;
    }

    if (!mensajeUsuario) {
        var mensajeErrorMensaje = "Se requiere el mensaje del usuario.";
        mensajeError.innerHTML = mensajeErrorMensaje;
        return false;
    }
}