import Input from "../Input";
import Select from "../Select";

export default function SedeUniversitariaFrom() {
  return (
    <div>
      <form action="">
        <div className="flex flex-col size-max gap-5 items-center mx-auto">
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="nombre">Nombre:</label>
            <Input type="text" inputName="nombre" />
          </div>

          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="clasificacion">Clasificación:</label>
            <Select inputName="clasificacion">
              <option value="sede central">Sede central</option>
              <option value="sede municipal o subsede">Sede municipal o subsede</option>
              <option value="cum">Cum</option>
              <option value="filial">Filial</option>
            </Select>
          </div>

          <button
            type="submit"
            className="bg-green-500 px-5 py-2 rounded-full text-white font-bold my-5 hover:bg-green-800"
          >
            Insertar
          </button>
        </div>
      </form>
    </div>
  );
}
