import Input from "../Input";
import { tableUse } from "../../context/TablesContext";
import { useRef } from "react";

export default function CursoForm() {
  const cursoRef = useRef();
 
  const { setCurso, setInsert, insert, setMessageSucces, setNotification, setNotificationType } = tableUse();

  function erraseInput() {
    cursoRef.current.value = "";
  }

  function handleSubmit() {
    event.preventDefault();
    const cursoData = {
      curso: cursoRef.current.value,
    };

    erraseInput();

    const url = "http://localhost:3002/api/cursos";
    fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      // Send your data in the request body as JSON
      body: JSON.stringify(cursoData),
    })
      .then((res) => {
        if (!res.ok) {
          return res.json();
        }
        // handle error
      })
      .then((json) => {
        setCurso(json?.data || []);
        setMessageSucces("Curso insertado");
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
            <label htmlFor="curso" className="text-sm font-semibold text-gray-700">Curso:</label>
            <Input type="text" inputName="curso" placeholder="Ej: 2024-2025" ref={cursoRef}/>
          </div>

          <button
            type="submit"
            className="bg-emerald-600 hover:bg-emerald-700 px-6 py-3 rounded-lg text-white font-semibold transition-colors shadow-md"
          >
            Crear Curso
          </button>
        </div>
      </form>
    </div>
  );
}
