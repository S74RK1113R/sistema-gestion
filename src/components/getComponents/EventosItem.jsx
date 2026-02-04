import { tableUse } from "../../context/TablesContext";
import { useState, useRef } from "react";
import Input from "../Input";
import Select from "../Select";
import { useSelectFetch } from "../../hooks/useSelectFetch";

export default function EventosItem({
  año,
  titulo,
  nombre_evento,
  clasificacion,
  profesor_id,
  profesor_autor_id2,
  profesor_autor_id3,
  profesor_autor_id4,
  profesor_autor_id5,
  id,
}) {
  const { setEventos, del, setDel, insert, setInsert } = tableUse();
  const { data: profesoresData } = useSelectFetch(
    "http://localhost:3002/api/profesor",
  );
  const [showModal, setShowModal] = useState(false);

  const refs = {
    año: useRef(),
    titulo: useRef(),
    nombre_evento: useRef(),
    clasificacion: useRef(),
    profesor_id: useRef(),
    profesor_autor_id2: useRef(),
    profesor_autor_id3: useRef(),
    profesor_autor_id4: useRef(),
    profesor_autor_id5: useRef(),
  };

  function deleteItem(id) {
    const url = `http://localhost:3002/api/eventos/${id}`;
    setDel(!del);

    fetch(url, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((json) => setEventos(json.data || []));
  }

  function modifyItem() {
    event.preventDefault();
    const url = `http://localhost:3002/api/eventos/${id}`;
    const payload = {
      año: refs.año.current.value,
      titulo: refs.titulo.current.value,
      nombre_evento: refs.nombre_evento.current.value,
      clasificacion: refs.clasificacion.current.value,
      profesor_id: refs.profesor_id.current.value,
      profesor_autor_id2: refs.profesor_autor_id2.current.value,
      profesor_autor_id3: refs.profesor_autor_id3.current.value,
      profesor_autor_id4: refs.profesor_autor_id4.current.value,
      profesor_autor_id5: refs.profesor_autor_id5.current.value,
    };

    fetch(url, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload),
    })
      .then((res) => {
        if (!res.ok) return res.json();
      })
      .then((json) => setEventos(json?.data || []));

    setInsert(!insert);
  }

  return (
    <div className="border border-black w-11/12 flex flex-col items-center justify-center shadow-lg shadow-zinc-950/60 p-5 rounded-lg">
      <h1 className="font-bold">Año:</h1>
      <div>{año}</div>
      <h1 className="font-bold">Título:</h1>
      <div>{titulo}</div>
      <h1 className="font-bold">Nombre del evento:</h1>
      <div>{nombre_evento}</div>
      <h1 className="font-bold">Clasificación:</h1>
      <div>{clasificacion}</div>
      <h1 className="font-bold">Nombre del profesor 1:</h1>
      <div>{profesor_id}</div>
      {profesor_autor_id2 != 0 && (
        <div className="flex items-center flex-col">
          <h1 className="font-bold">Nombre del profesor 2:</h1>
          <div>{profesor_autor_id2}</div>
        </div>
      )}

      {profesor_autor_id3 != 0 && (
        <div className="flex items-center flex-col">
          <h1 className="font-bold">Nombre del profesor 3:</h1>
          <div>{profesor_autor_id3}</div>
        </div>
      )}

      {profesor_autor_id4 != 0 && (
        <div className="flex items-center flex-col">
          <h1 className="font-bold">Nombre del profesor 4:</h1>
          <div>{profesor_autor_id4}</div>
        </div>
      )}

      {profesor_autor_id5 != 0 && (
        <div className="flex items-center flex-col">
          <h1 className="font-bold">Nombre del profesor 5:</h1>
          <div>{profesor_autor_id5}</div>
        </div>
      )}

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

      {showModal && (
        <form onSubmit={modifyItem}>
          <div className="fixed inset-0 flex items-center justify-center gap-5 overflow-auto">
            <div className="bg-zinc-100 p-6 rounded-lg shadow-xl shadow-black/50 grid grid-cols-3 gap-5 max-w-11/12 max-h-11/12 overflow-auto">
              <h2 className="text-xl font-bold col-span-3">Modificar Evento</h2>

              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label>Año:</label>
                <Input type="number" defaultValue={año} ref={refs.año} />
              </div>

              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label>Título:</label>
                <Input type="text" defaultValue={titulo} ref={refs.titulo} />
              </div>

              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label>Nombre del evento:</label>
                <Input
                  type="text"
                  defaultValue={nombre_evento}
                  ref={refs.nombre_evento}
                />
              </div>

              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label htmlFor="clasificacion">Clasificación del evento:</label>
                <Select
                  inputName="clasificacion"
                  ref={refs.clasificacion}
                  defaultValue={clasificacion}
                >
                  <option value="provincial">Provincial</option>
                  <option value="municipal">Municipal</option>
                  <option value="nacional">Nacional</option>
                  <option value="internacional">Internacional</option>
                  <option value="base">Base</option>
                </Select>
              </div>

              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label>Profesor 1:</label>
                <Select defaultValue={profesor_id} ref={refs.profesor_id}>
                  {profesoresData?.map((p) => (
                    <option
                      key={p.id}
                      value={p.id}
                    >{`${p.nombres} ${p.primer_apellido}`}</option>
                  ))}
                </Select>
              </div>

              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label>Profesor 2:</label>
                <Select
                  defaultValue={profesor_autor_id2}
                  ref={refs.profesor_autor_id2}
                >
                  <option value="0" selected>
                    --Sin profesor--
                  </option>
                  {profesoresData?.map((p) => (
                    <option
                      key={p.id}
                      value={p.id}
                    >{`${p.nombres} ${p.primer_apellido}`}</option>
                  ))}
                </Select>
              </div>
              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label>Profesor 3:</label>
                <Select
                  defaultValue={profesor_autor_id3}
                  ref={refs.profesor_autor_id3}
                >
                  <option value="0" selected>
                    --Sin profesor--
                  </option>
                  {profesoresData?.map((p) => (
                    <option
                      key={p.id}
                      value={p.id}
                    >{`${p.nombres} ${p.primer_apellido}`}</option>
                  ))}
                </Select>
              </div>
              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label>Profesor 4:</label>
                <Select
                  defaultValue={profesor_autor_id4}
                  ref={refs.profesor_autor_id4}
                >
                  <option value="0" selected>
                    --Sin profesor--
                  </option>
                  {profesoresData?.map((p) => (
                    <option
                      key={p.id}
                      value={p.id}
                    >{`${p.nombres} ${p.primer_apellido}`}</option>
                  ))}
                </Select>
              </div>
              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label>Profesor 5:</label>
                <Select
                  defaultValue={profesor_autor_id5}
                  ref={refs.profesor_autor_id5}
                >
                  <option value="0" selected>
                    --Sin profesor--
                  </option>
                  {profesoresData?.map((p) => (
                    <option
                      key={p.id}
                      value={p.id}
                    >{`${p.nombres} ${p.primer_apellido}`}</option>
                  ))}
                </Select>
              </div>

              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 my-5 rounded hover:bg-blue-600"
              >
                Guardar Cambios
              </button>
              <button
                type="button"
                className="bg-zinc-500 text-white px-4 py-2 my-5 mx-5 rounded hover:bg-red-600"
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
