import { useContext } from "react";
import { Link } from "react-router-dom";
import "../estilos/Cart.css"
import { CartContext } from "./CartContext";

const Cart = () => {
    const test = useContext(CartContext);
    console.log("Desde cart", test);


    return (
        <>
            <div className="cart">
                <h1>Tu carrito de compras</h1>
                <Link to="/"><button>Seguir comprando</button></Link>

                {
                    (test.cartList.length > 0)
                    ?<button className="limp-carro" onClick={test.clear}>Limpiar Carrito</button>
                    :<h1>Agregue productos al carrito</h1>
                }
            </div>

            {
                test.cartList.length > 0 && 
                    test.cartList.map(item =>
                        <div className="cart-products">
                            <img src={item.imgItem}></img>
                            <h1>{item.name}</h1>
                            <p className="title-products">Precio: ${item.priceItem}</p>
                            <p className="title-products">Cantidad: {item.contarItem}</p>
                            <p className="title-products">SubTotal:$ {test.totalItem(item.idItem)}</p>
                            <p><button onClick={() => test.removeItem(item.idItem)}>Eliminar Producto</button></p>
                        </div>
                        
                    )
            }

            {
                test.cartList.length > 0 &&
                <div className="compra-final">
                    <h4>Mi Compra</h4>
                    <p className="title-products">Descuento Bienvenida: ${parseInt(test.descuento())}</p>
                    <p className="title-products">Subtotal de la Compra: ${test.totalCompra()}</p> 
                    <p className="title-products">Total Con Descuento: ${test.totalCompra() - parseInt(test.descuento())}</p>
                </div>
            }






        </>
    );
}
export default Cart;