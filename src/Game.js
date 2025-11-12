var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
function escolherPalavra(dificuldade) {
    var palavrasParaForca = {
        facil: [
            { palavra: "GATO", dica: "Um animal de estimação que gosta de miar." },
            { palavra: "MAO", dica: "Parte do corpo usada para segurar objetos." },
            { palavra: "PE", dica: "Usado para caminhar." },
            { palavra: "CASA", dica: "Lugar onde moramos." },
            { palavra: "ARVORE", dica: "Planta grande que cresce na terra." },
            { palavra: "SOL", dica: "Estrela que ilumina o dia." },
            { palavra: "LUA", dica: "Corpo celeste que brilha à noite." },
            { palavra: "CARRO", dica: "Veículo com rodas usado para transporte." },
            { palavra: "BOLA", dica: "Objeto redondo usado em muitos esportes." },
            { palavra: "FLOR", dica: "Planta colorida que cresce no jardim." },
            { palavra: "PATO", dica: "Animal que nada e faz quack." },
            { palavra: "PEIXE", dica: "Animal que vive na água." },
            { palavra: "AZUL", dica: "Cor do céu em um dia claro." },
            { palavra: "VERDE", dica: "Cor das folhas das plantas." },
            { palavra: "AMARELO", dica: "Cor do sol." },
            { palavra: "LIVRO", dica: "Objeto com páginas cheio de histórias." },
            { palavra: "CAMA", dica: "Lugar onde dormimos." },
            { palavra: "MESA", dica: "Móvel usado para comer ou trabalhar." },
            { palavra: "RATO", dica: "Roedor que gosta de queijo." },
            { palavra: "FOGO", dica: "Elemento que produz calor e luz." }
        ],
        normal: [
            { palavra: "ESCOLA", dica: "Lugar onde aprendemos." },
            { palavra: "JANELA", dica: "Abertura na parede para ver o exterior." },
            { palavra: "PONTE", dica: "Estrutura que conecta dois lugares." },
            { palavra: "MONTANHA", dica: "Grande elevação natural da terra." },
            { palavra: "RIVIERA", dica: "Região costeira famosa por suas praias." },
            { palavra: "CIDADE", dica: "Grande área urbana com muitas pessoas." },
            { palavra: "PAISAGEM", dica: "Vista natural de um lugar." },
            { palavra: "VIAGEM", dica: "Ato de ir a um lugar distante." },
            { palavra: "FLORESTA", dica: "Grande área coberta por árvores." },
            { palavra: "DESERTO", dica: "Área seca com pouca vegetação." },
            { palavra: "OCEANO", dica: "Grande corpo de água salgada." },
            { palavra: "CADERNO", dica: "Objeto usado para escrever ou desenhar." },
            { palavra: "TELEFONE", dica: "Dispositivo usado para fazer chamadas." },
            { palavra: "RELÓGIO", dica: "Objeto usado para medir o tempo." },
            { palavra: "COMPUTADOR", dica: "Máquina usada para processar informações." },
            { palavra: "BICICLETA", dica: "Veículo de duas rodas movido a pedal." },
            { palavra: "CHOCOLATE", dica: "Doce feito de cacau." },
            { palavra: "ELEFANTE", dica: "Maior animal terrestre." },
            { palavra: "BANHEIRO", dica: "Lugar para cuidar da higiene pessoal." },
            { palavra: "AEROPORTO", dica: "Lugar onde os aviões pousam e decolam." }
        ],
        dificil: [
            { palavra: "HIPOPOTAMO", dica: "Grande mamífero semi-aquático africano." },
            { palavra: "ORNITORRINCO", dica: "Mamífero que bota ovos e tem bico de pato." },
            { palavra: "PARALELEPIPEDO", dica: "Sólido geométrico com seis faces retangulares." },
            { palavra: "QUIXOTE", dica: "Personagem literário famoso por suas aventuras." },
            { palavra: "ZIGOTO", dica: "Célula resultante da fertilização." },
            { palavra: "XILOFONE", dica: "Instrumento musical de barras sonoras." },
            { palavra: "QUIRÓFANO", dica: "Sala onde são realizadas cirurgias." },
            { palavra: "PSICANÁLISE", dica: "Método terapêutico desenvolvido por Freud." },
            { palavra: "ANTICONSTITUCIONAL", dica: "Algo que é contrário à constituição." },
            { palavra: "METAMORFOSE", dica: "Transformação que alguns animais sofrem." },
            { palavra: "CATASTROFICO", dica: "Algo que causa grande desastre ou dano." },
            { palavra: "HIPOTENUSA", dica: "Lado oposto ao ângulo reto em um triângulo." },
            { palavra: "PSICODÉLICO", dica: "Relacionado a estados alterados da mente." },
            { palavra: "FOTOSSÍNTESE", dica: "Processo pelo qual plantas produzem alimento." },
            { palavra: "ELETROMAGNETISMO", dica: "Ramo da física que estuda forças elétricas e magnéticas." },
            { palavra: "NEUROCIÊNCIA", dica: "Estudo do sistema nervoso." },
            { palavra: "ASTRONOMIA", dica: "Ciência que estuda os corpos celestes." },
            { palavra: "BIODEGRADÁVEL", dica: "Capaz de ser decomposto por organismos vivos." },
            { palavra: "CATALEPSIA", dica: "Estado de imobilidade muscular temporária." },
            { palavra: "DIDÁTICO", dica: "Relacionado ao ensino ou à instrução." }
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
    // Chamar escolherPalavra apenas uma vez para garantir que a dica
    // corresponde exatamente à palavra selecionada.
    var escolha = escolherPalavra(dificuldade);
    var palavra = escolha.palavra;
    var palavraCripto = palavra.split('').map(function () { return '_'; }).join('');
    return {
        palavraForca: palavra.toLowerCase(),
        palavraCripto: palavraCripto,
        dica: escolha.dica
    };
}
function iniciarJogo(dificuldade) {
    return __awaiter(this, void 0, void 0, function () {
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
                    forcaDesenhoCampo.textContent = forcaEstagios[forcaEstagios.length - numVidas - 1];
                    if (numVidas === 0) {
                        alert('Você perdeu!');
                        palavraAtualArray = palavraSecretaArray;
                        forcaCampo.textContent = palavraAtualArray.join('');
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
                var menuVencer = document.getElementById('vencer-content');
                menuVencer.style.display = 'flex';
                confetti({
                    particleCount: 100,
                    spread: 70,
                    origin: { y: 0.6 }
                });
            }
        }
        var palavraContainer, vidasContainer, dificuldadeContainer, dicaContainer, forcaContainer, forcaCampo, vidasCampo, test, palavraSecreta, palavraSecretaArray, palavraDica, palavraAtual, palavraAtualArray, forca, elementoPai, numVidas, vidas, elementoPai2, dificuldadeCampo, dificuldadeTexto, elementoPaiDificuldade, dicaCampo, dicaTexto, dica, forcaEstagios, e_1, forcaDesenhoCampo, forcaDesenho, elementoPaiForcaDesenho, botoesNodeList, botoes;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    palavraContainer = document.getElementById('palavra');
                    if (palavraContainer)
                        palavraContainer.innerHTML = '';
                    vidasContainer = document.getElementById('vidas');
                    if (vidasContainer) {
                        // Remover apenas os elementos <p> que o script adiciona (p.ex. o contador de vidas),
                        // preservando imagens/ícones estáticos que existem no HTML.
                        Array.from(vidasContainer.querySelectorAll('p')).forEach(function (el) { return el.remove(); });
                    }
                    dificuldadeContainer = document.getElementById('usuarioDificuldade');
                    if (dificuldadeContainer)
                        dificuldadeContainer.innerHTML = '';
                    dicaContainer = document.getElementById('dica-palavra');
                    if (dicaContainer) {
                        // Remover apenas parágrafos adicionados em jogos anteriores para evitar duplicação da dica
                        Array.from(dicaContainer.querySelectorAll('p')).forEach(function (el) { return el.remove(); });
                    }
                    forcaContainer = document.getElementById('forca');
                    if (forcaContainer)
                        forcaContainer.innerHTML = '';
                    forcaCampo = document.createElement('p');
                    vidasCampo = document.createElement('p');
                    test = obterPalavraCriptografada(dificuldade);
                    palavraSecreta = test.palavraForca;
                    palavraSecretaArray = palavraSecreta.split('');
                    palavraDica = test.dica;
                    palavraAtual = test.palavraCripto;
                    palavraAtualArray = palavraAtual.split('');
                    forca = document.createTextNode(palavraAtual);
                    forcaCampo.appendChild(forca);
                    elementoPai = document.getElementById('palavra');
                    elementoPai === null || elementoPai === void 0 ? void 0 : elementoPai.appendChild(forcaCampo);
                    numVidas = 0;
                    if (dificuldade === 'facil') {
                        numVidas = 6;
                    }
                    else if (dificuldade === 'normal') {
                        numVidas = 4;
                    }
                    else if (dificuldade === 'dificil') {
                        numVidas = 3;
                    }
                    vidas = document.createTextNode('VIDAS: ' + numVidas);
                    vidasCampo.appendChild(vidas);
                    elementoPai2 = document.getElementById('vidas');
                    elementoPai2 === null || elementoPai2 === void 0 ? void 0 : elementoPai2.appendChild(vidasCampo);
                    dificuldadeCampo = document.createElement('p');
                    dificuldadeTexto = document.createTextNode('DIFICULDADE: ' + dificuldade.toUpperCase());
                    dificuldadeCampo.appendChild(dificuldadeTexto);
                    elementoPaiDificuldade = document.getElementById('usuarioDificuldade');
                    elementoPaiDificuldade === null || elementoPaiDificuldade === void 0 ? void 0 : elementoPaiDificuldade.appendChild(dificuldadeCampo);
                    dicaCampo = document.createElement('p');
                    dicaTexto = document.createTextNode('DICA: ' + palavraDica);
                    dicaCampo.appendChild(dicaTexto);
                    dica = document.getElementById('dica-palavra');
                    dica === null || dica === void 0 ? void 0 : dica.appendChild(dicaCampo);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 2, , 4]);
                    // Para o ambiente Electron (que entende require)
                    forcaEstagios = require('../public/assets/forca.json');
                    return [3 /*break*/, 4];
                case 2:
                    e_1 = _a.sent();
                    return [4 /*yield*/, fetch('../public/assets/forca.json').then(function (res) { return res.json(); })];
                case 3:
                    // Para o ambiente do navegador
                    forcaEstagios = _a.sent();
                    return [3 /*break*/, 4];
                case 4:
                    forcaDesenhoCampo = document.createElement('pre');
                    forcaDesenho = document.createTextNode(forcaEstagios[0]);
                    forcaDesenhoCampo.appendChild(forcaDesenho);
                    elementoPaiForcaDesenho = document.getElementById('forca');
                    elementoPaiForcaDesenho === null || elementoPaiForcaDesenho === void 0 ? void 0 : elementoPaiForcaDesenho.appendChild(forcaDesenhoCampo);
                    botoesNodeList = document.querySelectorAll('.btn-alfabeto');
                    botoesNodeList.forEach(function (btn) {
                        var _a;
                        var btnEl = btn;
                        var novo = btnEl.cloneNode(true);
                        // replace removes previous listeners and attributes
                        (_a = btnEl.parentNode) === null || _a === void 0 ? void 0 : _a.replaceChild(novo, btnEl);
                    });
                    botoes = document.querySelectorAll('.btn-alfabeto');
                    botoes.forEach(function (botao) {
                        var elementoBtn = botao;
                        // reset classes
                        elementoBtn.classList.remove('facil', 'normal', 'dificil', 'desativar-hover');
                        elementoBtn.removeAttribute('disabled');
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
                    return [2 /*return*/];
            }
        });
    });
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
function sairApp() {
    var btnSair = document.getElementById('btn-sair');
    btnSair === null || btnSair === void 0 ? void 0 : btnSair.addEventListener('click', function () {
        window.close();
        console.log('Aplicação encerrada pelo usuário.');
    });
}
document.addEventListener('DOMContentLoaded', function () {
    setupGame();
    sairApp();
});
