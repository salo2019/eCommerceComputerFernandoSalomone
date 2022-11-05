import React, { useState } from "react";

//bootstrap
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import CardGroup from 'react-bootstrap/CardGroup';
//-----------
import { ItemCount } from "../ItemCount/ItemCount";

const ItemDetail = ({ producto }) => {

    //
    const [showItemCount, setShowItemCount] = useState(true);

    //Para agregar
    const onAdd = (count) => {
        console.log("se agregan " + count + " unidades");
        setShowItemCount(false);
    }


    return <>
        <Card body>{producto.title}</Card>
        <CardGroup>
            <Card key={producto.id} className="p-2">
                <Card.Img variant="top" src={producto.image} />
                <Card.Body>
                    <Card.Title>${producto.price}</Card.Title>
                    <Card.Text>
                        {producto.title}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                   {producto.description}
                </Card.Footer>
            </Card>
        </CardGroup>
        {showItemCount ? ( 
            <ItemCount initial={1} stock={5} onAdd={onAdd} />
        ) : (
            <Link to = {'/cart'}>
                <button>Finalizar compra</button>
            </Link>
        )}
    </>
}

export default ItemDetail;