import React from "react";
import logo from '../../assets/logo.jpg';
//importo los estilos
import { styles } from './Navbar.style';

//libreria instalada. Mirar el info.txt
//import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

//Forma 1
//const Navbar = (props) => 
//y despues se puede hacer
// forma 1: const { titulo } = props; y llamar con {titulo} en el h1
// forma 2 .. llamar con props.titulo en h1
// forma 3 directamente llamar en la funcion //const Navbar = ( { titulo } ) => y se llamara en el h1 como {titulo} solamente

const categorias = [
    { id: 1, nombre: "Categoria 1", ruta: "#" },
    { id: 2, nombre: "Categoria 2", ruta: "#" },
    { id: 3, nombre: "Categoria 3", ruta: "#" },
    { id: 4, nombre: "Categoria 4", ruta: "#" },
]

const Navbar = ( { titulo , children } ) => {

    return (
        <header style={ styles.container }>
            <img style={ styles.imagenes } src={ logo } alt="Logo de aplicacion" />
            <h1>{ titulo }</h1>
            <nav>
                {
                /* <a style={styles.categorias} href="">Categoria 1</a>
                <a style={styles.categorias} href="">Categoria 2</a>
                <a style={styles.categorias} href="">Categoria 3</a>
                <a style={styles.categorias} href="">Categoria 4</a> */
                

                    categorias.map((categoria) => { //si no tenemos key podemos pasar un segundo parametro llamadao ,i y ponerlo en key
                        return <a key= { categoria.id } style={ styles.categorias } href= { categoria.ruta }> { categoria.nombre } </a> //la key es necesaria siempre en toda iteracion 
                    })
                }
            </nav>
            { children }
        </header>
    )
}
 
//devuelvo el componente
export default Navbar