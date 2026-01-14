import AdminLayout from "../../layouts/AdminLayout";
import Add from "../../components/Add";
import { useEffect, useState } from "react";
import ExistenciaPosgradoItem from "../../components/getComponents/ExistenciaPosgrado";
import { tableUse } from "../../context/TablesContext";

export default function ExistenciaDePosgrado() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const {existenciaPosgrado, setExistenciaPosgrado, del} =  tableUse()

  const url = "http://localhost:3002/api/existencia_posgrado";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setExistenciaPosgrado(json.data || []))
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

      {existenciaPosgrado.map((item) => (
        <ExistenciaPosgradoItem
          año_evaluacion={item.año_evaluacion}
          existencia={item.existencia}
          id={item.id}
          key={item.id}
        />
      ))}
      <Add />
    </AdminLayout>
  );
}
