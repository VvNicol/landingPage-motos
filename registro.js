export function imgFondoRegistro() {
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

export function formularioRegistro() {
    const div = document.createElement('div');
    div.classList.add('container', 'd-flex', 'justify-content-center', 'align-items-center', 'vh-100');

    const formulario = `
        <div class="card bg-dark text-light shadow-lg p-4" style="width: 600px; background-color: rgba(0, 0, 0, 0.7); border-radius: 10px;"> <!-- Ajustes de estilo -->
            <div class="card-body">
                <h2 class="card-title text-center mb-4" style="font-weight: bold; text-transform: uppercase; font-size: 1.5rem;">Registrarse</h2>
                <form id="registrationForm">
                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <label for="fullname" class="form-label"><i class="fa-solid fa-user"></i> Nombre Completo:</label>
                            <input type="text" id="fullname" name="fullname" class="form-control bg-light text-dark" required>
                        </div>
                        <div class="col-md-6 mb-3">
                            <label for="email" class="form-label"><i class="fa-solid fa-envelope"></i> Correo:</label>
                            <input type="email" id="email" name="email" class="form-control bg-light text-dark" required>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <label for="phone" class="form-label"><i class="fa-solid fa-phone"></i> Teléfono:</label>
                            <input type="tel" id="phone" name="phone" class="form-control bg-light text-dark" required>
                        </div>
                        <div class="col-md-6 mb-3">
                            <label for="fni" class="form-label"><i class="fa-solid fa-id-card"></i> DNI:</label>
                            <input type="text" id="dni" name="dni" class="form-control bg-light text-dark" required>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <label for="password" class="form-label"><i class="fa-solid fa-lock"></i> Contraseña:</label>
                            <input type="password" id="password" name="password" class="form-control bg-light text-dark" required>
                        </div>
                        <div class="col-md-6 mb-3">
                            <label for="confirmPassword" class="form-label"><i class="fa-solid fa-lock"></i> Confirmar Contraseña:</label>
                            <input type="password" id="confirmPassword" name="confirmPassword" class="form-control bg-light text-dark" required>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12 mb-3">
                            <label for="file" class="form-label"><i class="fa-solid fa-file-upload"></i> Adjuntar Foto:</label>
                            <input type="file" id="file" name="file" class="form-control bg-light text-dark" accept=".jpg,.png,.pdf" required>
                        </div>
                    </div>
                    <button type="submit" class="btn w-100 mt-3" style="background-color: #ffbd59; color: black; font-weight: bold;">Registrar</button>
                </form>
            </div>
        </div>
    `;

    div.innerHTML = formulario;

    return div;
}


function imgFondo() {
    const img = document.createElement('img');
    img.id = 'fondo';
    img.src = "/img/fondo registro.jpg";
    img.alt = "Foto sobre un motor de moto en blanco y negro";
    img.classList.add('img-fluid');

    return img;
}
