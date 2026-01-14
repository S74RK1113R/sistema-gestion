import { tableUse } from "../../context/TablesContext";

export default function EventosAnteriorItem({
  nacional_internacional,
  total,
  año_evaluacion,
  id,
}) {
  const { setEventosAnterior, del, setDel } = tableUse();

  function deleteItem(id) {
    const url = `http://localhost:3002/api/eventos_anterior/${id}`;
    setDel(!del);

    fetch(url, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((json) => setEventosAnterior(json.data || []));
  }

  return (
    <div className="mb-5 border border-black w-11/12 flex flex-col items-center justify-center shadow-lg shadow-zinc-950/60 p-5 rounded-lg">
      <h1 className="font-bold">Nacional/Internacional:</h1>
      <div>{nacional_internacional}</div>
      <h1 className="font-bold">Total:</h1>
      <div>{total}</div>
      <h1 className="font-bold">Año de evaluación:</h1>
      <div>{año_evaluacion}</div>

      <div className="flex flex-row gap-4 mt-4">
        <button
          onClick={() => {
            deleteItem(id);
          }}
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
