import Input from "../Input";
import { useRef } from "react";
import { tableUse } from "../../context/TablesContext";

export default function PosgradoForm() {
  const nombreRef = useRef();
  const añoRef = useRef();
  const cantidadRef = useRef();

  const { setPosgrado, setInsert, insert, setMessageSucces, setNotification, setNotificationType } = tableUse();

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
      .then((json) => {
        setPosgrado(json?.data || []);
        setMessageSucces("Posgrado insertado");
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
            <Input type="text" inputName="nombre" ref={nombreRef} placeholder="Ingrese nombre" />
          </div>

          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="año" className="text-sm font-semibold text-gray-700">Año:</label>
            <Input type="number" inputName="año" min="0" ref={añoRef} placeholder="Ingrese año" />
          </div>

          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="cantidad" className="text-sm font-semibold text-gray-700">Cantidad:</label>
            <Input type="number" inputName="cantidad" min="0" ref={cantidadRef} placeholder="Ingrese cantidad" />
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
