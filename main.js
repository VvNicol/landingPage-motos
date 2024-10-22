import { fondoIniciarSesion, formularioInicioSesion } from "./iniciarSesion.js";
import { imgFondoRegistro, formularioRegistro } from "./registro.js";
import { contenidoPrincipal } from "./principal.js";

const mainContenedor = document.querySelector('#contenedor');

function IniciarSesion() {
    mainContenedor.innerHTML = ''
    const fondo = fondoIniciarSesion();
    const formulario = formularioInicioSesion();

    mainContenedor.appendChild(fondo);
    mainContenedor.appendChild(formulario)
}

function Registro() {
    mainContenedor.innerHTML = '';
    const imgFondo = imgFondoRegistro();
    const formulario = formularioRegistro();

    mainContenedor.appendChild(imgFondo);
    mainContenedor.appendChild(formulario);

}
function Principal() {
    mainContenedor.innerHTML = '';
    const contenido = contenidoPrincipal();

    mainContenedor.appendChild(contenido);
}

window.Registro = Registro;
window.IniciarSesion = IniciarSesion;
window.Principal = Principal;