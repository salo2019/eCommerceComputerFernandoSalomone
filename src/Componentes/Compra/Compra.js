import React, { useContext } from "react";

import { ContextCompra } from "../../Context/CompraContext";

export const Compra = () => {

   const { compra } = useContext(ContextCompra);

   return <>
   <br></br><br></br><h2>Compras realizadas</h2><br></br><br></br>
   <div>
       {
           compra.map((producto) => { 
               return (
                   <div key={producto.id}>
                           <h4>Codigo de compra: {producto.id}</h4>
                           <h4>Nombre comprador: {producto.comprador.nombre + " " + producto.comprador.apellido }</h4>
                           <br></br><br></br>
                   </div>
               )
           })
       }
   </div>
</>
}