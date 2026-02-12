import { tableUse } from "../../context/TablesContext";
import { useState, useRef } from "react";
import Input from "../Input";
import { useUser } from "../../context/UserContext";

export default function CursoItem({ curso, id }) {
  const { setCurso, del, setDel, insert, setInsert, setNotification, setMessageSucces, setNotificationType } = tableUse();
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal,setShowDeleteModal] = useState()
  const { isAdmin, isDirective } = useUser();
  const newCursoRef = useRef();

  function deleteItem(id) {
    const url = `http://localhost:3002/api/cursos/${id}`;
    setDel(!del);

    fetch(url, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((json) => {
        setCurso(json.data || []);
        setMessageSucces("Curso eliminado");
        setNotificationType('delete');
        setNotification(true);
      });
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
      .then((json) => {
        setCurso(json?.data || []);
        setMessageSucces("Curso actualizado");
        setNotificationType('insert');
        setNotification(true);
        setInsert(!insert)
      });

    setInsert(!insert);
  }

  return (
    <div className="border border-gray-300 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow p-6">
      <div>
        <p className="text-xs font-semibold text-gray-500 mb-1">Curso</p>
        <p className="text-sm font-medium text-gray-900">{curso}</p>
      </div>

      {(isAdmin || isDirective) && <div className="flex flex-row gap-3 mt-6 justify-end">
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
      </div>}

      {showModal && (
        <form onSubmit={modifyItem}>
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center backdrop-blur-sm z-50">
            <div className="bg-white p-8 rounded-lg shadow-2xl max-w-md w-full mx-4">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Modificar Curso</h2>

              <div className="flex flex-col justify-start gap-2 mb-6">
                <label className="text-sm font-semibold text-gray-700">Curso:</label>
                <Input type="text" inputName="curso" defaultValue={curso} ref={newCursoRef} placeholder="Nombre del curso" />
              </div>

              <div className="flex gap-3 justify-end">
                <button type="button" className="bg-gray-300 hover:bg-gray-400 text-gray-900 px-4 py-2 rounded-lg transition-colors text-sm font-medium" onClick={() => setShowModal(false)}>Cancelar</button>
                <button type="submit" className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg transition-colors text-sm font-medium">Guardar</button>
              </div>
            </div>
          </div>
        </form>
      )}

      {showDeleteModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center backdrop-blur-sm z-50">
          <div className="bg-white rounded-lg shadow-2xl p-6 max-w-sm mx-4">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Confirmar eliminación</h2>
            <p className="text-gray-600 mb-6">¿Está seguro que desea eliminar este curso?</p>
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
            <button
              onClick={() => {
                deleteItem(id);
              }}
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
            >
              Borrar
            </button>
            <button
              onClick={() => setShowDeleteModal(false)}
              className="bg-zinc-500 hover:bg-zinc-600 text-white px-4 py-2 rounded-lg "
            >
              Cancelar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
