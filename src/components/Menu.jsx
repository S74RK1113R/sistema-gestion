import DropDownItem from "./DropDownItem";
import DropItem from "./DropItem";
import Item from "./Item";

export default function Menu() {
    return(
        <menu className="bg-blue-300 w-3/12 h-full p-2 overflow-y-scroll">
            <ul className="flex flex-col gap-1 font-bold text-zinc-50 Item-center text-center">
                <Item className="bg-blue-800 w-full rounded-md p-1 hover:bg-blue-700">Usuarios</Item>
                <Item className="bg-blue-800 w-full rounded-md p-1 hover:bg-blue-700">Disciplinas</Item>
                <Item className="bg-blue-800 w-full rounded-md p-1 hover:bg-blue-700">Asignatura</Item>
                
                <DropDownItem identification={"Evaluación anterior"}>
                    <DropItem className="bg-blue-800 w-full rounded-md p-1 hover:bg-blue-700">Nivel acreditación</DropItem>
                    <DropItem className="bg-blue-800 w-full rounded-md p-1 hover:bg-blue-700">Claustro</DropItem> 
                    <DropItem className="bg-blue-800 w-full rounded-md p-1 hover:bg-blue-700">Eventos</DropItem>
                    <DropItem className="bg-blue-800 w-full rounded-md p-1 hover:bg-blue-700">Publicaciones</DropItem>
                    <DropItem className="bg-blue-800 w-full rounded-md p-1 hover:bg-blue-700">Resultado ejercicios integradores</DropItem>
                    <DropItem className="bg-blue-800 w-full rounded-md p-1 hover:bg-blue-700">Investigación</DropItem>
                    <DropItem className="bg-blue-800 w-full rounded-md p-1 hover:bg-blue-700">Existencia de posgrados</DropItem>
                </DropDownItem>

                <Item className="bg-blue-800 w-full rounded-md p-1 hover:bg-blue-700">Profesor</Item>
                <Item className="bg-blue-800 w-full rounded-md p-1 hover:bg-blue-700">Profesor principal</Item>
                <Item className="bg-blue-800 w-full rounded-md p-1 hover:bg-blue-700">Premios profesor</Item>
                
                <DropDownItem identification={"Estudiantes"}>
                    <DropItem>Proyecto de investigación del claustro</DropItem>
                    <DropItem>Estudiantes investigando</DropItem>
                    <DropItem>Profesores incorporados</DropItem>
                    <DropItem>Matrícula</DropItem>
                    <DropItem>Ayudantía</DropItem>
                    <DropItem>Ejercicios integradores</DropItem>
                </DropDownItem>
                
                <Item className="bg-blue-800 w-full rounded-md p-1 hover:bg-blue-700">Premios estudiantes</Item>
                <Item className="bg-blue-800 w-full rounded-md p-1 hover:bg-blue-700">Publicación</Item>
                <Item className="bg-blue-800 w-full rounded-md p-1 hover:bg-blue-700">Total graduados</Item>
                <Item className="bg-blue-800 w-full rounded-md p-1 hover:bg-blue-700">Promoción</Item>
                <Item className="bg-blue-800 w-full rounded-md p-1 hover:bg-blue-700">Posgrado</Item>
                <Item className="bg-blue-800 w-full rounded-md p-1 hover:bg-blue-700">Sede universitaria</Item>

                <DropDownItem identification={"Reportes"}>
                    <DropItem>Reporte 1</DropItem>
                </DropDownItem>
            </ul>
        </menu>
    )
}