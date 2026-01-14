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
import Prosgrado from "../pages/TablesViews/Prosgrado";
import SedeUniversitaria from "../pages/TablesViews/SedeUniversitaria";
import Usuarios from "../pages/TablesViews/Usuarios";
import Eventos from "../pages/TablesViews/Eventos";
import Curso from "../pages/TablesViews/Curso";

export default function AppRoutes() {
    return(
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path ="/disciplinas" element={<Disciplinas/>}/>
            <Route path ="/usuarios" element={<Usuarios/>}/>
            <Route path ="/asignaturas" element={<Asignaturas/>}/>
            <Route path ="/nivel_acreditacion" element={<NivelAcreditacion/>}/>
            <Route path ="/claustro" element={<Claustro/>}/>
            <Route path ="/curso" element={<Curso/>}/>
            <Route path ="/eventos_anterior" element={<EventosAnterior/>}/>
            <Route path ="/publicaciones" element={<Publicaciones/>}/>
            <Route path ="/eventos" element={<Eventos/>}/>
            <Route path ="/resultado_ejercicios_integradores" element={<ResultadoEjerciciosIntegradores/>}/>
            <Route path ="/investigacion" element={<Investigacion/>}/>
            <Route path ="/existencia_de_posgrado" element={<ExistenciaDePosgrado/>}/>
            <Route path ="/profesor" element={<Profesor/>}/>
            <Route path ="/profesor_principal" element={<ProfesorPrincipal/>}/>
            <Route path ="/premios_profesor" element={<PremiosProfesor/>}/>
            <Route path ="/incorporacion_investigacion_cientifica" element={<IncorporacionInvestigacionCientifica/>}/>
            <Route path ="/matricula" element={<Matricula/>}/>
            <Route path ="/ayudantia" element={<Ayudantia/>}/>
            <Route path ="/ejercicios_integradores" element={<EjerciciosIntegradores/>}/>
            <Route path ="/premios_estudiantes" element={<PremiosEstudiantes/>}/>
            <Route path ="/publicacion" element={<Publicacion/>}/>
            <Route path ="/total_graudados" element={<TotalGraduados/>}/>
            <Route path ="/promocion" element={<Promocion/>}/>
            <Route path ="/posgrado" element={<Prosgrado/>}/>
            <Route path ="/sede_universitaria" element={<SedeUniversitaria/>}/>
            
            <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
    )
}