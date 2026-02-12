import Input from "../Input";
import Select from "../Select";
import { tableUse } from "../../context/TablesContext";
import { useRef } from "react";
import { useSelectFetch } from "../../hooks/useSelectFetch";

export default function PromocionForm() {
  const { setPromocion, setInsert, insert, setMessageSucces, setNotification, setNotificationType } = tableUse();
  const { data } = useSelectFetch("http://localhost:3002/api/cursos");

  const mie_1er_añoRef = useRef();
  const mie_2do_añoRef = useRef();
  const mie_3er_añoRef = useRef();
  const mie_4to_añoRef = useRef();
  const mie_5to_añoRef = useRef();
  const aprobados_limpios_1er_añoRef = useRef();
  const aprobados_limpios_2do_añoRef = useRef();
  const aprobados_limpios_3er_añoRef = useRef();
  const aprobados_limpios_4to_añoRef = useRef();
  const aprobados_limpios_5to_añoRef = useRef();
  const aprobados_con_2_1er_añoRef = useRef();
  const aprobados_con_2_2do_añoRef = useRef();
  const aprobados_con_2_3er_añoRef = useRef();
  const aprobados_con_2_4to_añoRef = useRef();
  const aprobados_con_2_5to_añoRef = useRef();
  const aprobados_con_1_1er_añoRef = useRef();
  const aprobados_con_1_2do_añoRef = useRef();
  const aprobados_con_1_3er_añoRef = useRef();
  const aprobados_con_1_4to_añoRef = useRef();
  const aprobados_con_1_5to_añoRef = useRef();
  const bajas_1er_añoRef = useRef();
  const bajas_2do_añoRef = useRef();
  const bajas_3er_añoRef = useRef();
  const bajas_4to_añoRef = useRef();
  const bajas_5to_añoRef = useRef();
  const cursoRef = useRef();

  function erraseInput() {
    mie_1er_añoRef.current.value = "";
    mie_2do_añoRef.current.value = "";
    mie_3er_añoRef.current.value = "";
    mie_4to_añoRef.current.value = "";
    mie_5to_añoRef.current.value = "";
    aprobados_limpios_1er_añoRef.current.value = "";
    aprobados_limpios_2do_añoRef.current.value = "";
    aprobados_limpios_3er_añoRef.current.value = "";
    aprobados_limpios_4to_añoRef.current.value = "";
    aprobados_limpios_5to_añoRef.current.value = "";
    aprobados_con_2_1er_añoRef.current.value = "";
    aprobados_con_2_2do_añoRef.current.value = "";
    aprobados_con_2_3er_añoRef.current.value = "";
    aprobados_con_2_4to_añoRef.current.value = "";
    aprobados_con_2_5to_añoRef.current.value = "";
    aprobados_con_1_1er_añoRef.current.value = "";
    aprobados_limpios_2do_añoRef.current.value = "";
    aprobados_limpios_3er_añoRef.current.value = "";
    aprobados_limpios_4to_añoRef.current.value = "";
    aprobados_limpios_5to_añoRef.current.value = "";
    aprobados_con_2_1er_añoRef.current.value = "";
    aprobados_con_2_2do_añoRef.current.value = "";
    aprobados_con_2_3er_añoRef.current.value = "";
    aprobados_con_2_4to_añoRef.current.value = "";
    aprobados_con_2_5to_añoRef.current.value = "";
    aprobados_con_1_1er_añoRef.current.value = "";
    aprobados_con_1_2do_añoRef.current.value = "";
    aprobados_con_1_3er_añoRef.current.value = "";
    aprobados_con_1_4to_añoRef.current.value = "";
    aprobados_con_1_5to_añoRef.current.value = "";
    bajas_1er_añoRef.current.value = "";
    bajas_2do_añoRef.current.value = "";
    bajas_3er_añoRef.current.value = "";
    bajas_4to_añoRef.current.value = "";
    bajas_5to_añoRef.current.value = "";
  }

  function handleSubmit() {
    event.preventDefault();
    const promocion = {
      mie_1er_año: mie_1er_añoRef.current.value,
      mie_2do_año: mie_2do_añoRef.current.value,
      mie_3er_año: mie_3er_añoRef.current.value,
      mie_4to_año: mie_4to_añoRef.current.value,
      mie_5to_año: mie_5to_añoRef.current.value,
      aprobados_limpios_1er_año: aprobados_limpios_1er_añoRef.current.value,
      aprobados_limpios_2do_año: aprobados_limpios_2do_añoRef.current.value,
      aprobados_limpios_3er_año: aprobados_limpios_3er_añoRef.current.value,
      aprobados_limpios_4to_año: aprobados_limpios_4to_añoRef.current.value,
      aprobados_limpios_5to_año: aprobados_limpios_5to_añoRef.current.value,
      aprobados_con_2_1er_año: aprobados_con_2_1er_añoRef.current.value,
      aprobados_con_2_2do_año: aprobados_con_2_2do_añoRef.current.value,
      aprobados_con_2_3er_año: aprobados_con_2_3er_añoRef.current.value,
      aprobados_con_2_4to_año: aprobados_con_2_4to_añoRef.current.value,
      aprobados_con_2_5to_año: aprobados_con_2_5to_añoRef.current.value,
      aprobados_con_1_1er_año: aprobados_con_1_1er_añoRef.current.value,
      aprobados_con_1_2do_año: aprobados_con_1_2do_añoRef.current.value,
      aprobados_con_1_3er_año: aprobados_con_1_3er_añoRef.current.value,
      aprobados_con_1_4to_año: aprobados_con_1_4to_añoRef.current.value,
      aprobados_con_1_5to_año: aprobados_con_1_5to_añoRef.current.value,
      bajas_1er_año: bajas_1er_añoRef.current.value,
      bajas_2do_año: bajas_2do_añoRef.current.value,
      bajas_3er_año: bajas_3er_añoRef.current.value,
      bajas_4to_año: bajas_4to_añoRef.current.value,
      bajas_5to_año: bajas_5to_añoRef.current.value,
      curso_id: cursoRef.current.value,
    };

    erraseInput();

    const url = "http://localhost:3002/api/promocion";
    fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      // Send your data in the request body as JSON
      body: JSON.stringify(promocion),
    })
      .then((res) => {
        if (!res.ok) {
          return res.json();
        }
        // handle error
      })
      .then((json) => {
        setPromocion(json?.data || []);
        setMessageSucces("Promoción insertada");
        setNotificationType('insert');
        setNotification(true);
      });

    setInsert(!insert);
  }
  return (
    <div className="w-full max-w-6xl mx-auto">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-5 gap-6 p-2">
          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="mie_1er_año" className="text-sm font-semibold text-gray-700">Mie 1er año:</label>
            <Input type="number" inputName="mie_1er_año" min="0" ref={mie_1er_añoRef} placeholder="0" />
          </div>
          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="mie_2do_año" className="text-sm font-semibold text-gray-700">Mie 2do año:</label>
            <Input type="number" inputName="mie_2do_año" min="0" ref={mie_2do_añoRef} placeholder="0" />
          </div>
          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="mie_3ro_año" className="text-sm font-semibold text-gray-700">Mie 3er año:</label>
            <Input type="number" inputName="mie_3ro_año" min="0" ref={mie_3er_añoRef} placeholder="0" />
          </div>
          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="mie_4to_año" className="text-sm font-semibold text-gray-700">Mie 4to año:</label>
            <Input type="number" inputName="mie_4to_año" min="0" ref={mie_4to_añoRef} placeholder="0" />
          </div>
          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="mie_5to_año" className="text-sm font-semibold text-gray-700">Mie 5to año:</label>
            <Input type="number" inputName="mie_5to_año" min="0" ref={mie_5to_añoRef} placeholder="0" />
          </div>

          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="aprobados_limpios_1ro" className="text-sm font-semibold text-gray-700">Aprobados limpios 1ro</label>
            <Input type="number" inputName="aprobados_limpios_1ro" min="0" ref={aprobados_limpios_1er_añoRef} placeholder="0" />
          </div>
          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="aprobados_limpios_2do" className="text-sm font-semibold text-gray-700">Aprobados limpios 2do</label>
            <Input type="number" inputName="aprobados_limpios_2do" min="0" ref={aprobados_limpios_2do_añoRef} placeholder="0" />
          </div>
          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="aprobados_limpios_3ro" className="text-sm font-semibold text-gray-700">Aprobados limpios 3er</label>
            <Input type="number" inputName="aprobados_limpios_3ro" min="0" ref={aprobados_limpios_3er_añoRef} placeholder="0" />
          </div>
          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="aprobados_limpios_4to" className="text-sm font-semibold text-gray-700">Aprobados limpios 4to</label>
            <Input type="number" inputName="aprobados_limpios_4to" min="0" ref={aprobados_limpios_4to_añoRef} placeholder="0" />
          </div>
          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="aprobados_limpios_5to" className="text-sm font-semibold text-gray-700">Aprobados limpios 5to</label>
            <Input type="number" inputName="aprobados_limpios_5to" min="0" ref={aprobados_limpios_5to_añoRef} placeholder="0" />
          </div>

          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="aprobados_con_1_1ro" className="text-sm font-semibold text-gray-700">Aprobados con 1 1ro</label>
            <Input type="number" inputName="aprobados_con_1_1ro" min="0" ref={aprobados_con_1_1er_añoRef} placeholder="0" />
          </div>
          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="aprobados_con_1_2do" className="text-sm font-semibold text-gray-700">Aprobados con 1 2do</label>
            <Input type="number" inputName="aprobados_con_1_2do" min="0" ref={aprobados_con_1_2do_añoRef} placeholder="0" />
          </div>
          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="aprobados_con_1_3ro" className="text-sm font-semibold text-gray-700">Aprobados con 1 3er</label>
            <Input type="number" inputName="aprobados_con_1_3ro" min="0" ref={aprobados_con_1_3er_añoRef} placeholder="0" />
          </div>
          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="aprobados_con_1_4to" className="text-sm font-semibold text-gray-700">Aprobados con 1 4to</label>
            <Input type="number" inputName="aprobados_con_1_4to" min="0" ref={aprobados_con_1_4to_añoRef} placeholder="0" />
          </div>
          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="aprobados_con_1_5to" className="text-sm font-semibold text-gray-700">Aprobados con 1 5to</label>
            <Input type="number" inputName="aprobados_con_1_5to" min="0" ref={aprobados_con_1_5to_añoRef} placeholder="0" />
          </div>

          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="aprobados_con_2_1ro" className="text-sm font-semibold text-gray-700">Aprobados con 2 1ro</label>
            <Input type="number" inputName="aprobados_con_2_1ro" min="0" ref={aprobados_con_2_1er_añoRef} placeholder="0" />
          </div>
          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="aprobados_con_2_2do" className="text-sm font-semibold text-gray-700">Aprobados con 2 2do</label>
            <Input type="number" inputName="aprobados_con_2_2do" min="0" ref={aprobados_con_2_2do_añoRef} placeholder="0" />
          </div>
          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="aprobados_con_2_3ro" className="text-sm font-semibold text-gray-700">Aprobados con 2 3er</label>
            <Input type="number" inputName="aprobados_con_2_3ro" min="0" ref={aprobados_con_2_3er_añoRef} placeholder="0" />
          </div>
          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="aprobados_con_2_4to" className="text-sm font-semibold text-gray-700">Aprobados con 2 4to</label>
            <Input type="number" inputName="aprobados_con_2_4to" min="0" ref={aprobados_con_2_4to_añoRef} placeholder="0" />
          </div>
          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="aprobados_con_2_5to" className="text-sm font-semibold text-gray-700">Aprobados con 2 5to</label>
            <Input type="number" inputName="aprobados_con_2_5to" min="0" ref={aprobados_con_2_5to_añoRef} placeholder="0" />
          </div>

          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="bajas_1ro" className="text-sm font-semibold text-gray-700">Bajas 1er</label>
            <Input type="number" inputName="bajas_1ro" min="0" ref={bajas_1er_añoRef} placeholder="0" />
          </div>
          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="bajas_2do" className="text-sm font-semibold text-gray-700">Bajas 2do</label>
            <Input type="number" inputName="bajas_2do" min="0" ref={bajas_2do_añoRef} placeholder="0" />
          </div>
          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="bajas_3ro" className="text-sm font-semibold text-gray-700">Bajas 3er</label>
            <Input type="number" inputName="bajas_3ro" min="0" ref={bajas_3er_añoRef} placeholder="0" />
          </div>
          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="bajas_4to" className="text-sm font-semibold text-gray-700">Bajas 4to</label>
            <Input type="number" inputName="bajas_4to" min="0" ref={bajas_4to_añoRef} placeholder="0" />
          </div>
          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="bajas_5to" className="text-sm font-semibold text-gray-700">Bajas 5to</label>
            <Input type="number" inputName="bajas_5to" min="0" ref={bajas_5to_añoRef} placeholder="0" />
          </div>

          <div className="flex flex-col justify-start gap-2 col-span-5">
            <label htmlFor="curso" className="text-sm font-semibold text-gray-700">Curso:</label>
            <Select inputName={"curso"} ref={cursoRef}>
              <option value="">Seleccione curso</option>
              {data.map((curso) => {
                return (
                  <option value={curso.id} key={curso.id}>
                    {curso.curso}
                  </option>
                );
              })}
            </Select>
          </div>

          <button
            type="submit"
            className="col-span-5 bg-emerald-600 hover:bg-emerald-700 px-6 py-3 rounded-lg text-white font-semibold mt-6 transition-colors shadow-md"
          >
            Insertar
          </button>
        </div>
      </form>
    </div>
  );
}
