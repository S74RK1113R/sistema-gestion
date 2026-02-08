import AdminLayout from "../../layouts/AdminLayout";
import Add from "../../components/Add";
import { tableUse } from "../../context/TablesContext";
import { useState, useEffect } from "react";
import ProfesorPrincipalItem from "../../components/getComponents/ProfesorPrincipalItem";
import ProfesorPrincipalForm from "../../components/addForms/ProfesorPrincipalForm";
import { useUser } from "../../context/UserContext";

export default function ProfesorPrincipal() {
  const [error, setError] = useState();
  const [loading, setLoading] = useState();
  const { profesorPrincipal, setProfesorPrincipal, del, insert } = tableUse();
  const {isAdmin,isDirective} = useUser()
  
  const url = "http://localhost:3002/api/profesor_principal";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setProfesorPrincipal(json.data || []))
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
        Profesor principal
      </div>
      {profesorPrincipal.map((item) => (
        <ProfesorPrincipalItem
          disciplina_id={item.disciplina_id}
          profesor_id={item.profesor_id}
          id={item.id}
          key={item.id}
        />
      ))}

      {(isAdmin || isDirective) && (
        <Add formTitle={"Insertar profesor principal"}>
          <ProfesorPrincipalForm />
        </Add>
      )}
    </AdminLayout>
  );
}
