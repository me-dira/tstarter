import { IDatabaseConfigs } from "../interfaces";
import dotenv from 'dotenv';
dotenv.config()

const databaseConfigs: IDatabaseConfigs = {
    inuse: 'postgres',
    constr: (process.env.CONSTR as string)
};

export default databaseConfigs;