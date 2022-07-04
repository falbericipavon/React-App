import Image from 'react-bootstrap/Image';
import ItemCount from './ItemCount';
import {useState, useContext} from "react";
import { Link } from 'react-router-dom';
import { contexto } from './CartContext';

const ItemDetail = ({producto}) => {

    const resultado = useContext(contexto);
    const addItem = resultado.addItem;
    const [cantArticulos, setItemContador] = useState(false);
    const onAdd = (unidadesContador) => {
        if(unidadesContador !== undefined){
            setItemContador(unidadesContador)
        }
    };
    
    return(
      <>
      <section className="single_product_details_area section_padding_0_100">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-3">
                        <div className="single_product_thumb">
                            <div id="product_details_slider" className="carousel slide" data-ride="carousel">

                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <Image className="d-block w-100" src={producto.picture} alt="First slide" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-5">
                        <div className="single_product_desc">
                            <h5 className="title">{producto.title}</h5>
                            <p className="card-text-principal">Categoria: {producto.categoria}</p>
                            <p className="card-text-principal">Detalle: {producto.detalle}</p>
                            {cantArticulos ? (
                                    <>
                                        <div className="cart clearfix mb-50 d-block text-center">
                                            <h5 className="card-text-detail-otro">{"Agregaste al carrito " + cantArticulos}</h5>
                                            <h5 className="card-text-detail-otro">{"Total: $  " + cantArticulos*producto.price}</h5>
                                        </div>
                                        <div className="cart clearfix d-flex">
                                            <div className="col-6 mt-4 mb-50">
                                                <Link className="btn cart-opciones d-block" to="/" onClick={()=>addItem(producto, cantArticulos)}> Seguir comprando </Link>
                                            </div>
                                            <div className="col-6 mt-4 mb-50">
                                                <Link className="btn cart-opciones d-block" to="/carrito" onClick={()=>addItem(producto, cantArticulos)}> Ver carrito </Link>
                                            </div>
                                        </div>
                                    </>
                                    ) : (
                                    <>
                                        <p className="card-text card-text-precio">Precio: $ {producto.price}</p>
                                        <div className="cart clearfix mt-4 mb-50 d-flex">
                                            <ItemCount initial={1} stock={producto.stock} onAdd={onAdd}/>
                                        </div>
                                    </>
                                    )}
                        </div>
                    </div>

                    <div className="col-12 col-md-4">
                        <div className="single_product_desc">
                            <p className="card-text-detail-otro">Llega gratis mañana</p>
                            <p className="card-text-detail pb-4">Comprando dentro de las próximas 9 horas</p>
                            <p className="card-text-detail-otro">Retiralo gratis en nuestro local</p>
                            <p className="card-text-detail pb-4">Comprando antes de las 23hs</p>
                            <h6 className="widget-title">Stock disponible: {producto.stock}</h6>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </>
  )}
  
  export default ItemDetail;