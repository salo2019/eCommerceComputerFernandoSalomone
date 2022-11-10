import React from "react";
import logoPng from '../../assets/logoPng.png';
//importo los estilos
//import { styles } from './Navbar.style';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import { NavLink as NavLinkRRD} from "react-router-dom";

//libreria instalada. Mirar el info.txt
//import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

//Forma 1
//const Navbar = (props) => 
//y despues se puede hacer
// forma 1: const { titulo } = props; y llamar con {titulo} en el h1
// forma 2 .. llamar con props.titulo en h1
// forma 3 directamente llamar en la funcion //const Navbar = ( { titulo } ) => y se llamara en el h1 como {titulo} solamente

const categorias = [
    { id: 1, nombre: "Memorias", ruta: "categoria/memorias"},
    { id: 2, nombre: "Monitores", ruta: "categoria/monitores"},
    { id: 3, nombre: "Consolas", ruta: "categoria/consolas"},
    { id: 4, nombre: "Juegos", ruta: "categoria/juegos"}
]

const NavbarFunction = ( { titulo , children } ) => {

        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
              <Container>
                <NavLinkRRD to="/">
                  <Navbar.Brand>
                    <img src={ logoPng } width="150" height="100" className="d-inline-block align-top" alt="Logo de pagina"/>
                  </Navbar.Brand>
                </NavLinkRRD>
                <Navbar.Brand>
                  <NavLinkRRD to="/">
                    { titulo }
                  </NavLinkRRD>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="me-auto">
                    {categorias.map((categoria) => { 
                        return <Nav.Link><NavLinkRRD key={ categoria.id } to={ categoria.ruta }>{ categoria.nombre }</NavLinkRRD></Nav.Link>    
                    })}
                  </Nav>
                  <Nav>
                    <Nav.Link href="#deets"></Nav.Link>
                    <Nav.Link> 
                      <NavLinkRRD to="/cart">
                        { children }
                      </NavLinkRRD>
                      <NavLinkRRD to="/compras">
                        Mis compras
                      </NavLinkRRD>
                    </Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          );
        }

//devuelvo el componente
export default NavbarFunction