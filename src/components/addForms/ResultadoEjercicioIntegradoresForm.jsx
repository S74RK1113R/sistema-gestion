 import Input from "../Input";
 import Select from "../Select";

export default function ResultadoEjerciciosIntegradoresForm() {
  return (
    <div>
      <form action="">
        <div className="grid grid-cols-1 grid-rows-3 size-max gap-5 mx-auto">
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="porciento_aprobados">Porciento aprobados:</label>
            <Input type="number" inputName="porciento_aprobados" min="0"/>
          </div>

          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="porciento_con_4_5">Porciento con 4-5:</label>
            <Input type="number" inputName="porciento_con_4_5" min="0" />
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="año_evaluacion">Año de la evaluación:</label>
            <Input type="number" inputName="año_evaluacion" min="0" />
          </div>

         
          <button type="submit" className="bg-green-500 px-5 py-2 rounded-full text-white font-bold my-5 hover:bg-green-800 mx-auto">Insertar</button>
        </div>
      </form>
    </div>
  );
}
