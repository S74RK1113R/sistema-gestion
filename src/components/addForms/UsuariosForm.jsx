import Input from "../Input";
import Select from "../Select";

export default function UsuariosForm() {
  return (
    <div>
      <form action="">
        <div className="grid grid-cols-2 grid-rows-4 size-max gap-5 mx-2">
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="usuario">Usuario:</label>
            <Input type="text" inputName="usuario" />
          </div>

          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="contraseña">Contraseña:</label>
            <Input type="password" inputName="contraseña" />
          </div>

          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="nombres">Nombre/s:</label>
            <Input type="text" inputName="nombres" />
          </div>

          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="primer_apellido">Primer apellido:</label>
            <Input type="text" inputName="primer_apellido" />
          </div>

          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="segundo_apellido">Segundo apellido:</label>
            <Input type="text" inputName="segundo_apellido" />
          </div>

          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="rol">Rol:</label>
            <Select inputName="rol">
              <option value="admin">Administrador</option>
              <option value="directivo">Directivo</option>
              <option value="invitado">Invitado</option>
            </Select>
          </div>

          <button
            type="submit"
            className="bg-green-500 px-5 py-2 rounded-full text-white font-bold my-5 hover:bg-green-800 col-span-2 mx-auto w-50"
          >
            Insertar
          </button>
        </div>
      </form>
    </div>
  );
}
