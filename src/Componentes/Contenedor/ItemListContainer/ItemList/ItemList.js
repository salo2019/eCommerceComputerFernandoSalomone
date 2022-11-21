import React from "react";
import { Link } from "react-router-dom";

//estilos nuevos
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export const ItemList = ({ productos, title }) => {

    // return <>
    //     <Card body>{title}</Card>
    //     <CardGroup>
    //         {
    //             productos.map((producto) => { 
    //                 return (
    //                     <Card key={producto.id} className="p-2">
    //                         <Card.Img variant="top" width="110" height="180" src={producto.image} />
    //                         <Card.Body>
    //                             <Card.Title>${producto.price}</Card.Title>
    //                             <Card.Text>
    //                                 {producto.title}
    //                             </Card.Text>
    //                         </Card.Body>
    //                         <Card.Footer>
    //                             <Link to={'/producto/' + producto.id}>
    //                                 <Button variant="primary">Mas detalles</Button>
    //                             </Link>
    //                         </Card.Footer>
    //                     </Card>
    //                 )
    //             })
    //         }
    //     </CardGroup>
    // </>

    return <>
        {
            productos.map((producto) => {
                return (                    
                    <Card sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image={producto.image}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {producto.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {producto.description}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>                            
                            <Link to={'/producto/' + producto.id}>
                                <Button size="small" color="primary">
                                    Mas detalles
                                </Button>
                            </Link>
                        </CardActions>
                    </Card>
                )
            }
            )
        }
    </>
}