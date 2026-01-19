import AdminLayout from "../../layouts/AdminLayout";
import Add from "../../components/Add";
import { useState, useEffect } from "react";
import { tableUse } from "../../context/TablesContext";
import MatriculaItem from "../../components/getComponents/MatriculaItem";
import MatriculaForm from "../../components/addForms/MatriculaForm";

export default function Matricula() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const { matricula, setMatricula, del } = tableUse();

  const url = "http://localhost:3002/api/matricula";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setMatricula(json.data || []))
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

      {matricula.map((item) => (
        <MatriculaItem
          año_evaluacion={item.año_evaluacion}
          c4to_año={item.c4to_año}
          id={item.id}
          p1er_año={item.p1er_año}
          q5to_año={item.q5to_año}
          s2do_año={item.s2do_año}
          t3er_año={item.t3er_año}
          key={item.key}
        />
      ))}
      <Add formTitle={"Insertar matrícula"}>
        <MatriculaForm/>
      </Add>
    </AdminLayout>
  );
}
