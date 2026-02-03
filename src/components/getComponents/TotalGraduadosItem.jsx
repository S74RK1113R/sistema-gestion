import { tableUse } from "../../context/TablesContext";
import { useSelectFetch } from "../../hooks/useSelectFetch";

export default function TotalGraduadosItem({ cd, cpe, curso_id, id }) {
  const { setTotalGraduados, del, setDel } = tableUse();
  const {data} = useSelectFetch("http://localhost:3002/api/cursos");
  
    function deleteItem(id) {
      const url = `http://localhost:3002/api/total_graduados/${id}`;
      setDel(!del);
  
      fetch(url, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then((json) => setTotalGraduados(json.data || []));
    }
    return (
    <div className="mb-5 border border-black w-11/12 flex flex-col items-center justify-center shadow-lg shadow-zinc-950/60 p-5 rounded-lg">
      <h1 className="font-bold">Curso diurno:</h1>
      <div>{cd}</div>
      <h1 className="font-bold">Curso por encuentro:</h1>
      <div>{cpe}</div>
      <h1 className="font-bold">Curso:</h1>
      <div>{data.find(curso => curso.id === curso_id)?.curso || "Curso no encontrado"}</div>

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
