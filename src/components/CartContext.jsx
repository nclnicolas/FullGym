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
                imgItem: item.imagen,
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

    //Total del carrito
    const totalItem = (idItem) => {
        let total = cartList.map(item => item.idItem).indexOf(idItem);
        return cartList[total].priceItem * cartList[total].contarItem;
    }

    //Subtotal de la compra
    const subTotal = () => {
    let subCompra = cartList.map(item => totalItem(item.idItem));
    return subCompra.reduce((prevValue, currValue) => prevValue + currValue);
    }

    //Impuesto del IVA
    const descuento = () =>{
        return subTotal() * 0.1;
        
    }

    //Total de la compra
    const totalCompra = () =>{
        return subTotal();
    }

    //Calculo de item en el carrito 
    const calcItem = () =>{
        let calc = cartList.map(item => item.contarItem);
        return calc.reduce(((prevValue, currValue) => prevValue + currValue), 0);
    }



    return(
        <CartContext.Provider value={{
            cartList, 
            addToCart, 
            clear, 
            removeItem, 
            totalItem,
            subTotal,
            descuento,
            totalCompra,
            calcItem}}> 
            {children}
        </CartContext.Provider>
    );
}
export default CartContextProvider;