import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import NotFoundPage from "../pages/NotFoundPage";
import Disciplinas from "../pages/TablesViews/Disciplinas";
import Asignaturas from "../pages/TablesViews/Asignaturas";
import NivelAcreditacion from "../pages/TablesViews/NivelAcreditacion";
import Claustro from "../pages/TablesViews/Claustro";
import EventosAnterior from "../pages/TablesViews/EventosAnterior";
import Publicaciones from "../pages/TablesViews/Publicaciones";
import ResultadoEjerciciosIntegradores from "../pages/TablesViews/ResultadoEjerciciosIntegradores";
import Investigacion from "../pages/TablesViews/Investigacion";
import ExistenciaDePosgrado from "../pages/TablesViews/ExistenciaDePosgrado";
import Profesor from "../pages/TablesViews/Profesor";
import ProfesorPrincipal from "../pages/TablesViews/ProfesorPrincipal";
import PremiosProfesor from "../pages/TablesViews/PremiosProfesor";
import IncorporacionInvestigacionCientifica from "../pages/TablesViews/IncorporacionInvestigacionCientifica";
import Matricula from "../pages/TablesViews/Matricula";
import Ayudantia from "../pages/TablesViews/Ayudantia";
import EjerciciosIntegradores from "../pages/TablesViews/EjerciciosIntegradores";
import PremiosEstudiantes from "../pages/TablesViews/PremiosEstudiantes";
import Publicacion from "../pages/TablesViews/Publicacion";
import TotalGraduados from "../pages/TablesViews/TotalGraduados";
import Promocion from "../pages/TablesViews/Promocion";
import Posgrado from "../pages/TablesViews/Posgrado";
import SedeUniversitaria from "../pages/TablesViews/SedeUniversitaria";
import Usuarios from "../pages/TablesViews/Usuarios";
import Eventos from "../pages/TablesViews/Eventos";
import Curso from "../pages/TablesViews/Curso";
import ProtectedRoute from "./ProtectedRoute";

export default function AppRoutes() {
    return(
        <Routes>
            <Route path="/" element={<Login/>}/>

            <Route path="/disciplinas" element={<ProtectedRoute><Disciplinas/></ProtectedRoute>}/>
            <Route path="/usuarios" element={<ProtectedRoute><Usuarios/></ProtectedRoute>}/>
            <Route path="/asignaturas" element={<ProtectedRoute><Asignaturas/></ProtectedRoute>}/>
            <Route path="/nivel_acreditacion" element={<ProtectedRoute><NivelAcreditacion/></ProtectedRoute>}/>
            <Route path="/claustro" element={<ProtectedRoute><Claustro/></ProtectedRoute>}/>
            <Route path="/curso" element={<ProtectedRoute><Curso/></ProtectedRoute>}/>
            <Route path="/eventos_anterior" element={<ProtectedRoute><EventosAnterior/></ProtectedRoute>}/>
            <Route path="/publicaciones" element={<ProtectedRoute><Publicaciones/></ProtectedRoute>}/>
            <Route path="/eventos" element={<ProtectedRoute><Eventos/></ProtectedRoute>}/>
            <Route path="/resultado_ejercicios_integradores" element={<ProtectedRoute><ResultadoEjerciciosIntegradores/></ProtectedRoute>}/>
            <Route path="/investigacion" element={<ProtectedRoute><Investigacion/></ProtectedRoute>}/>
            <Route path="/existencia_de_posgrado" element={<ProtectedRoute><ExistenciaDePosgrado/></ProtectedRoute>}/>
            <Route path="/profesor" element={<ProtectedRoute><Profesor/></ProtectedRoute>}/>
            <Route path="/profesor_principal" element={<ProtectedRoute><ProfesorPrincipal/></ProtectedRoute>}/>
            <Route path="/premios_profesor" element={<ProtectedRoute><PremiosProfesor/></ProtectedRoute>}/>
            <Route path="/incorporacion_investigacion_cientifica" element={<ProtectedRoute><IncorporacionInvestigacionCientifica/></ProtectedRoute>}/>
            <Route path="/matricula" element={<ProtectedRoute><Matricula/></ProtectedRoute>}/>
            <Route path="/ayudantia" element={<ProtectedRoute><Ayudantia/></ProtectedRoute>}/>
            <Route path="/ejercicios_integradores" element={<ProtectedRoute><EjerciciosIntegradores/></ProtectedRoute>}/>
            <Route path="/premios_estudiantes" element={<ProtectedRoute><PremiosEstudiantes/></ProtectedRoute>}/>
            <Route path="/publicacion" element={<ProtectedRoute><Publicacion/></ProtectedRoute>}/>
            <Route path="/total_graudados" element={<ProtectedRoute><TotalGraduados/></ProtectedRoute>}/>
            <Route path="/promocion" element={<ProtectedRoute><Promocion/></ProtectedRoute>}/>
            <Route path="/posgrado" element={<ProtectedRoute><Posgrado/></ProtectedRoute>}/>
            <Route path="/sede_universitaria" element={<ProtectedRoute><SedeUniversitaria/></ProtectedRoute>}/>

            <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
    )
}