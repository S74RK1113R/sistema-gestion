import AdminLayout from "../../layouts/AdminLayout";
import ReporteEjerciciosIntegradoresItem from "../../components/getComponents/reports/ReporteEjerciciosIntegradoresItem";
import { tableUse } from "../../context/TablesContext";
import { useEffect } from "react";

export default function ReporteEjerciciosIntegradores() {
  const { ejercicioIntegradores, setEjerciciosIntegradores } = tableUse();
  const url = "http://localhost:3002/api/ejercicios_integradores";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setEjerciciosIntegradores(json.data || []));
  }, []);

  return (
    <AdminLayout>
      {/*Renderizacion de contenido de tablas*/}
      <div className="my-5 text-start text-xl font-bold">
        Reporte de ejercicios integradores
      </div>
      {ejercicioIntegradores.map((item) => (
        <ReporteEjerciciosIntegradoresItem
          año_evaluacion={item.año_evaluacion}
          evaluados_2do_año={item.evaluados_2do_año}
          evaluados_3er_año={item.evaluados_3er_año}
          evaluados_4to_año={item.evaluados_4to_año}
          evaluados_5to_año={item.evaluados_5to_año}
          matricula_2do_año={item.matricula_2do_año}
          matricula_3er_año={item.matricula_3er_año}
          matricula_4to_año={item.matricula_4to_año}
          matricula_5to_año={item.matricula_5to_año}
          con_2_2do_año={item.con_2_2do_año}
          con_2_3er_año={item.con_2_3er_año}
          con_2_4to_año={item.con_2_4to_año}
          con_2_5to_año={item.con_2_5to_año}
          con_3_2do_año={item.con_3_2do_año}
          con_3_3er_año={item.con_3_3er_año}
          con_3_4to_año={item.con_3_4to_año}
          con_3_5to_año={item.con_3_5to_año}
          con_4_2do_año={item.con_4_2do_año}
          con_4_3er_año={item.con_4_3er_año}
          con_4_4to_año={item.con_4_4to_año}
          con_4_5to_año={item.con_4_5to_año}
          con_5_2do_año={item.con_5_2do_año}
          con_5_3er_año={item.con_5_3er_año}
          con_5_4to_año={item.con_5_4to_año}
          con_5_5to_año={item.con_5_5to_año}
          id={item.id}
          key={item.id}
        />
      ))}
    </AdminLayout>
  );
}
