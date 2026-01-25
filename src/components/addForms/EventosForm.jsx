import { tableUse } from "../../context/TablesContext";
import { useSelectFetch } from "../../hooks/useSelectFetch";
import Input from "../Input";
import Select from "../Select";
import { useRef } from "react";

export default function EventosForm() {
  const { setEventos, setInsert, insert } = tableUse();
  const { data } = useSelectFetch("http://localhost:3002/api/profesor");

  const añoRef = useRef();
  const tituloRef = useRef();
  const nombre_eventoRef = useRef();
  const clasificacionRef = useRef();
  const profesor_idRef = useRef();
  const profesor_autor_id2Ref = useRef();
  const profesor_autor_id3Ref = useRef();
  const profesor_autor_id4Ref = useRef();
  const profesor_autor_id5Ref = useRef();

  function erraseInput() {
    añoRef.current.value = "";
    tituloRef.current.value = "";
    nombre_eventoRef.current.value = "";
    clasificacionRef.current.value = "";
    profesor_idRef.current.value = "";
    profesor_autor_id2Ref.current.value = "";
    profesor_autor_id3Ref.current.value = "";
    profesor_autor_id4Ref.current.value = "";
    profesor_autor_id5Ref.current.value = "";
  }

  function handleSubmit() {
    event.preventDefault();
    const eventos = {
      año: añoRef.current.value,
      titulo: tituloRef.current.value,
      nombre_evento: nombre_eventoRef.current.value,
      clasificacion: clasificacionRef.current.value,
      profesor_id: profesor_idRef.current.value,
      profesor_autor_id2: profesor_autor_id2Ref.current.value,
      profesor_autor_id3: profesor_autor_id3Ref.current.value,
      profesor_autor_id4: profesor_autor_id4Ref.current.value,
      profesor_autor_id5: profesor_autor_id5Ref.current.value,
    };

    erraseInput();

    const url = "http://localhost:3002/api/eventos";
    fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      // Send your data in the request body as JSON
      body: JSON.stringify(eventos),
    })
      .then((res) => {
        if (!res.ok) {
          return res.json();
        }
        // handle error
      })
      .then((json) => setEventos(json?.data || []));

    setInsert(!insert);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-3 grid-rows-3 size-max gap-5 mx-2">
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="año">Año:</label>
            <Input type="number" inputName="año" min="0" ref={añoRef} />
          </div>

          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="nombre_evento">Nombre del evento:</label>
            <Input
              type="text"
              inputName="nombre_evento"
              ref={nombre_eventoRef}
            />
          </div>

          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="titulo">Título del evento:</label>
            <Input type="text" inputName="titulo" ref={tituloRef} />
          </div>

          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="clasificacion">Clasificación del evento:</label>
            <Select inputName="clasificacion" ref={clasificacionRef}>
              <option value="provincial">Provincial</option>
              <option value="municipal">Municipal</option>
              <option value="nacional">Nacional</option>
              <option value="internacional">Internacional</option>
              <option value="base">Base</option>
            </Select>
          </div>

          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="profesor_id">Profesor 1:</label>
            <Select inputName="profesor_id" ref={profesor_idRef}>
              {data.map((item) => {
                return (
                  <option
                    value={item.id}
                    key={item.id}
                  >{`${item.nombres} ${item.primer_apellido}`}</option>
                );
              })}
            </Select>
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="profesor_id_2">Profesor 2:</label>
            <Select inputName="profesor_id_2" ref={profesor_autor_id2Ref}>
              {data.map((item) => {
                return (
                  <option
                    value={item.id}
                    key={item.id}
                  >{`${item.nombres} ${item.primer_apellido}`}</option>
                );
              })}
            </Select>
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="profesor_id_3">Profesor 3:</label>
            <Select inputName="profesor_id_3" ref={profesor_autor_id3Ref}>
              <option value="0" disabled selected>
                --Sin profesor--
              </option>
              {data.map((item) => {
                return (
                  <option
                    value={item.id}
                    key={item.id}
                  >{`${item.nombres} ${item.primer_apellido}`}</option>
                );
              })}
            </Select>
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="profesor_id_4">Profesor 4:</label>
            <Select inputName="profesor_id_4" ref={profesor_autor_id4Ref}>
              <option value="0" disabled selected>
                --Sin profesor--
              </option>

              {data.map((item) => {
                return (
                  <option
                    value={item.id}
                    key={item.id}
                  >{`${item.nombres} ${item.primer_apellido}`}</option>
                );
              })}
            </Select>
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="profesor_id_5">Profesor 5:</label>
            <Select inputName="profesor_id_5" ref={profesor_autor_id5Ref}>
              <option value="0" disabled selected>
                --Sin profesor--
              </option>

              {data.map((item) => {
                return (
                  <option
                    value={item.id}
                    key={item.id}
                  >{`${item.nombres} ${item.primer_apellido}`}</option>
                );
              })}
            </Select>
          </div>

          <button
            type="submit"
            className="bg-green-500 px-5 py-2 rounded-full text-white font-bold my-5 hover:bg-green-800 col-end-3"
          >
            Insertar
          </button>
        </div>
      </form>
    </div>
  );
}
