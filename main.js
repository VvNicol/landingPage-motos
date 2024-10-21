import { fondoRegistro, formularioInicioSesion } from "./registro.js";

const mainContenedor = document.querySelector('#contenedor');

function verImagenFondoRegistro() {
    mainContenedor.innerHTML = ''
    const fondo = fondoRegistro();
    const formulario = formularioInicioSesion();

    mainContenedor.appendChild(fondo);
    mainContenedor.appendChild(formulario)
}



window.verImagenFondoRegistro = verImagenFondoRegistro;