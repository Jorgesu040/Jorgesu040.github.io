window.onload = function () {

  // Subscribirse a la newsletter

  function subscribirse() {
    var correoElectronico = document.querySelector('#newsletter input[type="email"]').value;

    if (correoElectronico) {
      // Obtener las opciones de la newsletter seleccionadas por el usuario
      var novedadesAmmoNation = document.querySelector('#newsletter .checkboxes .checkbox:nth-child(1) input[type="checkbox"]').checked;
      var novedadesArmas = document.querySelector('#newsletter .checkboxes .checkbox:nth-child(2) input[type="checkbox"]').checked;
      var todasNovedades = document.querySelector('#newsletter .checkboxes .checkbox:nth-child(3) input[type="checkbox"]').checked;
  
      // Si no hay ninguna seleccionada, te subscribe a "Todas las Novedades" por defecto
      if (!novedadesAmmoNation && !novedadesArmas && !todasNovedades) {
        todasNovedades = true;
      }
  
      // Construir el mensaje de notificación
      var mensajeNotificacion = "¡Te has suscrito a la newsletter!\n\nCorreo electrónico: " + correoElectronico + "\nOpciones seleccionadas:\n";
      if (novedadesAmmoNation) mensajeNotificacion += "- Novedades de Ammo-Nation\n";
      if (novedadesArmas) mensajeNotificacion += "- Novedades sobre Armas\n";
      if (todasNovedades) mensajeNotificacion += "- Todas las Novedades\n";

      // Notificar al usuario sobre la suscripción y las opciones seleccionadas
      alert(mensajeNotificacion);
    } else {
      alert("Por favor, ingrese su correo electrónico para suscribirse a la newsletter.");
    }
  }

  document.querySelector('#newsletter .botonNoticia').addEventListener('click', subscribirse);

  verificarEdad();

  // Funcion para el Slider de las armas blancas

  function verificarEdad() {
    var formatoFecha = /^\d{4}-\d{2}-\d{2}$/;     // Expresión regular para validar el formato YYYY-MM-DD
  
    var fechaNacimiento;
  
    // Bucle para solicitar la fecha hasta que se ingrese un formato válido
    do {
      fechaNacimiento = prompt("Ingrese su fecha de nacimiento (formato: YYYY-MM-DD):");
  
      if (fechaNacimiento && formatoFecha.test(fechaNacimiento)) {
        var fechaNacimientoObj = new Date(fechaNacimiento);
  
        var fechaActual = new Date();
  
        var diferenciaAnios = fechaActual.getFullYear() - fechaNacimientoObj.getFullYear();         // Calcular la diferencia de años
  
        if (diferenciaAnios >= 18) {
          alert("¡Bienvenido! Puedes acceder a la página web.");
        } else {
          alert("Lo siento, debes tener al menos 18 años. Serás redirigido a Google.");
          window.location.href = "https://www.google.com";   // Redirigir al usuario a Google
        }
      } else {
        alert("Por favor, ingresa una fecha de nacimiento válida en el formato YYYY-MM-DD.");
      }
    } while (!fechaNacimiento || !formatoFecha.test(fechaNacimiento));
  }

	//Funcion para el Slider de las armas blancas

    const sliderContainer = document.querySelector('.contendedorProductos');
    const prevButton = document.querySelector('.pre-btn');
    const nextButton = document.querySelector('.nxt-btn');

    let scrollAmount = 0;
    const scrollStep = 330; 

    
    nextButton.addEventListener('click', function () { // Manejador de evento para el botón de siguiente
        if (scrollAmount < sliderContainer.scrollWidth - sliderContainer.clientWidth) {
            scrollAmount += scrollStep;
            sliderContainer.scrollTo({ left: scrollAmount, behavior: 'smooth' });
            console.log('Desplazamiento hacia adelante. Nuevo scrollAmount:', scrollAmount);
        } else {
            console.log('No se puede desplazar más hacia adelante.');
        }
    });

    
    prevButton.addEventListener('click', function () { // Manejador de evento para el botón de anterior
        if (scrollAmount > 0) {
            scrollAmount -= scrollStep;
            sliderContainer.scrollTo({ left: scrollAmount, behavior: 'smooth' });
            console.log('Desplazamiento hacia atrás. Nuevo scrollAmount:', scrollAmount);
        } else {
            console.log('No se puede desplazar más hacia atrás.');
        }
    });

    // Asociar el evento click para el botón de "Ir Arriba"

    var botonIrArriba = document.getElementById("irArriba");
    if (botonIrArriba) {
      botonIrArriba.addEventListener('click', function() {
        subirArriba();
      });
    }
};

// Boton Subir Arriba

function subirArriba() {
  document.documentElement.scrollTop=0;
}

window.onscroll = function() {
  const mybutton = document.getElementById("irArriba");

    if (window.scrollY > 200) {
        mybutton.style.bottom = "3rem";
    } else {
        mybutton.style.bottom = "-5rem";
    }
}

// Simulación de compra

function comprar() {
  var nombre = prompt("Ingrese su nombre:"); 
  var direccionEnvio = prompt("Ingrese su dirección de envío:");

  // Verificar que se haya ingresado la información
  if (nombre && direccionEnvio) {
    var confirmarPago = confirm("¿Desea realizar el pago?");
    
    if (confirmarPago) {
      // Notificar al usuario sobre la compra y mostrar la información ingresada
      alert("¡Compra completada!\n\nDetalles del pedido:\nNombre: " + nombre + "\nDirección de envío: " + direccionEnvio);

    } else {
      alert("Compra cancelada. No se realizó el pago.");
    }
  } else {
    alert("Por favor, ingrese su nombre y dirección de envío para completar la compra.");
  }
}

