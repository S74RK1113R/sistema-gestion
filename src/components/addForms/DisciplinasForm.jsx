import { tableUse } from "../../context/TablesContext";
import Input from "../Input";
import { useRef } from "react";

export default function DisciplinasForm() {

  const nombreRef = useRef();
  const codigoRef = useRef();
  const { setDisciplina, setInsert, insert, setMessageSucces, setNotification, setNotificationType} = tableUse();

  function erraseInput() {
    nombreRef.current.value = "";
    codigoRef.current.value = "";
  }

  function handleSubmit() {
    event.preventDefault();
    const disciplinas = {
      nombre: nombreRef.current.value,
      codigo: codigoRef.current.value,
    };

    erraseInput();

    const url = "http://localhost:3002/api/disciplinas";
    fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      // Send your data in the request body as JSON
      body: JSON.stringify(disciplinas),
    })
      .then((res) => {
        if (!res.ok) {
          return res.json();
        }
        // handle error
      })
      .then((json) => {
        setMessageSucces("Disciplina insertada")
        setNotificationType('insert');
        setNotification(true);
        setDisciplina(json?.data || [])
      });

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
            <label htmlFor="codigo">Código:</label>
            <Input
              type="text"
              inputName="codigo"
              maxLength="4"
              ref={codigoRef}
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
