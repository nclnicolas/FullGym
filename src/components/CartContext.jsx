import { createContext, useState } from "react";


export const CartContext = createContext();

const CartContextProvider = ({children})=>{
    //Estado global
    const [cartList, setCartList] = useState([]);

    //Funcion global, vemos los productos en el carrito
    const addToCart = (item, contar) =>{
        let contador = cartList.find(prod => prod.id === item.id);
        if(contador === undefined){
        setCartList([
            ...cartList,
            {
                idItem: item.id,
                imgItem: item.imagen[0],
                nameItem: item.name,
                priceItem: item.price,
                contarItem: contar
            }
        ]);//Con esto no se pisan los productos al agregarlos al carrito
    }else{
        contador.contarItem += contar;
    }
    }

    //Remover todos los productos del carrito
    const clear = () =>{
        setCartList([]);
    }

    //Remover un solo producto del carrito
    const removeItem = (prodId)=>{
        let remove = cartList.filter(item => item.idItem !== prodId);
        setCartList(remove);
        
    }

    return(
        <CartContext.Provider value={{cartList, addToCart, clear, removeItem}}> 
            {children}
        </CartContext.Provider>
    );
}
export default CartContextProvider;