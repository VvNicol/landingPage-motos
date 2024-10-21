import { fondoIniciarSesion, formularioInicioSesion} from "./iniciarSesion.js";
import { imgFondoRegistro, formularioRegistro } from "./registro.js";

const mainContenedor = document.querySelector('#contenedor');

function IniciarSesion() {
    mainContenedor.innerHTML = ''
    const fondo = fondoIniciarSesion();
    const formulario = formularioInicioSesion();

    mainContenedor.appendChild(fondo);
    mainContenedor.appendChild(formulario)
}

function Registro(){
    mainContenedor.innerHTML ='';
    const imgFondo = imgFondoRegistro();
    const formulario = formularioRegistro();

    mainContenedor.appendChild(imgFondo);
    mainContenedor.appendChild(formulario);

}

window.Registro = Registro;
window.IniciarSesion = IniciarSesion;