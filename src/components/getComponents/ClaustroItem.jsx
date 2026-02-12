import { tableUse } from "../../context/TablesContext";
import { useState, useRef } from "react";
import Input from "../Input";
import { useUser } from "../../context/UserContext";

export default function ClaustroItem({
  total_claustro,
  drc,
  drc_equivalentes,
  drc_afin,
  mc_equivalentes,
  pt_pa,
  año_evaluacion,
  id,
}) {
  const { setClaustro, del, setDel, insert, setInsert, setNotification, setMessageSucces, setNotificationType } = tableUse();
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal,setShowDeleteModal]= useState()
  const { isAdmin, isDirective } = useUser();

  const refs = {
    total_claustro: useRef(),
    drc: useRef(),
    drc_equivalentes: useRef(),
    drc_afin: useRef(),
    mc_equivalentes: useRef(),
    pt_pa: useRef(),
    año_evaluacion: useRef(),
  };

  function deleteItem(id) {
    const url = `http://localhost:3002/api/claustros/${id}`;
    setDel(!del);

    fetch(url, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((json) => {
        setClaustro(json.data || []);
        setMessageSucces("Claustro eliminado");
        setNotificationType('delete');
        setNotification(true);
      });
  }

  function modifyItem() {
    event.preventDefault();
    const url = `http://localhost:3002/api/claustros/${id}`;
    const payload = {
      total_claustro: refs.total_claustro.current.value,
      drc: refs.drc.current.value,
      drc_equivalentes: refs.drc_equivalentes.current.value,
      drc_afin: refs.drc_afin.current.value,
      mc_equivalentes: refs.mc_equivalentes.current.value,
      pt_pa: refs.pt_pa.current.value,
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
        setClaustro(json?.data || []);
        setMessageSucces("Claustro actualizado");
        setNotificationType('insert');
        setNotification(true);
        setInsert(!insert)
      });
  }

  return (
    <div className="mb-5 border border-black w-11/12 flex flex-col items-center justify-center shadow-lg shadow-zinc-950/60 p-5 rounded-lg">
      <h1 className="font-bold">Total del claustro:</h1>
      <div>{total_claustro}</div>
      <h1 className="font-bold">DRC:</h1>
      <div>{drc}</div>
      <h1 className="font-bold">DRC equivalentes:</h1>
      <div>{drc_equivalentes}</div>
      <h1 className="font-bold">DRC afines:</h1>
      <div>{drc_afin}</div>
      <h1 className="font-bold">MC equivalentes:</h1>
      <div>{mc_equivalentes}</div>
      <h1 className="font-bold">PT-PA:</h1>
      <div>{pt_pa}</div>
      <h1 className="font-bold">Año de evaluación:</h1>
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
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center backdrop-blur-sm z-50">
            <div className="bg-white p-8 rounded-lg shadow-2xl grid grid-cols-2 gap-5 max-w-lg w-full mx-4 max-h-96 overflow-y-auto">
              <h2 className="text-xl font-bold col-span-2">
                Modificar Claustro
              </h2>

              <div className="flex flex-col gap-2">
                <label htmlFor="total_claustro" className="text-sm font-semibold text-gray-700">Total de claustro:</label>
                <Input
                  type="number"
                  inputName="total_claustro"
                  min="0"
                  defaultValue={total_claustro}
                  ref={refs.total_claustro}
                  placeholder="0"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="drc" className="text-sm font-semibold text-gray-700">Dr.C:</label>
                <Input
                  type="number"
                  inputName="drc"
                  min="0"
                  defaultValue={drc}
                  ref={refs.drc}
                  placeholder="0"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="drc_equivalentes" className="text-sm font-semibold text-gray-700">Dr.C/equivalentes:</label>
                <Input
                  type="number"
                  inputName="drc_equivalentes"
                  min="0"
                  defaultValue={drc_equivalentes}
                  ref={refs.drc_equivalentes}
                  placeholder="0"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="drc_afin" className="text-sm font-semibold text-gray-700">Dr.C/afin:</label>
                <Input
                  type="number"
                  inputName="drc_afin"
                  min="0"
                  defaultValue={drc_afin}
                  ref={refs.drc_afin}
                  placeholder="0"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="mc_equivalentes" className="text-sm font-semibold text-gray-700">Mc/equivalentes:</label>
                <Input
                  type="number"
                  inputName="mc_equivalentes"
                  min="0"
                  defaultValue={mc_equivalentes}
                  ref={refs.mc_equivalentes}
                  placeholder="0"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="pt_pa" className="text-sm font-semibold text-gray-700">Pt/Pa:</label>
                <Input
                  type="number"
                  inputName="pt_pa"
                  min="0"
                  defaultValue={pt_pa}
                  ref={refs.pt_pa}
                  placeholder="0"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="año_evaluacion" className="text-sm font-semibold text-gray-700">Año evaluacion:</label>
                <Input
                  type="number"
                  inputName="año_evaluacion"
                  min="0"
                  defaultValue={año_evaluacion}
                  ref={refs.año_evaluacion}
                  placeholder="2024"
                />
              </div>

              <div className="col-span-2 flex gap-3 mt-4">
                <button
                  type="submit"
                  className="flex-1 bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors"
                >
                  Guardar
                </button>
                <button
                  type="button"
                  className="flex-1 bg-gray-300 text-gray-900 px-4 py-2 rounded-lg hover:bg-gray-400 transition-colors"
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
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center backdrop-blur-sm z-50">
          <div className="bg-white p-6 rounded-lg shadow-2xl max-w-sm w-full mx-4">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Confirmar eliminación</h2>
            <p className="text-gray-600 mb-6">¿Está seguro que desea eliminar este claustro?</p>
            <div className="flex gap-3">
              <button
                onClick={() => {
                  deleteItem(id);
                }}
                className="flex-1 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
              >
                Eliminar
              </button>
              <button
                onClick={() => setShowDeleteModal(false)}
                className="flex-1 bg-gray-300 text-gray-900 px-4 py-2 rounded-lg hover:bg-gray-400 transition-colors"
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
