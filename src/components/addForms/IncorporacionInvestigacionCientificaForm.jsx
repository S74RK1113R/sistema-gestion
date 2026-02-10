import Input from "../Input";
import { tableUse } from "../../context/TablesContext";
import { useRef } from "react";

export default function IncorporacionInvestigacionCientificaForm() {
  const institucionalRef = useRef();
  const nacionalRef = useRef();
  const internacionalRef = useRef();
  const cantidadProfesoresIncorporadosRef = useRef();
  const estudiantesInvestigando1roRef = useRef();
  const estudiantesInvestigando2doRef = useRef();
  const estudiantesInvestigando3roRef = useRef();
  const estudiantesInvestigando4toRef = useRef();
  const estudiantesInvestigando5toRef = useRef();
  const añoEvalucacionRef = useRef();

  const { setIncorporacionInvestigacion, setInsert, insert, setMessageSucces, setNotification, setNotificationType } = tableUse();

  function erraseInput() {
    institucionalRef.current.value = "" ;
    nacionalRef.current.value = "" ;
    internacionalRef.current.value = "" ;
    cantidadProfesoresIncorporadosRef.current.value = "" ;
    estudiantesInvestigando1roRef.current.value = "" ;
    estudiantesInvestigando2doRef.current.value = "" ;
    estudiantesInvestigando3roRef.current.value = "" ;
    estudiantesInvestigando4toRef.current.value = "" ;
    estudiantesInvestigando5toRef.current.value = "" ;
    añoEvalucacionRef.current.value = "" ;
  }

  function handleSubmit() {
    event.preventDefault();

    const incorporacionInvestigacionCientifica = {
      internacional: internacionalRef.current.value,
      institucional: institucionalRef.current.value,
      nacional: nacionalRef.current.value,
      cantidad_profesores_incorporados: cantidadProfesoresIncorporadosRef.current.value,
      estudiantes_investigando_1er_año: estudiantesInvestigando1roRef.current.value,
      estudiantes_investigando_2do_año: estudiantesInvestigando2doRef.current.value,
      estudiantes_investigando_3er_año: estudiantesInvestigando3roRef.current.value,
      estudiantes_investigando_4to_año: estudiantesInvestigando4toRef.current.value,
      estudiantes_investigando_5to_año: estudiantesInvestigando5toRef.current.value,
      año_evaluacion: añoEvalucacionRef.current.value
    };

    erraseInput();

    const url = "http://localhost:3002/api/incorporacion_investigacion_cientifica";
    fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      // Send your data in the request body as JSON
      body: JSON.stringify(incorporacionInvestigacionCientifica),
    })
      .then((res) => {
        if (!res.ok) {
          return res.json();
        }
        // handle error
      })
      .then((json) => {
        setIncorporacionInvestigacion(json?.data || []);
        setMessageSucces("Incorporación en investigación científica insertada");
        setNotificationType('insert');
        setNotification(true);
      });

    setInsert(!insert);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-4 grid-rows-4 size-max gap-5 mx-2 items-center justify-center">
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="institucional">Institucional:</label>
            <Input type="number" inputName="institucional" min="0" ref={institucionalRef} />
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="nacional">Nacional:</label>
            <Input type="number" inputName="nacional" min="0" ref={nacionalRef}/>
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="internacional">Internacional:</label>
            <Input type="number" inputName="internacional" min="0" ref={internacionalRef}/>
          </div>

          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="profesores_incorporados">
              Cantidad de profesores incorporados:
            </label>
            <Input type="number" inputName="profesores_incorporados" min="0" ref={cantidadProfesoresIncorporadosRef}/>
          </div>

          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="estudiantes_investigando_1ro">
              Estudiantes investigando 1er año:
            </label>
            <Input type="number" inputName="modalidad" min="0" ref={estudiantesInvestigando1roRef} />
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="estudiantes_investigando_2do">
              Estudiantes investigando 2do año:
            </label>
            <Input type="number" inputName="modalidad" min="0" ref={estudiantesInvestigando2doRef} />
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="estudiantes_investigando_3ro">
              Estudiantes investigando 3er año:
            </label>
            <Input type="number" inputName="modalidad" min="0" ref={estudiantesInvestigando3roRef}/>
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="estudiantes_investigando_4to">
              Estudiantes investigando 4to año:
            </label>
            <Input type="number" inputName="modalidad" min="0" ref={estudiantesInvestigando4toRef}/>
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="estudiantes_investigando_5to">
              Estudiantes investigando 5to año:
            </label>
            <Input type="number" inputName="modalidad" min="0" ref={estudiantesInvestigando5toRef}/>
          </div>

          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="año_evaluacion">Año de la evaluación:</label>
            <Input type="number" inputName="año_evaluacion" min="0" ref={añoEvalucacionRef} />
          </div>

          <button
            type="submit"
            className="bg-green-500 px-5 py-2 rounded-full text-white font-bold my-5 hover:bg-green-800 row-start-4 col-span-4 w-50 mx-auto"
          >
            Insertar
          </button>
        </div>
      </form>
    </div>
  );
}
