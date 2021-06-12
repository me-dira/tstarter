export interface IUser {
    firstName?: string;
    lastName?: string;
    identifier: string;
    email: string;
    password: string;
    softDelete?: boolean;
    createdAt: Date;
    updatedAt: Date;
};

export interface IUserIdentifiers {
    id: number;
    userName?: string;
    email?: string;
}

export interface IUserNotRequired{
    firstName?: string;
    lastName?: string;
    identifier?: string;
    email?: string;
    password?: string;
    softDelete?: boolean;
};