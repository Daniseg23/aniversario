document.addEventListener("DOMContentLoaded", function () {

  const btn = document.getElementById("btnComenzar");
  const inicio = document.getElementById("inicio");
  const contenido = document.getElementById("contenido");
  const audio = document.getElementById("musica");

  btn.addEventListener("click", function () {

    // Transición pantalla inicial
    inicio.style.opacity = "0";

    setTimeout(() => {
      inicio.style.display = "none";
      contenido.classList.remove("hidden");
      contenido.classList.add("visible");
      escribirTexto();
    }, 1000);

    // Música
    audio.volume = 0.6;
    audio.play().catch(error => {
      console.log("Error al reproducir audio:", error);
    });

  });

  // Carrusel
  let slides = document.querySelectorAll(".slide");
  let index = 0;

  setInterval(() => {
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
  }, 4000);

  // Máquina de escribir
  const mensaje = `Desde que llegaste a mi vida, todo cambió.
Cada risa, cada abrazo y cada momento contigo
se convirtió en algo que guardo como un tesoro.

Gracias por estos dos años llenos de amor,
paciencia y aventuras. No solo eres mi pareja,
eres mi hogar.

Siempre tú. Siempre nosotros. 💖`;

  let i = 0;

  function escribirTexto() {
    if (i < mensaje.length) {
      document.getElementById("maquina").innerHTML += mensaje.charAt(i);
      i++;
      setTimeout(escribirTexto, 35);
    }
  }

  // Contador
  const fechaInicio = new Date("2024-02-14"); // CAMBIA ESTA FECHA

  function actualizarContador() {
    const ahora = new Date();
    const diferencia = ahora - fechaInicio;

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diferencia / (1000 * 60)) % 60);

    document.getElementById("contador").innerHTML =
      `Llevamos juntos ${dias} días, ${horas} horas y ${minutos} minutos 💕`;
  }

  setInterval(actualizarContador, 1000);
  actualizarContador();

  // Corazones
  setInterval(() => {
    const corazon = document.createElement("span");
    corazon.innerHTML = "❤";
    corazon.style.left = Math.random() * 100 + "vw";
    corazon.style.fontSize = Math.random() * 20 + 15 + "px";
    document.querySelector(".corazones").appendChild(corazon);

    setTimeout(() => {
      corazon.remove();
    }, 8000);
  }, 500);

});
