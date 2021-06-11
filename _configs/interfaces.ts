export interface IDatabaseConfigs {
    inuse?: 'postgres' | 'mongodb';
    constr: string;
}
