import Item from "./Item"
import React from "react";
import "../estilos/ItemList.css"

const ItemList = ({ items }) =>{
    return(
        <>
            {
                //Recorremos el array para poder mostrarlo
                items.length > 0 
                ?items.map(item => <Item id={item.id} description={item.description} stock={item.stock} imagen={item.imagen[0]} price={item.price} name={item.name} />)
                : <div className="spinner"></div>
            }
            </>
    )
}

export default ItemList;