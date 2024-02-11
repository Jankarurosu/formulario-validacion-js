//Función para verificar si el input tiene algún valor
function campoInput(idCampo, idError) {
    var valorCampo = document.getElementById(idCampo).value;

    if (valorCampo) {
        document.getElementById(idError).innerHTML = "";
        document.getElementById(idCampo).style.outline = "none";
    }
}

//Asocia la función campoInput a cada elemento del formulario
document.getElementById("limpiar").addEventListener("click", limpiando);

document.getElementById("nombre").addEventListener("input", function () {
    campoInput("nombre", "nombre_error");
});

document.getElementById("correo").addEventListener("input", function () {
    campoInput("correo", "correo_error");
});

document.getElementById("telefono").addEventListener("input", function () {
    campoInput("telefono", "telefono_error");
});

document.getElementById("web").addEventListener("input", function () {
    campoInput("web", "web_error");
});

document.getElementById("mensaje").addEventListener("input", function () {
    campoInput("mensaje", "mensaje_error");
});

//Función para limpiar los inputs del formulario
function limpiando() {
    document.getElementById("formulario").reset();

    var campos = ["nombre", "correo", "telefono", "web", "mensaje"];
    for (var i = 0; i < campos.length; i++) {
        var campo = campos[i];
        var errorCampo = document.getElementById(campo + "_error");
        errorCampo.innerHTML = "";
    }
}

//Función para la validar los valores en los inputs
function validacion() {
    var expRegulares = {
        nombre: /^[A-Z]{1}[a-z]{2,9}\s[A-Z]{1}[a-z]{2,9}$/,
        correo: /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/,
        telefono: /^[0-9]{9}$/,
        web: /^(http|https|ftp):\/\/(www\.|)[a-z0-9\-\.]+([a-z\.]|)\.[a-z]{2,4}$/i,
        mensaje: /.+/
    };

    var campos = ["nombre", "correo", "telefono", "web", "mensaje"];
    var errores = false;

    for (var i = 0; i < campos.length; i++) {
        var campo = campos[i];
        var valorCampo = document.getElementById(campo).value;
        var errorCampo = document.getElementById(campo + "_error");

        if (!valorCampo) {
            errorCampo.innerHTML = "Se requiere el " + campo + " del usuario.";
            errores = true;
        } else if (!expRegulares[campo].test(valorCampo)) {
            errorCampo.innerHTML = "El " + campo + " es inválido.";
            errores = true;
        } else {
            errorCampo.innerHTML = "";
        }
    }
    return !errores;
}