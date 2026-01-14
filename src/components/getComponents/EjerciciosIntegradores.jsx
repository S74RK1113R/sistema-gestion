import { tableUse } from "../../context/TablesContext";
export default function MatriculaItem({
    id,
    año,
    matricula, matricula_2do_año, matricula_3er_año, matricula_4to_año, matricula_5to_año,
    evaluados, evaluados_2do_año, evaluados_3er_año, evaluados_4to_año, evaluados_5to_año,
    con_2, con_2_2do_año, con_2_3er_año, con_2_4to_año, con_2_5to_año,
    con_3, con_3_2do_año, con_3_3er_año, con_3_4to_año, con_3_5to_año,
    con_4, con_4_2do_año, con_4_3er_año, con_4_4to_año, con_4_5to_año,
    con_5, con_5_2do_año, con_5_3er_año, con_5_4to_año, con_5_5to_año,
    año_evaluacion
}) {

    const { setEjerciciosIntegradores, del, setDel } = tableUse();
    
      function deleteItem(id) {
        const url = `http://localhost:3002/api/ejercicios_integradores/${id}`;
        setDel(!del);
    
        fetch(url, {
          method: "DELETE",
        })
          .then((response) => response.json())
          .then((json) => setEjerciciosIntegradores(json.data || []));
      }

    return (
        <div className="border border-black w-11/12 flex flex-col items-center justify-center shadow-lg shadow-zinc-950/60 p-5 rounded-lg">
            <h1 className="font-bold">Año académico:</h1>
            <div>{año}</div>

            <h1 className="font-bold">Matrícula 1er año:</h1>
            <div>{matricula}</div>
            <h1 className="font-bold">Matrícula 2do año:</h1>
            <div>{matricula_2do_año}</div>
            <h1 className="font-bold">Matrícula 3er año:</h1>
            <div>{matricula_3er_año}</div>
            <h1 className="font-bold">Matrícula 4to año:</h1>
            <div>{matricula_4to_año}</div>
            <h1 className="font-bold">Matrícula 5to año:</h1>
            <div>{matricula_5to_año}</div>

            <h1 className="font-bold">Evaluados 1er año:</h1>
            <div>{evaluados}</div>
            <h1 className="font-bold">Evaluados 2do año:</h1>
            <div>{evaluados_2do_año}</div>
            <h1 className="font-bold">Evaluados 3er año:</h1>
            <div>{evaluados_3er_año}</div>
            <h1 className="font-bold">Evaluados 4to año:</h1>
            <div>{evaluados_4to_año}</div>
            <h1 className="font-bold">Evaluados 5to año:</h1>
            <div>{evaluados_5to_año}</div>

            <h1 className="font-bold">Evaluados con 2 - 1er año:</h1>
            <div>{con_2}</div>
            <h1 className="font-bold">Evaluados con 2 - 2do año:</h1>
            <div>{con_2_2do_año}</div>
            <h1 className="font-bold">Evaluados con 2 - 3er año:</h1>
            <div>{con_2_3er_año}</div>
            <h1 className="font-bold">Evaluados con 2 - 4to año:</h1>
            <div>{con_2_4to_año}</div>
            <h1 className="font-bold">Evaluados con 2 - 5to año:</h1>
            <div>{con_2_5to_año}</div>

            <h1 className="font-bold">Evaluados con 3 - 1er año:</h1>
            <div>{con_3}</div>
            <h1 className="font-bold">Evaluados con 3 - 2do año:</h1>
            <div>{con_3_2do_año}</div>
            <h1 className="font-bold">Evaluados con 3 - 3er año:</h1>
            <div>{con_3_3er_año}</div>
            <h1 className="font-bold">Evaluados con 3 - 4to año:</h1>
            <div>{con_3_4to_año}</div>
            <h1 className="font-bold">Evaluados con 3 - 5to año:</h1>
            <div>{con_3_5to_año}</div>

            <h1 className="font-bold">Evaluados con 4 - 1er año:</h1>
            <div>{con_4}</div>
            <h1 className="font-bold">Evaluados con 4 - 2do año:</h1>
            <div>{con_4_2do_año}</div>
            <h1 className="font-bold">Evaluados con 4 - 3er año:</h1>
            <div>{con_4_3er_año}</div>
            <h1 className="font-bold">Evaluados con 4 - 4to año:</h1>
            <div>{con_4_4to_año}</div>
            <h1 className="font-bold">Evaluados con 4 - 5to año:</h1>
            <div>{con_4_5to_año}</div>

            <h1 className="font-bold">Evaluados con 5 - 1er año:</h1>
            <div>{con_5}</div>
            <h1 className="font-bold">Evaluados con 5 - 2do año:</h1>
            <div>{con_5_2do_año}</div>
            <h1 className="font-bold">Evaluados con 5 - 3er año:</h1>
            <div>{con_5_3er_año}</div>
            <h1 className="font-bold">Evaluados con 5 - 4to año:</h1>
            <div>{con_5_4to_año}</div>
            <h1 className="font-bold">Evaluados con 5 - 5to año:</h1>
            <div>{con_5_5to_año}</div>

            <h1 className="font-bold">Año de la evaluación:</h1>
            <div>{año_evaluacion}</div>

            <div className="flex flex-row gap-4 mt-4">
                <button onClick={()=>{deleteItem(id)}} className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">Borrar</button>
                <button data-id={id} className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg ">Modificar</button>
            </div>
        </div>
    )
}