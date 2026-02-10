import { useState } from "react";
import { createContext, useContext } from "react";

const TableContext = createContext(null);

export default function TableContextProvider({ children }) {
  const [asignatura, setAsignatura] = useState([]);
  const [disciplina, setDisciplina] = useState([]);
  const [profesorPrincipal, setProfesorPrincipal] = useState([]);
  const [usuario, setUsuario] = useState([]);
  const [profesor, setProfesor] = useState([]);
  const [publicacion, setPublicacion] = useState([]);
  const [eventos, setEventos] = useState([]);
  const [premiosProfesor, setPremiosProfesor] = useState([]);
  const [sedeUniversitaria, setSedeUniversitaria] = useState([]);
  const [promocion, setPromocion] = useState([]);
  const [curso, setCurso] = useState([]);
  const [totalGraduados, setTotalGraduados] = useState([]);
  const [posgrado, setPosgrado] = useState([]);
  const [premiosEstudiantes, setPremiosEstudiantes] = useState([]);
  const [incorporacionInvestigacion, setIncorporacionInvestigacion] =
    useState([]);
  const [ejercicioIntegradores, setEjerciciosIntegradores] = useState([]);
  const [matricula, setMatricula] = useState([]);
  const [ayudantia, setAyudantia] = useState([]);
  const [nivelAcreditacion, setNivelAcreditacion] = useState([]);
  const [existenciaPosgrado, setExistenciaPosgrado] = useState([]);
  const [publicaciones, setPublicaciones] = useState([]);
  const [claustro, setClaustro] = useState([]);
  const [eventosAnterior, setEventosAnterior] = useState([]);
  const [resultadoEjercicios, setResultadoEjercicios] = useState([]);
  const [investigacion, setInvestigacion] = useState([]);
  const [ del , setDel] = useState(false)
  const [insert, setInsert] = useState(false)
  const [notification,setNotification]= useState(false)
  const [messageSucces,setMessageSucces] = useState('')
  const [notificationType, setNotificationType] = useState(null) // 'insert', 'delete', o null

  return (
    <TableContext.Provider
      value={{
        asignatura,
        setAsignatura,
        disciplina,
        setDisciplina,
        profesorPrincipal,
        setProfesorPrincipal,
        usuario,
        setUsuario,
        profesor,
        setProfesor,
        publicacion,
        setPublicacion,
        eventos,
        setEventos,
        premiosProfesor,
        setPremiosProfesor,
        sedeUniversitaria,
        setSedeUniversitaria,
        promocion,
        setPromocion,
        curso,
        setCurso,
        totalGraduados,
        setTotalGraduados,
        posgrado,
        setPosgrado,
        premiosEstudiantes,
        setPremiosEstudiantes,
        incorporacionInvestigacion,
        setIncorporacionInvestigacion,
        ejercicioIntegradores,
        setEjerciciosIntegradores,
        matricula,
        setMatricula,
        ayudantia,
        setAyudantia,
        nivelAcreditacion,
        setNivelAcreditacion,
        existenciaPosgrado,
        setExistenciaPosgrado,
        publicaciones,
        setPublicaciones,
        claustro,
        setClaustro,
        eventosAnterior,
        setEventosAnterior,
        resultadoEjercicios,
        setResultadoEjercicios,
        investigacion,
        setInvestigacion,
        del,
        setDel,
        insert,
        setInsert,
        notification,setNotification,
        messageSucces,setMessageSucces,
        notificationType,setNotificationType
      }}
    >
      {children}
    </TableContext.Provider>
  );
}

export const tableUse = () => useContext(TableContext);
