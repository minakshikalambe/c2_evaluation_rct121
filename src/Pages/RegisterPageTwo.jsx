
import { useContext,createContext } from "react"
// import { AuthContext } from "../context/AuthContext"
import { useNavigate } from "react-router-dom"
const AuthContext =createContext();

export const RegisterPageTwo=()=>{
    const{handleAuth}=useContext(AuthContext)
    const navigate=useNavigate()
return(
    <div>
        <input type="text" placeholder="Address"/>
        <input type="number" placeholder="Phone Number"/>
        <button
        onClick={()=>{
            handleAuth(true)
            navigate("/register/two", {replace:true})
        }}>Next</button>
        <button
         onClick={()=>{
            navigate("/register/one", {replace:true})
        }}>Prev</button>
    </div>
)
}
