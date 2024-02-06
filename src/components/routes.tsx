import { Route } from "react-router-dom";
import ProtectedRoutes from "../components/ProtectedRoutes";
import About from "../pages/About";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Country from '../pages/Country';
import LogIn from '../pages/LogIn';

const routes = (
    <>
        <Route path="/login" element={<LogIn />} />
        <Route element={<ProtectedRoutes />} >
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path=":id" element={<Country />} />
        </Route>
    </>
)

export default routes;