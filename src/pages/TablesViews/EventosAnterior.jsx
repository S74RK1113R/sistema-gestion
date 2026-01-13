import AdminLayout from "../../layouts/AdminLayout";
import Add from "../../components/Add";
import { useEffect, useState } from "react";
import EventosAnteriorItem from "../../components/getComponents/EventosAnteriorItem";
export default function EventosAnterior() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [data, setData] = useState([]);

  const url = "http://localhost:3002/api/eventos_anterior";

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

        {
            data.map((item) => (
              <EventosAnteriorItem nacional_internacional={item.nacional_internacional} año_evaluacion={item.año_evaluacion} id={item.id} total={item.total} 
              key={item.id}/>
            ))
        }

      <Add />
    </AdminLayout>
  );
}
