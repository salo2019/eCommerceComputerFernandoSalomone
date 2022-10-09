import React, { useState } from "react";
import Button from "react-bootstrap/Button";

export const FuncionComponenteEstados = ( { stock, initial, onAdd } ) => {

    //Asi se declaran los estados
    // const [estado, setEstado] = useState();
    // const [usetList, setUserList] = useState();    ....Si quisieramos un estado como lista de usuarios
    
    //distintos tipos de estados que se podrian crear
    //const [usuarioNombre, setUsuarioNombre] = useState(""); //si fuera un string
    //const [usuarios, setUsuarios] = useState([]);           //si fuera una lista de usuarios
    //const [usuario, setUsuario] = useState({});             //si fuera un objeto usuario
    
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
        setContador(1); //manera de sumar de a 1 al estados "contador"
    }

    return ( 
        <div>
            <h1>Componente para los estados</h1>
            <h2>{ contador }</h2>
            <Button variant="primary" onClick={handlerClickSumar}>+</Button>{' '}
            <Button variant="primary" onClick={handlerClickRestar}>-</Button>{' '}
            <Button variant="danger" onClick={handlerClickReset}>Reset</Button>{' '}
            <Button variant="secondary" onClick={()=>onAdd(contador)}>Agregar</Button>{' '}
        </div> 
    )
}