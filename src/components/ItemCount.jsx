import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesUp } from "@fortawesome/free-solid-svg-icons";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";
import 'bootstrap/dist/css/bootstrap.min.css';

const ItemCount = () => {
    const [rate, setRate] = useState(1);
    const increment = () => {
        if (rate < 5) {
            setRate(rate + 1);
        }
    }
    const decrease = () => {
        if (rate > 1) {
            setRate(rate - 1);
        }
    }

    return (
        <div>
            <a onClick={decrease}><FontAwesomeIcon icon={faAnglesDown} className="resta" /></a>
            <b className="conteo">{rate}</b>
            <a onClick={increment}><FontAwesomeIcon icon={faAnglesUp} className="suma" /></a>
            <button className="btn-carrito">Me lo llevo</button>
        </div>

    );
}
export default ItemCount;