//JORGE MATESANZ HERNANDO 2023-2024//

/******************SECCION DE VARIABLES ******************/

/*Seccion Dropdown/Navbar*/
// Variables para el dropdown
var dropdown1 = document.getElementById("dropdown-armas");
var dropdown2 = document.getElementById("dropdown-tactico");

//Variables para el scroll
const scrollMinimo = 100;
var scrollAnterior = window.scrollY;

//Variable para guardar el nav
var nav = document.getElementsByTagName('nav')[0];

/*Seccion sobre nosotros navbar*/
const contenedorSobreNosotros = document.getElementById("sobreNosotrosContenedor");
const barraNav = document.getElementById("sobreNosotrosNav");
const sobreNosotros = document.getElementById("sobreNosotros");
const textoSobreNosotros = document.getElementById("sobreNosotrosTexto");
var mostrandoSobreNosotros = false;

/*Seccion Novedades*/
var pasaDiapositivasNovedades = ['novedades1.jpg', 'novedades2.jpg', 'novedades3.jpg', 'novedades4.jpg'];
var textoDiapositiva = ['Nuevo lanzamiento de tiendas en GTA 6', 'Dispara, acierta, descuento', '¡Suscríbete a nuestra Newsletter, es gratis!', 'Bienvenido a Ammunation'];
var italicDiapositiva = ['- Ammunation, Rockstar Games', '- Juega a nuestro juego de disparos para obtener descuentos', '- Mantente informado y obten un regalo único de bienvenida', '- La mejor tienda de armas de San Andreas (y la U-Tad)'];
var imagenActual = 0;

/*Seccion de Galeria*/
// Variables para las imagenes de la galeria
const galeriaGrandeCentrada= document.getElementById("galeriaGrandeCentrada");
const galeriaIMG1= document.getElementById("galeriaIMG1");
const galeriaIMG2= document.getElementById("galeriaIMG2");
const galeriaIMG3= document.getElementById("galeriaIMG3");
const galeriaIMG4= document.getElementById("galeriaIMG4");
var arrayDestacados = [galeriaIMG1, galeriaIMG2, galeriaIMG3, galeriaIMG4, galeriaGrandeCentrada];

 // Botones de las galerias
const botones = document.getElementsByClassName("botonDestacados");

// Arrays con las imagenes de las galerias
const arrayEscopetas = [
    './MEDIA/IMG/ImagenesArmasDestacados/escopetas/AssaultShotgun-GTAV.png',
    './MEDIA/IMG/ImagenesArmasDestacados/escopetas/BullpupShotgun-GTAV.png',
    './MEDIA/IMG/ImagenesArmasDestacados/escopetas/Bullpup_Shotgun-GTAV-Markings.png',
    './MEDIA/IMG/ImagenesArmasDestacados/escopetas/HeavyShotgun-GTAV.png',
    './MEDIA/IMG/ImagenesArmasDestacados/escopetas/PumpShotgun-GTAV.png',
    './MEDIA/IMG/ImagenesArmasDestacados/escopetas/SawedOffShotgun-GTAV.png'
];
const arrayExtras =[
	'./MEDIA/IMG/ImagenesArmasDestacados/extras/AntiqueCavalryDagger-GTAV.png',
	'./MEDIA/IMG/ImagenesArmasDestacados/extras/Ball-GTAV.png',
	'./MEDIA/IMG/ImagenesArmasDestacados/extras/BaseballBat-GTAV.png',
	'./MEDIA/IMG/ImagenesArmasDestacados/extras/Crowbar-GTAV.png',
	'./MEDIA/IMG/ImagenesArmasDestacados/extras/Digiscanner-GTAV.png',
	'./MEDIA/IMG/ImagenesArmasDestacados/extras/GolfClub-GTAV.png',
	'./MEDIA/IMG/ImagenesArmasDestacados/extras/Hammer-GTAV.png',
	'./MEDIA/IMG/ImagenesArmasDestacados/extras/Hatchet-GTAV.png',
	'./MEDIA/IMG/ImagenesArmasDestacados/extras/JerryCan-GTAV.png',
	'./MEDIA/IMG/ImagenesArmasDestacados/extras/Knife-GTAV.png',
	'./MEDIA/IMG/ImagenesArmasDestacados/extras/KnuckleDusters-GTAV.png',
	'./MEDIA/IMG/ImagenesArmasDestacados/extras/Machete-GTAV.png',
	'./MEDIA/IMG/ImagenesArmasDestacados/extras/Minigun-GTAV.png',
	'./MEDIA/IMG/ImagenesArmasDestacados/extras/Nightstick-GTAV.png',
	'./MEDIA/IMG/ImagenesArmasDestacados/extras/Railgun-GTAV.png',
	'./MEDIA/IMG/ImagenesArmasDestacados/extras/StunGun-GTAV.png'
];
const arrayExplosivos = [
	'./MEDIA/IMG/ImagenesArmasDestacados/explosivos/FireworkLauncher-GTAV.png',
	'./MEDIA/IMG/ImagenesArmasDestacados/explosivos/GrenadeLauncher-GTAV.png',
	'./MEDIA/IMG/ImagenesArmasDestacados/explosivos/ProximityMine-GTAV.png',
	'./MEDIA/IMG/ImagenesArmasDestacados/explosivos/TearGas-GTAV.png',
	'./MEDIA/IMG/ImagenesArmasDestacados/explosivos/Flare_Gun-GTAV-Markings(none).png',
	'./MEDIA/IMG/ImagenesArmasDestacados/explosivos/HomingLauncher-GTAV.png',
	'./MEDIA/IMG/ImagenesArmasDestacados/explosivos/RPG-GTAV.png',
	'./MEDIA/IMG/ImagenesArmasDestacados/explosivos/Grenade-GTAV.png',
	'./MEDIA/IMG/ImagenesArmasDestacados/explosivos/MolotovCocktail-GTAV.png',
	'./MEDIA/IMG/ImagenesArmasDestacados/explosivos/StickyBomb-GTAV.png'
];
const arrayFusiles = [
	'./MEDIA/IMG/ImagenesArmasDestacados/fusiles/AdvancedRifle-GTAV.png',
	'./MEDIA/IMG/ImagenesArmasDestacados/fusiles/AssaultRifle-GTAV.png',
	'./MEDIA/IMG/ImagenesArmasDestacados/fusiles/AssaultSMG-GTAV.png',
	'./MEDIA/IMG/ImagenesArmasDestacados/fusiles/BullpupRifle-GTAV.png',
	'./MEDIA/IMG/ImagenesArmasDestacados/fusiles/CarbineRifle-GTAV.png',
	'./MEDIA/IMG/ImagenesArmasDestacados/fusiles/CombatMG-GTAV.png',
	'./MEDIA/IMG/ImagenesArmasDestacados/fusiles/CombatPDW-GTAV.png',
	'./MEDIA/IMG/ImagenesArmasDestacados/fusiles/GusenbergSweeper-GTAV.png',
	'./MEDIA/IMG/ImagenesArmasDestacados/fusiles/MG-GTAV.png',
	'./MEDIA/IMG/ImagenesArmasDestacados/fusiles/MarksmanRifle-GTAV.png',
	'./MEDIA/IMG/ImagenesArmasDestacados/fusiles/MicroSMG-GTAV.png',
	'./MEDIA/IMG/ImagenesArmasDestacados/fusiles/SniperRifle-GTAV.png',
	'./MEDIA/IMG/ImagenesArmasDestacados/fusiles/SpecialCarbine-GTAV.png',
	'./MEDIA/IMG/ImagenesArmasDestacados/fusiles/HeavySniper-GTAV.png',
	'./MEDIA/IMG/ImagenesArmasDestacados/fusiles/Musket-GTAV.png',
	'./MEDIA/IMG/ImagenesArmasDestacados/fusiles/SMG-GTAV.png'
];
const arrayPistolas = [
	'./MEDIA/IMG/ImagenesArmasDestacados/pistolas/APPistol-GTAV.png',
	'./MEDIA/IMG/ImagenesArmasDestacados/pistolas/HeavyPistol-GTAV.png',
	'./MEDIA/IMG/ImagenesArmasDestacados/pistolas/Pistol-GTAV.png',
	'./MEDIA/IMG/ImagenesArmasDestacados/pistolas/AP_Pistol-GTAV-Markings.png',
	'./MEDIA/IMG/ImagenesArmasDestacados/pistolas/CombatPistol-GTAV.png',
	'./MEDIA/IMG/ImagenesArmasDestacados/pistolas/MachinePistol-GTAV.png',
	'./MEDIA/IMG/ImagenesArmasDestacados/pistolas/Combat_Pistol-GTAV-Markings.png',
	'./MEDIA/IMG/ImagenesArmasDestacados/pistolas/MarksmanPistol-GTAV.png',
	'./MEDIA/IMG/ImagenesArmasDestacados/pistolas/Heavy_Pistol-GTAV-Markings_(none).png',
	'./MEDIA/IMG/ImagenesArmasDestacados/pistolas/VintagePistol-GTAV.png',
	'./MEDIA/IMG/ImagenesArmasDestacados/pistolas/Pistol.50-GTAV.png',
	'./MEDIA/IMG/ImagenesArmasDestacados/pistolas/SNSPistol-GTAV.png'
];

// Variables que generan un numero para sacar el array
var numEscopetas = Math.floor(Math.random() * arrayEscopetas.length);
var numExtras = Math.floor(Math.random() * arrayExtras.length);
var numExplosivos = Math.floor(Math.random() * arrayExplosivos.length);
var numFusiles = Math.floor(Math.random() * arrayFusiles.length);
var numPistolas = Math.floor(Math.random() * arrayPistolas.length);

// Arrays que guardan los numeros aleatorios y los arrays de imagenes
const arrayDestacadosIMG = [arrayEscopetas, arrayExtras, arrayExplosivos, arrayFusiles, arrayPistolas];
const arrayEnlaces = ["./HTML/escopetas.html", "./HTML/extras.html", "./HTML/explosivos.html", "./HTML/fusiles.html", "./HTML/pistolas.html"]
const arrayDestacadosNum = [numEscopetas, numExtras, numExplosivos, numFusiles, numPistolas];

/*Seccion Tipos de armas*/
// Variables para el carrusel de imagenes (tamaños, resposive y centraje)
const imagenArma1 = document.getElementById("tipoArmaImagen1");
var anchoContenedor = document.getElementById("tiposArmaContenedor").offsetWidth;
var anchoImagen = imagenArma1.offsetWidth;
var margenImagen = (anchoContenedor - anchoImagen) / 2;
var margin1vh = window.innerHeight * 0.01;

// Variable para guardar el espacio entre los dos lados contenedores de las imagenes y cuanto moverlos
var viewportMover = (anchoImagen - margenImagen + 2 * margin1vh) / window.innerHeight * 100;
var viewportMover2 = viewportMover + (anchoImagen + 2 * margin1vh) / window.innerHeight * 100;
var viewportMover3 = viewportMover2 + (anchoImagen + 2 * margin1vh) / window.innerHeight * 100;

/*Seccion de Juego*/
//Añade sonidos del juego
const correcto = new Audio("./MEDIA/AUDIO/INDEX/correct.mp3");
const incorrecto = new Audio("./MEDIA/AUDIO/INDEX/wrong.mp3");
const perder = new Audio("./MEDIA/AUDIO/INDEX/game-over.mp3");
const ganar = new Audio("./MEDIA/AUDIO/INDEX/win.mp3");
const pajaroCogido = new Audio("./MEDIA/AUDIO/INDEX/pajaro.mp3");

// Variables para los menus del juego
const botonJuego = document.getElementsByClassName("juegoDescuentosBoton")[0];
const espacioJuego = document.getElementById("juegoDescuentos");
const juegoDescuentosTexto = document.getElementById("juegoDescuentosTexto");
const contenedorReglas = document.getElementById("reglas");
const contenedorPuntuaciones = document.getElementById("puntuaciones");
const contenedorInicio = document.getElementById("menuJuego");
var diapositivasActual = 0;

// Variables de puntuacion
var vidaActual = 3;	//Vidas iniciales
var tiempoJuego = 60; //Tiempo en segundos
var puntuacionJuego = 0; //Puntuacion inicial

// Variables de para el manejo de elementos en pantalla 
var num0a8 = 0;	//Variable para guardar el numero aleatorio de 0 a 8
var globosEnPantalla = 0; //Variable para guardar el numero de globos en pantalla

// Genera un numero del 20 al 50 para que el pajaro salga entre 20 y 50 segundos
var salidaPajaro = Math.floor(Math.random() * 31) + 20;

// Seccion de referencias a elementos HTML
const vidas = document.getElementsByClassName("vidasJuego"); //Array con los elementos HTML de las vidas
const imagenesJuego = ["./MEDIA/IMG/juegoDescuentos/globo_rojo.png", "./MEDIA/IMG/juegoDescuentos/globo_azul.png", "./MEDIA/IMG/juegoDescuentos/globo_amarillo.png", "./MEDIA/IMG/juegoDescuentos/spikeball.png"]; // Array con las imagenes del juego
const puntuacionImagenes = [100, 50, 20, -100];	//Puntuacion de cada imagen
const imgHTMLjuego = document.getElementsByClassName("globosJuego");	//Array con los elementos HTML de las imagenes
const interfazJuego = document.getElementById("interfaz_juego");	//Elemento HTML del interfaz del juego
const nombresAnimaciones = ["moverGlobo1", "moverGlobo2", "moverGlobo3", "moverGlobo4", "moverGlobo5"]; //Array con los nombres de las animaciones
const score = document.getElementById("score");	//Elemento HTML de la puntuacion del juego
const puntuacionFinal = document.getElementsByClassName("scoreClass")[0]; //Elemento HTML de la puntuacion final del juego
const descuentoObtenido = document.getElementById("scoreFinal-descuento"); //Elemento HTML del descuento obtenido
const resultadoJuego = document.getElementById("resultadosJuego"); // Caja con los resultados del juego

// Variables para guardar y detener los intervalos 
var idIntervalo; // id del la logica del juego
var idContador; // id del contador de la puntuacion
var intervalIdbar; // id del contador de la barra de tiempo
var sinVidas = false; // Variable para saber si se ha perdido por quedarse sin vidas

/*Seccion Boton de ir arriba*/
const mybutton = document.getElementById("botonArriba");


/********************************************************************************************************/
/********************************************************************************************************/

/******************Seccion de inicio ******************/
function inicio() {
	setInterval(novedades, 5000);
	imagenArma1.style.marginLeft = "" + (margenImagen / window.innerHeight * 100) + "vh";
	randomDestacados();
	mostrarInicio(0);
	animarDestacados();
}



/**************Seccion NavBar Interactivo********************/

function dropdownFunction1() {
	//Borrar el display none
	dropdown1.style.opacity = "1";
	dropdown1.style.transform = "translateY(-1vh)";
}

function noDropdownFunction1() {
	//Poner el display none
	dropdown1.style.opacity = "0";
	dropdown1.style.transform = "translateY(-30vh)";
}

function dropdownFunction2() {
	//Borrar el display none
	dropdown2.style.opacity = "1";
	dropdown2.style.transform = "translateY(-1vh)";
}

function noDropdownFunction2() {
	//Poner el display none
	dropdown2.style.opacity = "0";
	dropdown2.style.transform = "translateY(-30vh)";
}


// Funcion que guarda el scroll anterior y lo usa para esconder la navbar al hacer scroll
window.onscroll = function () {
	var scrollActual = window.scrollY;
	if (scrollAnterior > scrollActual || scrollActual < scrollMinimo) {
		nav.style.top = "0";

	} else {
		dropdown2.style.transform = "translateY(-30vh)";
		dropdown1.style.transform = "translateY(-30vh)";
		nav.style.top = "-20vh";

	}
	scrollBoton(scrollActual);
	scrollAnterior = scrollActual;
}

///////Seccion Boton Sobre Nosotros interacto////
// Funcion que se ejecuta al hacer click en el boton y muestra el contenedor moviendo los elementos a su sitio
function mostrarSobreNosotros() {
	barraNav.style.opacity = "0";
	mostrandoSobreNosotros = true;
	textoSobreNosotros.style.opacity = "0";
	document.getElementsByClassName("subbarraLadoDerecho")[2].style.width = (sobreNosotros.offsetWidth / window.innerWidth * 100) + "vw";
	sobreNosotros.style.position = "absolute";
	sobreNosotros.disabled = true;
	setTimeout(function () {
		sobreNosotros.style.backgroundColor = "rgba(0, 0, 0, 1)";
		sobreNosotros.style.top = "24vh";
		sobreNosotros.style.right = "55.8%";
		sobreNosotros.style.zIndex = "0";
	}, 800);

	setTimeout(function () {
		sobreNosotros.style.top = "18vh";
		sobreNosotros.style.right = "62.8%";
	}, 2000);	
	setTimeout(mostrarContenedorSobreNosotros, 1200);
}

// Anima y muestra los contenidos
function mostrarContenedorSobreNosotros() {
	contenedorSobreNosotros.style.opacity = "1";
	setTimeout(function () {
		sobreNosotros.style.opacity = "0";
		document.getElementById('overlay').style.display = "block";
		document.getElementsByClassName("overlay")[1].style.display = "block";
	}, 150);
	setTimeout(function () {
		contenedorSobreNosotros.style = "top: 20.6vh; right: 17vw; padding-top: 8vh; padding-left: 3vw; padding-right: 3vw; border-radius: 17pt; opacity: 1;";
		contenedorSobreNosotros.style.height = "600%";
		contenedorSobreNosotros.style.width = "55%";
		textoSobreNosotros.style.opacity = "1";
		barraNav.style.opacity = "1";
		document.getElementById('overlay').style.opacity = "1";
		document.getElementsByClassName("overlay")[1].id = "bodyWrapper";

	}, 200);
}

// Recoloca los elementos a su sitio y oculta el contenedor
function cerrarNosotros() {
	mostrandoSobreNosotros = false;
	contenedorSobreNosotros.style = "top: 20.6vh ;padding-left: 3vw;padding-right: 3vw;border-radius: 17pt";
	contenedorSobreNosotros.style.height = "";
	contenedorSobreNosotros.style.width = "";
	sobreNosotros.style.opacity = "1";
	document.getElementById('overlay').style.opacity = "0";
	document.getElementsByClassName("overlay")[1].id = "";
	setTimeout(function () {
		sobreNosotros.style.top = "0px";
		sobreNosotros.style.right = "0px";
		document.getElementById('overlay').style.display = "none";
		contenedorSobreNosotros.style = " ";
	}, 500);

	sobreNosotros.style.zIndex = "1";

	setTimeout(function () {
		textoSobreNosotros.style.opacity = "0";
		sobreNosotros.style.position = "unset";
		sobreNosotros.style.minWidth = "";
		sobreNosotros.style.backgroundColor = "";
		document.getElementsByClassName("subbarraLadoDerecho")[2].style.width = "inherit";
	}, 1200);

	sobreNosotros.disabled = false;

}

/******************Seccion de novedades ******************/
// Funcion que pasa las diapositivas automaticamente
function novedades() {
	setTimeout(transicionNovedades, 1000);
	imagenActual++;
	if (imagenActual > pasaDiapositivasNovedades.length - 1) {
		imagenActual = 0;
	}
}
// Funcion que se ejecuta al pulsar el boton de retroceder
function novedadesAtras() {
	imagenActual--;
	if (imagenActual < 0) {
		imagenActual = 3;
	}
	document.getElementById("novedades").style.backgroundImage = "url('./MEDIA/IMG/" + pasaDiapositivasNovedades[imagenActual] + "')";
	document.getElementById("novedadesTexto").innerHTML = textoDiapositiva[imagenActual];
	document.getElementById("novedadesSubTexto").innerHTML = italicDiapositiva[imagenActual];

}
// Funcion que se ejecuta al pulsar el boton de avanzar
function novedadesDelante() {
	imagenActual++;
	if (imagenActual > 3) {
		imagenActual = 0;
	}
	document.getElementById("novedades").style.backgroundImage = "url('./MEDIA/IMG/" + pasaDiapositivasNovedades[imagenActual] + "')";
	document.getElementById("novedadesTexto").innerHTML = textoDiapositiva[imagenActual];
	document.getElementById("novedadesSubTexto").innerHTML = italicDiapositiva[imagenActual];

}

// Funcion que anima el cambio de diapositivas
function transicionNovedades() {
	document.getElementById("novedades").style.backgroundImage = "url('./MEDIA/IMG/" + pasaDiapositivasNovedades[imagenActual] + "')";
	document.getElementById("novedadesTexto").innerHTML = textoDiapositiva[imagenActual];
	document.getElementById("novedadesSubTexto").innerHTML = italicDiapositiva[imagenActual];
}




/***************Funcion random seccion destacados del dia*******************/
// Funcion que anima la entrada de las imagenes
function animarDestacados() {
	var IMG = 0;
	for(var j = 0; j < 100; j = j + 20){
		setTimeout(function () {
			arrayDestacados[IMG].style.opacity = "1";
			IMG++;
		}, j);
	}
}

// Reordena el array que guarda los huecos de las imagenes
arrayDestacados.sort(function() {
	return 0.5 - Math.random();
});

// Asigna a cada hueco una imagen aleatoria
function randomDestacados() {

	for(var i = 0; i < arrayDestacados.length; i++){
		arrayDestacados[i].style.backgroundImage = "url('" + arrayDestacadosIMG[i][arrayDestacadosNum[i]] + "')";
	}
	for(var j = 0; j < arrayDestacados.length; j++){
		var galeriaAcual = arrayDestacados[j].id.charAt(10);
		var enlaceCorrespondiente = arrayDestacados[j].style.backgroundImage.substring(41, 45);
		establecerEnlaceDestacados(galeriaAcual, enlaceCorrespondiente)
		
	}

}
// Asigna a cada imagen aleatoria un enlace
function establecerEnlaceDestacados(galeriaAcual, enlaceCorrespondiente){
	
	if(galeriaAcual == "n"){
		botones[0].setAttribute("href", convertirEnlace(enlaceCorrespondiente));
	}else {
		botones[parseInt(galeriaAcual)].setAttribute("href", convertirEnlace(enlaceCorrespondiente));
	}


}
// Funcion que indentidiica el enlace correspondiente de cada imagen y devuelve el enlace
function convertirEnlace(enlaceCorrespondiente){
	switch (enlaceCorrespondiente) {
		case "esco":
			return arrayEnlaces[0];
		case "extr":
			return arrayEnlaces[1];
		case "expl":
			return arrayEnlaces[2];
		case "fusi":
			return arrayEnlaces[3];
		case "pist":
			return arrayEnlaces[4];
	}
}

// Funcion que ajusta el la imagen de fondo de la galeria por si se cambia el tamaño de la imagen
window.addEventListener("resize", function(){
	for(var i = 0; i < arrayDestacados.length; i++){
		arrayDestacados[i].style.backgroundSize = "cover";

	}
});

/*****************Seccion Tipos de armas*****************/
//Añadimos setTimeout para esperar a que se termine ajustar el tamaño del contenedor de las reglas
// Si el usuario cambia el tamaño de la pantalla recalcular el tamaño de las imagenes
window.addEventListener('resize', function () {

	anchoContenedor = document.getElementById("tiposArmaContenedor").offsetWidth;
	anchoImagen = imagenArma1.offsetWidth;
	margenImagen = (anchoContenedor - anchoImagen) / 2;
	margin1vh = window.innerHeight * 0.01;

	viewportMover = (anchoImagen - margenImagen + 2 * margin1vh) / window.innerHeight * 100;
	viewportMover2 = viewportMover + (anchoImagen + 2 * margin1vh) / window.innerHeight * 100;
	viewportMover3 = viewportMover2 + (anchoImagen + 2 * margin1vh) / window.innerHeight * 100;

	clickArma(selectedArma);
});

// Variable para guardar el boton seleccionado
var selectedArma = 1;

// Funciones que se ejecuta al pulsar a un lado del carrusel
function clickArma(botonPresionado) {
	selectedArma = botonPresionado;
	switch (botonPresionado) {
		case 1:
			cambiarBoton(botonPresionado);
			imagenArma1.style.marginLeft = "" + (margenImagen / window.innerHeight * 100) + "vh";
			break;
		case 2:
			cambiarBoton(botonPresionado);
			imagenArma1.style.marginLeft = "-" + viewportMover + "vh";
			break;
		case 3:
			cambiarBoton(botonPresionado);
			imagenArma1.style.marginLeft = "-" + viewportMover2 + "vh";
			break;
		case 4:
			cambiarBoton(botonPresionado);
			botonArma4.style.color = "white";
			imagenArma1.style.marginLeft = "-" + viewportMover3 + "vh";
			break;
	}
}
function cambiarBoton(botonPresionado) {

	for (var i = 1; i < 5; i++) {
		var boton = document.getElementById("botonArma" + i);
		var imagen = document.getElementById("tipoArmaImagen" + i);
		imagen.style.cursor = "default";
		if (i === botonPresionado) {
			boton.style.color = "white";
			imagen.style.transform = "none";
			imagen.style.filter = "none";
		} else {
			boton.style.color = "rgba(255, 255, 255, 0.6)";
			imagen.style.transform = "scale(0.95)";
			imagen.style.filter = "blur(2px) brightness(0.8)";
		}
	}
}

//Funciones para el hover de los las imagenes de las armas
function highlightArma(hoveredArma) {
	if (hoveredArma !== selectedArma) {

		for (var i = 1; i < 5; i++) {
			var imagen = document.getElementById("tipoArmaImagen" + i);
			if (i !== selectedArma && i) {
				//Poner selec puntero
				imagen.style.cursor = "pointer";
				if (i === hoveredArma) {
					imagen.style.transform = "scale(0.97)";
					imagen.style.filter = "blur(1px) brightness(0.9)";

				}
			} else {
				imagen.style.cursor = "default";
				imagen.style.transform = "none";
				imagen.style.filter = "none";
			}
		}
	}
}

//Funciones para el unhover de los las imagenes de las armas
function noHighlightArma(unhoveredArma) {
	if (unhoveredArma !== selectedArma) {
		for (var i = 1; i < 5; i++) {
			var imagen = document.getElementById("tipoArmaImagen" + i);
			if (i !== selectedArma) {
				imagen.style.cursor = "default";
				imagen.style.transform = "scale(0.95)";
				imagen.style.filter = "blur(2px) brightness(0.8)";
			} else {
				imagen.style.cursor = "default";
				imagen.style.transform = "none";
				imagen.style.filter = "none";
			}
		}
	}
}

/****************Seccion Juego Descuento******************/
//Event listener para ajustar el tamaño del texto de las reglas al tamaño de la pantalla si el usuario cambia el tamaño de la pantalla
//Añadimos setTimeout para esperar a que se termine ajustar el tamaño del contenedor de las reglas
window.addEventListener('resize', function () {

	switch (diapositivasActual) {
		case 0:
			setTimeout(function () {
				juegoDescuentosTexto.style.minWidth = (contenedorReglas.offsetWidth / window.innerWidth * 100) + "vw";
				contenedorInicio.style.marginTop = ((contenedorReglas.offsetHeight + contenedorPuntuaciones.offsetHeight) / window.innerHeight * 100) + "vh";
				juegoDescuentosTexto.style.maxHeight = (contenedorInicio.offsetHeight / window.innerHeight * 100) + "vh";
				juegoDescuentosTexto.style.minHeight = "unset"
			}, 600);
			break;

		case 1:
			setTimeout(function () {
				juegoDescuentosTexto.style.minWidth = (contenedorReglas.offsetWidth / window.innerWidth * 100) + "vw";
				contenedorInicio.style.marginTop = ((contenedorPuntuaciones.offsetHeight - contenedorInicio.offsetHeight) / window.innerHeight * 100) + "vh";
				juegoDescuentosTexto.style.maxHeight = (contenedorReglas.offsetHeight / window.innerHeight * 100) + "vh";
			}, 600);
			break;

		case 2:
			setTimeout(function () {
				juegoDescuentosTexto.style.maxWidth = (contenedorPuntuaciones.offsetWidth / window.innerWidth * 100) + "vw";
				setTimeout(function () { contenedorInicio.style.marginTop = "-" + ((contenedorReglas.offsetHeight + contenedorInicio.offsetHeight) / window.innerHeight * 100) + "vh"; }, 500);
				juegoDescuentosTexto.style.maxHeight = (contenedorPuntuaciones.offsetHeight / window.innerHeight * 100) + "vh";
			}, 600);
			break;

	}
});



///////////Seccion Menus///////////

//Seccion mostrar reglas
//Añadimos setTimeout para que se ejecute despues de la animacion de entrada
function mostrarReglas(num) {
	juegoDescuentosTexto.style.maxWidth = (contenedorReglas.offsetWidth / window.innerWidth * 100) + "vw";
	setTimeout(function () { 
		juegoDescuentosTexto.style.maxHeight = (contenedorReglas.offsetHeight / window.innerHeight * 100) + "vh"; 
	}, 300);
	setTimeout(function () { 
		contenedorInicio.style.marginTop = ((contenedorPuntuaciones.offsetHeight - contenedorInicio.offsetHeight) / window.innerHeight * 100) + "vh"; 
	}, 400);
	setTimeout(function () {
		contenedorInicio.style.opacity = "0";
		contenedorPuntuaciones.style.opacity = "0";
	}, 200);
	contenedorReglas.style.opacity = "1";
	juegoDescuentosTexto.style.minWidth = "unset";

	diapositivasActual = num;
}

function mostrarPuntuaciones(num) {
	juegoDescuentosTexto.style.minWidth = "unset";
	juegoDescuentosTexto.style.maxWidth = (contenedorPuntuaciones.offsetWidth / window.innerWidth * 100) + "vw";
	setTimeout(function () { 
		juegoDescuentosTexto.style.minHeight = (contenedorPuntuaciones.offsetHeight / window.innerHeight * 100) + "vh"; 
	}, 300);
	setTimeout(function () { 
		contenedorInicio.style.marginTop = "-" + ((contenedorReglas.offsetHeight + contenedorInicio.offsetHeight) / window.innerHeight * 100) + "vh"; 
	}, 400);
	setTimeout(function () { 
		contenedorReglas.style.opacity = "0"; 
	}, 300);
	contenedorPuntuaciones.style.opacity = "1";
	diapositivasActual = num;
}

function mostrarInicio(num) {
	juegoDescuentosTexto.style.maxWidth = (contenedorInicio.offsetWidth / window.innerWidth * 100) + "vw";
	juegoDescuentosTexto.style.minWidth = "unset";
	setTimeout(function () { 
		juegoDescuentosTexto.style.maxHeight = (contenedorInicio.offsetHeight / window.innerHeight * 100) + "vh"; 
	}, 300);
	setTimeout(function () { 
		contenedorInicio.style.marginTop = ((contenedorReglas.offsetHeight + contenedorPuntuaciones.offsetHeight) / window.innerHeight * 100) + "vh"; 
	}, 200);
	setTimeout(function () {
		contenedorReglas.style.opacity = "0";
		contenedorPuntuaciones.style.opacity = "0";
	}, 200);
	juegoDescuentosTexto.style.minHeight = "unset"
	contenedorInicio.style.opacity = "1";
	diapositivasActual = num;
}

function volverAtras(num) {
	switch (num) {
		case 0:
			mostrarInicio(num);
			break;
		case 1:
			mostrarReglas(num);
			break;
	}
}


///////////////Logica del juego////////////////////
// Funcion que se ejecuta al pulsar el boton de jugar, oculta el texto y muestra el juego
function juegoDescuentos() {
	juegoDescuentosTexto.style.opacity = "0";
	espacioJuego.style.backgroundImage = "url('./MEDIA/IMG/DuckHuntBg.jpg')";

	setTimeout(function () {
		juegoDescuentosTexto.style.display = "none";
		interfazJuego.style.opacity = "1";
		interfazJuego.style.transform = "translateY(0)";
	}, 600);

	for (var i = 0; i < imgHTMLjuego.length; i++) {
		imgHTMLjuego[i].style.display = "none";
		imgHTMLjuego[num0a8].style.animation = "none";
		imgHTMLjuego[i].setAttribute("data-valor", "0");
	}

	setTimeout(function () {
		document.getElementById("elementosEnPantalla").style.display = "block";
		temporizadorJuego();
	}, 600);
	espacioJuego.style.cursor = "url('./MEDIA/IMG/juegoDescuentos/cursor.png') 31 32, auto";

	document.getElementsByClassName("pajaroJuego")[0].style = "bottom: -20%; right: 110%;"
	document.getElementsByClassName("pajaroJuego")[0].style.opacity = "0";
	document.getElementsByClassName("pajaroJuego")[0].style.display = "block";
	idIntervalo = setInterval(juegoDescuentosLogica, 300);
}


// Funcion que se ejecuta cada 300ms y genera un globo aleatorio
function juegoDescuentosLogica() {
	// Genera un número aleatorio entre 1 y 100
	var num1a100 = Math.floor(Math.random() * 100) + 1;
	var whileBreak = false;
	num0a8 = Math.floor(Math.random() * 9);
	globosEnPantalla = 0;


	// Cuenta los globos que hay en pantalla
	for (var i = 0; i < imgHTMLjuego.length; i++) {
		if (imgHTMLjuego[i].style.display == "block") {
			globosEnPantalla++;
		}
	}

	// Genera un número aleatorio entre 0 y 8 si hay menos de 4 globos en pantalla
	while (whileBreak == false && globosEnPantalla <= 4) {
		if (imgHTMLjuego[num0a8].style.display == "none") {
			whileBreak = true;
		} else {
			num0a8 = Math.floor(Math.random() * 9);
		}
	}

	// Si el número aleatorio es menor o igual a 60 y hay menos de 4 globos en pantalla, genera un globo
	if (num1a100 <= 60 && imgHTMLjuego[num0a8].style.display == "none" && globosEnPantalla <= 4 && imgHTMLjuego[num0a8].getAttribute("data-valor") === "0") {
		// Genera un número aleatorio entre 0 y 2
		var num0a2 = Math.floor(Math.random() * 3);
		imgHTMLjuego[num0a8].src = imagenesJuego[num0a2];
		// Añade color attribute al globo (switch case)
		switch (num0a2) {
			case 0:
				imgHTMLjuego[num0a8].setAttribute("data-valor", "100");
				break;
			case 1:
				imgHTMLjuego[num0a8].setAttribute("data-valor", "50");
				break;
			case 2:
				imgHTMLjuego[num0a8].setAttribute("data-valor", "20");
				break;
		}
		imgHTMLjuego[num0a8].style.cursor = "url('./MEDIA/IMG/juegoDescuentos/cursorVerde.png') 31 32, auto";
		añadirAnimacion("globo");
		imgHTMLjuego[num0a8].style.display = "block";

		setTimeout(function () { imgHTMLjuego[num0a8].style.opacity = "1"; }, 200);

		// Si el número aleatorio es mayor que 60 y hay menos de 4 globos en pantalla, genera una spikeball
	} else if (num1a100 > 60 && imgHTMLjuego[num0a8].style.display == "none" && imgHTMLjuego[num0a8].getAttribute("data-valor") === "0") {
		imgHTMLjuego[num0a8].src = imagenesJuego[3];
		imgHTMLjuego[num0a8].setAttribute("data-valor", "-100");
		imgHTMLjuego[num0a8].style.cursor = "url('./MEDIA/IMG/juegoDescuentos/cursorRojo.png') 31 32, auto";
		añadirAnimacion("spikeball");
		imgHTMLjuego[num0a8].style.display = "block";
		setTimeout(function () { imgHTMLjuego[num0a8].style.opacity = "1"; }, 200);
		moverSpikeball(num0a8);
	}

	// Solo movemos los globos (los spikeballs no)
	if (imgHTMLjuego[num0a8].getAttribute("data-valor") !== "-100") {
		moverGlobos();
	}
}

// Le añadimos una animacion al azar solo si la imagen no esta en pantalla
function añadirAnimacion(tipo) {
	var num0a4 = Math.floor(Math.random() * 5);
	if (tipo === "globo") {
		if (imgHTMLjuego[num0a8].style.display == "none") {
			imgHTMLjuego[num0a8].style.animation = nombresAnimaciones[num0a4] + " 2s ease-in-out infinite alternate";
		}
	} else if (tipo === "spikeball") {
		if (imgHTMLjuego[num0a8].style.display == "none") {
			imgHTMLjuego[num0a8].style.animation = "moverSpikeball .5s ease-in-out infinite alternate";
		}
	}
}

function moverSpikeball(spikeball) {
	var top10a60 = Math.floor(Math.random() * 26) + 10; // Numero aleatorio entre 10 y 35
	var left0a55 = Math.floor(Math.random() * 36); // Numero aleatorio entre 0 y 35

	// Si el numero aleatorio es menor que 0.5, cambia el rango de los numeros aleatorios para distribuir mejor las minas
	if (Math.random() > 0.5) {
		top10a60 += 25; // Cambia el rango a 35-60
		left0a55 += 20; // Cambia el rango a 20-55
	}
	imgHTMLjuego[spikeball].style.top = "" + top10a60 + "vh";
	imgHTMLjuego[spikeball].style.left = "" + left0a55 + "vw";

	// A los 3 segundos, cambia el cursor y la opacidad de la spikeball, para que no se queden permanentemente en pantalla
	setTimeout(function () {
		imgHTMLjuego[spikeball].style.cursor = "";
		imgHTMLjuego[spikeball].style.opacity = "0";
		imgHTMLjuego[spikeball].setAttribute("data-valor", "0");
	}, 3000);

	setTimeout(function () {
		imgHTMLjuego[spikeball].style.display = "none";
		imgHTMLjuego[spikeball].style.animation = "none";
	}, 3500);

}

// Funcion que mueve los globos
function moverGlobos() {
	var top10a60 = Math.floor(Math.random() * 26) + 10; // Numero aleatorio entre 10 y 35
	var left0a55 = Math.floor(Math.random() * 36); // Numero aleatorio entre 0 y 35

	// Si el numero aleatorio es menor que 0.5, cambia el rango de los numeros aleatorios para distribuir mejor los globos
	if (Math.random() > 0.5) {
		top10a60 += 25; // Cambia el rango a 35-60
		left0a55 += 20; // Cambia el rango a 20-55
	}
	imgHTMLjuego[num0a8].style.top = "" + top10a60 + "vh";
	imgHTMLjuego[num0a8].style.left = "" + left0a55 + "vw";

}


// Funcion que se ejecuta al hacer click en un globo
function clickGlobo(num) {
	var incremento = 0;
	var scoreInicial = parseInt(score.innerHTML);
	var duracionAnimacion = 500;
	var pasosEntrePuntuacion;

	// Esconde el globo y para la animacion
	clearInterval(idContador);
	imgHTMLjuego[num].style.opacity = "0";
	setTimeout(function () {
		imgHTMLjuego[num].style.display = "none";
		imgHTMLjuego[num].style.animation = "none";
	}, 300);

	imgHTMLjuego[num].style.cursor = "";

	// Comprueba el atributo para determinar la puntuacion sacada del array puntuacionImagenes y se la suma a la puntuacion actual
	for (var i = 0; i < imagenesJuego.length; i++) {
		if (parseInt(imgHTMLjuego[num].getAttribute("data-valor")) === puntuacionImagenes[i]) {
			puntuacionJuego += puntuacionImagenes[i];
			// Calcula el numero de pasos que tiene que dar la animacion para llegar a la puntuacion final y que dure 500ms
			// Ademas redondea el numero para que no de decimales y lo pasa a valor absoluto
			pasosEntrePuntuacion = Math.abs(Math.floor(duracionAnimacion / (puntuacionJuego - scoreInicial)));
			// Si el score se reduce se le añade una clase que lo vuelva rojo y viceversa
			if (puntuacionImagenes[i] < 0) {
				incremento = -1;
				incorrecto.play(); 
				score.style.color = "red";
				quitarVida();
			} else {
				correcto.play();
				incremento = 1;
				score.style.color = "green";
			}

			// Crea un intervalo que suma o resta la puntuacion hasta llegar a la puntuacion final
			idContador = setInterval(function () {
				scoreInicial += incremento;
				score.innerHTML = scoreInicial;
				if (puntuacionJuego == scoreInicial) {
					clearInterval(idContador);
					setTimeout(function () {
						score.style.color = "white";
					}, 500);
				}
			}, pasosEntrePuntuacion);

		}
	}
	// Resetea el atributo del globo a 0
	imgHTMLjuego[num].setAttribute("data-valor", "0");
	score.innerHTML = puntuacionJuego;
}



function temporizadorJuego() {
	// Cambia el id del progress bar para que empiece la cuenta atras
	document.getElementById("progressBar-child").id = "progressBar-child-countdown";
	intervalIdbar = setInterval(function () {
		// Si el tiempo es mayor que 0 y quedan vidas, resta 1 al tiempo 
		if (tiempoJuego > 0 && sinVidas == false) {
			tiempoJuego--;
			if(tiempoJuego == salidaPajaro){
				pajaro();
			}
		} else {
			
			// Si el tiempo es 0, muestra una alerta, deshabilita los elementos y para el intervalo
			if (sinVidas == true) {
				perder.play();
				alert("Te has quedado sin vidas");
			} else {
				ganar.play();
				alert("Se ha acabado el tiempo");
			}
			// Oculta la interfaz y para los intervalos
			interfazJuego.style.transform = "translateY(-20vh)";
			clearInterval(idIntervalo);
			clearInterval(intervalIdbar);
			for (var i = 0; i < imgHTMLjuego.length; i++) {
				imgHTMLjuego[i].style.opacity = "0";
			}
			// Oculta los elementos en pantalla y muestra los resultados
			setTimeout(function () {
				for (var i = 0; i < imgHTMLjuego.length; i++) {
					imgHTMLjuego[i].style.display = "none";
					imgHTMLjuego[num0a8].style.animation = "none";
					imgHTMLjuego[i].setAttribute("data-valor", "0");
				}
			}, 500);

			setTimeout(resultadosJuego, 2000);
		}


	}, 1000);
}

// Funcion que quita una vida si se hace click en una spikeball
function quitarVida() {
	animarCorazon(vidaActual);
	vidaActual--;
	if (vidaActual == 0) {
		sinVidas = true;

		setTimeout(function () {
			vidas[0].id = "";
			vidas[1].id = "";
			vidas[2].id = "";
		}, 3000);
	}
}

// Funcion que anima los corazones
function animarCorazon(num) {
	vidas[num - 1].id = "quitarVida";

	setTimeout(function () {
		vidas[num - 1].id = "hiddenVida";
	}, 3000);

}

// Funcion que coloca al pajaro en su sitio y lo hace aparecer al azar
function pajaro() {
	document.getElementsByClassName("pajaroJuego")[0].style.cursor = "url('./MEDIA/IMG/juegoDescuentos/cursorDorado.png') 31 32, auto";
	document.getElementsByClassName("pajaroJuego")[0].style.opacity = "1";
	document.getElementsByClassName("pajaroJuego")[0].style.right = "-20%";
	document.getElementsByClassName("pajaroJuego")[0].style.bottom = "85%";

	setTimeout(function () {
		document.getElementsByClassName("pajaroJuego")[0].style.opacity = "0";
		document.getElementsByClassName("pajaroJuego")[0].style.display = "none";
	}, 5000);

}

// Funcion que se ejecuta al disparar al pajaro (puntos, sonido y recolocar al pajaro)
function clickPajaro() {
	pajaroCogido.play();
	document.getElementsByClassName("pajaroJuego")[0].style.cursor = "auto";
	var incremento = 1;
	var duracionAnimacion = 500;
	var scoreInicial = parseInt(score.innerHTML);
	var pasosEntrePuntuacion = Math.abs(Math.floor((puntuacionJuego - scoreInicial)/duracionAnimacion));

	document.getElementsByClassName("pajaroJuego")[0].style.opacity = "0";
	document.getElementsByClassName("pajaroJuego")[0].style.pointerEvents = "none";
	score.style.color = "green";

	idContador = setInterval(function () {
		scoreInicial += incremento;
		score.innerHTML = scoreInicial;
		if (puntuacionJuego == scoreInicial) {
			clearInterval(idContador);
			setTimeout(function () {
				score.style.color = "white";
			}, 500);
		}
	}, pasosEntrePuntuacion);

	puntuacionJuego += 400;
	score.innerHTML = puntuacionJuego;
}

// Funcion que muestra los resultados del juego	
function resultadosJuego() {
	espacioJuego.style.cursor = "auto";
	resultadoJuego.style.opacity = "0";
	resultadoJuego.style.display = "flex";

	// Si la puntuacion es mayor que 0, muestra el mensaje de victoria, si no, el de derrota
	if (vidaActual == 0) {
		document.getElementById("mensajeFinal-descuento").innerHTML = "¡La proxima vez será! Vuele a intentarlo cuando quieras";
		document.getElementById("msjFin").innerHTML = "¡Has perdido!";
	}

	setTimeout(function () { resultadoJuego.style.opacity = "1"; }, 200);

	var lanzarDescuento = false;
	var scoreInicial = 0;
	var incremento = 10;

	// Crea un intervalo que suma o resta la puntuacion hasta llegar a la puntuacion final
	if (puntuacionJuego < 0) {
		incremento = -5;
	} else if (puntuacionJuego > 0) {
		incremento = 5;
	} else {
		incremento = 0;
		setTimeout (function(){clearInterval(idContadorPuntuacion);} , 100);
	}
	var idContadorPuntuacion = setInterval(function () {
		scoreInicial += incremento;
		puntuacionFinal.innerHTML = scoreInicial;
		// Determina el color del score en funcion de la puntuacion
		if (puntuacionJuego == scoreInicial || puntuacionJuego == 0) {
			clearInterval(idContadorPuntuacion);
			lanzarDescuento = true;
			setTimeout(function () {
				if (puntuacionJuego > 2000) {
					puntuacionFinal.id = "scoreFinal-genial";

				} else if (puntuacionJuego >= 500) {
					puntuacionFinal.id = "scoreFinal-bueno";

				} else if (puntuacionJuego < 500) {
					puntuacionFinal.id = "scoreFinal-malo";

				}
			}, 2000);
			// Determina el descuento en funcion de la puntuacion
			if (lanzarDescuento == true && vidaActual !== 0 && puntuacionJuego > 500) {
				var valorDescuento = 0;
				var descuento = 0;
				var incremento2 = 1;
				if (puntuacionJuego > 2000) {
					descuento = 40;
				} else if (puntuacionJuego >= 1500) {
					descuento = 30;
				} else if (puntuacionJuego >= 800) {
					descuento = 20;
				} else if (puntuacionJuego >= 500) {
					descuento = 10;
				} else if (puntuacionJuego < 500) {
					descuento = 0;
					document.getElementById("mensajeFinal-descuento").innerHTML = "¡La proxima vez será! Vuele a intentarlo cuando quieras";
				}

				var idContadorDescuento = setInterval(function () {
					valorDescuento += incremento2;
					descuentoObtenido.innerHTML = valorDescuento + "%";
					if (descuento == valorDescuento) {
						clearInterval(idContadorDescuento);
						descuentoObtenido.innerHTML = descuento + "%";
					}
				}, 1);
			}
		}
	}, 1);

}

// Funcion que resetea el juego, restaura los valores iniciales y muestra el texto de inicio
function resetearJuego() {
	clearInterval(idIntervalo);
	clearInterval(intervalIdbar);
	resultadoJuego.style.opacity = "0";
	espacioJuego.style.backgroundImage = "";
	descuento = 0;
	puntuacionJuego = 0;
	tiempoJuego = 60;
	document.getElementById("progressBar-child-countdown").id = "progressBar-child";
	vidaActual = 3;
	score.innerHTML = puntuacionJuego;
	elementosEnPantalla.style.display = "none";
	setTimeout(function () {
		resultadoJuego.style.display = "none";
		juegoDescuentosTexto.style.display = "flex";
	}, 1000);

	setTimeout(function () {
		document.getElementById("mensajeFinal-descuento").innerHTML = "¡No olvides usarlo en tu proxima compra!";
		document.getElementById("msjFin").innerHTML = "¡Bien jugado!";
		descuentoObtenido.innerHTML = "0%";
		puntuacionFinal.innerHTML = "0";
		puntuacionFinal.id = "";
		juegoDescuentosTexto.style.opacity = "1";
		sinVidas = false;
	}, 1100);

}


/****************Seccion Formulario******************/

function validarFormulario() {
	var nombre = document.getElementById("nombreDescuento").value;
	var apellido = document.getElementById("apellidoDescuento").value;
	var email = document.getElementById("emailDescuento").value;
	var lista = document.getElementById("sexoDescuento");
	var valorSeleccionado = lista.options[lista.selectedIndex].value;
	var terminos = document.getElementById("terminosYcondiciones").checked;

	//Validar que todos los campos esten llenos
	if (nombre === "" || apellido === "" || email === "" || terminos == false || valorSeleccionado === "default") {
		alert("Por favor, complete todos los campos y acepte los términos.");
		return false;
	}

	if (email.indexOf("@") == -1) {
		alert("Por favor, introduzca una dirección de correo válida.");
		return false;
	}

	//Alerta con los datos introducidos
	alert("Genial gracias por registrarte " + nombre + ", en breves debería llegarte nuestro primer newsletter a tu correo: " + email + ".\nTambién recibirás un 10% de descuento en tu próxima compra en breves.");
	usuarioRegistrado();
}

// El usuario se registra correctamente
function usuarioRegistrado() {
	document.getElementById("formulario").style.opacity = "0";
	document.getElementById("formularioDeDescuentoExplicacion").style.opacity = "0";

	document.getElementById("usuarioRegistrado").style.display = "flex";

	setTimeout(function () {
		document.getElementById("usuarioRegistrado").style.opacity = "1";
	}, 600);


}

/***********************Seccion Boton para ir arriba***********************/
// Funcion que se ejecuta al hacer scroll y muestra el boton si se ha bajado mas de 300px
function scrollBoton(scroll) {

	if (scroll > 300) {
		mybutton.style.bottom = "3vh";
	} else {
		mybutton.style.bottom = "-10vh";
	}
}

// Funcion que se ejecuta al hacer click en el boton y sube hasta arriba de la pagina
function irArriba() {
	document.documentElement.scrollTop = 0;
}
















