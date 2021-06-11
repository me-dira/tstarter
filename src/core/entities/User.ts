import { Sequelize, Model, DataTypes } from "sequelize";
import { PostgreSQLDatabase } from "src/database/cores/postgres";
import { IUser } from "../interfaces";

const postgres = new PostgreSQLDatabase();

class User extends Model { }
User.init({
    id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.BIGINT
    },
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
    soft_delete: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
}, {
    sequelize: postgres.connection,
    modelName: 'User',
    tableName: 'users',
    timestamps: true
});

User.sync({ alter: true });

export { User };