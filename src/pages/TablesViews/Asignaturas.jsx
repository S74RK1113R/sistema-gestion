import AdminLayout from "../../layouts/AdminLayout";
import { useEffect, useState } from "react";
import Add from "../../components/Add";
import AsignaturasItem from "../../components/getComponents/AsignaturasItem";
import { tableUse } from "../../context/TablesContext";
import AsignaturasForm from "../../components/addForms/AsignaturasForm";
import { useUser } from "../../context/UserContext";

export default function Asignaturas() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const { asignatura, setAsignatura, del, insert } = tableUse();
  const { isAdmin, isDirective } = useUser();

  const url = "http://localhost:3002/api/asignaturas";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setAsignatura(json.data || []))
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
        Asignaturas
      </div>

      {asignatura.map((item) => (
        <AsignaturasItem
          id={item.id}
          nombre={item.nombre}
          año={item.año}
          bibliografia={item.bibliografia}
          curriculo={item.curriculo}
          disciplinas_id={item.disciplinas_id}
          intranet={item.intranet}
          modalidad={item.modalidad}
          periodo={item.periodo}
          codigo={item.codigo}
          key={item.id}
        />
      ))}

      {(isAdmin || isDirective) && (
        <Add formTitle={"Insertar asignaturas"}>
          {/*Formulario de añadir asignaturas*/}
          <AsignaturasForm />
        </Add>
      )}
    </AdminLayout>
  );
}
