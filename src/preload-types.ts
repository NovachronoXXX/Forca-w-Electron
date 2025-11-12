export interface IMyAPI {
    getVersion: () => Promise<string>;
    sairApp: () => Promise<any>;
}