import { app, BrowserWindow, ipcMain } from 'electron';
import path from 'path'
import fs from 'fs';

// Simple startup instrumentation: append timestamped events to a startup log
// located in the app's user data directory. This helps diagnose slow startup
// by showing timestamps for key lifecycle events.
const startupLogPath = path.join(app.getPath('userData'), 'startup.log');
function logStartup(event: string) {
    try {
        const now = new Date().toISOString();
        const mem = process.memoryUsage();
        const entry = `${now} | ${event} | rss=${Math.round(mem.rss/1024)}KB heapUsed=${Math.round(mem.heapUsed/1024)}KB\n`;
        fs.appendFileSync(startupLogPath, entry, { encoding: 'utf8' });
    } catch (e) {
        // Never crash app because of logging errors
        // eslint-disable-next-line no-console
        console.warn('Failed to write startup log', e);
    }
}

// Log process start as early as possible.
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

    // When the window finishes loading the file in the renderer, log it.
    win.webContents.on('did-finish-load', () => {
        logStartup('did-finish-load');
    });

    // Load the UI HTML
    logStartup('loadFile-start');
    await win.loadFile('public/index.html');
    logStartup('loadFile-end');

    win.setFullScreen(true)

    win.on('closed', () => {
        win = null;
    });
}

ipcMain.handle('sair-app', () => {
    app.quit();
});

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

app.on('activate', () => {
    if (win === null) {
        createWindow();
    }
})