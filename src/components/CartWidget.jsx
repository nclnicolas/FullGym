import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import 'bootstrap/dist/css/bootstrap.min.css';

const CartWidget = () => {
    return (
        <button type="button" className="btn position-relative">
            <FontAwesomeIcon icon={faCartShopping} className="logo-carro" />
            <span className="span-logo translate-middle badge rounded-pill bg-primary">
                4
                <span className="visually-hidden">unread messages</span>
            </span>
        </button>
    );
}
/* position-absolute top-50 start-50 translate-middle badge rounded-pill bg-primary */
export default CartWidget;