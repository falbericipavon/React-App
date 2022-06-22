import React, { useEffect, useState } from 'react';
import  ItemList  from './ItemList';
import { productosData } from './productosData';
import CardGroup from 'react-bootstrap/CardGroup';
import { useParams } from 'react-router-dom';
import Categorias from "../Categorias";

const ItemListContainer = () =>{
  const [productos, setProductos] = useState([]);

  const { catId } = useParams();

  useEffect(() => {
    const getProductos = new Promise((resolve) => {
      setTimeout(() => {
        resolve(productosData);
      }, 1000);
    });

    getProductos.then((res) => {
      catId ? 
      setProductos(res.filter(producto => producto.categoria === catId))
      : setProductos(res);
    });
  }, [catId] )

  return (
    <>
      <div className="container mt-10 text-center">
        <h1 className="">Nuestros Productos</h1>
            <Categorias />
            <CardGroup className="pt-5 pb-5">
                <ItemList productos={productos} />
            </CardGroup>
      </div>
    </>
  )
}

export default ItemListContainer;