import { Button } from "bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../estilos/ItemDetail.css"
import ItemCount from "./ItemCount"

const ItemDetail = ({ item }) =>{

    const [itemCount, setItemCount] = useState(0);

    //Se muestra un alert al agregar los articulos
    const onAdd = (qty) => {
        alert(`${qty} Se agrego al carrito`);
        setItemCount(qty);
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
            :<p>Cargando</p>
}

        </>
    );
}
export default ItemDetail;