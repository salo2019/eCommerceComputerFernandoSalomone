import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";

export const FuncionComponenteEstados = ( { stock, initial, onAdd } ) => {
    
    const [contador, setContador] = useState(initial); //se reinicia el contador con el valor que esta entre parentesis

    //-------------- UseEffect -------------------
    const [numero, setNumero] = useState(0);
    
    useEffect(()=> {
        setNumero(numero + 1);

        const intervalo = setInterval(()=>{
            console.log("ping");
        }, 1000);

        //agregar el return es para indicar lo que queremos ejecutar cuando el componente muera. En este caso freno el ping
        return(()=>{
            clearInterval(intervalo);
        })
    },[]);  //cambia numero, solo al principio y cuando cambia el contador. Si lo dejo vacio el array es solo al principio. Eso hace el useEffect
    //-------------------------------------------

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
        setContador(1); //manera de sumar de a 1 al estados "contador"
    }

    return ( 
        <div>
            <h1>Componente para los estados</h1>
            <h2>{ contador }</h2>
            <h3>{ numero }</h3>
            <Button variant="primary" onClick={handlerClickSumar}>+</Button>{' '}
            <Button variant="primary" onClick={handlerClickRestar}>-</Button>{' '}
            <Button variant="danger" onClick={handlerClickReset}>Reset</Button>{' '}
            <Button variant="secondary" onClick={()=>onAdd(contador)}>Agregar</Button>{' '}
        </div> 
    )
} 