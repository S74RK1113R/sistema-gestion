import { tableUse } from "../../context/TablesContext";
import { useState, useRef } from "react";
import Input from "../Input";
import Select from "../Select";
import { useSelectFetch } from "../../hooks/useSelectFetch";

export default function AsignaturasItem({
  nombre,
  codigo,
  disciplinas_id,
  intranet,
  bibliografia,
  año,
  periodo,
  modalidad,
  curriculo,
  id,
}) {
  const { setAsignatura, del, setDel, insert, setInsert } = tableUse();
  const [showModal, setShowModal] = useState(false);
  const newNombreRef = useRef();
  const newCodigoRef = useRef();
  const newDisciplinasIdRef = useRef();
  const newIntranetRef = useRef();
  const newBibliografiaRef = useRef();
  const newAñoRef = useRef();
  const newPeriodoRef = useRef();
  const newModalidadRef = useRef();
  const newCurriculoRef = useRef();
  const { data } = useSelectFetch("http://localhost:3002/api/disciplinas");

  function deleteItem(id) {
    const url = `http://localhost:3002/api/asignaturas/${id}`;
    setDel(!del);

    fetch(url, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((json) => setAsignatura(json.data || []));
  }

  function modifyItem() {
    event.preventDefault();
    const url = `http://localhost:3002/api/asignaturas/${id}`;
    const newAsignatura = {
      nombre: newNombreRef.current.value,
      codigo: newCodigoRef.current.value,
      disciplinas_id: newDisciplinasIdRef.current.value,
      intranet: newIntranetRef.current.value,
      bibliografia: newBibliografiaRef.current.value,
      año: newAñoRef.current.value,
      periodo: newPeriodoRef.current.value,
      modalidad: newModalidadRef.current.value,
      curriculo: newCurriculoRef.current.value,
    };

    fetch(url, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      // Send your data in the request body as JSON
      body: JSON.stringify(newAsignatura),
    })
      .then((res) => {
        if (!res.ok) {
          return res.json();
        }
        // handle error
      })
      .then((json) => setAsignatura(json?.data || []));

    setInsert(!insert);
  }

  return (
    <div className="border border-black w-11/12 flex flex-col items-center justify-center shadow-lg shadow-zinc-950/60 p-5 rounded-lg mb-5">
      <h1 className="font-bold">Nombre de asignatura:</h1>
      <div>{nombre}</div>
      <h1 className="font-bold">Codigo de asignatura:</h1>
      <div>{codigo}</div>
      <h1 className="font-bold">Disciplina:</h1>
      <div>{disciplinas_id}</div>
      <h1 className="font-bold">Intranet:</h1>
      <div>{intranet}</div>
      <h1 className="font-bold">Bibliografía:</h1>
      <div>{bibliografia}</div>
      <h1 className="font-bold">Año:</h1>
      <div>{año}</div>
      <h1 className="font-bold">Periodo:</h1>
      <div>{periodo}</div>
      <h1 className="font-bold">Modalidad:</h1>
      <div>{modalidad}</div>
      <h1 className="font-bold">Currículo:</h1>
      <div>{curriculo}</div>

      <div className="flex flex-row gap-4 mt-4">
        <button
          onClick={() => {
            deleteItem(id);
          }}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
        >
          Borrar
        </button>
        <button
          onClick={() => setShowModal(true)}
          className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg "
        >
          Modificar
        </button>
      </div>

      {/*Modal Zone */}
      {showModal && (
        <form onSubmit={modifyItem}>
          <div className="fixed inset-0 flex items-center justify-center gap-5 overflow-auto">
            <div className="bg-zinc-100 p-6 rounded-lg shadow-xl shadow-black/50 grid grid-cols-4 gap-5 max-w-11/12 max-h-11/12 overflow-auto">
              <h2 className="text-xl font-bold mb-4 col-span-4">
                Modificar Asignatura
              </h2>

              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label htmlFor="nombre">Nombre:</label>
                <Input
                  type="text"
                  inputName="nombre"
                  defaultValue={nombre}
                  ref={newNombreRef}
                />
              </div>

              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label htmlFor="codigo">Código:</label>
                <Input
                  type="text"
                  inputName="codigo"
                  defaultValue={codigo}
                  ref={newCodigoRef}
                />
              </div>

              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label htmlFor="intranet">Intranet:</label>
                <Select
                  inputName="intranet"
                  defaultValue={intranet}
                  ref={newIntranetRef}
                >
                  <option value="no procede">No procede</option>
                  <option value="plat. interactiva">Plat. interactiva</option>
                  <option value="no">No</option>
                  <option value="materiales">Materiales</option>
                </Select>
              </div>

              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label htmlFor="disciplina">Disciplina:</label>
                <Select
                  inputName={"disciplina"}
                  defaultValue={disciplinas_id}
                  ref={newDisciplinasIdRef}
                >
                  {data.map((item) => {
                    return (
                      <option value={item.id} key={item.id}>
                        {item.nombre}
                      </option>
                    );
                  })}
                </Select>
              </div>

              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label htmlFor="año">Año:</label>
                <Input
                  type="number"
                  inputName="año"
                  min="0"
                  defaultValue={año}
                  ref={newAñoRef}
                />
              </div>

              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label htmlFor="periodo">Periodo:</label>
                <Input
                  type="number"
                  inputName="periodo"
                  min="0"
                  defaultValue={periodo}
                  ref={newPeriodoRef}
                />
              </div>

              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label htmlFor="modalidad">Modalidad:</label>
                <Select
                  inputName="modalidad"
                  defaultValue={modalidad}
                  ref={newModalidadRef}
                >
                  <option value="cd">Curso diurno</option>
                  <option value="cpe">Curso encuentro</option>
                </Select>
              </div>

              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label htmlFor="curriculo">Currículo:</label>
                <Select
                  inputName="curriculo"
                  defaultValue={curriculo}
                  ref={newCurriculoRef}
                >
                  <option value="base">Base</option>
                  <option value="propio">Propio</option>
                  <option value="optat/elect">Optat./Elect.</option>
                  <option value="materiales">Materiales</option>
                </Select>
              </div>

              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label htmlFor="bibliografia">Bibliografía:</label>

                <Select
                  inputName="bibliografia"
                  defaultValue={bibliografia}
                  ref={newBibliografiaRef}
                >
                  <option value="disponible">Disponible</option>
                  <option value="no disponible">No disponible</option>
                </Select>
              </div>

                  
              <button
                type="submit"
                className="bg-blue-500 text-white row-start-5 col-start-2  max-w-50 px-4 py-2 my-5 rounded hover:bg-blue-600"
              >
                Guardar Cambios
              </button>
              <button
                type="button"
                className="bg-zinc-500 row-start-5 col-start-3 text-white max-w-50 px-4 py-2 my-5 mx-5 rounded hover:bg-red-600"
                onClick={() => setShowModal(false)}
              >
                Cancelar
              </button>

            </div>
          </div>
        </form>
      )}
    </div>
  );
}
