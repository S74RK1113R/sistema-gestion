import Input from "../Input";
import Select from "../Select";

export default function ProfesoresForm() {
  return (
    <div>
      <form action="">
        <div className="grid grid-cols-5 grid-rows-3 size-max gap-5 mx-2">
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="nombres">Nombre/s:</label>
            <Input type="text" inputName="nombres" />
          </div>

          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="primer_apellido">Primer apellido:</label>
            <Input type="text" inputName="primer_apellido" />
          </div>

          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="segundo_apellido">Segundo apellido:</label>
            <Input type="text" inputName="segundo_apellido" />
          </div>

          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="experiencia_educacion_superior">
              Experiencia educación superior:
            </label>
            <Input
              type="number"
              inputName="experiencia_educacion_superior"
              min="0"
            />
          </div>

          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="exp_carrera">Experiencia en la carrera:</label>
            <Input type="number" inputName="exp_carrera" min="0" />
          </div>

          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="lugar_procedencia">Lugar procedencia:</label>
            <Input type="text" inputName="lugar_procedencia" />
          </div>

          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="categoria_docente">Categoría docente:</label>
            <Input type="text" inputName="categoria_docente" />
          </div>

          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="funcion">Función:</label>
            <Input type="text" inputName="funcion" />
          </div>

          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="consultante_emerito">Consultante/emerito:</label>
            <Input type="text" inputName="consultante_emerito" />
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="grado_cientifico">Grado científico:</label>
            <Input type="text" inputName="grado_cientifico" />
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="grado_cientifico">Dr.C especialidad afin:</label>
            <Input type="text" inputName="grado_cientifico" />
          </div>

          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="asignatura">Asignatura 1:</label>
            <Select inputName="asignatura">
              
            </Select>
          </div>

          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="asignatura">Asignatura 2:</label>
            <Select inputName="asignatura">
              
            </Select>
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="asignatura">Asignatura 3:</label>
            <Select inputName="asignatura">
              
            </Select>
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="asignatura">Asignatura 4:</label>
            <Select inputName="asignatura">
              
            </Select>
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="asignatura">Asignatura 5:</label>
            <Select inputName="asignatura">
              
            </Select>
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="asignatura">Asignatura 6:</label>
            <Select inputName="asignatura">
              
            </Select>
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="participacion_posgrado">Participación en posgrado:</label>
            <Select inputName="participacion_posgrado">
              <option value="si">Si</option>
              <option value="no">No</option>
            </Select>
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="participacion_posgrado">Sede universitaria:</label>

            <Select inputName="participacion_posgrado">
             
            </Select>
          </div>

          <button
            type="submit"
            className="bg-green-500 px-5 py-2 rounded-full text-white font-bold my-5 hover:bg-green-800 col-span-5 w-25 mx-auto"
          >
            Insertar
          </button>
        </div>
      </form>
    </div>
  );
}
