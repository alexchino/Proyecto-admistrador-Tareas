import {Pool} from 'pg'

let conn: any;
if (!conn) {
    conn = new Pool({
        user: 'postgres',
        password: 'sander123',
        host: 'localhost',
        port: 5432,
        database: 'tasksdb',
    });
}
export {conn};