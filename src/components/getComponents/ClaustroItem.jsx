export default function ClaustroItem({total_claustro, drc, drc_equivalentes,drc_afin,mc_equivalentes,pt_pa,año_evaluacion, id }) {
    return(
        <div className="border border-black w-11/12 flex flex-col items-center justify-center shadow-lg shadow-zinc-950/60 p-5 rounded-lg">
            <h1 className="font-bold">Total del claustro:</h1>
            <div>{total_claustro}</div>
            <h1 className="font-bold">DRC:</h1>
            <div>{drc}</div>
            <h1 className="font-bold">DRC equivalentes:</h1>
            <div>{drc_equivalentes}</div>
            <h1 className="font-bold">DRC afines:</h1>
            <div>{drc_afin}</div>
            <h1 className="font-bold">MC equivalentes:</h1>
            <div>{mc_equivalentes}</div>
            <h1 className="font-bold">PT-PA:</h1>
            <div>{pt_pa}</div>
            <h1 className="font-bold">Año de evaluación:</h1>
            <div>{año_evaluacion}</div>

            <div className="flex flex-row gap-4 mt-4">
                <button data-id={id} className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">Borrar</button>
                <button data-id={id} className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg ">Modificar</button>
            </div>
        </div>
    )
}