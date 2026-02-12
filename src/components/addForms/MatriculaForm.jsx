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
    <div className="w-full max-w-2xl mx-auto">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-6 p-2">
          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="p1er_año" className="text-sm font-semibold text-gray-700">1er Año:</label>
            <Input type="number" inputName="p1er_año" min="0" ref={p1erAñoRef} placeholder="Cantidad"/>
          </div>
          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="s2do_año" className="text-sm font-semibold text-gray-700">2do Año:</label>
            <Input type="number" inputName="s2do_año" min="0" ref={s2doAñoRef} placeholder="Cantidad" />
          </div>
          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="t3er_año" className="text-sm font-semibold text-gray-700">3er Año:</label>
            <Input type="number" inputName="t3er_año" min="0" ref={t3erAñoRef} placeholder="Cantidad"/>
          </div>
          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="c4to_año" className="text-sm font-semibold text-gray-700">4to Año:</label>
            <Input type="number" inputName="c4to_año" min="0" ref={c4toAñoRef} placeholder="Cantidad"/>
          </div>
          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="q5to_año" className="text-sm font-semibold text-gray-700">5to Año:</label>
            <Input type="number" inputName="q5to_año" min="0" defaultValue={0} ref={q5toAñoRef} placeholder="Cantidad" />
          </div>

          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="año_evaluacion" className="text-sm font-semibold text-gray-700">Año de Evaluación:</label>
            <Input type="number" inputName="año_evaluacion" min="0" ref={añoEvaluacionRef} placeholder="Año"/>
          </div>

          <button
            type="submit"
            className="col-span-2 bg-emerald-600 hover:bg-emerald-700 px-6 py-3 rounded-lg text-white font-semibold mt-6 transition-colors shadow-md"
          >
            Crear Matrícula
          </button>
        </div>
      </form>
    </div>
  );
}
