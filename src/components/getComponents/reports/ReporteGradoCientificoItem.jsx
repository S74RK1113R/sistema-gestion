import { useSelectFetch } from "../../../hooks/useSelectFetch";

export default function ReporteGradoCientificoItem() {
  const { data: profesores } = useSelectFetch(
    "http://localhost:3002/api/profesor"
  );

  const formatoNombre = (p) => {
    if (!p) return "";
    return `${p.nombres || ''} ${p.primer_apellido || ''} ${p.segundo_apellido || ''}`.trim();
  };

  const obtenerLabelGrado = (grado) => {
    if (grado === 'dc') return 'Doctor en Ciencias';
    if (grado === 'mc') return 'Master en Ciencias';
    return grado;
  };

  const grupos = {
    dc: profesores?.filter(p => p.grado_cientifico === 'dc') || [],
    mc: profesores?.filter(p => p.grado_cientifico === 'mc') || [],
  };

  const renderTabla = (grado, label) => {
    const data = grupos[grado];
    return (
      <div key={grado} className="mb-8">
        <h3 className="mb-4 text-base font-semibold text-gray-800">
          {label} ({data.length} profesores)
        </h3>
        <div className="flex flex-col">
          <table>
            <thead>
              <tr>
                <th>N°</th>
                <th>Nombre completo</th>
                <th>Categoría</th>
                <th>Función</th>
                <th>Consultante/Emerito</th>
                <th>Dr.C Esp. Afín</th>
              </tr>
            </thead>
            <tbody>
              {data.length === 0 ? (
                <tr>
                  <td colSpan={6}>
                    No hay profesores con este grado
                  </td>
                </tr>
              ) : (
                data.map((p, i) => (
                  <tr key={p.id || i}>
                    <td>{i + 1}</td>
                    <td>{formatoNombre(p)}</td>
                    <td>{p.categoria_docente}</td>
                    <td>{p.funcion}</td>
                    <td>{p.consultante_emerito}</td>
                    <td>{p.doctor_esp_afin}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  return (
    <div className="reporte-grado-cientifico">
      {renderTabla('dc', obtenerLabelGrado('dc'))}
      {renderTabla('mc', obtenerLabelGrado('mc'))}
    </div>
  );
}