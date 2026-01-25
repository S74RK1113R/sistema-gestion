import AdminLayout from "../../layouts/AdminLayout";
import Add from "../../components/Add";
import SedeUniversitariaItem from "../../components/getComponents/SedeUniversitaria";
import { tableUse } from "../../context/TablesContext";
import { useState, useEffect } from "react";
import SedeUniversitariaFrom from "../../components/addForms/SedeUniversitariaForm";

export default function SedeUniversitaria() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const { sedeUniversitaria, setSedeUniversitaria, del,insert} = tableUse();

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
  }, [del, insert]);

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
      <Add formTitle={"Insertar sede universitaria"}>
        <SedeUniversitariaFrom/>
      </Add>
    </AdminLayout>
  );
}
