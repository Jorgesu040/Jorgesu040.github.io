
function actualizarTotal() {
    
    document.getElementById('total').innerHTML = '300.000$';
}
document.getElementById('comprarTodo').addEventListener('click', actualizarTotal);


function mostrarAlerta() {
    alert('SIN STOCK');
}

document.getElementById('cerrado').addEventListener('click', mostrarAlerta);
document.getElementById('cerrado2').addEventListener('click', mostrarAlerta);
document.getElementById('cerrado3').addEventListener('click', mostrarAlerta);
document.getElementById('cerrado4').addEventListener('click', mostrarAlerta);
document.getElementById('cerrado5').addEventListener('click', mostrarAlerta);
document.getElementById('cerrado6').addEventListener('click', mostrarAlerta);
document.getElementById('cerrado11').addEventListener('click', mostrarAlerta);
document.getElementById('cerrado22').addEventListener('click', mostrarAlerta);
document.getElementById('cerrado33').addEventListener('click', mostrarAlerta);    

document.addEventListener('DOMContentLoaded', function (){
    // Enlaces de la barra de navegación
    var enlacesNav = document.querySelectorAll('nav a');
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

});


        //abrir video
    function abrirVideo() {
        document.getElementById('videoContainer').style.display = 'flex';
        
    }
    function abrirVideo2() {
        document.getElementById('videoContainer2').style.display = 'flex';
    
    }
    function abrirVideo3() {
        document.getElementById('videoContainer3').style.display = 'flex';
    
    }
    function abrirVideo4() {
        document.getElementById('videoContainer4').style.display = 'flex';
    
    }
    function abrirVideo5() {
        document.getElementById('videoContainer5').style.display = 'flex';
    
    }
    function abrirVideo6() {
        document.getElementById('videoContainer6').style.display = 'flex';
    
    }
    
    function abrirVideo11() {
        document.getElementById('videoContainer11').style.display = 'flex';
    
    }
    function abrirVideo22() {
        document.getElementById('videoContainer22').style.display = 'flex';
    
    }
    function abrirVideo33() {
        document.getElementById('videoContainer33').style.display = 'flex';
    

    }

    //cerrar video

    function cerrarVideo() {
        document.getElementById('videoContainer').style.display = 'none';
    }
    function cerrarVideo2() {
        document.getElementById('videoContainer2').style.display = 'none';
    }
    function cerrarVideo3() {
        document.getElementById('videoContainer3').style.display = 'none';
    }
    function cerrarVideo4() {
        document.getElementById('videoContainer4').style.display = 'none';
    }
    function cerrarVideo5() {
        document.getElementById('videoContainer5').style.display = 'none';
    }
    function cerrarVideo6() {
        document.getElementById('videoContainer6').style.display = 'none';
    }
    
    function cerrarVideo11() {
        document.getElementById('videoContainer11').style.display = 'none';
    }
    function cerrarVideo22() {
        document.getElementById('videoContainer22').style.display = 'none';
    }
    function cerrarVideo33() {
        document.getElementById('videoContainer33').style.display = 'none';
    }
