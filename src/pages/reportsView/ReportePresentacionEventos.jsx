import ReportePresentacionEventosItem from "../../components/getComponents/reports/ReportePresentacionEventosItem";
import AdminLayout from "../../layouts/AdminLayout";

export default function ReportePresentacionEventos() {
  return (
    <AdminLayout>
      <div className="my-5 text-start text-xl font-bold">
        Reporte de presentación de eventos
      </div>
      <ReportePresentacionEventosItem />
    </AdminLayout>
  );
}
