/**
 * CRUDOperation interfaces
 */
export interface ICrudCreateMethod<T extends object> {
    data: T | T[];
    opts?: ICrudOptions;
}

export interface ICrudDeleteMethod<V extends object> {
    identifier: V;
    opts?: ICrudOptions;
}

export interface ICrudUpdateMethod<T extends object, ID extends object> {
    identifier: ID;
    update: T;
    opts?: ICrudOptions;
}

export interface ICrudReadMethod<T extends object, ID extends object> {
    identifier: ID;
    opts?: ICrudOptions;
}

export interface ICrudOptions {
    filter?: string | string[];
    append?: object | object [];
    sanitize?: (value: string) => string;
}