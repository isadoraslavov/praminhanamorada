function atualizarContador() {
    const dataInicio = new Date('2026-01-24T00:00:00'); 
    const agora = new Date();
    const dif = agora - dataInicio;

    if (dif < 0) return;

    const meses = Math.floor(dif / (1000 * 60 * 60 * 24 * 30.44));
    const dias = Math.floor((dif / (1000 * 60 * 60 * 24)) % 30.44);
    const horas = Math.floor((dif / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((dif / (1000 * 60)) % 60);
    const segundos = Math.floor((dif / 1000) % 60);

    const el = document.getElementById('contador');
    if(el) el.innerHTML = `${meses} meses, ${dias} dias, ${horas}h ${minutos}m ${segundos}s`;
}

setInterval(atualizarContador, 1000);
atualizarContador();

const btn = document.getElementById('btn-musica');
const audio = document.getElementById('musica');

if(btn && audio) {
    btn.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            btn.innerHTML = "⏸️";
        } else {
            audio.pause();
            btn.innerHTML = "🎵";
        }
    });
}
