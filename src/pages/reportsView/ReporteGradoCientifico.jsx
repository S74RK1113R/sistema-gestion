import AdminLayout from "../../layouts/AdminLayout";
import ReporteGradoCientificoItem from "../../components/getComponents/reports/ReporteGradoCientificoItem";

export default function ReporteGradoCientifico() {
  return (
    <AdminLayout>
      <div className="my-5 text-start text-xl font-bold">Reporte de Grado Científico</div>
      <div className="mt-4">
        <ReporteGradoCientificoItem />
      </div>
    </AdminLayout>
  );
}
