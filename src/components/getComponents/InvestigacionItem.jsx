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
    <div className="mb-5 border border-black w-11/12 flex flex-col items-center justify-center shadow-lg shadow-zinc-950/60 p-5 rounded-lg">
      <h1 className="font-bold">Proyectos de investigación:</h1>
      <div>{proyectos_investigacion}</div>
      <h1 className="font-bold">Porcentaje de estudiantes vinculados:</h1>
      <div>{porciento_estudiantes_vinculados}</div>
      <h1 className="font-bold">Porcentaje de profesores vinculados:</h1>
      <div>{porciento_profesores_vinculados}</div>
      <h1 className="font-bold">Año de evaluación:</h1>
      <div>{año_evaluacion}</div>
      
      {(isAdmin || isDirective) && (
        <div className="flex flex-row gap-4 mt-4">
          <button
            onClick={() => {
              setShowDeleteModal(true);
            }}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
          >
            Borrar
          </button>

          <button
            onClick={() => setShowModal(true)}
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg "
          >
            Modificar
          </button>
        </div>
      )}

      {showModal && (
        <form onSubmit={modifyItem}>
          <div className="fixed inset-0 flex items-center justify-center gap-5 overflow-auto">
            <div className="bg-zinc-100 p-6 rounded-lg shadow-xl shadow-black/50 grid grid-cols-2 gap-5 max-w-11/12 max-h-11/12 overflow-auto">
              <h2 className="text-xl font-bold col-span-2">
                Modificar Investigación
              </h2>

              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label>Proyectos de investigación:</label>
                <Input
                  type="text"
                  defaultValue={proyectos_investigacion}
                  ref={refs.proyectos_investigacion}
                />
              </div>

              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label>% Estudiantes vinculados:</label>
                <Input
                  type="number"
                  defaultValue={porciento_estudiantes_vinculados}
                  ref={refs.porciento_estudiantes_vinculados}
                />
              </div>

              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label>% Profesores vinculados:</label>
                <Input
                  type="number"
                  defaultValue={porciento_profesores_vinculados}
                  ref={refs.porciento_profesores_vinculados}
                />
              </div>

              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label>Año de evaluación:</label>
                <Input
                  type="number"
                  defaultValue={año_evaluacion}
                  ref={refs.año_evaluacion}
                />
              </div>

              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 my-5 rounded hover:bg-blue-600"
              >
                Guardar Cambios
              </button>
              <button
                type="button"
                className="bg-zinc-500 text-white px-4 py-2 my-5 mx-5 rounded hover:bg-red-600"
                onClick={() => setShowModal(false)}
              >
                Cancelar
              </button>
            </div>
          </div>
        </form>
      )}

      {showDeleteModal && (
        <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 flex flex-col items-center justify-center gap-5 overflow-auto shadow-xl shadow-black/60 bg-zinc-100 w-max h-max p-5 rounded-md">
          <h1 className="font-bold">¿Está seguro que quiere eliminar?</h1>
          <div className="flex gap-5">
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
