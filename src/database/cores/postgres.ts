import databaseConfigs from '../../../_configs/database';
import { Database } from '../classes/database';
import { EventEmitter } from 'events';
import { IQueryObject } from '../interfaces';
import { Sequelize, Op, Model, DataTypes } from 'sequelize';

const postgreSQLConnection = new Sequelize(databaseConfigs.constr);
const postgreSQLSanitizer = {};

class PostgreSQLDatabase extends Database<Sequelize> {
    constructor() {
        super({
            config: databaseConfigs,
            connection: postgreSQLConnection,
            event: new EventEmitter()
        });

        this.className = 'postgres_db_class_';
    }
    // private & protected properties.
    private _client: Sequelize;
    private _className: string;

    // Public properties even getters and setters method goes below
    get client() { return this._client; }
    set client(client: Sequelize) { this._client = client; };

    get className() { return this._className; }
    set className(name: string) { this._className = name.toUpperCase(); }

    public async query(queryObject: IQueryObject): Promise<any> {
        // TODO complete this.
    }

    public multiple(queries: Promise<any>[]) {
        // TODO implement this.
    }

    public async isConnected(): Promise<boolean> {
        try {
            await this.connection.authenticate();
            return true;
        } catch (error) {
            return false;
        }
    }

    public disconnect(): void {
        if (!this.client) {
            throw {
                name: this.className + 'disconnect_method'.toUpperCase(),
                message: 'You can not disconnect connection before connecting to the DB'
            };
        }

        this.connection.close().catch(err => {
            this.emit('error', {
                name: this.className + 'disconnect_method'.toUpperCase()
            });
        });
    }

}

export { PostgreSQLDatabase };
