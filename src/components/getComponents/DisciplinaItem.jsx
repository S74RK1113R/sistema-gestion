import { useRef } from "react";
import { tableUse } from "../../context/TablesContext";
import { useState } from "react";
import Input from "../Input";
import { useUser } from "../../context/UserContext";

export default function DisciplinaItem({ nombre, codigo, id }) {
  const { setDisciplina, del, setDel, setInsert, insert } = tableUse();
  const [showModal, setShowModal] = useState(false);
  const {isAdmin,isDirective} = useUser()

  const newNombreRef = useRef();
  const newCodigoRef = useRef();

  function deleteItem(id) {
    const url = `http://localhost:3002/api/disciplinas/${id}`;
    setDel(!del);

    fetch(url, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((json) => setDisciplina(json.data || []));
  }

  function modifyItem() {
    event.preventDefault();
    const url = `http://localhost:3002/api/disciplinas/${id}`;
    const newDisciplina = {
      nombre: newNombreRef.current.value,
      codigo: newCodigoRef.current.value,
    };

    fetch(url, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      // Send your data in the request body as JSON
      body: JSON.stringify(newDisciplina),
    })
      .then((res) => {
        if (!res.ok) {
          return res.json();
        }
        // handle error
      })
      .then((json) => setDisciplina(json?.data || []));

    setInsert(!insert);
  }

  return (
    <div className="border border-black w-11/12 flex flex-col items-center justify-center shadow-lg shadow-zinc-950/60 p-5 rounded-lg">
      <h1 className="font-bold">Nombre de disciplina:</h1>
      <div>{nombre}</div>
      <h1 className="font-bold">Codigo de disciplina:</h1>
      <div>{codigo}</div>

      {(isAdmin || isDirective) && <div className="flex flex-row gap-4 mt-4">
        <button
          onClick={() => {
            deleteItem(id);
          }}
          data-id={id}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
        >
          Borrar
        </button>
        <button
          onClick={() => setShowModal(true)}
          className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg "
        >
          Modificar
        </button>
      </div>}

      {/*Modal de modificacion*/}

      {showModal && (
        <form onSubmit={modifyItem}>
          <div className="fixed inset-0 flex items-center justify-center">
            <div className="bg-zinc-100 p-6 rounded-lg shadow-xl shadow-black/50 grid grid-cols-2 gap-5 max-w-11/12 max-h-11/12 overflow-auto">
              <h2 className="text-xl font-bold col-span-2">Modificar Disciplina</h2>
              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label className="block text-gray-700">Nombre:</label>
                <Input type="text" defaultValue={nombre} ref={newNombreRef} />
              </div>
              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label className="block text-gray-700">Código:</label>
                <Input type="text" defaultValue={codigo} ref={newCodigoRef} />
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Guardar Cambios
              </button>
              <button
                type="button"
                className="bg-zinc-500 text-white px-4 py-2 mx-5 rounded hover:bg-red-600"
                onClick={() => setShowModal(false)}
              >
                Cancelar
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
