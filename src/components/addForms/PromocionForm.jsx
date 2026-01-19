import Input from "../Input";
import Select from "../Select";

export default function PromocionForm() {
  return (
    <div>
      <form action="">
        <div className="grid grid-cols-5 grid-rows-7 size-max gap-5 mx-2">
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="mie_1er_año">Mie 1er año:</label>
            <Input type="number" inputName="mie_1er_año" min="0" />
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="mie_2do_año">Mie 2do año:</label>
            <Input type="number" inputName="mie_2do_año" min="0" />
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="mie_3ro_año">Mie 3ro año:</label>
            <Input type="number" inputName="mie_3ro_año" min="0" />
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="mie_4to_año">Mie 4to año:</label>
            <Input type="number" inputName="mie_4to_año" min="0" />
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="mie_5to_año">Mie 5to año:</label>
            <Input type="number" inputName="mie_5to_año" min="0" />
          </div>

          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="aprobados_limpios_1ro">Aprobados limpios 1ro</label>
            <Input type="number" inputName="aprobados_limpios_1ro" min="0" />
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="aprobados_limpios_2do">Aprobados limpios 2do</label>
            <Input type="number" inputName="aprobados_limpios_2do" min="0" />
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="aprobados_limpios_3ro">Aprobados limpios 3ro</label>
            <Input type="number" inputName="aprobados_limpios_3ro" min="0" />
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="aprobados_limpios_4to">Aprobados limpios 4to</label>
            <Input type="number" inputName="aprobados_limpios_4to" min="0" />
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="aprobados_limpios_5to">Aprobados limpios 5to</label>
            <Input type="number" inputName="aprobados_limpios_5to" min="0" />
          </div>

          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="aprobados_con_1_1ro">Aprobados con 1 1ro</label>
            <Input type="number" inputName="aprobados_con_1_1ro" min="0" />
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="aprobados_con_1_2do">Aprobados con 1 2do</label>
            <Input type="number" inputName="aprobados_con_1_2do" min="0" />
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="aprobados_con_1_3ro">Aprobados con 1 3ro</label>
            <Input type="number" inputName="aprobados_con_1_3ro" min="0" />
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="aprobados_con_1_4to">Aprobados con 1 4to</label>
            <Input type="number" inputName="aprobados_con_1_4to" min="0" />
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="aprobados_con_1_5to">Aprobados con 1 5to</label>
            <Input type="number" inputName="aprobados_con_1_5to" min="0" />
          </div>

          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="aprobados_con_2_1ro">Aprobados con 2 1ro</label>
            <Input type="number" inputName="aprobados_con_2_1ro" min="0" />
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="aprobados_con_2_2do">Aprobados con 2 2do</label>
            <Input type="number" inputName="aprobados_con_2_2do" min="0" />
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="aprobados_con_2_3ro">Aprobados con 2 3ro</label>
            <Input type="number" inputName="aprobados_con_2_3ro" min="0" />
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="aprobados_con_2_4to">Aprobados con 2 4to</label>
            <Input type="number" inputName="aprobados_con_2_4to" min="0" />
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="aprobados_con_2_5to">Aprobados con 2 5to</label>
            <Input type="number" inputName="aprobados_con_2_5to" min="0" />
          </div>

          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="bajas_1ro">Bajas 1ro</label>
            <Input type="number" inputName="bajas_1ro" min="0" />
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="bajas_2do">Bajas 2do</label>
            <Input type="number" inputName="bajas_2do" min="0" />
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="bajas_3ro">Bajas 3ro</label>
            <Input type="number" inputName="bajas_3ro" min="0" />
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="bajas_4to">Bajas 4to</label>
            <Input type="number" inputName="bajas_4to" min="0" />
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="bajas_5to">Bajas 5to</label>
            <Input type="number" inputName="bajas_5to" min="0" />
          </div>

          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="curso">Curso:</label>
            <Select inputName={"curso"}></Select>
          </div>

          <button
            type="submit"
            className="bg-green-500 px-5 py-2 rounded-full text-white font-bold my-5 hover:bg-green-800 col-span-5 row-start-7 w-50 mx-auto"
          >
            Insertar
          </button>
        </div>
      </form>
    </div>
  );
}
