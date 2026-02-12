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
  const { setMatricula, del, setDel, insert, setInsert, setNotification, setMessageSucces, setNotificationType } = tableUse();
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal,setShowDeleteModal] = useState()
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
      .then((json) => {
        setMatricula(json.data || []);
        setMessageSucces("Matrícula eliminada");
        setNotificationType('delete');
        setNotification(true);
      });
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
      .then((json) => {
        setMatricula(json?.data || []);
        setMessageSucces("Matrícula actualizada");
        setNotificationType('insert');
        setNotification(true);
        setInsert(!insert)
      });
  }

  return (
    <div className="border border-gray-300 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow p-6">
      <div className="grid grid-cols-3 gap-4">
        <div>
          <p className="text-xs font-semibold text-gray-500 mb-1">1er Año</p>
          <p className="text-sm font-medium text-gray-900">{p1er_año}</p>
        </div>
        <div>
          <p className="text-xs font-semibold text-gray-500 mb-1">2do Año</p>
          <p className="text-sm font-medium text-gray-900">{s2do_año}</p>
        </div>
        <div>
          <p className="text-xs font-semibold text-gray-500 mb-1">3er Año</p>
          <p className="text-sm font-medium text-gray-900">{t3er_año}</p>
        </div>
        <div>
          <p className="text-xs font-semibold text-gray-500 mb-1">4to Año</p>
          <p className="text-sm font-medium text-gray-900">{c4to_año}</p>
        </div>
        <div>
          <p className="text-xs font-semibold text-gray-500 mb-1">5to Año</p>
          <p className="text-sm font-medium text-gray-900">{q5to_año}</p>
        </div>
        <div>
          <p className="text-xs font-semibold text-gray-500 mb-1">Año Evaluación</p>
          <p className="text-sm font-medium text-gray-900">{año_evaluacion}</p>
        </div>
      </div>

      {(isAdmin || isDirective) && (
        <div className="flex flex-row gap-3 mt-6 justify-end">
          <button
            onClick={() => {
              setShowDeleteModal(true);
            }}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors text-sm font-medium"
          >
            Eliminar
          </button>

          <button
            onClick={() => setShowModal(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors text-sm font-medium"
          >
            Modificar
          </button>
        </div>
      )}

      {showModal && (
        <form onSubmit={modifyItem}>
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center backdrop-blur-sm z-50">
            <div className="bg-white p-8 rounded-lg shadow-2xl max-w-2xl w-full mx-4 max-h-96 overflow-y-auto">
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                Modificar Matrícula
              </h2>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col justify-start gap-2">
                  <label className="text-sm font-semibold text-gray-700">1er Año:</label>
                  <Input
                    type="number"
                    defaultValue={p1er_año}
                    ref={refs.p1er_año}
                    placeholder="0"
                  />
                </div>

                <div className="flex flex-col justify-start gap-2">
                  <label className="text-sm font-semibold text-gray-700">2do Año:</label>
                  <Input
                    type="number"
                    defaultValue={s2do_año}
                    ref={refs.s2do_año}
                    placeholder="0"
                  />
                </div>

                <div className="flex flex-col justify-start gap-2">
                  <label className="text-sm font-semibold text-gray-700">3er Año:</label>
                  <Input
                    type="number"
                    defaultValue={t3er_año}
                    ref={refs.t3er_año}
                    placeholder="0"
                  />
                </div>

                <div className="flex flex-col justify-start gap-2">
                  <label className="text-sm font-semibold text-gray-700">4to Año:</label>
                  <Input
                    type="number"
                    defaultValue={c4to_año}
                    ref={refs.c4to_año}
                    placeholder="0"
                  />
                </div>

                <div className="flex flex-col justify-start gap-2">
                  <label className="text-sm font-semibold text-gray-700">5to Año:</label>
                  <Input
                    type="number"
                    defaultValue={q5to_año}
                    ref={refs.q5to_año}
                    placeholder="0"
                  />
                </div>

                <div className="flex flex-col justify-start gap-2">
                  <label className="text-sm font-semibold text-gray-700">Año evaluación:</label>
                  <Input
                    type="number"
                    defaultValue={año_evaluacion}
                    ref={refs.año_evaluacion}
                    placeholder="Año"
                  />
                </div>
              </div>

              <div className="flex gap-3 justify-end mt-6">
                <button
                  type="button"
                  className="bg-gray-300 hover:bg-gray-400 text-gray-900 px-4 py-2 rounded-lg transition-colors text-sm font-medium"
                  onClick={() => setShowModal(false)}
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg transition-colors text-sm font-medium"
                >
                  Guardar
                </button>
              </div>
            </div>
          </div>
        </form>
      )}

      {showDeleteModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center backdrop-blur-sm z-50">
          <div className="bg-white rounded-lg shadow-2xl p-6 max-w-sm mx-4">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Confirmar eliminación</h2>
            <p className="text-gray-600 mb-6">¿Está seguro que desea eliminar esta matrícula?</p>
            <div className="flex gap-3 justify-end">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="bg-gray-300 hover:bg-gray-400 text-gray-900 px-4 py-2 rounded-lg transition-colors text-sm font-medium"
              >
                Cancelar
              </button>
              <button
                onClick={() => {
                  deleteItem(id);
                }}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors text-sm font-medium"
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
