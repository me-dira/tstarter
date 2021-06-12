import { IUser } from "src/core/interfaces";

import {
    ICrudOptions,
    ICrudCreateMethod,
    ICrudDeleteMethod,
    ICrudUpdateMethod,
    ICrudReadMethod
} from "src/core/interfaces/icrud";

import { CrudOperation } from "../class/Crud";
import { todo_db } from '../../database';
import { IUserIdentifiers } from "src/core/interfaces/iuser";

class UserCrud extends CrudOperation<IUser, IUserIdentifiers> {
    constructor(opts?: ICrudOptions) {
        super(todo_db, opts);
    }

    create(object: ICrudCreateMethod<IUser>): IUser | IUser[] {
        return object.data;
    }
    delete(object: ICrudDeleteMethod<IUser>): IUser {
        return object.identifier;
    }
    update(object: ICrudUpdateMethod<IUser, IUserIdentifiers>): IUser {
        return {
            password: 'monaliza',
            email: 'asdf@gmail.com',
            identifier: 'monaliza'
        }
    }
    read(object: ICrudReadMethod<IUser, IUserIdentifiers>): IUser | IUser[] {
        return {
            identifier: 'jinda',
            email: 'asdfa@gmail.com',
            password: 'sdfasf'
        };
    }
}