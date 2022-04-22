import React from "react";


import './Input.css';

const Input = ({type = 'number',id = 'telefono',name = 'telefono',placeholder = 'Telefono',className = 'telefono', onChange, param}) => {

   
    return (
        <div className='input'>
            <input 
            type={type} 
            id={id}
            name={name}
            placeholder={placeholder}
            onChange={ onChange}
            className={param ? 'inputError' : className}
            maxLength="10" />
            <p  className={param ? 'textoError' : 'textoErroroculto'}>Este número no es valido o no está registrado.</p>   
        </div>
    )
}

export default Input;
