export default function DisciplinaItem({ nombre, codigo }) {
    return(
        <div className="w-11/12 flex flex-col items-center justify-center shadow-lg shadow-zinc-950/60 p-5 rounded-lg">
            <h1 className="font-bold">Nombre de disciplina:</h1>
            <div>aaa{nombre}</div>
            <h1 className="font-bold">Codigo de disciplina:</h1>
            <div>aaa{codigo}</div>

            <div className="flex flex-row gap-4 mt-4">
                <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">Borrar</button>
                <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg ">Modificar</button>
            </div>
        </div>
    )
}