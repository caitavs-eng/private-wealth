import { AppData, WealthEntity } from '../lib/types';
const now = new Date().toISOString();
const id = () => crypto.randomUUID();
export const seedEntities: WealthEntity[] = [
 { id: id(), kind: 'account', title: 'Caixa disponível', amount: 503.82, category: 'Caixa', createdAt: now, updatedAt: now, notes: 'Editável diretamente.' },
 { id: id(), kind: 'income', title: 'Estágio', amount: 1100, category: 'Receitas', frequency: 'Mensal', createdAt: now, updatedAt: now },
 { id: id(), kind: 'income', title: 'Mesada semanal', amount: 300, category: 'Receitas', frequency: 'Semanal', createdAt: now, updatedAt: now },
 { id: id(), kind: 'investment', title: 'Investimentos atuais', amount: 3479.14, category: 'Investimentos', institution: 'Carteira inicial', liquidity: 'Editável', nextContribution: 300, expectedReturn: 0, createdAt: now, updatedAt: now },
 { id: id(), kind: 'card', title: 'PicPay', amount: 0, category: 'Cartões', limit: 600, used: 0, dueDay: 1, closingDay: 24, installments: [], createdAt: now, updatedAt: now },
 { id: id(), kind: 'card', title: 'Bradesco', amount: 0, category: 'Cartões', limit: 600, used: 0, dueDay: 1, closingDay: 24, installments: [], createdAt: now, updatedAt: now },
 { id: id(), kind: 'obligation', title: 'Advogada', amount: 500, category: 'Honorários', priority: 'Alta', frequency: 'Mês sim, mês não', dueDay: 5, reserve: 5000, createdAt: now, updatedAt: now, notes: 'Obrigação jurídico-financeira inicial.' },
 { id: id(), kind: 'goal', title: 'Quitar dívida jurídica', amount: 5000, category: 'Metas', target: 5000, current: 0, priority: 'Alta', createdAt: now, updatedAt: now },
 { id: id(), kind: 'goal', title: 'Meta FIRE', amount: 1000000, category: 'FIRE', target: 1000000, current: 3479.14, createdAt: now, updatedAt: now }
];
export const seedData: AppData = { version: '2.1.0', settings: { dailyLimit: 76.67, weeklyLimit: 575, monthlyBudget: 2300, fireTarget: 1000000, currency: 'BRL', userName: 'Italo' }, entities: seedEntities, timeline: [], history: [], snapshots: [] };
