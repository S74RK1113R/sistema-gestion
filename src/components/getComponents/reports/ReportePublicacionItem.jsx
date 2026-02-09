import { useSelectFetch } from "../../../hooks/useSelectFetch";

export default function ReportePublicacionItem() {
  const { data: publicacion } = useSelectFetch(
    "http://localhost:3002/api/publicacion",
  );
  const { data: profesor } = useSelectFetch("http://localhost:3002/api/profesor");
  const obtenerNombreProfesor = (profesorId) => {
    const prof = profesor.find((p) => p.id === profesorId);
    if (!prof) return "";
    return `${prof.nombres} ${prof.primer_apellido} ${prof.segundo_apellido}`.trim();
  };

  return (
    <div>
      <div className="flex flex-col">
        <table>
          <thead>
            <tr>
              <th>Título</th>
              <th>Año</th>
              <th className="capitalize">Clasificacion</th>
              <th>Autor</th>
              <th>Coautor 1</th>
              <th>Coautor 2</th>
              <th>Coautor 3</th>
              <th>Grupo</th>
            </tr>
          </thead>
          <tbody>
            {publicacion.map((publicacion) => (
              <tr>
                <td>{publicacion.titulo}</td>
                <td>{publicacion.año}</td>
                <td className="capitalize">{publicacion.clasificacion}</td>
                <td>{obtenerNombreProfesor(publicacion.autor_profesor_id)}</td>
                <td>{obtenerNombreProfesor(publicacion.coautor_id)}</td>
                <td>{obtenerNombreProfesor(publicacion.coautor_id_2)}</td>
                <td>{obtenerNombreProfesor(publicacion.coautor_id_3)}</td>
                <td>{publicacion.grupo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
