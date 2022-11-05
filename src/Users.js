import React, { useState } from "react";
import { UserList } from "./UserList";

export const Users = () => {

    //creamos un state para guardar el valor del value
    const [nombre, setNombre] = useState('');
    //state para agregar
    const [lista, setLista] = useState([]);

    //funcion para guardar valor
    const handlerChange = (e)=>{
        setNombre(e.target.value);
    }

    //funcion para agregar a lista de usuario
    const handlerClick = ()=>{
        //con ...lista obtengo la lista como estaba, y con el otro parametro, es como si hiciera un push
        setLista([...lista, nombre]); 

        //esto es lo mismo que hacer:
        
        //const aux = [...lista]  => obtengo copia de la lista
        //aux.push(nombre)
        //setLista(aux)
    }

    const funcionDelete = (nombre) => {
        setLista(lista.filter((nom) => nom !== nombre))
    }

    return (
        <div>
            <input type="text" value={nombre} onChange={handlerChange}/>
            <button onClick={handlerClick}>Agregar</button>
            <UserList lista={lista} funcionDelete={funcionDelete}/>
        </div>
    )
}