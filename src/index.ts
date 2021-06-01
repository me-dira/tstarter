import 'module-alias/register';
import dotenv from 'dotenv';
import { Client } from 'pg';

let pgdb;

dotenv.config();

pgdb = new Client({
    user: "deployer",
    database: "mona"
});

