import { tableUse } from "../../context/TablesContext";
import { useState, useRef } from "react";
import Input from "../Input";
import Select from "../Select";
import { useSelectFetch } from "../../hooks/useSelectFetch";
import { useUser } from "../../context/UserContext";

export default function AsignaturasItem({
  nombre,
  codigo,
  disciplinas_id,
  intranet,
  bibliografia,
  año,
  periodo,
  modalidad,
  curriculo,
  id,
}) {
  const { setAsignatura, del, setDel, insert, setInsert, setNotification, setMessageSucces, setNotificationType } = tableUse();
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState();

  const newNombreRef = useRef();
  const newCodigoRef = useRef();
  const newDisciplinasIdRef = useRef();
  const newIntranetRef = useRef();
  const newBibliografiaRef = useRef();
  const newAñoRef = useRef();
  const newPeriodoRef = useRef();
  const newModalidadRef = useRef();
  const newCurriculoRef = useRef();
  const { data } = useSelectFetch("http://localhost:3002/api/disciplinas");
  const { isAdmin, isDirective } = useUser();

  function deleteItem(id) {
    const url = `http://localhost:3002/api/asignaturas/${id}`;
    setDel(!del);

    fetch(url, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((json) => {
        setAsignatura(json.data || []);
        setMessageSucces("Asignatura eliminada");
        setNotificationType('delete');
        setNotification(true);
      });
  }

  function modifyItem() {
    event.preventDefault();
    const url = `http://localhost:3002/api/asignaturas/${id}`;
    const newAsignatura = {
      nombre: newNombreRef.current.value,
      codigo: newCodigoRef.current.value,
      disciplinas_id: newDisciplinasIdRef.current.value,
      intranet: newIntranetRef.current.value,
      bibliografia: newBibliografiaRef.current.value,
      año: newAñoRef.current.value,
      periodo: newPeriodoRef.current.value,
      modalidad: newModalidadRef.current.value,
      curriculo: newCurriculoRef.current.value,
    };

    fetch(url, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      // Send your data in the request body as JSON
      body: JSON.stringify(newAsignatura),
    })
      .then((res) => {
        if (!res.ok) {
          return res.json();
        }
        // handle error
      })
      .then((json) => {
        setAsignatura(json?.data || []);
        setMessageSucces("Asignatura actualizada");
        setNotificationType('insert');
        setNotification(true);
        setInsert(!insert);
      });
  }

  return (
    <div className="mb-6 border border-gray-300 w-full max-w-2xl mx-auto flex flex-col items-stretch justify-start shadow-md hover:shadow-lg transition-shadow bg-white p-6 rounded-lg">
      <div className="grid grid-cols-2 gap-6">
        <div className="flex flex-col gap-1">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Nombre</p>
          <p className="text-sm font-medium text-slate-800">{nombre}</p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Código</p>
          <p className="text-sm font-medium text-slate-800">{codigo}</p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Disciplina</p>
          <p className="text-sm font-medium text-slate-800">{disciplinas_id}</p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Intranet</p>
          <p className="text-sm font-medium text-slate-800">{intranet}</p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Bibliografía</p>
          <p className="text-sm font-medium text-slate-800">{bibliografia}</p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Año</p>
          <p className="text-sm font-medium text-slate-800">{año}</p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Período</p>
          <p className="text-sm font-medium text-slate-800">{periodo}</p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Modalidad</p>
          <p className="text-sm font-medium text-slate-800">{modalidad}</p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Currículo</p>
          <p className="text-sm font-medium text-slate-800">{curriculo}</p>
        </div>
      </div>

      {(isAdmin || isDirective) && (
        <div className="flex flex-row gap-3 mt-6 pt-6 border-t border-gray-200">
          <button
            onClick={() => {
              setShowDeleteModal(true);
            }}
            className="flex-1 bg-red-500 hover:bg-red-600 text-white px-4 py-2.5 rounded-lg font-medium text-sm transition-colors shadow-sm"
          >
            Eliminar
          </button>
          <button
            onClick={() => setShowModal(true)}
            className="flex-1 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2.5 rounded-lg font-medium text-sm transition-colors shadow-sm"
          >
            Modificar
          </button>
        </div>
      )}

      {/*Modal Zone */}
      {showModal && (
        <form onSubmit={modifyItem}>
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-lg shadow-2xl grid grid-cols-2 gap-6 max-w-2xl max-h-[90vh] overflow-auto border border-gray-200">
              <h2 className="text-2xl font-semibold text-slate-800 col-span-2 pb-4 border-b border-gray-200">
                Modificar Asignatura
              </h2>

              <div className="flex flex-col justify-start gap-2">
                <label htmlFor="nombre" className="text-sm font-medium text-gray-700">Nombre:</label>
                <Input
                  type="text"
                  inputName="nombre"
                  defaultValue={nombre}
                  ref={newNombreRef}
                />
              </div>

              <div className="flex flex-col justify-start gap-2">
                <label htmlFor="codigo" className="text-sm font-medium text-gray-700">Código:</label>
                <Input
                  type="text"
                  inputName="codigo"
                  defaultValue={codigo}
                  ref={newCodigoRef}
                />
              </div>

              <div className="flex flex-col justify-start gap-2">
                <label htmlFor="intranet" className="text-sm font-medium text-gray-700">Intranet:</label>
                <Select
                  inputName="intranet"
                  defaultValue={intranet}
                  ref={newIntranetRef}
                >
                  <option value="">Seleccionar...</option>
                  <option value="no procede">No procede</option>
                  <option value="plat. interactiva">Plat. interactiva</option>
                  <option value="no">No</option>
                  <option value="materiales">Materiales</option>
                </Select>
              </div>

              <div className="flex flex-col justify-start gap-2">
                <label htmlFor="disciplina" className="text-sm font-medium text-gray-700">Disciplina:</label>
                <Select
                  inputName="disciplina"
                  defaultValue={disciplinas_id}
                  ref={newDisciplinasIdRef}
                >
                  <option value="">Seleccionar...</option>
                  {data.map((item) => {
                    return (
                      <option value={item.id} key={item.id}>
                        {item.nombre}
                      </option>
                    );
                  })}
                </Select>
              </div>

              <div className="flex flex-col justify-start gap-2">
                <label htmlFor="año" className="text-sm font-medium text-gray-700">Año:</label>
                <Input
                  type="number"
                  inputName="año"
                  min="0"
                  defaultValue={año}
                  ref={newAñoRef}
                />
              </div>

              <div className="flex flex-col justify-start gap-2">
                <label htmlFor="periodo" className="text-sm font-medium text-gray-700">Período:</label>
                <Input
                  type="number"
                  inputName="periodo"
                  min="0"
                  defaultValue={periodo}
                  ref={newPeriodoRef}
                />
              </div>

              <div className="flex flex-col justify-start gap-2">
                <label htmlFor="modalidad" className="text-sm font-medium text-gray-700">Modalidad:</label>
                <Select
                  inputName="modalidad"
                  defaultValue={modalidad}
                  ref={newModalidadRef}
                >
                  <option value="">Seleccionar...</option>
                  <option value="cd">Curso Diurno</option>
                  <option value="cpe">Curso Encuentro</option>
                </Select>
              </div>

              <div className="flex flex-col justify-start gap-2">
                <label htmlFor="curriculo" className="text-sm font-medium text-gray-700">Currículo:</label>
                <Select
                  inputName="curriculo"
                  defaultValue={curriculo}
                  ref={newCurriculoRef}
                >
                  <option value="">Seleccionar...</option>
                  <option value="base">Base</option>
                  <option value="propio">Propio</option>
                  <option value="optat/elect">Optat./Elect.</option>
                  <option value="materiales">Materiales</option>
                </Select>
              </div>

              <div className="flex flex-col justify-start gap-2">
                <label htmlFor="bibliografia" className="text-sm font-medium text-gray-700">Bibliografía:</label>
                <Select
                  inputName="bibliografia"
                  defaultValue={bibliografia}
                  ref={newBibliografiaRef}
                >
                  <option value="">Seleccionar...</option>
                  <option value="disponible">Disponible</option>
                  <option value="no disponible">No disponible</option>
                </Select>
              </div>

              <button
                type="submit"
                className="col-span-2 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors shadow-md mt-6"
              >
                Guardar Cambios
              </button>
              <button
                type="button"
                className="col-span-2 bg-gray-400 hover:bg-gray-500 text-white py-3 rounded-lg font-medium transition-colors shadow-md"
                onClick={() => setShowModal(false)}
              >
                Cancelar
              </button>
            </div>
          </div>
        </form>
      )}

      {showDeleteModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white flex flex-col items-center justify-center gap-6 shadow-2xl p-8 rounded-lg border border-gray-200 max-w-sm">
            <h1 className="text-xl font-semibold text-slate-800 text-center">¿Está seguro que desea eliminar esta asignatura?</h1>
            <div className="flex gap-4 w-full">
              <button
                onClick={() => {
                  deleteItem(id);
                }}
                className="flex-1 bg-red-600 hover:bg-red-700 text-white px-4 py-3 rounded-lg font-medium transition-colors shadow-md"
              >
                Eliminar
              </button>
              <button
                onClick={() => setShowDeleteModal(false)}
                className="flex-1 bg-gray-400 hover:bg-gray-500 text-white px-4 py-3 rounded-lg font-medium transition-colors shadow-md"
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
