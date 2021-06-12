import { IUser } from "src/core/interfaces";
import { CrudOperation } from "../class/Crud";
import { todo_db } from '../../database';
import { IUserIdentifiers, IUserNotRequired } from "src/core/interfaces/iuser";
import {
    ICrudOptions,
    ICrudCreateMethod,
    ICrudDeleteMethod,
    ICrudUpdateMethod,
    ICrudReadMethod
} from "src/core/interfaces/icrud";
import { makeUserModel } from '../../entities/UserModel';
import { Model, ModelCtor } from "sequelize/types";

class UserCrud extends CrudOperation<IUser, IUserIdentifiers, ModelCtor<Model<any, any>>> {
    constructor(opts?: ICrudOptions) {
        super(makeUserModel(todo_db), opts);
    }

    /**
     * Create users for you with connect outer dependencies
     * to inner website.
     * @param methodObject Pass user information that you want to create.
     * @returns instance of IUser or array of it.
     */
    public async create(methodObject: ICrudCreateMethod<IUser>): Promise<IUser | IUser[]> {

        return [];
    }

    /**
     * Delete the user from database with specified identifier.
     * @param methodObject
     */
    public async delete(methodObject: ICrudDeleteMethod<IUser, IUserIdentifiers>): Promise<IUser> {
        return {
            password: 'monaliza',
            email: 'asdf@gmail.com',
            identifier: 'monaliza',
            createdAt: Date.now() as unknown as Date,
            updatedAt: Date.now() as unknown as Date
        };
    }

    /**
     * Update user.
     * @param methodObject
     */
    public async update(methodObject: ICrudUpdateMethod<IUserNotRequired, IUserIdentifiers>): Promise<IUser> {
        return {
            password: 'monaliza',
            email: 'asdf@gmail.com',
            identifier: 'monaliza',
            createdAt: Date.now() as unknown as Date,
            updatedAt: Date.now() as unknown as Date
        };
    }

    /**
     * Get User from database.
     * @param methodObject What to read.
     */
    public async read(methodObject: ICrudReadMethod<IUser, IUserIdentifiers>): Promise<IUser | IUser[]> {
        return {
            identifier: 'jinda',
            email: 'asdfa@gmail.com',
            password: 'sdfasf',
            createdAt: Date.now() as unknown as Date,
            updatedAt: Date.now() as unknown as Date

        };
    }
}