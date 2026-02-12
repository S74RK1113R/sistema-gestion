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
  const { setPublicaciones, del, setDel, insert, setInsert, setNotification, setMessageSucces, setNotificationType } = tableUse();
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal,setShowDeleteModal]=useState()
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
      .then((json) => {
        setPublicaciones(json.data || []);
        setMessageSucces("Publicación eliminada");
        setNotificationType('delete');
        setNotification(true);
        setInsert(!insert);
      });
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
      .then((json) => {
        setPublicaciones(json?.data || []);
        setMessageSucces("Publicación actualizada");
        setNotificationType('insert');
        setNotification(true);
      });

    setInsert(!insert);
  }

  return (
    <div className="border border-gray-300 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow p-6">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-xs font-semibold text-gray-500 mb-1">Grupos 1-4</p>
          <p className="text-sm font-medium text-gray-900">{grupos1_4}</p>
        </div>
        <div>
          <p className="text-xs font-semibold text-gray-500 mb-1">Grupos 1-2</p>
          <p className="text-sm font-medium text-gray-900">{grupos_1_2}</p>
        </div>
        <div>
          <p className="text-xs font-semibold text-gray-500 mb-1">Total</p>
          <p className="text-sm font-medium text-gray-900">{total}</p>
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
                Modificar Publicaciones
              </h2>

              <div className="flex flex-col gap-4">
                <div className="flex flex-col justify-start gap-2">
                  <label className="text-sm font-semibold text-gray-700">Grupos 1-4:</label>
                  <Input
                    type="number"
                    inputName="grupos1_4"
                    defaultValue={grupos1_4}
                    ref={refs.grupos1_4}
                    placeholder="Cantidad"
                  />
                </div>
                <div className="flex flex-col justify-start gap-2">
                  <label className="text-sm font-semibold text-gray-700">Grupos 1-2:</label>
                  <Input
                    type="number"
                    inputName="grupos_1_2"
                    defaultValue={grupos_1_2}
                    ref={refs.grupos_1_2}
                    placeholder="Cantidad"
                  />
                </div>

                <div className="flex flex-col justify-start gap-2">
                  <label className="text-sm font-semibold text-gray-700">Total:</label>
                  <Input 
                    type="number" 
                    inputName="total"
                    defaultValue={total} 
                    ref={refs.total}
                    placeholder="Cantidad"
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
            <p className="text-gray-600 mb-6">¿Está seguro que desea eliminar esta publicación?</p>
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
