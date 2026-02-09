import { useSelectFetch } from "../../../hooks/useSelectFetch";

export default function ReportePresentacionEventosItem() {
  const { data: evento } = useSelectFetch("http://localhost:3002/api/eventos");
  const { data: profesor } = useSelectFetch("http://localhost:3002/api/profesor");

  const obtenerNombreProfesor = (profesorId) => {
    const prof = profesor.find((p) => p.id === profesorId);
    if (!prof) return "";
    return `${prof.nombres} ${prof.primer_apellido} ${prof.segundo_apellido}`.trim();
  };

  return (
    <div>
      <div className="flex flex-col">
        <table className="table-auto">
          <thead>
            <tr>
              <th>Título</th>
              <th>Nombre del Evento</th>
              <th>Clasificación</th>
              <th>Autor</th>
              <th>Coautor 1</th>
              <th>Coautor 2</th>
              <th>Coautor 3</th>
              <th>Coautor 4</th>
            </tr>
          </thead>
          <tbody>
            {evento.map((evento) => (
                <tr key={evento.id}>
                    <td>{evento.titulo}</td>
                    <td>{evento.nombre_evento}</td>
                    <td className="capitalize">{evento.clasificacion}</td>
                    <td>{obtenerNombreProfesor(evento.profesor_id)}</td>
                    <td>{obtenerNombreProfesor(evento.profesor_autor_id2)}</td>
                    <td>{obtenerNombreProfesor(evento.profesor_autor_id3)}</td>
                    <td>{obtenerNombreProfesor(evento.profesor_autor_id4)}</td>
                    <td>{obtenerNombreProfesor(evento.profesor_autor_id5)}</td>
                </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}