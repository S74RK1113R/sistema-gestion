 import Input from "../Input";
 import Select from "../Select";

export default function PremiosEstudiantesForm() {
  return (
    <div>
      <form action="">
        <div className="grid grid-cols-1 grid-rows-4 mx-auto size-max gap-5">
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="nombre_premio">Nombre del premio:</label>
            <Input type="text" inputName="nombre_premio" />
          </div>


          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="cantidad">Cantidad:</label>
            <Input type="number" inputName="cantidad" min="0" />
          </div>

          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="año">Año:</label>
            <Input type="number" inputName="año" min="0" />
          </div>


          <button type="submit" className="bg-green-500 px-5 py-2 rounded-full text-white font-bold my-5 hover:bg-green-800">Insertar</button>
        </div>
      </form>
    </div>
  );
}
