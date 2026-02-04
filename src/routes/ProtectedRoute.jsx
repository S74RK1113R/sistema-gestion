import { Navigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

export default function ProtectedRoute({ children }) {
    const { username } = useUser();
    const isAuthenticated = username && username.length > 0;

    return isAuthenticated ? children : <Navigate to="/" replace />;
}
