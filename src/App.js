//componente App
import React, {useState} from "react";
import Navbar from "./Componentes/Navbar/Navbar"; //Cualquiera que no sea js o jsx si se aclara la extension
import CartWidget from "./Componentes/CartWidget/CartWidget";
import { ItemListContainer } from "./Componentes/Contenedor/ItemListContainer";


//llamo al componente Header
const App = () => {

  //estado---------
  const [show, setShow] = useState(true);
  // const alternar = () => {
  //   setShow(!show);
  // }
  //----------------

  const tituloPagina = "CompuHer-Electronic";
  const mensaje = "Todos los productos";

  return (
    <>
      <Navbar titulo = { tituloPagina }>
        <CartWidget />   
      </Navbar> 
      <ItemListContainer greeting = { mensaje } />
      {/* {show ? <ItemListContainer greeting = { mensaje } /> : <h1>Aca no hay nada</h1>}
      <button onClick={alternar}>Ver/Ocultar Productos</button> */}
    </>
  );
}

export default App;