import mysql from 'mysql';
import myConn from 'express-myconnection';

import config from './env';

const dbConfig = {
    host: config.host,
    port: config.port_db,
    user: config.user,
    password: config.password,
    database: config.database,
    multipleStatements: true
}

export default myConn(mysql, dbConfig, 'single');
