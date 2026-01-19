 import Input from "../Input";
 import Select from "../Select";

export default function EventosForm() {
  return (
    <div>
      <form action="">
        <div className="grid grid-cols-3 grid-rows-3 size-max gap-5 mx-2">
          
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="año">Año:</label>
            <Input type="number" inputName="año" min="0"/>
          </div>
          
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="nombre_evento">Nombre del evento:</label>
            <Input type="text" inputName="nombre_evento" />
          </div>

          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="titulo">Título del evento:</label>
            <Input type="text" inputName="titulo" />
          </div>

          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="clasificacion">Clasificación del evento:</label>
            <Input type="text" inputName="clasificacion" />
          </div>

          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="profesor_id">Profesor 1:</label>
            <Select inputName="profesor_id">
              
            </Select>
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="profesor_id_2">Profesor 2:</label>
            <Select inputName="profesor_id_2">
              
            </Select>
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="profesor_id_3">Profesor 3:</label>
            <Select inputName="profesor_id_3">
              
            </Select>
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="profesor_id_4">Profesor 4:</label>
            <Select inputName="profesor_id_4">
              
            </Select>
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="profesor_id_5">Profesor 5:</label>
            <Select inputName="profesor_id_5">
              
            </Select>
          </div>
          

          <button type="submit" className="bg-green-500 px-5 py-2 rounded-full text-white font-bold my-5 hover:bg-green-800 col-end-3">Insertar</button>
        </div>
      </form>
    </div>
  );
}
