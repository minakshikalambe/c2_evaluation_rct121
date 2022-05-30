// Write code for Registration context
import { AuthContext } from "./AuthContext";
import { useState } from "react";
export const AuthContextProvider=({children})=>{
    const[isAuth, setIsAuth]=useState(false)
    const handleAuth=(state)=>{
          setIsAuth(state)
    }
   
    return (
    <AuthContext.Provider value={{isAuth, handleAuth}}>{children}</AuthContext.Provider>
    )
}
