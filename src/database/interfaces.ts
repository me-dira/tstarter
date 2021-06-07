
export interface IDatabaseExtractedInfo {
    url: string;
    port: string;
    database: string;
    username: string;
    password: string;
};

export interface IDatabaseConnectionInfo {
    username: string;
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
