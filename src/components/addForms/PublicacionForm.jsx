import Input from "../Input";
import Select from "../Select";
import { useRef } from "react";
import { tableUse } from "../../context/TablesContext";
import { useSelectFetch } from "../../hooks/useSelectFetch";

export default function PublicacionForm() {
  const tituloRef = useRef();
  const añoRef = useRef();
  const revistaEditorialRef = useRef();
  const isbnIssnRef = useRef();
  const clasificacionRef = useRef();
  const bdRevistaRef = useRef();
  const autorRef = useRef();
  const coautor1Ref = useRef();
  const coautor2Ref = useRef();
  const coautor3Ref = useRef();
  const grupoRef = useRef();
  const { data } = useSelectFetch("http://localhost:3002/api/profesor");

  const { setPublicacion, setInsert, insert, setMessageSucces, setNotification, setNotificationType } = tableUse();

  function erraseInput() {
    tituloRef.current.value = "";
    añoRef.current.value = "";
    revistaEditorialRef.current.value = "";
    isbnIssnRef.current.value = "";
    bdRevistaRef.current.value = "";
    grupoRef.current.value = "";
  }

  function handleSubmit() {
    event.preventDefault();
    const publicacion = {
      titulo: tituloRef.current.value,
      año: añoRef.current.value,
      revista_editorial: revistaEditorialRef.current.value,
      isbn_issn: isbnIssnRef.current.value,
      clasificacion: clasificacionRef.current.value,
      bd_revista: bdRevistaRef.current.value,
      autor_profesor_id: autorRef.current.value,
      coautor_id: coautor1Ref.current.value,
      coautor_id_2: coautor2Ref.current.value,
      coautor_3: coautor3Ref.current.value,
      grupo: grupoRef.current.value,
    };

    erraseInput();

    const url = "http://localhost:3002/api/publicacion";
    fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      // Send your data in the request body as JSON
      body: JSON.stringify(publicacion),
    })
      .then((res) => {
        if (!res.ok) {
          return res.json();
        }
        // handle error
      })
      .then((json) => {
        setPublicacion(json?.data || []);
        setMessageSucces("Publicación insertada");
        setNotificationType('insert');
        setNotification(true);
      });

    setInsert(!insert);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-5 grid-rows-4 size-max gap-5 mx-2">
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="año">Año:</label>
            <Input type="number" inputName="año" min="0" ref={añoRef} />
          </div>

          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="titulo">Título:</label>
            <Input type="text" inputName="titulo" ref={tituloRef} />
          </div>

          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="revista_editorial">Revista editorial:</label>
            <Input
              type="text"
              inputName="revista_editorial"
              ref={revistaEditorialRef}
            />
          </div>

          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="isbn_issn">ISBN/ISSN:</label>
            <Input type="text" inputName="isbn_issn" ref={isbnIssnRef} />
          </div>

          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="clasificacion">Clasificación:</label>
            <Select inputName="clasificacion" ref={clasificacionRef}>
              <option value="articulo">Artículo</option>
              <option value="libro">Libro</option>
              <option value="libro digital">Libro digital</option>
              <option value="capitulo de libro">Capitulo de libro</option>
              <option value="texto de la carrera">Texto de la carrera</option>
              <option value="material docente interno">
                Material docente interno
              </option>
              <option value="patente">Patente</option>
            </Select>
          </div>

          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="bd_revista">Base de datos de la revista:</label>
            <Input type="text" inputName="bd_revista" ref={bdRevistaRef} />
          </div>

          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="autor">Autor:</label>
            <Select inputName="autor" ref={autorRef}>
              {data.map((profesor) => (
                <option key={profesor.id} value={profesor.id}>
                  {profesor.nombres} {profesor.primer_apellido}{" "}
                  {profesor.segundo_apellido}
                </option>
              ))}
            </Select>
          </div>

          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="coautor1">Coautor 1:</label>
            <Select inputName="coautor1" ref={coautor1Ref}>
              <option value="0" selected>
                --No definido--
              </option>
              {data.map((profesor) => (
                <option key={profesor.id} value={profesor.id}>
                  {profesor.nombres} {profesor.primer_apellido}{" "}
                  {profesor.segundo_apellido}
                </option>
              ))}
            </Select>
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="coautor2">Coautor 2:</label>
            <Select inputName="coautor2" ref={coautor2Ref}>
              <option value="0" selected>
                --No definido--
              </option>

              {data.map((profesor) => (
                <option key={profesor.id} value={profesor.id}>
                  {profesor.nombres} {profesor.primer_apellido}{" "}
                  {profesor.segundo_apellido}
                </option>
              ))}
            </Select>
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="coautor3">Coautor 3:</label>
            <Select inputName="coautor3" ref={coautor3Ref}>
              <option value="0" selected>
                --No definido--
              </option>

              {data.map((profesor) => (
                <option key={profesor.id} value={profesor.id}>
                  {profesor.nombres} {profesor.primer_apellido}{" "}
                  {profesor.segundo_apellido}
                </option>
              ))}
            </Select>
          </div>

          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="grupo">Grupo:</label>
            <Input type="number" inputName="grupo" min="1" max="4" ref={grupoRef} />
          </div>

          <button
            type="submit"
            className="bg-green-500 px-5 py-2 rounded-full text-white font-bold my-5 hover:bg-green-800 col-span-5 w-50 mx-auto"
          >
            Insertar
          </button>
        </div>
      </form>
    </div>
  );
}
