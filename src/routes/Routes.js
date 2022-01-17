import { Routes as AppRoutes, Route, } from "react-router-dom";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Form from "../pages/Survey";


const Routes = () => {
return(
    <AppRoutes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Form" element={<Form/>} />
    </AppRoutes>

)
}

export default Routes;