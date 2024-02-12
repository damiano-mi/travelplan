import { useState } from 'react';
import { Outlet, Navigate } from 'react-router-dom'
import {useContext} from "react";
import UserContext from "../context/userContext";

export default function ProtectedRoutes() {
    const [user] = useContext(UserContext);
    return(user.name!=="" ? <Outlet/> : <Navigate to="/login" /> );
}