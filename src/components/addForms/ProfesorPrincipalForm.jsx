import Select from "../Select";

export default function ProfesorPrincipalForm() {
  return (
    <div>
      <form action="">
        <div className="flex flex-col gap-5 items-center mx-2">

          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="disciplina">Disciplina:</label>
            <Select inputName="disciplina">
              
            </Select>
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="profesor">Profesor:</label>
            <Select inputName="profesor">
              
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
