function escolherPalavra(dificuldade) {
    var palavrasParaForca = {
        facil: [
            "SOL",
            "GATO",
            "PATO",
            "MESA",
            "FACA",
            "BOLA",
            "RUIM",
            "RATO",
            "FOGO",
            "AZUL",
            "LUA",
            "PEIXE",
            "MAO",
            "PE",
            "CASA"
        ],
        normal: [
            "ESCOLA",
            "JANELA",
            "CHAVE",
            "CADERNO",
            "FLORESTA",
            "BANHEIRO",
            "COMPUTADOR",
            "TELEFONE",
            "ABACAXI",
            "ELEFANTE",
            "AVIAO",
            "BICICLETA",
            "MARACUJA",
            "CHOCOLATE",
            "AQUARELA"
        ],
        dificil: [
            "OFTALMOLOGISTA",
            "PNEUMONIA",
            "XICARA",
            "CONTEXTO",
            "DISCIPLINA",
            "TRANSPARENTE",
            "HIPOPOTAMO",
            "ESTACIONAMENTO",
            "SUBSTANCIA",
            "QUEBRA-CABECA",
            "PARADOXO",
            "DIAGRAMA",
            "PSICOLOGIA",
            "HIPERBOLE",
            "ESQUILO"
        ]
    };
    if (dificuldade === 'facil') {
        var palavras = palavrasParaForca.facil;
        var indiceAleatorio = Math.floor(Math.random() * palavras.length);
        return palavras[indiceAleatorio];
    }
    else if (dificuldade === 'normal') {
        var palavras = palavrasParaForca.normal;
        var indiceAleatorio = Math.floor(Math.random() * palavras.length);
        return palavras[indiceAleatorio];
    }
    else if (dificuldade === 'dificil') {
        var palavras = palavrasParaForca.dificil;
        var indiceAleatorio = Math.floor(Math.random() * palavras.length);
        return palavras[indiceAleatorio];
    }
}
function obterPalavraCriptografada(dificuldade) {
    var palavra = escolherPalavra(dificuldade);
    var palavraCripto = palavra.split('').map(function () { return '_'; }).join('');
    return {
        palavraForca: palavra.toLowerCase(),
        palavraCripto: palavraCripto
    };
}
function iniciarJogo(dificuldade) {
    var forcaCampo = document.createElement('p');
    var vidasCampo = document.createElement('p');
    var test = obterPalavraCriptografada(dificuldade);
    var palavraSecreta = test.palavraForca;
    var palavraSecretaArray = palavraSecreta.split('');
    var palavraAtual = test.palavraCripto;
    var palavraAtualArray = palavraAtual.split('');
    //Criar campo da forca no HTML
    var forca = document.createTextNode(palavraAtual);
    forcaCampo.appendChild(forca);
    var elementoPai = document.getElementById('palavra');
    elementoPai === null || elementoPai === void 0 ? void 0 : elementoPai.appendChild(forcaCampo);
    //Criar campo das vidas
    var numVidas = 0;
    if (dificuldade === 'facil') {
        numVidas = 8;
    }
    else if (dificuldade === 'normal') {
        numVidas = 6;
    }
    else if (dificuldade === 'dificil') {
        numVidas = 3;
    }
    var vidas = document.createTextNode('VIDAS: ' + numVidas);
    vidasCampo.appendChild(vidas);
    var elementoPai2 = document.getElementById('vidas');
    elementoPai2 === null || elementoPai2 === void 0 ? void 0 : elementoPai2.appendChild(vidasCampo);
    //Criar campo da dificuldade
    var dificuldadeCampo = document.createElement('p');
    var dificuldadeTexto = document.createTextNode('DIFICULDADE: ' + dificuldade.toUpperCase());
    dificuldadeCampo.appendChild(dificuldadeTexto);
    var elementoPaiDificuldade = document.getElementById('usuarioDificuldade');
    elementoPaiDificuldade === null || elementoPaiDificuldade === void 0 ? void 0 : elementoPaiDificuldade.appendChild(dificuldadeCampo);
    // Lógica do clique no botão
    var botoes = document.querySelectorAll('.btn-alfabeto');
    botoes.forEach(function (botao) {
        var elementoBtn = botao;
        if (dificuldade === 'facil') {
            elementoBtn.classList.add('facil');
        }
        else if (dificuldade === 'normal') {
            elementoBtn.classList.add('normal');
        }
        else if (dificuldade === 'dificil') {
            elementoBtn.classList.add('dificil');
        }
    });
    botoes.forEach(function (botao) {
        botao.addEventListener('click', manipularClique);
    });
    function manipularClique(event) {
        var target = event.target;
        if (target instanceof HTMLButtonElement) {
            var letraMinuscula = target.value.toLowerCase();
            // Verifica se a letra está na palavra secreta
            var acertou = false;
            for (var i = 0; i < palavraSecretaArray.length; i++) {
                if (palavraSecretaArray[i] === letraMinuscula) {
                    palavraAtualArray[i] = letraMinuscula;
                    acertou = true;
                }
            }
            if (acertou === false) {
                numVidas--;
                vidasCampo.textContent = 'VIDAS: ' + numVidas;
                if (numVidas === 0) {
                    alert('Você perdeu!');
                    palavraAtualArray = palavraSecretaArray;
                    forcaCampo.textContent = palavraAtualArray.join();
                }
            }
            // Desabilita o botão após o clique
            if (target instanceof HTMLButtonElement) {
                target.disabled = true;
                target.classList.add('desativar-hover');
            }
            // Atualiza a palavra exibida
            palavraAtual = palavraAtualArray.join('');
            if (forcaCampo) {
                forcaCampo.textContent = palavraAtual;
                forcaCampo.style.textTransform = 'uppercase';
            }
            // Verifica se o jogo terminou
        }
        if (palavraAtual === palavraSecreta) {
            alert('Você venceu!');
        }
    }
}
function setupGame() {
    var btnDificuldadeContainer = document.getElementById('dificuldades');
    if (btnDificuldadeContainer) {
        btnDificuldadeContainer.addEventListener('click', function (event) {
            var target = event.target;
            if (target && target.matches('.btn-facil, .btn-normal, .btn-dificil')) {
                iniciarJogo(target.value);
            }
        });
    }
}
setupGame();
