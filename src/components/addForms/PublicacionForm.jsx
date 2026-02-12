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
    <div className="w-full max-w-4xl mx-auto">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-3 gap-6 p-2">
          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="año" className="text-sm font-semibold text-gray-700">Año:</label>
            <Input type="number" inputName="año" min="0" ref={añoRef} placeholder="Ingrese año" />
          </div>

          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="titulo" className="text-sm font-semibold text-gray-700">Título:</label>
            <Input type="text" inputName="titulo" ref={tituloRef} placeholder="Ingrese título" />
          </div>

          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="revista_editorial" className="text-sm font-semibold text-gray-700">Revista/Editorial:</label>
            <Input
              type="text"
              inputName="revista_editorial"
              ref={revistaEditorialRef}
              placeholder="Ingrese revista"
            />
          </div>

          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="isbn_issn" className="text-sm font-semibold text-gray-700">ISBN/ISSN:</label>
            <Input type="text" inputName="isbn_issn" ref={isbnIssnRef} placeholder="Ingrese código" />
          </div>

          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="clasificacion" className="text-sm font-semibold text-gray-700">Clasificación:</label>
            <Select inputName="clasificacion" ref={clasificacionRef}>
              <option value="">Seleccione clasificación</option>
              <option value="articulo">Artículo</option>
              <option value="libro">Libro</option>
              <option value="libro digital">Libro digital</option>
              <option value="capitulo de libro">Capítulo de libro</option>
              <option value="texto de la carrera">Texto de la carrera</option>
              <option value="material docente interno">
                Material docente interno
              </option>
              <option value="patente">Patente</option>
            </Select>
          </div>

          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="bd_revista" className="text-sm font-semibold text-gray-700">Base de datos:</label>
            <Input type="text" inputName="bd_revista" ref={bdRevistaRef} placeholder="Ingrese BD" />
          </div>

          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="autor" className="text-sm font-semibold text-gray-700">Autor:</label>
            <Select inputName="autor" ref={autorRef}>
              <option value="">Seleccione autor</option>
              {data.map((profesor) => (
                <option key={profesor.id} value={profesor.id}>
                  {profesor.nombres} {profesor.primer_apellido}{" "}
                  {profesor.segundo_apellido}
                </option>
              ))}
            </Select>
          </div>

          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="coautor1" className="text-sm font-semibold text-gray-700">Coautor 1:</label>
            <Select inputName="coautor1" ref={coautor1Ref}>
              <option value="0">--No definido--</option>
              {data.map((profesor) => (
                <option key={profesor.id} value={profesor.id}>
                  {profesor.nombres} {profesor.primer_apellido}{" "}
                  {profesor.segundo_apellido}
                </option>
              ))}
            </Select>
          </div>
          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="coautor2" className="text-sm font-semibold text-gray-700">Coautor 2:</label>
            <Select inputName="coautor2" ref={coautor2Ref}>
              <option value="0">--No definido--</option>

              {data.map((profesor) => (
                <option key={profesor.id} value={profesor.id}>
                  {profesor.nombres} {profesor.primer_apellido}{" "}
                  {profesor.segundo_apellido}
                </option>
              ))}
            </Select>
          </div>
          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="coautor3" className="text-sm font-semibold text-gray-700">Coautor 3:</label>
            <Select inputName="coautor3" ref={coautor3Ref}>
              <option value="0">--No definido--</option>

              {data.map((profesor) => (
                <option key={profesor.id} value={profesor.id}>
                  {profesor.nombres} {profesor.primer_apellido}{" "}
                  {profesor.segundo_apellido}
                </option>
              ))}
            </Select>
          </div>

          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="grupo" className="text-sm font-semibold text-gray-700">Grupo:</label>
            <Input type="number" inputName="grupo" min="1" max="4" ref={grupoRef} placeholder="1-4" />
          </div>

          <button
            type="submit"
            className="col-span-3 bg-emerald-600 hover:bg-emerald-700 px-6 py-3 rounded-lg text-white font-semibold mt-6 transition-colors shadow-md"
          >
            Insertar
          </button>
        </div>
      </form>
    </div>
  );
}
