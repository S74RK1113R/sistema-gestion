 import Input from "../Input";
 import Select from "../Select";

export default function PublicacionForm() {
  return (
    <div>
      <form action="">
        <div className="grid grid-cols-5 grid-rows-4 size-max gap-5 mx-2">
          
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="año">Año:</label>
            <Input type="number" inputName="año" min="0"/>
          </div>

          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="titulo">Título:</label>
            <Input type="text" inputName="titulo" />
          </div>

          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="revista_editorial">Revista editorial:</label>
            <Input type="text" inputName="revista_editorial" />
          </div>

          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="isbn_issn">ISBN/ISSN:</label>
            <Input type="text" inputName="isbn_issn" />
          </div>

          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="clasificacion">Clasificación:</label>
            <Select inputName="clasificacion">
              <option value="articulo" >Artículo</option>
              <option value="libro" >Libro</option>
              <option value="libro digital" >Libro digital</option>
              <option value="capitulo de libro" >Capitulo de libro</option>
              <option value="texto de la carrera" >Texto de la carrera</option>
              <option value="material docente interno" >Material docente interno</option>
              <option value="patente" >Patente</option>
            </Select>
          </div>

          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="bd_revista">Base de datos de la revista:</label>
            <Input type="text" inputName="bd_revista" />
          </div>

          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="autor">Autor:</label>
            <Select inputName="autor">

            </Select>
          </div>

          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="coautor1">Coautor 1:</label>
            <Select inputName="coautor1">

            </Select>
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="coautor2">Coautor 2:</label>
            <Select inputName="coautor2">

            </Select>
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="coautor3">Coautor 3:</label>
            <Select inputName="coautor3">

            </Select>
          </div>

          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="grupo">Grupo:</label>
            <Input type="number" inputName="grupo" min="0"/>
          </div>


          <button type="submit" className="bg-green-500 px-5 py-2 rounded-full text-white font-bold my-5 hover:bg-green-800 col-span-5 w-50 mx-auto">Insertar</button>
        </div>
      </form>
    </div>
  );
}
