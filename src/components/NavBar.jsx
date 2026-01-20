import { useEffect } from "react";
import { tableUse } from "../context/TablesContext";
import { Logout } from "../icons/Icons";

export default function NavBar() {
  const { notification, setNotification, insert , del} = tableUse();

  useEffect(() => {
    if (insert != null) {
      // Crear la notificación
      setNotification(`Actualizando...`);

      // Opcional: ocultar después de 3 segundos
      const timer = setTimeout(() => {
        setNotification(null);
      }, 2000);

      // Limpiar el timer si el efecto se ejecuta de nuevo
      return () => clearTimeout(timer);
    }
  }, [insert, del]);

  return (
    <nav className="bg-blue-950 w-screen h-[8vh] p-1 flex flex-row items-center justify-center">
      <div className="text-white text-2xl mx-5 text-nowrap">
        Sistema de Gestión para la Acreditación
      </div>
      <div className="w-full"></div>
      <div className=" text-xl text-green-500 font-bold rounded-full px-1  py-1 mx-2">{notification}</div>
      <div className="bg-white h-11/12 rounded-full text-center flex flex-row items-center justify-center">
        <span className="mx-3 font-bold select-none text-nowrap">USERNAME</span>

        <div className="p-2 cursor-pointer hover:scale-120">
          <Logout className="size-5" />
        </div>
      </div>
    </nav>
  );
}
