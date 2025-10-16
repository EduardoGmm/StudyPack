function getQueryParams() {
  const params = {};
  location.search.substr(1).split("&").forEach(function(item) {
    let [key, value] = item.split("=");
    if (key) params[key] = decodeURIComponent(value);
  });
  return params;
}

const params = getQueryParams();

const enunciado = params.enunciado || "Nenhum enunciado recebido";
const alternativasRaw = params.alternativas || "";
const alternativasArr = alternativasRaw.split("|").map(a => a.trim());

document.getElementById("enunciado").textContent = enunciado;

const altDiv = document.getElementById("alternativas");
alternativasArr.forEach(alt => {
  const p = document.createElement("p");
  p.textContent = alt;
  altDiv.appendChild(p);
});

const imagemBase64 = params.imagem || null;
const imgContainer = document.getElementById("imagem-container");
if (imagemBase64) {
  const imgElem = document.createElement("img");
  imgElem.src = imagemBase64;
  imgElem.alt = "Imagem da questão";
  imgContainer.appendChild(imgElem);
}
