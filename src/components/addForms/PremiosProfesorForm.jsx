import Input from "../Input";
import Select from "../Select";
import { useSelectFetch } from "../../hooks/useSelectFetch";
import { tableUse } from "../../context/TablesContext";
import { useRef } from "react";

export default function PremiosProfesorForm() {
  const { data } = useSelectFetch("http://localhost:3002/api/profesor");
  const nombreRef = useRef();
  const añoRef = useRef();
  const profesorIdRef = useRef();

  const { setPremiosProfesor, setInsert, insert, setMessageSucces, setNotification, setNotificationType } = tableUse();

  function erraseInput() {
    nombreRef.current.value = "";
    añoRef.current.value = "";
  }

  function handleSubmit() {
    event.preventDefault();
    const premiosProfesor = {
      nombre_premio: nombreRef.current.value,
      profesor_id: profesorIdRef.current.value,
      año: añoRef.current.value,
    };

    erraseInput();

    const url = "http://localhost:3002/api/premios_profesor";
    fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      // Send your data in the request body as JSON
      body: JSON.stringify(premiosProfesor),
    })
      .then((res) => {
        if (!res.ok) {
          return res.json();
        }
        // handle error
      })
      .then((json) => {
        setPremiosProfesor(json?.data || []);
        setMessageSucces("Premio de profesor insertado");
        setNotificationType('insert');
        setNotification(true);
      });

    setInsert(!insert);
  }

  return (
    <div>
      <form   onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 grid-rows-4 mx-auto size-max gap-5">
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="nombre_premio">Nombre del premio:</label>
            <Input type="text" inputName="nombre_premio" ref={nombreRef} />
          </div>

          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="profesor_id">Profesor:</label>
            <Select inputName="profesor_id" ref={profesorIdRef}>
              {data.map((item) => {
                return (
                  <option
                    value={item.id}
                    key={item.id}
                  >{`${item.nombres} ${item.primer_apellido} ${item.segundo_apellido}`}</option>
                );
              })}
            </Select>
          </div>

          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="año_evaluacion">Año:</label>
            <Input type="number" inputName="año_evaluacion" min="0" ref={añoRef} />
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
