import { AppData, WealthEntity } from './types';
import { seedData } from '../data/seed';
const KEY = 'private-wealth-2.1';
export const brl = (v: number) => v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
export const checksum = (payload: unknown) => { const s = JSON.stringify(payload); let h = 0; for (let i=0;i<s.length;i++) h = Math.imul(31,h)+s.charCodeAt(i)|0; return `PW-${Math.abs(h)}`; };
export const loadData = (): AppData => { try { const raw = localStorage.getItem(KEY); if (!raw) return seedData; const parsed = JSON.parse(raw); return { ...seedData, ...parsed, version: parsed.version || '2.1.0' }; } catch { return seedData; } };
export const saveData = (data: AppData) => localStorage.setItem(KEY, JSON.stringify(data));
export const exportBackup = (data: AppData) => {
 const backup = { exportedAt: new Date().toISOString(), checksum: checksum(data), data };
 const blob = new Blob([JSON.stringify(backup, null, 2)], { type: 'application/json' });
 const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = `private-wealth-backup-${new Date().toISOString().slice(0,10)}.json`; a.click(); URL.revokeObjectURL(a.href);
};
export const createSnapshot = (data: AppData, label = 'Snapshot manual'): AppData => ({ ...data, snapshots: [{ id: crypto.randomUUID(), label, createdAt: new Date().toISOString(), checksum: checksum(data), data: { ...data, snapshots: [] } }, ...data.snapshots].slice(0,20) });
export const upsertEntity = (data: AppData, entity: WealthEntity): AppData => {
 const exists = data.entities.some(e => e.id === entity.id);
 const next = exists ? data.entities.map(e => e.id === entity.id ? { ...entity, updatedAt: new Date().toISOString() } : e) : [{ ...entity, id: crypto.randomUUID(), createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() }, ...data.entities];
 return { ...data, entities: next, history: [{ id: crypto.randomUUID(), at: new Date().toISOString(), action: exists ? `Editou ${entity.title}` : `Criou ${entity.title}`, after: entity }, ...data.history].slice(0,100) };
};
export const deleteEntity = (data: AppData, id: string): AppData => ({ ...data, entities: data.entities.filter(e => e.id !== id), history: [{ id: crypto.randomUUID(), at: new Date().toISOString(), action: 'Moveu item para lixeira' }, ...data.history].slice(0,100) });
