import { useState } from "react"
import { createContext, useContext } from "react"

const UserContext = createContext(null)

export default function UserContextProvider({children}) {
    const [isAdmin, setIsAdmin] = useState()
    const [isInvited, setIsInvited] = useState()

    return(
        <UserContext.Provider value={{isAdmin,setIsAdmin, isInvited, setIsInvited}}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = ()=> useContext(UserContext)
