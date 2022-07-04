import { createContext, useState} from "react";

export const contexto = createContext();
const { Provider } = contexto;

const CartContext = ({children}) => {
    const [carrito,setCarrito] = useState([])
    const [total,setTotal] = useState(0)
    const [contador,setCont] = useState(0)

    const deleteOneItem =(producto)=>{
        let copiaCarrito = carrito
        if (isInCart(producto.id)) {
            copiaCarrito.map((carrito)=>{
                if (carrito.producto.id === producto.id) {
                    carrito.cantidad=  carrito.cantidad - 1
                    setTotal(total - producto.price)  
                    setCont(contador - 1)
                } 
            })
            setCarrito(copiaCarrito) 
        } else if (producto.cantidad <= 0) {
            removeItem(producto.id, producto.price, producto.cantidad)
        }
    }

    const removeItem =(id, precio, cantidad)=>{
        const newCart = carrito.filter(({ producto }) => producto.id !== id);
        setCarrito(newCart);
        setTotal(total - precio * cantidad)  
        setCont(contador - cantidad)
    }

   
    const addItem = (producto, cantidad) => {
        let copiaCarrito = carrito
        if (isInCart(producto.id)) {
            copiaCarrito.map((carrito)=>{
                if (carrito.producto.id === producto.id) {
                    carrito.cantidad=  carrito.cantidad + cantidad
                    setTotal(total +(producto.price*cantidad))  
                    setCont(contador + cantidad)
                } 
            })
        } else {
            copiaCarrito = [{producto,cantidad}, ...carrito ]
            setTotal(total +(producto.price*cantidad)) 
            setCont(contador + cantidad) 
        }    
        setCarrito(copiaCarrito)          
    }
    const clear = () => {
        setCarrito([])
        setTotal(0)
        setCont(0)
    }

    const isInCart = (id) => {
        return   carrito.some((articulo)=>articulo.producto.id === id)
        
    }


    const valorDelContexto = {
        total : total,
        carrito : carrito,
        removeItem : removeItem,
        deleteOneItem : deleteOneItem,
        addItem : addItem,
        clear : clear,
        contador:contador
    }

    return (
        <Provider value={valorDelContexto}>
            {children}
        </Provider>
    )
}

export default CartContext;