window.onload = function () {
    var limpiar = document.getElementById("limpiar");
    limpiar.addEventListener("click", limpiando);

    var nombre = document.getElementById("nombre");
    nombre.addEventListener("input", campoNombre);

    var direccion = document.getElementById("direccion");
    direccion.addEventListener("input", campoDireccion);

    var pais = document.getElementById("pais");
    pais.addEventListener("input", campoPais);

    var email = document.getElementById("email");
    email.addEventListener("input", campoEmail);

    var web = document.getElementById("web-site");
    web.addEventListener("input", campoWeb);

    var telefono = document.getElementById("telefono");
    telefono.addEventListener("input", campoTelefono);

    var comentario = document.getElementById("comentario");
    comentario.addEventListener("input", campoComentario);
}

function limpiando() {
    document.location.reload(true);
}

function campoNombre() {
    var nombreUsuario = document.getElementById("nombre").value;

    if (nombreUsuario) {
        document.getElementById("nombre_error").innerHTML = " ";
        document.getElementById("nombre").style.outline = "1px solid #000";
    }
}

function campoDireccion() {
    var direccionUsuario = document.getElementById("direccion").value;

    if (direccionUsuario) {
        document.getElementById("direccion_error").innerHTML = " ";
        document.getElementById("direccion").style.outline = "1px solid #000";
    }
}

function campoPais() {
    var paisUsuario = document.getElementById("pais").value;

    if (paisUsuario) {
        document.getElementById("pais_error").innerHTML = " ";
        document.getElementById("pais").style.outline = "1px solid #000";
    }
}

function campoEmail() {
    var emailUsuario = document.getElementById("email").value;

    if (emailUsuario) {
        document.getElementById("email_error").innerHTML = " ";
        document.getElementById("email").style.outline = "1px solid #000";
    }
}

function campoWeb() {
    var webUsuario = document.getElementById("web-site").value;

    if (webUsuario) {
        document.getElementById("web-site_error").innerHTML = " ";
        document.getElementById("web-site").style.outline = "1px solid #000";
    }
}

function campoTelefono() {
    var telefonoUsuario = document.getElementById("telefono").value;

    if (telefonoUsuario) {
        document.getElementById("telefono_error").innerHTML = " ";
        document.getElementById("telefono").style.outline = "1px solid #000";
    }
}

function campoComentario() {
    var comentarioUsuario = document.getElementById("comentario").value;

    if (comentarioUsuario) {
        document.getElementById("comentario_error").innerHTML = " ";
        document.getElementById("comentario").style.outline = "1px solid #000";
    }
}

function validacion() {
    var expNombre = /^[A-Z]{1}[a-z]{2,9}\s[A-Z]{1}[a-z]{2,9}$/;
    var expDireccion = /^[a-zA-Z0-9\s\-\#áéíóúÁÉÍÓÚñÑ]{1,100}$/;
    var expPais = /^[a-zA-Z\sáéíóúÁÉÍÓÚñÑ'-]{2,50}$/;
    var expEmail = /^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/;
    var expWeb = /^(http|https|ftp)+\:+\/\/+(www\.|)+[a-z0-9\-\.]+([a-z\.]|)+\.[a-z]{2,4}$/i;
    var expTelefono = /^[0-9]{9}$/;

    var nombreUsuario = document.getElementById("nombre").value;
    var direccionUsuario = document.getElementById("direccion").value;
    var paisUsuario = document.getElementById("pais").value;
    var emailUsuario = document.getElementById("email").value;
    var webUsuario = document.getElementById("web-site").value;
    var telefonoUsuario = document.getElementById("telefono").value;
    var comentarioUsuario = document.getElementById("comentario").value;

    var nombreError = document.getElementById("nombre_error");
    var direccionError = document.getElementById("direccion_error");
    var paisError = document.getElementById("pais_error");
    var emailError = document.getElementById("email_error");
    var webError = document.getElementById("web-site_error");
    var telefonoError = document.getElementById("telefono_error");
    var comentarioError = document.getElementById("comentario_error");

    var campoNombre = document.getElementById("nombre");
    var campoDireccion = document.getElementById("direccion");
    var campoPais = document.getElementById("pais");
    var campoEmail = document.getElementById("email");
    var campoWeb = document.getElementById("web-site");
    var campoTelefono = document.getElementById("telefono");
    var campoComentario = document.getElementById("comentario");

    if (!nombreUsuario) {
        var mensajeErrorNombre = "Se requiere el nombre completo del usuario.";
        nombreError.innerHTML = mensajeErrorNombre;
        campoNombre.style.outline = "2px solid #f00";
        return false;
    } else if (!expNombre.test(nombreUsuario)) {
        var mensajeInvalidoNombre = "El nombre completo es invalido.";
        nombreError.innerHTML = mensajeInvalidoNombre;
        campoNombre.style.outline = "2px solid #f00";
        return false;
    }

    if (!direccionUsuario) {
        var mensajeErrorDireccion = "Se requiere la dirección del usuario.";
        direccionError.innerHTML = mensajeErrorDireccion;
        campoDireccion.style.outline = "2px solid #f00";
        return false;
    } else if (!expDireccion.test(direccionUsuario)) {
        var mensajeInvalidoDireccion = "La dirección del usuario es invalida.";
        direccionError.innerHTML = mensajeInvalidoDireccion;
        campoDireccion.style.outline = "2px solid #f00";
        return false;
    }

    if (!paisUsuario) {
        var mensajeErrorPais = "Se requiere el país del usuario.";
        paisError.innerHTML = mensajeErrorPais;
        campoPais.style.outline = "2px solid #f00";
        return false;
    } else if (!expPais.test(paisUsuario)) {
        var mensajeInvalidoPais = "El país es invalido.";
        paisError.innerHTML = mensajeInvalidoPais;
        campoPais.style.outline = "2px solid #f00";
        return false;
    }

    if (!emailUsuario) {
        var mensajeErrorEmail = "Se requiere el email del usuario.";
        emailError.innerHTML = mensajeErrorEmail;
        campoEmail.style.outline = "2px solid #f00";
        return false;
    } else if (!expEmail.test(emailUsuario)) {
        var mensajeInvalidoEmail = "El email es invalido.";
        emailError.innerHTML = mensajeInvalidoEmail;
        campoEmail.style.outline = "2px solid #f00";
        return false;
    }

    if (!webUsuario) {
        var mensajeErrorWeb = "Se requiere la página web del usuario.";
        webError.innerHTML = mensajeErrorWeb;
        campoWeb.style.outline = "2px solid #f00";
        return false;
    } else if (!expWeb.test(webUsuario)) {
        var mensajeInvalidoWeb = "La página web es invalida.";
        webError.innerHTML = mensajeInvalidoWeb;
        campoWeb.style.outline = "2px solid #f00";
        return false;
    }

    if (!telefonoUsuario) {
        var mensajeErrorTelefono = "Se requiere el teléfono del usuario.";
        telefonoError.innerHTML = mensajeErrorTelefono;
        campoTelefono.style.outline = "2px solid #f00";
        return false;
    } else {
        if (!expTelefono.test(telefonoUsuario)) {
            var mensajeInvalidoTelefono = "El teléfono es inválido.";
            telefonoError.innerHTML = mensajeInvalidoTelefono;
            campoTelefono.style.outline = "2px solid #f00";
            return false;
        }
    }

    if (!comentarioUsuario) {
        var mensajeErrorComentario = "Se requiere el comentario del usuario.";
        comentarioError.innerHTML = mensajeErrorComentario;
        campoComentario.style.outline = "2px solid #f00";
        return false;
    }
}