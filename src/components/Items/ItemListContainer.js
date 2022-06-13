import React, { useEffect, useState } from 'react';
import  ItemList  from './ItemList';
import { productosData } from './productosData';
import CardGroup from 'react-bootstrap/CardGroup';
import { useParams } from 'react-router-dom';


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
      setProductos(res);
    });
  }, [catId] )
  return (
   <>
     <h1>Lista de items</h1>
     <CardGroup className="pt-5 pb-5">
         <ItemList productos={productos} />
     </CardGroup>
   </>
  );
}

export default ItemListContainer