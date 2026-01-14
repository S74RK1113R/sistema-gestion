import { tableUse } from "../../context/TablesContext";

export default function PromocionItem({
  id,
  mie_1er_año,
  mie_2do_año,
  mie_3er_año,
  mie_4to_año,
  mie_5to_año,
  aprobados_limpios_1er_año,
  aprobados_limpios_2do_año,
  aprobados_limpios_3er_año,
  aprobados_limpios_4to_año,
  aprobados_limpios_5to_año,
  aprobados_con_2_1er_año,
  aprobados_con_2_2do_año,
  aprobados_con_2_3er_año,
  aprobados_con_2_4to_año,
  aprobados_con_2_5to_año,
  aprobados_con_1_1er_año,
  aprobados_con_1_2do_año,
  aprobados_con_1_3er_año,
  aprobados_con_1_4to_año,
  aprobados_con_1_5to_año,
  bajas_1er_año,
  bajas_2do_año,
  bajas_3er_año,
  bajas_4to_año,
  bajas_5to_año,
  curso_id,
}) {
  const { setPromocion, setDel, del } = tableUse();

  function deleteItem(id) {
    const url = `http://localhost:3002/api/promocion/${id}`;
    setDel(!del);
    fetch(url, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((json) => setPromocion(json.data || []));
  }

  return (
    <div className="mb-5 border border-black w-11/12 flex flex-col items-center justify-center shadow-lg shadow-zinc-950/60 p-5 rounded-lg">
      <h1 className="font-bold">MIE 1er año:</h1>
      <div>{mie_1er_año}</div>
      <h1 className="font-bold">MIE 2do año:</h1>
      <div>{mie_2do_año}</div>
      <h1 className="font-bold">MIE 3er año:</h1>
      <div>{mie_3er_año}</div>
      <h1 className="font-bold">MIE 4to año:</h1>
      <div>{mie_4to_año}</div>
      <h1 className="font-bold">MIE 5to año:</h1>
      <div>{mie_5to_año}</div>

      <h1 className="font-bold">Aprobados limpios 1er año:</h1>
      <div>{aprobados_limpios_1er_año}</div>
      <h1 className="font-bold">Aprobados limpios 2do año:</h1>
      <div>{aprobados_limpios_2do_año}</div>
      <h1 className="font-bold">Aprobados limpios 3er año:</h1>
      <div>{aprobados_limpios_3er_año}</div>
      <h1 className="font-bold">Aprobados limpios 4to año:</h1>
      <div>{aprobados_limpios_4to_año}</div>
      <h1 className="font-bold">Aprobados limpios 5to año:</h1>
      <div>{aprobados_limpios_5to_año}</div>

      <h1 className="font-bold">Aprobados con 2 - 1er año:</h1>
      <div>{aprobados_con_2_1er_año}</div>
      <h1 className="font-bold">Aprobados con 2 - 2do año:</h1>
      <div>{aprobados_con_2_2do_año}</div>
      <h1 className="font-bold">Aprobados con 2 - 3er año:</h1>
      <div>{aprobados_con_2_3er_año}</div>
      <h1 className="font-bold">Aprobados con 2 - 4to año:</h1>
      <div>{aprobados_con_2_4to_año}</div>
      <h1 className="font-bold">Aprobados con 2 - 5to año:</h1>
      <div>{aprobados_con_2_5to_año}</div>

      <h1 className="font-bold">Aprobados con 1 - 1er año:</h1>
      <div>{aprobados_con_1_1er_año}</div>
      <h1 className="font-bold">Aprobados con 1 - 2do año:</h1>
      <div>{aprobados_con_1_2do_año}</div>
      <h1 className="font-bold">Aprobados con 1 - 3er año:</h1>
      <div>{aprobados_con_1_3er_año}</div>
      <h1 className="font-bold">Aprobados con 1 - 4to año:</h1>
      <div>{aprobados_con_1_4to_año}</div>
      <h1 className="font-bold">Aprobados con 1 - 5to año:</h1>
      <div>{aprobados_con_1_5to_año}</div>

      <h1 className="font-bold">Bajas 1er año:</h1>
      <div>{bajas_1er_año}</div>
      <h1 className="font-bold">Bajas 2do año:</h1>
      <div>{bajas_2do_año}</div>
      <h1 className="font-bold">Bajas 3er año:</h1>
      <div>{bajas_3er_año}</div>
      <h1 className="font-bold">Bajas 4to año:</h1>
      <div>{bajas_4to_año}</div>
      <h1 className="font-bold">Bajas 5to año:</h1>
      <div>{bajas_5to_año}</div>

      <h1 className="font-bold">Curso:</h1>
      <div>{curso_id}</div>

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
