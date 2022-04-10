import "../estilos/ItemDetail.css"
import ItemCount from "./ItemCount"

export default function ItemDetail({ item }) {

    //Se muestra un alert al agregar los articulos
    const onAdd = (qty) => {
        alert(`${qty} Se agrego al carrito`);
    }

    return (
        <>
            <div className="card">
                <img src={item.imagen} alt="Los Mejores Calzados"></img>
                    <h1>{item.description}</h1>
                    <p className="price">${item.price}</p>
                    <p>Stock:{item.stock }</p>
                    <p><button>Añadir al carro</button></p>
                <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
            </div>


        </>
    );
}