import AdminLayout from "../../layouts/AdminLayout";
import Add from "../../components/Add";
import SedeUniversitariaItem from "../../components/getComponents/SedeUniversitaria";
import { tableUse } from "../../context/TablesContext";
import { useState, useEffect } from "react";

export default function SedeUniversitaria() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const { sedeUniversitaria, setSedeUniversitaria, del } = tableUse();

  const url = "http://localhost:3002/api/sede_universitaria";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setSedeUniversitaria(json.data || []))
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
      {sedeUniversitaria.map((item) => (
        <SedeUniversitariaItem
          clasificacion={item.clasificacion}
          id={item.id}
          nombre={item.nombre}
          key={item.key}
        />
      ))}
      <Add />
    </AdminLayout>
  );
}
