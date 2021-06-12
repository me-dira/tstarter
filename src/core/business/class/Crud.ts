import { ICrudCreateMethod, ICrudOptions, ICrudReadMethod, ICrudUpdateMethod } from "../../interfaces/icrud";
import { ICrudDeleteMethod } from "../../interfaces/icrud";

export abstract class CrudOperation<V extends object, ID extends object, M> {
    constructor(model: M, opts?: ICrudOptions) {
        this.model = model;
        this.options = opts;
    }

    private _options: ICrudOptions;
    private _model: M;

    set options(opts: ICrudOptions) {
        this._options = opts;
    }
    get options(): ICrudOptions {
        return this._options;
    }

    set model(model: M) {
        this._model = model;
    }
    get model(): M {
        return this._model;
    }

    abstract read(object: ICrudReadMethod<V, ID>): Promise<V | V[]>;
    abstract create(object: ICrudCreateMethod<V>): Promise<V | V[]>;
    abstract delete(object: ICrudDeleteMethod<V, ID>): Promise<V>;
    abstract update(object: ICrudUpdateMethod<V, ID>): Promise<V>;
}