
export default function ReporteDatosMatriculaItem({primerAño,segundoAño,tercerAño,cuartoAño,quintoAño, añoEvaluacion}) {

  return (
    <div>
      <div className="flex flex-col">
        <h1 className="font-bold">Año de la evaluación: {añoEvaluacion}</h1>
        <table>
          <thead>
            <tr>
              <th>Año</th>
              <th>Matrícula</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1ro</td>
              <td>{primerAño}</td>
            </tr>
            <tr>
              <td>2do</td>
              <td>{segundoAño}</td>
            </tr>
            <tr>
              <td>3ro</td>
              <td>{tercerAño}</td>
            </tr>
            <tr>
              <td>4to</td>
              <td>{cuartoAño}</td>
            </tr>
            <tr>
              <td>5to</td>
              <td>{quintoAño}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
