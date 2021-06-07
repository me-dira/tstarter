import { IDatabaseConfigs } from "../interfaces";

const databaseConfigs: IDatabaseConfigs = {
    inuse: 'postgres',
    constr: process.env.CONSTR
};

export default databaseConfigs;