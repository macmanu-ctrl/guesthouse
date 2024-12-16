import { DB } from '@vlcn.io/crsqlite-wasm';

export interface DatabaseConfig {
  name: string;
  version: number;
}

export const config: DatabaseConfig = {
  name: 'guesthouse.db',
  version: 1
};