import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Index from "../pages/Index";
import NotFoundPage from "../pages/NotFoundPage"

export default function AppRoutes() {
    return(
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path ="/sgpa" element={<Index/>}/>
            <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
    )
}