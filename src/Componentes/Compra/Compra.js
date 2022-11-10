import React, { useContext } from "react";

import { ContextCompra } from "../../Context/CompraContext";

export const Compra = () => {

   const { compra, totalCompra } = useContext(ContextCompra);
 
   const lista = [...compra];
   console.log("lista " + lista);

   return <>
   <h2>Compra Numero: xxxx</h2>
   <div>
       {
           compra.map((producto) => { 
               return (
                   <div>
                           <h3>Nombre: {producto.title}</h3>
                           <p>Precio: ${producto.price}</p>
                           <p>Cantidad: {producto.cantidad}</p>
                   </div>
               )
           })
       }
   </div>
   <span>Precio abonado: {totalCompra}</span>
</>
}