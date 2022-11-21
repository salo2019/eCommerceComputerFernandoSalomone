import React, { useContext, useState } from "react";

import { Link } from "react-router-dom";

//-----------Estilos Material ---------
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
//----------- ------------------------

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

    return (
        <>
            <Card sx={{ maxWidth: 400 }}>
                <CardMedia
                    component="img"
                    alt="disco solido pci"
                    height="380"
                    image={producto.image}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {producto.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {producto.description}
                    </Typography>
                </CardContent>
                <CardActions>
                    {showItemCount ? (
                        <ItemCount initial={1} stock={5} onAdd={onAdd} />
                    ) : (
                        <>
                            <Link to={'/cart'}>
                                <Button size="small">Ir a carrito</Button>
                            </Link>
                            <Link to={'/producto'}>
                                <Button size="small">Continuar comprando</Button>
                            </Link>
                        </>
                    )}
                </CardActions>
            </Card>
        </>
    );
}

export default ItemDetail;