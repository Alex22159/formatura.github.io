const dataEvento = new Date('2024-10-18').getTime(); // Substitua pela data do seu evento

function atualizarContador() {
    const agora = new Date().getTime();
    const diferenca = dataEvento - agora;

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const semanas = Math.floor(dias / 7);
    const meses = Math.floor(dias / 30);

    document.getElementById('contador').innerHTML = `${dias} dias (${semanas} semanas, ${meses} meses)`;
}

setInterval(atualizarContador, 1000); // Atualiza a cada segundo
