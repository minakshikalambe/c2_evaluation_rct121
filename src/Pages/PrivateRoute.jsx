import { useContext, createContext} from "react";
import { Navigate } from "react-router-dom";

 const AuthContext =createContext();
// import { AuthContext } from "../context/AuthContext";
 export const PrivateRoute=({children})=>{
 const{isAuth}=useContext(AuthContext);
 
 if(!isAuth){
     return  <Navigate to="/register/one" replace={false}/>
     
 }
 return children
}
