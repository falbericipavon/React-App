import { useState } from 'react';

const ItemCount = ({stock, initial, onAdd}) => {

  const [contador, setNumber] = useState(initial);

  const incrementar = () =>{
    if(contador<stock){
      setNumber(contador + 1)
    }
  };

  const disminuir = () => {
    if(contador>0){
      setNumber (contador -1)
    }
  };

  const confirmar = () => {
    setNumber(initial)
    onAdd(contador)
  };

  return (
    <>
    <div className="quantity">
      <div className="border-green" >
        <div className="row pt-2">
          <div className="col-2"><button className="btn-count-neg" onClick={disminuir}>-</button></div>
          <div className="col-2"><p>{contador}</p></div>
          <div className="col-2"><button className="btn-count" onClick={incrementar}>+</button></div>
          <div className="col-6"><button disabled={contador ===0} className="btn cart-submit d-block" onClick={confirmar}>Comprar</button></div>
        </div> 
      </div>
    </div>
      
    </>
  );
}

export default ItemCount;