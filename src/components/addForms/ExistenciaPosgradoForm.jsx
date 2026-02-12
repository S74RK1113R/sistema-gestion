import Input from "../Input";
import Select from "../Select";
import { useRef } from "react";
import { tableUse } from "../../context/TablesContext";

export default function ExistenciaPosgradoForm() {
  const existencia_posgradoRef = useRef();
  const año_evaluacionRef = useRef();
  const { setExistenciaPosgrado, setInsert, insert, setMessageSucces, setNotification, setNotificationType } = tableUse();

  function erraseInput() {
    existencia_posgradoRef.current.value = "";
    año_evaluacionRef.current.value = "";
  }

  function handleSubmit() {
    event.preventDefault();
    const existencia_posgrado = {
      existencia: existencia_posgradoRef.current.value,
      año_evaluacion : año_evaluacionRef.current.value,
    };

    erraseInput();

    const url = "http://localhost:3002/api/existencia_posgrado";
    fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      // Send your data in the request body as JSON
      body: JSON.stringify(existencia_posgrado),
    })
      .then((res) => {
        if (!res.ok) {
          return res.json();
        }
        // handle error
      })
      .then((json) => {
        setExistenciaPosgrado(json?.data || []);
        setMessageSucces("Existencia de posgrado insertada");
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
            <label htmlFor="existencia_posgrado" className="text-sm font-semibold text-gray-700">Existencia posgrado:</label>
            <Select inputName="existencia_posgrado" ref={existencia_posgradoRef}>
              <option value="">Seleccione opción</option>
              <option value="existia">Existía</option>
              <option value="no existia">No existía</option>
            </Select>
          </div>

          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="año_evaluacion" className="text-sm font-semibold text-gray-700">Año de evaluación:</label>
            <Input type="number" inputName="año_evaluacion" min="0" ref={año_evaluacionRef} placeholder="Ingrese año" />
          </div>

          <button
            type="submit"
            className="bg-emerald-600 hover:bg-emerald-700 px-6 py-3 rounded-lg text-white font-semibold mt-6 transition-colors shadow-md"
          >
            Insertar
          </button>
        </div>
      </form>
    </div>
  );
}
