import AdminLayout from "../../layouts/AdminLayout";
import ReporteDatosMatriculaItem from "../../components/getComponents/reports/ReporteDatosMatriculaItem";
import { useEffect } from "react";
import { tableUse } from "../../context/TablesContext";

export default function ReporteDatosMatricula() {
  const url = "http://localhost:3002/api/matricula";
  const { matricula, setMatricula } = tableUse();

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setMatricula(json.data || []));
  }, []);

  return (
    <AdminLayout>
      <div className="my-5 text-start text-xl font-bold">
        Reporte de datos de matrícula
      </div>
      {matricula.map((item) => (
        <ReporteDatosMatriculaItem
          añoEvaluacion={item.año_evaluacion}
          primerAño={item.p1er_año}
          segundoAño={item.s2do_año}
          tercerAño={item.t3er_año}
          cuartoAño={item.c4to_año}
          quintoAño={item.q5to_año}
          key={item.id}
        />
      ))}
    </AdminLayout>
  );
}
