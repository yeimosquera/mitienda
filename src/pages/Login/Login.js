import React, {useState} from "react";
import { useLocation, Navigate } from "react-router-dom";

import './Login.css';

import Title from "./Components/Title/Title";
import Logo from "./Components/Logo/Logo";
import Input from "./Components/Input/Input";
import {iniciarSesion} from '../../Apis/Funciones'

const Login = () => {

    const [login, setLogin] = useState('');        
    const [error, seterror] = useState(false);
    const [isLogin, setIsLogin] = useState(false);
    let location = useLocation();

    function handleChange(name, value){
       
        if (name === 'telefono' && value.length === 10) { 

            iniciarSesion(value,setLogin, seterror) 
            console.log(login);
            if (login.status === "bad_request") {
                seterror(true)
                setIsLogin(false)                               
            }else if(login.length > 0){
                seterror(false)                
                setIsLogin(true)
                localStorage.setItem('account', login) 
            }else{
                seterror(true)
                setIsLogin(false)
            }         
        }
    }

    if (isLogin) {       
        return <Navigate to="/categorias" state={{ from: location }} replace />;
    }else{
        return (
            <div className="login-container"> 
                <Logo /> 
                <Title /> 
                <Input 
                onChange={ (e) => handleChange(e.target.name, e.target.value)
                } param={error}/>
    
            </div>
        )
    }   

   
}

export default Login;