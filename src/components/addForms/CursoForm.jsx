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
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col size-max gap-5 items-center mx-auto">
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="curso">Curso:</label>
            <Input type="text" inputName="curso" placeholder="aaaa-aaaa" ref={cursoRef}/>
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
