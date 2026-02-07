import { useRef } from "react";
import { tableUse } from "../../context/TablesContext";
import { useSelectFetch } from "../../hooks/useSelectFetch";
import Input from "../Input";
import Select from "../Select";

export default function ProfesoresForm() {
  const { setProfesor, setInsert, insert } = tableUse();
  const { data } = useSelectFetch("http://localhost:3002/api/asignaturas");
  const { data: data2 } = useSelectFetch(
    "http://localhost:3002/api/sede_universitaria",
  );

  const primer_apellidoRef = useRef();
  const segundo_apellidoRef = useRef();
  const nombresRef = useRef();
  const exp_educacion_superiorRef = useRef();
  const exp_carreraRef = useRef();
  const lugar_procedenciaRef = useRef();
  const categoria_docenteRef = useRef();
  const funcionRef = useRef();
  const consultante_emeritoRef = useRef();
  const grado_cientificoRef = useRef();
  const doctor_esp_afinRef = useRef();
  const asignatura_idRef = useRef();
  const asignatura_id_2Ref = useRef();
  const asignatura_id_3Ref = useRef();
  const asignatura_id_4Ref = useRef();
  const asignatura_id_5Ref = useRef();
  const asignatura_id_6Ref = useRef();
  const participacion_posgradoRef = useRef();
  const sede_universitaria_idRef = useRef();

  function erraseInput() {
    primer_apellidoRef.current.value = "";
    segundo_apellidoRef.current.value = "";
    nombresRef.current.value = "";
    exp_educacion_superiorRef.current.value = "";
    exp_carreraRef.current.value = "";
    lugar_procedenciaRef.current.value = "";
  }

  function handleSubmit() {
    event.preventDefault();
    const profesor = {
      primer_apellido: primer_apellidoRef.current.value,
      segundo_apellido: segundo_apellidoRef.current.value,
      nombres: nombresRef.current.value,
      exp_educacion_superior:
        exp_educacion_superiorRef.current.value,
      exp_carrera: exp_carreraRef.current.value,
      lugar_procedencia: lugar_procedenciaRef.current.value,
      categoria_docente: categoria_docenteRef.current.value,
      funcion: funcionRef.current.value,
      consultante_emerito: consultante_emeritoRef.current.value,
      grado_cientifico: grado_cientificoRef.current.value,
      doctor_esp_afin: doctor_esp_afinRef.current.value,
      asignatura_id: asignatura_idRef.current.value,
      asignatura_id_2: asignatura_id_2Ref.current.value,
      asignatura_id_3: asignatura_id_3Ref.current.value,
      asignatura_id_4: asignatura_id_4Ref.current.value,
      asignatura_id_5: asignatura_id_5Ref.current.value,
      asignatura_id_6: asignatura_id_6Ref.current.value,
      participacion_posgrado: participacion_posgradoRef.current.value,
      sede_universitaria_id: sede_universitaria_idRef.current.value
    };

    console.log(profesor);
    erraseInput();

    const url = "http://localhost:3002/api/profesor";
    fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      // Send your data in the request body as JSON
      body: JSON.stringify(profesor),
    })
      .then((res) => {
        if (!res.ok) {
          return res.json();
        }
        // handle error
      })
      .then((json) => setProfesor(json?.data || []));

    setInsert(!insert);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-5 grid-rows-3 size-max gap-5 mx-2">
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="nombres">Nombre/s:</label>
            <Input type="text" inputName="nombres" ref={nombresRef} />
          </div>

          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="primer_apellido">Primer apellido:</label>
            <Input
              type="text"
              inputName="primer_apellido"
              ref={primer_apellidoRef}
            />
          </div>

          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="segundo_apellido">Segundo apellido:</label>
            <Input
              type="text"
              inputName="segundo_apellido"
              ref={segundo_apellidoRef}
            />
          </div>

          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="exp_educacion_superior">
              Experiencia educación superior:
            </label>
            <Input
              type="number"
              inputName="exp_educacion_superior"
              min="0"
              ref={exp_educacion_superiorRef}
            />
          </div>

          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="exp_carrera">Experiencia en la carrera:</label>
            <Input
              type="number"
              inputName="exp_carrera"
              min="0"
              ref={exp_carreraRef}
            />
          </div>

          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="lugar_procedencia">Lugar procedencia:</label>
            <Input
              type="text"
              inputName="lugar_procedencia"
              ref={lugar_procedenciaRef}
            />
          </div>

          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="categoria_docente">Categoría docente:</label>
            <Select inputName="categoria_docente" ref={categoria_docenteRef}>
              <option value="pt">PT</option>
              <option value="pa">PA</option>
              <option value="a">A</option>
              <option value="i">I</option>
              <option value="ad">AD</option>
              <option value="atd">ATD</option>
            </Select>
          </div>

          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="funcion">Función:</label>
            <Select inputName="funcion" ref={funcionRef}>
              <option value="profesor">Profesor</option>
              <option value="tecnico">Técnico</option>
              <option value="tutor">Tutor</option>
            </Select>
          </div>

          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="consultante_emerito">Consultante/emerito:</label>
            <Select
              inputName="consultante_emerito"
              ref={consultante_emeritoRef}
            >
              <option value="no definido" selected>--No definido--</option>
              <option value="consultante">Consultante</option>
              <option value="emerito">Emerito</option>
            </Select>
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="grado_cientifico">Grado científico:</label>
            <Select inputName="grado_cientifico" ref={grado_cientificoRef}>
              <option value="dc">Doctor</option>
              <option value="mc">Master</option>
            </Select>
          </div>
          
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="doctor_esp_afin">Dr.C especialidad afin:</label>
            <Select inputName="doctor_esp_afin" ref={doctor_esp_afinRef}>
              <option value="si">Si</option>
              <option value="no">No</option>
            </Select>
          </div>

          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="asignatura_id">Asignatura 1:</label>
            <Select inputName="asignatura_id" ref={asignatura_idRef}>
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
            <label htmlFor="asignatura_id_2">Asignatura 2:</label>
            <Select inputName="asignatura_id_2" ref={asignatura_id_2Ref}>
              <option value={0} >Sin asignatura</option>
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
            <label htmlFor="asignatura_id_3">Asignatura 3:</label>
            <Select inputName="asignatura_id_3" ref={asignatura_id_3Ref}>
              <option value={0} >Sin asignatura</option>
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
            <label htmlFor="asignatura_id_4">Asignatura 4:</label>
            <Select inputName="asignatura_id_4" ref={asignatura_id_4Ref}>
              <option value={0} >Sin asignatura</option>
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
            <label htmlFor="asignatura_id_5">Asignatura 5:</label>
            <Select inputName="asignatura_id_5" ref={asignatura_id_5Ref}>
              <option value={0} >Sin asignatura</option>
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
            <label htmlFor="asignatura_id_6">Asignatura 6:</label>
            <Select inputName="asignatura_id_6" ref={asignatura_id_6Ref}>
              <option value={0} >Sin asignatura</option>
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
            <label htmlFor="participacion_posgrado">
              Participación en posgrado:
            </label>
            <Select
              inputName="participacion_posgrado"
              ref={participacion_posgradoRef}
            >
              <option value="si">Si</option>
              <option value="no">No</option>
            </Select>
          </div>
          <div className="flex flex-col justify-center items-center w-full gap-2">
            <label htmlFor="sede_universitaria_id">Sede universitaria:</label>

            <Select
              inputName="sede_universitaria_id"
              ref={sede_universitaria_idRef}
            >
              {data2.map((item) => {
                return (
                  <option value={item.id} key={item.id}>
                    {item.nombre}
                  </option>
                );
              })}
            </Select>
          </div>

          <button
            type="submit"
            className="bg-green-500 px-5 py-2 rounded-full text-white font-bold my-5 hover:bg-green-800 col-span-5 w-25 mx-auto"
          >
            Insertar
          </button>
        </div>
      </form>
    </div>
  );
}
