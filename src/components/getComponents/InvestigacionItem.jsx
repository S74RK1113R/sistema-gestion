import { tableUse } from "../../context/TablesContext";
import { useState, useRef } from "react";
import Input from "../Input";
import { useUser } from "../../context/UserContext";

export default function InvestigacionItem({
  proyectos_investigacion,
  porciento_estudiantes_vinculados,
  porciento_profesores_vinculados,
  año_evaluacion,
  id,
}) {
  const { setInvestigacion, del, setDel, insert, setInsert, setNotification, setMessageSucces, setNotificationType } = tableUse();
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal,setShowDeleteModal]=useState()
  const { isAdmin, isDirective } = useUser();

  const refs = {
    proyectos_investigacion: useRef(),
    porciento_estudiantes_vinculados: useRef(),
    porciento_profesores_vinculados: useRef(),
    año_evaluacion: useRef(),
  };

  function deleteItem(id) {
    const url = `http://localhost:3002/api/investigacion/${id}`;
    setDel(!del);

    fetch(url, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((json) => {
        setInvestigacion(json.data || []);
        setMessageSucces("Investigación eliminada");
        setNotificationType('delete');
        setNotification(true);
        setInsert(!insert)
      });
  }

  function modifyItem() {
    event.preventDefault();
    const url = `http://localhost:3002/api/investigacion/${id}`;
    const payload = {
      proyectos_investigacion: refs.proyectos_investigacion.current.value,
      porciento_estudiantes_vinculados:
        refs.porciento_estudiantes_vinculados.current.value,
      porciento_profesores_vinculados:
        refs.porciento_profesores_vinculados.current.value,
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
        setInvestigacion(json?.data || []);
        setMessageSucces("Investigación actualizada");
        setNotificationType('insert');
        setNotification(true);
      });
  }

  return (
    <div className="border border-gray-300 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow p-6">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-xs font-semibold text-gray-500 mb-1">Proyectos de investigación</p>
          <p className="text-sm font-medium text-gray-900">{proyectos_investigacion}</p>
        </div>
        <div>
          <p className="text-xs font-semibold text-gray-500 mb-1">% Estudiantes vinculados</p>
          <p className="text-sm font-medium text-gray-900">{porciento_estudiantes_vinculados}</p>
        </div>
        <div>
          <p className="text-xs font-semibold text-gray-500 mb-1">% Profesores vinculados</p>
          <p className="text-sm font-medium text-gray-900">{porciento_profesores_vinculados}</p>
        </div>
        <div>
          <p className="text-xs font-semibold text-gray-500 mb-1">Año de evaluación</p>
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
            <div className="bg-white p-8 rounded-lg shadow-2xl max-w-md w-full mx-4">
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                Modificar Investigación
              </h2>

              <div className="flex flex-col gap-4">
                <div className="flex flex-col justify-start gap-2">
                  <label className="text-sm font-semibold text-gray-700">Proyectos de investigación:</label>
                  <Input
                    type="text"
                    inputName="proyectos_investigacion"
                    defaultValue={proyectos_investigacion}
                    ref={refs.proyectos_investigacion}
                    placeholder="Número de proyectos"
                  />
                </div>

                <div className="flex flex-col justify-start gap-2">
                  <label className="text-sm font-semibold text-gray-700">% Estudiantes vinculados:</label>
                  <Input
                    type="number"
                    inputName="porciento_estudiantes"
                    defaultValue={porciento_estudiantes_vinculados}
                    ref={refs.porciento_estudiantes_vinculados}
                    placeholder="Porcentaje"
                  />
                </div>

                <div className="flex flex-col justify-start gap-2">
                  <label className="text-sm font-semibold text-gray-700">% Profesores vinculados:</label>
                  <Input
                    type="number"
                    inputName="porciento_profesores"
                    defaultValue={porciento_profesores_vinculados}
                    ref={refs.porciento_profesores_vinculados}
                    placeholder="Porcentaje"
                  />
                </div>

                <div className="flex flex-col justify-start gap-2">
                  <label className="text-sm font-semibold text-gray-700">Año de evaluación:</label>
                  <Input
                    type="number"
                    inputName="año_evaluacion"
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
            <p className="text-gray-600 mb-6">¿Está seguro que desea eliminar esta investigación?</p>
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
