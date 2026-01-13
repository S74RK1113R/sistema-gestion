import AdminLayout from "../../layouts/AdminLayout";
import Add from "../../components/Add";
import { useEffect, useState } from "react";
import PublicacionesItem from "../../components/getComponents/PublicacionesItem";

export default function Publicaciones() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [data, setData] = useState([]);

  const url = "http://localhost:3002/api/publicaciones";

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
            <PublicacionesItem año_evaluacion={item.año_evaluacion} grupos1_4={item.grupos1_4} id={item.id} total={item.total} key={item.key}/>
        ))}

      <Add />
    </AdminLayout>
  );
}
