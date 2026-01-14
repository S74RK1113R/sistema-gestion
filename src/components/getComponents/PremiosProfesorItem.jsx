import { tableUse } from "../../context/TablesContext";


export default function PremiosProfesorItem({
  profesor_id,
  nombre_premio,
  año,
  id,
}) {
    const { setPremiosProfesor, del, setDel } = tableUse();
    
      function deleteItem(id) {
        const url = `http://localhost:3002/api/premios_profesor/${id}`;
        setDel(!del);
    
        fetch(url, {
          method: "DELETE",
        })
          .then((response) => response.json())
          .then((json) => setPremiosProfesor(json.data || []));
      }
  return (
    <div className="mb-5 border border-black w-11/12 flex flex-col items-center justify-center shadow-lg shadow-zinc-950/60 p-5 rounded-lg">
      <h1 className="font-bold">Nombre del profesor:</h1>
      <div>{profesor_id}</div>
      <h1 className="font-bold">Nombre del premio:</h1>
      <div>{nombre_premio}</div>
      <h1 className="font-bold">Año:</h1>
      <div>{año}</div>

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
