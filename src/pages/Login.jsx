import { useState, useEffect } from "react";
import Input from "../components/Input";
import { EyeClosed, EyeOpen } from "../icons/Icons";
import { useSelectFetch } from "../hooks/useSelectFetch";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

export default function Login() {
  const [onPasswordChange, setOnPasswordChange] = useState(false);
  const [error, setError] = useState("");
  const usuarioRef = useRef();
  const contraseñaRef = useRef();
  const navigate = useNavigate();
  const { setIsAdmin, setIsDirective, setUsername} = useUser();

  const { data: userData } = useSelectFetch(
    "http://localhost:3002/api/usuarios",
  );

  // Recuperar datos del localStorage al cargar
  useEffect(() => {
    const savedUsername = localStorage.getItem("username");
    const savedIsAdmin = localStorage.getItem("isAdmin");
    const savedIsDirective = localStorage.getItem("isDirective");

    if (savedUsername && usuarioRef.current) {
      usuarioRef.current.value = savedUsername;
    }

    if (savedIsAdmin === "true") {
      setIsAdmin(true);
    }

    if (savedIsDirective === "true") {
      setIsDirective(true);
    }

    if (savedUsername) {
      setUsername(savedUsername);
    }
  }, [setIsAdmin, setIsDirective, setUsername]);

  function togglePasswordView() {
    setOnPasswordChange(!onPasswordChange);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setError("");

    const usuario = usuarioRef.current.value.trim();
    const contraseña = contraseñaRef.current.value;

    // Buscar usuario en los datos obtenidos
    const usuarioEncontrado = userData?.find(
      (u) => u.usuario === usuario && u.contraseña === contraseña,
    );

    if (!usuarioEncontrado) {
      setError("Usuario o contraseña incorrectos");
      return;
    }

    // Guardar información del usuario en el contexto
    if (usuarioEncontrado.rol === "admin") {
      setIsAdmin(true);
      localStorage.setItem("isAdmin", "true");
    } else {
      localStorage.setItem("isAdmin", "false");
    }

    if (usuarioEncontrado.rol === "directivo") {
      setIsDirective(true);
      localStorage.setItem("isDirective", "true");
    } else {
      localStorage.setItem("isDirective", "false");
    }

    setUsername(usuarioEncontrado.usuario);
    localStorage.setItem("username", usuarioEncontrado.usuario);
    
    // Redirigir a la página principal (disciplinas como ejemplo)
    navigate("/disciplinas");
  }

  return (
    <div className="size-12/12">
      <form onSubmit={handleSubmit}>
        <div className="bg-linear-to-b from-blue-500 to-blue-300 size-7/12 md:size-4/12 mx-auto my-20 p-10 flex flex-col justify-center justify-items-center gap-5 rounded-xl items-center shadow-md shadow-zinc-500">
          {/* userZone */}
          <h1 className="text-center text-2xl">Bienvenidos al Sistema de gestión de acreditación</h1>
          <label htmlFor="user" className="font-bold">
            Usuario
          </label>
          <Input
            inputName={"user"}
            type="text"
            maxLength="8"
            ref={usuarioRef}
            required
          />

          {/*Password zone*/}
          <label htmlFor="password" className="font-bold">
            Contraseña
          </label>

          <div className="relative">
            <Input
              type={onPasswordChange ? "text" : "password"}
              inputName={"password"}
              maxLength="15"
              required
              ref={contraseñaRef}
            />
            <span
              className="cursor-pointer absolute right-0 top-1/2 -translate-y-1/2 p-2"
              onClick={togglePasswordView}
            >
              {onPasswordChange ? (
                <EyeOpen className="size-5" />
              ) : (
                <EyeClosed className="size-5" />
              )}
            </span>
          </div>

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-1 rounded w-full text-center">
              {error}
            </div>
          )}

          <Input
            type="submit"
            value="Entrar"
            className="bg-blue-950 hover:bg-blue-900 text-white font-bold rounded-xl px-5 py-1"
          />
        </div>
      </form>
    </div>
  );
}
