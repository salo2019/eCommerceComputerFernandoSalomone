import React, { useContext } from "react";

import { Context } from "../../Context/CustomContext";
import { getFirestore, addDoc, collection } from "firebase/firestore";



function FormFinalizarCompra() {

    //me quedo con lo que necesito
    const { cart, clear, total } = useContext(Context);

    function clicEvento(evento){
        
         evento.preventDefault();

         //cargo los datos con el formulario
         const comprador = {
            nombre: evento.target[0].value,
            apellido: evento.target[1].value,
            email: evento.target[2].value
        }

        //Firestore coneccion
        const db = getFirestore()

        //creo la tabla ventas. La crea la primera vez si no existe
        const ventasCollection = collection(db, "ventas");
        addDoc(ventasCollection, {
            comprador,
            items: cart,
            total: total
        })
        .then(result => {
            alert("Compra exitosa. Su numero de compra es: " + result.id);
            clear(cart);
        })
        .catch(e => {
            console.log("Error " + e);
        })
    } 

        return (
            <form onSubmit={clicEvento}>
                <br></br>
                <br></br>
                <h3>Ingrese datos para finalizar la compra</h3>
                <input type="text" placeholder="Nombre"/>
                <input type="text" placeholder="Apellido"/>
                <input type="email" placeholder="Email"/>      
                <button>Finalizar compra</button>
            </form>
        );
}

export default FormFinalizarCompra;