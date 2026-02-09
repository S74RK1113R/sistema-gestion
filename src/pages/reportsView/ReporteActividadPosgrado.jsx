import ReporteActividadPosgradoItem from "../../components/getComponents/reports/ReporteActividadPosgradoItem";
import AdminLayout from "../../layouts/AdminLayout";
import { tableUse } from "../../context/TablesContext";
import { useEffect } from "react";

export default function ReporteActividadPosgrado() {
  const { posgrado, setPosgrado} = tableUse();
  const url = "http://localhost:3002/api/posgrado";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setPosgrado(json.data || []));
  }, []);
  return (
    <AdminLayout>
      <div className="my-5 text-start text-xl font-bold">
        Reporte de actividad de posgrado
      </div>
      {posgrado.map((item) => (
        <ReporteActividadPosgradoItem
          año={item.año}
          cantidad={item.cantidad}
          id={item.id}
          nombre={item.nombre}
          key={item.id}
        />
      ))}
    </AdminLayout>
  );
}
