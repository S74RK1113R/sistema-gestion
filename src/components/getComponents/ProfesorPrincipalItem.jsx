import { tableUse } from "../../context/TablesContext";
import { useRef, useState } from "react";
import Select from "../Select";
import { useSelectFetch } from "../../hooks/useSelectFetch";
import { useUser } from "../../context/UserContext";

export default function ProfesorPrincipalItem({
  disciplina_id,
  profesor_id,
  id,
}) {
  const { setProfesorPrincipal, setDel, del, insert, setInsert, setNotification, setMessageSucces, setNotificationType } = tableUse();
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal,setShowDeleteModal]=useState()
  const { isAdmin, isDirective } = useUser();

  const { data: disciplinasData } = useSelectFetch(
    "http://localhost:3002/api/disciplinas",
  );
  const { data: profesoresData } = useSelectFetch(
    "http://localhost:3002/api/profesor",
  );

  const newDisciplinaIdRef = useRef();
  const newProfesorIdRef = useRef();

  function modifyItem() {
    event.preventDefault();
    const url = `http://localhost:3002/api/profesor_principal/${id}`;
    const newProfesorPrincipal = {
      disciplina_id: newDisciplinaIdRef.current.value,
      profesor_id: newProfesorIdRef.current.value,
    };

    fetch(url, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      // Send your data in the request body as JSON
      body: JSON.stringify(newProfesorPrincipal),
    })
      .then((res) => {
        if (!res.ok) {
          return res.json();
        }
        // handle error
      })
      .then((json) => {
        setProfesorPrincipal(json?.data || []);
        setMessageSucces("Profesor principal actualizado");
        setNotificationType('insert');
        setNotification(true);
        setInsert(!insert);
      });
  }

  function deleteItem(id) {
    const url = `http://localhost:3002/api/profesor_principal/${id}`;
    setDel(!del);
    fetch(url, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((json) => {
        setProfesorPrincipal(json.data || []);
        setMessageSucces("Profesor principal eliminado");
        setNotificationType('delete');
        setNotification(true);
      });
  }

  return (
    <div className="border border-gray-300 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow p-6">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-xs font-semibold text-gray-500 mb-1">Disciplina</p>
          <p className="text-sm font-medium text-gray-900">{disciplina_id}</p>
        </div>
        <div>
          <p className="text-xs font-semibold text-gray-500 mb-1">Profesor</p>
          <p className="text-sm font-medium text-gray-900">{profesor_id}</p>
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

      {/*Modal Zone */}
      {showModal && (
        <form onSubmit={modifyItem}>
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center backdrop-blur-sm z-50">
            <div className="bg-white p-8 rounded-lg shadow-2xl max-w-md w-full mx-4">
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                Modificar Profesor Principal
              </h2>

              <div className="flex flex-col gap-4">
                <div className="flex flex-col justify-start gap-2">
                  <label htmlFor="disciplina" className="text-sm font-semibold text-gray-700">Disciplina:</label>
                  <Select
                    inputName="disciplina"
                    defaultValue={disciplina_id}
                    ref={newDisciplinaIdRef}
                  >
                    {disciplinasData?.map((item) => {
                      return <option value={item.id}>{item.nombre}</option>;
                    })}
                  </Select>
                </div>

                <div className="flex flex-col justify-start gap-2">
                  <label htmlFor="profesor" className="text-sm font-semibold text-gray-700">Profesor:</label>
                  <Select
                    inputName="profesor"
                    ref={newProfesorIdRef}
                    defaultValue={profesor_id}
                  >
                    {profesoresData?.map((item) => {
                      return (
                        <option
                          value={item.id}
                          key={item.id}
                        >{`${item.nombres} ${item.primer_apellido} ${item.segundo_apellido}`}</option>
                      );
                    })}
                  </Select>
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
            <p className="text-gray-600 mb-6">¿Está seguro que desea eliminar este profesor principal?</p>
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
