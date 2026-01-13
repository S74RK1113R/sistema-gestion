import AdminLayout from "../../layouts/AdminLayout";
import Add from "../../components/Add";
import { useEffect, useState } from "react";
import ExistenciaPosgradoItem from "../../components/getComponents/ExistenciaPosgrado";

export default function ExistenciaDePosgrado() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [data, setData] = useState([]);

  const url = "http://localhost:3002/api/existencia_posgrado";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setData(json.data || []))
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return (
    <AdminLayout>
      {/*Renderizacion de contenido de tablas*/}

      {data.map((item) => (
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
