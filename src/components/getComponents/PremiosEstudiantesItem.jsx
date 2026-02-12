import { tableUse } from "../../context/TablesContext";
import { useState, useRef } from "react";
import Input from "../Input";
import { useUser } from "../../context/UserContext";

export default function PremiosEstudiantesItem({ nombre, año,nombres,primer_apellido,segundo_apellido, id }) {
  const { setPremiosEstudiantes, del, setDel, insert, setInsert, setNotification, setMessageSucces, setNotificationType } = tableUse();
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal,setShowDeleteModal]=useState()
  const { isAdmin, isDirective } = useUser();

  const newNombreRef = useRef();
  const newAñoRef = useRef();
  const newNombresRef = useRef()
  const newPrimerApellidoRef = useRef()
  const newSegundoApellidoRef = useRef()

  function deleteItem(id) {
    const url = `http://localhost:3002/api/premios_estudiante/${id}`;
    setDel(!del);

    fetch(url, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((json) => {
        setPremiosEstudiantes(json.data || []);
        setMessageSucces("Premio de estudiante eliminado");
        setNotificationType('delete');
        setNotification(true);
      });
  }

  function modifyItem() {
    event.preventDefault();
    const url = `http://localhost:3002/api/premios_estudiante/${id}`;
    const payload = {
      nombre: newNombreRef.current.value,
      nombres:newNombreRef.current.value,
      primer_apellido:newPrimerApellidoRef.current.value,
      segundo_apellido:newSegundoApellidoRef.current.value,
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
      .then((json) => {
        setPremiosEstudiantes(json?.data || []);
        setMessageSucces("Premio de estudiante actualizado");
        setNotificationType('insert');
        setNotification(true);
        setInsert(!insert)
      });

    setInsert(!insert);
  }

  return (
    <div className="border border-gray-300 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow p-6">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-xs font-semibold text-gray-500">Premio</p>
          <p className="text-sm font-medium text-gray-900">{nombre}</p>
        </div>
        <div>
          <p className="text-xs font-semibold text-gray-500">Nombres</p>
          <p className="text-sm font-medium text-gray-900">{nombres}</p>
        </div>
        <div>
          <p className="text-xs font-semibold text-gray-500">Primer apellido</p>
          <p className="text-sm font-medium text-gray-900">{primer_apellido}</p>
        </div>
        <div>
          <p className="text-xs font-semibold text-gray-500">Segundo apellido</p>
          <p className="text-sm font-medium text-gray-900">{segundo_apellido}</p>
        </div>
        <div>
          <p className="text-xs font-semibold text-gray-500">Año</p>
          <p className="text-sm font-medium text-gray-900">{año}</p>
        </div>
      </div>

      {(isAdmin || isDirective) && (
        <div className="flex flex-row gap-3 mt-6">
          <button
            onClick={() => {
              setShowDeleteModal(true);
            }}
            className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
          >
            Eliminar
          </button>

          <button
            onClick={() => setShowModal(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
          >
            Modificar
          </button>
        </div>
      )}

      {showModal && (
        <form onSubmit={modifyItem}>
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center backdrop-blur-sm z-50">
            <div className="bg-white p-8 rounded-lg shadow-2xl grid grid-cols-2 gap-5 max-w-lg w-full mx-4 max-h-96 overflow-y-auto">
              <h2 className="text-xl font-bold col-span-2">
                Modificar Premio Estudiante
              </h2>

              <div className="flex flex-col gap-2">
                <label htmlFor="nombre" className="text-sm font-semibold text-gray-700">Nombre del premio:</label>
                <Input type="text" inputName={"nombre"} defaultValue={nombre} ref={newNombreRef} placeholder="Ej: Beca Nacional" />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="nombres" className="text-sm font-semibold text-gray-700">Nombres del estudiante:</label>
                <Input type="text" inputName={"nombres"} defaultValue={nombres} ref={newNombresRef} placeholder="Ej: Juan Carlos" />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="primer_apellido" className="text-sm font-semibold text-gray-700">Primer apellido:</label>
                <Input type="text" inputName={"primer_apellido"} defaultValue={primer_apellido} ref={newPrimerApellidoRef} placeholder="Ej: García" />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="segundo_apellido" className="text-sm font-semibold text-gray-700">Segundo apellido:</label>
                <Input type="text" inputName={"segundo_apellido"} defaultValue={segundo_apellido} ref={newSegundoApellidoRef} placeholder="Ej: Martínez" />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="año" className="text-sm font-semibold text-gray-700">Año:</label>
                <Input type="number" inputName={"año"} defaultValue={año} ref={newAñoRef} placeholder="2024" />
              </div>

              <div className="col-span-2 flex gap-3 mt-4">
                <button
                  type="submit"
                  className="flex-1 bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors"
                >
                  Guardar
                </button>
                <button
                  type="button"
                  className="flex-1 bg-gray-300 text-gray-900 px-4 py-2 rounded-lg hover:bg-gray-400 transition-colors"
                  onClick={() => setShowModal(false)}
                >
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        </form>
      )}

      {showDeleteModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center backdrop-blur-sm z-50">
          <div className="bg-white p-6 rounded-lg shadow-2xl max-w-sm w-full mx-4">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Confirmar eliminación</h2>
            <p className="text-gray-600 mb-6">¿Está seguro que desea eliminar este premio?</p>
            <div className="flex gap-3">
              <button
                onClick={() => {
                  deleteItem(id);
                }}
                className="flex-1 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
              >
                Eliminar
              </button>
              <button
                onClick={() => setShowDeleteModal(false)}
                className="flex-1 bg-gray-300 text-gray-900 px-4 py-2 rounded-lg hover:bg-gray-400 transition-colors"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
