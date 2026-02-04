import { tableUse } from "../../context/TablesContext";
import { useSelectFetch } from "../../hooks/useSelectFetch";
import { useState, useRef } from "react";
import Input from "../Input";
import Select from "../Select";

export default function TotalGraduadosItem({ cd, cpe, curso_id, id }) {
  const { setTotalGraduados, del, setDel, insert, setInsert } = tableUse();
  const { data } = useSelectFetch("http://localhost:3002/api/cursos");
  const [showModal, setShowModal] = useState(false);

  const newCdRef = useRef();
  const newCpeRef = useRef();
  const newCursoIdRef = useRef();

  function deleteItem(id) {
    const url = `http://localhost:3002/api/total_graduados/${id}`;
    setDel(!del);

    fetch(url, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((json) => setTotalGraduados(json.data || []));
  }

  function modifyItem() {
    event.preventDefault();
    const url = `http://localhost:3002/api/total_graduados/${id}`;
    const newTotal = {
      cd: newCdRef.current.value,
      cpe: newCpeRef.current.value,
      curso_id: newCursoIdRef.current.value,
    };

    fetch(url, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newTotal),
    })
      .then((res) => {
        if (!res.ok) return res.json();
      })
      .then((json) => setTotalGraduados(json?.data || []));

    setInsert(!insert);
  }

  return (
    <div className="mb-5 border border-black w-11/12 flex flex-col items-center justify-center shadow-lg shadow-zinc-950/60 p-5 rounded-lg">
      <h1 className="font-bold">Curso diurno:</h1>
      <div>{cd}</div>
      <h1 className="font-bold">Curso por encuentro:</h1>
      <div>{cpe}</div>
      <h1 className="font-bold">Curso:</h1>
      <div>{data.find((curso) => curso.id === curso_id)?.curso || "Curso no encontrado"}</div>

      <div className="flex flex-row gap-4 mt-4">
        <button
          onClick={() => {
            deleteItem(id);
          }}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
        >
          Borrar
        </button>
        <button onClick={() => setShowModal(true)} className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg ">
          Modificar
        </button>
      </div>

      {showModal && (
        <form onSubmit={modifyItem}>
          <div className="fixed inset-0 flex items-center justify-center gap-5 overflow-auto">
            <div className="bg-zinc-100 p-6 rounded-lg shadow-xl shadow-black/50 grid grid-cols-2 gap-5 max-w-11/12 max-h-11/12 overflow-auto">
              <h2 className="text-xl font-bold col-span-2">Modificar Total Graduados</h2>

              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label htmlFor="cd">Curso diurno:</label>
                <Input type="number" inputName="cd" defaultValue={cd} ref={newCdRef} />
              </div>

              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label htmlFor="cpe">Curso por encuentro:</label>
                <Input type="number" inputName="cpe" defaultValue={cpe} ref={newCpeRef} />
              </div>

              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label htmlFor="curso">Curso:</label>
                <Select inputName="curso" defaultValue={curso_id} ref={newCursoIdRef}>
                  {data?.map((item) => <option key={item.id} value={item.id}>{item.curso || item.nombre || `Curso ${item.id}`}</option>)}
                </Select>
              </div>

              <button type="submit" className="row-start-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Guardar Cambios</button>
              <button type="button" className="row-start-4 bg-zinc-500 text-white px-4 py-2 mx-5 rounded hover:bg-red-600" onClick={() => setShowModal(false)}>Cancelar</button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
