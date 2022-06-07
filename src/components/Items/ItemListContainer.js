import ItemCount from "./ItemCount";

const ItemListContainer = ({onAdd}) =>{
    return (
       <>
         <h1>Lista de items</h1> 
         <div className="container mt-5">
            <p>Camisa</p>
            <ItemCount stock="5" onAdd={onAdd}/>
         </div>
       </>
      );
}
export default ItemListContainer