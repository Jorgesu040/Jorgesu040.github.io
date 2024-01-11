document.addEventListener("DOMContentLoaded", function () {
    // Función para mostrar siempre el contenido del desplegable de categorías
    function mostrarDesplegableCategorias() {
        var desplegableCategorias = document.getElementById("desplegableCategorias");
        desplegableCategorias.style.display = "block";
    }

    // Llamada inicial para mostrar el desplegable de categorías al cargar la página
    mostrarDesplegableCategorias();

// Llamada inicial para mostrar el contenido del desplegable al cargar la página
mostrarDropdown();

    // Cierra el desplegable si el usuario hace clic fuera de él
    window.addEventListener("click", function (event) {
        var dropdownContent = document.getElementById("dropdownContent");
        if (event.target.closest('.dropdown') === null && event.target !== dropdownContent) {
            dropdownContent.style.display = "none";
        }
    });

    // Función para enviar el formulario de contacto
    function enviarFormularioContacto(event) {
        event.preventDefault();

        
        alert("¡Mensaje enviado! Gracias por ponerte en contacto con nosotros.");

        // Limpia el formulario después de enviar
        document.getElementById("formularioContacto").reset();
    }

    // Función para vaciar la cesta
    function vaciarCesta() {
        // Lógica para vaciar la cesta, por ejemplo, limpiar el contenido en localStorage
        localStorage.removeItem('productosEnCesta');

        actualizarNumeroProductosEnCesta();
    }

    var vaciarCestaBtn = document.getElementById('vaciarCestaBtn');
    if (vaciarCestaBtn) {
        vaciarCestaBtn.addEventListener('click', vaciarCesta);
    }

    // Función para actualizar el número de productos en la cesta (
    function actualizarNumeroProductosEnCesta() {
        var numeroProductosEnCesta = document.getElementById('numeroProductosEnCesta');
        // Lógica para obtener el número actual de productos en la cesta
        var productosEnCesta = JSON.parse(localStorage.getItem('productosEnCesta')) || [];
        var numeroActual = productosEnCesta.length;

        // Actualizar el contenido en la interfaz
        if (numeroProductosEnCesta) {
            numeroProductosEnCesta.textContent = numeroActual;
        }
    }

    // Función para buscar productos
    function buscarProductos() {
        var input = document.getElementById('barraBusqueda');
        var filtro = input.value.toUpperCase();
        var productos = document.getElementsByClassName('producto');

        for (var i = 0; i < productos.length; i++) {
            var nombreProducto = productos[i].getElementsByTagName('h3')[0];
            if (nombreProducto) {
                var textoProducto = nombreProducto.textContent || nombreProducto.innerText;
                if (textoProducto.toUpperCase().indexOf(filtro) > -1) {
                    productos[i].style.display = '';
                } else {
                    productos[i].style.display = 'none';
                }
            }
        }
    }

    // Asociar la función a la barra de búsqueda
    var barraBusqueda = document.getElementById('barraBusqueda');
    if (barraBusqueda) {
        barraBusqueda.addEventListener('input', buscarProductos);
    }

    // Función para añadir productos al carrito
    function agregarAlCarrito(nombre, precio) {
        // Lógica para agregar productos al carrito
        var productosEnCesta = JSON.parse(localStorage.getItem('productosEnCesta')) || [];
        var nuevoProducto = { nombre: nombre, precio: precio };
        productosEnCesta.push(nuevoProducto);
        localStorage.setItem('productosEnCesta', JSON.stringify(productosEnCesta));

        // Actualizar el número de productos en la interfaz
        actualizarNumeroProductosEnCesta();
    }

    // Asociar la función a los botones "Añadir al Carrito"
    var botonesAgregarCarrito = document.querySelectorAll('.product button');
    botonesAgregarCarrito.forEach(function (boton) {
        boton.addEventListener('click', function () {
            var nombreProducto = this.parentNode.querySelector('h3').textContent;
            var precioProducto = parseFloat(this.parentNode.querySelector('p').textContent.replace(/[^\d.]/g, ''));
            agregarAlCarrito(nombreProducto, precioProducto);
        });
    });

    // Llamada inicial para actualizar el número de productos en la cesta al cargar la página
    actualizarNumeroProductosEnCesta();

});