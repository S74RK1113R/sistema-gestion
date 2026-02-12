import NavBar from "../components/NavBar"
import Menu from "../components/Menu"
import Aside from "../components/Aside"

export default function AdminLayout({children}) {

    return(
<<<<<<< HEAD
        <div className=" relative w-screen h-screen">
=======
        <div className="relative w-screen h-screen bg-gray-50">
>>>>>>> parent of 53520ce (refact)
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