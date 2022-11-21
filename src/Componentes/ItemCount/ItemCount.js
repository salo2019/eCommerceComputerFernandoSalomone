import React, { useState } from "react";
//import Button from "react-bootstrap/Button";

//Estilos nuevos
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';



export const ItemCount = ( { stock, initial, onAdd } ) => {
    
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

    // const handlerClickReset = () => {
    //     setContador(initial); //manera de sumar de a 1 al estados "contador"
    // }

    return (
        <Stack direction="row" spacing={1}>
            <Button variant="contained" onClick={handlerClickSumar}>
                <AddCircleOutlineIcon />
            </Button>
            <Button variant="contained" disabled>
                { contador }
            </Button>
            <Button variant="contained" onClick={handlerClickRestar}>
                <RemoveCircleOutlineIcon />
            </Button>
            <Button variant="contained" disabled={stock === 0} onClick={() => onAdd(contador)}>
                <span>
                    {stock === 0 ? 'No tenemos stock'
                        :
                        'Agregar al carrito'}
                </span>
            </Button>
        </Stack>
    );
} 