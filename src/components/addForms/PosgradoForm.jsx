import Input from "../Input";
import { useRef } from "react";
import { tableUse } from "../../context/TablesContext";

export default function PosgradoForm() {
  const nombreRef = useRef();
  const añoRef = useRef();
  const cantidadRef = useRef();

  const { setPosgrado, setInsert, insert } = tableUse();

  function erraseInput() {
    nombreRef.current.value = "";
    añoRef.current.value = "";
    cantidadRef.current.value = "";
  }

  function handleSubmit() {
    event.preventDefault();
    const posgrado = {
      nombre: nombreRef.current.value,
      año: añoRef.current.value,
      cantidad: cantidadRef.current.value,
    };

    erraseInput();

    const url = "http://localhost:3002/api/posgrado";
    fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      // Send your data in the request body as JSON
      body: JSON.stringify(posgrado),
    })
      .then((res) => {
        if (!res.ok) {
          return res.json();
        }
        // handle error
      })
      .then((json) => setPosgrado(json?.data || []));

    setInsert(!insert);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col size-max gap-5 items-center mx-auto">
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="nombre">Nombre:</label>
            <Input type="text" inputName="nombre" ref={nombreRef} />
          </div>

          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="año">Año:</label>
            <Input type="number" inputName="año" min="0" ref={añoRef} />
          </div>

          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="cantidad">Cantidad:</label>
            <Input type="number" inputName="cantidad" min="0" ref={cantidadRef} />
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
