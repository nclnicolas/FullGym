import { collection, increment, serverTimestamp, updateDoc } from "firebase/firestore";
import { useContext } from "react";
import { Link } from "react-router-dom";
import "../estilos/Cart.css"
import { CartContext } from "./CartContext";
import { doc, setDoc } from "firebase/firestore";
import db from "../utiles/FirebaseConfig";

const Cart = () => {
    const test = useContext(CartContext);
    
    const checkout = ()=>{

        //Actualizamos el stock
        test.cartList.forEach(async (item) => {
            const itemRef = doc(db, "products", item.idItem);
            await updateDoc(itemRef, {
                stock: increment(-item.contarItem)
            });
        });

        //Generamos la orden de compra
        let order = {
            buyer:{
                name:"Juan Roman Riquelme",
                email:"roman@riquelme.com",
                phone:"123456789"
            },
            date:serverTimestamp(),
            items: test.cartList.map(item => ({
                id: item.idItem,
                name: item.nameItem,
                cantidad: item.contarItem,
                price: item.priceItem,
                imagen: item.imgItem
            })) ,
            total: test.totalCompra() - parseInt(test.descuento())
        }

        //Mostramos la orden de compra
        const createOrder = async ()=>{
            const newOrderRef = doc(collection(db, "orders"));
            await setDoc(newOrderRef, order);
            return newOrderRef;
        }
        createOrder()
        .then(result => alert("Tu compra se realizo con exito\n Tu id es "+ result.id + " \nMuchas Gracias!!!"))
        .catch(err => console.log(err));
        test.clear();
    }


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
                    <button onClick={checkout} className="btn-fin-compra">Finalizar Compra</button>
                </div>
            }






        </>
    );
}
export default Cart;