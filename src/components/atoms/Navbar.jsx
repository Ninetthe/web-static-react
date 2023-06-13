

import logoNavbar from '../../assets/logo_navbar.png'
function Navbar() {
    return(
        <>
            <NavbarContainer>
                <img src={'logo_navbar.png'} alt="Logo"/>
                    <div>
                        <ul class="ul_navbar">
                            <li><a href="">DESCRIPTION</a></li>
                            <li><a href="">FEATURES</a></li>
                            <li><a href="">SCREENS</a></li>
                            <li><a href="">EXTRA</a></li>
                            <li><a href="https://factoriaf5.org/" target="_blank"></a><button class="button_nav">DOWNLOAD</button></li>
                        </ul>
                    </div>
        </NavbarContainer>
        </>

    )

}
export default Navbar;

