import React,{useEffect, useState} from 'react';
import {getCatalogo} from '../../Apis/Funciones'
import './Producto.css'
import {useParams} from 'react-router-dom'



const Producto = () => {

    const param = useParams();
    const [productos, setProductos] = useState(null);
    const[id, setId] = useState(param.id);
   

    useEffect(() => {
        getCatalogo(setProductos, id)        
    }, []) 

    return(
        <>
        {productos !== null ? (productos.map(producto=>(
            <div className='divHome'>   
               <div class="card">
                     <img className='imgHome' src={'https://v3.tissini.app/'+producto.image} alt="" />
                     <div class="container">
                     <button className='agregar' type="button" >AGREGAR</button><label className='precio'>${producto.pos} </label>                  
                     </div>
               </div><br /><br />
               
            </div>
         ))) : ('')
         }
         </>
    )

}



export default Producto