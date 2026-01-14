import AdminLayout from "../../layouts/AdminLayout";
import Add from "../../components/Add";
import { tableUse } from "../../context/TablesContext";
import { useEffect, useState } from "react";
import ProfesorItem from "../../components/getComponents/ProfesorItem";

export default function Profesor() {
  const [error, setError] = useState();
  const [loading, setLoading] = useState();
  const { profesor, setProfesor, del } = tableUse();

  const url = "http://localhost:3002/api/profesor";

  useEffect(() => {
    
    fetch(url)
      .then((response) => response.json())
      .then((json) => setProfesor(json.data || []))
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [del]);

  return (
    <AdminLayout>
      {/*Renderizacion de contenido de tablas*/}
      {profesor.map(item => (
        <ProfesorItem
          asignatura_id={item.asignatura_id}
          asignatura_id_2={item.asignatura_id_2}
          asignatura_id_3={item.asignatura_id_3}
          asignatura_id_4={item.asignatura_id_4}
          asignatura_id_5={item.asignatura_id_5}
          asignatura_id_6={item.asignatura_id_6}
          categoria_docente={item.categoria_docente}
          consultante_emerito={item.consultante_emerito}
          doctor_esp_afin={item.doctor_esp_afin}
          exp_carrera={item.exp_carrera}
          exp_educacion_superior={item.exp_educacion_superior}
          funcion={item.funcion}
          grado_cientifico={item.grado_cientifico}
          id={item.id}
          lugar_procedencia={item.lugar_procedencia}
          nombres={item.nombres}
          participacion_posgrado={item.participacion_posgrado}
          primer_apellido={item.primer_apellido}
          profesor_principal_año={item.profesor_principal_año}
          sede_universitaria={item.sede_universitaria_id}
          segundo_apellido={item.segundo_apellido}
          key={item.id}
        />
      ))}

      <Add />
    </AdminLayout>
  );
}
