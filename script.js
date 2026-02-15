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
  const mensaje = `Ahora que llegaste aquí…
quiero decirte algo que no siempre digo en voz alta.

Gracias por estos dos años que hemos pasado.
No solo por los momentos grandes, sino por los pequeños también.
Por los días normales que contigo se volvieron especiales.

Gracias por quedarte incluso cuando no todo fue fácil.
Tuvimos momentos dificiles pero aquí seguimos luchando juntos.
Gracias por entenderme, por escucharme, por reírte conmigo.

A veces no me doy cuenta de cuánto significas para mí hasta que pienso en mi vida sin ti…
y simplemente no la imagino igual.

Contigo aprendí que el amor no es perfecto,
pero sí constante. Se le dedica tiempo, cariño y lealtad.

Y si algo tengo claro después de estos dos años,
es que quiero seguir construyendo contigo, sin prisa,
sin promesas exageradas, solo nosotros, 
eligiéndonos todos los días.

Gracias por ser mi tranquilidad.
Gracias por ser mi hogar.

Siempre tú. Siempre nosotros.`;

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

