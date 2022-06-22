import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { productosData } from './productosData';
import { useParams } from 'react-router-dom';


const ItemDetailContainer = () => {
  const [productos, setProductos] = useState([]);
  const [irAlCarrito, setIrAlCarrito] = useState(false);
  const { prodId } = useParams();
    
  useEffect(() => {

    const getProductos = new Promise((resolve) => {
      setTimeout(() => {
        resolve(productosData);
      }, 1000);
    });

    getProductos.then((res) => {
      prodId && setProductos(res.find(producto => producto.id === prodId));
    });
  }, [prodId]);

  const onAdd = (cantidad) => {
    console.log({...productos, cantidad: cantidad})
    setIrAlCarrito(true);
  };



    return(
      <div className="container mt-10 text-center">
        <h2 className="text-h">Detalle del producto</h2>
        <div className="pt-5">
            <ItemDetail producto={productos} onAdd={onAdd} irAlCarrito={irAlCarrito}/>
        </div>
      </div>
  )}
  
  export default ItemDetailContainer;