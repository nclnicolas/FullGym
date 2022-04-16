import { useContext } from "react";
import { Link } from "react-router-dom";
import "../estilos/Cart.css"
import { CartContext } from "./CartContext";

const Cart = () => {
    const test = useContext(CartContext);
    return (
        <>
            <div className="cart">
                <h1>Tu carrito de compras</h1>
                <Link to="/"><button>Seguir comprando</button></Link>
                <button className="limp-carro" onClick={test.clear}>Limpiar Carrito</button>                
            </div>
            
            {
                test.cartList.length > 0 && (
                    test.cartList.map(item =>
                        <div className="cart-products">
                            <img src={item.imgItem}></img>
                            <h1>{item.name}</h1>
                            <p className="title-products">Precio: ${item.priceItem}</p>
                            <p className="title-products">Cantidad: {item.contarItem}</p>
                            <p className="title-products">SubTotal: ${(item.priceItem * item.contarItem)}</p>
                            <p><button onClick={() => test.removeItem(item.idItem)}>Eliminar Producto</button></p>
                        </div>
                    )
                )
            }

        </>
    );
}
export default Cart;