import { useState } from 'react';
import { Outlet, Navigate } from 'react-router-dom'
import {useContext} from "react";
import UserContext from "../context/userContext";
import { useUserContext } from '../hooks/useUserContext';

export default function ProtectedRoutes() {
    const {isLogged} = useUserContext();
    return(isLogged ? <Outlet/> : <Navigate to="/login" /> );
}