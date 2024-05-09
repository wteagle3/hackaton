const sql = require('mssql');

const config = {
    server: 'DESKTOP-02IRLF3\\SQLEXPRESS',
    database: 'VotacionesDB',
    options: {
        trustedConnection: true,
    },
};

async function consultarBaseDeDatos() {
    try {
        await sql.connect(config);
        console.log('Conexión exitosa');

        const result = await sql.query('SELECT * FROM Usuarios');
        console.log('Registros encontrados:', result.recordset);

        await sql.close();
    } catch (error) {
        console.error('Error al conectar la base de datos:', error.message);
    }
}

consultarBaseDeDatos();