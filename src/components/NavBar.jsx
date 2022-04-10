import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoePrints, faPerson, faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from "./CartWidget";
import {Link} from "react-router-dom";


const NavBar = () => {
    return (
        <>
        <header>
            <nav className="nav">
            <Link to="/" className="link__logo"><h1 className="logo-menu"> Free Way </h1><FontAwesomeIcon icon={faShoePrints} className="logo" /></Link>
                <ul className="nav__ul">
                    <li className="nav__li"><FontAwesomeIcon icon={faPerson} /><a href="#"> Sobre Nosotros </a></li>
                    <li className="nav__li"><FontAwesomeIcon icon={faCircleQuestion} /><a href="#"> Ayuda </a></li>
                </ul>
                <CartWidget></CartWidget>
            </nav>
            <ul className="nav__ul_marca">
               <Link to="/category/1"><li className="nav__li_marca"><img src="https://w7.pngwing.com/pngs/726/873/png-transparent-nike-swoosh-logo-nike-logo-material-angle-free-logo-design-template-wedding-logo-thumbnail.png" alt="" /></li></Link> 
               <Link to="/category/2"><li className="nav__li_marca"><img src="https://w7.pngwing.com/pngs/873/1015/png-transparent-adidas-icon-sports-brand-movement-sign-sports-shoes-thumbnail.png" alt="" /></li></Link> 
               <Link to="/category/3"><li className="nav__li_marca"><img src="https://w7.pngwing.com/pngs/254/278/png-transparent-cougar-logo-puma-cdr-cdr-text-monochrome-thumbnail.png" alt="" /></li></Link> 
            </ul>
        </header>

        
    </>
        

    );
}
export default NavBar;

