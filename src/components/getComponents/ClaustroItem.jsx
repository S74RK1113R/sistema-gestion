import { tableUse } from "../../context/TablesContext";
import { useState, useRef } from "react";
import Input from "../Input";

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
  const { setClaustro, del, setDel, insert, setInsert } = tableUse();
  const [showModal, setShowModal] = useState(false);

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
      .then((json) => setClaustro(json.data || []));
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
      .then((json) => setClaustro(json?.data || []));

    setInsert(!insert);
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

      <div className="flex flex-row gap-4 mt-4">
        <button
          onClick={() => {
            deleteItem(id);
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

      {showModal && (
        <form onSubmit={modifyItem}>
          <div className="fixed inset-0 flex items-center justify-center gap-5 overflow-auto">
            <div className="bg-zinc-100 p-6 rounded-lg shadow-xl shadow-black/50 grid grid-cols-2 gap-5 max-w-11/12 max-h-11/12 overflow-auto">
              <h2 className="text-xl font-bold col-span-2">
                Modificar Claustro
              </h2>

              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label htmlFor="total_claustro">Total de claustro:</label>
                <Input
                  type="number"
                  inputName="total_claustro"
                  min="0"
                  defaultValue = {total_claustro}
                  ref={refs.total_claustro}
                />
              </div>

              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label htmlFor="drc">Dr.C:</label>
                <Input type="number" inputName="drc" min="0" defaultValue={drc} ref={refs.drc} />
              </div>

              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label htmlFor="drc_equivalentes">Dr.C/equivalentes:</label>
                <Input
                  type="number"
                  inputName="drc_equivalentes"
                  min="0"
                  defaultValue={drc_equivalentes}
                  ref={refs.drc_equivalentes}
                />
              </div>
              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label htmlFor="drc_afin">Dr.C/afin:</label>
                <Input
                  type="number"
                  inputName="drc_afin"
                  min="0"
                  defaultValue={drc_afin}
                  ref={refs.drc_afin}
                />
              </div>
              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label htmlFor="mc_equivalentes">Mc/equivalentes:</label>
                <Input
                  type="number"
                  inputName="mc_equivalentes"
                  min="0"
                  defaultValue={mc_equivalentes}
                  ref={refs.mc_equivalentes}
                />
              </div>
              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label htmlFor="pt_pa">Pt/Pa:</label>
                <Input type="number" inputName="pt_pa" min="0" defaultValue={pt_pa} ref={refs.pt_pa} />
              </div>
              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label htmlFor="año_evaluacion">Año evaluacion:</label>
                <Input
                  type="number"
                  inputName="año_evaluacion"
                  min="0"
                  defaultValue={año_evaluacion}
                  ref={refs.año_evaluacion}
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
    </div>
  );
}
