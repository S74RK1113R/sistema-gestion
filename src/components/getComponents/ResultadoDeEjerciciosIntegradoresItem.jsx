import { tableUse } from "../../context/TablesContext";
import { useState, useRef } from "react";
import Input from "../Input";
import { useUser } from "../../context/UserContext";

export default function ResultadoEjercicioIntegradoresItem({
  porciento_aprobados,
  porciento_con_4_5,
  año_evaluacion,
  id,
}) {
  const { setResultadoEjercicios, del, setDel, insert, setInsert, setNotification, setMessageSucces, setNotificationType } = tableUse();
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal,setShowDeleteModal]=useState()
  const { isAdmin, isDirective } = useUser();

  const refs = {
    porciento_aprobados: useRef(),
    porciento_con_4_5: useRef(),
    año_evaluacion: useRef(),
  };

  function deleteItem(id) {
    const url = `http://localhost:3002/api/resultado_ejercicios_integradores/${id}`;
    setDel(!del);

    fetch(url, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((json) => {
        setResultadoEjercicios(json.data || []);
        setMessageSucces("Resultado de ejercicio integrador eliminado");
        setNotificationType('delete');
        setNotification(true);
      });
  }

  function modifyItem() {
    event.preventDefault();
    const url = `http://localhost:3002/api/resultado_ejercicios_integradores/${id}`;
    const payload = {
      porciento_aprobados: refs.porciento_aprobados.current.value,
      porciento_con_4_5: refs.porciento_con_4_5.current.value,
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
        setResultadoEjercicios(json?.data || []);
        setMessageSucces("Resultado de ejercicio integrador actualizado");
        setNotificationType('insert');
        setNotification(true);
        setInsert(!insert);
      });

    setInsert(!insert);
  }

  return (
    <div className="border border-gray-300 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow p-6">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-xs font-semibold text-gray-500">% Aprobados</p>
          <p className="text-sm font-medium text-gray-900">{porciento_aprobados}</p>
        </div>
        <div>
          <p className="text-xs font-semibold text-gray-500">% con 4-5</p>
          <p className="text-sm font-medium text-gray-900">{porciento_con_4_5}</p>
        </div>
        <div>
          <p className="text-xs font-semibold text-gray-500">Año de evaluación</p>
          <p className="text-sm font-medium text-gray-900">{año_evaluacion}</p>
        </div>
      </div>

      {(isAdmin || isDirective) && (
        <div className="flex flex-row gap-3 mt-6">
          <button
            onClick={() => {
              setShowDeleteModal(true);
            }}
            className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
          >
            Eliminar
          </button>

          <button
            onClick={() => setShowModal(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
          >
            Modificar
          </button>
        </div>
      )}

      {showModal && (
        <form onSubmit={modifyItem}>
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center backdrop-blur-sm z-50">
            <div className="bg-white p-8 rounded-lg shadow-2xl grid grid-cols-2 gap-5 max-w-lg w-full mx-4 max-h-96 overflow-y-auto">
              <h2 className="text-xl font-bold col-span-2">
                Modificar Resultado Ejercicios Integradores
              </h2>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-gray-700">Porcentaje aprobados:</label>
                <Input
                  type="number"
                  defaultValue={porciento_aprobados}
                  ref={refs.porciento_aprobados}
                  placeholder="0"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-gray-700">Porcentaje con 4-5:</label>
                <Input
                  type="number"
                  defaultValue={porciento_con_4_5}
                  ref={refs.porciento_con_4_5}
                  placeholder="0"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-gray-700">Año de evaluación:</label>
                <Input
                  type="number"
                  defaultValue={año_evaluacion}
                  ref={refs.año_evaluacion}
                  placeholder="2024"
                />
              </div>

              <div className="col-span-2 flex gap-3 mt-4">
                <button
                  type="submit"
                  className="flex-1 bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors"
                >
                  Guardar
                </button>
                <button
                  type="button"
                  className="flex-1 bg-gray-300 text-gray-900 px-4 py-2 rounded-lg hover:bg-gray-400 transition-colors"
                  onClick={() => setShowModal(false)}
                >
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        </form>
      )}

       {showDeleteModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center backdrop-blur-sm z-50">
          <div className="bg-white p-6 rounded-lg shadow-2xl max-w-sm w-full mx-4">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Confirmar eliminación</h2>
            <p className="text-gray-600 mb-6">¿Está seguro que desea eliminar este resultado?</p>
            <div className="flex gap-3">
              <button
                onClick={() => {
                  deleteItem(id);
                }}
                className="flex-1 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
              >
                Eliminar
              </button>
              <button
                onClick={() => setShowDeleteModal(false)}
                className="flex-1 bg-gray-300 text-gray-900 px-4 py-2 rounded-lg hover:bg-gray-400 transition-colors"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
