export interface IUser {
    firstName?: string;
    lastName?: string;
    identifier: string;
    email: string;
    password: string;
    softDelete?: boolean;
};

export interface IUserIdentifiers {
    id: number;
    userName?: string;
    email?: string;
}