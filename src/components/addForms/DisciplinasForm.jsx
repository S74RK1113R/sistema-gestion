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
    <div className="w-full max-w-md mx-auto">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-6 p-2">
          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="nombre" className="text-sm font-semibold text-gray-700">Nombre:</label>
            <Input type="text" inputName="nombre" ref={nombreRef} placeholder="Nombre de la disciplina" />
          </div>

          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="codigo" className="text-sm font-semibold text-gray-700">Código:</label>
            <Input
              type="text"
              inputName="codigo"
              maxLength="4"
              ref={codigoRef}
              placeholder="Código (máx 4 caracteres)"
            />
          </div>

          <button
            type="submit"
            className="bg-emerald-600 hover:bg-emerald-700 px-6 py-3 rounded-lg text-white font-semibold transition-colors shadow-md"
          >
            Crear Disciplina
          </button>
        </div>
      </form>
    </div>
  );
}
