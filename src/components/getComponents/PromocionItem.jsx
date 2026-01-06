export default function PromocionItem({año_academico, mie, aprobados_limpios, aprobados_con_1, aprobados_con_2, bajas, curso_id, id}) {
    return(
        <div className="border border-black w-11/12 flex flex-col items-center justify-center shadow-lg shadow-zinc-950/60 p-5 rounded-lg">
            <h1 className="font-bold">Año academico:</h1>
            <div>{año_academico}</div>
            <h1 className="font-bold">Mie:</h1>
            <div>{mie}</div>
            <h1 className="font-bold">Aprobados limpios:</h1>
            <div>{aprobados_limpios}</div>
            <h1 className="font-bold">Aprobados con 1:</h1>
            <div>{aprobados_con_1}</div>
            <h1 className="font-bold">Aprobados con 2:</h1>
            <div>{aprobados_con_2}</div>
            <h1 className="font-bold">Bajas:</h1>
            <div>{bajas}</div>
            <h1 className="font-bold">Curso</h1>
            <div>{curso_id}</div>

            <div className="flex flex-row gap-4 mt-4">
                <button data-id={id} className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">Borrar</button>
                <button data-id={id} className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg ">Modificar</button>
            </div>
        </div>
    )
}