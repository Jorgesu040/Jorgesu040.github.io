// Primer slider
var img = 1;

function imgSiguiente(n) {
  mostrarActual(img += n);
}

function imgActual(n) {
  mostrarActual(img = n);
}

function mostrarActual(n) {
  var i;
  var imagenes = document.getElementsByClassName("imagen");
  var botInf = document.getElementsByClassName("botonInferior");
  if (n > imagenes.length) {
    img = 1;
  }    
  if (n < 1) {
    img = imagenes.length;
  }
  for (i = 0; i < imagenes.length; i++) {
    imagenes[i].style.display = "none";  
  }
  for (i = 0; i < botInf.length; i++) {
    botInf[i].className = botInf[i].className.replace(" active", "");
  }
  imagenes[img-1].style.display = "block";
  botInf[img-1].className += " active";
}

window.onload = function() {
  mostrarActual(img);
};

// Segundo slider
var img2 = 1;

function imgSiguiente2(n) {
  mostrarActual2(img2 += n);
}

function imgActual2(n) {
  mostrarActual2(img2 = n);
}

function mostrarActual2(n) {
  var i;
  var imagenes = document.getElementsByClassName("imagen2");
  var botInf = document.getElementsByClassName("botonInferior2");
  if (n > imagenes.length) {
    img2 = 1;
  }    
  if (n < 1) {
    img2 = imagenes.length;
  }
  for (i = 0; i < imagenes.length; i++) {
    imagenes[i].style.display = "none";  
  }
  for (i = 0; i < botInf.length; i++) {
    botInf[i].className = botInf[i].className.replace(" active", "");
  }
  imagenes[img2-1].style.display = "block";
  botInf[img2-1].className += " active";
};

window.onload = function() {
  mostrarActual2(img2);
};

// Tercer slider

var img3 = 1;

function imgSiguiente3(n) {
  mostrarActual3(img3 += n);
}

function imgActual3(n) {
  mostrarActual3(img3 = n);
}

function mostrarActual3(n) {
  var i;
  var imagenes = document.getElementsByClassName("imagen3");
  var botInf = document.getElementsByClassName("botonInferior3");
  if (n > imagenes.length) {
    img3 = 1;
  }    
  if (n < 1) {
    img3 = imagenes.length;
  }
  for (i = 0; i < imagenes.length; i++) {
    imagenes[i].style.display = "none";  
  }
  for (i = 0; i < botInf.length; i++) {
    botInf[i].className = botInf[i].className.replace(" active", "");
  }
  imagenes[img3-1].style.display = "block";
  botInf[img3-1].className += " active";
};

window.onload = function() {
  mostrarActual3(img3);
};


// Cuarto slider

var img4 = 1;

function imgSiguiente4(n) {
  mostrarActual4(img4 += n);
}

function imgActual4(n) {
  mostrarActual4(img4 = n);
}

function mostrarActual4(n) {
  var i;
  var imagenes = document.getElementsByClassName("imagen4");
  var botInf = document.getElementsByClassName("botonInferior4");
  if (n > imagenes.length) {
    img4 = 1;
  }    
  if (n < 1) {
    img4 = imagenes.length;
  }
  for (i = 0; i < imagenes.length; i++) {
    imagenes[i].style.display = "none";  
  }
  for (i = 0; i < botInf.length; i++) {
    botInf[i].className = botInf[i].className.replace(" active", "");
  }
  imagenes[img4-1].style.display = "block";
  botInf[img4-1].className += " active";
};

window.onload = function() {
  mostrarActual4(img4);
};


// Quinto slider

var img5 = 1;

function imgSiguiente5(n) {
  mostrarActual5(img5 += n);
}

function imgActual5(n) {
  mostrarActual5(img5 = n);
}

function mostrarActual5(n) {
  var i;
  var imagenes = document.getElementsByClassName("imagen5");
  var botInf = document.getElementsByClassName("botonInferior5");
  if (n > imagenes.length) {
    img5 = 1;
  }    
  if (n < 1) {
    img5 = imagenes.length;
  }
  for (i = 0; i < imagenes.length; i++) {
    imagenes[i].style.display = "none";  
  }
  for (i = 0; i < botInf.length; i++) {
    botInf[i].className = botInf[i].className.replace(" active", "");
  }
  imagenes[img5-1].style.display = "block";
  botInf[img5-1].className += " active";
};

window.onload = function() {
  mostrarActual5(img5);
};

// Quinto slider

var img6 = 1;

function imgSiguiente6(n) {
  mostrarActual6(img6 += n);
}

function imgActual6(n) {
  mostrarActual6(img6 = n);
}

function mostrarActual6(n) {
  var i;
  var imagenes = document.getElementsByClassName("imagen6");
  var botInf = document.getElementsByClassName("botonInferior6");
  if (n > imagenes.length) {
    img6 = 1;
  }    
  if (n < 1) {
    img6 = imagenes.length;
  }
  for (i = 0; i < imagenes.length; i++) {
    imagenes[i].style.display = "none";  
  }
  for (i = 0; i < botInf.length; i++) {
    botInf[i].className = botInf[i].className.replace(" active", "");
  }
  imagenes[img6-1].style.display = "block";
  botInf[img6-1].className += " active";
};

window.onload = function() {
  mostrarActual6(img6);
};



  function comprar() {
    alert('Fuera de stock');
    var audio = new Audio('../MEDIA/MEDIA_PISTOLAS/AUDIO/dinero.wav');
    audio.play();
  }

