import ReportePublicacionItem from "../../components/getComponents/reports/ReportePublicacionItem";
import AdminLayout from "../../layouts/AdminLayout";

export default function ReportePublicacion() {
  return (
    <AdminLayout>
      <div className="my-5 text-start text-xl font-bold">
        Reporte de publicaciones
      </div>

      <ReportePublicacionItem/>
    </AdminLayout>
  );
}
