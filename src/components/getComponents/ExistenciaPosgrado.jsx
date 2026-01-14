import { tableUse } from "../../context/TablesContext";

export default function ExistenciaPosgradoItem({
  existencia,
  año_evaluacion,
  id,
}) {
  const { setExistenciaPosgrado, del, setDel } = tableUse();

  function deleteItem(id) {
    const url = `http://localhost:3002/api/existencia_posgrado/${id}`;
    setDel(!del);

    fetch(url, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((json) => setExistenciaPosgrado(json.data || []));
  }

  return (
    <div className="mb-5 border border-black w-11/12 flex flex-col items-center justify-center shadow-lg shadow-zinc-950/60 p-5 rounded-lg">
      <h1 className="font-bold">Existencia de posgrado:</h1>
      <div>{existencia}</div>
      <h1 className="font-bold">Año de evaluación:</h1>
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
