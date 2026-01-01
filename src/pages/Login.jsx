import { useState } from "react";
import Input from "../components/Input";


export default function Login() {
    const [onPasswordChange, setOnPasswordChange] = useState(false)
    
    function togglePasswordView(){
        setOnPasswordChange(!onPasswordChange)
    }

  return (
    <div className="size-12/12">
      <form action="">
        <div className="bg-linear-to-b from-blue-500 to-blue-300 size-7/12 md:size-4/12 mx-auto translate-y-1/2 p-10 flex flex-col justify-center justify-items-center gap-5 rounded-xl items-center shadow-md shadow-zinc-500">
          {/* userZone */}
          <label htmlFor="user" className="font-bold">
            Usuario
          </label>
          <Input inputName={"user"} type="text" maxLength="8"required/>

          {/*Password zone*/}
          <label htmlFor="password" className="font-bold">
            Contraseña
          </label>
          
          <div className="relative">
            <Input type={onPasswordChange ? "text" : "password" } inputName={"password"} maxLength="20" required/>
            <span className={`transition-color duration-200 size-4 rounded-full absolute right-1 top-1/2 -translate-y-1/2 ${onPasswordChange ?"bg-black": "bg-zinc-500"}`} onClick={togglePasswordView} ></span>
          </div>

            <Input type="submit" value="Entrar" className="bg-blue-950 hover:bg-blue-900 text-white font-bold rounded-xl px-5 py-1"/>
        </div>
      </form>
    </div>
  );
}
