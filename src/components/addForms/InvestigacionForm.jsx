import Input from "../Input";
import { useRef } from "react";
import { tableUse } from "../../context/TablesContext";

export default function InvestigacionForm() {
  const proyectos_investigacionRef = useRef();
  const porciento_estudiantes_vinculadosRef = useRef();
  const porciento_profesores_vinculadosRef = useRef();
  const año_evaluacionRef = useRef();

  const { setInvestigacion, setInsert, insert, setMessageSucces, setNotification, setNotificationType } = tableUse();

  function erraseInput() {
    proyectos_investigacionRef.current.value = "";
    porciento_estudiantes_vinculadosRef.current.value = "";
    porciento_profesores_vinculadosRef.current.value = "";
    año_evaluacionRef.current.value = "";
  }

  function handleSubmit() {
    event.preventDefault();
    const investigacion = {
      proyectos_investigacion: proyectos_investigacionRef.current.value,
      porciento_estudiantes_vinculados : porciento_estudiantes_vinculadosRef.current.value,
      porciento_profesores_vinculados : porciento_profesores_vinculadosRef.current.value,
      año_evaluacion : año_evaluacionRef.current.value,
    };

    erraseInput();

    const url = "http://localhost:3002/api/investigacion";

    fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      // Send your data in the request body as JSON
      body: JSON.stringify(investigacion),
    })
      .then((res) => {
        if (!res.ok) {
          return res.json();
        }
        // handle error
      })
      .then((json) => {
        setInvestigacion(json?.data || []);
        setMessageSucces("Investigación insertada");
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
            <label htmlFor="proyectos_investigacion" className="text-sm font-semibold text-gray-700">Proyectos de Investigación:</label>
            <Input type="number" inputName="proyectos_investigacion" min="0" ref={proyectos_investigacionRef} placeholder="Cantidad"/>
          </div>
          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="porciento_estudiantes_vinculados" className="text-sm font-semibold text-gray-700">
              % Estudiantes Vinculados:
            </label>
            <Input
              type="number"
              inputName="porciento_estudiantes_vinculados"
              min="0"
              ref={porciento_estudiantes_vinculadosRef}
              placeholder="Porcentaje"
            />
          </div>
          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="porciento_profesores_vinculados" className="text-sm font-semibold text-gray-700">
              % Profesores Vinculados:
            </label>
            <Input
              type="number"
              inputName="porciento_profesores_vinculados"
              min="0"
              ref={porciento_profesores_vinculadosRef}
              placeholder="Porcentaje"
            />
          </div>
          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="año_evaluacion" className="text-sm font-semibold text-gray-700">Año de Evaluación:</label>
            <Input type="number" inputName="año_evaluacion" min="0" ref={año_evaluacionRef} placeholder="Año"/>
          </div>

          <button
            type="submit"
            className="col-span-2 bg-emerald-600 hover:bg-emerald-700 px-6 py-3 rounded-lg text-white font-semibold mt-6 transition-colors shadow-md"
          >
            Crear Investigación
          </button>
        </div>
      </form>
    </div>
  );
}
