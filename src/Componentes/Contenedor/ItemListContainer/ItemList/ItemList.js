import React from "react";
import { Link } from "react-router-dom";

//bootstrap
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';





export const ItemList = ({ productos, title }) => {
    return <>
        <Card body>{title}</Card>
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
                                <Link to={'/producto/' + producto.id}>
                                    <Button variant="primary">Mas detalles</Button>
                                </Link>
                            </Card.Footer>
                        </Card>
                    )
                })
            }
        </CardGroup>
    </>
}