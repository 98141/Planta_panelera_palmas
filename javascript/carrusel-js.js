let indice = 0;

function cambiarImagen(n) {
  let slides = document.querySelectorAll('.carrusel__container-slide');
  indice += n;

  if (indice >= slides.length) {
    indice = 0;  
  } else if (indice < 0) {
    indice = slides.length - 1;
  }

  const carrusel = document.querySelector('.carrusel__container');
  carrusel.style.transform = `translateX(${-indice * 100}%)`;
}

// Opcional: Cambiar automáticamente cada 5 segundos
setInterval(() => cambiarImagen(1), 5000);