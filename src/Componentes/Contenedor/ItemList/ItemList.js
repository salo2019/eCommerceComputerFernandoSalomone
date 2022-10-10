import React from "react";

export const ItemList = ( {productos} ) => {
    return (
    <>
        {
            productos.map((producto) => {
                return <h2 key={producto.id}>{producto.nombre}</h2>
            })
        }
    </>
    )
}