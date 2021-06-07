import { Client } from 'pg';
import { IDatabaseConfigs } from '_configs/interfaces';
import { IDatabaseConnectionInfo } from '../interfaces';

export class Database {
    constructor(connection: Client, config: IDatabaseConfigs) {
        this.connection = connection;
    }

    // Private and protected properties.
    private _connection: Client;

    // Public properties even getters and setters.
    get connection(): Client {
        return this._connection;
    }
    set connection(connection: Client) {
        this._connection = connection;
    }

    // Private or protected methods.
    // Public methods.
    public async connect(information: IDatabaseConnectionInfo): Promise<void> {
        const connection: unknown = await this.connection.connect();
        const res = await this.connection.query('SELECT $1::text as message', ['Postgres is connected'])
    }
    public disconnect(): void {
        this.connection.end();
    }

}