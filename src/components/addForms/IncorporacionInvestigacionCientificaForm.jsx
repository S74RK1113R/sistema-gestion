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
    <div className="w-full max-w-4xl mx-auto">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-6 p-2">
          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="institucional" className="text-sm font-semibold text-gray-700">Institucional:</label>
            <Input type="number" inputName="institucional" min="0" ref={institucionalRef} placeholder="Ingrese cantidad" />
          </div>
          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="nacional" className="text-sm font-semibold text-gray-700">Nacional:</label>
            <Input type="number" inputName="nacional" min="0" ref={nacionalRef} placeholder="Ingrese cantidad" />
          </div>
          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="internacional" className="text-sm font-semibold text-gray-700">Internacional:</label>
            <Input type="number" inputName="internacional" min="0" ref={internacionalRef} placeholder="Ingrese cantidad" />
          </div>

          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="profesores_incorporados" className="text-sm font-semibold text-gray-700">
              Profesores incorporados:
            </label>
            <Input type="number" inputName="profesores_incorporados" min="0" ref={cantidadProfesoresIncorporadosRef} placeholder="Ingrese cantidad" />
          </div>

          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="estudiantes_investigando_1ro" className="text-sm font-semibold text-gray-700">
              Est. investigando 1er año:
            </label>
            <Input type="number" inputName="modalidad" min="0" ref={estudiantesInvestigando1roRef} placeholder="0" />
          </div>
          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="estudiantes_investigando_2do" className="text-sm font-semibold text-gray-700">
              Est. investigando 2do año:
            </label>
            <Input type="number" inputName="modalidad" min="0" ref={estudiantesInvestigando2doRef} placeholder="0" />
          </div>
          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="estudiantes_investigando_3ro" className="text-sm font-semibold text-gray-700">
              Est. investigando 3er año:
            </label>
            <Input type="number" inputName="modalidad" min="0" ref={estudiantesInvestigando3roRef} placeholder="0" />
          </div>
          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="estudiantes_investigando_4to" className="text-sm font-semibold text-gray-700">
              Est. investigando 4to año:
            </label>
            <Input type="number" inputName="modalidad" min="0" ref={estudiantesInvestigando4toRef} placeholder="0" />
          </div>
          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="estudiantes_investigando_5to" className="text-sm font-semibold text-gray-700">
              Est. investigando 5to año:
            </label>
            <Input type="number" inputName="modalidad" min="0" ref={estudiantesInvestigando5toRef} placeholder="0" />
          </div>

          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="año_evaluacion" className="text-sm font-semibold text-gray-700">Año de evaluación:</label>
            <Input type="number" inputName="año_evaluacion" min="0" ref={añoEvalucacionRef} placeholder="Ingrese año" />
          </div>

          <button
            type="submit"
            className="col-span-2 bg-emerald-600 hover:bg-emerald-700 px-6 py-3 rounded-lg text-white font-semibold mt-6 transition-colors shadow-md"
          >
            Insertar
          </button>
        </div>
      </form>
    </div>
  );
}
