import { tableUse } from "../../context/TablesContext";
import { useState, useRef } from "react";
import Input from "../Input";
import { useUser } from "../../context/UserContext";

export default function AyudantiaItem({
  id,
  educacion_superior_1er_año,
  educacion_superior_2do_año,
  educacion_superior_3er_año,
  educacion_superior_4to_año,
  educacion_superior_5to_año,
  educacion_media_1er_año,
  educacion_media_2do_año,
  educacion_media_3er_año,
  educacion_media_4to_año,
  educacion_media_5to_año,
  año_evaluacion,
}) {
  const { setAyudantia, del, setDel, insert, setInsert, setNotification, setMessageSucces, setNotificationType } = tableUse();
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState()
  const {isAdmin,isDirective} = useUser()
  

  const refs = {
    educacion_superior_1er_año: useRef(),
    educacion_superior_2do_año: useRef(),
    educacion_superior_3er_año: useRef(),
    educacion_superior_4to_año: useRef(),
    educacion_superior_5to_año: useRef(),
    educacion_media_1er_año: useRef(),
    educacion_media_2do_año: useRef(),
    educacion_media_3er_año: useRef(),
    educacion_media_4to_año: useRef(),
    educacion_media_5to_año: useRef(),
    año_evaluacion: useRef(),
  };

  function deleteItem(id) {
    const url = `http://localhost:3002/api/ayudantias/${id}`;
    setDel(!del);

    fetch(url, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((json) => {
        setAyudantia(json.data || []);
        setMessageSucces("Ayudantía eliminada");
        setNotificationType('delete');
        setNotification(true);
      });
  }

  function modifyItem() {
    event.preventDefault();
    const url = `http://localhost:3002/api/ayudantias/${id}`;
    const payload = {
      educacion_superior_1er_año: refs.educacion_superior_1er_año.current.value,
      educacion_superior_2do_año: refs.educacion_superior_2do_año.current.value,
      educacion_superior_3er_año: refs.educacion_superior_3er_año.current.value,
      educacion_superior_4to_año: refs.educacion_superior_4to_año.current.value,
      educacion_superior_5to_año: refs.educacion_superior_5to_año.current.value,
      educacion_media_1er_año: refs.educacion_media_1er_año.current.value,
      educacion_media_2do_año: refs.educacion_media_2do_año.current.value,
      educacion_media_3er_año: refs.educacion_media_3er_año.current.value,
      educacion_media_4to_año: refs.educacion_media_4to_año.current.value,
      educacion_media_5to_año: refs.educacion_media_5to_año.current.value,
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
        setAyudantia(json?.data || []);
        setMessageSucces("Ayudantía actualizada");
        setNotificationType('insert');
        setNotification(true);
        setInsert(!insert)
      });
  }

  return (
    <div className="border border-gray-300 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow p-6">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h3 className="text-sm font-bold text-gray-700 mb-4 border-b border-gray-200 pb-2">Educación Superior</h3>
          <div className="space-y-3">
            <div>
              <p className="text-xs font-semibold text-gray-500 mb-1">1er año</p>
              <p className="text-sm font-medium text-gray-900">{educacion_superior_1er_año}</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-500 mb-1">2do año</p>
              <p className="text-sm font-medium text-gray-900">{educacion_superior_2do_año}</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-500 mb-1">3er año</p>
              <p className="text-sm font-medium text-gray-900">{educacion_superior_3er_año}</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-500 mb-1">4to año</p>
              <p className="text-sm font-medium text-gray-900">{educacion_superior_4to_año}</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-500 mb-1">5to año</p>
              <p className="text-sm font-medium text-gray-900">{educacion_superior_5to_año}</p>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-sm font-bold text-gray-700 mb-4 border-b border-gray-200 pb-2">Educación Media</h3>
          <div className="space-y-3">
            <div>
              <p className="text-xs font-semibold text-gray-500 mb-1">1er año</p>
              <p className="text-sm font-medium text-gray-900">{educacion_media_1er_año}</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-500 mb-1">2do año</p>
              <p className="text-sm font-medium text-gray-900">{educacion_media_2do_año}</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-500 mb-1">3er año</p>
              <p className="text-sm font-medium text-gray-900">{educacion_media_3er_año}</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-500 mb-1">4to año</p>
              <p className="text-sm font-medium text-gray-900">{educacion_media_4to_año}</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-500 mb-1">5to año</p>
              <p className="text-sm font-medium text-gray-900">{educacion_media_5to_año}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-gray-200">
        <p className="text-xs font-semibold text-gray-500 mb-1">Año de evaluación</p>
        <p className="text-sm font-medium text-gray-900">{año_evaluacion}</p>
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
                Modificar Ayudantía
              </h2>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col justify-start gap-2">
                  <label htmlFor="educacion_superior_1er_año" className="text-sm font-semibold text-gray-700">Educación superior 1er año:</label>
                  <Input
                    type="number"
                    inputName="educacion_superior_1er_año"
                    min="0"
                    ref={refs.educacion_superior_1er_año}
                    defaultValue={educacion_superior_1er_año}
                    placeholder="Cantidad"
                  />
                </div>
                <div className="flex flex-col justify-start gap-2">
                  <label htmlFor="educacion_media_1er_año" className="text-sm font-semibold text-gray-700">Educación media 1er año:</label>
                  <Input
                    type="number"
                    inputName="educacion_media_1er_año"
                    min="0"
                    ref={refs.educacion_media_1er_año}
                    defaultValue={educacion_media_1er_año}
                    placeholder="Cantidad"
                  />
                </div>
                <div className="flex flex-col justify-start gap-2">
                  <label htmlFor="educacion_superior_2do_año" className="text-sm font-semibold text-gray-700">Educación superior 2do año:</label>
                  <Input
                    type="number"
                    inputName="educacion_superior_2do_año"
                    min="0"
                    ref={refs.educacion_superior_2do_año}
                    defaultValue={educacion_superior_2do_año}
                    placeholder="Cantidad"
                  />
                </div>
                <div className="flex flex-col justify-start gap-2">
                  <label htmlFor="educacion_media_2do_año" className="text-sm font-semibold text-gray-700">Educación media 2do año:</label>
                  <Input
                    type="number"
                    inputName="educacion_media_2do_año"
                    min="0"
                    ref={refs.educacion_media_2do_año}
                    defaultValue={educacion_media_2do_año}
                    placeholder="Cantidad"
                  />
                </div>
                <div className="flex flex-col justify-start gap-2">
                  <label htmlFor="educacion_superior_3er_año" className="text-sm font-semibold text-gray-700">Educación superior 3er año:</label>
                  <Input
                    type="number"
                    inputName="educacion_superior_3er_año"
                    min="0"
                    ref={refs.educacion_superior_3er_año}
                    defaultValue={educacion_superior_3er_año}
                    placeholder="Cantidad"
                  />
                </div>
                <div className="flex flex-col justify-start gap-2">
                  <label htmlFor="educacion_media_3er_año" className="text-sm font-semibold text-gray-700">Educación media 3er año:</label>
                  <Input
                    type="number"
                    inputName="educacion_media_3er_año"
                    min="0"
                    ref={refs.educacion_media_3er_año}
                    defaultValue={educacion_media_3er_año}
                    placeholder="Cantidad"
                  />
                </div>
                <div className="flex flex-col justify-start gap-2">
                  <label htmlFor="educacion_superior_4to_año" className="text-sm font-semibold text-gray-700">Educación superior 4to año:</label>
                  <Input
                    type="number"
                    inputName="educacion_superior_4to_año"
                    min="0"
                    ref={refs.educacion_superior_4to_año}
                    defaultValue={educacion_superior_4to_año}
                    placeholder="Cantidad"
                  />
                </div>
                <div className="flex flex-col justify-start gap-2">
                  <label htmlFor="educacion_media_4to_año" className="text-sm font-semibold text-gray-700">Educación media 4to año:</label>
                  <Input
                    type="number"
                    inputName="educacion_media_4to_año"
                    min="0"
                    ref={refs.educacion_media_4to_año}
                    defaultValue={educacion_media_4to_año}
                    placeholder="Cantidad"
                  />
                </div>
                <div className="flex flex-col justify-start gap-2">
                  <label htmlFor="educacion_superior_5to_año" className="text-sm font-semibold text-gray-700">Educación superior 5to año:</label>
                  <Input
                    type="number"
                    inputName="educacion_superior_5to_año"
                    min="0"
                    ref={refs.educacion_superior_5to_año}
                    defaultValue={educacion_superior_5to_año}
                    placeholder="Cantidad"
                  />
                </div>
                <div className="flex flex-col justify-start gap-2">
                  <label htmlFor="educacion_media_5to_año" className="text-sm font-semibold text-gray-700">Educación media 5to año:</label>
                  <Input
                    type="number"
                    inputName="educacion_media_5to_año"
                    min="0"
                    ref={refs.educacion_media_5to_año}
                    defaultValue={educacion_media_5to_año}
                    placeholder="Cantidad"
                  />
                </div>
                <div className="flex flex-col justify-start gap-2 col-span-2">
                  <label htmlFor="año_evaluacion" className="text-sm font-semibold text-gray-700">Año de evaluación:</label>
                  <Input
                    type="number"
                    inputName="año_evaluacion"
                    min="0"
                    ref={refs.año_evaluacion}
                    defaultValue={año_evaluacion}
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
            <p className="text-gray-600 mb-6">¿Está seguro que desea eliminar esta ayudantía?</p>
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
