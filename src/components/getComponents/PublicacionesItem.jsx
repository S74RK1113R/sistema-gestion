export default function DisciplinaItem({grupos1_4,total, año_evaluacion, id }) {
    return(
        <div className="border border-black w-11/12 flex flex-col items-center justify-center shadow-lg shadow-zinc-950/60 p-5 rounded-lg">
            <h1 className="font-bold">Grupos del 1 al 4:</h1>
            <div>{grupos1_4}</div>
            <h1 className="font-bold">Total:</h1>
            <div>{total}</div>
            <h1 className="font-bold">Año de la evaluación:</h1>
            <div>{año_evaluacion}</div>


            <div className="flex flex-row gap-4 mt-4">
                <button data-id={id} className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">Borrar</button>
                <button data-id={id} className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg ">Modificar</button>
            </div>
        </div>
    )
}