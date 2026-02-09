import AdminLayout from "../../layouts/AdminLayout";
import ReportePromocionItem from "../../components/getComponents/reports/ReportePromocionItem";
import { tableUse } from "../../context/TablesContext";
import { useEffect } from "react";

export default function ReportePromocion() {
    const { promocion, setPromocion} = tableUse();
    const url = "http://localhost:3002/api/promocion";

  useEffect(() => {
      fetch(url)
        .then((response) => response.json())
        .then((json) => setPromocion(json.data || [])) 
    }, []);
  return (
    <AdminLayout>
      {/*Renderizacion de contenido de tablas*/}
      <div className="my-5 text-start text-xl font-bold">
        Reporte de promoción
      </div>
      {promocion.map((item) => (
              <ReportePromocionItem
                mie_1er_año={item.mie_1er_año}
                mie_2do_año={item.mie_2do_año}
                mie_3er_año={item.mie_3er_año}
                mie_4to_año={item.mie_4to_año}
                mie_5to_año={item.mie_5to_año}
                aprobados_con_1_1er_año={item.aprobados_con_1_1er_año}
                aprobados_con_1_2do_año={item.aprobados_con_1_2do_año}
                aprobados_con_1_3er_año={item.aprobados_con_1_3er_año}
                aprobados_con_1_4to_año={item.aprobados_con_1_4to_año}
                aprobados_con_1_5to_año={item.aprobados_con_1_5to_año}
                aprobados_con_2_1er_año={item.aprobados_con_2_1er_año}
                aprobados_con_2_2do_año={item.aprobados_con_2_2do_año}
                aprobados_con_2_3er_año={item.aprobados_con_2_3er_año}
                aprobados_con_2_4to_año={item.aprobados_con_2_4to_año}
                aprobados_con_2_5to_año={item.aprobados_con_2_5to_año}
                aprobados_limpios_1er_año={item.aprobados_limpios_1er_año}
                aprobados_limpios_2do_año={item.aprobados_limpios_2do_año}
                aprobados_limpios_3er_año={item.aprobados_limpios_3er_año}
                aprobados_limpios_4to_año={item.aprobados_limpios_4to_año}
                aprobados_limpios_5to_año={item.aprobados_limpios_5to_año}
                bajas_1er_año={item.bajas_1er_año}
                bajas_2do_año={item.bajas_2do_año}
                bajas_3er_año={item.bajas_3er_año}
                bajas_4to_año={item.bajas_4to_año}
                bajas_5to_año={item.bajas_5to_año}
                curso_id={item.curso_id}
                id={item.id}
                key={item.id}
      
              />
            ))}
    </AdminLayout>
  );
}
