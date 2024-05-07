import {createPool} from 'mysql2/promise';

const pool = createPool({
    host: 'monorail.proxy.rlwy.net',
    port: '57558',
    user: 'root',
    password: 'NgYhOvIZiCioKcWjdTNqItYBggVseBHP',
    database: 'Prueba01'
});

export default pool;