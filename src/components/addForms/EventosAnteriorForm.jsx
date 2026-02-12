import Input from "../Input";
import { useRef } from "react";
import { tableUse } from "../../context/TablesContext";

export default function EventosAnteriorForm() {
  const nacionalInternacionalRef = useRef();
  const totalRef = useRef();
  const añoEvaluacionRef = useRef();

  const { setEventosAnterior, setInsert, insert, setMessageSucces, setNotification, setNotificationType } = tableUse();

  function erraseInput() {
    nacionalInternacionalRef.current.value = "";
    totalRef.current.value = "";
    añoEvaluacionRef.current.value = "";
  }

  function handleSubmit() {
    event.preventDefault();
    const eventos_anterior = {
      nacional_internacional: nacionalInternacionalRef.current.value,
      total: totalRef.current.value,
      año_evaluacion: añoEvaluacionRef.current.value,
    };

    erraseInput();

    const url = "http://localhost:3002/api/eventos_anterior";
    fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      // Send your data in the request body as JSON
      body: JSON.stringify(eventos_anterior),
    })
      .then((res) => {
        if (!res.ok) {
          return res.json();
        }
        // handle error
      })
      .then((json) => {
        setEventosAnterior(json?.data || []);
        setMessageSucces("Evento anterior insertado");
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
            <label htmlFor="nacional_internacional" className="text-sm font-semibold text-gray-700">
              Nacional/Internacional:
            </label>
            <Input type="number" inputName="nacional_internacional" min="0" ref={nacionalInternacionalRef} placeholder="Cantidad"/>
          </div>

          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="total" className="text-sm font-semibold text-gray-700">Total:</label>
            <Input type="number" inputName="total" min="0" ref={totalRef} placeholder="Total"/>
          </div>

          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="año" className="text-sm font-semibold text-gray-700">Año de Evaluación:</label>
            <Input type="number" inputName="año" min="0" ref={añoEvaluacionRef} placeholder="Año"/>
          </div>

          <button
            type="submit"
            className="bg-emerald-600 hover:bg-emerald-700 px-6 py-3 rounded-lg text-white font-semibold transition-colors shadow-md"
          >
            Crear Registro
          </button>
        </div>
      </form>
    </div>
  );
}
