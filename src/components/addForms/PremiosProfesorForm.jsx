import Input from "../Input";
import Select from "../Select";
import { useSelectFetch } from "../../hooks/useSelectFetch";
import { tableUse } from "../../context/TablesContext";
import { useRef } from "react";

export default function PremiosProfesorForm() {
  const { data } = useSelectFetch("http://localhost:3002/api/profesor");
  const nombreRef = useRef();
  const añoRef = useRef();
  const profesorIdRef = useRef();

  const { setPremiosProfesor, setInsert, insert, setMessageSucces, setNotification, setNotificationType } = tableUse();

  function erraseInput() {
    nombreRef.current.value = "";
    añoRef.current.value = "";
  }

  function handleSubmit() {
    event.preventDefault();
    const premiosProfesor = {
      nombre_premio: nombreRef.current.value,
      profesor_id: profesorIdRef.current.value,
      año: añoRef.current.value,
    };

    erraseInput();

    const url = "http://localhost:3002/api/premios_profesor";
    fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      // Send your data in the request body as JSON
      body: JSON.stringify(premiosProfesor),
    })
      .then((res) => {
        if (!res.ok) {
          return res.json();
        }
        // handle error
      })
      .then((json) => {
        setPremiosProfesor(json?.data || []);
        setMessageSucces("Premio de profesor insertado");
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
            <label htmlFor="nombre_premio" className="text-sm font-semibold text-gray-700">Nombre del Premio:</label>
            <Input type="text" inputName="nombre_premio" ref={nombreRef} placeholder="Nombre del premio" />
          </div>

          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="profesor_id" className="text-sm font-semibold text-gray-700">Profesor:</label>
            <Select inputName="profesor_id" ref={profesorIdRef}>
              <option value="">Seleccionar...</option>
              {data.map((item) => {
                return (
                  <option
                    value={item.id}
                    key={item.id}
                  >{`${item.nombres} ${item.primer_apellido} ${item.segundo_apellido}`}</option>
                );
              })}
            </Select>
          </div>

          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="año_evaluacion" className="text-sm font-semibold text-gray-700">Año:</label>
            <Input type="number" inputName="año_evaluacion" min="0" ref={añoRef} placeholder="Año" />
          </div>

          <button
            type="submit"
            className="bg-emerald-600 hover:bg-emerald-700 px-6 py-3 rounded-lg text-white font-semibold transition-colors shadow-md"
          >
            Crear Premio Profesor
          </button>
        </div>
      </form>
    </div>
  );
}
