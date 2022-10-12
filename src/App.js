//componente App
import React from "react";
import Navbar from "./Componentes/Navbar/Navbar"; //Cualquiera que no sea js o jsx si se aclara la extension
import CartWidget from "./Componentes/CartWidget/CartWidget";
import { ItemListContainer } from "./Componentes/Contenedor/ItemListContainer/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Componentes/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";


//llamo al componente Header
const App = () => {

  const tituloPagina = "CompuHer-Electronic";

  return (
    <>
      <BrowserRouter>
        <Navbar titulo={tituloPagina}>
          <CartWidget />
        </Navbar>
        <ItemListContainer />
        <ItemDetailContainer />
      </BrowserRouter>
    </>
  );
}

export default App;