import { useEffect } from "react";
import { tableUse } from "../context/TablesContext";
import { Logout } from "../icons/Icons";
import { useUser } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const { notification, setNotification, messageSucces, notificationType } = tableUse();
  const { username, setUsername, setIsAdmin, setIsDirective } = useUser();
  const navigate = useNavigate();

  function handleLogout() {
    // Limpiar el estado del usuario
    setUsername("");
    setIsAdmin(false);
    setIsDirective(false);

    // Limpiar localStorage
    localStorage.removeItem("username");
    localStorage.removeItem("isAdmin");
    localStorage.removeItem("isDirective");

    // Redirigir al inicio de sesión
    navigate("/");
  }

  useEffect(() => {
    if (notification) {
      // Ocultar después de 3 segundos
      const timer = setTimeout(() => {
        setNotification(false);
      }, 3000);

      // Limpiar el timer si el efecto se ejecuta de nuevo
      return () => clearTimeout(timer);
    }
  }, [notification, setNotification]);

  return (
    <nav className="bg-blue-950 w-screen h-[8vh] p-1 flex flex-row items-center justify-center print:hidden">
      <div className="text-white text-2xl mx-5 text-nowrap">
        Sistema de Gestión para la Acreditación
      </div>
<<<<<<< HEAD
      <div className="w-full"></div>
      
      <div className={`fixed ${notification ? "right-4 opacity-100": "-right-80 opacity-0"} transition-all duration-500 top-24 rounded-lg px-6 py-4 mx-2 text-white font-bold text-lg shadow-xl ${notificationType === 'insert' ? 'bg-green-500 hover:bg-green-600' : notificationType === 'delete' ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-500'}`}>
        {messageSucces}
      </div>

      <div className="bg-white h-11/12 rounded-full text-center flex flex-row items-center justify-center">
        <span className="mx-3 font-bold select-none text-nowrap uppercase ">
          {username}
        </span>

        <div
          className="p-2 cursor-pointer hover:scale-120"
          onClick={handleLogout}
        >
          <Logout className="size-5" />
        </div>
=======
      <div className="flex-1"></div>
      
      <div className={`fixed ${notification ? "right-6 opacity-100": "-right-96 opacity-0"} transition-all duration-500 top-20 rounded-lg px-6 py-4 text-white font-semibold text-sm shadow-xl border-l-4 ${notificationType === 'insert' ? 'bg-emerald-600 border-emerald-400 hover:bg-emerald-700' : notificationType === 'delete' ? 'bg-red-600 border-red-400 hover:bg-red-700' : 'bg-blue-600 border-blue-400'}`}>
        {messageSucces}
      </div>

      <div className="bg-white rounded-lg px-4 py-2 flex flex-row items-center justify-center gap-3 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
        <span className="font-medium select-none text-nowrap text-slate-700 text-sm">
          {username}
        </span>

        <button
          className="p-1.5 cursor-pointer hover:bg-gray-100 rounded transition-colors"
          onClick={handleLogout}
          title="Cerrar sesión"
        >
          <Logout className="size-5 text-slate-700" />
        </button>
>>>>>>> parent of 53520ce (refact)
      </div>
    </nav>
  );
}
