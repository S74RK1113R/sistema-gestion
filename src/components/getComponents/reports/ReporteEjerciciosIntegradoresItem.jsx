export default function ReporteEjerciciosIntegradoresItem({
  id,
  matricula_2do_año,
  matricula_3er_año,
  matricula_4to_año,
  matricula_5to_año,
  evaluados_2do_año,
  evaluados_3er_año,
  evaluados_4to_año,
  evaluados_5to_año,
  con_2_2do_año,
  con_2_3er_año,
  con_2_4to_año,
  con_2_5to_año,
  con_3_2do_año,
  con_3_3er_año,
  con_3_4to_año,
  con_3_5to_año,
  con_4_2do_año,
  con_4_3er_año,
  con_4_4to_año,
  con_4_5to_año,
  con_5_2do_año,
  con_5_3er_año,
  con_5_4to_año,
  con_5_5to_año,
  año_evaluacion
}) {
  const aprobados_2do_año  = ((con_3_2do_año + con_4_2do_año + con_5_2do_año)*100)/evaluados_2do_año
  const aprobados_3er_año  = ((con_3_3er_año + con_4_3er_año + con_5_3er_año)*100)/evaluados_3er_año
  const aprobados_4to_año  = ((con_3_4to_año + con_4_4to_año + con_5_4to_año)*100)/evaluados_4to_año
  const aprobados_5to_año  = ((con_3_5to_año + con_4_5to_año + con_5_5to_año)*100)/evaluados_5to_año

  const aprobados_con4_5_2do_año = ((con_4_2do_año+con_5_2do_año)*100)/(con_3_2do_año + con_4_2do_año + con_5_2do_año)
  const aprobados_con4_5_3er_año = ((con_4_3er_año+con_5_3er_año)*100)/(con_3_3er_año + con_4_3er_año + con_5_3er_año)
  const aprobados_con4_5_4to_año = ((con_4_4to_año+con_5_4to_año)*100)/(con_3_4to_año + con_4_4to_año + con_5_4to_año)
  const aprobados_con4_5_5to_año = ((con_4_5to_año+con_5_5to_año)*100)/(con_3_5to_año + con_4_5to_año + con_5_5to_año)

  const porciento_evaluados_2do_año = ((evaluados_2do_año*100)/matricula_2do_año)
  const porciento_evaluados_3er_año = ((evaluados_3er_año*100)/matricula_3er_año)
  const porciento_evaluados_4to_año = ((evaluados_4to_año*100)/matricula_4to_año)
  const porciento_evaluados_5to_año = ((evaluados_5to_año*100)/matricula_5to_año)

  return (
    <div>
      <div className="flex flex-col my-5">
        <h1 className="font-bold">Año de la evaluación: {año_evaluacion}</h1>
        <table className="table-auto">
          <thead>
            <tr>
              <th>Años</th>
              <th>Matrícula</th>
              <th>Evaluados</th>
              <th>2</th>
              <th>3</th>
              <th>4</th>
              <th>5</th>
              <th>% aprobados</th>
              <th>% con 4 ó 5</th>
              <th>% evaluación</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2do</td>
              <td>{matricula_2do_año}</td>
              <td>{evaluados_2do_año}</td>
              <td>{con_2_2do_año}</td>
              <td>{con_3_2do_año}</td>
              <td>{con_4_2do_año}</td>
              <td>{con_5_2do_año}</td>
              <td>{aprobados_2do_año.toFixed(2)}</td>
              <td>{aprobados_con4_5_2do_año.toFixed(2)}</td>
              <td>{porciento_evaluados_2do_año.toFixed(2)}</td>
            </tr>
            <tr>
              <td>3ro</td>
              <td>{matricula_3er_año}</td>
              <td>{evaluados_3er_año}</td>
              <td>{con_2_3er_año}</td>
              <td>{con_3_3er_año}</td>
              <td>{con_4_3er_año}</td>
              <td>{con_5_3er_año}</td>
              <td>{aprobados_3er_año.toFixed(2)}</td>
              <td>{aprobados_con4_5_3er_año.toFixed(2)}</td>
              <td>{porciento_evaluados_3er_año.toFixed(2)}</td>
            </tr>
            <tr>
              <td>4to</td>
              <td>{matricula_4to_año}</td>
              <td>{evaluados_4to_año}</td>
              <td>{con_2_4to_año}</td>
              <td>{con_3_4to_año}</td>
              <td>{con_4_4to_año}</td>
              <td>{con_5_4to_año}</td>
              <td>{aprobados_4to_año.toFixed(2)}</td>
              <td>{aprobados_con4_5_4to_año.toFixed(2)}</td>
              <td>{porciento_evaluados_4to_año.toFixed(2)}</td>
            </tr>
            <tr>
              <td>5to</td>
              <td>{matricula_5to_año}</td>
              <td>{evaluados_5to_año}</td>
              <td>{con_2_5to_año}</td>
              <td>{con_3_5to_año}</td>
              <td>{con_4_5to_año}</td>
              <td>{con_5_5to_año}</td>
              <td>{isNaN(aprobados_5to_año) ? 0 : aprobados_5to_año.toFixed(2)}</td>
              <td>{isNaN(aprobados_con4_5_5to_año) ? 0 : aprobados_con4_5_5to_año.toFixed(2)}</td>
              <td>{isNaN(porciento_evaluados_5to_año) ? 0 : porciento_evaluados_5to_año.toFixed(2)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
