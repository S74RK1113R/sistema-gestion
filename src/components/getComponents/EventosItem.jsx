import { tableUse } from "../../context/TablesContext";

export default function EventosItem({
  año,
  titulo,
  nombre_evento,
  clasificacion,
  profesor_id,
  profesor_autor_id2,
  profesor_autor_id3,
  profesor_autor_id4,
  profesor_autor_id5,
  id,
}) {
  const { setEventos, del, setDel } = tableUse();

  function deleteItem(id) {
    const url = `http://localhost:3002/api/eventos/${id}`;
    setDel(!del);

    fetch(url, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((json) => setEventos(json.data || []));
  }

  return (
    <div className="border border-black w-11/12 flex flex-col items-center justify-center shadow-lg shadow-zinc-950/60 p-5 rounded-lg">
      <h1 className="font-bold">Año:</h1>
      <div>{año}</div>
      <h1 className="font-bold">Título:</h1>
      <div>{titulo}</div>
      <h1 className="font-bold">Nombre del evento:</h1>
      <div>{nombre_evento}</div>
      <h1 className="font-bold">Clasificación:</h1>
      <div>{clasificacion}</div>
      <h1 className="font-bold">Nombre del profesor 1:</h1>
      <div>{profesor_id}</div>
      <h1 className="font-bold">Nombre del profesor 2:</h1>
      <div>{profesor_autor_id2}</div>

      {profesor_autor_id3 != 0 && (
        <div>
          <h1 className="font-bold">Nombre del profesor 3:</h1>
          <div>{profesor_autor_id3}</div>
        </div>
      )}

      {profesor_autor_id4 != 0 && (
        <div>
          <h1 className="font-bold">Nombre del profesor 4:</h1>
          <div>{profesor_autor_id4}</div>
        </div>
      )}


      {profesor_autor_id5 != 0 && (
        <div>
          <h1 className="font-bold">Nombre del profesor 5:</h1>
          <div>{profesor_autor_id5}</div>
        </div>
      )}

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
