import { useRef } from "react";
import { tableUse } from "../../context/TablesContext";
import { useState } from "react";
import Input from "../Input";
import { useUser } from "../../context/UserContext";

export default function DisciplinaItem({ nombre, codigo, id }) {
  const { setDisciplina, del, setDel, setInsert, insert, setNotification, setMessageSucces, setNotificationType } = tableUse();
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal,setShowDeleteModal] = useState()
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
      .then((json) => {
        setDisciplina(json.data || []);
        setMessageSucces("Disciplina eliminada");
        setNotificationType('delete');
        setNotification(true);
      });
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
      .then((json) => {
        setDisciplina(json?.data || []);
        setMessageSucces("Disciplina actualizada");
        setNotificationType('insert');
        setNotification(true);
        setInsert(!insert)
      });

    setInsert(!insert);
  }

  return (
    <div className="border border-gray-300 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow p-6">
      <div className="grid grid-cols-2 gap-6">
        <div>
          <p className="text-xs font-semibold text-gray-500 mb-1">Nombre</p>
          <p className="text-sm font-medium text-gray-900">{nombre}</p>
        </div>
        <div>
          <p className="text-xs font-semibold text-gray-500 mb-1">Código</p>
          <p className="text-sm font-medium text-gray-900">{codigo}</p>
        </div>
      </div>

      {(isAdmin || isDirective) && <div className="flex flex-row gap-3 mt-6 justify-end">
        <button
          onClick={() => {
            setShowDeleteModal(true);
          }}
          data-id={id}
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
      </div>}

      {/*Modal de modificacion*/}

      {showModal && (
        <form onSubmit={modifyItem}>
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center backdrop-blur-sm z-50">
            <div className="bg-white p-8 rounded-lg shadow-2xl max-w-md w-full mx-4">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Modificar Disciplina</h2>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col justify-start gap-2">
                  <label className="text-sm font-semibold text-gray-700">Nombre:</label>
                  <Input type="text" defaultValue={nombre} ref={newNombreRef} placeholder="Nombre de disciplina" />
                </div>
                <div className="flex flex-col justify-start gap-2">
                  <label className="text-sm font-semibold text-gray-700">Código:</label>
                  <Input type="text" defaultValue={codigo} ref={newCodigoRef} placeholder="Código" />
                </div>
              </div>
              <div className="flex gap-3 mt-6 justify-end">
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
            <p className="text-gray-600 mb-6">¿Está seguro que desea eliminar esta disciplina?</p>
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
