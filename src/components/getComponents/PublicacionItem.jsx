export default function PublicacionItem({año, titulo, revista_editorial,isbn_issn,clasificacion,bd_revista,autor_profesor_id,coautor_id,coautor_id_2,coautor_id_3,grupo, id }) {
    return(
        <div className="border border-black w-11/12 flex flex-col items-center justify-center shadow-lg shadow-zinc-950/60 p-5 rounded-lg">
            <h1 className="font-bold">Año:</h1>
            <div>{año}</div>
            <h1 className="font-bold">Titulo:</h1>
            <div>{titulo}</div>
            <h1 className="font-bold">Revista/Editorial:</h1>
            <div>{revista_editorial}</div>
            <h1 className="font-bold">ISBN/ISSN:</h1>
            <div>{isbn_issn}</div>
            <h1 className="font-bold">Clasificación:</h1>
            <div>{clasificacion}</div>
            <h1 className="font-bold">Base de datos de revista:</h1>
            <div>{bd_revista}</div>
            <h1 className="font-bold">Autor principal:</h1>
            <div>{autor_profesor_id}</div>
            <h1 className="font-bold">Coautor:</h1>
            <div>{coautor_id}</div>
            <h1 className="font-bold">Coautor 2:</h1>
            <div>{coautor_id_2}</div>
            <h1 className="font-bold">Coautor 3:</h1>
            <div>{coautor_id_3}</div>
            <h1 className="font-bold">Grupo:</h1>
            <div>{grupo}</div>

            <div className="flex flex-row gap-4 mt-4">
                <button data-id={id} className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">Borrar</button>
                <button data-id={id} className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg ">Modificar</button>
            </div>
        </div>
    )
}