import AdminLayout from "../../layouts/AdminLayout"
import DisciplinaItem from "../../components/getComponents/DisciplinaItem"

export default function Disciplinas() {
    return(
        <AdminLayout>
          {/*Renderizacion de contenido de tablas*/}

          <div className="w-full flex flex-col gap-5 items-center justify-center">
            <DisciplinaItem></DisciplinaItem>
            <DisciplinaItem></DisciplinaItem>
          </div>
          
        </AdminLayout>
    )
}