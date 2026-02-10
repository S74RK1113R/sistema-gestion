import Select from "../Select";
import { useSelectFetch } from "../../hooks/useSelectFetch";
import { useRef } from "react";
import { tableUse } from "../../context/TablesContext";

export default function ProfesorPrincipalForm() {
  const { data } = useSelectFetch("http://localhost:3002/api/disciplinas");
  const { data: data2 } = useSelectFetch("http://localhost:3002/api/profesor");

  const disciplina_idRef = useRef();
  const profesor_idRef = useRef();
  const { setProfesorPrincipal, setInsert, insert, setMessageSucces, setNotification, setNotificationType } = tableUse();

  function handleSubmit() {
    event.preventDefault();
    const profesorPrincipal = {
      disciplina_id: disciplina_idRef.current.value,
      profesor_id: profesor_idRef.current.value,
    };

    const url = "http://localhost:3002/api/profesor_principal";
    fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      // Send your data in the request body as JSON
      body: JSON.stringify(profesorPrincipal),
    })
      .then((res) => {
        if (!res.ok) {
          return res.json();
        }
        // handle error
      })
      .then((json) => {
        setProfesorPrincipal(json?.data || []);
        setMessageSucces("Profesor principal insertado");
        setNotificationType('insert');
        setNotification(true);
      });

    setInsert(!insert);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5 items-center mx-2">
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="disciplina">Disciplina:</label>
            <Select inputName="disciplina" ref={disciplina_idRef}>
              {data.map((item) => {
                return <option value={item.id}>{item.nombre}</option>;
              })}
            </Select>
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="profesor">Profesor:</label>
            <Select inputName="profesor" ref={profesor_idRef}>
              {data2.map((item) => {
                return (
                  <option
                    value={item.id}
                    key={item.id}
                  >{`${item.nombres} ${item.primer_apellido} ${item.segundo_apellido}`}</option>
                );
              })}
            </Select>
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
