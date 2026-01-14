import { tableUse } from "../../context/TablesContext";

export default function IncorporacionInvestigacionCientificaItem({
  institucional,
  nacional,
  internacional,
  cantidad_profesores_incorporados,
  estudiantes_investigando_1er_año,
  estudiantes_investigando_2do_año,
  estudiantes_investigando_3er_año,
  estudiantes_investigando_4to_año,
  estudiantes_investigando_5to_año,
  año_evaluacion,
  id,
}) {
  const { setIncorporacionInvestigacion, del, setDel } = tableUse();

  function deleteItem(id) {
    const url = `http://localhost:3002/api/incorporacion_investigacion_cientifica/${id}`;
    setDel(!del);

    fetch(url, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((json) => setIncorporacionInvestigacion(json.data || []));
  }

  return (
    <div className="mb-5 border border-black w-11/12 flex flex-col items-center justify-center shadow-lg shadow-zinc-950/60 p-5 rounded-lg">
      <h2 className="font-bold">Institucional:</h2>
      <div>{institucional}</div>
      <h2 className="font-bold">Nacional:</h2>
      <div>{nacional}</div>
      <h2 className="font-bold">Internacional:</h2>
      <div>{internacional}</div>

      <h2 className="font-bold">Estudiantes investigando 1er año:</h2>
      <div>{estudiantes_investigando_1er_año}</div>
      <h2 className="font-bold">Estudiantes investigando 2do año:</h2>
      <div>{estudiantes_investigando_2do_año}</div>
      <h2 className="font-bold">Estudiantes investigando 3er año:</h2>
      <div>{estudiantes_investigando_3er_año}</div>
      <h2 className="font-bold">Estudiantes investigando 4to año:</h2>
      <div>{estudiantes_investigando_4to_año}</div>
      <h2 className="font-bold">Estudiantes investigando 5to año:</h2>
      <div>{estudiantes_investigando_5to_año}</div>

      <h2 className="font-bold">Cantidad de profesores incorporados:</h2>
      <div>{cantidad_profesores_incorporados}</div>

      <h2 className="font-bold">Año de la evaluación:</h2>
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
