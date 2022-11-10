import React, { createContext, useEffect, useState } from "react";

//Paso 1. Crear el contexto
export const ContextCompra = createContext() //aca algo de prueba en el contexto creado. Con ese nombre lo vamos a importar en los demas componentes


export const CompraContextProvide = ({ children }) => {

    const [compra, setCompra] = useState([]);    //estado para el carrito
    const [totalCompra, setTotalCompra] = useState(0);   //estado para la suma total del carrito

   
    //---------------- funciones ---------------------------
    
    //agrega un elemento al carro
    const addCompra = (carrito) => {        
        setCompra(carrito);
    }

    //actualiza el Qty y Total. Es necesario cuando actualizamos valores hacer un userEffect
    //esto es porque react no trabaja de forma secuencia. Con eso nos aseguramos.    
    useEffect(()=> {
        let totalC = 0;
        compra.forEach(item => {
            let cantidad = 0;
            cantidad += item.cantidad;
            //item.cantidad = cantidadProducto(item).length;
            totalC += (item.price * cantidad)
        })
        setTotalCompra(totalC);        
    }, [compra]); //con esto de 'cart' decimos que .. cuando el estado de cart cambia, el ussetEfect actualiza.


    //retorno
    return (
    <ContextCompra.Provider value={{compra, totalCompra, addCompra}}> 
        {children} 
    </ContextCompra.Provider> //con esta envoltura, los children acceden a la info de mi contexto. En value yo le paso a los children lo que quiero que tengan disponible
    );
};