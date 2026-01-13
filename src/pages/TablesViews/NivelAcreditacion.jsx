import AdminLayout from "../../layouts/AdminLayout";
import { useEffect, useState } from "react";
import Add from "../../components/Add";
import NivelAcreditacionItem from "../../components/getComponents/NivelAcreditacionItem";

export default function NivelAcreditacion() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [data, setData] = useState([]);

  const url = "http://localhost:3002/api/nivel_acreditacion";

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
        <NivelAcreditacionItem
          id={item.id}
          año_evaluacion={item.año_evaluacion}
          nivel={item.nivel}
          key={item.key}
        />
      ))}
      
      <Add />
    </AdminLayout>
  );
}
