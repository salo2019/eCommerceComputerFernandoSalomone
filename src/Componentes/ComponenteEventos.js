import React from "react";

export const ComponenteEventos = () => {

    const callBack = () => {
        console.log("hacer click")
    }

    const handlerChange = (event) => {
        console.log(event);
        //En un formulario suele usarse el value
        console.log(event.target.value);
        //Podemos verlo tipo objeto
        console.dir(event.target);
        //puede hacerse muchas cosas con los event. Hay que investigar todo lo que da el target.
    }

    const handlerClickAnchor = (event) => {
        //event.preventDefault();
        console.log("Se corto el comportamiento defaul.");
    }

    return (
        <>
            <h1>ComponenteEventos</h1>
            <button onClick={callBack}>Click</button>    
            <input type="text" onChange={handlerChange} />
            {/* Probando el preventDefault. Se anula la direccion a la pagina */}
            <a onClick={handlerClickAnchor} href="https://github.com/">Ir a git</a>
        </>
    )
}