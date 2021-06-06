import { IDatabaseConnectionInfo} from '../interfaces';
import { Connection } from './connection';

export abstract class Database {
    constructor(connectionInformation: IDatabaseConnectionInfo) {
        this.information = connectionInformation;
    }

    // Private and Protected methods
    protected _connection: Connection;
    protected _information: IDatabaseConnectionInfo;

    // Public Properties even getters and setters.
    get connection(): Connection {
        return this._connection;
    }
    set connection(connection: Connection) {
        this._connection = connection;
    }
    get information(): IDatabaseConnectionInfo {
        return this._information;
    }
    set information(connection: IDatabaseConnectionInfo) {
        this._information = connection;
    }

    // Public methods.
    async connect(): Promise<Connection> {
        const innerConnection = new Connection(this.information);
        return this._connection;
    }

    abstract disconnect(): void;
}