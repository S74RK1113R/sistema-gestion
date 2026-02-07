import { tableUse } from "../../context/TablesContext";
import { useRef, useState } from "react";
import Input from "../Input";
import Select from "../Select";
import { useSelectFetch } from "../../hooks/useSelectFetch";
import { useUser } from "../../context/UserContext";

export default function ProfesorItem({
  primer_apellido,
  segundo_apellido,
  nombres,
  exp_educacion_superior,
  exp_carrera,
  lugar_procedencia,
  categoria_docente,
  funcion,
  consultante_emerito,
  grado_cientifico,
  doctor_esp_afin,
  asignatura_id,
  asignatura_id_2,
  asignatura_id_3,
  asignatura_id_4,
  asignatura_id_5,
  asignatura_id_6,
  participacion_posgrado,
  sede_universitaria,
  id,
}) {
  const { setProfesor, setDel, del } = tableUse();
  const { insert, setInsert } = tableUse();
  const [showDeleteModal,setShowDeleteModal]=useState()
  const [showModal, setShowModal] = useState(false);
  const { isAdmin, isDirective } = useUser();

  const newPrimerApellidoRef = useRef();
  const newSegundoApellidoRef = useRef();
  const newNombresRef = useRef();
  const newExpEduSupRef = useRef();
  const newExpCarreraRef = useRef();
  const newLugarProcedenciaRef = useRef();
  const newCategoriaDocenteRef = useRef();
  const newFuncionRef = useRef();
  const newConsultanteEmeritoRef = useRef();
  const newGradoCientificoRef = useRef();
  const newDoctorEspAfinRef = useRef();
  const newAsignaturaIdRef = useRef();
  const newAsignaturaId2Ref = useRef();
  const newAsignaturaId3Ref = useRef();
  const newAsignaturaId4Ref = useRef();
  const newAsignaturaId5Ref = useRef();
  const newAsignaturaId6Ref = useRef();
  const newParticipacionPosgradoRef = useRef();
  const newSedeUniversitariaRef = useRef();

  const { data: asignaturasData } = useSelectFetch(
    "http://localhost:3002/api/asignaturas",
  );
  const { data: sedeUniversitariaData } = useSelectFetch(
    "http://localhost:3002/api/sede_universitaria",
  );

  function deleteItem(id) {
    const url = `http://localhost:3002/api/profesor/${id}`;
    setDel(!del);
    fetch(url, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((json) => setProfesor(json.data || []));
  }

  function modifyItem() {
    event.preventDefault();
    const url = `http://localhost:3002/api/profesor/${id}`;
    const newProfesor = {
      primer_apellido: newPrimerApellidoRef.current.value,
      segundo_apellido: newSegundoApellidoRef.current.value,
      nombres: newNombresRef.current.value,
      exp_educacion_superior: newExpEduSupRef.current.value,
      exp_carrera: newExpCarreraRef.current.value,
      lugar_procedencia: newLugarProcedenciaRef.current.value,
      categoria_docente: newCategoriaDocenteRef.current.value,
      funcion: newFuncionRef.current.value,
      consultante_emerito: newConsultanteEmeritoRef.current.value,
      grado_cientifico: newGradoCientificoRef.current.value,
      doctor_esp_afin: newDoctorEspAfinRef.current.value,
      asignatura_id: newAsignaturaIdRef.current.value,
      asignatura_id_2: newAsignaturaId2Ref.current.value,
      asignatura_id_3: newAsignaturaId3Ref.current.value,
      asignatura_id_4: newAsignaturaId4Ref.current.value,
      asignatura_id_5: newAsignaturaId5Ref.current.value,
      asignatura_id_6: newAsignaturaId6Ref.current.value,
      participacion_posgrado: newParticipacionPosgradoRef.current.value,
      sede_universitaria_id: newSedeUniversitariaRef.current.value,
    };

    fetch(url, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newProfesor),
    })
      .then((res) => {
        if (!res.ok) {
          return res.json();
        }
      })
      .then((json) => setProfesor(json?.data || []));

    setInsert(!insert);
  }

  return (
    <div className="mb-5 border border-black w-11/12 flex flex-col items-center justify-center shadow-lg shadow-zinc-950/60 p-5 rounded-lg">
      <h1 className="font-bold">Nombre del profesor:</h1>
      <div>{nombres}</div>
      <h1 className="font-bold">Primer apellido del profesor:</h1>
      <div>{primer_apellido}</div>
      <h1 className="font-bold">Segundo apellido del profesor:</h1>
      <div>{segundo_apellido}</div>
      <h1 className="font-bold">Experiencia en la carrera:</h1>
      <div>{exp_carrera}</div>
      <h1 className="font-bold">Experiencia en la educación superior:</h1>
      <div>{exp_educacion_superior}</div>
      <h1 className="font-bold">Lugar de procedencia:</h1>
      <div>{lugar_procedencia}</div>
      <h1 className="font-bold">Categoria docente:</h1>
      <div>{categoria_docente}</div>
      <h1 className="font-bold">Funcion que realiza:</h1>
      <div>{funcion}</div>
      <h1 className="font-bold">Consultante o emerito</h1>
      <div>{consultante_emerito}</div>
      <h1 className="font-bold">Grado científico</h1>
      <div>{grado_cientifico}</div>
      <h1 className="font-bold">Doctor o especialidad afin:</h1>
      <div>{doctor_esp_afin}</div>
      <h1 className="font-bold">Asignatura que imparte 1:</h1>
      <div>{asignatura_id}</div>
      {asignatura_id_2 == 0 ? (
        " "
      ) : (
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-bold">Asignatura que imparte 2:</h1>
          <div>{asignatura_id_2}</div>
        </div>
      )}
      {asignatura_id_3 == 0 ? (
        " "
      ) : (
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-bold">Asignatura que imparte 3:</h1>
          <div>{asignatura_id_3}</div>
        </div>
      )}
      {asignatura_id_4 == 0 ? (
        " "
      ) : (
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-bold">Asignatura que imparte 4:</h1>
          <div>{asignatura_id_4}</div>
        </div>
      )}
      {asignatura_id_5 == 0 ? (
        " "
      ) : (
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-bold">Asignatura que imparte 5:</h1>
          <div>{asignatura_id_5}</div>
        </div>
      )}
      {asignatura_id_6 == 0 ? (
        " "
      ) : (
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-bold">Asignatura que imparte 6:</h1>
          <div>{asignatura_id_6}</div>
        </div>
      )}
      <h1 className="font-bold">Participación en posgrado</h1>
      <div>{participacion_posgrado}</div>
      <h1 className="font-bold">Sede universitaria:</h1>
      <div>{sede_universitaria}</div>

      {(isAdmin || isDirective) && (
        <div className="flex flex-row gap-4 mt-4">
          <button
            onClick={() => setShowDeleteModal(true)}
            data-id={id}
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
            <div className="bg-zinc-100 p-6 rounded-lg shadow-xl shadow-black/50 grid grid-cols-5 gap-5 max-w-11/12 max-h-11/12 items-center justify-center">
              <h2 className="text-xl font-bold mb-4 col-span-5">
                Modificar Profesor
              </h2>

              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label htmlFor="nombres">Nombre/s:</label>
                <Input
                  type="text"
                  inputName="nombres"
                  defaultValue={nombres}
                  ref={newNombresRef}
                />
              </div>

              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label htmlFor="primer_apellido">Primer apellido:</label>
                <Input
                  type="text"
                  inputName="primer_apellido"
                  defaultValue={primer_apellido}
                  ref={newPrimerApellidoRef}
                />
              </div>

              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label htmlFor="segundo_apellido">Segundo apellido:</label>
                <Input
                  type="text"
                  inputName="segundo_apellido"
                  defaultValue={segundo_apellido}
                  ref={newSegundoApellidoRef}
                />
              </div>

              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label htmlFor="exp_carrera">Experiencia en la carrera:</label>
                <Input
                  type="text"
                  inputName="exp_carrera"
                  defaultValue={exp_carrera}
                  ref={newExpCarreraRef}
                />
              </div>

              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label htmlFor="exp_educacion_superior">
                  Experiencia en la educación superior:
                </label>
                <Input
                  type="text"
                  inputName="exp_educacion_superior"
                  defaultValue={exp_educacion_superior}
                  ref={newExpEduSupRef}
                />
              </div>

              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label htmlFor="lugar_procedencia">Lugar de procedencia:</label>
                <Input
                  type="text"
                  inputName="lugar_procedencia"
                  defaultValue={lugar_procedencia}
                  ref={newLugarProcedenciaRef}
                />
              </div>

              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label htmlFor="categoria_docente">Categoría docente:</label>
                <Select
                  inputName="categoria_docente"
                  defaultValue={categoria_docente}
                  ref={newCategoriaDocenteRef}
                >
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
                <Select
                  inputName="funcion"
                  ref={newFuncionRef}
                  defaultValue={funcion}
                >
                  <option value="profesor">Profesor</option>
                  <option value="tecnico">Técnico</option>
                  <option value="tutor">Tutor</option>
                </Select>
              </div>

              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label htmlFor="consultante_emerito">
                  Consultante/emerito:
                </label>
                <Select
                  inputName="consultante_emerito"
                  ref={newConsultanteEmeritoRef}
                  defaultValue={consultante_emerito}
                >
                  <option value="consultante">Consultante</option>
                  <option value="emerito">Emerito</option>
                </Select>
              </div>

              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label htmlFor="grado_cientifico">Grado científico:</label>
                <Select
                  inputName="grado_cientifico"
                  ref={newGradoCientificoRef}
                  defaultValue={grado_cientifico}
                >
                  <option value="dc">Doctor</option>
                  <option value="mc">Master</option>
                </Select>
              </div>

              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label htmlFor="doctor_esp_afin">Dr.C especialidad afin:</label>
                <Select
                  inputName="doctor_esp_afin"
                  ref={newDoctorEspAfinRef}
                  defaultValue={doctor_esp_afin}
                >
                  <option value="si">Si</option>
                  <option value="no">No</option>
                </Select>
              </div>

              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label htmlFor="asignatura_id">Asignatura 1:</label>
                <Select
                  inputName="asignatura_id"
                  ref={newAsignaturaIdRef}
                  defaultValue={asignatura_id}
                >
                  {asignaturasData?.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.nombre}
                    </option>
                  ))}
                </Select>
              </div>

              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label htmlFor="asignatura_id_2">Asignatura 2:</label>
                <Select
                  inputName="asignatura_id_2"
                  ref={newAsignaturaId2Ref}
                  defaultValue={asignatura_id_2}
                >
                  <option value={0}>Sin asignatura</option>

                  {asignaturasData?.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.nombre}
                    </option>
                  ))}
                </Select>
              </div>

              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label htmlFor="asignatura_id_3">Asignatura 3:</label>
                <Select
                  inputName="asignatura_id_3"
                  ref={newAsignaturaId3Ref}
                  defaultValue={asignatura_id_3}
                >
                  <option value={0}>Sin asignatura</option>

                  {asignaturasData?.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.nombre}
                    </option>
                  ))}
                </Select>
              </div>

              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label htmlFor="asignatura_id_4">Asignatura 4:</label>
                <Select
                  inputName="asignatura_id_4"
                  ref={newAsignaturaId4Ref}
                  defaultValue={asignatura_id_4}
                >
                  <option value={0}>Sin asignatura</option>

                  {asignaturasData?.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.nombre}
                    </option>
                  ))}
                </Select>
              </div>

              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label htmlFor="asignatura_id_5">Asignatura 5:</label>
                <Select
                  inputName="asignatura_id_5"
                  ref={newAsignaturaId5Ref}
                  defaultValue={asignatura_id_5}
                >
                  <option value={0}>Sin asignatura</option>

                  {asignaturasData?.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.nombre}
                    </option>
                  ))}
                </Select>
              </div>

              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label htmlFor="asignatura_id_6">Asignatura 6:</label>
                <Select
                  inputName="asignatura_id_6"
                  ref={newAsignaturaId6Ref}
                  defaultValue={asignatura_id_6}
                >
                  <option value={0}>Sin asignatura</option>

                  {asignaturasData?.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.nombre}
                    </option>
                  ))}
                </Select>
              </div>

              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label htmlFor="participacion_posgrado">
                  Participación en posgrado:
                </label>
                <Select
                  inputName="participacion_posgrado"
                  ref={newParticipacionPosgradoRef}
                  defaultValue={participacion_posgrado}
                >
                  <option value="si">Si</option>
                  <option value="no">No</option>
                </Select>
              </div>

              <div className="flex flex-col justify-center items-center w-full gap-2">
                <label htmlFor="sede_universitaria_id">
                  Sede universitaria:
                </label>

                <Select
                  inputName="sede_universitaria_id"
                  ref={newSedeUniversitariaRef}
                  defaultValue={sede_universitaria}
                >
                  {sedeUniversitariaData.map((item) => {
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
                className="bg-blue-500 row-start-7 col-start-2 text-white px-4 py-2 my-5 rounded hover:bg-blue-600"
              >
                Guardar Cambios
              </button>
              <button
                type="button"
                className="bg-zinc-500 row-start-7 col-start-3 text-white px-4 py-2 my-5 mx-5 rounded hover:bg-red-600"
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
