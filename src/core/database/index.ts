import { Sequelize } from "sequelize/types";

const connectionString = process.env.CONSTR;
const database = new Sequelize(connectionString);

export { database as todo_db };