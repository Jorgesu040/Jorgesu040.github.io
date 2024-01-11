//Para pasar mediante un enlace desde el header a sus respectivas secciones
document.addEventListener('DOMContentLoaded', function () {
    // Enlaces de la barra de navegación
    var enlacesNav = document.querySelectorAll('#subInicio a');
    enlacesNav.forEach(function (enlace) {
        enlace.addEventListener('click', function (event) {
            event.preventDefault();
            var seccionId = enlace.getAttribute('href').substring(1);
            var seccion = document.getElementById(seccionId);
            if (seccion) {
                seccion.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
})
//Para pasar desde el footer al header
    document.addEventListener('DOMContentLoaded', function () {
        // Enlace para volver arriba
        var enlaceVolverArriba = document.querySelector('footer a');
        enlaceVolverArriba.addEventListener('click', function (event) {
            event.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    });

//Sección carrito
const unidades=document.getElementById("cantidad-total")
const precio=document.getElementById("precio-total")
var unidadesProducto=0;

function agregarCarrito(precioProducto){
    
    if(precioProducto>0)
    {
    precioProducto=precioProducto+ parseInt(precio.innerHTML);
    precio.innerHTML=precioProducto;

    unidadesProducto++;
    unidades.innerHTML=unidadesProducto;
    }

    if(precioProducto<0)
    {

        if(unidadesProducto>0 || (precioProducto+parseInt(precio.innerHTML>0)))
        {

            precioProducto=precioProducto+ parseInt(precio.innerHTML);
            precio.innerHTML=precioProducto;
        
            unidadesProducto--;
            unidades.innerHTML=unidadesProducto;
        }
    }
}


   
    