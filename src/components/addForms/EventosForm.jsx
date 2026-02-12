import { tableUse } from "../../context/TablesContext";
import { useSelectFetch } from "../../hooks/useSelectFetch";
import Input from "../Input";
import Select from "../Select";
import { useRef } from "react";

export default function EventosForm() {
  const { setEventos, setInsert, insert, setMessageSucces, setNotification, setNotificationType } = tableUse();
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
      .then((json) => {
        setEventos(json?.data || []);
        setMessageSucces("Evento insertado");
        setNotificationType('insert');
        setNotification(true);
      });

    setInsert(!insert);
  }

  return (
    <div className="w-full max-w-3xl mx-auto">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-3 gap-6 p-2">
          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="año" className="text-sm font-semibold text-gray-700">Año:</label>
            <Input type="number" inputName="año" min="0" ref={añoRef} placeholder="Ingrese año" />
          </div>

          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="nombre_evento" className="text-sm font-semibold text-gray-700">Nombre del evento:</label>
            <Input
              type="text"
              inputName="nombre_evento"
              ref={nombre_eventoRef}
              placeholder="Ingrese nombre"
            />
          </div>

          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="titulo" className="text-sm font-semibold text-gray-700">Título del evento:</label>
            <Input type="text" inputName="titulo" ref={tituloRef} placeholder="Ingrese título" />
          </div>

          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="clasificacion" className="text-sm font-semibold text-gray-700">Clasificación:</label>
            <Select inputName="clasificacion" ref={clasificacionRef}>
              <option value="">Seleccione clasificación</option>
              <option value="provincial">Provincial</option>
              <option value="municipal">Municipal</option>
              <option value="nacional">Nacional</option>
              <option value="internacional">Internacional</option>
              <option value="base">Base</option>
            </Select>
          </div>

          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="profesor_id" className="text-sm font-semibold text-gray-700">Profesor 1:</label>
            <Select inputName="profesor_id" ref={profesor_idRef}>
              <option value="">Seleccione profesor</option>
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
          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="profesor_id_2" className="text-sm font-semibold text-gray-700">Profesor 2:</label>
            <Select inputName="profesor_id_2" ref={profesor_autor_id2Ref}>
              <option value="0">--Sin profesor--</option>
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
          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="profesor_id_3" className="text-sm font-semibold text-gray-700">Profesor 3:</label>
            <Select inputName="profesor_id_3" ref={profesor_autor_id3Ref}>
              <option value="0">--Sin profesor--</option>
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
          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="profesor_id_4" className="text-sm font-semibold text-gray-700">Profesor 4:</label>
            <Select inputName="profesor_id_4" ref={profesor_autor_id4Ref}>
              <option value="0">--Sin profesor--</option>

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
          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="profesor_id_5" className="text-sm font-semibold text-gray-700">Profesor 5:</label>
            <Select inputName="profesor_id_5" ref={profesor_autor_id5Ref}>
              <option value="0">--Sin profesor--</option>

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
            className="col-span-3 bg-emerald-600 hover:bg-emerald-700 px-6 py-3 rounded-lg text-white font-semibold mt-6 transition-colors shadow-md"
          >
            Insertar
          </button>
        </div>
      </form>
    </div>
  );
}
