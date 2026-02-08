import AdminLayout from "../../layouts/AdminLayout";
import Add from "../../components/Add";
import { tableUse } from "../../context/TablesContext";
import { useState,useEffect } from "react";
import PosgradoItem from "../../components/getComponents/PosgradoItem";
import PosgradoForm from "../../components/addForms/PosgradoForm";
import { useUser } from "../../context/UserContext";

export default function Posgrado() {
  const [error, setError] = useState();
  const [loading, setLoading] = useState();
  const { posgrado, setPosgrado, del, insert} = tableUse();
  const {isAdmin,isDirective} = useUser()
  const url = "http://localhost:3002/api/posgrado";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setPosgrado(json.data || []))
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [del, insert]);

  return (
    <AdminLayout>
      
      <div className="my-5 text-start text-xl font-bold">
        Posgrado
      </div>{/*Renderizacion de contenido de tablas*/}
      {
        posgrado.map(item=>(
            <PosgradoItem año={item.año} cantidad={item.cantidad} id={item.id} nombre={item.nombre} key={item.id} />
        ))
      }
      {(isAdmin || isDirective) && (
        <Add formTitle={"Insertar posgrado"}>
          <PosgradoForm/>
        </Add>
      )}
    </AdminLayout>
  );
}
