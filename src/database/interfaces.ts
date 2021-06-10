import { EventEmitter } from 'events';

export interface IDatabaseExtractedInfo {
    host: string;
    port: string;
    database: string;
    user: string;
    password: string;
};

export interface IDatabaseConnectionInfo {
    user: string;
    password: string;
    database: string;
    constr: string;
    extracted?: IDatabaseExtractedInfo;
}

export interface IDatabaseDetectorObject {
    url?: string;
    port?: string;
}

export interface IDatabaseConfigs {
    constr: string;
}

export interface IDatabaseConstructorProperties <T>{
    connection: T;
    config: IDatabaseConfigs;
    event: EventEmitter
}

export interface IQueryObject {
    query: string;
    values?: any | any[];
}