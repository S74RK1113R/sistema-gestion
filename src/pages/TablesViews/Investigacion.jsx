import AdminLayout from "../../layouts/AdminLayout";
import Add from "../../components/Add";
import InvestigacionItem from "../../components/getComponents/InvestigacionItem";
import { useEffect, useState } from "react";

export default function Investigacion() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [data, setData] = useState([]);

  const url = "http://localhost:3002/api/investigacion";

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
        {console.log(data)}
      {data.map((item) => (
        <InvestigacionItem
          año_evaluacion={item.año_evaluacion}
          id={item.id}
          porciento_estudiantes_vinculados={item.porciento_estudiantes_vinculados}
          porciento_profesores_vinculados={item.porciento_profesores_vinculados}
          proyectos_investigacion={item.proyectos_investigacion}
          key={item.id}
        />
      ))}

      <Add />
    </AdminLayout>
  );
}
