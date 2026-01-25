import Input from "../Input";
import { useRef } from "react";
import { tableUse } from "../../context/TablesContext";

export default function ResultadoEjerciciosIntegradoresForm() {
  const porciento_aprobadosRef = useRef();
  const porciento_con_4_5Ref = useRef();
  const año_evaluacionRef = useRef();

  const { setResultadoEjercicios, setInsert, insert } = tableUse();

  function erraseInput() {
    porciento_aprobadosRef.current.value = "";
    porciento_con_4_5Ref.current.value = "";
    año_evaluacionRef.current.value = "";
  }

  function handleSubmit() {
    event.preventDefault();
    const resultadoEjerciciosIntegradores = {
      porciento_aprobados : porciento_aprobadosRef.current.value,
      porciento_con_4_5 : porciento_con_4_5Ref.current.value,
      año_evaluacion: año_evaluacionRef.current.value,
    };

    erraseInput();

    const url = "http://localhost:3002/api/resultado_ejercicios_integradores";
    fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      // Send your data in the request body as JSON
      body: JSON.stringify(resultadoEjerciciosIntegradores),
    })
      .then((res) => {
        if (!res.ok) {
          return res.json();
        }
        // handle error
      })
      .then((json) => setResultadoEjercicios(json?.data || []));

    setInsert(!insert);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 grid-rows-3 size-max gap-5 mx-auto">
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="porciento_aprobados">Porciento aprobados:</label>
            <Input type="number" inputName="porciento_aprobados" min="0" ref={porciento_aprobadosRef}/>
          </div>

          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="porciento_con_4_5">Porciento con 4-5:</label>
            <Input type="number" inputName="porciento_con_4_5" min="0" ref={porciento_con_4_5Ref} />
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="año_evaluacion">Año de la evaluación:</label>
            <Input type="number" inputName="año_evaluacion" min="0" ref={año_evaluacionRef}/>
          </div>

          <button
            type="submit"
            className="bg-green-500 px-5 py-2 rounded-full text-white font-bold my-5 hover:bg-green-800 mx-auto"
          >
            Insertar
          </button>
        </div>
      </form>
    </div>
  );
}
