/* Configurações Gerais */
:root {
    --azul-escuro: #1a5f7a;
    --azul-claro: #86bbd8;
    --amarelo: #f7d08a;
    --amarelo-vibrante: #ffd300;
}

body, html {
    margin: 0;
    padding: 0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: white;
    background: linear-gradient(135deg, var(--azul-escuro), var(--azul-claro));
    min-height: 100vh;
    overflow-x: hidden; /* Impede que o site "dance" para os lados no celular */
}

.container {
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
}

/* Layout que divide Contador e Fotos */
.layout-split {
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 30px;
    min-height: 80vh;
}

/* Estilo do Contador */
.contador-estilo {
    font-size: 1.8rem;
    font-weight: bold;
    background: rgba(255, 255, 255, 0.15);
    padding: 20px;
    border-radius: 20px;
    border-left: 8px solid var(--amarelo);
    margin-top: 10px;
    box-shadow: 0 10px 20px rgba(0,0,0,0.2);
}

.legenda-contador {
    font-size: 1.1rem;
    color: var(--amarelo);
    text-transform: uppercase;
    letter-spacing: 2px;
}

/* Títulos e Frases */
.titulo-principal {
    font-size: 2.5rem;
    margin-bottom: 10px;
    color: white;
}

.frase-subtitulo {
    max-width: 450px;
    margin: 0 auto 30px auto;
    line-height: 1.6;
    font-size: 1.1rem;
    font-style: italic;
    color: var(--amarelo);
}

/* Grid de Fotos Polaroid */
.grid-fotos {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    justify-content: center;
    margin-bottom: 30px;
}

.foto-polaroid {
    background: white;
    padding: 10px 10px 25px 10px;
    box-shadow: 0 10px 20px rgba(0,0,0,0.3);
    width: 140px; /* Tamanho ideal para caberem 2 lado a lado no celular */
    transition: transform 0.3s ease;
}

.foto-polaroid img {
    width: 100%;
    height: 140px;
    object-fit: cover; /* Faz a foto preencher o quadrado sem distorcer */
}

/* Efeito de fotos espalhadas */
.foto-polaroid:nth-child(1) { transform: rotate(-5deg); }
.foto-polaroid:nth-child(2) { transform: rotate(3deg); }
.foto-polaroid:nth-child(3) { transform: rotate(-3deg); }
.foto-polaroid:nth-child(4) { transform: rotate(5deg); }

/* Botão */
.botao-amarelo {
    display: inline-block;
    background: var(--amarelo-vibrante);
    color: var(--azul-escuro);
    padding: 15px 25px;
    text-decoration: none;
    border-radius: 50px;
    font-weight: bold;
    transition: 0.3s;
    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
}

/* AJUSTES PARA CELULAR (A MÁGICA ACONTECE AQUI) */
@media (max-width: 768px) {
    .layout-split {
        flex-direction: column; /* Coloca um embaixo do outro */
        text-align: center;
        padding-top: 40px;
    }

    .titulo-principal {
        font-size: 1.8rem;
    }

    .contador-estilo {
        font-size: 1.4rem;
        width: 90%;
        margin: 0 auto;
    }

    .foto-polaroid {
        width: 130px; /* Um pouco menor no celular para não cortar */
    }
}

/* Abelhinha animada */
.bee-container::after {
    content: '🐝';
    position: fixed;
    font-size: 25px;
    animation: voar 15s linear infinite;
    z-index: 9999;
}

@keyframes voar {
    0% { left: -10%; top: 10%; transform: scaleX(1); }
    49% { left: 110%; top: 50%; transform: scaleX(1); }
    50% { left: 110%; top: 50%; transform: scaleX(-1); }
    100% { left: -10%; top: 10%; transform: scaleX(-1); }
}

/* Player de Música */
.musica-player {
    position: fixed;
    top: 15px;
    right: 15px;
    z-index: 10000;
}

.icon-btn {
    background: var(--amarelo);
    border: none;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    cursor: pointer;
    font-size: 20px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.2);
}
