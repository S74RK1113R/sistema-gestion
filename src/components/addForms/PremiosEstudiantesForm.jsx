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
    <div className="m-5">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 grid-rows-4 gap-2">
          <div className="flex flex-col justify-center items-center gap-2">
            <label htmlFor="nombre_premio">Nombre del premio:</label>
            <Input type="text" inputName="nombre_premio" ref={nombreRef}/>
          </div>
          
          <div className="flex flex-col justify-center items-center  gap-2">
            <label htmlFor="nombres">Nombres del estudiante:</label>
            <Input type="text" inputName="nombres" ref={nombresRef}/>
          </div>

          <div className="flex flex-col justify-center items-center gap-2">
            <label htmlFor="primer_apellido">Primer Apellido:</label>
            <Input type="text" inputName="primer_apellido" ref={primerApellidoRef}/>
          </div>

          <div className="flex flex-col justify-center items-center  gap-2">
            <label htmlFor="segundo_apellido">Segundo Apellido:</label>
            <Input type="text" inputName="segundo_apellido" ref={segundoApellidoRef}/>
          </div>
          <div className="flex flex-col justify-center items-center  gap-2">
            <label htmlFor="año">Año:</label>
            <Input type="number" inputName="año" min="0" ref={añoRef}/>
          </div>

          <button
            type="submit"
            className="bg-green-500 px-5 py-2 rounded-full text-white font-bold my-5 hover:bg-green-800 row-start-4 col-span-2 mx-auto"
          >
            Insertar
          </button>
        </div>
      </form>
    </div>
  );
}
