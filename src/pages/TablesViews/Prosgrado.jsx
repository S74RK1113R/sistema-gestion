import AdminLayout from "../../layouts/AdminLayout";
import Add from "../../components/Add";
import { tableUse } from "../../context/TablesContext";
import { useState,useEffect } from "react";
import PosgradoItem from "../../components/getComponents/PosgradoItem";

export default function Prosgrado() {
  const [error, setError] = useState();
  const [loading, setLoading] = useState();
  const { posgrado, setPosgrado, del } = tableUse();

  const url = "http://localhost:3002/api/posgrado";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setPosgrado(json.data || []))
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
      {
        posgrado.map(item=>(
            <PosgradoItem año={item.año} cantidad={item.cantidad} id={item.id} nombre={item.nombre} key={item.key} />
        ))
      }
      <Add />
    </AdminLayout>
  );
}
