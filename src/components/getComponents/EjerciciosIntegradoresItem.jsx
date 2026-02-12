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
    <div className="border border-gray-300 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow p-6">
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-4">
          <p className="text-xs font-semibold text-gray-700 mb-3 border-b pb-2">Matrícula</p>
        </div>
        <div>
          <p className="text-xs font-semibold text-gray-500 mb-1">2do año</p>
          <p className="text-sm font-medium text-gray-900">{matricula_2do_año}</p>
        </div>
        <div>
          <p className="text-xs font-semibold text-gray-500 mb-1">3er año</p>
          <p className="text-sm font-medium text-gray-900">{matricula_3er_año}</p>
        </div>
        <div>
          <p className="text-xs font-semibold text-gray-500 mb-1">4to año</p>
          <p className="text-sm font-medium text-gray-900">{matricula_4to_año}</p>
        </div>
        <div>
          <p className="text-xs font-semibold text-gray-500 mb-1">5to año</p>
          <p className="text-sm font-medium text-gray-900">{matricula_5to_año}</p>
        </div>

        <div className="col-span-4">
          <p className="text-xs font-semibold text-gray-700 mb-3 border-b pb-2 mt-2">Evaluados</p>
        </div>
        <div>
          <p className="text-xs font-semibold text-gray-500 mb-1">2do año</p>
          <p className="text-sm font-medium text-gray-900">{evaluados_2do_año}</p>
        </div>
        <div>
          <p className="text-xs font-semibold text-gray-500 mb-1">3er año</p>
          <p className="text-sm font-medium text-gray-900">{evaluados_3er_año}</p>
        </div>
        <div>
          <p className="text-xs font-semibold text-gray-500 mb-1">4to año</p>
          <p className="text-sm font-medium text-gray-900">{evaluados_4to_año}</p>
        </div>
        <div>
          <p className="text-xs font-semibold text-gray-500 mb-1">5to año</p>
          <p className="text-sm font-medium text-gray-900">{evaluados_5to_año}</p>
        </div>

        <div className="col-span-4">
          <p className="text-xs font-semibold text-gray-700 mb-3 border-b pb-2 mt-2">Con Calificación 2</p>
        </div>
        <div>
          <p className="text-xs font-semibold text-gray-500 mb-1">2do año</p>
          <p className="text-sm font-medium text-gray-900">{con_2_2do_año}</p>
        </div>
        <div>
          <p className="text-xs font-semibold text-gray-500 mb-1">3er año</p>
          <p className="text-sm font-medium text-gray-900">{con_2_3er_año}</p>
        </div>
        <div>
          <p className="text-xs font-semibold text-gray-500 mb-1">4to año</p>
          <p className="text-sm font-medium text-gray-900">{con_2_4to_año}</p>
        </div>
        <div>
          <p className="text-xs font-semibold text-gray-500 mb-1">5to año</p>
          <p className="text-sm font-medium text-gray-900">{con_2_5to_año}</p>
        </div>

        <div className="col-span-4">
          <p className="text-xs font-semibold text-gray-700 mb-3 border-b pb-2 mt-2">Con Calificación 3</p>
        </div>
        <div>
          <p className="text-xs font-semibold text-gray-500 mb-1">2do año</p>
          <p className="text-sm font-medium text-gray-900">{con_3_2do_año}</p>
        </div>
        <div>
          <p className="text-xs font-semibold text-gray-500 mb-1">3er año</p>
          <p className="text-sm font-medium text-gray-900">{con_3_3er_año}</p>
        </div>
        <div>
          <p className="text-xs font-semibold text-gray-500 mb-1">4to año</p>
          <p className="text-sm font-medium text-gray-900">{con_3_4to_año}</p>
        </div>
        <div>
          <p className="text-xs font-semibold text-gray-500 mb-1">5to año</p>
          <p className="text-sm font-medium text-gray-900">{con_3_5to_año}</p>
        </div>

        <div className="col-span-4">
          <p className="text-xs font-semibold text-gray-700 mb-3 border-b pb-2 mt-2">Con Calificación 4</p>
        </div>
        <div>
          <p className="text-xs font-semibold text-gray-500 mb-1">2do año</p>
          <p className="text-sm font-medium text-gray-900">{con_4_2do_año}</p>
        </div>
        <div>
          <p className="text-xs font-semibold text-gray-500 mb-1">3er año</p>
          <p className="text-sm font-medium text-gray-900">{con_4_3er_año}</p>
        </div>
        <div>
          <p className="text-xs font-semibold text-gray-500 mb-1">4to año</p>
          <p className="text-sm font-medium text-gray-900">{con_4_4to_año}</p>
        </div>
        <div>
          <p className="text-xs font-semibold text-gray-500 mb-1">5to año</p>
          <p className="text-sm font-medium text-gray-900">{con_4_5to_año}</p>
        </div>

        <div className="col-span-4">
          <p className="text-xs font-semibold text-gray-700 mb-3 border-b pb-2 mt-2">Con Calificación 5</p>
        </div>
        <div>
          <p className="text-xs font-semibold text-gray-500 mb-1">2do año</p>
          <p className="text-sm font-medium text-gray-900">{con_5_2do_año}</p>
        </div>
        <div>
          <p className="text-xs font-semibold text-gray-500 mb-1">3er año</p>
          <p className="text-sm font-medium text-gray-900">{con_5_3er_año}</p>
        </div>
        <div>
          <p className="text-xs font-semibold text-gray-500 mb-1">4to año</p>
          <p className="text-sm font-medium text-gray-900">{con_5_4to_año}</p>
        </div>
        <div>
          <p className="text-xs font-semibold text-gray-500 mb-1">5to año</p>
          <p className="text-sm font-medium text-gray-900">{con_5_5to_año}</p>
        </div>

        <div className="col-span-4">
          <p className="text-xs font-semibold text-gray-500 mb-1">Año de la evaluación</p>
          <p className="text-sm font-medium text-gray-900">{año_evaluacion}</p>
        </div>
      </div>

      {(isAdmin || isDirective) && (
        <div className="flex flex-row gap-3 mt-6 justify-end">
          <button
            onClick={() => setShowDeleteModal(true)}
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
              <h3 className="text-xl font-bold mb-6 text-gray-900">Modificar Ejercicios Integradores</h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-gray-500 mb-1 block">Matrícula 2do año</label>
                  <input
                    type="number"
                    value={matricula_2do_año}
                    onChange={(e) => refs.matricula_2do_año.current.value = e.target.value}
                    defaultValue={matricula_2do_año}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-900"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-500 mb-1 block">Matrícula 3er año</label>
                  <input
                    type="number"
                    value={matricula_3er_año}
                    onChange={(e) => refs.matricula_3er_año.current.value = e.target.value}
                    defaultValue={matricula_3er_año}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-900"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-500 mb-1 block">Matrícula 4to año</label>
                  <input
                    type="number"
                    value={matricula_4to_año}
                    onChange={(e) => refs.matricula_4to_año.current.value = e.target.value}
                    defaultValue={matricula_4to_año}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-900"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-500 mb-1 block">Matrícula 5to año</label>
                  <input
                    type="number"
                    value={matricula_5to_año}
                    onChange={(e) => refs.matricula_5to_año.current.value = e.target.value}
                    defaultValue={matricula_5to_año}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-900"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-gray-500 mb-1 block">Evaluados 2do año</label>
                  <input
                    type="number"
                    value={evaluados_2do_año}
                    onChange={(e) => refs.evaluados_2do_año.current.value = e.target.value}
                    defaultValue={evaluados_2do_año}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-900"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-500 mb-1 block">Evaluados 3er año</label>
                  <input
                    type="number"
                    value={evaluados_3er_año}
                    onChange={(e) => refs.evaluados_3er_año.current.value = e.target.value}
                    defaultValue={evaluados_3er_año}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-900"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-500 mb-1 block">Evaluados 4to año</label>
                  <input
                    type="number"
                    value={evaluados_4to_año}
                    onChange={(e) => refs.evaluados_4to_año.current.value = e.target.value}
                    defaultValue={evaluados_4to_año}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-900"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-500 mb-1 block">Evaluados 5to año</label>
                  <input
                    type="number"
                    value={evaluados_5to_año}
                    onChange={(e) => refs.evaluados_5to_año.current.value = e.target.value}
                    defaultValue={evaluados_5to_año}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-900"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-gray-500 mb-1 block">Con 2 - 2do año</label>
                  <input
                    type="number"
                    value={con_2_2do_año}
                    onChange={(e) => refs.con_2_2do_año.current.value = e.target.value}
                    defaultValue={con_2_2do_año}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-900"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-500 mb-1 block">Con 2 - 3er año</label>
                  <input
                    type="number"
                    value={con_2_3er_año}
                    onChange={(e) => refs.con_2_3er_año.current.value = e.target.value}
                    defaultValue={con_2_3er_año}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-900"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-500 mb-1 block">Con 2 - 4to año</label>
                  <input
                    type="number"
                    value={con_2_4to_año}
                    onChange={(e) => refs.con_2_4to_año.current.value = e.target.value}
                    defaultValue={con_2_4to_año}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-900"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-500 mb-1 block">Con 2 - 5to año</label>
                  <input
                    type="number"
                    value={con_2_5to_año}
                    onChange={(e) => refs.con_2_5to_año.current.value = e.target.value}
                    defaultValue={con_2_5to_año}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-900"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-gray-500 mb-1 block">Con 3 - 2do año</label>
                  <input
                    type="number"
                    value={con_3_2do_año}
                    onChange={(e) => refs.con_3_2do_año.current.value = e.target.value}
                    defaultValue={con_3_2do_año}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-900"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-500 mb-1 block">Con 3 - 3er año</label>
                  <input
                    type="number"
                    value={con_3_3er_año}
                    onChange={(e) => refs.con_3_3er_año.current.value = e.target.value}
                    defaultValue={con_3_3er_año}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-900"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-500 mb-1 block">Con 3 - 4to año</label>
                  <input
                    type="number"
                    value={con_3_4to_año}
                    onChange={(e) => refs.con_3_4to_año.current.value = e.target.value}
                    defaultValue={con_3_4to_año}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-900"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-500 mb-1 block">Con 3 - 5to año</label>
                  <input
                    type="number"
                    value={con_3_5to_año}
                    onChange={(e) => refs.con_3_5to_año.current.value = e.target.value}
                    defaultValue={con_3_5to_año}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-900"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-gray-500 mb-1 block">Con 4 - 2do año</label>
                  <input
                    type="number"
                    value={con_4_2do_año}
                    onChange={(e) => refs.con_4_2do_año.current.value = e.target.value}
                    defaultValue={con_4_2do_año}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-900"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-500 mb-1 block">Con 4 - 3er año</label>
                  <input
                    type="number"
                    value={con_4_3er_año}
                    onChange={(e) => refs.con_4_3er_año.current.value = e.target.value}
                    defaultValue={con_4_3er_año}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-900"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-500 mb-1 block">Con 4 - 4to año</label>
                  <input
                    type="number"
                    value={con_4_4to_año}
                    onChange={(e) => refs.con_4_4to_año.current.value = e.target.value}
                    defaultValue={con_4_4to_año}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-900"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-500 mb-1 block">Con 4 - 5to año</label>
                  <input
                    type="number"
                    value={con_4_5to_año}
                    onChange={(e) => refs.con_4_5to_año.current.value = e.target.value}
                    defaultValue={con_4_5to_año}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-900"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-gray-500 mb-1 block">Con 5 - 2do año</label>
                  <input
                    type="number"
                    value={con_5_2do_año}
                    onChange={(e) => refs.con_5_2do_año.current.value = e.target.value}
                    defaultValue={con_5_2do_año}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-900"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-500 mb-1 block">Con 5 - 3er año</label>
                  <input
                    type="number"
                    value={con_5_3er_año}
                    onChange={(e) => refs.con_5_3er_año.current.value = e.target.value}
                    defaultValue={con_5_3er_año}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-900"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-500 mb-1 block">Con 5 - 4to año</label>
                  <input
                    type="number"
                    value={con_5_4to_año}
                    onChange={(e) => refs.con_5_4to_año.current.value = e.target.value}
                    defaultValue={con_5_4to_año}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-900"
                  />
                </div>
                <div className="col-span-2">
                  <label className="text-xs font-semibold text-gray-500 mb-1 block">Con 5 - 5to año</label>
                  <input
                    type="number"
                    value={con_5_5to_año}
                    onChange={(e) => refs.con_5_5to_año.current.value = e.target.value}
                    defaultValue={con_5_5to_año}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-900"
                  />
                </div>

                <div className="col-span-2">
                  <label className="text-xs font-semibold text-gray-500 mb-1 block">Año de la evaluación</label>
                  <input
                    type="number"
                    value={año_evaluacion}
                    onChange={(e) => refs.año_evaluacion.current.value = e.target.value}
                    defaultValue={año_evaluacion}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-900"
                  />
                </div>
              </div>

              <div className="flex flex-row gap-3 mt-6 justify-end">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="bg-gray-300 hover:bg-gray-400 text-gray-900 px-4 py-2 rounded-lg transition-colors text-sm font-medium"
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
            <p className="text-gray-900 mb-6">¿Está seguro que desea eliminar este registro?</p>
            <div className="flex flex-row gap-3 justify-end">
              <button
                type="button"
                onClick={() => setShowDeleteModal(false)}
                className="bg-gray-300 hover:bg-gray-400 text-gray-900 px-4 py-2 rounded-lg transition-colors text-sm font-medium"
              >
                Cancelar
              </button>
              <button
                onClick={() => deleteItem(id)}
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
