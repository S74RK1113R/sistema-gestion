import AdminLayout from "../../layouts/AdminLayout";
import Add from "../../components/Add";
import { tableUse } from "../../context/TablesContext";
import { useEffect, useState } from "react";
import PremiosEstudiantesItem from "../../components/getComponents/PremiosEstudiantesItem";
import PremiosEstudiantesForm from "../../components/addForms/PremiosEstudiantesForm";

export default function PremiosEstudiantes() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const { premiosEstudiantes, setPremiosEstudiantes, del, insert } = tableUse();

  const url = "http://localhost:3002/api/premios_estudiante";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setPremiosEstudiantes(json.data || []))
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [del,insert]);

  return (
    <AdminLayout>
      {/*Renderizacion de contenido de tablas*/}
      {premiosEstudiantes.map((item) => (
        <PremiosEstudiantesItem
          año={item.año}
          cantidad={item.cantidad}
          id={item.id}
          nombre={item.nombre}
          key={item.key}
        />
      ))}
      <Add formTitle={"Insertar premios de estudiantes"}>
        <PremiosEstudiantesForm/>
      </Add>
    </AdminLayout>
  );
}
