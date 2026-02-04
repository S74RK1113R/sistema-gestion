import { tableUse } from "../../context/TablesContext";
import { useState, useRef } from "react";
import Input from "../Input";
import Select from "../Select";
import { useUser } from "../../context/UserContext";

export default function ExistenciaPosgradoItem({
  existencia,
  año_evaluacion,
  id,
}) {
  const { setExistenciaPosgrado, del, setDel, insert, setInsert } = tableUse();
  const [showModal, setShowModal] = useState(false);
  const { isAdmin, isDirective } = useUser();

  const existenciaRef = useRef();
  const añoRef = useRef();

  function deleteItem(id) {
    const url = `http://localhost:3002/api/existencia_posgrado/${id}`;
    setDel(!del);

    fetch(url, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((json) => setExistenciaPosgrado(json.data || []));
  }

  function modifyItem() {
    event.preventDefault();
    const url = `http://localhost:3002/api/existencia_posgrado/${id}`;
    const payload = {
      existencia: existenciaRef.current.value,
      año_evaluacion: añoRef.current.value,
    };

    fetch(url, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload),
    })
      .then((res) => {
        if (!res.ok) return res.json();
      })
      .then((json) => setExistenciaPosgrado(json?.data || []));

    setInsert(!insert);
  }

  return (
    <div className="mb-5 border border-black w-11/12 flex flex-col items-center justify-center shadow-lg shadow-zinc-950/60 p-5 rounded-lg">
      <h1 className="font-bold">Existencia de posgrado:</h1>
      <div>{existencia}</div>
      <h1 className="font-bold">Año de evaluación:</h1>
      <div>{año_evaluacion}</div>

      {(isAdmin || isDirective) && <div className="flex flex-row gap-4 mt-4">
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
      </div>}

      {showModal && (
        <form onSubmit={modifyItem}>
          <div className="fixed inset-0 flex items-center justify-center gap-5 overflow-auto">
            <div className="bg-zinc-100 p-6 rounded-lg shadow-xl shadow-black/50 grid grid-cols-2 gap-5 max-w-11/12 max-h-11/12 overflow-auto">
              <h2 className="text-xl font-bold col-span-2">
                Modificar Existencia Posgrado
              </h2>

              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label htmlFor="existencia_posgrado">
                  Existencia posgrado:
                </label>
                <Select
                  inputName="existencia_posgrado"
                  defaultValue={existencia}
                  ref={existenciaRef}
                >
                  <option value="existia">Existía</option>
                  <option value="no existia">No existía</option>
                </Select>
              </div>

              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label>Año de evaluación:</label>
                <Input
                  type="number"
                  defaultValue={año_evaluacion}
                  ref={añoRef}
                />
              </div>

              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 my-5 rounded hover:bg-blue-600"
              >
                Guardar Cambios
              </button>
              <button
                type="button"
                className="bg-zinc-500 text-white px-4 py-2 my-5 mx-5 rounded hover:bg-red-600"
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
