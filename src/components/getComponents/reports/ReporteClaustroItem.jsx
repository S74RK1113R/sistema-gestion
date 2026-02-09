import { useSelectFetch } from "../../../hooks/useSelectFetch";

export default function ReporteClaustroItem({ title = "Reporte de Claustro" }) {
    const { data: profesores } = useSelectFetch(
        "http://localhost:3002/api/profesor"
    );

    const { data: asignaturasData } = useSelectFetch(
        "http://localhost:3002/api/asignaturas"
    );

    const { data: sedesData } = useSelectFetch(
        "http://localhost:3002/api/sede_universitaria"
    );

    const formatoNombre = (p) => {
        if (!p) return "";
        return `${p.nombres || ''} ${p.primer_apellido || ''} ${p.segundo_apellido || ''}`.trim();
    };

    const obtenerNombreAsignatura = (id) => {
        if (!id) return null;
        const a = asignaturasData?.find((x) => String(x.id) === String(id));
        return a ? a.nombre : id;
    };

    const juntarAsignaturas = (p) => {
        const ids = [p?.asignatura_id, p?.asignatura_id_2, p?.asignatura_id_3, p?.asignatura_id_4, p?.asignatura_id_5, p?.asignatura_id_6];
        return ids
            .filter(Boolean)
            .filter((id) => id !== 0)
            .map((id) => obtenerNombreAsignatura(id))
            .join(', ');
    };

    const obtenerNombreSede = (sedeField) => {
        if (!sedeField) return '';
        // si el campo ya contiene nombre
        const maybeString = String(sedeField);
        // buscar por id
        const sedeById = sedesData?.find((s) => String(s.id) === maybeString);
        if (sedeById) return sedeById.nombre || sedeById.nombre_sede || maybeString;
        // buscar por nombre en la lista
        const sedeByName = sedesData?.find((s) => (s.nombre || s.nombre_sede) === sedeField);
        if (sedeByName) return sedeByName.nombre || sedeByName.nombre_sede;
        // fallback: devolver el valor original
        return sedeField;
    };

    return (
        <div>
            <h3 className="font-bold">{title}</h3>
            <div className="flex flex-col">
                <table >
                    <thead>
                        <tr>
                            <th>N°</th>
                            <th>Nombre completo</th>
                            <th>Categoría</th>
                            <th>Función</th>
                            <th>Grado científico</th>
                            <th>Asignaturas (IDs)</th>
                            <th>Participación posgrado</th>
                            <th>Sede</th>
                        </tr>
                    </thead>
                    <tbody >
                        {(!profesores || profesores.length === 0) && (
                            <tr>
                                <td colSpan={8}>No hay datos disponibles</td>
                            </tr>
                        )}

                        {profesores && profesores.map((p, i) => (
                            <tr key={p.id || i} >
                                <td>{i + 1}</td>
                                <td>{formatoNombre(p)}</td>
                                <td>{p.categoria_docente}</td>
                                <td>{p.funcion}</td>
                                <td>{p.grado_cientifico}</td>
                                <td>{juntarAsignaturas(p)}</td>
                                <td>{p.participacion_posgrado}</td>
                                <td>{obtenerNombreSede(p.sede_universitaria_id || p.sede_universitaria)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
