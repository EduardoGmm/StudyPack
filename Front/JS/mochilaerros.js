function toggleSidebar() {
    document.getElementById("sidebar").classList.toggle("collapsed");
    document.getElementById("main").classList.toggle("expanded");
}

const mochilaItems = document.querySelectorAll(".mochila-item");
const mochilaTitulo = document.getElementById("mochilaTitulo");
const exerciciosContainer = document.getElementById("exerciciosContainer");

mochilaItems.forEach(item => {
    item.addEventListener("click", () => {
        const nome = item.dataset.mochila;

        mochilaTitulo.textContent = nome;

        exerciciosContainer.innerHTML = `
            <div class="ex-card">Exercício 1 dessa mochila</div>
            <div class="ex-card">Exercício 2 dessa mochila</div>
            <div class="ex-card">Exercício 3 dessa mochila</div>
        `;
    });
});