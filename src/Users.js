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
        setLista([...lista, nombre]);
    }

    return (
        <div>
            <input type="text" value={nombre} onChange={handlerChange}/>
            <button onClick={handlerClick}>Agregar</button>
            <UserList lista={lista}/>
        </div>
    )
}