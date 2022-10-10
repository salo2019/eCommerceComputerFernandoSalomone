import React from "react";

//bootstrap
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

export const ItemList = ({ productos }) => {
    return <>
        <CardGroup>
            {
                productos.map((producto) => {
                    return (
                        <Card key={producto.id} className="p-2">
                            <Card.Img variant="top" width="110" height="180" src={producto.image} />
                            <Card.Body>
                                <Card.Title>${producto.price}</Card.Title>
                                <Card.Text>
                                    {producto.title}
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <Button variant="primary">Mas detalles</Button>
                            </Card.Footer>
                        </Card>
                    )
                })
            }
        </CardGroup>
    </>
}