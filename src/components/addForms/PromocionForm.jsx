import Input from "../Input";
import Select from "../Select";
import { tableUse } from "../../context/TablesContext";
import { useRef } from "react";
import { useSelectFetch } from "../../hooks/useSelectFetch";

export default function PromocionForm() {
  const { setPromocion, setInsert, insert } = tableUse();
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
      .then((json) => setPromocion(json?.data || []));

    setInsert(!insert);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-5 grid-rows-7 size-max gap-5 mx-2">
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="mie_1er_año">Mie 1er año:</label>
            <Input type="number" inputName="mie_1er_año" min="0" ref={mie_1er_añoRef} />
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="mie_2do_año">Mie 2do año:</label>
            <Input type="number" inputName="mie_2do_año" min="0" ref={mie_2do_añoRef} />
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="mie_3ro_año">Mie 3ro año:</label>
            <Input type="number" inputName="mie_3ro_año" min="0" ref={mie_3er_añoRef} />
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="mie_4to_año">Mie 4to año:</label>
            <Input type="number" inputName="mie_4to_año" min="0" ref={mie_4to_añoRef} />
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="mie_5to_año">Mie 5to año:</label>
            <Input type="number" inputName="mie_5to_año" min="0" ref={mie_5to_añoRef} />
          </div>

          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="aprobados_limpios_1ro">Aprobados limpios 1ro</label>
            <Input type="number" inputName="aprobados_limpios_1ro" min="0" ref={aprobados_limpios_1er_añoRef} />
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="aprobados_limpios_2do">Aprobados limpios 2do</label>
            <Input type="number" inputName="aprobados_limpios_2do" min="0" ref={aprobados_limpios_2do_añoRef} />
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="aprobados_limpios_3ro">Aprobados limpios 3ro</label>
            <Input type="number" inputName="aprobados_limpios_3ro" min="0" ref={aprobados_limpios_3er_añoRef} />
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="aprobados_limpios_4to">Aprobados limpios 4to</label>
            <Input type="number" inputName="aprobados_limpios_4to" min="0" ref={aprobados_limpios_4to_añoRef} />
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="aprobados_limpios_5to">Aprobados limpios 5to</label>
            <Input type="number" inputName="aprobados_limpios_5to" min="0" ref={aprobados_limpios_5to_añoRef} />
          </div>

          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="aprobados_con_1_1ro">Aprobados con 1 1ro</label>
            <Input type="number" inputName="aprobados_con_1_1ro" min="0" ref={aprobados_con_1_1er_añoRef}/>
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="aprobados_con_1_2do">Aprobados con 1 2do</label>
            <Input type="number" inputName="aprobados_con_1_2do" min="0" ref={aprobados_con_1_2do_añoRef} />
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="aprobados_con_1_3ro">Aprobados con 1 3ro</label>
            <Input type="number" inputName="aprobados_con_1_3ro" min="0" ref={aprobados_con_1_3er_añoRef} />
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="aprobados_con_1_4to">Aprobados con 1 4to</label>
            <Input type="number" inputName="aprobados_con_1_4to" min="0" ref={aprobados_con_1_4to_añoRef} />
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="aprobados_con_1_5to">Aprobados con 1 5to</label>
            <Input type="number" inputName="aprobados_con_1_5to" min="0" ref={aprobados_con_1_5to_añoRef} />
          </div>

          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="aprobados_con_2_1ro">Aprobados con 2 1ro</label>
            <Input type="number" inputName="aprobados_con_2_1ro" min="0" ref={aprobados_con_2_1er_añoRef} />
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="aprobados_con_2_2do">Aprobados con 2 2do</label>
            <Input type="number" inputName="aprobados_con_2_2do" min="0" ref={aprobados_con_2_2do_añoRef} />
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="aprobados_con_2_3ro">Aprobados con 2 3ro</label>
            <Input type="number" inputName="aprobados_con_2_3ro" min="0" ref={aprobados_con_2_3er_añoRef} />
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="aprobados_con_2_4to">Aprobados con 2 4to</label>
            <Input type="number" inputName="aprobados_con_2_4to" min="0" ref={aprobados_con_2_4to_añoRef} />
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="aprobados_con_2_5to">Aprobados con 2 5to</label>
            <Input type="number" inputName="aprobados_con_2_5to" min="0" ref={aprobados_con_2_5to_añoRef} />
          </div>

          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="bajas_1ro">Bajas 1ro</label>
            <Input type="number" inputName="bajas_1ro" min="0" ref={bajas_1er_añoRef}/>
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="bajas_2do">Bajas 2do</label>
            <Input type="number" inputName="bajas_2do" min="0" ref={bajas_2do_añoRef}/>
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="bajas_3ro">Bajas 3ro</label>
            <Input type="number" inputName="bajas_3ro" min="0" ref={bajas_3er_añoRef} />
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="bajas_4to">Bajas 4to</label>
            <Input type="number" inputName="bajas_4to" min="0" ref={bajas_4to_añoRef} />
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="bajas_5to">Bajas 5to</label>
            <Input type="number" inputName="bajas_5to" min="0" ref={bajas_5to_añoRef} />
          </div>

          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="curso">Curso:</label>
            <Select inputName={"curso"} ref={cursoRef}>
              {data.map((curso) => {
                return (
                  <option value={curso.id} key={curso.id}>
                    {" "}
                    {curso.curso}
                  </option>
                );
              })}
            </Select>
          </div>

          <button
            type="submit"
            className="bg-green-500 px-5 py-2 rounded-full text-white font-bold my-5 hover:bg-green-800 col-span-5 row-start-7 w-50 mx-auto"
          >
            Insertar
          </button>
        </div>
      </form>
    </div>
  );
}
