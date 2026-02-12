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
    <div className="w-full max-w-md mx-auto">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-6 p-2">
          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="disciplina" className="text-sm font-semibold text-gray-700">Disciplina:</label>
            <Select inputName="disciplina" ref={disciplina_idRef}>
              <option value="">Seleccione disciplina</option>
              {data.map((item) => {
                return <option value={item.id}>{item.nombre}</option>;
              })}
            </Select>
          </div>
          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="profesor" className="text-sm font-semibold text-gray-700">Profesor:</label>
            <Select inputName="profesor" ref={profesor_idRef}>
              <option value="">Seleccione profesor</option>
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
            className="bg-emerald-600 hover:bg-emerald-700 px-6 py-3 rounded-lg text-white font-semibold mt-6 transition-colors shadow-md"
          >
            Insertar
          </button>
        </div>
      </form>
    </div>
  );
}
