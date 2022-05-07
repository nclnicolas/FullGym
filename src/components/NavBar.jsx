import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKiwiBird, faPerson, faCircleQuestion, faBars } from "@fortawesome/free-solid-svg-icons";
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from "./CartWidget";
import {Link} from "react-router-dom";
import { useState } from "react";


const NavBar = () => {

    const [showMenu, setShowMenu] = useState(true);
    

    return (
        <>

        <header>
            <Link to="/" className="link__logo"><h1>Bird</h1><FontAwesomeIcon icon={faKiwiBird} className="logo" /><CartWidget></CartWidget></Link>
            <nav>
            
            <div className="hiden">
            <FontAwesomeIcon icon={faBars} onClick={() => setShowMenu(showMenu ? false : true)}/>Menu
            </div>
            <ul className="lista-responsive">
                <li><FontAwesomeIcon icon={faPerson} /><a href="#">Sobre Nosotros</a></li>
                <li><FontAwesomeIcon icon={faCircleQuestion} /><a href="#">Ayuda</a></li>
            </ul>
            {showMenu &&(
            <ul className="lista">
                <li><a href="#">Sobre Nosotros</a></li>
                <li><a href="#">Ayuda</a></li>
            </ul>
            )}
        </nav>
        </header>
        <ul className="nav__ul_marca">
               <Link to="/category/1"><li className="nav__li_marca"><img src="https://w7.pngwing.com/pngs/726/873/png-transparent-nike-swoosh-logo-nike-logo-material-angle-free-logo-design-template-wedding-logo-thumbnail.png" alt="" /></li></Link> 
               <Link to="/category/2"><li className="nav__li_marca"><img src="https://w7.pngwing.com/pngs/873/1015/png-transparent-adidas-icon-sports-brand-movement-sign-sports-shoes-thumbnail.png" alt="" /></li></Link> 
               <Link to="/category/3"><li className="nav__li_marca"><img src="https://w7.pngwing.com/pngs/254/278/png-transparent-cougar-logo-puma-cdr-cdr-text-monochrome-thumbnail.png" alt="" /></li></Link> 
            </ul>
    </>
        

    );
}
export default NavBar;

