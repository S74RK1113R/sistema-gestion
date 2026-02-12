import { tableUse } from "../../context/TablesContext";
import { useState, useRef } from "react";
import Input from "../Input";
import { useUser } from "../../context/UserContext";

export default function IncorporacionInvestigacionCientificaItem({
  institucional,
  nacional,
  internacional,
  cantidad_profesores_incorporados,
  estudiantes_investigando_1er_año,
  estudiantes_investigando_2do_año,
  estudiantes_investigando_3er_año,
  estudiantes_investigando_4to_año,
  estudiantes_investigando_5to_año,
  año_evaluacion,
  id,
}) {
  const { setIncorporacionInvestigacion, del, setDel, insert, setInsert, setNotification, setMessageSucces, setNotificationType } =
    tableUse();
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal,setShowDeleteModal]= useState()
  const { isAdmin, isDirective } = useUser();

  const refs = {
    institucional: useRef(),
    nacional: useRef(),
    internacional: useRef(),
    cantidad_profesores_incorporados: useRef(),
    estudiantes_investigando_1er_año: useRef(),
    estudiantes_investigando_2do_año: useRef(),
    estudiantes_investigando_3er_año: useRef(),
    estudiantes_investigando_4to_año: useRef(),
    estudiantes_investigando_5to_año: useRef(),
    año_evaluacion: useRef(),
  };

  function deleteItem(id) {
    const url = `http://localhost:3002/api/incorporacion_investigacion_cientifica/${id}`;
    setDel(!del);

    fetch(url, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((json) => {
        setIncorporacionInvestigacion(json.data || []);
        setMessageSucces("Incorporación en investigación científica eliminada");
        setNotificationType('delete');
        setNotification(true);
      });
  }

  function modifyItem() {
    event.preventDefault();
    const url = `http://localhost:3002/api/incorporacion_investigacion_cientifica/${id}`;
    const payload = {
      institucional: refs.institucional.current.value,
      nacional: refs.nacional.current.value,
      internacional: refs.internacional.current.value,
      cantidad_profesores_incorporados:
        refs.cantidad_profesores_incorporados.current.value,
      estudiantes_investigando_1er_año:
        refs.estudiantes_investigando_1er_año.current.value,
      estudiantes_investigando_2do_año:
        refs.estudiantes_investigando_2do_año.current.value,
      estudiantes_investigando_3er_año:
        refs.estudiantes_investigando_3er_año.current.value,
      estudiantes_investigando_4to_año:
        refs.estudiantes_investigando_4to_año.current.value,
      estudiantes_investigando_5to_año:
        refs.estudiantes_investigando_5to_año.current.value,
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
        setIncorporacionInvestigacion(json?.data || []);
        setMessageSucces("Incorporación en investigación científica actualizada");
        setNotificationType('insert');
        setNotification(true);
        setInsert(!insert)
      });

    setInsert(!insert);
  }

  return (
    <div className="mb-5 border border-black w-11/12 flex flex-col items-center justify-center shadow-lg shadow-zinc-950/60 p-5 rounded-lg">
      <h2 className="font-bold">Institucional:</h2>
      <div>{institucional}</div>
      <h2 className="font-bold">Nacional:</h2>
      <div>{nacional}</div>
      <h2 className="font-bold">Internacional:</h2>
      <div>{internacional}</div>

      <h2 className="font-bold">Estudiantes investigando 1er año:</h2>
      <div>{estudiantes_investigando_1er_año}</div>
      <h2 className="font-bold">Estudiantes investigando 2do año:</h2>
      <div>{estudiantes_investigando_2do_año}</div>
      <h2 className="font-bold">Estudiantes investigando 3er año:</h2>
      <div>{estudiantes_investigando_3er_año}</div>
      <h2 className="font-bold">Estudiantes investigando 4to año:</h2>
      <div>{estudiantes_investigando_4to_año}</div>
      <h2 className="font-bold">Estudiantes investigando 5to año:</h2>
      <div>{estudiantes_investigando_5to_año}</div>

      <h2 className="font-bold">Cantidad de profesores incorporados:</h2>
      <div>{cantidad_profesores_incorporados}</div>

      <h2 className="font-bold">Año de la evaluación:</h2>
      <div>{año_evaluacion}</div>

      {(isAdmin || isDirective) &&  <div className="flex flex-row gap-4 mt-4">
        
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
       
      </div>}

      {showModal && (
        <form onSubmit={modifyItem}>
          <div className="fixed inset-0 flex items-center justify-center gap-5 overflow-auto">
            <div className="bg-zinc-100 p-6 rounded-lg shadow-xl shadow-black/50 grid grid-cols-3 gap-5 max-w-11/12 max-h-11/12 overflow-auto">
              <h2 className="text-xl font-bold col-span-3">
                Modificar Incorporacion Investigacion Cientifica
              </h2>

              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label htmlFor="institucional">Institucional:</label>
                <Input
                  type="number"
                  inputName="institucional"
                  min="0"
                  defaultValue={institucional}
                  ref={refs.institucional}
                />
              </div>
              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label htmlFor="nacional">Nacional:</label>
                <Input
                  type="number"
                  inputName="nacional"
                  min="0"
                  defaultValue={nacional}
                  ref={refs.nacional}
                />
              </div>
              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label htmlFor="internacional">Internacional:</label>
                <Input
                  type="number"
                  inputName="internacional"
                  min="0"
                  ref={refs.internacional}
                  defaultValue={internacional}
                />
              </div>

              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label htmlFor="profesores_incorporados">
                  Cantidad de profesores incorporados:
                </label>
                <Input
                  type="number"
                  inputName="profesores_incorporados"
                  min="0"
                  ref={refs.cantidad_profesores_incorporados}
                  defaultValue={cantidad_profesores_incorporados}
                />
              </div>

              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label htmlFor="estudiantes_investigando_1ro">
                  Estudiantes investigando 1er año:
                </label>
                <Input
                  type="number"
                  inputName="estudiantes_investigando_1ro"
                  min="0"
                  ref={refs.estudiantes_investigando_1er_año}
                  defaultValue={estudiantes_investigando_1er_año}
                />
              </div>
              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label htmlFor="estudiantes_investigando_2do">
                  Estudiantes investigando 2do año:
                </label>
                <Input
                  type="number"
                  inputName="estudiantes_investigando_2do"
                  min="0"
                  ref={refs.estudiantes_investigando_2do_año}
                  defaultValue={estudiantes_investigando_2do_año}
                />
              </div>
              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label htmlFor="estudiantes_investigando_3ro">
                  Estudiantes investigando 3er año:
                </label>
                <Input
                  type="number"
                  inputName="estudiantes_investigando_3ro"
                  min="0"
                  ref={refs.estudiantes_investigando_3er_año}
                  defaultValue={estudiantes_investigando_3er_año}
                />
              </div>
              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label htmlFor="estudiantes_investigando_4to">
                  Estudiantes investigando 4to año:
                </label>
                <Input
                  type="number"
                  inputName="estudiantes_investigando_4to"
                  min="0"
                  ref={refs.estudiantes_investigando_4to_año}
                  defaultValue={estudiantes_investigando_4to_año}
                />
              </div>
              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label htmlFor="estudiantes_investigando_5to">
                  Estudiantes investigando 5to año:
                </label>
                <Input
                  type="number"
                  inputName="estudiantes_investigando_5to"
                  min="0"
                  ref={refs.estudiantes_investigando_5to_año}
                  defaultValue={estudiantes_investigando_5to_año}
                />
              </div>

              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label htmlFor="año_evaluacion">Año de la evaluación:</label>
                <Input
                  type="number"
                  inputName="año_evaluacion"
                  min="0"
                  ref={refs.año_evaluacion}
                  defaultValue={año_evaluacion}
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white row-start-6 px-4 py-2 my-5 rounded hover:bg-blue-600"
              >
                Guardar Cambios
              </button>
              <button
                type="button"
                className="bg-zinc-500 text-white row-start-6 px-4 py-2 my-5 mx-5 rounded hover:bg-red-600"
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
