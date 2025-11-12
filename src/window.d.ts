import type { IMyAPI } from './preload-types';

// Adiciona a interface personalizada ao objeto Window
declare global {
  interface Window { myAPI: IMyAPI; }
}