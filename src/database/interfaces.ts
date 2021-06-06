import { Connection } from "./classes/connection";

export interface IDatabaseExtractedInfo {
    provider: string;
    uri: string;
    port: number;
};

export interface IDatabaseConnectionInfo {
    username: string;
    password: string;
    database: string;
    constr: string;
    extracted?: IDatabaseExtractedInfo;
}

export interface IDatabaseConnection<T extends Connection> {
    provider: string;
    connection: T;
}
