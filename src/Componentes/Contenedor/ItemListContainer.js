import React from "react";
import Card from 'react-bootstrap/Card';
import { FuncionComponenteEstados } from "../ItemCount/ItemCount";

export const ItemListContainer = ( { greeting } ) => {
  const stock = 7;
  const onAdd = (count) => {
    console.log("Agregaste " + count);
  }
  
  return (
    <>
      <Card body>{greeting}</Card>
      <FuncionComponenteEstados stock={stock} initial={1} onAdd={onAdd} />
    </>
  )
}