 import Input from "../Input";
 import Select from "../Select";

export default function ClaustroForm() {
  return (
    <div>
      <form action="">
        <div className="grid grid-cols-3 grid-rows-4 size-max gap-5 mx-2">
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="total_claustro">Total de claustro:</label>
            <Input type="number" inputName="total_claustro" min="0"/>
          </div>

          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="drc">Dr.C:</label>
            <Input type="number" inputName="drc" min="0"/>
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="drc_equivalentes">Dr.C/equivalentes:</label>
            <Input type="number" inputName="drc_equivalentes" min="0"/>
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="drc_afin">Dr.C/afin:</label>
            <Input type="number" inputName="drc_afin" min="0"/>
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="mc_equivalentes">Mc/equivalentes:</label>
            <Input type="number" inputName="mc_equivalentes" min="0"/>
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="pt_pa">Pt/Pa:</label>
            <Input type="number" inputName="pt_pa" min="0"/>
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="pt_pa">Año evaluacion</label>
            <Input type="number" inputName="pt_pa" min="0"/>
          </div>


          <button type="submit" className="bg-green-500 px-5 py-2 rounded-full text-white font-bold my-5 hover:bg-green-800 row-end-5 col-end-3">Insertar</button>
        </div>
      </form>
    </div>
  );
}
