function atualizarContagem() {
  const dataInicio = new Date("2024-08-28"); // Data do namoro ❤️
  const hoje = new Date();

  let anos = hoje.getFullYear() - dataInicio.getFullYear();
  let meses = hoje.getMonth() - dataInicio.getMonth();
  let dias = hoje.getDate() - dataInicio.getDate();

  if (dias < 0) {
    meses--;
    const ultimoMes = new Date(hoje.getFullYear(), hoje.getMonth(), 0).getDate();
    dias += ultimoMes;
  }

  if (meses < 0) {
    anos--;
    meses += 12;
  }

  document.getElementById("anos").textContent = anos;
  document.getElementById("meses").textContent = meses;
  document.getElementById("dias").textContent = dias;
}

setInterval(atualizarContagem, 1000);
atualizarContagem();
