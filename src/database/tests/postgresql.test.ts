import { PostgreSQLDatabase } from '../cores/postgres';
const dbConnectionChecker = (pg: PostgreSQLDatabase, done: (income?: any[]) => void) => {
    pg.isConnected()
        .then(isConnected => {
            if (isConnected) return;
            else return done(['Database not connected', isConnected]);
        });
};

describe('Database: ', () => {
    /**
     * Tests that are written below belongs to database connection.
     * Just pay attention that if you don't set .env config file, set it now.
     * The database class will read the config file from .env and there is no need
     * to pass theme here on any where.
     * First of all thing check database is connected.
     */
    describe('# Connection tests', () => {
        test('Create Postgres Object and test connection !', done => {
            const pg = new PostgreSQLDatabase();
            dbConnectionChecker(pg, done);
            done();
        });

        test('Get simple query', done => {
            const pg = new PostgreSQLDatabase();
            dbConnectionChecker(pg, done);

            const query = 'SELECT NOW();';
        });
    });
});
