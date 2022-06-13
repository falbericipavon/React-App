import Item from "./Item";

const ItemList = ({productos}) => {
  return(
    <>
        {productos.map((producto, index) =>{
            return(
               <Item producto={producto} key={index} /> 
            )
        })}
  </>
)}

export default ItemList;