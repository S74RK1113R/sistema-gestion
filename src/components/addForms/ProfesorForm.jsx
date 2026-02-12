import { useRef } from "react";
import { tableUse } from "../../context/TablesContext";
import { useSelectFetch } from "../../hooks/useSelectFetch";
import Input from "../Input";
import Select from "../Select";

export default function ProfesoresForm() {
  const { setProfesor, setInsert, insert, setMessageSucces, setNotification, setNotificationType } = tableUse();
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
      .then((json) => {
        setProfesor(json?.data || []);
        setMessageSucces("Profesor insertado");
        setNotificationType('insert');
        setNotification(true);
      });

    setInsert(!insert);
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-3 gap-6 p-2">
          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="nombres" className="text-sm font-semibold text-gray-700">Nombre/s:</label>
            <Input type="text" inputName="nombres" ref={nombresRef} placeholder="Nombres" />
          </div>

          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="primer_apellido" className="text-sm font-semibold text-gray-700">Primer Apellido:</label>
            <Input
              type="text"
              inputName="primer_apellido"
              ref={primer_apellidoRef}
              placeholder="Primer apellido"
            />
          </div>

          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="segundo_apellido" className="text-sm font-semibold text-gray-700">Segundo Apellido:</label>
            <Input
              type="text"
              inputName="segundo_apellido"
              ref={segundo_apellidoRef}
              placeholder="Segundo apellido"
            />
          </div>

          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="exp_educacion_superior" className="text-sm font-semibold text-gray-700">
              Exp. Educación Superior:
            </label>
            <Input
              type="number"
              inputName="exp_educacion_superior"
              min="0"
              ref={exp_educacion_superiorRef}
              placeholder="Años"
            />
          </div>

          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="exp_carrera" className="text-sm font-semibold text-gray-700">Exp. en la Carrera:</label>
            <Input
              type="number"
              inputName="exp_carrera"
              min="0"
              ref={exp_carreraRef}
              placeholder="Años"
            />
          </div>

          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="lugar_procedencia" className="text-sm font-semibold text-gray-700">Lugar Procedencia:</label>
            <Input
              type="text"
              inputName="lugar_procedencia"
              ref={lugar_procedenciaRef}
              placeholder="Ubicación"
            />
          </div>

          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="categoria_docente" className="text-sm font-semibold text-gray-700">Categoría Docente:</label>
            <Select inputName="categoria_docente" ref={categoria_docenteRef}>
              <option value="">Seleccionar...</option>
              <option value="pt">PT</option>
              <option value="pa">PA</option>
              <option value="a">A</option>
              <option value="i">I</option>
              <option value="ad">AD</option>
              <option value="atd">ATD</option>
            </Select>
          </div>

          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="funcion" className="text-sm font-semibold text-gray-700">Función:</label>
            <Select inputName="funcion" ref={funcionRef}>
              <option value="">Seleccionar...</option>
              <option value="profesor">Profesor</option>
              <option value="tecnico">Técnico</option>
              <option value="tutor">Tutor</option>
            </Select>
          </div>

          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="consultante_emerito" className="text-sm font-semibold text-gray-700">Consultante/Emérito:</label>
            <Select
              inputName="consultante_emerito"
              ref={consultante_emeritoRef}
            >
              <option value="no definido">--No definido--</option>
              <option value="consultante">Consultante</option>
              <option value="emerito">Emérito</option>
            </Select>
          </div>
          
          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="grado_cientifico" className="text-sm font-semibold text-gray-700">Grado Científico:</label>
            <Select inputName="grado_cientifico" ref={grado_cientificoRef}>
              <option value="">Seleccionar...</option>
              <option value="dc">Doctor</option>
              <option value="mc">Máster</option>
            </Select>
          </div>
          
          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="doctor_esp_afin" className="text-sm font-semibold text-gray-700">Dr.C Especialidad Afín:</label>
            <Select inputName="doctor_esp_afin" ref={doctor_esp_afinRef}>
              <option value="">Seleccionar...</option>
              <option value="si">Sí</option>
              <option value="no">No</option>
            </Select>
          </div>

          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="asignatura_id" className="text-sm font-semibold text-gray-700">Asignatura 1:</label>
            <Select inputName="asignatura_id" ref={asignatura_idRef}>
              <option value="">Seleccionar...</option>
              {data.map((item) => {
                return (
                  <option value={item.id} key={item.id}>
                    {item.nombre}
                  </option>
                );
              })}
            </Select>
          </div>

          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="asignatura_id_2" className="text-sm font-semibold text-gray-700">Asignatura 2:</label>
            <Select inputName="asignatura_id_2" ref={asignatura_id_2Ref}>
              <option value="">Sin asignatura</option>
              {data.map((item) => {
                return (
                  <option value={item.id} key={item.id}>
                    {item.nombre}
                  </option>
                );
              })}
            </Select>
          </div>

          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="asignatura_id_3" className="text-sm font-semibold text-gray-700">Asignatura 3:</label>
            <Select inputName="asignatura_id_3" ref={asignatura_id_3Ref}>
              <option value="">Sin asignatura</option>
              {data.map((item) => {
                return (
                  <option value={item.id} key={item.id}>
                    {item.nombre}
                  </option>
                );
              })}
            </Select>
          </div>

          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="asignatura_id_4" className="text-sm font-semibold text-gray-700">Asignatura 4:</label>
            <Select inputName="asignatura_id_4" ref={asignatura_id_4Ref}>
              <option value="">Sin asignatura</option>
              {data.map((item) => {
                return (
                  <option value={item.id} key={item.id}>
                    {item.nombre}
                  </option>
                );
              })}
            </Select>
          </div>

          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="asignatura_id_5" className="text-sm font-semibold text-gray-700">Asignatura 5:</label>
            <Select inputName="asignatura_id_5" ref={asignatura_id_5Ref}>
              <option value="">Sin asignatura</option>
              {data.map((item) => {
                return (
                  <option value={item.id} key={item.id}>
                    {item.nombre}
                  </option>
                );
              })}
            </Select>
          </div>

          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="asignatura_id_6" className="text-sm font-semibold text-gray-700">Asignatura 6:</label>
            <Select inputName="asignatura_id_6" ref={asignatura_id_6Ref}>
              <option value="">Sin asignatura</option>
              {data.map((item) => {
                return (
                  <option value={item.id} key={item.id}>
                    {item.nombre}
                  </option>
                );
              })}
            </Select>
          </div>

          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="participacion_posgrado" className="text-sm font-semibold text-gray-700">
              Participación en Posgrado:
            </label>
            <Select
              inputName="participacion_posgrado"
              ref={participacion_posgradoRef}
            >
              <option value="">Seleccionar...</option>
              <option value="si">Sí</option>
              <option value="no">No</option>
            </Select>
          </div>

          <div className="flex flex-col justify-start gap-2">
            <label htmlFor="sede_universitaria_id" className="text-sm font-semibold text-gray-700">Sede Universitaria:</label>
            <Select
              inputName="sede_universitaria_id"
              ref={sede_universitaria_idRef}
            >
              <option value="">Seleccionar...</option>
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
            className="col-span-3 bg-emerald-600 hover:bg-emerald-700 px-6 py-3 rounded-lg text-white font-semibold mt-6 transition-colors shadow-md"
          >
            Crear Profesor
          </button>
        </div>
      </form>
    </div>
  );
}
