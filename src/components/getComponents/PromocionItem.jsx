import { tableUse } from "../../context/TablesContext";
import { useSelectFetch } from "../../hooks/useSelectFetch";
import { useState, useRef } from "react";
import Input from "../Input";
import Select from "../Select";
import { useUser } from "../../context/UserContext";

export default function PromocionItem({
  id,
  mie_1er_año,
  mie_2do_año,
  mie_3er_año,
  mie_4to_año,
  mie_5to_año,
  aprobados_limpios_1er_año,
  aprobados_limpios_2do_año,
  aprobados_limpios_3er_año,
  aprobados_limpios_4to_año,
  aprobados_limpios_5to_año,
  aprobados_con_2_1er_año,
  aprobados_con_2_2do_año,
  aprobados_con_2_3er_año,
  aprobados_con_2_4to_año,
  aprobados_con_2_5to_año,
  aprobados_con_1_1er_año,
  aprobados_con_1_2do_año,
  aprobados_con_1_3er_año,
  aprobados_con_1_4to_año,
  aprobados_con_1_5to_año,
  bajas_1er_año,
  bajas_2do_año,
  bajas_3er_año,
  bajas_4to_año,
  bajas_5to_año,
  curso_id,
}) {
  const { setPromocion, setDel, del, insert, setInsert, setNotification, setMessageSucces, setNotificationType } = tableUse();
  const { data } = useSelectFetch("http://localhost:3002/api/cursos");
  const [showDeleteModal,setShowDeleteModal]=useState()
  const [showModal, setShowModal] = useState(false);
  const { isAdmin, isDirective } = useUser();

  const refs = {
    mie_1er_año: useRef(),
    mie_2do_año: useRef(),
    mie_3er_año: useRef(),
    mie_4to_año: useRef(),
    mie_5to_año: useRef(),
    aprobados_limpios_1er_año: useRef(),
    aprobados_limpios_2do_año: useRef(),
    aprobados_limpios_3er_año: useRef(),
    aprobados_limpios_4to_año: useRef(),
    aprobados_limpios_5to_año: useRef(),
    aprobados_con_2_1er_año: useRef(),
    aprobados_con_2_2do_año: useRef(),
    aprobados_con_2_3er_año: useRef(),
    aprobados_con_2_4to_año: useRef(),
    aprobados_con_2_5to_año: useRef(),
    aprobados_con_1_1er_año: useRef(),
    aprobados_con_1_2do_año: useRef(),
    aprobados_con_1_3er_año: useRef(),
    aprobados_con_1_4to_año: useRef(),
    aprobados_con_1_5to_año: useRef(),
    bajas_1er_año: useRef(),
    bajas_2do_año: useRef(),
    bajas_3er_año: useRef(),
    bajas_4to_año: useRef(),
    bajas_5to_año: useRef(),
    curso_id: useRef(),
  };

  function deleteItem(id) {
    const url = `http://localhost:3002/api/promocion/${id}`;
    setDel(!del);
    fetch(url, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((json) => {
        setPromocion(json.data || []);
        setMessageSucces("Promoción eliminada");
        setNotificationType('delete');
        setNotification(true);
      });
  }

  function modifyItem() {
    event.preventDefault();
    const url = `http://localhost:3002/api/promocion/${id}`;
    const payload = {
      mie_1er_año: refs.mie_1er_año.current.value,
      mie_2do_año: refs.mie_2do_año.current.value,
      mie_3er_año: refs.mie_3er_año.current.value,
      mie_4to_año: refs.mie_4to_año.current.value,
      mie_5to_año: refs.mie_5to_año.current.value,
      aprobados_limpios_1er_año: refs.aprobados_limpios_1er_año.current.value,
      aprobados_limpios_2do_año: refs.aprobados_limpios_2do_año.current.value,
      aprobados_limpios_3er_año: refs.aprobados_limpios_3er_año.current.value,
      aprobados_limpios_4to_año: refs.aprobados_limpios_4to_año.current.value,
      aprobados_limpios_5to_año: refs.aprobados_limpios_5to_año.current.value,
      aprobados_con_2_1er_año: refs.aprobados_con_2_1er_año.current.value,
      aprobados_con_2_2do_año: refs.aprobados_con_2_2do_año.current.value,
      aprobados_con_2_3er_año: refs.aprobados_con_2_3er_año.current.value,
      aprobados_con_2_4to_año: refs.aprobados_con_2_4to_año.current.value,
      aprobados_con_2_5to_año: refs.aprobados_con_2_5to_año.current.value,
      aprobados_con_1_1er_año: refs.aprobados_con_1_1er_año.current.value,
      aprobados_con_1_2do_año: refs.aprobados_con_1_2do_año.current.value,
      aprobados_con_1_3er_año: refs.aprobados_con_1_3er_año.current.value,
      aprobados_con_1_4to_año: refs.aprobados_con_1_4to_año.current.value,
      aprobados_con_1_5to_año: refs.aprobados_con_1_5to_año.current.value,
      bajas_1er_año: refs.bajas_1er_año.current.value,
      bajas_2do_año: refs.bajas_2do_año.current.value,
      bajas_3er_año: refs.bajas_3er_año.current.value,
      bajas_4to_año: refs.bajas_4to_año.current.value,
      bajas_5to_año: refs.bajas_5to_año.current.value,
      curso_id: refs.curso_id.current.value,
    };

    fetch(url, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Error en la actualización");
        return res.json();
      })
      .then((json) => {
        setPromocion((prev) =>
          prev.map((item) => (item.id === id ? { ...item, ...payload } : item)),
        );
        setMessageSucces("Promoción actualizada");
        setNotificationType('insert');
        setNotification(true);
        setShowModal(false);
        setInsert(!insert);
      })
      .catch((error) => {
        console.error("Error al modificar:", error);
      });
  }

  return (
    <div className="border border-gray-300 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow p-6">
      <div className="grid grid-cols-5 gap-4">
        <div className="col-span-5">
          <p className="text-xs font-semibold text-gray-700 mb-3 border-b pb-2">Matriculación Inicial de Estudiantes (MIE)</p>
        </div>
        <div>
          <p className="text-xs font-semibold text-gray-500 mb-1">1er año</p>
          <p className="text-sm font-medium text-gray-900">{mie_1er_año}</p>
        </div>
        <div>
          <p className="text-xs font-semibold text-gray-500 mb-1">2do año</p>
          <p className="text-sm font-medium text-gray-900">{mie_2do_año}</p>
        </div>
        <div>
          <p className="text-xs font-semibold text-gray-500 mb-1">3er año</p>
          <p className="text-sm font-medium text-gray-900">{mie_3er_año}</p>
        </div>
        <div>
          <p className="text-xs font-semibold text-gray-500 mb-1">4to año</p>
          <p className="text-sm font-medium text-gray-900">{mie_4to_año}</p>
        </div>
        <div>
          <p className="text-xs font-semibold text-gray-500 mb-1">5to año</p>
          <p className="text-sm font-medium text-gray-900">{mie_5to_año}</p>
        </div>

        <div className="col-span-5">
          <p className="text-xs font-semibold text-gray-700 mb-3 border-b pb-2 mt-2">Aprobados Limpios</p>
        </div>
        <div>
          <p className="text-xs font-semibold text-gray-500 mb-1">1er año</p>
          <p className="text-sm font-medium text-gray-900">{aprobados_limpios_1er_año}</p>
        </div>
        <div>
          <p className="text-xs font-semibold text-gray-500 mb-1">2do año</p>
          <p className="text-sm font-medium text-gray-900">{aprobados_limpios_2do_año}</p>
        </div>
        <div>
          <p className="text-xs font-semibold text-gray-500 mb-1">3er año</p>
          <p className="text-sm font-medium text-gray-900">{aprobados_limpios_3er_año}</p>
        </div>
        <div>
          <p className="text-xs font-semibold text-gray-500 mb-1">4to año</p>
          <p className="text-sm font-medium text-gray-900">{aprobados_limpios_4to_año}</p>
        </div>
        <div>
          <p className="text-xs font-semibold text-gray-500 mb-1">5to año</p>
          <p className="text-sm font-medium text-gray-900">{aprobados_limpios_5to_año}</p>
        </div>

        <div className="col-span-5">
          <p className="text-xs font-semibold text-gray-700 mb-3 border-b pb-2 mt-2">Aprobados con 2</p>
        </div>
        <div>
          <p className="text-xs font-semibold text-gray-500 mb-1">1er año</p>
          <p className="text-sm font-medium text-gray-900">{aprobados_con_2_1er_año}</p>
        </div>
        <div>
          <p className="text-xs font-semibold text-gray-500 mb-1">2do año</p>
          <p className="text-sm font-medium text-gray-900">{aprobados_con_2_2do_año}</p>
        </div>
        <div>
          <p className="text-xs font-semibold text-gray-500 mb-1">3er año</p>
          <p className="text-sm font-medium text-gray-900">{aprobados_con_2_3er_año}</p>
        </div>
        <div>
          <p className="text-xs font-semibold text-gray-500 mb-1">4to año</p>
          <p className="text-sm font-medium text-gray-900">{aprobados_con_2_4to_año}</p>
        </div>
        <div>
          <p className="text-xs font-semibold text-gray-500 mb-1">5to año</p>
          <p className="text-sm font-medium text-gray-900">{aprobados_con_2_5to_año}</p>
        </div>

        <div className="col-span-5">
          <p className="text-xs font-semibold text-gray-700 mb-3 border-b pb-2 mt-2">Aprobados con 1</p>
        </div>
        <div>
          <p className="text-xs font-semibold text-gray-500 mb-1">1er año</p>
          <p className="text-sm font-medium text-gray-900">{aprobados_con_1_1er_año}</p>
        </div>
        <div>
          <p className="text-xs font-semibold text-gray-500 mb-1">2do año</p>
          <p className="text-sm font-medium text-gray-900">{aprobados_con_1_2do_año}</p>
        </div>
        <div>
          <p className="text-xs font-semibold text-gray-500 mb-1">3er año</p>
          <p className="text-sm font-medium text-gray-900">{aprobados_con_1_3er_año}</p>
        </div>
        <div>
          <p className="text-xs font-semibold text-gray-500 mb-1">4to año</p>
          <p className="text-sm font-medium text-gray-900">{aprobados_con_1_4to_año}</p>
        </div>
        <div>
          <p className="text-xs font-semibold text-gray-500 mb-1">5to año</p>
          <p className="text-sm font-medium text-gray-900">{aprobados_con_1_5to_año}</p>
        </div>

        <div className="col-span-5">
          <p className="text-xs font-semibold text-gray-700 mb-3 border-b pb-2 mt-2">Bajas</p>
        </div>
        <div>
          <p className="text-xs font-semibold text-gray-500 mb-1">1er año</p>
          <p className="text-sm font-medium text-gray-900">{bajas_1er_año}</p>
        </div>
        <div>
          <p className="text-xs font-semibold text-gray-500 mb-1">2do año</p>
          <p className="text-sm font-medium text-gray-900">{bajas_2do_año}</p>
        </div>
        <div>
          <p className="text-xs font-semibold text-gray-500 mb-1">3er año</p>
          <p className="text-sm font-medium text-gray-900">{bajas_3er_año}</p>
        </div>
        <div>
          <p className="text-xs font-semibold text-gray-500 mb-1">4to año</p>
          <p className="text-sm font-medium text-gray-900">{bajas_4to_año}</p>
        </div>
        <div>
          <p className="text-xs font-semibold text-gray-500 mb-1">5to año</p>
          <p className="text-sm font-medium text-gray-900">{bajas_5to_año}</p>
        </div>

        <div className="col-span-5">
          <p className="text-xs font-semibold text-gray-500 mb-1">Curso</p>
          <p className="text-sm font-medium text-gray-900">
            {data.find((curso) => curso.id === curso_id)?.curso || "Curso no encontrado"}
          </p>
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
              <h3 className="text-xl font-bold mb-6 text-gray-900">Modificar Promoción</h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-gray-500 mb-1 block">MIE 1er año</label>
                  <input
                    type="number"
                    value={mie_1er_año}
                    onChange={(e) => setMie_1er_año(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-900"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-500 mb-1 block">MIE 2do año</label>
                  <input
                    type="number"
                    value={mie_2do_año}
                    onChange={(e) => setMie_2do_año(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-900"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-500 mb-1 block">MIE 3er año</label>
                  <input
                    type="number"
                    value={mie_3er_año}
                    onChange={(e) => setMie_3er_año(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-900"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-500 mb-1 block">MIE 4to año</label>
                  <input
                    type="number"
                    value={mie_4to_año}
                    onChange={(e) => setMie_4to_año(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-900"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-500 mb-1 block">MIE 5to año</label>
                  <input
                    type="number"
                    value={mie_5to_año}
                    onChange={(e) => setMie_5to_año(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-900"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-gray-500 mb-1 block">Aprobados limpios 1er año</label>
                  <input
                    type="number"
                    value={aprobados_limpios_1er_año}
                    onChange={(e) => setAprobados_limpios_1er_año(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-900"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-500 mb-1 block">Aprobados limpios 2do año</label>
                  <input
                    type="number"
                    value={aprobados_limpios_2do_año}
                    onChange={(e) => setAprobados_limpios_2do_año(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-900"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-500 mb-1 block">Aprobados limpios 3er año</label>
                  <input
                    type="number"
                    value={aprobados_limpios_3er_año}
                    onChange={(e) => setAprobados_limpios_3er_año(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-900"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-500 mb-1 block">Aprobados limpios 4to año</label>
                  <input
                    type="number"
                    value={aprobados_limpios_4to_año}
                    onChange={(e) => setAprobados_limpios_4to_año(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-900"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-500 mb-1 block">Aprobados limpios 5to año</label>
                  <input
                    type="number"
                    value={aprobados_limpios_5to_año}
                    onChange={(e) => setAprobados_limpios_5to_año(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-900"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-gray-500 mb-1 block">Aprobados con 2 - 1er año</label>
                  <input
                    type="number"
                    value={aprobados_con_2_1er_año}
                    onChange={(e) => setAprobados_con_2_1er_año(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-900"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-500 mb-1 block">Aprobados con 2 - 2do año</label>
                  <input
                    type="number"
                    value={aprobados_con_2_2do_año}
                    onChange={(e) => setAprobados_con_2_2do_año(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-900"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-500 mb-1 block">Aprobados con 2 - 3er año</label>
                  <input
                    type="number"
                    value={aprobados_con_2_3er_año}
                    onChange={(e) => setAprobados_con_2_3er_año(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-900"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-500 mb-1 block">Aprobados con 2 - 4to año</label>
                  <input
                    type="number"
                    value={aprobados_con_2_4to_año}
                    onChange={(e) => setAprobados_con_2_4to_año(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-900"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-500 mb-1 block">Aprobados con 2 - 5to año</label>
                  <input
                    type="number"
                    value={aprobados_con_2_5to_año}
                    onChange={(e) => setAprobados_con_2_5to_año(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-900"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-gray-500 mb-1 block">Aprobados con 1 - 1er año</label>
                  <input
                    type="number"
                    value={aprobados_con_1_1er_año}
                    onChange={(e) => setAprobados_con_1_1er_año(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-900"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-500 mb-1 block">Aprobados con 1 - 2do año</label>
                  <input
                    type="number"
                    value={aprobados_con_1_2do_año}
                    onChange={(e) => setAprobados_con_1_2do_año(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-900"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-500 mb-1 block">Aprobados con 1 - 3er año</label>
                  <input
                    type="number"
                    value={aprobados_con_1_3er_año}
                    onChange={(e) => setAprobados_con_1_3er_año(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-900"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-500 mb-1 block">Aprobados con 1 - 4to año</label>
                  <input
                    type="number"
                    value={aprobados_con_1_4to_año}
                    onChange={(e) => setAprobados_con_1_4to_año(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-900"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-500 mb-1 block">Aprobados con 1 - 5to año</label>
                  <input
                    type="number"
                    value={aprobados_con_1_5to_año}
                    onChange={(e) => setAprobados_con_1_5to_año(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-900"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-gray-500 mb-1 block">Bajas 1er año</label>
                  <input
                    type="number"
                    value={bajas_1er_año}
                    onChange={(e) => setBajas_1er_año(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-900"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-500 mb-1 block">Bajas 2do año</label>
                  <input
                    type="number"
                    value={bajas_2do_año}
                    onChange={(e) => setBajas_2do_año(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-900"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-500 mb-1 block">Bajas 3er año</label>
                  <input
                    type="number"
                    value={bajas_3er_año}
                    onChange={(e) => setBajas_3er_año(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-900"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-500 mb-1 block">Bajas 4to año</label>
                  <input
                    type="number"
                    value={bajas_4to_año}
                    onChange={(e) => setBajas_4to_año(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-900"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-500 mb-1 block">Bajas 5to año</label>
                  <input
                    type="number"
                    value={bajas_5to_año}
                    onChange={(e) => setBajas_5to_año(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-900"
                  />
                </div>

                <div className="col-span-2">
                  <label className="text-xs font-semibold text-gray-500 mb-1 block">Curso</label>
                  <select
                    value={curso_id}
                    onChange={(e) => setCurso_id(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-900"
                  >
                    <option value="">Seleccionar curso</option>
                    {data.map((curso) => (
                      <option key={curso.id} value={curso.id}>
                        {curso.curso}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex flex-row gap-3 mt-6 justify-end">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="bg-gray-300 hover:bg-gray-400 text-gray-900 px-4 py-2 rounded-lg transition-colors text-sm font-medium"
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
            <p className="text-gray-900 mb-6">¿Está seguro que desea eliminar este registro?</p>
            <div className="flex flex-row gap-3 justify-end">
              <button
                type="button"
                onClick={() => setShowDeleteModal(false)}
                className="bg-gray-300 hover:bg-gray-400 text-gray-900 px-4 py-2 rounded-lg transition-colors text-sm font-medium"
              >
                Cancelar
              </button>
              <button
                onClick={() => deleteItem(id)}
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
