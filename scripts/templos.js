const anoAtualSpan = document.getElementById("anoatual");
anoAtualSpan.textContent = new Date().getFullYear();

const ultimaModificacaoP = document.getElementById("ultimaModificacao");
ultimaModificacaoP.textContent = 'última Modificação: ${document.lastModified}';

const menuButton = document.getElementById("menu-button");
const menuNav = document.getElementById("menu-nav");

menuButton.addEventListener("click", () => {
    menuNav.classList.toggle("show");
    if (menuNav.classList.contains("show")) {
        menuButton.textContent = "X";
    }

    else {
       menuButton.textContent = "☰";
    }
});
