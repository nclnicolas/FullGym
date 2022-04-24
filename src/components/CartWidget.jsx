import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext } from "react";
import { CartContext } from "./CartContext";

const CartWidget = () => {
    const test = useContext(CartContext);
    
    
    return (
        <Link to="/cart">
            <button type="button" className="btn position-relative">
                <FontAwesomeIcon icon={faCartShopping} className="logo-carro" />
                <span className="span-logo translate-middle badge rounded-pill bg-primary">
                    {test.calcItem()}
                    <span className="visually-hidden">unread messages</span>
                </span>
            </button>
        </Link>
    );
}
/* position-absolute top-50 start-50 translate-middle badge rounded-pill bg-primary */
export default CartWidget;