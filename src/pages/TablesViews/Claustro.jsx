import AdminLayout from "../../layouts/AdminLayout";
import Add from "../../components/Add";
import { useEffect, useState } from "react";
import ClaustroItem from "../../components/getComponents/ClaustroItem";
import { tableUse } from "../../context/TablesContext";

export default function Claustro() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const {claustro,setClaustro,del} = tableUse()

  const url = "http://localhost:3002/api/claustros";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setClaustro(json.data || []))
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
      {claustro.map(item => (
        console.log(item),
        <ClaustroItem
          año_evaluacion={item.año_evaluacion}
          drc={item.drc}
          drc_afin={item.drc_afin}
          drc_equivalentes={item.drc_equivalentes}
          id={item.id}
          mc_equivalentes={item.mc_equivalentes}
          pt_pa={item.pt_pa}
          total_claustro={item.total_claustro}
          key={item.id}
        />
      ))}

      <Add formTitle={"Insertar claustro"} />
    </AdminLayout>
  );
}
