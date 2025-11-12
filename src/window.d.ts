import type { IMyAPI } from './preload-types';

declare global {
  interface Window { myAPI: IMyAPI; }
}