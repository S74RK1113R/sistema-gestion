export default function TotalGraduadosItem({cd,cpe,curso_id, id }) {
    return(
        <div className="border border-black w-11/12 flex flex-col items-center justify-center shadow-lg shadow-zinc-950/60 p-5 rounded-lg">
            <h1 className="font-bold">Curso diurno:</h1>
            <div>{cd}</div>
            <h1 className="font-bold">Curso por encuentro:</h1>
            <div>{cpe}</div>
            <h1 className="font-bold">Curso:</h1>
            <div>{curso_id}</div>

            <div className="flex flex-row gap-4 mt-4">
                <button data-id={id} className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">Borrar</button>
                <button data-id={id} className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg ">Modificar</button>
            </div>
        </div>
    )
}