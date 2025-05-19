let containerCabecalho = document.querySelector("#cabecalho");



function configurarGeraisCabecalho() {
    // Pegando os elementos do formulário

    let inputPadding = document.querySelector("#espacamento-interno-cabecalho--editor");
    let inputCorFundo = document.querySelector("#cor-fundo-cabecalho--editor");
    const inputGap = document.getElementById("gap-itens-cabecalho");
    let inputCorBorda = document.querySelector("#input-cor-borda-cabecalho");
    let inputEspessuraBorda = document.querySelector("#input-espessura-borda-cabecalho");
    let inputEstiloBorda = document.querySelector("#input-estilo-borda-cabecalho");

    let alinhamentoItensCabecalho = document.getElementById("alinhamento-itens-cabecalho");

    // Quando o usuário mudar o valor do espaçamento interno (padding)
    if (inputPadding) {
        inputPadding.addEventListener("input", function () {
            containerCabecalho.style.padding = inputPadding.value + "px";
        });
    }

    // Quando o usuário escolher uma cor de fundo
    if (inputCorFundo) {
        inputCorFundo.addEventListener("input", function () {
            containerCabecalho.style.backgroundColor = inputCorFundo.value;
        });
    }

    // Quando o usuário mudar algum campo da borda
    if (inputCorBorda && inputEspessuraBorda && inputEstiloBorda) {
        inputCorBorda.addEventListener("input", atualizarBorda);
        inputEspessuraBorda.addEventListener("input", atualizarBorda);
        inputEstiloBorda.addEventListener("change", atualizarBorda);
    }

    // Função para aplicar ou remover a borda
    function atualizarBorda() {
        let cor = inputCorBorda.value;
        let largura = inputEspessuraBorda.value;
        let estilo = inputEstiloBorda.value;

        // Se todos os campos estiverem preenchidos, aplica a borda
        if (cor !== "" && largura !== "" && estilo !== "" && largura > 0) {
            containerCabecalho.style.border = largura + "px " + estilo + " " + cor;
        } else {
            // Se faltar algum valor, remove a borda
            containerCabecalho.style.border = "none";
        }
    }

    inputGap.addEventListener("input", () => {
        cabecalho.style.gap = inputGap.value + "px";
    });

    alinhamentoItensCabecalho.addEventListener("change", function() {
        let valor = alinhamentoItensCabecalho.value;
    
        // Aplica o justify-content conforme o valor selecionado
        if (valor) {
            containerCabecalho.style.justifyContent = valor;
        }
    });
    
}

function configurarLogoCabecalho() {
    let textSeuSite = document.querySelector("#seuSiteText");
    textSeuSite.style.display = 'none';

    let inputLogo = document.querySelector("#logo-cabecalho--editor");
    let inputLargura = document.querySelector("#largula-logo-cabecalho--editor");
    let inputAltura = document.querySelector("#altura-logo-cabecalho--editor");
    let inputArredondamento = document.querySelector("#arredondamento-logo-cabecalho");

    // Novos inputs para borda
    let inputCorBorda = document.querySelector("#input-cor-borda-logo-cabecalho");
    let inputEspessuraBorda = document.querySelector("#input-espessura-borda-logo-cabecalho");
    let inputEstiloBorda = document.querySelector("#input-estilo-borda-logo-cabecalho");

    let containerImgCabecalho = document.querySelector(".img-cabecalho");

    let imgLogo = containerImgCabecalho.querySelector("img.logo-cabecalho");
    if (!imgLogo) {
        imgLogo = document.createElement("img");
        imgLogo.classList.add("logo-cabecalho");

        imgLogo.style.width = "40px";
        imgLogo.style.height = "40px";

        containerImgCabecalho.appendChild(imgLogo);
    }

    if (inputLogo) {
        inputLogo.addEventListener("change", function () {
            let file = inputLogo.files[0];
            if (file) {
                let reader = new FileReader();
                reader.onload = function (e) {
                    imgLogo.src = e.target.result;
                };
                reader.readAsDataURL(file);
            }
        });
    }

    if (inputLargura) {
        inputLargura.addEventListener("input", function () {
            imgLogo.style.width = inputLargura.value + "px";
        });
    }

    if (inputAltura) {
        inputAltura.addEventListener("input", function () {
            imgLogo.style.height = inputAltura.value + "px";
        });
    }

    if (inputArredondamento) {
        inputArredondamento.addEventListener("input", function () {
            imgLogo.style.borderRadius = inputArredondamento.value + "px";
        });
    }

    // Função para atualizar a borda conforme inputs
    function atualizarBorda() {
        const espessura = parseInt(inputEspessuraBorda.value, 10);
        const cor = inputCorBorda.value;
        const estilo = inputEstiloBorda.value;

        if (espessura > 0) {
            imgLogo.style.border = `${espessura}px ${estilo} ${cor}`;
        } else {
            imgLogo.style.border = "none";
        }
    }

    if (inputCorBorda) {
        inputCorBorda.addEventListener("input", atualizarBorda);
    }

    if (inputEspessuraBorda) {
        inputEspessuraBorda.addEventListener("input", atualizarBorda);
    }

    if (inputEstiloBorda) {
        inputEstiloBorda.addEventListener("change", atualizarBorda);
    }

    // Inicializa a borda com valores atuais
    atualizarBorda();
}
 


function configurarTextoCabecalho() {
    let textSeuSite = document.querySelector("#seuSiteText");
    textSeuSite.style.display = 'none';
    let textoCabecalho = document.querySelector("#texto-cabecalho");

    let inputTexto = document.querySelector("#texto-cabecalho--editor");
    let inputFonte = document.querySelector("#fonte-texto-cabecalho--editor");
    let inputCor = document.querySelector("#cor-texto-cabecalho--editor");
    let inputCorBorda = document.querySelector("#input-cor-borda-texto-cabecalho");
    let inputEspessuraBorda = document.querySelector("#input-espessura-borda-texto-cabecalho");
    let selectEstiloBorda = document.querySelector("#input-estilo-borda-texto-cabecalho");

    // Atualizar texto conforme input
    if (inputTexto) {
        inputTexto.addEventListener("input", function () {
            textoCabecalho.textContent = inputTexto.value;
        });
    }

    // Atualizar tamanho da fonte
    if (inputFonte) {
        inputFonte.addEventListener("input", function () {
            textoCabecalho.style.fontSize = inputFonte.value + "px";
        });
    }

    // Atualizar cor do texto
    if (inputCor) {
        inputCor.addEventListener("input", function () {
            textoCabecalho.style.color = inputCor.value;
        });
    }

    // Atualizar cor da borda do texto
    if (inputCorBorda) {
        inputCorBorda.addEventListener("input", function () {
            textoCabecalho.style.borderColor = inputCorBorda.value;
            textoCabecalho.style.borderStyle = textoCabecalho.style.borderStyle || 'solid';
        });
    }

    // Atualizar espessura da borda
    if (inputEspessuraBorda) {
        inputEspessuraBorda.addEventListener("input", function () {
            textoCabecalho.style.borderWidth = inputEspessuraBorda.value + "px";
            textoCabecalho.style.borderStyle = textoCabecalho.style.borderStyle || 'solid';
        });
    }

    // Atualizar estilo da borda
    if (selectEstiloBorda) {
        selectEstiloBorda.addEventListener("change", function () {
            textoCabecalho.style.borderStyle = selectEstiloBorda.value;
        });
    }
}



function configurarFormularioCabecalho() {
    const containerFormCabecalho = document.getElementById("form-cabecalho");
    const tituloCampo = document.getElementById("label-input-form");
    const campoTipo = document.getElementById("adicionar-form-cabecalho");
    const inputPlaceholder = document.getElementById("placeholder-input-form");
    const espacamento = document.getElementById("espacamento-interno-form-cabecalho--editor");
    const inputCorLabel = document.getElementById("cor-label-input-form");
    const inputCorPlaceholder = document.getElementById("cor-placeholder-input-form");
    const inputTamanhoFonteLabel = document.getElementById("tamanho-fonte-label-input-form");
    const inputTamanhoFontePlaceholder = document.getElementById("tamanho-fonte-placeholder-input-form");
    const inputCorFundo = document.getElementById("cor-fundo-input-form");
    const inputCorBorda = document.getElementById("input-cor-borda-form-cabecalho");
    const inputEspessuraBorda = document.getElementById("input-espessura-borda-form-cabecalho");
    const inputEstiloBorda = document.getElementById("input-estilo-borda-form-cabecalho");

    // Cria a div do campo
    let campoDiv = document.createElement('div');
    campoDiv.classList.add('campo-editor');
    
    // Cria o label
    let criarLabel = document.createElement("label");
    criarLabel.classList.add("label-style-main");
    campoDiv.appendChild(criarLabel);

    // Adiciona a div no container
    containerFormCabecalho.appendChild(campoDiv);

    // Variável para armazenar o campo criado
    let criarCampo = null;

    // Atualiza o conteúdo do label em tempo real
    tituloCampo.addEventListener("input", () => {
        criarLabel.textContent = tituloCampo.value;
    });

    // Atualiza o tipo do campo
    campoTipo.addEventListener("change", () => {
        if (criarCampo && criarCampo.parentNode) {
            criarCampo.remove();
        }

        if (campoTipo.value === "submit") {
            criarCampo = document.createElement("button");
            criarCampo.type = "submit";
            criarCampo.textContent = "Enviar";
        } else if (campoTipo.value !== "op") {
            criarCampo = document.createElement("input");
            criarCampo.type = campoTipo.value;
            criarCampo.classList.add("input-style-main");

            // Atribui um ID único para o campo (necessário para aplicar estilo no placeholder)
            criarCampo.id = "input-gerado-cabecalho";
        } else {
            criarCampo = null;
            return;
        }

        campoDiv.appendChild(criarCampo);
        aplicarEstilos();
    });

    // Adiciona evento de input para cada campo de estilo
    const todosInputsEstilo = [
        tituloCampo, inputTamanhoFonteLabel, inputCorLabel,
        inputPlaceholder, inputCorPlaceholder, inputTamanhoFontePlaceholder,
        espacamento, inputCorFundo, inputCorBorda, inputEspessuraBorda,
        inputEstiloBorda
    ];

    todosInputsEstilo.forEach(input => {
        input.addEventListener("input", aplicarEstilos);
    });

    // Função que aplica os estilos em tempo real
    function aplicarEstilos() {
        criarLabel.textContent = tituloCampo.value;
        criarLabel.style.fontSize = inputTamanhoFonteLabel.value + 'px';
        criarLabel.style.color = inputCorLabel.value;

        if (!criarCampo) return;

        if (criarCampo.tagName.toLowerCase() === 'input') {
            criarCampo.placeholder = inputPlaceholder.value;
            criarCampo.style.fontSize = inputTamanhoFontePlaceholder.value + 'px';
        }

        criarCampo.style.padding = espacamento.value + "px";
        criarCampo.style.backgroundColor = inputCorFundo.value;
        criarCampo.style.borderColor = inputCorBorda.value;
        criarCampo.style.borderWidth = inputEspessuraBorda.value + "px";
        criarCampo.style.borderStyle = inputEstiloBorda.value;

        // === COR DO PLACEHOLDER ===

        // Aplica estilo ao placeholder via tag <style> com seletor específico
        let styleTag = document.getElementById("placeholder-style");
        if (!styleTag) {
            styleTag = document.createElement("style");
            styleTag.id = "placeholder-style";
            document.head.appendChild(styleTag);
        }

        styleTag.innerHTML = `
            #input-gerado-cabecalho::placeholder {
                color: ${inputCorPlaceholder.value};
                font-size: ${inputTamanhoFontePlaceholder.value}px;
            }
        `;
    }
}
