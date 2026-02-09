import AdminLayout from "../../layouts/AdminLayout";
import ReporteClaustroItem from "../../components/getComponents/reports/ReporteClaustroItem";

export default function ReporteClaustro() {
  return (
    <AdminLayout>
      <div className="my-5 text-start text-xl font-bold">
        Reporte de Claustro
      </div>
      
        <ReporteClaustroItem />
     
    </AdminLayout>
  );
}
