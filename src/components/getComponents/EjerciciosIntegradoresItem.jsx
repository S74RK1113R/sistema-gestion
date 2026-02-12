import { tableUse } from "../../context/TablesContext";
import { useState, useRef } from "react";
import Input from "../Input";
import { useUser } from "../../context/UserContext";

export default function EjerciciosIntegradoresItem({
  id,
  matricula_2do_año,
  matricula_3er_año,
  matricula_4to_año,
  matricula_5to_año,
  evaluados_2do_año,
  evaluados_3er_año,
  evaluados_4to_año,
  evaluados_5to_año,
  con_2_2do_año,
  con_2_3er_año,
  con_2_4to_año,
  con_2_5to_año,
  con_3_2do_año,
  con_3_3er_año,
  con_3_4to_año,
  con_3_5to_año,
  con_4_2do_año,
  con_4_3er_año,
  con_4_4to_año,
  con_4_5to_año,
  con_5_2do_año,
  con_5_3er_año,
  con_5_4to_año,
  con_5_5to_año,
  año_evaluacion,
}) {
  const { setEjerciciosIntegradores, del, setDel, insert, setInsert, setNotification, setMessageSucces, setNotificationType } =
    tableUse();
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal,setShowDeleteModal] = useState()
  const { isAdmin, isDirective } = useUser();

  const refs = {
    matricula_2do_año: useRef(),
    matricula_3er_año: useRef(),
    matricula_4to_año: useRef(),
    matricula_5to_año: useRef(),
    evaluados_2do_año: useRef(),
    evaluados_3er_año: useRef(),
    evaluados_4to_año: useRef(),
    evaluados_5to_año: useRef(),
    con_2_2do_año: useRef(),
    con_2_3er_año: useRef(),
    con_2_4to_año: useRef(),
    con_2_5to_año: useRef(),
    con_3_2do_año: useRef(),
    con_3_3er_año: useRef(),
    con_3_4to_año: useRef(),
    con_3_5to_año: useRef(),
    con_4_2do_año: useRef(),
    con_4_3er_año: useRef(),
    con_4_4to_año: useRef(),
    con_4_5to_año: useRef(),
    con_5_2do_año: useRef(),
    con_5_3er_año: useRef(),
    con_5_4to_año: useRef(),
    con_5_5to_año: useRef(),
    año_evaluacion: useRef(),
  };

  function deleteItem(id) {
    const url = `http://localhost:3002/api/ejercicios_integradores/${id}`;
    setDel(!del);

    fetch(url, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((json) => {
        setEjerciciosIntegradores(json.data || []);
        setMessageSucces("Ejercicio integrador eliminado");
        setNotificationType('delete');
        setNotification(true);
      });
  }

  function modifyItem() {
    event.preventDefault();
    const url = `http://localhost:3002/api/ejercicios_integradores/${id}`;
    const payload = {
      matricula_2do_año: refs.matricula_2do_año.current.value,
      matricula_3er_año: refs.matricula_3er_año.current.value,
      matricula_4to_año: refs.matricula_4to_año.current.value,
      matricula_5to_año: refs.matricula_5to_año.current.value,
      evaluados_2do_año: refs.evaluados_2do_año.current.value,
      evaluados_3er_año: refs.evaluados_3er_año.current.value,
      evaluados_4to_año: refs.evaluados_4to_año.current.value,
      evaluados_5to_año: refs.evaluados_5to_año.current.value,
      con_2_2do_año: refs.con_2_2do_año.current.value,
      con_2_3er_año: refs.con_2_3er_año.current.value,
      con_2_4to_año: refs.con_2_4to_año.current.value,
      con_2_5to_año: refs.con_2_5to_año.current.value,
      con_3_2do_año: refs.con_3_2do_año.current.value,
      con_3_3er_año: refs.con_3_3er_año.current.value,
      con_3_4to_año: refs.con_3_4to_año.current.value,
      con_3_5to_año: refs.con_3_5to_año.current.value,
      con_4_2do_año: refs.con_4_2do_año.current.value,
      con_4_3er_año: refs.con_4_3er_año.current.value,
      con_4_4to_año: refs.con_4_4to_año.current.value,
      con_4_5to_año: refs.con_4_5to_año.current.value,
      con_5_2do_año: refs.con_5_2do_año.current.value,
      con_5_3er_año: refs.con_5_3er_año.current.value,
      con_5_4to_año: refs.con_5_4to_año.current.value,
      con_5_5to_año: refs.con_5_5to_año.current.value,
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
        setEjerciciosIntegradores(json?.data || []);
        setMessageSucces("Ejercicios integradores actualizado");
        setNotificationType('insert');
        setNotification(true);
        setInsert(!insert)
      });

    setInsert(!insert);
  }

  return (
    <div className="border border-black w-11/12 flex flex-col items-center justify-center shadow-lg shadow-zinc-950/60 p-5 rounded-lg my-5">
      <h1 className="font-bold">Matrícula 2do año:</h1>
      <div>{matricula_2do_año}</div>
      <h1 className="font-bold">Matrícula 3er año:</h1>
      <div>{matricula_3er_año}</div>
      <h1 className="font-bold">Matrícula 4to año:</h1>
      <div>{matricula_4to_año}</div>
      <h1 className="font-bold">Matrícula 5to año:</h1>
      <div>{matricula_5to_año}</div>

      <h1 className="font-bold">Evaluados 2do año:</h1>
      <div>{evaluados_2do_año}</div>
      <h1 className="font-bold">Evaluados 3er año:</h1>
      <div>{evaluados_3er_año}</div>
      <h1 className="font-bold">Evaluados 4to año:</h1>
      <div>{evaluados_4to_año}</div>
      <h1 className="font-bold">Evaluados 5to año:</h1>
      <div>{evaluados_5to_año}</div>

      <h1 className="font-bold">Evaluados con 2 - 2do año:</h1>
      <div>{con_2_2do_año}</div>
      <h1 className="font-bold">Evaluados con 2 - 3er año:</h1>
      <div>{con_2_3er_año}</div>
      <h1 className="font-bold">Evaluados con 2 - 4to año:</h1>
      <div>{con_2_4to_año}</div>
      <h1 className="font-bold">Evaluados con 2 - 5to año:</h1>
      <div>{con_2_5to_año}</div>

      <h1 className="font-bold">Evaluados con 3 - 2do año:</h1>
      <div>{con_3_2do_año}</div>
      <h1 className="font-bold">Evaluados con 3 - 3er año:</h1>
      <div>{con_3_3er_año}</div>
      <h1 className="font-bold">Evaluados con 3 - 4to año:</h1>
      <div>{con_3_4to_año}</div>
      <h1 className="font-bold">Evaluados con 3 - 5to año:</h1>
      <div>{con_3_5to_año}</div>

      <h1 className="font-bold">Evaluados con 4 - 2do año:</h1>
      <div>{con_4_2do_año}</div>
      <h1 className="font-bold">Evaluados con 4 - 3er año:</h1>
      <div>{con_4_3er_año}</div>
      <h1 className="font-bold">Evaluados con 4 - 4to año:</h1>
      <div>{con_4_4to_año}</div>
      <h1 className="font-bold">Evaluados con 4 - 5to año:</h1>
      <div>{con_4_5to_año}</div>

      <h1 className="font-bold">Evaluados con 5 - 2do año:</h1>
      <div>{con_5_2do_año}</div>
      <h1 className="font-bold">Evaluados con 5 - 3er año:</h1>
      <div>{con_5_3er_año}</div>
      <h1 className="font-bold">Evaluados con 5 - 4to año:</h1>
      <div>{con_5_4to_año}</div>
      <h1 className="font-bold">Evaluados con 5 - 5to año:</h1>
      <div>{con_5_5to_año}</div>

      <h1 className="font-bold">Año de la evaluación:</h1>
      <div>{año_evaluacion}</div>

      {(isAdmin || isDirective) && <div className="flex flex-row gap-4 mt-4">
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
            <div className="bg-zinc-100 p-6 rounded-lg shadow-xl shadow-black/50 grid grid-cols-5 gap-5 max-w-11/12 max-h-11/12 overflow-auto">
              <h2 className="text-xl font-bold mb-4 col-span-5">
                Modificar Ejercicios Integradores
              </h2>

              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label htmlFor="matricula_2do">Matrícula 2do año:</label>
                <Input
                  type="number"
                  inputName="matricula_2do"
                  min="0"
                  ref={refs.matricula_2do_año}
                  defaultValue={matricula_2do_año}
                />
              </div>
              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label htmlFor="matricula_3ro">Matrícula 3ro año:</label>
                <Input
                  type="number"
                  inputName="matricula_3ro"
                  min="0"
                  ref={refs.matricula_3er_año}
                  defaultValue={matricula_3er_año}
                />
              </div>
              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label htmlFor="matricula_4to">Matrícula 4to año:</label>
                <Input
                  type="number"
                  inputName="matricula_4to"
                  min="0"
                  ref={refs.matricula_4to_año}
                  defaultValue={matricula_4to_año}
                />
              </div>
              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label htmlFor="matricula_5to">Matrícula 5to año:</label>
                <Input
                  type="number"
                  inputName="matricula_5to"
                  min="0"
                  ref={refs.matricula_5to_año}
                  defaultValue={matricula_5to_año}
                />
              </div>

              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label htmlFor="evaluados_2do">Evaluados 2do año:</label>
                <Input
                  type="number"
                  inputName="evaluados_2do"
                  min="0"
                  ref={refs.evaluados_2do_año}
                  defaultValue={evaluados_2do_año}
                />
              </div>
              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label htmlFor="evaluados_3ro">Evaluados 3ro año:</label>
                <Input
                  type="number"
                  inputName="evaluados_3ro"
                  min="0"
                  ref={refs.evaluados_3er_año}
                  defaultValue={evaluados_3er_año}
                />
              </div>
              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label htmlFor="evaluados_4to">Evaluados 4to año:</label>
                <Input
                  type="number"
                  inputName="evaluados_4to"
                  min="0"
                  ref={refs.evaluados_4to_año}
                  defaultValue={evaluados_4to_año}
                />
              </div>
              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label htmlFor="evaluados_5to">Evaluados 5to año:</label>
                <Input
                  type="number"
                  inputName="evaluados_5to"
                  min="0"
                  ref={refs.evaluados_5to_año}
                  defaultValue={evaluados_5to_año}
                />
              </div>

              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label htmlFor="nota_con2_2do">Nota de 2 2do año:</label>
                <Input
                  type="number"
                  inputName="nota_con2_2do"
                  min="0"
                  ref={refs.con_2_2do_año}
                  defaultValue={con_2_2do_año}
                />
              </div>
              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label htmlFor="nota_con2_3ro">Nota de 2 3ro año:</label>
                <Input
                  type="number"
                  inputName="nota_con2_3ro"
                  min="0"
                  ref={refs.con_2_3er_año}
                  defaultValue={con_2_3er_año}
                />
              </div>
              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label htmlFor="nota_con2_4to">Nota de 2 4to año:</label>
                <Input
                  type="number"
                  inputName="nota_con2_4to"
                  min="0"
                  ref={refs.con_2_4to_año}
                  defaultValue={con_2_4to_año}
                />
              </div>
              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label htmlFor="nota_con2_5to">Nota de 2 5to año:</label>
                <Input
                  type="number"
                  inputName="nota_con2_5to"
                  min="0"
                  ref={refs.con_2_5to_año}
                  defaultValue={con_2_5to_año}
                />
              </div>

              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label htmlFor="nota_con3_2do">Nota de 3 2do año:</label>
                <Input
                  type="number"
                  inputName="nota_con3_2do"
                  min="0"
                  ref={refs.con_3_2do_año}
                  defaultValue={con_3_2do_año}
                />
              </div>
              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label htmlFor="nota_con3_3ro">Nota de 3 3ro año:</label>
                <Input
                  type="number"
                  inputName="nota_con3_3ro"
                  min="0"
                  ref={refs.con_3_3er_año}
                  defaultValue={con_3_3er_año}
                />
              </div>
              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label htmlFor="nota_con3_4to">Nota de 3 4to año:</label>
                <Input
                  type="number"
                  inputName="nota_con3_4to"
                  min="0"
                  ref={refs.con_3_4to_año}
                  defaultValue={con_3_4to_año}
                />
              </div>
              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label htmlFor="nota_con3_5to">Nota de 3 5to año:</label>
                <Input
                  type="number"
                  inputName="nota_con3_5to"
                  min="0"
                  ref={refs.con_3_5to_año}
                  defaultValue={con_3_5to_año}
                />
              </div>

              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label htmlFor="nota_con4_2do">Nota de 4 2do año:</label>
                <Input
                  type="number"
                  inputName="nota_con4_2do"
                  min="0"
                  ref={refs.con_4_2do_año}
                  defaultValue={con_4_2do_año}
                />
              </div>
              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label htmlFor="nota_con4_3ro">Nota de 4 3ro año:</label>
                <Input
                  type="number"
                  inputName="nota_con4_3ro"
                  min="0"
                  ref={refs.con_4_3er_año}
                  defaultValue={con_4_3er_año}
                />
              </div>
              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label htmlFor="nota_con4_4to">Nota de 4 4to año:</label>
                <Input
                  type="number"
                  inputName="nota_con4_4to"
                  min="0"
                  ref={refs.con_4_4to_año}
                  defaultValue={con_4_4to_año}
                />
              </div>
              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label htmlFor="nota_con4_5to">Nota de 4 5to año:</label>
                <Input
                  type="number"
                  inputName="nota_con4_5to"
                  min="0"
                  ref={refs.con_4_5to_año}
                  defaultValue={con_4_5to_año}
                />
              </div>

              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label htmlFor="nota_con5_2do">Nota de 5 2do año:</label>
                <Input
                  type="number"
                  inputName="nota_con5_2do"
                  min="0"
                  ref={refs.con_5_2do_año}
                  defaultValue={con_5_2do_año}
                />
              </div>
              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label htmlFor="nota_con5_3ro">Nota de 5 3ro año:</label>
                <Input
                  type="number"
                  inputName="nota_con5_3ro"
                  min="0"
                  ref={refs.con_5_3er_año}
                  defaultValue={con_5_3er_año}
                />
              </div>
              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label htmlFor="nota_con5_4to">Nota de 5 4to año:</label>
                <Input
                  type="number"
                  inputName="nota_con5_4to"
                  min="0"
                  ref={refs.con_5_4to_año}
                  defaultValue={con_5_4to_año}
                />
              </div>
              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label htmlFor="nota_con5_5to">Nota de 5 5to año:</label>
                <Input
                  type="number"
                  inputName="nota_con5_5to"
                  min="0"
                  ref={refs.con_5_5to_año}
                  defaultValue={con_5_5to_año}
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

              <div className="col-span-2 flex gap-2">
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
