import AdminLayout from "../../layouts/AdminLayout";
import ReporteResumenPremioItem from "../../components/getComponents/reports/ReporteResumenPremioItem";

export default function ReporteResumenPremios() {
    return(
        <AdminLayout>
        <div className="my-5 text-start text-xl font-bold">
          Reporte resumen de premios
        </div>
      {/*Renderizacion de contenido de tablas*/}

      <ReporteResumenPremioItem/>
        </AdminLayout>
    )
}