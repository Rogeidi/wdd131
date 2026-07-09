const anoAtual = document.getElementById("anoatual");
anoAtual.textContent = new Date().getFullYear();

const ultimaModificacao = document.getElementById("ultimaModificacao");
ultimaModificacao.innerHTML  = `Última modificação: <span>${document.lastModified}</span>`;
