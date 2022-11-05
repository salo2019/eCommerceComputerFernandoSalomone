import React, { useContext, useState } from "react";

//bootstrap
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import CardGroup from 'react-bootstrap/CardGroup';
//-----------
import { ItemCount } from "../ItemCount/ItemCount";
import { Context } from "../../Context/CustomContext";

const ItemDetail = ({ producto }) => {

    //Para el cambio de visual
    const [showItemCount, setShowItemCount] = useState(true);
    
    //-----------forma 1. Me traigo todo lo de contexto
    //const resultado = useContext(Context); 
    
    //-----------forma 2. Solo me traigo la funcion que necesita del contexto
    const {addItem} = useContext(Context);

    //Para agregar
    const onAdd = (count) => {
        addItem(producto, count);
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