import AdminLayout from "../../layouts/AdminLayout";
import Add from "../../components/Add";
import { useState, useEffect } from "react";
import { tableUse } from "../../context/TablesContext";
import IncorporacionInvestigacionCientificaItem from "../../components/getComponents/IncorporacionInvestigacionCientificaItem";

export default function IncorporacionInvestigacionCientifica() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const { incorporacionInvestigacion, setIncorporacionInvestigacion, del } =
    tableUse();

  const url =
    "http://localhost:3002/api/incorporacion_investigacion_cientifica";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setIncorporacionInvestigacion(json.data || []))
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

      {incorporacionInvestigacion.map((item) => (
        <IncorporacionInvestigacionCientificaItem
          año_evaluacion={item.año_evaluacion}
          cantidad_profesores_incorporados={
            item.cantidad_profesores_incorporados
          }
          estudiantes_investigando_1er_año={
            item.estudiantes_investigando_1er_año
          }
          estudiantes_investigando_2do_año={
            item.estudiantes_investigando_2do_año
          }
          estudiantes_investigando_3er_año={
            item.estudiantes_investigando_3er_año
          }
          estudiantes_investigando_4to_año={
            item.estudiantes_investigando_4to_año
          }
          estudiantes_investigando_5to_año={
            item.estudiantes_investigando_5to_año
          }
          id={item.id}
          institucional={item.institucional}
          internacional={item.internacional}
          nacional={item.nacional}
          key={item.key}
        />
      ))}

      <Add />
    </AdminLayout>
  );
}
