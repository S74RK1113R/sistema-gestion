import Input from "../Input";

export default function NivelAcreditacionForm() {
  return (
    <div>
      <form action="">
        <div className="flex flex-col size-max gap-5 items-center mx-auto">
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="nivel">Nivel:</label>
            <Input type="text" inputName="nivel" />
          </div>

          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="año_evaluacion">Año evaluación:</label>
            <Input type="number" inputName="año_evaluacion" min="0" />
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
