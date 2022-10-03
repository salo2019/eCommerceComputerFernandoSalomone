import React from "react";
import Card from 'react-bootstrap/Card';

export const ItemListContainer = ( { greeting } ) => {
  return <Card body>{ greeting }</Card>;
}