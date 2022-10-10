//componente App
import React from "react";
import Navbar from "./Componentes/Navbar/Navbar"; //Cualquiera que no sea js o jsx si se aclara la extension
import CartWidget from "./Componentes/CartWidget/CartWidget";
import { ItemListContainer } from "./Componentes/Contenedor/ItemListContainer";


//llamo al componente Header
const App = () => {

  const tituloPagina = "CompuHer-Electronic";
  const mensaje = "Todos los productos";

  return (
    <>
      <Navbar titulo = { tituloPagina }>
        <CartWidget />   
      </Navbar> 
      <ItemListContainer greeting = { mensaje } />
    </>
  );
}

export default App;