import {createPool} from 'mysql2/promise';

const pool = createPool({
    host: 'monorail.proxy.rlwy.net',
    port: '57558',
    user: 'root',
    password: 'NgYhOvIZiCioKcWjdTNqItYBggVseBHP',
    database: 'Prueba01'
});

async function createDatabaseAndTables() {
    try {
      await pool.getConnection();
      
      await pool.query('CREATE DATABASE IF NOT EXISTS Prueba01');
  
      await pool.query('USE Prueba01');
  
      await pool.query(`
        CREATE TABLE IF NOT EXISTS personas (
          id INT AUTO_INCREMENT PRIMARY KEY,
          name VARCHAR(50) NOT NULL,
          lastname VARCHAR(50) NOT NULL,
          age INT
        )
      `);
  
      console.log('Base de datos y tablas creadas exitosamente.');
    } catch (error) {
      console.error('Error al crear la base de datos y las tablas:', error);
    } finally {
    }
  }
  createDatabaseAndTables();

export default pool;