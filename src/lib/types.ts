export type EntityKind = 'income' | 'expense' | 'card' | 'investment' | 'obligation' | 'goal' | 'account' | 'category';
export type Priority = 'Crítica' | 'Alta' | 'Média' | 'Baixa';
export type Frequency = 'Única' | 'Diária' | 'Semanal' | 'Quinzenal' | 'Mensal' | 'Bimestral' | 'Trimestral' | 'Semestral' | 'Anual' | 'Mês sim, mês não';

export interface BaseEntity { id: string; kind: EntityKind; title: string; amount: number; category?: string; date?: string; notes?: string; createdAt: string; updatedAt: string; priority?: Priority; frequency?: Frequency; }
export interface CardEntity extends BaseEntity { kind: 'card'; limit: number; used: number; dueDay: number; closingDay: number; installments: BaseEntity[]; }
export interface InvestmentEntity extends BaseEntity { kind: 'investment'; institution?: string; liquidity?: string; expectedReturn?: number; nextContribution?: number; }
export interface GoalEntity extends BaseEntity { kind: 'goal'; target: number; current: number; deadline?: string; }
export interface ObligationEntity extends BaseEntity { kind: 'obligation'; dueDay?: number; reserve?: number; }
export type WealthEntity = BaseEntity | CardEntity | InvestmentEntity | GoalEntity | ObligationEntity;

export interface Settings { dailyLimit: number; weeklyLimit: number; monthlyBudget: number; fireTarget: number; currency: 'BRL'; userName: string; }
export interface Snapshot { id: string; label: string; createdAt: string; checksum: string; data: AppData; }
export interface AppData { version: string; settings: Settings; entities: WealthEntity[]; timeline: WealthEntity[]; history: { id: string; at: string; action: string; before?: unknown; after?: unknown }[]; snapshots: Snapshot[]; }
