import { IDatabaseExtractedInfo } from "../interfaces";
import validator from 'validator';
import { checkConstr } from './reg.expressions';

class ConstrDetector {
    // Public properties
    get detected(): string {
        return this._detected;
    }
    set detected(detected: string) {
        this._detected = detected;
    }

    // Private properties
    private _detected: string;

    // Methods ---
    public detect(constr: string): IDatabaseExtractedInfo {
        const validatedConstr = this.isValid(constr);
        const extractedFields = this.extractFields(validatedConstr);
        const result: IDatabaseExtractedInfo = this.makeDetectorObject(extractedFields);
        return result;
    };

    private extractFields(constr: string): Map<string, string> {
        const methodName = 'detect_extract_connection_data'.toUpperCase();
        const extractedFields: Map<string, string> = new Map<string, string>();
        const separated = constr.split(':');

        separated.map((value: string) => {
            const valueSeparated: string[] = value.split('->');
            if (valueSeparated.length === 2) {
                extractedFields.set(valueSeparated[0], valueSeparated[1]);
            }
        });

        if(extractedFields.size < 3) throw {
            name: methodName,
            message: 'We need more information to connect into database !' +
                "please check your constr"
        };

        return extractedFields;
    }

    private makeDetectorObject(extractedFields: Map<string, string>): IDatabaseExtractedInfo {
        const methodName = 'detect_extract_connection_data'.toUpperCase();
        const result = {
            provider: 'postgres',
            url: (() => {
                let validationCheck;
                let lengthCheck;
                let url = extractedFields.get('url') || undefined;
                const minLength = 5;

                if (url === 'localhost') url = '127.0.0.1';

                lengthCheck = validator.isLength(url, { min: 5 });
                validationCheck = !(validator.isURL(url));

                if (validationCheck) throw {
                    name: methodName,
                    message: 'url is not valid !'
                };

                if (!(lengthCheck)) throw {
                    name: methodName,
                    message: 'Url length is less than normal: ' + (minLength as unknown as string)
                }

                return url;
            })(),

            port: (() => {
                const port = extractedFields.get('port') || undefined;
                const minMaxLength = 4;
                const isNumericString = !(validator.isNumeric(port));
                const lengthCheck = !(validator.isLength(port), { min: minMaxLength, max: minMaxLength });

                if (isNumericString) throw {
                    name: methodName,
                    message: 'Port number should be string ! | not valid'
                };

                if (lengthCheck) throw {
                    name: methodName,
                    message: 'Port should be ' + (minMaxLength as unknown as string) + ' character long'
                }

                return port;
            })(),

            database: (() => {
                const database = extractedFields.get('database') || undefined;
                const minLength = 5;
                const lengthCheck = !(validator.isLength(database), { min: minLength });

                if (lengthCheck) throw {
                    name: methodName,
                    message: 'length should grater than: ' + (minLength as unknown as string)
                }

                return database;
            })(),

            username: (() => {
                const username = extractedFields.get('username') || undefined;
                const minLength = 5;
                const lengthCheck = !(validator.isLength(username), { min: minLength });

                if (lengthCheck) throw {
                    name: methodName,
                    message: 'length should grater than: ' + (minLength as unknown as string)
                }

                return username;
            })(),

            password: (() => {
                const username = extractedFields.get('password') || undefined;
                const minLength = 5;
                const lengthCheck = !(validator.isLength(username), { min: minLength });

                if (lengthCheck) throw {
                    name: methodName,
                    message: 'length should grater than: ' + (minLength as unknown as string)
                }

                return username;
            })()
        };
        return result;
    }

    private isValid(constr: string) {
        const methodName = 'is_valid_constr_validator'.toUpperCase();

        if (!checkConstr.test(constr)) throw {
            name: methodName,
            message: 'Your Connection String is not valid !'
        }

        return constr;
    }
}

export { ConstrDetector };