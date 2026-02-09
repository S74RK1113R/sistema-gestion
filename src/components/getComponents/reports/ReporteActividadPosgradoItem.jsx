export default function ReporteActividadPosgradoItem({
  nombre,
  año,
  cantidad,
}) {
  return (
    <div>
      <div className="flex flex-col">
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Año</th>
              <th>Cantidad</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{nombre}</td>
              <td>{año}</td>
              <td>{cantidad}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
