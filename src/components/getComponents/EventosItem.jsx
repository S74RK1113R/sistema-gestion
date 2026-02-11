import { tableUse } from "../../context/TablesContext";
import { useState, useRef } from "react";
import Input from "../Input";
import Select from "../Select";
import { useSelectFetch } from "../../hooks/useSelectFetch";
import { useUser } from "../../context/UserContext";

export default function EventosItem({
  año,
  titulo,
  nombre_evento,
  clasificacion,
  profesor_id,
  profesor_autor_id2,
  profesor_autor_id3,
  profesor_autor_id4,
  profesor_autor_id5,
  id,
}) {
  const { setEventos, del, setDel, insert, setInsert, setNotification, setMessageSucces, setNotificationType } = tableUse();
  const { data: profesoresData } = useSelectFetch(
    "http://localhost:3002/api/profesor",
  );
  const [showDeleteModal,setShowDeleteModal]=useState()
  const [showModal, setShowModal] = useState(false);
  const { isAdmin, isDirective } = useUser();

  const refs = {
    año: useRef(),
    titulo: useRef(),
    nombre_evento: useRef(),
    clasificacion: useRef(),
    profesor_id: useRef(),
    profesor_autor_id2: useRef(),
    profesor_autor_id3: useRef(),
    profesor_autor_id4: useRef(),
    profesor_autor_id5: useRef(),
  };

  function deleteItem(id) {
    const url = `http://localhost:3002/api/eventos/${id}`;
    setDel(!del);

    fetch(url, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((json) => {
        setEventos(json.data || []);
        setMessageSucces("Evento eliminado");
        setNotificationType('delete');
        setNotification(true);
      });
  }

  function modifyItem() {
    event.preventDefault();
    const url = `http://localhost:3002/api/eventos/${id}`;
    const payload = {
      año: refs.año.current.value,
      titulo: refs.titulo.current.value,
      nombre_evento: refs.nombre_evento.current.value,
      clasificacion: refs.clasificacion.current.value,
      profesor_id: refs.profesor_id.current.value,
      profesor_autor_id2: refs.profesor_autor_id2.current.value,
      profesor_autor_id3: refs.profesor_autor_id3.current.value,
      profesor_autor_id4: refs.profesor_autor_id4.current.value,
      profesor_autor_id5: refs.profesor_autor_id5.current.value,
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
        setEventos(json?.data || []);
        setMessageSucces("Evento actualizado");
        setNotificationType('insert');
        setNotification(true);
        setInsert(!insert)
      });
  }

  return (
    <div className="border border-gray-300 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow p-6">
      <div className="grid grid-cols-3 gap-4">
        <div>
          <p className="text-xs font-semibold text-gray-500 mb-1">Año</p>
          <p className="text-sm font-medium text-gray-900">{año}</p>
        </div>
        <div>
          <p className="text-xs font-semibold text-gray-500 mb-1">Título</p>
          <p className="text-sm font-medium text-gray-900">{titulo}</p>
        </div>
        <div>
          <p className="text-xs font-semibold text-gray-500 mb-1">Evento</p>
          <p className="text-sm font-medium text-gray-900">{nombre_evento}</p>
        </div>
        <div>
          <p className="text-xs font-semibold text-gray-500 mb-1">Clasificación</p>
          <p className="text-sm font-medium text-gray-900">{clasificacion}</p>
        </div>
        <div>
          <p className="text-xs font-semibold text-gray-500 mb-1">Profesor 1</p>
          <p className="text-sm font-medium text-gray-900">{profesor_id}</p>
        </div>
        {profesor_autor_id2 != 0 && (
          <div>
            <p className="text-xs font-semibold text-gray-500 mb-1">Profesor 2</p>
            <p className="text-sm font-medium text-gray-900">{profesor_autor_id2}</p>
          </div>
        )}
        {profesor_autor_id3 != 0 && (
          <div>
            <p className="text-xs font-semibold text-gray-500 mb-1">Profesor 3</p>
            <p className="text-sm font-medium text-gray-900">{profesor_autor_id3}</p>
          </div>
        )}
        {profesor_autor_id4 != 0 && (
          <div>
            <p className="text-xs font-semibold text-gray-500 mb-1">Profesor 4</p>
            <p className="text-sm font-medium text-gray-900">{profesor_autor_id4}</p>
          </div>
        )}
        {profesor_autor_id5 != 0 && (
          <div>
            <p className="text-xs font-semibold text-gray-500 mb-1">Profesor 5</p>
            <p className="text-sm font-medium text-gray-900">{profesor_autor_id5}</p>
          </div>
        )}
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
            <div className="bg-white p-8 rounded-lg shadow-2xl grid grid-cols-3 gap-5 max-w-2xl w-full mx-4 max-h-96 overflow-y-auto">
              <h2 className="text-xl font-bold col-span-3">Modificar Evento</h2>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-gray-700">Año:</label>
                <Input type="number" defaultValue={año} ref={refs.año} placeholder="2024" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-gray-700">Título:</label>
                <Input type="text" defaultValue={titulo} ref={refs.titulo} placeholder="Ej: Conferencia..." />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-gray-700">Nombre del evento:</label>
                <Input
                  type="text"
                  defaultValue={nombre_evento}
                  ref={refs.nombre_evento}
                  placeholder="Ej: Seminario..."
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="clasificacion" className="text-sm font-semibold text-gray-700">Clasificación:</label>
                <Select
                  inputName="clasificacion"
                  ref={refs.clasificacion}
                  defaultValue={clasificacion}
                >
                  <option value="provincial">Provincial</option>
                  <option value="municipal">Municipal</option>
                  <option value="nacional">Nacional</option>
                  <option value="internacional">Internacional</option>
                  <option value="base">Base</option>
                </Select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-gray-700">Profesor 1:</label>
                <Select defaultValue={profesor_id} ref={refs.profesor_id}>
                  {profesoresData?.map((p) => (
                    <option
                      key={p.id}
                      value={p.id}
                    >{`${p.nombres} ${p.primer_apellido}`}</option>
                  ))}
                </Select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-gray-700">Profesor 2:</label>
                <Select
                  defaultValue={profesor_autor_id2}
                  ref={refs.profesor_autor_id2}
                >
                  <option value="0" selected>
                    --Sin profesor--
                  </option>
                  {profesoresData?.map((p) => (
                    <option
                      key={p.id}
                      value={p.id}
                    >{`${p.nombres} ${p.primer_apellido}`}</option>
                  ))}
                </Select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-gray-700">Profesor 3:</label>
                <Select
                  defaultValue={profesor_autor_id3}
                  ref={refs.profesor_autor_id3}
                >
                  <option value="0" selected>
                    --Sin profesor--
                  </option>
                  {profesoresData?.map((p) => (
                    <option
                      key={p.id}
                      value={p.id}
                    >{`${p.nombres} ${p.primer_apellido}`}</option>
                  ))}
                </Select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-gray-700">Profesor 4:</label>
                <Select
                  defaultValue={profesor_autor_id4}
                  ref={refs.profesor_autor_id4}
                >
                  <option value="0" selected>
                    --Sin profesor--
                  </option>
                  {profesoresData?.map((p) => (
                    <option
                      key={p.id}
                      value={p.id}
                    >{`${p.nombres} ${p.primer_apellido}`}</option>
                  ))}
                </Select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-gray-700">Profesor 5:</label>
                <Select
                  defaultValue={profesor_autor_id5}
                  ref={refs.profesor_autor_id5}
                >
                  <option value="0" selected>
                    --Sin profesor--
                  </option>
                  {profesoresData?.map((p) => (
                    <option
                      key={p.id}
                      value={p.id}
                    >{`${p.nombres} ${p.primer_apellido}`}</option>
                  ))}
                </Select>
              </div>

              <div className="col-span-3 flex gap-3 mt-4">
                <button
                  type="submit"
                  className="flex-1 bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors"
                >
                  Guardar
                </button>
                <button
                  type="button"
                  className="flex-1 bg-gray-300 text-gray-900 px-4 py-2 rounded-lg hover:bg-gray-400 transition-colors"
                  onClick={() => setShowModal(false)}
                >
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        </form>
      )}

      {showDeleteModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center backdrop-blur-sm z-50">
          <div className="bg-white p-6 rounded-lg shadow-2xl max-w-sm w-full mx-4">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Confirmar eliminación</h2>
            <p className="text-gray-600 mb-6">¿Está seguro que desea eliminar este evento?</p>
            <div className="flex gap-3">
              <button
                onClick={() => {
                  deleteItem(id);
                }}
                className="flex-1 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
              >
                Eliminar
              </button>
              <button
                onClick={() => setShowDeleteModal(false)}
                className="flex-1 bg-gray-300 text-gray-900 px-4 py-2 rounded-lg hover:bg-gray-400 transition-colors"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
