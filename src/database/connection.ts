import { DB, createDB } from '@vlcn.io/crsqlite-wasm';
import { config } from './config';

let db: DB | null = null;

export const getConnection = async (): Promise<DB> => {
  if (db) return db;
  
  db = await createDB({
    dbName: config.name,
    wasmSource: '/node_modules/@vlcn.io/crsqlite-wasm/dist/crsqlite.wasm'
  });
  
  return db;
};