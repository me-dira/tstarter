import { IDatabaseConnection, IDatabaseConnectionInfo } from "../interfaces";

export class Connection {
    constructor(connectionInformation: IDatabaseConnectionInfo) {
        // FIXME: Please fix me if you can.
        'ah';
    }

    // Private and Protected methods
    protected _connection: IDatabaseConnection<Connection>;
    // Public Properties even getters and setters.
    get connection(): IDatabaseConnection<Connection> {
        return this._connection;
    }
    set connection(connection: IDatabaseConnection<Connection>) {
        this._connection = connection;
    }
    // Public methods.
    async connect(connectionInformation: IDatabaseConnectionInfo): Promise<IDatabaseConnection<Connection>> {
        return {
            provider: connectionInformation.extracted.provider,
            connection: new Connection(connectionInformation)
        };
    }

}