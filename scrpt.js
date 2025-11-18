function calcularTempo() {
    const inicio = new Date("2024-08-28");
    const hoje = new Date();

    let anos = hoje.getFullYear() - inicio.getFullYear();
    let meses = hoje.getMonth() - inicio.getMonth();
    let dias = hoje.getDate() - inicio.getDate();

    if (dias < 0) {
        meses--;
        const diasMesAnterior = new Date(hoje.getFullYear(), hoje.getMonth(), 0).getDate();
        dias += diasMesAnterior;
    }

    if (meses < 0) {
        anos--;
        meses += 12;
    }

    document.getElementById("anos").textContent = `${anos} anos juntos`;
    document.getElementById("meses").textContent = `${meses} meses`;
    document.getElementById("dias").textContent = `${dias} dias`;
}

calcularTempo();
setInterval(calcularTempo, 1000);
