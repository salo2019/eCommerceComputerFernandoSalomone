import React, { useState, useEffect } from "react";
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




    //-------------- UseEffect -------------------
    const [numero, setNumero] = useState(0);
    //aqui ciclo de vida. Primero se ejecutaria el constructor, luego el render y luego esta funcion de abajo
    //recibe paramentros -Aqui entraria la logica de componentDidUpdate y componentDidMount. 2 parametros, funcion flecha y array
    useEffect(()=> {
        setNumero(numero + 1);

        const intervalo = setInterval(()=>{
            console.log("ping");
        }, 1000);

        //agregar el return es para indicar lo que queremos ejecutar cuando el componente muera. En este caso freno el ping
        return(()=>{
            clearInterval(intervalo);
        })
    },[contador]);  //cambia numero, solo al principio y cuando cambia el contador. Si lo dejo vacio el array es solo al principio. Eso hace el useEffect
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