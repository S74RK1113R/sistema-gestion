import { Logout } from "../icons/Icons";

export default function NavBar() {
    return(
        <nav className="bg-blue-950 w-screen h-[8vh] p-1 flex flex-row items-center justify-center">
            <div className="text-white text-2xl mx-5 text-nowrap">Sistema de Gestión para la Acreditación</div>
            <div className="w-full"></div>
            <div className="bg-white h-11/12 rounded-full text-center flex flex-row items-center justify-center">
                <span className="mx-3 font-bold select-none text-nowrap">USERNAME</span>
                
                <div className="p-2 cursor-pointer hover:scale-120">
                    <Logout className="size-5"/>
                </div>
            </div>
        </nav>
    )
}