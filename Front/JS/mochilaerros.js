function toggleSidebar() {
    document.getElementById("sidebar").classList.toggle("collapsed");
    document.getElementById("main").classList.toggle("expanded");
}

const mochilaItems = document.querySelectorAll(".mochila-item");
const mochilaTitulo = document.getElementById("mochilaTitulo");
const exerciciosContainer = document.getElementById("exerciciosContainer");

mochilaItems.forEach(item => {
    item.addEventListener("click", () => {
        
        mochilaItems.forEach(i => i.classList.remove("selected"));
        item.classList.add("selected");

        const nome = item.dataset.mochila;
        mochilaTitulo.textContent = nome;

        exerciciosContainer.innerHTML = `
            <div class="ex-card">
                <span><i class="fa-regular fa-file-lines"></i> Exercício 1</span>
                <i class="fa-solid fa-chevron-right"></i>
            </div>
            <div class="ex-card">
                <span><i class="fa-regular fa-file-lines"></i> Exercício 2</span>
                <i class="fa-solid fa-chevron-right"></i>
            </div>
            <div class="ex-card">
                <span><i class="fa-regular fa-file-lines"></i> Exercício 3</span>
                <i class="fa-solid fa-chevron-right"></i>
            </div>
        `;
    });
});