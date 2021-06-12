import { makeUserModel } from '../entities/User';
import { Sequelize } from 'sequelize';
import { IUser } from '../interfaces';
import dotenv from 'dotenv';
import * as randomstring from 'randomstring';

dotenv.config();

const randomUser = (numberOfUsers: number): IUser | IUser[] => {
    const randomSingleUser = () => {
        let user: IUser;

        user.identifier = randomstring.generate({
            length: 10,
            charset: 'qwertyuiopasdfghjklzxcvbnm'
        });

        user.email = (() => {
            const email = [];

            email.push(randomstring.generate({
                length: 10,
                charset: 'qwertyuiopasdfghjklzxcvbnm'
            }));
            email.push(randomstring.generate({
                length: 10,
                charset: 'qwertyuiopasdfghjklzxcvbnm'
            }));

            email.push(randomstring.generate({
                length: 3,
                charset: 'qwertyuiopasdfghjklzxcvbnm'
            }));

            return email.join('@');
        })();

        user.password = randomstring.generate(20);

        return user;
    };

    if(numberOfUsers > 1) {
        let users = [];

        for(let index = 0; numberOfUsers > index ++)
        
    }

}

const userCredentials: IUser = {
    identifier: 'hdr',
    email: 'hdr@gmial.com',
    password: 'test'
};

describe('## User model testing', () => {
    test('Create user obj', done => {
        const database = new Sequelize(process.env.CONSTR, { sync: { force: true } });
        const user = makeUserModel(database);
        const builder = user.build(userCredentials);

        builder.save()
            .then(createdUser => {
                done(createdUser.update);
            })
            .catch(err => done(err))
    });

});