import Input from "../Input";

export default function MatriculaForm() {
  return (
    <div>
      <form action="">
        <div className="grid grid-cols-2 grid-rows-4 size-max gap-5 mx-2 items-center justify-center">
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="p1er_año">1er año:</label>
            <Input type="number" inputName="p1er_año" min="0" />
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="s2do_año">2do año:</label>
            <Input type="number" inputName="s2do_año" min="0" />
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="t3er_año">3er año:</label>
            <Input type="number" inputName="t3er_año" min="0" />
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="c4to_año">4to año:</label>
            <Input type="number" inputName="c4to_año" min="0" />
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="q5to_año">5to año:</label>
            <Input type="number" inputName="q5to_año" min="0" />
          </div>
          
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="año_evaluacion">Año de la evaluación:</label>
            <Input type="number" inputName="año_evaluacion" min="0" />
          </div>

         

          <button
            type="submit"
            className="bg-green-500 px-5 py-2 rounded-full text-white font-bold my-5 hover:bg-green-800 col-span-2 w-50 mx-auto"
          >
            Insertar
          </button>
        </div>
      </form>
    </div>
  );
}
