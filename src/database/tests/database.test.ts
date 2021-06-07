import { ConstrDetector } from '../classes/constr.detector';
import { IDatabaseConfigs, IDatabaseExtractedInfo } from '../interfaces';

const constrNotValidException = {
    name: 'IS_VALID_CONSTR_VALIDATOR',
    message: 'Your Connection String is not valid !'
};

const databaseConfig: IDatabaseConfigs = {
    constr: 'url->localhost:port->8000:database->mona:username->deployer:password->SOMmePass'
};

describe('Database: ', () => {
    test('Export information from string', () => {
        const detector = new ConstrDetector();
        const expectedObject: IDatabaseExtractedInfo = {
            url: '127.0.0.1',
            port: '8000',
            username: 'deployer',
            password: 'SOMmePass',
            database: 'mona'
        };
        expect(detector.detect(databaseConfig.constr)).toMatchObject(expectedObject);
    });

    describe('Constr bad inputs', () => {
        test('** Empty', () => {
            const detector = new ConstrDetector();
            try {
                detector.detect('');
            } catch (error) {
                expect(error).toMatchObject(constrNotValidException);
            }
        });

        test('** Unknown string', () => {
            const detector = new ConstrDetector();
            try {
                detector.detect('This 2 :can b:e any -> thing')
            } catch (error) {
                expect(error).toMatchObject(constrNotValidException);
            }
        });

        test('** Low meta', () => {
            const detector = new ConstrDetector();
            try {
                detector.detect('password->Yeah there should be an error')
            } catch (error) {
                expect(error).toMatchObject(constrNotValidException);
            };
        });

        test('** Without meaning `:` separator', () => {
            const detector = new ConstrDetector();
            try {
                detector.detect('password->:pass:rna:me->monaliza:database:mL:ur->:localhost:t:')
            } catch (error) {
                expect(error).toMatchObject(constrNotValidException);
            };
        });
    });
})