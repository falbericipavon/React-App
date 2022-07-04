import { BsFillCartFill } from "react-icons/bs";
import React, { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom';
import { contexto } from '../Items/CartContext';

const CartWidget = () => {
  const { contador } = useContext(contexto)

  const [cantArticulos, setCantArticulos] = useState(false)

  useEffect(() => {
    if (contador > 0){
      setCantArticulos(true)
    } else{
      setCantArticulos(false)
    }
  },[contador])


    return (
      <>
      {cantArticulos ? 
        <>
          <col-lg-6>
            <BsFillCartFill to='/carrito' className="botonCarrito" />
            <p className="card-white">{contador} </p>
          </col-lg-6>
        </>
      : null}
      </>
    );
  }
  
  export default CartWidget;