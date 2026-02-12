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
    <div className="mb-5 border border-black w-11/12 flex flex-col items-center justify-center shadow-lg shadow-zinc-950/60 p-5 rounded-lg">
      <h1 className="font-bold">Nombre de usuario:</h1>
      <div>{usuario}</div>
      <h1 className="font-bold">Nombre/s:</h1>
      <div>{nombres}</div>
      <h1 className="font-bold">Primer apellido:</h1>
      <div>{primer_apellido}</div>
      <h1 className="font-bold">Segundo apellido:</h1>
      <div>{segundo_apellido}</div>
      <h1 className="font-bold">Rol:</h1>
      <div>{rol}</div>

      {(isAdmin || isDirective) && <div className="flex flex-row gap-4 mt-4">
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
      </div>}

      {/*Modal Zone */}
      {showModal && (
        <form onSubmit={modifyItem}>
          <div className="fixed inset-0 flex items-center justify-center gap-5 overflow-auto">
            <div className="bg-zinc-100 p-6 rounded-lg shadow-xl shadow-black/50 grid grid-cols-2 gap-5 max-w-11/12 max-h-11/12 overflow-auto">
              <h2 className="text-xl font-bold mb-4 col-span-2">
                Modificar Usuario
              </h2>

              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label htmlFor="usuario">Usuario:</label>
                <Input
                  type="text"
                  inputName="usuario"
                  defaultValue={usuario}
                  ref={newUsuarioRef}
                />
              </div>

              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label htmlFor="contraseña">Contraseña:</label>
                <Input
                  type="password"
                  inputName="contraseña"
                  defaultValue={contraseña}
                  ref={newContraseñaRef}
                />
              </div>

              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label htmlFor="nombres">Nombre/s:</label>
                <Input
                  type="text"
                  inputName="nombres"
                  defaultValue={nombres}
                  ref={newNombresRef}
                />
              </div>

              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label htmlFor="primer_apellido">Primer apellido:</label>
                <Input
                  type="text"
                  inputName="primer_apellido"
                  defaultValue={primer_apellido}
                  ref={newPrimerApellidoRef}
                />
              </div>

              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label htmlFor="segundo_apellido">Segundo apellido:</label>
                <Input
                  type="text"
                  inputName="segundo_apellido"
                  defaultValue={segundo_apellido}
                  ref={newSegundoApellidoRef}
                />
              </div>

              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label htmlFor="rol">Rol:</label>
                <Select inputName="rol" ref={newRolRef} defaultValue={rol}>
                  <option value="admin">Administrador</option>
                  <option value="directivo">Directivo</option>
                  <option value="invitado">Invitado</option>
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
