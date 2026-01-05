import DropDownItem from "./DropDownItem";
import DropItem from "./DropItem";
import Item from "./Item";

export default function Menu() {
    return(
        <menu className="bg-blue-300 w-full h-full p-2 overflow-y-scroll scroll">
            <ul className="flex flex-col gap-1 font-bold text-zinc-50 items-center text-center">
                <Item href={"/usuarios"}>Usuarios</Item>
                <Item href={"/disciplinas"}>Disciplinas</Item>
                <Item href={"/asignaturas"}>Asignatura</Item>

                <DropDownItem identification={"Evaluación anterior"}>
                    <DropItem href={"/nivel_acreditacion"}>Nivel acreditación</DropItem>
                    <DropItem href={"/claustro"}>Claustro</DropItem> 
                    <DropItem href={"/eventos"}>Eventos</DropItem>
                    <DropItem href={"/publicaciones"}>Publicaciones</DropItem>
                    <DropItem href={"/resultado_ejercicios_integradores"}>Resultado ejercicios integradores</DropItem>
                    <DropItem href={"/investigacion"}>Investigación</DropItem>
                    <DropItem href={"/existencia_de_posgrado"}>Existencia de posgrados</DropItem>
                </DropDownItem>

                <Item href={"/profesor"}>Profesor</Item>
                <Item href={"/profesor_principal"}>Profesor principal</Item>
                <Item href={"/premios_profesor"}>Premios profesor</Item>
                
                <DropDownItem identification={"Estudiantes"}>
                    <DropItem href={"/proyecto_de_investigacion_del_claustro"}>Proyecto de investigación del claustro</DropItem>
                    <DropItem href={"/estudiantes_investigando"}>Estudiantes investigando</DropItem>
                    <DropItem href={"/profesores_incorporados"}>Profesores incorporados</DropItem>
                    <DropItem href={"/matricula"}>Matrícula</DropItem>
                    <DropItem href={"/ayudantia"}>Ayudantía</DropItem>
                    <DropItem href={"/ejercicios_integradores"}>Ejercicios integradores</DropItem>
                </DropDownItem>

                <Item href={"/premios_estudiantes"}>Premios estudiantes</Item>
                <Item href={"/publicacion"}>Publicación</Item>
                <Item href={"/total_graudados"}>Total graduados</Item>
                <Item href={"/promocion"}>Promoción</Item>
                <Item href={"/posgrado"}>Posgrado</Item>
                <Item href={"/sede_universitaria"}>Sede universitaria</Item>

                <DropDownItem identification={"Reportes"}>
                    <DropItem>Reporte 1</DropItem>
                </DropDownItem>
            </ul>
        </menu>
    )
}