import NavBar from "../components/NavBar"
import Menu from "../components/Menu"
import Aside from "../components/Aside"

export default function AdminLayout({children}) {

    return(
        <div className="w-screen h-screen">
            <NavBar/>

            <div className="grid grid-cols-[300px_1fr] w-screen h-[92vh]">
                <Menu/>

                <Aside>
                    {children}
                </Aside>
            </div>
        </div>
    )
}