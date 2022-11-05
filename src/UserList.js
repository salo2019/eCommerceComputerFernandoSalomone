import React from "react";

export const UserList = ({lista, funcionDelete}) => {
        
    return (
        <ul>
            {lista.map((nombre, i) => {
                return (
                    <li>
                        <h2 key={i}>{nombre}</h2>
                        <button onClick={()=> funcionDelete(nombre)}>Eliminar usuario</button> {/* Para pasar paramentros dentro tiene que ser una funcion flecha */}
                    </li>
                );
            })}
        </ul>
    );
};