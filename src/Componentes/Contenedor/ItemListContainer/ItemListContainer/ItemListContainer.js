import React, { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

import Loading from "../../../Loading/Loading";
//import { FuncionComponenteEstados } from "../ItemCount/ItemCount";

export const ItemListContainer = () => {

  const mensaje = "Todos los productos";
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  //para saber en que ruta estoy parado
  const { id } = useParams();


  //aramando la ruta
  const URL_BASE = 'https://fakestoreapi.com/products';
  const URL_CAT = `${URL_BASE}/category/${id}`;

  useEffect(()=>{
    const obtenerProductos = async () => {
      try {
        const respuesta = await fetch(id ? URL_CAT : URL_BASE);
        const data = await respuesta.json(); 
        setProductos(data);      
      } catch (error) {
        console.log(error);      
      } finally {
        setLoading(false);
      }
    };
    obtenerProductos();
  },[id]);
  
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


// https://fakestoreapi.com/products/category/electronics