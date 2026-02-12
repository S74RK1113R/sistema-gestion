import NavBar from "../components/NavBar"
import Menu from "../components/Menu"
import Aside from "../components/Aside"

export default function AdminLayout({children}) {

    return(
        <div className="relative w-screen h-screen bg-gray-50">
            <NavBar/>

            <div className="grid grid-cols-[280px_1fr] w-screen h-[92vh]">
                <Menu/>

                <Aside>
                    {children}
                </Aside>
            </div>
        </div>
    )
}