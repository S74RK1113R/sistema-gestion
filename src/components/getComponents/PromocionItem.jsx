import { tableUse } from "../../context/TablesContext";
import { useSelectFetch } from "../../hooks/useSelectFetch";
import { useState, useRef } from "react";
import Input from "../Input";
import Select from "../Select";
import { useUser } from "../../context/UserContext";

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
  const { setPromocion, setDel, del, insert, setInsert } = tableUse();
  const { data } = useSelectFetch("http://localhost:3002/api/cursos");
  const [showModal, setShowModal] = useState(false);
  const { isAdmin, isDirective } = useUser();

  const refs = {
    mie_1er_año: useRef(),
    mie_2do_año: useRef(),
    mie_3er_año: useRef(),
    mie_4to_año: useRef(),
    mie_5to_año: useRef(),
    aprobados_limpios_1er_año: useRef(),
    aprobados_limpios_2do_año: useRef(),
    aprobados_limpios_3er_año: useRef(),
    aprobados_limpios_4to_año: useRef(),
    aprobados_limpios_5to_año: useRef(),
    aprobados_con_2_1er_año: useRef(),
    aprobados_con_2_2do_año: useRef(),
    aprobados_con_2_3er_año: useRef(),
    aprobados_con_2_4to_año: useRef(),
    aprobados_con_2_5to_año: useRef(),
    aprobados_con_1_1er_año: useRef(),
    aprobados_con_1_2do_año: useRef(),
    aprobados_con_1_3er_año: useRef(),
    aprobados_con_1_4to_año: useRef(),
    aprobados_con_1_5to_año: useRef(),
    bajas_1er_año: useRef(),
    bajas_2do_año: useRef(),
    bajas_3er_año: useRef(),
    bajas_4to_año: useRef(),
    bajas_5to_año: useRef(),
    curso_id: useRef(),
  };

  function deleteItem(id) {
    const url = `http://localhost:3002/api/promocion/${id}`;
    setDel(!del);
    fetch(url, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((json) => setPromocion(json.data || []));
  }

  function modifyItem() {
    event.preventDefault();
    const url = `http://localhost:3002/api/promocion/${id}`;
    const payload = {
      mie_1er_año: refs.mie_1er_año.current.value,
      mie_2do_año: refs.mie_2do_año.current.value,
      mie_3er_año: refs.mie_3er_año.current.value,
      mie_4to_año: refs.mie_4to_año.current.value,
      mie_5to_año: refs.mie_5to_año.current.value,
      aprobados_limpios_1er_año: refs.aprobados_limpios_1er_año.current.value,
      aprobados_limpios_2do_año: refs.aprobados_limpios_2do_año.current.value,
      aprobados_limpios_3er_año: refs.aprobados_limpios_3er_año.current.value,
      aprobados_limpios_4to_año: refs.aprobados_limpios_4to_año.current.value,
      aprobados_limpios_5to_año: refs.aprobados_limpios_5to_año.current.value,
      aprobados_con_2_1er_año: refs.aprobados_con_2_1er_año.current.value,
      aprobados_con_2_2do_año: refs.aprobados_con_2_2do_año.current.value,
      aprobados_con_2_3er_año: refs.aprobados_con_2_3er_año.current.value,
      aprobados_con_2_4to_año: refs.aprobados_con_2_4to_año.current.value,
      aprobados_con_2_5to_año: refs.aprobados_con_2_5to_año.current.value,
      aprobados_con_1_1er_año: refs.aprobados_con_1_1er_año.current.value,
      aprobados_con_1_2do_año: refs.aprobados_con_1_2do_año.current.value,
      aprobados_con_1_3er_año: refs.aprobados_con_1_3er_año.current.value,
      aprobados_con_1_4to_año: refs.aprobados_con_1_4to_año.current.value,
      aprobados_con_1_5to_año: refs.aprobados_con_1_5to_año.current.value,
      bajas_1er_año: refs.bajas_1er_año.current.value,
      bajas_2do_año: refs.bajas_2do_año.current.value,
      bajas_3er_año: refs.bajas_3er_año.current.value,
      bajas_4to_año: refs.bajas_4to_año.current.value,
      bajas_5to_año: refs.bajas_5to_año.current.value,
      curso_id: refs.curso_id.current.value,
    };

    fetch(url, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Error en la actualización");
        return res.json();
      })
      .then((json) => {
        setPromocion((prev) =>
          prev.map((item) => (item.id === id ? { ...item, ...payload } : item)),
        );
        setShowModal(false);
      })
      .catch((error) => {
        console.error("Error al modificar:", error);
      });

    setInsert(!insert);
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
      <div>
        {data.find((curso) => curso.id === curso_id)?.curso ||
          "Curso no encontrado"}
      </div>

      {(isAdmin || isDirective) && (
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
            onClick={() => setShowModal(true)}
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg "
          >
            Modificar
          </button>
        </div>
      )}

      {showModal && (
        <form onSubmit={modifyItem}>
          <div className="fixed inset-0 flex items-center justify-center gap-5 overflow-auto">
            <div className="bg-zinc-100 p-6 rounded-lg shadow-xl shadow-black/50 grid grid-cols-6 gap-5 max-w-11/12 max-h-11/12 overflow-auto">
              <h2 className="text-xl font-bold mb-4 col-span-6">
                Modificar Promoción
              </h2>

              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label htmlFor="mie_1er_año">Mie 1er año:</label>
                <Input
                  type="number"
                  inputName="mie_1er_año"
                  min="0"
                  ref={refs.mie_1er_año}
                  defaultValue={mie_1er_año}
                />
              </div>
              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label htmlFor="mie_2do_año">Mie 2do año:</label>
                <Input
                  type="number"
                  inputName="mie_2do_año"
                  min="0"
                  ref={refs.mie_2do_año}
                  defaultValue={mie_2do_año}
                />
              </div>
              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label htmlFor="mie_3ro_año">Mie 3ro año:</label>
                <Input
                  type="number"
                  inputName="mie_3ro_año"
                  min="0"
                  ref={refs.mie_3er_año}
                  defaultValue={mie_3er_año}
                />
              </div>
              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label htmlFor="mie_4to_año">Mie 4to año:</label>
                <Input
                  type="number"
                  inputName="mie_4to_año"
                  min="0"
                  ref={refs.mie_4to_año}
                  defaultValue={mie_4to_año}
                />
              </div>
              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label htmlFor="mie_5to_año">Mie 5to año:</label>
                <Input
                  type="number"
                  inputName="mie_5to_año"
                  min="0"
                  ref={refs.mie_5to_año}
                  defaultValue={mie_5to_año}
                />
              </div>

              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label htmlFor="aprobados_limpios_1ro">
                  Aprobados limpios 1ro
                </label>
                <Input
                  type="number"
                  inputName="aprobados_limpios_1ro"
                  min="0"
                  ref={refs.aprobados_limpios_1er_año}
                  defaultValue={aprobados_limpios_1er_año}
                />
              </div>
              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label htmlFor="aprobados_limpios_2do">
                  Aprobados limpios 2do
                </label>
                <Input
                  type="number"
                  inputName="aprobados_limpios_2do"
                  min="0"
                  ref={refs.aprobados_limpios_2do_año}
                  defaultValue={aprobados_limpios_2do_año}
                />
              </div>
              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label htmlFor="aprobados_limpios_3ro">
                  Aprobados limpios 3ro
                </label>
                <Input
                  type="number"
                  inputName="aprobados_limpios_3ro"
                  min="0"
                  ref={refs.aprobados_limpios_3er_año}
                  defaultValue={aprobados_limpios_3er_año}
                />
              </div>
              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label htmlFor="aprobados_limpios_4to">
                  Aprobados limpios 4to
                </label>
                <Input
                  type="number"
                  inputName="aprobados_limpios_4to"
                  min="0"
                  ref={refs.aprobados_limpios_4to_año}
                  defaultValue={aprobados_limpios_4to_año}
                />
              </div>
              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label htmlFor="aprobados_limpios_5to">
                  Aprobados limpios 5to
                </label>
                <Input
                  type="number"
                  inputName="aprobados_limpios_5to"
                  min="0"
                  ref={refs.aprobados_limpios_5to_año}
                  defaultValue={aprobados_limpios_5to_año}
                />
              </div>

              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label htmlFor="aprobados_con_1_1ro">Aprobados con 1 1ro</label>
                <Input
                  type="number"
                  inputName="aprobados_con_1_1ro"
                  min="0"
                  ref={refs.aprobados_con_1_1er_año}
                  defaultValue={aprobados_con_1_1er_año}
                />
              </div>
              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label htmlFor="aprobados_con_1_2do">Aprobados con 1 2do</label>
                <Input
                  type="number"
                  inputName="aprobados_con_1_2do"
                  min="0"
                  ref={refs.aprobados_con_1_2do_año}
                  defaultValue={aprobados_con_1_2do_año}
                />
              </div>
              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label htmlFor="aprobados_con_1_3ro">Aprobados con 1 3ro</label>
                <Input
                  type="number"
                  inputName="aprobados_con_1_3ro"
                  min="0"
                  ref={refs.aprobados_con_1_3er_año}
                  defaultValue={aprobados_con_1_3er_año}
                />
              </div>
              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label htmlFor="aprobados_con_1_4to">Aprobados con 1 4to</label>
                <Input
                  type="number"
                  inputName="aprobados_con_1_4to"
                  min="0"
                  ref={refs.aprobados_con_1_4to_año}
                  defaultValue={aprobados_con_1_4to_año}
                />
              </div>
              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label htmlFor="aprobados_con_1_5to">Aprobados con 1 5to</label>
                <Input
                  type="number"
                  inputName="aprobados_con_1_5to"
                  min="0"
                  ref={refs.aprobados_con_1_5to_año}
                  defaultValue={aprobados_con_1_5to_año}
                />
              </div>

              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label htmlFor="aprobados_con_2_1ro">Aprobados con 2 1ro</label>
                <Input
                  type="number"
                  inputName="aprobados_con_2_1ro"
                  min="0"
                  ref={refs.aprobados_con_2_1er_año}
                  defaultValue={aprobados_con_2_1er_año}
                />
              </div>
              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label htmlFor="aprobados_con_2_2do">Aprobados con 2 2do</label>
                <Input
                  type="number"
                  inputName="aprobados_con_2_2do"
                  min="0"
                  ref={refs.aprobados_con_2_2do_año}
                  defaultValue={aprobados_con_2_2do_año}
                />
              </div>
              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label htmlFor="aprobados_con_2_3ro">Aprobados con 2 3ro</label>
                <Input
                  type="number"
                  inputName="aprobados_con_2_3ro"
                  min="0"
                  ref={refs.aprobados_con_2_3er_año}
                  defaultValue={aprobados_con_2_3er_año}
                />
              </div>
              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label htmlFor="aprobados_con_2_4to">Aprobados con 2 4to</label>
                <Input
                  type="number"
                  inputName="aprobados_con_2_4to"
                  min="0"
                  ref={refs.aprobados_con_2_4to_año}
                  defaultValue={aprobados_con_2_4to_año}
                />
              </div>
              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label htmlFor="aprobados_con_2_5to">Aprobados con 2 5to</label>
                <Input
                  type="number"
                  inputName="aprobados_con_2_5to"
                  min="0"
                  ref={refs.aprobados_con_2_5to_año}
                  defaultValue={aprobados_con_2_5to_año}
                />
              </div>

              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label htmlFor="bajas_1ro">Bajas 1ro</label>
                <Input
                  type="number"
                  inputName="bajas_1ro"
                  min="0"
                  ref={refs.bajas_1er_año}
                  defaultValue={bajas_1er_año}
                />
              </div>
              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label htmlFor="bajas_2do">Bajas 2do</label>
                <Input
                  type="number"
                  inputName="bajas_2do"
                  min="0"
                  ref={refs.bajas_2do_año}
                  defaultValue={bajas_2do_año}
                />
              </div>
              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label htmlFor="bajas_3ro">Bajas 3ro</label>
                <Input
                  type="number"
                  inputName="bajas_3ro"
                  min="0"
                  ref={refs.bajas_3er_año}
                  defaultValue={bajas_3er_año}
                />
              </div>
              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label htmlFor="bajas_4to">Bajas 4to</label>
                <Input
                  type="number"
                  inputName="bajas_4to"
                  min="0"
                  ref={refs.bajas_4to_año}
                  defaultValue={bajas_4to_año}
                />
              </div>
              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label htmlFor="bajas_5to">Bajas 5to</label>
                <Input
                  type="number"
                  inputName="bajas_5to"
                  min="0"
                  ref={refs.bajas_5to_año}
                  defaultValue={bajas_5to_año}
                />
              </div>

              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label>Curso:</label>
                <Select defaultValue={curso_id} ref={refs.curso_id}>
                  {data?.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.curso || c.nombre || `Curso ${c.id}`}
                    </option>
                  ))}
                </Select>
              </div>

              <button
                type="submit"
                className="bg-blue-500 row-start-7 col-start-3 text-white px-4 py-2 my-5 rounded hover:bg-blue-600"
              >
                Guardar Cambios
              </button>
              <button
                type="button"
                className="bg-zinc-500 row-start-7 col-start-4 text-white px-4 py-2 my-5 mx-5 rounded hover:bg-red-600"
                onClick={() => setShowModal(false)}
              >
                Cancelar
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
