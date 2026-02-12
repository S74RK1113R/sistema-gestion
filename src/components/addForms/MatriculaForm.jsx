import Input from "../Input";
import { useRef } from "react";
import { tableUse } from "../../context/TablesContext";

export default function MatriculaForm() {
  const p1erAñoRef = useRef();
  const s2doAñoRef = useRef();
  const t3erAñoRef = useRef();
  const c4toAñoRef = useRef();
  const q5toAñoRef = useRef();
  const añoEvaluacionRef = useRef();

  const { setMatricula, setInsert, insert, setMessageSucces, setNotification, setNotificationType } = tableUse();

  function erraseInput() {
    p1erAñoRef.current.value = "";
    s2doAñoRef.current.value = "";
    t3erAñoRef.current.value = "";
    c4toAñoRef.current.value = "";
    q5toAñoRef.current.value = "";
    añoEvaluacionRef.current.value = "";
  }

  function handleSubmit() {
    event.preventDefault();
    const matricula = {
      p1er_año : p1erAñoRef.current.value,
      s2do_año : s2doAñoRef.current.value,
      t3er_año : t3erAñoRef.current.value,
      c4to_año : c4toAñoRef.current.value,
      q5to_año : q5toAñoRef.current.value,
      año_evaluacion : añoEvaluacionRef.current.value
    };

    erraseInput();

    const url = "http://localhost:3002/api/matricula";
    fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      // Send your data in the request body as JSON
      body: JSON.stringify(matricula),
    })
      .then((res) => {
        if (!res.ok) {
          return res.json();
        }
        // handle error
      })
      .then((json) => {
        setMatricula(json?.data || []);
        setMessageSucces("Matrícula insertada");
        setNotificationType('insert');
        setNotification(true);
      });

    setInsert(!insert);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 grid-rows-4 size-max gap-5 mx-2 items-center justify-center">
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="p1er_año">1er año:</label>
            <Input type="number" inputName="p1er_año" min="0" ref={p1erAñoRef}/>
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="s2do_año">2do año:</label>
            <Input type="number" inputName="s2do_año" min="0" ref={s2doAñoRef} />
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="t3er_año">3er año:</label>
            <Input type="number" inputName="t3er_año" min="0" ref={t3erAñoRef}/>
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="c4to_año">4to año:</label>
            <Input type="number" inputName="c4to_año" min="0" ref={c4toAñoRef}/>
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="q5to_año">5to año:</label>
            <Input type="number" inputName="q5to_año" min="0" defaultValue={0}  ref={q5toAñoRef} />
          </div>

          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="año_evaluacion">Año de la evaluación:</label>
            <Input type="number" inputName="año_evaluacion" min="0"  ref={añoEvaluacionRef}/>
          </div>

          <button
            type="submit"
            className="bg-green-500 px-5 py-2 rounded-full text-white font-bold my-5 hover:bg-green-800 col-span-2 w-50 mx-auto"
          >
            Insertar
          </button>
        </div>
      </form>
    </div>
  );
}
