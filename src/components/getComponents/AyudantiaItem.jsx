import { tableUse } from "../../context/TablesContext";
import { useState, useRef } from "react";
import Input from "../Input";
import { useUser } from "../../context/UserContext";

export default function AyudantiaItem({
  id,
  educacion_superior_1er_año,
  educacion_superior_2do_año,
  educacion_superior_3er_año,
  educacion_superior_4to_año,
  educacion_superior_5to_año,
  educacion_media_1er_año,
  educacion_media_2do_año,
  educacion_media_3er_año,
  educacion_media_4to_año,
  educacion_media_5to_año,
  año_evaluacion,
}) {
  const { setAyudantia, del, setDel, insert, setInsert } = tableUse();
  const [showModal, setShowModal] = useState(false);
  const {isAdmin,isDirective} = useUser()
  

  const refs = {
    educacion_superior_1er_año: useRef(),
    educacion_superior_2do_año: useRef(),
    educacion_superior_3er_año: useRef(),
    educacion_superior_4to_año: useRef(),
    educacion_superior_5to_año: useRef(),
    educacion_media_1er_año: useRef(),
    educacion_media_2do_año: useRef(),
    educacion_media_3er_año: useRef(),
    educacion_media_4to_año: useRef(),
    educacion_media_5to_año: useRef(),
    año_evaluacion: useRef(),
  };

  function deleteItem(id) {
    const url = `http://localhost:3002/api/ayudantias/${id}`;
    setDel(!del);

    fetch(url, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((json) => setAyudantia(json.data || []));
  }

  function modifyItem() {
    event.preventDefault();
    const url = `http://localhost:3002/api/ayudantias/${id}`;
    const payload = {
      educacion_superior_1er_año: refs.educacion_superior_1er_año.current.value,
      educacion_superior_2do_año: refs.educacion_superior_2do_año.current.value,
      educacion_superior_3er_año: refs.educacion_superior_3er_año.current.value,
      educacion_superior_4to_año: refs.educacion_superior_4to_año.current.value,
      educacion_superior_5to_año: refs.educacion_superior_5to_año.current.value,
      educacion_media_1er_año: refs.educacion_media_1er_año.current.value,
      educacion_media_2do_año: refs.educacion_media_2do_año.current.value,
      educacion_media_3er_año: refs.educacion_media_3er_año.current.value,
      educacion_media_4to_año: refs.educacion_media_4to_año.current.value,
      educacion_media_5to_año: refs.educacion_media_5to_año.current.value,
      año_evaluacion: refs.año_evaluacion.current.value,
    };

    fetch(url, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload),
    })
      .then((res) => {
        if (!res.ok) return res.json();
      })
      .then((json) => setAyudantia(json?.data || []));

    setInsert(!insert);
  }

  return (
    <div className="mb-5 border border-black w-11/12 flex flex-col items-center justify-center shadow-lg shadow-zinc-950/60 p-5 rounded-lg">
      <h1 className="font-bold">Educación superior 1er año:</h1>
      <div>{educacion_superior_1er_año}</div>
      <h1 className="font-bold">Educación superior 2do año:</h1>
      <div>{educacion_superior_2do_año}</div>
      <h1 className="font-bold">Educación superior 3er año:</h1>
      <div>{educacion_superior_3er_año}</div>
      <h1 className="font-bold">Educación superior 4to año:</h1>
      <div>{educacion_superior_4to_año}</div>
      <h1 className="font-bold">Educación superior 5to año:</h1>
      <div>{educacion_superior_5to_año}</div>

      <h1 className="font-bold">Educación media 1er año:</h1>
      <div>{educacion_media_1er_año}</div>
      <h1 className="font-bold">Educación media 2do año:</h1>
      <div>{educacion_media_2do_año}</div>
      <h1 className="font-bold">Educación media 3er año:</h1>
      <div>{educacion_media_3er_año}</div>
      <h1 className="font-bold">Educación media 4to año:</h1>
      <div>{educacion_media_4to_año}</div>
      <h1 className="font-bold">Educación media 5to año:</h1>
      <div>{educacion_media_5to_año}</div>

      <h1 className="font-bold">Año de la evaluación:</h1>
      <div>{año_evaluacion}</div>

      {(isAdmin || isDirective) && <div className="flex flex-row gap-4 mt-4">
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
      </div>}

      {showModal && (
        <form onSubmit={modifyItem}>
          <div className="fixed inset-0 flex items-center justify-center gap-5 overflow-auto">
            <div className="bg-zinc-100 p-6 rounded-lg shadow-xl shadow-black/50 grid grid-cols-4 gap-5 max-w-11/12 max-h-11/12 overflow-auto">
              <h2 className="text-xl font-bold col-span-4">
                Modificar Ayudantía
              </h2>

              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label htmlFor="educacion_superior_1er_año">
                  Educación superior 1er año:
                </label>
                <Input
                  type="number"
                  inputName="educacion_superior_1er_año"
                  min="0"
                  ref={refs.educacion_superior_1er_año}
                  defaultValue={educacion_superior_1er_año}
                />
              </div>
              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label htmlFor="educacion_superior_2do_año">
                  Educación superior 2do año:
                </label>
                <Input
                  type="number"
                  inputName="educacion_superior_2do_año"
                  min="0"
                  ref={refs.educacion_superior_2do_año}
                  defaultValue={educacion_superior_2do_año}
                />
              </div>
              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label htmlFor="educacion_superior_3er_año">
                  Educación superior 3er año:
                </label>
                <Input
                  type="number"
                  inputName="educacion_superior_3er_año"
                  min="0"
                  ref={refs.educacion_superior_3er_año}
                  defaultValue={educacion_superior_3er_año}
                />
              </div>
              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label htmlFor="educacion_superior_4to_año">
                  Educación superior 4to año:
                </label>
                <Input
                  type="number"
                  inputName="educacion_superior_4to_año"
                  min="0"
                  ref={refs.educacion_superior_4to_año}
                  defaultValue={educacion_superior_4to_año}
                />
              </div>
              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label htmlFor="educacion_superior_5to_año">
                  Educación superior 5to año:
                </label>
                <Input
                  type="number"
                  inputName="educacion_superior_5to_año"
                  min="0"
                  ref={refs.educacion_superior_5to_año}
                  defaultValue={educacion_superior_5to_año}
                />
              </div>

              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label htmlFor="educacion_media_1er_año">
                  Educación media 1er año:
                </label>
                <Input
                  type="number"
                  inputName="educacion_media_1er_año"
                  min="0"
                  ref={refs.educacion_media_1er_año}
                  defaultValue={educacion_media_1er_año}
                />
              </div>
              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label htmlFor="educacion_media_2do_año">
                  Educación media 2do año:
                </label>
                <Input
                  type="number"
                  inputName="educacion_media_2do_año"
                  min="0"
                  ref={refs.educacion_media_2do_año}
                  defaultValue={educacion_media_2do_año}
                />
              </div>
              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label htmlFor="educacion_media_3er_año">
                  Educación media 3ro año:
                </label>
                <Input
                  type="number"
                  inputName="educacion_media_3er_año"
                  min="0"
                  ref={refs.educacion_media_3er_año}
                  defaultValue={educacion_media_3er_año}
                />
              </div>
              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label htmlFor="educacion_media_4to_año">
                  Educación media 4to año:
                </label>
                <Input
                  type="number"
                  inputName="educacion_media_4to_año"
                  min="0"
                  ref={refs.educacion_media_4to_año}
                  defaultValue={educacion_media_4to_año}
                />
              </div>
              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label htmlFor="educacion_media_5to_año">
                  Educación media 5to año:
                </label>
                <Input
                  type="number"
                  inputName="educacion_media_5to_año"
                  min="0"
                  ref={refs.educacion_media_5to_año}
                  defaultValue={educacion_media_5to_año}
                />
              </div>

              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label htmlFor="año_evaluacion">Año de la evaluación:</label>
                <Input
                  type="number"
                  inputName="año_evaluacion"
                  min="0"
                  ref={refs.año_evaluacion}
                  defaultValue={año_evaluacion}
                />
              </div>

              <button
                type="submit"
                className="bg-blue-500 text-white row-start-5 col-start-2 px-4 py-2 my-5 rounded hover:bg-blue-600"
              >
                Guardar Cambios
              </button>
              <button
                type="button"
                className="bg-zinc-500 text-white row-start-5 col-start-3 px-4 py-2 my-5 mx-5 rounded hover:bg-red-600"
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
