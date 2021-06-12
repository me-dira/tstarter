import { Model, DataTypes, Sequelize } from "sequelize";

class User extends Model { }
const makeUserModel = (databaseObject: Sequelize) => {
    User.init({
        firstName: {
            allowNull: true,
            type: DataTypes.STRING,
        },
        lastName: {
            allowNull: true,
            type: DataTypes.STRING
        },
        identifier: {
            allowNull: false,
            type: DataTypes.STRING,
            unique: true
        },
        email: {
            allowNull: false,
            type: DataTypes.STRING(50),
        },
        password: {
            allowNull: false,
            type: DataTypes.STRING
        },
        softDelete: {
            allowNull: false,
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
    }, {
        sequelize: databaseObject,
        modelName: 'User',
        tableName: 'users',
        timestamps: true
    });

    return User;
}

export { makeUserModel };