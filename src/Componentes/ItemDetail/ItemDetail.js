import React from "react";

//bootstrap
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
//-----------

const ItemDetail = ({ producto }) => {
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
    </>
}

export default ItemDetail;