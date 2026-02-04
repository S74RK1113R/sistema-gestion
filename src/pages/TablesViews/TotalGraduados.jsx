import AdminLayout from "../../layouts/AdminLayout";
import Add from "../../components/Add";
import { tableUse } from "../../context/TablesContext";
import { useState,useEffect } from "react";
import TotalGraduadosItem from "../../components/getComponents/TotalGraduadosItem"
import TotalGraduadosForm from "../../components/addForms/TotalGraduadoForm";
export default function TotalGraduados() {
  const [error, setError] = useState();
  const [loading, setLoading] = useState();
  const { totalGraduados, setTotalGraduados, del, insert} = tableUse();

  const url = "http://localhost:3002/api/total_graduados";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setTotalGraduados(json.data || []))
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [del , insert]);

  return (
    <AdminLayout>
      {/*Renderizacion de contenido de tablas*/}

      {totalGraduados.map(item=>(
        <TotalGraduadosItem cd={item.cd}
        cpe={item.cpe}
        curso_id={item.curso_id}
        id={item.id}
        key={item.id} />
      ))}
      <Add formTitle={"Insertar total de gradudados"}>
        <TotalGraduadosForm/>
      </Add>
    </AdminLayout>
  );
}
