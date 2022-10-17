import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";

import Loading from "../Loading/Loading";
//import { FuncionComponenteEstados } from "../ItemCount/ItemCount";

const ItemDetailContainer = () => {

  //para saber en que ruta estoy parado
  const {id} = useParams();  

  const [producto, setProducto] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    const obtenerProductos = async () => {
      try {
        const respuesta = await fetch("https://fakestoreapi.com/products/" + id);
        const data = await respuesta.json(); 
        setProducto(data);      
      } catch (error) {
        console.log(error);      
      } finally {
        setLoading(false);
      }
    };
    obtenerProductos();
  },[]);
  
  return (
    <>
      {
        <>
          { loading ? <Loading/> : <ItemDetail producto={producto} /> }
        </>
      }
    </>
  )
}
export default ItemDetailContainer;