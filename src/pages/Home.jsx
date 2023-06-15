import '../pages/pagesStyles/home.css';
import diamondMain from'../assets/decorative-green-diamond.svg';
import circuleYellowMain from '../assets/decorative-yellow-circle.svg';
import iconIphone from '../assets/logotipo-de-apple.png';
import trianguloNegro from '../assets/triangulo-negro-flecha-derecha.png'
import logoIphoneBttn from '../assets/logotipo-de-apple.png';
import blueCircle from '../assets/decorative-blue-circle.svg'
import iphoneHome from '../assets/header-iphone.png'
import iconGrup from '../assets/grupo (2).png'
import siluetaSpacial from '../assets/silueta-de-nave-espacial-pequena.png';
import iconLabel from '../assets/codigo (1).png';
import iconConfiguration from '../assets/configuraciones (2).png';
import globoText from '../assets/globos-de-texto (2).png'

function Home() {

    return(
        <>
            <div id="page_main">
                <div>
                    <div className="decorative_main">
                        <img className="diamond_main" src={diamondMain} alt="Decorative Green"/>
                        <img className="circule_yellow_main" src={circuleYellowMain} alt="Circule yellow"/>
                    </div>
                    <div className="presentation">
                        <h3>Mobile App Landing Page</h3>
                        <p>Star focusing on your goals and get more things done with Sync mobile application. Its<br/>the first app to hamess the power of social connections to the help you stay focused and get <br/>organized</p>
                    </div>  
                    <ul className="buttons_main">
                        <li className="icon_iphone_li"><button className="download_iphone"><img className="icon_iphone_main" src={logoIphoneBttn} alt="Apple Image" />DOWNLOAD</button></li>
                        <li className="icon_plastore_li"><button className="download_android"><img className="icon_playstore_main" src={trianguloNegro} alt="Play Store"/>DOWNLOAD</button></li>
                    </ul>
                    <div className="iphone_and_circule">
                        <img className="circule_blue_main" src={blueCircle} alt="Blue Circule"/>
                        <img className="iphone_main" src={iphoneHome} alt="Imagen Iphone"/>
                    </div>
                    <div>
                        <ul className="icons_generales">
                            <li className="list_grup"><img className="icon_grup_main" src={iconGrup} alt="Grup"/>Identify Goals</li>
                            <li className="lis_label"><img className="icon_label_main" src={iconLabel} alt="Label"/>Situation Analysis</li>
                            <li className="lis_settings"><img className="icon_settings_main" src={iconConfiguration} alt="Settings"/>Tasks Settings</li>
                            <li className="lis_balloon"><img className="icon_balloon_main" src={globoText} alt="Balloon"/>Social Interaction</li>
                            <li className="lis_space"><img className="icon_space_main" src={siluetaSpacial} alt="Space"/>Get Things Done</li>
                        </ul>
                    </div>
                </div>
            </div>
        </> 
    )

}

export default Home;