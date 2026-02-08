import AdminLayout from "../../layouts/AdminLayout";
import { useEffect, useState } from "react";
import Add from "../../components/Add";
import NivelAcreditacionItem from "../../components/getComponents/NivelAcreditacionItem";
import { tableUse } from "../../context/TablesContext";
import NivelAcreditacionForm from "../../components/addForms/NivelAcreditacionForm";
import { useUser } from "../../context/UserContext";

export default function NivelAcreditacion() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const { nivelAcreditacion , setNivelAcreditacion, del, insert} = tableUse()
  const {isAdmin,isDirective} = useUser()
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
      <div className="my-5 text-start text-xl font-bold">
        Evaluación anterior/ Nivel de acreditación
      </div>
      {nivelAcreditacion.map((item) => (
        <NivelAcreditacionItem
          id={item.id}
          año_evaluacion={item.año_evaluacion}
          nivel={item.nivel}
          key={item.id}
        />
      ))}
      
      {(isAdmin || isDirective) && (
        <Add formTitle={"Insertar nivel acreditación"}>
          <NivelAcreditacionForm />
        </Add>
      )}
    </AdminLayout>
  );
}
