import { useRef } from "react";
import { tableUse } from "../../context/TablesContext";
import Input from "../Input";
import Select from "../Select";

export default function NivelAcreditacionForm() {
  const { setNivelAcreditacion, setInsert, insert, setMessageSucces, setNotification, setNotificationType } = tableUse();

  const nivelRef = useRef();
  const añoRef = useRef();

  function erraseInput() {
    nivelRef.current.value = "";
    añoRef.current.value = "";
  }

  function handleSubmit() {
    event.preventDefault();
    const nivel_acreditacion = {
      nivel: nivelRef.current.value,
      año_evaluacion: añoRef.current.value,
    };

    erraseInput();

    const url = "http://localhost:3002/api/nivel_acreditacion";
    fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      // Send your data in the request body as JSON
      body: JSON.stringify(nivel_acreditacion),
    })
      .then((res) => {
        if (!res.ok) {
          return res.json();
        }
        // handle error
      })
      .then((json) => {
        setNivelAcreditacion(json?.data || []);
        setMessageSucces("Nivel de acreditación insertado");
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
            <label htmlFor="nivel" className="text-sm font-semibold text-gray-700">Nivel:</label>
            <Select inputName="nivel" ref={nivelRef}>
              <option value="">Seleccionar...</option>
              <option value="carrera autorizada">Carrera Autorizada</option>
              <option value="carrera avalada">Carrera Avalada</option>
              <option value="carrera certificada">Carrera Certificada</option>
              <option value="carrera de excelencia">Carrera de Excelencia</option>
              <option value="no procede">No Procede</option>
            </Select>
          </div>

          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="año_evaluacion" className="text-sm font-semibold text-gray-700">Año Evaluación:</label>
            <Input
              type="number"
              inputName="año_evaluacion"
              min="0"
              ref={añoRef}
              placeholder="Año"
            />
          </div>

          <button
            type="submit"
            className="bg-emerald-600 hover:bg-emerald-700 px-6 py-3 rounded-lg text-white font-semibold transition-colors shadow-md"
          >
            Crear Acreditación
          </button>
        </div>
      </form>
    </div>
  );
}
