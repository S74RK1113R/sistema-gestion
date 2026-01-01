import DropDownItem from "./DropDownItem";
import DropItems from "./DropItems";
import Items from "./Items";

export default function Menu() {
    return(
        <menu className="bg-blue-300 w-3/12 h-full p-2 overflow-y-scroll">
            <ul className="flex flex-col gap-1 font-bold text-zinc-50 items-center text-center">
                <Items className="bg-blue-800 w-full rounded-md p-1 hover:bg-blue-700">Usuarios</Items>
                <Items className="bg-blue-800 w-full rounded-md p-1 hover:bg-blue-700">Disciplinas</Items>
                <Items className="bg-blue-800 w-full rounded-md p-1 hover:bg-blue-700">Asignatura</Items>
                
                <DropDownItem identification={"Evaluación anterior"}>
                    <DropItems className="bg-blue-800 w-full rounded-md p-1 hover:bg-blue-700">Nivel acreditación</DropItems>
                    <DropItems className="bg-blue-800 w-full rounded-md p-1 hover:bg-blue-700">Claustro</DropItems> 
                    <DropItems className="bg-blue-800 w-full rounded-md p-1 hover:bg-blue-700">Eventos</DropItems>
                    <DropItems className="bg-blue-800 w-full rounded-md p-1 hover:bg-blue-700">Publicaciones</DropItems>
                    <DropItems className="bg-blue-800 w-full rounded-md p-1 hover:bg-blue-700">Resultado ejercicios integradores</DropItems>
                    <DropItems className="bg-blue-800 w-full rounded-md p-1 hover:bg-blue-700">Investigación</DropItems>
                    <DropItems className="bg-blue-800 w-full rounded-md p-1 hover:bg-blue-700">Existencia de posgrados</DropItems>
                </DropDownItem>

                <Items className="bg-blue-800 w-full rounded-md p-1 hover:bg-blue-700">Profesor</Items>
                <Items className="bg-blue-800 w-full rounded-md p-1 hover:bg-blue-700">Profesor principal</Items>
                <Items className="bg-blue-800 w-full rounded-md p-1 hover:bg-blue-700">Premios profesor</Items>
                
                <DropDownItem identification={"Estudiantes"}>
                    <DropItems>Proyecto de investigación del claustro</DropItems>
                    <DropItems>Estudiantes investigando</DropItems>
                    <DropItems>Profesores incorporados</DropItems>
                    <DropItems>Matrícula</DropItems>
                    <DropItems>Ayudantía</DropItems>
                    <DropItems>Ejercicios integradores</DropItems>
                </DropDownItem>
                
                <Items className="bg-blue-800 w-full rounded-md p-1 hover:bg-blue-700">Premios estudiantes</Items>
                <Items className="bg-blue-800 w-full rounded-md p-1 hover:bg-blue-700">Publicación</Items>
                <Items className="bg-blue-800 w-full rounded-md p-1 hover:bg-blue-700">Total graduados</Items>
                <Items className="bg-blue-800 w-full rounded-md p-1 hover:bg-blue-700">Promoción</Items>
                <Items className="bg-blue-800 w-full rounded-md p-1 hover:bg-blue-700">Posgrado</Items>
                <Items className="bg-blue-800 w-full rounded-md p-1 hover:bg-blue-700">Sede universitaria</Items>
            </ul>
        </menu>
    )
}