export default function EstudiantesInvestigandoItem({p1er_año,s2do_año, t3er_año,c4to_año ,q5to_año,año_evaluacion, id }) {
    return(
        <div className="border border-black w-11/12 flex flex-col items-center justify-center shadow-lg shadow-zinc-950/60 p-5 rounded-lg">
            <h1 className="font-bold">1er Año:</h1>
            <div>{p1er_año}</div>
            <h1 className="font-bold">2er Año:</h1>
            <div>{s2do_año}</div>
            <h1 className="font-bold">3er Año:</h1>
            <div>{t3er_año}</div>
            <h1 className="font-bold">4er Año:</h1>
            <div>{c4to_año}</div>
            <h1 className="font-bold">5er Año:</h1>
            <div>{q5to_año}</div>
            <h1 className="font-bold">Año de la evaluación:</h1>
            <div>{año_evaluacion}</div>

            <div className="flex flex-row gap-4 mt-4">
                <button data-id={id} className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">Borrar</button>
                <button data-id={id} className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg ">Modificar</button>
            </div>
        </div>
    )
}