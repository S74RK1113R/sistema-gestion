import Input from "../Input";
import { useRef } from "react";
import { tableUse } from "../../context/TablesContext";

export default function PublicacionesForm() {
  const grupos1_4Ref = useRef();
  const grupos1_2Ref = useRef();
  const totalRef = useRef();
  const año_evaluacionRef = useRef();

  const { setPublicaciones, setInsert, insert, setMessageSucces, setNotification, setNotificationType } = tableUse();

  function erraseInput() {
    grupos1_4Ref.current.value = "";
    grupos1_2Ref.current.value = "";
    totalRef.current.value = "";
    año_evaluacionRef.current.value = "";
  }

  function handleSubmit() {
    event.preventDefault();
    const publicaciones = {
      grupos1_4 : grupos1_4Ref.current.value,
      grupos_1_2 : grupos1_2Ref.current.value,
      total : totalRef.current.value,
      año_evaluacion : año_evaluacionRef.current.value,
    };

    erraseInput();

    const url = "http://localhost:3002/api/publicaciones";
    fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      // Send your data in the request body as JSON
      body: JSON.stringify(publicaciones),
    })
      .then((res) => {
        if (!res.ok) {
          return res.json();
        }
        // handle error
      })
      .then((json) => {
        setPublicaciones(json?.data || []);
        setMessageSucces("Publicación insertada");
        setNotificationType('insert');
        setNotification(true);
      });

    setInsert(!insert);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 grid-rows-3 size-max gap-5 mx-2">
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="grupos1_4">Grupos 1-4:</label>
            <Input type="number" inputName="grupos1_4" min="0" ref={grupos1_4Ref}/>
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="grupos1_2">Grupos 1-2:</label>
            <Input type="number" inputName="grupos1_2" min="0" ref={grupos1_2Ref}/>
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="total">Total</label>
            <Input type="number" inputName="total" min="0" ref={totalRef}/>
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="año_evaluacion">Año de la evaluación:</label>
            <Input type="number" inputName="año_evaluacion" min="0" ref={año_evaluacionRef}/>
          </div>

          <button
            type="submit"
            className="bg-green-500 px-5 py-2 rounded-full text-white font-bold my-5 hover:bg-green-800 col-span-2 w-25 mx-auto"
          >
            Insertar
          </button>
        </div>
      </form>
    </div>
  );
}
