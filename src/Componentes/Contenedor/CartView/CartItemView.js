import React,  { useContext } from "react";
//traigo el contexto con los datos
import { Context } from "../../../Context/CustomContext";

export const CartItemView = ({id, titulo, cantidad, precioUnidad, total}) => {

    //me quedo con lo que necesito
    const { deleteItem } = useContext(Context);

    return (
        <ul key={id}>
            <li>Producto: {titulo}</li>
            <li>Cantidad: {cantidad}</li>
            <li>Precio unitario: {precioUnidad}</li>
            <li>Total precio: {total}</li>
            <button onClick={()=> deleteItem(id)}>Eliminar producto</button>
        </ul>
    )
}