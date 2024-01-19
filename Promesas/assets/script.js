
function enviarDatos(){
    const nombre = document.getElementById('nombre').value;

    enviarDatosServidor(nombre)
        .then(mensajeAgradecimiento)
        .catch(mensajeError);

}

function enviarDatosServidor(nombre){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const exito = nombre.toLowercase() !== 'error';

            if(exito){
                resolve('welcome to the system');
            } else {
                reject("Acceso denegado");
            }
        }, 2000);
    });
}

function mensajeAgradecimiento(mensaje){
    const mensajeElement = document.getElementById('mensaje');
    mensajeElement.textContent = mensaje;
    mensajeElement.classList.remove('oculto');
}

function mensajeError(error){
    const mensajeError = document.getElementById('mensaje');
    mensajeElement.textContent = error;
    mensajeElement.classList.remove('oculto');
}