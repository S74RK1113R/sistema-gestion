import { tableUse } from "../../context/TablesContext";
import { useSelectFetch } from "../../hooks/useSelectFetch";
import { useState, useRef } from "react";
import Input from "../Input";
import Select from "../Select";
import { useUser } from "../../context/UserContext";

export default function PublicacionItem({
  año,
  titulo,
  revista_editorial,
  isbn_issn,
  clasificacion,
  bd_revista,
  autor_profesor_id,
  coautor_id,
  coautor_id_2,
  coautor_id_3,
  grupo,
  id,
}) {
  const { setPublicacion, del, setDel, insert, setInsert, setNotification, setMessageSucces, setNotificationType } = tableUse();
  const { data } = useSelectFetch("http://localhost:3002/api/profesor");
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState();
  const { isAdmin, isDirective } = useUser();

  const refs = {
    año: useRef(),
    titulo: useRef(),
    revista_editorial: useRef(),
    isbn_issn: useRef(),
    clasificacion: useRef(),
    bd_revista: useRef(),
    autor_profesor_id: useRef(),
    coautor_id: useRef(),
    coautor_id_2: useRef(),
    coautor_id_3: useRef(),
    grupo: useRef(),
  };

  function deleteItem(id) {
    const url = `http://localhost:3002/api/publicacion/${id}`;
    setDel(!del);

    fetch(url, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((json) => {
        setPublicacion(json.data || []);
        setMessageSucces("Publicación eliminada");
        setNotificationType('delete');
        setNotification(true);
      });
  }

  function modifyItem() {
    event.preventDefault();
    const url = `http://localhost:3002/api/publicacion/${id}`;
    const payload = {
      año: refs.año.current.value,
      titulo: refs.titulo.current.value,
      revista_editorial: refs.revista_editorial.current.value,
      isbn_issn: refs.isbn_issn.current.value,
      clasificacion: refs.clasificacion.current.value,
      bd_revista: refs.bd_revista.current.value,
      autor_profesor_id: refs.autor_profesor_id.current.value,
      coautor_id: refs.coautor_id.current.value,
      coautor_id_2: refs.coautor_id_2.current.value,
      coautor_id_3: refs.coautor_id_3.current.value,
      grupo: refs.grupo.current.value,
    };

    fetch(url, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload),
    })
      .then((res) => {
        if (!res.ok) return res.json();
      })
      .then((json) => {
        setPublicacion(json?.data || []);
        setMessageSucces("Publicación actualizada");
        setNotificationType('insert');
        setNotification(true);
        setInsert(!insert);
      });
  }
  return (
    <div className="mb-5 border border-black w-11/12 flex flex-col items-center justify-center shadow-lg shadow-zinc-950/60 p-5 rounded-lg">
      <h1 className="font-bold">Año:</h1>
      <div>{año}</div>
      <h1 className="font-bold">Titulo:</h1>
      <div>{titulo}</div>
      <h1 className="font-bold">Revista/Editorial:</h1>
      <div>{revista_editorial}</div>
      <h1 className="font-bold">ISBN/ISSN:</h1>
      <div>{isbn_issn}</div>
      <h1 className="font-bold">Clasificación:</h1>
      <div>{clasificacion}</div>
      <h1 className="font-bold">Base de datos de revista:</h1>
      <div>{bd_revista}</div>
      <h1 className="font-bold">Autor principal:</h1>
      <div>
        {data.find((profesor) => profesor.id === autor_profesor_id)?.nombres +
          " " +
          data.find((profesor) => profesor.id === autor_profesor_id)
            ?.primer_apellido +
          " " +
          data.find((profesor) => profesor.id === autor_profesor_id)
            ?.segundo_apellido || "No definido"}
      </div>
      <h1 className="font-bold">Coautor:</h1>
      <div>
        {data.find((profesor) => profesor.id === coautor_id)
          ? `${data.find((profesor) => profesor.id === coautor_id).nombres} ${data.find((profesor) => profesor.id === coautor_id).primer_apellido} ${data.find((profesor) => profesor.id === coautor_id).segundo_apellido}`
          : "No definido"}
      </div>
      <h1 className="font-bold">Coautor 2:</h1>
      <div>
        {data.find((profesor) => profesor.id === coautor_id_2)
          ? `${data.find((profesor) => profesor.id === coautor_id_2).nombres} ${data.find((profesor) => profesor.id === coautor_id_2).primer_apellido} ${data.find((profesor) => profesor.id === coautor_id_2).segundo_apellido}`
          : "No definido"}
      </div>
      <h1 className="font-bold">Coautor 3:</h1>
      <div>
        {data.find((profesor) => profesor.id === coautor_id_3)
          ? `${data.find((profesor) => profesor.id === coautor_id_3).nombres} ${data.find((profesor) => profesor.id === coautor_id_3).primer_apellido} ${data.find((profesor) => profesor.id === coautor_id_3).segundo_apellido}`
          : "No definido"}
      </div>
      <h1 className="font-bold">Grupo:</h1>
      <div>{grupo}</div>

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

      {showModal && (
        <form onSubmit={modifyItem}>
          <div className="fixed inset-0 flex items-center justify-center gap-5 overflow-auto">
            <div className="bg-zinc-100 p-6 rounded-lg shadow-xl shadow-black/50 grid grid-cols-4 gap-5 max-w-11/12 max-h-11/12 overflow-auto">
              <h2 className="text-xl font-bold col-span-4">
                Modificar Publicación
              </h2>

              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label>Año:</label>
                <Input type="number" defaultValue={año} ref={refs.año} />
              </div>
              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label>Título:</label>
                <Input type="text" defaultValue={titulo} ref={refs.titulo} />
              </div>

              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label>Revista/Editorial:</label>
                <Input
                  type="text"
                  defaultValue={revista_editorial}
                  ref={refs.revista_editorial}
                />
              </div>

              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label>ISBN/ISSN:</label>
                <Input
                  type="text"
                  defaultValue={isbn_issn}
                  ref={refs.isbn_issn}
                />
              </div>

              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label htmlFor="clasificacion">Clasificación:</label>
                <Select
                  inputName="clasificacion"
                  ref={refs.clasificacion}
                  defaultValue={clasificacion}
                >
                  <option value="articulo">Artículo</option>
                  <option value="libro">Libro</option>
                  <option value="libro digital">Libro digital</option>
                  <option value="capitulo de libro">Capitulo de libro</option>
                  <option value="texto de la carrera">
                    Texto de la carrera
                  </option>
                  <option value="material docente interno">
                    Material docente interno
                  </option>
                  <option value="patente">Patente</option>
                </Select>
              </div>

              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label htmlFor="bd_revista">Base de datos de la revista:</label>
                <Input
                  type="text"
                  inputName="bd_revista"
                  ref={refs.bd_revista}
                  defaultValue={bd_revista}
                />
              </div>

              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label>Autor principal:</label>
                <Select
                  defaultValue={autor_profesor_id}
                  ref={refs.autor_profesor_id}
                >
                  {data?.map((p) => (
                    <option
                      key={p.id}
                      value={p.id}
                    >{`${p.nombres} ${p.primer_apellido}`}</option>
                  ))}
                </Select>
              </div>

              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label>Coautor 1:</label>
                <Select defaultValue={coautor_id} ref={refs.coautor_id}>
                  <option value="0" selected>
                    --No definido--
                  </option>
                  {data?.map((p) => (
                    <option
                      key={p.id}
                      value={p.id}
                    >{`${p.nombres} ${p.primer_apellido}`}</option>
                  ))}
                </Select>
              </div>
              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label>Coautor 2:</label>
                <Select defaultValue={coautor_id_2} ref={refs.coautor_id_2}>
                  <option value="0" selected>
                    --No definido--
                  </option>
                  {data?.map((p) => (
                    <option
                      key={p.id}
                      value={p.id}
                    >{`${p.nombres} ${p.primer_apellido}`}</option>
                  ))}
                </Select>
              </div>
              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label>Coautor 3:</label>
                <Select defaultValue={coautor_id_3} ref={refs.coautor_id_3}>
                  <option value="0" selected>
                    --No definido--
                  </option>
                  {data?.map((p) => (
                    <option
                      key={p.id}
                      value={p.id}
                    >{`${p.nombres} ${p.primer_apellido}`}</option>
                  ))}
                </Select>
              </div>

              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label>Grupo:</label>
                <Input type="text" defaultValue={grupo} ref={refs.grupo} />
              </div>

              <button
                type="submit"
                className="bg-blue-500 row-start-5 col-start-2 text-white px-4 py-2 my-5 rounded hover:bg-blue-600"
              >
                Guardar Cambios
              </button>
              <button
                type="button"
                className="bg-zinc-500 row-start-5 col-start-3 text-white px-4 py-2 my-5 mx-5 rounded hover:bg-red-600"
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
