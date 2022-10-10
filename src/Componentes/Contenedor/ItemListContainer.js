//import { ConstructionOutlined } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import { ItemList } from "./ItemList/ItemList";
//import { FuncionComponenteEstados } from "../ItemCount/ItemCount";

export const ItemListContainer = ( { greeting } ) => {

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
      <Card body>{greeting}</Card>
      {
        <>
          { loading ? <h2>Cargando...</h2> : <ItemList productos={productos} /> }
        </>
      }
    </>
  )
}