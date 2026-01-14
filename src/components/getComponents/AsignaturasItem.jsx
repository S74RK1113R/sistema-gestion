import { tableUse } from "../../context/TablesContext"

export default function DisciplinaItem({ nombre, codigo, disciplinas_id, intranet, bibliografia, año, periodo, modalidad,curriculo, id }) {
     const {setAsignatura,del,setDel} = tableUse()
    
        function deleteItem (id){
            const url = `http://localhost:3002/api/asignaturas/${id}`
            setDel(!del)
            
            fetch(url, {
            method: "DELETE",
            })
            .then((response) => response.json())
            .then((json) => setAsignatura(json.data || []))
        }

    return(
        <div className="border border-black w-11/12 flex flex-col items-center justify-center shadow-lg shadow-zinc-950/60 p-5 rounded-lg mb-5">
            <h1 className="font-bold">Nombre de asignatura:</h1>
            <div>{nombre}</div>
            <h1 className="font-bold">Codigo de asignatura:</h1>
            <div>{codigo}</div>
            <h1 className="font-bold">Disciplina:</h1>
            <div>{disciplinas_id}</div>
            <h1 className="font-bold">Intranet:</h1>
            <div>{intranet}</div>
            <h1 className="font-bold">Bibliografía:</h1>
            <div>{bibliografia}</div>
            <h1 className="font-bold">Año:</h1>
            <div>{año}</div>
            <h1 className="font-bold">Periodo:</h1>
            <div>{periodo}</div>
            <h1 className="font-bold">Modalidad:</h1>
            <div>{modalidad}</div>
            <h1 className="font-bold">Currículo:</h1>
            <div>{curriculo}</div>

            <div className="flex flex-row gap-4 mt-4">
                <button onClick={()=>{deleteItem(id)}} className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">Borrar</button>
                <button data-id={id} className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg ">Modificar</button>
            </div>
        </div>
    )
}