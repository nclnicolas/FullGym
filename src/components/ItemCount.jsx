import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesUp } from "@fortawesome/free-solid-svg-icons";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";
import 'bootstrap/dist/css/bootstrap.min.css';

const ItemCount = ({stock, initial, onAdd}) => {
    const [rate, setRate] = useState(0);

    useEffect(()=>{
        setRate(initial);
    },[initial]);

    const increment = () => {
        if (rate < stock) {
            setRate(rate + 1);
        }
    }
    const decrease = () => {
        if (rate > initial) {
            setRate(rate - 1);
        }
    }

    return (
        <div>
            <a onClick={decrease}><FontAwesomeIcon icon={faAnglesDown} className="resta" /></a>
            <b className="conteo">{initial}</b>
            <a onClick={increment}><FontAwesomeIcon icon={faAnglesUp} className="suma" /></a>
            
        </div>

    );
}
export default ItemCount;
