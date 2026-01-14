import { tableUse } from "../../context/TablesContext";

export default function InvestigacionItem({
  proyectos_investigacion,
  porciento_estudiantes_vinculados,
  porciento_profesores_vinculados,
  año_evaluacion,
  id,
}) {
  const { setClaustro, del, setDel } = tableUse();
  
    function deleteItem(id) {
      const url = `http://localhost:3002/api/investigacion/${id}`;
      setDel(!del);
  
      fetch(url, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then((json) => setClaustro(json.data || []));
    }

    return (
    <div className="mb-5 border border-black w-11/12 flex flex-col items-center justify-center shadow-lg shadow-zinc-950/60 p-5 rounded-lg">
      <h1 className="font-bold">Proyectos de investigación:</h1>
      <div>{proyectos_investigacion}</div>
      <h1 className="font-bold">Porcentaje de estudiantes vinculados:</h1>
      <div>{porciento_estudiantes_vinculados}</div>
      <h1 className="font-bold">Porcentaje de profesores vinculados:</h1>
      <div>{porciento_profesores_vinculados}</div>
      <h1 className="font-bold">Año de evaluación:</h1>
      <div>{año_evaluacion}</div>

      <div className="flex flex-row gap-4 mt-4">
        <button
          onClick={() => {
            deleteItem(id);
          }}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
        >
          Borrar
        </button>
        <button
          data-id={id}
          className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg "
        >
          Modificar
        </button>
      </div>
    </div>
  );
}
