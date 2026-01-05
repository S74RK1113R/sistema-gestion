import DropDownItem from "./DropDownItem";
import DropItem from "./DropItem";
import Item from "./Item";

export default function Menu() {
    return(
        <menu className="bg-blue-300 w-full h-full p-2 overflow-y-scroll scroll">
            <ul className="flex flex-col gap-1 font-bold text-zinc-50 items-center text-center">
                <Item>Usuarios</Item>
                <Item>Disciplinas</Item>
                <Item>Asignatura</Item>
                
                <DropDownItem identification={"Evaluación anterior"}>
                    <DropItem>Nivel acreditación</DropItem>
                    <DropItem>Claustro</DropItem> 
                    <DropItem>Eventos</DropItem>
                    <DropItem>Publicaciones</DropItem>
                    <DropItem>Resultado ejercicios integradores</DropItem>
                    <DropItem>Investigación</DropItem>
                    <DropItem>Existencia de posgrados</DropItem>
                </DropDownItem>

                <Item>Profesor</Item>
                <Item>Profesor principal</Item>
                <Item>Premios profesor</Item>
                
                <DropDownItem identification={"Estudiantes"}>
                    <DropItem>Proyecto de investigación del claustro</DropItem>
                    <DropItem>Estudiantes investigando</DropItem>
                    <DropItem>Profesores incorporados</DropItem>
                    <DropItem>Matrícula</DropItem>
                    <DropItem>Ayudantía</DropItem>
                    <DropItem>Ejercicios integradores</DropItem>
                </DropDownItem>
                
                <Item>Premios estudiantes</Item>
                <Item>Publicación</Item>
                <Item>Total graduados</Item>
                <Item>Promoción</Item>
                <Item>Posgrado</Item>
                <Item>Sede universitaria</Item>

                <DropDownItem identification={"Reportes"}>
                    <DropItem>Reporte 1</DropItem>
                </DropDownItem>
            </ul>
        </menu>
    )
}