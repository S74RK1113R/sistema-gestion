import Input from "../Input";
import { useRef } from "react";
import { tableUse } from "../../context/TablesContext";

export default function EventosAnteriorForm() {
  const nacionalInternacionalRef = useRef();
  const totalRef = useRef();
  const añoEvaluacionRef = useRef();

  const { setEventosAnterior, setInsert, insert } = tableUse();

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
      .then((json) => setEventosAnterior(json?.data || []));

    setInsert(!insert);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 grid-rows-4 size-max gap-5 mx-auto">
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="nacional_internacional">
              Nacional/Internacional:
            </label>
            <Input type="number" inputName="nacional_internacional" min="0" ref={nacionalInternacionalRef}/>
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="total">Total:</label>
            <Input type="number" inputName="total" min="0" ref={totalRef}/>
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="total">Año de la evaluación:</label>
            <Input type="number" inputName="total" min="0" ref={añoEvaluacionRef}/>
          </div>

          <button
            type="submit"
            className="bg-green-500 px-5 py-2 rounded-full text-white font-bold my-5 hover:bg-green-800"
          >
            Insertar
          </button>
        </div>
      </form>
    </div>
  );
}
