import { tableUse } from "../../context/TablesContext";


export default function CursoItem({ curso, id }) {
  const { setCurso, del, setDel } = tableUse();

  function deleteItem(id) {
    const url = `http://localhost:3002/api/cursos/${id}`;
    setDel(!del);

    fetch(url, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((json) => setCurso(json.data || []));
  }

  return (
    <div className="border border-black w-11/12 flex flex-col items-center justify-center shadow-lg shadow-zinc-950/60 p-5 rounded-lg">
      <h1 className="font-bold">Curso:</h1>
      <div>{curso}</div>

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
