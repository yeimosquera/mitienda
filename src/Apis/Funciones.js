import axios from 'axios';
import React from 'react';

const dataSecciones = async (state) => {
    const peticion = await axios.get('https://v3.tissini.app/api/v3/categories/sections')
    state(peticion.data)
}

const dataCategorias = async (state) => {
    const peticion = await axios.get('https://v3.tissini.app/api/v3/categories')
    state(peticion.data) 
}


const iniciarSesion = async (telefono, state) => {
   
      const data = {mobilephone: telefono}
     const peticion = await axios.post('https://v3.tissini.app/api/v3/login/client')
     state(peticion.data)     
} 


const getCatalogo = async (state, id) => {
    const peticion = await axios.get('https://v3.tissini.app/api/v3/categories/'+id)
    state(peticion.data.categories.categories) 
}

export {
    dataSecciones, dataCategorias, iniciarSesion, getCatalogo
}  