const cardsGaleriaSalvos = [];
let cardAtual = null;

function configurarGaleria() {
    let galeria = document.querySelector("#galeria");
    if (!galeria) {
        galeria = document.createElement("div");
        galeria.id = "galeria";
        galeria.style.display = "flex";        // deixa flexível
        galeria.style.flexWrap = "wrap";       // permite quebrar linha
        galeria.style.gap = "10px";             // espaço entre cards
        galeria.style.justifyContent = "flex-start"; // cards alinhados à esquerda
        galeria.style.maxWidth = "660px";      // largura máxima, para caber 3 cards (3 x 200 + gaps)
        galeria.style.margin = "20px auto";    // centraliza o container
        document.querySelector("#container-site--gerado").appendChild(galeria);
    }

    let card = galeria.querySelector(".card-galeria");
    if (!card) {
        card = document.createElement("div");
        card.classList.add("card-galeria");
        card.style.padding = "10px";
        card.style.border = "1px solid #000";
        card.style.margin = "10px";
        card.style.width = "200px";
        card.style.textAlign = "center";
        card.style.borderRadius = "6px";
        card.style.backgroundColor = "#ffffff";
        card.style.display = "flex";
        card.style.flexDirection = "column";

        card.innerHTML = `
            <img src="" alt="Imagem" class="imagem-card" style="width: 100%; height: auto; display: none;">
            <h4 class="titulo-card">Título do card</h4>
            <p class="descricao-card">Descrição do card</p>
        `;

        galeria.appendChild(card);
    }

    cardAtual = card;

    // Elementos do card
    const img = card.querySelector(".imagem-card");
    const titulo = card.querySelector(".titulo-card");
    const descricao = card.querySelector(".descricao-card");

    // Inputs
    const inputTitulo = document.getElementById("cardTitulo");
    const inputDescricao = document.getElementById("cardDescricao");
    const inputImagem = document.getElementById("cardImagem");
    const inputCorFundo = document.getElementById("cardBgCor");
    const inputCorTitulo = document.getElementById("cardTituloCor");
    const inputCorDescricao = document.getElementById("cardDescricaoCor");
    const inputCorBorda = document.getElementById("cor-borda-form");
    const inputEspessuraBorda = document.getElementById("espessura-borda-form");
    const inputEstiloBorda = document.getElementById("estilo-borda-form");
    const selectTamanho = document.getElementById("tamanho-card-galeria");

    // Botões já existentes no DOM
    const btnSalvar = document.getElementById("btn-salvar-card");
    const btnExcluir = document.getElementById("btn-excluir-card");

    // Eventos de edição em tempo real
    inputTitulo.addEventListener("input", () => {
        titulo.textContent = inputTitulo.value;
    });

    inputDescricao.addEventListener("input", () => {
        descricao.textContent = inputDescricao.value;
    });

    inputImagem.addEventListener("change", () => {
        const file = inputImagem.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                img.src = e.target.result;
                img.style.display = "block";
            };
            reader.readAsDataURL(file);
        }
    });

    inputCorFundo.addEventListener("input", () => {
        card.style.backgroundColor = inputCorFundo.value;
    });

    inputCorTitulo.addEventListener("input", () => {
        titulo.style.color = inputCorTitulo.value;
    });

    inputCorDescricao.addEventListener("input", () => {
        descricao.style.color = inputCorDescricao.value;
    });

    function atualizarBorda() {
        const espessura = inputEspessuraBorda.value || 1;
        const cor = inputCorBorda.value;
        const estilo = inputEstiloBorda.value;
        card.style.border = `${espessura}px ${estilo} ${cor}`;
    }

    inputCorBorda.addEventListener("input", atualizarBorda);
    inputEspessuraBorda.addEventListener("input", atualizarBorda);
    inputEstiloBorda.addEventListener("change", atualizarBorda);

    selectTamanho.addEventListener("change", () => {
        if (selectTamanho.value === "pequeno") {
            card.style.width = "150px";
        } else if (selectTamanho.value === "medio") {
            card.style.width = "200px";
        } else {
            card.style.width = "300px";
        }
    });

    // Botão salvar — salva o card atual no vetor e adiciona na galeria
    btnSalvar.addEventListener("click", () => {
        const novo = card.cloneNode(true);
        novo.classList.add("card-galeria");
        cardsGaleriaSalvos.push(novo);
        galeria.appendChild(novo);

        // Resetar campos para novo card
        inputTitulo.value = "Título do card";
        inputDescricao.value = "Descrição do card";
        inputImagem.value = "";
        inputCorFundo.value = "#ffffff";
        inputCorTitulo.value = "#000000";
        inputCorDescricao.value = "#000000";
        inputCorBorda.value = "#000000";
        inputEspessuraBorda.value = "";
        inputEstiloBorda.value = "solid";
        selectTamanho.value = "medio";

        img.style.display = "none";
        titulo.textContent = "Título do card";
        descricao.textContent = "Descrição do card";
        card.style.backgroundColor = "#ffffff";
        card.style.border = "1px solid #000";
        card.style.width = "200px";
    });

    // Botão excluir — remove o card atual ou o último salvo
    btnExcluir.addEventListener("click", () => {
        if (cardAtual && galeria.contains(cardAtual)) {
            cardAtual.remove();
            cardAtual = null;
        } else if (cardsGaleriaSalvos.length > 0) {
            const ultimo = cardsGaleriaSalvos.pop();
            ultimo.remove();
        }
    });

    atualizarBorda();
}
