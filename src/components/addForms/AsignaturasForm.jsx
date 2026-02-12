import { useRef } from "react";
import Input from "../Input";
import Select from "../Select";
import { tableUse } from "../../context/TablesContext";
import { useSelectFetch } from "../../hooks/useSelectFetch";

export default function AsignaturasForm() {
  const { setAsignaturas, setInsert, insert, setMessageSucces, setNotification, setNotificationType } = tableUse();
  const { data } = useSelectFetch("http://localhost:3002/api/disciplinas");

  const nombreRef = useRef();
  const codigoRef = useRef();
  const disciplinaIdRef = useRef();
  const intranetRef = useRef();
  const bibliografiaRef = useRef();
  const añoRef = useRef();
  const periodoRef = useRef();
  const modalidadRef = useRef();
  const curriculoRef = useRef();

  function erraseInput() {
    nombreRef.current.value = "";
    codigoRef.current.value = "";
    disciplinaIdRef.current.value = "";
    intranetRef.current.value = "";
    bibliografiaRef.current.value = "";
    añoRef.current.value = "";
    periodoRef.current.value = "";
    modalidadRef.current.value = "";
    curriculoRef.current.value = "";
  }

  function handleSubmit() {
    event.preventDefault();
    const asignaturas = {
      nombre: nombreRef.current.value,
      codigo: codigoRef.current.value,
      disciplinas_id: disciplinaIdRef.current.value,
      intranet: intranetRef.current.value,
      bibliografia: bibliografiaRef.current.value,
      año: añoRef.current.value,
      periodo: periodoRef.current.value,
      modalidad: modalidadRef.current.value,
      curriculo: curriculoRef.current.value
    };

    erraseInput();

    const url = "http://localhost:3002/api/asignaturas";
    fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      // Send your data in the request body as JSON
      body: JSON.stringify(asignaturas),
    })
      .then((res) => {
        if (!res.ok) {
          return res.json();
        }
        // handle error
      })
      .then((json) => {
        setAsignaturas(json?.data || []);
        setMessageSucces("Asignatura insertada");
        setNotificationType('insert');
        setNotification(true);
      });

    setInsert(!insert);
  }

  return (
    <div className="w-full max-w-3xl mx-auto">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-3 gap-6 p-2">
          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="nombre" className="text-sm font-semibold text-gray-700">Nombre:</label>
            <Input type="text" inputName="nombre" ref={nombreRef} placeholder="Nombre de la asignatura" />
          </div>

          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="codigo" className="text-sm font-semibold text-gray-700">Código:</label>
            <Input type="text" inputName="codigo" ref={codigoRef} placeholder="Código único" />
          </div>

          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="intranet" className="text-sm font-semibold text-gray-700">Intranet:</label>
            <Select inputName="intranet" ref={intranetRef}>
              <option value="">Seleccionar...</option>
              <option value="no procede">No procede</option>
              <option value="plat. interactiva">Plat. interactiva</option>
              <option value="no">No</option>
              <option value="materiales">Materiales</option>
            </Select>
          </div>

          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="disciplina" className="text-sm font-semibold text-gray-700">Disciplina:</label>
            <Select inputName="disciplina" ref={disciplinaIdRef}>
              <option value="">Seleccionar...</option>
              {data.map((item) => {
                return <option value={item.id} key={item.id}>{item.nombre}</option>;
              })}
            </Select>
          </div>

          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="año" className="text-sm font-semibold text-gray-700">Año:</label>
            <Input type="number" inputName="año" min="0" ref={añoRef} placeholder="Año" />
          </div>

          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="periodo" className="text-sm font-semibold text-gray-700">Período:</label>
            <Input type="number" inputName="periodo" min="0" ref={periodoRef} placeholder="Período" />
          </div>

          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="modalidad" className="text-sm font-semibold text-gray-700">Modalidad:</label>
            <Select inputName="modalidad" ref={modalidadRef}>
              <option value="">Seleccionar...</option>
              <option value="cd">Curso Diurno</option>
              <option value="cpe">Curso Encuentro</option>
            </Select>
          </div>

          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="curriculo" className="text-sm font-semibold text-gray-700">Currículo:</label>
            <Select inputName="curriculo" ref={curriculoRef}>
              <option value="">Seleccionar...</option>
              <option value="base">Base</option>
              <option value="propio">Propio</option>
              <option value="optat/elect">Optat./Elect.</option>
              <option value="materiales">Materiales</option>
            </Select>
          </div>

          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="bibliografia" className="text-sm font-semibold text-gray-700">Bibliografía:</label>
            <Select inputName="bibliografia" ref={bibliografiaRef}>
              <option value="">Seleccionar...</option>
              <option value="disponible">Disponible</option>
              <option value="no disponible">No disponible</option>
            </Select>
          </div>

          <button
            type="submit"
            className="col-span-3 bg-emerald-600 hover:bg-emerald-700 px-6 py-3 rounded-lg text-white font-semibold mt-6 transition-colors shadow-md"
          >
            Crear Asignatura
          </button>
        </div>
      </form>
    </div>
  );
}
