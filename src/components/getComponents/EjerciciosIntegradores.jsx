export default function MatriculaItem({año,matricula,evaluados,con_2,con_3,con_4,con_5, año_evaluacion, id }) {
    return(
        <div className="border border-black w-11/12 flex flex-col items-center justify-center shadow-lg shadow-zinc-950/60 p-5 rounded-lg">
            <h1 className="font-bold">Año académico:</h1>
            <div>{año}</div>
            <h1 className="font-bold">Matricula:</h1>
            <div>{matricula}</div>
            <h1 className="font-bold">Evaluados:</h1>
            <div>{evaluados}</div>
            <h1 className="font-bold">Evaluados con 2:</h1>
            <div>{con_2}</div>
            <h1 className="font-bold">Evaluados con 3:</h1>
            <div>{con_3}</div>
            <h1 className="font-bold">Evaluados con 4:</h1>
            <div>{con_4}</div>
            <h1 className="font-bold">Evaluados con 5:</h1>
            <div>{con_5}</div>
            <h1 className="font-bold">Año de la evaluación:</h1>
            <div>{año_evaluacion}</div>

            <div className="flex flex-row gap-4 mt-4">
                <button data-id={id} className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">Borrar</button>
                <button data-id={id} className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg ">Modificar</button>
            </div>
        </div>
    )
}