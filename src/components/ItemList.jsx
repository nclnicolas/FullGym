import Item from "./Item"
import React from "react";

const ItemList = ({ items }) =>{
    return(
        <>
            {
                //Recorremos el array para poder mostrarlo
                items.length > 0 
                ?items.map(item => <Item id={item.id} description={item.description} stock={item.stock} imagen={item.imagen[0]} price={item.price} name={item.name} />)
                : <div className="text-ItemList"> Cargando Productos...</div>
            }
            </>
    )
}

export default ItemList;