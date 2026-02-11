import Input from "../Input";
import { useRef } from "react";
import { tableUse } from "../../context/TablesContext";

export default function EjerciciosIntegradoresForm() {
  const { setEjerciciosIntegradores, setInsert, insert, setMessageSucces, setNotification, setNotificationType } = tableUse();

  const matricula_2doRef = useRef();
  const matricula_3roRef = useRef();
  const matricula_4toRef = useRef();
  const matricula_5toRef = useRef();

  const evaluados_2doRef = useRef();
  const evaluados_3roRef = useRef();
  const evaluados_4toRef = useRef();
  const evaluados_5toRef = useRef();

  const nota_con2_2doRef = useRef();
  const nota_con2_3roRef = useRef();
  const nota_con2_4toRef = useRef();
  const nota_con2_5toRef = useRef();

  const nota_con3_2doRef = useRef();
  const nota_con3_3roRef = useRef();
  const nota_con3_4toRef = useRef();
  const nota_con3_5toRef = useRef();

  const nota_con4_2doRef = useRef();
  const nota_con4_3roRef = useRef();
  const nota_con4_4toRef = useRef();
  const nota_con4_5toRef = useRef();

  const nota_con5_2doRef = useRef();
  const nota_con5_3roRef = useRef();
  const nota_con5_4toRef = useRef();
  const nota_con5_5toRef = useRef();

  const añoEvaluacionRef = useRef();

  function erraseInput() {
    matricula_2doRef.current.value = "";
    matricula_3roRef.current.value = "";
    matricula_4toRef.current.value = "";
    matricula_5toRef.current.value = "";

    evaluados_2doRef.current.value = "";
    evaluados_3roRef.current.value = "";
    evaluados_4toRef.current.value = "";
    evaluados_5toRef.current.value = "";

    nota_con2_2doRef.current.value = "";
    nota_con2_3roRef.current.value = "";
    nota_con2_4toRef.current.value = "";
    nota_con2_5toRef.current.value = "";

    nota_con3_2doRef.current.value = "";
    nota_con3_3roRef.current.value = "";
    nota_con3_4toRef.current.value = "";
    nota_con3_5toRef.current.value = "";

    nota_con4_2doRef.current.value = "";
    nota_con4_3roRef.current.value = "";
    nota_con4_4toRef.current.value = "";
    nota_con4_5toRef.current.value = "";

    nota_con5_2doRef.current.value = "";
    nota_con5_3roRef.current.value = "";
    nota_con5_4toRef.current.value = "";
    nota_con5_5toRef.current.value = "";

    añoEvaluacionRef.current.value = "";
  }

  function handleSubmit() {
    event.preventDefault();
    const ejercicioIntegradores = {
      matricula_2do_año: matricula_2doRef.current.value,
      matricula_3er_año: matricula_3roRef.current.value,
      matricula_4to_año: matricula_4toRef.current.value,
      matricula_5to_año: matricula_5toRef.current.value,

      evaluados_2do_año: evaluados_2doRef.current.value,
      evaluados_3er_año: evaluados_3roRef.current.value,
      evaluados_4to_año: evaluados_4toRef.current.value,
      evaluados_5to_año: evaluados_5toRef.current.value,

      con_2_2do_año: nota_con2_2doRef.current.value,
      con_2_3er_año: nota_con2_3roRef.current.value,
      con_2_4to_año: nota_con2_4toRef.current.value,
      con_2_5to_año: nota_con2_5toRef.current.value,

      con_3_2do_año: nota_con3_2doRef.current.value,
      con_3_3er_año: nota_con3_3roRef.current.value,
      con_3_4to_año: nota_con3_4toRef.current.value,
      con_3_5to_año: nota_con3_5toRef.current.value,

      con_4_2do_año: nota_con4_2doRef.current.value,
      con_4_3er_año: nota_con4_3roRef.current.value,
      con_4_4to_año: nota_con4_4toRef.current.value,
      con_4_5to_año: nota_con4_5toRef.current.value,

      con_5_2do_año: nota_con5_2doRef.current.value,
      con_5_3er_año: nota_con5_3roRef.current.value,
      con_5_4to_año: nota_con5_4toRef.current.value,
      con_5_5to_año: nota_con5_5toRef.current.value,

      año_evaluacion: añoEvaluacionRef.current.value,
    };

    erraseInput();

    const url = "http://localhost:3002/api/ejercicios_integradores";
    fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      // Send your data in the request body as JSON
      body: JSON.stringify(ejercicioIntegradores),
    })
      .then((res) => {
        if (!res.ok) {
          return res.json();
        }
        // handle error
      })
      .then((json) => {
        setEjerciciosIntegradores(json?.data || []);
        setMessageSucces("Ejercicio integrador insertado");
        setNotificationType('insert');
        setNotification(true);
      });

    setInsert(!insert);
  }

  return (
    <div className="w-full max-w-6xl mx-auto">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-4 gap-6 p-2">
          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="matricula_2do" className="text-sm font-semibold text-gray-700">Matrícula 2do año:</label>
            <Input type="number" inputName="matricula_2do" min="0" ref={matricula_2doRef} placeholder="0" />
          </div>
          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="matricula_3ro" className="text-sm font-semibold text-gray-700">Matrícula 3er año:</label>
            <Input type="number" inputName="matricula_3ro" min="0" ref={matricula_3roRef} placeholder="0" />
          </div>
          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="matricula_4to" className="text-sm font-semibold text-gray-700">Matrícula 4to año:</label>
            <Input type="number" inputName="matricula_4to" min="0" ref={matricula_4toRef} placeholder="0" />
          </div>
          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="matricula_5to" className="text-sm font-semibold text-gray-700">Matrícula 5to año:</label>
            <Input type="number" inputName="matricula_5to" min="0" ref={matricula_5toRef} placeholder="0" />
          </div>

          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="evaluados_2do" className="text-sm font-semibold text-gray-700">Evaluados 2do año:</label>
            <Input type="number" inputName="evaluados_2do" min="0" ref={evaluados_2doRef} placeholder="0" />
          </div>
          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="evaluados_3ro" className="text-sm font-semibold text-gray-700">Evaluados 3er año:</label>
            <Input type="number" inputName="evaluados_3ro" min="0" ref={evaluados_3roRef} placeholder="0" />
          </div>
          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="evaluados_4to" className="text-sm font-semibold text-gray-700">Evaluados 4to año:</label>
            <Input type="number" inputName="evaluados_4to" min="0" ref={evaluados_4toRef} placeholder="0" />
          </div>
          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="evaluados_5to" className="text-sm font-semibold text-gray-700">Evaluados 5to año:</label>
            <Input type="number" inputName="evaluados_5to" min="0" ref={evaluados_5toRef} placeholder="0" />
          </div>

          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="nota_con2_2do" className="text-sm font-semibold text-gray-700">Nota 2 - 2do año:</label>
            <Input type="number" inputName="nota_con2_2do" min="0" ref={nota_con2_2doRef} placeholder="0" />
          </div>
          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="nota_con2_3ro" className="text-sm font-semibold text-gray-700">Nota 2 - 3er año:</label>
            <Input type="number" inputName="nota_con2_3ro" min="0" ref={nota_con2_3roRef} placeholder="0" />
          </div>
          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="nota_con2_4to" className="text-sm font-semibold text-gray-700">Nota 2 - 4to año:</label>
            <Input type="number" inputName="nota_con2_4to" min="0" ref={nota_con2_4toRef} placeholder="0" />
          </div>
          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="nota_con2_5to" className="text-sm font-semibold text-gray-700">Nota 2 - 5to año:</label>
            <Input type="number" inputName="nota_con2_5to" min="0" ref={nota_con2_5toRef} placeholder="0" />
          </div>

          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="nota_con3_2do" className="text-sm font-semibold text-gray-700">Nota 3 - 2do año:</label>
            <Input type="number" inputName="nota_con3_2do" min="0" ref={nota_con3_2doRef} placeholder="0" />
          </div>
          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="nota_con3_3ro" className="text-sm font-semibold text-gray-700">Nota 3 - 3er año:</label>
            <Input type="number" inputName="nota_con3_3ro" min="0" ref={nota_con3_3roRef} placeholder="0" />
          </div>
          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="nota_con3_4to" className="text-sm font-semibold text-gray-700">Nota 3 - 4to año:</label>
            <Input type="number" inputName="nota_con3_4to" min="0" ref={nota_con3_4toRef} placeholder="0" />
          </div>
          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="nota_con3_5to" className="text-sm font-semibold text-gray-700">Nota 3 - 5to año:</label>
            <Input type="number" inputName="nota_con3_5to" min="0" ref={nota_con3_5toRef} placeholder="0" />
          </div>

          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="nota_con4_2do" className="text-sm font-semibold text-gray-700">Nota 4 - 2do año:</label>
            <Input type="number" inputName="nota_con4_2do" min="0" ref={nota_con4_2doRef} placeholder="0" />
          </div>
          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="nota_con4_3ro" className="text-sm font-semibold text-gray-700">Nota 4 - 3er año:</label>
            <Input type="number" inputName="nota_con4_3ro" min="0" ref={nota_con4_3roRef} placeholder="0" />
          </div>
          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="nota_con4_4to" className="text-sm font-semibold text-gray-700">Nota 4 - 4to año:</label>
            <Input type="number" inputName="nota_con4_4to" min="0" ref={nota_con4_4toRef} placeholder="0" />
          </div>
          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="nota_con4_5to" className="text-sm font-semibold text-gray-700">Nota 4 - 5to año:</label>
            <Input type="number" inputName="nota_con4_5to" min="0" ref={nota_con4_5toRef} placeholder="0" />
          </div>

          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="nota_con5_2do" className="text-sm font-semibold text-gray-700">Nota 5 - 2do año:</label>
            <Input type="number" inputName="nota_con5_2do" min="0" ref={nota_con5_2doRef} placeholder="0" />
          </div>
          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="nota_con5_3ro" className="text-sm font-semibold text-gray-700">Nota 5 - 3er año:</label>
            <Input type="number" inputName="nota_con5_3ro" min="0" ref={nota_con5_3roRef} placeholder="0" />
          </div>
          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="nota_con5_4to" className="text-sm font-semibold text-gray-700">Nota 5 - 4to año:</label>
            <Input type="number" inputName="nota_con5_4to" min="0" ref={nota_con5_4toRef} placeholder="0" />
          </div>
          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="nota_con5_5to" className="text-sm font-semibold text-gray-700">Nota 5 - 5to año:</label>
            <Input type="number" inputName="nota_con5_5to" min="0" ref={nota_con5_5toRef} placeholder="0" />
          </div>

          <div className="flex flex-col justify-start gap-2 col-span-4">
            <label htmlFor="año_evaluacion" className="text-sm font-semibold text-gray-700">Año de evaluación:</label>
            <Input type="number" inputName="año_evaluacion" min="0" ref={añoEvaluacionRef} placeholder="Ingrese año" />
          </div>

          <button
            type="submit"
            className="col-span-4 bg-emerald-600 hover:bg-emerald-700 px-6 py-3 rounded-lg text-white font-semibold mt-6 transition-colors shadow-md"
          >
            Insertar
          </button>
        </div>
      </form>
    </div>
  );
}
