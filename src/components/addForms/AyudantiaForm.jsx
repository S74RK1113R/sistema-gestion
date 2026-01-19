import Input from "../Input";

export default function AyudantiaForm() {
  return (
    <div>
      <form action="">
        <div className="grid grid-cols-4 grid-rows-4 size-max gap-5 mx-2 items-center justify-center">
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="educacion_superior_1ro">Educación superior 1er año:</label>
            <Input type="number" inputName="educacion_superior_1ro" min="0" />
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="educacion_superior_2do">Educación superior 2do año:</label>
            <Input type="number" inputName="educacion_superior_2do" min="0" />
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="educacion_superior_3ro">Educación superior 3ro año:</label>
            <Input type="number" inputName="educacion_superior_3ro" min="0" />
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="educacion_superior_4to">Educación superior 4to año:</label>
            <Input type="number" inputName="educacion_superior_4to" min="0" />
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="educacion_superior_5to">Educación superior 5to año:</label>
            <Input type="number" inputName="educacion_superior_5to" min="0" />
          </div>

          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="educacion_media_1ro">Educación media 1er año:</label>
            <Input type="number" inputName="educacion_media_1ro" min="0" />
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="educacion_media_2do">Educación media 2do año:</label>
            <Input type="number" inputName="educacion_media_2do" min="0" />
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="educacion_media_3ro">Educación media 3ro año:</label>
            <Input type="number" inputName="educacion_media_3ro" min="0" />
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="educacion_media_4to">Educación media 4to año:</label>
            <Input type="number" inputName="educacion_media_4to" min="0" />
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="educacion_media_5to">Educación media 5to año:</label>
            <Input type="number" inputName="educacion_media_5to" min="0" />
          </div>
          
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="año_evaluacion">Año de la evaluación:</label>
            <Input type="number" inputName="año_evaluacion" min="0" />
          </div>

          <button
            type="submit"
            className="bg-green-500 px-5 py-2 rounded-full text-white font-bold my-5 hover:bg-green-800 col-span-4 w-50 mx-auto"
          >
            Insertar
          </button>
        </div>
      </form>
    </div>
  );
}
