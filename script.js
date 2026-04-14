function atualizarContador() {

    // Data: 24 de Janeiro de 2026 (ajustado conforme o ano atual se necessário)

    const dataInicio = new Date('2026-01-24T00:00:00'); 

    const agora = new Date();

    const dif = agora - dataInicio;

    if (dif < 0) {

        document.getElementById('contador').innerHTML = "A data ainda não chegou!";

        return;

    }

    const meses = Math.floor(dif / (1000 * 60 * 60 * 24 * 30.44));

    const dias = Math.floor((dif / (1000 * 60 * 60 * 24)) % 30.44);

    const horas = Math.floor((dif / (1000 * 60 * 60)) % 24);

    const minutos = Math.floor((dif / (1000 * 60)) % 60);

    const segundos = Math.floor((dif / 1000) % 60);

    document.getElementById('contador').innerHTML = 

        `${meses} meses, ${dias} dias, ${horas}h ${minutos}m ${segundos}s`;

}

// Atualiza a cada segundo

setInterval(atualizarContador, 1000);

atualizarContador();

// Lógica simples de música

const btn = document.getElementById('btn-musica');

const audio = document.getElementById('musica');

btn.addEventListener('click', () => {

    if (audio.paused) {

        audio.play();

        btn.innerHTML = "⏸️";

    } else {

        audio.pause();

        btn.innerHTML = "🎵";

    }

});
