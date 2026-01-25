import AdminLayout from "../../layouts/AdminLayout";
import Add from "../../components/Add";
import { useState, useEffect } from "react";
import { tableUse } from "../../context/TablesContext";
import PremiosProfesorItem from "../../components/getComponents/PremiosProfesorItem";
import PremiosProfesorForm from "../../components/addForms/PremiosProfesorForm";

export default function PremiosProfesor() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const { premiosProfesor, setPremiosProfesor, del,insert } = tableUse();

  const url = "http://localhost:3002/api/premios_profesor";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setPremiosProfesor(json.data || []))
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

      {premiosProfesor.map((item) => (
        <PremiosProfesorItem
          año={item.año}
          id={item.id}
          nombre_premio={item.nombre_premio}
          profesor_id={item.profesor_id}
          key={item.id}
        />
      ))}
      <Add formTitle={"Insertar premios de profesor"}>
        <PremiosProfesorForm/>
      </Add>
    </AdminLayout>
  );
}
