import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import usuarioRouter from './src/routes/usuarioRoutes.js';
import asignaturasRouter from './src/routes/asignaturasRoutes.js';
import ayudantiasRouter from './src/routes/ayudantiasRoutes.js';
import claustroRouter from './src/routes/claustroRoutes.js';
import cursosRouter from './src/routes/cursosRoutes.js';
import disciplinasRouter from './src/routes/disciplinasRoutes.js';
import ejerciciosIntegradoresRouter from './src/routes/ejerciciosIntegradoresRoutes.js';
import eventosAnteriorRouter from './src/routes/eventosAnteriorRoutes.js';
import eventosRouter from './src/routes/eventosRoutes.js';
import existenciaPosgradoRouter from './src/routes/existenciaPosgradoRoutes.js';
import investigacionRouter from './src/routes/investigacionRoutes.js';
import matriculasRouter from './src/routes/matriculasRoutes.js';
import nivelAcreditacionRouter from './src/routes/nivelAcreditacionRoutes.js';
import posgradoRouter from './src/routes/posgradoRoutes.js';
import premiosEstudianteRouter from './src/routes/premiosEstudianteRoutes.js';
import premiosProfesorRouter from './src/routes/premiosProfesorRoutes.js';
import profesorRouter from './src/routes/profesorRoutes.js';
import profesorPrincipalRouter from './src/routes/profesorPrincipalRoutes.js';
import publicacionRouter from './src/routes/publicacionRoutes.js';
import incorporacionInvestigacionCientificaRouter from './src/routes/incorporacionInvestigacionCientificaRoutes.js';
import publicacionesRouter from './src/routes/publicacionesRoutes.js';
import resultadoEjerciciosIntegradoresRouter from './src/routes/resultadoEjerciciosIntegradoresRoutes.js';
import promocionRouter from './src/routes/promocionRoutes.js';
import sedeUniversitariaRouter from './src/routes/sedeUniversitariaRoutes.js';
import totalGraduadosRouter from './src/routes/totalGraduadosRoutes.js';

const app = express();
const  port = 3002;

// habilitar CORS para permitir solicitudes desde el frontend (p. ej. http://localhost:5173)
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:5173' }));

// Middleware para evitar acceso directo desde el navegador (navegación/entrada en la barra)
// Bloquea peticiones GET que provienen de una navegación normal del navegador
app.use((req, res, next) => {
    const mode = req.headers['sec-fetch-mode'];
    const accept = req.headers.accept || '';
    if (req.method === 'GET' && (mode === 'navigate' || accept.includes('text/html'))) {
        return res.status(403).json({ error: 'Acceso prohibido desde navegador' });
    }
    next();
});

//routes
app.use('/api/usuarios',usuarioRouter)
app.use('/api/asignaturas', asignaturasRouter)
app.use('/api/ayudantias', ayudantiasRouter)
app.use('/api/claustros', claustroRouter)
app.use('/api/cursos', cursosRouter)
app.use('/api/disciplinas', disciplinasRouter)
app.use('/api/ejercicios_integradores', ejerciciosIntegradoresRouter)
app.use('/api/eventos_anterior', eventosAnteriorRouter)
app.use('/api/eventos', eventosRouter)
app.use('/api/existencia_posgrado', existenciaPosgradoRouter)
app.use('/api/investigacion', investigacionRouter)
app.use('/api/matricula', matriculasRouter)
app.use('/api/nivel_acreditacion', nivelAcreditacionRouter)
app.use('/api/posgrado', posgradoRouter)
app.use('/api/premios_estudiante', premiosEstudianteRouter)
app.use('/api/premios_profesor', premiosProfesorRouter)
app.use('/api/profesor', profesorRouter)
app.use('/api/profesor_principal', profesorPrincipalRouter)
app.use('/api/promocion', promocionRouter)
app.use('/api/incorporacion_investigacion_cientifica', incorporacionInvestigacionCientificaRouter)
app.use('/api/publicacion', publicacionRouter)
app.use('/api/publicaciones', publicacionesRouter)
app.use('/api/resultado_ejercicios_integradores', resultadoEjerciciosIntegradoresRouter)
app.use('/api/sede_universitaria', sedeUniversitariaRouter)
app.use('/api/total_graduados', totalGraduadosRouter)

app.listen(port,()=>{
    console.log('Servidor iniciado en: http://localhost:' + port)
})