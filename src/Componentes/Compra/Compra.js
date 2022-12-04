import React, { useContext } from "react";

import { ContextCompra } from "../../Context/CompraContext";

export const Compra = () => {

   const { compra, totalCompra } = useContext(ContextCompra);
 
   const lista = [...compra];
   console.log("lista " + lista);

   return <>
   <br></br><br></br><h2>Felicitaciones, usted finalizó su compra</h2><br></br><br></br>
   <h3>Detalles de compra</h3><br></br>
   <div>
       {
           compra.map((producto) => { 
               return (
                   <div key={producto.id}>
                           <h5>Producto: {producto.title}</h5>
                           <p>Precio: ${producto.price}</p>
                           <p>Cantidad: {producto.cantidad}</p>
                   </div>
               )
           })
       }
   </div>
   <h4>Precio abonado: {totalCompra}</h4>
</>
}