import { useState } from "react"
import { createContext, useContext } from "react"

const UserContext = createContext(null)

export default function UserContextProvider({children}) {
    const [isAdmin, setIsAdmin] = useState(() => {
        const saved = localStorage.getItem("isAdmin");
        return saved === "true" ? true : false;
    })
    const [isDirective, setIsDirective] = useState(() => {
        const saved = localStorage.getItem("isDirective");
        return saved === "true" ? true : false;
    })
    const [username, setUsername] = useState(() => {
        return localStorage.getItem("username") || "";
    })

    return(
        <UserContext.Provider value={{isAdmin,setIsAdmin, isDirective, setIsDirective, username, setUsername}}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = ()=> useContext(UserContext)
