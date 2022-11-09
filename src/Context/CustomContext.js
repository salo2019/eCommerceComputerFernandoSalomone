import React, { createContext, useEffect, useState } from "react";

//Paso 1. Crear el contexto
export const Context = createContext() //aca algo de prueba en el contexto creado. Con ese nombre lo vamos a importar en los demas componentes


export const CustomProvide = ({ children }) => {

    const [cart, setCart] = useState([]);    //estado para el carrito
    const [qty, setQty] = useState(0);       //estado para contar las cantidades
    const [total, setTotal] = useState(0);   //estado para la suma total del carrito

   
    //---------------- funciones ---------------------------
    
    //agrega un elemento al carro
    const addItem = (item, cantidad) => {        
        if(isInCart(item.id)){
            cart.forEach((producto => {
                if (producto.id === item.id) {
                    producto.cantidad = cantidad + producto.cantidad;
                    setCart(cart);
                }
            }))
        } else {
            setCart([...cart, {...item, cantidad}])    
        }        
    }

    //borra un elemento del carro
    const deleteItem = (id) => {
        const filtrado = cart.filter(item => item.id !== id); //en filtrado me queda una nueva lista sin el id
        setCart(filtrado);
    }


    const cantidadProducto = (item) => {
        return cart.filter(p => p.id === item.id);
    }

    //actualiza el Qty y Total. Es necesario cuando actualizamos valores hacer un userEffect
    //esto es porque react no trabaja de forma secuencia. Con eso nos aseguramos.    
    useEffect(()=> {
        let totalC = 0;
        let cantCarrito = 0;
        cart.forEach(item => {
            let cantidad = 0;
            cantCarrito += item.cantidad;
            cantidad += item.cantidad;
            //item.cantidad = cantidadProducto(item).length;
            totalC += (item.price * cantidad)
        })
        setQty(cantCarrito);
        setTotal(totalC);        
    }, [cart]); //con esto de 'cart' decimos que .. cuando el estado de cart cambia, el ussetEfect actualiza.

    //para ver si un producto esta en el carrito
    const isInCart = (id) => {
        return cart.some(item => item.id === id);
    }

    const clear = () => {
        setCart([]);
        setQty(0);
        setTotal(0);
    }

    //retorno
    return (
    <Context.Provider value={{cart, qty, total, addItem, deleteItem, isInCart, clear, cantidadProducto}}> 
        {children} 
    </Context.Provider> //con esta envoltura, los children acceden a la info de mi contexto. En value yo le paso a los children lo que quiero que tengan disponible
    );
};