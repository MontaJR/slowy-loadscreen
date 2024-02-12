
// Social Media / Redes Sociales / No tocar / Don't touch

function copiarEnlace(enlace, mensajeId) {
    var textarea = document.createElement("textarea");
    textarea.value = enlace;

    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);

    var mensaje = document.getElementById(mensajeId);
    mensaje.textContent = "Enlace copiado";
    mensaje.style.opacity = "1";

    setTimeout(function() {
        mensaje.style.opacity = "0";
    }, 2000);
}



// Don't Touch / No tocar /
  document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('social1').src = headerConfig.social1;
    document.getElementById('social2').src = headerConfig.social2;
    document.getElementById('social3').src = headerConfig.social3;
    document.getElementById('staff1').src = headerConfig.staff1;
    document.getElementById('staff2').src = headerConfig.staff2;
    document.getElementById('staff3').src = headerConfig.staff3;
    document.getElementById('youtubeplayer').src = headerConfig.youtube;
    document.getElementById('musica').src = headerConfig.musica;
  });



// Musica / Music / Don't Touch / No tocar /
  document.addEventListener('keydown', function(event) {
    if (event.code === 'Space') {
      event.preventDefault();
      var musica = document.getElementById('musica');
      if (musica.paused) {
        musica.play();
      } else {
        musica.pause();
      }
    }
  });