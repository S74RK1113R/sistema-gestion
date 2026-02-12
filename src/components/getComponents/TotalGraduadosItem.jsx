import { tableUse } from "../../context/TablesContext";
import { useSelectFetch } from "../../hooks/useSelectFetch";
import { useState, useRef } from "react";
import Input from "../Input";
import Select from "../Select";
import { useUser } from "../../context/UserContext";

export default function TotalGraduadosItem({ cd, cpe, curso_id, id }) {
  const { setTotalGraduados, del, setDel, insert, setInsert, setNotification, setMessageSucces, setNotificationType } = tableUse();
  const { data } = useSelectFetch("http://localhost:3002/api/cursos");
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal,setShowDeleteModal]=useState()
  const { isAdmin, isDirective } = useUser();

  const newCdRef = useRef();
  const newCpeRef = useRef();
  const newCursoIdRef = useRef();

  function deleteItem(id) {
    const url = `http://localhost:3002/api/total_graduados/${id}`;
    setDel(!del);

    fetch(url, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((json) => {
        setTotalGraduados(json.data || []);
        setMessageSucces("Total de graduados eliminado");
        setNotificationType('delete');
        setNotification(true);
      });
  }

  function modifyItem() {
    event.preventDefault();
    const url = `http://localhost:3002/api/total_graduados/${id}`;
    const newTotal = {
      cd: newCdRef.current.value,
      cpe: newCpeRef.current.value,
      curso_id: newCursoIdRef.current.value,
    };

    fetch(url, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newTotal),
    })
      .then((res) => {
        if (!res.ok) return res.json();
      })
      .then((json) => {
        setTotalGraduados(json?.data || []);
        setMessageSucces("Total de graduados actualizado");
        setNotificationType('insert');
        setNotification(true);
        setInsert(!insert);
      });

  }

  return (
    <div className="border border-gray-300 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow p-6">
      <div className="grid grid-cols-3 gap-4">
        <div>
          <p className="text-xs font-semibold text-gray-500 mb-1">Curso diurno</p>
          <p className="text-sm font-medium text-gray-900">{cd}</p>
        </div>
        <div>
          <p className="text-xs font-semibold text-gray-500 mb-1">Curso por encuentro</p>
          <p className="text-sm font-medium text-gray-900">{cpe}</p>
        </div>
        <div>
          <p className="text-xs font-semibold text-gray-500 mb-1">Curso</p>
          <p className="text-sm font-medium text-gray-900">
            {data.find((curso) => curso.id === curso_id)?.curso ||
              "Curso no encontrado"}
          </p>
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
                Modificar Total Graduados
              </h2>

              <div className="flex flex-col gap-4">
                <div className="flex flex-col justify-start gap-2">
                  <label htmlFor="cd" className="text-sm font-semibold text-gray-700">Curso diurno:</label>
                  <Input
                    type="number"
                    inputName="cd"
                    defaultValue={cd}
                    ref={newCdRef}
                    placeholder="Cantidad"
                  />
                </div>

                <div className="flex flex-col justify-start gap-2">
                  <label htmlFor="cpe" className="text-sm font-semibold text-gray-700">Curso por encuentro:</label>
                  <Input
                    type="number"
                    inputName="cpe"
                    defaultValue={cpe}
                    ref={newCpeRef}
                    placeholder="Cantidad"
                  />
                </div>

                <div className="flex flex-col justify-start gap-2">
                  <label htmlFor="curso" className="text-sm font-semibold text-gray-700">Curso:</label>
                  <Select
                    inputName="curso"
                    defaultValue={curso_id}
                    ref={newCursoIdRef}
                  >
                    {data?.map((item) => (
                      <option key={item.id} value={item.id}>
                        {item.curso || item.nombre || `Curso ${item.id}`}
                      </option>
                    ))}
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
            <p className="text-gray-600 mb-6">¿Está seguro que desea eliminar este total de graduados?</p>
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
