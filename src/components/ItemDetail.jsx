import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "../estilos/ItemDetail.css"
import "../estilos/ItemList.css"
import { CartContext } from "./CartContext";
import ItemCount from "./ItemCount"
import swal from "sweetalert";



const ItemDetail = ({ item }) => {

    const [itemCount, setItemCount] = useState(0);
    const [visible, setVisible] = useState(false);
    const test = useContext(CartContext);

    //Se muestra un alert al agregar los articulos
    const onAdd = (qty) => {
        swal({
            title: `${item.description}`,
            text: `${qty} cantidad se agrego al carrito`,
            icon: "success",
            button: "OK",
            timer: "5000"
        });
        setItemCount(qty);
        test.addToCart(item, qty);
    }

    return (
        <>
            {
                item && item.imagen
                    ?
                    <div className="card">
                        <img src={item.imagen} alt="Los Mejores Calzados"></img>
                        <h1>{item.description}</h1>
                        <p className="price">${item.price}</p>
                        <p>Stock:{item.stock}</p>
                        {
                            itemCount === 0
                                ? <ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd} />
                                : <Link to="/cart"><button>Ir al carrito</button ></Link>
                        }

                    </div>
                    : <div className="spinner"></div>
            }

        </>
    );
}
export default ItemDetail;