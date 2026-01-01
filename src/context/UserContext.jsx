import { useState } from "react"
import { UserContext } from "./UserContextVariables"

export default function UserContextProvider({children}) {
    const [isAdmin, setIsAdmin] = useState()
    const [isInvited, setIsInvited] = useState()

    return(
        <UserContext.Provider value={{isAdmin,setIsAdmin, isInvited, setIsInvited}}>
            {children}
        </UserContext.Provider>
    )
}

