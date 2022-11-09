import React, { useContext } from "react";

//traigo el contexto con los datos
import { Context } from "../../../Context/CustomContext";
import { Link } from "react-router-dom";

import { CartItemView } from "./CartItemView";

export const Cart = () => {

    //me quedo con lo que necesito
    const { cart, total } = useContext(Context);

    return (
        <>
        {cart.length === 0 ? (
            <h1>
                No hay productos en el carrito. Ir a <Link to={"/"}>HOME</Link>
            </h1>
            ) : (
            <>
                {cart.map((prod) => 
                <CartItemView id={prod.id} titulo={prod.title} cantidad={prod.cantidad} precioUnidad={prod.price} total={prod.price * prod.cantidad}/>)}
            </>
        )}
        <span>Total carrito: {total}</span>
        </>
        )
}