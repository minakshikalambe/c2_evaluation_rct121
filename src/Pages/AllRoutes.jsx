import {Routes,Route,Link} from "react-router-dom";
import {Dashboard} from "./Dashboard";
import {PrivateRoute} from "./PrivateRoute";
import {RegisterPageOne} from"./RegisterPageOne";
import {RegisterPageTwo} from "./RegisterPageTwo";

const Navbar=()=>{
    return (
        <nav style={{display:"flex",gap:"2rem"}}>
           <Link to="/register/one">RegisterPageOne</Link>
           <Link to="/register/two">RegisterPageTwo</Link>
           <Link to="/dashboard" >Dashboard</Link>
        </nav>
    )
}
function AllRoutes(){
    return(
        <>
        <Navbar/>
        <Routes>
            <Route path="/register/one" element={<RegisterPageOne/>}/>
            <Route path="/register/two" element={<PrivateRoute><RegisterPageTwo/></PrivateRoute>}/>
            <Route path="/dashboard" element={<PrivateRoute><Dashboard/></PrivateRoute>}/>
        </Routes>
        </>
    )
}
export default AllRoutes