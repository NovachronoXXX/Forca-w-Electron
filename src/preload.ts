import { contextBridge, ipcRenderer } from 'electron';
import { IMyAPI } from './preload-types';

// Expõe um objeto 'myAPI' no objeto 'window' do seu frontend.
const myAPI: IMyAPI = {
    // Cria uma função 'getVersion' que o frontend pode chamar.
    getVersion: () => ipcRenderer.invoke('get-app-version'),
    sairApp: () => ipcRenderer.invoke('sair-app')
};

console.log('Expondo myAPI no contextBridge...');
contextBridge.exposeInMainWorld('myAPI', myAPI);