import Input from "../Input";
import { useRef } from "react";
import { tableUse } from "../../context/TablesContext";

export default function ResultadoEjerciciosIntegradoresForm() {
  const porciento_aprobadosRef = useRef();
  const porciento_con_4_5Ref = useRef();
  const año_evaluacionRef = useRef();

  const { setResultadoEjercicios, setInsert, insert, setMessageSucces, setNotification, setNotificationType } = tableUse();

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
      .then((json) => {
        setResultadoEjercicios(json?.data || []);
        setMessageSucces("Resultado de ejercicio integrador insertado");
        setNotificationType('insert');
        setNotification(true);
      });

    setInsert(!insert);
  }
  return (
    <div className="w-full max-w-md mx-auto">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-6 p-2">
          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="porciento_aprobados" className="text-sm font-semibold text-gray-700">Porciento aprobados:</label>
            <Input type="number" inputName="porciento_aprobados" min="0" ref={porciento_aprobadosRef} placeholder="Ingrese %"/>
          </div>

          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="porciento_con_4_5" className="text-sm font-semibold text-gray-700">Porciento con 4-5:</label>
            <Input type="number" inputName="porciento_con_4_5" min="0" ref={porciento_con_4_5Ref} placeholder="Ingrese %" />
          </div>
          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="año_evaluacion" className="text-sm font-semibold text-gray-700">Año de evaluación:</label>
            <Input type="number" inputName="año_evaluacion" min="0" ref={año_evaluacionRef} placeholder="Ingrese año" />
          </div>

          <button
            type="submit"
            className="bg-emerald-600 hover:bg-emerald-700 px-6 py-3 rounded-lg text-white font-semibold mt-6 transition-colors shadow-md"
          >
            Insertar
          </button>
        </div>
      </form>
    </div>
  );
}
