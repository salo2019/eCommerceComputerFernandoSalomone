import React, { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

//import Loading from "../../../Loading/Loading";
//import { FuncionComponenteEstados } from "../ItemCount/ItemCount";

//configurando firestore
import {collection,  getDocs,getFirestore,query,where } from "firebase/firestore";

export const ItemListContainer = () => {

  const mensaje = "Todos los productos";
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  //para saber en que ruta estoy parado
  const { id } = useParams();


  //aramando la ruta
  //const URL_BASE = 'https://fakestoreapi.com/products';
  //const URL_CAT = `${URL_BASE}/category/${id}`;

  //para firestore
  function filtrarData(query){
    getDocs(query).then(res => {
      setProductos( res.docs.map(producto  => ({id:producto.id, ...producto.data()})))
    })
  }
  
  useEffect(() => {
    setLoading(true);

    const querydb = getFirestore()
    const queryCollection = collection(querydb, 'productos')

    if (id) {
      const queryFilter = query(queryCollection, where('category', '==', id))
      filtrarData(queryFilter)
      setLoading(false)
    }
    else {
      filtrarData(queryCollection)
      setLoading(false)
    }
  }, [id]);


  // useEffect(()=>{
  //   const obtenerProductos = async () => {
  //     try {
  //       const respuesta = await fetch(id ? URL_CAT : URL_BASE);
  //       const data = await respuesta.json(); 
  //       setProductos(data);      
  //     } catch (error) {
  //       console.log(error);      
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   obtenerProductos();
  // },[id]);
  
  return (
    <>
      {
        <>
          { loading ? "Cargando productos" : <ItemList productos={productos} title={mensaje} /> }
        </>
      }
    </>
  )
}