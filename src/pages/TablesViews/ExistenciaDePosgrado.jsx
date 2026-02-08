import AdminLayout from "../../layouts/AdminLayout";
import Add from "../../components/Add";
import { useEffect, useState } from "react";
import ExistenciaPosgradoItem from "../../components/getComponents/ExistenciaPosgradoItem";
import { tableUse } from "../../context/TablesContext";
import ExistenciaPosgradoForm from "../../components/addForms/ExistenciaPosgradoForm";
import { useUser } from "../../context/UserContext";

export default function ExistenciaDePosgrado() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const {existenciaPosgrado, setExistenciaPosgrado, del, insert} =  tableUse()
  const {isAdmin,isDirective} = useUser()
  const url = "http://localhost:3002/api/existencia_posgrado";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setExistenciaPosgrado(json.data || []))
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [ del , insert]);
  
  return (
    <AdminLayout>
      <div className="my-5 text-start text-xl font-bold">
        Evaluación anterior/ Existencia de posgrado
      </div>
      {/*Renderizacion de contenido de tablas*/}

      {existenciaPosgrado.map((item) => (
        <ExistenciaPosgradoItem
          año_evaluacion={item.año_evaluacion}
          existencia={item.existencia}
          id={item.id}
          key={item.id}
        />
      ))}
      {(isAdmin || isDirective) && (
        <Add formTitle={"Insertar posgrado"}>
          <ExistenciaPosgradoForm/>
        </Add>
      )}
    </AdminLayout>
  );
}
