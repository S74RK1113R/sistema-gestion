import Input from "../Input";
import Select from "../Select";

export default function IncorporacionInvestigacionCientificaForm() {
  return (
    <div>
      <form action="">
        <div className="grid grid-cols-4 grid-rows-4 size-max gap-5 mx-2 items-center justify-center">
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="institucional">Institucional:</label>
            <Input type="number" inputName="institucional" min="0" />
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="nacional">Nacional:</label>
            <Input type="number" inputName="nacional" min="0" />
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="internacional">Internacional:</label>
            <Input type="number" inputName="internacional" min="0" />
          </div>

          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="profesores_incorporados">Cantidad de profesores incorporados:</label>
            <Input type="number" inputName="profesores_incorporados" min="0" />
          </div>

          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="estudiantes_investigando_1ro">Estudiantes investigando 1er año:</label>
            <Input type="number" inputName="modalidad" min="0" />
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="estudiantes_investigando_2do">Estudiantes investigando 2do año:</label>
            <Input type="number" inputName="modalidad" min="0" />
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="estudiantes_investigando_3ro">Estudiantes investigando 3er año:</label>
            <Input type="number" inputName="modalidad" min="0" />
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="estudiantes_investigando_4to">Estudiantes investigando 4to año:</label>
            <Input type="number" inputName="modalidad" min="0" />
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="estudiantes_investigando_5to">Estudiantes investigando 5to año:</label>
            <Input type="number" inputName="modalidad" min="0" />
          </div>

          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="año_evaluacion">Año de la evaluación:</label>
            <Input type="number" inputName="año_evaluacion" min="0" />
          </div>

         

          <button
            type="submit"
            className="bg-green-500 px-5 py-2 rounded-full text-white font-bold my-5 hover:bg-green-800 row-start-4 col-span-4 w-50 mx-auto"
          >
            Insertar
          </button>
        </div>
      </form>
    </div>
  );
}
