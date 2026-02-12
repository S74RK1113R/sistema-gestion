import { tableUse } from "../../context/TablesContext";
import { useState, useRef } from "react";
import Input from "../Input";
import Select from "../Select";
import { useUser } from "../../context/UserContext";

export default function UsuariosItem({
  usuario,
  contraseña,
  nombres,
  primer_apellido,
  segundo_apellido,
  rol,
  id,
}) {
  const { setUsuario, del, setDel, insert, setInsert, setNotification, setMessageSucces, setNotificationType } = tableUse();

  const [showModal, setShowModal] = useState(false);
  const { isAdmin, isDirective } = useUser();
  const [showDeleteModal,setShowDeleteModal] =useState()
  const newUsuarioRef = useRef();
  const newNombresRef = useRef();
  const newPrimerApellidoRef = useRef();
  const newSegundoApellidoRef = useRef();
  const newRolRef = useRef();
  const newContraseñaRef = useRef();

  function deleteItem(id) {
    const url = `http://localhost:3002/api/usuarios/${id}`;
    setDel(!del);

    fetch(url, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((json) => {
        setUsuario(json.data || []);
        setMessageSucces("Usuario eliminado");
        setNotificationType('delete');
        setNotification(true);
      });
  }

  function modifyItem() {
    event.preventDefault();
    const url = `http://localhost:3002/api/usuarios/${id}`;
    const newUsuario = {
      usuario: newUsuarioRef.current.value,
      contraseña: newContraseñaRef.current.value,
      nombres: newNombresRef.current.value,
      primer_apellido: newPrimerApellidoRef.current.value,
      segundo_apellido: newSegundoApellidoRef.current.value,
      rol: newRolRef.current.value,
    };

    fetch(url, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      // Send your data in the request body as JSON
      body: JSON.stringify(newUsuario),
    })
      .then((res) => {
        if (!res.ok) {
          return res.json();
        }
        // handle error
      })
      .then((json) => {
        setUsuario(json?.data || []);
        setMessageSucces("Usuario actualizado");
        setNotificationType('insert');
        setNotification(true);
        setInsert(!insert);
      });
  }

  return (
    <div className="mb-6 border border-gray-300 w-full max-w-2xl mx-auto flex flex-col items-stretch justify-start shadow-md hover:shadow-lg transition-shadow bg-white p-6 rounded-lg">
      <div className="grid grid-cols-2 gap-6">
        <div className="flex flex-col gap-1">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Usuario</p>
          <p className="text-sm font-medium text-slate-800">{usuario}</p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Nombre/s</p>
          <p className="text-sm font-medium text-slate-800">{nombres}</p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Primer Apellido</p>
          <p className="text-sm font-medium text-slate-800">{primer_apellido}</p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Segundo Apellido</p>
          <p className="text-sm font-medium text-slate-800">{segundo_apellido}</p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Rol</p>
          <p className="text-sm font-medium text-slate-800">{rol}</p>
        </div>
      </div>

      {(isAdmin || isDirective) && <div className="flex flex-row gap-3 mt-6 pt-6 border-t border-gray-200">
        <button
          onClick={() => {
            setShowDeleteModal(true);
          }}
          className="flex-1 bg-red-500 hover:bg-red-600 text-white px-4 py-2.5 rounded-lg font-medium text-sm transition-colors shadow-sm"
        >
          Eliminar
        </button>

        <button
          onClick={() => setShowModal(true)}
          className="flex-1 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2.5 rounded-lg font-medium text-sm transition-colors shadow-sm"
        >
          Modificar
        </button>
      </div>}

      {/*Modal Zone */}
      {showModal && (
        <form onSubmit={modifyItem}>
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-lg shadow-2xl grid grid-cols-2 gap-6 max-w-2xl max-h-[90vh] overflow-auto border border-gray-200">
              <h2 className="text-2xl font-semibold text-slate-800 col-span-2 pb-4 border-b border-gray-200">
                Modificar Usuario
              </h2>

              <div className="flex flex-col justify-start gap-2">
                <label htmlFor="usuario" className="text-sm font-medium text-gray-700">Usuario:</label>
                <Input
                  type="text"
                  inputName="usuario"
                  defaultValue={usuario}
                  ref={newUsuarioRef}
                />
              </div>

              <div className="flex flex-col justify-start gap-2">
                <label htmlFor="contraseña" className="text-sm font-medium text-gray-700">Contraseña:</label>
                <Input
                  type="password"
                  inputName="contraseña"
                  defaultValue={contraseña}
                  ref={newContraseñaRef}
                />
              </div>

              <div className="flex flex-col justify-start gap-2">
                <label htmlFor="nombres" className="text-sm font-medium text-gray-700">Nombre/s:</label>
                <Input
                  type="text"
                  inputName="nombres"
                  defaultValue={nombres}
                  ref={newNombresRef}
                />
              </div>

              <div className="flex flex-col justify-start gap-2">
                <label htmlFor="primer_apellido" className="text-sm font-medium text-gray-700">Primer Apellido:</label>
                <Input
                  type="text"
                  inputName="primer_apellido"
                  defaultValue={primer_apellido}
                  ref={newPrimerApellidoRef}
                />
              </div>

              <div className="flex flex-col justify-start gap-2">
                <label htmlFor="segundo_apellido" className="text-sm font-medium text-gray-700">Segundo Apellido:</label>
                <Input
                  type="text"
                  inputName="segundo_apellido"
                  defaultValue={segundo_apellido}
                  ref={newSegundoApellidoRef}
                />
              </div>

              <div className="flex flex-col justify-start gap-2">
                <label htmlFor="rol" className="text-sm font-medium text-gray-700">Rol:</label>
                <Select inputName="rol" ref={newRolRef} defaultValue={rol}>
                  <option value="admin">Administrador</option>
                  <option value="directivo">Directivo</option>
                  <option value="invitado">Invitado</option>
                </Select>
              </div>

              <button
                type="submit"
                className="col-span-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 mt-6 rounded-lg font-medium transition-colors shadow-md"
              >
                Guardar Cambios
              </button>
              <button
                type="button"
                className="col-span-2 bg-gray-400 hover:bg-gray-500 text-white px-6 py-3 rounded-lg font-medium transition-colors shadow-md"
                onClick={() => setShowModal(false)}
              >
                Cancelar
              </button>
            </div>
          </div>
        </form>
      )}

       {showDeleteModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white flex flex-col items-center justify-center gap-6 shadow-2xl p-8 rounded-lg border border-gray-200 max-w-sm">
            <h1 className="text-xl font-semibold text-slate-800 text-center">¿Está seguro que desea eliminar este usuario?</h1>
            <div className="flex gap-4 w-full">
              <button
                onClick={() => {
                  deleteItem(id);
                }}
                className="flex-1 bg-red-600 hover:bg-red-700 text-white px-4 py-3 rounded-lg font-medium transition-colors shadow-md"
              >
                Eliminar
              </button>
              <button
                onClick={() => setShowDeleteModal(false)}
                className="flex-1 bg-gray-400 hover:bg-gray-500 text-white px-4 py-3 rounded-lg font-medium transition-colors shadow-md"
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
