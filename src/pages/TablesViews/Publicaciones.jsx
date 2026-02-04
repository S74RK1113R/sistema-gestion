import AdminLayout from "../../layouts/AdminLayout";
import Add from "../../components/Add";
import { useEffect, useState } from "react";
import PublicacionesItem from "../../components/getComponents/PublicacionesItem";
import { tableUse } from "../../context/TablesContext";
import PublicacionesForm from "../../components/addForms/PublicacionesForm";
import { useUser } from "../../context/UserContext";

export default function Publicaciones() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const {publicaciones,setPublicaciones,del,insert} = tableUse()
  const {isAdmin,isDirective} = useUser()
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
  }, [del,insert]);

  return (
    <AdminLayout>
      {/*Renderizacion de contenido de tablas*/}

        {publicaciones.map((item) => (
            <PublicacionesItem año_evaluacion={item.año_evaluacion} grupos1_4={item.grupos1_4} id={item.id} total={item.total} grupos_1_2={item.grupos_1_2} key={item.id}/>
        ))}

      {(isAdmin || isDirective) && (
        <Add formTitle={"Insertar publicaciones"}>
          <PublicacionesForm/>
        </Add>
      )}
    </AdminLayout>
  );
}
