
import { useContext,createContext} from "react"
// import { AuthContext } from "../context/AuthContext"
import { useNavigate } from "react-router-dom"
const AuthContext =createContext();
export const RegisterPageOne=()=>{
    const{handleAuth}=useContext(AuthContext)
    const navigate=useNavigate()
return(
    <div>
        <input type="text" placeholder="username"/>
        <input type="text" placeholder="password"/>
        <button
        onClick={()=>{
            handleAuth(true)
            navigate("/register/two", {replace:true})
        }}>Next</button>
    </div>
)
}