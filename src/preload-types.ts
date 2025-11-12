// Exporta a interface do API personalizada para o preload
export interface IMyAPI {
    getVersion: () => Promise<string>;
    sairApp: () => Promise<any>;
}