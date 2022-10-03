import React from "react";
import logoPng from '../../assets/logoPng.png';
//importo los estilos
//import { styles } from './Navbar.style';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

//libreria instalada. Mirar el info.txt
//import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

//Forma 1
//const Navbar = (props) => 
//y despues se puede hacer
// forma 1: const { titulo } = props; y llamar con {titulo} en el h1
// forma 2 .. llamar con props.titulo en h1
// forma 3 directamente llamar en la funcion //const Navbar = ( { titulo } ) => y se llamara en el h1 como {titulo} solamente

const categorias = [
    { id: 1, nombre: "Categoria1", ruta: "./index.html"},
    { id: 2, nombre: "Categoria2", ruta: "./index.html"},
    { id: 3, nombre: "Categoria3", ruta: "./index.html"},
    { id: 4, nombre: "Categoria4", ruta: "./index.html" },
]

const NavbarFunction = ( { titulo , children } ) => {

        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
              <Container>
                <Navbar.Brand href="#home">
                    <img src={ logoPng } width="150" height="100" className="d-inline-block align-top" alt="Logo de pagina"/>
                </Navbar.Brand>
                <Navbar.Brand href="#">{ titulo }</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="me-auto">
                    {categorias.map((categoria) => { 
                        return <Nav.Link key={ categoria.id } href={ categoria.ruta }> { categoria.nombre }</Nav.Link>    
                    })}
                  </Nav>
                  <Nav>
                    <Nav.Link href="#deets"></Nav.Link>
                    <Nav.Link eventKey={2} href="#memes">
                      { children }
                    </Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          );
        }

//devuelvo el componente
export default NavbarFunction