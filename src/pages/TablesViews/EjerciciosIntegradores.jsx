import AdminLayout from "../../layouts/AdminLayout";
import Add from "../../components/Add";
import { useState, useEffect } from "react";
import { tableUse } from "../../context/TablesContext";
import AyudantiaItem from "../../components/getComponents/AyudantiaItem";

export default function EjerciciosIntegradores() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const { ayudantia, setAyudantia, del } = tableUse();

  const url = "http://localhost:3002/api/ayudantias";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setAyudantia(json.data || []))
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

      {ayudantia.map((item) => (
        <AyudantiaItem
          año_evaluacion={item.año_evaluacion}
          educacion_superior_1er_año={item.educacion_superior_1er_año}
          educacion_superior_2do_año={item.educacion_superior_2do_año}
          educacion_superior_3er_año={item.educacion_superior_3er_año}
          educacion_superior_4to_año={item.educacion_media_4to_año}
          educacion_superior_5to_año={item.educacion_superior_5to_año}

          educacion_media_1er_año={item.educacion_media_1er_año}
          educacion_media_2do_año={item.educacion_media_2do_año}
          educacion_media_3er_año={item.educacion_media_3er_año}
          educacion_media_4to_año={item.educacion_media_4to_año}
          educacion_media_5to_año={item.educacion_media_5to_año}
          id={item.id}
          key={item.id}
        />
      ))}
      <Add formTitle={"Insertar ejercicios integradores"}/>
    </AdminLayout>
  );
}
