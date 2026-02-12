import { tableUse } from "../../context/TablesContext";
import Input from "../Input";
import Select from "../Select";
import { useRef } from "react";

export default function UsuariosForm() {
  const { setUsuario, setInsert, insert, setMessageSucces, setNotification, setNotificationType } = tableUse();

  const usuarioRef = useRef();
  const contraseñaRef = useRef();
  const nombresRef = useRef();
  const primer_apellidoRef = useRef();
  const segundo_apellidoRef = useRef();
  const rolRef = useRef();

  function erraseInput() {
    usuarioRef.current.value;
    contraseñaRef.current.value;
    nombresRef.current.value;
    primer_apellidoRef.current.value;
    segundo_apellidoRef.current.value;
    rolRef.current.value;
  }

  function handleSubmit() {
    event.preventDefault();

    const usuarios = {
      usuario: usuarioRef.current.value,
      contraseña: contraseñaRef.current.value,
      nombres: nombresRef.current.value,
      primer_apellido: primer_apellidoRef.current.value,
      segundo_apellido: segundo_apellidoRef.current.value,
      rol: rolRef.current.value,
    };

    erraseInput();

    const url = "http://localhost:3002/api/usuarios";
    fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      // Send your data in the request body as JSON
      body: JSON.stringify(usuarios),
    })
      .then((res) => {
        if (!res.ok) {
          return res.json();
        }
        // handle error
      })
      .then((json) => {
        setUsuario(json?.data || []);
        setMessageSucces("Usuario insertado");
        setNotificationType('insert');
        setNotification(true);
      });

    setInsert(!insert);
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-6 p-2">
          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="usuario" className="text-sm font-semibold text-gray-700">Usuario:</label>
            <Input type="text" inputName="usuario" ref={usuarioRef} placeholder="Nombre de usuario" />
          </div>

          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="contraseña" className="text-sm font-semibold text-gray-700">Contraseña:</label>
            <Input type="password" inputName="contraseña" ref={contraseñaRef} placeholder="Contraseña segura" />
          </div>

          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="nombres" className="text-sm font-semibold text-gray-700">Nombre/s:</label>
            <Input type="text" inputName="nombres" ref={nombresRef} placeholder="Nombres" />
          </div>

          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="primer_apellido" className="text-sm font-semibold text-gray-700">Primer Apellido:</label>
            <Input type="text" inputName="primer_apellido" ref={primer_apellidoRef} placeholder="Primer apellido" />
          </div>

          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="segundo_apellido" className="text-sm font-semibold text-gray-700">Segundo Apellido:</label>
            <Input type="text" inputName="segundo_apellido" ref={segundo_apellidoRef} placeholder="Segundo apellido" />
          </div>

          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="rol" className="text-sm font-semibold text-gray-700">Rol:</label>
            <Select inputName="rol" ref={rolRef}>
              <option value="">Seleccionar rol...</option>
              <option value="admin">Administrador</option>
              <option value="directivo">Directivo</option>
              <option value="invitado">Invitado</option>
            </Select>
          </div>

          <button
            type="submit"
            className="col-span-2 bg-emerald-600 hover:bg-emerald-700 px-6 py-3 rounded-lg text-white font-semibold mt-4 transition-colors shadow-md"
          >
            Crear Usuario
          </button>
        </div>
      </form>
    </div>
  );
}
