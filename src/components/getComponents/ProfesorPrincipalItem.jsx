import { tableUse } from "../../context/TablesContext";
import { useRef, useState } from "react";
import Select from "../Select";
import { useSelectFetch } from "../../hooks/useSelectFetch";
import { useUser } from "../../context/UserContext";

export default function ProfesorPrincipalItem({
  disciplina_id,
  profesor_id,
  id,
}) {
  const { setProfesorPrincipal, setDel, del, insert, setInsert, setNotification, setMessageSucces, setNotificationType } = tableUse();
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal,setShowDeleteModal]=useState()
  const { isAdmin, isDirective } = useUser();

  const { data: disciplinasData } = useSelectFetch(
    "http://localhost:3002/api/disciplinas",
  );
  const { data: profesoresData } = useSelectFetch(
    "http://localhost:3002/api/profesor",
  );

  const newDisciplinaIdRef = useRef();
  const newProfesorIdRef = useRef();

  function modifyItem() {
    event.preventDefault();
    const url = `http://localhost:3002/api/profesor_principal/${id}`;
    const newProfesorPrincipal = {
      disciplina_id: newDisciplinaIdRef.current.value,
      profesor_id: newProfesorIdRef.current.value,
    };

    fetch(url, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      // Send your data in the request body as JSON
      body: JSON.stringify(newProfesorPrincipal),
    })
      .then((res) => {
        if (!res.ok) {
          return res.json();
        }
        // handle error
      })
      .then((json) => {
        setProfesorPrincipal(json?.data || []);
        setMessageSucces("Profesor principal actualizado");
        setNotificationType('insert');
        setNotification(true);
        setInsert(!insert);
      });
  }

  function deleteItem(id) {
    const url = `http://localhost:3002/api/profesor_principal/${id}`;
    setDel(!del);
    fetch(url, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((json) => {
        setProfesorPrincipal(json.data || []);
        setMessageSucces("Profesor principal eliminado");
        setNotificationType('delete');
        setNotification(true);
      });
  }

  return (
    <div className="mb-5 border border-black w-11/12 flex flex-col items-center justify-center shadow-lg shadow-zinc-950/60 p-5 rounded-lg">
      <h1 className="font-bold">Disciplina:</h1>
      <div>{disciplina_id}</div>
      <h1 className="font-bold">Profesor:</h1>
      <div>{profesor_id}</div>

      {(isAdmin || isDirective) && (
        <div className="flex flex-row gap-4 mt-4">
          <button
            onClick={() => {
              setShowDeleteModal(true);
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
      )}

      {/*Modal Zone */}
      {showModal && (
        <form onSubmit={modifyItem}>
          <div className="fixed inset-0 flex items-center justify-center">
            <div className="bg-zinc-100 p-6 rounded-lg shadow-xl shadow-black/50 grid grid-cols-2 gap-5 max-w-11/12 max-h-11/12 overflow-auto">
              <h2 className="text-xl font-bold col-span-2">
                Modificar Disciplina
              </h2>

              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label htmlFor="disciplina">Disciplina:</label>
                <Select
                  inputName="disciplina"
                  defaultValue={disciplina_id}
                  ref={newDisciplinaIdRef}
                >
                  {disciplinasData?.map((item) => {
                    return <option value={item.id}>{item.nombre}</option>;
                  })}
                </Select>
              </div>

              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label htmlFor="profesor">Profesor:</label>
                <Select
                  inputName="profesor"
                  ref={newProfesorIdRef}
                  defaultValue={profesor_id}
                >
                  {profesoresData?.map((item) => {
                    return (
                      <option
                        value={item.id}
                        key={item.id}
                      >{`${item.nombres} ${item.primer_apellido} ${item.segundo_apellido}`}</option>
                    );
                  })}
                </Select>
              </div>

              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Guardar Cambios
              </button>
              <button
                type="button"
                className="bg-zinc-500 text-white px-4 py-2 mx-5 rounded hover:bg-red-600"
                onClick={() => setShowModal(false)}
              >
                Cancelar
              </button>
            </div>
          </div>
        </form>
      )}

       {showDeleteModal && (
        <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 flex flex-col items-center justify-center gap-5 overflow-auto shadow-xl shadow-black/60 bg-zinc-100 w-max h-max p-5 rounded-md">
          <h1 className="font-bold">¿Está seguro que quiere eliminar?</h1>
          <div className="flex gap-5">
            <button
              onClick={() => {
                deleteItem(id);
              }}
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
            >
              Borrar
            </button>
            <button
              onClick={() => setShowDeleteModal(false)}
              className="bg-zinc-500 hover:bg-zinc-600 text-white px-4 py-2 rounded-lg "
            >
              Cancelar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
