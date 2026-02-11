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
  const { setTotalGraduados, setInsert, insert, setMessageSucces, setNotification, setNotificationType } = tableUse();

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
      .then((json) => {
        setTotalGraduados(json?.data || []);
        setMessageSucces("Total de graduados insertado");
        setNotificationType('insert');
        setNotification(true);
      });

    setInsert(!insert);
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <form onSubmit={handleSubmit} >
        <div className="flex flex-col gap-6 p-2">
          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="cd" className="text-sm font-semibold text-gray-700">Curso diurno:</label>
            <Input type="number" inputName="cd" min="0" ref={cursoDiurnoRef} placeholder="Ingrese cantidad" />
          </div>
          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="cpe" className="text-sm font-semibold text-gray-700">Curso por encuentro:</label>
            <Input type="number" inputName="cpe" min="0" ref={cursoEncuentroRef} placeholder="Ingrese cantidad" />
          </div>

          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="curso" className="text-sm font-semibold text-gray-700">Curso:</label>
            <Select inputName="curso" ref={cursoRef}>
              <option value="">Seleccione curso</option>
              {data.map((curso) => (
                <option key={curso.id} value={curso.id}>
                  {curso.curso}
                </option>
              ))}
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
