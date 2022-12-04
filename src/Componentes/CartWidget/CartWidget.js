import React, { useContext } from "react";

//libreria instalada. Mirar el info.txt
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

//importo el contexto que necesito
import { Context } from "../../Context/CustomContext";


const CartWidget = () => {
  //para este componente me traigo solo lo que necesito que es la cantidad
  const { qty } = useContext(Context);

  //retorno
  return <>
    <p>
      {qty === 0 ?
        'Carrito vacio'
        :
        <>{qty}</>
      }
    </p>
    <ShoppingCartIcon color="primary" fontSize="large" />
  </>
}

export default CartWidget;