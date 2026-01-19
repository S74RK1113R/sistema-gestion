import Input from "../Input";

export default function EjerciciosIntegradoresForm() {
  return (
    <div>
      <form action="">
        <div className="grid grid-cols-6 grid-rows-6 size-max gap-2 mx-2 items-center justify-center">

          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="matricula_2do">Matrícula 2do año:</label>
            <Input type="number" inputName="matricula_2do" min="0" />
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="matricula_3ro">Matrícula 3ro año:</label>
            <Input type="number" inputName="matricula_3ro" min="0" />
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="matricula_4to">Matrícula 4to año:</label>
            <Input type="number" inputName="matricula_4to" min="0" />
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="matricula_5to">Matrícula 5to año:</label>
            <Input type="number" inputName="matricula_5to" min="0" />
          </div>

          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="evaluados_2do">Evaluados 2do año:</label>
            <Input type="number" inputName="evaluados_2do" min="0" />
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="evaluados_3ro">Evaluados 3ro año:</label>
            <Input type="number" inputName="evaluados_3ro" min="0" />
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="evaluados_4to">Evaluados 4to año:</label>
            <Input type="number" inputName="evaluados_4to" min="0" />
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="evaluados_5to">Evaluados 5to año:</label>
            <Input type="number" inputName="evaluados_5to" min="0" />
          </div>

          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="nota_con2_2do">Nota de 2 2do año:</label>
            <Input type="number" inputName="nota_con2_2do" min="0" />
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="nota_con2_3ro">Nota de 2 3ro año:</label>
            <Input type="number" inputName="nota_con2_3ro" min="0" />
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="nota_con2_4to">Nota de 2 4to año:</label>
            <Input type="number" inputName="nota_con2_4to" min="0" />
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="nota_con2_5to">Nota de 2 5to año:</label>
            <Input type="number" inputName="nota_con2_5to" min="0" />
          </div>

          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="nota_con3_2do">Nota de 3 2do año:</label>
            <Input type="number" inputName="nota_con3_2do" min="0" />
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="nota_con3_3ro">Nota de 3 3ro año:</label>
            <Input type="number" inputName="nota_con3_3ro" min="0" />
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="nota_con3_4to">Nota de 3 4to año:</label>
            <Input type="number" inputName="nota_con3_4to" min="0" />
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="nota_con3_5to">Nota de 3 5to año:</label>
            <Input type="number" inputName="nota_con3_5to" min="0" />
          </div>

          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="nota_con4_2do">Nota de 4 2do año:</label>
            <Input type="number" inputName="nota_con4_2do" min="0" />
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="nota_con4_3ro">Nota de 4 3ro año:</label>
            <Input type="number" inputName="nota_con4_3ro" min="0" />
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="nota_con4_4to">Nota de 4 4to año:</label>
            <Input type="number" inputName="nota_con4_4to" min="0" />
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="nota_con4_5to">Nota de 4 5to año:</label>
            <Input type="number" inputName="nota_con4_5to" min="0" />
          </div>

          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="nota_con5_2do">Nota de 5 2do año:</label>
            <Input type="number" inputName="nota_con5_2do" min="0" />
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="nota_con5_3ro">Nota de 5 3ro año:</label>
            <Input type="number" inputName="nota_con5_3ro" min="0" />
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="nota_con5_4to">Nota de 5 4to año:</label>
            <Input type="number" inputName="nota_con5_4to" min="0" />
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="nota_con5_5to">Nota de 5 5to año:</label>
            <Input type="number" inputName="nota_con5_5to" min="0" />
          </div>

          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="año_evaluacion">Año de la evaluación:</label>
            <Input type="number" inputName="año_evaluacion" min="0" />
          </div>

          <button
            type="submit"
            className="bg-green-500 px-5 py-2 rounded-full text-white font-bold my-5 hover:bg-green-800 row-start-6 col-span-6 w-50 mx-auto"
          >
            Insertar
          </button>
        </div>
      </form>
    </div>
  );
}
