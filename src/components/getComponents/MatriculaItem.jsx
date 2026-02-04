import { tableUse } from "../../context/TablesContext";
import { useState, useRef } from "react";
import Input from "../Input";
import { useUser } from "../../context/UserContext";

export default function MatriculaItem({
  p1er_año,
  s2do_año,
  t3er_año,
  c4to_año,
  q5to_año,
  año_evaluacion,
  id,
}) {
  const { setMatricula, del, setDel, insert, setInsert } = tableUse();
  const [showModal, setShowModal] = useState(false);
  const { isAdmin, isDirective } = useUser();

  const refs = {
    p1er_año: useRef(),
    s2do_año: useRef(),
    t3er_año: useRef(),
    c4to_año: useRef(),
    q5to_año: useRef(),
    año_evaluacion: useRef(),
  };

  function deleteItem(id) {
    const url = `http://localhost:3002/api/matricula/${id}`;
    setDel(!del);

    fetch(url, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((json) => setMatricula(json.data || []));
  }

  function modifyItem() {
    event.preventDefault();
    const url = `http://localhost:3002/api/matricula/${id}`;
    const payload = {
      p1er_año: refs.p1er_año.current.value,
      s2do_año: refs.s2do_año.current.value,
      t3er_año: refs.t3er_año.current.value,
      c4to_año: refs.c4to_año.current.value,
      q5to_año: refs.q5to_año.current.value,
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
      .then((json) => setMatricula(json?.data || []));

    setInsert(!insert);
  }

  return (
    <div className="mb-5 border border-black w-11/12 flex flex-col items-center justify-center shadow-lg shadow-zinc-950/60 p-5 rounded-lg">
      <h1 className="font-bold">1er Año:</h1>
      <div>{p1er_año}</div>
      <h1 className="font-bold">2do Año:</h1>
      <div>{s2do_año}</div>
      <h1 className="font-bold">3ro Año:</h1>
      <div>{t3er_año}</div>
      <h1 className="font-bold">4to Año:</h1>
      <div>{c4to_año}</div>
      <h1 className="font-bold">5to Año:</h1>
      <div>{q5to_año}</div>
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
                Modificar Matricula
              </h2>

              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label>1er Año:</label>
                <Input
                  type="number"
                  defaultValue={p1er_año}
                  ref={refs.p1er_año}
                />
              </div>

              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label>2do Año:</label>
                <Input
                  type="number"
                  defaultValue={s2do_año}
                  ref={refs.s2do_año}
                />
              </div>

              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label>3er Año:</label>
                <Input
                  type="number"
                  defaultValue={t3er_año}
                  ref={refs.t3er_año}
                />
              </div>

              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label>4to Año:</label>
                <Input
                  type="number"
                  defaultValue={c4to_año}
                  ref={refs.c4to_año}
                />
              </div>

              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label>5to Año:</label>
                <Input
                  type="number"
                  defaultValue={q5to_año}
                  ref={refs.q5to_año}
                />
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
