import { tableUse } from "../../context/TablesContext";

export default function AyudantiaItem({
  id,
  educacion_superior_1er_año,
  educacion_superior_2do_año,
  educacion_superior_3er_año,
  educacion_superior_4to_año,
  educacion_superior_5to_año,
  educacion_media_1er_año,
  educacion_media_2do_año,
  educacion_media_3er_año,
  educacion_media_4to_año,
  educacion_media_5to_año,
  año_evaluacion,
}) {
  const { setAyudantia, del, setDel} = tableUse();

  function deleteItem(id) {
    const url = `http://localhost:3002/api/ayudantias/${id}`;
    setDel(!del)

    fetch(url, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((json) => setAyudantia(json.data || []));
  }

  return (
    <div className="mb-5 border border-black w-11/12 flex flex-col items-center justify-center shadow-lg shadow-zinc-950/60 p-5 rounded-lg">
      <h1 className="font-bold">Educación superior 1er año:</h1>
      <div>{educacion_superior_1er_año}</div>
      <h1 className="font-bold">Educación superior 2do año:</h1>
      <div>{educacion_superior_2do_año}</div>
      <h1 className="font-bold">Educación superior 3er año:</h1>
      <div>{educacion_superior_3er_año}</div>
      <h1 className="font-bold">Educación superior 4to año:</h1>
      <div>{educacion_superior_4to_año}</div>
      <h1 className="font-bold">Educación superior 5to año:</h1>
      <div>{educacion_superior_5to_año}</div>

      <h1 className="font-bold">Educación media 1er año:</h1>
      <div>{educacion_media_1er_año}</div>
      <h1 className="font-bold">Educación media 2do año:</h1>
      <div>{educacion_media_2do_año}</div>
      <h1 className="font-bold">Educación media 3er año:</h1>
      <div>{educacion_media_3er_año}</div>
      <h1 className="font-bold">Educación media 4to año:</h1>
      <div>{educacion_media_4to_año}</div>
      <h1 className="font-bold">Educación media 5to año:</h1>
      <div>{educacion_media_5to_año}</div>

      <h1 className="font-bold">Año de la evaluación:</h1>
      <div>{año_evaluacion}</div>

      <div className="flex flex-row gap-4 mt-4">
        <button
          onClick={()=>{deleteItem(id)}}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
        >
          Borrar
        </button>
        <button
          data-id={id}
          className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg "
        >
          Modificar
        </button>
      </div>
    </div>
  );
}
