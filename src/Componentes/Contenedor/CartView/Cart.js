import React, { useContext } from "react";

//traigo el contexto con los datos
import { Context } from "../../../Context/CustomContext";
import { Link } from "react-router-dom";

export const Cart = () => {

    //me quedo con lo que necesito
    const { cart, deleteItem } = useContext(Context);

    return (
        <>
        {cart.length === 0 ? (
            <h1>
                No hay productos en el carrito. Ir a <Link to={"/"}>HOME</Link>
            </h1>
            ) : (
            <>
            <li>
                {cart.map((prod) => <h2 key={prod.id}>{prod.title} Cant: {prod.cantidad}<button onClick={()=> deleteItem(prod.id)}>Eliminar producto</button></h2>)}
            </li>
            </>
        )}
        </>
        )
}