import Input from "../Input";
import { useRef } from "react";
import { tableUse } from "../../context/TablesContext";

export default function EjerciciosIntegradoresForm() {
  const { setEjerciciosIntegradores, setInsert, insert } = tableUse();

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
      .then((json) => setEjerciciosIntegradores(json?.data || []));

    setInsert(!insert);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-6 grid-rows-6 size-max gap-2 mx-2 items-center justify-center">
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="matricula_2do">Matrícula 2do año:</label>
            <Input type="number" inputName="matricula_2do" min="0" ref={matricula_2doRef} />
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="matricula_3ro">Matrícula 3ro año:</label>
            <Input type="number" inputName="matricula_3ro" min="0" ref={matricula_3roRef} />
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="matricula_4to">Matrícula 4to año:</label>
            <Input type="number" inputName="matricula_4to" min="0" ref={matricula_4toRef} />
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="matricula_5to">Matrícula 5to año:</label>
            <Input type="number" inputName="matricula_5to" min="0" ref={matricula_5toRef} />
          </div>

          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="evaluados_2do">Evaluados 2do año:</label>
            <Input type="number" inputName="evaluados_2do" min="0" ref={evaluados_2doRef}/>
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="evaluados_3ro">Evaluados 3ro año:</label>
            <Input type="number" inputName="evaluados_3ro" min="0" ref={evaluados_3roRef}/>
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="evaluados_4to">Evaluados 4to año:</label>
            <Input type="number" inputName="evaluados_4to" min="0" ref={evaluados_4toRef} />
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="evaluados_5to">Evaluados 5to año:</label>
            <Input type="number" inputName="evaluados_5to" min="0" ref={evaluados_5toRef} />
          </div>

          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="nota_con2_2do">Nota de 2 2do año:</label>
            <Input type="number" inputName="nota_con2_2do" min="0" ref={nota_con2_2doRef} />
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="nota_con2_3ro">Nota de 2 3ro año:</label>
            <Input type="number" inputName="nota_con2_3ro" min="0" ref={nota_con2_3roRef} />
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="nota_con2_4to">Nota de 2 4to año:</label>
            <Input type="number" inputName="nota_con2_4to" min="0" ref={nota_con2_4toRef}/>
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="nota_con2_5to">Nota de 2 5to año:</label>
            <Input type="number" inputName="nota_con2_5to" min="0" ref={nota_con2_5toRef} />
          </div>

          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="nota_con3_2do">Nota de 3 2do año:</label>
            <Input type="number" inputName="nota_con3_2do" min="0" ref={nota_con3_2doRef} />
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="nota_con3_3ro">Nota de 3 3ro año:</label>
            <Input type="number" inputName="nota_con3_3ro" min="0" ref={nota_con3_3roRef} />
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="nota_con3_4to">Nota de 3 4to año:</label>
            <Input type="number" inputName="nota_con3_4to" min="0" ref={nota_con3_4toRef} />
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="nota_con3_5to">Nota de 3 5to año:</label>
            <Input type="number" inputName="nota_con3_5to" min="0" ref={nota_con3_5toRef} />
          </div>

          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="nota_con4_2do">Nota de 4 2do año:</label>
            <Input type="number" inputName="nota_con4_2do" min="0" ref={nota_con4_2doRef} />
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="nota_con4_3ro">Nota de 4 3ro año:</label>
            <Input type="number" inputName="nota_con4_3ro" min="0" ref={nota_con4_3roRef} />
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="nota_con4_4to">Nota de 4 4to año:</label>
            <Input type="number" inputName="nota_con4_4to" min="0" ref={nota_con4_4toRef} />
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="nota_con4_5to">Nota de 4 5to año:</label>
            <Input type="number" inputName="nota_con4_5to" min="0" ref={nota_con4_5toRef} />
          </div>

          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="nota_con5_2do">Nota de 5 2do año:</label>
            <Input type="number" inputName="nota_con5_2do" min="0" ref={nota_con5_2doRef} />
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="nota_con5_3ro">Nota de 5 3ro año:</label>
            <Input type="number" inputName="nota_con5_3ro" min="0" ref={nota_con5_3roRef} />
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="nota_con5_4to">Nota de 5 4to año:</label>
            <Input type="number" inputName="nota_con5_4to" min="0" ref={nota_con5_4toRef} />
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="nota_con5_5to">Nota de 5 5to año:</label>
            <Input type="number" inputName="nota_con5_5to" min="0" ref={nota_con5_5toRef} />
          </div>

          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="año_evaluacion">Año de la evaluación:</label>
            <Input type="number" inputName="año_evaluacion" min="0" ref={añoEvaluacionRef} />
          </div>

          <button
            type="submit"
            className="bg-green-500 px-5 py-2 rounded-full text-white font-bold my-5 hover:bg-green-800 row-start-6 col-span-6 w-50 mx-auto"
          >
            Insertar
          </button>
        </div>
      </form>
    </div>
  );
}
