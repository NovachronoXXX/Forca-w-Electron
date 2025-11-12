// Declarar confetti como função global (vem da biblioteca canvas-confetti via CDN)
declare function confetti(options?: any): void;

interface PalavrasComDica {
  palavra: string;
  dica: string;
}

function escolherPalavra(dificuldade: string) {
    const palavrasParaForca: Record<'facil' | 'normal' | 'dificil', PalavrasComDica[]>= {
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
        const palavras = palavrasParaForca.facil;
        const indiceAleatorio = Math.floor(Math.random() * palavras.length);
        return palavras[indiceAleatorio];

    } else if (dificuldade === 'normal') {
        const palavras = palavrasParaForca.normal;
        const indiceAleatorio = Math.floor(Math.random() * palavras.length);
        return palavras[indiceAleatorio];
    } else if (dificuldade === 'dificil') {
        const palavras = palavrasParaForca.dificil;
        const indiceAleatorio = Math.floor(Math.random() * palavras.length);
        return palavras[indiceAleatorio];
    }

}

interface Resultado {
    palavraForca: string,
    palavraCripto: string,
    dica: string
}

function obterPalavraCriptografada(dificuldade: string): Resultado  {
    // Chamar escolherPalavra apenas uma vez para garantir que a dica
    // corresponde exatamente à palavra selecionada.
    const escolha = escolherPalavra(dificuldade)!;
    const palavra: string = escolha.palavra;

    const palavraCripto: string = palavra.split('').map(() => '_').join('');

    return {
        palavraForca: palavra.toLowerCase(),
        palavraCripto: palavraCripto,
        dica: escolha.dica
    };
}

async function iniciarJogo(dificuldade: string) {
    // Reset previous game UI to avoid duplicating elements and event listeners
    const palavraContainer = document.getElementById('palavra');
    if (palavraContainer) palavraContainer.innerHTML = '';
    const vidasContainer = document.getElementById('vidas');
    if (vidasContainer) {
        // Remover apenas os elementos <p> que o script adiciona (p.ex. o contador de vidas),
        // preservando imagens/ícones estáticos que existem no HTML.
        Array.from(vidasContainer.querySelectorAll('p')).forEach(el => el.remove());
    }
    const dificuldadeContainer = document.getElementById('usuarioDificuldade');
    if (dificuldadeContainer) dificuldadeContainer.innerHTML = '';
    const dicaContainer = document.getElementById('dica-palavra');
    if (dicaContainer) {
        // Remover apenas parágrafos adicionados em jogos anteriores para evitar duplicação da dica
        Array.from(dicaContainer.querySelectorAll('p')).forEach(el => el.remove());
    }
    const forcaContainer = document.getElementById('forca');
    if (forcaContainer) forcaContainer.innerHTML = '';

    const forcaCampo = document.createElement('p');
    const vidasCampo = document.createElement('p');
    const test = obterPalavraCriptografada(dificuldade);
    const palavraSecreta: string = test.palavraForca;
    const palavraSecretaArray: string[] = palavraSecreta.split('');
    const palavraDica: string = test.dica;
    let palavraAtual: string = test.palavraCripto;
    let palavraAtualArray: string[] = palavraAtual.split('');

    //Criar campo da forca no HTML
    const forca = document.createTextNode(palavraAtual);
    forcaCampo.appendChild(forca);
    const elementoPai = document.getElementById('palavra');
    elementoPai?.appendChild(forcaCampo);

    //Criar campo das vidas
    let numVidas: number = 0;
    
    if(dificuldade === 'facil') {
        numVidas = 6;
    } else if (dificuldade === 'normal') {
        numVidas = 4;
    } else if (dificuldade === 'dificil') {
        numVidas = 3;
    }

    const vidas = document.createTextNode('VIDAS: ' + numVidas);
    vidasCampo.appendChild(vidas);
    const elementoPai2 = document.getElementById('vidas');
    elementoPai2?.appendChild(vidasCampo);

    //Criar campo da dificuldade
    const dificuldadeCampo = document.createElement('p');
    const dificuldadeTexto = document.createTextNode('DIFICULDADE: ' + dificuldade.toUpperCase());
    dificuldadeCampo.appendChild(dificuldadeTexto);
    const elementoPaiDificuldade = document.getElementById('usuarioDificuldade');
    elementoPaiDificuldade?.appendChild(dificuldadeCampo);

    //Criar campo da dica
    const dicaCampo = document.createElement('p');
    const dicaTexto = document.createTextNode('DICA: ' + palavraDica);
    dicaCampo.appendChild(dicaTexto);
    const dica = document.getElementById('dica-palavra');
    dica?.appendChild(dicaCampo);

    //Cria campo da forca (desenho)
    let forcaEstagios: string[];
    try {
        // Para o ambiente Electron (que entende require)
        forcaEstagios = require('../public/assets/forca.json');
    } catch (e) {
        // Para o ambiente do navegador
        forcaEstagios = await fetch('../public/assets/forca.json').then(res => res.json());
    }
    const forcaDesenhoCampo = document.createElement('pre');
    const forcaDesenho = document.createTextNode(forcaEstagios[0]);
    forcaDesenhoCampo.appendChild(forcaDesenho);
    const elementoPaiForcaDesenho = document.getElementById('forca');
    elementoPaiForcaDesenho?.appendChild(forcaDesenhoCampo);

    // Lógica do clique no botão
    // Remove event listeners and state from previous runs by cloning the buttons
    const botoesNodeList = document.querySelectorAll('.btn-alfabeto');
    botoesNodeList.forEach((btn) => {
        const btnEl = btn as HTMLButtonElement;
        const novo = btnEl.cloneNode(true) as HTMLButtonElement;
        // replace removes previous listeners and attributes
        btnEl.parentNode?.replaceChild(novo, btnEl);
    });

    // Re-select buttons after clone
    const botoes = document.querySelectorAll('.btn-alfabeto');
    botoes.forEach((botao: Element) => {
        const elementoBtn = botao as HTMLElement;

        // reset classes
        elementoBtn.classList.remove('facil', 'normal', 'dificil', 'desativar-hover');
        elementoBtn.removeAttribute('disabled');

        if(dificuldade === 'facil') {
            elementoBtn.classList.add('facil');
        } else if (dificuldade === 'normal'){
            elementoBtn.classList.add('normal');
        } else if (dificuldade === 'dificil') {
            elementoBtn.classList.add('dificil');
        }
    });

    botoes.forEach(botao => {
        botao.addEventListener('click', manipularClique as EventListener);
    });

    function manipularClique(event: MouseEvent): void {
        const target = event.target;
        if (target instanceof HTMLButtonElement) {
            const letraMinuscula: string = target.value.toLowerCase();

            // Verifica se a letra está na palavra secreta
            let acertou = false;
            for (let i = 0; i < palavraSecretaArray.length; i++) {
                if (palavraSecretaArray[i] === letraMinuscula) {
                    palavraAtualArray[i] = letraMinuscula;
                    acertou = true;
                }
            }

            if(acertou === false) {
                numVidas--;
                vidasCampo.textContent = 'VIDAS: ' + numVidas;
                forcaDesenhoCampo.textContent = forcaEstagios[forcaEstagios.length - numVidas - 1];
                if(numVidas === 0) {
                    alert('Você perdeu!');
                    palavraAtualArray = palavraSecretaArray
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
                const menuVencer = document.getElementById('vencer-content')!;
                const vencerOverlay = document.getElementById('vencer-overlay')!;
                menuVencer.style.display = 'flex';
                vencerOverlay.style.display = 'block';
                confetti({
                    particleCount: 100,
                    spread: 70,
                    origin: { y: 0.6 }
                });
            }
    }
}

function setupGame() {
    const btnDificuldadeContainer = document.getElementById('dificuldades');
    if (btnDificuldadeContainer) {
        btnDificuldadeContainer.addEventListener('click', (event: Event) => {
            const target = event.target as HTMLButtonElement;
            if (target && target.matches('.btn-facil, .btn-normal, .btn-dificil')) {
                iniciarJogo(target.value);
            }
        });
    }
}

function sairApp() {
    const btnSair = document.getElementById('btn-sair');
    btnSair?.addEventListener('click', () => {
        window.close();
        console.log('Aplicação encerrada pelo usuário.');
    });
}

document.addEventListener('DOMContentLoaded', () => {
    setupGame();
    sairApp();
});