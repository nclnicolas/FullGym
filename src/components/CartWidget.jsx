import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import 'bootstrap/dist/css/bootstrap.min.css';

const CartWidget = () => {
    return (
        <button type="button" class="btn position-relative">
            <FontAwesomeIcon icon={faCartShopping} className="logo-carro" />
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">
                4
                <span class="visually-hidden">unread messages</span>
            </span>
        </button>
    );
}

export default CartWidget;