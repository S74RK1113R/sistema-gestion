import NavBar from "../components/NavBar"
import AsideMenu from "../components/Menu"
import Aside from "../components/Aside"

export default function AdminLayout() {

    return(
        <div className="w-screen h-screen">
            <NavBar/>

            <div className="flex flex-row h-[92vh]">
                <AsideMenu/>

                <Aside/>
            </div>
        </div>
    )
}