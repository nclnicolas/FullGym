import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoePrints, faPerson, faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from "./CartWidget";



const NavBar = () => {
    return (
        <>
        <header>
            <nav className="nav">
            <h1 className="logo-menu"> Free Way </h1><FontAwesomeIcon icon={faShoePrints} className="logo" />
                <ul className="nav__ul">
                    <li className="nav__li"><FontAwesomeIcon icon={faPerson} /><a href="#"> Sobre Nosotros </a></li>
                    <li className="nav__li"><FontAwesomeIcon icon={faCircleQuestion} /><a href="#"> Ayuda </a></li>
                </ul>
                <CartWidget></CartWidget>
            </nav>
        </header>

        
    </>
        

    );
}
export default NavBar;

