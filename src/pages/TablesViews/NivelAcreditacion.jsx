import AdminLayout from "../../layouts/AdminLayout";
import { useEffect, useState } from "react";
import Add from "../../components/Add";
import NivelAcreditacionItem from "../../components/getComponents/NivelAcreditacionItem";
import { tableUse } from "../../context/TablesContext";
import NivelAcreditacionForm from "../../components/addForms/NivelAcreditacionForm";

export default function NivelAcreditacion() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const { nivelAcreditacion , setNivelAcreditacion, del, insert} = tableUse()

  const url = "http://localhost:3002/api/nivel_acreditacion";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setNivelAcreditacion(json.data || []))
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

      {nivelAcreditacion.map((item) => (
        <NivelAcreditacionItem
          id={item.id}
          año_evaluacion={item.año_evaluacion}
          nivel={item.nivel}
          key={item.id}
        />
      ))}
      
      <Add formTitle={"Insertar nivel acreditación"}>
        <NivelAcreditacionForm />
      </Add>
    </AdminLayout>
  );
}
