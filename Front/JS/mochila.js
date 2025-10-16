const modal = document.getElementById("modal-nova-questao");
const btnCancelar = document.getElementById("btn-cancel-questao");
const btnSalvar = document.getElementById("btn-salvar-questao");

const modalMochila = document.getElementById("modal-nova-mochila");
const btnNovaMochila = document.getElementById("btn-nova-mochila");
const btnCancelarMochila = document.getElementById("btn-cancel-mochila");
const btnSalvarMochila = document.getElementById("btn-salvar-mochila");

const btnToggleSidebar = document.getElementById("btn-toggle-sidebar");
const container = document.querySelector(".container");

const mochilaList = document.getElementById("mochilas-list");
const mochilaArea = document.getElementById("mochila-area");

let mochilas = [
  {
    id: 1,
    nome: "Mochila 1",
    cor: "#0a659d",
    tag: "exemplo",
    exercicios: []
  }
];

let mochilaAtualId = 1;

// Renderiza lista de mochilas na sidebar
function renderMochilas() {
  mochilaList.innerHTML = "";
  mochilas.forEach(mochila => {
    const div = document.createElement("div");
    div.classList.add("mochila-item");
    if (mochila.id === mochilaAtualId) div.classList.add("active");

    // Coloca nome dentro de span para controle de visibilidade no colapsado
    div.innerHTML = `<span>${mochila.nome}</span>`;
    div.style.borderLeft = `6px solid ${mochila.cor ? mochila.cor : "#3b82f6"}`;
    div.dataset.id = mochila.id;
    div.title = mochila.tag ? mochila.tag : "";

    div.addEventListener("click", () => {
      mochilaAtualId = mochila.id;
      renderMochilas();
      renderExercicios();
    });
    mochilaList.appendChild(div);
  });
}

// Renderiza exercícios da mochila selecionada
function renderExercicios() {
  const mochila = mochilas.find(m => m.id === mochilaAtualId);
  mochilaArea.innerHTML = `
    <div class="mochila-header">
      <button class="btn" id="btn-nova-questao">Criar Novo Exercício</button>
    </div>
    <div class="exercicios-list" style="flex-grow: 1; overflow-y: auto;">
      ${mochila.exercicios.length === 0 ? '<p style="color:#999;">Nenhum exercício criado nesta mochila.</p>' : ''}
      ${mochila.exercicios.map((ex, i) => `
        <div class="questao" data-index="${i}">
          ${ex.enunciado.length > 100 ? ex.enunciado.slice(0, 100) + '...' : ex.enunciado}
        </div>
      `).join('')}
    </div>
  `;

  // Eventos para abrir a questão em nova aba
  const questoesElems = mochilaArea.querySelectorAll(".questao");
  questoesElems.forEach(elem => {
    elem.style.cursor = "pointer";
    elem.addEventListener("click", () => {
      const index = parseInt(elem.dataset.index);
      const ex = mochila.exercicios[index];
      const altUrl = ex.alternativas.map(a => encodeURIComponent(a)).join("|");
      const imagemParam = ex.imagem ? encodeURIComponent(ex.imagem) : "";
      const url = `questao.html?enunciado=${encodeURIComponent(ex.enunciado)}&alternativas=${altUrl}&imagem=${imagemParam}`;
      window.open(url, "_blank");
    });
  });

  // Evento botão criar exercício abre modal
  document.getElementById("btn-nova-questao").addEventListener("click", () => {
    modal.classList.add("active");
  });
}

// Botões nova mochila
btnNovaMochila.addEventListener("click", () => {
  modalMochila.classList.add("active");
});

btnCancelarMochila.addEventListener("click", () => {
  modalMochila.classList.remove("active");
});

btnSalvarMochila.addEventListener("click", () => {
  const nomeMochila = document.getElementById("nome-mochila").value.trim();
  const tag = document.getElementById("tag").value.trim();
  const cor = document.getElementById("color").value;
  if (!nomeMochila) {
    alert("Por favor, preencha o nome da mochila.");
    return;
  }
  mochilas.push({
    id: Date.now(),
    nome: nomeMochila,
    tag: tag,
    cor: cor,
    exercicios: []
  });
  mochilaAtualId = mochilas[mochilas.length - 1].id;
  renderMochilas();
  renderExercicios();
  modalMochila.classList.remove("active");

  document.getElementById("nome-mochila").value = "";
  document.getElementById("tag").value = "";
  document.getElementById("color").value = "#0a659d";
});

btnCancelar.addEventListener("click", () => {
  modal.classList.remove("active");
});

btnSalvar.addEventListener("click", () => {
  const enunciado = document.getElementById("enunciado").value.trim();
  const alternativasVal = document.getElementById("alternativas").value.trim();
  const inputImagem = document.getElementById("imagem");

  if (!enunciado) {
    alert("Por favor, preencha o enunciado do exercício.");
    return;
  }

  const alternativasArr = alternativasVal.split("\n").map(a => a.trim()).filter(Boolean);

  function salvarExercicio(base64Img) {
    const mochila = mochilas.find(m => m.id === mochilaAtualId);
    mochila.exercicios.push({
      enunciado: enunciado,
      alternativas: alternativasArr,
      imagem: base64Img || null,
    });

    renderExercicios();

    document.getElementById("enunciado").value = "";
    document.getElementById("alternativas").value = "";
    document.getElementById("resposta").value = "";
    document.getElementById("imagem").value = "";
    modal.classList.remove("active");
  }

  if (inputImagem.files && inputImagem.files[0]) {
    const reader = new FileReader();
    reader.onload = function(evt) {
      salvarExercicio(evt.target.result);
    };
    reader.readAsDataURL(inputImagem.files[0]);
  } else {
    salvarExercicio(null);
  }
});

// Toggle Sidebar
btnToggleSidebar.addEventListener("click", () => {
  container.classList.toggle("collapsed");
});

// Inicialização
renderMochilas();
renderExercicios();
