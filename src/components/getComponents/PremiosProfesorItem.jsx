import { tableUse } from "../../context/TablesContext";
import { useState, useRef } from "react";
import Input from "../Input";
import Select from "../Select";
import { useSelectFetch } from "../../hooks/useSelectFetch";
import { useUser } from "../../context/UserContext";

export default function PremiosProfesorItem({
  profesor_id,
  nombre_premio,
  año,
  id,
}) {
  const { setPremiosProfesor, del, setDel, insert, setInsert } = tableUse();
  const { data: profesores } = useSelectFetch(
    "http://localhost:3002/api/profesor",
  );
  const [showModal, setShowModal] = useState(false);
  const { isAdmin, isDirective } = useUser();

  const newProfesorRef = useRef();
  const newNombrePremioRef = useRef();
  const newAñoRef = useRef();

  function deleteItem(id) {
    const url = `http://localhost:3002/api/premios_profesor/${id}`;
    setDel(!del);

    fetch(url, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((json) => setPremiosProfesor(json.data || []));
  }

  function modifyItem() {
    event.preventDefault();
    const url = `http://localhost:3002/api/premios_profesor/${id}`;
    const payload = {
      profesor_id: newProfesorRef.current.value,
      nombre_premio: newNombrePremioRef.current.value,
      año: newAñoRef.current.value,
    };

    fetch(url, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload),
    })
      .then((res) => {
        if (!res.ok) return res.json();
      })
      .then((json) => setPremiosProfesor(json?.data || []));

    setInsert(!insert);
  }

  return (
    <div className="mb-5 border border-black w-11/12 flex flex-col items-center justify-center shadow-lg shadow-zinc-950/60 p-5 rounded-lg">
      <h1 className="font-bold">Nombre del profesor:</h1>
      <div>{profesor_id}</div>
      <h1 className="font-bold">Nombre del premio:</h1>
      <div>{nombre_premio}</div>
      <h1 className="font-bold">Año:</h1>
      <div>{año}</div>

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
            <div className="bg-zinc-100 p-6 rounded-lg shadow-xl shadow-black/50 grid grid-cols-2 gap-5 max-w-11/12 max-h-11/12 overflow-auto">
              <h2 className="text-xl font-bold col-span-2">
                Modificar Premio Profesor
              </h2>

              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label>Profesor:</label>
                <Select defaultValue={profesor_id} ref={newProfesorRef}>
                  {profesores?.map((p) => (
                    <option
                      key={p.id}
                      value={p.id}
                    >{`${p.nombres} ${p.primer_apellido}`}</option>
                  ))}
                </Select>
              </div>

              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label>Nombre del premio:</label>
                <Input
                  type="text"
                  defaultValue={nombre_premio}
                  ref={newNombrePremioRef}
                />
              </div>

              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label>Año:</label>
                <Input type="number" defaultValue={año} ref={newAñoRef} />
              </div>

              <button
                type="submit"
                className="bg-blue-500 row-start-4 text-white px-4 py-2 my-5 rounded hover:bg-blue-600"
              >
                Guardar Cambios
              </button>
              <button
                type="button"
                className="bg-zinc-500 row-start-4 text-white px-4 py-2 my-5 mx-5 rounded hover:bg-red-600"
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
