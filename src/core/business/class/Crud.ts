import { Sequelize } from "sequelize/types";
import { ICrudCreateMethod, ICrudOptions, ICrudReadMethod, ICrudUpdateMethod } from "../../interfaces/icrud";
import { ICrudDeleteMethod } from "../../interfaces/icrud";

export abstract class CrudOperation <V extends object, ID extends object> {
    constructor(database: Sequelize, opts?: ICrudOptions) {
        this.options = opts;
    }

    private _options: ICrudOptions;
    private _database: Sequelize;

    set options(opts: ICrudOptions) {
        this._options = opts;
    }
    get options(): ICrudOptions {
        return this._options;
    }

    /** Database getter and setter */
    set database(database: Sequelize) {
        this._database = database;
    }
    get database(): Sequelize {
        return this._database;
    }

    abstract read(object: ICrudReadMethod<V, ID>): V | V[];
    abstract create(object: ICrudCreateMethod<V>): V | V[];
    abstract delete(object: ICrudDeleteMethod<V>): V;
    abstract update(object: ICrudUpdateMethod<V, ID>): V;
}