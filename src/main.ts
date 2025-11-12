import { app, BrowserWindow, ipcMain } from 'electron';
import path from 'path'
import fs from 'fs';

// Instrumentação de inicialização simples para monitorar o uso de memória e eventos de carregamento
// Logs são armazenados em 'startup.log' no diretório de dados do usuário da aplicação
// Formato do log: timestamp | evento | rss=XXXKB heapUsed=XXXKB
const startupLogPath = path.join(app.getPath('userData'), 'startup.log');
function logStartup(event: string) {
    try {
        const now = new Date().toISOString();
        const mem = process.memoryUsage();
        const entry = `${now} | ${event} | rss=${Math.round(mem.rss/1024)}KB heapUsed=${Math.round(mem.heapUsed/1024)}KB\n`;
        fs.appendFileSync(startupLogPath, entry, { encoding: 'utf8' });
    } catch (e) {
        // Se falhar ao escrever o log, apenas ignore para evitar interrupções
        console.warn('Failed to write startup log', e);
    }
}

// Registro do início do processo
logStartup('process-start');

let win: BrowserWindow | null = null;

async function createWindow(): Promise<void> {
    logStartup('createWindow-start');
    win = new BrowserWindow ({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            contextIsolation: true,
        },
    });

    // Quando o conteúdo estiver totalmente carregado
    // Registra o evento de carregamento completo
    win.webContents.on('did-finish-load', () => {
        logStartup('did-finish-load');
    });

    // Carrega o arquivo HTML principal
    logStartup('loadFile-start');
    await win.loadFile('public/index.html');
    logStartup('loadFile-end');

    // Define a janela para tela cheia
    win.setFullScreen(true)

    // Limpa a referência da janela quando fechada
    win.on('closed', () => {
        win = null;
    });
}

// Manipulador IPC para sair da aplicação
ipcMain.handle('sair-app', () => {
    app.quit();
});

// Manipulador IPC para obter a versão do aplicativo
app.on('ready', () => {
    logStartup('app-ready');
    createWindow();
});


app.on('window-all-closed', () => {
    // No macOS é comum para aplicativos e sua barra de menu 
    // permanecerem ativos até que o usuário saia explicitamente com Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

// Recria uma janela no aplicativo quando o ícone da dock é clicado e não há outras janelas abertas (macOS)
app.on('activate', () => {
    if (win === null) {
        createWindow();
    }
})