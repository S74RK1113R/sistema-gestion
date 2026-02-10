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
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col size-max gap-5 items-center mx-auto">
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="nivel">Nivel:</label>
            <Select inputName="nivel" ref={nivelRef}>
              <option value="carrera autorizada">Carrera autorizada</option>
              <option value="carrera avalada">Carrera avalada</option>
              <option value="carrera certificada">Carrera certificada</option>
              <option value="carrera de excelencia">
                Carrera de excelencia
              </option>
              <option value="no procede">No procede</option>
            </Select>
          </div>

          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="año_evaluacion">Año evaluación:</label>
            <Input
              type="number"
              inputName="año_evaluacion"
              min="0"
              ref={añoRef}
            />
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
