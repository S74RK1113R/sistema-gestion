import Input from "../Input";
import { useRef } from "react";
import { tableUse } from "../../context/TablesContext";

export default function PremiosEstudiantesForm() {
  const nombreRef = useRef();
  const cantidadRef = useRef();
  const añoRef = useRef();

  const { setPremiosEstudiantes, setInsert, insert } = tableUse();

  function erraseInput() {
    nombreRef.current.value = "";
    cantidadRef.current.value = "";
    añoRef.current.value = "";
  }

  function handleSubmit() {
    event.preventDefault();
    const premios_estudiante = {
      nombre: nombreRef.current.value,
      cantidad: cantidadRef.current.value,
      año: añoRef.current.value,
    };

    erraseInput();

    const url = "http://localhost:3002/api/premios_estudiante";
    fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      // Send your data in the request body as JSON
      body: JSON.stringify(premios_estudiante),
    })
      .then((res) => {
        if (!res.ok) {
          return res.json();
        }
        // handle error
      })
      .then((json) => setPremiosEstudiantes(json?.data || []));

    setInsert(!insert);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 grid-rows-4 mx-auto size-max gap-5">
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="nombre_premio">Nombre del premio:</label>
            <Input type="text" inputName="nombre_premio" ref={nombreRef}/>
          </div>

          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="cantidad">Cantidad:</label>
            <Input type="number" inputName="cantidad" min="0" ref={cantidadRef}/>
          </div>

          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="año">Año:</label>
            <Input type="number" inputName="año" min="0" ref={añoRef}/>
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
