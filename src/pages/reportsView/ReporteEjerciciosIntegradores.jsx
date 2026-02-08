import AdminLayout from "../../layouts/AdminLayout";
import EjerciciosIntegradoresItem from "../../components/getComponents/reports/EjerciciosIntegradoresItem";

export default function ReporteEjerciciosIntegradores() {
  return (
    <AdminLayout>
      {/*Renderizacion de contenido de tablas*/}
      <EjerciciosIntegradoresItem/>
      
    </AdminLayout>
  );
}
