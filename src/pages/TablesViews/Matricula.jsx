import AdminLayout from "../../layouts/AdminLayout";
import Add from "../../components/Add";
import { useState, useEffect } from "react";
import { tableUse } from "../../context/TablesContext";
import MatriculaItem from "../../components/getComponents/MatriculaItem";
import MatriculaForm from "../../components/addForms/MatriculaForm";
import { useUser } from "../../context/UserContext";

export default function Matricula() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const { matricula, setMatricula, del, insert} = tableUse();
  const {isAdmin,isDirective} = useUser()
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
  }, [ del, insert ]);

  return (
    <AdminLayout>
      <div className="my-5 text-start text-xl font-bold">
        Estudiantes/ Matrícula
      </div>
      {/*Renderizacion de contenido de tablas*/}

      {matricula.map((item) => (
        <MatriculaItem
          año_evaluacion={item.año_evaluacion}
          p1er_año={item.p1er_año}
          s2do_año={item.s2do_año}
          t3er_año={item.t3er_año}
          c4to_año={item.c4to_año}
          q5to_año={item.q5to_año}
          id={item.id}
          key={item.id}
        />
      ))}
      {(isAdmin || isDirective) && (
        <Add formTitle={"Insertar matrícula"}>
          <MatriculaForm/>
        </Add>
      )}
    </AdminLayout>
  );
}
