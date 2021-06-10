import { IDatabaseConfigs } from '_configs/interfaces';
import { EventEmitter } from 'events';
import { IDatabaseConstructorProperties, IQueryObject } from '../interfaces';

export abstract class Database<T> extends EventEmitter{
    constructor(opts: IDatabaseConstructorProperties<T>) {
        super();
        this.connection = opts.connection;
        this.event = opts.event;
        this.config = opts.config;
    }

    // Private and protected properties.
    private _connection: T;
    private _event: EventEmitter;
    private _config: IDatabaseConfigs;

    // Public properties even getters and setters.
    get connection(): T {
        return this._connection;
    }
    set connection(connection: T) {
        this._connection = connection;
    }
    get event(): EventEmitter {
        return this._event;
    }
    set event(event: EventEmitter) {
        this._event = event;
    }
    get config(): IDatabaseConfigs {
        return this._config;
    }
    set config(config: IDatabaseConfigs) {
        this._config = config;
    }

    // Private or protected methods.
    abstract disconnect(): void;
    abstract query(query: IQueryObject): Promise<any>;
}