import AdminLayout from "../../layouts/AdminLayout";
import EventosItem from "../../components/getComponents/EventosItem";
import Add from "../../components/Add";
import { useState, useEffect } from "react";
import  {tableUse}  from "../../context/TablesContext";

export default function Eventos() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const { eventos, setEventos, del } = tableUse();

  const url = "http://localhost:3002/api/eventos";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setEventos(json.data || []))
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [del]);

  return (
    <AdminLayout>
      {/*Renderizacion de contenido de tablas*/}
      <div className="w-full flex flex-col gap-5 items-center justify-center">
        {eventos.map(item => (
          <EventosItem id ={item.id}
            año = {item.año}
            titulo = {item.titulo}
            nombre_evento = {item.nombre_evento}
            clasificacion = {item.clasificacion}
            profesor_id = {item.profesor_id}
            profesor_autor_id2 = {item.profesor_autor_id2}
            profesor_autor_id3 = {item.profesor_autor_id3}
            profesor_autor_id4 = {item.profesor_autor_id4}
            profesor_autor_id5 = {item.profesor_autor_id5}
            key={item.id}
          />
        ))}
      </div>
      <Add />
    </AdminLayout>
  );
}
