import Input from "../Input";
import { useRef } from "react";
import { tableUse } from "../../context/TablesContext";

export default function PremiosEstudiantesForm() {
  const nombreRef = useRef();
  const añoRef = useRef();
  const nombresRef = useRef()
  const primerApellidoRef = useRef()
  const segundoApellidoRef = useRef() 

  const { setPremiosEstudiantes, setInsert, insert, setMessageSucces, setNotification, setNotificationType } = tableUse();

  function erraseInput() {
    nombreRef.current.value = "";
    añoRef.current.value = "";
    nombresRef.current.value = "";
    primerApellidoRef.current.value = "";
    segundoApellidoRef.current.value = "";
  }

  function handleSubmit() {
    event.preventDefault();
    const premios_estudiante = {
      nombre: nombreRef.current.value,
      año: añoRef.current.value,
      nombres: nombresRef.current.value,
      primer_apellido: primerApellidoRef.current.value,
      segundo_apellido: segundoApellidoRef.current.value
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
      .then((json) => {
        setPremiosEstudiantes(json?.data || []);
        setMessageSucces("Premio de estudiante insertado");
        setNotificationType('insert');
        setNotification(true);
      });

    setInsert(!insert);
  }
  return (
    <div className="w-full max-w-2xl mx-auto">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-6 p-2">
          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="nombre_premio" className="text-sm font-semibold text-gray-700">Nombre del Premio:</label>
            <Input type="text" inputName="nombre_premio" ref={nombreRef} placeholder="Nombre del premio"/>
          </div>
          
          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="nombres" className="text-sm font-semibold text-gray-700">Nombres del Estudiante:</label>
            <Input type="text" inputName="nombres" ref={nombresRef} placeholder="Nombres"/>
          </div>

          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="primer_apellido" className="text-sm font-semibold text-gray-700">Primer Apellido:</label>
            <Input type="text" inputName="primer_apellido" ref={primerApellidoRef} placeholder="Primer apellido"/>
          </div>

          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="segundo_apellido" className="text-sm font-semibold text-gray-700">Segundo Apellido:</label>
            <Input type="text" inputName="segundo_apellido" ref={segundoApellidoRef} placeholder="Segundo apellido"/>
          </div>
          
          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="año" className="text-sm font-semibold text-gray-700">Año:</label>
            <Input type="number" inputName="año" min="0" ref={añoRef} placeholder="Año"/>
          </div>

          <button
            type="submit"
            className="col-span-2 bg-emerald-600 hover:bg-emerald-700 px-6 py-3 rounded-lg text-white font-semibold mt-6 transition-colors shadow-md"
          >
            Crear Premio Estudiante
          </button>
        </div>
      </form>
    </div>
  );
}
