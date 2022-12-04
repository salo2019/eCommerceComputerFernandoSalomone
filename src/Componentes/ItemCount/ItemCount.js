import React, { useState } from "react";
import Button from "react-bootstrap/Button";



export const ItemCount = ( { stock, initial, onAdd, idProducto } ) => {
    

    const [contador, setContador] = useState(initial); //se reinicia el contador con el valor que esta entre parentesis

    const handlerClickSumar = () => {
        if (contador < stock ) {            
            setContador(contador + 1); //manera de sumar de a 1 al estados "contador"
        }
    }

    const handlerClickRestar = () => {
        if (contador > initial) {
            setContador(contador - 1); //manera de sumar de a 1 al estados "contador"
        }
    }

    const handlerClickReset = () => {
        setContador(initial); //manera de sumar de a 1 al estados "contador"
    }

    return ( 
        <div>
            <h2>{ contador }</h2>
            <Button variant="primary" onClick={handlerClickSumar}>+</Button>{' '}
            <Button variant="primary" onClick={handlerClickRestar}>-</Button>{' '}
            <Button variant="danger" onClick={handlerClickReset}>Reset</Button>{' '}
            <Button variant="secondary" disabled={stock === 0} onClick={()=>onAdd(contador)}>
                <span>
                    {stock === 0 ? 'No tenemos stock'
                     : 
                    'Agregar al carrito'}
                </span> 
            </Button>
        </div> 
    )
} 