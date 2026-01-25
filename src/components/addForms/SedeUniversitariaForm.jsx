import Input from "../Input";
import Select from "../Select";
import { useRef } from "react";
import { tableUse } from "../../context/TablesContext";

export default function SedeUniversitariaFrom() {
  const nombreRef = useRef();
  const clasificacionRef = useRef();
  const { setSedeUniversitaria, setInsert, insert } = tableUse();

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
      .then((json) => setSedeUniversitaria(json?.data || []));

    setInsert(!insert);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col size-max gap-5 items-center mx-auto">
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="nombre">Nombre:</label>
            <Input type="text" inputName="nombre" ref={nombreRef}/>
          </div>

          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="clasificacion">Clasificación:</label>
            <Select inputName="clasificacion" ref={clasificacionRef}>
              <option value="sede central">Sede central</option>
              <option value="sede municipal o subsede">
                Sede municipal o subsede
              </option>
              <option value="cum">Cum</option>
              <option value="filial">Filial</option>
            </Select>
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
