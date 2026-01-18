 import Input from "../Input";
 import Select from "../Select";

export default function AsignaturasForm() {
  return (
    <div>
      <form action="">
        <div className="grid grid-cols-3 grid-rows-3 size-max gap-5 mx-2">
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="nombre">Nombre:</label>
            <Input type="text" inputName="nombre" />
          </div>

          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="codigo">Código:</label>
            <Input type="text" inputName="codigo" />
          </div>

          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="intranet">Intranet:</label>
            <Input type="text" inputName="intranet" />
          </div>

          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="disciplinas">Disciplinas:</label>
            <Select inputName={"disciplinas"}>
                
            </Select>
          </div>

          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="año">Año:</label>
            <Input type="number" inputName="año" min="0"/>
          </div>

          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="periodo">Periodo:</label>
            <Input type="number" inputName="periodo" min="0"/>
          </div>

          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="modalidad">Modalidad:</label>
            <Input type="text" inputName="modalidad"/>
          </div>

          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="curriculo">Currículo:</label>
            <Input type="text" inputName="curriculo"/>
          </div>

          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="bibliografia">Bibliografía:</label>
            <Select inputName="bibliografia">
              <option value="disponible" >Disponible</option>
              <option value="no disponible" >No disponible</option>
            </Select>
          </div>

          <button type="submit" className="bg-green-500 px-5 py-2 rounded-full text-white font-bold my-5 hover:bg-green-800 col-end-3">Insertar</button>
        </div>
      </form>
    </div>
  );
}
