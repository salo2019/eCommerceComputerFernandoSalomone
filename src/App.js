//componente App
import React from "react";
import Navbar from "./Componentes/Navbar/Navbar"; //Cualquiera que no sea js o jsx si se aclara la extension
import CartWidget from "./Componentes/CartWidget/CartWidget";
import { Cart } from "./Componentes/Contenedor/CartView/Cart";
import { ItemListContainer } from "./Componentes/Contenedor/ItemListContainer/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./Componentes/ItemDetailContainer/ItemDetailContainer";

import { ComponenteEventos } from "./Componentes/ComponenteEventos";
import { Users } from "./Users";

//llamo al componente Header
const App = () => {

  const tituloPagina = "Compra de todo";

  return (
    <>
      <BrowserRouter>
        <Navbar titulo={tituloPagina}>
          <CartWidget />
        </Navbar>
        <Routes>
          <Route path="/" element={<ItemListContainer />}/>
          <Route path="/categoria/:id" element={<ItemListContainer />}/>
          <Route path="/producto/:id" element={<ItemDetailContainer />}/>
          <Route path="/cart/" element={<Cart />}/>  
          <Route path="*" element={<ItemListContainer />}/> {/* Ruta por defecto si se tipea una inexistente */}
        </Routes>        
        <ComponenteEventos /> 
        <Users /> 
      </BrowserRouter>
    </>
  );
}

export default App;