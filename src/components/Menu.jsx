import DropDownItem from "./DropDownItem";
import DropItem from "./DropItem";
import Item from "./Item";
import { useUser } from "../context/UserContext";

export default function Menu() {
  const { isAdmin, isDirective } = useUser();
  return (
    <menu className="bg-blue-300 w-full h-full p-2 overflow-y-scroll scroll">
      <ul className="flex flex-col gap-1 font-bold text-zinc-50 items-center text-center">
        {isAdmin && <Item href={"/usuarios"}>Usuarios</Item>}

        <Item href={"/disciplinas"}>Disciplinas</Item>
        <Item href={"/asignaturas"}>Asignatura</Item>

        <DropDownItem identification={"Evaluación anterior"}>
          <DropItem href={"/nivel_acreditacion"}>Nivel acreditación</DropItem>
          <DropItem href={"/claustro"}>Claustro</DropItem>
          <DropItem href={"/eventos_anterior"}>Eventos</DropItem>
          <DropItem href={"/publicaciones"}>Publicaciones</DropItem>
          <DropItem href={"/resultado_ejercicios_integradores"}>
            Resultado ejercicios integradores
          </DropItem>
          <DropItem href={"/investigacion"}>Investigación</DropItem>
          <DropItem href={"/existencia_de_posgrado"}>
            Existencia de posgrados
          </DropItem>
        </DropDownItem>

        <Item href={"/profesor"}>Profesor</Item>
        <Item href={"/profesor_principal"}>Profesor principal</Item>
        <Item href={"/premios_profesor"}>Premios profesor</Item>
        <Item href={"/eventos"}>Eventos</Item>

        <DropDownItem identification={"Estudiantes"}>
          <DropItem href={"/incorporacion_investigacion_cientifica"}>
            Incorporación a la investigación científica
          </DropItem>
          <DropItem href={"/matricula"}>Matrícula</DropItem>
          <DropItem href={"/ayudantia"}>Ayudantía</DropItem>
          <DropItem href={"/ejercicios_integradores"}>
            Ejercicios integradores
          </DropItem>
        </DropDownItem>

        <Item href={"/premios_estudiantes"}>Premios estudiantes</Item>
        <Item href={"/curso"}>Curso</Item>
        <Item href={"/publicacion"}>Publicación</Item>
        <Item href={"/total_graudados"}>Total graduados</Item>
        <Item href={"/promocion"}>Promoción</Item>
        <Item href={"/posgrado"}>Posgrado</Item>
        <Item href={"/sede_universitaria"}>Sede universitaria</Item>

        <DropDownItem identification={"Reportes"}>
          <DropItem>Reporte de claustro</DropItem>
          <DropItem>Reporte de grado Científico</DropItem>
          <DropItem>Reporte de datos de matrícula</DropItem>
          <DropItem>Reporte de publicaciones</DropItem>
          <DropItem>Reporte de presentacion de eventos</DropItem>
          <DropItem>Reporte de actividad de posgrado</DropItem>
          <DropItem>Reporte de resumen de premios</DropItem>
          <DropItem>Reporte de promocion</DropItem>
          <DropItem href={"/reporteEjerciciosIntegradores"}>Reporte de ejercicios integradores</DropItem>
        </DropDownItem>
      </ul>
    </menu>
  );
}
