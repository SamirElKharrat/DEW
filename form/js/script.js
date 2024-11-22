
document.getElementById('miFormulario').addEventListener('submit', function(event) {
   event.preventDefault();


const nombre = document.getElementById('nombre').value;
const telefono = document.getElementById('telefono').value;

const mensaje = `Hola ${nombre}, este es tu número de teléfono: ${telefono}.<br><br>Gracias por darme tus datos.`;


document.getElementById('mensaje').innerHTML = mensaje;

});
