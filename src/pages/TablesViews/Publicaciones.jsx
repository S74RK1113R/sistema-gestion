import AdminLayout from "../../layouts/AdminLayout";
import Add from "../../components/Add";
import { useEffect, useState } from "react";
import PublicacionesItem from "../../components/getComponents/PublicacionesItem";
import { tableUse } from "../../context/TablesContext";
import PublicacionesForm from "../../components/addForms/PublicacionesForm";

export default function Publicaciones() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const {publicaciones,setPublicaciones,del} = tableUse()

  const url = "http://localhost:3002/api/publicaciones";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setPublicaciones(json.data || []))
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

        {publicaciones.map((item) => (
            <PublicacionesItem año_evaluacion={item.año_evaluacion} grupos1_4={item.grupos1_4} id={item.id} total={item.total} key={item.key}/>
        ))}

      <Add formTitle={"Insertar publicaciones"}>
        <PublicacionesForm/>
      </Add>
    </AdminLayout>
  );
}
