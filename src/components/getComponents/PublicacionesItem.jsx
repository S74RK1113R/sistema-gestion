import { tableUse } from "../../context/TablesContext";
import { useState, useRef } from "react";
import Input from "../Input";
import { useUser } from "../../context/UserContext";

export default function DisciplinaItem({
  grupos1_4,
  grupos_1_2,
  total,
  año_evaluacion,
  id,
}) {
  const { setPublicaciones, del, setDel, insert, setInsert } = tableUse();
  const [showModal, setShowModal] = useState(false);
  const { isAdmin, isDirective } = useUser();

  const refs = {
    grupos1_4: useRef(),
    grupos_1_2: useRef(),
    total: useRef(),
    año_evaluacion: useRef(),
  };

  function deleteItem(id) {
    const url = `http://localhost:3002/api/publicaciones/${id}`;
    setDel(!del);

    fetch(url, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((json) => setPublicaciones(json.data || []));
  }

  function modifyItem() {
    event.preventDefault();
    const url = `http://localhost:3002/api/publicaciones/${id}`;
    const payload = {
      grupos1_4: refs.grupos1_4.current.value,
      grupos_1_2: refs.grupos_1_2.current.value,
      total: refs.total.current.value,
      año_evaluacion: refs.año_evaluacion.current.value,
    };

    fetch(url, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload),
    })
      .then((res) => {
        if (!res.ok) return res.json();
      })
      .then((json) => setPublicaciones(json?.data || []));

    setInsert(!insert);
  }

  return (
    <div className="mb-5 border border-black w-11/12 flex flex-col items-center justify-center shadow-lg shadow-zinc-950/60 p-5 rounded-lg">
      <h1 className="font-bold">Grupos del 1 al 4:</h1>
      <div>{grupos1_4}</div>
      <h1 className="font-bold">Grupos del 1 al 2</h1>
      <div>{grupos_1_2}</div>
      <h1 className="font-bold">Total:</h1>
      <div>{total}</div>
      <h1 className="font-bold">Año de la evaluación:</h1>
      <div>{año_evaluacion}</div>

      {(isAdmin || isDirective) && (
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
      )}

      {showModal && (
        <form onSubmit={modifyItem}>
          <div className="fixed inset-0 flex items-center justify-center gap-5 overflow-auto">
            <div className="bg-zinc-100 p-6 rounded-lg shadow-xl shadow-black/50 grid grid-cols-2 gap-5 max-w-11/12 max-h-11/12 overflow-auto">
              <h2 className="text-xl font-bold col-span-2">
                Modificar Publicaciones
              </h2>

              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label>Grupos 1-4:</label>
                <Input
                  type="number"
                  defaultValue={grupos1_4}
                  ref={refs.grupos1_4}
                />
              </div>
              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label>Grupos 1-2:</label>
                <Input
                  type="number"
                  defaultValue={grupos_1_2}
                  ref={refs.grupos_1_2}
                />
              </div>

              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label>Total:</label>
                <Input type="number" defaultValue={total} ref={refs.total} />
              </div>

              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label>Año de evaluación:</label>
                <Input
                  type="number"
                  defaultValue={año_evaluacion}
                  ref={refs.año_evaluacion}
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
