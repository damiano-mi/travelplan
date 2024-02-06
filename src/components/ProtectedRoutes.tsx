import { useState } from 'react';
import { Outlet, Navigate } from 'react-router-dom'

export default function ProtectedRoutes() {
    const [auth,setAuth] = useState(false);
    return( auth ? <Outlet/> : <Navigate to="/login" /> );
}