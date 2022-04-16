import { Button } from "bootstrap";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "../estilos/ItemDetail.css"
import "../estilos/ItemList.css"
import { CartContext } from "./CartContext";
import ItemCount from "./ItemCount"

const ItemDetail = ({ item }) =>{

    const [itemCount, setItemCount] = useState(0);
    const test = useContext(CartContext);

    //Se muestra un alert al agregar los articulos
    const onAdd = (qty) => {
        alert(`${qty} cantidad de ${item.description} se han agregado al carrito`);
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
                    : <Link to="/cart"><button>Ir al carrito</button></Link>
                }
            </div>
            :<div className="spinner"></div>
}

        </>
    );
}
export default ItemDetail;