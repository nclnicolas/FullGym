import {useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesUp } from "@fortawesome/free-solid-svg-icons";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";
import 'bootstrap/dist/css/bootstrap.min.css';

//Declaramos la clase y lo que se va a renderizar
export default function ItemCount ({stock, initial, onAdd}) { 
    //Declaramos el estado de la cantidad de items  
    const [count, setCount] = useState(0);
    
    useEffect(() => {
        setCount(initial);
    }, [initial]);
    //Funcion que se ejecuta cuando se hace click en el boton de restar
    const remove = () => {
        if(count > initial){
            setCount(count - 1);
        }
    }
    //Funcion que se ejecuta cuando se hace click en el boton de sumar
    const add = () => {
        if(count < stock){
            setCount(count + 1);
        }
    }
    
    return (
        <div>
            <a onClick={remove}><FontAwesomeIcon icon={faAnglesDown} className="resta" /></a>
            <b className="conteo">{initial}</b>
            <a onClick={add}><FontAwesomeIcon icon={faAnglesUp} className="suma" /></a>
            <button className="btn-carrito">Me lo llevo</button>
        </div>

    );
}
