import { useRef } from "react";
import { tableUse } from "../../context/TablesContext";
import Input from "../Input";
import Select from "../Select";

export default function ClaustroForm() {
  const { setAsignaturas, setInsert, insert, setMessageSucces, setNotification, setNotificationType } = tableUse();

  const total_claustroRef = useRef();
  const drcRef = useRef();
  const drc_equivalentesRef = useRef();
  const drc_afinRef = useRef();
  const mc_equivalentesRef = useRef();
  const pt_paRef = useRef();
  const año_evaluacionRef = useRef();

  function erraseInput() {
    total_claustroRef.current.value = " ";
    drcRef.current.value = " ";
    drc_equivalentesRef.current.value = " ";
    drc_afinRef.current.value = " ";
    mc_equivalentesRef.current.value = " ";
    pt_paRef.current.value = " ";
    año_evaluacionRef.current.value = " ";
  }

  function handleSubmit() {
    event.preventDefault();
    const asignaturas = {
      total_claustro: total_claustroRef.current.value,
      drc: drcRef.current.value,
      drc_equivalentes: drc_equivalentesRef.current.value,
      drc_afin: drc_afinRef.current.value,
      mc_equivalentes: mc_equivalentesRef.current.value,
      pt_pa: pt_paRef.current.value,
      año_evaluacion: año_evaluacionRef.current.value
    };

    erraseInput();

    const url = "http://localhost:3002/api/claustros";
    fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      // Send your data in the request body as JSON
      body: JSON.stringify(asignaturas),
    })
      .then((res) => {
        if (!res.ok) {
          return res.json();
        }
        // handle error
      })
      .then((json) => {
        setAsignaturas(json?.data || []);
        setMessageSucces("Claustro insertado");
        setNotificationType('insert');
        setNotification(true);
      });

    setInsert(!insert);
  }

  return (
    <div className="w-full max-w-3xl mx-auto">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-3 gap-6 p-2">
          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="total_claustro" className="text-sm font-semibold text-gray-700">Total de claustro:</label>
            <Input type="number" inputName="total_claustro" min="0" ref={total_claustroRef} placeholder="Ingrese total"/>
          </div>

          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="drc" className="text-sm font-semibold text-gray-700">Dr.C:</label>
            <Input type="number" inputName="drc" min="0" ref={drcRef} placeholder="Ingrese cantidad"/>
          </div>
          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="drc_equivalentes" className="text-sm font-semibold text-gray-700">Dr.C/equivalentes:</label>
            <Input type="number" inputName="drc_equivalentes" min="0" ref={drc_equivalentesRef} placeholder="Ingrese cantidad" />
          </div>
          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="drc_afin" className="text-sm font-semibold text-gray-700">Dr.C/afín:</label>
            <Input type="number" inputName="drc_afin" min="0" ref={drc_afinRef} placeholder="Ingrese cantidad" />
          </div>
          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="mc_equivalentes" className="text-sm font-semibold text-gray-700">Mc/equivalentes:</label>
            <Input type="number" inputName="mc_equivalentes" min="0" ref={mc_equivalentesRef} placeholder="Ingrese cantidad"/>
          </div>
          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="pt_pa" className="text-sm font-semibold text-gray-700">Pt/Pa:</label>
            <Input type="number" inputName="pt_pa" min="0" ref={pt_paRef} placeholder="Ingrese cantidad"/>
          </div>
          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="año_evaluacion" className="text-sm font-semibold text-gray-700">Año evaluación:</label>
            <Input type="number" inputName="año_evaluacion" min="0" ref={año_evaluacionRef} placeholder="Ingrese año"/>
          </div>

          <button
            type="submit"
            className="col-span-3 bg-emerald-600 hover:bg-emerald-700 px-6 py-3 rounded-lg text-white font-semibold mt-6 transition-colors shadow-md"
          >
            Insertar
          </button>
        </div>
      </form>
    </div>
  );
}
