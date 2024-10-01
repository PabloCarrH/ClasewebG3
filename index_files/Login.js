async function loginUser() {
    const email = document.querySelector("#email-login").value;
    const password = document.querySelector("#password-login").value;

    try {
        const response = await fetch('http://localhost:3000/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password })
        });

        const result = await response.json();

        if (response.ok) {
            await Swal.fire({
                icon: 'success',
                title: `Bienvenido(a) ${result.name}`,
                showConfirmButton: false,
                timer: 1500
            });

            // Aquí puedes redirigir al usuario a la página principal o al dashboard
            window.location.href = 'saved_resource.html';
        } else {
            await Swal.fire({
                icon: 'error',
                title: 'Error',
                text: result.message || 'Usuario y/o contraseña incorrectos',
                confirmButtonText: 'Aceptar'
            });
        }
    } catch (error) {
        console.error('Error en la solicitud:', error);
        await Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'No se pudo conectar con el servidor',
            confirmButtonText: 'Aceptar'
        });
    }
}

// Función genérica para el registro
async function registerUser(type) {
    const name = document.querySelector(`#name-register`).value;
    const email = document.querySelector(`#email-register`).value;
    const password = document.querySelector(`#password-register`).value;

    try {
        const response = await fetch(`http://localhost:3000/api/register/user`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, password })
        });

        const result = await response.json();

        if (response.ok) {
            Swal.fire({
                icon: 'success',
                title: 'Registro Exitoso',
                text: 'El registro se ha completado correctamente',
                confirmButtonText: 'Ir a login'
            }).then(() => {
                window.location.href = 'saved_resource.html';
            });
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: result.message || 'El usuario ya está registrado',
                confirmButtonText: 'OK'
            });
        }
    } catch (error) {
        console.error('Error en la solicitud:', error);
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'No se pudo conectar con el servidor',
            confirmButtonText: 'Aceptar'
        });
    }
}
