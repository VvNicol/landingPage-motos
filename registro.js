export function fondoRegistro() {
    const divContenedor = document.createElement('div');
    divContenedor.classList.add('container-fluid', 'p-0');

    const divCol = document.createElement('div');
    divCol.className = 'col';

    divContenedor.appendChild(divCol);

    const img = imgFondo();
    divCol.appendChild(img);

    img.onload = function () {
        img.classList.add('img-loaded');
    };
    return divContenedor;
}

export function formularioInicioSesion() {
    const div = document.createElement('div');
    div.className = 'login-container'

    const formulario = `
        
   <div class="container d-flex justify-content-center align-items-center min-vh-100">
    <div class="card" style="width: 400px;">
        <div class="card-body">
            <h2 class="card-title text-center">Iniciar Sesión</h2>
            <form id="loginForm">
                <div class="mb-3">
                    <label for="username" class="form-label">Nombre de Usuario:</label>
                    <input type="text" id="username" name="username" class="form-control" required>
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Contraseña:</label>
                    <input type="password" id="password" name="password" class="form-control" required>
                </div>
                <button type="submit" class="btn btn-primary w-100">Iniciar Sesión</button>
            </form>
        </div>
    </div>
</div>



    `;

    div.innerHTML = formulario;

    return div
}

function imgFondo() {
    const img = document.createElement('img');
    img.id = 'fondo';
    img.src = "/img/fondo registro.jpg";
    img.alt = "Foto sobre un motor de moto en blanco y negro";
    img.classList.add('img-fluid');

    return img;
}

