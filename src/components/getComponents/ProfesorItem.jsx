import { tableUse } from "../../context/TablesContext";

export default function ProfesorItem({
  primer_apellido,
  segundo_apellido,
  nombres,
  exp_educacion_superior,
  exp_carrera,
  lugar_procedencia,
  categoria_docente,
  funcion,
  consultante_emerito,
  grado_cientifico,
  doctor_esp_afin,
  asignatura_id,
  asignatura_id_2,
  asignatura_id_3,
  asignatura_id_4,
  asignatura_id_5,
  asignatura_id_6,
  participacion_posgrado,
  sede_universitaria,
  id,
}) {
  const { setProfesor, setDel, del } = tableUse();

  function deleteItem(id) {
    const url = `http://localhost:3002/api/profesor/${id}`;
    setDel(!del);
    fetch(url, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((json) => setProfesor(json.data || []));
  }

  return (
    <div className="mb-5 border border-black w-11/12 flex flex-col items-center justify-center shadow-lg shadow-zinc-950/60 p-5 rounded-lg">
      <h1 className="font-bold">Nombre del profesor:</h1>
      <div>{nombres}</div>
      <h1 className="font-bold">Primer apellido del profesor:</h1>
      <div>{primer_apellido}</div>
      <h1 className="font-bold">Segundo apellido del profesor:</h1>
      <div>{segundo_apellido}</div>
      <h1 className="font-bold">Experiencia en la carrera:</h1>
      <div>{exp_carrera}</div>
      <h1 className="font-bold">Experiencia en la educación superior:</h1>
      <div>{exp_educacion_superior}</div>
      <h1 className="font-bold">Lugar de procedencia:</h1>
      <div>{lugar_procedencia}</div>
      <h1 className="font-bold">Categoria docente:</h1>
      <div>{categoria_docente}</div>
      <h1 className="font-bold">Funcion que realiza:</h1>
      <div>{funcion}</div>
      <h1 className="font-bold">Consultante o emerito</h1>
      <div>{consultante_emerito}</div>
      <h1 className="font-bold">Grado científico</h1>
      <div>{grado_cientifico}</div>
      <h1 className="font-bold">Doctor o especialidad afin:</h1>
      <div>{doctor_esp_afin}</div>
      <h1 className="font-bold">Asignatura que imparte 1:</h1>
      <div>{asignatura_id}</div>
      {asignatura_id_2 == 0 ? (
        " "
      ) : (
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-bold">Asignatura que imparte 2:</h1>
          <div>{asignatura_id_2}</div>
        </div>
      )}
      {asignatura_id_3 == 0 ? (
        " "
      ) : (
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-bold">Asignatura que imparte 3:</h1>
          <div>{asignatura_id_3}</div>
        </div>
      )}
      {asignatura_id_4 == 0 ? (
        " "
      ) : (
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-bold">Asignatura que imparte 4:</h1>
          <div>{asignatura_id_4}</div>
        </div>
      )}
      {asignatura_id_5 == 0 ? (
        " "
      ) : (
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-bold">Asignatura que imparte 5:</h1>
          <div>{asignatura_id_5}</div>
        </div>
      )}
      {asignatura_id_6 == 0 ? (
        " "
      ) : (
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-bold">Asignatura que imparte 6:</h1>
          <div>{asignatura_id_6}</div>
        </div>
      )}
      <h1 className="font-bold">Participación en posgrado</h1>
      <div>{participacion_posgrado}</div>
      <h1 className="font-bold">Sede universitaria:</h1>
      <div>{sede_universitaria}</div>

      <div className="flex flex-row gap-4 mt-4">
        <button
          onClick={() => deleteItem(id)}
          data-id={id}
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
