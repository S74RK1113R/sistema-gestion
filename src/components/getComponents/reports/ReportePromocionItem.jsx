import { useSelectFetch } from "../../../hooks/useSelectFetch";
export default function ReportePromocionItem({
  id,
  mie_1er_año,
  mie_2do_año,
  mie_3er_año,
  mie_4to_año,
  mie_5to_año,
  aprobados_limpios_1er_año,
  aprobados_limpios_2do_año,
  aprobados_limpios_3er_año,
  aprobados_limpios_4to_año,
  aprobados_limpios_5to_año,
  aprobados_con_2_1er_año,
  aprobados_con_2_2do_año,
  aprobados_con_2_3er_año,
  aprobados_con_2_4to_año,
  aprobados_con_2_5to_año,
  aprobados_con_1_1er_año,
  aprobados_con_1_2do_año,
  aprobados_con_1_3er_año,
  aprobados_con_1_4to_año,
  aprobados_con_1_5to_año,
  bajas_1er_año,
  bajas_2do_año,
  bajas_3er_año,
  bajas_4to_año,
  bajas_5to_año,
  curso_id,
}) {
  const { data } = useSelectFetch("http://localhost:3002/api/cursos");
   const promocionTotal_1er_año = (aprobados_limpios_1er_año + aprobados_con_1_1er_año + aprobados_con_2_1er_año)*100/mie_1er_año
  const promocionLimpia_1er_año = (aprobados_limpios_1er_año*100)/mie_1er_año
  const retencion_1er_año = ((100-bajas_1er_año)*100/mie_1er_año)

  const promocionTotal_2do_año = (aprobados_limpios_2do_año + aprobados_con_1_2do_año + aprobados_con_2_2do_año)*100/mie_2do_año
  const promocionLimpia_2do_año = (aprobados_limpios_2do_año*100)/mie_2do_año
  const retencion_2do_año = ((100-bajas_2do_año)*100/mie_2do_año)

  const promocionTotal_3er_año = (aprobados_limpios_3er_año + aprobados_con_1_3er_año + aprobados_con_2_3er_año)*100/mie_3er_año
  const promocionLimpia_3er_año = (aprobados_limpios_3er_año*100)/mie_3er_año
  const retencion_3er_año = ((100-bajas_3er_año)*100/mie_3er_año)

  const promocionTotal_4to_año = (aprobados_limpios_4to_año + aprobados_con_1_4to_año + aprobados_con_2_4to_año)*100/mie_4to_año
  const promocionLimpia_4to_año = (aprobados_limpios_4to_año*100)/mie_4to_año
  const retencion_4to_año = ((100-bajas_4to_año)*100/mie_4to_año)

  const promocionTotal_5to_año = (aprobados_limpios_5to_año + aprobados_con_1_5to_año + aprobados_con_2_5to_año)*100/mie_5to_año
  const promocionLimpia_5to_año = (aprobados_limpios_5to_año*100)/mie_5to_año
  const retencion_5to_año = ((100-bajas_5to_año)*100/mie_5to_año)

  const totalMie = (mie_1er_año+mie_2do_año+mie_3er_año+mie_4to_año+mie_5to_año)
  const totalAprobadosLimpios = (aprobados_limpios_1er_año+aprobados_limpios_2do_año+aprobados_limpios_3er_año+aprobados_limpios_4to_año+aprobados_limpios_5to_año)
  const totalAprobadosCon1 = (aprobados_con_1_1er_año+aprobados_con_1_2do_año+aprobados_con_1_3er_año+aprobados_con_1_4to_año+aprobados_con_1_5to_año)
  const totalAprobadosCon2 = (aprobados_con_2_1er_año+aprobados_con_2_2do_año+aprobados_con_2_3er_año+aprobados_con_2_4to_año+aprobados_con_2_5to_año)
  const totalBajas = (bajas_1er_año+bajas_2do_año+bajas_3er_año+bajas_4to_año+bajas_5to_año)
  const TotalPromocionTotal = ((totalAprobadosLimpios+totalAprobadosCon1+totalAprobadosCon2)*100)/totalMie
  const TotalPromocionLimpia = (totalAprobadosLimpios*100)/totalMie
  const TotalRetencion = ((100-totalBajas)*100)/totalMie

  return (
    <div>
      <div className="flex flex-col my-5">
        <h1 className="font-bold">
          Curso:{" "}
          {data.find((curso) => curso.id === curso_id)?.curso ||
            "Curso no encontrado"}
        </h1>

        <table>
          <thead>
            <tr>
              <th>Año</th>
              <th>Mie</th>
              <th>Aprobados limpios</th>
              <th>Aprobados con 1</th>
              <th>Aprobados con 2</th>
              <th>Bajas</th>
              <th>Promoción total</th>
              <th>Promoción limpia</th>
              <th>Retención</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1ro</td>
              <td>{mie_1er_año}</td>
              <td>{aprobados_limpios_1er_año}</td>
              <td>{aprobados_con_1_1er_año}</td>
              <td>{aprobados_con_2_1er_año}</td>
              <td>{bajas_1er_año}</td>
              <td>{promocionTotal_1er_año.toFixed(2)}</td>
              <td>{promocionLimpia_1er_año.toFixed(2)}</td>
              <td>{retencion_1er_año.toFixed(2)}</td>
            </tr>
            <tr>
              <td>2do</td>
              <td>{mie_2do_año}</td>
              <td>{aprobados_limpios_2do_año}</td>
              <td>{aprobados_con_1_2do_año}</td>
              <td>{aprobados_con_2_2do_año}</td>
              <td>{bajas_2do_año}</td>
              <td>{promocionTotal_2do_año.toFixed(2)}</td>
              <td>{promocionLimpia_2do_año.toFixed(2)}</td>
              <td>{retencion_2do_año.toFixed(2)}</td>
            </tr>
            <tr>
              <td>3ro</td>
              <td>{mie_3er_año}</td>
              <td>{aprobados_limpios_3er_año}</td>
              <td>{aprobados_con_1_3er_año}</td>
              <td>{aprobados_con_2_3er_año}</td>
              <td>{bajas_3er_año}</td>
              <td>{promocionTotal_3er_año.toFixed(2)}</td>
              <td>{promocionLimpia_3er_año.toFixed(2)}</td>
              <td>{retencion_3er_año.toFixed(2)}</td>
            </tr>
            <tr>
              <td>4to</td>
              <td>{mie_4to_año}</td>
              <td>{aprobados_limpios_4to_año}</td>
              <td>{aprobados_con_1_4to_año}</td>
              <td>{aprobados_con_2_4to_año}</td>
              <td>{bajas_4to_año}</td>
              <td>{promocionTotal_4to_año.toFixed(2)}</td>
              <td>{promocionLimpia_4to_año.toFixed(2)}</td>
              <td>{retencion_4to_año.toFixed(2)}</td>
            </tr>
            <tr>
              <td>5to</td>
              <td>{mie_5to_año}</td>
              <td>{aprobados_limpios_5to_año}</td>
              <td>{aprobados_con_1_5to_año}</td>
              <td>{aprobados_con_2_5to_año}</td>
              <td>{bajas_5to_año}</td>
              <td>{promocionTotal_5to_año.toFixed(2)}</td>
              <td>{promocionLimpia_5to_año.toFixed(2)}</td>
              <td>{retencion_5to_año.toFixed(2)}</td>
            </tr>
            <tr>
              <td>Total</td>
              <td>{totalMie}</td>
              <td>{totalAprobadosLimpios}</td>
              <td>{totalAprobadosCon1}</td>
              <td>{totalAprobadosCon2}</td>
              <td>{totalBajas}</td>
              <td>{TotalPromocionTotal.toFixed(2)}</td>
              <td>{TotalPromocionLimpia.toFixed(2)}</td>
              <td>{TotalRetencion.toFixed(2)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
