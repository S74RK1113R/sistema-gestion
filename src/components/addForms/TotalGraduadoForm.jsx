import Input from "../Input";
import Select from "../Select";

export default function TotalGraduadosForm() {
  return (
    <div>
      <form action="">
        <div className="flex flex-col size-max gap-5 items-center mx-auto">
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="cd">Curso diurno:</label>
            <Input type="number" inputName="cd" min="0" />
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="cpe">Curso por encuentro:</label>
            <Input type="number" inputName="cpe" min="0" />
          </div>

          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="curso">Curso:</label>
            <Select inputName="curso">
             
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
