import { Link } from "react-router-dom";
import LogoNavbar from '../assets/logo_navbar.png';
import "./navbar.css"
import Buttons from "./atoms/Buttons";


function Navbar() {
    return(

            <>
                <nav className="NavbarContainer">
                    <img src={LogoNavbar } alt="Logo" />
                    <ul className="ul_navbar">
                        <Link to="/"> <li></li> </Link>
                        <Link to="/description"> <li>DESCRIPTION</li> </Link>
                        <Link to="/Features"> <li>FEATURES</li> </Link>
                        <Link to="/screens"> <li>SCREENS</li> </Link>
                        <Link to="/Extra"> <li>EXRTRA</li> </Link>
                        </ul>
                </nav>
            </>
        )
    
    }

export default Navbar;

