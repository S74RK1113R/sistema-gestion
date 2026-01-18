 import Input from "../Input";
 import Select from "../Select";

export default function EventosAnteriorForm() {
  return (
    <div>
      <form action="">
        <div className="grid grid-cols-1 grid-rows-4 size-max gap-5 mx-auto">

          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="nacional_internacional">Nacional/Internacional:</label>
            <Input type="number" inputName="nacional_internacional" min="0"/>
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="total">Total:</label>
            <Input type="number" inputName="total" min="0"/>
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="total">Año de la evaluación:</label>
            <Input type="number" inputName="total" min="0"/>
          </div>

          <button type="submit" className="bg-green-500 px-5 py-2 rounded-full text-white font-bold my-5 hover:bg-green-800">Insertar</button>
        </div>
      </form>
    </div>
  );
}
