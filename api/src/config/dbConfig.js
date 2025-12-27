import { createConnection } from 'mysql';

const db = createConnection({
    host: 'localhost',
    user: 'root',
    password:'admin',
    database: 'SGPA',
    port: 3306
})

db.connect((err)=>{
    if(err){
        throw err;
    }
    console.log('Conexión existosa con la base de datos')
})

export { db };

// Wrapper de consulta que soporta ambas firmas:
//  - query(sql, callback)
//  - query(sql, params, callback)
export function query(sql, paramsOrCallback, callback) {
    if (typeof paramsOrCallback === 'function') {
        // llamada: query(sql, callback)
        db.query(sql, paramsOrCallback);
        return;
    }

    // llamada: query(sql, params, callback)
    db.query(sql, paramsOrCallback, callback);
}

// Manejar errores globales de conexión para evitar que peticiones queden colgadas
db.on('error', (err) => {
    console.error('Error en conexión MySQL:', err && err.message ? err.message : err);
});