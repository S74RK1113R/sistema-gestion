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
    <div className="border border-gray-300 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow p-6">
      <div className="grid grid-cols-3 gap-4">
        <div>
          <p className="text-xs font-semibold text-gray-500 mb-1">Año</p>
          <p className="text-sm font-medium text-gray-900">{año}</p>
        </div>
        <div className="col-span-2">
          <p className="text-xs font-semibold text-gray-500 mb-1">Título</p>
          <p className="text-sm font-medium text-gray-900">{titulo}</p>
        </div>
        <div className="col-span-2">
          <p className="text-xs font-semibold text-gray-500 mb-1">Revista/Editorial</p>
          <p className="text-sm font-medium text-gray-900">{revista_editorial}</p>
        </div>
        <div>
          <p className="text-xs font-semibold text-gray-500 mb-1">ISBN/ISSN</p>
          <p className="text-sm font-medium text-gray-900">{isbn_issn}</p>
        </div>
        <div>
          <p className="text-xs font-semibold text-gray-500 mb-1">Clasificación</p>
          <p className="text-sm font-medium text-gray-900">{clasificacion}</p>
        </div>
        <div className="col-span-2">
          <p className="text-xs font-semibold text-gray-500 mb-1">Base de datos de revista</p>
          <p className="text-sm font-medium text-gray-900">{bd_revista}</p>
        </div>
        <div className="col-span-3">
          <p className="text-xs font-semibold text-gray-500 mb-1">Autor principal</p>
          <p className="text-sm font-medium text-gray-900">
            {data.find((profesor) => profesor.id === autor_profesor_id)?.nombres +
              " " +
              data.find((profesor) => profesor.id === autor_profesor_id)?.primer_apellido +
              " " +
              data.find((profesor) => profesor.id === autor_profesor_id)?.segundo_apellido || "No definido"}
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold text-gray-500 mb-1">Coautor 1</p>
          <p className="text-sm font-medium text-gray-900">
            {data.find((profesor) => profesor.id === coautor_id)
              ? `${data.find((profesor) => profesor.id === coautor_id).nombres} ${data.find((profesor) => profesor.id === coautor_id).primer_apellido}`
              : "No definido"}
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold text-gray-500 mb-1">Coautor 2</p>
          <p className="text-sm font-medium text-gray-900">
            {data.find((profesor) => profesor.id === coautor_id_2)
              ? `${data.find((profesor) => profesor.id === coautor_id_2).nombres} ${data.find((profesor) => profesor.id === coautor_id_2).primer_apellido}`
              : "No definido"}
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold text-gray-500 mb-1">Coautor 3</p>
          <p className="text-sm font-medium text-gray-900">
            {data.find((profesor) => profesor.id === coautor_id_3)
              ? `${data.find((profesor) => profesor.id === coautor_id_3).nombres} ${data.find((profesor) => profesor.id === coautor_id_3).primer_apellido}`
              : "No definido"}
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold text-gray-500 mb-1">Grupo</p>
          <p className="text-sm font-medium text-gray-900">{grupo}</p>
        </div>
      </div>

      {(isAdmin || isDirective) && (
        <div className="flex flex-row gap-3 mt-6 justify-end">
          <button
            onClick={() => {
              setShowDeleteModal(true);
            }}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors text-sm font-medium"
          >
            Eliminar
          </button>

          <button
            onClick={() => setShowModal(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors text-sm font-medium"
          >
            Modificar
          </button>
        </div>
      )}

      {showModal && (
        <form onSubmit={modifyItem}>
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center backdrop-blur-sm z-50">
            <div className="bg-white p-8 rounded-lg shadow-2xl max-w-2xl w-full mx-4 max-h-96 overflow-y-auto">
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                Modificar Publicación
              </h2>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col justify-start gap-2">
                  <label className="text-sm font-semibold text-gray-700">Año:</label>
                  <Input type="number" inputName="año" defaultValue={año} ref={refs.año} placeholder="Año" />
                </div>
                <div className="flex flex-col justify-start gap-2">
                  <label className="text-sm font-semibold text-gray-700">Título:</label>
                  <Input type="text" inputName="titulo" defaultValue={titulo} ref={refs.titulo} placeholder="Título" />
                </div>

                <div className="flex flex-col justify-start gap-2 col-span-2">
                  <label className="text-sm font-semibold text-gray-700">Revista/Editorial:</label>
                  <Input
                    type="text"
                    inputName="revista_editorial"
                    defaultValue={revista_editorial}
                    ref={refs.revista_editorial}
                    placeholder="Revista/Editorial"
                  />
                </div>

                <div className="flex flex-col justify-start gap-2">
                  <label className="text-sm font-semibold text-gray-700">ISBN/ISSN:</label>
                  <Input
                    type="text"
                    inputName="isbn_issn"
                    defaultValue={isbn_issn}
                    ref={refs.isbn_issn}
                    placeholder="ISBN/ISSN"
                  />
                </div>

                <div className="flex flex-col justify-start gap-2">
                  <label className="text-sm font-semibold text-gray-700">Clasificación:</label>
                  <Select
                    inputName="clasificacion"
                    ref={refs.clasificacion}
                    defaultValue={clasificacion}
                  >
                    <option value="articulo">Artículo</option>
                    <option value="libro">Libro</option>
                    <option value="libro digital">Libro digital</option>
                    <option value="capitulo de libro">Capítulo de libro</option>
                    <option value="texto de la carrera">Texto de la carrera</option>
                    <option value="material docente interno">Material docente interno</option>
                    <option value="patente">Patente</option>
                  </Select>
                </div>

                <div className="flex flex-col justify-start gap-2 col-span-2">
                  <label className="text-sm font-semibold text-gray-700">Base de datos de revista:</label>
                  <Input
                    type="text"
                    inputName="bd_revista"
                    ref={refs.bd_revista}
                    defaultValue={bd_revista}
                    placeholder="Base de datos"
                  />
                </div>

                <div className="flex flex-col justify-start gap-2 col-span-2">
                  <label className="text-sm font-semibold text-gray-700">Autor principal:</label>
                  <Select
                    inputName="autor_profesor"
                    defaultValue={autor_profesor_id}
                    ref={refs.autor_profesor_id}
                  >
                    {data?.map((p) => (
                      <option key={p.id} value={p.id}>{`${p.nombres} ${p.primer_apellido}`}</option>
                    ))}
                  </Select>
                </div>

                <div className="flex flex-col justify-start gap-2">
                  <label className="text-sm font-semibold text-gray-700">Coautor 1:</label>
                  <Select inputName="coautor1" defaultValue={coautor_id} ref={refs.coautor_id}>
                    <option value="0">--No definido--</option>
                    {data?.map((p) => (
                      <option key={p.id} value={p.id}>{`${p.nombres} ${p.primer_apellido}`}</option>
                    ))}
                  </Select>
                </div>
                <div className="flex flex-col justify-start gap-2">
                  <label className="text-sm font-semibold text-gray-700">Coautor 2:</label>
                  <Select inputName="coautor2" defaultValue={coautor_id_2} ref={refs.coautor_id_2}>
                    <option value="0">--No definido--</option>
                    {data?.map((p) => (
                      <option key={p.id} value={p.id}>{`${p.nombres} ${p.primer_apellido}`}</option>
                    ))}
                  </Select>
                </div>
                <div className="flex flex-col justify-start gap-2">
                  <label className="text-sm font-semibold text-gray-700">Coautor 3:</label>
                  <Select inputName="coautor3" defaultValue={coautor_id_3} ref={refs.coautor_id_3}>
                    <option value="0">--No definido--</option>
                    {data?.map((p) => (
                      <option key={p.id} value={p.id}>{`${p.nombres} ${p.primer_apellido}`}</option>
                    ))}
                  </Select>
                </div>

                <div className="flex flex-col justify-start gap-2">
                  <label className="text-sm font-semibold text-gray-700">Grupo:</label>
                  <Input type="text" inputName="grupo" defaultValue={grupo} ref={refs.grupo} placeholder="Grupo" />
                </div>
              </div>

              <div className="flex gap-3 justify-end mt-6">
                <button
                  type="button"
                  className="bg-gray-300 hover:bg-gray-400 text-gray-900 px-4 py-2 rounded-lg transition-colors text-sm font-medium"
                  onClick={() => setShowModal(false)}
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg transition-colors text-sm font-medium"
                >
                  Guardar
                </button>
              </div>
            </div>
          </div>
        </form>
      )}

      {showDeleteModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center backdrop-blur-sm z-50">
          <div className="bg-white rounded-lg shadow-2xl p-6 max-w-sm mx-4">
            <h2 className="text-lg font-bold text-gray-900 mb-4">Confirmar eliminación</h2>
            <p className="text-gray-600 mb-6">¿Está seguro que desea eliminar esta publicación?</p>
            <div className="flex gap-3 justify-end">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="bg-gray-300 hover:bg-gray-400 text-gray-900 px-4 py-2 rounded-lg transition-colors text-sm font-medium"
              >
                Cancelar
              </button>
              <button
                onClick={() => {
                  deleteItem(id);
                }}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors text-sm font-medium"
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
