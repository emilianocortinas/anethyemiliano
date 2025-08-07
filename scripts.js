function startCountdown() {
  const eventDate = new Date("2026-10-16T00:00:00"); // Ajusta la fecha
  const countdownEl = document.getElementById("countdown");

  function updateCountdown() {
    const now = new Date();
    const diff = eventDate - now;

    if (diff <= 0) {
      countdownEl.innerHTML = "<strong>¡Hoy es el gran día!</strong>";
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
}

function openInvitation() {
  // Oculta el sobre o portada

  if (screen.orientation && screen.orientation.lock) {
  screen.orientation.lock('portrait').catch(function(error) {
    console.warn('No se pudo bloquear la orientación:', error);
  });
}
  document.querySelector('.envelope').style.display = 'none';

  // Muestra la invitación
  const invitation = document.getElementById('invitation');
  invitation.classList.remove('hidden');

  // Inicia el contador
  startCountdown();

  // Reproduce la canción
  const song = document.getElementById('weddingSong');
  if (song) {
    song.play().catch((e) => {
      console.log("No se pudo reproducir automáticamente:", e);
    });
    //song.volume = 0.05; // 10% del volumen máximo
    song.volume = 0.00; // 10% del volumen máximo
  }

  // Esperar a que el DOM repinte el contenido antes de hacer scroll
  //setTimeout(() => {
  //    invitation.scrollIntoView({ behavior: 'smooth' });
  //    console.log("Haciendo scroll a la invitación");
  //}, 1000); // Espera corta para asegurar que se muestre primero
}



