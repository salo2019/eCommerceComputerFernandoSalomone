import React from "react";

export const UserList = ({lista}) => {
    return (
        <ul>
            {lista.map((nombre, i) => {
                return (
                    <li>
                        <h2 key={i}>{nombre}</h2>
                    </li>
                );
            })}
        </ul>
    );
};