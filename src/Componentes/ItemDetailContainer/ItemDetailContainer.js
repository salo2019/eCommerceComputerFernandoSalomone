import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";

//import Loading from "../Loading/Loading";
//import { FuncionComponenteEstados } from "../ItemCount/ItemCount";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {

  const [producto, setProducto] = useState({})
  const [loading, setLoading] = useState(true)
  const {id} =useParams()

  useEffect(()=>{
      const querydb = getFirestore()
      setLoading(true)
      const queryDoc = doc (querydb,'productos',id)
      getDoc(queryDoc)
      .then(res => setProducto({id:res.id, ...res.data()}))
      setLoading(false)
  },[])


  //para saber en que ruta estoy parado
  // const {id} = useParams();  

  // const [producto, setProducto] = useState({});
  // const [loading, setLoading] = useState(true);


  // //para firestore
  // function filtrarData(query) {
  //   getDocs(query).then(res => {
  //     setProducto(res.docs)
  //     setLoading(false);
  //   })
  // }

  // useEffect(() => {
  //   setLoading(true);
  //   const querydb = getFirestore()
  //   const queryCollection = collection(querydb, 'productos')
  //   const queryFilter = query(queryCollection, where('id','==', id))
  //   filtrarData(queryFilter)
  // }, [id]);

  // useEffect(()=>{
  //   const obtenerProductos = async () => {
  //     try {
  //       const respuesta = await fetch("https://fakestoreapi.com/products/" + id);
  //       const data = await respuesta.json(); 
  //       setProducto(data);      
  //     } catch (error) {
  //       console.log(error);      
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   obtenerProductos();
  // },[]);
  
  return (
    <>
      {
        <>
          { loading ? <h2>Cargando producto</h2> : <ItemDetail producto={producto} /> }
        </>
      }
    </>
  )
}
export default ItemDetailContainer;