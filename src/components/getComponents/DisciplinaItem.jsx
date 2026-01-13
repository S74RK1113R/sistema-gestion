
export default function DisciplinaItem({nombre,codigo, id}) {

    function deleteItem (id){
        const url = `http://localhost:3002/api/disciplinas/${id}`

        fetch(url, {
        method: "DELETE",
        })
    }

    return(
        <div className="border border-black w-11/12 flex flex-col items-center justify-center shadow-lg shadow-zinc-950/60 p-5 rounded-lg">
            <h1 className="font-bold">Nombre de disciplina:</h1>
            <div>{nombre}</div>
            <h1 className="font-bold">Codigo de disciplina:</h1>
            <div>{codigo}</div>

            <div className="flex flex-row gap-4 mt-4">
                <button data-id={id} className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">Borrar</button>
                <button data-id={id} className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg ">Modificar</button>
            </div>
        </div>
    )
}