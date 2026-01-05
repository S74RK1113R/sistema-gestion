import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import NotFoundPage from "../pages/NotFoundPage"
import Disciplinas from "../pages/Disciplinas";

export default function AppRoutes() {
    return(
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path ="/sgpa" element={<Disciplinas/>}/>
            <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
    )
}