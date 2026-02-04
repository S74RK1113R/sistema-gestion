import AdminLayout from "../../layouts/AdminLayout";
import Add from "../../components/Add";
import { useState, useEffect } from "react";
import { tableUse } from "../../context/TablesContext";
import PublicacionItem from"../../components/getComponents/PublicacionItem"
import PublicacionForm from "../../components/addForms/PublicacionForm";
import { useUser } from "../../context/UserContext";

export default function Publicacion() {
  const [error, setError] = useState();
  const [loading, setLoading] = useState();
  const { publicacion, setPublicacion, del,insert} = tableUse();
  const {isAdmin,isDirective} = useUser()

  const url = "http://localhost:3002/api/publicacion";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setPublicacion(json.data || []))
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
      {
        publicacion.map(item=>(
            <PublicacionItem autor_profesor_id={item.autor_profesor_id}
            año={item.año}
            bd_revista={item.bd_revista}
            clasificacion={item.clasificacion}
            coautor_id={item.coautor_id}
            coautor_id_2={item.coautor_id_2}
            coautor_id_3={item.coautor_id_3}
            grupo={item.grupo}
            id={item.id}
            isbn_issn={item.isbn_issn}
            revista_editorial={item.revista_editorial}
            titulo={item.titulo}
            key={item.id}/>
        ))
      }
      {(isAdmin || isDirective) && (
        <Add formTitle={"Insertar publicacion"}>
          <PublicacionForm/>
        </Add>
      )}
    </AdminLayout>
  );
}
