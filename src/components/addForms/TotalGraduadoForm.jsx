import Input from "../Input";
import Select from "../Select";
import { useRef } from "react";
import { tableUse } from "../../context/TablesContext";
import { useSelectFetch } from "../../hooks/useSelectFetch";

export default function TotalGraduadosForm() {
  const cursoDiurnoRef = useRef();
  const cursoEncuentroRef = useRef();
  const cursoRef = useRef();
  
  const {data} = useSelectFetch("http://localhost:3002/api/cursos");
  const { setTotalGraduados, setInsert, insert } = tableUse();

  function erraseInput() {
    cursoDiurnoRef.current.value = "";
    cursoEncuentroRef.current.value = "";
  }

  function handleSubmit() {
    event.preventDefault();
    const totalGraduados = {
      cd: cursoDiurnoRef.current.value,
      cpe: cursoEncuentroRef.current.value,
      curso_id: cursoRef.current.value,
    };

    erraseInput();

    const url = "http://localhost:3002/api/total_graduados";
    fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      // Send your data in the request body as JSON
      body: JSON.stringify(totalGraduados),
    })
      .then((res) => {
        if (!res.ok) {
          return res.json();
        }
        // handle error
      })
      .then((json) => setTotalGraduados(json?.data || []));

    setInsert(!insert);
  }

  return (
    <div>
      <form onSubmit={handleSubmit} >
        <div className="flex flex-col size-max gap-5 items-center mx-auto">
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="cd">Curso diurno:</label>
            <Input type="number" inputName="cd" min="0" ref={cursoDiurnoRef} />
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="cpe">Curso por encuentro:</label>
            <Input type="number" inputName="cpe" min="0" ref={cursoEncuentroRef} />
          </div>

          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="curso">Curso:</label>
            <Select inputName="curso" ref={cursoRef}>
              {data.map((curso) => (
                <option key={curso.id} value={curso.id}>
                  {curso.curso}
                </option>
              ))}
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
