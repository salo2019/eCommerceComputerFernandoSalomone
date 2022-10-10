import React, { useEffect, useState } from "react";
import { ItemList } from "./ItemList/ItemList";

import Loading from "../Loading/Loading";
//import { FuncionComponenteEstados } from "../ItemCount/ItemCount";

export const ItemListContainer = () => {

  const mensaje = "Todos los productos";
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    fetch("https://fakestoreapi.com/products/category/electronics")
    .then((res)=> res.json())
    .then((datos)=> setProductos(datos))
    .catch((e)=>{
      console.log("error de consulta");
      console.log(e);
    })
    .finally(()=>{
      setLoading(false);
    })
  },[]);
  
  return (
    <>
      {
        <>
          { loading ? <Loading/> : <ItemList productos={productos} title={mensaje} /> }
        </>
      }
    </>
  )
}