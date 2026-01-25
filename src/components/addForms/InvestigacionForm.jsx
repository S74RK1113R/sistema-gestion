import Input from "../Input";
import { useRef } from "react";
import { tableUse } from "../../context/TablesContext";

export default function InvestigacionForm() {
  const proyectos_investigacionRef = useRef();
  const porciento_estudiantes_vinculadosRef = useRef();
  const porciento_profesores_vinculadosRef = useRef();
  const año_evaluacionRef = useRef();

  const { setInvestigacion, setInsert, insert } = tableUse();

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
      .then((json) => setInvestigacion(json?.data || []));

    setInsert(!insert);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 grid-rows-3 size-max gap-5 mx-2">
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="proyectos_investigacion">Proyectos de investigación:</label>
            <Input type="number" inputName="proyectos_investigacion" min="0" ref={proyectos_investigacionRef}/>
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="porciento_estudiantes_vinculados">
              Porciento de estudiantes vinculados:
            </label>
            <Input
              type="number"
              inputName="porciento_estudiantes_vinculados"
              min="0"
              ref={porciento_estudiantes_vinculadosRef}
            />
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="porciento_profesores_vinculados">
              Porciento de profesores vinculados:
            </label>
            <Input
              type="number"
              inputName="porciento_profesores_vinculados"
              min="0"
              ref={porciento_profesores_vinculadosRef}
            />
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="año_evaluacion">Año de la evaluación</label>
            <Input type="number" inputName="año_evaluacion" min="0" ref={año_evaluacionRef}/>
          </div>

          <button
            type="submit"
            className="bg-green-500 px-5 py-2 rounded-full text-white font-bold my-5 hover:bg-green-800 col-span-2 w-25 mx-auto"
          >
            Insertar
          </button>
        </div>
      </form>
    </div>
  );
}
