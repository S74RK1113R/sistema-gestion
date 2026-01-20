import { tableUse } from "../../context/TablesContext";

export default function UsuariosItem({
  usuario,
  nombres,
  primer_apellido,
  segundo_apellido,
  rol,
  id,
}) {
  const { setUsuario, del, setDel } = tableUse();

  function deleteItem(id) {
    const url = `http://localhost:3002/api/usuarios/${id}`;
    setDel(!del);

    fetch(url, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((json) => setUsuario(json.data || []));
  }

  return (
    <div className="mb-5 border border-black w-11/12 flex flex-col items-center justify-center shadow-lg shadow-zinc-950/60 p-5 rounded-lg">
      <h1 className="font-bold">Nombre de usuario:</h1>
      <div>{usuario}</div>
      <h1 className="font-bold">Nombre/s:</h1>
      <div>{nombres}</div>
      <h1 className="font-bold">Primer apellido:</h1>
      <div>{primer_apellido}</div>
      <h1 className="font-bold">Segundo apellido:</h1>
      <div>{segundo_apellido}</div>
      <h1 className="font-bold">Rol:</h1>
      <div>{rol}</div>

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
