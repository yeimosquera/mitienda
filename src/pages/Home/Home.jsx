import React, { useEffect, useState } from 'react';
import { dataSecciones } from '../../Apis/Funciones'
import { dataCategorias } from '../../Apis/Funciones'
import { useNavigate, useParams } from 'react-router-dom'



const Home = () => {
   const [secciones, setSeciones] = useState(null);
   const [categorias, setCatecogorias] = useState(null);
   let { } = useParams();
   let { useNavigate } = useParams();

   useEffect(() => {
      dataSecciones(setSeciones)
      dataCategorias(setCatecogorias)
   }, [])


   return (
      <>
         {secciones !== null ? (secciones.map(seccion => (
            <div className='divHome'>
               <div class="card">
                  <img className='imgHome' src={'https://v3.tissini.app/' + seccion.image} alt="" />
                  <div class="container">
                     {seccion.products !== null ? (seccion.products.map(product => (

                        <div class="card2">
                           <img className='imgHome' src={'https://v3.tissini.app/' + product.image.url} alt="" />
                           <div class="container">
                              <button className='agregar' type="button" >AGREGAR</button><label className='precio'>${product.price} </label>
                           </div> <br /><br />
                        </div>

                     ))) : ('')}
                  </div>
               </div><br /><br />

            </div>
         ))) : ('Cargando...')
         }

         {categorias !== null ? (categorias.map(categoria => (
            <div className='divHome'>
               <div class="card">
                  <img className='imgHome' src={'https://v3.tissini.app/' + categoria.image} alt="" />
                  <div class="container">
                     <a href={'/catalogo/' + categoria.id} className='verMas' type="button" >Ver más</a>
                  </div>
               </div><br /><br />

            </div>
         ))) : ('')
         }

      </>
   )
}

export default Home