interface PalavrasPorDificuldade {
  facil: string[];
  normal: string[];
  dificil: string[];
}

function escolherPalavra(dificuldade: string) {
    const palavrasParaForca: PalavrasPorDificuldade = {
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
    palavraCripto: string
}

function obterPalavraCriptografada(dificuldade: string): Resultado  {
    const palavra: string = escolherPalavra(dificuldade) as string;
    
    const palavraCripto: string = palavra.split('').map(() => '_').join('');

    return {
        palavraForca: palavra.toLowerCase(),
        palavraCripto: palavraCripto
    };
}

function iniciarJogo(dificuldade: string) {
    const forcaCampo = document.createElement('p');
    const vidasCampo = document.createElement('p');
    const test = obterPalavraCriptografada(dificuldade);
    const palavraSecreta: string = test.palavraForca;
    const palavraSecretaArray: string[] = palavraSecreta.split('');
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
        numVidas = 8;
    } else if (dificuldade === 'normal') {
        numVidas = 6;
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

    // Lógica do clique no botão
    const botoes = document.querySelectorAll('.btn-alfabeto');
    botoes.forEach((botao: Element) => {
        const elementoBtn = botao as HTMLElement;

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
                if(numVidas === 0) {
                    alert('Você perdeu!');
                    palavraAtualArray = palavraSecretaArray
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

setupGame();