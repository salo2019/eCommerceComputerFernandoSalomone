//import { ConstructionOutlined } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import { ItemList } from "./ItemList/ItemList";
//import { FuncionComponenteEstados } from "../ItemCount/ItemCount";


const productos = [
  {nombre:"manzana", id:0, categoria:"fruta", stock:10, precio:500},
  {nombre:"pera", id:1, categoria:"fruta", stock:15, precio:700},
  {nombre:"lechuga", id:2, categoria:"verdura", stock:12, precio:200},
  {nombre:"tomate", id:3, categoria:"verdura", stock:19, precio:850},
  {nombre:"banana", id:4, categoria:"fruta", stock:14, precio:1200}
]

//creacion de promesa. No se deberian crear aqui.
const obtenerProductos = new Promise((resolve, reject) => {
  setTimeout(()=>{
    resolve(productos);
  },2000);
})

export const ItemListContainer = ( { greeting } ) => {

  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    obtenerProductos
    .then((data)=>{
      setProductos(data);
    })
    .catch((e)=>{
      console.log("salio todo mal");
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