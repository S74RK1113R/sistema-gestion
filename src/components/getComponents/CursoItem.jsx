import { tableUse } from "../../context/TablesContext";
import { useState, useRef } from "react";
import Input from "../Input";

export default function CursoItem({ curso, id }) {
  const { setCurso, del, setDel, insert, setInsert } = tableUse();
  const [showModal, setShowModal] = useState(false);
  const newCursoRef = useRef();

  function deleteItem(id) {
    const url = `http://localhost:3002/api/cursos/${id}`;
    setDel(!del);

    fetch(url, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((json) => setCurso(json.data || []));
  }

  function modifyItem() {
    event.preventDefault();
    const url = `http://localhost:3002/api/cursos/${id}`;
    const newCurso = {
      curso: newCursoRef.current.value,
    };

    fetch(url, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newCurso),
    })
      .then((res) => {
        if (!res.ok) {
          return res.json();
        }
      })
      .then((json) => setCurso(json?.data || []));

    setInsert(!insert);
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
          onClick={() => setShowModal(true)}
          className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg "
        >
          Modificar
        </button>
      </div>

      {showModal && (
        <form onSubmit={modifyItem}>
          <div className="fixed inset-0 flex items-center justify-center gap-5 overflow-auto">
            <div className="bg-zinc-100 p-6 rounded-lg shadow-xl shadow-black/50 grid grid-cols-2 gap-5 max-w-11/12 max-h-11/12 overflow-auto">
              <h2 className="text-xl font-bold col-span-2">Modificar Curso</h2>

              <div className="col-span-2 flex flex-col justify-center items-center mx-auto gap-2">
                <label htmlFor="curso">Curso:</label>
                <Input type="text" inputName="curso" defaultValue={curso} ref={newCursoRef} />
              </div>

              <button type="submit" className="bg-blue-500 row-start-3 text-white px-4 py-2 rounded hover:bg-blue-600">Guardar Cambios</button>
              <button type="button" className="bg-zinc-500 row-start-3 text-white px-4 py-2 mx-5 rounded hover:bg-red-600" onClick={() => setShowModal(false)}>Cancelar</button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
