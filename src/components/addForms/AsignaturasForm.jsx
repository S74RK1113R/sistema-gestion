import { useRef } from "react";
import Input from "../Input";
import Select from "../Select";
import { tableUse } from "../../context/TablesContext";
import { useSelectFetch } from "../../hooks/useSelectFetch";

export default function AsignaturasForm() {
  const { setAsignaturas, setInsert, insert } = tableUse();
  const { data } = useSelectFetch("http://localhost:3002/api/disciplinas");

  const nombreRef = useRef();
  const codigoRef = useRef();
  const disciplinaIdRef = useRef();
  const intranetRef = useRef();
  const bibliografiaRef = useRef();
  const añoRef = useRef();
  const periodoRef = useRef();
  const modalidadRef = useRef();
  const curriculoRef = useRef();

  function erraseInput() {
    nombreRef.current.value = "";
    codigoRef.current.value = "";
    disciplinaIdRef.current.value = "";
    intranetRef.current.value = "";
    bibliografiaRef.current.value = "";
    añoRef.current.value = "";
    periodoRef.current.value = "";
    modalidadRef.current.value = "";
    curriculoRef.current.value = "";
  }

  function handleSubmit() {
    event.preventDefault();
    const asignaturas = {
      nombre: nombreRef.current.value,
      codigo: codigoRef.current.value,
      disciplinas_id: disciplinaIdRef.current.value,
      intranet: intranetRef.current.value,
      bibliografia: bibliografiaRef.current.value,
      año: añoRef.current.value,
      periodo: periodoRef.current.value,
      modalidad: modalidadRef.current.value,
      curriculo: curriculoRef.current.value
    };

    erraseInput();

    const url = "http://localhost:3002/api/asignaturas";
    fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      // Send your data in the request body as JSON
      body: JSON.stringify(asignaturas),
    })
      .then((res) => {
        if (!res.ok) {
          return res.json();
        }
        // handle error
      })
      .then((json) => setAsignaturas(json?.data || []));

    setInsert(!insert);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-3 grid-rows-3 size-max gap-5 mx-2">
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="nombre">Nombre:</label>
            <Input type="text" inputName="nombre" ref={nombreRef} />
          </div>

          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="codigo">Código:</label>
            <Input type="text" inputName="codigo" ref={codigoRef} />
          </div>

          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="intranet">Intranet:</label>
            <Select inputName="modalidad" ref={intranetRef}>
              <option value="no procede">No procede</option>
              <option value="plat. interactiva">Plat. interactiva</option>
              <option value="no">No</option>
              <option value="materiales">Materiales</option>
            </Select>
          </div>

          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="disciplina">Disciplina:</label>
            <Select inputName={"disciplina"} ref={disciplinaIdRef}>

              {data.map((item) => {
                return <option value={item.id} key={item.id}>{item.nombre}</option>;
              })}

            </Select>
          </div>

          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="año">Año:</label>
            <Input type="number" inputName="año" min="0" ref={añoRef} />
          </div>

          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="periodo">Periodo:</label>
            <Input type="number" inputName="periodo" min="0" ref={periodoRef} />
          </div>

          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="modalidad">Modalidad:</label>
            <Select inputName="modalidad" ref={modalidadRef}>
              <option value="cd">Curso diurno</option>
              <option value="cpe">Curso encuentro</option>
            </Select>
          </div>

          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="curriculo">Currículo:</label>
            <Select inputName="modalidad" ref={curriculoRef}>
              <option value="base">Base</option>
              <option value="propio">Propio</option>
              <option value="optat/elect">Optat./Elect.</option>
              <option value="materiales">Materiales</option>
            </Select>
          </div>

          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="bibliografia">Bibliografía:</label>

            <Select inputName="bibliografia" ref={bibliografiaRef}>
              <option value="disponible">Disponible</option>
              <option value="no disponible">No disponible</option>
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
