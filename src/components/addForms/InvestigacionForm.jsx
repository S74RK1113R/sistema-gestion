 import Input from "../Input";
 import Select from "../Select";

export default function InvestigacionForm() {
  return (
    <div>
      <form action="">
        <div className="grid grid-cols-2 grid-rows-3 size-max gap-5 mx-2">
          
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="investigacion">Proyectos de investigación:</label>
            <Input type="number" inputName="investigacion" min="0"/>
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="porciento_estudiantes_vinculados">Porciento de estudiantes vinculados:</label>
            <Input type="number" inputName="porciento_estudiantes_vinculados" min="0"/>
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="porciento_profesores_vinculados">Porciento de profesores vinculados:</label>
            <Input type="number" inputName="porciento_profesores_vinculados" min="0"/>
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="año_evaluacion">Año de la evaluación</label>
            <Input type="number" inputName="año_evaluacion" min="0"/>
          </div>

          <button type="submit" className="bg-green-500 px-5 py-2 rounded-full text-white font-bold my-5 hover:bg-green-800 col-span-2 w-25 mx-auto">Insertar</button>
        </div>
      </form>
    </div>
  );
}
