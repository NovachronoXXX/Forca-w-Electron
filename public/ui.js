document.addEventListener('DOMContentLoaded', function () {
    // Obtém os elementos necessários do DOM
    const musicaFundo = document.getElementById('musica-fundo');
    const audioHover = document.getElementById('audio-hover');
    const imgMusica = document.getElementById('img-musica');
    // suportar múltiplos ids/seletores (robustez caso o HTML mude)
    const imgEfeito = document.getElementById('img-efeito') || document.getElementById('img-efeito-som') || document.querySelector('.img-efeito');
    const telaIniciar = document.getElementById('tela-iniciar');
    const telaDificuldade = document.getElementById('jogo-dificuldade');
    const telaJogo = document.getElementById('jogo-forca');
    const btnIniciar = document.getElementById('btn-iniciar-game');
    const containerDificuldades = document.getElementById('dificuldades');
    const btnMenu = document.getElementById('btn-menu');

    // Inicializa a tela de início
    telaDificuldade.style.display = 'none';
    btnMenu.style.display = 'none';

    // Tenta tocar a música de fundo, se falhar (autoplay bloqueado), espera por um clique do usuário
    musicaFundo.play().catch(() => {
        document.body.addEventListener('click', () => musicaFundo.play(), { once: true });
    });

    // Função para mutar/desmutar música de fundo
    function toggleMusica() {
        const musicaAtivaSrc = "./assets/musica.png";
        const musicaInativaSrc = "./assets/mutar-musica.png";

        musicaFundo.muted = !musicaFundo.muted;

        if (musicaFundo.paused || musicaFundo.muted) {
            imgMusica.src = musicaInativaSrc;
            imgMusica.title = "Ativar música";
        } else {
            imgMusica.src = musicaAtivaSrc;
            imgMusica.title = "Mutar música";
        }

        // Sync the menu slider and menu icon (if present) so toggling from the
        // initial screen reflects in the options UI.
        const menuSlider = document.getElementById('volume-musica');
        const imgMusicaMenu = document.getElementById('img-musica-opcoes');
        if (menuSlider) {
            if (musicaFundo.muted || musicaFundo.volume === 0) {
                menuSlider.value = '0';
            } else {
                // keep slider in the same numeric range (0..1)
                menuSlider.value = String(musicaFundo.volume || 1);
            }
        }
        if (imgMusicaMenu) {
            imgMusicaMenu.src = (musicaFundo.muted || musicaFundo.volume === 0) ? musicaInativaSrc : musicaAtivaSrc;
        }
    }

    // Função para mutar/desmutar efeitos sonoros
    function toggleEfeitos() {
        const efeitoAtivoSrc = "./assets/efeito.png";
        const efeitoInativoSrc = "./assets/mutar-efeito.png";

        audioHover.muted = !audioHover.muted;

        if (audioHover.muted) {
            if (imgEfeito) {
                imgEfeito.src = efeitoInativoSrc;
                imgEfeito.title = "Ativar efeitos";
            }
        } else {
            if (imgEfeito) {
                imgEfeito.src = efeitoAtivoSrc;
                imgEfeito.title = "Mutar efeitos";
            }
        }

        // Sync menu slider and menu icon for effects
        const menuSliderE = document.getElementById('volume-efeito');
        const imgEfeitoMenu = document.getElementById('img-efeito-opcoes');
        if (menuSliderE) {
            if (audioHover.muted || audioHover.volume === 0) {
                menuSliderE.value = '0';
            } else {
                menuSliderE.value = String(audioHover.volume || 0.5);
            }
        }
        if (imgEfeitoMenu) {
            imgEfeitoMenu.src = (audioHover.muted || audioHover.volume === 0) ? efeitoInativoSrc : efeitoAtivoSrc;
        }
    }

    // Função para mostrar a tela de seleção de dificuldade
    function mostrarTelaDificuldade() {
        telaIniciar.style.display = 'none';
        telaDificuldade.style.display = 'flex';
        telaJogo.style.display = 'none';
        btnMenu.style.display = 'none';
    }

    // Adiciona o evento de clique ao botão principal
    document.getElementById("abrirMenu").addEventListener("click", abrirMenu);

    // Opcional: Fechar o menu ao apertar a tecla ESC
    document.addEventListener('keydown', function (event) {
        if (event.key === "Escape" && document.getElementById("menuOverlay").style.display === "flex") {
            fecharMenu();
        }
    });

    // Adiciona o evento de clique ao botão "Opções" dentro do menu
    document.getElementById("menuOpcoes").addEventListener("click", abrirMenuOpcoes);

    // Função para iniciar um novo jogo a partir do menu
    function novoJogo() {
        fecharMenu();
        mostrarTelaDificuldade();
    }

    // Função para sair do menu e voltar ao início
    function menuSair() {
        fecharMenu();
        telaIniciar.style.display = 'flex';
        telaDificuldade.style.display = 'none';
        telaJogo.style.display = 'none';
        btnMenu.style.display = 'none';
    }

    // Função para voltar do menu de opções para o menu principal
    function voltarMenu() {
        const menuOpcoes = document.getElementById("menu-opcoes");
        if (menuOpcoes.style.display === "flex") {
            menuOpcoes.style.display = "none";
            document.getElementById("menuOverlay").style.display = "flex";
        }
    }

    // Função para iniciar o jogo com a dificuldade selecionada
    function iniciarJogoComDificuldade(event) {
        if (event.target instanceof HTMLButtonElement && event.target.closest('.dificuldades')) {
            const dificuldade = event.target.value;
            if (!dificuldade) return;

            if (dificuldade === 'facil') {
                telaJogo.style.backgroundImage = 'url("./assets/facil.png")';
            } else if (dificuldade === 'normal') {
                telaJogo.style.backgroundImage = 'url("./assets/normal.png")';
            } else if (dificuldade === 'dificil') {
                telaJogo.style.backgroundImage = 'url("./assets/dificil.png")';
            }
            telaJogo.style.backgroundSize = 'cover';
            telaJogo.style.backgroundPosition = 'center';
            telaJogo.style.backgroundRepeat = 'no-repeat';

            telaDificuldade.style.display = 'none';
            telaJogo.style.display = 'flex';
            btnMenu.style.display = 'flex';
            btnMenu.classList.add('visible');
        }
    }

    // Função para ajustar o volume da música
    function ajustarMusica() {
        const volumeSlider = document.getElementById("volume-musica");
        if (!volumeSlider) return;

        // O range vai de 0 a 1 com step 0.01, não 0 a 100
        const volume = parseFloat(volumeSlider.value);
        musicaFundo.volume = volume;
        console.log("Volume da música ajustado para:", musicaFundo.volume);

        // Se estava mutado e o usuário ajustou o slider, desmutar
        if (musicaFundo.muted && volume > 0) {
            musicaFundo.muted = false;
        }
        // Se o volume é 0, mutar
        if (volume === 0) {
            musicaFundo.muted = true;
        }

        // Atualiza o ícone no menu de opções
        if (musicaFundo.volume === 0 || musicaFundo.muted) {
            const imgMusicaMenu = document.getElementById('img-musica-opcoes');
            imgMusicaMenu.src = "./assets/mutar-musica.png";
            volumeSlider.value = "0";
        } else {
            const imgMusicaMenu = document.getElementById('img-musica-opcoes');
            imgMusicaMenu.src = "./assets/musica.png";
        }
    }

    // Função para ajustar o volume dos efeitos
    function ajustarEfeitos() {
        const volumeSlider = document.getElementById("volume-efeito");
        if (!volumeSlider) return;

        const volume = parseFloat(volumeSlider.value);
        audioHover.volume = volume;

        // Se estava mutado e o usuário ajustou o slider, desmutar
        if (audioHover.muted && volume > 0) {
            audioHover.muted = false;
        }
        // Se o volume é 0, mutar
        if (volume === 0) {
            audioHover.muted = true;
        }

        if (audioHover.volume === 0 || audioHover.muted) {
            const imgEfeitoMenu = document.getElementById('img-efeito-opcoes');
            imgEfeitoMenu.src = "./assets/mutar-efeito.png";
            volumeSlider.value = "0";
        } else {
            const imgEfeitoMenu = document.getElementById('img-efeito-opcoes');
            imgEfeitoMenu.src = "./assets/efeito.png";
        }
    }

    // --- Event Listeners ---

    // Adiciona eventos de clique aos botões de controle de som
    document.querySelector('.btn-musica')?.addEventListener('click', toggleMusica);
    document.querySelector('.btn-efeito')?.addEventListener('click', toggleEfeitos);

    // Adiciona evento de clique ao botão "INICIAR"
    btnIniciar?.addEventListener('click', mostrarTelaDificuldade);

    // Adiciona evento de clique ao botão "Novo Jogo" dentro do modal de vitória
    document.getElementById('btn-novo-jogo-vencer')?.addEventListener('click', () => {
        const vencerContent = document.getElementById('vencer-content');
        const vencerOverlay = document.getElementById('vencer-overlay');
        if (vencerContent) vencerContent.style.display = 'none';
        if (vencerOverlay) vencerOverlay.style.display = 'none';
        musicaFundo.play().catch(() => { });
        mostrarTelaDificuldade();
    });

    // Adiciona evento de clique ao botão "Novo Jogo" dentro do modal de derrota
    document.getElementById('btn-novo-jogo-perder')?.addEventListener('click', () => {
        const perderContent = document.getElementById('perder-content');
        const perderOverlay = document.getElementById('perder-overlay');
        if (perderContent) perderContent.style.display = 'none';
        if (perderOverlay) perderOverlay.style.display = 'none';
        musicaFundo.play().catch(() => { });
        mostrarTelaDificuldade();
    });

    //Adiciona evento de clique aos botões no menu
    document.getElementById('novoJogo')?.addEventListener('click', novoJogo);
    document.getElementById('sairMenu')?.addEventListener('click', menuSair);
    document.getElementById('btn-voltar-opcoes')?.addEventListener('click', voltarMenu);

    //Ajusta volume da música ao mudar o slider
    document.getElementById("volume-musica")?.addEventListener('input', ajustarMusica);

    //Ajusta volume de efeitos ao mudar o slider
    document.getElementById("volume-efeito")?.addEventListener('input', ajustarEfeitos);

    // Usa delegação de eventos para os botões de dificuldade
    containerDificuldades?.addEventListener('click', iniciarJogoComDificuldade);

    //Adiciona evento de clique ao botão de voltar na tela de dificuldade
    document.getElementById('voltar-inicio')?.addEventListener('click', function () {
        telaDificuldade.style.display = 'none';
        telaIniciar.style.display = 'flex';
    });

    // Adiciona o som de hover a todos os botões relevantes de uma só vez
    const botoesComSom = document.querySelectorAll('button');
    botoesComSom.forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            if (!audioHover.muted) {
                audioHover.currentTime = 0;
                audioHover.play().catch(() => { });
            }
        });
        btn.addEventListener('mouseleave', () => {
            audioHover.pause();
        });
    });
});

// Funções globais para o menu (necessário para usar com onclick no HTML)
function abrirMenu() {
    document.getElementById("menuOverlay").style.display = "flex";
}

// Abre a seção de opções dentro do menu
function abrirMenuOpcoes() {
    document.getElementById("menu-opcoes").style.display = "flex";
    document.getElementById("menuOverlay").style.display = "none";
}

// Funções globais para fechar o menu (necessário para usar com onclick no HTML)
function fecharMenu() {
    document.getElementById("menuOverlay").style.display = "none";
    document.getElementById("menu-opcoes").style.display = "none";
}