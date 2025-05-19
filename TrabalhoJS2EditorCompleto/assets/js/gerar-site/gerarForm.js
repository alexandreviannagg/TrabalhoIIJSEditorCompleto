function configurarTituloFormulario() {
    const inputTitulo = document.getElementById("input-titulo-form");
    const inputTamanhoFonte = document.getElementById("input-tamanho-fonte-titulo-form");
    const inputCorTitulo = document.getElementById("input-cor-titulo-form");
    const inputCorFundo = document.getElementById("input-cor-fundo-titulo-form");
    const inputCorBorda = document.getElementById("input-cor-borda-form");
    const inputEspessuraBorda = document.getElementById("input-espessura-borda-form");
    const inputEstiloBorda = document.getElementById("input-estilo-borda-form");

    const containerFormulario = document.getElementById("formulario");
    const containerTitulo = document.getElementById("titulo-formulario");

    // Cria o elemento do título, se ainda não existir
    let tituloForm = containerTitulo.querySelector("h2");
    if (!tituloForm) {
        tituloForm = document.createElement("h2");
        containerTitulo.appendChild(tituloForm);
    }

    // Eventos para atualizar o título
    function atualizarTitulo() {
        tituloForm.textContent = inputTitulo.value;
        tituloForm.style.fontSize = `${inputTamanhoFonte.value || 24}px`;
        tituloForm.style.color = inputCorTitulo.value;
    }

    function atualizarEstilosFormulario() {
        containerFormulario.style.backgroundColor = inputCorFundo.value;
        containerFormulario.style.border = `${inputEspessuraBorda.value || 1}px ${inputEstiloBorda.value} ${inputCorBorda.value}`;
        containerFormulario.style.padding = "20px";
    }

    inputTitulo.addEventListener("input", atualizarTitulo);
    inputTamanhoFonte.addEventListener("input", atualizarTitulo);
    inputCorTitulo.addEventListener("input", atualizarTitulo);

    inputCorFundo.addEventListener("input", atualizarEstilosFormulario);
    inputCorBorda.addEventListener("input", atualizarEstilosFormulario);
    inputEspessuraBorda.addEventListener("input", atualizarEstilosFormulario);
    inputEstiloBorda.addEventListener("change", atualizarEstilosFormulario);

    // Inicialização inicial
    atualizarTitulo();
    atualizarEstilosFormulario();
}


function configurarCamposFormulario() {
    const camposCriados = [];
    const containerCampos = document.getElementById("campos-formulario");

    const tipoCampo = document.getElementById("input-selecionar-tipo-campo");
    const tituloCampo = document.getElementById("input-titulo-label-campo");
    const tamanhoFonteLabel = document.getElementById("input-tamanho-fonte-label");
    const corTitulo = document.getElementById("input-cor-titulo-label-campo");
    const placeholder = document.getElementById("input-placeholder-label-campo");
    const tamanhoFontePlaceholder = document.getElementById("input-tamanho-fonte-placeholder");
    const corBorda = document.getElementById("input-cor-borda-campo");
    const espessuraBorda = document.getElementById("input-espessura-borda-campo");
    const estiloBorda = document.getElementById("input-estilo-borda-campo");

    const btnSalvar = document.getElementById("btn-salvar-form");
    const btnExcluir = document.getElementById("btn-excluir-form");


    let contCampo = 0;
    tipoCampo.addEventListener("change", function () {
        let divCampoForm = document.createElement("div");
        divCampoForm.classList.add("campo-editor");

        let labelCampoForm = document.createElement("label");
        labelCampoForm.classList.add("label-style-main");
        tituloCampo.addEventListener("input", function () {
            labelCampoForm.textContent = tituloCampo.value;
        });
        tamanhoFonteLabel.addEventListener("input", function () {
            labelCampoForm.style.fontSize = tamanhoFonteLabel.value + "px";
        })

        divCampoForm.appendChild(labelCampoForm);
        containerCampos.appendChild(divCampoForm);
    })
    btnSalvar.onclick = function () {
        const campoComLabel = criarCampo();
        const label = campoComLabel.querySelector("label");
        const campo = campoComLabel.querySelector("input, textarea, select, button");

        containerCampos.appendChild(campoComLabel);
        camposCriados.push(campoComLabel);

        adicionarListeners(label, campo);

        // Limpar os campos do editor
        tipoCampo.value = "op";
        tituloCampo.value = "";
        tamanhoFonteLabel.value = "";
        placeholder.value = "";
        tamanhoFontePlaceholder.value = "";
        espessuraBorda.value = "";
    };

    btnExcluir.onclick = function () {
        if (camposCriados.length > 0) {
            const ultimoCampo = camposCriados.pop();
            ultimoCampo.remove();
        }
    };
}
