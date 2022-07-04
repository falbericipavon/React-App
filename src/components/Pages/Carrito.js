import React from 'react';
import { useContext } from "react";
import { contexto } from '../Items/CartContext';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';

const Carrito = () =>{
    const resultado = useContext(contexto)
    console.log(resultado)
    const carrito = resultado.carrito
    const removeItem = resultado.removeItem
    const clear = resultado.clear
    const contador = resultado.contador

    if (contador>0) {
        return (
            <div className="container-carrito  mt-10 mb-5">
                <p>Index / Carrito</p>
                <h2>Carrito</h2>
                {carrito.map(producto => (
                        <div className="row" key={producto.producto.id}>
                            <div className="col-12 col-md-2">
                                <div className="single_product_t">
                                    <div id="product_details_slider" className="carousel slide" data-ride="carousel">
                                        <div className="carousel-inner">
                                            <div className="carousel-item active">
                                                <div className="carritoItem">
                                                    <Image className="d-block w-100" src={producto.producto.picture} alt="First slide" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-3">
                                    <div className="single_product_desc">
                                        <h5 className="title mt-2">{producto.producto.title}</h5>
                                        <p className="single_product_text">Categoria: {producto.producto.categoria}</p>
                                        <p className="single_product_text">Precio: $ {producto.producto.price}</p>
                                    </div>
                            </div>
                            <div className="col-12 col-md-3">
                                    <div className="single_product_desc">
                                        <h6 className="title-cant text-center mt-2">CANTIDAD</h6>
                                        <p className="single_product_text text-center">{producto.cantidad} unidades</p>
                                    </div>
                            </div>
                            <div className="col-12 col-md-3">
                                    <div className="single_product_desc text-center">
                                        <h6 className="title-cant text-center mt-2">TOTAL PRODUCTO</h6>
                                        <p className="card-text single_product_total">${producto.producto.price * producto.cantidad}</p>
                                    </div>
                            </div>
                            <div className="single_product_desc col-12 col-md-1">
                                    <div className="cart">
                                        <button className="btn-delete" onClick={()=>removeItem(producto.producto.id, producto.producto.price, producto.cantidad)}>X</button>
                                    </div>
                            </div>
                        </div>
                ))}
                    <div className="row row-decoration">
                        <div className="col-12 col-md-6">
                        </div>
                        <div className="col-12 col-md-2">
                            <p className="card-total">Total: $ {resultado.total}</p>
                        </div>
                        <div className="col-12 single_product_desc col-md-2">
                            <div className="cart">
                                <button className="btn cart-submit d-block">Finalizar compra</button>
                            </div>
                        </div> 
                        <div className="col-12 single_product_desc col-md-2">
                            <div className="cart">
                                <button className="btn-vaciar" onClick={clear}>Vaciar carrito</button>
                            </div>
                        </div>              
                    </div>
                </div>
        )
      } else {
          return (
                <div className="container single_product_desc text-center mt-10">
                    <h2 className='row-decoration-down'>Carrito</h2>
                    <p> Su carrito se encuentra vacio </p>
                    <div className="cart text-center">
                    <Link to="/"><button className="btn cart-comprar d-block">Ir a comprar</button></Link> 
                    </div>
                </div>
          )
        }
  }

export default Carrito;