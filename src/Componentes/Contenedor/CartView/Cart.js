import React, { useContext } from "react";

//traigo el contexto con los datos
import { Context } from "../../../Context/CustomContext";
import { Link } from "react-router-dom";

export const Cart = () => {

    //me quedo con lo que necesito
    const { cart, cantidadProducto } = useContext(Context);

    return (
        <>
        {cart.length === 0 ? (
            <h1>
                No hay productos en el carrito. Ir a <Link to={"/"}>HOME</Link>
            </h1>
            ) : (
            <>
            {cart.map((prod) => <h1 key={prod.id}>{prod.title} {cantidadProducto(prod).length}</h1>)}
            </>
        )}
        </>
        )
}