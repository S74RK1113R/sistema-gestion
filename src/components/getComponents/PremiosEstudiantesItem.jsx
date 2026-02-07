import { tableUse } from "../../context/TablesContext";
import { useState, useRef } from "react";
import Input from "../Input";
import { useUser } from "../../context/UserContext";

export default function PremiosEstudiantesItem({ nombre, año, cantidad, id }) {
  const { setPremiosEstudiantes, del, setDel, insert, setInsert } = tableUse();
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal,setShowDeleteModal]=useState()
  const { isAdmin, isDirective } = useUser();

  const newNombreRef = useRef();
  const newAñoRef = useRef();
  const newCantidadRef = useRef();

  function deleteItem(id) {
    const url = `http://localhost:3002/api/premios_estudiante/${id}`;
    setDel(!del);

    fetch(url, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((json) => setPremiosEstudiantes(json.data || []));
  }

  function modifyItem() {
    event.preventDefault();
    const url = `http://localhost:3002/api/premios_estudiante/${id}`;
    const payload = {
      nombre: newNombreRef.current.value,
      año: newAñoRef.current.value,
      cantidad: newCantidadRef.current.value,
    };

    fetch(url, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload),
    })
      .then((res) => {
        if (!res.ok) return res.json();
      })
      .then((json) => setPremiosEstudiantes(json?.data || []));

    setInsert(!insert);
  }

  return (
    <div className="mb-5 border border-black w-11/12 flex flex-col items-center justify-center shadow-lg shadow-zinc-950/60 p-5 rounded-lg">
      <h1 className="font-bold">Nombre del premio:</h1>
      <div>{nombre}</div>
      <h1 className="font-bold">Año:</h1>
      <div>{año}</div>
      <h1 className="font-bold">Cantidad de premios:</h1>
      <div>{cantidad}</div>

      {(isAdmin || isDirective) && (
        <div className="flex flex-row gap-4 mt-4">
          <button
            onClick={() => {
              setShowDeleteModal(true);
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
                Modificar Premio Estudiante
              </h2>

              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label>Nombre del premio:</label>
                <Input type="text" defaultValue={nombre} ref={newNombreRef} />
              </div>

              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label>Año:</label>
                <Input type="number" defaultValue={año} ref={newAñoRef} />
              </div>

              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label>Cantidad:</label>
                <Input
                  type="number"
                  defaultValue={cantidad}
                  ref={newCantidadRef}
                />
              </div>

              <button
                type="submit"
                className="bg-blue-500 text-white px-4 row-start-4 py-2 my-5 rounded hover:bg-blue-600"
              >
                Guardar Cambios
              </button>
              <button
                type="button"
                className="bg-zinc-500 text-white px-4 row-start-4 py-2 my-5 mx-5 rounded hover:bg-red-600"
                onClick={() => setShowModal(false)}
              >
                Cancelar
              </button>
            </div>
          </div>
        </form>
      )}

      {showDeleteModal && (
        <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 flex flex-col items-center justify-center gap-5 overflow-auto shadow-xl shadow-black/60 bg-zinc-100 w-max h-max p-5 rounded-md">
          <h1 className="font-bold">¿Está seguro que quiere eliminar?</h1>
          <div className="flex gap-5">
            <button
              onClick={() => {
                deleteItem(id);
              }}
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
            >
              Borrar
            </button>
            <button
              onClick={() => setShowDeleteModal(false)}
              className="bg-zinc-500 hover:bg-zinc-600 text-white px-4 py-2 rounded-lg "
            >
              Cancelar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
