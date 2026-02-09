import { useSelectFetch } from "../../../hooks/useSelectFetch";

export default function ReporteResumenPremioItem() {
  const { data: premios_profesor } = useSelectFetch(
    "http://localhost:3002/api/premios_profesor",
  );
  const { data: premios_estudiantes } = useSelectFetch(
    "http://localhost:3002/api/premios_estudiante",
  );

  const {data: profesor} = useSelectFetch("http://localhost:3002/api/profesor")

  return (
    <div>
      <div className="flex flex-col my-5">
        <table className="table-auto">
          <thead>
            <tr>
              <th>Premios</th>
              <th>Año</th>
              <th>Profesor/Estudiantes</th>
            </tr>
          </thead>
          <tbody>
            {premios_profesor.map((premios) => (
              <tr>
                <td>{premios.nombre_premio}</td>
                <td>{premios.año}</td>
                <td>{`${profesor.find(p => p.id === premios.profesor_id)?.nombres} ${profesor.find(p => p.id === premios.profesor_id)?.primer_apellido} ${profesor.find(p => p.id === premios.profesor_id)?.segundo_apellido}`}</td>
              </tr>
            ))}

            {premios_estudiantes.map((premios)=>(
                <tr>
                    <td>{premios.nombre}</td>
                    <td>{premios.año}</td>
                    <td>{`${premios.nombres} ${premios.primer_apellido} ${premios.segundo_apellido} `}</td>
                </tr>
            ))}

          </tbody>
        </table>
      </div>
    </div>
  );
}
