import Input from "../Input";
import Select from "../Select";
import { useRef } from "react";
import { tableUse } from "../../context/TablesContext";

export default function SedeUniversitariaFrom() {
  const nombreRef = useRef();
  const clasificacionRef = useRef();
  const { setSedeUniversitaria, setInsert, insert, setMessageSucces, setNotification, setNotificationType } = tableUse();

  function erraseInput() {
    nombreRef.current.value = "";
    clasificacionRef.current.value = "";
  }

  function handleSubmit() {
    event.preventDefault();
    const sede_universitaria = {
      nombre: nombreRef.current.value,
      clasificacion: clasificacionRef.current.value,
    };

    erraseInput();

    const url = "http://localhost:3002/api/sede_universitaria";
    fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      // Send your data in the request body as JSON
      body: JSON.stringify(sede_universitaria),
    })
      .then((res) => {
        if (!res.ok) {
          return res.json();
        }
        // handle error
      })
      .then((json) => {
        setSedeUniversitaria(json?.data || []);
        setMessageSucces("Sede universitaria insertada");
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
            <label htmlFor="nombre" className="text-sm font-semibold text-gray-700">Nombre:</label>
            <Input type="text" inputName="nombre" ref={nombreRef} placeholder="Nombre de la sede"/>
          </div>

          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="clasificacion" className="text-sm font-semibold text-gray-700">Clasificación:</label>
            <Select inputName="clasificacion" ref={clasificacionRef}>
              <option value="">Seleccionar...</option>
              <option value="sede central">Sede Central</option>
              <option value="sede municipal o subsede">Sede Municipal o Subsede</option>
              <option value="cum">CUM</option>
              <option value="filial">Filial</option>
            </Select>
          </div>

          <button
            type="submit"
            className="bg-emerald-600 hover:bg-emerald-700 px-6 py-3 rounded-lg text-white font-semibold transition-colors shadow-md"
          >
            Crear Sede
          </button>
        </div>
      </form>
    </div>
  );
}
